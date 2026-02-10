# 数学物理方程 第8次作业

Chasse_neige

1.试求

(a) $\mathrm{P}_{2 n}(0)$, $\mathrm{P}_{2 n+1}^{\prime}(0)$
$$
P_{n} (x) = \frac{1}{2^{n} n!} \frac{\mathrm{d}^{n}}{\mathrm{d} x^{n}} (x^{2} - 1)^{n} \\ =
\frac{1}{2^{n} n!} \frac{\mathrm{d}^{n}}{\mathrm{d} x^{n}} \sum_{m = 0}^{n} \frac{(-1)^{m} n!}{m! (n - m)!} x^{2(n - m)} \\ =
\frac{1}{2^{n} n!} \sum_{m = 0}^{[\frac{n}{2}]} \frac{(-1)^{m} n!}{m! (n - m)!} \frac{(2n - 2m)!}{(n - 2m)!} x^{n - 2m}
$$

$$
P_{n}' (x) = \frac{1}{2^{n} n!} \sum_{m = 0}^{[\frac{n - 1}{2}]} \frac{(-1)^{m} n!}{m! (n - m)!} \frac{(2n - 2m)!}{(n - 2m - 1)!} x^{n - 2m - 1}
$$

$$
P_{n}'' (x) = \frac{1}{2^{n} n!} \sum_{m = 0}^{[\frac{n}{2}] - 1} \frac{(-1)^{m} n!}{m! (n - m)!} \frac{(2n - 2m)!}{(n - 2m - 2)!} x^{n - 2m - 2}
$$

 

所以
$$
P_{2n} (0) = \frac{1}{2^{2n} (2n)!} \frac{(-1)^{n} (2n)!}{(n!)^{2}} (2n)! = \frac{(-1)^{n} (2n)!}{2^{2n} (n!)^{2}}
$$

$$
P_{2n + 1}' (0) = \frac{1}{2^{2n + 1} (2n + 1)!} \frac{(-1)^{n} (2n + 1)!}{n! (n + 1)!} (2n + 2)! = \frac{(-1)^{n} (2n + 1)!}{2^{2n} (n!)^{2}}
$$

(b) $\mathrm{P}_{n}^{\prime}(\pm 1)$, $\mathrm{P}_{n}^{\prime \prime}(\pm 1)$

利用生成函数
$$
\frac{1}{\sqrt{1 - 2xt + t^{2}}} = \sum_{l = 0}^{\infty} P_{l} (x) t^{l}
$$
带入 $x = 1$ ，得到
$$
\sum_{l = 0}^{\infty} P_{l} (1) t^{l} = \frac{1}{\sqrt{1 -2t + t^{2}}} = \frac{1}{1 - t} = \sum_{l = 0}^{\infty} t^{l}
$$
比较两侧系数，得到
$$
P_{l} (1) = 1
$$
带入 $x = -1$ ，得到
$$
\sum_{l = 0}^{\infty} P_{l} (-1) t^{l} = \frac{1}{1 + t} = \sum_{l = 0}^{\infty} (-1)^{l} t^{l}
$$
比较系数，得到
$$
P_{l} (-1) = (-1)^{l}
$$
两侧同时对 $x$ 偏导并且带入 $x = \pm 1$
$$
\frac{t}{(1 - 2xt + t^{2})^{\frac{3}{2}}} = \sum_{l = 0}^{\infty} P'_{l} (x) t^{l}
$$

$$
\frac{t}{(1 \mp 2t + t^{2})^{\frac{3}{2}}} = \sum_{l = 0}^{\infty} P'_{l} (\pm 1) t^{l}
$$

$$
\frac{t}{(1 \mp t)^{3}} = \sum_{l = 0}^{\infty} P'_{l} (\pm 1) t^{l} = \sum_{l = 2}^{\infty} t \left(1 \pm 3t + (-1)^{l} \frac{(l + 1) (l + 2)}{2} (\mp t)^{l}\right)
$$

对比系数，得到
$$
P'_{0} (\pm 1) = 0 \\
P'_{1} (\pm 1) = 1 \\
P'_{2} (\pm 1) = \pm 3 \\
P'_{l} (\pm 1) = (\pm 1)^{l + 1} \frac{l (l + 1)}{2}
$$
对于 $2$ 阶导，在两边继续对 $x$ 偏导得到
$$
\frac{3 t^{2}}{(1 - 2xt + t^{2})^{\frac{5}{2}}} = \sum_{l = 0}^{\infty} P''_{l} (x) t^{l}
$$

$$
\frac{3 t^{2}}{(1 \mp t)^{5}} = \sum_{l = 0}^{\infty} P''_{l} (\pm 1) t^{l} \\
= \sum_{l = 4}^{\infty} 3t^{2} \left(1 \pm 5t  + 15 (\mp t)^{2} + 35 (\pm t)^{3}  + (-1)^{l} \frac{(l + 1)(l + 2) (l + 3) (l + 4)}{24} (\mp t)^{l} \right)
$$

对比两边系数，得到
$$
P''_{0} (\pm 1) = P''_{1} (\pm 1) = 0 \\
P''_{2} (\pm 1) = 3 \\
P''_{3} (\pm 1) = \pm 15 \\
P''_{4} (\pm 1) = 45 \\
P''_{l} (\pm 1) = (\pm 1)^{l} \frac{(l - 1) l (l + 1) (l + 2)}{8}
$$


2.证明
$$
\int_{x}^{1} \mathrm{P}_{k}(x) \mathrm{P}_{l}(x) \mathrm{d} x = \frac{(1 - x^{2}) \left[ \mathrm{P}_{k}^{\prime}(x) \mathrm{P}_{l}(x) - \mathrm{P}_{l}^{\prime}(x) \mathrm{P}_{k}(x) \right]}{k(k + 1) - l(l + 1)}, \quad k \neq l
$$

勒让德多项式 $\mathrm{P}_{k}(x)$ 和 $\mathrm{P}_{l}(x)$ 满足勒让德微分方程
$$
(1 - x^2) \mathrm{P}_{k}''(x) - 2x \mathrm{P}_{k}'(x) + k(k+1) \mathrm{P}_{k}(x) = 0
$$

$$
(1 - x^2) \mathrm{P}_{l}''(x) - 2x \mathrm{P}_{l}'(x) + l(l+1) \mathrm{P}_{l}(x) = 0
$$

令 $u = \mathrm{P}_{k}(x)$, $v = \mathrm{P}_{l}(x)$。考虑表达式
$$
\frac{d}{dx} \left[ (1 - x^2) (u' v - u v') \right]
$$

计算导数
$$
\frac{d}{dx} \left[ (1 - x^2) (u' v - u v') \right] = (1 - x^2) \frac{d}{dx}(u' v - u v') + (-2x)(u' v - u v')
$$
其中
$$
\frac{d}{dx}(u' v - u v') = u'' v + u' v' - u' v' - u v'' = u'' v - u v''
$$
所以
$$
\frac{d}{dx} \left[ (1 - x^2) (u' v - u v') \right] = (1 - x^2)(u'' v - u v'') - 2x (u' v - u v')
$$

从微分方程代入 $u''$ 和 $v''$
$$
(1 - x^2) u'' = 2x u' - k(k+1) u, \quad (1 - x^2) v'' = 2x v' - l(l+1) v
$$
所以
$$
(1 - x^2)(u'' v - u v'') = [2x u' - k(k+1) u] v - u [2x v' - l(l+1) v] = 2x (u' v - u v') - [k(k+1) - l(l+1)] u v
$$
因此
$$
\frac{d}{dx} \left[ (1 - x^2) (u' v - u v') \right]  = 2x (u' v - u v') - [k(k+1) - l(l+1)] u v - 2x (u' v - u v') \\ = - [k(k+1) - l(l+1)] u v
$$
即：
$$
\frac{d}{dx} \left[ (1 - x^2) (\mathrm{P}_{k}'(x) \mathrm{P}_{l}(x) - \mathrm{P}_{l}'(x) \mathrm{P}_{k}(x)) \right] = - [k(k+1) - l(l+1)] \mathrm{P}_{k}(x) \mathrm{P}_{l}(x)
$$

积分从 $x$ 到 $1$
$$
\int_{x}^{1} \mathrm{P}_{k}(t) \mathrm{P}_{l}(t) \, dt = - \frac{1}{k(k+1) - l(l+1)} \int_{x}^{1} \frac{d}{dt} \left[ (1 - t^2) (\mathrm{P}_{k}'(t) \mathrm{P}_{l}(t) - \mathrm{P}_{l}'(t) \mathrm{P}_{k}(t)) \right] dt
$$

$$
\int_{x}^{1} \frac{d}{dt} [\cdots] \, dt = \left[ (1 - t^2) (\mathrm{P}_{k}'(t) \mathrm{P}_{l}(t) - \mathrm{P}_{l}'(t) \mathrm{P}_{k}(t)) \right]_{t=x}^{t=1}
$$

在 $t=1$ 时，$1 - t^2 = 0$，所以该项为零。在 $t=x$ 时，值为 $-(1 - x^2) (\mathrm{P}_{k}'(x) \mathrm{P}_{l}(x) - \mathrm{P}_{l}'(x) \mathrm{P}_{k}(x))$。因此
$$
\int_{x}^{1} \mathrm{P}_{k}(t) \mathrm{P}_{l}(t) \, dt = - \frac{1}{k(k+1) - l(l+1)} \left[ 0 - (1 - x^2) (\mathrm{P}_{k}'(x) \mathrm{P}_{l}(x) - \mathrm{P}_{l}'(x) \mathrm{P}_{k}(x)) \right]
$$

$$
= \frac{(1 - x^{2}) \left[ \mathrm{P}_{k}^{\prime}(x) \mathrm{P}_{l}(x) - \mathrm{P}_{l}^{\prime}(x) \mathrm{P}_{k}(x) \right]}{k(k + 1) - l(l + 1)}
$$

4.计算下列积分

(a) 
$$
\int_{-1}^{1} \left( 1 - x^{2} \right) \frac{\mathrm{d} P_{k}(x)}{\mathrm{d} x} \frac{\mathrm{d} P_{l}(x)}{\mathrm{d} x} \, \mathrm{d} x
$$

勒让德微分方程为
$$
\frac{d}{dx} \left( (1 - x^2) \frac{dP_n}{dx} \right) + n(n+1) P_n = 0
$$
令 $L = \frac{d}{dx} \left( (1 - x^2) \frac{d}{dx} \right)$，则 $L P_n = -n(n+1) P_n$

对于 $u = P_k(x)$, $v = P_l(x)$，有
$$
\int_{-1}^{1} u L v \, dx = \int_{-1}^{1} u \frac{d}{dx} \left( (1 - x^2) \frac{dv}{dx} \right) dx
$$
分部积分：
$$
= \left[ u (1 - x^2) \frac{dv}{dx} \right]_{-1}^{1} - \int_{-1}^{1} \frac{du}{dx} (1 - x^2) \frac{dv}{dx} dx
$$
在 $x = \pm 1$ 时，$1 - x^2 = 0$，边界项为零，所以
$$
\int_{-1}^{1} u L v \, dx = - \int_{-1}^{1} (1 - x^2) \frac{du}{dx} \frac{dv}{dx} dx
$$
代入 $L v = -l(l+1) v$
$$
- \int_{-1}^{1} (1 - x^2) \frac{du}{dx} \frac{dv}{dx} dx = -l(l+1) \int_{-1}^{1} u v \, dx
$$
利用正交性 $\int_{-1}^{1} P_k P_l \, dx = \frac{2}{2l+1} \delta_{kl}$
$$
\int_{-1}^{1} (1 - x^2) P_k' P_l' \, dx = l(l+1) \frac{2}{2l+1} \delta_{kl} = \frac{2 l(l+1)}{2l+1} \delta_{kl}
$$
由于 $\delta_{kl}$，可写为
$$
\int_{-1}^{1} (1 - x^{2}) \frac{\mathrm{d} P_{k}(x)}{\mathrm{d} x} \frac{\mathrm{d} P_{l}(x)}{\mathrm{d} x}  \mathrm{d} x = \frac{2 k(k+1)}{2k+1} \delta_{kl}
$$

(b) 
$$
\int_{-1}^{1} \frac{\mathrm{d} P_{k}(x)}{\mathrm{d} x} \frac{\mathrm{d} P_{l}(x)}{\mathrm{d} x} \, \mathrm{d} x
$$

不失一般性，假设 $k < l$ 
$$
\int_{-1}^{1} \dv{P_{k} (x)}{x} \dv{P_{l} (x)}{x} \, \dd{x} = \left. P_{l} (x) \dv{P_{k} (x)}{x} \right|_{-1}^{1} - \int_{-1}^{1} P_{l} (x) P''_{k} (x) \, \dd{x}
$$
由于
$$
P_{k}'' (x) = \frac{1}{2^{k} k!} \sum_{m = 0}^{[\frac{k}{2}] - 1} \frac{(-1)^{m} k!}{m! (k - m)!} \frac{(2k - 2m)!}{(k - 2m - 2)!} x^{k - 2m - 2}
$$
 利用Legendre多项式和低次项的正交性
$$
\int_{-1}^{1} x^{k} P_{l} (x) \, \dd{x} = 0 \quad (k < l)
$$
所以后一项为 $0$，得到
$$
\int_{-1}^{1} \dv{P_{k} (x)}{x} \dv{P_{l} (x)}{x} \, \dd{x} = \left. P_{l} (x) \dv{P_{k} (x)}{x} \right|_{-1}^{1} = P_{l} (1) P_{k}' (1) - P_{l} (-1) P_{k}' (-1) \\ =
\frac{k (k + 1)}{2} (1+ (-1)^{l + k})
$$
5.计算下列积分

(a) 

$$
\int_{-1}^{1} (1 + x)^{k} \mathrm{P}_{l}(x)  \mathrm{d} x
$$

- 如果 $k < l$，则由于 $P_l(x)$ 与所有次数小于 $l$ 的多项式正交，而 $(1+x)^k$ 是次数为 $k$ 的多项式，积分值为 $0$。
- 如果 $k \geq l$，则经过非常复杂的分部积分运算，可以得到（大体过程就是先把 Legendre 多项式中的 $l$ 阶导全部转移到另一边，然后再对得到的 $(x + 1)^{k} (x - 1)^{l}$ 项利用 Beta 积分得出结果）

$$
\int_{-1}^{1} (1 + x)^{k} \mathrm{P}_{l}(x)  \mathrm{d} x = \frac{2^{k+1} (k!)^2}{(k+l+1)! (k-l)!}
$$

(b)

$$
\int_{0}^{1} \mathrm{P}_{k}(x) \mathrm{P}_{l}(x)  \mathrm{d} x
$$

- 如果 $k$ 和 $l$ 同奇偶性，则 $\int_{0}^{1} P_k P_l \, dx = \frac{1}{2} \int_{-1}^{1} P_k P_l \, dx = \frac{1}{2} \cdot \frac{2}{2l+1} \delta_{kl} = \frac{1}{2l+1} \delta_{kl}$，即当 $k \neq l$ 时积分值为 $0$
- 如果 $k$ 和 $l$ 奇偶性不同，则利用 Legendre 方程的结论计算 (不失一般性，假设 $k = 2k', l = 2l' + 1$)

$$
\int_{0}^{1} \mathrm{P}_{k}(x) \mathrm{P}_{l}(x)  \mathrm{d} x = \frac{1}{l (l + 1) - k(k + 1)} \left. (1 - x^{2}) (P'_{k} (x) P_{l} (x) - P'_{l} (x) P_{k} (x)) \right|_{0}^{1} \\ =
\frac{P'_{l} (0) P_{k} (0) - P'_{k} (0) P_{l} (0)}{l (l + 1) - k(k + 1)} = \frac{1}{(2l' + 1) (2l' + 2) - 2k' (2k' + 1)} \left(\frac{(-1)^{l'} (2l' + 1)!}{2^{2l'} (l'!)^{2}} \frac{(-1)^{k'} (2k')!}{2^{2k'} (k'!)^{2}}\right) \\ =
\frac{(-1)^{l' + k'}}{(2l' + 1) (2l' + 2) - 2k' (2k' + 1)} \frac{(2l' + 1)! (2k')!}{2^{2 (l' + k') } (l'!)^{2} (k'!)^{2}}
$$

 (c) 
$$
\int_{-1}^{1} \mathrm{P}_{l}(x) \ln (1 - x) \, \mathrm{d} x
$$
当 $l = 0$ 时，
$$
\int_{-1}^{1} \mathrm{P}_{0}(x) \ln (1 - x) \, \mathrm{d} x = 2 \ln 2 - 2
$$
当$l \neq 0$ 时，直接利用和 (a) 类似的思路，分部积分得到
$$
\int_{-1}^{1} \mathrm{P}_{l}(x) \ln (1 - x) \, \mathrm{d} x \\ =
- \frac{(l - 1)!}{2^{l} l!} \int_{-1}^{1} (1 + x)^{l} \, \dd{x} = - \frac{2}{l (l + 1)}
$$
(d) 
$$
\int_{-1}^{1} \mathrm{P}_{l}(x) (1 - x)^{\alpha}  \mathrm{d} x, \quad -1 < \alpha < 0
$$

先进行分部积分，得到
$$
\int_{-1}^{1} \mathrm{P}_{l}(x) (1 - x)^{\alpha}  \mathrm{d} x = \frac{(-1)^{l}}{2^{l} l!} \frac{\Gamma(\alpha + 1)}{\Gamma (\alpha - l + 1)} \int_{-1}^{1} (1 -  x)^{\alpha} (1 + x)^{l} \, \dd{x}
$$
这正好是 Beta 积分的形式，得到
$$
\int_{-1}^{1} P_l(x) (1-x)^\alpha \, dx = (-1)^{l} \frac{2^{\alpha+1} \Gamma(\alpha+1) \Gamma(\alpha+1)}{\Gamma(\alpha+l+2) \Gamma(\alpha-l+1)}
$$
(e)

$$
\int_{-1}^{1} x^{2} \mathrm{P}_{l}(x) \mathrm{P}_{l+2}(x)  \mathrm{d} x
$$

利用递推关系 $x P_l(x) = \frac{l+1}{2l+1} P_{l+1}(x) + \frac{l}{2l+1} P_{l-1}(x)$ 及正交性。计算得
$$
\int_{-1}^{1} x^2 P_l P_{l+2} \, dx = \frac{2 (l+1)(l+2)}{(2l+1)(2l+3)(2l+5)}
$$
(f) 

$$
\int_{-1}^{1} [x \mathrm{P}_{l}(x)]^{2}  \mathrm{d} x
$$

利用 $x P_l(x) = \frac{l+1}{2l+1} P_{l+1}(x) + \frac{l}{2l+1} P_{l-1}(x)$，及正交性
$$
\int_{-1}^{1} [x P_l(x)]^2 \, dx = \left( \frac{l+1}{2l+1} \right)^2 \frac{2}{2l+3} + \left( \frac{l}{2l+1} \right)^2 \frac{2}{2l-1}
$$
简化得
$$
\int_{-1}^{1} [x P_l(x)]^2 \, dx = \frac{2 (2l^{2} + 2l - 1)}{(2l-1)(2l+3)(2l + 1)}
$$

6.把下列函数按照勒让德多项式展开

(a) $f(x) = x^{2}$

利用 $P_2(x) = \frac{3x^2-1}{2}$，解得 $x^2 = \frac{2}{3} P_2(x) + \frac{1}{3} P_0(x)$，所以：
$$
x^2 = \frac{1}{3} P_0(x) + \frac{2}{3} P_2(x)
$$

(b) $f(x) = |x|$

$|x|$ 为偶函数，展开仅含偶次项
$$
|x| = \sum_{n=0}^{\infty} a_{2n} P_{2n} (x), \quad a_{2n} = \frac{4n+1}{2} \int_{-1}^{1} |x| P_{2n}(x) \, dx
$$

$$
\frac{2}{4n + 1} a_{2n} = - \int_{-1}^{0} P_{1} (x) P_{2n} (x) \, \dd{x} + \int_{0}^{1} P_{1} (x) P_{2n} (x) \, \dd{x} \\ = 2 \int_{0}^{1} P_{1} (x) P_{2n} (x) \, \dd{x}
$$

直接带入上一题中的结果
$$
\int_{0}^{1} P_{1} (x) P_{2n} (x) \, \dd{x} = \frac{(-1)^{n + 1} (2n)!}{2^{2n + 1} n! (n + 1)! (2n - 1)}
$$
得到
$$
a_{2n} = \frac{(-1)^{n + 1} (2n)!}{2^{2n + 1} n! (n + 1)!} \frac{4n + 1}{2n - 1}
$$
(d) $f(x) = \sqrt{1 - 2 x t + t^{2}}$

假设 $f(x) = \sum_{n} a_{n} P_{n} (x)$

利用生成函数的表达式
$$
\sqrt{1 - 2 x t + t^{2}} = (1 - 2xt + t^{2}) \sum_{l = 0}^{\infty} P_{l} (x) t^{l} \\ =
\sum_{l} (1 + t^{2}) t^{l} P_{l} (x) - \sum_{l} 2 t^{l + 1} \left( \frac{l + 1}{2l + 1} P_{l + 1} (x) + \frac{l}{2l + 1} P_{l - 1} (x)\right)
$$
整理得到
$$
a_{0} = (1 + t^{2}) - \frac{2}{3} t^{2} = 1 + \frac{1}{3} t^{2}
$$

$$
a_{n} = (1 + t^{2}) t^{n} - 2 t^{n} \frac{n}{2n - 1} - 2 t^{n + 2} \frac{n + 1}{2n + 3} \\ =
- \frac{1}{2n - 1} t^{n} + \frac{1}{2n + 3} t^{n + 2}
$$

8.利用勒让德多项式的生成函数证明

(a) 
$$
\mathrm{P}_{l} \left( -\frac{1}{2} \right) = \sum_{k=0}^{2 l} \mathrm{P}_{k} \left( -\frac{1}{2} \right) \mathrm{P}_{2 l - k} \left( \frac{1}{2} \right)
$$

证明：
生成函数在 $x = -\frac{1}{2}$ 和 $x = \frac{1}{2}$ 处
$$
\frac{1}{\sqrt{1 + t + t^2}} = \sum_{m} P_m\left(-\frac{1}{2}\right) t^m, \quad \frac{1}{\sqrt{1 - t + t^2}} = \sum_{n} P_n\left(\frac{1}{2}\right) t^n
$$
乘积
$$
\frac{1}{\sqrt{1 + t + t^2}} \cdot \frac{1}{\sqrt{1 - t + t^2}} = \frac{1}{\sqrt{1 + t^2 + t^4}} = \sum_{l} P_l\left(-\frac{1}{2}\right) t^{2l}
$$
右边乘积的展开
$$
\left( \sum_{m} P_m\left(-\frac{1}{2}\right) t^m \right) \left( \sum_{n} P_n\left(\frac{1}{2}\right) t^n \right) = \sum_{s} \left( \sum_{k=0}^{s} P_k\left(-\frac{1}{2}\right) P_{s-k}\left(\frac{1}{2}\right) \right) t^s
$$
比较 $t^{2l}$ 的系数，得到
$$
\mathrm{P}_{l} \left( -\frac{1}{2} \right) = \sum_{k=0}^{2 l} \mathrm{P}_{k} \left( -\frac{1}{2} \right) \mathrm{P}_{2 l - k} \left( \frac{1}{2} \right)
$$
(b) 
$$
\mathrm{P}_{l} (\cos 2 \theta) = \sum_{k=0}^{2 l} (-1)^{k} \mathrm{P}_{k} (\cos \theta) \mathrm{P}_{2 l - k} (\cos \theta)
$$

证明：
生成函数在 $x = \cos 2\theta$ 处
$$
\frac{1}{\sqrt{1-2 \cos 2\theta t + t^2}} = \sum_{n} P_n(\cos 2\theta) t^n
$$
但 $\cos 2\theta = 2\cos^2 \theta -1$，所以
$$
1-2 \cos 2\theta t + t^2 = 1-2(2\cos^2 \theta -1)t + t^2 = 1 -4\cos^2 \theta t + 2t + t^2
$$
考虑生成函数在 $x = \cos \theta$ 与 $t$ 和 $-t$ 的乘积
$$
\frac{1}{\sqrt{1-2 \cos \theta t + t^2}} \cdot \frac{1}{\sqrt{1-2 \cos \theta (-t) + (-t)^2}} \\= \frac{1}{\sqrt{1-2 \cos \theta t + t^2}} \cdot \frac{1}{\sqrt{1+2 \cos \theta t + t^2}} = \frac{1}{\sqrt{1 - 2 \cos 2\theta t^2 + t^4}}
$$
右边
$$
\frac{1}{\sqrt{1 - 2 \cos 2\theta t^2 + t^4}} = \sum_{l} P_l(\cos 2\theta) t^{2l}
$$
左边乘积的展开
$$
\left( \sum_{m} P_m(\cos \theta) t^m \right) \left( \sum_{n} P_n(\cos \theta) (-t)^n \right) = \sum_{s} \left( \sum_{k=0}^{s} P_k(\cos \theta) P_{s-k}(\cos \theta) (-1)^{s-k} \right) t^s
$$
对于 $s=2l$，系数为 $\sum_{k=0}^{2l} P_k(\cos \theta) P_{2l-k}(\cos \theta) (-1)^{2l-k} = \sum_{k=0}^{2l} (-1)^k P_k(\cos \theta) P_{2l-k}(\cos \theta)$，与左边 $t^{2l}$ 的系数 $P_l(\cos 2\theta)$ 相等，即
$$
\mathrm{P}_{l} (\cos 2 \theta) = \sum_{k=0}^{2 l} (-1)^{k} \mathrm{P}_{k} (\cos \theta) \mathrm{P}_{2 l - k} (\cos \theta)
$$
