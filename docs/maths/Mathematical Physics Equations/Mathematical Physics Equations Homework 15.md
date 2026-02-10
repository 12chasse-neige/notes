# 数学物理方程 第15次作业

Chasse_neige

1.试求一维问题的格林函数
$$
\left\{\begin{array}{l} \frac{\mathrm{d}^{2} G\left(x ; x^{\prime}\right)}{\mathrm{d} x^{2}}+\omega_{0}^{2} G\left(x ; x^{\prime}\right)=\delta\left(x-x^{\prime}\right), \quad 0<x, x^{\prime}<l \\ G\left(0 ; x^{\prime}\right)=0, \quad G\left(l ; x^{\prime}\right)=0 \end{array}\right.
$$

并利用格林函数求解定解问题

$$
\left\{\begin{array}{l} y^{\prime \prime}(x)+\omega_{0}^{2} y(x)=f(x), \quad 0<x<l \\ y(0)=a, \quad y(l)=b \end{array}\right.
$$

求解格林函数

所求方程为
$$
\frac{\mathrm{d}^{2} G\left(x ; x^{\prime}\right)}{\mathrm{d} x^{2}}+\omega_{0}^{2} G\left(x ; x^{\prime}\right)=\delta\left(x-x^{\prime}\right), \quad 0<x, x^{\prime}<l
$$
当 $x \neq x'$ 时，方程为齐次方程 $G'' + \omega_0^2 G = 0$，其通解形式为 $C_1 \sin(\omega_0 x) + C_2 \cos(\omega_0 x)$。

(1) 在区间 $0 < x < x'$ 上，满足 $G(0)=0$ 的解的形式为：
$$
G_1(x) = A \sin(\omega_0 x)
$$
(2) 在区间 $x' < x < l$ 上，满足 $G(l)=0$ 的解的形式为
$$
G_2(x) = B \sin(\omega_0(l-x))
$$
(3) 在 $x=x'$ 处，$G$ 必须连续
$$
A \sin(\omega_0 x') = B \sin(\omega_0(l-x'))
$$
由此得出 $B$ 与 $A$ 的关系
$$
B = A \frac{\sin(\omega_0 x')}{\sin(\omega_0(l-x'))}
$$
(4) 在 $x=x'$ 处，$G$ 的一阶导数有跃变，跃变度为 1
$$
\left. \frac{dG_2}{dx} \right|_{x=x'} - \left. \frac{dG_1}{dx} \right|_{x=x'} = 1
$$
计算导数并代入
$$
-B\omega_0 \cos(\omega_0(l-x')) - A\omega_0 \cos(\omega_0 x') = 1
$$
将 $B$ 的表达式代入上式
$$
-A \frac{\sin(\omega_0 x')}{\sin(\omega_0(l-x'))} \omega_0 \cos(\omega_0(l-x')) - A\omega_0 \cos(\omega_0 x') = 1
$$
提取公因式 $-A\omega_0 / \sin(\omega_0(l-x'))$ 并整理括号内的项
$$
-A \omega_0 \frac{\sin(\omega_0 x') \cos(\omega_0(l-x')) + \cos(\omega_0 x') \sin(\omega_0(l-x'))}{\sin(\omega_0(l-x'))} = 1
$$
利用三角恒等式 $\sin(\alpha+\beta)$，分子化简为 $\sin(\omega_0 l)$
$$
-A \omega_0 \frac{\sin(\omega_0 l)}{\sin(\omega_0(l-x'))} = 1
$$
解得系数 $A$
$$
A = -\frac{\sin(\omega_0(l-x'))}{\omega_0 \sin(\omega_0 l)}
$$
代回可求得 $B$
$$
B = -\frac{\sin(\omega_0 x')}{\omega_0 \sin(\omega_0 l)}
$$
综上，格林函数可以写为统一形式，令 $x_< = \min(x, x'), x_> = \max(x, x')$
$$
G(x ; x^{\prime}) = -\frac{\sin(\omega_0 x_<) \sin(\omega_0(l-x_>))}{\omega_0 \sin(\omega_0 l)}
$$

利用格林函数求解定解问题

定解问题为
$$
y^{\prime \prime}(x)+\omega_{0}^{2} y(x)=f(x), \quad y(0)=a, \quad y(l)=b
$$
利用格林公式，即 Lagrange 恒等式在区间上的积分
$$
\int_0^l [G(x;x') L_{x'} y(x') - y(x') L_{x'} G(x;x')] \mathrm{d}x' = \left[ G(x;x') \frac{\mathrm{d}y(x')}{\mathrm{d}x'} - y(x') \frac{\partial G(x;x')}{\partial x'} \right]_{x'=0}^{x'=l}
$$
其中算子 $L = \frac{d^2}{dx^2} + \omega_0^2$。代入方程 $L y = f$ 和 $L G = \delta(x-x')$
$$
\int_0^l [G(x;x') f(x') - y(x') \delta(x'-x)] \mathrm{d}x' = \left[ G(x;x') y'(x') - y(x') \frac{\partial G}{\partial x'} \right]_0^l
$$
利用 $\delta$ 函数的筛选性质，以及 $G$ 在边界为零的条件 $G(x;0)=G(x;l)=0$，并代入 $y$ 的边界值
$$
\int_0^l G(x;x') f(x') \mathrm{d}x' - y(x) = - y(l) \frac{\partial G(x;x')}{\partial x'}\Bigg|_{x'=l} + y(0) \frac{\partial G(x;x')}{\partial x'}\Bigg|_{x'=0}
$$
移项整理得到解的表达式
$$
y(x) = \int_0^l G(x;x') f(x') \mathrm{d}x' + b \frac{\partial G(x;x')}{\partial x'}\Bigg|_{x'=l} - a \frac{\partial G(x;x')}{\partial x'}\Bigg|_{x'=0}
$$
计算边界上的法向导数
当 $x' \to l$ 时，使用 $x < x'$ 的分支
$$
\frac{\partial G}{\partial x'}\Bigg|_{x'=l} = \frac{\partial}{\partial x'} \left( -\frac{\sin(\omega_0 x) \sin(\omega_0(l-x'))}{\omega_0 \sin(\omega_0 l)} \right) \Bigg|_{x'=l} = \frac{\sin(\omega_0 x)}{\sin(\omega_0 l)}
$$
当 $x' \to 0$ 时，使用 $x > x'$ 的分支
$$
\frac{\partial G}{\partial x'}\Bigg|_{x'=0} = \frac{\partial}{\partial x'} \left( -\frac{\sin(\omega_0(l-x)) \sin(\omega_0 x')}{\omega_0 \sin(\omega_0 l)} \right) \Bigg|_{x'=0} = -\frac{\sin(\omega_0(l-x))}{\sin(\omega_0 l)}
$$
最终解为
$$
y(x) = \int_{0}^{l} G\left(x ; x^{\prime}\right) f\left(x^{\prime}\right) \mathrm{d} x^{\prime} + b \frac{\sin \left(\omega_{0} x\right)}{\sin \left(\omega_{0} l\right)} + a \frac{\sin \left(\omega_{0}(l-x)\right)}{\sin \left(\omega_{0} l\right)}
$$

2.试求一维问题的格林函数
$$
\left\{\begin{array}{l} \frac{\mathrm{d} G\left(t' ; t\right)}{\mathrm{d} t}-\beta G\left(t' ; t \right)= - \delta\left(t-t^{\prime}\right), \quad t, t^{\prime}>0 \\ \left.G\left(t' ; t\right)\right|_{t>t^{\prime}}=0 \end{array}\right.
$$

并利用格林函数求解定解问题

$$
\left\{\begin{array}{l}y'(t)+\beta y(t)=g(t), \quad t>0 \\y(0)=a\end{array}\right.
$$

所求方程为
$$
\frac{\mathrm{d} G\left(t ; t^{\prime}\right)}{\mathrm{d} t}-\beta G\left(t ; t^{\prime}\right)=\delta\left(t-t^{\prime}\right), \quad t, t^{\prime}>0
$$
(1) 当 $t < t'$ 时，由条件知 $G=0$
(2) 当 $t > t'$ 时，方程变为齐次方程 $\dv{G}{t} - \beta G = 0$，解为 $G = C e^{\beta t}$
(3) 在 $t=t'$ 处积分原方程
$$
\int_{t'-\epsilon}^{t'+\epsilon} \left(\frac{dG}{dt} - \beta G\right) \mathrm{d}t = 1 \implies G(t'+;t') - G(t'-;t') = 1
$$
由于 $G(t'-)=0$，故 $G(t'+)=1$
由 $C e^{\beta t'} = 1$ 得 $C = e^{-\beta t'}$

所以格林函数为
$$
G(t ; t^{\prime}) = \theta(t'-t) e^{\beta(t-t^{\prime})} \\
\left. G (t; t') \right|_{t > t'} = 0
$$
其中 $\theta$ 为阶跃函数。利用格林函数求解定解问题
$$
\int_{0}^{\infty} y(t) \left(\dv{}{t} - \beta \right) G (t; t') + G (t; t') \left(\dv{}{t} + \beta \right) y(t) \, \dd{t} \\ = 
- y (t') + \int_{0}^{t'} e^{\beta (t - t')} g (t) \, \dd{t}
\\ =
\left. y (t) G(t; t') \right|_{0}^{\infty} = - a e^{- \beta t'}
$$
所以
$$
y (t) = a e^{- \beta t} + \int_{0}^{t} e^{\beta (\tau - t)} g(\tau ) \, \dd{\tau}
$$
3.求解矩形区域内的格林函数
$$
\left\{\begin{array}{l}\nabla^{2} G\left(x, y ; x^{\prime}, y^{\prime}\right)=-\delta\left(x-x^{\prime}\right) \delta\left(y-y^{\prime}\right) \\G\left|_{x=0} =0, \quad G |_{x=a}=0\right. \\G\left|_{y=0} =0, \quad G |_{y=b}=0\right.\end{array}\right.
$$

并用该格林函数形式上给出定解问题

$$
\left\{\begin{array}{l}\nabla^{2} u(x, y)=f(x, y) \\u\left|_{x=0} =\alpha(y), \quad u |_{x=a}=\beta(y)\right. \\u\left|_{y=0} =\mu(x), \quad u |_{y=b}=\nu(x)\right.\end{array}\right.
$$

所求方程为二维 Poisson 方程
$$
\nabla^{2} G\left(x, y ; x^{\prime}, y^{\prime}\right)=-\delta\left(x-x^{\prime}\right) \delta\left(y-y^{\prime}\right)
$$
边界条件为矩形边界上 $G=0$。采用本征函数展开法。
矩形区域 Dirichlet 问题的本征函数为
$$
\phi_{nm}(x,y) = \sin\left(\frac{n\pi x}{a}\right) \sin\left(\frac{m\pi y}{b}\right)
$$
对应的本征值 $k_{nm}^2 = (n\pi/a)^2 + (m\pi/b)^2$
将 $\delta$ 函数展开
$$
\delta(x-x')\delta(y-y') = \frac{4}{ab} \sum_{n=1}^\infty \sum_{m=1}^\infty \sin\left(\frac{n\pi x'}{a}\right) \sin\left(\frac{m\pi y'}{b}\right) \sin\left(\frac{n\pi x}{a}\right) \sin\left(\frac{m\pi y}{b}\right)
$$
设 $G = \sum C_{nm} \phi_{nm}$，代入方程得 $C_{nm} = \frac{4}{ab} \frac{\phi_{nm}(x',y')}{k_{nm}^2}$

格林函数为
$$
G\left(x, y ; x^{\prime}, y^{\prime}\right)=\frac{4}{a b} \sum_{n=1}^{\infty} \sum_{m=1}^{\infty} \frac{\sin \left(\frac{n \pi x}{a}\right) \sin \left(\frac{m \pi y}{b}\right) \sin \left(\frac{n \pi x^{\prime}}{a}\right) \sin \left(\frac{m \pi y^{\prime}}{b}\right)}{\left(\frac{n \pi}{a}\right)^{2}+\left(\frac{m \pi}{b}\right)^{2}}
$$

定解问题
$$
\nabla^{2} u(x, y)=f(x, y)
$$
边界条件：$u|_{x=0}=\alpha, u|_{x=a}=\beta, u|_{y=0}=\mu, u|_{y=b}=\nu$

利用格林第二公式
$$
\iint_D (u \nabla^2 G - G \nabla^2 u) \mathrm{d}x' \mathrm{d}y' = \oint_{\partial D} (u \frac{\partial G}{\partial n'} - G \frac{\partial u}{\partial n'}) \mathrm{d}l'
$$
代入方程性质及 $G$ 在边界为 0 的条件，并注意外法线方向 $\hat{n}'$
$$
-u(x,y) - \iint_D G f \mathrm{d}x' \mathrm{d}y' = \oint_{\partial D} u(x',y') \frac{\partial G}{\partial n'} \mathrm{d}l'
$$
解的形式为
$$
u(x,y) = -\iint_D G(x,y;x',y') f(x',y') \mathrm{d}x' \mathrm{d}y' - \oint_{\partial D} u(x',y') \frac{\partial G(x,y;x',y')}{\partial n'} \mathrm{d}l'
$$
具体写出边界积分项
$$
\begin{aligned}
u(x, y) = & -\int_{0}^{a} \int_{0}^{b} G f \mathrm{d} x^{\prime} \mathrm{d} y^{\prime} \\
& + \int_{0}^{b} \alpha\left(y^{\prime}\right) \left.\frac{\partial G}{\partial x^{\prime}}\right|_{x^{\prime}=0} \mathrm{d} y^{\prime} - \int_{0}^{b} \beta\left(y^{\prime}\right) \left.\frac{\partial G}{\partial x^{\prime}}\right|_{x^{\prime}=a} \mathrm{d} y^{\prime} \\
& + \int_{0}^{a} \mu\left(x^{\prime}\right) \left.\frac{\partial G}{\partial y^{\prime}}\right|_{y^{\prime}=0} \mathrm{d} x^{\prime} - \int_{0}^{a} \nu\left(x^{\prime}\right) \left.\frac{\partial G}{\partial y^{\prime}}\right|_{y^{\prime}=b} \mathrm{d} x^{\prime}
\end{aligned}
$$
