# Lecture 3 Exercise

(1) Please show that the right hand side of (2) is Lorentz invariant.  
$$
\langle \vec {p} | \vec {q} \rangle = 2 E_{p} \times (2 \pi)^{3} \delta^{(3)} (\vec {p} - \vec {q}) \tag {2}
$$

First, we consider the identity for the four-dimensional delta function restricted to the positive-energy mass shell
$$
\int \dd[4]{p} \, \delta(p^{2} + m^{2}) \Theta(p^{0}) f(p)
$$
where $p^{2} = -(p^{0})^{2} + \vec{p}^{2}$. Since $\dd[4]{p}$ and the constraints $\delta(p^{2}+m^{2})$ and $\Theta(p^{0})$ are Lorentz invariant, any measure derived from this must also be invariant. 

We use the property of the delta function
$$
\delta(g(x)) = \sum_{x_{i}}\frac{\delta(x-x_{i})}{|g'(x_{i})|}
$$
Let $g(p^{0}) = (p^{0})^{2} - (\vec{p}^{2} + m^{2}) = (p^{0})^{2} - E_{p}^{2}$. The roots are $p^{0} = \pm E_{p}$, but the $\Theta(p^{0})$ picks only $p^{0} = E_{p}$. 

Then $|g'(E_{p})| = |2p^{0}|_{p^{0}=E_{p}} = 2E_{p}$. Thus
$$
\int \dd[4]{p} \, \delta(p^{2} + m^{2}) \Theta(p^{0}) = \int \dd[3] {p} \int dp^{0} \frac{\delta(p^{0} - E_{p})}{2E_{p}} = \int \frac{\dd[3]{p}}{2E_{p}}
$$

Since the integration measure $\frac{\dd[3]{p}}{2E_{p}}$ is Lorentz invariant, and we have
$$
| \vec{q} \rangle = \int \dd[3] {\vec{p}} | \vec{p} \rangle \langle \vec{p} | \vec{q} \rangle
$$
So the integration
$$
\int \dd[3]{\vec{p}} \langle \vec{p} | \vec{q} \rangle = \int \frac{\dd[3]{p}}{2 E_{p}} 2 E_{p} \cdot \delta^{3} (\vec{p} - \vec{q})
$$
must be a Lorentz invariant.  Therefore, we can know that
$$
2 E_{p} \times (2 \pi)^{3} \delta^{(3)} (\vec {p} - \vec {q}) \tag {2}
$$
is a Lorentz invariant.

(2) Please use the unitarity of the $S$-matrix to prove the optical theorem in the form of (26).   
$$
\operatorname{Im} \mathcal {M} \left(p_{1} p_{2} \rightarrow p_{1} p_{2}\right) = \sum_{X \in \text {final states}} \left(2 \pi \right)^{4} \delta^{(4)} \left(p_{1} + p_{2} - p_{X} \right) \left| \mathcal{M} \left(p_{1} p_{2} \rightarrow X \right) \right|^{2} \tag {26}
$$

We take the form
$$
S = 1 + i (2 \pi)^{4} \delta^{4} (p) M
$$
and using unitarity of $S$ matrix, we can know that
$$
S S^{\dagger} = (1 + i (2 \pi)^{4} \delta^{4} (p) M) \cdot (1 - i (2 \pi)^{4} \delta^{4} (p) M^{\dagger}) = 1 + i (2 \pi)^{4} \delta^{4} (p)  (M - M^{\dagger}) + (2 \pi)^{8} \delta^{4} (p) M M^{\dagger} = 1
$$
Therefore, we can  derive that
$$
i (M - M^{\dagger}) + (2 \pi)^{4} \delta^{4} (p) M M^{\dagger} = 0
$$

$$
i \langle \psi | M - M^{\dagger} | \psi \rangle + (2 \pi)^{4} \delta^{4} (p) \langle \psi | M M^{\dagger}| \psi \rangle = 0
$$

and insert a complete set of states on the right side
$$
i \langle \psi | M - M^{\dagger} | \psi \rangle = - \sum_{X} (2 \pi)^{4} \delta^{4} (p) \langle \psi | M | X \rangle \langle X | M^{\dagger}| \psi \rangle
$$
Notice that $\langle \psi | M^{\dagger} | \psi \rangle = \langle \psi | M^{\dagger} | \psi \rangle^{*}$, thus
$$
i \langle \psi | M - M^{\dagger} | \psi \rangle = -2 \Im M(p_{1}p_{2} \to p_{1} p_{2})
$$
So we have the optical theorem
$$
\operatorname{Im} \mathcal {M} \left(p_{1} p_{2} \rightarrow p_{1} p_{2}\right) = \sum_{X \in \text {final states}} \left(2 \pi \right)^{4} \delta^{(4)} \left(p_{1} + p_{2} - p_{X} \right) \left| \mathcal{M} \left(p_{1} p_{2} \rightarrow X \right) \right|^{2} 
$$
(3) Please read through Sec. 1.1-1.3 in Lecture I of [1] (or ask AI directly) and write a short summary of 

1)  how does causality imply analyticity in classical physics (no quantum mechanics required) 

2.  what is Kramers-Kronig relation and how is it derived. 

[You can certainly use AI but please write the summary yourself.]

1)  How causality implies analyticity in classical physics:
    In classical linear response theory, a system's output $x(t)$ is related to an input signal $f(t)$ via a response function $\chi(\tau)$: $x(t) = \int \chi(t-t') f(t') dt'$. The principle of causality states that the effect cannot precede the cause, meaning $\chi(\tau) = 0$ for $\tau < 0$. 
    When we look at the generalized frequency response $\tilde{\chi}(\omega) = \int_{0}^{\infty} \chi(\tau) e^{i\omega\tau} d\tau$, if we allow $\omega$ to be complex ($\omega = \omega_{R} + i\omega_{I}$), the factor $e^{i\omega\tau} = e^{i\omega_{R}\tau} e^{-\omega_{I}\tau}$ acts as a powerful convergence factor for any $\omega_{I} > 0$. Because the integral is only over positive $\tau$ (due to causality), $\tilde{\chi}(\omega)$ is guaranteed to be a holomorphic (analytic) function in the upper half-plane of the complex frequency space.

2)  The Kramers-Kronig relation and its derivation:
    The Kramers-Kronig relations relate the real and imaginary parts of a causal response function. 

    Derivation: Since $\tilde{\chi}(\omega)$ is analytic in the upper half-plane, we apply Cauchy's Integral Formula for a point $\omega$ on the real axis, using a contour that travels along the real axis and closes via a large semi-circle in the upper half-plane (assuming $\tilde{\chi}$ vanishes at infinity). 

    By taking the Cauchy Principal Value ($\mathcal{P}$) of the integral:
    $$
    \tilde{\chi}(\omega) = \frac{1}{i\pi} \mathcal{P} \int_{-\infty}^{\infty} \frac{\tilde{\chi}(\omega')}{\omega' - \omega} d\omega'
    $$
    Splitting $\tilde{\chi}$ into real and imaginary parts ($\tilde{\chi} = \text{Re}\,\chi + i\text{Im}\,\chi$) yields:
    $$
    \text{Re}\,\tilde{\chi}(\omega) = \frac{1}{\pi} \mathcal{P} \int_{-\infty}^{\infty} \frac{\text{Im}\,\tilde{\chi}(\omega')}{\omega' - \omega} d\omega' \quad \text{and} \quad \text{Im}\,\tilde{\chi}(\omega) = -\frac{1}{\pi} \mathcal{P} \int_{-\infty}^{\infty} \frac{\text{Re}\,\tilde{\chi}(\omega')}{\omega' - \omega} d\omega'
    $$
    This shows that if you know the absorption (imaginary part) of a system across all frequencies, you can calculate its dispersion (real part), and vice versa.

### References

[1] S. Mizera, “Physics of the analytic S-matrix,” Phys. Rept. 1047 (2024) 1–92, arXiv:2306.05395 [hep-th]. 



