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
\mathcal{H}_{0} \equiv \oplus_{p = 0}^{\infty} [\mathcal{H}^{(1)}]^{p}
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
where $A_{\Phi \Psi}$ is a scalar made of p and q’s.

#### Refined version of P-inv.

Globel symmetry act quasi-locally. In particular, we can perform separate LGTs to each particle in $\ket{\Psi_{+}}$ and $\ket{\Phi_{-}}$. We require $S_{\Phi \Psi}$ transform covariantly as UIRs of LGTs.
$$
\braket{\Phi_{-}}{\{\cdots (\vec{p}, \sigma)_{i} \cdots\}_{+}} \to \sum_{\sigma'} W_{\sigma' \sigma'} \braket{\Phi_{-}}{\{\cdots (\vec{p}, \sigma')_{i} \cdots\}_{+}}
$$
$A_{\Phi \Psi}$ is a Lorentz scalar constructed by any of $p^{\mu}$ and $q^{\mu}$ s, and $e_{i}$ for each particle.

### Locality

very important, highly ununique - Analyticity

Cluster decomposition: for an in state $\ket{\Psi_{+}} = \ket{\{\psi_{1}, \psi_{2}\}_{+}}$, where $\psi_{1}$ and  $\psi_{2}$ are very far apart.
$$
\lim_{|\vec{x}_{1} -\vec{x}_{2}| \to \infty} \braket{\{\phi_{1}, \phi_{2}\}_{-}}{\{\psi_{1}, \psi_{2}\}_{+}} = \braket{\phi_{1-}}{\psi_{1+}} \braket{\phi_{2-}}{\psi_{2+}}
$$
Question: How singular can $A_{\Phi \Psi}$ be as a function of p and q?

It can be very singular as $\delta^{3} (\vec{p}_{1}- \vec{q}_{1}) \delta^{3} (\vec{p}_{2} - \vec{q}_{2})$

