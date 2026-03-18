# Lecture 4

Chasse_neige

## On-Shell Factorization & Weinberg Soft Theorem

### A model of light bulbs

Assume that there exists a local operator $O(x)$ having a non-zero element between vacuum & IPS
\[
\langle \vec{P} |O(0)| \Omega \rangle = 1
\]

\[
\Rightarrow \langle \vec{P} | O (x) | \Omega \rangle = e^{- i \vec{p} \cdot \vec{x}}, \quad p^{0} = \sqrt{p^{2} + m^{2}}
\]

Modify Hamiltonian $H \to H + g \int\dd{\vec{x}} j (t, \vec{x}) O (t, \vec{x})$, where $|g|^{2}$ means the “lumnosity”
\[
S_{\phi \psi} [j] = \langle \Phi_{-} | T \{e^{- i g\int \dd{t} \dd{\vec{x}} j O}\} | \Psi_{+} \rangle
\]
$O$ is the Heisenberg picture operator, it evolves by $H$ (not $H + g\int jO$)

If $g$  is small, we can expand $S_{\phi \psi} [j]$ in $g$, where the most general object is
\[
G_{\phi \psi} (x_{1}, \cdots, x_{n}) = \langle \Phi_{-} | T \{O (x_{1}) \cdots O(x_{n})\} | \Psi_{+} \rangle
\]
Let $y_{i} = x_{i} - x_{1}$ ($y_{1} = 0$), then
\[
\langle \Phi_{-} | T \{O (x_{1}) \cdots O(x_{n})\} | \Psi_{+} \rangle = e^{i (p_{\phi} - p_{\psi}) \cdot x_{1}} \times \langle \Phi_{-} | T \{O (0) \cdots O(y_{n})\} | \Psi_{+} \rangle
\]

### On-shell Factorization

In momentum space the n-point Green function is
\[
G (k_{1}, \cdots, k_{n}) \tilde{\delta} (\sum_{i} k_{i}) \equiv \int \dd[4]{x}_{a} e^{- i k_{a} \cdot x_{a}} \langle \Omega | O_{1} (x_{1}) \cdots O_{n} (x_{n}) | \Omega \rangle
\]
scalar particles only. $G$ is a function of $K_{12}^{2},\cdots$
\[
K_{1 \cdots n}^{\mu} = k_{1}^{\mu} + \cdots + k_{n}^{\mu}
\]
We want $G$‘s behavior on the $s_{l} = - K_{1 \cdots l}^{2}$ plane by the condtion $K_{1 \cdots l}^{0} < 0$.

$G (s_{l})$ develops a simple pole at $s^{2} = m^{2}$ when approaching it from $K_{1 \cdots n}^{0} < 0$ , if there exists 1 PS of A. $\ket{\vec{P}}$ with mass m having non vanishing M-matrix element
\[
G_{L} \tilde{\delta} (K_{1 \cdots l} + p) \equiv \int \langle \vec{P} | T \{O_{1}(x_{1}) \cdots O_{l} (x_{l})\} | \Omega \rangle
\]

\[
G_{E} \tilde{\delta} (K_{l + 1 \cdots n} - p) \equiv \int \langle \Omega | T \{O_{l + 1}(x_{l + 1}) \cdots O_{n} (x_{n})\} | \vec{P} \rangle
\]
And we have
\[
\lim_{s \to m^{2}} G (s_{l}) = G_{L} \times \frac{-i}{-s + m^{2} - i \epsilon} \times G_{E}
\]
In reality the 2 $\to$ 2 scattering never divs, for is A is stable, it requires $m_{A} < 2m_{\phi}$, and of we cutoff by $\Gamma$, the pole will shift by
\[
m^{2} \to (m - \frac{i}{\Gamma})^{2}
\]
