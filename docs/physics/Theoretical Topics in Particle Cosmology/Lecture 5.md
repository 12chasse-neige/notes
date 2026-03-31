# Lecture 5

Chasse_neige

## Massless Amplitudes

(Bootstrap)
$$
M = M(p_{1}, \cdots, p_{n}) e_{1} \cdots e_{l} e_{l + 1}^{*} \cdots e_{n}^{*}
$$
but we have $p_{i}^{2} = 0$ and $e$s are non Lorentz covariant.

### Spinor Helicity Formalism

$$
SO (3,1) = SO(3)_{L} \otimes SO (3)_{R}
$$

$$
J_{L}^{i} = \frac{J_{i} - i K_{i}}{2} \quad J_{R}^{i} = \frac{J_{i} + i K_{i}}{2}
$$

-  SO(3): spinor $\psi_{a} (a = 1, 2)$ - $c$  number

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

Polarization $e^{\pm}_{\mu} (p)$: $e^{\pm}_{\mu}$ has a L-index $\Rightarrow e^{\pm}_{\mu} = | \rangle[| \times \text{"scalar"}$

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

