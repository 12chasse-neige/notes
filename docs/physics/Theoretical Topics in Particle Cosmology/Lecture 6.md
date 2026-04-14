# Lecture 6

Chasse_neige

## Four Particle Test

From 3 pt amplitude, using consistency to guess the result of 4 pt.

Tension: non-zero spin will not be compatible with locality.

We assume perturbativity in the 4 pt test and amplitudes are doinated by the on-shell pole terms. (+ analytic terms required by consistency), this means that $M$s are rational functions of all kinetic variables. We call this “tree-level approximation”.

### DoF Counting

$$
4 \times 4 - 4 - 10 = 2
$$

$$
s \equiv - (p_{1} + p_{2})^{2} \\
t \equiv - (p_{1} + p_{4})^{2} \\
u \equiv - (p_{1} + p_{3})^{2}
$$

And we have
$$
s + u + t = 0
$$
The 4 pt amplitude can be expressed as
$$
M_{4} = M_{4} (s, t, u)
$$
We assume that $M$ is a rational function.

### Most General Form of $M_{4}$

#### Self-Interact Massless Scalar

On-shell Factorization Theorem gives that in the $s$ channel
$$
\lim_{s \to 0} i M_{4} (1, 2, 3, 4) = i M_{3} (p_{1}, p_{2}, - p_{s}) \times i M_{3} (p_{s}, p_{3}, p_{4}) \times \frac{-i}{-s - i \epsilon}
$$
Doing the same thing for $t$ and $u$ channels, we can derive that
$$
M_{4} = - \mu^{2} \left(\frac{1}{s} + \frac{1}{t} + \frac{1}{u}\right) + \text{regular terms}
$$
The regular term will not contain any 1-order terms of stu
$$
\text{regular term} = \lambda_{0} + \lambda_{1} (s^{2} + t^{2} + u^{2}) + \lambda_{2} stu + \cdots
$$
From the field theory we can claim that
$$
\frac{1}{s} + \frac{1}{t} + \frac{1}{u}  \to \mu \phi^{3} \times \mu \phi^{3}
$$

$$
Const \to \lambda_{0} \phi^{4}
$$

$$
s^{2} + t^{2} + u^{2} \to \lambda_{1} (\partial_{\mu} \phi^{4})
$$

$$
stu \to \lambda_{2} (\partial_{\mu} \phi)^{2} \square (\partial_{\nu} \phi)^{2}
$$

## Yang-Mills Theory

Massless spin-1 particles ($n \geq 3$), we call these particles gluons, and the species colors. The amplitude
$$
M_{4} (1_{a}^{+}, 2_{b}^{+}, 3_{c}^{-}, 4_{d}^{-}) = [12]^{2} \langle 34 \rangle^{2} \cdot f(s,t, u)
$$

### s-channel ($s \to 0$)

$$
p_{s} \equiv p_{1} + p_{2} = - \ket{s} [s|
$$

Under this representation 
$$
\lim_{s \to 0} i M_{4} = \frac{i}{s} \sum_{e} i M_{3} (1_{a}^{+}, 2_{b}^{+}, - s_{e}^{-}) \times i M_{3} (s_{e}^{+}, 3_{c}^{-}, 4_{d}^{-}) \\ =
- \frac{i}{s} \sum_{e} \kappa_{abe} \kappa_{cde} \frac{[12]^{3}}{[1s] [s2]} \frac{\langle 34 \rangle^{3}}{\langle 3s \rangle \langle s4 \rangle}
$$
Simplify
$$
[1s] \langle s4 \rangle = [11] \langle 14 \rangle + [12] \langle 24 \rangle = [12] \langle 24 \rangle
$$

$$
\langle 3s \rangle [s2] = \langle 34 \rangle [42]
$$

Define
$$
\alpha = \sum_{e} \kappa_{abe} \kappa_{ecd}
$$
Then the amplitude can be expressed as
$$
\lim_{s \to 0} M_{4} = [12]^{2} \langle 34 \rangle^{2} \frac{\alpha}{st}
$$

### t-channel ($t \to 0$)

$$
p_{t} = - \ket{t} [t|
$$

Amplitude is
$$
\lim_{t \to 0} i M_{4} = \frac{i}{t} \sum_{e} i M_{3} (1_{a}^{+}, 4_{d}^{-}, - t_{e}^{+}) \times i M_{3} (t_{e}^{-}, 2_{b}^{+}, 3_{c}^{-}) + i M_{3} (1_{a}^{+}, 4_{d}^{-}, - t_{e}^{-}) \times i M_{3} (t_{e}^{+}, 2_{b}^{+}, 3_{c}^{-}) \\ =
- \frac{i}{t} \sum_{e} \kappa_{dae} \kappa_{bce} \left[\frac{[1t]^{3}}{[14] [4t]} \frac{\langle 3t \rangle^{3}}{\langle 32 \rangle \langle 2t \rangle} + \frac{[2t]^{3}}{[23] [3t]} \frac{\langle 4t \rangle^{3}}{\langle 41 \rangle \langle 1t \rangle}\right]
$$
while $t \to 0$, we have
$$
[14] \langle 41 \rangle \approx O (t) \\
[23] \langle 32 \rangle \approx O (t)
$$
We suppose that $\langle 14 \rangle \approx O (t), [14] \approx O (1)$, so we can derive that
$$
\langle 1t \rangle \approx \langle 4t \rangle \approx O (t)
$$
$[23] \approx O (t), \langle 23 \rangle \approx O (1)$
$$
[23] \approx [2t] \approx [3t] \approx O (t)
$$
Under this assumption, the amplitude has the form
$$
\lim_{t \to 0} M_{4}  = [12]^{2} \langle 34 \rangle^{2} \frac{\beta}{t u}
$$
Similarly, in the u-channel, we have
$$
\lim_{u \to 0} M_{4} = [12]^{2} \langle 34 \rangle^{2} \frac{\gamma}{us}
$$
From these limit forms, we can guess the rational function $f (s,t,u)$
$$
f (s, t, u) = \frac{A}{st} + \frac{B}{tu} + \frac{C}{us}
$$
where
$$
A - C = \alpha \\
B - A = \beta \\
C - B = \gamma
$$
So this form is only possible if
$$
\sum_{e} \kappa_{abe} \kappa_{cde} + \kappa_{ade} \kappa_{bce} + \kappa_{ace} \kappa_{dbe} = 0
$$
called Jacobi’s Identity.

Consistant interaction among $n$ ($n \geq 3$) massless spin-1 particles (by minimal coupling) must have a Lie-algebra structure.

## Self-Interaction of Spin-j (j > 1)

$$
\lim_{s \to 0} M_{4} = \frac{\alpha}{s} \left(\frac{[12]^{2} \langle 34\rangle^{2}}{t}\right)^{j}
$$

$u$ and $t$ channels are similar.

### Gravity (j = 2)

$$
M_{4} (1_{a}^{+2}, 2_{b}^{+2}, 3_{c}^{-2}, 4_{c}^{-2}) = [12]^{4} \langle 34 \rangle^{4} \frac{A}{stu} \\ \to
\begin{cases}
- \frac{A}{st^{2}} \quad (s \to 0) \\
- \frac{A}{tu^{2}} \quad (t \to 0) \\
- \frac{A}{us^{2}} \quad (u \to 0)
\end{cases}
$$

This gives out 
$$
\alpha = \beta = \gamma
$$

$$
\sum_{e} \kappa_{abe} \kappa_{cde} = \sum_{e} \kappa_{ade} \kappa_{bce} = \sum_{e} \kappa_{ace} \kappa_{bde}
$$

With a proper choice of basis, we can give out a simple form of $\kappa$
$$
\kappa_{abc} = \kappa_{a} \delta_{ab} \delta_{ac}
$$
There can not be more than one massless spin-2 particles interaction by each other through minimal coupling.

Amplitude:
$$
M_{4} = [12]^{4} \langle 34 \rangle^{4} \frac{\kappa^{2}}{stu}
$$
