"""
Lane-Emden equation for a polytrope of index n = 3/2.

Solves  (1/xi^2) d/dxi (xi^2 dtheta/dxi) = -theta^n,  theta(0) = 1, theta'(0) = 0,
by starting at a small radius xi0 > 0 from the regular centre series

    theta(xi0)  = 1 - xi0^2/6 + n xi0^4/120
    theta'(xi0) = -xi0/3 + n xi0^3/30

integrating outwards with scipy's DOP853, stopping at the FIRST positive zero
xi1 (terminal event theta = 0), and reporting

    xi1,  omega_{3/2} = -xi1^2 theta'(xi1),  mean/central density ratio = 3 omega_{3/2} / xi1^3.

It prints a convergence table in (xi0, rtol) and writes, next to this file,

    lane-emden-profiles.png   (two panels: theta(xi) and rho_0/rho_0c)
    lane-emden-profile.csv    (xi, theta, rho_ratio, ~400 rows)

Run with:  python lane_emden.py
Requires:  numpy, scipy, matplotlib
"""

import os

import numpy as np
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp

HERE = os.path.dirname(os.path.abspath(__file__))
PNG_PATH = os.path.join(HERE, "lane-emden-profiles.png")
CSV_PATH = os.path.join(HERE, "lane-emden-profile.csv")

# Reference values quoted in the problem statement (n = 3/2).
REF_XI1 = 3.653753736
REF_OMEGA = 2.714055120
REF_RATIO = 0.1669252752


# --------------------------------------------------------------------------- #
# ODE right-hand side and centre conditions
# --------------------------------------------------------------------------- #
def lane_emden_rhs(xi, y, n):
    """y = [theta, dtheta/dxi]; theta^n is floored at 0 for theta < 0.

    The floor only matters if the adaptive solver evaluates a stage slightly
    past the first zero, where a fractional power of a negative theta would be
    NaN; it does not affect the solution on the physical branch theta > 0.
    """
    theta, dtheta = y
    th = theta if theta > 0.0 else 0.0
    return [dtheta, -th ** n - 2.0 * dtheta / xi]


def centre_series(n, xi0):
    """Regular centre expansion to O(xi0^4)."""
    theta0 = 1.0 - xi0 ** 2 / 6.0 + n * xi0 ** 4 / 120.0
    dtheta0 = -xi0 / 3.0 + n * xi0 ** 3 / 30.0
    return [theta0, dtheta0]


# --------------------------------------------------------------------------- #
# One integration: from xi0 out to the first zero
# --------------------------------------------------------------------------- #
def solve_polytrope(n, xi0, rtol, max_step=np.inf):
    """Integrate from xi0 to the first zero of theta. Returns (xi1, theta'(xi1), sol)."""
    atol = rtol * 1e-2

    def first_zero(xi, y, n_):
        return y[0]

    first_zero.terminal = True
    first_zero.direction = -1

    sol = solve_ivp(
        lane_emden_rhs,
        (xi0, 10.0),
        centre_series(n, xi0),
        args=(n,),
        method="DOP853",
        rtol=rtol,
        atol=atol,
        events=first_zero,
        dense_output=True,
        max_step=max_step,
    )
    if not sol.success or sol.t_events[0].size == 0:
        raise RuntimeError("no zero of theta found for n=%g, xi0=%g, rtol=%g" % (n, xi0, rtol))
    xi1 = float(sol.t_events[0][0])
    dtheta1 = float(sol.y_events[0][0][1])
    return xi1, dtheta1, sol


def lane_emden_quantities(n, xi0, rtol, max_step=np.inf):
    """Return (xi1, omega_n, 3 omega_n/xi1^3, sol) with omega_n = -xi1^2 theta'(xi1).

    The third entry is the mean-to-central density ratio of the polytrope,
    M/(4 pi R^3/3) / rho_c = 3 omega_n / xi1^3 (the factor 3 comes from the
    sphere volume 4 pi R^3 / 3 = 4 pi alpha^3 xi1^3 / 3).
    """
    xi1, dtheta1, sol = solve_polytrope(n, xi0, rtol, max_step=max_step)
    omega = -xi1 ** 2 * dtheta1
    return xi1, omega, 3.0 * omega / xi1 ** 3, sol


def profile(n, xi0, rtol, xi1, sol, npts=400):
    """Dense (xi, theta) profile on [0, xi1]; theta(0) = 1 and rho/rho_c = theta^n."""
    xi = np.linspace(0.0, xi1, npts)
    theta = np.empty_like(xi)
    # below xi0 use the (exact to O(xi^6)) centre series; at 0 it gives theta = 1
    near = xi <= xi0
    theta[near] = 1.0 - xi[near] ** 2 / 6.0 + n * xi[near] ** 4 / 120.0
    far = ~near
    if np.any(far):
        theta[far] = sol.sol(xi[far])[0]
    theta = np.maximum(theta, 0.0)  # clip round-off at the surface
    theta[-1] = 0.0
    rho_ratio = theta ** n
    return xi, theta, rho_ratio


# --------------------------------------------------------------------------- #
# Outputs
# --------------------------------------------------------------------------- #
def make_figure(n, xi, theta, rho_ratio, xi1, omega):
    fig, axes = plt.subplots(1, 2, figsize=(11.0, 4.2), dpi=200)
    ax = axes[0]
    ax.plot(xi, theta, color="#1f4e79", lw=2.0, label=r"$\theta(\xi)$")
    ax.axvline(xi1, color="#c0392b", ls="--", lw=1.2)
    ax.annotate(
        r"$\xi_1 = %.8f$" % xi1,
        xy=(xi1, 0.5),
        xytext=(xi1 * 0.955, 0.62),
        ha="right",
        va="center",
        color="#c0392b",
        fontsize=11,
    )
    ax.set_xlabel(r"$\xi$  (dimensionless radius)", fontsize=11)
    ax.set_ylabel(r"$\theta(\xi)$", fontsize=12)
    ax.set_xlim(0.0, xi1 * 1.04)
    ax.set_ylim(0.0, 1.05)
    ax.grid(alpha=0.3, ls=":")
    ax.legend(loc="lower left", frameon=False)
    ax.set_title(r"(a)  Lane-Emden solution, $n = 3/2$", fontsize=11, loc="left")

    ax = axes[1]
    ax.plot(xi, rho_ratio, color="#b9770e", lw=2.0, label=r"$\theta^{3/2}$")
    ax.axvline(xi1, color="#c0392b", ls="--", lw=1.2)
    ax.annotate(
        r"$\xi_1 = %.8f$" % xi1,
        xy=(xi1, 0.5),
        xytext=(xi1 * 0.955, 0.62),
        ha="right",
        va="center",
        color="#c0392b",
        fontsize=11,
    )
    ax.set_xlabel(r"$\xi$  (dimensionless radius)", fontsize=11)
    ax.set_ylabel(r"$\rho_0/\rho_{0,c}$", fontsize=12)
    ax.set_xlim(0.0, xi1 * 1.04)
    ax.set_ylim(0.0, 1.05)
    ax.grid(alpha=0.3, ls=":")
    ax.legend(loc="lower left", frameon=False)
    ax.set_title(r"(b)  Density profile, $n = 3/2$", fontsize=11, loc="left")

    fig.tight_layout()
    fig.savefig(PNG_PATH, dpi=200, bbox_inches="tight")
    plt.close(fig)
    return PNG_PATH


def write_csv(xi, theta, rho_ratio):
    data = np.column_stack([xi, theta, rho_ratio])
    np.savetxt(CSV_PATH, data, delimiter=",", header="xi,theta,rho_ratio", comments="", fmt="%.12e")
    return CSV_PATH


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #
def main():
    n = 1.5
    print("=" * 78)
    print("Lane-Emden equation, polytrope index n = 3/2")
    print("  (1/xi^2) d/dxi (xi^2 theta') = -theta^n,  theta(0)=1, theta'(0)=0")
    print("  omega_{3/2} = -xi1^2 theta'(xi1),   ratio = 3 omega_{3/2}/xi1^3 (mean/central)")
    print("=" * 78)

    # ---- headline values: best centre radius and tolerance -----------------
    xi0_ref, rtol_ref = 1e-7, 1e-11
    xi1, omega, ratio, sol = lane_emden_quantities(n, xi0_ref, rtol_ref)

    print("\nBest run: xi0 = %.0e, rtol = %.0e  (DOP853, atol = rtol*1e-2)" % (xi0_ref, rtol_ref))
    print("  xi1          = %.12f      (reference %.10f)" % (xi1, REF_XI1))
    print("  omega_{3/2}  = %.12f      (reference %.10f)" % (omega, REF_OMEGA))
    print("  ratio        = %.12f      (reference %.10f)" % (ratio, REF_RATIO))
    print("  relative deviation from reference: %.3e, %.3e, %.3e"
          % (abs(xi1 - REF_XI1) / REF_XI1,
             abs(omega - REF_OMEGA) / REF_OMEGA,
             abs(ratio - REF_RATIO) / REF_RATIO))

    # ---- convergence table -------------------------------------------------
    xi0_list = [1e-3, 1e-5, 1e-7]
    rtol_list = [1e-7, 1e-9, 1e-11]
    rows = []
    for x0 in xi0_list:
        for rt in rtol_list:
            a, b, c, _ = lane_emden_quantities(n, x0, rt)
            rows.append((x0, rt, a, b, c))

    ref = [r for r in rows if r[0] == xi0_ref and r[1] == rtol_ref][0]
    print("\n" + "-" * 78)
    print("Convergence / endpoint-stability table (n = 3/2)")
    print("reference row: xi0 = 1e-7, rtol = 1e-11")
    print("  %-9s %-9s %-18s %-18s %-16s %-10s %-10s %-10s"
          % ("xi0", "rtol", "xi1", "omega", "ratio", "d_xi1", "d_omega", "d_ratio"))
    worst = 0.0
    for x0, rt, a, b, c in rows:
        da = abs(a - ref[2]) / abs(ref[2])
        db = abs(b - ref[3]) / abs(ref[3])
        dc = abs(c - ref[4]) / abs(ref[4])
        worst = max(worst, da, db, dc)
        print("  %-9.0e %-9.0e %18.12f %18.12f %16.12f %10.2e %10.2e %10.2e"
              % (x0, rt, a, b, c, da, db, dc))
    print("  largest relative deviation from the reference row: %.3e %s"
          % (worst, "(< 1e-4 OK)" if worst < 1e-4 else "(*** EXCEEDS 1e-4 ***)"))

    # ---- figure and CSV ----------------------------------------------------
    xi_p, th_p, rho_p = profile(n, xi0_ref, rtol_ref, xi1, sol, npts=400)
    png = make_figure(n, xi_p, th_p, rho_p, xi1, omega)
    csv = write_csv(xi_p, th_p, rho_p)
    print("\n" + "-" * 78)
    print("Wrote figure: %s" % png)
    print("Wrote CSV   : %s   (%d rows)" % (csv, xi_p.size))

    # ---- consistency of the CSV with the headline value --------------------
    print("Surface check: xi[-1] = %.12f, theta[-1] = %.3e" % (xi_p[-1], th_p[-1]))
    print("=" * 78)


if __name__ == "__main__":
    main()
