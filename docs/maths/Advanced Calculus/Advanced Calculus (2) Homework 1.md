# 高等微积分（2） 第1次作业 

Chasse_neige

#### 1.  判断如下级数的收敛发散性，需要给出证明。

(1) 级数 $\sum_{n=1}^{\infty} \frac{\sin(n\theta)}{n^2}$，其中 $\theta$ 是给定的实数。
$$
\left|\frac{\sin(n \theta)} {n^{2}} \right| \leq \frac{1}{n^{2}}
$$

$$
\therefore \,\, \sum_{n=1}^{\infty} \left| \frac{\sin(n\theta)}{n^2} \right| \leq \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^{2}}{6}
$$

由比较定理，绝对收敛。

(2) 级数 $\sum_{n=1}^{\infty} \frac{n!}{n^n}$ 。

作 Ratio Test：
$$
\lim_{ n \to \infty} \frac{a_{n+1}}{a_{n}} = \lim_{ n \to \infty} \frac{n}{n+1}^{n} = \lim_{ n \to \infty} \left((1 - \frac{1}{n+1})^{- (n+1)} \right)^{- \frac{n}{n+1}} = \frac{1}{e} < 1
$$
收敛。

(3) 级数 $\sum_{n=1}^{\infty} \frac{n! a^n}{n^n}$，其中 $a > 0$ 是给定的实数。

作 Ratio Test：
$$
\lim_{ n \to \infty} \frac{a_{n+1}}{a_{n}} = \lim_{ n \to \infty} a \frac{n}{n+1}^{n} = \frac{a}{e}
$$
当 $a>e$ 时，发散；当 $a<e$ 时，收敛。

当 $a=e$ 时：
$$
\because \,\, e^{n} > \sum_{i=0}^{n} \frac{n^{i}}{i!} \geq \frac{n^{n}}{n!}
$$

$$
\therefore \,\, a_{n} \geq 1
$$

发散。

(4) 级数 $\sum_{n=2}^{\infty} \frac{n^{\ln n}}{(\ln n)^n}$.
$$
a_{n} = e^{(\ln n)^{2} - n \ln(\ln(n))}
$$
作 Root Test：
$$
\lim_{n \to \infty} {a_{n}}^{\frac{1}{n}} = \lim_{n \to \infty} e^{\frac{(\ln n)^{2}}{n} - \ln(\ln(n))} = 0 < 1
$$
收敛。

(5) 级数 $\sum_{n=1}^{\infty} \frac{(\ln n)^p}{1+n^2}$，其中 $p$ 是给定的正数。
$$
\frac{(\ln n)^p}{1+n^2} < \frac{(\ln n )^{p}}{n^{2}}
$$
对 $(\ln n)^{p}$ 进行分析：取$\alpha > 0$ ，
$$
\frac{(\ln n)^{p}}{n^{\alpha}} = \left( \frac{p}{\alpha} \frac{\ln n^{\frac{\alpha}{p}}}{n^{\frac{\alpha}{p}}}\right)^{p}
$$

$$
\therefore \,\, \lim_{n \to \infty} \frac{(\ln n)^{p}}{n^{\alpha}} = 0
$$

所以总可以找到 $N$ 使得在 $n > N$ 时，
$$
\frac{(\ln n)^{p}}{n^{\alpha}} <1
$$
回归本题，取 $0 < \alpha <1$ ，

级数 $\sum_{n}\frac{(\ln n )^{p}}{n^{2}}$ 在 $n$ 足够大时小于 $\sum \frac{1}{n^{2-\alpha}}$ 这个正项收敛级数。

所以由比较定理，级数$\sum_{n=1}^{\infty} \frac{(\ln n)^p}{1+n^2}$ 收敛。

(6) 级数 $\sum_{n=1}^{\infty} \frac{(\ln n)^q}{n^p}$，其中 $p, q$ 是给定的正数。

当 $p \leq 1$ 时， $\frac{(\ln n)^q}{n^p} > \frac{1}{n}$，故发散。

当 $p > 1$ 时，利用上一题的结论，在 $n$ 充分大时，$\frac{(\ln n)^q}{n^p} < \frac{1}{n^{p - \delta}}$，$\delta \in (0, p-1)$，由于 $\sum \frac{1}{n^{p - \delta}}$ 收敛，由比较定理，原级数收敛。

(7) 级数 $\sum_{n=1}^{\infty} \left( \frac{1}{n^\alpha} - \sin \frac{1}{n^\alpha} \right)$，其中 $\alpha$ 是给定的正数。

因为 $\frac{1}{n^{\alpha}}$ 单调递减且趋于零，所以
$$
\lim_{ n \to \infty} \frac{\frac{1}{n^{\alpha}} - \sin \frac{1}{n^{\alpha}}}{\frac{\frac{1}{n^{\alpha}}^{3}}{6}} = 1
$$
由比较定理的极限形式，级数 $\sum_{n=1}^{\infty} \left( \frac{1}{n^\alpha} - \sin \frac{1}{n^\alpha} \right)$ 与级数$\sum_{n=1}^{\infty} \frac{1}{6 n^{3 \alpha}}$ 收敛性质相同。

所以当 $\alpha \leq \frac{1}{3}$ 时，原级数收敛；当 $\alpha > \frac{1}{3}$ 时，原级数发散。

(8) 级数 $1 - \frac{1}{2^{2p}} + \frac{1}{3^p} - \frac{1}{4^{2p}} + \cdots + \frac{1}{(2n-1)^p} - \frac{1}{(2n)^{2p}} + \cdots$，其中 $p$ 是给定的正数。

当$p > 1$ 时，

该交错级数的绝对值 $1 + \frac{1}{2^{2p}} + \frac{1}{3^p} + \frac{1}{4^{2p}} + \cdots + \frac{1}{(2n-1)^p} + \frac{1}{(2n)^{2p}} + \cdots < 1 + \frac{1}{2^{p}} + \frac{1}{3^p} + \frac{1}{4^{p}} + \cdots + \frac{1}{(2n-1)^p} + \frac{1}{(2n)^{p}} + \cdots$ 收敛，故原级数绝对收敛。

当 $p \leq 1$ 时，
$$
1 - \frac{1}{2^{2p}} + \frac{1}{3^p} - \frac{1}{4^{2p}} + \cdots + \frac{1}{(2n-1)^p} - \frac{1}{(2n)^{2p}} + \cdots \\ = 1 - \frac{1}{2^{p}} + \frac{1}{2^p} - \frac{1}{2^{2p}} + \frac{1}{3^p} - \frac{1}{4^{p}} + \frac{1}{4^p} - \frac{1}{4^{2p}}  + \cdots + \frac{1}{(2n-1)^p} - \frac{1}{(2n)^{p}} + \frac{1}{(2n)^{p}}- \frac{1}{(2n)^{2p}} + \cdots
$$
拆分成两个级数：
$$
1 - \frac{1}{2^{2p}} + \frac{1}{3^p} - \frac{1}{4^{2p}} + \cdots + \frac{1}{(2n-1)^p} - \frac{1}{(2n)^{2p}} + \cdots \\ = 
1 - \frac{1}{2^{p}} + \frac{1}{3^p} - \frac{1}{4^{p}} + \cdots + \frac{1}{(2n-1)^p} - \frac{1}{(2n)^{p}} + \cdots + \sum_{n} \frac{1}{(2n)^{p}} - \frac{1}{(2n)^{2p}} 
$$
由 Leibniz Test，第一部分的绝对值单调递减且趋于零，所以收敛。故原级数的收敛性等价于第二部分收敛性。

利用比较定理的极限形式，构造 $b_{n} = \frac{1}{(2n)^{p}}$，
$$
\lim_{n \to \infty} \frac{a_{n}}{b_{n}} = \lim_{n \to \infty} (1 - \frac{1}{(2n)^{p}}) = 1
$$
所以第二部分收敛性等于 $\sum \frac{1}{(2n)^{p}}$的收敛性。

所以当 $p \leq 1$时 $\sum \frac{1}{(2n)^{p}}$ 发散，故原级数发散。

(9) 级数 $\sum_{n=1}^{\infty} \frac{\sin n}{n^\alpha}$，其中 $\alpha > 0$。

作 Dirichlet Test：
$$
\frac{\sin n}{n^{\alpha}} = \frac{1}{n^{\alpha}} \cdot \sin n 
$$
其中 $\frac{1}{n^{\alpha}}$ 递减且趋于零，
$$
\sum_{k=1}^{n} \sin k = \frac{\cos \frac{1}{2} - \cos (n+ \frac{1}{2})}{2 \sin (\frac{1}{2})}
$$
有界，所以原级数收敛。

#### 2. 证明如下的 Cauchy condensation test.

设 $f: [1, +\infty) \to \mathbb{R}_{\geq 0}$ 是取值为非负实数的不增函数，则级数 $\sum_{n=1}^{\infty} f(n)$ 收敛当且仅当级数 $\sum_{n=1}^{\infty} 2^n f(2^n)$ 收敛。

证明：因为$f: [1, +\infty) \to \mathbb{R}_{\geq 0}$ 是取值为非负实数的不增函数
$$
\sum_{n=1}^{\infty} f(n) = f(1) + f(2) + f(3) + \cdots \leq \sum_{n=0}^{\infty} 2^{n} f(2^{n})
$$

$$
\sum_{n=1}^{\infty} f(n) \geq \sum_{n=1}^{\infty} 2^{n-1} f(2^{n})
$$

充分性：因为$\sum_{n=1}^{\infty} 2^n f(2^n)$ 收敛，由比较定理，正项级数$\sum_{n=1}^{\infty} f(n)$ 收敛。

必要性：因为 $\sum_{n=1}^{\infty} f(n)$ 收敛，由比较定理，$\sum_{n=1}^{\infty} 2^{n-1} f(2^{n})$ 收敛。所以 $\sum_{n=1}^{\infty} 2^n f(2^n) = 2 \sum_{n=1}^{\infty} 2^{n-1} f(2^{n})$ 收敛。 

#### 3. 设 $\sum_{n=1}^{\infty} a_n$ 是正项级数，满足 $\lim_{n \to \infty} a_n = 0$。证明：级数 $\sum_{n=1}^{\infty} \ln(1 + a_n)$ 收敛当且仅当级数 $\sum_{n=1}^{\infty} a_n$ 收敛。

证明：

证法1: 显然级数 $\sum_{n=1}^{\infty} \ln(1 + a_n)$ 为正项级数。

充分性：利用不等式 $\ln (1 + a_{n}) \leq a_{n}$ ，

因为级数 $\sum_{n=1}^{\infty} a_n$ 收敛，由比较定理，正项级数 $\sum_{n=1}^{\infty} \ln(1 + a_n)$ 收敛。

必要性：
$$
\sum_{k=1}^{n} \ln(1 + a_k) = \ln \prod_{k=1}^{n}(1 + a_{k})
$$

$$
\lim_{n \to \infty} \sum_{k=1}^{n} \ln (1 + a_{n}) = A
$$

利用 $\ln$ 函数的连续性：
$$
\lim_{n \to \infty} \prod_{k=1}^{n}(1 + a_{k}) = e^{A}
$$

$$
\prod_{k=1}^{n}(1 + a_{k}) \geq 1 + \sum_{k=1}^{n} a_{k}
$$



所以由比较定理，正项级数 $\sum_{k=1}^{n} a_{k}$ 收敛。

证法2: 利用比较定理的极限形式：
$$
\lim_{n \to \infty} \frac{\ln (1 + a_{n})}{a_{n}} = \lim_{x \to 0} \frac{\ln (1+x)}{x} =\lim_{x \to 0} \frac{\frac{1}{1+x}}{1} = 1
$$
所以二者有相同的收敛发散性质。