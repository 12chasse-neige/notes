"""TOV integration for a toy quark-like equation of state P = K * eps^2.

Solves the Tolman-Oppenheimer-Volkoff stellar-structure equations for two
central densities (models A and B), locates the stellar surface with a
terminal event on eps = 0 and interpolates R from the dense output,
reports M, M_phys/M_sun and the compactness, checks the interior and
causality conditions, prints a convergence table, and saves
tov-profiles.png / tov-profiles.csv next to this script.

Unit convention (geometrised, G = c = 1):
    length            [km]
    geometric mass m* [km]        (M_phys = m*/ (G M_sun / c^2))
    energy density eps[km^-2]
    pressure P        [km^-2]
    eos               P = K eps^2,  K = 140 km^2
Mass density conversion (cgs -> geometric):
    eps[km^-2] = 1e6 * G * rho_E / c^2  with rho_E in kg/m^3
               = 7.426160e-19 * rho_E[g/cm^3].

Structurals actually integrated (eps and m* directly, regularised form;
the hint of part (c) -- it avoids the eps/P round trip and the 0/0 at the
centre):
    dm*/dr = 4 pi r^2 eps
    deps/dr = -(1 + K eps) (m* + 4 pi K eps^2 r^3) / (2 K r (r - 2 m*))
which is exactly dP/dr = -(eps+P)(m*+4 pi r^3 P)/(r(r-2m*)) with P=K eps^2.

Run:  python tov.py
"""

import csv
import os

import numpy as np
from scipy.integrate import solve_ivp

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

# ----------------------------------------------------------------------------
# constants and unit conversion
# ----------------------------------------------------------------------------
G_SI = 6.67430e-11          # m^3 kg^-1 s^-2
C_SI = 2.99792458e8         # m s^-1
GMSUN_KM = 1.476670         # G M_sun / c^2 in km
K = 140.0                   # km^2,  P = K eps^2

# eps[km^-2] = 1e6 * (G rho / c^2) for rho in kg/m^3;  1 g/cm^3 = 1000 kg/m^3
EPS_PER_RHO = 1.0e6 * G_SI / C_SI**2 * 1.0e3     # km^-2 per (g/cm^3)

RHO_C = {"A": 2.5e15, "B": 2.5e16}               # g/cm^3
EPS_MAX = 1.0 / (2.0 * K)                        # causality limit, km^-2

HERE = os.path.dirname(os.path.abspath(__file__))
RTOL_SET = (1e-8, 1e-10, 1e-12)
R0_SET = (1e-4, 1e-6, 1e-8)


def centre_values(rho_e, r0):
    """Central eps, P and the series-expanded values at the starting radius r0."""
    eps_c = EPS_PER_RHO * rho_e
    p_c = K * eps_c**2
    m0 = 4.0 * np.pi / 3.0 * eps_c * r0**3
    eps0 = eps_c - np.pi * r0**2 * (eps_c + p_c) * (eps_c / 3.0 + p_c) / (K * eps_c)
    return eps_c, p_c, m0, eps0


def rhs(r, y):
    """TOV right-hand side for y = [m*, eps] (regularised eps equation)."""
    m, eps = y
    eps = max(eps, 0.0)
    dm = 4.0 * np.pi * r**2 * eps
    deps = (-(1.0 + K * eps) * (m + 4.0 * np.pi * K * eps**2 * r**3)
            / (2.0 * K * r * (r - 2.0 * m)))
    return [dm, deps]


def surface_event(r, y):
    """Stellar surface: eps crosses zero downwards (terminal)."""
    return y[1]


surface_event.terminal = True
surface_event.direction = -1


def integrate(rho_e, rtol=1e-10, r0=1e-6):
    """Integrate one model; return R, M and the dense output."""
    eps_c, p_c, m0, eps0 = centre_values(rho_e, r0)
    sol = solve_ivp(rhs, (r0, 100.0), [m0, eps0], method="DOP853",
                    rtol=rtol, atol=[1e-16, 1e-22],
                    events=surface_event, dense_output=True)
    if sol.t_events[0].size == 0:
        raise RuntimeError("no surface found")
    R = float(sol.t_events[0][0])
    M = float(sol.sol(R)[0])          # interpolate m* at the event radius
    return {"R": R, "M": M, "sol": sol, "eps_c": eps_c, "p_c": p_c, "r0": r0}


def profiles(res, n=400, r_start=None):
    """Sample eps, P and m* on a uniform grid from just off the centre to R."""
    r0 = res["r0"] if r_start is None else r_start
    r = np.linspace(r0, res["R"], n)
    y = res["sol"].sol(r)
    m, eps = y[0], np.maximum(y[1], 0.0)
    return r, eps, K * eps**2, m


def checks(res):
    """Interior well-behavedness and causality diagnostics."""
    r, eps, P, m = profiles(res, n=4001)
    gap = r - 2.0 * m
    deps = (-(1.0 + K * eps) * (m + 4.0 * np.pi * K * eps**2 * r**3)
            / (2.0 * K * r * gap))
    dPdr = 2.0 * K * eps * deps
    cs2 = 2.0 * K * eps
    # The surface point itself has eps = 0 and hence dP/dr = 0; the
    # monotonicity statement is about the interior, so leave it out.
    interior = r < res["R"] * (1.0 - 1e-12)
    ok_gap = bool(np.min(gap) > 0.0)
    ok_mono = bool(np.max(dPdr[interior]) < 0.0
                   and np.min(np.diff(m)) > 0.0
                   and np.all(np.diff(P[:-1]) < 0.0))
    # radius where causality first fails (cs2 = 1), if any
    r_causal = None
    if np.max(cs2) > 1.0 and np.any(cs2 < 1.0):
        r_causal = float(np.interp(1.0, cs2[::-1], r[::-1]))
    return {
        "min_gap": float(np.min(gap)),
        "r_at_min_gap": float(r[int(np.argmin(gap))]),
        "min_gap_rel": float(np.min(gap / r)),
        "r_at_min_gap_rel": float(r[int(np.argmin(gap / r))]),
        "gap_surface": float(res["R"] - 2.0 * res["M"]),
        "max_dPdr": float(np.max(dPdr[interior])),
        "min_dm": float(np.min(np.diff(m))),
        "ok_gap": ok_gap,
        "ok_mono": ok_mono,
        "cs2_max": float(np.max(cs2)),
        "cs2_max_centre": float(2.0 * K * res["eps_c"]),
        "cs2_le_1": bool(np.max(cs2) <= 1.0),
        "r_causal": r_causal,
    }


def main():
    print("=" * 78)
    print("TOV  P = K eps^2,  K = 140 km^2,  G = c = 1,  [length] = km")
    print("=" * 78)
    print(f"conversion: eps[km^-2] = 1e6*G*rho_E[kg/m^3]/c^2 "
          f"= {EPS_PER_RHO:.7e} * rho_E[g/cm^3]")
    print()

    # ---------------- central values ----------------
    print("central values")
    print(f"{'model':<7}{'rho_E,c [g/cm^3]':>20}{'eps_c [km^-2]':>20}{'P_c [km^-2]':>20}")
    for name, rho in RHO_C.items():
        eps_c, p_c, _, _ = centre_values(rho, 1e-6)
        print(f"{name:<7}{rho:>20.3e}{eps_c:>20.10e}{p_c:>20.10e}")
    print()

    # ---------------- production runs ----------------
    results = {}
    for name, rho in RHO_C.items():
        res = integrate(rho, rtol=1e-10, r0=1e-6)
        res["model"] = name
        res["rho_e"] = rho
        res["M_sun"] = res["M"] / GMSUN_KM
        res["compactness"] = res["M"] / res["R"]
        res["chk"] = checks(res)
        results[name] = res

    print("stellar models (rtol = 1e-10, r0 = 1e-6 km)")
    hdr = (f"{'model':<7}{'R [km]':>16}{'M [km]':>16}{'M/M_sun':>16}"
           f"{'M/R':>14}")
    print(hdr)
    print("-" * len(hdr))
    for name, res in results.items():
        print(f"{name:<7}{res['R']:>16.10f}{res['M']:>16.10f}"
              f"{res['M_sun']:>16.10f}{res['compactness']:>14.10f}")
    print()

    # ---------------- interior / causality checks ----------------
    print("interior check (r - 2 m* > 0 and P strictly decreasing everywhere)")
    print(f"{'model':<7}{'min(r-2m*) [km]':>20}{'at r [km]':>12}"
          f"{'min (r-2m*)/r':>16}{'at r [km]':>12}{'R-2M [km]':>12}"
          f"{'max dP/dr':>14}{'ok':>6}")
    for name, res in results.items():
        c = res["chk"]
        print(f"{name:<7}{c['min_gap']:>20.10e}{c['r_at_min_gap']:>12.2e}"
              f"{c['min_gap_rel']:>16.8f}{c['r_at_min_gap_rel']:>12.6f}"
              f"{c['gap_surface']:>12.6f}{c['max_dPdr']:>14.6e}"
              f"{str(c['ok_gap'] and c['ok_mono']):>6}")
    print("  dP/dr = 2 K eps deps/dr < 0 and dm*/dr = 4 pi r^2 eps > 0 everywhere;")
    print("  min(r-2m*) sits at the centre, where m* ~ r^3 makes r-2m* -> r, so")
    print("  the binding margin is the surface value R-2M (also listed above).")

    print()
    print("causality: c_s^2 = dP/deps = 2 K eps")
    print(f"{'model':<7}{'max c_s^2':>14}{'<= 1 ?':>10}{'r(c_s^2=1) [km]':>20}")
    for name, res in results.items():
        c = res["chk"]
        rc = "-" if c["r_causal"] is None else f"{c['r_causal']:.6f}"
        print(f"{name:<7}{c['cs2_max']:>14.6f}{str(c['cs2_le_1']):>10}{rc:>20}")
    print(f"  eps_max = 1/(2K) = {EPS_MAX:.7e} km^-2")
    print(f"  -> rho_E,max = {EPS_MAX / EPS_PER_RHO:.6e} g/cm^3 "
          f"({EPS_MAX / EPS_PER_RHO:.3e})")
    print()

    # ---------------- convergence table ----------------
    ref = {}
    for name, rho in RHO_C.items():
        ref[name] = integrate(rho, rtol=RTOL_SET[-1], r0=R0_SET[-1])
    runs = {}
    print(f"convergence (reference: rtol = {RTOL_SET[-1]:.0e}, "
          f"r0 = {R0_SET[-1]:.0e} km)")
    hdr = (f"{'model':<7}{'rtol':>8}{'r0 [km]':>10}{'R [km]':>18}"
           f"{'dR/R':>12}{'M [km]':>18}{'dM/M':>12}")
    print(hdr)
    print("-" * len(hdr))
    for name, rho in RHO_C.items():
        for rtol in RTOL_SET:
            for r0 in R0_SET:
                r = integrate(rho, rtol=rtol, r0=r0)
                runs[(name, rtol, r0)] = r
                dR = abs(r["R"] - ref[name]["R"]) / ref[name]["R"]
                dM = abs(r["M"] - ref[name]["M"]) / ref[name]["M"]
                print(f"{name:<7}{rtol:>8.0e}{r0:>10.0e}{r['R']:>18.10f}"
                      f"{dR:>12.3e}{r['M']:>18.10f}{dM:>12.3e}")
    worst = max(max(abs(r["R"] - ref[n]["R"]) / ref[n]["R"],
                    abs(r["M"] - ref[n]["M"]) / ref[n]["M"])
                for (n, _, _), r in runs.items())
    print(f"  worst relative deviation from the tightest reference: {worst:.3e}")
    print()

    # ---------------- figure ----------------
    fig, axes = plt.subplots(1, 3, figsize=(13.5, 4.0), dpi=200)
    labels = {"A": r"model A ($\rho_{E,c}=2.5\times10^{15}$ g cm$^{-3}$)",
              "B": r"model B ($\rho_{E,c}=2.5\times10^{16}$ g cm$^{-3}$)"}
    colors = {"A": "#1f6feb", "B": "#d1495b"}
    for name, res in results.items():
        r, eps, P, m = profiles(res, n=500)
        axes[0].plot(r, eps / res["eps_c"], color=colors[name], lw=1.8,
                     label=labels[name])
        axes[1].plot(r, P / res["p_c"], color=colors[name], lw=1.8,
                     label=labels[name])
        axes[2].plot(r, m / res["M"], color=colors[name], lw=1.8,
                     label=labels[name])

    titles = [r"$\varepsilon(r)/\varepsilon_c$",
              r"$P(r)/P_c$",
              r"$m_\star(r)/M$"]
    locs = ["upper right", "upper right", "upper left"]
    for ax, t, loc in zip(axes, titles, locs):
        ax.set_xlabel("r  [km]", fontsize=12)
        ax.set_ylabel(t, fontsize=13)
        ax.set_xlim(left=0.0)
        ax.set_ylim(bottom=0.0)
        ax.grid(alpha=0.3, lw=0.6)
        ax.legend(fontsize=8.2, loc=loc, framealpha=0.92, borderaxespad=0.9)
        ax.tick_params(labelsize=10)
        ax.axhline(0.0, color="0.35", lw=0.8)
    axes[0].axhline(1.0, color="0.55", lw=0.8, ls=":")
    axes[1].axhline(1.0, color="0.55", lw=0.8, ls=":")
    axes[2].axhline(1.0, color="0.55", lw=0.8, ls=":")
    fig.tight_layout()
    png = os.path.join(HERE, "tov-profiles.png")
    fig.savefig(png, dpi=200)
    plt.close(fig)

    # ---------------- csv ----------------
    csv_path = os.path.join(HERE, "tov-profiles.csv")
    with open(csv_path, "w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(["model", "r_km", "eps_over_epsc", "P_over_Pc", "m_over_M"])
        for name, res in results.items():
            r, eps, P, m = profiles(res, n=400)
            for ri, ei, pi, mi in zip(r, eps, P, m):
                w.writerow([name, f"{ri:.6f}", f"{ei / res['eps_c']:.8f}",
                            f"{pi / res['p_c']:.8f}", f"{mi / res['M']:.8f}"])

    print("output files")
    print(f"  {png}  ({os.path.getsize(png)} bytes)")
    print(f"  {csv_path}  ({os.path.getsize(csv_path)} bytes)")


if __name__ == "__main__":
    main()
