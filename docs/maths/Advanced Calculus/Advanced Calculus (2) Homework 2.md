# 高等微积分 （2） 第2次作业

Chasse_neige

#### 1 幂级数的收敛域与求和公式

考虑幂级数 $\sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + ...$

(1) 确定上述幂级数的收敛域

利用 Ratio Test：
$$
\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_{n}|} = \lim_{n \to \infty} \frac{n}{n+1} =1
$$

$$
\therefore \,\, R = \frac{1}{1} = 1
$$

(2) 证明: 对任何 $|x| < 1$, 有

$$
\sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n} = \ln(1 + x)
$$

证明：由（1）的收敛半径可知，对任何 $|x| < 1$，级数 $\sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + ...$绝对收敛。

对函数 $\ln (1+x)$ 作 Taylor 展开：
$$
\frac{\mathrm{d}^{n}}{\mathrm{d} x^{n}} \ln (1+x) = (-1)^{n-1} \frac{(n-1)!}{(1+x)^{n}}
$$

$$
\therefore \,\, \ln (1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n!} (n-1)! x^{n}
$$

已经证明在 $|x| < 1$ 时该级数绝对收敛，所以 $\sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n} = \ln(1 + x) \quad \forall |x| < 1$

(3) 证明:
$$
\sum_{n=1}^{\infty} (-1)^{n-1} \frac{1}{n} = \ln 2
$$

对该交错级数作 Leibniz Test：

$\frac{1}{n}$ 递减且趋于零，故该级数条件收敛。由 Abel Theorem，该级数对应的和函数在 $x = 1$处左连续，所以$\sum_{n=1}^{\infty} (-1)^{n-1} \frac{1}{n} = \ln 2$

#### 2 函数的幂级数展开

(1) 将函数 $f(x) = \arctan x$ 在 $x = 0$ 附近表示成幂级数.

作 Taylor 展开：
$$
\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{2n+1} x^{2n+1}
$$
(2) 确定上述级数的收敛半径.

作 Ratio Test ：
$$
\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_{n}|} = \lim_{n \to \infty} \frac{2n + 1}{2n + 3} = 1
$$
所以收敛半径为1

(3) 证明:
$$
\frac{\pi}{4} = \sum_{n=0}^{\infty} (-1)^n \frac{1}{2n + 1} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + ...
$$

对该交错级数作 Leibniz Test：

$\frac{1}{2n + 1}$ 递减且趋于零，故该级数条件收敛。由 Abel Theorem，该级数对应的和函数在 $x = 1$处左连续，所以$\sum_{n=1}^{\infty} (-1)^{n-1} \frac{1}{2n + 1} = \frac{\pi}{4}$

#### 3 函数项级数的性质

考虑函数项级数 $\zeta(x) = \sum_{n=1}^{\infty} \frac{1}{n^x}$.

(1) 求上述函数项级数的收敛域 $X$.

当 $x > 1$ 时：使用积分判别法，考虑积分 $\int_{1}^{\infty} \frac{1}{t^x} \, dt$。对于 $x > 1$，该积分收敛，因此级数 $\sum_{n=1}^{\infty} \frac{1}{n^x}$ 收敛。

当 $x = 1$ 时：此时级数变为调和级数 $\sum_{n=1}^{\infty} \frac{1}{n}$，发散。

当 $x < 1$ 时：此时通项 $\frac{1}{n^x}$ 大于 $\frac{1}{n}$，而 $\sum_{n=1}^{\infty} \frac{1}{n}$ 发散，根据比较定理，$\sum_{n=1}^{\infty} \frac{1}{n^x}$ 发散。
所以收敛域为 $(1, +\infty)$

(2) $\zeta(x)$ 在 $X$ 上是否连续? 请详细说明理由.

连续，理由如下：

$\zeta(x)$ 在 $X$ 上连续等价于函数序列 $a_{n}(x) = \frac{1}{n^{x}}$ 一致收敛。$\forall b >1$ ，对在 其作 M-Test :

$a_{n} (x) < \frac{1}{n^{{b}}} \quad \forall x > b$ ，又因为 $\sum M_{n} = \zeta (b)$ 收敛，所以 $a_{n}(x)$ 在 $(b, + \infty)$ 上一致收敛，即 $\zeta (x)$ 在 $(b, + \infty)$ 上连续，对任意 $x > 1$，总能找到 $1 < b < x$ ，所以 $\zeta(x)$ 在 $X$ 上连续。

(3) $\zeta(x)$ 在 $X$ 上是否可导, 求出其导函数 $\zeta'(x)$. 

可导，理由如下：

$\zeta(x)$ 在 $X$ 上可导等价于 $\zeta' (x)$ 对应的函数级数连续且在$X$ 上一致收敛且$\zeta(x)$ 在 $X$ 上点点收敛。$\zeta(x)$ 在 $X$ 上点点收敛已经在（1）中说明，现在证明 $\zeta' (x)$ 对应的函数级数在$X$ 上一致收敛。
$$
\frac{\mathrm{d}}{\mathrm{d} x} \frac{1}{n^{x}} = - \ln n  \frac{1}{n^{x}}
$$
对级数  $\sum_{n=1}^{\infty} - \ln n \frac{1}{n^x}$ 作M-Test：

$M_{n} = \frac{\ln n }{n^{b}}$ ，有 $\sum M_{n}$ 与级数 $\sum \frac{n^{\epsilon}}{n^{b}}$ 收敛性一致 $(\forall \epsilon > 0)$，所以取 $0 < \epsilon < b-1$ 得到 $\sum M_{n}$收敛，故级数  $\sum_{n=1}^{\infty} - \ln n \frac{1}{n^x}$ 一致收敛。所以$\forall x > b$ $\zeta (x)$ 在 $(b, + \infty)$ 上可导，对任意 $x > 1$，总能找到 $1 < b < x$ ，所以 $\zeta(x)$ 在 $X$ 上可导。

#### 4 幂级数的收敛半径与函数展开

(1) 确定幂级数 $\sum_{n=0}^{\infty} \binom{2n}{n} x^n$ 的收敛半径, 其中 $\binom{2n}{n} = \frac{(2n)!}{n!n!}$.

作 Ratio Test ：
$$
\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_{n}|} = \lim_{n \to \infty} \frac{(2n + 2)(2n + 1)}{(n + 1)^{2}} = 4
$$
所以收敛半径为 $\frac{1}{4}$

(2) 将函数 $f(x) = \frac{1}{\sqrt{1 - x}}$ 在 $x = 0$ 附近表示成幂级数, 只需叙述结果.
$$
f(x) = \frac{1}{\sqrt{1 - x}} = 1 + \sum_{n=1}^{\infty} \frac{(2n - 1)!!}{2^{n} n!} x^{n} \qquad \forall |x| < 1
$$
(3) 将函数 $g(x) = \arcsin x$ 在 $x = 0$ 附近表示成幂级数, 需要说明理由.

理由：
$$
\frac{\mathrm{d}}{\mathrm{d} x} \arcsin x = \frac{1}{\sqrt{1 - x^{2}}} = \sum_{n=1}^{\infty}
\binom{-1/2}{m} (-x^2)^m = \sum_{m=0}^{\infty} \frac{(2m)!}{(m!)^2 4^m} x^{2m} \qquad \forall \, |x| < 1
$$
在证明这一级数的可积性：由于幂级数在收敛半径内连续可积所以由 Ratio Test 容易得到该级数在 $|x| < 1$ 内可积。

利用逐项积分：
$$
\arcsin x = \int_{0}^{x} \frac{1}{\sqrt{1 - x^{2}}} \mathrm{d} x = \sum_{m=0}^{\infty} \int_{0}^{x} \frac{(2m)!}{(m!)^2 4^m} x^{2m} \mathrm{d} x = \sum_{m=0}^{\infty} \frac{(2m)!}{(m!)^2 4^m (2m+1)} x^{2m+1} \qquad \forall \, |x| < 1
$$


#### 5 函数级数的收敛性与可导性

对每个正整数 $n$, 设 $M_n$ 是非负实数, 函数 $f_n$ 在 $[a, b]$ 上连续且在 $(a, b)$ 上处处可导, 满足如下条件:

(i) 级数 $\sum_{n=1}^{\infty} M_n$ 收敛.

(ii) 对任何正整数 $n$, 对任何 $x \in (a, b)$, 有 $|f_n'(x)| \leq M_n$.

(iii) 级数 $\sum_{n=1}^{\infty} f_n(a)$ 收敛.

(1) 证明: 函数级数 $\sum_{n=1}^{\infty} f_n(x)$ 在区间 $[a, b]$ 上点点收敛到某个和函数 $S(x)$.

证明：因为级数 $\sum_{n=1}^{\infty} M_n$ 收敛，所以根据M-Test，级数 $\sum_{n=1}^{\infty} f_n'(x)$ 一致收敛，假设其收敛至 $g (x)$。
$$
\sum_{n=1}^{\infty} \int_{a}^{x} f_{n}' (x) \mathrm{d} x = \sum_{n=1}^{\infty} f_{n} (x) - f_{n} (a) \qquad x \in [a,b]
$$

$$
\sum_{n=1}^{\infty} |f_{n} (x) - f_{n} (a)| \leq \sum_{n=1}^{\infty} \int_{a}^{x} |f_{n}' (x)| dx \leq \sum_{n=1}^{\infty} M_{n} (x - a)
$$

由于级数 $\sum_{n=1}^{\infty} M_n$ 收敛，所以由比较定理级数 $\sum_{n=1}^{\infty} f_{n} (x) - f_{n} (a)$ 绝对收敛。所以级数 $\sum_{n=1}^{\infty} f_n(x) = \sum_{n=1}^{\infty} f_{n} (x) - f_{n} (a) + \sum_{n=1}^{\infty} f_{n} (a)$ 点点收敛。  

(2) 假设对每个正整数 $n$, $f_n'$ 在 $(a, b)$ 上连续. 证明: $S(x)$ 在区间 $(a, b)$ 上处处可导。

证明：由于$f_n'$ 在 $(a, b)$ 上连续，且级数 $\sum_{n=1}^{\infty} f_n'(x)$ 一致收敛，所以$g (x)$连续可积。
$$
\int_{a}^{x} g (t) \mathrm{d} t = \sum_{n=1}^{\infty} \int_{a}^{x} f_{n}' (x) \mathrm{d} x = \sum_{n=1}^{\infty} f_{n} (x) - f_{n} (a) \qquad x \in [a,b]
$$
记 $\sum_{n=1}^{\infty} S_{n} (x) = f (x)$ ，$\sum_{n=1}^{\infty} f_{n} (a) = S(a)$
$$
S (x) = S(a) + \int_{a}^{x} g (t) \mathrm{d} t
$$
根据微积分基本定理的结果，$S(x)$ 在区间 $(a, b)$ 上处处可导。

#### 6 一致收敛的 Dirichlet 判别法

设函数序列 $\{a_n(x)\}_{n=1}^\infty$ 在区间 $I$ 上一致收敛到零函数, 且对每个 $x \in I$, $\{a_n(x)\}_{n=1}^\infty$ 关于 $n$ 是单调的; 设 $\{b_n(x)\}_{n=1}^\infty$ 的部分和序列在区间 $I$ 上一致有界, 即存在正数 $M$, 使得

$$
|b_1(x) + ... + b_n(x)| \leq M, \forall n \in \mathbb{Z}^+, \forall x \in I.
$$

证明: 函数级数 $\sum_{n=1}^{\infty} a_n(x) b_n(x)$ 在区间 $I$ 上一致收敛.

证明：利用柯西准则证明。记$\{b_n(x)\}_{n=1}^\infty$ 的部分和 $\sum_{k = 1}^{n} b_{k} (x) = B_{n} (x)$
$$
\sum_{k=n+1}^{m} a_k(x) b_k(x) = \sum_{k=n+1}^{m} a_{k} (x) (B_{k} (x) - B_{k - 1} (x)) \\ = a_{m}(x) B_m(x) - a_{n+1}(x) B_n(x) + \sum_{k=n+1}^{m-1} (a_k(x) - a_{k+1}(x)) B_k(x)
$$

$$
\Big|\sum_{k=n+1}^{m} a_k(x) b_k(x) \Big| \leq |a_{m}(x) B_m(x)| + |a_{n+1}(x) B_n(x)| + \sum_{k=n+1}^{m-1} (a_k(x) - a_{k+1}(x)) |B_k(x)| \\ \leq |a_{n} (x)| M + |a_{m} (x)| M + |a_{n+1} (x) - a_{m} (x)| M
$$

由于函数序列 $\{a_n(x)\}_{n=1}^\infty$ 在区间 $I$ 上一致收敛到零函数，所以 $\forall \epsilon > 0 ,\exist N, s.t. \forall x \in I, \forall n > N, |a_{n} (x)| < \frac{\epsilon}{4M}$
$$
\Big|\sum_{k=n+1}^{m} a_k(x) b_k(x) \Big| < \epsilon
$$
所以根据柯西准则，函数级数 $\sum_{n=1}^{\infty} a_n(x) b_n(x)$ 在区间 $I$ 上一致收敛。

#### 7 一致收敛的 Abel 判别法

设对每个 $x \in I$, $\{a_n(x)\}_{n=1}^\infty$ 关于 $n$ 是单调的, 且函数序列 $\{a_n(x)\}_{n=1}^\infty$ 在区间 $I$ 上一致有界, 即存在正数 $K$, 使得

$$
|a_n(x)| \leq K, \forall n \in \mathbb{Z}_+, \forall x \in I;
$$

设函数级数 $\sum_{n=1}^{\infty} b_n(x)$ 在区间 $I$ 上一致收敛. 证明: 函数级数 $\sum_{n=1}^{\infty} a_n(x) b_n(x)$ 在区间 $I$ 上一致收敛.
证明：设 $B_n(x) = \sum_{k=1}^n b_k(x)$，由于 $\sum_{n=1}^{\infty} b_n(x)$ 一致收敛，则 $\{B_n(x)\}$ 在 $I$ 上一致收敛到某个函数 $B(x)$。
由于 $\{B_n(x)\}$ 一致收敛，根据一致收敛的柯西准则，对任意 $\epsilon > 0$，存在 $N \in \mathbb{Z}^+$，使得对任意 $m > n \geq N$ 和任意 $x \in I$，有
$$
|B_m(x) - B_n(x)| < \frac{\epsilon}{3K}
$$
同时由于 $\{a_n(x)\}_{n=1}^\infty$ 关于 $n$ 是单调且一致有界的，所以$\{a_n(x)\}_{n=1}^\infty$ 在区间 $I$ 上点点收敛到函数$a (x)$ 。
$$
\sum_{k=n+1}^m a_k(x) b_k(x) = \sum_{k=n+1}^m a_k(x) (B_k(x) - B_{k-1}(x)).
$$
由于 $\{a_n(x)\}$ 是单调的，假设其单调递减（单调递增的情况类似），则 $a_k(x) - a_{k+1}(x) \geq 0$。
$$
\sum_{k=n+1}^{m} a_k(x) b_k(x) = a_{m}(x) B_m(x) - a_{n+1}(x) B_n(x) + \sum_{k=n+1}^{m-1} (a_k(x) - a_{k+1}(x)) B_k(x) \\ = a_{m} (x) (B_{m} (x) - B_{n} (x)) + \sum_{k = n + 1}^{m - 1} (a_{k} (x) - a_{k+1} (x))(B_{k} (x) - B_{n} (x)) \\ \leq |a_{m} (x)||B_{m} (x) - B_{n} (x)| + \sum_{k = n + 1}^{m - 1} |a_{k} (x) - a_{k+1} (x)||B_{k} (x) - B_{n} (x)| \leq \frac{\epsilon}{3} + (a_{n+1} (x) - a_{m} (x)) \epsilon \\ =
\frac{\epsilon}{3} + \frac{2}{2} \epsilon = \epsilon
$$

这表明 $\sum_{n=1}^{\infty} a_n(x) b_n(x)$ 满足一致收敛的柯西准则，所以 函数级数 $\sum_{n=1}^{\infty} a_n(x) b_n(x)$ 在区间 $I$ 上一致收敛。

#### 8 幂级数的 Abel 第二定理

设幂级数 $\sum_{n=0}^{\infty} a_n x^n$ 在点 $x_0 > 0$ 处收敛. 证明: 该幂级数在 $[0, x_0]$ 上一致收敛.

取 $0 < b < x_{0}$ ，对区间 $[0,b)$ 上的幂级数作M-Test：

$|a_{n} x^{n}| < |a_{n}|b^{n}$ 因为b在收敛半径之内，所以级数 $\sum_{n=0}^{\infty} a_{n=0} b^{n}$ 绝对收敛，即级数 $\sum_{n=0}^{\infty} |a_{n}|b^{n}$ 收敛。

所以幂级数 $\sum_{n=0}^{\infty} a_n x^n$ 在区间 $[0,b)$ 上一致收敛。

故幂级数$\sum_{n=0}^{\infty} a_n x^n$ 在区间 $[0,x_{0})$ 上一致收敛，记其收敛至 $f(x)$。
$$
\forall \epsilon > 0 , \exist N \in \mathbb{Z}_{+} , s.t. \forall n > N |f (x) - \sum_{k=0}^{n} a_k x^k| < \epsilon \quad x \in [0, x_{0})
$$
又因为幂级数 $\sum_{n=0}^{\infty} a_n x^n$ 在点 $x_0 > 0$ 处收敛吗，记其收敛至 $f(x_{0})$。
$$
\forall \epsilon > 0 , \exist N_{x_{0}} \in \mathbb{Z}_{+} , s.t. \forall n > N_{x_{0}} |f (x_{0}) - \sum_{k=0}^{n} a_k x_{0}^k| < \epsilon
$$

$$
\therefore \,\, \forall \epsilon > 0 , N' = \max\{ N, N_{x_{0}} \}, s.t. \forall n > N' |f (x) - \sum_{k=0}^{n} a_k x^k| < \epsilon \quad x \in [0, x_{0}]
$$

所以该幂级数在 $[0, x_0]$ 上一致收敛.