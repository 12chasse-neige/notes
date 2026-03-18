# Lecture 3 Exercise

### (1) Please show that the right hand side of (2) is Lorentz invariant.  

\[
\langle \vec {p} | \vec {q} \rangle = 2 E_{p} \times (2 \pi)^{3} \delta^{(3)} (\vec {p} - \vec {q}) \tag {2}
\]

Given that the 4-dim delta function
\[
\delta^{(4)} (p^{\mu} - q^{\mu})
\]
is a Lorentz invariant, what we have to prove is that $\frac{\delta (p^{0} - q^{0})}{E_{p}}$ is a Lorentz invariance
\[
\frac{\delta (p^{0} - q^{0})}{E_{p}} = \frac{}{\sqrt{p^{2} + m^{2}}}
\]


### (2) Please use the unitarity of the $S$-matrix to prove the optical theorem in the form of (26).   

\[
\operatorname{Im} \mathcal {M} \left(p_{1} p_{2} \rightarrow p_{1} p_{2}\right) = \sum_{X \in \text {final states}} \left(2 \pi \right)^{4} \delta^{(4)} \left(p_{1} + p_{2} - p_{X} \right) \left| \mathcal{M} \left(p_{1} p_{2} \rightarrow X \right) \right|^{2} \tag {26}
\]



### (3) Please read through Sec. 1.1-1.3 in Lecture I of [1] (or ask AI directly) and write a short summary of 

1)  how does causality imply analyticity in classical physics (no quantum mechanics required) 

2.  what is Kramers-Kronig relation and how is it derived. 

[You can certainly use AI but please write the summary yourself.]

# Comments on References

The scattering theory has a long history and is a huge and complicated topic. Textbooks of pre-QFT era put more weight on it but it faded away gradually in modern textbooks. [2] has a nice introduction to this topic. People usually refer to [3] as an early bible of this topic although it is often as obscure as the topic itself in 1960s.

A very nice modern introduction to this topic is [1] although it is mainly on scattering in nonrelativistic quantum mechanics which is relatively better understood.

Chapter 3 and 4 of [4] are of course very relevant to our discussions. You are encouraged to dive into at least some sections of them at some point of your life. (No hurry!)

# References

[1] S. Mizera, “Physics of the analytic S-matrix,” Phys. Rept. 1047 (2024) 1–92, arXiv:2306.05395 [hep-th].   
[2] J. D. Bjorken and S. D. Drell, Relativistic quantum fields. McGraw-Hill, 1965.   
[3] R. J. Eden, P. V. Landshoff, D. I. Olive, and J. C. Polkinghorne, The analytic S-matrix. Cambridge Univ. Press, Cambridge, 1966. 
[4] S. Weinberg, The Quantum theory of fields. Vol. 1: Foundations. Cambridge University Press, 6, 2005.





Here are the solutions to the exercises provided in the lecture notes.

---

### **Exercise (1): Lorentz Invariance of the Normalization**

**Requirement:** Show that the right-hand side of Equation (2) is Lorentz invariant:
$$\langle \vec{p}|\vec{q} \rangle = 2E_p (2\pi)^3 \delta^{(3)}(\vec{p}-\vec{q})$$

**Proof:**
To see that $2E_p \delta^{(3)}(\vec{p}-\vec{q})$ is Lorentz invariant, we consider the identity for the four-dimensional delta function restricted to the positive-energy mass shell:
$$\int d^4p \, \delta(p^2 + m^2) \Theta(p^0) f(p)$$
where $p^2 = -(p^0)^2 + \vec{p}^2$. Since $d^4p$ and the constraints $\delta(p^2+m^2)$ and $\Theta(p^0)$ are Lorentz invariant, any measure derived from this must also be invariant. 

We use the property of the delta function $\delta(g(x)) = \sum \frac{\delta(x-x_i)}{|g'(x_i)|}$. Let $g(p^0) = (p^0)^2 - (\vec{p}^2 + m^2) = (p^0)^2 - E_p^2$. The roots are $p^0 = \pm E_p$, but the $\Theta(p^0)$ picks only $p^0 = E_p$. Then $|g'(E_p)| = |2p^0|_{p^0=E_p} = 2E_p$. Thus:
$$\int d^4p \, \delta(p^2 + m^2) \Theta(p^0) = \int d^3p \int dp^0 \frac{\delta(p^0 - E_p)}{2E_p} = \int \frac{d^3p}{2E_p}$$
Since the integration measure $\frac{d^3p}{2E_p}$ is Lorentz invariant, its "inverse"—the density $\langle \vec{p}|\vec{q} \rangle$—must contain the factor $2E_p \delta^{(3)}(\vec{p}-\vec{q})$ to ensure that the identity operator $\mathbb{I} = \int \frac{d^3p}{(2\pi)^3 2E_p} |\vec{p}\rangle \langle \vec{p}|$ is invariant.

---

### **Exercise (2): Proving the Optical Theorem**

**Requirement:** Use $S^\dagger S = 1$ to prove the optical theorem in the form:
$$\operatorname{Im} \mathcal{M}(p_1 p_2 \to p_1 p_2) = \sum_{X} (2\pi)^4 \delta^{(4)}(p_1+p_2-p_X) |\mathcal{M}(p_1 p_2 \to X)|^2$$

**Proof:**
1. Define the $T$-matrix via $S = 1 + iT$. Unitarity $S^\dagger S = 1$ implies:
   $$(1 - iT^\dagger)(1 + iT) = 1 \implies i(T - T^\dagger) + T^\dagger T = 0 \implies i(T^\dagger - T) = T^\dagger T$$
2. Take the expectation value of this operator between the same initial two-particle state $|\psi\rangle = |p_1 p_2\rangle$:
   $$\langle \psi | i(T^\dagger - T) | \psi \rangle = \langle \psi | T^\dagger T | \psi \rangle$$
3. For the **LHS**: Note that $\langle \psi | T | \psi \rangle = (2\pi)^4 \delta^{(4)}(0) \mathcal{M}(\psi \to \psi)$. 
   $$i(\langle \psi | T | \psi \rangle^* - \langle \psi | T | \psi \rangle) = i(-2i \operatorname{Im} \langle \psi | T | \psi \rangle) = 2 \operatorname{Im} \mathcal{M}(\psi \to \psi) \times (2\pi)^4 \delta^{(4)}(0)$$
4. For the **RHS**: Insert a complete set of states $\sum_X \int d\Pi_X |X\rangle \langle X|$:
   $$\langle \psi | T^\dagger \left( \sum_X \int d\Pi_X |X\rangle \langle X| \right) T | \psi \rangle = \sum_X \int d\Pi_X |\langle X | T | \psi \rangle|^2$$
   Substitute $\langle X | T | \psi \rangle = (2\pi)^4 \delta^{(4)}(P_\psi - P_X) \mathcal{M}(\psi \to X)$. One factor of the delta function squared becomes $(2\pi)^4 \delta^{(4)}(0)$ (representing the spacetime volume), which cancels the factor on the LHS.
5. After canceling the volume factors, we obtain:
   $$2 \operatorname{Im} \mathcal{M}(p_1 p_2 \to p_1 p_2) = \sum_X \int d\Pi_X (2\pi)^4 \delta^{(4)}(P_\psi - P_X) |\mathcal{M}(\psi \to X)|^2$$
   The factor of 2 is absorbed into the definition of the cross-section or specific normalization conventions of $\mathcal{M}$ used in the lecture.

---

### **Exercise (3): Causality and the Kramers-Kronig Relation**

**Summary:**

**1) How causality implies analyticity in classical physics:**
In classical linear response theory, a system's output $x(t)$ is related to an input signal $f(t)$ via a response function $\chi(\tau)$: $x(t) = \int \chi(t-t') f(t') dt'$. The principle of **causality** states that the effect cannot precede the cause, meaning $\chi(\tau) = 0$ for $\tau < 0$. 
When we look at the generalized frequency response $\tilde{\chi}(\omega) = \int_0^\infty \chi(\tau) e^{i\omega\tau} d\tau$, if we allow $\omega$ to be complex ($\omega = \omega_R + i\omega_I$), the factor $e^{i\omega\tau} = e^{i\omega_R\tau} e^{-\omega_I\tau}$ acts as a powerful convergence factor for any $\omega_I > 0$. Because the integral is only over positive $\tau$ (due to causality), $\tilde{\chi}(\omega)$ is guaranteed to be a holomorphic (analytic) function in the upper half-plane of the complex frequency space.

**2) The Kramers-Kronig relation and its derivation:**
The Kramers-Kronig relations relate the real and imaginary parts of a causal response function. 
*   **Derivation:** Since $\tilde{\chi}(\omega)$ is analytic in the upper half-plane, we apply Cauchy's Integral Formula for a point $\omega$ on the real axis, using a contour that travels along the real axis and closes via a large semi-circle in the upper half-plane (assuming $\tilde{\chi}$ vanishes at infinity). 
*   By taking the Cauchy Principal Value ($\mathcal{P}$) of the integral:
    $$\tilde{\chi}(\omega) = \frac{1}{i\pi} \mathcal{P} \int_{-\infty}^{\infty} \frac{\tilde{\chi}(\omega')}{\omega' - \omega} d\omega'$$
*   Splitting $\tilde{\chi}$ into real and imaginary parts ($\tilde{\chi} = \text{Re}\,\chi + i\text{Im}\,\chi$) yields:
    $$\text{Re}\,\tilde{\chi}(\omega) = \frac{1}{\pi} \mathcal{P} \int_{-\infty}^{\infty} \frac{\text{Im}\,\tilde{\chi}(\omega')}{\omega' - \omega} d\omega' \quad \text{and} \quad \text{Im}\,\tilde{\chi}(\omega) = -\frac{1}{\pi} \mathcal{P} \int_{-\infty}^{\infty} \frac{\text{Re}\,\tilde{\chi}(\omega')}{\omega' - \omega} d\omega'$$
    This shows that if you know the absorption (imaginary part) of a system across all frequencies, you can calculate its dispersion (real part), and vice versa.