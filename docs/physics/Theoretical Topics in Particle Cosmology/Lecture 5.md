# Lecture 5

Chasse_neige

## Massless Amplitudes

(Bootstrap)
$$
M = M(p_{1}, \cdots, p_{n}) e_{1} \cdots e_{l} e_{l + 1}^{*} \cdots e_{n}^{*}
$$
but we have $p_{i}^{2} = 0$ and $e$s are non Lorentz covariant.

### Spinor Helicity Formalism

We use the fact that the Lorentz group is, at least locally, a product of two $\text{SO}(3)$ groups: $\text{SO}(3,1) = \text{SO}(3)_{L} \otimes \text{SO}(3)_{R}$. So, we use spinors of two $\text{SO}(3)$'s to construct everything. More explicitly, the generators of two $\text{SO}(3)$ can be written in terms of Lorentz generators as
$$
SO (3,1) = SO(3)_{L} \otimes SO (3)_{R}
$$

$$
J_{L}^{i} = \frac{J_{i} - i K_{i}}{2} \quad J_{R}^{i} = \frac{J_{i} + i K_{i}}{2}
$$

SO(3): spinor $\psi_{a} (a = 1, 2)$ - $c$  number
$$
\psi'_{a} = D_{ab} \psi_{a}
$$

$$
D_{ab} (\gamma, \beta, \alpha) = e^{- i \gamma \frac{\sigma_{3}}{2}} e^{- i \gamma \frac{\sigma_{2}}{2}} e^{- i \gamma \frac{\sigma_{3}}{2}}
$$

Two types of spinors: 
$$
\begin{cases}
(\frac{1}{2}, 0) \quad \text{left spinor}, \psi_{a} ,a = 1,2, \cdots \\
(0, \frac{1}{2}) \quad \text{right spinor}, \tilde{\psi}_{\dot{a}} ,\dot{a} = 1,2, \cdots
\end{cases}
$$
A index raised/lowered by $\epsilon_{ab}$, $\epsilon^{ab}$, $\epsilon_{\dot{a} \dot{b}}$, $\epsilon^{\dot{a} \dot{b}}$.
$$
p^{\mu}: \left(\frac{1}{2}, \frac{1}{2}\right) \to p_{a \dot{a}}
$$

$$
p_{a \dot{a}} \equiv p_{\mu} (\sigma^{\mu})_{a \dot{a}}  \quad \text{by} \quad \sigma^{\mu} \equiv (1, \sigma_{i})
$$

$$
(\bar{\sigma}^{\mu})^{\dot{a} a} = \epsilon^{\dot{a} \dot{b}} \epsilon^{ab}(\sigma^{\mu})_{b \dot{b}} = (1, - \sigma_{i})
$$

$$
p^{\dot{a} a} = p_{\mu} (\bar{\sigma}^{\mu})^{\dot{a} a}
$$

$$
(\sigma^{\mu})_{a \dot{a}} (\bar{\sigma}^{\nu})^{\dot{a} a} = -2 \eta^{\mu \nu} \Rightarrow p_{a \dot{a}} p^{\dot{a} a} = -2 p_{\mu} p^{\mu}
$$

$$
p^{\mu}p_{\mu} = 0 \Rightarrow \det p_{a \dot{a}} = 0
$$

$$
p_{a \dot{a}} = - \psi_{a} \tilde{\psi}_{\dot{a}} \Rightarrow p^{\dot{a} a} = - \tilde{\psi}^{\dot{a}} \psi^{a}
$$

$$
\ket{p} \equiv \psi_{a} \quad \bra{p} \equiv \tilde{\psi}^{\dot{a}} \quad [p| \equiv \tilde{\psi}_{\dot{a}}
$$

$$
\Rightarrow p_{a \dot{a}} = - \ket{p} [p| \quad p^{\dot{a} a} = - |p] \bra{p}
$$

Inner product
$$
\langle p_{1} p_{2} \rangle \equiv \psi_{1}^{a} \psi_{2a} \quad [p_{1} p_{2}] \equiv \tilde{\psi}_{1 \dot{a}} \tilde{\psi}_{2}^{\dot{a}}
$$
are antisymmetric
$$
\langle pq \rangle [pq] = 2 p_{\mu} q^{\mu}
$$

$$
p_{a \dot{a}}  = \begin{pmatrix}
-p^{0} + p^{3} & p^{1} - i p^{2} \\
p^{1} + i p^{2} & - p^{0} - p^{3}
\end{pmatrix}
$$

$$
\ket{p} = \frac{1}{\sqrt{p^{0} + p^{3}}} \begin{pmatrix}
-p^{1} + i p^{2} \\
p^{0} + p^{3}
\end{pmatrix}
$$

$$
|p] = \frac{1}{\sqrt{p^{0} + p^{3}}} \begin{pmatrix}
p^{0} + p^{3} \\
p^{1} + i p^{2}
\end{pmatrix}
$$

Polarization $e^{\pm}_{\mu} (p)$: $e^{\pm}_{\mu}$ has a L-index $\Rightarrow e^{\pm}_{\mu} = | \rangle[| \times \text{scalar}$

has helicity $\pm 1$. $\Rightarrow |p]^{2}, \frac{|p]}{|p \rangle}, \frac{1}{|p \rangle^{2}}$ ( $\ket{p} \to e^{- i \delta} \ket{p}$ leads to $\bra{p} \to e^{-i \delta} \bra{p}$;  $|p] \to e^{i \delta} |p]$ leads to $[p| \to e^{i \delta} [p|$.)

$[e^{\pm}_{\mu} = 0]$ but $[|p \rangle] = \frac{1}{2}$

“Ref momentum” q $q^{2} = 0, q \cdot p \neq 0$
$$
e^{+} \propto \frac{\ket{q} [p|}{\langle pq \rangle}
$$
satisfies all conditions.
$$
e^{-} = \frac{|q] \bra{p}}{[pq]}
$$
Also define spin-s
$$
e^{+s} = \left(\frac{\ket{q} [p|}{\langle pq \rangle}\right)^{s} \\
e^{-s} = \left(\frac{|q] \bra{p}}{[pq]}\right)^{s}
$$
Consider the polarization tensors under LGT
$$
\ket{p} \to e^{-i \delta} \ket{p} \\
\ket{q} \to \alpha \ket{q} +  \beta \ket{p}
$$

$$
e^{+} \to e^{2 i \delta} \left(\frac{\ket{q} [p|}{\langle pq \rangle} + \frac{\alpha}{\beta} \frac{\ket{p} [p|}{\langle pq \rangle}\right)
$$

## 3-point Massless Amplitudes

Couting the DOF of the system: $4 \times 3 - 3 - 10 = -1$, so this process is non-physical.
$$
p_{1} \cdot p_{2} = \cdots = 0
$$
In the spinor helicity formalism
$$
\langle p_{1} p_{2} \rangle [p_{1} p_{2}] = 0
$$
Analytic continuation: $p_{i}^{\mu} \in \mathbb{C}$, then the on-shell conditions will become
$$
p_{1} \cdot p_{2} = 0 \Rightarrow \begin{cases}
\langle 12 \rangle = 0, \quad [12] \neq 0 \\
\langle 12 \rangle \neq 0, \quad [12] = 0 
\end{cases}
$$
Convention: for all outgoing particles, let $p^{\mu} = - p^{\mu}$, which will lead to 
$$
\sum_{a} p_{a}^{\mu} = 0, \quad e^{\pm} \to e^{\mp}
$$
So we can get the most general 3pt amplitudes of species $a,b,c$, momentum $p_{1}, p_{2}, p_{3}$ and helicity $h_{1}, h_{2}, h_{3}$
$$
M (1_{a}, 2_{b}, 3_{c}) = M_{abc} (\psi_{1}, \psi_{2}, \psi_{3}, \tilde{\psi}_{\dot{1}}, \tilde{\psi}_{\dot{2}}, \tilde{\psi}_{\dot{3}})
$$
We can use the principles to constrain the form of $M$

1.  Poincare inv. + LGT
    $$
    p_{i} \cdot p_{j} = 0 \Rightarrow \langle ij \rangle [ij] = 0  \quad (i \neq j)
    $$
    let $\langle 12 \rangle = 0$, we can derive
    $$
    \sum_{i} | i \rangle [i| = 0 \Rightarrow \langle 13 \rangle = \langle 23 \rangle = 0
    $$
    Similarly, we can get if $[12] = 0$, then
    $$
    \sum_{i} | i \rangle [i| = 0 \Rightarrow [13] = [23] = 0
    $$
    This will constrain $M$ in the form of
    $$
    M (1, 2 ,3 ) = M^{L}_{abc} (\psi_{1}, \psi_{2}, \psi_{3}) \, \text{or} \, M^{R}_{abc} (\tilde{\psi}_{\dot{1}}, \tilde{\psi}_{\dot{2}}, \tilde{\psi}_{\dot{3}})
    $$
    LGT: Rotate particle i around $\vec{p}_{i}$
    $$
    z_{i} \equiv e^{-i \theta_{i} \vec{J} \cdot \hat{p}_{i}}
    $$
    Under this rotation, the spinors will act as
    $$
    \psi_{i} \to z_{i}^{- \frac{1}{2}} \psi_{i} \\
    \tilde{\psi}_{i} \to z_{i}^{\frac{1}{2}} \tilde{\psi}_{i}
    $$
    So the M will perform as
    $$
    M^{L}_{abc} (\psi_{1}, \psi_{2}, \psi_{3}) \to z_{1}^{-h_{1}} z_{2}^{-h_{2}} z_{3}^{-h_{3}} M^{L}_{abc} (\psi_{1}, \psi_{2}, \psi_{3})
    $$

    $$
    M^{R}_{abc} (\tilde{\psi}_{\dot{1}}, \tilde{\psi}_{\dot{2}}, \tilde{\psi}_{\dot{3}}) \to z_{1}^{h_{1}} z_{2}^{h_{2}} z_{3}^{h_{3}} M^{R}_{abc} (\tilde{\psi}_{\dot{1}}, \tilde{\psi}_{\dot{2}}, \tilde{\psi}_{\dot{3}})
    $$

    Ansats: $M^{L}_{abc} = \lambda^{L}_{abc} \langle 12 \rangle^{n_{1}} \langle 23 \rangle^{n_{2}} \langle 31 \rangle^{n_{3}}$, solve the results of the LGTs, the amplitude can be represented as
    $$
    \lambda^{L}_{abc} \langle 12 \rangle^{h_{3} - h_{1} - h_{2}} \langle 23 \rangle^{h_{1} - h_{2}-  h_{3}} \langle 31 \rangle^{h_{2} - h_{1} - h_{3}}
    $$
    Similarly, the right hand amplitude will have the form
    $$
    \lambda^{R}_{abc} [12]^{- h_{3} + h_{1} + h_{2}} [23]^{- h_{1} + h_{2} +  h_{3}} [31]^{- h_{2} + h_{1} + h_{3}}
    $$

2.  

2.  Locality
    $$
    [\langle 12 \rangle^{h_{3} - h_{1} - h_{2}} \langle 23 \rangle^{h_{1} - h_{2}-  h_{3}} \langle 31 \rangle^{h_{2} - h_{1} - h_{3}}] = - (h_{1} + h_{2} + h_{3})
    $$
    
    $$
    [[12]^{- h_{3} + h_{1} + h_{2}} [23]^{- h_{1} + h_{2} +  h_{3}} [31]^{- h_{2} + h_{1} + h_{3}}] = h_{1} + h_{2} + h_{3}
    $$
    because the negative dimensions requires something like $\frac{1}{p}$, which is not allowed (singularity here must come from on-shell factorization), and dim-0 also has similar problems
    $$
    h_{1} + h_{2} + h_{3} = 0 \Rightarrow \begin{cases}
    h_{1} = h_{2} = h_{3} = 0 \\
    h_{i} > 0, h_{j} < 0 \quad (\cross)
    \end{cases}
    $$

We can choose the left or right hand form of the amplitude according to whether $\sum_{i} h_{i} > 0$. 

### Examples

3 particles have the same spin-s (parity even)
$$
M (1^{+}_{a}, 2^{+}_{b}, 3^{+}_{c}) = \lambda_{abc} ([12][23][31])^{s}
$$

$$
M (1^{-}_{a}, 2^{-}_{b}, 3^{-}_{c}) = \lambda_{abc} (\langle 12 \rangle \langle 23\rangle \langle 31\rangle)^{s}
$$

$$
M (1^{+}_{a}, 2^{+}_{b}, 3^{-}_{c}) = \kappa_{abc} \left(\frac{[12]^{3}}{[23][31]}\right)^{s}
$$

$$
M (1^{-}_{a}, 2^{-}_{b}, 3^{+}_{c}) = \kappa_{abc} \left(\frac{\langle12\rangle^{3}}{\langle23\rangle\langle31\rangle}\right)^{s}
$$

Spin-statistics (generalized)
$$
M (1_{a}^{+}, 2_{b}^{-}) \leftrightarrow M (2_{b}^{-}, 1_{a}^{+})
$$
For odd/even $s$, the coupling $\lambda/\kappa$ are antisymmetric/symmetric under $i \leftrightarrow j$ exchange.

Massless odd-spin particles cannot have cubic self-interactions with less 3 species.

In particular, a photon cannot have cubic self-interaction (non-perturbatively).

#### Spin-1 $N_{F} \geq 3$

$$
M (1^{+}_{a}, 2^{+}_{b}, 3^{+}_{c}) = \lambda_{abc} [12][23][31]
$$

$$
M (1^{+}_{a}, 2^{+}_{b}, 3^{-}_{c}) = \kappa_{abc} \frac{[12]^{3}}{[23][31]}
$$

Where 
$$
[\lambda] = -2 \\
[\kappa] = 0
$$
We call the most important coupling in the macroscopic world minimal coupling ($\kappa$ here).

#### Spin-2 

$$
M (1^{+}, 2^{+}, 3^{+}) = \lambda ([12][23][31])^{2}
$$

$$
M (1^{+}, 2^{+}, 3^{-}) = \kappa \left(\frac{[12]^{3}}{[23][31]}\right)^{2}
$$

Where 
$$
[\lambda] = -5 \\
[\kappa] = -1
$$
Minimal coupling for gravitation is $[\kappa] = -1$.
