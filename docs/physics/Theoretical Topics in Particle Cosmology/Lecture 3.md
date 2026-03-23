# Lecture 3

Chasse_neige

### Foresee

How fundamental principles restrain interactions, delve into scattering amplitude (using analyticity to restrain the form of the scattering amplitude).

## Scattering Theory

### Axioms of Scattering Theory

1. Assume a Hilbert Space $\mathcal{H}$ with a Hamiltonian $H$, there exists a lowest-energy state - vacuum $\ket{\Omega}$, which is normalized. $\ket{\Omega}$ trivially spans a subspace of $\mathcal{H}$: $\mathcal{H}^{(0)}$.

2. Assume that there exists a subspace $\mathcal{H}^{(1)} \in \mathcal{H}$ - 1PS(one-particle state), the state of all stable particles. 1 PS is specified by $\ket{n, \vec{p}, \sigma}$.

$$
H \ket{n, \vec{p}, \sigma} = E_{p} \ket{n, \vec{p}, \sigma} \quad E_{p} = \sqrt{m^{2} + p^{2}}
$$

​	Normalize 1 PS: 
$$
\braket{\vec{p}}{\vec{q}} = 2 E_{p} (2 \pi)^{3} \delta^{3} (\vec{p} - \vec{q})
$$
​	The complete Hilbert space
$$
\mathcal{H} = \mathcal{H}^{(0)} \oplus \mathcal{H}^{(1)} \oplus \mathcal{H}_{\text{rest}}
$$

#### Fock Space

Redifine the Hilbert Space as
$$
\mathcal{H}_{0} \equiv \mathop{\oplus}_{p = 0}^{\infty} [\mathcal{H}^{(1)}]^{p}
$$

$$
[\mathcal{H}^{(1)}]^{0} \equiv \mathcal{H}^{(0)}
$$

Naturally, we induce the Hamiltonian $H_{0}$ (‘free Hamiltonian’), and we can interpret  $H - H_{0}$ as interaction.

3. We can choose a complete set of eigenstate of $\mathcal{H}$ called in states
   $$
   \ket{\Psi_{+}} \equiv | \{n_{1}, \vec{p}_{1}, \sigma_{1} , \cdots , n_{N}, \vec{p}_{N}, \sigma_{N}\}_{+} \rangle \quad N = 0, 1, 2, \cdots
   $$
   and $\ket{\Psi_{+}}$ asymptotically approach $\ket{\Psi_{0}} \in \mathcal{H}_{0}$ as $t \to \infty$. (in the wave-packet sense)

$$
\lim_{t \to -\infty} \int_{p} g (\{\vec{p}\}) \ket{\{\vec{p}\}_{+}} = \int_{p} g (\{\vec{p}\}) \ket{\{\vec{p}\}_{0}}
$$

​	where $g$ is the wave packet. Normalize $\ket{\Psi_{+}}$ in the same way as $\ket{\Psi_{0}}$. However, in a system with Lang-range force, $\ket{\Psi_{+}} \to \ket{\Psi_{0}}$ 	not fast enough which will induce IR divergence.

4. Another complete set of the eigenstates of the full Hamiltonian $H$, approaching multiparticle states in the far future. ‘out state’, we call them $\ket{\Psi_{-}}$. By construction 

$$
\ket{\Psi_{-}} \begin{cases}
 = \ket{\Psi_{+}} & (\text{if} \ket{\Psi_{+}} \in \mathcal{H}^{(0)} \oplus \mathcal{H}^{(1)}) \\
 \neq \ket{\Psi_{+}} & (\text{otherwise})
\end{cases}
$$

5. Amplitude $\ket{\Psi_{+}} \to \ket{\Phi_{-}}$

    S-matrix $S_{\Phi \Psi} = \braket{\Phi_{-}}{\Psi_{+}}$

   S-operator: acting on states in $\mathcal{H}_{0}$
   $$
   \langle \Phi_{0} | S | \Psi_{0} \rangle \equiv \braket{\Phi_{-}}{\Psi_{+}}
   $$
   

## Properties of S-matrix

Lorentz inv, Locality, Unitarity

### Poincare inv.

$$
\comm{S}{H}  = \comm{S}{P} = \comm{S}{J} = \comm{S}{K} = 0
$$

Consequences: $\ket{\Psi_{+}} \equiv \ket{\{\vec{p}_{1}, \cdots , \vec{p}_{M}\}_{+}}$ and $\ket{\Phi_{-}} = \ket{\{\vec{q}_{1} \cdots, \vec{q}_{N}\}_{-}}$
$$
S_{\Phi \Psi} = (2 \pi)^{4} \delta^{4} (q_{1} + \cdots + q_{N}- p_{1} - \cdots - p_{M}) A_{\Phi \Psi}
$$
where $A_{\Phi \Psi}$ is a scalar made of $p$ and $q$’s.

#### Refined version of P-inv.

Globel symmetry act quasi-locally. In particular, we can perform separate LGTs to each particle in $\ket{\Psi_{+}}$ and $\ket{\Phi_{-}}$. We require $S_{\Phi \Psi}$ transform covariantly as UIRs of LGTs.
$$
\braket{\Phi_{-}}{\{\cdots (\vec{p}, \sigma)_{i} \cdots\}_{+}} \to \sum_{\sigma'} W_{\sigma' \sigma'} \braket{\Phi_{-}}{\{\cdots (\vec{p}, \sigma')_{i} \cdots\}_{+}}
$$
$A_{\Phi \Psi}$ is a Lorentz scalar constructed by any of $p^{\mu}$ and $q^{\mu}$ s, and $e_{i}$ for each in-particle, and $e^{*}$ for each out-particle.

### Locality

very important, highly ununique - Analyticity

Cluster decomposition: for an in state $\ket{\Psi_{+}} = \ket{\{\psi_{1}, \psi_{2}\}_{+}}$, where $\psi_{1}$ and  $\psi_{2}$ are very far apart.
$$
\lim_{|\vec{x}_{1} -\vec{x}_{2}| \to \infty} \braket{\{\phi_{1}, \phi_{2}\}_{-}}{\{\psi_{1}, \psi_{2}\}_{+}} = \braket{\phi_{1-}}{\psi_{1+}} \braket{\phi_{2-}}{\psi_{2+}}
$$
Question: How singular can $A_{\Phi \Psi}$ be as a function of p and q?

It can be very singular as $\delta^{3} (\vec{p}_{1}- \vec{q}_{1}) \delta^{3} (\vec{p}_{2} - \vec{q}_{2})$

Redefine the interaction matrix as
$$
A_{p_{1} p_{2} \to p_{3} p_{4}} = \delta_{13} \delta_{24} + (2 \pi)^{4} \delta^{4} (p_{1} + p_{2} - p_{3} - p_{4}) \times i M_{34,12}
$$
With the property
$$
\lim_{|\vec{x}_{1} - \vec{x}_{2}| \to \infty} M_{34,12} = 0
$$
Interpretation 
$$
\lim_{|\vec{x}_{1} - \vec{x}_{2}| \to \infty} \int \prod_{a} \left[\dd[3]{\vec{p}}_{a} e^{i \vec{p}_{a} \cdot \vec{x}_{a}}\right] M_{34,12} = 0
$$
Consider a simple example
$$
g (\vec{x}) = \int \dd[3]{\vec{p}} f(\vec{p}) e^{i \vec{p} \cdot \vec{x}}
$$
If $f(\vec{p})$ is analytic within the strip, then $g (x) \to 0$ exponentially fast as $x \to \infty$. 

We wat a long-range force $g(x) \to \frac{1}{x}$ as $x \to \infty$, which means $f(p)$ is non-analytic at $p = 0$.

#### Summary

$M$ has no singularity, other than pole/branch cuts.

### Unitarity

$S$ is unitary, which means $S^{\dagger} S = 1$.

Optical theorem: $2 \to 2$ forward scattering
$$
S = 1 + i (2 \pi)^{4} \delta^{4} (p) M
$$

$$
\Im M(p_{1} p_{2} \to p_{1} p_{2})  = \sum_{X \in \text{final states}} (2 \pi)^{4} \delta^{4} (p_{1} + p_{2} - p_{X}) |M (p_{1} p_{2} \to X)|^{2}
$$

Unitarity tells us that the poles in S-matrices cannot be more singular than simple poles.

$s = -(p_{1} + p_{2})^{2}$, if $M$ has a simple pole at $s = m^{2} - i \epsilon$
$$
M  \to \frac{R}{-s + m^{2} - i\epsilon} = P \frac{R}{-s + m^{2}} + i \pi R \delta(s - m^{2}) \\
\Rightarrow \Im M = \pi R \delta(s - m^{2})
$$
RHS of Optical theorem
$$
\sum_{X} \delta^{4} (p_{12} - p_{X}) |M|^{2} \quad M_{12 \to X} = C + \cdots
$$

$$
\Rightarrow \int \frac{\dd{\vec{p}}_{X}}{(2 \pi)^{3}} \frac{1}{2 E_{pX}} \delta^{4} (p_{X} - p_{1} - p_{2}) \times |C|^{2} + \cdots \\
\propto \delta (s - m^{2}) \times |C|^{2} + \cdots
$$

Remarks: causality [$E_{X}$]

-  P-inv., Locality, Unitarity, Causality $\Rightarrow$ Analyticity of S-matrix, which is a powerful tool to constrain the form of S-matrix.
