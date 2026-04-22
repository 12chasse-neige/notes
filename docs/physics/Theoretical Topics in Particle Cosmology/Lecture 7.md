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
