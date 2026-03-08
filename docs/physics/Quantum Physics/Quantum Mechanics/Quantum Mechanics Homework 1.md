# 量子力学 第1次作业

Chasse_neige

## 第一章 量子力学的历史渊源

1.1 给出温度为 $T$ 的空腔辐射中单位体积里的总光子数。提示: $\int_{0}^{\infty} \frac{x^{2} \mathrm{~d} x}{\mathrm{e}^{x}-1}=\sum_{n=1}^{\infty} \frac{2}{n^{3}}=2 \zeta(3) \approx 2.404$ (请证明)。

利用普朗克公式，得到光子数随频率分布为
$$
n (\nu ,T) \dd{\nu} = \frac{8 \pi \nu^{2}}{c^{3}} \frac{1}{e^{\frac{h \nu}{k_{B} T}} - 1} \dd{\nu}
$$
所以总光子数为
$$
N (T) = \int_{0}^{\infty} \dd{\nu} \frac{8 \pi \nu^{2}}{c^{3}} \frac{1}{e^{\frac{h \nu}{k_{B} T}} - 1} = \frac{8 \pi k_{B}^{3} T^{3}}{h^{3} c^{3}} \int_{0}^{\infty} \frac{x^{2} \dd{x}}{e^{x} - 1} = \frac{16 \pi k_{B}^{3} T^{3}}{h^{3} c^{3}} \zeta (3)
$$
证明上述zeta函数积分：
$$
\int_{0}^{\infty} \frac{x^{2} \dd{x}}{e^{x} - 1} = \int_{0}^{\infty} \sum_{n = 1}^{\infty} x^{2} e^{-nx} \dd{x} = \sum_{n = 1}^{\infty} \int_{0}^{\infty} x^{2} e^{-nx} \dd{x} = \sum_{n = 1}^{\infty} \frac{2}{n^{3}}
$$
1.2 一维无限深势阱是 $V(x)=\left\{\begin{array}{cc}0, & (-a<x<a), \\ +\infty, & (x<-a \text {或} x>a)\end{array}\right.$，根据 Sommerfeld 量子化条件，粒子在这样的势阱中的能级是什么? 提示: 粒子的经典运动是在两个端点之间来回地匀速地运动。

考虑粒子运动的一个周期
$$
x(t) = \begin{cases} -a + \frac{p}{m} t & (0 < t < \frac{2am}{p}) \\
a - \frac{p}{m} t & (\frac{2am}{p} < t < \frac{4am}{p})
\end{cases}
$$
根据Sommerfeld量子化条件
$$
\oint p \dd{q} = \int_{0}^{\frac{2am}{p}} \frac{p^{2}}{m} \dd{t} + \int_{\frac{2am}{p}}^{\frac{4am}{p}}  \frac{p^{2}}{m} \dd{t} = 4ap = n h
$$
所以得到
$$
p = \frac{n h}{4a}
$$
能级是
$$
E = \frac{p^{2}}{2m} = \frac{n^{2} h^{2}}{32 m a^{2}}
$$
1.3 de Broglie 波的相速度 $v_{p}$ 是多大? 群速度 $v_{g}$ 是多大? 它们与粒子的经典速度有什么关系? 提示: 波的 $\omega$ versus $k$ 称为波的色散关系，波的相速度和群速度分别定义为 $v_{p}=\omega / k, v_{g}=\mathrm{d} \omega / \mathrm{d} k$。

对于de Broglie波
$$
v_{p} = \frac{\omega}{k} = \frac{E}{p}
$$

$$
v_{g} = \dv{\omega}{k} = \dv{E}{k}
$$

带入经典粒子的非相对论性色散关系
$$
E = \frac{p^{2}}{2m}
$$
得到
$$
v_{p} = \frac{p}{2m} = \frac{v_{\text{Classical}}}{2}
$$

$$
v_{g} = \frac{p}{m} = v_{\text{Classical}}
$$

所以相速度是经典速度的一半，群速度等于经典速度。

## 第二章 波函数与薛定谔方程

2.1.1 把 $\psi(r, \theta, \varphi)=C \mathrm{e}^{-r^{2} / 2 a} r \sin \theta \mathrm{e}^{\mathrm{i} \varphi}$ 归一化，即求出 $C=$ ?
$$
C^{2} \int_{0}^{2 \pi} \dd{\phi} \int_{0}^{\pi} \sin^{3} \theta \, \dd{\theta} \int_{0}^{\infty} e^{- \frac{r^{2}}{a}} r^{4} \, \dd{r} = 2 \pi C^{2} \cdot \frac{4}{3} \cdot \frac{3\sqrt{\pi}}{8} a^{\frac{5}{2}} = \pi^{\frac{3}{2}} a^{\frac{5}{2}} C^{2} = 1
$$

得到归一化系数为
$$
C = a^{- \frac{5}{4}} \pi^{- \frac{3}{4}}
$$
2.1.2 (a) 把 $\psi(x)=C \mathrm{e}^{-\alpha^{2} x^{2} / 2}(-\infty<x<+\infty, \alpha>0)$ 归一化。
$$
C^{2} \int_{- \infty}^{\infty} e^{- \alpha^{2} x^{2}} \dd{x} = C^{2} \frac{\sqrt{\pi}}{\alpha} = 1
$$
得到归一化系数为
$$
C = \left(\frac{\alpha^{2}}{\pi}\right)^{\frac{1}{4}}
$$
(b) 求这个 $\psi(x)$ 所对应的动量空间中的波函数 $\phi(p)=$ ? 提示: $\int_{-\infty}^{+\infty} \mathrm{e}^{-u^{2}} \mathrm{~d} u=\sqrt{\pi}$；指数上配方。

对位置空间波函数进行傅立叶，得到动量空间波函数
$$
\phi(p) = \left(\frac{\alpha^{2}}{\pi}\right)^{\frac{1}{4}} \frac{1}{\sqrt{2 \pi \hbar}} \int_{- \infty}^{\infty} e^{- \frac{\alpha^{2} x^{2}}{2}} e^{- i \frac{p x}{\hbar}} \, \dd{x} = \frac{e^{- \frac{p^{2}}{2 \alpha^{2} \hbar^{2}}}}{\sqrt{\alpha \hbar} \pi^{\frac{1}{4}}}
$$
2.1.3 如果 $\psi(x)$ 是实函数而且 $\int_{-\infty}^{+\infty}[\psi(x)]^{2} \mathrm{~d} x$ 是收敛的积分，求 $\overline{p_{x}}=$ ? 
$$
\bar{p}_{x} = \int_{- \infty}^{\infty} \psi^{*} (x) (- i \hbar \pdv{}{x}) \psi(x) \, \dd{x} = - \frac{i \hbar}{2} \left. \psi^{2} (x)\right|_{- \infty}^{\infty} = 0
$$


2.1.4 (选做) 设 $\psi(x)=C\left\{\begin{array}{cc}0, & \text {for}|x|>a \\ a-|x|, & \text {for}|x|<a\end{array} \right.$ $C$ 是归一化常数， 见右图。

<img src="./Quantum Mechanics Homework 1.assets/image-20260305092907591.png" alt="image-20260305092907591" style="zoom:25%;" />

求 $\hat{T}=$ ? ($\hat{T}=\left(-\hbar^{2} / 2 m\right)\left(\mathrm{d}^{2} / \mathrm{d} x^{2}\right)$ 是动能算符)。

归一化

$$
\int_{-\infty}^{\infty} |\psi|^{2} dx = 2C^{2} \int_{0}^{a} (a - x)^{2} dx = 2C^{2} \cdot \frac{a^{3}}{3} = 1
$$

$$
C^{2} = \frac{3}{2a^{3}}
$$



动能期望值 $\langle T \rangle = \int \psi \hat{T} \psi dx$，分部积分可得
$$
\langle T \rangle = \frac{\hbar^{2}}{2m} \int_{-\infty}^{\infty} \psi'^{2} dx
$$

当 $x > 0$，$\psi(x) = C(a - x)$，$\psi'(x) = -C$

当 $x < 0$，$\psi(x) = C(a + x)$，$\psi'(x) = C$

所以

$$
\int_{-\infty}^{\infty} \psi'^{2} dx = 2a C^{2} = 2a \cdot \frac{3}{2a^{3}} = \frac{3}{a^{2}}
$$

故动能期望值为

$$
\langle T \rangle = \frac{\hbar^{2}}{2m} \cdot \frac{3}{a^{2}} = \frac{3\hbar^{2}}{2m a^{2}}
$$

2.2.1 求证: 一维自由粒子的 Schrödinger 方程在 Galileo 变换 $\left\{\begin{array}{l}x^{\prime}=x-V t \\ t^{\prime}=t\end{array}\right.$  下保持不变。提示: 波函数要同时变换才能使方程不变，请找出波函数的变换，并解释一下它的物理意义。

一维自由粒子薛定谔方程为

$$
i\hbar \frac{\partial \psi}{\partial t} = -\frac{\hbar^{2}}{2m} \frac{\partial^{2} \psi}{\partial x^{2}}
$$

Galileo 变换：$x' = x - Vt$，$t' = t$。要求在新坐标系下方程形式不变，即 $\psi'(x', t')$ 满足同样方程。设变换后的波函数为（这一步由无穷小变换的生成元直接得出）

$$
\psi'(x', t') = \exp\left[ -\frac{i}{\hbar} \left( m V x - \frac{m V^{2} t}{2} \right) \right] \psi(x, t)
$$

代入变换后的薛定谔方程
$$
i \hbar \pdv{}{t'} = i \hbar \left(\pdv{}{t} \pdv{t}{t'} + \pdv{}{x} \pdv{x}{t'}\right) = i \hbar \left(\pdv{}{t} + V \pdv{}{x} \right)
$$

$$
\pdv[2]{}{x'} = \pdv{}{x'} (\pdv{}{x} \pdv{x}{x'} + \pdv{}{t} \pdv{t}{x'}) = \pdv{}{x'} (\pdv{}{x} + 0) = \pdv[2]{}{x}
$$

所以变换后的薛定谔方程就是
$$
i \hbar \left(\pdv{}{t} + V \pdv{}{x} \right) \psi(x', t') = - \frac{\hbar^{2}}{2m} \pdv[2]{}{x} \psi (x', t')
$$
带入之前猜测的波函数，发现满足该方程。所以一维自由粒子的 Schrödinger 方程在 Galileo 变换下保持不变。

物理意义：相位因子体现了 Galileo 变换下动量和能量的变换，对应于 boost 的生成元。

2.2.2 我们从 Schrödinger 方程导出几率守恒的时候，势能函数是实函数即 $V^{*}=V$ 是必要条件。那么，如果势能函数是复函数即 $V=V_{\mathrm{re}}+i V_{\mathrm{im}}\left(V_{\mathrm{re}}\right.$ 和 $\left.V_{\mathrm{im}}\right.$ 是实函数)， $\frac{\partial \rho}{\partial t}$ 变成了什么样子? 当然，虚势能在经典物理的框架内是无法理解的，但是在量子力学的意义上它却描写了确定的物理现象。由上面的方程，你如何解释 $V_{\mathrm{im}}$ 的物理意义? 说明: 在核物理里，引入复的势能的理论称为“光学模型”。

设势能 $V = V_{\text{re}} + i V_{\text{im}}$，薛定谔方程及其共轭为

$$
i\hbar \frac{\partial \Psi}{\partial t} = \left( -\frac{\hbar^{2}}{2m} \nabla^{2} + V \right) \Psi, \quad -i\hbar \frac{\partial \Psi^*}{\partial t} = \left( -\frac{\hbar^{2}}{2m} \nabla^{2} + V^* \right) \Psi^*
$$

概率密度 $\rho = \Psi^* \Psi$，计算时间导数

$$
\frac{\partial \rho}{\partial t} = \frac{1}{i\hbar} \left[ -\frac{\hbar^{2}}{2m} \nabla \cdot (\Psi^* \nabla \Psi - \Psi \nabla \Psi^*) + (V - V^*) \rho \right]
$$

由于 $V - V^* = 2i V_{\text{im}}$，所以概率流密度 $\mathbf{j} = \frac{\hbar}{2m i} (\Psi^* \nabla \Psi - \Psi \nabla \Psi^*)$，得

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot \mathbf{j} = \frac{2 V_{\text{im}}}{\hbar} \rho
$$

当 $V_{\text{im}} = 0$ 时，回归标准连续性方程。

物理意义：$V_{\text{im}}$ 描述吸收或发射过程。若 $V_{\text{im}} < 0$，概率减少，表示吸收；若 $V_{\text{im}} > 0$，概率增加，表示发射。

2.2.3 (选做) 把波函数写为 $\Psi(\vec{r}, t)=R(\vec{r}, t) \mathrm{e}^{(\mathrm{i} / \hbar) S(\vec{r}, t)}$，其中 $R(\vec{r}, t)$ 和 $S(\vec{r}, t)$ 是连续可微的实函数，请给出 $R^{2}$ 和 $S$ 满足的方程组。提示: $R^{2}=|\Psi|^{2}$ 是几率密度，所以 $R^{2}$ 满足的方程其实就是几率守恒方程，只不过几率流密度被重写过了； $S$ 满足的方程类似于经典力学中的 Hamilton-Jacobi 方程，只不过势能 $V$ 增加了被波姆 (也译为博姆) Bohm 称为“量子力”的项。沿着这个方向，Bohm 建立了被称为波姆力学 Bohmian Mechanics 的理论，试图重新解释量子现象。物理学界对这个理论存在不同的看法，但主流是不甚认同。

设 $\Psi(\vec{r}, t) = R(\vec{r}, t) e^{i \frac{S(\vec{r}, t)}{\hbar}}$，代入薛定谔方程并分离实部与虚部，得到

$$
\frac{\partial R^{2}}{\partial t} + \nabla \cdot \left( R^{2} \frac{\nabla S}{m} \right) = 0
$$

$$
\frac{\partial S}{\partial t} + \frac{|\nabla S|^{2}}{2m} + V + Q = 0, \quad \text{where} \quad Q = -\frac{\hbar^{2}}{2m} \frac{\nabla^{2} R}{R}
$$

第一个方程是概率守恒方程，概率流密度 $\mathbf{j} = \frac{R^{2}}{m} \nabla S$。

第二个方程类似于经典 Hamilton-Jacobi 方程，但增加了量子势 $Q$。

## 第三章 一维势场中的粒子

3.1.1 证明课文中所说的共轭定理和反射定理。

假设 $\psi(x)$ 是一维定态薛定谔方程的解，那么
$$
E{\psi(x)} = \left(- \frac{\hbar^{2}}{2m} \dv[2]{}{x} + V(x)\right) \psi(x)
$$
证明共轭定理：

对上述整个式子取复共轭（考虑到能量一定是实的）
$$
E{\psi^{*}(x)} = \left(- \frac{\hbar^{2}}{2m} \pdv[2]{}{x} + V\right) \psi^{*}(x)
$$
证明反射定理：

做一次空间反演
$$
\dv{}{x} \to \dv{}{(-x)} = - \dv{}{x}
$$
所以
$$
\dv[2]{}{x} = \dv{}{x} (\dv{}{x}) \to \dv[2]{}{x}
$$
整个方程变为
$$
E{\psi(-x)} = \left(- \frac{\hbar^{2}}{2m} \dv[2]{}{x} + V(-x)\right) \psi(-x)
$$
由于 $V(-x) = V(x)$，所以 $\psi(-x)$ 也是方程的解。

3.1.2 “时间反演”变换 $t \rightarrow t' = -t$ 在量子力学中的地位非常特殊。假设势能 $V(\vec{r})$ 与时间无关，问：这时 $\Psi(\vec{r}, t)$ 受到什么样的变换才能使 Schrödinger 方程保持不变？这个变换是线性变换吗？
$$
i \hbar \pdv{}{t} \Psi(\vec{r}, t) = - \frac{\hbar^{2}}{2m} \nabla^{2} \Psi(\vec{r}, t) + V (\vec{r}) \Psi (\vec{r}, t)
$$
在时间反演下，算子的变换为
$$
\pdv{}{t} \to - \pdv{}{t}
$$
所以为了保持方程形式不变，波函数需要进行的变换为
$$
\Psi' (\vec{r}, t) = \Psi^{*} (\vec{r}, -t)
$$
这个变换不是线性的，因为
$$
(c \Psi)^{*} = c^{*} \Psi^{*}
$$
不满足线性变换的法则。

3.1.3 (选做)假设一个粒子可以在两种势场 $V_{1}(x)$ 和 $V_{2}(x)$ 中运动并处于束缚态。已知 $V_{1}(x) \leq V_{2}(x)$ 处处成立，在 $V_{1}/V_{2}$ 中的能级是 $E_{n1}/E_{n2}$（彼此一一对应并且从低到高排列）。求证 $E_{n1} \leq E_{n2}$。

证明：

假设 $\hat{H}_{1} = - \frac{\hbar^{2}}{2m} + V_{1} (x)$, $\hat{H}_{2} = - \frac{\hbar^{2}}{2m} + V_{2} (x)$，先证明基态能量的大小
$$
E_{01} = min\left\{ \langle \psi| H_{1} | \psi \rangle\right\} \quad E_{02} = min\left\{ \langle \psi| H_{2} | \psi \rangle\right\}
$$
考虑 $E_{02}$ 对应的 $\psi$，把它带入 $\langle \psi | H_{1} |\psi \rangle$ 中，发现比 $E_{02}$ 小，所以 $E_{01} \leq E_{02}$

再证明 $E_{n1} \leq E_{n2}$：利用 Sturm-Liouville型方程本征值的一般性质，即所谓的 Courant–Fischer 定理，第 $k$ 个本征值对应着
$$
\lambda_{k} = \min_{\substack{U \subset \mathbb{C}^{N} \\ \dim(U) = k}} \max_{\substack{x \in U \\ x \neq 0}} \frac{x^{\dagger} H x}{x^{\dagger} x}
$$
所以对于原 Hilbert 空间的同一 $k$ 维子空间而言，假设 $1$ 对应的极大值的态是 $\psi$，那么带入 $H_{2}$ 中容易发现存在比它更大的，也就是同一子空间的 $2$ 的最大值大于 $1$. 由于这一规律对于所有子空间成立，所以 $E_{01} \leq E_{02}$ 得证。

>补充：上面的解答中我直接使用了Courant–Fischer 定理的结论，在这里补一个证明：
>
>设 $ H $ 是一个 $ N \times N $ 的 Hermitian 矩阵，其特征值按递增顺序排列为  
>$$
>\lambda_{1} \le \lambda_{2} \le \dots \le \lambda_{N}
>$$
>那么对于 $ k = 1, 2, \dots, N $，有
>
>$$
>\lambda_{k} = \min_{\substack{U \subset \mathbb{C}^{N} \\ \dim(U) = k}} \max_{\substack{x \in U \\ x \neq 0}} \frac{x^{\dagger} H x}{x^{\dagger} x}
>$$
>
>由谱定理，存在一组标准正交基 $\{u_{1}, u_{2}, \dots, u_{N}\}$，满足  
>$$
>H u_{i} = \lambda_{i} u_{i}, \quad \lambda_{1} \le \lambda_{2} \le \dots \le \lambda_{N}
>$$
>
>设 $S_{k-1} = \mathrm{span}\{u_{1}, \dots, u_{k-1}\}$，其维数为 $k-1$。 考虑线性映射 $P: U \to \mathbb{C}^{k-1}$ 定义为 $P(x) = (\langle u_{1}, x\rangle, \dots, \langle u_{k-1}, x\rangle)$。 $\dim(U) = k$，$\dim(\mathbb{C}^{k-1}) = k-1$，所以 $\ker P \subset U$ 的维数至少为 $1$。 因此存在非零向量 $y \in U$ 使得 $P(y) = 0$。
>将 $y$ 按特征基展开
>$$
>y = \sum_{j=1}^{N} c_{j} u_{j}, \quad c_{j} = \langle u_{j}, y\rangle
>$$
>$c_{1} = \dots = c_{k-1} = 0$，所以
>$$
>y = \sum_{j=k}^{N} c_{j} u_{j}
>$$
>于是
>$$
>\langle y | H | y \rangle = \sum_{j=k}^{N} \lambda_{j} |c_{j}|^{2}
>$$
>由于 $\lambda_{j} \ge \lambda_{k}$ 当 $j \ge k$，有
>$$
>\langle y | H | y \rangle \ge \lambda_{k} \sum_{j=k}^{N} |c_{j}|^{2} = \lambda_{k} \|y\|^{2}
>$$
>因此
>$$
>\frac{\langle y | H | y \rangle}{\|y\|^{2}} \ge \lambda_{k}
>$$
>所以对任意 $k$ 维子空间 $U$，存在非零 $y \in U$ 使得上式成立，从而
>$$
>\max_{x \in U, x\neq 0} \frac{x^{\dagger} H x}{x^{\dagger} x} \ge \lambda_{k}
>$$
>于是
>$$
>\min_{\dim(U)=k} \max_{x \in U} \frac{x^{\dagger} H x}{x^{\dagger} x} \ge \lambda_{k}
>$$
>
>取 $U_{0} = \mathrm{span}\{u_{1}, \dots, u_{k}\}$，则对任意 $x \in U_{0}$，有
>$$
>x = \sum_{j=1}^{k} a_{j} u_{j}
>$$
>$$
>\langle x | H | x \rangle = \sum_{j=1}^{k} \lambda_{j} |a_{j}|^{2} \le \lambda_{k} \sum_{j=1}^{k} |a_{j}|^{2} = \lambda_{k} \|x\|^{2}
>$$
>所以
>$$
>\max_{x \in U_{0}} \frac{x^{\dagger} H x}{x^{\dagger} x} \le \lambda_{k}
>$$
>得到结论
>$$
>\min_{\dim(U)=k} \max_{x \in U} \frac{x^{\dagger} H x}{x^{\dagger} x} = \lambda_{k}
>$$
>