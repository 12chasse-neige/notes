# 费曼物理学（2） 第3次作业

Chasse_neige

#### 1 介电系数 (石镇鹏)

量子力学提出以前，人们认为电子在绕着原子核转动，这个模型虽然已经被证明是错误的，但它仍然能够解决一些问题。本题尝试使用这个模型来计算氢原子在受到外加电场时，电子偏离轨道产生的电偶极矩。为了方便计算，我们忽略外电场与电子对质子的相互作用。同时，我们仅考虑在二维情况，即电子只在一个二维平面上做圆周运动。

(1). 为了简单起见，我们假设在受到电场作用之前，电子进行圆周运动，圆周运动半径为 $r_0 = 1$，且电子的电荷 $e = 1$ 与质量 $m = 1$。请在极坐标系下，写出此时电子的运动方程，并求解 (取 $\frac{1}{4\pi\epsilon_0} = 1$)；
$$
\ddot{r} - \dot{\theta}^{2} r = - \frac{1}{r^{2}}
$$

$$
2 \dot{\theta} \dot{r} + \ddot{\theta} r = 0
$$

(2). 在 $t = 0$ 时刻，我们施加一个朝 x-轴的电场 $E$，请写出此时电子满足的运动方程；
$$
\ddot{r}  - \dot{\theta}^{2} r = - \frac{1}{r^{2}} + \frac{eE}{m} \cos \theta
$$

$$
2 \dot{\theta} \dot{r} + \ddot{\theta} r = - \frac{eE}{m} \sin \theta
$$

(3). 对于一般的电场强度 $E$，电子的运动方程不易求解。因此我们考虑一个简单情形，即电场强度较弱 $\epsilon = \frac{eE}{m} \ll 1$。此时，我们可以微扰求解我们的微分方程。具体而言，我们可以 Taylor 展开我们的运动方程：
$$
r = r_0 + \epsilon r_1(t) + \epsilon^2 r_2(t) + \cdots,
$$
$$
\theta = \theta_0 + \epsilon \theta_1(t) + \epsilon^2 \theta_2(t) + \cdots
$$
请将上述展开带入 (2) 中的运动方程，并写出正比于 $\epsilon$ 阶的微扰运动方程。

微扰后：
$$
\epsilon (\ddot{r}_{1} - \dot{\theta}_{0}^{2} r_{1} - 2 \dot{\theta}_{0} \dot{\theta}_{1} r_{0}     ) = 2 \epsilon \frac{r_{1}}{r_{0}^{3}} + \epsilon \cos \theta_{0}
$$

$$
\epsilon (2 \dot{\theta}_{1} \dot{r}_{0} + 2 \dot{\theta}_{0} \dot{r}_{1} + \ddot{\theta}_{0} r_{1} + \ddot{\theta}_{1} r_{0}) = - \epsilon \sin \theta_{0}
$$

所以一阶项对应的运动方程为：
$$
\ddot{r}_{1} - \dot{\theta}_{0}^{2} r_{1} - 2 \dot{\theta}_{0} \dot{\theta}_{1} r_{0} = 2  \frac{r_{1}}{r_{0}^{3}} + \cos \theta_{0}
$$

$$
2 \dot{\theta}_{1} \dot{r}_{0} + 2 \dot{\theta}_{0} \dot{r}_{1} + \ddot{\theta}_{0} r_{1} + \ddot{\theta}_{1} r_{0} = - \sin \theta_{0}
$$

(4). 请给定的边界条件 $r_1 = 0$, $\dot{r}_1 = 0$, $\theta_1 = 0$, $\dot{\theta}_1 = 0$ 下，我们可以求解上述运动方程。假设我们仅考虑 $O(\epsilon)$ 的贡献，请求解运动方程。取 $\epsilon = 0.01$，请画出电子在 2 个，4 个，8 个周期内的运动轨迹，并在 x-轴上轨迹相对于原轨道的偏移量。请计算在上述周期下，原子的平均电偶极矩。假设原子体密度为 $N$，请计算等效的相对介电常数。

带入 $r_{0} = 1$， $\theta_{0} (t) = t$ 以及题给边界条件：
$$
\ddot{r}_{1} - r_{1} - 2 \dot{\theta}_{1}  = 2 r_{1} + \cos t
$$

$$
2 \dot{r}_{1} + \ddot{\theta}_{1} = - \sin t
$$

解得：
$$
\begin{aligned}
r_1(t) &= A \sin t + B \cos t + \frac{3}{2} t \sin t + C \\
\theta_1(t) &= - (2B + 2) \sin t + 2A \cos t + 3t \cos t - \frac{3}{2} C t + D
\end{aligned}
$$
利用边界条件待定系数，解得：
$$
B = 2 \\ 
C = -2 \\
D = A = 0
$$
所以解为：
$$
\begin{aligned}
r_1(t) &= 2 \cos t + \frac{3}{2} t \sin t - 2 \\
\theta_1(t) &= - 6 \sin t + 3t \cos t + 3 t 
\end{aligned}
$$
作图
$$
\begin{aligned}
r (t) &= 1 + 0.01 \times ( 2 \cos t + \frac{3}{2} t \sin t - 2 ) \\
\theta (t) &= t + 0.01 \times (- 6 \sin t + 3t \cos t + 3 t )
\end{aligned}
$$

​<img src="./Feynman Lectures on Physics (2) Homework 3.assets/image-20250804225820529.png" alt="image-20250804225820529" style="zoom:50%">

两个周期

<img src="./Feynman Lectures on Physics (2) Homework 3.assets/image-20250804225831058.png" alt="image-20250804225831058" style="zoom:50%">

四个周期

<img src="./Feynman Lectures on Physics (2) Homework 3.assets/image-20250804225839194.png" alt="image-20250804225839194" style="zoom:50%">

八个周期

平均偶极矩：
$$
<x> = \frac{1}{2 \pi} \int_{0}^{2 \pi} (1 + \epsilon (2 \cos t + \frac{3}{2} \sin t - 2)) \cos (t + \epsilon (- 6 \sin t + 3 t \cos t + 3 t)) \mathrm{d} t \\ \approx \frac{59}{8} \epsilon
$$
所以原子平均偶极矩为 $\frac{59}{8} e r_{0} \epsilon$

极化强度为 $\frac{59}{8} N e r_{0} \epsilon$

等效的相对介电常数为 $1 + \frac{59}{8} \frac{N e^{2} r_{0}}{m \epsilon_{0}}$

#### 2 静电模拟 (12-1)

(1). 一强度密度为 $\rho$ 的无穷长直热源平行放置在热导率为 $K$ 的无限大均匀材料下距表面距离为 $a$ 的地方，忽略空气热导率，计算材料表面的温度分布。

进行电磁学的类比：
$$
\nabla \cdot (K \nabla T) = - s
$$

$$
\nabla^{2} T = - \frac{s}{K}
$$

此处 $s$ 更改为线强度密度$\rho$ ，然后使用热像法：

表面上距离无穷长直热源向表面垂线垂足 $x$ 处的温度为
$$
T (x) = - \frac{\rho}{\pi K} \ln \sqrt{\frac{1}{2} + \frac{x^{2}}{2 a^{2}}} + T (0)
$$

#### 3 规范对称性 (14-4)

(1). 电磁场与电磁势的关系为 $\vec{E} = -\nabla\phi - \frac{\partial}{\partial t}\vec{A}$, $\vec{B} = \nabla \times \vec{A}$，证明在规范变换 $\phi \rightarrow \phi' = \phi - \frac{\partial}{\partial t}a$, $\vec{A} \rightarrow \vec{A}' = \vec{A} + \nabla a$ 下，电磁场保持不变，其中 $a$ 为任意函数。

证明：在规范变换后
$$
\vec{E'} = - \nabla (\phi - \frac{\partial }{\partial t} a) - \frac{\partial}{\partial t}(\vec{A} + \nabla a) = - \nabla \phi - \frac{\partial}{\partial t} \vec{A} = \vec{E}
$$

$$
\vec{B'} = \nabla \times (\vec{A} + \nabla a) = \nabla \times \vec{A} = \vec{B}
$$

所以规范变换并不会对场强产生影响

(2). 取定规范条件后，相当于对规范变换的函数 $a$ 做出了进一步限定，求出在库伦规范和洛伦茨规范下，$a$ 需要满足的方程。这些方程有非零解，故在取定规范后，电磁势并未被完全确定下来。

库伦规范：
$$
\nabla \cdot \vec{A} = 0
$$

$$
\nabla \cdot (\vec{A} + \nabla a) = 0
$$

所以 $a$满足
$$
\nabla^{2} a = 0
$$
洛伦兹规范：
$$
\nabla \cdot \vec{A} - \frac{1}{c^{2}} \frac{\partial}{\partial t} \phi = 0
$$

$$
\nabla \cdot ({\vec{A} + \nabla a}) = \frac{1}{c^{2}} \frac{\partial}{\partial t}(\phi - \frac{\partial}{\partial t} a)
$$

所以 $a$ 满足
$$
\nabla^{2} a + \frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} a = 0
$$
(3). 请用电磁场的微分形式解释规范对称性。

考虑四维势 $\mathbf{A} = (\vec{A}, \frac{\phi}{c})$，取度规为 $\begin{pmatrix} 1, 1, 1, -1 \end{pmatrix}$

规范对称性就可以表示为 $\mathbf{A'} = \mathbf{A} + \mathrm{d} \psi$，其中 $\psi$为任意标量场，$\mathrm{d}$ 为外微分。
$$
\mathbf{F} = \mathrm{d} \mathbf{A}
$$
麦克斯韦方程组可以表示为
$$
\mathrm{d} \mathbf{F} = 0\\
\mathrm{d} \star \mathbf{F} = \star \mathbf{J}
$$
由于规范变换后
$$
\mathbf{F'} =  \mathrm{d} \mathbf{A'} = \mathrm{d} \mathbf{A} + \mathrm{d} \mathrm{d} \psi = \mathrm{d} \mathbf{A} = \mathbf{F}
$$
电磁场张量不变，所以麦克斯韦方程组形式不变。

#### 4 磁单极子

(1). 若磁单极子存在，麦克斯韦方程组需引入对称的磁荷和磁流。请用场强的微分形式表达修正后的麦克斯韦方程组。

修正后麦克斯韦方程组可以表示为：（其中下标 $e$ 表示电荷，下标 $m$ 表示磁荷）
$$
\nabla \cdot \vec{E} = \frac{\rho_{e}}{\epsilon_{0}} \\
\nabla \times \vec{E} = - \vec{j}_{m} - \frac{\partial}{\partial t} \vec{B} \\
\nabla \cdot \vec{B} = \rho_{m} \\
\nabla \times \vec{B} = \mu_{0} \vec{j}_{e} + \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} \vec{E}
$$
(2). 若宇宙中的所有粒子所具有的电荷与磁荷之比都相同，请说明我们总可以对场和荷做一种旋转变换，使得旋转过后的场和荷仍然满足麦克斯韦方程组，且所有粒子的磁荷为 0。

证明：注意到麦克斯韦方程组可以写成形式
$$
\nabla \cdot (\vec{E} + i c \vec{B}) = \frac{1}{\epsilon_{0}} (\rho_{e} + i \sqrt{\frac{\epsilon_{0}}{\mu_{0}}} \rho_{m}) \\
\nabla \times (\vec{E} + i c \vec{B}) = i c \mu_{0} (\vec{j}_{e} + i \sqrt{\frac{\epsilon_{0}}{\mu_{0}}} \vec{j}_{m}) + \frac{i}{c} \frac{\partial}{\partial t} (\vec{E} + i c \vec{B})
$$
所以对于场和荷做变换
$$
\vec{E'} + i c \vec{B'} = e^{i \theta} (\vec{E} + i c \vec{B}) \\
\rho_{e}' + i \sqrt{\frac{\epsilon_{0}}{\mu_{0}}} \rho_{m}' = e^{i \theta} (\rho_{e} + i \sqrt{\frac{\epsilon_{0}}{\mu_{0}}} \rho_{m}) \\
$$
之后麦克斯韦方程组形式不变。

若宇宙中的所有粒子所具有的电荷与磁荷之比都相同，即为 $\frac{q_{e}}{q_{m}} = k$，那么取上述变换中的 $\theta = - \arctan (\frac{1}{k} \sqrt{\frac{\epsilon_{0}}{\mu_{0}}})$，则变换后所有粒子的磁荷均变为 $0$，并且麦克斯韦方程组任然成立。