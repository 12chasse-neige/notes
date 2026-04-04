# Lecture 4

Chasse_neige

## On-Shell Factorization

### A model of light bulbs

Assume that there exists a local operator $O(x)$ having a non-zero element between vacuum & IPS
$$
\langle \vec{P} |O(0)| \Omega \rangle = 1
$$

$$
\Rightarrow \langle \vec{P} | O (x) | \Omega \rangle = e^{- i \vec{p} \cdot \vec{x}}, \quad p^{0} = \sqrt{p^{2} + m^{2}}
$$

Modify Hamiltonian $H \to H + g \int\dd{\vec{x}} j (t, \vec{x}) O (t, \vec{x})$, where $|g|^{2}$ means the “lumnosity”
$$
S_{\phi \psi} [j] = \langle \Phi_{-} | T \{e^{- i g\int \dd{t} \dd{\vec{x}} j O}\} | \Psi_{+} \rangle
$$
$O$ is the Heisenberg picture operator, it evolves by $H$ (not $H + g\int jO$)

If $g$  is small, we can expand $S_{\phi \psi} [j]$ in $g$, where the most general object is
$$
G_{\phi \psi} (x_{1}, \cdots, x_{n}) = \langle \Phi_{-} | T \{O (x_{1}) \cdots O(x_{n})\} | \Psi_{+} \rangle
$$
Let $y_{i} = x_{i} - x_{1}$ ($y_{1} = 0$), then
$$
\langle \Phi_{-} | T \{O (x_{1}) \cdots O(x_{n})\} | \Psi_{+} \rangle = e^{i (p_{\phi} - p_{\psi}) \cdot x_{1}} \times \langle \Phi_{-} | T \{O (0) \cdots O(y_{n})\} | \Psi_{+} \rangle
$$

### On-shell Factorization

In momentum space the n-point Green function is
$$
G (k_{1}, \cdots, k_{n}) \tilde{\delta} (\sum_{i} k_{i}) \equiv \int \dd[4]{x}_{a} e^{- i k_{a} \cdot x_{a}} \langle \Omega | O_{1} (x_{1}) \cdots O_{n} (x_{n}) | \Omega \rangle
$$
scalar particles only. $G$ is a function of $K_{12}^{2},\cdots$
$$
K_{1 \cdots n}^{\mu} = k_{1}^{\mu} + \cdots + k_{n}^{\mu}
$$
We want $G$‘s behavior on the $s_{l} = - K_{1 \cdots l}^{2}$ plane by the condtion $K_{1 \cdots l}^{0} < 0$.

$G (s_{l})$ develops a simple pole at $s^{2} = m^{2}$ when approaching it from $K_{1 \cdots n}^{0} < 0$ , if there exists 1 PS of A, $| \vec{P} \rangle$, with mass $m$ having non vanishing M-matrix element
$$
G_{E} \tilde{\delta} (K_{1 \cdots l} + p) \equiv \int \langle \vec{P} | T \{O_{1}(x_{1}) \cdots O_{l} (x_{l})\} | \Omega \rangle
$$

$$
G_{L} \tilde{\delta} (K_{l + 1 \cdots n} - p) \equiv \int \langle \Omega | T \{O_{l + 1}(x_{l + 1}) \cdots O_{n} (x_{n})\} | \vec{P} \rangle
$$
And we have
$$
\lim_{S_{l} \to m^{2}, K^{0}_{1 \cdots l} < 0} G (S_{l}) = G_{L} \times \frac{-i}{-S_{l} + m^{2} - i \epsilon} \times G_{E}
$$
In reality the 2 $\to$ 2 scattering never divs, for is A is stable, it requires $m_{A} < 2m_{\phi}$, and if we cutoff by $\Gamma$, the pole will shift by
$$
m^{2} \to \left(m - \frac{i}{\Gamma}\right)^{2}
$$
Proof. (sketch)

The pole is from on-shell propagation of a 1 PS $\propto \theta \left(\text{min} \{x^{0}_{l + 1}, \cdots,x^{0}_{n}\} - \text{max} \{x^{0}_{1}, \cdots, x^{0}_{l}\}\right)$
$$
\theta (z) = - \frac{1}{2 \pi i} \int_{- \infty}^{\infty} \frac{\dd{\omega}}{\omega + i\epsilon} e^{- i \omega z}
$$

$$
G (k_{1}, \cdots, k_{n}) \tilde{\delta} (\sum_{i} k_{i}) \equiv \int \dd[4]{x}_{a} e^{- i k_{a} \cdot x_{a}}  \frac{-1}{2 \pi i} \int_{- \infty}^{\infty} \frac{\dd{\omega}}{\omega + i\epsilon} e^{- i \omega [min - max]} \langle \Omega | O_{1} (x_{1}) \cdots O_{n} (x_{n}) | \Omega \rangle
$$

$$
\langle \Omega | O_{1}  \cdots O_{n}  | \Omega \rangle = \langle \Omega | T \{O_{l + 1} \cdots O_{n}\} T \{O_{1} \cdots O_{l}\} | \Omega \rangle
$$

We can  insert a complete basis into the two time-evolving operators, and only the 1 PS in the basis lead to poles.
$$
\langle \Omega | O_{1}  \cdots O_{n}  | \Omega \rangle = \int \frac{\dd[3]{\vec{p}}}{(2 \pi)^{3}} \frac{1}{2 E_{p}} \langle \Omega | T \{O_{l + 1} \cdots O_{n}\} | \vec{P} \rangle \langle \vec{P} | T \{O_{1} \cdots O_{l}\} | \Omega \rangle + \cdots
$$

$$
\langle \Omega | T \{O_{l + 1} (x_{l + 1}) \cdots O_{n} (x_{n})\} | \Omega \rangle\to  e^{i \vec{p} \cdot \vec{x}_{l + 1}}\langle \Omega | T \{O_{l + 1} (0) \cdots O_{n} (y_{n})\} | \Omega \rangle \quad (y_{i} = x_{i} - x_{l + 1})
$$

Integrate other variables, we can get a form similar to
$$
\frac{1}{\omega + i\epsilon} \to \frac{1}{\vec{K}^{0}_{1 \cdots l} + \sqrt{K^{2}_{1 \cdots l} + m^{2}} + i \epsilon}
$$
For non-zero spin
$$
\lim_{S_{l} \to m^{2}} G (S_{l}) = \sum_{h} G_{L} (h) \frac{-i}{-S_{l} + m^{2} - i\epsilon} G_{E} (-h)
$$

### LSZ Reduction

$$
G_{\Omega \Omega} \tilde{\delta} = \int_{x} e^{- i \sum k\cdot x} \langle \Omega | T \{O_{1} (x_{1}) \cdots O_{n} (x_{n})\} | \Omega \rangle
$$

Put all external momenta on shell
$$
k_{i}^{0} = \mp \sqrt{\vec{k}_{i}^{2} + m_{i}^{2}} \quad \text{is}
\begin{cases}
- : i = 1, \cdots, l \\
+ : i = l+1, \cdots, n
\end{cases}
$$
Let $k_{1}^{2} \to - m_{1}^{2}$ and $k^{0}_{1} < 0$
$$
G_{L} \tilde{\delta} = \int \dd[4]{x} e^{-i k \cdot x} \langle \Omega | O_{1} (x) | \vec{P} \rangle = (2 \pi)^{4} \delta^{4} (k - p)
$$

$$
G_{L} = 1
$$

$$
\lim_{k_{1}^{2} \to -m_{1}^{2}, k_{1}^{0} < 0} G_{\Omega \Omega} (k_{1}, \cdots, k_{n}) = \frac{-i}{k_{1}^{2} + m_{1}^{2} - i \epsilon} \times G_{\vec{k}_{1} \Omega} (k_{2}, \cdots, k_{n})
$$

$$
\lim_{x_{1}^{0} \to \infty} G (x_{1}, \cdots, x_{n}) \to e^{i E_{p} x_{1}^{0} - i \vec{p}_{1} \cdot \vec{x}_{1}} \tilde{G} (x_{2}, \cdots, x_{n})
$$

and notice that $\int \dd[4]{x}_{1} e^{- i k_{1} \cdot x_{1}} G$ is divergent when $k_{1}^{\mu} \to -p^{\mu}$

Similarly, we put all $p_{i}^{2} \to - m_{i}^{2}$, and this will lead to
$$
G_{\Omega \Omega} \to \prod_{i = 1}^{l} \frac{-i}{k_{i}^{2} + m_{i}^{2} -i \epsilon}
$$
So we can get the LSZ reduction formula
$$
\lim_{k_{a}^{2} \to - m_{a}^{2}} G_{\Omega \Omega} (k_{1}, \cdots k_{n}) = \prod_{a = 1}^{n} \frac{-i}{k_{a}^{2} + m_{a}^{2} - i \epsilon} \langle \{\vec{p}_{l + 1} \cdots \vec{p}_{n}\}_{-} | \{\vec{p}_{1} \cdots \vec{p}_{n}\}_{+} \rangle
$$

## Weinberg Soft Theorem

Try to find the relationship between the scattering amplitude of $n$ particles and $n + 1$ particles, where the extra particle is soft, i.e. $k \to 0$. We call the amplitude $M_{\phi, \psi}$ and $M_{\phi \gamma, \psi}$

### Minimal Coupling

Consider a massless spin-1 particle (photon), the Green function of a scalar particle $\phi$ and a photon $\gamma$ is
$$
G(p, p', q) = g e_{\pm \mu}^{*} (q) p^{\mu} F(p^{2}, p'^{2}, q^{2})
$$
We assume that all the particles are on-shell, so the form factor $F$ is a constant, and we can set $F = 1$. The amplitude is
$$
G = g e^{*}_{\pm} \cdot p \quad (G \to G + \alpha g q\cdot p)
$$

### Soft Theorem

Assume that there are $L$ particles in the initial state and $N$ particles in the final state, and we want to find the relationship between $M_{\phi \gamma, \psi}$ and $M_{\phi, \psi}$. 

#### Option 1

The soft photon is emitted in the initial state
$$
M_{\phi \gamma, \psi}^{(a) \pm} = M_{\phi, \psi} \times \frac{-i}{(p_{a} - q)^{2} + m^{2} - i \epsilon} \times g_{a} e^{\pm *}_{\mu} (q) p_{a}^{\mu}
$$
while $q \to 0$
$$
M_{\phi \gamma, \psi}^{(a) \pm} \to M_{\phi, \psi} \times \frac{g_{a} e^{\pm *}_{\mu} (q) p_{a}^{\mu}}{-2 p_{a} \cdot q - i\epsilon}
$$

#### Option 2

The soft photon is emitted in the final state
$$
M_{\phi \gamma, \psi}^{(b) \pm} \to M_{\phi, \psi} \times \frac{g_{b} e^{\pm *}_{\mu}(q) p'^{\mu}_{b}}{2 p'_{b} \cdot q - i \epsilon}
$$

#### Option 3

The soft photon is emitted in the internal line, which is regular when $q \to 0$.

So the total amplitude gives out
$$
\lim_{q \to 0} M_{\phi \gamma, \psi} = M_{\phi, \psi} \times \left(\sum_{a = 1}^{L} \frac{g_{a} e^{\pm *}_{\mu} (q) p_{a}^{\mu}}{-2 p_{a} \cdot q - i\epsilon} + \sum_{b = 1}^{N} \frac{g_{b} e^{\pm *}_{\mu} (q) p'^{\mu}_{b}}{2 p'_{b} \cdot q - i \epsilon}\right) + O (q^{0})
$$

### Implications

Lorents inv. of $M_{\phi \gamma, \psi}$ requires that $\sum_{a} g_{a} = \sum_{b} g_{b}$, which is the charge conservation law.

Proof: do a LGT to the photon polarization vector
$$
e_{\mu}^{\pm *} \to e_{\mu}^{\pm *} + \alpha q_{\mu}
$$

$$
\Rightarrow \Delta M_{\phi \gamma, \psi} \propto - \frac{\alpha}{2} \left[\sum_{a= 1^{L}} q_{a} - \sum_{b = 1}^{N} g_{b} \right] = 0
$$

$g_{a}$: coupling constant of the $a$-th particle, which is also the charge of the particle. So we have the charge conserved in the scattering process.

The minimal coupling to a massless spin-1 particle demands charge conservation.

Minimal coupling actually refers to a long-range interaction under classical limit.

### Spin-2 (Graviton)

#### Minimal Coupling

Consider a massless spin-2 particle, the Green function of a scalar particle $\phi$ and a graviton $h$ is
$$
G(p, p', q) = g e_{\pm \mu \nu}^{*} (q) p^{\mu} p^{\nu} F(p^{2}, p'^{2}, q^{2})
$$
We assume that all the particles are on-shell, so the form factor $F$ is a constant, and we can set $F = 1$. The amplitude is
$$
G = g e^{\pm *}_{\mu \nu} p^{\mu} p^{\nu}
$$

#### Soft Theorem 

Similarly, we can get the difference of the amplitude with and without a soft graviton
$$
\lim_{q \to 0} M^{\pm}_{\phi h, \psi} = M_{\phi \psi} \times \left[\sum_{a = 1}^{L} \frac{g_{a} e^{\pm *}_{\mu \nu} p^{\mu} p^{\nu}}{-2 p_{a} \cdot q}  + \sum_{b = 1}^{N} \frac{g_{b} e^{\pm *}_{\mu \nu} p'^{\mu} p'^{\nu}}{2 p'_{b} \cdot q}\right] + O (q^{0})
$$

#### Implication

Using the L-inv. of the $M^{\pm}_{\phi h, \psi}$, we can get that all the coupling constants, $g_{a}$ and $g_{b}$, are the same, which is the equivalence principle in classical gravity.

The minimal coupling to a massless spin-2 particle is universal.

### Spin-s

$$
\sum_{a = 1}^{L} g_{a} p^{\mu_{1}} \cdots p^{\mu_{s - 1}} = \sum_{b = 1}^{N} g_{b} p_{b}^{\prime \mu_{1}} \cdots p_{b}^{\prime \mu_{s}}
$$

Massless particles with spin $\geq$ 3 cannot mediate long-range force.

