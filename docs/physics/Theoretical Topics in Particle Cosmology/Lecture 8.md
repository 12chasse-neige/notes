# Lecture 8

Chasse_neige

## Leading Order Effects

1.  Coulomb’s Law and Newton’s Law
2.  Special Relativistic Correction
3.  Light Bending
4.  Shapiro Delay

Using non-relativistic limit and classic limit, we can simplify the problem by inducing particle number conservation.

## NR limit

Charged scalar particles $\phi_{1,2}$ with $Q_{1,2} > 0$, let $m_{1} \leq m_{2}$. Consider a 2 to 2 scattering with $\ket{\{\phi_{1} (\vec{p}_{1}), \phi_{2} (\vec{p}_{2})\}_{+}}$

The out state can be written as
$$
\ket{\{\phi_{1} \phi_{2} (\bar{\phi}_{1} \phi_{1})^{M} (\bar{\phi}_{2} \phi_{2})^{N} \gamma^{L}\}_{-}}
$$
Under NR limit, we can describe the Hilbert space
$$
\mathcal{H} \to \mathcal{H}_{\phi_{1}} \oplus \mathcal{H}_{\phi_{2}} \otimes \text{Fock} (\gamma)
$$
where
$$
H = \int \frac{\dd[3]{p}}{(2 \pi)^{3}} \left[\sqrt{\vec{p}^{2} + m_{1}^{2}} a_{1}^{\dagger} (\vec{p}) a_{1} (\vec{P}) + 1 \leftrightarrow 2\right] + \cdots
$$

### Fiels Theoretic Perspective

$$
\mathcal{L} = - \partial_{\mu} \phi^{*} \partial^{\mu} \phi - m^{2} \phi^{*} \phi
$$

While $E \to 0$, we can  claim that the 1 ps sectors domains. We want to analyse the non-relativistic QFT in the band of the 1 ps states, so we shift the energy zero point to a  static 1 ps.
$$
\phi (t, \vec{x}) = \frac{1}{\sqrt{2m}} \Psi (t, \vec{x}) e^{- i mt}
$$

$$
\mathcal{L} = i \Psi^{\dagger} \dot{\Psi} + \frac{1}{2m} \Psi^{\dagger} \nabla^{2} \Psi + \frac{1}{2m} \dot{\Psi}^{\dagger} \dot{\Psi}
$$

Using the limit $E \to 0$, the Lagrangian approaches
$$
\mathcal{L} = i \Psi^{\dagger} \dot{\Psi} + \frac{1}{2m} \Psi^{\dagger} \nabla^{2} \Psi
$$
The corresponding EoM is
$$
i \dot{\Psi} = - \frac{1}{2m} \nabla^{2} \Psi
$$

### Including Massless Exchange

$$
\mathcal{L} = - |(\partial_{\mu} - i e A_{\mu}) \phi |^{2} - m^{2} \phi^{2} - \frac{1}{4} F_{\mu \nu} F^{\mu \nu} \\ =
i \Psi^{\dagger} \dot{\Psi} + \frac{1}{2m} \Psi^{\dagger} \nabla^{2} \Psi + \frac{1}{2} (E^{2} - B^{2}) + e A_{0} \Psi^{\dagger} \Psi - \frac{1}{m} e A_{i} \Psi^{\dagger} \partial_{i} \Psi - \frac{e^{2}}{2m} A^{2} \Psi^{\dagger} \Psi + \cdots
$$

#### NR Power Couting

$$
[t] = 2 [x] \\
[m] = 0
$$

Here the dimension of energy consists with momentum, say
$$
[E] = [p^{2}]
$$
So we choose
$$
[x]_{NR} = -1 \Rightarrow [\mathcal{L}] = 5 , [\Psi] =\frac{3}{2}
$$

$$
[\vec{E}] = [\vec{B}] = \frac{5}{2}, [\vec{A}] = [A_{0}] = \frac{3}{2}
$$

So under the low-energy limit, the terms that concerns are
$$
\mathcal{L} = i \Psi^{\dagger} \dot{\Psi} + \frac{1}{2m} \Psi^{\dagger} \nabla^{2} \Psi- \frac{1}{2} A_{0} \nabla^{2} A_{0} + e A_{0} \Psi^{\dagger} \Psi + \cdots
$$
We can integrate $A_{0}$ out and get
$$
A_{0} = -\nabla^{-2} e \Psi^{\dagger} \Psi = -\int \dd[3] y \frac{e \Psi^{\dagger} \Psi}{4 \pi |\vec{x} - \vec{y}|}
$$
So in general, the interaction term in the Lagrangian is
$$
\mathcal{L}_{int} = - \int \dd[3] {x} \dd[3] {y} V (|\vec{x} - \vec{y}|, \vec{p}) \times \Psi_{a}^{\dagger} \Psi_{a} (x) \Psi_{b}^{\dagger} \Psi_{b} (y)
$$
Where the Kinetic term 
$$
i \Psi^{\dagger} \dot{\Psi} + \frac{1}{2m} \Psi^{\dagger} \nabla^{2} \Psi \to \Psi^{\dagger} \left[i \dot{\Psi} - \sqrt{m^{2} - \nabla^{2}} \Psi\right]
$$
In practice, we want to match an on-shell amplitude $M$, where

1.  For classical paalication, only nonlocal V is relevant.
2.  Nonlocal V only from non-analytic part of an amplitude.

## NR Physics from On-shell Amplitude

Conside a 2 to 2 scattering $p_{1} p_{2} \to p'_{1} p'_{2}$ in the CoM system.
$$
p_{1}^{\mu} = (E_{1}, \vec{p}_{1}), \quad p_{2}^{\mu}  = (E_{2}, \vec{p}_{2}) \\
 p_{1}^{'\mu} = (E_{1}, \vec{p}'_{1}), \quad p_{2}^{'\mu}  = (E_{2}, \vec{p}'_{2}) \\
$$
On the NR side, we start from the Lagrangian
$$
\mathcal{L} = \int \frac{\dd[3]{p}}{(2 \pi)^{3}} \sum_{a= 1}^{2} \Psi_{a}^{\dagger} (- \vec{p}) \left[i \partial_{t} - \sqrt{p^{2} + m_{a}^{2}}\right] \Psi_{a} (\vec{p}) \\ - 
\int \frac{\dd[3]{p}}{(2 \pi)^{3}} \int \frac{\dd[3]{p'}}{(2 \pi)^{3}} V(\vec{p}, \vec{p'}) \Psi_{a}^{\dagger} (\vec{p'}) \Psi_{a} (\vec{p}) \times \Psi_{b}^{\dagger} (- \vec{p'}) \Psi_{b} (-\vec{p})
$$
Def $V (p', p) = \int \dd[3]{r} e^{-i \vec{q} \cdot \vec{r}} V(\vec{r}, \vec{p})$, where $\vec{q} = \vec{p} - \vec{p'}$

Notice that in the NRQM, the normalizations are
$$
\ket{p}_{NR} = \frac{1}{\sqrt{2 E_{p}}} \ket{p}
$$
So the propagator
$$
\langle 0 | T \{\Psi_{a} (t, \vec{p}) \Psi_{a}^{\dagger} (t', - \vec{p})\} | 0 \rangle \\ = 
\theta(t - t') e^{- i E_{p} (t - t')} = \int \frac{\dd{\omega}}{2 \pi} \frac{i}{\omega - E_{p} + i \epsilon} e^{- i \omega (t - t')}
$$
The vertex
$$
- i V (\vec{p'}, \vec{p}) \times (2 \pi) \delta (\omega'_{1} + \omega'_{2} - \omega_{1} - \omega_{2})
$$
and the leading order 
$$
i M_{NR} (\vec{p'}, \vec{p}) = - i V (\vec{p'}, \vec{p})
$$

$$
\Rightarrow V (\vec{r}, \vec{p}) = - \int \frac{\dd[3] {q}}{(2 \pi)^{3}} e^{i \vec{q} \cdot \vec{r}} \frac{M (\vec{p} - \vec{q}, \vec{p})}{4 E_{1} E_{2}}
$$

