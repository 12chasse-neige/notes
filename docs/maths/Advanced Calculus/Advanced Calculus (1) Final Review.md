# Final Review of Advanced Calculus（1）

Chasse_neige


### 1. Taylor's Theorem
#### 1.1 Taylor's Theorem with Peano's Form of Remainder

When $f(x)$ is n times differentiable on an open interval $I$ containing the point $a$

$$
f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n + o((x-a)^n) 
$$

Specially, when $a=0$, the polnomial

$$
f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \cdots + \frac{f^{(n)}(0)}{n!}x^n + o(x^n) 
$$

is called Maclaurin's polynomial.

---

#### 1.2 Taylor's Theorem with Lagrange's Form of Remainder

If a function $f(x)$ is $(n+1)$ times differentiable on an open interval $I$ containing the point $a$, then for any $x$ in $I$, there exists a point $c$ between $a$ and $x$ such that:

$$
f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n + R_n(x)
$$

where $R_n(x)$ is the remainder term given by:

$$
R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}
$$

Here, $c$ is some point between $a$ and $x$. The remainder term $R_n(x)$ represents the error in approximating $f(x)$ by the $n$-th degree Taylor polynomial centered at $a$. The form of the remainder provided by Lagrange gives a specific way to bound this error, depending on the $(n+1)$-th derivative of $f$ at some point $c$ in the interval.
>  Proof.
>
> Given that $f(x)$ is $(n+1)$ times differentiable, then we can use the Cauchy's Mean Value Theorem on the functions $F(t) = f(a+t \Delta x) - P_{n}(t \Delta x)$ and $G(t) = (t \Delta x)^{n+1}$, where $t$ is an arbitrary constant between $0$ and $1$
>
> $$
> \frac{F(t)-F(0)}{G(t)-G(0)} = \frac{(f'(a+t_{1} \Delta x) - P_{n}'(t_{1} \Delta x)) \Delta x}{(n+1)(t_{1} \Delta x)^{n} \Delta x} = \ldots = \frac{f^{(n)}(a+t_{n+1} \Delta x)}{(n+1)!} 
> $$
>
> then let $t=1$ and we can get the Lagrange's form.

---

#### 1.3  Taylor's Theorem with Cauchy's Form of Remainder

Cauchy's Form of the Remainder is another way to express the remainder term $R_n(x)$. It states that:

$$ R_n(x) = \frac{f^{(n+1)}(c)}{n!}(x-c)^n(x-a) $$

where $c$ is some number between $a$ and $x$ .

>  Proof.
>
> Given that $f(x)$ is $(n+1)$ times differentiable, then we can use the Cauchy's Mean Value Theorem on the functions $F(t) = f(x) - P_{n}(x-t \Delta x)$ and $G(t) = x - t \Delta x$, where $t$ is an arbitrary constant between $0$ and $1$
>
> $$
> \frac{F(t)-F(0)}{G(0)-G(t)} = \frac{f^{(n+1)}(x-t_{1} \Delta x)(t_{1} \Delta x)^n \Delta x}{n!\Delta x}
> $$
>
> then let $t=1$ and we can get the Cauchy's form.

---


##### Applications:
Using the Taylor's theorem with Lagrange's form of remainder to estimate the Taylor series's error.
###### Example 1
Given that$f \in C^{3}[a-h, a+h]$, $h > 0$ and $\lvert f(x) \rvert \leq M$, prove that 

$$
\lvert \frac{f(a+h)+f(a-h)-2f(a)}{h^2} - f''(a) \rvert \leq \frac{Mh}{3} 
$$

> Proof.
>
> First use $f$'s Taylor Series about a:
>
> $$
> f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2}(x-a)^2 + \frac{f'''(a+t(x-a))}{6}(x-a)^3
> $$
>
> so it is trivial that 
>
> $$
> f(a+h) = f(a) + f'(a)h + \frac{f''(a)}{2}h^2 + \frac{f'''(a+th)}{6}h^3 
> $$
>
> $$
> f(a-h) = f(a) - f'(a)h + \frac{f''(a)}{2}h^2 + \frac{f'''(a-th)}{6}h^3 
> $$
>
> so 
> $$
> \lvert f(a+h) + f(a-h) - 2f(a) \rvert = \lvert f''(a)h^2 + \frac{f'''(a+th) + f'''(a-th)}{6}h^3 \rvert \leq \lvert f''(a)h^2 + \frac{1}{3}Mh^3 \rvert
> $$
>

###### Example 2 Linear Interpolation
Suppose that the function $f:[a,b] \rightarrow \mathbb{R}$ between two points $(a, f(a))$ and $(b, f(b))$. The linear function used to estimate the points between $a$ and $b$ is 

$$
l(x) = \frac{b-x}{b-a} f(a) + \frac{x-a}{b-a} f(b)
$$

and $l$ is called the linear interpolation on the interval.
Given that on the interval $[a,b]$, $\sup_{x \in [a,b]} \lvert f'' \rvert = M$ and $f''$ is continuous on the interval, prove that the error of the linear interpolation $\lvert f(x) - l(x) \rvert \leq \frac{1}{8} (b-a)^2 M$

> Proof.
>
> Given that $f''$ is continuous on the interval $[a,b]$, then $f$ can be estimated by the Taylor Series
>
> $$
> f(a) = f(x) + f'(x)(a-x) + \frac{1}{2}(a-x)^2f''(\xi), a < \xi < b  
> $$
>
> $$
> f(b) = f(x) + f'(x)(b-x) + \frac{1}{2}(b-x)^2f''(\eta), a < \eta < b
> $$
>
> so the error equals to 
>
> $$
> \lvert f(x) - l(x) \rvert = \lvert \frac{(b-x)(a-x)}{2} (\frac{x-a}{b-a}f''(\xi) + \frac{b-x}{b-a}f''(\eta)) \rvert
> $$
>
> Notice that $\frac{x-a}{b-a}f''(\xi) + \frac{b-x}{b-a}f''(\eta)$ is actually between the two values $f''(\xi)$ and $f''(\eta)$ and $f''$ is continuous on the closed interval $[a,b]$, according to the Intermediate Value Theorem, there exists a $\zeta \in [a,b]$  so that
>
> $$
> \lvert f''(\zeta) \rvert = \lvert \frac{x-a}{b-a}f''(\xi) + \frac{b-x}{b-a}f''(\eta) \rvert \leq M
> $$
>
> while the Quadratic Function $(b-x)(x-a)$ has a maximum $\frac{1}{4} (b-a)^2$ on the interval $[a,b]$, then the error $\lvert f(x) - l(x) \rvert \leq \frac{1}{8} (b-a)^2 M$ is trivial.

---

### 2. Definite Integral (Riemann)
#### 2.1 Definition

If a function $f$ is defined on the interval $[a,b]$ and for any partition $\pi$ on the interval, the limit 

$$
\lvert I - \sum_{i=1}^{n} f(\xi_{i}) \Delta x_{i} \rvert < \epsilon
$$

exists, where $\xi_{i}$ is an arbitrary constant in $[x_{i-1}, x_{i}] (1 \leq i \leq n)$, we can term $I$ the Riemann Integral, which is the limit of the Riemann Sum $\sum_{i=1}^{n} f(\xi_{i}) \Delta x_{i}$ and the function $f$ is  Riemann Integrable on the interval.
The Riemann Integral can be denoted as 
$$
\int_{a}^{b} f(x) dx = \lim_{\lvert \lvert \pi \rvert \rvert \rightarrow 0} \sum_{i=1}^{n} f(\xi_{i}) \Delta x_{i}
$$

#### 2.2 Properties of Riemann Integrable Functions
##### 2.2.1 The Newton-Leibniz Formula

If the function $f$ is defined on the interval $I$ and has a continuous anti derivative $F(x)$ on it, then the Riemann integral can be denoted as 

$$
\int_{a}^{b} f(x) dx = F(b) - F(a)
$$

which is easy to prove consider the Lagrange Mean Value Theorem.

##### 2.2.2 Integrable-Caused Properties

1. If a function $f$ is Riemann integrable on the interval $I$, it is bounded on the interval.
2. Integral Mean Value Theorem:
If the functions $f$ and $g$ are continuous on the interval $I$ and $g$ does not change its sign on the interval, then there exists a $\xi \in [a,b]$ so that 
$$
\int_{a}^{b} f(x) g(x) dx = f(\xi) \int_{a}^{b} g(x) dx
$$
Specially, let $g=1$, the formula would become
$$
\int_{a}^{b} f(x) dx = f(\xi) (b-a)
$$

###### Applications:

Integral Inequalities:
1. Cauchy-Schwarz Inequality:
$$
\left( \int_{a}^{b} f(x) g(x) dx \right)^2 \leq \int_{a}^{b} f^{2}(x) dx \int_{a}^{b} g^{2}(x) dx
$$
>  Proof.
> $$
> \int_{a}^{b} (f(x)+\lambda g(x))^2 dx \geq 0
> $$
> where $\lambda$ is an arbitrary constant.
> $$
> \lambda^{2} \int_{a}^{b} g^{2}(x) dx + 2 \lambda \int_{a}^{b} f(x) g(x) dx + \int_{a}^{b} f^{2}(x) dx \geq 0
> $$
> Using the criterion $\Delta \leq 0$ can get the inequality.

2. Hölder Inequality
Let $f$ and $g$ be measurable functions, and let $p$ and $q$ be positive real numbers such that $p > 1$ and $q > 1$, with the relationship:
$$
\frac{1}{p} + \frac{1}{q} = 1
$$
Then, Hölder Inequality states that:
$$
\int_{a}^{b} \lvert f(x)g(x) \rvert dx \leq \left( \int_{a}^{b} \lvert f(x) \rvert^p dx \right)^{1/p} \left( \int_{a}^{b} \lvert g(x) \rvert^q dx \right)^{1/q}
$$
> Proof.
> Notice that $e^{x}$ is a convex on $\mathbb{R}$. Use the Jensen Inequality,
> $$
> e^{\frac{1}{p} \ln a^{p} + \frac{1}{q}\ln b^{q}} \leq \frac{1}{p} \, e^{\ln a^{p}} + \frac{1}{q} \, e^{\ln b^{q}}
> $$
> we can get the Yong inequality 
> $$
> \frac{1}{p} \, a^{p} + \frac{1}{q} \, b^{q} \geq ab
> $$
> Then let $a = \frac{\lvert f \rvert}{\left( \int_{a}^{b} \lvert f(x) \rvert^p dx \right)^{1/p}}$ and $b = \frac{\lvert g \rvert}{\left( \int_{a}^{b} \lvert g(x) \rvert^q dx \right)^{1/q}}$
> and we can get the inequality.

3. Minkowski Inequality
Let $f$ and $g$ be measurable functions on $\mathbb{R}$, and let $1 \leq p < \infty$. 
Minkowski's Inequality states that:
$$
\left( \int_{a}^{b} \lvert f(x) + g(x)\rvert^p \, dx \right)^{1/p} \leq \left( \int_{a}^{b} \lvert f(x)\rvert^p \, dx \right)^{1/p} + \left( \int_{a}^{b} \lvert g(x)\rvert^p \, dx \right)^{1/p}
$$
>  Proof.
> $$
> \int_{a}^{b} \lvert f(x) + g(x)\rvert^p \, dx \leq \int_{a}^{b} \lvert f(x) + g(x)\rvert^{p-1} \lvert f \rvert \, dx  + \int_{a}^{b} \lvert f(x) + g(x)\rvert^{p-1} \lvert g \rvert \, dx \leq \left( \int_{a}^{b} \lvert f(x) + g(x)\rvert^p \, dx \right)^{\frac{p-1}{p}} \left( \int_{a}^{b} \lvert f(x)\rvert^p \, dx \right)^{1/p} + \left( \int_{a}^{b} \lvert f(x) + g(x)\rvert^p \, dx \right)^{\frac{p-1}{p}} \left( \int_{a}^{b} \lvert g(x)\rvert^p \, dx \right)^{1/p}
> $$
> where the second $\leq$ is based on the Hölder Inequality.

---

##### 2.2.3 Riemann Integrability Theorem 

If a function $f$ is continuous on the interval $I$, then the following three properties are tantamount:
1. $$ f \in R[a,b] $$
2. $$ \lim_{\lvert \lvert \pi \rvert \rvert \rightarrow 0} \sum_{i=1}^{n} \omega_{i} \Delta x_{i} = 0 \,\,\,\, (\omega_{i} = \sup_{x \in [x_{i-1}, x_{i}]}f - \inf_{x \in [x_{i-1}, x_{i}]}f) $$
3. $$ \underline{I} = \overline{I} $$

So it is not hard to prove that any monotonous or continuous function on a closed interval is Riemann integrable. (To prove the latter, just consider the Cantor Theorem to make the solution trivial).

###### Lebesgue Theorem
Lebesgue's Theorem on Riemann Integrability provides a criterion for determining whether a bounded function is Riemann integrable. The theorem states that a bounded function $f$ defined on a closed interval $[a, b]$ is Riemann integrable if and only if the set of points where $f$ is discontinuous has measure zero.
- **Measure Zero**: A set has measure zero if, for any $\epsilon > 0$, it can be covered by a countable collection of intervals whose total length is less than $\epsilon$. Examples of sets with measure zero include finite sets, countable sets, and certain dense sets like the rational numbers in an interval.
- **Discontinuity Set**: The set of discontinuities of a function is the set of points where the function is not continuous. If this set has measure zero, the function is considered "almost everywhere" continuous.
- **Integrability**: This theorem implies that a function can have many discontinuities and still be Riemann integrable, as long as the discontinuities are "sparse" enough to form a set of measure zero.

###### Applications:
Integral Approximation
###### Example 1
If $f \in R[a,b]$, prove that for any $\epsilon > 0$, there always exists an step fuction/ piecewise linear function/ continuous and differentiable function that guarantees

$$
\int_{a}^{b} \lvert f(x)-g(x) \rvert dx < \epsilon
$$

> Proof. 
> $$
> \because f \in R[a,b]
> $$
>
> $$
> \therefore \exists \pi, \,s.t.\, \forall \epsilon > 0, \, \sum_{i=1}^{n} \omega_{i} \Delta x_{i} < \epsilon
> $$
>
> 
>
> 1. For step functions:
>    Choose $$ g(x) = \sum_{k=1}^{n} f(x_{k-1}) I_{[x_{k-1}, x_{k}]} $$
> 2. For piecewise linear functions:
>    Choose $$ g(x) = \sum_{k=1}^{n} \left( f(x_{k-1}) + \frac{f(x_{k}) - f(x_{k-1})}{\Delta x_{k}} (x - x_{k-1}) \right) I_{[x_{k-1}, x_{k}]} $$
> 3. For continuous and differentiable functions:
>    According to the Weierstrass First Approximation Theorem, we can choose a polnomial $P_{n} (x)$, so that 
>
> $$
> \sup_{x \in [a,b]} \lvert P_{n} (x) - f(x) \rvert < \epsilon
> $$
>
> For example, the Bernstein polynomial for $f \in [a,b] \rightarrow f'\in [0,1]$
> $$
> B_{n}(f')(x) = \sum_{k=0}^{n} f'(\frac{k}{n})\, C_{n}^{k}\, x^{k}\, (1-x)^{n-k}
> $$
> can be a template.

###### Example 2 Riemann-Lebesgue Lemma
If $f$ is a Riemann integrable function on the interval $[a, b]$ and $g$ is a periodic function with period $T$ that is integrable on $[0, T]$


$$
\lim_{p \to \infty} \int_a^b f(x) g(px) \, dx = \frac{1}{T} \int_0^T g(x) \, dx \int_a^b f(x) \, dx
$$

> Proof.
>
> According to the additivity principle,
>
> $$
> \int_{a}^{b} f(x) g(px) dx = \sum_{k=1}^{n} \int_{x_{k-1}}^{x_{k}} f(x) g(px) dx
> $$
>
> Using the Integral Mean Value Theorem, we can deduce that for every interval $[x_{k-1}, x_{k}]$, there exists a $\xi_{k} \in  [x_{k-1}, x_{k}]$ so that 
>
> $$
> \int_{x_{k-1}}^{x_{k}} f(x) g(px) dx = f(\xi_{k}) \int_{x_{k-1}}^{x_{k}} g(px) dx
> $$
>
> Choose a partition $\pi: a=x_{0} < a + \frac{T}{p} = x_{1} < \cdots < x_{n} = b$, so
>
> $$
> \int_{x_{k-1}}^{x_{k}} g(px) dx = \frac{1}{p} \int_{0}^{T} g(t) dt
> $$
>
> Therefore, we can add the parts and use the definition of the Riemann Integral to get the lemma:
>
> $$
> \lim_{p \to \infty} \int_a^b f(x) g(px) \, dx = \lim_{p \to \infty} \frac{1}{p} \sum_{k=1}^{n} f(\xi_{k}) \int_{0}^{T} g(t) dt = \lim_{n \to \infty} \sum_{k=1}^{n} f(\xi_{k}) \frac{b-a}{nT} \int_{0}^{T} g(t) dt = \frac{1}{T} \int_0^T g(x) \, dx \int_a^b f(x) \, dx
> $$
>

###### Example 3
If $f$ is a differentiable funcition on the interval $[a,b]$, given the Integral Mean Value Theorem

$$
\int_{a}^{x} f(x) dx = f(\xi(x)) (x-a)
$$

Prove that 

$$
\lim_{x \to a+} \frac{\xi(x)-a}{x-a} = \frac{1}{2}
$$

>  Proof.
>
> Given that $f$ is differentiable, we can write its Taylor series
>
> $$
> f(\xi(x)) = f(a) + f'(a) (\xi-a) + o(\xi - a)
> $$
>
> $$
> \therefore \int_{a}^{x} f(x) dx = (f(a) + f'(a) (\xi-a) + o(\xi - a)) (x-a)
> $$
>
> $$
> \therefore \lim_{x \to a+} \frac{\int_{a}^{x} f(x) dx}{(x-a)^2} = \frac{1}{2} f'(a) = f'(a) \frac{\xi-a}{x-a} 
> $$
>
> $$
> \therefore \lim_{x \to a+} \frac{\xi(x)-a}{x-a} = \frac{1}{2}
> $$

