# 电动力学 第3周作业

Chasse_neige

### 1. 电磁相互作用的源

思考题：对一闭合曲面 $S$，$\oint_S \vec{j} \cdot d\vec{S} < 0$，$\oint_S \vec{j} \cdot d\vec{S} = 0$，$\oint_S \vec{j} \cdot d\vec{S} > 0$ 分别代表什么物理意义？

$\oint_S \vec{j} \cdot d\vec{S} < 0$ 在图像上表示在曲面上电流总体表现为向内，即对于该空间而言电荷量增加；

$\oint_S \vec{j} \cdot d\vec{S} > 0$ 在图像上表示在曲面上电流总体表现为向外，即对于该空间而言电荷量减少；

$\oint_S \vec{j} \cdot d\vec{S} = 0$ 在图像上表示在该处向内和向外的流量相抵消，曲面内空间电荷量不变。

### 2. 电磁相互作用的场与真空中的基本实验定律

1.5 已知一个电荷系统的偶极矩定义为
$$
p(t) = \int_{V} \rho(\vec{r'}, t) \vec{r'} dV'
$$

利用电荷守恒定律 $\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0$ 证明 $p$ 的变化率为

$$
\frac{dp}{dt} = \int_{V} \mathbf{J}(\vec{r'}, t) dV'
$$
证明：
$$
\frac{dp}{dt} = \frac{d}{dt} \int_{V} \rho(\vec{r'}, t) \vec{r'} dV' = \int_{V} \frac{\partial}{\partial t} \rho(\vec{r'}, t) \vec{r'} dV' = \int_{V} (- \nabla' \cdot \mathbf{J} (\vec{r'}, t)) \vec{r'} dV' \\ =
\int_{V} ( - \nabla' \cdot (\mathbf{J}(\vec{r'}, t) \vec{r'}) + \mathbf{J}(\vec{r'}, t) \cdot \nabla' \vec{r'}) dV'
= - \int_{S} d \vec{S'} \cdot \mathbf{J}(\vec{r'}, t) \vec{r'} + \int_{V}\mathbf{J}(\vec{r'}, t) \cdot \overset{\leftrightarrow}{I} dV'
$$
取积分曲面为无穷远，则第一项面积分为0，所以
$$
\frac{dp}{dt} = \int_{V}\mathbf{J}(\vec{r'}, t) \cdot \overset{\leftrightarrow}{I} dV' = \int_{V} \mathbf{J}(\vec{r'}, t) dV'
$$
1.10 证明两个闭合的恒定电流圈之间的相互作用力大小相等，方向相反（但两个电流元之间的相互作用力一般并不服从牛顿第三定律）。

证明：假设线圈1和2的电流大小分别为 $I_{1}, I_{2}$ ，两个线圈上电流源之间的位矢为 $\vec{r}_{12}$ 。

考虑线圈1收到线圈2的力：
$$
\vec{B_{2}} = \frac{\mu_{0}}{4 \pi} \oint_{l_{2}} \frac{I_{2} d \vec{l_{2}} \times \vec{r}_{12}}{r_{12}^{3}}
$$

$$
d \vec{F}_{12} = I_{1} d \vec{l_{1}} \times \frac{\mu_{0}}{4 \pi} \oint_{l_{2}} \frac{I_{2} d \vec{l_{2}} \times \vec{r}_{12}}{r_{12}^{3}}
$$

$$
\vec{F}_{12} = \oint_{l_{1}} \oint_{l_{2}} \frac{\mu_{0}}{4 \pi} \frac{I_{1} d \vec{l_{1}} \times (I_{2} d \vec{l_{2}} \times \vec{r}_{12})}{r_{12}^{3}} = \oint_{l_{1}} \oint_{l_{2}} \frac{\mu_{0}}{4 \pi} I_{1} I_{2} \left( \frac{\vec{r}_{12} \cdot d \vec{l_{1}}}{r_{12}^{3}} d \vec{l_{2}} - \frac{d \vec{l_{1}} \cdot d \vec{l_{2}}}{r_{12}^{3}} \vec{r}_{12} \right)
$$

再计算线圈2收到线圈1的力：
$$
\vec{F}_{21} = \oint_{l_{1}} \oint_{l_{2}} \frac{\mu_{0}}{4 \pi} I_{1} I_{2} \left( \frac{\vec{r}_{21} \cdot d \vec{l_{2}}}{r_{21}^{3}} d \vec{l_{1}} - \frac{d \vec{l_{2}} \cdot d \vec{l_{1}}}{r_{21}^{3}} \vec{r}_{21} \right)
$$

$$
\therefore \,\, \vec{F}_{12} + \vec{F}_{21} = 
\frac{\mu_{0} I_{1} I_{2}}{4 \pi} \oint_{l_{1}} \oint_{l_{2}} \frac{\vec{r}_{12} \cdot d \vec{l_{1}}}{r_{12}^{3}} d \vec{l_{2}} - \frac{\vec{r}_{12} \cdot d \vec{l_{2}}}{r_{12}^{3}} d \vec{l_{1}}
$$

考虑积分的第一部分：
$$
\oint_{l_{1}} \oint_{l_{2}} \frac{\vec{r}_{12} \cdot d \vec{l_{1}}}{r_{12}^{3}} d \vec{l_{2}} = \oint_{l_{2}} 
d \vec{l_{2}} \oint_{l_{1}} \frac{d r_{12}}{r_{12}^{2}} = 0
$$
同理，第二项也为0。
$$
\therefore \,\, \vec{F}_{12} + \vec{F}_{21} = 0
$$

### 3. 真空中电磁相互作用的场方程

(a) 求证电偶极子(正负电荷相对距离 $l \rightarrow 0$，电量 $q \rightarrow \infty$，$lq$ 固定)产生的电势为，
$$
\phi = \frac{1}{4\pi\epsilon_0} \frac{\vec{r} \cdot \vec{p}}{r^3} + \text{常数}
$$

证明：

上次作业中已经得到偶极子的电荷密度可以写作 $\rho = -(\vec{p} \cdot \nabla)\delta(\vec{r})$

所以直接作电势积分：
$$
\phi = \int \frac{1}{4 \pi \epsilon_{0}} \frac{\rho}{|\vec{r} - \vec{r'}|} d \tau' = \int \frac{1}{4 \pi \epsilon_{0}} \frac{-(\vec{p} \cdot \nabla')\delta(\vec{r'})}{|\vec{r} - \vec{r'}|} d \tau' \\ = \int \frac{1}{4 \pi \epsilon_{0}} (- \nabla' \cdot (\frac{\vec{p} \delta(\vec{r'})}{|\vec{r} - \vec{r'}|}) + \nabla' \cdot \frac{\vec{p}}{|\vec{r} - \vec{r'}|} \delta(\vec{r'})) d \tau' = 0 + \int \frac{1}{4 \pi \epsilon_{0}} \frac{(\vec{r} - \vec{r'}) \cdot \vec{p}}{|\vec{r} - \vec{r'}|^{3}} \delta(\vec{r'}) d \tau' \\ = \frac{1}{4\pi\epsilon_0} \frac{\vec{r} \cdot \vec{p}}{r^3} + C
$$


(b) 求证磁偶极子(电流圈面积 $S \rightarrow 0$，电流 $J \rightarrow \infty$，$JS$ 固定)产生的矢量势为，
$$
\vec{A} = \frac{\mu_0}{4\pi} \frac{\vec{m} \times \vec{r}}{r^3} + \text{常数}
$$

证明：

与电偶极子类似，磁偶极子的电流密度可以表示为$\vec{j} = - \vec{m} \times \nabla \delta(\vec{r})$

我们先证明这个表达式：
$$
\vec{\mu} = \frac{1}{2} \int \vec{r} \times \left( -\vec{m} \times \nabla \delta(\vec{r}) \right) d\tau
$$

$$
\vec{r} \times (\vec{m} \times \nabla \delta) = \vec{m} (\vec{r} \cdot \nabla \delta) - (\vec{r} \cdot \vec{m}) \nabla \delta 
$$

$$
\vec{m} = -\frac{1}{2} \int \left[ \vec{m} (\vec{r} \cdot \nabla \delta) - (\vec{r} \cdot \vec{m}) \nabla \delta \right] d\tau
$$

$$
\int \vec{r} \cdot \nabla \delta \, d\tau = - \int \delta (\nabla \cdot \vec{r}) d \tau = -3
$$

$$
\int (\vec{r} \cdot \vec{m}) \nabla \delta d \tau = - \int \delta \nabla (\vec{r} \cdot \vec{m}) d \tau = - \vec{m}
$$

$$
\therefore \,\, \vec{\mu} = \frac{1}{2} \int \vec{r} \times \left( - \vec{m} \times \nabla \delta(\vec{r}) \right) d\tau = - \frac{1}{2} (-3 \vec{m} + \vec{m}) = \vec{m}
$$

然后用和（a）类似的方法，直接积分：
$$
\vec{A} = \int \frac{\mu_{0}}{4 \pi} \frac{\vec{j}}{|\vec{r} - \vec{r'}|} d \tau' = - \int \frac{\mu_{0}}{4 \pi} \frac{\vec{m} \times \nabla' \delta(\vec{r'})}{|\vec{r} - \vec{r'}|}d \tau' \\ = - \int \frac{\mu_{0}}{4 \pi} \left( - \nabla' \times (\delta(\vec{r'}) \frac{\vec{m}}{|\vec{r} - \vec{r'}|}) + \delta(\vec{r'}) \nabla' \times \frac{\vec{m}}{|\vec{r} - \vec{r'}|} \right) d \tau' \\ = - \int \frac{\mu_{0}}{4 \pi} \delta(\vec{r'}) \nabla' \frac{1}{|\vec{r} - \vec{r'}|} \times \vec{m} d \tau' = - \int \frac{\mu_{0}}{4 \pi} \delta(\vec{r'}) \frac{\vec{r} - \vec{r'}}{|\vec{r} -\vec{r'}|^{3}} \times \vec{m} d \tau' = \frac{\mu_0}{4\pi} \frac{\vec{m} \times \vec{r}}{r^3} + C
$$


(c) 假定实验上发现库伦定律对平方反比有一微小的指数偏离 $\delta$，$\vec{f}_{21} = k_1 \frac{q_1 q_2}{R^3} \vec{R} e^{-\delta \frac{R}{R_0}}$

i. 求证，关系 $\vec{E} = -\nabla \phi$ 仍成立，并请对给定的电荷密度分布，给出 $\phi$ 的计算公式。

证明：证明$\nabla \times \vec{E} = 0$ 即可。由于电场可以看作所有源点产生电场的线性叠加，所以验证由点电荷产生的电场无旋即可。

注意到 $\vec{f}_{21} = k_1 \frac{q_1 q_2}{R^3} \vec{R} e^{-\delta \frac{R}{R_0}} = k_{1} q_{1} q_{2} f(R) \vec{R}$
$$
\nabla \times \vec{E} = k_{1} q \nabla \times f(R) \vec{R} = k_{1} q ((\nabla f(R) \times \vec{R}) + f(R) \nabla \times \vec{R}) = k_{1} q (f'(R) \hat{R} \times \vec{R} + 0) = 0
$$
所以该电场无旋，可以用势函数表示。

ii. 问：这时高斯定理 $\oint \vec{E} \cdot d\vec{S} = Q/\epsilon_0$ 是否还成立？

此时：
$$
\vec{E} = \int k_{1} \rho(\vec{r'}) \frac{\vec{R}}{R^{3}} e^{- \delta \frac{R}{R_{0}}} d \tau'
$$

$$
\oint \vec{E} \cdot d\vec{S} = \int d \tau \nabla \cdot \int k_{1} \rho(\vec{r'}) \frac{\vec{R}}{R^{3}} e^{- \delta \frac{R}{R_{0}}} d \tau' \neq \int d \tau \int d \tau' k_{1} 4 \pi \delta (\vec{R}) \rho (\vec{r'}) = \frac{1}{\epsilon_{0}} \int \rho d \tau
$$

由于此时的 $f(R) \vec{R}$ 无法写成 $- \nabla \frac{1}{R}$ 的形式，所以后续的计算中无法得出 $\delta (\vec{R})$，高斯定理不再严格成立。

(d) 假定实验上发现比萨定律对平方反比有一微小的指数偏离 $\delta$，$d^2 \vec{F}_{21} = k_2 J_2 d\vec{l}_2 \times \left(\frac{J_1 d\vec{l}_1 \times \vec{R}}{R^3}\right) e^{-\delta \frac{R}{R_0}}$

i. 求证，关系 $\vec{B} = \nabla \times \vec{A}$ 仍成立，并请对给定的电流密度分布，给出 $\vec{A}$ 的计算公式。

同理，验证单一电流源产生的磁场无源即可。
$$
\nabla \cdot (k_{2} J_{1} d \vec{l}_{1} \times \frac{\vec{R}}{R^{3}} e^{- \delta \frac{R}{R_{0}}}) =
 f(R) \vec{R} \cdot (\nabla \times k_{2} J_{1} d \vec{l}_{1}) - k_{2} J_{1} d \vec{l}_{1} \cdot (\nabla \times f(R) \vec{R}) = 0 - 0 = 0
$$
ii. 问：这时安培环路定理 $\oint \vec{B} \cdot d\vec{l} = \mu_0 J$ 是否还成立？

不成立。因为此时：
$$
\oint \vec{B} \cdot d\vec{l} = \int d \vec{S} \cdot \nabla \times \int k_{2} \vec{j} \times \frac{\vec{R}}{R^{3}} e^{- \frac{\delta R}{R_{0}}} d \tau' \neq - \int d \vec{S} \cdot \nabla \times \int k_{2} \vec{j} \times \nabla \frac{1}{R} d \tau' \\ = \int d \vec{S} \cdot \int d \tau' k_{2} 4 \pi \vec{j} (\vec{r'}) \delta(\vec{r} - \vec{r'}) = \mu_{0} J
$$
思考题：

i. 叠加原理对麦克斯韦方程组起什么影响？

叠加原理导致了麦克斯韦方程组的线性性：已经证明库伦势即电场强度的可以叠加，所以自然地推出麦克斯韦方程组中的电磁场是可以线性叠加的。再结合散度、旋度以及对时间的偏导数都是线性算子， 可以得到麦克斯韦方程组是良好的线性方程组。

ii. 积分形式与微分形式的麦克斯韦方程组，哪个更普遍，为什么？

微分。我认为微分形式的麦克斯韦方程组应用场景更广泛，因为对于不好定义边界和积分路径的复杂拓扑结构来说，只要确定了度量以及边界条件，在其上的微分方程任然是可以求解的。

### 4. 介质中电磁相互作用的场方程

1.7 有一内外半径分别为 $r_1$ 和 $r_2$ 的空心介质球，介质的电容率为 $\varepsilon$。使介质内均匀带静止自由电荷密度 $\rho_{f}$，求

(1) 空间各点的电场；

电位移矢量：
$$
\vec{D} = \begin{cases} 0 & (r < r_{1}) \\ \rho_{f} \frac{r^{3} - r_{1}^{3}}{3 r^{2}} \hat{r} & (r_{1} < r < r_{2}) \\ \rho_{f} \frac{r_{2}^{3} - r_{1}^{3}}{3 r^{2}} \hat{r} & (r > r_{2}) \end{cases}
$$
电场：
$$
\vec{E} = \begin{cases} 0 & (r < r_{1}) \\ \rho_{f} \frac{r^{3} - r_{1}^{3}}{3 \epsilon r^{2}} \hat{r} & (r_{1} < r < r_{2}) \\ \rho_{f} \frac{r_{2}^{3} - r_{1}^{3}}{3 \epsilon_{0} r^{2}} \hat{r} & (r > r_{2}) \end{cases}
$$


(2) 极化体电荷和极化面电荷分布。
$$
\vec{P} = \vec{D} - \epsilon_{0} \vec{E} = \begin{cases} 0 & (r < r_{1}) \\ \rho_{f} \frac{r^{3} - r_{1}^{3}}{3 r^{2}} (1 - \frac{\epsilon_{0}}{\epsilon}) \hat{r} & (r_{1} < r < r_{2}) \\ 0 & (r > r_{2}) \end{cases}
$$
极化体电荷：
$$
\rho' = - \nabla \cdot \vec{P} = \begin{cases} 0 & (r < r_{1}) \\ - \rho_{f} (1 - \frac{\epsilon_{0}}{\epsilon}) & (r_{1} < r < r_{2}) \\ 0 & (r > r_{2}) \end{cases}
$$
极化面电荷：

$r = r_{1}$表面：
$$
\sigma' = - \hat{n} \cdot (\vec{P}_{2} - \vec{P}_{1}) = 0
$$
$r = r_{2}$表面：
$$
\sigma' = - \hat{n} \cdot (\vec{P}_{2} - \vec{P}_{1}) = - (0 - \rho_{f} (1 - \frac{\epsilon_{0}}{\epsilon}) \frac{r_{2}^{3} - r_{1}^{3}}{3 r_{2}^{2}}) = \rho_{f} (1 - \frac{\epsilon_{0}}{\epsilon}) \frac{r_{2}^{3} - r_{1}^{3}}{3 r_{2}^{2}}
$$


1.9  证明均匀介质内部的极化电荷体密度 $\rho_{P}$ 总是等于自由电荷体密度 $\rho_{f}$ 的 $-\left(1 - \frac{\varepsilon_0}{\varepsilon}\right)$ 倍。

证明：
$$
\rho_{P} = - \nabla \cdot \vec{P} = - \nabla \cdot (\vec{D} - \epsilon_{0} \vec{E}) = - \nabla \cdot (\vec{D} - \epsilon_{0} \frac{\vec{D}}{\epsilon}) = -\left(1 - \frac{\varepsilon_0}{\varepsilon}\right) \nabla \cdot \vec{D} = -\left(1 - \frac{\varepsilon_0}{\varepsilon}\right) \rho_{f}
$$
思考题:介质中的麦克斯韦方程组中哪些方程依赖于物质的具体电磁性质,哪些不依赖, 为什么?

我认为只有本构关系是依赖于物质具体电磁性质的，电场和磁场的四个方程均和具体是什么物质没有关系，因为它们从真空的麦克斯韦方程组转化过来只用到了一个将极化产生的偶极矩平均后定义极化强度。但是电场和极化强度、磁场和磁化强度之间的关系是依赖于具体物质的。

### 5. 电磁场的边值关系

1.12  证明

(1)当两种绝缘介质的分界面上不带面自由电荷时，电场线的曲折满足

$$
\frac{\tan \theta_2}{\tan \theta_1} = \frac{\varepsilon_2}{\varepsilon_1}
$$

其中 $\varepsilon_1$ 和 $\varepsilon_2$ 分别为两种介质的介电常数，$\theta_1$ 和 $\theta_2$ 分别为界面两侧电场线与法线的夹角。

证明：利用边值关系证明。

由电场强度切向连续：$E_{1 \tau} = E_{2 \tau}$ 和电位移矢量法向连续：$D_{1n} = D_{2n}$
$$
\therefore \,\, \frac{E_{1 \tau}}{\epsilon_{1} E_{1 n}} = \frac{E_{2 \tau}}{\epsilon_{2} E_{2 n}}
$$
考虑到 $\tan \theta_{1} = \frac{E_{1 \tau}}{E_{1 n}}$ 和 $\tan \theta_{2} = \frac{E_{2 \tau}}{E_{2 n}}$
$$
\therefore \,\, \frac{\tan \theta_2}{\tan \theta_1} = \frac{\varepsilon_2}{\varepsilon_1}
$$
(2) 当两种导电介质内流有恒定电流时，分界面上电场线的曲折满足
$$
\frac{\tan \theta_2}{\tan \theta_1} = \frac{\sigma_2}{\sigma_1}
$$

其中 $\sigma_1$ 和 $\sigma_2$ 分别为两种介质的电导率。

同理，利用电场的边值关系：

由电场强度切向连续：$E_{1 \tau} = E_{2 \tau}$ ，由法向电流密度连续（这是界面不出现电荷积累的必要条件）：$\sigma_{1} E_{1 n} = \sigma_{2} E_{2 n}$
$$
\therefore \,\, \frac{\tan \theta_2}{\tan \theta_1} = \frac{\frac{E_{1 \tau}}{E_{1 n}}}{\frac{E_{2 \tau}}{E_{2 n}}} = \frac{\sigma_2}{\sigma_1}
$$
思考题：能否说明或最好证明ϵ → ∞的电介质表面为等势面。

证明：利用 1.12 (1) 问的结论，当介电常数趋向于无穷大时，介质外表面附近电场线垂直于表面，所以是等势面。

一个更加数学的证明：

由于电介质内部自由电荷有限，所以$\mathbf{D}$ 有界，所以介质内部 $\mathbf{E} \to 0$。所以表面附近$E_{\tau} \to 0$，即$\frac{\partial \phi}{\partial n} \to 0$，故是等势面。

### 6. 电磁相互作用能量动量的转化与守恒

1.14 内外半径分别为 $a$ 和 $b$ 的无限长圆柱形电容器，单位长度电荷为 $\lambda_f$，板间填充电导率为 $\sigma$ 的非磁性物质。

(1)证明在介质中任何一点传导电流与位移电流严格抵消，因此内部无磁场。

证明：

设介质中电场强度 $\vec{E}(\vec{r})$ ：

则传导电流为 $\vec{j} = \sigma \vec{E}(\vec{r})$，假设该介质的介电常数为$\epsilon$。
$$
\vec{E}(\vec{r}) = \frac{\lambda_{f}}{2 \pi \epsilon r} \hat{r} \qquad (a < r < b)
$$

$$
\frac{\mathrm{d} \lambda_{f}}{\mathrm{d} t} = - \sigma \vec{E}(\vec{r}) 2 \pi r = - \frac{\sigma \lambda_{f}}{\epsilon}
$$

$$
\therefore \,\, \vec{j} + \epsilon \frac{\partial \vec{E}}{\partial t} = \sigma \vec{E} + \epsilon (- \frac{\sigma \vec{E}}{\epsilon}) = 0
$$



(2) 求 $\lambda_f$ 随时间的衰减规律。
$$
\because \,\, \frac{\mathrm{d} \lambda_{f}}{\mathrm{d} t} = - \frac{\sigma \lambda_{f}}{\epsilon}
$$

$$
\therefore \,\, \lambda_{f} (t) = \lambda_{f0} e^{- \frac{\sigma t}{\epsilon}}
$$



(3) 求与轴相距为 $r$ 的地方的能量耗散功率密度。
$$
\sigma j^{2} = \sigma (\frac{\lambda_{f}}{2 \pi \epsilon r})^{2}
$$


(4) 求长度为 $l$ 的一段介质总的能量耗散功率，并证明它等于这段的静电能减少率。
$$
W = - l \int_{a}^{b} \sigma (\frac{\lambda_{f}}{2 \pi \epsilon r})^{2} 2 \pi r dr = - \frac{l \sigma \lambda_{f}^{2}}{2 \pi \epsilon^{2}} \ln \frac{b}{a}
$$
证明：静电能减少率：
$$
\frac{\mathrm{d}}{\mathrm{d} t} l \int_{a}^{b} \frac{1}{2} \epsilon E^{2} 2 \pi r dr = \frac{\mathrm{d}}{\mathrm{d} t} l \int_{a}^{b} \frac{\epsilon}{2} (\frac{\lambda_{f}}{2 \pi \epsilon r})^{2} 2 \pi r dr = \frac{\mathrm{d}}{\mathrm{d} t} \frac{l \lambda_{f}^{2}}{4 \pi \epsilon} \ln \frac{b}{a} = - \frac{\sigma \lambda_{f}}{\epsilon} \frac{l \lambda_{f}}{2 \pi \epsilon} \ln \frac{b}{a} =  - \frac{l \sigma \lambda_{f}^{2}}{2 \pi \epsilon^{2}} \ln \frac{b}{a}
$$


思考题: 试用张量力说明电力线和磁力线前后受拉力,相互之间有斥力。

可用MOOC上提到的橡皮筋模型来分析：假设几根相邻的电（磁）力线构成一根流管，利用Maxwell应力张量的表达式可以导出由单一电（磁）部分对一个表面产生的力的方向和面法线的夹角是电（磁）场强度和面法线夹角的两倍。

考虑流管的前表面，此时电（磁）场强度和面法向同向，所以受力沿面法向方向。

考虑流管的后表面，此时电（磁）场强度和面法向反向，所以受力和面法向反向夹角为$\pi \times 2  = 2 \pi$ 即也和面法向同向。所以“前后受拉力”。

考虑流管的侧面，此时相邻电（磁）力线产生的电（磁）场和流管侧面法向量夹角为90度，所以应力方向和法向夹角为180度，即起到排斥的效果。

研究问题：

1. 能否通过修改麦克斯韦方程组，使能流密度 $\vec{S}$ 有沿 $E$ 或 $B$ 方向的分量？

   对非各向同性线性介质而言，本身能流密度可能存在磁感应强度方向分量，比如双轴晶体。不知道“修改麦克斯韦方程组”具体代表什么，如果不改变电磁作用的基本规律似乎无法使能流密度具有电场强度分量。

2. 考虑有介质的情况，动量的转化与守恒定律（动量密度，动量流密度）应如何写？

对线性极化介质而言： 
$$
\mathbf{f} = (\nabla \cdot \mathbf{D}) \mathbf{E} + (\nabla \times \mathbf{H}) \times \mathbf{B} - \frac{\partial \mathbf{D}}{\partial t} \times \mathbf{B} = \nabla \cdot \mathbf{T} - \frac{\partial \mathbf{g}}{\partial t}
$$


$$
(\nabla \cdot \mathbf{D}) \mathbf{E} = \nabla \cdot (\mathbf{D} \mathbf{E}) - (\mathbf{D} \cdot \nabla) \mathbf{E}
$$

 展开叉积项： 
$$
(\nabla \times \mathbf{H}) \times \mathbf{B} = \mathbf{B} \cdot (\nabla \mathbf{H}) - \nabla (\mathbf{H} \cdot \mathbf{B}) + (\mathbf{H} \cdot \nabla) \mathbf{B}
$$

$$
\frac{\partial \mathbf{g}}{\partial t} = \frac{\partial}{\partial t} (\mathbf{D} \times \mathbf{B}) = \frac{\partial \mathbf{D}}{\partial t} \times \mathbf{B} + \mathbf{D} \times \frac{\partial \mathbf{B}}{\partial t}
$$


$$
\therefore \,\, -\frac{\partial \mathbf{D}}{\partial t} \times \mathbf{B} = -\frac{\partial \mathbf{g}}{\partial t} + \mathbf{D} \times (\nabla \times \mathbf{E})
$$

$$
\therefore \,\, \mathbf{T} = \mathbf{D}\mathbf{E} + \mathbf{B} \mathbf{H} - \frac{1}{2} \mathbf{I} (\mathbf{D} \cdot \mathbf{E} + \mathbf{B} \cdot \mathbf{H})
$$

对一般介质我不会推导。