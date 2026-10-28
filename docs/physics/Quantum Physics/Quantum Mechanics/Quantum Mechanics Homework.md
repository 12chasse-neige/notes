# Quantum Mechanics Homework

## 第1次作业

### 第一章 量子力学的历史渊源

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

### 第二章 波函数与薛定谔方程

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

<img src="./Quantum Mechanics Homework.assets/image-20260305092907591.png" alt="image-20260305092907591" style="zoom:25%;" />

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
i\hbar \frac{\partial \Psi}{\partial t} = \left( -\frac{\hbar^{2}}{2m} \nabla^{2} + V \right) \Psi, \quad -i\hbar \frac{\partial \Psi^{*}}{\partial t} = \left( -\frac{\hbar^{2}}{2m} \nabla^{2} + V^{*} \right) \Psi^{*}
$$

概率密度 $\rho = \Psi^{*} \Psi$，计算时间导数

$$
\frac{\partial \rho}{\partial t} = \frac{1}{i\hbar} \left[ -\frac{\hbar^{2}}{2m} \nabla \cdot (\Psi^{*} \nabla \Psi - \Psi \nabla \Psi^{*}) + (V - V^{*}) \rho \right]
$$

由于 $V - V^{*} = 2i V_{\text{im}}$，所以概率流密度 $\mathbf{j} = \frac{\hbar}{2m i} (\Psi^{*} \nabla \Psi - \Psi \nabla \Psi^{*})$，得

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

### 第三章 一维势场中的粒子

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
\begin{gathered}
\lambda_{k} = \min_{\substack{U \subset \mathbb{C}^{N} \\ \dim(U) = k}} \max_{\substack{x \in U \\ x \neq 0}} \frac{x^{\dagger} H x}{x^{\dagger} x}
\end{gathered}
$$

所以对于原 Hilbert 空间的同一 $k$ 维子空间而言，假设 $1$ 对应的极大值的态是 $\psi$，那么带入 $H_{2}$ 中容易发现存在比它更大的，也就是同一子空间的 $2$ 的最大值大于 $1$. 由于这一规律对于所有子空间成立，所以 $E_{01} \leq E_{02}$ 得证。

#### Reference material

补充：上面的解答中我直接使用了Courant–Fischer 定理的结论，在这里补一个证明：
设 $H$ 是一个 $N \times N$ 的 Hermitian 矩阵，其特征值按递增顺序排列为

$$
\lambda_{1} \le \lambda_{2} \le \dots \le \lambda_{N}
$$

那么对于 $k = 1, 2, \dots, N$，有

$$
\begin{gathered}
\lambda_{k} = \min_{\substack{U \subset \mathbb{C}^{N} \\ \dim(U) = k}} \max_{\substack{x \in U \\ x \neq 0}} \frac{x^{\dagger} H x}{x^{\dagger} x}
\end{gathered}
$$

由谱定理，存在一组标准正交基 $\{u_{1}, u_{2}, \dots, u_{N}\}$，满足

$$
H u_{i} = \lambda_{i} u_{i}, \quad \lambda_{1} \le \lambda_{2} \le \dots \le \lambda_{N}
$$

设 $S_{k-1} = \mathrm{span}\{u_{1}, \dots, u_{k-1}\}$，其维数为 $k-1$。 考虑线性映射 $P: U \to \mathbb{C}^{k-1}$ 定义为 $P(x) = (\langle u_{1}, x\rangle, \dots, \langle u_{k-1}, x\rangle)$。 $\dim(U) = k$，$\dim(\mathbb{C}^{k-1}) = k-1$，所以 $\ker P \subset U$ 的维数至少为 $1$。 因此存在非零向量 $y \in U$ 使得 $P(y) = 0$。
将 $y$ 按特征基展开

$$
y = \sum_{j=1}^{N} c_{j} u_{j}, \quad c_{j} = \langle u_{j}, y\rangle
$$

$c_{1} = \dots = c_{k-1} = 0$，所以

$$
y = \sum_{j=k}^{N} c_{j} u_{j}
$$

于是

$$
\langle y | H | y \rangle = \sum_{j=k}^{N} \lambda_{j} |c_{j}|^{2}
$$

由于 $\lambda_{j} \ge \lambda_{k}$ 当 $j \ge k$，有

$$
\langle y | H | y \rangle \ge \lambda_{k} \sum_{j=k}^{N} |c_{j}|^{2} = \lambda_{k} \|y\|^{2}
$$

因此

$$
\frac{\langle y | H | y \rangle}{\|y\|^{2}} \ge \lambda_{k}
$$

所以对任意 $k$ 维子空间 $U$，存在非零 $y \in U$ 使得上式成立，从而

$$
\max_{x \in U, x\neq 0} \frac{x^{\dagger} H x}{x^{\dagger} x} \ge \lambda_{k}
$$

于是

$$
\min_{\dim(U)=k} \max_{x \in U} \frac{x^{\dagger} H x}{x^{\dagger} x} \ge \lambda_{k}
$$

取 $U_{0} = \mathrm{span}\{u_{1}, \dots, u_{k}\}$，则对任意 $x \in U_{0}$，有

$$
x = \sum_{j=1}^{k} a_{j} u_{j}
$$

$$
\langle x | H | x \rangle = \sum_{j=1}^{k} \lambda_{j} |a_{j}|^{2} \le \lambda_{k} \sum_{j=1}^{k} |a_{j}|^{2} = \lambda_{k} \|x\|^{2}
$$

所以

$$
\max_{x \in U_{0}} \frac{x^{\dagger} H x}{x^{\dagger} x} \le \lambda_{k}
$$

得到结论

$$
\min_{\dim(U)=k} \max_{x \in U} \frac{x^{\dagger} H x}{x^{\dagger} x} = \lambda_{k}
$$

---

## 第2次作业

3.2.1 质量为 $m$ 的粒子被放在宽度为 $L$ 的无限深势阱中，并处于能量为 $E_{n}$ 的能量本征态。问它对阱壁施加的压力是多大?

首先给出归一化之后的波函数以及能级

$$
\begin{gathered}
\psi_{n} (x) = \sqrt{\frac{2}{L}} \sin (\frac{n \pi}{L} x) \quad (0 \leq x \leq L) \\
E_{n} = \frac{n^{2} \pi^{2} \hbar^{2}}{2m L^{2}}
\end{gathered}
$$

所以对于阱壁的压力可以表示为

$$
F = - \pdv{E_{n}}{L} = \frac{n^{2} \pi^{2} \hbar^{2}}{m L^{3}}
$$

3.2.2 粒子在 $-a < x < a$ 的无限深势阱中运动，$t = 0$ 时波函数为 $\Psi_{0}(x) = C \cos\frac{\pi x}{a} \cos\frac{\pi x}{2a} (-a < x < a)$。求常数 $C$ 以及任意时刻的波函数 $\Psi(x, t)$。粒子的质量为 $m$。

先做归一化

$$
1 = \int_{-a}^{a} \Psi^{*}_{0} (x) \Psi_{0} (x) \dd{x} = |C|^{2} \int_{-a}^{a} \cos^{2} \frac{\pi x}{a} \cos^{2} \frac{\pi x}{2a} \, \dd{x} = \frac{a}{2 \pi} |C|^{2} \int_{- \pi}^{\pi} (1 + \cos u) \cos^{2} u \dd{u} = \frac{a}{2} |C|^{2}
$$

所以

$$
C = \sqrt{\frac{2}{a}}
$$

我们假设 $t = 0$ 时刻粒子波函数的相位为 $0$ ，把波函数展开为粒子的能量本征态

$$
\Psi_{0} (x) = \sqrt{\frac{2}{a}} \left(\frac{1}{2} \cos \frac{\pi x}{2 a} + \frac{1}{2} \cos \frac{3 \pi x}{2a}\right)
$$

所以 $t$ 时刻的波函数为

$$
\Psi (x, t) = \sqrt{\frac{1}{2a}} \left(\cos \frac{\pi x}{2 a} e^{- i \frac{\pi^{2} \hbar}{8 m a^{2}} t} + \cos \frac{3 \pi x}{2a} e^{- i \frac{9 \pi^{2} \hbar}{8 m a^{2}} t}\right)
$$

3.2.3（选做）设粒子在 $-a < x < a$ 的无限深势阱中运动，其波函数为 $\psi(x) = C(a^{2} - x^{2}) \, (-a \leq x \leq a)$, 粒子的质量为 $m$。

(a) 求归一化常数 $C = ?$

归一化

$$
1 = |C|^{2} \int_{-a}^{a} (a^{2} - x^{2})^{2} \, \dd{x} = \frac{16}{15} a^{5} |C|^{2}
$$

所以

$$
C = \sqrt{\frac{15}{16 a^{5}}}
$$

(b) 测量粒子的能量得到 $E_{n}$ 的几率 $P_{n} = ?$

我们把粒子的波函数做傅立叶展开

$$
C (a^{2} - x^{2}) = \sum_{n = 1}^{\infty} C_{n} \cos(\frac{n \pi x}{2a})
$$

$$
\int_{-a}^{a} C (a^{2} - x^{2}) \cos(\frac{n \pi x}{2a}) \, \dd{x} = \frac{2C a^{4} (-1)^{n}}{n^{2} \pi^{2}}
$$

所以

$$
\psi (x) = C(a^{2} - x^{2}) = \frac{4 a^{2}}{3} \sqrt{\frac{15}{16a^{5}}} + \sum_{k=0}^{\infty} \frac{32 a^{2}}{\pi^{3} (2k+1)^{3}} (-1)^{k} \sqrt{\frac{15}{16a^{5}}} \cos\left(\frac{(2k+1)\pi x}{2a}\right)
$$

所以

$$
P_{2k + 1} = \frac{960}{\pi^{6} (2k+1)^{6}} \quad (k=0,1,2,\cdots)
$$

(c) 试求无穷级数

$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{6}} = ?
$$

利用 $\sum_{n} P_{n} = 1$，所以

$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{6}} = \frac{\pi^{6}}{960}
$$

(d) 利用

$$
\bar{E} = -\frac{\hbar^{2}}{2m} \int_{-a}^{a} \psi^{*}(x) \frac{d^{2} \psi(x)}{dx^{2}} \dd{x}
$$

求出粒子的能量平均值。

$$
\bar{E} = -\frac{\hbar^{2}}{2m} \int_{-a}^{a} \psi^{*}(x) \frac{d^{2} \psi(x)}{dx^{2}} \dd{x} = \frac{5\hbar^{2}}{4m a^{2}}
$$

(e) 由于 $\bar{E} = \sum_{n} P_{n} E_{n}$, 因此无穷级数

$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{4}} = ?
$$

带入

$$
\bar{E} = \sum_{n} P_{n} E_{n} = \sum_{k = 0}^{\infty} \frac{960}{\pi^{6} (2k + 1)^{6}} \frac{(2k + 1)^{2} \pi^{2} \hbar^{2}}{8 m a^{2}} = \frac{120 \hbar^{2}}{\pi^{4} m a^{2}} \sum_{k = 1}^{\infty} \frac{1}{(2k + 1)^{4}}
$$

所以

$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{4}} = \frac{\pi^{4}}{96}
$$

(f) 采用类似的方法但取一个新的 $\psi(x)$, 求出无穷级数

$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{2}} = ?
$$

选取对称的三角形波函数

$$
\psi(x) = A (a - |x|) \quad -a \le x \le a
$$

该波函数为偶函数，且在边界 $x = \pm a$ 处为零。

由归一化条件

$$
1 = \int_{-a}^{a} |\psi(x)|^{2} \, dx = 2A^{2} \int_{0}^{a} (a-x)^{2} \, dx = 2A^{2} \cdot \frac{a^{3}}{3} = \frac{2A^{2} a^{3}}{3}
$$

得

$$
A = \sqrt{\frac{3}{2a^{3}}}
$$

无限深势阱中偶宇称的归一化本征函数为（$k=0,1,2,\dots$）

$$
\phi_{k}(x) = \frac{1}{\sqrt{a}} \cos\left( \frac{(2k+1)\pi x}{2a} \right)
$$

对应能量

$$
E_{k} = \frac{(2k+1)^{2} \pi^{2} \hbar^{2}}{8 m a^{2}}
$$

将 $\psi(x)$ 展开

$$
\psi(x) = \sum_{k=0}^{\infty} C_{k} \phi_{k}(x)
$$

其中展开系数

$$
C_{k} = \int_{-a}^{a} \phi_{k}(x) \psi(x) \, dx = \frac{4\sqrt{6}}{\pi^{2} (2k+1)^{2}}
$$

概率

$$
P_{k} = |C_{k}|^{2} = \frac{96}{\pi^{4} (2k+1)^{4}}
$$

利用公式

$$
\bar{E} = -\frac{\hbar^{2}}{2m} \int_{-a}^{a} \psi^{*}(x) \frac{d^{2} \psi(x)}{dx^{2}} \dd{x}
$$

计算得

$$
\bar{E} = \frac{3\hbar^{2}}{2 m a^{2}}
$$

$$
\bar{E} = \sum_{k=0}^{\infty} P_{k} E_{k} = \frac{12 \hbar^{2}}{m a^{2} \pi^{2}} \sum_{k=0}^{\infty} \frac{1}{(2k+1)^{2}}
$$

与积分结果比较

$$
\frac{12 \hbar^{2}}{m a^{2} \pi^{2}} \sum_{k=0}^{\infty} \frac{1}{(2k+1)^{2}} = \frac{3\hbar^{2}}{2 m a^{2}},
$$

解得

$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{2}} = \frac{\pi^{2}}{8}
$$

3.3.1 设粒子在无限深势阱加中心 $\delta$ 势垒 $V(x)=\left\{\begin{array}{cc}\gamma \delta(x), & (|x|<a, \gamma>0) \\ +\infty, & (|x|>a)\end{array}\right.$ 中运动, 求它的能谱。提示: 区分不同的宇称。

先写出一维的定态方程

$$
\frac{\hbar^{2}}{2m} \dv[2]{}{x} \psi (x) + (E - V(x)) \psi(x) = 0
$$

所以 $\delta$ 函数势带来的条件可以写作

$$
\left. \psi' (x) \right|_{x = 0^{-}}^{x = 0^{+}} = \frac{2m \gamma}{\hbar^{2}} \psi (0)
$$

自由空间的薛定谔方程给出了

$$
\psi''(x) = - \frac{2m E}{\hbar^{2}} \psi(x)
$$

由于这里的解是定域的，所以必定是三角的形式。

$$
\psi (x) = A \cos (\frac{\sqrt{2mE}}{\hbar}x) + B \sin(\frac{\sqrt{2mE}}{\hbar} x)
$$

1. 对于偶宇称的情形

$$
\psi (x) = \begin{cases}
   A \cos (\frac{\sqrt{2mE}}{\hbar}x) + B \sin(\frac{\sqrt{2mE}}{\hbar} x) \quad (x > 0) \\
   A \cos (\frac{\sqrt{2mE}}{\hbar}x) - B \sin(\frac{\sqrt{2mE}}{\hbar} x) \quad (x < 0)
   \end{cases}
$$

   所以此时

$$
\left. \psi' (x) \right|_{x = 0^{-}}^{x = 0^{+}} = \frac{2\sqrt{2mE}}{\hbar} B  = \frac{2m \gamma}{\hbar^{2}} \psi (0)
$$

   所以

$$
\psi (0) = A = \sqrt{\frac{2 E \hbar^{2}}{m \gamma^{2}}} B
$$

   再带入边界条件

$$
\psi(a) \propto \sqrt{\frac{2 E \hbar^{2}}{m \gamma^{2}}} \cos(\frac{\sqrt{2mE}}{\hbar} a) + \sin (\frac{\sqrt{2mE}}{\hbar}a) = 0
$$

   得到允许的能量满足的条件是

$$
- \sqrt{\frac{2 E \hbar^{2}}{m \gamma^{2}}} = \tan \left(\frac{\sqrt{2mE}}{\hbar} a\right)
$$

2. 对于奇宇称的情形

$$
\psi(x) = A \sin(\frac{\sqrt{2mE}}{\hbar}x)
$$

   此时 $\left. \psi' (x) \right|_{x = 0^{-}}^{x = 0^{+}} = \frac{2\sqrt{2mE}}{\hbar} B  = \frac{2m \gamma}{\hbar^{2}} \psi (0)$ 的条件自动满足，也就是说 $\delta$ 函数势对解没有影响，所以能谱相当于无限深方势阱的奇宇称能谱

$$
E_{n} = \frac{n^{2} \pi^{2} \hbar^{2}}{2m a^{2}}
$$

3.

3.3.2（选做）设粒子在相距为 $a$ 的对称双 $\delta$ 势阱 $V(x)=-\frac{\hbar^{2}}{m L}\left\{\delta\left(x+\frac{a}{2}\right)+\delta\left(x-\frac{a}{2}\right)\right\}$ 中运动, 求它的束缚态能级。提示: a. 区分偶宇称态和奇宇称态; b. 区分 $a \leq L$ 和 $a>L$ 两种不同情形。

先写出一维的定态方程

$$
\frac{\hbar^{2}}{2m} \dv[2]{}{x} \psi (x) + (E - V(x)) \psi(x) = 0
$$

此时 $\delta$ 函数势带来的条件可以写作

$$
\left. \psi'(x) \right|_{x= - \frac{a}{2} - \epsilon}^{x = -\frac{a}{2} + \epsilon} = - \frac{2}{L} \psi \left(-\frac{a}{2}\right)
$$

$$
\left. \psi'(x) \right|_{x= \frac{a}{2} - \epsilon}^{x = \frac{a}{2} + \epsilon} = - \frac{2}{L} \psi \left(\frac{a}{2}\right)
$$

由于这是一个非定域的问题，所以自由空间对应的束缚态波函数必定是指数的形式，并且束缚态的能量小于零。

1. 考虑偶宇称的情况，不妨假设

$$
\psi (x) = \begin{cases}
   A e^{\frac{\sqrt{-2mE}}{\hbar} x} \quad (x < -\frac{a}{2}) \\
   B \left(e^{-\frac{\sqrt{-2mE}}{\hbar} x} + e^{\frac{\sqrt{-2mE}}{\hbar} x}\right) \quad (- \frac{a}{2} < x < 0) \\
   B \left(e^{\frac{\sqrt{-2mE}}{\hbar} x} + e^{-\frac{\sqrt{-2mE}}{\hbar} x}\right) \quad (0 < x < \frac{a}{2}) \\
   A e^{- \frac{\sqrt{-2mE}}{\hbar} x} \quad (x > \frac{a}{2})
   \end{cases}
$$

   利用连续性条件和 $\delta$ 函数带来的条件待定一下系数

$$
A e^{- \frac{\sqrt{-2mE}a}{2\hbar}} = 2B \cosh(\frac{\sqrt{-2mE} a}{2\hbar})
$$

$$
- A \frac{\sqrt{-2mE}}{\hbar} e^{- \frac{\sqrt{-2mE}a}{2\hbar}} - 2B \frac{\sqrt{-2mE}}{\hbar} \sinh(\frac{\sqrt{-2mE}a}{2 \hbar}) = - \frac{2}{L} \psi \left(\frac{a}{2}\right )
$$

   所以能级满足的条件是

$$
kL \left(1 + \tanh(\frac{ka}{2})\right) = 2
$$

   即

$$
kL = 1 + e^{-ka}
$$

   其中 $k = \frac{\sqrt{-2mE}}{\hbar}$

2. 考虑奇宇称的情况，不妨假设

$$
\psi (x) = \begin{cases}
   - A e^{\frac{\sqrt{-2mE}}{\hbar} x} \quad (x < -\frac{a}{2}) \\
   2B \sinh(\frac{\sqrt{-2mE}}{\hbar} x) \quad (- \frac{a}{2} < x < \frac{a}{2}) \\
   A e^{- \frac{\sqrt{-2mE}}{\hbar} x} \quad (x > \frac{a}{2})
   \end{cases}
$$

   同样假设 $k = \frac{\sqrt{-2mE}}{\hbar}$，利用连续性条件和 $\delta$ 函数带来的条件待定一下系数

$$
A e^{-\frac{ka}{2}} = 2B \sinh(\frac{ka}{2})
$$

$$
-kA e^{- \frac{ka}{2}} - 2kB \cosh(\frac{ka}{2}) = -\frac{2}{L} \psi \left(\frac{a}{2}\right)
$$

   所以能级满足的条件是

$$
kL = 1 - e^{-ka}
$$

   此时需要对于 $L$ 和 $a$ 的相对大小进行分类。当 $L < a$ 时，上述条件方程有解，所以该问题存在奇宇称的束缚态；当 $L > a$ 时，上述条件方程没有非零解，所以该问题不存在奇宇称的解。

3.4.1 分别求线性谐振子处于基态和第一激发态时, 粒子出现几率最大的位置。

基态谐振子的波函数是（其中 $\alpha = \sqrt{\frac{m \omega}{\hbar}}$）

$$
\psi_{0} (x) = \sqrt{\frac{\alpha}{\sqrt{\pi}}} e^{- \frac{\alpha^{2} x^{2}}{2}}
$$

所以粒子出现在位置 $x$ 的概率为

$$
P_{0} (x) = \psi^{*}_{0} (x) \psi_{0} (x) = \frac{\alpha}{\sqrt{\pi}} e^{- \alpha^{2} x^{2}}
$$

概率最大的位置对应

$$
\dv{P_{0} (x)}{x} = - \frac{2 \alpha^{3}}{\sqrt{\pi}} x e^{-\alpha^{2} x^{2}} = 0
$$

所以出现概率最大的位置是 $x =0$

第一激发态谐振子的波函数是

$$
\psi_{1} = \sqrt{\frac{2 \alpha}{\sqrt{\pi}}} \alpha x e^{- \frac{\alpha^{2} x^{2}}{2}}
$$

所以粒子出现在位置 $x$ 的概率为

$$
P_{1} (x) = \psi^{*}_{1} (x) \psi_{1} (x) = \frac{2 \alpha^{3}}{\sqrt{\pi}} x^{2} e^{- \alpha^{2} x^{2}}
$$

概率最大的位置对应

$$
\dv{P_{1} (x)}{x} = \frac{4 \alpha^{3}}{\sqrt{\pi}} x e^{-\alpha^{2} x^{2}} - \frac{4 \alpha^{5}}{\sqrt{\pi}} x^{3} e^{-\alpha^{2} x^{2}} = 0
$$

所以概率最大的位置是 $x= \pm \frac{1}{\alpha}$

3.4.2 半壁谐振子势是 $V(x)=\left\{\begin{array}{cc}+\infty & (x<0) \\ \frac{1}{2} m \omega^{2} x^{2} & (x>0)\end{array}\right.$ 求粒子在其中的能级和归一化波函数。

这个势对应了完整谐振子势的所有奇宇称解，即归一化的波函数为

$$
\psi_{k} (x) = \sqrt{\frac{\alpha}{\sqrt{\pi} 2^{2k} (2k + 1)!}} H_{2k + 1} (\alpha x) e^{- \frac{\alpha^{2} x^{2}}{2}} \quad (k = 0,1,2, \cdots)
$$

对应的能级是

$$
E_{k} = \left(2k + \frac{3}{2}\right) \hbar \omega
$$

3.4.3 假设势能为

$$
V(x)=\begin{cases}+\infty \quad (x<0) \\
\frac{1}{2} m \omega^{2} x^{2} + \frac{v(v-1) \hbar^{2}}{2m x^{2}} \quad (x>0, v \geq \frac{1}{2} \text {可连续变化})\end{cases}
$$

求粒子在其中的能级。

### Reference material

方法提示: 基于 $x \rightarrow+\infty$ 和 $x \rightarrow 0^{+}$时 $\psi(x)$ 的行为, 可设 $\psi(x)=\xi^{\nu} \mathrm{e}^{-\xi^{2} / 2} F(\xi)$, 其中 $\xi=\sqrt{m \omega / \hbar} x, F(\xi)$ 是 $\xi$ 的多项式且 $F(0) \neq 0$; 再注意 $F(-\xi)$ 满足与 $F(\xi)$ 相同的方程, 所以可重新取自变量为 $\eta=\xi^{2}$ 而 $F(\eta)$ 是 $\eta$ 的 $n(n=0,1,2, \cdots)$ 次多项式; 然后仿照课文中的做法就可以了。结果提示: 这些能级是类谐振子的, 即, 是等间隔的。本题的结果还可以和 3.4.2 题的答案相对照。

---

写出定态的薛定谔方程

$$
\dv[2]{}{x} \psi (x) + \left(\frac{2mE}{\hbar^{2}} - \alpha^{4} x^{2} - \frac{\nu (\nu - 1)}{x^{2}}\right) \psi (x) = 0
$$

假设

$$
\psi (x) = \xi^{\nu} \mathrm{e}^{- \frac{\xi^{2}}{2}} F(\xi)
$$

其中 $\xi = \alpha x$，那么经过一系列化简，原方程可以变为

$$
F'' (\xi) + \left(\frac{2 \nu}{\xi} - 2 \xi\right) F' (\xi) + \left(\frac{2E}{\hbar \omega} - 2 \nu - 1\right) F(\xi) = 0
$$

令 $\frac{2E}{\hbar \omega} = \lambda$，并且作代换 $\eta=\xi^{2}$，继续把方程化简为

$$
4 \eta F'' (\eta) + (4 \nu + 2 - 4 \eta) F' (\eta) + (\lambda - 2 \nu - 1) F (\eta) = 0
$$

利用级数解法求解此方程，假设

$$
F (\eta) = \sum_{k = 0}^{\infty} C_{k} \eta^{k}
$$

那么系数的递推公式可以表示为

$$
C_{k} = \frac{4k + 2 \nu + 1 - \lambda}{2 (2k + 2 \nu + 1) (k + 1)} C_{k}
$$

可以看出，为了避免发散，能量的取值仅仅可以为分立的

$$
\lambda = 4k + 2 \nu + 1
$$

即

$$
E_{k} = \left(2k + \nu + \frac{1}{2}\right) \hbar \omega
$$

当 $\nu = 1$ 时，这个取值就退化到了上一问的情形。

## 第3次作业

3.5.1 设有一个阶跃势场 $V(x)=\begin{cases}0 & x<0 \\ V_{0} (>0) & x>0\end{cases}$ 粒子以能量 $E (>V_{0})$ 从左方入射。求 $R$ 和 $T$，并验证 $R+T=1$。提示：注意这时应该使用原始的 $R$ 和 $T$ 的定义。

在 $x<0$ 区域
$$
\psi_{1}(x)=A e^{ikx}+B e^{-ikx}, \quad k=\frac{\sqrt{2mE}}{\hbar}
$$
其中 $A e^{ikx}$ 为入射波，$B e^{-ikx}$ 为反射波。

在 $x>0$ 区域
$$
\psi_{2}(x)=C e^{ik'x}, \quad k'=\frac{\sqrt{2m(E-V_{0})}}{\hbar}
$$
只有透射波。在 $x=0$ 处，波函数连续且一阶导数连续

$$
\begin{cases}
A+B=C \\
ikA-ikB=ik'C
\end{cases}
$$

解得
$$
B=\frac{k-k'}{k+k'}A, \quad C=\frac{2k}{k+k'}A
$$

所以入射波概率流为
$$
j_{\text{in}}=\frac{\hbar k}{m}|A|^{2}
$$
反射波概率流为
$$
j_{\text{ref}} = -\frac{\hbar k}{m}|B|^{2}
$$
透射波概率流为
$$
j_{\text{trans}} = \frac{\hbar k'}{m}|C|^{2}
$$
反射系数
$$
R=\frac{|j_{\text{ref}}|}{|j_{\text{in}}|}=\frac{|B|^{2}}{|A|^{2}}=\left(\frac{k-k'}{k+k'}\right)^{2}
$$

透射系数
$$
T=\frac{j_{\text{trans}}}{j_{\text{in}}} = \frac{k'|C|^{2}}{k|A|^{2}}=\frac{k'}{k}\cdot\left(\frac{2k}{k+k'}\right)^{2}=\frac{4kk'}{(k+k')^{2}}
$$

验证 $R+T=1$
$$
R+T=\frac{(k-k')^{2}}{(k+k')^{2}}+\frac{4kk'}{(k+k')^{2}}= \frac{k^{2}+2kk'+k'^{2}}{(k+k')^{2}}=\frac{(k+k')^{2}}{(k+k')^{2}} = 1
$$

3.5.2 求证：对于满足 $V(\pm \infty)=0$ 的任何势场，总有 $R+T=1$，即几率守恒。

证明：

当 $x\to -\infty$ 时，波函数渐近形式
$$
\psi(x)\sim A e^{ikx}+B e^{-ikx}, \quad k=\frac{\sqrt{2mE}}{\hbar}
$$

当 $x\to +\infty$ 时，波函数渐近形式
$$
\psi(x)\sim C e^{ikx}
$$

概率流密度 $j(x)$ 与位置无关
$$
j(x)=\frac{\hbar}{2mi}\left[\psi^{*}\frac{d\psi}{dx}-\psi\frac{d\psi^{*}}{dx}\right]=\text{Const.}
$$

在 $x\to -\infty$ 处
$$
j(-\infty)=\frac{\hbar k}{m}(|A|^{2}-|B|^{2})
$$

在 $x\to +\infty$ 处
$$
j(+\infty)=\frac{\hbar k}{m}|C|^{2}
$$

由 $j(-\infty)=j(+\infty)$ 得
$$
|A|^{2}-|B|^{2}=|C|^{2}
$$

定义反射系数 $R=\frac{|B|^{2}}{|A|^{2}}$，透射系数 $T=\frac{|C|^{2}}{|A|^{2}}$，则
$$
1-R=T \quad \Rightarrow \quad R+T=1
$$

所以概率守恒。

3.5.3（选做）求证：对于满足 $V(\pm \infty)=0$ 的任何势场，粒子从左方入射和从右方入射的透射几率总是相等的。这里的“任何”两个字意味着并不要求 $V(x)=V(-x)$。提示：“从左方射到右方”和“从右方射到左方”是时间反演的关系，而在时间反演之下波函数 $\psi(x)$ 要变成它的复共轭 $\psi^{*}(x)$（见本章第一节的习题 3.1.2），并且我们有“共轭定理”（见本章第一节）。

证明：

已知时间反演算符 $\hat{T}$ 作用于波函数 $\psi(x)$ 的效果是取其复共轭
$$
\hat{T}\psi(x)=\psi^{*}(x)
$$

如果粒子从左方入射，能量为 $E$，则波函数 $\psi_{I}(x)$ 的渐近形式为
$$
\psi_{I}(x)\sim\begin{cases}
e^{ikx}+r e^{-ikx} & x\to -\infty \\
t e^{ikx} & x\to +\infty
\end{cases}
$$

如果粒子从右方入射，能量为 $E$，则波函数 $\psi_{II}(x)$ 的渐近形式为
$$
\psi_{II}(x)\sim\begin{cases}
t' e^{-ikx} & x\to -\infty \\
e^{-ikx}+r' e^{ikx} & x\to +\infty
\end{cases}
$$

对 $\psi_{I}(x)$ 做时间反演
$$
\psi_{I}^{*}(x)\sim\begin{cases}
e^{-ikx}+r^{*} e^{ikx} & x\to -\infty \\
t^{*} e^{-ikx} & x\to +\infty
\end{cases}
$$

这应该对应粒子从右方入射的波函数形式。为了使二者相符，我们使用共轭定理重新改写从右方入射波函数的形式
$$
\psi_{II}(x)\sim\begin{cases}
c_{1} t' e^{-ikx} + c_{2} t'^{*} e^{ikx} & x\to -\infty \\
c_{1} (e^{-ikx}+r' e^{ikx}) + c_{2} (e^{ikx} + r'^{*} e^{- ikx}) & x\to +\infty
\end{cases}
$$
带入概率流的不变性
$$
|t|^{2} = (|c_{1}|^{2} - |c_{2}|^{2}) |t'|^{2}
$$
比较两种方法得到的波函数，有
$$
\begin{gathered}
c_{1} t' = 1 \\
c_{2} t'^{*} = r^{*} \\
c_{1} + c_{2} r'^{*} = t^{*} \\
c_{1} r' + c_{2} = 0
\end{gathered}
$$
综合上述条件，得到
$$
t' = t^{*}, \quad r' = r^{*}
$$

从左侧入射透射概率为 $T=|t|^{2}$，从右入射透射概率为 $T'=|t'|^{2}=|t^{*}|^{2}=|t|^{2}=T$。因此左右入射透射概率相等。

3.5.4（选做）求左方入射波数为 $k$ 的粒子在双 $\delta$ 势垒 $V(x)=\frac{\hbar^{2}}{mL}[\delta(x)+\delta(x-a)]$（$L,a>0$）上的透射几率 $T$ 和反射几率 $R$。问：当 $k$ 分别满足什么条件的时候，$T$ 和 $R$ 分别达到了最大值？这些最大值是多大？为具体起见，考虑参数 $L,a$ 满足条件 $L=a$ 的情形。

假设波函数为

区域I：$x<0$，$\psi_{I}(x)=A e^{ikx}+B e^{-ikx}$

区域II：$0<x<a$，$\psi_{II}(x)=C e^{ikx}+D e^{-ikx}$

区域III：$x>a$，$\psi_{III}(x)=F e^{ikx}$

其中 $k = \frac{\sqrt{2mE}}{\hbar}$，则对于 $\delta$ 势 $V(x)=\alpha\delta(x)$，边界条件为

$$
\begin{gathered}
\psi(0^{+})=\psi(0^{-}) \\
\psi'(0^{+})-\psi'(0^{-})=\frac{2m\alpha}{\hbar^{2}}\psi(0)
\end{gathered}
$$
对于 $\delta(x)$ 处（$x=0$），$\alpha=\frac{\hbar^{2}}{mL}$，跃变条件
$$
\psi'(0^{+})-\psi'(0^{-})=\frac{2}{L}\psi(0)
$$

对于 $\delta(x-a)$ 处（$x=a$），同样有
$$
\psi'(a^{+})-\psi'(a^{-})=\frac{2}{L}\psi(a)
$$

应用边界条件待定系数
$$
\begin{gathered}
A + B = C + D \\
ik (C - D) - ik (A - B) = \frac{2}{L} (A + B) \\
C e^{ika} + D e^{-ika} = F e^{ika} \\
ik F e^{ika} - ik (C e^{ika} - D e^{-ika}) = \frac{2}{L} F e^{ika}
\end{gathered}
$$
得到透射振幅
$$
t=\frac{F}{A}=\frac{1}{\left(1 + \frac{i}{kL}\right)^{2} + \frac{e^{i 2ka}}{k^{2} L^{2}}}
$$

透射概率 $T=|t|^{2}$
$$
T = \frac{1}{1 + \frac{4}{(kL)^{2}} \left( \cos ka + \frac{1}{kL} \sin ka \right)^{2}}
$$

反射概率 
$$
R = 1 -T = \frac{4 \left( \cos ka + \frac{1}{kL} \sin ka \right)^{2}}{k^{2} L^{2} + 4 \left( \cos ka + \frac{1}{kL} \sin ka \right)^{2}}
$$
考虑参数 $L,a$ 满足条件 $L=a$ 的情形，透射概率最大的条件是 $\cos ka + \frac{1}{ka} \sin ka = 0$， 即 $ka$ 是 $\tan x = -x$ 的解时，此时透射率
$$
T = 1
$$
反射率最大的条件是 $\cos ka + \frac{1}{ka} \sin ka = 1$，即 $ka$ 是方程 $x (1 - \cos x) = \sin x$ 的解是，此时反射率
$$
R = \frac{4}{k^{2} a^{2} + 4}
$$
3.6.1（选做）由 $\delta$ 势阱构成的 Dirac 梳子是 $V(x)=- \frac{\hbar^{2}}{mL} \delta(x-na) \quad (n\in\mathbb{Z})$，考虑 $E<0$。请论证：若 $a<2L$，则粒子的能量从一个 $<0$ 的最低能级开始向上连续变化，在 $E<0$ 的能级与 $E=0$ 之间没有间隙；若 $a>2L$，则在 $E<0$ 的区域中存在一条隔开的能带，它的高端能量与 $E=0$ 之间存在有限的能隙。

我们假设周期性的波函数，即
$$
\psi(x) = \left(A e^{\kappa (x - na)} + B e^{-\kappa (x - na)}\right) e^{ikna}
$$
其中 $\kappa = \frac{\sqrt{-2mE}}{\hbar}$ 带入边界条件
$$
A e^{\kappa a} + B e^{-\kappa a} = (A + B) e^{ika}
$$

$$
\kappa (A - B) e^{ika} - \kappa (A e^{\kappa a} - B e^{- \kappa a}) = - \frac{2}{L} (A + B) e^{ika}
$$

联立得到
$$
\cos ka = \cosh \kappa a - \frac{1}{\kappa L} \sinh \kappa a
$$
假设 $\kappa a = z, \frac{a}{L} = \beta$，则上式可以变为
$$
\cos \frac{k}{\kappa} z = \cosh z - \frac{\beta}{z} \sinh z
$$
由于 $k$ 的取值是任意的，所以左侧可以是 $[-1, 1]$ 之间的数字。考虑
$$
f(z) = \cosh z  - \frac{\beta}{z} \sinh z
$$
情况一：若 $a < 2L$（即 $\beta < 2$） 

$f(z)=-1$ 的根：此时直线斜率 $\frac{2}{\beta} > 1$。因为 $\tanh(x)$ 是凸函数且初始斜率为 $1$，直线 $y = \frac{2}{\beta}x$ 永远在 $\tanh(x)$ 的上方，两者在 $x>0$ 时没有交点。也就是说，$f(z)$ 永远无法到达 $-1$。 在 $z \to 0^{+}$ 处：$f(0^{+}) = 1 - \beta$。因为 $0 < \beta < 2$，所以 $f(0^{+}) \in (-1, 1)$。 随着 $z$ 从 $0$ 逐渐增大，$f(z)$ 从一个介于 $(-1, 1)$ 之间的值出发，最终在 $z_{2}$ 处穿过 $1$。因此，允许的 $z$ 的范围是 $z \in (0, z_{2}]$。因为 $z$ 可以取到无穷小，对应的能量 $E = -\frac{\hbar^{2} z^{2}}{2ma^{2}}$ 可以从最低能量 $E_{min}$ 向上连续变化，一直逼近到 $0$。在 $E<0$ 的能带顶与 $E=0$ 之间没有任何间隙。

情况二：若 $a > 2L$（即 $\beta > 2$） 

$f(z)=-1$ 的根：此时直线斜率 $\frac{2}{\beta} < 1$。直线 $y = \frac{2}{\beta}x$ 与 $\tanh(x)$ 在 $x>0$ 处必然会产生一个唯一的正交点 $x_{1}$。因此，$f(z) = -1$ 存在唯一正根 $z_{1} = 2x_{1} > 0$。 在 $z \to 0^{+}$ 处$f(0^{+}) = 1 - \beta$。因为 $\beta > 2$，此时 $f(0^{+}) < -1$。这意味着在 $z \to 0^{+}$（即能量极靠近 $0$）的地方，波函数处于禁带中。$f(z)$ 从 $1-\beta < -1$ 开始，随着 $z$ 的增大，在 $z_{1}$ 处第一次穿过 $-1$ 进入允许区间，随后在 $z_{2}$ 处穿过 $1$ 离开允许区间。允许的 $z$ 范围被严格限制在一个闭区间 $z \in [z_{1}, z_{2}]$ 内（此处 $z_{1} > 0$）, 这个区域对应着一条隔开的能带，其能量范围为 $E \in [-\frac{\hbar^{2} z_{2}^{2}}{2ma^{2}}, -\frac{\hbar^{2} z_{1}^{2}}{2ma^{2}}]$。由于 $z_{1} > 0$，能带的高端能量 $E_{max} = -\frac{\hbar^{2} z_{1}^{2}}{2ma^{2}}$ 是一个严格小于 $0$ 的负值。因此，该能带高端能量与 $E=0$ 之间存在一个大小为 $\frac{\hbar^{2} z_{1}^{2}}{2ma^{2}}$ 的有限能隙。

### 第四章 力学量算符

4.1.1 求证: (a) 若 $\hat{F}=F(\hat{x}, \hat{p}_{x})$ 是 $\hat{x}$ 和 $\hat{p}_{x}$ 的整函数, 则 $\left[\hat{x}, \hat{F}\right]=\mathrm{i} \hbar \frac{\partial \hat{F}}{\partial \hat{p}_{x}},\left[\hat{p}_{x}, \hat{F}\right]=-\mathrm{i} \hbar \frac{\partial \hat{F}}{\partial \hat{x}}$; 

首先证明 $\comm{\hat{x}}{\hat{p}_{x}^{n}} = i \hbar n \hat{p}_{x}^{n - 1}$
$$
\hat{x} \hat{p}_{x}^{n} = i \hbar \hat{p}_{x}^{n - 1} + \hat{p}_{x} \hat{x} \hat{p}_{x}^{n - 1}
$$
像这样没把 $\hat{x}$ 向后移一位都会多出来一个 $i \hbar \hat{p}_{x}^{n - 1}$，所以移了 $n$ 次之后
$$
\comm{\hat{x}}{\hat{p}_{x}^{n}} = n \cdot i \hbar \hat{p}_{x}^{n - 1}
$$
对于一般函数 $F(\hat{x},\hat{p}_{x})=\sum_{m,n}c_{mn}\hat{x}^{m}\hat{p}_{x}^{n}$ 
$$
[\hat{x},F]=\sum_{m,n}c_{mn}[\hat{x},\hat{x}^{m}\hat{p}_{x}^{n}]
=\sum_{m,n}c_{mn}\left(\hat{x}^{m}[\hat{x},\hat{p}_{x}^{n}]+[\hat{x},\hat{x}^{m}]\hat{p}_{x}^{n}\right)
=\sum_{m,n}c_{mn}\hat{x}^{m}\cdot i\hbar n\hat{p}_{x}^{n-1}
=i\hbar\frac{\partial F}{\partial \hat{p}_{x}}
$$
同理

$$
[\hat{p}_{x},F]=\sum_{m,n}c_{mn}[\hat{p}_{x},\hat{x}^{m}\hat{p}_{x}^{n}]
=\sum_{m,n}c_{mn}\left(\hat{x}^{m}[\hat{p}_{x},\hat{p}_{x}^{n}]+[\hat{p}_{x},\hat{x}^{m}]\hat{p}_{x}^{n}\right)
=\sum_{m,n}c_{mn}(-i\hbar m\hat{x}^{m-1})\hat{p}_{x}^{n}
=-i\hbar\frac{\partial F}{\partial \hat{x}}
$$

(b) $\left[\hat{L}_{x}, \hat{L}_{y}\right]=\mathrm{i} \hbar \hat{L}_{z},\left[\hat{L}^{2}, \hat{L}_{x}\right]=0$; 

证明：
$$
\begin{gathered}
\comm{\hat{L}_{x}}{\hat{L}_{y}} = \comm{\hat{y} \hat{p}_{z} - \hat{z} \hat{p}_{y}}{\hat{z} \hat{p}_{x} - \hat{x} \hat{p}_{z}} = \comm{\hat{y} \hat{p}_{z}}{\hat{z} \hat{p}_{x}} - 0 - 0 + \comm{\hat{z} \hat{p}_{y}}{\hat{x} \hat{p}_{z}} \\ =
\hat{y} \comm{\hat{p}_{z}}{\hat{z}} \hat{p}_{x} - \hat{x} \comm{\hat{p}_{z}}{\hat{z}} \hat{p}_{y} = i \hbar (\hat{x} \hat{p}_{y} - \hat{y} \hat{p}_{x}) = i \hbar \hat{p}_{z}
\end{gathered}
$$

$$
\begin{gathered}
\comm{\hat{L}^{2}}{\hat{L}_{x}} = \comm{\hat{L}_{x}^{2} + \hat{L}_{y}^{2} + \hat{L}_{z}^{2}}{\hat{L}_{x}} \\ = 
\hat{L}_{x} \comm{\hat{L}_{x}}{\hat{L}_{x}} + \comm{\hat{L}_{x}}{\hat{L}_{x}} \hat{L}_{x} + \hat{L}_{y} \comm{\hat{L}_{y}}{\hat{L}_{x}} + \comm{\hat{L}_{y}}{\hat{L}_{x}} \hat{L}_{y} + \hat{L}_{z} \comm{\hat{L}_{z}}{\hat{L}_{x}} + \comm{\hat{L}_{z}}{\hat{L}_{x}} \hat{L}_{z} \\ =
0 + 0 - i\hbar \{\hat{L}_{y},\hat{L}_{z}\} + i \hbar \{\hat{L}_{z}, \hat{L}_{y}\} = 0
\end{gathered}
$$

(c) $\left(\hat{F} \hat{G}\right)^{\dagger}=\hat{G}^{\dagger} \hat{F}^{\dagger}$; 

对于任意的两个态
$$
\langle\psi|\hat{F}\hat{G}\phi\rangle=\langle\hat{F}^{\dagger}\psi|\hat{G}\phi\rangle=\langle\hat{G}^{\dagger}\hat{F}^{\dagger}\psi|\phi\rangle
$$
而左边也可写为 $\langle(\hat{F}\hat{G})^{\dagger}\psi|\phi\rangle$。由于这对任意 $\psi,\phi$ 成立，故 $(\hat{F}\hat{G})^{\dagger}=\hat{G}^{\dagger}\hat{F}^{\dagger}$

(d) 若 $\hat{F}, \hat{G}$ 是 Hermitian 算符, 则 $\hat{F} \hat{G}+\hat{G} \hat{F}$ 和 $\mathrm{i}[\hat{F}, \hat{G}] \equiv \mathrm{i}\left(\hat{F} \hat{G}-\hat{G} \hat{F}\right)$ 也是 Hermitian 算符。
$$
(\hat{F} \hat{G} + \hat{G} \hat{F})^{\dagger} = \hat{G}^{\dagger} \hat{F}^{\dagger} + \hat{F}^{\dagger} \hat{G}^{\dagger} = \hat{G} \hat{F} + \hat{F} \hat{G}
$$
所以 $\hat{F} \hat{G}+\hat{G} \hat{F}$ 是 Hermitian 的。
$$
i \left(\hat{F} \hat{G}-\hat{G} \hat{F}\right)^{\dagger} = -i \left(\hat{G}^{\dagger} \hat{F}^{\dagger} - \hat{F}^{\dagger} \hat{G}^{\dagger}\right) = i \left(\hat{F} \hat{G}-\hat{G} \hat{F}\right)
$$
也是 Hermitian 的。

4.1.2 求证: 若系统的 Hamiltonian 算符 $\hat{H}$ 与时间无关，它的初始波函数 $\Psi(t=0)=\Psi_{0}$ 给定, 则它在任意时刻的波函数是 $\Psi(t)=\mathrm{e}^{- \frac{i}{\hbar} \hat{H} t} \Psi_{0}$ 。所以算符 $U(t)=\mathrm{e}^{-\frac{i}{\hbar} \hat{H} t}$ 称为时间演化算符。

证明：

含时薛定谔方程
$$
i\hbar\frac{\partial}{\partial t}\Psi(t)=\hat{H}\Psi(t)
$$
其中 $\hat{H}$ 与时间无关。初始条件：$\Psi(0)=\Psi_{0}$

这是线性微分方程，由于这里不涉及算符的交换问题，所以可以直接模仿常数的形式，得到解为
$$
\Psi(t)=e^{-\frac{i}{\hbar}\hat{H}t}\Psi_{0}
$$
其中指数算符定义为幂级数
$$
e^{-\frac{i}{\hbar}\hat{H}t}=\sum_{n=0}^{\infty}\frac{1}{n!}\left(-\frac{i}{\hbar}\hat{H}t\right)^{n}
$$

4.1.3 (选做) 求证:

 (a) $\mathrm{e}^{\hat{A}} \hat{B} \mathrm{e}^{-\hat{A}}=\hat{B}+[\hat{A}, \hat{B}]+\frac{1}{2 !}[\hat{A},[\hat{A}, \hat{B}]]+\cdots+\frac{1}{n !}([\hat{A},)^{n}\hat{B}(])^{n}+\cdots$, 其中第 $n+1$ 项里有 $n$ 个相套的对易括号。

定义
$$
f (\lambda) = e^{\lambda \hat{A}} \hat{B} e^{- \lambda \hat{A}}
$$
求导
$$
f'(\lambda)=\hat{A}e^{\lambda\hat{A}}\hat{B}e^{-\lambda\hat{A}}-e^{\lambda\hat{A}}\hat{B}e^{-\lambda\hat{A}}\hat{A}
=e^{\lambda\hat{A}}[\hat{A},\hat{B}]e^{-\lambda\hat{A}}
$$
所以一般地
$$
f^{(n)}(\lambda)=e^{\lambda\hat{A}}\underbrace{[\hat{A},[\hat{A},\cdots[\hat{A}}_{n},\hat{B}]\cdots]]e^{-\lambda\hat{A}}
$$
在 $\lambda=0$ 处展开为泰勒级数
$$
f(\lambda)=\sum_{n=0}^{\infty}\frac{\lambda^{n}}{n!}f^{(n)}(0)
=\hat{B}+\lambda[\hat{A},\hat{B}]+\frac{\lambda^{2}}{2!}[\hat{A},[\hat{A},\hat{B}]]+\cdots
$$
令 $\lambda=1$ 即得
$$
\mathrm{e}^{\hat{A}} \hat{B} \mathrm{e}^{-\hat{A}}=\hat{B}+[\hat{A}, \hat{B}]+\frac{1}{2 !}[\hat{A},[\hat{A}, \hat{B}]]+\cdots+\frac{1}{n !}([\hat{A},)^{n} \hat{B}(])^{n}+\cdots
$$
(b) 对于 $\hat{A}=-\frac{i}{\hbar}\theta \hat{L}_{y}$ 和 $\hat{B}=\hat{L}_{z}$, 计算 $\mathrm{e}^{\hat{A}} \hat{B} \mathrm{e}^{-\hat{A}}$ 。这个结果表明: 算符 $\hat{R}_{y}(\theta)=\mathrm{e}^{-\frac{i}{\hbar} \theta \hat{L}_{y}}$ 把 $\hat{L}_{z}$ 绕着 $Y$ 轴转了 $\theta$ 角, 所以被称为旋转算符。

先计算对易子
$$
[\hat{A},\hat{B}]=[-\frac{i}{\hbar}\theta\hat{L}_{y},\hat{L}_{z}]
=-\frac{i}{\hbar}\theta[\hat{L}_{y},\hat{L}_{z}]
=-\frac{i}{\hbar}\theta(i\hbar\hat{L}_{x})=\theta\hat{L}_{x}
$$

再计算 $[\hat{A},[\hat{A},\hat{B}]]$
$$
[\hat{A},[\hat{A},\hat{B}]]=[-\frac{i}{\hbar}\theta\hat{L}_{y},\theta\hat{L}_{x}]
=-\frac{i}{\hbar}\theta^{2}[\hat{L}_{y},\hat{L}_{x}]
=-\frac{i}{\hbar}\theta^{2}(-i\hbar\hat{L}_{z})=\theta^{2}\hat{L}_{z}
$$

$$
[\hat{A},[\hat{A},[\hat{A},\hat{B}]]]=[-\frac{i}{\hbar}\theta\hat{L}_{y},\theta^{2}\hat{L}_{z}]
=-\frac{i}{\hbar}\theta^{3}[\hat{L}_{y},\hat{L}_{z}]
=-\frac{i}{\hbar}\theta^{3}(i\hbar\hat{L}_{x})=\theta^{3}\hat{L}_{x}
$$

可见奇数阶对易子给出 $\theta^{n}\hat{L}_{x}$，偶数阶给出 $\theta^{n}\hat{L}_{z}$

代入展开式
$$
e^{\hat{A}}\hat{L}_{z} e^{-\hat{A}}
=\hat{L}_{z}+\theta\hat{L}_{x}+\frac{\theta^{2}}{2!}\hat{L}_{z}+\frac{\theta^{3}}{3!}\hat{L}_{x}+\frac{\theta^{4}}{4!}\hat{L}_{z}+\cdots
$$
$$
=\left(1+\frac{\theta^{2}}{2!}+\frac{\theta^{4}}{4!}+\cdots\right)\hat{L}_{z}
+\left(\theta+\frac{\theta^{3}}{3!}+\frac{\theta^{5}}{5!}+\cdots\right)\hat{L}_{x}
$$
$$
=\cos\theta\,\hat{L}_{z}+\sin\theta\,\hat{L}_{x}
$$

这正是绕 $y$ 轴旋转 $\theta$ 角后 $\hat{L}_{z}$ 的变换。因此 $\hat{R}_{y}(\theta)=e^{-\frac{i}{\hbar}\theta\hat{L}_{y}}$ 是旋转算符。

## 第4次作业

4.2.1 (a) 记 $\hat{S}^{-1}$ 为 $\hat{S}$ 的逆算符即 $\hat{S}^{-1} \hat{S} = \hat{S} \hat{S}^{-1} = \hat{I}$，$\hat{I}$ 是单位算符。求证：$(\hat{S}^{-1})^{\dagger} = (\hat{S}^{\dagger})^{-1}$。

证明：

由于 $\hat{S} \hat{S}^{-1} = \hat{S}^{-1} \hat{S} = \hat{I}$，所以 $(\hat{S}^{-1})^{\dagger} \hat{S}^{\dagger} = \hat{S}^{\dagger} (\hat{S}^{-1})^{\dagger} = I$，所以 $(\hat{S}^{\dagger})^{-1} = (\hat{S}^{-1})^{\dagger}$

(b) $\hat{F}$ 的表象变换是 $\hat{F}' = \hat{S} \hat{F} \hat{S}^{-1}$。若 $\hat{F}$ 是 Hermitian 算符，问 $\hat{S}$ 满足什么条件能使 $\hat{F}'$ 仍是 Hermitian 算符？

$$
\hat{F'}^{\dagger} = (\hat{S}^{-1})^{\dagger} \hat{F}^{\dagger} \hat{S}^{\dagger} = (\hat{S}^{\dagger})^{-1} \hat{F} \hat{S}^{\dagger}
$$

$\hat{F'}$ 是 Hermitian 的要求 $\hat{F'}^{\dagger} = \hat{F'}$，所以

$$
(\hat{S}^{\dagger})^{-1} \hat{F} \hat{S}^{\dagger} = \hat{S} \hat{F} \hat{S}^{-1}
$$

$$
\hat{F} \hat{S}^{\dagger} \hat{S} = \hat{S}^{\dagger} \hat{S} \hat{F}
$$

即 $\hat{S}^{\dagger} \hat{S}$ 必须和任意 Hermitian 算符对易。所以得到

$$
\hat{S}^{\dagger} \hat{S} = n \hat{I}
$$

经过适当的 normalization 之后可以说 $\hat{S}$ 是幺正的。

4.2.2 不确定关系还可以推广。
(a) 设 $\hat{F}, \hat{G}$ 是 Hermitian 算符，记 $\{\hat{F}, \hat{G}\} \equiv \hat{F} \hat{G} + \hat{G} \hat{F}$，那么请证明成立不等式 $\overline{\hat{F}^{2}} \cdot \overline{\hat{G}^{2}} \geq \frac{1}{4} \overline{[\hat{F}, \hat{G}]^{2}} + \frac{1}{4} \overline{\{\hat{F}, \hat{G}\}^{2}}$

设 $\hat{F}, \hat{G}$ 为 Hermitian 算符，考虑任意态 $|\psi\rangle$，令 $|\alpha\rangle = \hat{F}|\psi\rangle$，$|\beta\rangle = \hat{G}|\psi\rangle$，由 Schwarz 不等式

$$
\langle\alpha|\alpha\rangle \langle\beta|\beta\rangle \ge |\langle\alpha|\beta\rangle|^{2}
$$

即

$$
\langle\hat{F}^{2}\rangle \langle\hat{G}^{2}\rangle \ge |\langle\hat{F}\hat{G}\rangle|^{2}
$$

将 $\langle\hat{F}\hat{G}\rangle$ 分解为实部与虚部

$$
\langle\hat{F}\hat{G}\rangle = \frac{1}{2}\langle\{\hat{F},\hat{G}\}\rangle + \frac{1}{2}\langle[\hat{F},\hat{G}]\rangle
$$

其中 $\langle\{\hat{F},\hat{G}\}\rangle$ 为实数，$\langle[\hat{F},\hat{G}]\rangle$ 为纯虚数。故

$$
|\langle\hat{F}\hat{G}\rangle|^{2} = \frac{1}{4}\langle\{\hat{F},\hat{G}\}\rangle^{2} + \frac{1}{4}\langle[\hat{F},\hat{G}]\rangle^{2}
$$

代入即得

$$
\overline{\hat{F}^{2}} \cdot \overline{\hat{G}^{2}} \geq \frac{1}{4} \overline{\{\hat{F}, \hat{G}\}}^{2} + \frac{1}{4} \overline{[\hat{F}, \hat{G}]}^{2}
$$

(b) 证明推广的不确定关系 $(\Delta \hat{F})^{2} \cdot (\Delta \hat{G})^{2} \geq \frac{1}{4} \overline{[\hat{F}, \hat{G}]^{2}} + \frac{1}{4} \overline{\{\Delta \hat{F}, \Delta \hat{G}\}^{2}}$。

定义 $\Delta\hat{F} = \hat{F} - \langle\hat{F}\rangle$，$\Delta\hat{G} = \hat{G} - \langle\hat{G}\rangle$，它们也是 Hermitian 算符。将 (a) 应用于 $\Delta\hat{F}$ 和 $\Delta\hat{G}$，注意到

$$
\overline{(\Delta\hat{F})^{2}} = (\Delta\hat{F})^{2},\quad \overline{(\Delta\hat{G})^{2}} = (\Delta\hat{G})^{2},\quad [\Delta\hat{F},\Delta\hat{G}] = [\hat{F},\hat{G}]
$$

即得

$$
(\Delta \hat{F})^{2} \cdot (\Delta \hat{G})^{2} \geq \frac{1}{4} \overline{[\hat{F}, \hat{G}]^{2}} + \frac{1}{4} \overline{\{\Delta \hat{F}, \Delta \hat{G}\}^{2}}
$$

4.3.1 设粒子的波函数是 $\psi(x) = C[\sin^{2} kx + \frac{1}{2} \cos kx]$ ($-\infty < x < +\infty$, $k > 0$)，求它的动量测量值和相应的测量几率、动量平均值和动能平均值。提示：把 $\psi(x)$ 化为 $e^{\frac{i}{\hbar}px}$ 的线性组合。由于 $|\psi(x)|^{2}$ 在 $-\infty < x < +\infty$ 上的积分是发散的，所以无需求 $C$，但是所问的值都是有意义的。

$$
\begin{gathered}
\psi(x) = C \frac{1 - \cos (2kx)}{2} + \frac{C}{2} \cos kx \\ =
\frac{C}{2} \left(1 + \frac{1}{2} e^{ikx} + \frac{1}{2} e^{-ikx} - \frac{1}{2} e^{2ikx} + \frac{1}{2} e^{-2ikx}\right)
\end{gathered}
$$

所以可能的动量测量值是 $\hbar k, -\hbar k, 2 \hbar k, -2 \hbar k, 0$，对应的概率分别是

|   $\hbar k$   |  $-\hbar k$   |  $2 \hbar k$  | $-2 \hbar k$  |       0       |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| $\frac{1}{8}$ | $\frac{1}{8}$ | $\frac{1}{8}$ | $\frac{1}{8}$ | $\frac{1}{2}$ |

对应的动量平均值是

$$
\bar{p} = 0
$$

动能平均值是

$$
\bar{E}_{k} = \frac{1}{2} \left(\frac{\hbar^{2} k^{2}}{4m} + \frac{4 \hbar^{2} k^{2}}{4m}\right) = \frac{5 \hbar^{2} k^{2}}{8m}
$$

4.3.2 $\psi_{0}(x) = \frac{\sqrt{\alpha}}{4\sqrt[4]{\pi}} e^{-\alpha^{2}x^{2}/2}$ 通称为 Gauss 波包，是粒子的真实物理状态的一个典型代表，但并不意味着粒子在抛物线势阱中运动。设我们取一个自由粒子的波函数的初值为 $\Psi(x, 0) = \psi_{0}(x)$，请验证下面这个与时间有关的 Gauss 波包 $\Psi(x, t) = \frac{\sqrt{\alpha}}{4\sqrt[4]{\pi}} \sqrt{f(t)} \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right)$ 其中 $f(t) = \left(1 + i \frac{\hbar \alpha^{2}t}{m}\right)^{-1}$，服从含时间的自由粒子的 Schrödinger 方程。这个波包的宽度是随时间而增加的，所以这个现象称为波包弥散。

含时间的自由粒子的 Schrödinger 方程是

$$
i \hbar \pdv{}{t} \Psi (x, t) = - \frac{\hbar^{2}}{2m} \pdv[2]{}{x} \Psi (x, t)
$$

带入

$$
\begin{gathered}
LHS = i \hbar \pdv{}{t} \frac{\sqrt{\alpha}}{4\sqrt[4]{\pi}} \sqrt{f(t)} \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right) \\ =
\frac{i \hbar \sqrt{\alpha}}{4\sqrt[4]{\pi}} \left(\frac{f' (t)}{2 \sqrt{f(t)}} - \frac{\alpha^{2} x^{2}}{2} \sqrt{f (t)} f'(t) \right) \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right)
\end{gathered}
$$

考虑到

$$
f' (t) = - i \frac{\hbar \alpha^{2}}{m} f^{2} (t)
$$

所以上述式子可以表示为

$$
LHS = \frac{i \hbar \sqrt{\alpha}}{4\sqrt[4]{\pi}} \left(- i\frac{\hbar \alpha^{2}}{2m} (f (t))^{\frac{3}{2}} + i\frac{\hbar \alpha^{4} x^{2}}{2m} (f(t))^{\frac{5}{2}} \right) \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right)
$$

我们再考虑右侧

$$
\begin{gathered}
RHS = - \frac{\hbar^{2}}{2m} \pdv[2]{}{x} \frac{\sqrt{\alpha}}{4\sqrt[4]{\pi}} \sqrt{f(t)} \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right) \\ =
\frac{\hbar^{2} \sqrt{\alpha}}{8 m \sqrt[4]{\pi}} \pdv{}{x} \alpha^{2} x\sqrt{f^{3} (t)} \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right) \\ =
\frac{\hbar^{2} \sqrt{\alpha}}{8 m \sqrt[4]{\pi}} \left(\alpha^{2} (f(t))^{\frac{3}{2}} - \alpha^{4} x^{2} (f(t))^{\frac{5}{2}}\right) \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right)
\end{gathered}
$$

比较之后发现 $LHS = RHS$ ，所以该波函数是满足含时薛定谔方程的。

4.3.3（选做）求线性谐振子的任意能量本征态 $\psi_{n}(x)$（参见 §3.4）的 Fourier 变换 $\phi_{n}(p)$

### Reference material

提示：具体地说，$\psi_{n}(\xi)=(-1)^{n} \sqrt{\frac{1}{\sqrt{\pi} 2^{n} n !}} \mathrm{e}^{\xi^{2} / 2} \frac{\mathrm{d}^{n}}{\mathrm{~d} \xi^{n}} \mathrm{e}^{-\xi^{2}}$ ($\xi=\sqrt{\frac{m \omega}{\hbar}} x$)，可以反复进行分部积分，并应用下面的定理：如果 $f(x, y)=g(a x+b y)$，则 $\frac{1}{a} \frac{\partial f}{\partial x}=\frac{1}{b} \frac{\partial f}{\partial y}$，其中 $a, b$ 是常数。

---

$$
\phi_{n} (p) = \frac{1}{\sqrt{2 \pi \hbar} \alpha} \int_{- \infty}^{\infty} \psi_{n} (\xi) e^{- i \frac{p}{\hbar \alpha} \xi} \dd{\xi}
$$

其中 $\alpha = \sqrt{\frac{m \omega}{\hbar}}$ ，带入线性谐振子的能量本征态表达式

$$
\psi_{n}(\xi)=(-1)^{n} \sqrt{\frac{1}{\sqrt{\pi} 2^{n} n !}} \mathrm{e}^{\frac{\xi^{2}}{2}} \dv[n]{}{\xi} \mathrm{e}^{-\xi^{2}}
$$

所以上述积分就是

$$
\begin{gathered}
\phi_{n} (p) = \frac{(-1)^{n}}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} \int_{-\infty}^{\infty} e^{\frac{\xi^{2}}{2}} e^{- \frac{ip}{\hbar \alpha} \xi} \dv[n]{}{\xi} e^{- \xi^{2}} \dd{\xi} \\ =
\frac{1}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} \int_{-\infty}^{\infty} \dv[n]{}{\xi} \left(e^{\frac{\xi^{2}}{2} - \frac{i p}{\hbar \alpha} \xi}\right) e^{- \xi^{2}} \dd{\xi} \\ =
\frac{1}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} \int_{- \infty}^{\infty} \dv[n]{}{\xi} \left(e^{\frac{1}{2} (\xi - \frac{ip}{\hbar \alpha})^{2} + \frac{p^{2}}{2 \hbar^{2} \alpha^{2}}} \right) e^{- \xi^{2}} \dd{\xi}
\end{gathered}
$$

利用提示中的定理

$$
\pdv[n]{}{\xi} = i^{n} \pdv[n]{}{\eta}
$$

其中 $\eta = \frac{p}{\hbar \alpha}$，所以上面那个积分可以表示为

$$
\begin{gathered}
\frac{1}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} \int_{- \infty}^{\infty} i^{n} \pdv[n]{}{\eta} \left(e^{\frac{1}{2} (\xi - i \eta)^{2}} \right) e^{\frac{\eta^{2}}{2}} e^{- \xi^{2}} \dd{\xi} \\ =
\frac{i^{n}}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} e^{\frac{\eta^{2}}{2}} \pdv[n]{}{\eta} \int_{- \infty}^{\infty}  \left(e^{\frac{1}{2} (\xi - i \eta)^{2}} \right) e^{- \xi^{2}} \dd{\xi} \\ =
\frac{i^{n}}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} e^{\frac{\eta^{2}}{2}} \pdv[n]{}{\eta} e^{- \eta^{2}} \int_{- \infty}^{\infty} e^{-\frac{1}{2} (\xi + i \eta)^{2}} \dd{\xi}  \\ =
\frac{i^{n}}{\alpha} \sqrt{\frac{1}{2^{n} \hbar \pi^{\frac{1}{2}} n!}} e^{\frac{\eta^{2}}{2}} \dv[n]{}{\eta} e^{- \eta^{2}}
\end{gathered}
$$

所以

$$
\phi_{n} (p) = i^{n} \sqrt{\frac{1}{m \omega}} \sqrt{\frac{1}{\sqrt{\pi} 2^{n} n!}} e^{\frac{\eta^{2}}{2}} \dv[n]{}{\eta} e^{- \eta^{2}}
$$

4.4.1 在经典力学里，动量和角动量都是矢量，二者的区别只是动量是极矢量而角动量是轴矢量。但是在量子力学里动量和角动量的区别要大得多。请指出这些区别都有哪些？

量子力学中动量与角动量的主要区别：

1. 动量算符各分量对易，角动量算符各分量不对易。
2. 动量本征值连续，角动量本征值离散。
3. 动量是平移生成元，角动量是旋转生成元。

4.4.2 绕定轴转动的转子的 Hamiltonian 是 $\hat{H}=\frac{1}{2 I} \hat{L}_{z}^{2}$（$\hat{L}_{z}=-\mathrm{i} \hbar \frac{\mathrm{d}}{\mathrm{d} \varphi}$），其中 $\varphi$ 是转动角，$I$ 是对定轴的转动惯量。求它的能级和归一化的能量本征函数，并指出每个能级的简并度。
本征方程

$$
-\frac{\hbar^{2}}{2I} \dv[2]{\psi}{\varphi} = E \psi
$$

 的解为 $\psi_{m}(\varphi)= C_{m} e^{im\varphi}$，$m$ 为整数。代入得能量

$$
E_{m} = \frac{\hbar^{2} m^{2}}{2I}, \quad m=0,\pm1,\pm2,\dots
$$

对应的归一化本征函数为 $\psi_{m}(\varphi)=\frac{1}{\sqrt{2\pi}} e^{im\varphi}$
简并度：$m=0$ 时非简并；$|m|\ge 1$ 时二重简并。

4.4.3 在量子力学里，满足 $[\hat{L}_{i}, \hat{S}]=0$（$i=x, y, z$）的算符 $\hat{S}$ 称为标量算符，满足 $[\hat{L}_{i}, \hat{V}_{j}]=\mathrm{i} \hbar \varepsilon_{i j k} \hat{V}_{k}$

（$i, j, k=1,2,3=x, y, z$）的算符 $\vec{\hat{V}}=\left(\hat{V}_{x}, \hat{V}_{y}, \hat{V}_{z}\right)$ 称为矢量算符。求证：(a) $\hat{\vec{r}}$ 和 $\hat{\vec{p}}$ 是矢量算符。

利用 $\hat{L}_{i} = \epsilon_{ikl} \hat{x}_{k} \hat{p}_{l}$ 及基本对易式 $[x_{i}, p_{j}]=i\hbar\delta_{ij}$，计算得

$$
[\hat{L}_{i}, \hat{x}_{j}] = [\epsilon_{ikl} \hat{x}_{k} \hat{p}_{l}, \hat{x}_{j}] = \epsilon_{ikl} \hat{x}_{k} [\hat{p}_{l}, \hat{x}_{j}] = i\hbar \epsilon_{ijk} \hat{x}_{k}
$$

$$
[\hat{L}_{i}, \hat{p}_{j}] = [\epsilon_{ikl} \hat{x}_{k} \hat{p}_{l}, \hat{p}_{j}] = [\hat{x}_{k}, \hat{p}_{j}] \epsilon_{ikl} \hat{p}_{l} = i\hbar \epsilon_{ijk} \hat{p}_{k}
$$

故 $\hat{\vec{r}}$ 和 $\hat{\vec{p}}$ 均为矢量算符。

(b) 若 $\hat{\vec{a}}$ 和 $\hat{\vec{c}}$ 是矢量算符，则 $\hat{\vec{a}} \cdot \hat{\vec{c}}=\hat{a}_{x} \hat{c}_{x}+\hat{a}_{y} \hat{c}_{y}+\hat{a}_{z} \hat{c}_{z}$ 是标量算符。

计算

$$
[\hat{L}_{i}, \hat{a}_{j} \hat{c}_{j}] = [\hat{L}_{i}, \hat{a}_{j}] \hat{c}_{j} + \hat{a}_{j} [\hat{L}_{i}, \hat{c}_{j}] = i\hbar \epsilon_{ijk} (\hat{a}_{k} \hat{c}_{j} + \hat{a}_{j} \hat{c}_{k}).
$$

交换第二项指标 $j \leftrightarrow k$，得 $\epsilon_{ijk} \hat{a}_{j} \hat{c}_{k} = -\epsilon_{ijk} \hat{a}_{k} \hat{c}_{j}$，两项相消，故 $[\hat{L}_{i}, \hat{S}]=0$，即 $\hat{S}$ 为标量算符。

4.4.4 若 $L_{z}$ 有确定值，问 $\bar{L}_{x}, \bar{L}_{y}=$？提示：其实这里无需用到 $\hat{L}_{x}, \hat{L}_{y}$ 的表达式。

若 $\hat{L}_{z}$ 有确定值（态为 $\hat{L}_{z}$ 的本征态），由于 $[\hat{L}_{z}, \hat{L}_{x}] = i\hbar \hat{L}_{y} \neq 0$，$[\hat{L}_{z}, \hat{L}_{y}] = -i\hbar \hat{L}_{x} \neq 0$，$\hat{L}_{x}$ 和 $\hat{L}_{y}$ 与 $\hat{L}_{z}$ 不对易，因此它们没有确定值。但是我们可以利用对易关系求出其期望

$$
i \hbar \hat{L}_{y} \ket{\psi} = \comm{\hat{L}_{z}}{\hat{L}_{x}} \ket{\psi} = (\hat{L}_{z} - L_{z}) \hat{L}_{x} \ket{\psi}
$$

所以对上式平均之后得到 $\bar{L}_{x} = 0$，同理 $\bar{L}_{y} = 0$

## 第5次作业

### 第五章 量子力学中的对称性与守恒量

5.1.1 自由运动粒子的角动量 $\vec{L}=(\hat{L}_{x}, \hat{L}_{y}, \hat{L}_{z})$ 是不是守恒量? 请证明你的结论。

自由运动粒子的角动量 $\vec{L} = (\hat{L}_{x}, \hat{L}_{y}, \hat{L}_{z})$ 是守恒量。 
自由粒子的 Hamiltonian 为 $\hat{H} = \frac{\hat{p}^{2}}{2m} = -\frac{\hbar^{2}}{2m} \nabla^{2}$，角动量算符分量为 $\hat{L}_{i} = \epsilon_{ijk} \hat{r}_{j} \hat{p}_{k}$，守恒量要求算符与 Hamiltonian 对易，即 $[\hat{L}_{i}, \hat{H}] = 0$，由于 $\hat{H}$ 正比于 $\hat{p}^{2}$，只需证明 $[\hat{L}_{i}, \hat{p}^{2}] = 0$，利用对易关系 $[\hat{L}_{i}, \hat{p}_{j}] = i\hbar \epsilon_{ijk} \hat{p}_{k}$，计算
$$
[\hat{L}_{i}, \hat{p}^{2}] = [\hat{L}_{i}, \sum_{j} \hat{p}_{j}^{2}] = \sum_{j} \left( \hat{p}_{j} [\hat{L}_{i}, \hat{p}_{j}] + [\hat{L}_{i}, \hat{p}_{j}] \hat{p}_{j} \right) = \sum_{j} \left( \hat{p}_{j} (i\hbar \epsilon_{ijk} \hat{p}_{k}) + (i\hbar \epsilon_{ijk} \hat{p}_{k}) \hat{p}_{j} \right)
$$
由于动量算符分量对易 $[\hat{p}_{j}, \hat{p}_{k}] = 0$，有 $\hat{p}_{j} \hat{p}_{k} = \hat{p}_{k} \hat{p}_{j}$，因此
$$
[\hat{L}_{i}, \hat{p}^{2}] = i\hbar \sum_{j,k} \epsilon_{ijk} (\hat{p}_{j} \hat{p}_{k} + \hat{p}_{k} \hat{p}_{j}) = 2i\hbar \sum_{j,k} \epsilon_{ijk} \hat{p}_{j} \hat{p}_{k}
$$
对于固定 $i$，$\epsilon_{ijk}$ 关于 $j,k$ 反对称，而 $\hat{p}_{j} \hat{p}_{k}$ 对称，求和为零，故 $[\hat{L}_{i}, \hat{p}^{2}] = 0$，因此 $[\hat{L}_{i}, \hat{H}] = 0$，角动量各分量均为守恒量。

5.1.2 求证 Feynman-Hellmann 定理: 若系统的能级和波函数分别为 $E_{n}$ 和 $\psi_{n}$，系统的 Hamiltonian 算符依赖于一个参数 $\lambda$，则 
$$
\frac{\partial E_{n}}{\partial \lambda}=\left(\psi_{n}, \frac{\partial \hat{H}}{\partial \lambda} \psi_{n}\right)=\int \psi_{n}^{*} \frac{\partial \hat{H}}{\partial \lambda} \psi_{n} \, \mathrm{d}\tau
$$
证明：
$$
E_{n} = \langle \psi_{n} | \hat{H} | \psi_{n} \rangle
$$
所以
$$
\pdv{E_{n}}{\lambda} = \langle \psi_{n} | \pdv{\hat{H}}{\lambda} | \psi_{n} \rangle + \langle \pdv{\psi_{n}}{\lambda} | \hat{H} | \psi_{n} \rangle + \langle \psi_{n} | \hat{H} | \pdv{\psi_{n}}{\lambda} \rangle
$$
注意到
$$
\langle \psi_{n} | \hat{H} | \pdv{\psi_{n}}{\lambda} \rangle = \langle \hat{H}^{\dagger} \psi_{n} | \pdv{\psi_{n}}{\lambda} \rangle = \langle \pdv{\psi_{n}}{\lambda} | \hat{H}^{\dagger} \psi_{n} \rangle^{*} = \langle \pdv{\psi_{n}}{\lambda} | \hat{H} \psi_{n} \rangle^{*}
$$

上述最后一步利用了 Hamiltonian 的厄米性。所以
$$
\begin{gathered}
\pdv{E_{n}}{\lambda} = \langle \psi_{n} | \pdv{\hat{H}}{\lambda} | \psi_{n} \rangle + \langle \pdv{\psi_{n}}{\lambda} | \hat{H}  \psi_{n} \rangle + \langle \pdv{\psi_{n}}{\lambda} | \hat{H} \psi_{n} \rangle^{*} \\ =
\langle \psi_{n} | \pdv{\hat{H}}{\lambda} | \psi_{n} \rangle + E_{n}  \left( \langle \pdv{\psi_{n}}{\lambda} | \psi_{n} \rangle + \langle \pdv{\psi_{n}}{\lambda} | \psi_{n} \rangle^{*} \right) \\ =
\langle \psi_{n} | \pdv{\hat{H}}{\lambda} | \psi_{n} \rangle + E_{n}  \left( \langle \pdv{\psi_{n}}{\lambda} | \psi_{n} \rangle + \langle  \psi_{n} | \pdv{\psi_{n}}{\lambda} \rangle \right) = \langle \psi_{n} | \pdv{\hat{H}}{\lambda} | \psi_{n} \rangle
\end{gathered}
$$
5.2.1 一个带电量 $q$ 的粒子在匀强电场 $\vec{E}=|\vec{E}|\vec{e}_{z}$ 中运动，它有哪些基本的（函数独立的）守恒量? 请证明你的结论。

取电势 $\phi = -|\vec{E}| \hat{z}$，则 Hamiltonian 为
$$
\hat{H} = \frac{\hat{p}_{x}^{2} + \hat{p}_{y}^{2} + \hat{p}_{z}^{2}}{2m} - q |\vec{E}| \hat{z}
$$

1. 能量守恒：$\hat{H}$ 不显含时间，故 $\frac{\mathrm{d}\hat{H}}{\mathrm{d}t} = 0$

2. $\hat{p}_{x}$ 和 $\hat{p}_{y}$ 守恒：计算对易子
   $[\hat{p}_{x}, \hat{H}] = [\hat{p}_{x}, -q|\vec{E}| \hat{z}] = -q|\vec{E}| [\hat{p}_{x}, \hat{z}] = 0$，同理 $[\hat{p}_{y}, \hat{H}] = 0$，故 $\hat{p}_{x}, \hat{p}_{y}$ 与 $\hat{H}$ 对易，是守恒量。

3. $\hat{L}_{z}$ 守恒：$\hat{L}_{z} = x \hat{p}_{y} - y \hat{p}_{x}$
   $$
   [\hat{L}_{z}, \hat{H}] = [\hat{L}_{z}, \frac{\hat{p}^{2}}{2m}] + [\hat{L}_{z}, -q|\vec{E}| z]
   $$
   由 5.1.1 知 $[\hat{L}_{z}, \hat{p}^{2}] = 0$，故第一项为零。第二项
   $$
   [\hat{L}_{z}, z] = [x \hat{p}_{y} - y \hat{p}_{x}, z] = x [\hat{p}_{y}, z] - y [\hat{p}_{x}, z] + [x, z] \hat{p}_{y} - [y, z] \hat{p}_{x} = 0
   $$
   因此 $[\hat{L}_{z}, \hat{H}] = 0$，$\hat{L}_{z}$ 守恒。

这些守恒量函数独立，构成基本守恒量集。

5.2.2 (选做) 从变换不变性导致守恒定律的角度来看，几率守恒来自波函数的相位变换不变性。

(a) 证明：对作用量 $S=\int\left[\frac{\mathrm{i}\hbar}{2}\left(\Psi^{*} \left(\partial_{t} \Psi\right)-\left(\partial_{t} \Psi^{*}\right)\Psi\right)-\frac{\hbar^{2}}{2m}\nabla\Psi^{*} \cdot \nabla\Psi\right]\mathrm{d}^{3}\vec{r}\,\mathrm{d}t$ 应用最小作用量原理 $\delta S=0$（对 $\Psi, \Psi^{*}$ 做变分）得到 Schrödinger 方程 $\mathrm{i}\hbar \frac{\partial \Psi}{\partial t}+\frac{\hbar^{2}}{2m}\nabla^{2}\Psi=0$
$$
S = \int \dd[4]{x} \left[\frac{\mathrm{i}\hbar}{2}\left(\Psi^{*} \left(\partial_{t} \Psi\right)-\left(\partial_{t} \Psi^{*}\right)\Psi\right)-\frac{\hbar^{2}}{2m}\nabla\Psi^{*} \cdot \nabla\Psi\right]
$$

$$
\delta S = \int \dd[4]{x} \delta \Psi \left[- i \hbar(\partial_{t} \Psi^{*}) + \frac{\hbar^{2}}{2m} \nabla^{2} \Psi^{*}\right] = 0
$$

所以
$$
- i \hbar(\partial_{t} \Psi^{*}) + \frac{\hbar^{2}}{2m} \nabla^{2} \Psi^{*} = 0
$$
即
$$
\mathrm{i}\hbar \frac{\partial \Psi}{\partial t}+\frac{\hbar^{2}}{2m}\nabla^{2}\Psi=0
$$
(b) $\Psi, \Psi^{*}$ 的无穷小相位变换是 $\delta \Psi=\mathrm{e}^{\mathrm{i}\epsilon/\hbar}\Psi-\Psi\approx\frac{\mathrm{i}}{\hbar}\epsilon\Psi, \delta \Psi^{*}=-\frac{\mathrm{i}}{\hbar}\epsilon\Psi^{*}$，利用 $\mathcal{L}$ 在这个变换下的不变性和诺特定理导出几率守恒。

考虑拉格朗日量在这个变换下的行为
$$
\begin{gathered}
\delta \mathcal{L} = \left(- i \hbar(\partial_{t} \Psi^{*}) + \frac{\hbar^{2}}{2m} \nabla^{2} \Psi^{*}\right) \delta \Psi + \left(\mathrm{i}\hbar \frac{\partial \Psi}{\partial t}+\frac{\hbar^{2}}{2m}\nabla^{2}\Psi\right) \delta \Psi^{*} \\ = 
\left(- i \hbar(\partial_{t} \Psi^{*}) + \frac{\hbar^{2}}{2m} \nabla^{2} \Psi^{*}\right) \frac{i}{\hbar} \epsilon \Psi - \left(\mathrm{i}\hbar \frac{\partial \Psi}{\partial t}+\frac{\hbar^{2}}{2m}\nabla^{2}\Psi\right) \frac{i}{\hbar} \epsilon \Psi^{*}
\end{gathered}
$$
所以由于无穷小变换下的拉格朗日量不变性
$$
- i \hbar \Psi \pdv{\Psi^{*}}{t} + \frac{\hbar^{2}}{2m} \Psi \nabla^{2} \Psi^{*} -\mathrm{i}\hbar \Psi^{*} \frac{\partial \Psi}{\partial t} - \frac{\hbar^{2}}{2m}\Psi^{*} \nabla^{2}\Psi = 0
$$

$$
- i \hbar \pdv{}{t} (\Psi^{*} \Psi) + \frac{\hbar^{2}}{2m} \nabla \cdot(\Psi \nabla \Psi^{*} - \Psi^{*} \nabla \Psi) = 0
$$

$$
\Rightarrow \nabla \cdot \left(\frac{i \hbar}{2m} (\Psi \nabla \Psi^{*} - \Psi^{*} \nabla \Psi）\right) + \pdv{}{t} (\Psi^{*} \Psi) = 0
$$

即流守恒方程。

5.3.1 设系统由 3 个全同粒子组成，单粒子有 3 个可能的不同状态 $\psi_{1}, \psi_{2}, \psi_{3}$。问系统有几个可能的状态? 它们的波函数如何用单粒子波函数构成? 分别讨论 (a) 玻色子；(b) 费米子；(c) 经典粒子。玻色子的波函数写出同时包含 $\psi_{1}, \psi_{2}, \psi_{3}$ 的情形作为例子就可以了，经典粒子的波函数就不用写了。

单粒子有三个不同状态 $\psi_{1}, \psi_{2}, \psi_{3}$，系统由三个全同粒子组成。

(a) 玻色子：波函数对称。状态由占据数 $(n_{1}, n_{2}, n_{3})$ 描述，$n_{i} \geq 0$，$n_{1}+n_{2}+n_{3}=3$
可能占据数

- $(3,0,0),\ (0,3,0),\ (0,0,3)$：各1种，共3种。

- $(2,1,0),\ (2,0,1),\ (1,2,0),\ (0,2,1),\ (1,0,2),\ (0,1,2)$：各1种，共6种。

- $(1,1,1)$：1种。 

总状态数：10种。 波函数构造示例

$$
\Psi = \frac{1}{\sqrt{6}} \sum_{P} \psi_{P[1]}(q_{1}) \psi_{P[2]}(q_{2}) \psi_{P[3]}(q_{3})
$$

其中 $P$ 为 $(1,2,3)$ 的排列。

(b) 费米子：波函数反对称。泡利不相容原理允许每个状态最多一个粒子，唯一占据数为 $(1,1,1)$，故只有1个状态。 
波函数为 Slater 行列式
$$
\Psi = \frac{1}{\sqrt{6}} \begin{vmatrix}
\psi_{1}(q_{1}) & \psi_{1}(q_{2}) & \psi_{1}(q_{3}) \\
\psi_{2}(q_{1}) & \psi_{2}(q_{2}) & \psi_{2}(q_{3}) \\
\psi_{3}(q_{1}) & \psi_{3}(q_{2}) & \psi_{3}(q_{3})
\end{vmatrix}
$$

(c) 经典粒子：粒子可区分，每个粒子独立选择状态，总状态数 $3^{3} = 27$。波函数无需对称化，为简单乘积形式。

5.3.2 把两个电子放入一维无限深势阱 $(0<x<L)$ 中，不考虑它们之间的相互作用。对于：(a) 两个电子都处在势阱的基态 $\psi_{0}(x)$；(b) 一个电子处在基态，另一个处在第一激发态 $\psi_{1}(x)$；分别写出它们可能的状态的波函数。可以用 $|\uparrow\rangle$ 和 $|\downarrow\rangle$ 分别代表电子的自旋向上和自旋向下。

不考虑相互作用，单粒子基态 $\psi_{0}(x) = \sqrt{\frac{2}{L}} \sin(\frac{\pi x}{L})$，第一激发态 $\psi_{1}(x) = \sqrt{\frac{2}{L}} \sin(\frac{2\pi x}{L})$。电子为费米子，总波函数反对称。

(a) 两个电子均处于基态：空间波函数相同，故自旋部分必须反对称以满足泡利原理。唯一可能为自旋单态
$$
\Psi(x_{1}, x_{2}) = \psi_{0}(x_{1})\psi_{0}(x_{2}) \cdot \frac{1}{\sqrt{2}} (\ket{\uparrow\downarrow} - \ket{\downarrow\uparrow})
$$

(b) 一个电子基态，另一个第一激发态：空间波函数可构造对称与反对称组合
$$
\psi_{S}(x_{1}, x_{2}) = \frac{1}{\sqrt{2}} [\psi_{0}(x_{1})\psi_{1}(x_{2}) + \psi_{1}(x_{1})\psi_{0}(x_{2})], \quad \psi_{A}(x_{1}, x_{2}) = \frac{1}{\sqrt{2}} [\psi_{0}(x_{1})\psi_{1}(x_{2}) - \psi_{1}(x_{1})\psi_{0}(x_{2})]
$$
总波函数反对称，有两种情况

1. 空间对称 $\psi_{S}$ 与自旋单态 $\chi_{00} = \frac{1}{\sqrt{2}} (\ket{\uparrow\downarrow} - \ket{\downarrow\uparrow})$ 结合
   $$
   \Psi_{1} = \psi_{S}(x_{1}, x_{2}) \cdot \chi_{00}
   $$

2. 空间反对称 $\psi_{A}$ 与自旋三重态（对称）结合，三重态有三个
   $$
   \Psi_{2} = \psi_{A}(x_{1}, x_{2}) \cdot \ket{\uparrow\uparrow}, \quad \Psi_{3} = \psi_{A}(x_{1}, x_{2}) \cdot \frac{1}{\sqrt{2}} (\ket{\uparrow\downarrow} + \ket{\downarrow\uparrow}), \quad \Psi_{4} = \psi_{A}(x_{1}, x_{2}) \cdot \ket{\downarrow\downarrow}
   $$
   共四个可能状态。

5.4.1 (选做) 在 Schrödinger 图画中，Hamiltonian 算符常常可以分解为 $\hat{H}^{(\mathrm{S})}=\hat{H}_{0}+\hat{V}^{(\mathrm{S})}$，$\hat{H}_{0}$ 描述自由粒子的运动，而 $\hat{V}^{(\mathrm{S})}$ 描述粒子间的相互作用。这时候可以采用相互作用图画 interaction picture。把该图画中的波函数记为 $\Psi^{(\mathrm{I})}$，力学量算符记为 $\hat{F}^{(\mathrm{I})}$，那么它们由 $\Psi^{(\mathrm{S})}$ 和 $\hat{F}^{(\mathrm{S})}$ 经下面的幺正变换给出：$\Psi^{(\mathrm{I})}=\mathrm{e}^{\frac{i}{\hbar}\hat{H}_{0t}}\Psi^{(\mathrm{S})}$，$\hat{F}^{(\mathrm{I})}=\mathrm{e}^{\frac{i}{\hbar}\hat{H}_{0t}}\hat{F}^{(\mathrm{S})}\mathrm{e}^{-\frac{i}{\hbar}\hat{H}_{0t}}$。问：在相互作用图画中，$\mathrm{i}\hbar \frac{\partial \Psi^{(\mathrm{I})}}{\partial t}=$?， $\mathrm{i}\hbar \frac{\partial \hat{F}^{(\mathrm{I})}}{\partial t}=$? 
Schrödinger 绘景中 $\hat{H}^{(S)} = \hat{H}_{0} + \hat{V}^{(S)}$，相互作用绘景定义为
$$
\Psi^{(I)} = e^{\frac{i}{\hbar}\hat{H}_{0} t} \Psi^{(S)}, \quad \hat{F}^{(I)} = e^{\frac{i}{\hbar} \hat{H}_{0} t} \hat{F}^{(S)} e^{-\frac{i}{\hbar}\hat{H}_{0} t}
$$

在相互作用绘景中波函数满足
$$
i\hbar \frac{\partial \Psi^{(I)}}{\partial t} = i\hbar \frac{\partial}{\partial t} \left( e^{\frac{i}{\hbar}\hat{H}_{0} t} \Psi^{(S)} \right) = i\hbar \left( \frac{i}{\hbar} \hat{H}_{0} e^{\frac{i}{\hbar}\hat{H}_{0} t} \Psi^{(S)} + e^{\frac{i}{\hbar} \hat{H}_{0} t} \frac{\partial \Psi^{(S)}}{\partial t} \right)
$$
利用 Schrödinger 方程 $i\hbar \frac{\partial \Psi^{(S)}}{\partial t} = \hat{H}^{(S)} \Psi^{(S)}$，代入得

$$
i\hbar \frac{\partial \Psi^{(I)}}{\partial t} = -\hat{H}_{0} e^{\frac{i}{\hbar}\hat{H}_{0} t} \Psi^{(S)} + e^{\frac{i}{\hbar} \hat{H}_{0}} (\hat{H}_{0} + \hat{V}^{(S)}) \Psi^{(S)} = e^{\frac{i}{\hbar}\hat{H}_{0} t} \hat{V}^{(S)} \Psi^{(S)}
$$
注意到 $e^{\frac{i}{\hbar}\hat{H}_{0} t} \hat{V}^{(S)} \Psi^{(S)} = \ \hat{V}^{(I)} \Psi^{(I)}$，因此
$$
i\hbar \frac{\partial \Psi^{(I)}}{\partial t} = \hat{V}^{(I)} \Psi^{(I)}
$$
算符方程  
$$
i\hbar \frac{\partial \hat{F}^{(I)}}{\partial t} = i\hbar \frac{\partial}{\partial t} \left( e^{\frac{i}{\hbar}\hat{H}_{0} t} \hat{F}^{(S)} e^{-\frac{i}{\hbar}\hat{H}_{0} t} \right)
$$
求导得三项
$$
i\hbar \frac{\partial \hat{F}^{(I)}}{\partial t} = i\hbar \left[ \frac{i}{\hbar} \hat{H}_{0} e^{\frac{i}{\hbar}\hat{H}_{0} t} \hat{F}^{(S)} e^{-\frac{i}{\hbar}\hat{H}_{0} t} + e^{\frac{i}{\hbar} \hat{H}_{0} t} \frac{\partial \hat{F}^{(S)}}{\partial t} e^{-\frac{i}{\hbar} \hat{H}_{0} t} + e^{\frac{i}{\hbar}\hat{H}_{0} t} \hat{F}^{(S)} \left( -\frac{i}{\hbar} \hat{H}_{0} e^{-\frac{i}{\hbar} \hat{H}_{0} t} \right) \right]
$$
化简为
$$
i\hbar \frac{\partial \hat{F}^{(I)}}{\partial t} = [\hat{F}^{(I)}, \hat{H}_{0}] + i\hbar e^{\frac{i}{\hbar}\hat{H}_{0} t} \frac{\partial \hat{F}^{(S)}}{\partial t} e^{-\frac{i}{\hbar}\hat{H}_{0} t}
$$
若 $\hat{F}^{(S)}$ 不显含时间，则 $\frac{\partial \hat{F}^{(S)}}{\partial t} = 0$，则上面的结论可以进一步简化为
$$
i\hbar \frac{\partial \hat{F}^{(I)}}{\partial t} = [\hat{F}^{(I)}, \hat{H}_{0}]
$$

## 第6次作业

### 第六章 中心力场

6.1.1 把二体系统的动能算符化为质心的动能算符与约化粒子的动能算符之和。

引入 $\vec{R} = \frac{m_{1}\vec{r}_{1} + m_{2} \vec{r}_{2}}{m_{1} + m_{2}}$, $\vec{r} = \vec{r}_{1} - \vec{r}_{2}$，此时质心动能以及约化粒子的动能算符可以化为

$$
\hat{T} = - \frac{\hbar^{2}}{2M} \nabla_{R}^{2} - \frac{\hbar^{2}}{2\mu} \nabla_{r}^{2}
$$

考虑

$$
\begin{gathered}
\nabla^{2}_{r_{1}} = \sum_{i} \pdv[2]{}{r_{1i}} = \sum_{i} \pdv{}{r_{1i}} \left(\sum_{j} \pdv{R_{j}}{r_{1i}} \pdv{}{R_{j}} + \pdv{r_{j}}{r_{1i}} \pdv{}{r_{j}}\right) \\ =
\sum_{i} \pdv{}{r_{1i}} \left(\frac{m_{1}}{m_{1} + m_{2}} \pdv{}{R_{i}} + \pdv{}{r_{i}}\right) = \sum_{i} \left(\frac{m_{1}^{2}}{(m_{1} + m_{2})^{2}} \pdv[2]{}{R_{i}} + 2 \frac{m_{1}}{m_{1} + m_{2}} \pdv{}{R_{i}} \pdv{}{r_{i}} + \pdv[2]{}{r_{i}}\right)
\end{gathered}
$$

$$
\begin{gathered}
\nabla^{2}_{r_{2}} = \sum_{i} \pdv[2]{}{r_{2i}} = \sum_{i} \pdv{}{r_{2i}} \left(\sum_{j} \pdv{R_{j}}{r_{2i}} \pdv{}{R_{j}} + \pdv{r_{j}}{r_{2i}} \pdv{}{r_{j}}\right) \\ =
\sum_{i} \pdv{}{r_{2i}} \left(\frac{m_{2}}{m_{1} + m_{2}} \pdv{}{R_{i}} - \pdv{}{r_{i}}\right) = \sum_{i} \left(\frac{m_{2}^{2}}{(m_{1} + m_{2})^{2}} \pdv[2]{}{R_{i}} - 2 \frac{m_{2}}{m_{1} + m_{2}} \pdv{}{R_{i}} \pdv{}{r_{i}} + \pdv[2]{}{r_{i}}\right)
\end{gathered}
$$

所以动能算符可以化为

$$
\begin{gathered}
\hat{T} = - \frac{\hbar^{2}}{2 m_{1}} \nabla_{r_{1}}^{2} - \frac{\hbar^{2}}{2 m_{2}} \nabla^{2}_{r_{2}} \\ =
- \frac{\hbar^{2} (m_{1} + m_{2})}{2 (m_{1} + m_{2})^{2}} \nabla_{R}^{2} - \frac{\hbar^{2}}{2} \left(\frac{1}{m_{1}} + \frac{1}{m_{2}}\right) \nabla_{r}^{2} \\ =
- \frac{\hbar^{2}}{2M} \nabla_{R}^{2} - \frac{\hbar^{2}}{2\mu} \nabla_{r}^{2}
\end{gathered}
$$

6.1.2 质量为 $\mu$ 的粒子在势阱

$$
V(r)=
\begin{cases}
-V_{0} \ (< 0), & (0 \le r < a) \\\
0, & (r > a)
\end{cases}
$$

中运动并处于束缚的 S 态，求它的能量 $E$ 应满足的超越方程。问这个势阱窄 ($a$ 小) 和浅 ($V_{0}$ 小) 到什么程度时，它会容纳不了任何束缚态？

此时波函数满足的径向方程为

$$
\frac{1}{r^{2}} \dv{}{r}(r^{2} \dv{R}{r}) + \frac{2 \mu}{\hbar^{2}} \left(E - V (r) - \frac{l(l + 1) \hbar^{2}}{2 \mu r^{2}}\right) R = 0
$$

引入 $u (r) = r R(r)$ ，方程可以化为

$$
\dv[2]{u}{r} + \frac{2 \mu}{\hbar^{2}} \left(E - V (r) - \frac{l(l + 1) \hbar^{2}}{2 \mu r^{2}}\right) u = 0
$$

所以 $s$ 束缚态需要满足

$$
\begin{cases}
\dv[2]{u}{r} + \frac{2 \mu}{\hbar^{2}} \left(E + V_{0}\right) u = 0 \quad (r < a) \\
\dv[2]{u}{r} + \frac{2 \mu E}{\hbar^{2}} u = 0 \quad (r > a)
\end{cases}
$$

令 $k = \sqrt{\frac{2 \mu (E + V_{0})}{\hbar^{2}}}$, $\kappa = \sqrt{-\frac{2 \mu E}{\hbar^{2}}}$，此时方程的解可以表示为

$$
u (r) = \begin{cases}
A \sin (kr) \quad (r < a) \\
B e^{- \kappa r} \quad (r \geq a)
\end{cases}
$$

满足边界条件要求

$$
\tan ka = - \frac{k}{\kappa}
$$

所以势阱内能够容纳束缚态的条件是

$$
\tan(\sqrt{\frac{2 \mu (E + V_{0})}{\hbar^{2}}} a) = - \sqrt{\frac{E + V_{0}}{-E}}
$$

令 $x = \frac{-E}{V_{0}}$，上述条件可以化为

$$
\tan (\frac{\sqrt{2 \mu V_{0}}}{\hbar} a \sqrt{1 - x}) = - \sqrt{\frac{1 - x}{x}}
$$

所以

$$
\sin (\frac{\sqrt{2 \mu V_{0}}}{\hbar} a \sqrt{1 - x}) = \sqrt{1 - x}
$$

有解的条件就是

$$
\frac{\sqrt{2 \mu V_{0}}}{\hbar} a > \frac{\pi}{2}
$$

即

$$
V_{0} a^{2} > \frac{\pi^{2} \hbar^{2}}{8 \mu}
$$

6.3.1 在直角坐标系和球坐标系中分别算出三维各向同性谐振子的能级 $E_{N}$ 的简并度。

在直角坐标系中

$$
\hat{H} = - \frac{\hbar^{2}}{2 \mu} \left(\pdv[2]{}{x} + \pdv[2]{}{y} + \pdv[2]{}{z}\right) + \frac{1}{2} \mu \omega^{2} (x^{2} + y^{2} + z^{2})
$$

所以我们可以简单的对于三个方向分离变量

$$
- \frac{\hbar^{2}}{2 \mu} \dv[2]{}{x} \psi (x) + \frac{1}{2} \mu \omega^{2} x^{2} \psi(x) = E_{x} \psi(x)
$$

根据一维谐振子的解的结论，容易得到

$$
E_{x} = (n_{x} + \frac{1}{2}) \hbar \omega
$$

类似地处理另外两个方向，可以得到

$$
E = (n_{x} + n_{y} + n_{z} + \frac{3}{2}) \hbar \omega
$$

所以对于 $E_{N}$，能量简并度为

$$
g_{N} = \frac{(N + 2)(N + 1)}{2}
$$

在球坐标下处理这个问题

$$
\hat{H} = - \frac{\hbar^{2}}{2 \mu r^{2}} \pdv{}{r} \left(r^{2} \pdv{}{r}\right) + \frac{\hat{L^{2}}}{2 \mu r^{2}} + \frac{1}{2} \mu \omega^{2} r^{2}
$$

所以径向方程就是

$$
\dv[2]{}{r} u + \frac{2 \mu}{\hbar^{2}} \left(E - \frac{\mu \omega^{2}}{2} r^{2} - \frac{l (l + 1) \hbar^{2}}{2 \mu r^{2}} \right) u = 0
$$

进行代换 $\rho = \sqrt{\frac{\mu \omega}{\hbar}} r = \alpha r$, $\lambda = \frac{2 E}{\hbar \omega}$，此时

$$
u'' + \lambda u - \rho^{2} u - \frac{l (l + 1)}{\rho^{2}} u = 0
$$

即

$$
R'' (\rho) + \frac{2}{\rho} R'(\rho) + \left(\lambda - \rho^{2} - \frac{l (l + 1)}{\rho^{2}}\right) R (\rho) = 0
$$

进行换元

$$
R (\rho) = f (\rho) \rho^{l} e^{- \frac{\rho^{2}}{2}}
$$

径向方程化简为

$$
f'' (\rho) + 2 \left(\frac{l + 1}{\rho} - \rho\right) f' (\rho) + (\lambda - 2l - 3) f (\rho) = 0
$$

再进行代换 $\xi = \rho^{2}$，方程化为标准的合流超几何方程形式

$$
\xi \dv[2]{f}{\xi} + \left(l + \frac{3}{2} - \xi\right) \dv{f}{\xi} + \frac{1}{4} (\lambda - 2l - 3) f = 0
$$

得到系数的递推形式

$$
c_{k + 1} = \frac{2l + 3 + 4k - \lambda}{2 (2l + 3 + 2k) (k + 1)} c_{k}
$$

所以定态的能量量子化条件为

$$
2l + 3 + 4k = \lambda
$$

即

$$
E = (2k + l + \frac{3}{2}) \hbar \omega
$$

所以能级 $E_{N}$ 对应的角动量可以是

$$
l = N, N-2, N-4, \cdots
$$

对于单个 $l$，磁量子数的简并度为 $2l + 1$，所以总的简并度为

$$
g_{N} = \sum_{j = 0}^{[\frac{N}{2}]}(2N - 4j + 1) = \frac{(N + 2) (N + 1)}{2}
$$

6.3.2 三维各向同性谐振子的第一激发态 $N=1$ 的能级是 3 重简并的。请分别在直角坐标系中和球坐标系中写出它的简并波函数，并且给出从直角坐标系波函数到球坐标系波函数的变换。

直角坐标系归一化波函数为

$$
\psi_{100}(x,y,z) = \sqrt{2} \alpha^{5/2} \pi^{-3/4} x e^{-\alpha^{2} r^{2}/2}
$$

$$
\psi_{010}(x,y,z) = \sqrt{2} \alpha^{5/2} \pi^{-3/4} y e^{-\alpha^{2} r^{2}/2}
$$

$$
\psi_{001}(x,y,z) = \sqrt{2} \alpha^{5/2} \pi^{-3/4} z e^{-\alpha^{2} r^{2}/2}
$$

其中 $\alpha = \sqrt{m\omega/\hbar}$

球坐标系中对应量子数 $n=1, l=1, m = -1,0,1$ 的波函数为

$$
\psi_{1,1,0}(r,\theta,\phi) = \sqrt{\frac{8\alpha^{5}}{3\sqrt{\pi}}} r e^{-\alpha^{2} r^{2}/2} Y_{10}(\theta,\phi)
$$

$$
\psi_{1,1,1}(r,\theta,\phi) = \sqrt{\frac{8\alpha^{5}}{3\sqrt{\pi}}} r e^{-\alpha^{2} r^{2}/2} Y_{11}(\theta,\phi)
$$

$$
\psi_{1,1,-1}(r,\theta,\phi) = \sqrt{\frac{8\alpha^{5}}{3\sqrt{\pi}}} r e^{-\alpha^{2} r^{2}/2} Y_{1-1}(\theta,\phi)
$$

其中球谐函数为

$$
Y_{10} = \sqrt{\frac{3}{4\pi}} \cos\theta, \quad Y_{11} = -\sqrt{\frac{3}{8\pi}} \sin\theta e^{i\phi}, \quad Y_{1-1} = \sqrt{\frac{3}{8\pi}} \sin\theta e^{-i\phi}
$$

直角坐标到球坐标的变换关系为

$$
\psi_{z} = \psi_{1,1,0}
$$

$$
\psi_{x} = \frac{1}{\sqrt{2}} (-\psi_{1,1,1} + \psi_{1,1,-1})
$$

$$
\psi_{y} = \frac{i}{\sqrt{2}} (\psi_{1,1,1} + \psi_{1,1,-1})
$$

写成矩阵形式，就是

$$
\begin{pmatrix} \psi_{x} \\ \psi_{y} \\ \psi_{z} \end{pmatrix} =
\begin{pmatrix} -\frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \\ \frac{i}{\sqrt{2}} & 0 & \frac{i}{\sqrt{2}} \\ 0 & 1 & 0 \end{pmatrix}
\begin{pmatrix} \psi_{1,1,1} \\ \psi_{1,1,0} \\ \psi_{1,1,-1} \end{pmatrix}
$$

6.3.3（选做）请在平面极坐标系中求解二维各向同性谐振子，即求出它的能级和各能级的简并度。提示：参看习题 3.4.3。

在平面极坐标下分离变量，得到

$$
\hat{H} = - \frac{\hbar^{2}}{2 \mu} \left(\frac{1}{r}\pdv{}{r} \left(r \pdv{}{r}\right) + \frac{1}{r^{2}} \pdv[2]{}{\theta}\right) + \frac{1}{2} \mu \omega^{2} r^{2}
$$

利用角动量算符以及其本征态的性质，对于角动量本征态

$$
\hat{H} = -\frac{\hbar^{2}}{2 \mu r} \pdv{}{r} \left(r \pdv{}{r}\right) + \frac{\hat{L}^{2}}{2 \mu r^{2}} + \frac{\mu \omega^{2}}{2} r^{2}
$$

分离变量得到径向方程

$$
\frac{1}{r} \dv{}{r} (r \dv{}{r} \psi(r)) + \frac{2 \mu E}{\hbar^{2}} \psi(r) - \frac{m_{l}^{2}}{r^{2}} \psi (r) - \frac{\mu^{2} \omega^{2}}{\hbar^{2}} r^{2} \psi (r) = 0
$$

进行代换 $\alpha = \sqrt{\frac{\mu \omega}{\hbar}}$

$$
\psi''(r) + \frac{1}{r} \psi'(r) + \left(\frac{2 \mu E}{\hbar^{2}} - \alpha^{4} r^{2}-\frac{m_{l}^{2}}{r^{2}}\right) \psi (r) = 0
$$

再代换 $\xi = \alpha r$

$$
\psi'' (\xi) + \frac{\psi' (\xi)}{\xi} + \left(\frac{2 E}{\hbar \omega} - \xi^{2} - \frac{m_{l}^{2}}{\xi^{2}}\right) \psi(\xi) = 0
$$

记 $\lambda = \frac{2 E}{\hbar \omega}$，所以

$$
\psi'' (\xi) + \frac{\psi' (\xi)}{\xi} + \left(\lambda - \xi^{2} - \frac{m_{l}^{2}}{\xi^{2}}\right) \psi(\xi) = 0
$$

根据该方程在近场和远场处的渐近行为，我们进行换元

$$
\psi (\xi) = \xi^{|m_{l}|} e^{- \frac{\xi^{2}}{2}} f (\xi)
$$

带入，化简，得到系数函数的方程

$$
f'' + \left(\frac{2 |m_{l}| + 1}{\xi} - 2 \xi\right) f' + (\lambda - 2 |m_{l}| - 2) f = 0
$$

再进行代换 $\eta = \xi^{2}$，得到

$$
4 \eta f'' + 4 (|m_{l}| + 1 - \eta) f' + (\lambda - 2 |m_{l}| - 2) f = 0
$$

所以递推关系为

$$
c_{k + 1} = \frac{4k + 2 + 2 |m_{l}| - \lambda}{4 (k + 1) (k + |m_{l}| + 1)} c_{k}
$$

所以定态的能量量子化条件是

$$
\lambda = 4 k + 2 |m_{l}| + 2
$$

得到二维谐振子的能级公式

$$
E_{n} = \hbar \omega (n + 1), \quad n = 0,1,2,\dots
$$

其中 $n = 2n_{\rho} + |m_{l}|$，$n_{\rho} = 0,1,2,\dots$ 为径向量子数，$m_{l} = 0, \pm 1, \pm 2, \dots$ 为角动量量子数。

简并度：对于给定 $n$，可能的 $m_{l}$ 值为 $n, n-2, \dots, -n$，非零 $|m_{l}|$ 对应两个简并态（$m_{l} = \pm |m_{l}|$），$m_{l}=0$ 对应一个态，所以简并度为 $n+1$

6.4.1 求电子偶素和缪子 muon 氢原子 (以 muon $(m_{\mu}=207 m_{e})$ 代替氢原子中的电子) 的基态能量。

对于电子偶素，电子和正电子质量相等 $m_{1} = m_{2} = m_{e}$，约化质量 $\mu = m_{e}/2$，基态能量

$$
E_{1}^{Ps} = -\frac{\mu c^{2} \alpha^{2}}{2} = -\frac{1}{2} \cdot \frac{m_{e} c^{2} \alpha^{2}}{2} \approx -6.8 \, \text{eV}
$$

缪子质量 $m_{\mu} = 207 m_{e}$，质子质量 $m_{p} \approx 1836 m_{e}$，约化质量 $\mu \approx 186 m_{e}$，基态能量

$$
E_{1}^{\mu H} = -\frac{\mu c^{2} \alpha^{2}}{2} \approx -186 \times 13.6 \, \text{eV} \approx -2.53 \, \text{keV}
$$

6.4.2 求氢原子基态下的 $\delta x \cdot \delta p_{x}$；这个状态是最小测不准态吗？提示：对这个状态 $\langle x^{2} \rangle = (1/3) \langle r^{2} \rangle$, $\langle p^{2}_{x} \rangle = (1/3) \langle p^{2} \rangle$。

氢原子基态波函数 $\psi_{100}(r) = \frac{1}{\sqrt{\pi a_{0}^{3}}} e^{-r/a_{0}}$，其中 $a_{0}$ 为玻尔半径。由于球对称性

$$
\langle x \rangle = 0, \quad \langle p_{x} \rangle = 0
$$

计算得

$$
\langle x^{2} \rangle = \frac{1}{3} \langle r^{2} \rangle = a_{0}^{2}, \quad \langle p_{x}^{2} \rangle = \frac{1}{3} \langle p^{2} \rangle = \frac{\hbar^{2}}{3 a_{0}^{2}}
$$

因此

$$
\delta x = \sqrt{\langle x^{2} \rangle} = a_{0}, \quad \delta p_{x} = \sqrt{\langle p_{x}^{2} \rangle} = \frac{\hbar}{\sqrt{3} a_{0}}
$$

乘积

$$
\delta x \cdot \delta p_{x} = \frac{\hbar}{\sqrt{3}} \approx 0.577 \hbar
$$

不是最小测不准态。

6.4.3（选做）量子电动力学给出：电子偶素在单位时间内发生湮灭的几率是

$$
\Gamma = \pi r^{2}_{e} c |\psi_{100}(0)|^{2}
$$

其中 $r_{e}=k_{1} e^{2} / m_{e} c^{2} (k_{1}=1 / 4 \pi \varepsilon_{0})$ 是电子的经典半径， $\psi_{100}(r)$ 是电子偶素的基态波函数。求电子偶素的寿命 $\tau=1 / \Gamma$ 。

#### Reference material

提示：我们有关系 $k_{1} e^{2}=\alpha \hbar c$ ，而 $\alpha \approx 1 / 137$ (是纯数)， $\hbar c \approx 0.1973 \mathrm{eV} \cdot \mu \mathrm{m}, m_{e} c^{2} \simeq 0.511 \mathrm{MeV}, c \simeq 3 \times 10^{8} \mathrm{~m} \cdot \mathrm{s}^{-1}$ 。记住 $\hbar c \approx 0.2 \mathrm{eV} \cdot \mu \mathrm{m}$ (误差 $\sim 1 \%$ ) 很有用。

---

湮灭率公式

$$
\Gamma = \pi r_{e}^{2} c |\psi_{100}(0)|^{2}
$$

其中经典半径 $r_{e} = \frac{k_{1} e^{2}}{m_{e} c^{2}} = \frac{\alpha \hbar c}{m_{e} c^{2}}$，波函数平方 $|\psi_{100}(0)|^{2} = \frac{1}{8\pi a_{0}^{3}}$，玻尔半径 $a_{0} = \frac{\hbar}{\alpha m_{e} c}$

代入得到

$$
\Gamma = \frac{\alpha^{5} m_{e} c^{2}}{8 \hbar}
$$

代入数值 $\alpha \approx \frac{1}{137}$，$m_{e} c^{2} = 0.511 \, \text{MeV}$，$\hbar c \approx 0.2 \, \text{eV} \cdot \mu\text{m}$，计算得

$$
\Gamma \approx 2.0 \times 10^{9} \, \text{s}^{-1}, \quad \tau = \frac{1}{\Gamma} \approx 5.0 \times 10^{-10} \, \text{s}
$$

### 第七章 量子力学中的代数方法

7.1.1 几率守恒方程是 $\frac{\partial \rho}{\partial t}+\nabla \cdot \vec{J}=0, \rho=|\Psi|^{2}$, $\vec{J}=\frac{-\mathrm{i} \hbar}{2 m}\left(\Psi^{*} \nabla \Psi-\Psi \nabla \Psi^{*}\right)$ 。如果采用分立表象即 $\Psi(\vec{r}, t)=\sum a_{n}(t) u_{n}(\vec{r})$ ，其中 $\left\{u_{n}(\vec{r})\right\}$ 都是束缚态, 那么这个方程的矩阵形式是什么样子? 提示:转为积分形式的方程 $\frac{\mathrm{d}}{\mathrm{d} t} W_{V}+\oint_{S} \vec{J} \cdot \mathrm{d} \vec{S}=0$ 并且让积分体积趋于无穷。

带入

$$
\rho (\vec{r}, t) = \Psi^{*} \Psi = \sum_{mn} a^{*}_{m} (t) a_{n} (t) u_{m} (\vec{r}) u_{n} (\vec{r})
$$

$$
\begin{gathered}
\vec{J} (\vec{r}, t) = \frac{-\mathrm{i} \hbar}{2 m}\left(\Psi^{*} \nabla \Psi-\Psi \nabla \Psi^{*}\right) \\ =
\frac{- i \hbar}{2m} \sum_{mn}(a^{*}_{m} (t) a_{n} (t) u^{*}_{m} (\vec{r}) \nabla u_{n} (\vec{r}) - a_{m} (t) a^{*}_{n} (t) u_{m} (\vec{r}) \nabla u^{*}_{n} (\vec{r}))
\end{gathered}
$$

带入 $\int u^{*}_{m} (\vec{r}) u_{n} (\vec{r}) \dd{\tau} = \delta_{mn}$，我们把该方程化为积分形式并且把积分体积趋于无穷，此时

$$
W_{V} = \int \dd{\tau} \sum_{mn} a^{*}_{m} (t) a_{n} (t) u_{m} (\vec{r}) u_{n} (\vec{r}) = \sum_{mn} \delta_{mn} a^{*}_{m} (t) a_{n} (t) = \sum_{n} a^{*}_{n} (t) a_{n} (t)
$$

对于束缚态，$u_{n}(\vec{r})$ 在无穷远处衰减为零，因此当积分体积趋于无穷时，边界通量项为零，于是

$$
\dv{}{t}\sum_{n}|a_{n}(t)|^{2}=0
$$

即

$$
\sum_{n}|a_{n}(t)|^{2}=1
$$

对任意时刻都成立。若写成矩阵形式，令列向量 $a=(a_{1},a_{2},\cdots)^{T}$，则几率守恒就是

$$
\dv{}{t}(a^{\dagger}a)=0
$$

若再利用分立表象下薛定谔方程 $\mathrm{i}\hbar \dot a = H a$（$H^{\dagger}=H$），可直接验证

$$
\dv{}{t}(a^{\dagger}a)=\dot a^{\dagger}a+a^{\dagger}\dot a
=\frac{\mathrm{i}}{\hbar}a^{\dagger}Ha-\frac{\mathrm{i}}{\hbar}a^{\dagger}Ha=0
$$

这就是几率守恒方程在分立表象中的矩阵表达。

7.1.2 求在 $-a<x<+a$ 的无限势阱中, 粒子的坐标算符 $\hat{x}$ 在能量表象中的矩阵元 $x_{m n}$

本征态为

$$
\psi_{n} (x) = \sqrt{\frac{1}{a}} \sin (\frac{n \pi}{2a} (x + a))
$$

所以

$$
x_{mn} = \int_{-a}^{a} \psi^{*}_{m} (x) x \psi_{n} (x) \dd{x} = \frac{1}{a} \int_{-a}^{a} x \sin(\frac{m \pi}{2a} (x + a)) \sin(\frac{n \pi}{2a} (x + a)) \dd{x}
$$

令 $y=x+a$，则 $x=y-a$，积分区间为 $0\to 2a$，并用积化和差公式

$$
\sin\alpha\sin\beta=\frac{1}{2}\left[\cos(\alpha-\beta)-\cos(\alpha+\beta)\right]
$$

得

$$
x_{mn}
=\frac{1}{2a}\int_{0}^{2a}(y-a)\left[\cos\frac{(m-n)\pi y}{2a}-\cos\frac{(m+n)\pi y}{2a}\right]\dd y
$$

计算后可得

$$
x_{nn}=0
$$

且当 $m,n$ 同奇同偶时

$$
x_{mn}=0
$$

当 $m,n$ 奇偶性不同（即 $m+n$ 为奇数）时

$$
x_{mn}=-\frac{16amn}{\pi^{2}(m^{2}-n^{2})^{2}}
$$

因此矩阵元可以写成

$$
x_{mn}=
\begin{cases}
0 & (m+n \text{为偶数}) \\
-\dfrac{16amn}{\pi^{2}(m^{2}-n^{2})^{2}} & (m+n \text{为奇数})
\end{cases}
$$

7.2.1 (a) 验证 $L_{x}=\hbar\left(\begin{array}{ccc}0 & 0 & 0 \\ 0 & 0 & -\mathrm{i} \\ 0 & \mathrm{i} & 0\end{array}\right), L_{y}=\hbar\left(\begin{array}{ccc}0 & 0 & \mathrm{i} \\ 0 & 0 & 0 \\ -\mathrm{i} & 0 & 0\end{array}\right), L_{z}=\hbar\left(\begin{array}{ccc}0 & -\mathrm{i} & 0 \\ \mathrm{i} & 0 & 0 \\ 0 & 0 & 0\end{array}\right)$ 满足 $\left[L_{x}, L_{y}\right]=\mathrm{i} \hbar L_{z}$, 这称为角动量算符的“自伴表示”

先记 $L_{i}=\hbar M_{i}$，直接计算

$$
[M_{x},M_{y}]=
\begin{pmatrix}
0&1&0\\
-1&0&0\\
0&0&0
\end{pmatrix}
=\mathrm{i}
\begin{pmatrix}
0&-\mathrm{i}&0\\
\mathrm{i}&0&0\\
0&0&0
\end{pmatrix}
=\mathrm{i}M_{z}
$$

故

$$
[L_{x},L_{y}]=\hbar^{2}[M_{x},M_{y}]
=\mathrm{i}\hbar(\hbar M_{z})
=\mathrm{i}\hbar L_{z}
$$

(b) 把 $L_{z}$ 对角化 (本征值从大到小排列), 明确写出该变换

对角化 $L_{z}$：其本征值为 $\hbar,0,-\hbar$，可取归一化本征矢

$$
v_{+}=\frac{1}{\sqrt2}\begin{pmatrix} -1\\ -\mathrm{i}\\ 0\end{pmatrix},\quad
v_{0}=\begin{pmatrix}0\\0\\1\end{pmatrix},\quad
v_{-}=\frac{1}{\sqrt2}\begin{pmatrix}1\\ -\mathrm{i}\\ 0\end{pmatrix}
$$

按本征值从大到小组成幺正矩阵

$$
U=(v_{+},v_{0},v_{-})=
\begin{pmatrix}
\frac{1}{\sqrt2}&0&\frac{1}{\sqrt2}\\
\frac{\mathrm{i}}{\sqrt2}&0&-\frac{\mathrm{i}}{\sqrt2}\\
0&1&0
\end{pmatrix}
$$

则

$$
U^{\dagger}L_{z}U=\hbar
\begin{pmatrix}
1&0&0\\
0&0&0\\
0&0&-1
\end{pmatrix}
$$

(c) 写出 $L_{x}$ 和 $L_{y}$ 在同样的变换下变成了什么矩阵

在同样变换下

$$
U^{\dagger}L_{x}U=\frac{\hbar}{\sqrt2}
\begin{pmatrix}
0&1&0\\
1&0&1\\
0&1&0
\end{pmatrix},
\quad
U^{\dagger}L_{y}U=\frac{\hbar}{\sqrt2}
\begin{pmatrix}
0&-\mathrm{i}&0\\
\mathrm{i}&0&-\mathrm{i}\\
0&\mathrm{i}&0
\end{pmatrix}
$$

这就是 $l=1$ 表象中的标准角动量矩阵。

7.3.1 设一个量子系统的正交归一完备态矢量集是 $\{|n\rangle(n=1,2, \cdots)\}$, 那么用 $|\psi\rangle=\sum c_{n}|n\rangle\left(c_{n} \in \mathbb{C}\right)$来描写的系统状态称为量子纯态。如果系统是处在 $\{|n\rangle\}$ 的非相干混合上, 那就用 $\rho=\sum p_{n}|n\rangle\langle n|$ 来描写, 其中 $p_{n}$ 是系统处在状态 $|n\rangle$ 上的几率, 这种状态称为混合态, $\rho$ 称为密度矩阵或密度算符。

(a) 根据上面所说的 $\left\{p_{n}\right\}$ 的定义, 请写出 $\left\{p_{n}\right\}$ 应满足的条件。把这些条件写成对于 $\rho$ 的式子是什么样子?

由定义，$\{p_{n}\}$ 必须满足

$$
p_{n}\ge 0,\quad \sum_{n}p_{n}=1
$$

对应到密度算符

$$
\rho=\sum_{n}p_{n}|n\rangle\langle n|
$$

可以写成

$$
\rho^{\dagger}=\rho,\quad \rho\ge0,\quad \Tr\rho=1
$$

(b) 量子纯态可看成是混合态的特殊情况, 描写量子纯态 $|\psi\rangle$ 的密度矩阵直接定义为 $\rho_{\psi}=|\psi\rangle\langle\psi|$ 。那么 $\rho_{\psi}$满足什么条件?

对于纯态密度算符 $\rho_{\psi}=|\psi\rangle\langle\psi|$，除满足上面三条外，还满足

$$
\rho_{\psi}^{2}=\rho_{\psi}
$$

等价地

$$
\Tr(\rho_{\psi}^{2})=1
$$

而一般混合态满足 $\Tr(\rho^{2})<1$。力学量 $F$ 在混合态 $\rho$ 下的平均值是

$$
\langle F\rangle=\Tr(\rho F)
$$

(c) 对于混合态 $\rho$， 一个力学量（算符）$F$ 的平均值如何用 $\rho$ 和 $F$ 来表达？

若 $\rho=\sum_{n}p_{n}|n\rangle\langle n|$，则

$$
\langle F\rangle=\sum_{n}p_{n}\langle n|F|n\rangle
$$

即按几率加权平均。

7.4.1 用数学归纳法证明:  $\mathrm{e}^{\xi^{2}} \frac{\mathrm{d}^{n}}{\mathrm{~d} \xi^{n}} \mathrm{e}^{-\xi^{2}}=\mathrm{e}^{\xi^{2} / 2}\left(\frac{\mathrm{d}}{\mathrm{d} \xi}-\xi\right)^{n} \mathrm{e}^{-\xi^{2} / 2}(n \in \mathbb{N})$

命题

$$
P(n):
\mathrm{e}^{\xi^{2}}\dv[n]{}{\xi}\mathrm{e}^{-\xi^{2}}
=\mathrm{e}^{\xi^{2}/2}\left(\dv{}{\xi}-\xi\right)^{n}\mathrm{e}^{-\xi^{2}/2}
$$

当 $n=1$ 时

$$
\mathrm{e}^{\xi^{2}}\dv{}{\xi}\mathrm{e}^{-\xi^{2}}=-2\xi
$$

而

$$
\mathrm{e}^{\xi^{2}/2}\left(\dv{}{\xi}-\xi\right)\mathrm{e}^{-\xi^{2}/2}
=\mathrm{e}^{\xi^{2}/2}(-\xi-\xi)\mathrm{e}^{-\xi^{2}/2}=-2\xi
$$

所以 $P(1)$ 成立。设 $P(n)$ 成立，则

$$
\mathrm{e}^{\xi^{2}}\dv[n+1]{}{\xi}\mathrm{e}^{-\xi^{2}}
=\left(\dv{}{\xi}-2\xi\right)\left[\mathrm{e}^{\xi^{2}}\dv[n]{}{\xi}\mathrm{e}^{-\xi^{2}}\right]
$$

代入归纳假设

$$
=\left(\dv{}{\xi}-2\xi\right)\left[\mathrm{e}^{\xi^{2}/2}\left(\dv{}{\xi}-\xi\right)^{n}\mathrm{e}^{-\xi^{2}/2}\right]
$$

利用恒等式

$$
\left(\dv{}{\xi}-2\xi\right)\mathrm{e}^{\xi^{2}/2}
=\mathrm{e}^{\xi^{2}/2}\left(\dv{}{\xi}-\xi\right)
$$

可得

$$
\mathrm{e}^{\xi^{2}}\dv[n+1]{}{\xi}\mathrm{e}^{-\xi^{2}}
=\mathrm{e}^{\xi^{2}/2}\left(\dv{}{\xi}-\xi\right)^{n+1}\mathrm{e}^{-\xi^{2}/2}
$$

即 $P(n+1)$ 成立，因此命题对任意 $n\in\mathbb N$ 成立。

7.4.2 在自然单位制下， $\hat{a}=\frac{1}{\sqrt{2}}(\hat{x}+\mathrm{i} \hat{p})$, $\hat{a}^{\dagger}=\frac{1}{\sqrt{2}}(\hat{x}-\mathrm{i} \hat{p})$, $\hat{N} \equiv \hat{a}^{\dagger} \hat{a}$. 记 $|n\rangle(n=0,1,2,\cdots)$ 是 $\hat{N}$的本征态。

求证: 若 $\hat{a}|\alpha\rangle=\alpha|\alpha\rangle,\langle\alpha|\alpha\rangle=1, \alpha \in \mathbb{C}$， 则 $|\alpha\rangle=\mathrm{e}^{-\alpha^{*} \alpha / 2} \sum_{n=0}^{\infty} \frac{\alpha^{n}}{\sqrt{n !}}|n\rangle$ ，其中 $|\alpha\rangle$ 称为相干态。

展开本征态

$$
|\alpha\rangle=\sum_{n=0}^{\infty}c_{n}|n\rangle
$$

代入 $\hat a|\alpha\rangle=\alpha|\alpha\rangle$

$$
\sum_{n=1}^{\infty}c_{n}\sqrt{n}|n-1\rangle
=\alpha\sum_{n=0}^{\infty}c_{n}|n\rangle
$$

比较系数得到

$$
c_{n+1}\sqrt{n+1}=\alpha c_{n}
\quad\Rightarrow\quad
c_{n}=\frac{\alpha^{n}}{\sqrt{n!}}c_{0}
$$

所以

$$
|\alpha\rangle=c_{0}\sum_{n=0}^{\infty}\frac{\alpha^{n}}{\sqrt{n!}}|n\rangle
$$

归一化条件给出

$$
1=\langle\alpha|\alpha\rangle
=|c_{0}|^{2}\sum_{n=0}^{\infty}\frac{|\alpha|^{2n}}{n!}
=|c_{0}|^{2}\mathrm{e}^{|\alpha|^{2}}
$$

故

$$
|c_{0}|=\mathrm{e}^{-|\alpha|^{2}/2}
$$

忽略整体相位，可取

$$
c_{0}=\mathrm{e}^{-\alpha^{*}\alpha/2}
$$

最终得到

$$
|\alpha\rangle=\mathrm{e}^{-\alpha^{*}\alpha/2}\sum_{n=0}^{\infty}\frac{\alpha^{n}}{\sqrt{n!}}|n\rangle
$$

7.4.3 在自然单位制下 $\hat{H}=\hat{N}+ \frac{1}{2}$ ，求证: 含时间的 Schrödinger 方程 $\mathrm{i} \partial_{t}|\psi\rangle=\hat{H}|\psi\rangle$ 满足初始条件 $|\psi\rangle|_{t=0}=|\alpha\rangle$ 的解是 $|\psi (t) \rangle = \mathrm{e}^{-\mathrm{i} t / 2}|\alpha \mathrm{e}^{-\mathrm{i} t}\rangle$, 其中 $|\alpha \mathrm{e}^{-\mathrm{i} t}\rangle$ 代表 $a$ 的本征值为 $\alpha \mathrm{e}^{-\mathrm{i} t}$ 的相干态。

时间演化算符

$$
U(t)=\mathrm{e}^{-\mathrm{i}\hat H t}
=\mathrm{e}^{-\mathrm{i}t/2}\mathrm{e}^{-\mathrm{i}\hat N t}
$$

所以

$$
|\psi(t)\rangle=U(t)|\alpha\rangle
=\mathrm{e}^{-\mathrm{i}t/2}\mathrm{e}^{-\mathrm{i}\hat N t}|\alpha\rangle
$$

考虑态 $|\chi(t)\rangle=\mathrm{e}^{-\mathrm{i}\hat N t}|\alpha\rangle$，计算

$$
\hat a|\chi(t)\rangle
=\hat a\mathrm{e}^{-\mathrm{i}\hat N t}|\alpha\rangle
=\mathrm{e}^{-\mathrm{i}\hat N t}\left(\mathrm{e}^{\mathrm{i}\hat N t}\hat a\mathrm{e}^{-\mathrm{i}\hat N t}\right)|\alpha\rangle
$$

又有（利用 BCH 公式可以导出）

$$
\mathrm{e}^{\mathrm{i}\hat N t}\hat a\mathrm{e}^{-\mathrm{i}\hat N t}
=\hat a\,\mathrm{e}^{-\mathrm{i}t}
$$

故

$$
\hat a|\chi(t)\rangle
=\mathrm{e}^{-\mathrm{i}t}\mathrm{e}^{-\mathrm{i}\hat N t}\hat a|\alpha\rangle
=\alpha\mathrm{e}^{-\mathrm{i}t}|\chi(t)\rangle
$$

即 $|\chi(t)\rangle$ 是 $\hat a$ 本征态，本征值为 $\alpha\mathrm{e}^{-\mathrm{i}t}$，所以

$$
|\chi(t)\rangle=|\alpha\mathrm{e}^{-\mathrm{i}t}\rangle
$$

于是

$$
|\psi\rangle(t)=\mathrm{e}^{-\mathrm{i}t/2}|\alpha\mathrm{e}^{-\mathrm{i}t}\rangle
$$

7.4.4 (选做) (a) 求证: 若 $a(\eta)=a \cosh \eta+a^{\dagger} \sinh \eta, a^{\dagger}(\eta)=a^{\dagger} \cosh \eta+a \sinh \eta(-\infty<\eta<+\infty)$,则 $\left[a(\eta), a^{\dagger}(\eta)\right]=1$ 。

由定义

$$
a(\eta)=a\cosh\eta+a^{\dagger}\sinh\eta,\quad
a^{\dagger}(\eta)=a^{\dagger}\cosh\eta+a\sinh\eta
$$

可得

$$
[a(\eta),a^{\dagger}(\eta)]
=\cosh^{2}\eta[a,a^{\dagger}]
+\sinh^{2}\eta[a^{\dagger},a]
+\cosh\eta\sinh\eta([a,a]+[a^{\dagger},a^{\dagger}])
$$

利用

$$
[a,a^{\dagger}]=1,\quad [a,a]=[a^{\dagger},a^{\dagger}]=0
$$

即

$$
[a(\eta),a^{\dagger}(\eta)]
=\cosh^{2}\eta-\sinh^{2}\eta=1
$$

(b) 求证: 若态 $\left|\alpha\right\rangle_{\eta}$ 满足 $a(\eta)\left|\alpha\right\rangle_{\eta}=\alpha\left|\alpha\right\rangle_{\eta}$, 则 $\left|\alpha\right\rangle_{\eta}=\mathrm{e}^{\frac{1}{2}\eta\left(a^{2}-\left(a^{\dagger}\right)^{2}\right)}|\alpha\rangle$

再记

$$
S(\eta)=\exp\left[\frac{\eta}{2}(a^{2}-a^{\dagger2})\right]
$$

由 BCH 公式可得变换

$$
S(\eta)aS^{-1}(\eta)=a\cosh\eta+a^{\dagger}\sinh\eta=a(\eta)
$$

定义

$$
|\alpha\rangle_{\eta}=S(\eta)|\alpha\rangle
$$

则

$$
a(\eta)|\alpha\rangle_{\eta}
=S(\eta)aS^{-1}(\eta)S(\eta)|\alpha\rangle
=S(\eta)a|\alpha\rangle
=\alpha S(\eta)|\alpha\rangle
=\alpha|\alpha\rangle_{\eta}
$$

因此 $|\alpha\rangle_{\eta}$ 正是 $a(\eta)$ 的本征态，本征值为 $\alpha$，即

$$
|\alpha\rangle_{\eta}
=\exp\left[\frac{\eta}{2}(a^{2}-a^{\dagger2})\right]|\alpha\rangle
$$

## 第7次作业

7.5.1 若$\hat{\boldsymbol{J}}$是角动量算符，$\vec{a}$和$\vec{b}$是常数矢量，求证$[\hat{\boldsymbol{J}}\cdot\vec{a},\hat{\boldsymbol{J}}\cdot\vec{b}]=\mathrm{i}\hbar\hat{\boldsymbol{J}}\cdot(\vec{a}\times\vec{b})$，其中$\vec{a}\times\vec{b}$的定义就是通常的$(\vec{a}\times\vec{b})_{i}=\varepsilon_{ijk}a_{j} b_{k}$ $(i,j,k=1,2,3)$

利用角动量的对易关系

$$
[\hat{J}_{i},\hat{J}_{j}]=\mathrm{i}\hbar\varepsilon_{ijk}\hat{J}_{k}
$$

于是

$$
\begin{gathered}
[\hat{\boldsymbol{J}}\cdot\vec{a},\hat{\boldsymbol{J}}\cdot\vec{b}]
=a_{i}b_{j}[\hat{J}_{i},\hat{J}_{j}]\\
=\mathrm{i}\hbar a_{i}b_{j}\varepsilon_{ijk}\hat{J}_{k}\\
=\mathrm{i}\hbar\hat{J}_{k}\varepsilon_{kij}a_{i}b_{j}\\
=\mathrm{i}\hbar\hat{\boldsymbol{J}}\cdot(\vec{a}\times\vec{b})
\end{gathered}
$$

7.5.2 我们曾经在习题4.4.3里定义了量子力学意义上的标量和矢量，但那里用的是轨道角动量$\hat{\boldsymbol{L}}$，现在应推广为一般的$\hat{\boldsymbol{J}}$，即满足$[\hat{J}_{i},\hat{S}]=0$ 的算符 $\hat{S}$ 称为标量算符，满足 $[\hat{J}_{i},\hat{V}_{j}]=\mathrm{i}\hbar\varepsilon_{ijk}\hat{V}_{k}$ 的算符 $\hat{\boldsymbol{V}}$ 称为矢量算符。求证：对矢量算符$\hat{\boldsymbol{V}}$ 有

(a) $\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}}+\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}}=2\mathrm{i}\hbar\hat{\boldsymbol{V}}$

按照定义，对第 $i$ 个分量计算

$$
\begin{gathered}
(\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}})_{i}
=\varepsilon_{ijk}\hat{V}_{j}\hat{J}_{k}\\
=\varepsilon_{ijk}\left(\hat{J}_{k}\hat{V}_{j}-[\hat{J}_{k},\hat{V}_{j}]\right)\\
=\varepsilon_{ijk}\hat{J}_{k}\hat{V}_{j}-\mathrm{i}\hbar\varepsilon_{ijk}\varepsilon_{kjl}\hat{V}_{l}\\
=-\varepsilon_{ijk}\hat{J}_{j}\hat{V}_{k}+2\mathrm{i}\hbar\hat{V}_{i}
\end{gathered}
$$

其中用到了

$$
\varepsilon_{ijk}\varepsilon_{kjl}=-2\delta_{il}
$$

所以

$$
(\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}})_{i}+(\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}})_{i}=2\mathrm{i}\hbar\hat{V}_{i}
$$

即

$$
\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}}+\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}}=2\mathrm{i}\hbar\hat{\boldsymbol{V}}
$$

(b) $\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}}-\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}}=(\mathrm{i}/\hbar)[\hat{J}^{2},\hat{\boldsymbol{V}}]$

仍然对第 $i$ 个分量计算

$$
\begin{gathered}
[\hat{J}^{2},\hat{V}_{i}]
=[\hat{J}_{j}^{2},\hat{V}_{i}]\\
=\hat{J}_{j}[\hat{J}_{j},\hat{V}_{i}]+[\hat{J}_{j},\hat{V}_{i}]\hat{J}_{j}\\
=\mathrm{i}\hbar\varepsilon_{jik}\left(\hat{J}_{j}\hat{V}_{k}+\hat{V}_{k}\hat{J}_{j}\right)
\end{gathered}
$$

所以

$$
\frac{\mathrm{i}}{\hbar}[\hat{J}^{2},\hat{V}_{i}]
=\varepsilon_{ijk}\left(\hat{J}_{j}\hat{V}_{k}+\hat{V}_{k}\hat{J}_{j}\right)
$$

另一方面

$$
\begin{gathered}
(\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}}-\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}})_{i}
=\varepsilon_{ijk}\hat{J}_{j}\hat{V}_{k}-\varepsilon_{ijk}\hat{V}_{j}\hat{J}_{k}\\
=\varepsilon_{ijk}\left(\hat{J}_{j}\hat{V}_{k}+\hat{V}_{k}\hat{J}_{j}\right)
\end{gathered}
$$

两式相同，所以

$$
\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}}-\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}}=\frac{\mathrm{i}}{\hbar}[\hat{J}^{2},\hat{\boldsymbol{V}}]
$$

7.6.1 对于最大合成即 $j=j_{1}+j_{2}$ 的情形，CG系数是不难计算的。为简单起见下面省去 $j_{1},j_{2}$ 而把合成的状态记为 $|j,m\rangle_{\mathrm{c}}$，未合成的状态记为 $|m_{1},m_{2}\rangle_{\mathrm{n}}$。首先，根据约定，$|j_{1}+j_{2},j_{1}+j_{2}\rangle_{\mathrm{c}}=|j_{1},j_{2}\rangle_{\mathrm{n}}$，其次现在 $\hat{J}_{-} = \hat{J}_{1-} + \hat{J}_{2-}$，而它的作用是 $\hat{J}_{-} |j, m\rangle = \sqrt{(j-m+1)(j+m)} |j, m-1\rangle$（取 $\hbar = 1$）。请根据这些条件写出 (a) $|j_{1} + j_{2}, j_{1} + j_{2} - 1\rangle_{c}$ 和 (b) $|j_{1} + j_{2}, j_{1} + j_{2} - 2\rangle_{c}$，再往下的事情就是递推了（不要求写出）。

记 $j=j_{1}+j_{2}$，最高权态为

$$
|j,j\rangle_{\mathrm{c}}=|j_{1},j_{2}\rangle_{\mathrm{n}}
$$

对最高权态作用一次降算符

$$
\hat{J}_{-}|j,j\rangle_{\mathrm{c}}=\sqrt{2j}|j,j-1\rangle_{\mathrm{c}}
$$

另一方面

$$
\begin{gathered}
\hat{J}_{-}|j_{1},j_{2}\rangle_{\mathrm{n}}
=(\hat{J}_{1-}+\hat{J}_{2-})|j_{1},j_{2}\rangle_{\mathrm{n}}\\
=\sqrt{2j_{1}}|j_{1}-1,j_{2}\rangle_{\mathrm{n}}+\sqrt{2j_{2}}|j_{1},j_{2}-1\rangle_{\mathrm{n}}
\end{gathered}
$$

所以

$$
|j_{1}+j_{2},j_{1}+j_{2}-1\rangle_{\mathrm{c}}
=\sqrt{\frac{j_{1}}{j_{1}+j_{2}}}|j_{1}-1,j_{2}\rangle_{\mathrm{n}}
+\sqrt{\frac{j_{2}}{j_{1}+j_{2}}}|j_{1},j_{2}-1\rangle_{\mathrm{n}}
$$

再作用一次降算符，有

$$
\hat{J}_{-}|j,j-1\rangle_{\mathrm{c}}=\sqrt{2(2j-1)}|j,j-2\rangle_{\mathrm{c}}
$$

同时

$$
\begin{gathered}
\hat{J}_{-}|j,j-1\rangle_{\mathrm{c}}
=\sqrt{\frac{j_{1}}{j}}\left(\sqrt{2(2j_{1}-1)}|j_{1}-2,j_{2}\rangle_{\mathrm{n}}+\sqrt{2j_{2}}|j_{1}-1,j_{2}-1\rangle_{\mathrm{n}}\right)\\
+\sqrt{\frac{j_{2}}{j}}\left(\sqrt{2j_{1}}|j_{1}-1,j_{2}-1\rangle_{\mathrm{n}}+\sqrt{2(2j_{2}-1)}|j_{1},j_{2}-2\rangle_{\mathrm{n}}\right)
\end{gathered}
$$

因此

$$
\begin{gathered}
|j_{1}+j_{2},j_{1}+j_{2}-2\rangle_{\mathrm{c}}
=\sqrt{\frac{j_{1}(2j_{1}-1)}{(j_{1}+j_{2})(2j_{1}+2j_{2}-1)}}|j_{1}-2,j_{2}\rangle_{\mathrm{n}}\\
+2\sqrt{\frac{j_{1}j_{2}}{(j_{1}+j_{2})(2j_{1}+2j_{2}-1)}}|j_{1}-1,j_{2}-1\rangle_{\mathrm{n}}\\
+\sqrt{\frac{j_{2}(2j_{2}-1)}{(j_{1}+j_{2})(2j_{1}+2j_{2}-1)}}|j_{1},j_{2}-2\rangle_{\mathrm{n}}
\end{gathered}
$$

7.6.2（选做）把上面的问题做完，就是写出 $|j_{1} + j_{2}, j_{1} + j_{2} - k\rangle_{c}$ ($k = 0, \cdots, 2(j_{1} + j_{2})$) 的一般表达式。

### Reference material

提示：利用组合论的符号 $\binom{n}{m} = \frac{n!}{m!(n-m)!}$ 可以使这个表达式非常简洁。

---

仍记 $j=j_{1}+j_{2}$，反复作用降算符可以得到

$$
\hat{J}_{-}^{k}|j,j\rangle_{\mathrm{c}}
=\sqrt{\frac{k!(2j)!}{(2j-k)!}}|j,j-k\rangle_{\mathrm{c}}
$$

又因为 $\hat{J}_{1-}$ 与 $\hat{J}_{2-}$ 对易，所以

$$
(\hat{J}_{1-}+\hat{J}_{2-})^{k}
=\binom{k}{r}\hat{J}_{1-}^{r}\hat{J}_{2-}^{k-r}
$$

而

$$
\hat{J}_{1-}^{r}\hat{J}_{2-}^{k-r}|j_{1},j_{2}\rangle_{\mathrm{n}}
=\sqrt{\frac{r!(2j_{1})!}{(2j_{1}-r)!}}\sqrt{\frac{(k-r)!(2j_{2})!}{(2j_{2}-k+r)!}}|j_{1}-r,j_{2}-k+r\rangle_{\mathrm{n}}
$$

这里右侧对整数 $r=0,\cdots,k$ 求和。代入并整理系数，得到一般结果

$$
|j_{1}+j_{2},j_{1}+j_{2}-k\rangle_{\mathrm{c}}
= \sum_{r = r_{\text{min}}}^{r_{\text{max}}} \sqrt{\frac{\binom{2j_{1}}{r}\binom{2j_{2}}{k-r}}{\binom{2j_{1}+2j_{2}}{k}}} |j_{1} - r, j_{2} - k + r \rangle_{\mathrm{n}}
$$

其中

$$
r_{\min}=\max(0,k-2j_{2}),\quad r_{\max}=\min(k,2j_{1})
$$

这个表达式在 $k=1,2$ 时就回到上一题的两个结果。

7.6.3（选做）请写出 $|j_{1} + j_{2} - 1, j_{1} + j_{2} - 1\rangle_{c}$

### Reference material

提示：$|j_{1} + j_{2} - 1, j_{1} + j_{2} - 1\rangle_{c}$ 是和 $|j_{1} + j_{2}, j_{1} + j_{2} - 1\rangle_{c}$ 正交的。

---

在 $m=j_{1}+j_{2}-1$ 的子空间中，只有两个基矢

$$
|j_{1}-1,j_{2}\rangle_{\mathrm{n}}, |j_{1},j_{2}-1\rangle_{\mathrm{n}}
$$

而上一题已经得到

$$
|j_{1}+j_{2},j_{1}+j_{2}-1\rangle_{\mathrm{c}}
=\sqrt{\frac{j_{1}}{j_{1}+j_{2}}}|j_{1}-1,j_{2}\rangle_{\mathrm{n}}
+\sqrt{\frac{j_{2}}{j_{1}+j_{2}}}|j_{1},j_{2}-1\rangle_{\mathrm{n}}
$$

所以与它正交且归一化的组合可以取为

$$
|j_{1}+j_{2}-1,j_{1}+j_{2}-1\rangle_{\mathrm{c}}
=\sqrt{\frac{j_{2}}{j_{1}+j_{2}}}|j_{1}-1,j_{2}\rangle_{\mathrm{n}}
-\sqrt{\frac{j_{1}}{j_{1}+j_{2}}}|j_{1},j_{2}-1\rangle_{\mathrm{n}}
$$

## 第8次作业

8.1.1 求证 $(\vec{a} \cdot \vec{\sigma})(\vec{b} \cdot \vec{\sigma}) = (\vec{a} \cdot \vec{b})I + \mathrm{i}(\vec{a} \times \vec{b}) \cdot \vec{\sigma}$，其中 $\vec{a}, \vec{b}$ 是任何三维矢量（纯数或者算符）。

Pauli 矩阵满足

$$
\sigma_{i}\sigma_{j}=\delta_{ij}I+\mathrm{i}\varepsilon_{ijk}\sigma_{k}
$$

所以

$$
\begin{gathered}
(\vec{a}\cdot\vec{\sigma})(\vec{b}\cdot\vec{\sigma})
=a_{i}b_{j}\sigma_{i}\sigma_{j}\\
=a_{i}b_{j}\delta_{ij}I+\mathrm{i}a_{i}b_{j}\varepsilon_{ijk}\sigma_{k}\\
=(\vec{a}\cdot\vec{b})I+\mathrm{i}(\vec{a}\times\vec{b})\cdot\vec{\sigma}
\end{gathered}
$$

这里如果 $\vec{a},\vec{b}$ 的分量是算符，乘积的次序理解为 $a_{i}b_{j}$，并且这些算符与 Pauli 矩阵对易。

8.1.2 记 $\sigma_{\pm} = \frac{1}{2}(\sigma_{x} \pm \mathrm{i}\sigma_{y})$，求证：$\sigma_{+}\alpha = 0$，$\sigma_{+}\beta = \alpha$，$\sigma_{-}\alpha = \beta$，$\sigma_{-}\beta = 0$ 以及 $\sigma_{+}^{2} = \sigma_{-}^{2} = 0$，所以 $\sigma_{+}$ 是 $S_{z}$ 的升级算符，$\sigma_{-}$ 是 $S_{z}$ 的降级算符。

取

$$
\alpha=\begin{pmatrix}1\\0\end{pmatrix},\quad \beta=\begin{pmatrix}0\\1\end{pmatrix}
$$

由

$$
\sigma_{x}=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
\sigma_{y}=\begin{pmatrix}0&-\mathrm{i}\\ \mathrm{i}&0\end{pmatrix},\quad
\sigma_{z}=\begin{pmatrix}1&0\\0&-1\end{pmatrix}
$$

得到

$$
\sigma_{+}=\frac{1}{2}(\sigma_{x}+\mathrm{i}\sigma_{y})
=\begin{pmatrix}0&1\\0&0\end{pmatrix},\quad
\sigma_{-}=\frac{1}{2}(\sigma_{x}-\mathrm{i}\sigma_{y})
=\begin{pmatrix}0&0\\1&0\end{pmatrix}
$$

因此

$$
\sigma_{+}\alpha=0,\quad \sigma_{+}\beta=\alpha,\quad
\sigma_{-}\alpha=\beta,\quad \sigma_{-}\beta=0
$$

再直接相乘有

$$
\sigma_{+}^{2}=
\begin{pmatrix}0&1\\0&0\end{pmatrix}
\begin{pmatrix}0&1\\0&0\end{pmatrix}=0,\quad
\sigma_{-}^{2}=
\begin{pmatrix}0&0\\1&0\end{pmatrix}
\begin{pmatrix}0&0\\1&0\end{pmatrix}=0
$$

由于 $S_{z}=\frac{\hbar}{2}\sigma_{z}$，$\alpha$ 和 $\beta$ 的 $S_{z}$ 本征值分别为 $\frac{\hbar}{2}$ 和 $-\frac{\hbar}{2}$，所以 $\sigma_{+}$ 把 $\beta$ 升为 $\alpha$，而 $\sigma_{-}$ 把 $\alpha$ 降为 $\beta$。

8.1.3 记 $P_{\pm} = \frac{1}{2}(1 \pm \sigma_{z})$，求证：$P_{+}\alpha = \alpha$，$P_{+}\beta = 0$，$P_{-}\alpha = 0$，$P_{-}\beta = \beta$ 以及 $P_{+}^{2} = P_{+}$，$P_{-}^{2} = P_{-}$，$P_{+}P_{-} = P_{-}P_{+} = 0$，$P_{+} + P_{-} = I$。所以 $P_{+}$，$P_{-}$ 分别称为态 $\alpha$，$\beta$ 的投影算符。

由 $\sigma_{z}$ 的矩阵形式得到

$$
P_{+}=\frac{1}{2}(I+\sigma_{z})
=\begin{pmatrix}1&0\\0&0\end{pmatrix},\quad
P_{-}=\frac{1}{2}(I-\sigma_{z})
=\begin{pmatrix}0&0\\0&1\end{pmatrix}
$$

于是

$$
P_{+}\alpha=\alpha,\quad P_{+}\beta=0,\quad
P_{-}\alpha=0,\quad P_{-}\beta=\beta
$$

矩阵乘法给出

$$
P_{+}^{2}=P_{+},\quad P_{-}^{2}=P_{-},\quad
P_{+}P_{-}=P_{-}P_{+}=0,\quad P_{+}+P_{-}=I
$$

所以 $P_{+}$ 和 $P_{-}$ 分别把任意二分量自旋态投影到 $\alpha$ 和 $\beta$ 方向。

8.1.4（选做）对态 $\alpha = (1, 0)^{T}$，求 $\overline{(\Delta S_{x})^{2}} \cdot \overline{(\Delta S_{y})^{2}} = ?$ 它是不是最小测不准态？

对于态 $\alpha$，有

$$
S_{x}=\frac{\hbar}{2}\sigma_{x},\quad S_{y}=\frac{\hbar}{2}\sigma_{y},\quad S_{z}=\frac{\hbar}{2}\sigma_{z}
$$

先计算平均值

$$
\overline{S_{x}}=\alpha^{\dagger}S_{x}\alpha=0,\quad
\overline{S_{y}}=\alpha^{\dagger}S_{y}\alpha=0
$$

又因为 $\sigma_{x}^{2}=\sigma_{y}^{2}=I$，所以

$$
\overline{S_{x}^{2}}=\frac{\hbar^{2}}{4},\quad
\overline{S_{y}^{2}}=\frac{\hbar^{2}}{4}
$$

于是

$$
\overline{(\Delta S_{x})^{2}}=\frac{\hbar^{2}}{4},\quad
\overline{(\Delta S_{y})^{2}}=\frac{\hbar^{2}}{4}
$$

所以

$$
\overline{(\Delta S_{x})^{2}}\cdot\overline{(\Delta S_{y})^{2}}
=\frac{\hbar^{4}}{16}
$$

另一方面

$$
[S_{x},S_{y}]=\mathrm{i}\hbar S_{z},\quad \overline{S_{z}}=\frac{\hbar}{2}
$$

不确定关系右端为

$$
\frac{1}{4}\left|\overline{[S_{x},S_{y}]}\right|^{2}
=\frac{1}{4}\left|\mathrm{i}\hbar\frac{\hbar}{2}\right|^{2}
=\frac{\hbar^{4}}{16}
$$

等号成立，因此态 $\alpha$ 是 $S_{x}$ 和 $S_{y}$ 的最小测不准态。

8.2.1 令 $\hat{P}^{+} = \dfrac{1}{2l+1}\left[l + 1 + \dfrac{1}{\hbar}(\vec{\sigma} \cdot \hat{\vec{L}})\right]$，$\hat{P}^{-} = \dfrac{1}{2l+1}\left[l - \dfrac{1}{\hbar}(\vec{\sigma} \cdot \hat{\vec{L}})\right]$。求证：

(a) $(\hat{P}^{+})^{2} = \hat{P}^{+}$，$(\hat{P}^{-})^{2} = \hat{P}^{-}$，$\hat{P}^{+}\hat{P}^{-} = \hat{P}^{-}\hat{P}^{+} = 0$，$\hat{P}^{+} + \hat{P}^{-} = I$

令

$$
\hat{A}=\frac{1}{\hbar}\vec{\sigma}\cdot\hat{\vec{L}}
$$

先计算 $(\vec{\sigma}\cdot\hat{\vec{L}})^{2}$，利用 8.1.1 的结果，注意 $\hat{L}_{i}$ 之间不对易，所以

$$
\begin{gathered}
(\vec{\sigma}\cdot\hat{\vec{L}})^{2}
=\sigma_{i}\sigma_{j}\hat{L}_{i}\hat{L}_{j}\\
=\hat{L}^{2}+\mathrm{i}\varepsilon_{ijk}\sigma_{k}\hat{L}_{i}\hat{L}_{j}\\
=\hat{L}^{2}+\frac{\mathrm{i}}{2}\varepsilon_{ijk}\sigma_{k}[\hat{L}_{i},\hat{L}_{j}]\\
=\hat{L}^{2}-\frac{\hbar}{2}\varepsilon_{ijk}\varepsilon_{ijl}\sigma_{k}\hat{L}_{l}\\
=\hat{L}^{2}-\hbar\vec{\sigma}\cdot\hat{\vec{L}}
\end{gathered}
$$

在固定 $l$ 的子空间中，$\hat{L}^{2}=l(l+1)\hbar^{2}$，因此

$$
\hat{A}^{2}=l(l+1)-\hat{A}
$$

现在

$$
\hat{P}^{+}=\frac{\hat{A}+l+1}{2l+1},\quad
\hat{P}^{-}=\frac{l-\hat{A}}{2l+1}
$$

由 $\hat{A}^{2}=l(l+1)-\hat{A}$ 可得

$$
(\hat{A}+l+1)^{2}=(2l+1)(\hat{A}+l+1)
$$

以及

$$
(l-\hat{A})^{2}=(2l+1)(l-\hat{A})
$$

所以

$$
(\hat{P}^{+})^{2}=\hat{P}^{+},\quad
(\hat{P}^{-})^{2}=\hat{P}^{-}
$$

再计算二者乘积

$$
(\hat{A}+l+1)(l-\hat{A})
=l(l+1)-\hat{A}^{2}-\hat{A}=0
$$

因此

$$
\hat{P}^{+}\hat{P}^{-}=\hat{P}^{-}\hat{P}^{+}=0
$$

最后

$$
\hat{P}^{+}+\hat{P}^{-}
=\frac{\hat{A}+l+1+l-\hat{A}}{2l+1}=I
$$

(b) $\hat{P}^{+}\phi_{ljm_{j}} = \phi_{ljm_{j}}$（for $j = l + \dfrac{1}{2}$），$\hat{P}^{-}\phi_{ljm_{j}} = \phi_{ljm_{j}}$（for $j = l - \dfrac{1}{2}$）。因此 $\hat{P}^{+}$ 和 $\hat{P}^{-}$ 分别称为 $\phi_{ljm_{j}}$（$j = l + (1/2)$）和 $\phi_{ljm_{j}}$（$j = l - (1/2)$）的投影算符。

因为 $\hat{\vec{J}}=\hat{\vec{L}}+\hat{\vec{S}}$，且 $\hat{\vec{S}}=\frac{\hbar}{2}\vec{\sigma}$，所以

$$
\vec{\sigma}\cdot\hat{\vec{L}}=\frac{2}{\hbar}\hat{\vec{L}}\cdot\hat{\vec{S}}
$$

又有

$$
\hat{\vec{L}}\cdot\hat{\vec{S}}
=\frac{1}{2}(\hat{J}^{2}-\hat{L}^{2}-\hat{S}^{2})
$$

作用在 $\phi_{ljm_{j}}$ 上时

$$
\hat{A}\phi_{ljm_{j}}
=\left[j(j+1)-l(l+1)-\frac{3}{4}\right]\phi_{ljm_{j}}
$$

当 $j=l+\frac{1}{2}$ 时

$$
j(j+1)-l(l+1)-\frac{3}{4}=l
$$

所以

$$
\hat{P}^{+}\phi_{ljm_{j}}
=\frac{l+l+1}{2l+1}\phi_{ljm_{j}}
=\phi_{ljm_{j}},\quad
\hat{P}^{-}\phi_{ljm_{j}}=0
$$

当 $j=l-\frac{1}{2}$ 时

$$
j(j+1)-l(l+1)-\frac{3}{4}=-(l+1)
$$

所以

$$
\hat{P}^{-}\phi_{ljm_{j}}
=\frac{l+l+1}{2l+1}\phi_{ljm_{j}}
=\phi_{ljm_{j}},\quad
\hat{P}^{+}\phi_{ljm_{j}}=0
$$

这说明 $\hat{P}^{+}$ 和 $\hat{P}^{-}$ 分别投影到 $j=l+\frac{1}{2}$ 和 $j=l-\frac{1}{2}$ 的子空间。

8.2.2 请推导（不是代入课文中的公式）$l = 1$，$j = \frac{1}{2}$，$m_{j} = +\frac{1}{2}$ 时 $\phi_{ljm_{j}}$ 的表达式。

### Reference material

提示：它是 $\hat{\vec{L}} \cdot \hat{\vec{S}}$ 的本征态；可以利用 $\hat{L}_{+}Y_{10}(\theta, \varphi) = \sqrt{2}\hbar Y_{11}(\theta, \varphi)$，$\hat{L}_{-}Y_{11}(\theta, \varphi) = \sqrt{2}\hbar Y_{10}(\theta, \varphi)$

---

当 $m_{j}=\frac{1}{2}$ 时，只能由两个态线性组合得到

$$
\phi=aY_{10}\alpha+bY_{11}\beta
$$

这里 $Y_{10}\alpha$ 的 $m_{l}=0,m_{s}=\frac{1}{2}$，而 $Y_{11}\beta$ 的 $m_{l}=1,m_{s}=-\frac{1}{2}$

利用

$$
\hat{\vec{L}}\cdot\hat{\vec{S}}
=\hat{L}_{z}\hat{S}_{z}+\frac{1}{2}(\hat{L}_{+}\hat{S}_{-}+\hat{L}_{-}\hat{S}_{+})
$$

并且

$$
\hat{S}_{-}\alpha=\hbar\beta,\quad \hat{S}_{+}\beta=\hbar\alpha,\quad
\hat{S}_{+}\alpha=0,\quad \hat{S}_{-}\beta=0
$$

所以

$$
\hat{\vec{L}}\cdot\hat{\vec{S}}(Y_{10}\alpha)
=\frac{\hbar^{2}}{\sqrt{2}}Y_{11}\beta
$$

以及

$$
\hat{\vec{L}}\cdot\hat{\vec{S}}(Y_{11}\beta)
=-\frac{\hbar^{2}}{2}Y_{11}\beta+\frac{\hbar^{2}}{\sqrt{2}}Y_{10}\alpha
$$

对于 $l=1,j=\frac{1}{2}$，$\hat{\vec{L}}\cdot\hat{\vec{S}}$ 的本征值为

$$
\frac{1}{2}\left[j(j+1)-l(l+1)-\frac{3}{4}\right]\hbar^{2}
=-\hbar^{2}
$$

因此要求

$$
\hat{\vec{L}}\cdot\hat{\vec{S}}\phi=-\hbar^{2}\phi
$$

比较 $Y_{10}\alpha$ 和 $Y_{11}\beta$ 的系数得到

$$
\frac{b}{\sqrt{2}}=-a,\quad
\frac{a}{\sqrt{2}}-\frac{b}{2}=-b
$$

两式给出 $b=-\sqrt{2}a$。再由归一化条件 $|a|^{2}+|b|^{2}=1$，可以取

$$
a=\frac{1}{\sqrt{3}},\quad b=-\sqrt{\frac{2}{3}}
$$

所以

$$
\phi_{1,\frac{1}{2},\frac{1}{2}}
=\frac{1}{\sqrt{3}}Y_{10}\alpha-\sqrt{\frac{2}{3}}Y_{11}\beta
$$

8.2.3 (选做) 一般地说，如果电子的角动量是$\vec{J}$（轨道角动量或自旋角动量或总角动量），$\vec{J}$产生的磁矩是$\vec{M}_{J}$，那么总成立$\vec{M}_{J}/\mu_{\text{B}}=-g_{J}(\vec{J}/\hbar)$，其中$\mu_{\text{B}}$是Bohr磁子，$g_{J}$是无量纲常数，称为g因子或朗德Landé因子。已知：对于轨道角动量，$g_{L}=1$（见§6.4.3），对自旋角动量，$g_{S}=2$（见§8.1.1），因此问题是：对总角动量$\vec{J}=\vec{L}+\vec{S}$，$g_{J}=$？下面分两步来回答该问题。

<img src="./Quantum Mechanics Homework.assets/image-20260517195959670.png" alt="image-20260517195959670">

(a) 请证明：若$\vec{J}=\vec{J}_{1}+\vec{J}_{2}$，则有

$$
\bar{J}_{1z}=\frac{j(j+1)+j_{1}(j_{1}+1)-j_{2}(j_{2}+1)}{2j(j+1)}J_{z}, \quad \bar{J}_{2z}=\frac{j(j+1)+j_{2}(j_{2}+1)-j_{1}(j_{1}+1)}{2j(j+1)}J_{z}
$$

### Reference material

提示：参考§7.6.3给出的定理。它的半经典图像是（见右，摘自Griffiths《量子力学概论》中文版第182页，英文版p.278）：$\vec{J}_{1}$和$\vec{J}_{2}$在绕着$\vec{J}$转，$\vec{J}$又在绕着Z轴转，因而成立$\bar{J}_{1z}=\frac{\vec{J}_{1}\cdot\vec{J}}{j^{2}}J_{z}$，$\bar{J}_{2z}=\frac{\vec{J}_{2}\cdot\vec{J}}{j^{2}}J_{z}$。由此即可导出上式。

---

在 $|j,m\rangle$ 态中，$\vec{J}_{1}$ 和 $\vec{J}_{2}$ 的平均投影只能沿着 $\vec{J}$ 的方向。因此可以写成

$$
\bar{J}_{1z}=C_{1}J_{z},\quad \bar{J}_{2z}=C_{2}J_{z}
$$

系数由它们在 $\vec{J}$ 方向上的投影决定

$$
C_{1}=\frac{\overline{\vec{J}_{1}\cdot\vec{J}}}{\overline{\vec{J}^{2}}},\quad
C_{2}=\frac{\overline{\vec{J}_{2}\cdot\vec{J}}}{\overline{\vec{J}^{2}}}
$$

由 $\vec{J}=\vec{J}_{1}+\vec{J}_{2}$ 得到

$$
\vec{J}_{1}\cdot\vec{J}
=\frac{1}{2}(\vec{J}^{2}+\vec{J}_{1}^{2}-\vec{J}_{2}^{2})
$$

以及

$$
\vec{J}_{2}\cdot\vec{J}
=\frac{1}{2}(\vec{J}^{2}+\vec{J}_{2}^{2}-\vec{J}_{1}^{2})
$$

代入本征值

$$
\overline{\vec{J}^{2}}=j(j+1)\hbar^{2},\quad
\overline{\vec{J}_{1}^{2}}=j_{1}(j_{1}+1)\hbar^{2},\quad
\overline{\vec{J}_{2}^{2}}=j_{2}(j_{2}+1)\hbar^{2}
$$

于是

$$
C_{1}=\frac{j(j+1)+j_{1}(j_{1}+1)-j_{2}(j_{2}+1)}{2j(j+1)}
$$

以及

$$
C_{2}=\frac{j(j+1)+j_{2}(j_{2}+1)-j_{1}(j_{1}+1)}{2j(j+1)}
$$

所以

$$
\bar{J}_{1z}=\frac{j(j+1)+j_{1}(j_{1}+1)-j_{2}(j_{2}+1)}{2j(j+1)}J_{z},\quad
\bar{J}_{2z}=\frac{j(j+1)+j_{2}(j_{2}+1)-j_{1}(j_{1}+1)}{2j(j+1)}J_{z}
$$

这里 $J_{z}$ 表示总角动量在该态中的 $z$ 分量本征值。

(b) 再利用 $\vec{J}=\vec{L}+\vec{S}$ 和 $\vec{M}_{J}=\vec{M}_{L}+\vec{M}_{S}$，即可求出 $g_{J}$

对电子有

$$
\frac{\vec{M}_{L}}{\mu_{\mathrm{B}}}=-\frac{\vec{L}}{\hbar},\quad
\frac{\vec{M}_{S}}{\mu_{\mathrm{B}}}=-2\frac{\vec{S}}{\hbar}
$$

令

$$
C_{L}=\frac{j(j+1)+l(l+1)-s(s+1)}{2j(j+1)}
$$

以及

$$
C_{S}=\frac{j(j+1)+s(s+1)-l(l+1)}{2j(j+1)}
$$

则上一问给出

$$
\bar{L}_{z}=C_{L}J_{z},\quad \bar{S}_{z}=C_{S}J_{z}
$$

所以

$$
\begin{gathered}
\frac{\bar{M}_{Jz}}{\mu_{\mathrm{B}}}
=-\frac{1}{\hbar}(\bar{L}_{z}+2\bar{S}_{z})\\
=-\frac{1}{\hbar}(C_{L}+2C_{S})J_{z}
\end{gathered}
$$

与定义

$$
\frac{\bar{M}_{Jz}}{\mu_{\mathrm{B}}}=-g_{J}\frac{J_{z}}{\hbar}
$$

比较得到

$$
g_{J}=C_{L}+2C_{S}
=1+\frac{j(j+1)+s(s+1)-l(l+1)}{2j(j+1)}
$$

对电子 $s=\frac{1}{2}$，因此

$$
g_{J}=1+\frac{j(j+1)+\frac{3}{4}-l(l+1)}{2j(j+1)}
$$

8.2.4 (选做) 多分量波函数还可以描写其它物理系统。比如，某Bose-Einstein凝聚体(BEC)中的原子的自旋可能是$F_{1}$也可能是$F_{2}$，若它们在给定点$\vec{r}$上的几率振幅分别为$\psi_{1}$和$\psi_{2}$，那么系统的波函数就可以写为$\psi(\vec{r},t)=(\psi_{1}(\vec{r},t),\psi_{2}(\vec{r},t))^{T}$，这种情形称为赝自旋pseudospin。这时，系统的Hamiltonian可以写为$\hat{H}=-\frac{\hbar^{2}}{2\mu}\nabla^{2}+V$，$V=\begin{pmatrix} V_{0}(\vec{r}) & -A \\ -A & V_{0}(\vec{r}) \end{pmatrix}$，其中$V_{0}(\vec{r})$描写约束BEC系统的磁光阱，而$A$是正实常数。请解释一下非对角元素$A$的物理意义。

### Reference material

提示：观察$\partial|\psi_{i}|^{2}/\partial t$（$i=1,2$）。

---

记

$$
\hat{h}_{0}=-\frac{\hbar^{2}}{2\mu}\nabla^{2}+V_{0}(\vec{r})
$$

则 Schrödinger 方程为

$$
\mathrm{i}\hbar\pdv{\psi_{1}}{t}=\hat{h}_{0}\psi_{1}-A\psi_{2},\quad
\mathrm{i}\hbar\pdv{\psi_{2}}{t}=\hat{h}_{0}\psi_{2}-A\psi_{1}
$$

对两个分量的几率密度分别求导，可以得到

$$
\pdv{|\psi_{1}|^{2}}{t}+\nabla\cdot\vec{j}_{1}
=-\frac{2A}{\hbar}\operatorname{Im}(\psi_{1}^{*}\psi_{2})
$$

以及

$$
\pdv{|\psi_{2}|^{2}}{t}+\nabla\cdot\vec{j}_{2}
=\frac{2A}{\hbar}\operatorname{Im}(\psi_{1}^{*}\psi_{2})
$$

其中

$$
\vec{j}_{i}=\frac{\hbar}{2\mu\mathrm{i}}(\psi_{i}^{*}\nabla\psi_{i}-\psi_{i}\nabla\psi_{i}^{*})
$$

可以看到，一个分量的源项正好是另一个分量的汇项，所以总几率密度仍然守恒

$$
\pdv{}{t}(|\psi_{1}|^{2}+|\psi_{2}|^{2})+\nabla\cdot(\vec{j}_{1}+\vec{j}_{2})=0
$$

因此非对角元素 $A$ 的物理意义是两个赝自旋分量之间的相干耦合强度，它使原子可以在 $F_{1}$ 和 $F_{2}$ 两个内部态之间发生转化。若忽略空间运动和 $V_{0}$，这种耦合会导致两分量之间的 Rabi 振荡。

8.3.1 考虑原子序数（即核外电子数目）为 $Z$ 的原子。如果这些原子中的单电子能级从低到高的排列顺序是 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s < ⋯ (其中 4s < 3d，5s < 4d，6s < 4f < 5d 就是壳层交叉)。请你据此指出第 1,2,3,4,5,6 周期的元素的原子序数 $Z$ 的范围。

### Reference material

提示：一个周期中打头的和结尾的元素的主量子数是相同的。

---

每个壳层的容量为

$$
s:2,\quad p:6,\quad d:10,\quad f:14
$$

按照题目给出的能级顺序逐个填充。第 1 周期只填 $1s$，所以

$$
Z=1\sim 2
$$

第 2 周期从 $2s$ 到 $2p$，容量为 $2+6=8$，接在 $Z=2$ 后面，因此

$$
Z=3\sim 10
$$

第 3 周期从 $3s$ 到 $3p$，容量也是 $8$，因此

$$
Z=11\sim 18
$$

第 4 周期从 $4s$ 到 $4p$，中间插入 $3d$，容量为 $2+10+6=18$，因此

$$
Z=19\sim 36
$$

第 5 周期从 $5s$ 到 $5p$，中间插入 $4d$，容量为 $2+10+6=18$，因此

$$
Z=37\sim 54
$$

第 6 周期从 $6s$ 到 $6p$，中间插入 $4f$ 和 $5d$，容量为 $2+14+10+6=32$，因此

$$
Z=55\sim 86
$$

## 第9次作业

8.4.1 设 2 个电子的自旋状态为 $\phi_{1}=\begin{pmatrix}1\\0\end{pmatrix}$ 和 $\phi_{2}=\begin{pmatrix}\cos{\frac{\theta}{2}}\\ \sin{\frac{\theta}{2}}\mathrm{e}^{\mathrm{i}\varphi}\end{pmatrix}$，求它们处在单态和三重态的几率。

把两个电子先看成有标签的粒子，则总自旋态为

$$
\ket{\Phi}=\ket{\phi_{1}}_{1}\ket{\phi_{2}}_{2}
=\cos{\frac{\theta}{2}}\ket{++}+\sin{\frac{\theta}{2}}\mathrm{e}^{\mathrm{i}\varphi}\ket{+-}
$$

单态为

$$
\ket{0,0}=\frac{1}{\sqrt{2}}(\ket{+-}-\ket{-+})
$$

所以单态振幅为

$$
\langle 0,0|\Phi\rangle
=\frac{1}{\sqrt{2}}\sin{\frac{\theta}{2}}\mathrm{e}^{\mathrm{i}\varphi}
$$

因此处在单态的几率是

$$
P_{0}=|\langle 0,0|\Phi\rangle|^{2}
=\frac{1}{2}\sin^{2}{\frac{\theta}{2}}
=\frac{1-\cos{\theta}}{4}
$$

三重态可以取为

$$
\ket{1,1}=\ket{++},\quad
\ket{1,0}=\frac{1}{\sqrt{2}}(\ket{+-}+\ket{-+}),\quad
\ket{1,-1}=\ket{--}
$$

于是

$$
\begin{gathered}
P_{1}=|\langle 1,1|\Phi\rangle|^{2}+|\langle 1,0|\Phi\rangle|^{2}+|\langle 1,-1|\Phi\rangle|^{2}\\
=\cos^{2}{\frac{\theta}{2}}+\frac{1}{2}\sin^{2}{\frac{\theta}{2}}\\
=\frac{3+\cos{\theta}}{4}
\end{gathered}
$$

也可以直接用 $P_{1}=1-P_{0}$ 得到同样的结果。

8.4.2 有 3 个电子的自旋合成为 1 个总自旋，即 $\hat{\vec{S}}=\hat{\vec{S}}_{1}+\hat{\vec{S}}_{2}+\hat{\vec{S}}_{3}$。可以先合成出 $\hat{\vec{S}}_{12}=\hat{\vec{S}}_{1}+\hat{\vec{S}}_{2}$，再合成出 $\hat{\vec{S}}=\hat{\vec{S}}_{12}+\hat{\vec{S}}_{3}$，因此有 3 种可能的情形：$S_{12}=0,S=\frac{1}{2}$；$S_{12}=1,S=\frac{3}{2}$；$S_{12}=1,S=\frac{1}{2}$。态 $\ket{S,m_{S}}$ 总是 $\ket{\pm_{1},\pm_{2},\pm_{3}}$ 的线性组合，请把它们写出来。

### Reference material

提示：$S_{12}=0,S=\frac{1}{2}$ 和 $S_{12}=1,S=\frac{3}{2}$ 是不难写的，$S_{12}=1,S=\frac{1}{2}$ 和它们正交。
**说明** 读者会问：我们知道 $\alpha=\begin{pmatrix}1\\0\end{pmatrix},\beta=\begin{pmatrix}0\\1\end{pmatrix}$，那么 $\alpha_{1}\beta_{2}=$？答案是 $\alpha_{1}\beta_{2}=\begin{pmatrix}1\begin{pmatrix}0\\1\end{pmatrix}\\0\begin{pmatrix}0\\1\end{pmatrix}\end{pmatrix}=\begin{pmatrix}0\\1\\0\\0\end{pmatrix}$，类似可得其它 $\pm_{1}\pm_{2}$ 态的列矩阵表示。这叫做矩阵的直乘。但实际上很少用这种形式来进行表达和计算。

---

先把前两个电子合成。对于 $1,2$ 两个电子有三重态

$$
\begin{gathered}
\ket{1,1}_{12}=\ket{++}_{12}\\
\ket{1,0}_{12}=\frac{1}{\sqrt{2}}(\ket{+-}_{12}+\ket{-+}_{12})\\
\ket{1,-1}_{12}=\ket{--}_{12}
\end{gathered}
$$

以及单态

$$
\ket{0,0}_{12}=\frac{1}{\sqrt{2}}(\ket{+-}_{12}-\ket{-+}_{12})
$$

下面记 $\ket{S_{12};S,m}$ 表示先合成出 $S_{12}$，再与第三个电子合成出总自旋 $S$ 的态。

对于 $S_{12}=0,S=\frac{1}{2}$，只需要把第三个电子接上去，所以

$$
\begin{gathered}
\ket{0;\frac{1}{2},\frac{1}{2}}
=\frac{1}{\sqrt{2}}(\ket{+-+}-\ket{-++})\\
\ket{0;\frac{1}{2},-\frac{1}{2}}
=\frac{1}{\sqrt{2}}(\ket{+--}-\ket{-+-})
\end{gathered}
$$

对于 $S_{12}=1,S=\frac{3}{2}$，最高权态为 $\ket{+++}$，反复用降算符或者直接利用完全对称性得到

$$
\begin{gathered}
\ket{1;\frac{3}{2},\frac{3}{2}}=\ket{+++}\\
\ket{1;\frac{3}{2},\frac{1}{2}}
=\frac{1}{\sqrt{3}}(\ket{++-}+\ket{+-+}+\ket{-++})\\
\ket{1;\frac{3}{2},-\frac{1}{2}}
=\frac{1}{\sqrt{3}}(\ket{+--}+\ket{-+-}+\ket{--+})\\
\ket{1;\frac{3}{2},-\frac{3}{2}}=\ket{---}
\end{gathered}
$$

最后考虑 $S_{12}=1,S=\frac{1}{2}$ 的情况。在 $m=\frac{1}{2}$ 的子空间里，$S_{12}=1$ 的两个基矢是

$$
\ket{1,1}_{12}\ket{-}_{3},\quad \ket{1,0}_{12}\ket{+}_{3}
$$

其中 $S=\frac{3}{2}$ 的态为

$$
\ket{1;\frac{3}{2},\frac{1}{2}}
=\frac{1}{\sqrt{3}}\ket{1,1}_{12}\ket{-}_{3}
+\sqrt{\frac{2}{3}}\ket{1,0}_{12}\ket{+}_{3}
$$

所以与它正交的归一化态可以取为

$$
\ket{1;\frac{1}{2},\frac{1}{2}}
=\frac{1}{\sqrt{3}}\ket{1,0}_{12}\ket{+}_{3}
-\sqrt{\frac{2}{3}}\ket{1,1}_{12}\ket{-}_{3}
$$

写成 $\ket{\pm_{1}\pm_{2}\pm_{3}}$ 的形式就是

$$
\ket{1;\frac{1}{2},\frac{1}{2}}
=\frac{1}{\sqrt{6}}(\ket{+-+}+\ket{-++}-2\ket{++-})
$$

对这个态作用总降算符，得到另一个 $m=-\frac{1}{2}$ 的态

$$
\ket{1;\frac{1}{2},-\frac{1}{2}}
=\frac{1}{\sqrt{6}}(2\ket{--+}-\ket{+--}-\ket{-+-})
$$

这里最后一组态的整体相位也可以同时反过来，这不影响物理结果。

### 第九章 带电粒子在电磁场中的运动

9.1.1 一方面 Hamiltonian 算符是 $\hat{H}=\frac{1}{2\mu}(\vec{P}-q\vec{A})^{2}+q\phi$，另一方面又有 $\vec{P}-q\vec{A}=\mu\dot{\vec{r}}$，所以实际上 $H=\frac{\mu}{2}\dot{\vec{r}}^{2}+q\phi$。你怎么理解这个结果的物理含义？

这里关键是区分正则动量和机械动量。带电粒子在电磁场中的 Lagrangian 可以写为

$$
L=\frac{1}{2}\mu\dot{\vec{r}}^{2}-q\phi+q\dot{\vec{r}}\cdot\vec{A}
$$

因此正则动量不是机械动量，而是

$$
\vec{P}=\mu\dot{\vec{r}}+q\vec{A}
$$

也就是

$$
\vec{P}-q\vec{A}=\mu\dot{\vec{r}}
$$

Hamiltonian 是

$$
H=\vec{P}\cdot\dot{\vec{r}}-L
=\frac{1}{2}\mu\dot{\vec{r}}^{2}+q\phi
$$

所以从物理能量的角度看，粒子的能量仍然只是动能加上电势能。矢量势 $\vec{A}$ 没有在能量里显式出现，是因为磁场力总是垂直于速度，它只改变速度方向而不做功。

但是在 Hamiltonian 形式里必须用正则动量 $\vec{P}$，所以 $\vec{A}$ 会出现在

$$
H=\frac{1}{2\mu}(\vec{P}-q\vec{A})^{2}+q\phi
$$

这并不矛盾。$\vec{P}$ 是与坐标共轭、满足通常对易关系的量，而 $\mu\dot{\vec{r}}$ 才是有直接力学意义的动量。

9.1.2 熟知平移不变性导致动量守恒，旋转不变性导致角动量守恒，但是在有磁场存在的情况下，如何判断这些不变性却要小心，因为出现在 $\hat{H}$ 里的不是磁场 $\vec{B}$ 而是矢量势 $\vec{A}$。比如匀强磁场 $\vec{B}=B\vec{e}_{z}$ 显然是沿 X 轴和 Y 轴平移以及绕 Z 轴旋转不变的，那么 $\hat{p}_{x},\hat{p}_{y},\hat{L}_{z}$ 都守恒吗？(a) 取 $\vec{A}=(-By,0,0)$ 谁守恒？(b) 取 $\vec{A}=(0,Bx,0)$ 谁守恒？(c) 取 $\vec{A}=(-By/2,Bx/2,0)$ 谁守恒？

#### Reference material

评论：问题的本质在于现在的动量和角动量都是正则的而不是机械的，它们取决于矢量势的选择。所以，在有磁场存在的情况下，"确定的物理系统有确定的守恒量"这个概念，并不成立。

---

只看 $x,y$ 平面内的运动，并且忽略与本题无关的常数项。若 Hamiltonian 中不显含某个坐标，则对应的正则动量守恒；若 Hamiltonian 在通常的 $z$ 轴转动下形式不变，则 $\hat{L}_{z}$ 守恒。

(a) 当 $\vec{A}=(-By,0,0)$ 时

$$
\hat{H}_{a}
=\frac{1}{2\mu}\left[(\hat{p}_{x}+qB\hat{y})^{2}+\hat{p}_{y}^{2}+\hat{p}_{z}^{2}\right]
$$

它不显含 $x$，但显含 $y$，而且形式上也不是绕 $z$ 轴旋转不变的。因此

$$
[\hat{H}_{a},\hat{p}_{x}]=0,\quad
[\hat{H}_{a},\hat{p}_{y}]\neq 0,\quad
[\hat{H}_{a},\hat{L}_{z}]\neq 0
$$

所以只有 $\hat{p}_{x}$ 守恒。

(b) 当 $\vec{A}=(0,Bx,0)$ 时

$$
\hat{H}_{b}
=\frac{1}{2\mu}\left[\hat{p}_{x}^{2}+(\hat{p}_{y}-qB\hat{x})^{2}+\hat{p}_{z}^{2}\right]
$$

它不显含 $y$，但显含 $x$，也不是绕 $z$ 轴旋转不变的。因此

$$
[\hat{H}_{b},\hat{p}_{x}]\neq 0,\quad
[\hat{H}_{b},\hat{p}_{y}]=0,\quad
[\hat{H}_{b},\hat{L}_{z}]\neq 0
$$

所以只有 $\hat{p}_{y}$ 守恒。

(c) 当 $\vec{A}=(-By/2,Bx/2,0)$ 时

$$
\begin{gathered}
\hat{H}_{c}
=\frac{1}{2\mu}\left[\left(\hat{p}_{x}+\frac{qB}{2}\hat{y}\right)^{2}
+\left(\hat{p}_{y}-\frac{qB}{2}\hat{x}\right)^{2}+\hat{p}_{z}^{2}\right]\\
=\frac{\hat{p}_{x}^{2}+\hat{p}_{y}^{2}+\hat{p}_{z}^{2}}{2\mu}
-\frac{qB}{2\mu}\hat{L}_{z}
+\frac{q^{2}B^{2}}{8\mu}(\hat{x}^{2}+\hat{y}^{2})
\end{gathered}
$$

这个形式显然与 $\hat{L}_{z}$ 对易，但是它显含 $x,y$，所以

$$
[\hat{H}_{c},\hat{p}_{x}]\neq 0,\quad
[\hat{H}_{c},\hat{p}_{y}]\neq 0,\quad
[\hat{H}_{c},\hat{L}_{z}]=0
$$

因此只有 $\hat{L}_{z}$ 守恒。

9.1.3 虽然 Schrödinger 方程是规范不变的，但矢量势 $\vec{A}$ 的选择仍然有其它的考虑，而不是完全任意的。例如空间中有匀强磁场 $\vec{B}=B\vec{e}_{z}$ 而粒子在 XY 平面中运动，那么在以下几种附加条件下，你认为选择哪种 $\vec{A}$（参见 9.1.2 题）更方便？

(a) 空间中同时存在匀强电场 $\vec{E}=E\vec{e}_{x}$

可以取标势 $\phi=-Ex$。这时系统仍然沿 $y$ 方向平移不变，所以最好选

$$
\vec{A}=(0,Bx,0)
$$

于是 Hamiltonian 为

$$
\hat{H}
=\frac{1}{2\mu}\left[\hat{p}_{x}^{2}+(\hat{p}_{y}-qB\hat{x})^{2}+\hat{p}_{z}^{2}\right]-qE\hat{x}
$$

它不显含 $y$，所以 $\hat{p}_{y}$ 守恒。这样可以先把 $p_{y}, p_{z}$ 看成常数，把问题化成关于 $x$ 的一维问题。

(b) 粒子同时在各向同性谐振子势能场 $V=\frac{1}{2}\mu\omega^{2}r^{2}$ 中运动。

这时附加势能保持绕 $z$ 轴的旋转对称性，所以应当选对称规范

$$
\vec{A}=\left(-\frac{By}{2},\frac{Bx}{2},0\right)
$$

代入后

$$
\hat{H}
=\frac{\hat{p}_{x}^{2}+\hat{p}_{y}^{2}+\hat{p}_{z}^{2}}{2\mu}
+\frac{1}{2}\mu\left(\omega^{2}+\frac{q^{2}B^{2}}{4\mu^{2}}\right)(\hat{x}^{2}+\hat{y}^{2})
-\frac{qB}{2\mu}\hat{L}_{z}
$$

因此 $\hat{L}_{z}$ 仍然是好量子数。这比 Landau 规范更适合利用圆对称性。

9.1.4（选做）假设电量为 $q$ 的粒子在半径为 $a$ 的超导体细圆环中运动，垂直于该圆环所在平面加了一个强度为 $B$ 的均匀磁场。求证：穿过该圆环的磁通量 $\Phi$ 必是量子化的，即 $\Phi=n \frac{h}{q}$（$n\in \mathbb{Z}$）

#### Reference material

提示：在超导体中粒子的波函数是 $\psi=\sqrt{\rho}\mathrm{e}^{\mathrm{i}\theta}$ 而 $\rho$ 是常数；在有磁场存在的情况下，电流密度的表达式为 $\vec{j}_{e}=\frac{q}{2\mu}[\psi^{*}(-\mathrm{i}\hbar\nabla-q\vec{A})\psi+\psi(\mathrm{i}\hbar\nabla-q\vec{A})\psi^{*}]$ 而在超导体中 $\vec{j}_{e}=0$，这导致了 $\hbar\nabla\theta=q\vec{A}$。磁通量子化的现象最先由 F. London 在 1950 年预言，随后被实验所证实。如果 $q=-e$，那么磁通的量子化单位是 $\Phi_{0}=h/e$，这个量也被称为 Dirac 的单位磁荷。但是实验发现超导环的磁通量量子化的单位不是 $\Phi_{0}$ 而是 $\Phi_{0}/2$，实际上这验证了超导微观机制的 Bardeen-Cooper-Schrieffer (BCS) 理论，因为该理论认为超导体中的载流子是电子对 (Cooper pair)，其电荷为 $-2e$
**注意：如果不是超导体，这个结论是不成立的。**

---

把

$$
\psi=\sqrt{\rho}\mathrm{e}^{\mathrm{i}\theta}
$$

代入电流密度公式。因为 $\rho$ 为常数，有

$$
\nabla\psi=\mathrm{i}\psi\nabla\theta,\quad
\nabla\psi^{*}=-\mathrm{i}\psi^{*}\nabla\theta
$$

于是

$$
\vec{j}_{e}
=\frac{q\rho}{\mu}(\hbar\nabla\theta-q\vec{A})
$$

超导体中 $\vec{j}_{e}=0$，所以

$$
\hbar\nabla\theta=q\vec{A}
$$

沿圆环绕一圈积分，得到

$$
q\oint\vec{A}\cdot\dd{\vec{l}}
=\hbar\oint\nabla\theta\cdot\dd{\vec{l}}
=\hbar\Delta\theta
$$

左边的环路积分就是 $q\Phi$。另一方面，波函数必须单值，所以绕一圈以后相位只能改变 $2\pi$ 的整数倍

$$
\Delta\theta=2\pi n,\quad n\in\mathbb{Z}
$$

因此

$$
q\Phi=2\pi\hbar n=hn
$$

也就是

$$
\Phi=\frac{h}{q}n,\quad n\in\mathbb{Z}
$$

如果 $q$ 为负，负号可以吸收到整数 $n$ 中；如果载流子是 Cooper 对，实际的电荷大小为 $2e$，于是磁通量子单位变为 $\frac{h}{2e}$

9.2.1 选 $\vec{A}=(-By, 0, 0)$，重新写出 Hamiltonian，然后求出它的能级和波函数。提示：这时候 $\hat{p}_{x}$ 是守恒的。你会发现，"Landau 能级与线性谐振子的能级一样" 在这里几乎是一眼看穿的事情。

对于电子，仍取 $e>0$，所以最小耦合为 $\hat{\vec{p}}+e\vec{A}$。在这个规范下

$$
\hat{H}
=\frac{1}{2\mu}\left[(\hat{p}_{x}-eB\hat{y})^{2}+\hat{p}_{y}^{2}\right]
$$

Hamiltonian 不显含 $x$，所以可以同时取 $\hat{p}_{x}$ 的本征态。令

$$
\psi(x,y)=\mathrm{e}^{\mathrm{i}kx}u(y),\quad \hat{p}_{x}\psi=\hbar k\psi
$$

代入 Schrödinger 方程后得到关于 $y$ 的一维方程

$$
\left[\frac{\hat{p}_{y}^{2}}{2\mu}
+\frac{e^{2}B^{2}}{2\mu}\left(y-\frac{\hbar k}{eB}\right)^{2}\right]u(y)
=Eu(y)
$$

这就是中心在

$$
y_{0}=\frac{\hbar k}{eB}
$$

的线性谐振子，角频率为

$$
\omega_{\mathrm{c}}=\frac{eB}{\mu}
$$

因此能级为

$$
E_{n}=\left(n+\frac{1}{2}\right)\hbar\omega_{\mathrm{c}},\quad n=0,1,2,\cdots
$$

能量与 $k$ 无关，这正是 Landau 能级的简并性。若沿 $x$ 方向取长度为 $L_{x}$ 的归一化平面波，则波函数可写为

$$
\psi_{n k}(x,y)=\frac{1}{\sqrt{L_{x}}}\mathrm{e}^{\mathrm{i}kx}\varphi_{n}(y-y_{0})
$$

其中

$$
\begin{gathered}
\varphi_{n}(\eta)
=\frac{1}{\sqrt{2^{n}n!}}\left(\frac{\alpha^{2}}{\pi}\right)^{1/4}
H_{n}(\alpha\eta)\mathrm{e}^{-\alpha^{2}\eta^{2}/2}\\
\alpha=\sqrt{\frac{eB}{\hbar}}
\end{gathered}
$$

9.2.2 我们已经看到，对 Landau 能级这个问题，选择不同的矢量势得到相同的能谱（虽然本征函数不同）。实际上，如果采用算符代数方法，可以无需明确地选好矢量势就得到能谱。现在的 Hamiltonian 是 $\hat{H}=\frac{1}{2\mu}[(\hat{p}_{x}+eA_{x})^{2}+(\hat{p}_{y}+eA_{y})^{2}]$，让我们令 $\hat{Q}=\sqrt{\frac{1}{\hbar eB}}(\hat{p}_{x}+eA_{x})$，$\hat{P}=\sqrt{\frac{1}{\hbar eB}}(\hat{p}_{y}+eA_{y})$。请证明：

(a) $[\hat{P},\hat{Q}]=-\mathrm{i}$

记

$$
\hat{\pi}_{x}=\hat{p}_{x}+eA_{x},\quad
\hat{\pi}_{y}=\hat{p}_{y}+eA_{y}
$$

则

$$
\begin{gathered}
[\hat{\pi}_{x},\hat{\pi}_{y}]
=[\hat{p}_{x},eA_{y}]+[eA_{x},\hat{p}_{y}]\\
=-\mathrm{i}\hbar e\pdv[]{A_{y}}{x}
+\mathrm{i}\hbar e\pdv[]{A_{x}}{y}\\
=-\mathrm{i}\hbar eB
\end{gathered}
$$

因此

$$
[\hat{Q},\hat{P}]
=-\mathrm{i}
$$

严格按这里的定义和通常的 $\vec{B}=\nabla\times\vec{A}$，得到的是 $[\hat{Q},\hat{P}]=-\mathrm{i}$，也就是 $[\hat{P},\hat{Q}]=\mathrm{i}$。题面中的 $[\hat{P},\hat{Q}]=-\mathrm{i}$ 只差一个正则变量次序或 $\hat{P}\to-\hat{P}$ 的约定，不影响下面的能谱。为了和题面后面的谐振子形式保持一致，下面把这对无量纲变量看作满足

$$
[\hat{P},\hat{Q}]=-\mathrm{i}
$$

(b) $\hat{H}=\frac{1}{2}(\hat{P}^{2}+\hat{Q}^{2})\hbar\omega_{\mathrm{c}}$

由定义直接有

$$
\hat{Q}^{2}=\frac{\hat{\pi}_{x}^{2}}{\hbar eB},\quad
\hat{P}^{2}=\frac{\hat{\pi}_{y}^{2}}{\hbar eB}
$$

因此

$$
\begin{gathered}
\hat{H}
=\frac{1}{2\mu}(\hat{\pi}_{x}^{2}+\hat{\pi}_{y}^{2})\\
=\frac{\hbar eB}{2\mu}(\hat{Q}^{2}+\hat{P}^{2})\\
=\frac{1}{2}(\hat{P}^{2}+\hat{Q}^{2})\hbar\omega_{\mathrm{c}}
\end{gathered}
$$

其中

$$
\omega_{\mathrm{c}}=\frac{eB}{\mu}
$$

(c) 能谱是 $E_{n}=(n+\frac{1}{2})\hbar\omega_{\mathrm{c}}$，$n=0,1,2,\cdots$

由 (a) 可知 $\hat{Q}$ 和 $\hat{P}$ 正好是一对无量纲正则变量。定义

$$
\hat{a}=\frac{1}{\sqrt{2}}(\hat{Q}+\mathrm{i}\hat{P}),\quad
\hat{a}^{\dagger}=\frac{1}{\sqrt{2}}(\hat{Q}-\mathrm{i}\hat{P})
$$

则

$$
[\hat{a},\hat{a}^{\dagger}]=1
$$

而且

$$
\hat{Q}^{2}+\hat{P}^{2}=2\hat{a}^{\dagger}\hat{a}+1
$$

所以 Hamiltonian 化为

$$
\hat{H}
=\hbar\omega_{\mathrm{c}}\left(\hat{a}^{\dagger}\hat{a}+\frac{1}{2}\right)
$$

于是能谱就是

$$
E_{n}=\left(n+\frac{1}{2}\right)\hbar\omega_{\mathrm{c}},\quad n=0,1,2,\cdots
$$

## 第10次作业

9.4.1 `§9.2` 中研究电子在匀强磁场中的 Landau 能级时，没有考虑电子有自旋。现在把自旋加上去，问：这时 Hamiltonian 变成了什么样子？电子的能谱有什么变化？各个能级的简并度有什么变化？

电子的自旋磁矩为

$$
\hat{\vec{\mu}}_{s}=-g\frac{e}{2\mu}\hat{\vec{S}}
$$

所以

$$
\begin{gathered}
\hat{H}
=\frac{1}{2\mu}(\hat{\vec{p}}+e\vec{A})^{2}
-\hat{\vec{\mu}}_{s}\cdot\vec{B}\\
=\frac{1}{2\mu}(\hat{\vec{p}}+e\vec{A})^{2}
+g\frac{e}{2\mu}\hat{\vec{S}}\cdot\vec{B}
\end{gathered}
$$

若 $\vec{B}=B\vec{e}_{z}$，则

$$
\hat{H}
=\frac{1}{2\mu}(\hat{\vec{p}}+e\vec{A})^{2}
+g\frac{eB}{2\mu}\hat{S}_{z}
$$

因此能量变成

$$
\begin{gathered}
E_{n,m_{s}}
=\left(n+\frac{1}{2}\right)\hbar\omega_{\mathrm{c}}
+\frac{g}{2}m_{s}\hbar\omega_{\mathrm{c}}\\
m_{s}=\pm\frac{1}{2}
\end{gathered}
$$

其中 $S_{z}=m_{s}\hbar$。若取电子的 $g=2$，则

$$
E_{n,\frac{1}{2}}=(n+1)\hbar\omega_{\mathrm{c}},\quad
E_{n,-\frac{1}{2}}=n\hbar\omega_{\mathrm{c}}
$$

也就是说原来的零点能被自旋 Zeeman 能抵消了一支。若把最后的能级统一记为

$$
E_{N}=N\hbar\omega_{\mathrm{c}},\quad N=0,1,2,\cdots
$$

则 $N=0$ 只能来自

$$
n=0,\quad m_{s}=-\frac{1}{2}
$$

而 $N\geq 1$ 时有两种来源

$$
\begin{gathered}
n=N,\quad m_{s}=-\frac{1}{2}\\
n=N-1,\quad m_{s}=\frac{1}{2}
\end{gathered}
$$

所以若每个无自旋 Landau 能级的轨道简并度为 $\mathcal{D}$，则最低能级的简并度仍为 $\mathcal{D}$，而其余能级的简并度变为 $2\mathcal{D}$。在面积为 $\mathcal{A}$ 的有限样品中，通常有

$$
\mathcal{D}=\frac{eB\mathcal{A}}{h}
$$

如果不取 $g=2$，则每个 Landau 能级只是分裂成两支，每一支仍有同样的轨道简并度 $\mathcal{D}$。

9.4.2（选做）在钠的 D 黄线的情况下，强磁场下的正常 Zeeman 效应是 $3P$ 分裂为 5 个能级，其中有 1 个 2 重简并（见图 9.4.1）；弱磁场下的反常 Zeeman 效应是 $3P_{3/2}$ 分裂为 4 个能级，$3P_{1/2}$ 分裂为 2 个能级，都没有简并（见图 9.4.2，两种情况下的 $3S$ 都是分裂为 2 个能级，不管它）。请分析一下：当磁场强度逐渐减小的时候，强场情形下（前者）的各个量子态如何逐步重新组合出弱场情形下（后者）的各个量子态？

这里 $3P$ 态有 $l=1$，电子自旋为 $s=\frac{1}{2}$。强磁场中 Zeeman 项占主导，好量子数近似为 $m_{l}$ 和 $m_{s}$，能量主要由

$$
\Delta E_{\mathrm{B}}=\mu_{\mathrm{B}}B(m_{l}+2m_{s})
$$

决定。因此五个强场能级可以按 $M=m_{l}+2m_{s}$ 写为

$$
\begin{gathered}
M=2\quad \ket{1,\frac{1}{2}}\\
M=1\quad \ket{0,\frac{1}{2}}\\
M=0\quad \ket{-1,\frac{1}{2}},\quad \ket{1,-\frac{1}{2}}\\
M=-1\quad \ket{0,-\frac{1}{2}}\\
M=-2\quad \ket{-1,-\frac{1}{2}}
\end{gathered}
$$

其中 $\ket{m_{l},m_{s}}$ 表示未耦合表象。中间的 $M=0$ 有二重简并。

当磁场减小时，旋轨耦合变得重要，好量子数逐渐变成

$$
\hat{\vec{J}}=\hat{\vec{L}}+\hat{\vec{S}},\quad
m_{j}=m_{l}+m_{s}
$$

注意 $m_{j}$ 在整个过程中仍然守恒，所以只有相同 $m_{j}$ 的态会互相混合。两个极端态本来就是唯一的

$$
\begin{gathered}
\ket{\frac{3}{2},\frac{3}{2}}=\ket{1,\frac{1}{2}}\\
\ket{\frac{3}{2},-\frac{3}{2}}=\ket{-1,-\frac{1}{2}}
\end{gathered}
$$

它们直接成为弱场下 $3P_{3/2}$ 的 $m_{j}=\pm\frac{3}{2}$ 态。

对于 $m_{j}=\frac{1}{2}$，强场基矢为 $\ket{0,\frac{1}{2}}$ 和 $\ket{1,-\frac{1}{2}}$。弱场下它们重新组合为

$$
\begin{gathered}
\ket{\frac{3}{2},\frac{1}{2}}
=\sqrt{\frac{2}{3}}\ket{0,\frac{1}{2}}
+\sqrt{\frac{1}{3}}\ket{1,-\frac{1}{2}}\\
\ket{\frac{1}{2},\frac{1}{2}}
=\sqrt{\frac{1}{3}}\ket{0,\frac{1}{2}}
-\sqrt{\frac{2}{3}}\ket{1,-\frac{1}{2}}
\end{gathered}
$$

对于 $m_{j}=-\frac{1}{2}$，强场基矢为 $\ket{-1,\frac{1}{2}}$ 和 $\ket{0,-\frac{1}{2}}$。弱场下它们重新组合为

$$
\begin{gathered}
\ket{\frac{3}{2},-\frac{1}{2}}
=\sqrt{\frac{1}{3}}\ket{-1,\frac{1}{2}}
+\sqrt{\frac{2}{3}}\ket{0,-\frac{1}{2}}\\
\ket{\frac{1}{2},-\frac{1}{2}}
=\sqrt{\frac{2}{3}}\ket{-1,\frac{1}{2}}
-\sqrt{\frac{1}{3}}\ket{0,-\frac{1}{2}}
\end{gathered}
$$

所以强场下那个二重简并的 $M=0$ 并不是整体变成弱场下的一个二重态；它的两个态分别属于 $m_{j}=-\frac{1}{2}$ 和 $m_{j}=\frac{1}{2}$ 两个不同的子空间，并分别与相邻的强场能级混合。最后形成的就是弱场下的两组精细结构能级

$$
\begin{gathered}
3P_{3/2}\quad m_{j}=\frac{3}{2},\frac{1}{2},-\frac{1}{2},-\frac{3}{2}\\
3P_{1/2}\quad m_{j}=\frac{1}{2},-\frac{1}{2}
\end{gathered}
$$

在弱场极限中，它们的 Zeeman 位移为

$$
\begin{gathered}
\Delta E=\mu_{\mathrm{B}}Bg_{j}m_{j}\\
g_{3/2}=\frac{4}{3}\\
g_{1/2}=\frac{2}{3}
\end{gathered}
$$

10.1.1 设 $\hat{H}^{(0)}$ 有 2 个不简并能级 $E_{10}>E_{20}$，$\hat{H}'$ 在它上面的矩阵元为 $H'_{11}=H'_{22}=a$，$H'_{12}=H'_{21}=b$，$a,b$ 是实数。
(a) 用微扰论求 $\hat{H}=\hat{H}^{(0)}+\hat{H}'$ 的能级至二级修正。

记

$$
\Delta=E_{10}-E_{20}>0
$$

非简并微扰论中，一级修正为对角元，所以

$$
E_{1}^{(1)}=a,\quad E_{2}^{(1)}=a
$$

二级修正为

$$
\begin{gathered}
E_{1}^{(2)}=\frac{|H'_{21}|^{2}}{E_{10}-E_{20}}=\frac{b^{2}}{\Delta}\\
E_{2}^{(2)}=\frac{|H'_{12}|^{2}}{E_{20}-E_{10}}=-\frac{b^{2}}{\Delta}
\end{gathered}
$$

因此到二级为止

$$
\begin{gathered}
E_{1}=E_{10}+a+\frac{b^{2}}{\Delta}\\
E_{2}=E_{20}+a-\frac{b^{2}}{\Delta}
\end{gathered}
$$
(b) 实际上这个问题是有严格解的，把严格解也求出来，并讨论一下：在什么条件下严格解化为微扰论的解？

另一方面，在 $\ket{1},\ket{2}$ 这组基下，完整 Hamiltonian 的矩阵为

$$
H=
\begin{pmatrix}
E_{10}+a & b\\
b & E_{20}+a
\end{pmatrix}
$$

严格本征值为

$$
E_{\pm}
=\frac{E_{10}+E_{20}}{2}+a
\pm\sqrt{\frac{\Delta^{2}}{4}+b^{2}}
$$

其中 $E_{+}$ 对应较高能级，$E_{-}$ 对应较低能级。当 $|b|\ll \Delta$ 时

$$
\sqrt{\frac{\Delta^{2}}{4}+b^{2}}
=\frac{\Delta}{2}\sqrt{1+\frac{4b^{2}}{\Delta^{2}}}
\simeq \frac{\Delta}{2}+\frac{b^{2}}{\Delta}
$$

于是

$$
\begin{gathered}
E_{+}\simeq E_{10}+a+\frac{b^{2}}{\Delta}\\
E_{-}\simeq E_{20}+a-\frac{b^{2}}{\Delta}
\end{gathered}
$$

这就回到了微扰论的结果。所以真正需要的小量条件是非对角耦合远小于能级间隔，即 $|b|\ll E_{10}-E_{20}$。对角元 $a$ 在这个例子里只是把两个能级整体平移。

10.1.2 习题 3.3.1 是求粒子在无限深势阱加中心 $\delta$ 势垒中的能谱，其中

$$
\begin{gathered}
V(x)=\gamma\delta(x)\quad (|x|<a,\gamma>0)\\
V(x)=+\infty\quad (|x|>a)
\end{gathered}
$$

那里是求精确解，现在请你把中心 $\delta$ 势垒 $V'(x)=\gamma\delta(x)$ 做为对无限深势阱的微扰再解一下（准确到一级微扰），并比较二者的结果。

先看未受微扰的无限深势阱 $-a<x<a$。按宇称分类，偶宇称本征态可以写为

$$
\begin{gathered}
\psi_{r}^{(+)}(x)=\frac{1}{\sqrt{a}}\cos{\frac{(2r+1)\pi x}{2a}}\\
E_{r}^{(+,0)}=\frac{\hbar^{2}}{2\mu}\left(\frac{(2r+1)\pi}{2a}\right)^{2}\\
r=0,1,2,\cdots
\end{gathered}
$$

奇宇称本征态可以写为

$$
\begin{gathered}
\psi_{r}^{(-)}(x)=\frac{1}{\sqrt{a}}\sin{\frac{r\pi x}{a}}\\
E_{r}^{(-,0)}=\frac{\hbar^{2}}{2\mu}\left(\frac{r\pi}{a}\right)^{2}\\
r=1,2,\cdots
\end{gathered}
$$

一级能量修正为

$$
E^{(1)}=\langle \psi| \gamma\delta(x)|\psi\rangle
=\gamma|\psi(0)|^{2}
$$

对于偶宇称态，

$$
|\psi_{r}^{(+)}(0)|^{2}=\frac{1}{a}
$$

所以

$$
E_{r}^{(+)}
=\frac{\hbar^{2}}{2\mu}\left(\frac{(2r+1)\pi}{2a}\right)^{2}
+\frac{\gamma}{a}
$$

对于奇宇称态，

$$
\psi_{r}^{(-)}(0)=0
$$

所以

$$
E_{r}^{(-)}
=\frac{\hbar^{2}}{2\mu}\left(\frac{r\pi}{a}\right)^{2}
$$

和精确解比较：奇宇称态精确地满足 $\psi(0)=0$，所以不受 $\delta$ 势垒影响，这一点和微扰论完全一致。偶宇称态的精确解可以写成 $E=\frac{\hbar^{2}k^{2}}{2\mu}$，并满足边界条件和导数跃变条件

$$
\begin{gathered}
\psi(a)=0\\
\left.\dv[]{\psi}{x}\right|_{0^{+}}
-\left.\dv[]{\psi}{x}\right|_{0^{-}}
=\frac{2\mu\gamma}{\hbar^{2}}\psi(0)
\end{gathered}
$$

这给出超越方程

$$
-k\cot{ka}=\frac{\mu\gamma}{\hbar^{2}}
$$

当 $\gamma$ 很小时，令

$$
k=k_{r}^{(0)}+\delta k,\quad
k_{r}^{(0)}=\frac{(2r+1)\pi}{2a}
$$

因为 $\cot{(k_{r}^{(0)}a+\delta k a)}\simeq-\delta k a$，所以

$$
-k\cot{ka}\simeq k_{r}^{(0)}a\delta k
=\frac{\mu\gamma}{\hbar^{2}}
$$

于是

$$
\delta k=\frac{\mu\gamma}{\hbar^{2}k_{r}^{(0)}a}
$$

能量展开为

$$
E=\frac{\hbar^{2}}{2\mu}(k_{r}^{(0)}+\delta k)^{2}
\simeq E_{r}^{(+,0)}+\frac{\hbar^{2}k_{r}^{(0)}}{\mu}\delta k
=E_{r}^{(+,0)}+\frac{\gamma}{a}
$$

这正好就是一级微扰论的结果。也就是说，微扰论给出的是精确偶宇称能级在小 $\gamma$ 时的一级展开；当 $\gamma$ 不再小的时候，就必须回到上面的超越方程。

10.2.1 假设习题 4.4.2 中研究的绕定轴转动的转子还带有与轴垂直的固有电偶极矩 $\vec{D}$，并且外界施加了一个与轴垂直的均匀外电场 $\vec{E}$。
(a) 在电场很弱的条件下，求它的基态能量，准确到二级微扰。

不妨假设电场在 $x$ 方向，则此时 Hamiltonian 可以写作

$$
\mathcal{H} = \frac{1}{2 I} \hat{L}_{z}^{2} - \vec{D} \cdot \vec{E} = \frac{1}{2I} \hat{L}_{z}^{2} - DE \cos \phi
$$

我们把转子和电场的相互作用视为微扰，则 $0$ 阶解为

$$
E_{m} = \frac{\hbar^{2} m^{2}}{2I}, \quad m=0,\pm1,\pm2,\dots
$$

对应的归一化本征函数为 $\psi_{m}(\varphi)=\frac{1}{\sqrt{2\pi}} e^{im\varphi}$，注意它的基态是非简并的，所以对于基态的微扰而言使用非简并微扰论即可。先考虑一阶微扰，一阶微扰的能量为

$$
E_{0}^{(1)} = H_{00}^{\prime}
= \langle \psi_{0} | H' | \psi_{0} \rangle
= - \frac{DE}{2\pi}\int_{0}^{2\pi}\cos\phi\,\dd{\phi}=0
$$
再考虑二阶微扰的结果，此时能量为

$$
E_{0}^{(2)}
= \sum_{m\neq 0} \frac{|H_{m0}^{\prime}|^{2}}{E_{0}^{(0)} - E_{m}^{(0)}}
$$

先计算矩阵元

$$
\langle \psi_{m} | H' | \psi_{0} \rangle
= - \frac{DE}{2\pi} \int_{0}^{2\pi} e^{-im\phi} \cos \phi \dd{\phi}
= -\frac{DE}{2} (\delta_{m,1} + \delta_{m,-1})
$$

也就是说只有 $m=\pm 1$ 两个态对二阶修正有贡献。由于 $E_{\pm 1}^{(0)}=\frac{\hbar^{2}}{2I}$，带入得到二阶能量修正为

$$
E_{0}^{(2)}
=2\frac{(DE/2)^{2}}{0-\frac{\hbar^{2}}{2I}}
= - \frac{ID^{2}E^{2}}{\hbar^{2}}
$$

(b)（选做）反之，如果外电场非常非常强，它的基态能量又是多大？提示：此时转子做小角度的振动。

我们假设此时转子在 $\hat{x}$  附近做小角度振动，令偏离平衡方向的角度仍为 $\phi$。势能为

$$
V(\phi)=-DE\cos\phi
$$

在强电场极限下，基态波函数主要集中在 $\phi=0$ 附近，因此可以展开

$$
\cos\phi\simeq 1-\frac{\phi^{2}}{2}
$$

于是 Hamiltonian 近似为

$$
\begin{aligned}
\hat{H}
&=\frac{\hat{L}_{z}^{2}}{2I}-DE\cos\phi\\
&\simeq \frac{\hat{L}_{z}^{2}}{2I}-DE+\frac{DE}{2}\phi^{2}
\end{aligned}
$$

又因为在角坐标表象中

$$
\hat{L}_{z}=-i\hbar\frac{\partial}{\partial\phi}
$$

所以上式等价于一个一维谐振子加上常数项 $-DE$：

$$
\hat{H}\simeq
-\frac{\hbar^{2}}{2I}\frac{\partial^{2}}{\partial\phi^{2}}
+\frac{DE}{2}\phi^{2}-DE
$$

和标准谐振子 Hamiltonian

$$
\hat{H}_{\mathrm{osc}}
=\frac{\hat{p}^{2}}{2M}+\frac{1}{2}M\omega^{2}x^{2}
$$

比较可知，这里有效质量为 $I$，有效角频率满足

$$
I\omega^{2}=DE
$$

因此

$$
\omega=\sqrt{\frac{DE}{I}}
$$

所以强场极限下的基态能量近似为

$$
E_{0}\simeq -DE+\frac{1}{2}\hbar\omega
=-DE+\frac{\hbar}{2}\sqrt{\frac{DE}{I}}
$$

这里第一项是偶极矩沿电场方向排列时的最低势能，第二项是绕该最低点做小角振动的零点能。这个近似要求零点振动的角宽度远小于 $1$，也就是

$$
\Delta\phi\sim\sqrt{\frac{\hbar}{I\omega}}
=\left(\frac{\hbar^{2}}{IDE}\right)^{1/4}\ll 1
$$

等价地说，需要

$$
DE\gg \frac{\hbar^{2}}{I}
$$

10.2.2 水分子的结构式是 H-O-H，其中每一个 O-H 键都会振动，二者还会通过 O 原子发生耦合，因此系统的 Hamiltonian 是

$$
\hat{H} = \frac{1}{2\mu}\hat{p}_{1}^{2} + \frac{\mu\omega^{2}}{2}x_{1}^{2} + \frac{1}{2\mu}\hat{p}_{2}^{2} + \frac{\mu\omega^{2}}{2}x_{2}^{2} + \lambda\mu\omega^{2} x_{1} x_{2}
$$

(a) 假若 $0 < \lambda \ll 1$，则耦合项可视为微扰。请在此条件下求出它的基态和第一激发态的能量，准确到一级微扰。

此时零阶近似下的能级分别对应两个独立的谐振子

$$
E_{n}^{(0)} = \left( n_{1} + \frac{1}{2} \right) \hbar \omega + \left( n_{2} + \frac{1}{2} \right) \hbar \omega
$$
对应的波函数为

$$
\psi_{n_{1}, n_{2}} (x_{1}, x_{2}) = \frac{\alpha}{\sqrt{\pi 2^{n_{1} + n_{2}} n_{1}! n_{2}!}} H_{n_{1}} (\alpha x_{1}) H_{n_{2}} (\alpha x_{2}) e^{-\frac{\alpha^{2}}{2} (x_{1}^{2} + x_{2}^{2})}
$$
其中 $\alpha = \sqrt{\frac{\mu \omega}{\hbar}}$，其中基态对应 $n_{1} = n_{2} = 0$，第一激发态对应 $n_{1}=1, n_{2} =0$ 或者 $n_{1} =0, n_{2} = 1$，所以应该分别使用非简并以及简并微扰来处理。

在加入微扰之后，基态一阶微扰下的能量为

$$
E_{0}^{(1)} = \langle \psi_{0,0} | H' | \psi_{0,0} \rangle = \frac{\lambda \mu \omega^{2} \alpha^{2}}{\pi}\int \dd{x}_{1} \dd{x}_{2} e^{-\alpha^{2} (x_{1}^{2} + x_{2}^{2})} x_{1} x_{2} = 0
$$
所以基态能量为

$$
E_{0} = \hbar \omega
$$

对于第一激发态，我们使用简并微扰来处理这个问题。此时两个简并的零阶波函数的形式为

$$
\begin{gathered}
	\psi_{1,0} (x_{1}, x_{2}) = \frac{\alpha}{\sqrt{2 \pi}} 2 \alpha x_{1} e^{-\frac{\alpha^{2}}{2} (x_{1}^{2} + x_{2}^{2})} \\
	\psi_{0,1} (x_{1}, x_{2}) = \frac{\alpha}{\sqrt{2 \pi}} 2 \alpha x_{2} e^{-\frac{\alpha^{2}}{2} (x_{1}^{2} + x_{2}^{2})}
\end{gathered}
$$
此时一阶能量修正应该由久期方程

$$
\det\left(H^{\prime}_{ij}-E^{(1)}\delta_{ij}\right)=0
$$
确定，我们先积分得到微扰哈密顿量的矩阵形式

$$
H^{\prime}_{ij}
= \begin{pmatrix}
0 & \frac{\lambda\hbar\omega}{2} \\
\frac{\lambda\hbar\omega}{2} & 0
\end{pmatrix}
$$
所以可以解得精确到一阶微扰的能量为

$$
E_{1,-} = \left( 2 - \frac{\lambda}{2} \right) \hbar \omega
$$
或者

$$
E_{1,+} = \left( 2 + \frac{\lambda}{2} \right) \hbar \omega
$$

对应的零阶态线性组合分别为

$$
\frac{1}{\sqrt{2}}\left(\psi_{1,0}-\psi_{0,1}\right),\quad
\frac{1}{\sqrt{2}}\left(\psi_{1,0}+\psi_{0,1}\right)
$$

(b)（选做）事实上只要 $0 < \lambda < 1$，这个问题就是可以严格求解的，那就是进行一个 $(x_{1}, x_{2})$ 的坐标变换，把 $\hat{H}$ 化为两个互相独立的谐振子。请你找出这个解，并且与微扰论的解做一下比较。

把哈密顿量解耦，取

$$
\begin{gathered}
	s = \frac{1}{\sqrt{2}} (x_{1} + x_{2}) \\
	t = \frac{1}{\sqrt{2}} (x_{1} - x_{2})
\end{gathered}
$$
上述哈密顿量可以表示为

$$
\hat{H} = \frac{1}{2\mu} \hat{p}_{s}^{2} + \frac{1}{2\mu} \hat{p}_{t}^{2} + \frac{\mu \omega^{2}}{2} ((1 + \lambda) s^{2} + (1 - \lambda) t^{2})
$$
所以总体的能量相当于

$$
E_{n_{1}, n_{2}} = \left( n_{1} + \frac{1}{2} \right) \sqrt{ 1 + \lambda }\hbar \omega + \left( n_{2} + \frac{1}{2} \right) \sqrt{ 1 - \lambda }\hbar \omega
$$

基态能量为

$$
E_{0}
=\frac{\hbar\omega}{2}\left(\sqrt{1+\lambda}+\sqrt{1-\lambda}\right)
\simeq \hbar\omega+O(\lambda^{2})
$$

这说明基态的一阶修正确实为 $0$。第一激发能级为

$$
\begin{gathered}
E_{1,+}
=\hbar\omega\left(\frac{3}{2}\sqrt{1+\lambda}
+\frac{1}{2}\sqrt{1-\lambda}\right)
\simeq 2\hbar\omega+\frac{\lambda}{2}\hbar\omega\\
E_{1,-}
=\hbar\omega\left(\frac{1}{2}\sqrt{1+\lambda}
+\frac{3}{2}\sqrt{1-\lambda}\right)
\simeq 2\hbar\omega-\frac{\lambda}{2}\hbar\omega
\end{gathered}
$$

这正好和简并微扰论得到的结果相符。

10.3.1 大多数原子核都带有自旋磁矩。记核的自旋为 $\hat{\vec{S}}$，磁矩为 $\hat{\vec{M}} = \lambda \mu_{\text{N}} \hat{\vec{S}} / \hbar$，其中 $\mu_{\text{N}} = e \hbar / 2 M_{\text{N}}$ 是核磁子，$M_{\text{N}}$ 是核子质量，$\lambda$ 是表征核磁矩大小的常数。首先把核放进一个恒定强磁场 $\vec{B}_{0}$ 中，由于磁矩与磁场间有相互作用 $\hat{H}_{0} = -\vec{B}_{0} \cdot \hat{\vec{M}}$，它将形成总共 $2S + 1$ 个能级。然后垂直于 $\vec{B}_{0}$ 施加一个以频率 $\omega$ 振荡的磁场 $\vec{B}'(t)$，这个扰动磁场就会引起核在不同的能级之间跃迁。问：当 $\omega$ 满足什么条件的时候会发生共振跃迁？

### Tip

注意：要说明如何决定选择定则。这个现象就称为核磁共振 NMR。最早的时候人们用核磁共振方法来测量核素的磁矩，是原子核物理学中的一个重要实验手段，等到对各种核的磁矩积累了完备的信息以后，情况就反过来了：我们可以利用这项技术探查一个样品中都包含哪些种类的核，丰度各有多大，包括给它们定位。因此，现在核磁共振在固体物理学、材料科学、生物学以及医疗检验等方面有广泛的应用。在近代物理学的发展史上，这是基础研究与技术应用互相促进的一个典型例子。

___

取 $\vec{B}_{0}=B_{0}\vec{e}_{z}$，则

$$
\hat{H}_{0}
=-B_{0}\hat{M}_{z}
=-\lambda\mu_{\mathrm N}B_{0}\frac{\hat{S}_{z}}{\hbar}
$$

所以本征态可记为 $\ket{S,m}$，其中 $m=-S,-S+1,\cdots,S$，对应能量为

$$
E_{m}^{(0)}=-\lambda\mu_{\mathrm N}B_{0}m
$$

相邻能级间隔的大小为

$$
|E_{m+1}^{(0)}-E_{m}^{(0)}|
=|\lambda|\mu_{\mathrm N}B_{0}
$$

再看垂直于 $\vec{B}_{0}$ 的交变磁场。不妨令它沿 $x$ 方向：

$$
\vec{B}'(t)=B_{1}\cos\omega t\,\vec{e}_{x}
$$

则微扰为

$$
\hat{H}'(t)
=-\vec{B}'(t)\cdot\hat{\vec{M}}
=-\lambda\mu_{\mathrm N}B_{1}\cos\omega t\,\frac{\hat{S}_{x}}{\hbar}
$$

由于

$$
\hat{S}_{x}=\frac{1}{2}\left(\hat{S}_{+}+\hat{S}_{-}\right)
$$

所以只有

$$
\mel{S,m'}{\hat{S}_{x}}{S,m}\neq 0
$$

的跃迁才会发生，也就是选择定则

$$
\Delta m=m'-m=\pm 1
$$

因此发生共振跃迁的条件是外场角频率等于相邻 Zeeman 能级间隔除以 $\hbar$

$$
\omega=\omega_{0}
=\frac{|\lambda|\mu_{\mathrm N}B_{0}}{\hbar}
$$

如果保留 $\lambda$ 的符号，则吸收跃迁对应的能量差取正值；物理共振频率总是上式中的正数。

11.1.1 完全刚性硬球指的是势场
$$
V(r) = \begin{cases} +\infty, & (r < a) \\ 0, & (r > a) \end{cases}
$$

请推导出它的微分散射截面和总散射截面。问：一个刚性硬球的经典的"散射截面"是多大？与之相比，量子力学的截面有什么差别？为什么？

对于硬球势，它的 $l$ 分量径向方程为

$$
R''_{l} + \frac{2}{x} R'_{l} + \left(1-V(x)-\frac{l(l+1)}{x^{2}} \right) R_{l} = 0
$$
其中 $x = kr$，所以在球外，径向波函数满足球贝塞尔方程

$$
R'' + \frac{2}{x} R' + \left( 1-\frac{l(l+1)}{x^{2}} \right) R = 0
$$
对应的解为

$$
R_{l} (x) = A_{l} j_{l} (x) + B_{l} n_{l} (x)
$$
由于此时球内波函数为 $0$，所以连续性条件应该变为

$$
A_{l} j_{l} (ka) + B_{l} n_{l}(ka) = 0
$$
此时

$$
\frac{A_{l}}{B_{l}} = - \frac{n_{l}(ka)}{j_{l}(ka)}
$$
无穷远处的渐进行为是

$$
\lim_{r \to \infty} A_{l} \left( \frac{j_{l}(kr)}{j_{l}(ka)} - \frac{n_{l}(kr)}{n_{l}(ka)}\right) \sim \frac{1}{kr} \left( \sin\left( kr-\frac{l\pi}{2} \right) + \frac{j_{l}(ka)}{n_{l}(ka)} \cos\left( kr-\frac{l\pi}{2} \right)\right)
$$
计算得到

$$
\delta_{l} = \arctan \frac{j_{l}(ka)}{n_{l}(ka)}
$$
所以微分散射截面是

$$
\sigma (\theta) = \frac{1}{k^{2}} \left|\sum_{l=0}^{\infty}(2l+1) \sin\left(\arctan \frac{j_{l}(ka)}{n_{l}(ka)}\right) e^{i\arctan \frac{j_{l}(ka)}{n_{l}(ka)}} P_{l}(\cos \theta)\right|^{2}
$$
总散射截面是

$$
\sigma_{tot} = \frac{4\pi}{k^{2}} \sum_{l=0}^{\infty} (2l+1) \sin^{2} \left(\arctan \frac{j_{l}(ka)}{n_{l}(ka)}\right)
$$

经典情形下，只有入射参数 $b<a$ 的粒子会碰到硬球，所以经典散射截面就是几何截面

$$
\sigma_{\mathrm{cl}}=\pi a^{2}
$$

量子力学中由于波动性和衍射效应，结果一般不等于这个几何截面。特别是在低能极限 $ka\ll 1$ 时，主要只有 $s$ 波贡献。由

$$
j_{0}(x)=\frac{\sin x}{x},\quad
n_{0}(x)=-\frac{\cos x}{x}
$$

可得

$$
\tan\delta_{0}=\frac{j_{0}(ka)}{n_{0}(ka)}
=-\tan ka
$$

因此 $\delta_{0}\simeq -ka$，总截面近似为

$$
\sigma_{\mathrm{tot}}
\simeq \frac{4\pi}{k^{2}}\sin^{2}\delta_{0}
\simeq 4\pi a^{2}
$$

这是经典几何截面的 $4$ 倍。若取高能极限并把前向衍射也包括在总截面中，则总截面趋于 $2\pi a^{2}$；其中一半可看作经典反射散射，另一半来自波在硬球阴影边缘的衍射。

11.2.1 若约化势场为 $U(r) = \alpha / r^{2}$（$\alpha > 0$），则它的各阶相移 $\delta_{l}$ 都可以严格算出。对此做如下提示。

(a) $R_{l}(r)$ 满足的方程是

$$
\frac{\mathrm{d}^{2} R_{l}}{\mathrm{d}r^{2}} + \frac{2}{r} \frac{\mathrm{d}R_{l}}{\mathrm{d}r} + \left( k^{2} - U(r) - \frac{l(l+1)}{r^{2}} \right) R_{l} = 0
$$

(b) 球 Bessel 函数 $j_{l}(x)$（$l \geq 0$ 但不必是整数）满足方程

$$
\frac{\mathrm{d}^{2} j_{l}}{\mathrm{d}x^{2}} + \frac{2}{x} \frac{\mathrm{d}j_{l}}{\mathrm{d}x} + \left( 1 - \frac{l(l+1)}{x^{2}} \right) j_{l} = 0
$$

而且当 $x \to +\infty$ 时 $j_{l}(x) \to \frac{1}{x} \sin\left( x - \frac{l\pi}{2} \right)$。据此请算出它的 $\delta_{l} = ?$

对于这种情况，我们首先考虑径向方程

$$
\frac{\mathrm{d}^{2}R_{l}}{\mathrm{d}r^{2}}
+\frac{2}{r}\frac{\mathrm{d}R_{l}}{\mathrm{d}r}
+\left[
k^{2}-\frac{\alpha}{r^{2}}-\frac{l(l+1)}{r^{2}}
\right]R_{l}=0
$$

令

$$
x=kr
$$

则

$$
\frac{\mathrm{d}^{2}R_{l}}{\mathrm{d}x^{2}}
+\frac{2}{x}\frac{\mathrm{d}R_{l}}{\mathrm{d}x}
+\left[
1-\frac{l(l+1)+\alpha}{x^{2}}
\right]R_{l}=0
$$

这和球 Bessel 方程相同，只是角动量指标不再是原来的整数 $l$，而要换成一个新的数 $\nu_{l}$，满足

$$
\nu_{l}(\nu_{l}+1)=l(l+1)+\alpha
$$

取非负根，即

$$
\nu_{l}
=-\frac{1}{2}+\sqrt{\left(l+\frac{1}{2}\right)^{2}+\alpha}
$$

因此在原点正则的解为

$$
R_{l}(r)=C_{l} j_{\nu_{l}}(kr)
$$

这里 $j_{\nu_{l}}$ 是阶数不一定为整数的球 Bessel 函数。利用题目给出的渐近形式，

$$
j_{\nu_{l}}(kr)\xrightarrow[r\to\infty]{}
\frac{1}{kr}\sin\left(kr-\frac{\nu_{l}\pi}{2}\right)
$$

另一方面，按照相移的定义，远处第 $l$ 个分波应写成

$$
R_{l}(r)\xrightarrow[r\to\infty]{}
\frac{1}{kr}\sin\left(kr-\frac{l\pi}{2}+\delta_{l}\right)
$$

比较两式相位，得到

$$
kr-\frac{\nu_{l}\pi}{2}
=kr-\frac{l\pi}{2}+\delta_{l}
$$

所以

$$
\delta_{l}=\frac{\pi}{2}(l-\nu_{l})
$$

即

$$
\delta_{l}
=\frac{\pi}{2}\left[
l+\frac{1}{2}
-\sqrt{\left(l+\frac{1}{2}\right)^{2}+\alpha}
\right]
$$

因为 $\alpha>0$，所以 $\nu_{l}>l$，各阶相移都是负的。这也符合 $U(r)=\alpha/r^{2}$ 是排斥势的直观图像。

11.2.2（选做）求粒子在三维球壳 $\delta$ 势垒 $V(r) = \frac{\hbar^{2}}{\mu L} \delta(r - a)$（$L > 0$）上的散射长度 $a_{0}$，假设 $E = 0$。

### Tip

提示：此时约化径向波函数是

$$
u(r) =
\begin{cases}
Ar, & (r < a) \\
1 - \left( r / a_{0} \right), & (r > a)
\end{cases}
$$

再利用处理一维 $\delta$ 势的方法。

___

这里只需要考虑 $s$ 波。零能散射时，球壳内外的约化径向波函数分别为

$$
u(r)=
\begin{cases}
Ar, & r<a\\
1-\dfrac{r}{a_{0}}, & r>a
\end{cases}
$$

其中 $a_{0}$ 就是散射长度。首先由波函数连续性可得

$$
Aa=1-\frac{a}{a_{0}}
$$

也就是

$$
A=\frac{1-\frac{a}{a_{0}}}{a}
$$

接下来考虑 $\delta$ 势导致的导数跃变。约化径向波函数满足

$$
-\frac{\hbar^{2}}{2\mu}u''(r)
+\frac{\hbar^{2}}{\mu L}\delta(r-a)u(r)=0
$$

在 $a$ 附近积分，有

$$
-\frac{\hbar^{2}}{2\mu}\left[u'(a^{+})-u'(a^{-})\right]
+\frac{\hbar^{2}}{\mu L}u(a)=0
$$

因此

$$
u'(a^{+})-u'(a^{-})=\frac{2}{L}u(a)
$$

由分段形式可知

$$
u'(a^{-})=A,\quad
u'(a^{+})=-\frac{1}{a_{0}},\quad
u(a)=1-\frac{a}{a_{0}}
$$

代入跃变条件：

$$
-\frac{1}{a_{0}}-A
=\frac{2}{L}\left(1-\frac{a}{a_{0}}\right)
$$

再代入连续性给出的 $A$：

$$
-\frac{1}{a_{0}}
-\frac{1-\frac{a}{a_{0}}}{a}
=\frac{2}{L}\left(1-\frac{a}{a_{0}}\right)
$$

左边可以化简为

$$
-\frac{1}{a}
$$

所以

$$
-\frac{1}{a}
=\frac{2}{L}\left(1-\frac{a}{a_{0}}\right)
$$

即

$$
1-\frac{a}{a_{0}}=-\frac{L}{2a}
$$

从而

$$
\frac{a}{a_{0}}=1+\frac{L}{2a}
$$

最后得到

$$
a_{0}=\frac{2a^{2}}{2a+L}
$$

作为检验：当 $L\to 0$ 时，$\delta$ 势垒趋于无限强，结果 $a_{0}\to a$，回到硬球的散射长度；当 $L\to\infty$ 时，势垒趋于消失，结果 $a_{0}\to 0$。
