# Lecture 7

Chasse_neige

## QFT Perspective

### General Remarks

What is field theory: relacistic quantum theory with Hamiltonian
$$
H (t) = \int \dd[3] {x} \mathcal{H} (t, \vec{x})
$$
Where $\mathcal{H} (t, \vec{x})$ is polynomial function of local operators $\phi(t, \vec{x})$ and $\partial \phi$.

We need a dynamical theory with annihilation and creation operators.

Causality: $a, a^{\dagger} \to \phi (t, \vec{x})$
$$
\phi(x) = \int \frac{\dd[3]{k}}{(2 \pi)^{3}} \frac{1}{\sqrt{2 E_{k}}} \left[e^{i k \cdot x} a_{\vec{k}} + c.c.\right]
$$
Lagrangian:
$$
\mathcal{L} = - \frac{1}{2} (\partial_{\mu} \phi)^{2} - \frac{1}{2} m^{2} \phi^{2} + \text{interaction}
$$
In the interaction part, operators $(\partial \phi)^{2}$ and $\phi^{2}$ are not allowed! We normalize $\phi$ by the kinetic term, call these canonically normalized fields bare fields.

Using $\langle \vec{p} | \phi_{R} (0)| \Omega \rangle = 1$ to normalize the fields
$$
\mathcal{L} =  \underbrace{-\frac{1}{2} Z (\partial_{\mu} \phi_{R})^{2} - \frac{1}{2} Z \phi_{R}^{2}}_{\text{renormalized field}} + \left[\underbrace{\delta_{Z} (\partial_{\mu} \phi_{R})^{2} + \delta_{m} \phi_{R}^{2}}_{\text{conter term}} + \cdots\right]
$$

### Perturbation Theory

$$
S = T e^{-i \int \dd{t} H_{int}(t)}
$$

$$
\ket{\phi_{0}} = \ket{p_{1} \cdots p_{N}} = \left(\prod_{i} \sqrt{2 E_{p_{i}}} a_{p_{i}}^{\dagger}\right) \ket{0}
$$

$$
G_{\phi} (x, y) \equiv \langle 0 | T \{\phi(x) \phi(y)\} | 0 \rangle
$$

$$
G_{\phi} = \int \frac{\dd[4]{p}}{(2 \pi)^{4}} \frac{-i}{p^{2} + m^{2} - i \epsilon} e^{ip \cdot (x - y)}
$$

### Photon Field

We use the polarization vector as an adapter
$$
A (x) = \int \frac{\dd[3]{k}}{(2 \pi)^{3}} \frac{1}{\sqrt{2 E_{k}}} \sum_{s = \pm 1} \left[e^{ik \cdot x} e_{\mu}^{(s)} a_{s, k} + c.c.\right]
$$
Under LGT: $e_{\mu} \to e_{\mu} + \alpha k_{\mu}$
$$
\delta A_{\mu} (x) = \partial_{\mu} \int \frac{\dd[3]{k}}{(2 \pi)^{3}} \frac{1}{\sqrt{2 E_{k}}} \sum_{s = \pm 1} \left[-i \alpha e^{ik \cdot x} a_{s, k} + c.c.\right]
$$
So the Lagrangian 
$$
\mathcal{L} = - \frac{1}{2} (\partial_{\mu} A_{\nu}) (\partial^{\mu} A^{\nu})
$$
is actually not Lorentz invariant. So we exploit the index contraction, and we can get the L-int Lagrangian
$$
\mathcal{L} = -\frac{1}{4} F_{\mu \nu} F^{\mu \nu}
$$
We can thus using $F_{\mu \nu}$ to couple with matter.

Matter Theory: $S_{M}$ with global U(1) symmetry
$$
\delta S_{M} = \int \dd[4] {x} J^{\mu} \partial_{\mu} \alpha (x)
$$
If we identify U(1) with LGT of $A_{\mu}$
$$
S_{M} + e \int \dd[4]{x} J^{\mu} A_{\mu}
$$
is L-inv.

### Photon Propagator

$$
G_{\mu \nu} = \langle 0 | T \{A_{\mu} (x) A_{\nu} (y)\} | 0 \rangle \\ =
\int \frac{\dd[4]{p}}{(2 \pi)^{4}} \frac{-i}{p - i\epsilon} e^{i p \cdot (x - y)} \times P_{\mu \nu} (p)
$$

Where $P$ is described by the “adaptors”
$$
P_{\mu \nu} (p) = \sum_{h = \pm 1} e_{\mu}^{(h)} (p) e_{\nu}^{(h) *} (p) \\ =
A \eta_{\mu \nu} + B \times \frac{p_{\mu} p_{\nu}}{p^{2}}
$$
Take the photon propagating in the z direction , we can know that
$$
\begin{cases}
A = 1 \\
B \quad \text{undefined}
\end{cases}
$$
For a current conserved theory, the propagator can take the form
$$
G_{\mu \nu} (p) = \frac{- i \eta_{\mu \nu}}{p^{2} - i \epsilon}
$$
Or in some QFT textbooks, we can do this by calculating the inverse of the Lagrangian
$$
\mathcal{L} + \mathcal{L}_{GF} 
$$
Consider the current between two sources, the amplitude is 
$$
i M = (ie)^{2} J_{A}^{\mu} (-p) \frac{-i \eta_{\mu \nu}}{p^{2} - i \epsilon} J_{B}^{\nu} (p)
$$
Take $p = (E, 0, 0, p)$ which is off-shell, the charge conservation gives that
$$
0 = p_{\mu} J_{A, B}^{\mu} = - E J_{A, B}^{0} + p J^{3}_{A, B}
$$
So
$$
M = \frac{e^{2} (- \rho_{A} \rho_{B} + J_{A}^{i} J_{B}^{i})}{- E^{2} + p^{2} - i \epsilon} = - \frac{e^{2} \rho_{A} \rho_{B}}{p^{2}} + \frac{J_{A}^{1} J_{B}^{1} + J_{A}^{2} J_{B}^{2}}{- E^{2} + p^{2} - i \epsilon}
$$
Doing Fourier transform, the first term gives out
$$
\delta (t_{A} - t_{B}) \frac{e^{2} \rho_{A} \rho_{B}}{4 \pi |x_{A} - x_{B}|}
$$
The second term is proportional to
$$
J_{A}^{1} J_{B}^{1} + J_{A}^{2} J_{B}^{2} = \sum_{h = \pm 1} J_{A}^{(h)} J_{B}^{(h)}
$$

### Graviton Field

Similarly, the polarization tensor 
$$
e_{\mu \nu}^{(\pm2)} \to e_{\mu \nu}^{(\pm2)} + 2 \xi_{(\mu} k_{\nu)}
$$
Define the brakets as
$$
A_{(\mu} B_{\nu)} = \frac{1}{2} (A_{\mu} B_{\nu} + A_{\nu} B_{\mu})
$$
We guess the Lagrangian of the graviton field
$$
\mathcal{L} = - \frac{1}{4} \partial_{\lambda} h_{\mu \nu} \partial^{\lambda} h^{\mu \nu} + \cdots
$$
Adding some terms to make the Lagrangian gauge invariant, with options:

1.  We do the genuine gauge transform with $\partial_{\mu} \xi^{\mu} = 0$ and $h_{\mu \nu}$ traceless.
2.  Allow $h \neq 0$, using arbitrary $\xi^{\mu}$.

Try option 2 ($h \neq 0$)
$$
\mathcal{L} = \frac{1}{4} h_{\mu \nu} \square h^{\mu \nu} + a h \square h + b h \partial^{\mu} \partial^{\nu} h + c h_{\mu \nu} \partial^{\mu} \partial_{\lambda} h^{\nu \lambda}
$$
Using the gauge invariance constrain, we can get
$$
\mathcal{L} = \frac{1}{4} h_{\mu \nu} \square h^{\mu \nu} - \frac{1}{4} h \square h + \frac{1}{2} h \partial^{\mu} \partial^{\nu} h - \frac{1}{2} h_{\mu \nu} \partial^{\mu} \partial_{\lambda} h^{\nu \lambda}
$$
This is consistent with the second order term of
$$
S = \frac{M_{pl}^{2}}{2} \int \dd[4]{x} \sqrt{-g} R
$$
Couple $h_{\mu \nu}$ to matter, we have tensors in forms like
$$
\partial^{\mu} \partial^{\nu} h_{\mu \nu} - \partial^{2}h
$$
but this will not work. We should choose “minimal coupling” in the form
$$
\mathcal{L}_{int} = \frac{\kappa}{2} h_{\mu \nu} T^{\mu \nu}
$$
Why option 1 doesn’t work:

Choose $h = 0$ and $\partial_{\mu} \xi^{\mu} = 0$
$$
\mathcal{L}_{UM} = \frac{1}{4} h_{\mu \nu} \square h^{\mu \nu} - \frac{1}{2} h_{\mu \nu} \partial^{\mu} \partial_{\lambda} h^{\nu \lambda}
$$
This is called Unimodular Gravity.
$$
\mathcal{L'}_{UM} = \mathcal{L}_{UM} + Ah \Rightarrow S_{EH} + \int \dd[4]{x} A (\sqrt{-g} - 1)
$$

#### How does matter couple to $h_{\mu \nu}$ in unimodular gravity

The energy momentum tensors with the constrain
$$
\partial_{\mu} T^{\mu \nu} = \partial^{\nu} \Phi (x)
$$
can couple with $h_{\mu \nu}$. The coupling term is
$$
\mathcal{L}_{int} = \frac{\kappa}{2} h_{\mu \nu} \left(T^{\mu \nu} - \frac{1}{4} \eta^{\mu \nu} T\right)
$$

### Graviton Propagator

Choosing the gauge fixing term as
$$
\mathcal{L}_{GF} = -\frac{1}{2} \left(\partial^{\mu} \bar{h}_{\mu \nu} \right)^{2}
$$
The total Lagrangian is
$$
\mathcal{L} = \mathcal{L}_{free} + \mathcal{L}_{GF} = \frac{1}{4} h_{\mu \nu} \square \bar{h}^{\mu \nu}  \\ =
\frac{1}{8} h_{\mu \nu} (2 \eta^{\mu (\rho} \eta^{\sigma) \nu} - \eta^{\mu \nu} \eta^{\rho \sigma}) \square h_{\rho \sigma}
$$
The propagator is described by the equation
$$
\frac{1}{2} (2 \eta^{\lambda (\mu} \eta^{\nu) \kappa} - \eta^{\lambda \kappa} \eta^{\mu \nu}) \square_{x} G_{\mu\nu \rho \sigma} (x, y) = i \delta^{(4)} (x - y) \delta^{\lambda}_{(\rho} \delta^{\kappa}_{\sigma)}
$$
This gives out the propagator 
$$
G_{\mu \nu, \rho \sigma} (p) = - \frac{i}{p^{2} - i \epsilon} \left[2 \eta_{\mu (\rho} \eta_{\sigma) \nu} - \eta_{\mu \nu} \eta_{\rho \sigma}\right]
$$
Doing the same trick between the two sources
$$
i M(p) = \left(\frac{i \kappa}{2}\right)^{2} T_{A}^{\mu \nu} (-p) G_{\mu \nu, \rho \sigma} (p) T^{\rho \sigma}_{B} (p) \\ =
\frac{i \kappa^{2}}{4 p^{2}} \left[2 T_{A}^{\mu \nu} (-p) T_{B \mu \nu} (p) - T_{A} (p) T_{B} (p)\right]
$$
Using the current conservation law
$$
0 = p_{\mu} T_{A, B}^{\mu \nu} = - E T_{A, B}^{0 \nu} + p T_{A, B}^{3 \nu}
$$
And this will give out the amplitude
$$
M (p) = \frac{\kappa^{2}}{4 (- E^{2} + p^{2})} \left[(T_{A}^{11} - T_{A}^{22}) (T_{B}^{11} - T_{B}^{22}) + 4 T_{A}^{12} T_{B}^{12}\right] \\ + 
\frac{\kappa^{2}}{4 p^{2}} \left(1 - \frac{E^{2}}{p^{2}}\right) T_{A}^{00} T_{B}^{00} \\ +
\frac{\kappa^{2}}{4 p^{2}} \left[T_{A}^{00} (T_{B}^{11} + T_{B}^{22}) + (T_{A}^{11} + T_{A}^{22}) T_{B}^{00} - 4 (T_{A}^{01} T_{B}^{01} + T_{A}^{02} T_{B}^{02}) \right]
$$
The first term is on-shell poles of the gravitons, the second term is the Newtonian potential, and the third term gives out the velocity-dependent potential.

