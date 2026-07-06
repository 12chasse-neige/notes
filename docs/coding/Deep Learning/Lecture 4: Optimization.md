# Lecture 4: Optimization

These notes collect the optimization definitions and derivations from the lecture deck. I focus on why the main SGD guarantees have the form they do:

- optimality conditions come from Taylor expansion
- smoothness turns one update into a descent inequality
- stochastic-gradient assumptions control the bias and variance terms
- fixed learning rates reach a noise floor
- diminishing learning rates can drive the average gradient norm to zero
- strong convexity changes sublinear convergence into geometric convergence
- momentum and adaptive methods can be read as preconditioned or averaged gradient descent

Notation:

- objective: $F(w)$ or $f(w)$
- empirical objective: $f(w)=\frac1n\sum_{i=1}^n f_i(w)$
- stochastic gradient estimate: $g(w_k,\xi_k)$
- learning rate / step size: $\alpha_k$ or $\eta$
- lower bound on the objective: $F_{\inf}$
- optimal value in the strongly convex case: $F_*=F(w_*)$
- Lipschitz-gradient constant: $L$
- stochastic-gradient alignment constants: $\mu,\mu_G$
- stochastic-gradient variance constants: $M,M_V$
- combined second-moment constant: $M_G=\mu_G^2+M_V$

## 1. The Optimization Problem

### 1.1 Empirical Risk

For supervised learning, the average training loss is

$$
f(w)=\frac1n\sum_{i=1}^n f_i(w),
\qquad
f_i(w)=-\log p(y_i\mid x_i,w).
$$

Training asks for

$$
\boxed{
w^\star\in\arg\min_{w\in\Omega} f(w).
}
$$

The full gradient is

$$
\nabla f(w)
=\frac1n\sum_{i=1}^n \nabla f_i(w).
$$

Batch gradient descent uses the exact full gradient:

$$
w_{k+1}
=w_k-\alpha_k\nabla f(w_k).
$$

Stochastic gradient descent samples one example, or one minibatch, and updates with a noisy gradient estimate:

$$
w_{k+1}
=w_k-\alpha_k\nabla f_{i_k}(w_k),
\qquad
i_k\sim\operatorname{Uniform}\{1,\ldots,n\}.
$$

The three central questions are:

1. Does the sequence $w_0,w_1,w_2,\ldots$ converge?
2. If it converges, does it converge to a minimizer?
3. How quickly does it make progress?

## 2. Local Minima and Taylor Expansion

### 2.1 Necessary and Sufficient Conditions

Assume $f$ is twice differentiable and $w_*$ is an unconstrained local minimum. Then nearby points have no smaller value:

$$
f(w)\ge f(w_*)\qquad\text{for all }w\text{ near }w_*.
$$

The standard second-order conditions are:

$$
\boxed{
\nabla f(w_*)=0,\qquad \nabla^2 f(w_*)\succeq 0
}
$$

as necessary conditions, and

$$
\boxed{
\nabla f(w_*)=0,\qquad \nabla^2 f(w_*)\succ 0
}
$$

as a sufficient condition for a strict local minimum.

### 2.2 Derivation of the First-Order Necessary Condition

Use the Taylor expansion around $w_*$:

$$
\begin{aligned}
f(w)
&=f(w_*)+
\langle \nabla f(w_*),w-w_*\rangle  \\
&\quad
+\frac12(w-w_*)^\top\nabla^2 f(w_*)(w-w_*)
+o(\|w-w_*\|^2).
\end{aligned}
$$

Suppose, for contradiction, that $\nabla f(w_*)\ne 0$. Move a small distance in the negative-gradient direction:

$$
w=w_*-\lambda \nabla f(w_*),
\qquad
\lambda>0.
$$

Then

$$
w-w_*=-\lambda\nabla f(w_*).
$$

Substitute into Taylor's formula:

$$
\begin{aligned}
f(w)-f(w_*)
&=
-\lambda\|\nabla f(w_*)\|^2 \\
&\quad
+\frac{\lambda^2}{2}
\nabla f(w_*)^\top
\nabla^2 f(w_*)
\nabla f(w_*)
+o(\lambda^2).
\end{aligned}
$$

For sufficiently small $\lambda$, the linear term dominates the quadratic and higher-order terms:

$$
f(w)-f(w_*)<0.
$$

That contradicts local minimality. Therefore

$$
\boxed{\nabla f(w_*)=0.}
$$

### 2.3 Derivation of the Second-Order Necessary Condition

Now use $\nabla f(w_*)=0$ and move in an arbitrary direction $u$:

$$
w=w_*+\lambda u.
$$

Taylor expansion gives

$$
f(w_*+\lambda u)-f(w_*)
=\frac{\lambda^2}{2}u^\top\nabla^2 f(w_*)u+o(\lambda^2).
$$

If there were a direction $u$ with

$$
u^\top\nabla^2 f(w_*)u<0,
$$

then for small enough nonzero $\lambda$,

$$
f(w_*+\lambda u)-f(w_*)<0,
$$

again contradicting local minimality. Hence

$$
u^\top\nabla^2 f(w_*)u\ge 0
\qquad\text{for every }u,
$$

which is exactly

$$
\boxed{\nabla^2 f(w_*)\succeq 0.}
$$

### 2.4 Sufficient Condition for a Strict Local Minimum

Assume

$$
\nabla f(w_*)=0,
\qquad
\nabla^2 f(w_*)\succ 0.
$$

Let $\lambda_{\min}>0$ be the smallest eigenvalue of the Hessian at $w_*$. For $h=w-w_*$,

$$
h^\top\nabla^2 f(w_*)h
\ge \lambda_{\min}\|h\|^2.
$$

Taylor expansion gives

$$
f(w)-f(w_*)
=\frac12h^\top\nabla^2 f(w_*)h+o(\|h\|^2).
$$

Therefore, for $w$ sufficiently close to $w_*$ and $w\ne w_*$,

$$
\begin{aligned}
f(w)-f(w_*)
&\ge
\frac{\lambda_{\min}}{2}\|w-w_*\|^2+o(\|w-w_*\|^2) \\
&>0.
\end{aligned}
$$

So $w_*$ is a strict local minimum.

### 2.5 Stationary Points

A stationary point satisfies

$$
\nabla f(w_*)=0.
$$

The Hessian classifies it locally:

- $\nabla^2 f(w_*)\succ 0$: strict local minimum
- $\nabla^2 f(w_*)\prec 0$: strict local maximum
- $\nabla^2 f(w_*)$ indefinite: saddle point
- $\nabla^2 f(w_*)\succeq 0$ but singular: possible minimum or flat higher-order structure

Deep-learning objectives are nonconvex, so SGD is usually analyzed by how quickly it reaches an approximately stationary point:

$$
\|\nabla F(w)\|^2\le \epsilon.
$$

## 3. Smoothness

### 3.1 Lipschitz Gradients

A differentiable function is $L$-smooth if its gradient is $L$-Lipschitz:

$$
\boxed{
\|\nabla f(x)-\nabla f(y)\|
\le L\|x-y\|
\qquad
\forall x,y.
}
$$

This says the gradient cannot change too abruptly.

When $f$ is twice differentiable, this is equivalent to a uniform Hessian bound:

$$
\boxed{
\|\nabla^2 f(x)\|_2\le L
\qquad
\forall x.
}
$$

Here $\|\cdot\|_2$ is the spectral norm. For a symmetric Hessian,

$$
\|\nabla^2 f(x)\|_2
=\max_i |\lambda_i(\nabla^2 f(x))|.
$$

So $L$ bounds the magnitude of every local curvature direction.

### 3.2 Bounded Hessian Implies Lipschitz Gradient

Let

$$
z(\tau)=x+\tau(y-x),
\qquad
\tau\in[0,1].
$$

The fundamental theorem of calculus gives

$$
\nabla f(y)-\nabla f(x)
=\int_0^1 \nabla^2 f(z(\tau))(y-x)\,d\tau.
$$

Take norms:

$$
\begin{aligned}
\|\nabla f(y)-\nabla f(x)\|
&\le
\int_0^1
\|\nabla^2 f(z(\tau))(y-x)\|\,d\tau\\
&\le
\int_0^1
\|\nabla^2 f(z(\tau))\|_2\|y-x\|\,d\tau\\
&\le
\int_0^1 L\|y-x\|\,d\tau\\
&=L\|y-x\|.
\end{aligned}
$$

Thus the gradient is $L$-Lipschitz.

### 3.3 Lipschitz Gradient Implies Bounded Hessian

Assume

$$
\|\nabla f(x)-\nabla f(y)\|\le L\|x-y\|.
$$

Pick any unit vector $s$ and let $y=x+\epsilon s$. Then

$$
\left\|
\frac{\nabla f(x+\epsilon s)-\nabla f(x)}{\epsilon}
\right\|
\le L.
$$

Letting $\epsilon\to 0$ gives the directional derivative of the gradient:

$$
\|\nabla^2 f(x)s\|\le L
\qquad
\text{for every }\|s\|=1.
$$

Taking the maximum over unit $s$,

$$
\boxed{
\|\nabla^2 f(x)\|_2\le L.
}
$$

## 4. The Descent Lemma

### 4.1 Statement

If $f$ is $L$-smooth, then for any $x,y$,

$$
\boxed{
\left|
f(y)-f(x)-\nabla f(x)^\top(y-x)
\right|
\le
\frac{L}{2}\|y-x\|^2.
}
$$

The upper-bound side is the form used in optimization:

$$
\boxed{
f(y)
\le
f(x)+\nabla f(x)^\top(y-x)
+\frac{L}{2}\|y-x\|^2.
}
$$

It says an $L$-smooth function is upper-bounded by a local quadratic model.

### 4.2 Derivation

Again set

$$
z(\tau)=x+\tau(y-x).
$$

The fundamental theorem of calculus gives

$$
f(y)-f(x)
=
\int_0^1
\nabla f(z(\tau))^\top (y-x)\,d\tau.
$$

Subtract the linear approximation at $x$:

$$
\begin{aligned}
&f(y)-f(x)-\nabla f(x)^\top(y-x) \\
&=
\int_0^1
\left(\nabla f(z(\tau))-\nabla f(x)\right)^\top(y-x)\,d\tau.
\end{aligned}
$$

Apply Cauchy-Schwarz:

$$
\begin{aligned}
\left|
f(y)-f(x)-\nabla f(x)^\top(y-x)
\right|
&\le
\int_0^1
\|\nabla f(z(\tau))-\nabla f(x)\|
\|y-x\|\,d\tau.
\end{aligned}
$$

Since the gradient is $L$-Lipschitz,

$$
\|\nabla f(z(\tau))-\nabla f(x)\|
\le
L\|z(\tau)-x\|
=L\tau\|y-x\|.
$$

Therefore

$$
\begin{aligned}
\left|
f(y)-f(x)-\nabla f(x)^\top(y-x)
\right|
&\le
\int_0^1 L\tau\|y-x\|^2\,d\tau\\
&=\frac{L}{2}\|y-x\|^2.
\end{aligned}
$$

## 5. Stochastic Gradient Method

### 5.1 Algorithm

The stochastic-gradient method is:

1. Choose an initial point $w_1$.
2. For $k=1,2,\ldots$:
3. Sample randomness $\xi_k$.
4. Compute a stochastic gradient-like vector $g(w_k,\xi_k)$.
5. Choose a step size $\alpha_k>0$.
6. Update

$$
w_{k+1}=w_k-\alpha_k g(w_k,\xi_k).
$$

The vector $g(w_k,\xi_k)$ may be the gradient of one example, the average gradient over a minibatch, or a noisy oracle estimate.

### 5.2 Assumptions for the SGD Theorem

The objective $F$ is assumed to be $L$-smooth:

$$
\|\nabla F(w)-\nabla F(\bar w)\|_2
\le L\|w-\bar w\|_2.
$$

The objective is bounded below on the iterates:

$$
F(w_k)\ge F_{\inf}.
$$

The stochastic vector must be sufficiently aligned with the true gradient:

$$
\boxed{
\nabla F(w_k)^\top \mathbb{E}_{\xi_k}[g(w_k,\xi_k)]
\ge
\mu\|\nabla F(w_k)\|^2
}
$$

and its mean cannot be too large:

$$
\boxed{
\|\mathbb{E}_{\xi_k}[g(w_k,\xi_k)]\|
\le
\mu_G\|\nabla F(w_k)\|.
}
$$

Finally, its variance is controlled:

$$
\boxed{
\mathbb{V}_{\xi_k}[g(w_k,\xi_k)]
\le
M+M_V\|\nabla F(w_k)\|^2.
}
$$

The constants satisfy

$$
\mu_G\ge\mu>0,
\qquad
M_G=\mu_G^2+M_V.
$$

For an unbiased minibatch gradient, one typically has $\mu=\mu_G=1$.

## 6. Minibatch Gradient Estimates

### 6.1 Unbiasedness

For empirical risk,

$$
\nabla f(w)=\frac1n\sum_{j=1}^n\nabla f_j(w).
$$

Sample $m$ indices independently:

$$
\xi_1,\ldots,\xi_m
\sim \operatorname{Uniform}\{1,\ldots,n\}.
$$

The minibatch estimator is

$$
g(w,\xi)
=\frac1m\sum_{r=1}^m\nabla f_{\xi_r}(w).
$$

Taking expectation:

$$
\begin{aligned}
\mathbb{E}[g(w,\xi)]
&=
\frac1m\sum_{r=1}^m
\mathbb{E}_{\xi_r}[\nabla f_{\xi_r}(w)]\\
&=
\frac1m\sum_{r=1}^m
\left(
\frac1n\sum_{j=1}^n\nabla f_j(w)
\right)\\
&=
\nabla f(w).
\end{aligned}
$$

Thus the minibatch gradient is unbiased.

### 6.2 Variance Reduction by Minibatching

Let

$$
X_r=\nabla f_{\xi_r}(w).
$$

If the samples are independent and identically distributed,

$$
g=\frac1m\sum_{r=1}^m X_r.
$$

Then

$$
\begin{aligned}
\mathbb{V}[g]
&=
\mathbb{V}\left[\frac1m\sum_{r=1}^m X_r\right]\\
&=
\frac1{m^2}\sum_{r=1}^m\mathbb{V}[X_r]\\
&=
\frac1m\mathbb{V}_{i}[\nabla f_i(w)].
\end{aligned}
$$

The noise level falls like $1/m$, so the standard deviation falls like $1/\sqrt m$.

## 7. Nonconvex SGD with a Fixed Step Size

### 7.1 Theorem

Run SGD with a constant step size

$$
\alpha_k=\bar\alpha,
\qquad
0<\bar\alpha\le\frac{\mu}{LM_G}.
$$

Then the expected average squared gradient satisfies

$$
\boxed{
\mathbb{E}\left[
\frac1K\sum_{k=1}^K
\|\nabla F(w_k)\|^2
\right]
\le
\frac{\bar\alpha LM}{\mu}
+
\frac{2(F(w_1)-F_{\inf})}{K\mu\bar\alpha}.
}
$$

Interpretation:

- the second term decays like $O(1/K)$
- the first term is a fixed noise floor
- smaller $\bar\alpha$ lowers the noise floor but slows the transient term

### 7.2 One-Step Descent Derivation

Apply the descent lemma with

$$
y=w_{k+1}=w_k-\alpha_k g_k,
\qquad
g_k=g(w_k,\xi_k).
$$

Then

$$
\begin{aligned}
F(w_{k+1})
&\le
F(w_k)
+\nabla F(w_k)^\top(w_{k+1}-w_k)
+\frac{L}{2}\|w_{k+1}-w_k\|^2\\
&=
F(w_k)
-\alpha_k\nabla F(w_k)^\top g_k
+\frac{L\alpha_k^2}{2}\|g_k\|^2.
\end{aligned}
$$

Take conditional expectation over the fresh randomness $\xi_k$, keeping $w_k$ fixed:

$$
\begin{aligned}
\mathbb{E}_k[F(w_{k+1})]-F(w_k)
&\le
-\alpha_k\nabla F(w_k)^\top \mathbb{E}_k[g_k]
+\frac{L\alpha_k^2}{2}\mathbb{E}_k[\|g_k\|^2].
\end{aligned}
$$

Use

$$
\mathbb{E}\|g\|^2
=\|\mathbb{E}g\|^2+\mathbb{V}[g].
$$

The assumptions give

$$
\nabla F(w_k)^\top \mathbb{E}_k[g_k]
\ge
\mu\|\nabla F(w_k)\|^2,
$$

and

$$
\begin{aligned}
\mathbb{E}_k\|g_k\|^2
&=
\|\mathbb{E}_k g_k\|^2+\mathbb{V}_k[g_k]\\
&\le
\mu_G^2\|\nabla F(w_k)\|^2
+
M+M_V\|\nabla F(w_k)\|^2\\
&=
M+M_G\|\nabla F(w_k)\|^2.
\end{aligned}
$$

Substituting:

$$
\begin{aligned}
\mathbb{E}_k[F(w_{k+1})]-F(w_k)
&\le
-\alpha_k\mu\|\nabla F(w_k)\|^2
+\frac{L\alpha_k^2}{2}
\left(M+M_G\|\nabla F(w_k)\|^2\right)\\
&=
-\alpha_k
\left(
\mu-\frac{L\alpha_kM_G}{2}
\right)
\|\nabla F(w_k)\|^2
+\frac{L\alpha_k^2M}{2}.
\end{aligned}
$$

If

$$
\alpha_k\le \frac{\mu}{LM_G},
$$

then

$$
\mu-\frac{L\alpha_kM_G}{2}
\ge
\frac{\mu}{2}.
$$

So

$$
\boxed{
\mathbb{E}_k[F(w_{k+1})]-F(w_k)
\le
-\frac{\alpha_k\mu}{2}\|\nabla F(w_k)\|^2
+\frac{L\alpha_k^2M}{2}.
}
$$

This is the core inequality. The first term is progress. The second term is the cost of stochastic noise.

### 7.3 Telescoping the One-Step Bound

Set $\alpha_k=\bar\alpha$ and take full expectation:

$$
\mathbb{E}[F(w_{k+1})]-\mathbb{E}[F(w_k)]
\le
-\frac{\bar\alpha\mu}{2}
\mathbb{E}\|\nabla F(w_k)\|^2
+\frac{L\bar\alpha^2M}{2}.
$$

Sum over $k=1,\ldots,K$:

$$
\begin{aligned}
\mathbb{E}[F(w_{K+1})]-F(w_1)
&\le
-\frac{\bar\alpha\mu}{2}
\sum_{k=1}^K
\mathbb{E}\|\nabla F(w_k)\|^2
+K\frac{L\bar\alpha^2M}{2}.
\end{aligned}
$$

Since $F(w_{K+1})\ge F_{\inf}$,

$$
F_{\inf}-F(w_1)
\le
-\frac{\bar\alpha\mu}{2}
\sum_{k=1}^K
\mathbb{E}\|\nabla F(w_k)\|^2
+K\frac{L\bar\alpha^2M}{2}.
$$

Rearrange:

$$
\frac1K
\sum_{k=1}^K
\mathbb{E}\|\nabla F(w_k)\|^2
\le
\frac{2(F(w_1)-F_{\inf})}{K\bar\alpha\mu}
+
\frac{\bar\alpha LM}{\mu}.
$$

This proves the fixed-step theorem.

### 7.4 Batch Gradient Descent as the Zero-Noise Case

For full-batch gradient descent,

$$
g_k=\nabla F(w_k).
$$

The gradient estimate has no variance, so $M=0$. Also $\mu=1$ and $M_G=1$. The bound becomes

$$
\boxed{
\frac1K
\sum_{k=1}^K
\|\nabla F(w_k)\|^2
\le
\frac{2(F(w_1)-F_{\inf})}{K\bar\alpha}.
}
$$

The noise floor disappears:

$$
\frac1K
\sum_{k=1}^K
\|\nabla F(w_k)\|^2
\to 0.
$$

The tradeoff is compute: every step requires all $n$ examples.

## 8. Diminishing Step Sizes

### 8.1 Robbins-Monro Conditions

A fixed step size leaves a noise floor. To remove it, choose step sizes satisfying

$$
\sum_{k=1}^{\infty}\alpha_k=\infty,
\qquad
\sum_{k=1}^{\infty}\alpha_k^2<\infty.
$$

The first condition means there is infinite total progress available. The second means the accumulated stochastic noise remains finite.

A common schedule is

$$
\alpha_k=\alpha_0 k^{-p},
\qquad
p\in(1/2,1].
$$

The lecture uses $p\in[0.5,1)$ as a practical family; the exact boundary behavior depends on constants and theorem statements.

### 8.2 Weighted Gradient Bound

Start from the one-step inequality:

$$
\mathbb{E}[F(w_{k+1})]-\mathbb{E}[F(w_k)]
\le
-\frac{\alpha_k\mu}{2}
\mathbb{E}\|\nabla F(w_k)\|^2
+\frac{L\alpha_k^2M}{2}.
$$

Rearrange:

$$
\alpha_k\mathbb{E}\|\nabla F(w_k)\|^2
\le
\frac{2}{\mu}
\left(
\mathbb{E}[F(w_k)]-\mathbb{E}[F(w_{k+1})]
\right)
+
\frac{L M}{\mu}\alpha_k^2.
$$

Sum over $k=1,\ldots,K$:

$$
\sum_{k=1}^K
\alpha_k\mathbb{E}\|\nabla F(w_k)\|^2
\le
\frac{2(F(w_1)-F_{\inf})}{\mu}
+
\frac{L M}{\mu}
\sum_{k=1}^K\alpha_k^2.
$$

Let

$$
A_K=\sum_{k=1}^K\alpha_k.
$$

Divide by $A_K$:

$$
\boxed{
\frac1{A_K}
\sum_{k=1}^K
\alpha_k\mathbb{E}\|\nabla F(w_k)\|^2
\le
\frac{
\frac{2(F(w_1)-F_{\inf})}{\mu}
+
\frac{LM}{\mu}\sum_{k=1}^K\alpha_k^2
}{
\sum_{k=1}^K\alpha_k
}.
}
$$

Under Robbins-Monro,

$$
\sum_{k=1}^K\alpha_k\to\infty,
\qquad
\sum_{k=1}^K\alpha_k^2
\text{ stays bounded}.
$$

Therefore

$$
\boxed{
\frac1{A_K}
\sum_{k=1}^K
\alpha_k\mathbb{E}\|\nabla F(w_k)\|^2
\to 0.
}
$$

The weighted average squared gradient vanishes.

## 9. Learning Rate, Batch Size, and Compute

### 9.1 Compute Budget

Let

- $K$ be the number of optimizer steps
- $m$ be the minibatch size
- $n$ be the dataset size

The total number of processed examples is

$$
C=K m.
$$

The number of epochs is

$$
\frac{K m}{n}
=\frac{C}{n}.
$$

For fixed compute $C$, increasing $m$ decreases the number of updates:

$$
K=\frac{C}{m}.
$$

### 9.2 Linear Scaling Rule Derivation

The lecture presents a simple error tradeoff:

$$
E(\alpha,m)
=
\underbrace{\frac{\alpha L V}{m}}_{\text{gradient-noise term}}
+
\underbrace{\frac{m\Delta f}{C\alpha}}_{\text{optimization term}}.
$$

Here:

- $V$ represents the per-example gradient noise scale
- $\Delta f$ represents the initial optimization gap
- $C$ is the fixed compute budget
- $m$ is the minibatch size

Differentiate with respect to $\alpha$:

$$
\frac{\partial E}{\partial \alpha}
=
\frac{LV}{m}
-
\frac{m\Delta f}{C\alpha^2}.
$$

Set the derivative to zero:

$$
\frac{LV}{m}
=
\frac{m\Delta f}{C\alpha^2}.
$$

Solve for $\alpha$:

$$
\alpha^2
=
\frac{m^2\Delta f}{LVC},
$$

so

$$
\boxed{
\alpha^\star
=
m\sqrt{\frac{\Delta f}{LVC}}.
}
$$

Therefore

$$
\boxed{\alpha^\star\propto m.}
$$

This is the linear scaling rule:

$$
\eta\propto B,
$$

where $B$ is the batch size. Intuitively, minibatch noise scales like $1/B$, so keeping the ratio $\eta/B$ approximately fixed keeps the noise temperature approximately fixed.

### 9.3 SGD versus Adam Scaling

For SGD or momentum SGD, the practical scaling rule is

$$
\boxed{\eta\propto B.}
$$

For Adam-like methods, the common scaling rule is closer to

$$
\boxed{\eta\propto \sqrt B.}
$$

One intuition is that Adam normalizes by an estimate of the gradient second moment:

$$
\Delta w
\approx
-\eta\frac{\hat m}{\sqrt{\hat v}+\epsilon}.
$$

This normalization partly cancels the direct batch-size effect on gradient-noise magnitude, so the noise-preserving invariant changes from $\eta/B$ to roughly $\eta/\sqrt B$ in the small-step stochastic-differential-equation approximation.

### 9.4 Warmup Stability on a Quadratic

Large-batch training often scales $\eta$ upward. Early in training, this can be unstable, so a warmup schedule increases $\eta$ gradually.

For the one-dimensional quadratic

$$
f(x)=\frac12x^2,
\qquad
\nabla f(x)=x,
$$

gradient descent gives

$$
x_{k+1}=x_k-\alpha x_k=(1-\alpha)x_k.
$$

Convergence requires

$$
|1-\alpha|<1.
$$

Thus

$$
0<\alpha<2.
$$

If $\alpha>2$, the iterate changes sign and grows in magnitude. This is the simplest derivation of the "too-large learning rate diverges" warning.

For

$$
f(x)=\frac12 a x^2,
$$

the update is

$$
x_{k+1}=(1-\alpha a)x_k,
$$

so stability requires

$$
\boxed{0<\alpha<\frac{2}{a}.}
$$

In higher dimensions, $a$ is replaced by the largest Hessian eigenvalue.

## 10. Online and Distributed SGD

### 10.1 Online Objective

In streaming or online learning, there may be no fixed finite dataset. The objective is an expectation:

$$
f(w)=\mathbb{E}_{\xi\sim p(\xi)}[f(w,\xi)].
$$

If differentiation and expectation can be interchanged,

$$
\nabla f(w)
=
\nabla_w\mathbb{E}_{\xi}[f(w,\xi)]
=
\mathbb{E}_{\xi}[\nabla_w f(w,\xi)].
$$

Therefore one fresh sample gives an unbiased stochastic gradient:

$$
\boxed{
g(w,\xi)=\nabla_w f(w,\xi),
\qquad
\mathbb{E}_{\xi}[g(w,\xi)]=\nabla f(w).
}
$$

### 10.2 Data Parallelism

For a minibatch of size $m$, the gradient estimate is

$$
g(w)=\frac1m\sum_{i=1}^m\nabla f_i(w).
$$

With $P$ workers, split the minibatch into shards $S_1,\ldots,S_P$. Worker $p$ computes

$$
g_p(w)
=
\frac{P}{m}
\sum_{i\in S_p}\nabla f_i(w),
\qquad
|S_p|=\frac{m}{P}.
$$

Average the local gradients:

$$
\frac1P\sum_{p=1}^P g_p(w)
=
\frac1P
\sum_{p=1}^P
\frac{P}{m}
\sum_{i\in S_p}\nabla f_i(w)
=
\frac1m\sum_{i=1}^m\nabla f_i(w).
$$

Thus all-reducing the worker gradients gives exactly the same gradient as computing the full minibatch on one device.

## 11. Strongly Convex Case

### 11.1 Strong Convexity

$F$ is $c$-strongly convex if for all $w,\bar w$,

$$
\boxed{
F(\bar w)
\ge
F(w)+\nabla F(w)^\top(\bar w-w)
+\frac{c}{2}\|\bar w-w\|^2,
\qquad c>0.
}
$$

Strong convexity means every tangent plane has a quadratic lower bound.

If $F$ is twice differentiable, a sufficient and equivalent Hessian condition is

$$
\boxed{
\nabla^2 F(w)\succeq cI
\qquad
\forall w.
}
$$

### 11.2 Unique Minimizer

Suppose $w_1$ and $w_2$ are two distinct minimizers with the same value $F_*$. Strong convexity implies, for $t\in(0,1)$,

$$
F(tw_1+(1-t)w_2)
\le
tF(w_1)+(1-t)F(w_2)
-\frac{c}{2}t(1-t)\|w_1-w_2\|^2.
$$

Since $F(w_1)=F(w_2)=F_*$, this becomes

$$
F(tw_1+(1-t)w_2)
\le
F_*-\frac{c}{2}t(1-t)\|w_1-w_2\|^2
<F_*.
$$

That contradicts optimality. Therefore the minimizer is unique.

### 11.3 Gradient Controls the Optimality Gap

Strong convexity also implies the Polyak-Lojasiewicz-type inequality used in the theorem:

$$
\boxed{
2c(F(w)-F_*)\le \|\nabla F(w)\|^2.
}
$$

Derivation:

From strong convexity, for any $\bar w$,

$$
F(\bar w)
\ge
F(w)+\nabla F(w)^\top(\bar w-w)
+\frac{c}{2}\|\bar w-w\|^2.
$$

Minimize the right-hand side over $\bar w$. Let $d=\bar w-w$. Then minimize

$$
\nabla F(w)^\top d+\frac{c}{2}\|d\|^2.
$$

The minimizer is

$$
d^\star=-\frac1c\nabla F(w).
$$

Substitute:

$$
\begin{aligned}
F_*
&\ge
F(w)+\nabla F(w)^\top d^\star+\frac{c}{2}\|d^\star\|^2\\
&=
F(w)
-\frac1c\|\nabla F(w)\|^2
+\frac{1}{2c}\|\nabla F(w)\|^2\\
&=
F(w)-\frac{1}{2c}\|\nabla F(w)\|^2.
\end{aligned}
$$

Rearrange:

$$
\boxed{
F(w)-F_*
\le
\frac{1}{2c}\|\nabla F(w)\|^2.
}
$$

Equivalently,

$$
2c(F(w)-F_*)\le \|\nabla F(w)\|^2.
$$

### 11.4 Geometric Convergence to a Noise Floor

Start again from the one-step SGD bound:

$$
\mathbb{E}_k[F(w_{k+1})]-F(w_k)
\le
-\frac{\bar\alpha\mu}{2}\|\nabla F(w_k)\|^2
+\frac{L\bar\alpha^2M}{2}.
$$

Use

$$
\|\nabla F(w_k)\|^2
\ge
2c(F(w_k)-F_*).
$$

Then

$$
\begin{aligned}
\mathbb{E}_k[F(w_{k+1})-F_*]
&\le
F(w_k)-F_*
-\bar\alpha c\mu(F(w_k)-F_*)
+\frac{L\bar\alpha^2M}{2}\\
&=
(1-\bar\alpha c\mu)(F(w_k)-F_*)
+\frac{L\bar\alpha^2M}{2}.
\end{aligned}
$$

Let

$$
\delta_k=\mathbb{E}[F(w_k)-F_*],
\qquad
\rho=1-\bar\alpha c\mu,
\qquad
b=\frac{L\bar\alpha^2M}{2}.
$$

The recurrence is

$$
\delta_{k+1}\le \rho\delta_k+b.
$$

Unroll it:

$$
\begin{aligned}
\delta_k
&\le
\rho^{k-1}\delta_1
+b\sum_{j=0}^{k-2}\rho^j\\
&=
\rho^{k-1}\delta_1
+b\frac{1-\rho^{k-1}}{1-\rho}.
\end{aligned}
$$

Since

$$
1-\rho=\bar\alpha c\mu,
$$

the steady-state term is

$$
\frac{b}{1-\rho}
=
\frac{L\bar\alpha^2M/2}{\bar\alpha c\mu}
=
\frac{\bar\alpha LM}{2c\mu}.
$$

Thus

$$
\boxed{
\mathbb{E}[F(w_k)-F_*]
\le
\frac{\bar\alpha LM}{2c\mu}
+
(1-\bar\alpha c\mu)^{k-1}
\left(
F(w_1)-F_*
-
\frac{\bar\alpha LM}{2c\mu}
\right).
}
$$

The convergence is geometric until it reaches the fixed-step noise floor.

If $M=0$, the noise floor vanishes and the batch strongly convex rate is

$$
F(w_k)-F_*
\lesssim
(1-\bar\alpha c)^k(F(w_1)-F_*).
$$

## 12. Ill Conditioning and Momentum

### 12.1 Quadratic Ill Conditioning

Consider the two-dimensional quadratic

$$
f(x)
=\frac12(a_1x_1^2+a_2x_2^2),
\qquad
a_1\gg a_2>0.
$$

The gradient is

$$
\nabla f(x)
=
\begin{bmatrix}
a_1x_1\\
a_2x_2
\end{bmatrix}.
$$

Gradient descent gives independent coordinate updates:

$$
x_{1,k+1}=(1-\alpha a_1)x_{1,k},
\qquad
x_{2,k+1}=(1-\alpha a_2)x_{2,k}.
$$

Stability in the steep direction requires roughly

$$
\alpha<\frac{2}{a_1}.
$$

But progress in the flat direction is controlled by

$$
1-\alpha a_2.
$$

If we choose $\alpha\approx 1/a_1$, then

$$
1-\alpha a_2
\approx
1-\frac{a_2}{a_1}
=
1-\frac1\kappa,
$$

where

$$
\kappa=\frac{a_1}{a_2}
$$

is the condition number. The slow direction therefore decays like

$$
\boxed{
\left(1-\frac1\kappa\right)^K.
}
$$

Large $\kappa$ means slow zigzagging.

### 12.2 Heavy-Ball Momentum

Polyak's heavy-ball method adds a fraction of the last displacement:

$$
\boxed{
w_{k+1}
=
w_k-\eta\nabla f(w_k)+\beta(w_k-w_{k-1}).
}
$$

Equivalently, define a velocity:

$$
v_{k+1}
=
\beta v_k+\eta\nabla f(w_k),
\qquad
w_{k+1}=w_k-v_{k+1}.
$$

When consecutive gradients point in similar directions, the velocity accumulates and accelerates. When gradients alternate signs, the velocity terms cancel, reducing zigzagging.

For well-tuned momentum on strongly convex quadratics, the dependence on condition number improves from roughly

$$
1-\frac1\kappa
$$

to roughly

$$
1-\frac1{\sqrt\kappa}.
$$

The exact constants depend on the momentum variant and step-size choice.

### 12.3 Momentum SGD as Exponential Averaging

Momentum SGD uses

$$
v_{k+1}
=
\beta v_k+g(w_k,\xi_k),
\qquad
w_{k+1}
=
w_k-\alpha_k v_{k+1}.
$$

Unroll the velocity:

$$
\begin{aligned}
v_{k+1}
&=
g_k+\beta g_{k-1}+\beta^2g_{k-2}+\cdots+\beta^k g_0
+\beta^{k+1}v_0.
\end{aligned}
$$

If $v_0=0$,

$$
\boxed{
v_{k+1}
=
\sum_{j=0}^k \beta^j g_{k-j}.
}
$$

Recent gradients get the largest weights, and old gradients decay geometrically.

The total weight is

$$
\sum_{j=0}^{\infty}\beta^j
=
\frac1{1-\beta}.
$$

So the effective averaging window is approximately

$$
\boxed{
\frac1{1-\beta}.
}
$$

Examples:

- $\beta=0.9$ gives an effective window of about $10$ steps
- $\beta=0.99$ gives an effective window of about $100$ steps

## 13. Adaptive Per-Dimension Learning Rates

### 13.1 AdaGrad

AdaGrad accumulates squared gradients coordinatewise:

$$
v_t
=
v_{t-1}+g_t\odot g_t.
$$

The update is

$$
\boxed{
w_{t+1}
=
w_t-\frac{\eta}{\sqrt{v_t}+\epsilon}\odot g_t.
}
$$

Coordinate $j$ has effective learning rate

$$
\eta_{t,j}
=
\frac{\eta}{\sqrt{v_{t,j}}+\epsilon}.
$$

If coordinate $j$ frequently has large gradients, $v_{t,j}$ grows quickly and the step size shrinks. Rare or flat coordinates keep larger effective steps.

The drawback is that $v_t$ only increases. Eventually the effective learning rates can become too small:

$$
v_{t,j}\to\infty
\quad\Rightarrow\quad
\eta_{t,j}\to 0.
$$

### 13.2 RMSProp

RMSProp replaces the cumulative sum with an exponential moving average:

$$
\boxed{
v_t
=
\beta v_{t-1}+(1-\beta)(g_t\odot g_t).
}
$$

The update is still

$$
w_{t+1}
=
w_t-\frac{\eta}{\sqrt{v_t}+\epsilon}\odot g_t.
$$

Because $v_t$ forgets old gradients, the denominator adapts to the current gradient scale instead of growing forever.

### 13.3 Adam

Adam combines momentum and RMSProp:

$$
\begin{aligned}
g_t&=\nabla_\theta \mathcal{L}(\theta_t),\\
m_t&=\beta_1m_{t-1}+(1-\beta_1)g_t,\\
v_t&=\beta_2v_{t-1}+(1-\beta_2)(g_t\odot g_t).
\end{aligned}
$$

Because $m_0=v_0=0$, both moving averages are biased toward zero early in training. Adam corrects this:

$$
\hat m_t=\frac{m_t}{1-\beta_1^t},
\qquad
\hat v_t=\frac{v_t}{1-\beta_2^t}.
$$

Then

$$
\boxed{
\theta_{t+1}
=
\theta_t
-\alpha
\frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon}.
}
$$

### 13.4 Bias-Correction Derivation

Suppose the gradient has stationary mean

$$
\mathbb{E}[g_t]=\bar g.
$$

With $m_0=0$,

$$
m_t
=(1-\beta_1)\sum_{j=0}^{t-1}\beta_1^j g_{t-j}.
$$

Taking expectation:

$$
\begin{aligned}
\mathbb{E}[m_t]
&=
(1-\beta_1)
\sum_{j=0}^{t-1}\beta_1^j
\mathbb{E}[g_{t-j}]\\
&=
(1-\beta_1)
\sum_{j=0}^{t-1}\beta_1^j
\bar g\\
&=
(1-\beta_1^t)\bar g.
\end{aligned}
$$

Thus

$$
\mathbb{E}\left[\frac{m_t}{1-\beta_1^t}\right]
=\bar g.
$$

The same calculation gives

$$
\mathbb{E}\left[\frac{v_t}{1-\beta_2^t}\right]
$$

as an unbiased estimate of the stationary second moment under the same idealization.

## 14. AdamW and Decoupled Weight Decay

### 14.1 Coupled L2 Penalty in Adam

If the objective includes an L2 penalty,

$$
\tilde{\mathcal{L}}(\theta)
=
\mathcal{L}(\theta)
+\frac{\lambda}{2}\|\theta\|^2,
$$

then the gradient becomes

$$
\nabla\tilde{\mathcal{L}}(\theta)
=
\nabla\mathcal{L}(\theta)+\lambda\theta.
$$

In SGD, this gives

$$
\theta_{t+1}
=
\theta_t-\alpha(\nabla\mathcal{L}(\theta_t)+\lambda\theta_t)
=
(1-\alpha\lambda)\theta_t-\alpha\nabla\mathcal{L}(\theta_t).
$$

So L2 regularization and weight decay are equivalent for plain SGD.

In Adam, however, the gradient is divided by $\sqrt{\hat v_t}+\epsilon$. If $\lambda\theta_t$ is added to the gradient, the amount of decay depends on the adaptive denominator:

$$
\Delta\theta_{\text{decay-like}}
\approx
-\alpha
\frac{\lambda\theta_t}{\sqrt{\hat v_t}+\epsilon}.
$$

Parameters with large second-moment estimates receive less decay. The regularizer is coupled to the adaptive scaling.

### 14.2 AdamW

AdamW applies weight decay outside the adaptive gradient step:

$$
\boxed{
\theta_{t+1}
=
\theta_t
-\alpha\frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon}
-\alpha\lambda\theta_t.
}
$$

Equivalently,

$$
\theta_{t+1}
=
(1-\alpha\lambda)\theta_t
-\alpha\frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon}.
$$

Now every parameter receives the same multiplicative shrinkage factor $1-\alpha\lambda$, independent of the adaptive denominator.

## 15. Sign and Orthogonalized Optimizers

### 15.1 Lion

Lion uses momentum but no second-moment accumulator. In simplified form:

$$
u_t
=
\operatorname{sign}
\left(
\beta_1 m_{t-1}+(1-\beta_1)g_t
\right),
$$

then applies decoupled decay and a sign step:

$$
\theta_{t+1}
=
\theta_t-\eta(u_t+\lambda\theta_t).
$$

The momentum is then updated:

$$
m_t
=
\beta_2m_{t-1}+(1-\beta_2)g_t.
$$

Because the step uses only $\operatorname{sign}(\cdot)$, each coordinate moves by a fixed magnitude $\eta$ up to the weight-decay term. This reduces optimizer memory compared with Adam because there is no $v_t$.

### 15.2 Muon and Orthogonalized Matrix Updates

For a two-dimensional weight matrix $W$, momentum gives an update matrix $M$. If $M$ has singular value decomposition

$$
M=U\Sigma V^\top,
$$

then different singular directions can have very different update magnitudes. Muon replaces $M$ by an orthogonalized update

$$
\boxed{
O=UV^\top.
}
$$

This keeps the singular vectors but flattens the nonzero singular values to $1$:

$$
M=U\Sigma V^\top
\quad\longrightarrow\quad
O=UIV^\top.
$$

The step is then

$$
W_{t+1}=W_t-\eta O.
$$

### 15.3 Why $UV^\top$ Is the Orthogonalized Direction

One way to derive $O=UV^\top$ is the orthogonal Procrustes problem:

$$
\min_{Q^\top Q=I}\|M-Q\|_F^2.
$$

Expand:

$$
\begin{aligned}
\|M-Q\|_F^2
&=
\operatorname{tr}((M-Q)^\top(M-Q))\\
&=
\operatorname{tr}(M^\top M)
+\operatorname{tr}(Q^\top Q)
-2\operatorname{tr}(Q^\top M).
\end{aligned}
$$

The first term is fixed. If $Q^\top Q=I$, then $\operatorname{tr}(Q^\top Q)$ is also fixed. Therefore minimizing the distance is equivalent to maximizing

$$
\operatorname{tr}(Q^\top M).
$$

Substitute $M=U\Sigma V^\top$:

$$
\operatorname{tr}(Q^\top M)
=
\operatorname{tr}(Q^\top U\Sigma V^\top)
=
\operatorname{tr}(V^\top Q^\top U\Sigma).
$$

Let

$$
R=U^\top QV.
$$

If $Q,U,V$ are orthogonal, then $R$ is orthogonal. The trace becomes

$$
\operatorname{tr}(R^\top\Sigma)
=
\sum_i R_{ii}\sigma_i.
$$

Since $R$ is orthogonal, $R_{ii}\le 1$, so

$$
\sum_i R_{ii}\sigma_i
\le
\sum_i\sigma_i.
$$

The upper bound is attained when $R=I$, which means

$$
U^\top QV=I
\quad\Longrightarrow\quad
Q=UV^\top.
$$

Thus the closest orthogonal matrix to $M$ is the polar factor

$$
\boxed{Q^\star=UV^\top.}
$$

Muon approximates this polar factor with a few Newton-Schulz-style matrix multiplications rather than computing a full SVD at every optimizer step.

## 16. Practical Summary

### 16.1 What the Theory Says

For nonconvex smooth objectives, fixed-step SGD satisfies

$$
\mathbb{E}\left[
\frac1K\sum_{k=1}^K
\|\nabla F(w_k)\|^2
\right]
\le
\underbrace{\frac{\bar\alpha LM}{\mu}}_{\text{noise floor}}
+
\underbrace{
\frac{2(F(w_1)-F_{\inf})}{K\mu\bar\alpha}
}_{\text{optimization transient}}.
$$

For diminishing step sizes,

$$
\frac1{A_K}
\sum_{k=1}^K
\alpha_k\mathbb{E}\|\nabla F(w_k)\|^2
\to 0.
$$

For strongly convex objectives, fixed-step SGD satisfies

$$
\mathbb{E}[F(w_k)-F_*]
\le
\underbrace{\frac{\bar\alpha LM}{2c\mu}}_{\text{noise floor}}
+
\underbrace{(1-\bar\alpha c\mu)^{k-1}}_{\text{geometric decay}}
\left(
F(w_1)-F_*
-
\frac{\bar\alpha LM}{2c\mu}
\right).
$$

### 16.2 What This Means in Training

- Learning rate is usually the most important optimizer hyperparameter.
- Larger batches reduce gradient noise but also reduce the number of updates for a fixed compute budget.
- For SGD, the linear scaling rule $\eta\propto B$ follows from balancing noise and optimization error.
- Warmup prevents large early learning rates from destabilizing training.
- Momentum averages gradients and improves conditioning on long, narrow valleys.
- AdaGrad, RMSProp, and Adam rescale coordinates by gradient history.
- AdamW decouples regularization from Adam's adaptive denominator.
- Newer optimizers such as Lion and Muon modify what information is stored or how update directions are conditioned.

## 17. References Mentioned in the Lecture

- Bottou, Curtis, and Nocedal. "Optimization Methods for Large-Scale Machine Learning." SIAM Review, 2018.
- Nesterov. *Lectures on Convex Optimization*. Springer, 2018.
- Jin, Ge, Netrapalli, Kakade, and Jordan. "How to Escape Saddle Points Efficiently." ICML, 2017.
- Keskar et al. "On Large-Batch Training for Deep Learning." ICLR, 2017.
- Garipov et al. "Loss Surfaces, Mode Connectivity, and Fast Ensembling of DNNs." NeurIPS, 2018.
- Izmailov et al. "Averaging Weights Leads to Wider Optima and Better Generalization." UAI, 2018.
- Goyal et al. "Accurate, Large Minibatch SGD." 2017.
- Huang et al. "GPipe: Efficient Training of Giant Neural Networks using Pipeline Parallelism." NeurIPS, 2019.
- Duchi, Hazan, and Singer. "Adaptive Subgradient Methods for Online Learning and Stochastic Optimization." JMLR, 2011.
- Sutskever et al. "On the importance of initialization and momentum in deep learning." ICML, 2013.
- Kingma and Ba. "Adam: A Method for Stochastic Optimization." ICLR, 2015.
- Loshchilov and Hutter. "Decoupled Weight Decay Regularization." ICLR, 2019.
- Chen et al. "Symbolic Discovery of Optimization Algorithms." NeurIPS, 2023.
- Malladi, Lyu, Panigrahi, and Arora. "On the SDEs and Scaling Rules for Adaptive Gradient Algorithms." NeurIPS, 2022.
- Keller Jordan et al. "Muon." 2024.
