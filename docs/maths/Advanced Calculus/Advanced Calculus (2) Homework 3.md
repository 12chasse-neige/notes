# 高等微积分 （2） 第3次作业

Chasse_neige

1. 给定有界闭区间 $I = [a, b]$，令 $C = C(I)$ 为由 $I$ 上的所有连续函数所构成的集合，对 $f, g \in C$，定义它们之间的距离为

$$
d(f, g) = \max_{x \in I} |f(x) - g(x)|
$$

(1) 证明：$d$ 是 $C$ 上的一个度量。

证明：逐条验证度量的三大性质：

对称性：$d(f, g) = \max_{x \in I} |f(x) - g(x)| = d (g, f)$ 

正定性：显然满足

三角不等式：
$$
d (f, g) + d (g, h) = \max_{x \in I} |f (x) - g (x)| + \max_{x \in I} |g (x) - h (x)| \geq \max_{x \in I} |f (x) - h(x)| = d (f, h)
$$
成立，所以$d$ 是 $C$ 上的一个度量。

(2) 称 $C$ 中的序列 $\{f_n\}$ 收敛到 $f \in C$，记作 $\lim_{n \to \infty} f_n = f$，如果对任何 $\epsilon > 0$，存在正整数 $N$，使得对 $n \geq N$ 都有 $d(f_n, f) < \epsilon$。

称 $\{f_n\}_{n=1}^\infty$ 是一个 Cauchy 列，如果对任何 $\epsilon > 0$，存在正整数 $N$，使得对任何 $n, m \geq N$ 总有 $d(f_n, f_m) < \epsilon$。

证明：$C$ 中的任何 Cauchy 列都收敛，即对 $C$ 中的任何 Cauchy 列 $\{f_n\}_{n=1}^\infty$，存在 $f \in C$ 使得 $\lim_{n \to \infty} f_n = f$

证明：因为对任何 $\epsilon > 0$，存在正整数 $N$，使得对 $n \geq N$ 都有 $d(f_n, f) < \epsilon$，所以 $\forall x_{0} \in I$ ，  $f_{n}(x_{0})$ 为 Cauchy 列。记  $f_{n}(x_{0})$收敛至 $f (x_{0})$，所以  $f_{n} (x)$ 点点收敛至 $f$ 

2. 设 $f, g$ 是 $[a, b]$ 上的可积函数。证明：

$$
\left( \int_a^b f(x)g(x) \, dx \right)^2 \leq \left( \int_a^b f(x)^2 \, dx \right) \cdot \left( \int_a^b g(x)^2 \, dx \right).
$$

证明：
$$
\int_{a}^{b} (f (x) + t g(x))^{2} dx = \int_{a}^{b} f^{2} (x) + 2 t f (x) g (x) + t^{2} g^{2} (x) dx \geq 0
$$
 对于所有参数 $t$ 均成立，所以关于 $t$ 的判别式小于零：
$$
4 \left( \int_a^b f(x)g(x) \, dx \right)^2 \leq 4 \left( \int_a^b f(x)^2 \, dx \right) \cdot \left( \int_a^b g(x)^2 \, dx \right).
$$
即 $\left( \int_a^b f(x)g(x) \, dx \right)^2 \leq \left( \int_a^b f(x)^2 \, dx \right) \cdot \left( \int_a^b g(x)^2 \, dx \right).$

3. 证明：$U$ 是 $\mathbb{R}^n$ 的开集当且仅当 $U$ 可以表示成一族开球邻域的并。

必要性⇒
假设 $U$ 是 $\mathbb{R}^n$ 中的开集。根据开集的定义，对任意 $x \in U$，存在半径 $r_x > 0$，使得开球 $B_{r_{x}} (x) = \{ y \in \mathbb{R}^n \mid \|y - x\| < r_x \}$ 完全包含在 $U$ 中，考虑所有这样的开球的并集：
$$
U = \bigcup_{x \in U} B_{r_{x}} (x)
$$
每个 $x \in U$ 都属于对应的 $B_{{r_{x}}} (x)$，因此 $U \subseteq \bigcup_{x \in U} B_{r_{x}} (x)$。

每个 $B_{r_{{x}}} (x)$ 是 $U$ 的子集，因此它们的并集 $\bigcup_{x \in U} B_{r_{x}} (x) \subseteq U$。

综上，$U$ 可表示为一族开球邻域的并。

充分性⇐
假设 $U$ 可以表示为一族开球的并，即存在集合 $\Lambda$，使得：
$$
U = \bigcup_{\lambda \in \Lambda} B_{r_{\lambda}} (x_\lambda)
$$
其中每个 $B_{r_{\lambda}} (x_\lambda)$ 是 $\mathbb{R}^n$ 中的开球。 
由于每个开球 $B_{r_{\lambda}} (x_\lambda)$ 本身是开集，而开集的任意并集仍然是开集，因此 $U$ 是开集。

4. 计算极限。

(1)
$$
\lim_{(x, y) \to 0} \frac{1 - \cos(xy)}{x^2 + y^2}
$$

利用不等式 $\cos (xy) \geq 1- \frac{x^{2} y^{2}}{2}$
$$
 \frac{1 - \cos(xy)}{x^2 + y^2} \leq \frac{x^{2} y^{2}}{2 (x^{2} + y^{2})} = \frac{1}{2} \frac{1}{\frac{1}{x^{2}} + \frac{1}{y^{2}}} \leq \frac{1}{8} (x^{2} + {y^{2}})
$$
由于 $\frac{1 - \cos(xy)}{x^2 + y^2} > 0$，且 $\lim_{(x,y) \to 0} \frac{1}{8} (x^{2} + y^{2}) = 0$，所以由夹逼定理
$$
\lim_{(x, y) \to 0} \frac{1 - \cos(xy)}{x^2 + y^2} = 0
$$
(2)
$$
\lim_{(x, y) \to (0, 0)} \frac{-3x^2y + y^3 - 4xy}{x^2 + y^2}
$$

极限不存在，证明：

上述极限可以拆为两部分：
$$
\lim_{(x, y) \to (0, 0)} \frac{-3x^2y + y^3 - 4xy}{x^2 + y^2} = \lim_{(x,y) \to (0,0)} \frac{-3 x^{2} y + y^{3}}{x^{2} +  y^{2}} -  \frac{4 x y}{x^{2} + y^{2}}
$$
由于 $|- 3 x^{2} y + y^{3}| \leq 3 \sqrt{x^{2} + y^{2}}^{3}$，所以
$$
\lim_{(x,y) \to (0,0)} \Big|  \frac{-3 x^{2} y + y^{3}}{x^{2} +  y^{2}} \Big| \leq \lim_{(x,y) \to (0,0)} 3 \sqrt{x^{2} + y^{2}}
$$
由夹逼定理，这一项为0

但是第二项由复合极限定理可以证明不存在：

构造 $\Delta_{k} = (t, kt)$
$$
\lim_{t \to 0} f \circ \Delta_{k} (t) = \lim_{t \to 0} \frac{4k}{1 + k^{2}}  
$$
由对  $k$ 的依赖，所以极限不存在。

(3)
$$
\lim_{(x, y) \to (0, 0)} \frac{(1 + x^2 + y^2)^{1/(x^2 + y^2)} - e}{x^2 + y^2}
$$
其中 $e = \lim_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n$。

利用复合极限：定义 $f(x, y)=x^{2}+y^{2}$ ， $g(t) = \frac{(1 + t)^{\frac{1}{t}} - e}{t}$

所以
$$
\lim_{(x, y) \to (0, 0)} \frac{(1 + x^2 + y^2)^{1/(x^2 + y^2)} - e}{x^2 + y^2} = \lim_{(x, y) \to (0, 0)} g \circ f = \lim_{t \to 0} g (t) = \lim_{t \to 0} \frac{(1 + t)^{\frac{1}{t}} - e}{t} \\ = 
\lim_{t \to 0} \frac{e^{\ln (1 + t) \frac{1}{t}} - e}{t} = \lim_{t \to 0} \left(\frac{1}{1 + t} \frac{1}{t} - \frac{1}{t^{2}} \ln (1 + t) \right) e^{\ln (1 + t) \frac{1}{t}} = - \frac{e}{2}
$$
验证复合极限的适用条件：

在 $(x, y) = (0, 0)$ 附近， $f(x, y)=x^{2}+y^{2} > 0$ ，所以上述复合极限成立。

(4) 求出所有实数 $a, b$ 及正数 $\alpha$，使得如下极限式成立：
$$
\lim_{(x, y) \to (0, 0)} \frac{ax + by}{(x^2 + y^2)^\alpha} = 0
$$

$\alpha < \frac{1}{2}$ ，上式对于所有实数 $a, b$ 成立。

证明：
$$
a x + b y \leq (a + b) \sqrt{x^{2} + y^{2}}
$$

$$
\lim_{(x, y) \to (0, 0)} \frac{ax + by}{(x^2 + y^2)^\alpha} \leq \lim_{(x,y) \to )(0,0)} (a + b) (x^{2} + y^{2})^{\frac{1}{2} - \alpha} = 0
$$

由夹逼定理，极限 $\lim_{(x, y) \to (0, 0)} \frac{ax + by}{(x^2 + y^2)^\alpha}$ 为0

证明当$\alpha \geq \frac{1}{2}$ 时，对于所有 $a,b$ 上述极限不存在：

利用复合极限，构造 $\Delta_{k} = (t, kt)$
$$
\lim_{t \to 0} (f \circ \Delta_{k}) (t) = \lim_{t \to 0} t^{1 - 2 \alpha} \frac{a + bk}{(1 + k^{2})^{\alpha}}
$$
显然，对于所有  $\alpha > \frac{1}{2}$ ，上述极限趋于 $\infty$，对于所有 $\alpha = \frac{1}{2}$ ，上述极限不存在。

所以当且仅当$\alpha < \frac{1}{2}$ ， $\lim_{(x, y) \to (0, 0)} \frac{ax + by}{(x^2 + y^2)^\alpha} = 0$ 对于所有实数 $a, b$ 成立。

5. 给定 $x_0 \in \mathbb{R}^n$。定义函数 $f : \mathbb{R}^n \to \mathbb{R}$ 为

$$
f(x) = d(x_0, x), \quad \forall x \in \mathbb{R}^n.
$$
证明：$f$ 是连续函数。

 $\forall \epsilon > 0, \exist \delta = \epsilon, s.t. \forall d (x_{1}, x) < \delta, |d(x_{0},x) -d (x_{0}, x_{1})| \leq d (x_{1}, x) < \delta = \epsilon$

所以$f$ 是连续函数。

6. 设 $D$ 是 $\mathbb{R}^n$ 的子集，$f, g : D \to \mathbb{R}$ 是连续函数。定义函数 $h : D \to \mathbb{R}$ 为

$$
h(x) = \min\{f(x), g(x)\}, \quad \forall x \in D.
$$
证明：$h$ 是连续函数。

证明：由于$f, g : D \to \mathbb{R}$ 是连续函数，由连续函数的定义
$$
\forall \epsilon > 0, \exist \delta_{1}, \delta_{2} , s.t. \forall d (x_{0}, x) < \delta_{1}, |f(x) -f (x_{0})| < \epsilon ; \forall d (x_{0}, x) < \delta_{2}, |g(x) - g (x_{0})| < \epsilon
$$

$$
\therefore \,\, \forall \epsilon > 0, \exist \delta = \min \{ \delta_{1}, \delta_{2} \}, s.t. \forall d (x_{0}, x) < \delta, |h(x) - h(x_{0})| \leq \max \{ |f(x) - h(x_{0})|, |g(x) - h(x_{0})| \} \\ \leq \max \{ |f(x) - f(x_{0})|, |g(x) - g(x_{0})| \} < \epsilon
$$

所以$h$ 是连续函数。