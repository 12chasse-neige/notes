# 费曼物理学（2） 第7次作业

Chasse_neige

### 1. 浅水波与电磁场

厄尔尼诺与拉尼诺现象都可以用浅水波理论来研究，然而其解析解非常困难，一般依赖于大型的数值模拟。近十年来，物理学家发现浅水波等价于一个包含 Chern-Simons 相互作用的电磁理论，从而将厄尔尼诺与拉尼诺的产生用电磁理论的处理方法（特别是反常量子霍尔效应）联系起来。本题我们尝试说明浅水波与 1+2 维规范理论的等价性。

#### 1. 浅水波运动方程的连续性方程形式



(1). 浅水波的运动方程可以用流体的高度 $h(t, x, y)$ 与水平方向的流速场 $\vec{u}(t, x, y)$ 来描述：
$$
\frac{\partial h}{\partial t} + \vec{u} \cdot \nabla h + h \nabla \cdot \vec{u} = 0
$$

$$
\frac{\partial u^i}{\partial t} + (\vec{u} \cdot \nabla) u^i - f \epsilon^{ij} u^j + g \frac{\partial h}{\partial x^i} = 0
$$

其中 $f$ 为科里奥利力参数，$g$ 为重力加速度。请证明浅水波的运动方程可以写成以下两个连续性方程：

$$
\frac{\partial J^0}{\partial t} + \nabla \cdot \vec{J} = 0 \\
J_0 = h(t, x, y) \\
\vec{J} = h(t, x, y) \vec{u}(t, x, y)
$$

$$
\frac{\partial \tilde{J}^0}{\partial t} + \nabla \cdot \vec{\tilde{J}} = 0 \\ 
\tilde{J}^0 = \zeta(t, x, y) + f \\ 
\vec{\tilde{J}} = (\zeta(t, x, y) + f) \vec{u}(t, x, y) \\
\zeta(t, x, y) = \frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y}
$$

第一个方程表征的是浅水波高度的守恒方程，第二个方程描述的是涡旋 $\zeta$ 在存在科里奥利力的情况下的守恒方程。

证明
$$
\frac{\partial J^0}{\partial t} + \nabla \cdot \vec{J} = \frac{\partial h}{\partial t} + \nabla \cdot (h \vec{u}) = \frac{\partial h}{\partial t} + \vec{u} \cdot \nabla h + h \nabla \cdot \vec{u} = 0
$$

$$
\frac{\partial \tilde{J}^0}{\partial t} + \nabla \cdot \vec{\tilde{J}} = \frac{\partial}{\partial t} (\zeta(t, x, y) + f) + \nabla \cdot ((\zeta(t, x, y) + f) \vec{u}(t, x, y)) \\ =
\frac{\partial \zeta}{\partial t} + (\nabla \zeta) \cdot \vec{u} + (\zeta + f) \nabla \cdot \vec{u}
$$

$$
\frac{\partial}{\partial t} \zeta = \frac{\partial}{\partial t} (\frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y}) = \frac{\partial}{\partial x} (f \epsilon^{21} u^{1} - (\vec{u} \cdot \nabla) u^{2} - g \frac{\partial h}{\partial y}) - \frac{\partial}{\partial y} (f \epsilon^{12} u^{2} - (\vec{u} \cdot \nabla) u^{1} - g \frac{\partial h}{\partial x}) \\ =
\frac{\partial}{\partial x} (-f u^{1} - (\vec{u} \cdot \nabla) u^{2} - g \frac{\partial h}{\partial y}) - \frac{\partial}{\partial y} (f u^{2} - (\vec{u} \cdot \nabla) u^{1} - g \frac{\partial h}{\partial x})
$$

$$
(\nabla \zeta) \cdot \vec{u} = \frac{\partial}{\partial x}(\frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y}) u^{1} + \frac{\partial}{\partial y}(\frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y}) u^{2}
$$

$$
(\zeta + f) \nabla \cdot \vec{u} = (\frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y} + f) (\frac{\partial u^{1}}{\partial x} + \frac{\partial u^{2}}{\partial y})
$$

所以
$$
\frac{\partial \zeta}{\partial t} + (\nabla \zeta) \cdot \vec{u} + (\zeta + f) \nabla \cdot \vec{u} \\ = 
\frac{\partial}{\partial x} (-f u^{1} - (\vec{u} \cdot \nabla) u^{2} - g \frac{\partial h}{\partial y}) - \frac{\partial}{\partial y} (f u^{2} - (\vec{u} \cdot \nabla) u^{1} - g \frac{\partial h}{\partial x}) \\ +
\frac{\partial}{\partial x}(\frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y}) u^{1} + \frac{\partial}{\partial y}(\frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y}) u^{2} \\ + 
(\frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y} + f) (\frac{\partial u^{1}}{\partial x} + \frac{\partial u^{2}}{\partial y}) \\ = 
\frac{\partial}{\partial y} (u^{1} \frac{\partial u^{1}}{\partial x} +  u^{2} \frac{\partial u^{1}}{\partial y}) - \frac{\partial}{\partial x} (u^{1} \frac{\partial u^{2}}{\partial x} +  u^{2} \frac{\partial u^{2}}{\partial y}) \\ +
u^{1} \frac{\partial}{\partial x}(\frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y}) + u^{2} \frac{\partial}{\partial y}(\frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y}) \\ + 
(\frac{\partial u^2}{\partial x} - \frac{\partial u^1}{\partial y}) (\frac{\partial u^{1}}{\partial x} + \frac{\partial u^{2}}{\partial y}) = 0
$$

#### 2. 浅水波运动方程与麦克斯韦方程组的类比

(2). 通过一些观察，我们可以将流体的高度 $h(t, x, y)$ 与水平方向的流速场 $\vec{u}(t, x, y)$ 同 1+2 维的电场磁场类比起来。请证明，如果令  $B = h$, $E_i = \epsilon_{ij} h u_j$，则第一个浅水波运动方程(1.1)可以写成麦克斯韦方程组的一部分:

$$
\epsilon^{\mu \nu \rho} \partial_{\mu} \partial_{\nu} A_{\rho} = 0
$$

（注：事实上，第二个浅水波运动方程 (1.2) 也可以写成类似于麦克斯韦方程组的形式。感兴趣的同学可以将此作为期末小论文的一个选题。）

证明
$$
\frac{\partial h}{\partial t} + \vec{u} \cdot \nabla h + h \nabla \cdot \vec{u} = 0
$$
所以
$$
\frac{\partial h}{\partial t} + u_{i} \partial_{i} h + h \partial_{i} u_{i} = 0 \\
\frac{\partial h}{\partial t} + \partial_{i} (u_{i} h) = 0
$$
因为 $E_{i} = h \epsilon_{ij} u_{j}$ ，所以
$$
\epsilon_{ik} E_{i} = h \epsilon_{ik} \epsilon_{ij} u_{j} = h \delta_{kj} u_{j} = h u_{k}
$$
所以
$$
\frac{\partial B}{\partial t} + \partial_{k} (\epsilon_{ik} E_{i}) = 0
$$
但是在当前度规下 $E^{i} = g^{ij} E_{j} = - E_{j}$

写成矢量的形式，即
$$
\frac{\partial \vec{B}}{\partial t} + \nabla \times \vec{E} = 0
$$
从1+2 维的电场磁场麦克斯韦方程组的协变形式出发
$$
\epsilon^{\mu \nu \rho} \partial_{\mu} \partial_{\nu} A_{\rho} = 0
$$

$$
\epsilon^{k i 0} \partial_{k} \partial_{i} A_{0} + \epsilon^{k 0 j} \partial_{k} \partial_{0} A_{j} + \epsilon^{0 i j} \partial_{0} \partial_{i} A_{j} = 0
$$

$$
\frac{1}{c} \epsilon^{kj} \partial_{k} E_{j} + \partial_{0} (\epsilon^{ij} \partial_{i} A_{j}) = 0 \\
- \frac{1}{c} \nabla \times \vec{E} - \frac{1}{c} \frac{\partial}{\partial t} (\nabla \times \vec{A}) = 0
$$

所以
$$
\frac{\partial \vec{B}}{\partial t} + \nabla \times \vec{E} = 0
$$
即第一个运动方程可以视作 1+2 维时空麦克斯韦方程组的一部分 

### 2. 自旋，磁性与相变

#### 1. 自旋体系的概率与均值计算

(1). 考虑一个有 $N$ 个自旋为 $\frac{1}{2}$  的粒子的体系，对于每个粒子而言，其自旋沿 $+z$ 轴与 $-z$  轴的概率一样。请计算体系有 $n$ 个粒子自旋朝 $+z$ 轴方向的概率，并计算体系自旋的均值。
$$
p_{n} = \frac{C_{N}^{n}}{2^{N}}
$$
均值
$$
<s> = \sum_{n = 0}^{N} \frac{1}{2} (2n - N) \frac{C_{N}^{n}}{2^{N}} = 0
$$

#### 2. 在外磁场作用下的概率与均值计算

(2). 在一个沿 $+ z$ 方向磁场的作用下，粒子方向自旋沿 $+ z$ 轴的概率变为 $\frac{1}{2} + q$，粒子自旋朝 $-z$ 轴的概率变为 $\frac{1}{2} - q$。请计算此时体系有 $n$ 个粒子自旋朝 $+z$ 轴方向的概率，并计算体系自旋的均值。
$$
p_{n} = C_{N}^{n} (\frac{1}{2} + q)^{n} (\frac{1}{2} - q)^{N - n}
$$

$$
<s> = \sum_{n = 0}^{N} \frac{1}{2} (2n - N) C_{N}^{n} (\frac{1}{2} + q)^{n} (\frac{1}{2} - q)^{N - n} \\ = 
\sum_{n = 0}^{N} n C_{N}^{n} (\frac{1}{2} + q)^{n} (\frac{1}{2} - q)^{N - n} - \frac{1}{2} N \\ =
(\frac{1}{2} + q) N \sum_{n = 1}^{N} C_{N - 1}^{n - 1} (\frac{1}{2} + q)^{n - 1} (\frac{1}{2} - q)^{N - n} - \frac{1}{2} N \\ =
(\frac{1}{2} + q) N - \frac{1}{2} N = q N
$$

#### 3. 一维伊辛模型的相变证明

(3). 考虑一个真实的一维 $N$ 个自旋链系统，即我们考虑一维的伊辛模型，其哈密顿量可以写为：

$$
H = -J \sum_{\langle ij \rangle} s_i s_j - h \sum_{i} s_i
$$

对于一维的伊辛模型而言，我们可以解析的计算其自由能：

$$
F = -N k T \log(\lambda_1), \quad \lambda_1 = \sqrt{e^{\frac{2J}{T}} \sinh^2 \left( \frac{h}{T} \right) + e^{-\frac{2J}{T}}} + e^{\frac{J}{T}} \cosh \left( \frac{h}{T} \right)
$$

请证明对于一维伊辛模型而言，其自由能对外磁场 $h$ 的导数在  $T \neq 0$ 的时候没有零点，即一维伊辛模型没有相变。

证明
$$
\frac{d F}{d h} = - \frac{NkT}{\lambda_{1}} \left(\frac{e^{\frac{2J}{T}} \sinh (\frac{h}{T}) \cosh (\frac{h}{T}) \frac{1}{T}}{\sqrt{e^{\frac{2J}{T}} \sinh^2 \left( \frac{h}{T} \right) + e^{-\frac{2J}{T}}}} + e^{\frac{J}{T}} \sinh (\frac{h}{T}) \frac{1}{T} \right)
$$
在  $T \neq 0$ 的时候，该导数若存在零点，则
$$
e^{\frac{2J}{T}} \sinh (\frac{h}{T}) \cosh (\frac{h}{T}) + e^{\frac{J}{T}} \sinh (\frac{h}{T}) \sqrt{e^{\frac{2J}{T}} \sinh^2 \left( \frac{h}{T} \right) + e^{-\frac{2J}{T}}} = 0
$$

$$
e^{\frac{4J}{T}} \sinh^{2} (\frac{h}{T}) \cosh^{2} (\frac{h}{T}) = e^{\frac{4J}{T}} \sinh^{4} (\frac{h}{T}) + \sinh^{2} (\frac{h}{T})
$$

$$
e^{\frac{4J}{T}} \cosh^{2} (\frac{h}{T}) = e^{\frac{4J}{T}} \sinh^{2} (\frac{h}{T}) + 1
$$

$$
(e^{\frac{4J}{T}} - 1) \cosh^{2} (\frac{h}{T}) = (e^{\frac{4J}{T}} - 1) \sinh^{2} (\frac{h}{T})
$$

由于 $J \neq 0$，所以 $e^{\frac{4J}{T}} - 1 \neq 0$
$$
\cosh^{2} (\frac{h}{T}) = \sinh^{2} (\frac{h}{T})
$$
无解。所以 $T \neq 0$ 的时候，该导数不存在零点，即一维伊辛模型没有相变。

### 3. 等效原理与引力

请利用等效原理推导粒子在引力场中的运动方程。

提示：考虑一个在引力作用下自由运动的粒子。根据等效原理，存在一个自由降落的坐标系 $\xi^{\alpha}$ ，粒子在这个坐标系里的运动方程是时空中的一条直线：

$$
\frac{d^2 \xi^{\alpha}}{d \tau^2} = 0
$$

其中 $d \tau$ 为固有时。考虑一个任意的坐标系 $x^{\mu}$，则此时自由降落坐标 $\xi^{\alpha}$ 是 $x^{\mu}$ 的函数，此时我们从(3.1)出发，推导的在 $x^{\mu}$ 坐标下的运动方程即为一般的引力场中的运动方程。

根据等效原理，在自由降落的坐标系 $\xi^\alpha$ 中，粒子的运动方程为直线：

$$
\frac{d^2 \xi^\alpha}{d\tau^2} = 0
$$

现在转换到任意坐标系 $x^\mu$，其中 $\xi^\alpha$ 是 $x^\mu$ 的函数。利用链式法则：

一阶导数：
$$
\frac{d\xi^\alpha}{d\tau} = \frac{\partial \xi^\alpha}{\partial x^\mu} \frac{dx^\mu}{d\tau}
$$
二阶导数：
$$
\frac{d^2\xi^\alpha}{d\tau^2} = \frac{\partial^2 \xi^\alpha}{\partial x^\mu \partial x^\nu} \frac{dx^\mu}{d\tau} \frac{dx^\nu}{d\tau} + \frac{\partial \xi^\alpha}{\partial x^\mu} \frac{d^2x^\mu}{d\tau^2}
$$
根据 $\frac{d^2\xi^\alpha}{d\tau^2} = 0$，代入得：

$$
\frac{\partial^2 \xi^\alpha}{\partial x^\mu \partial x^\nu} \frac{dx^\mu}{d\tau} \frac{dx^\nu}{d\tau} + \frac{\partial \xi^\alpha}{\partial x^\mu} \frac{d^2x^\mu}{d\tau^2} = 0
$$

乘以 $\frac{\partial x^\lambda}{\partial \xi^\alpha}$ 并利用 $\frac{\partial x^\lambda}{\partial \xi^\alpha} \frac{\partial \xi^\alpha}{\partial x^\mu} = \delta^\lambda_\mu$，得到：

$$
\frac{d^2x^\lambda}{d\tau^2} + \Gamma^\lambda_{\mu\nu} \frac{dx^\mu}{d\tau} \frac{dx^\nu}{d\tau} = 0
$$

其中克里斯托夫符号定义为：

$$
\Gamma^\lambda_{\mu\nu} = \frac{\partial x^\lambda}{\partial \xi^\alpha} \frac{\partial^2 \xi^\alpha}{\partial x^\mu \partial x^\nu}
$$

所以在 $x^{\mu}$ 坐标下的运动方程即测地线方程为
$$
\frac{d^2x^\lambda}{d\tau^2} + \Gamma^\lambda_{\mu\nu} \frac{dx^\mu}{d\tau} \frac{dx^\nu}{d\tau} = 0
$$

### 4. 协变性，牛顿引力与爱因斯坦引力

本题当中，我们尝试从牛顿引力出发，利用协变性猜测爱因斯坦引力的运动方程，即爱因斯坦方程。

#### 1. 牛顿引力的泊松方程

(1). 请类比电磁理论写出牛顿引力满足的泊松方程。
$$
\nabla \cdot \vec{g} = - 4 \pi G \rho_{m}
$$

$$
\nabla^{2} \phi = 4 \pi G \rho_{m}
$$

其中 $\phi$ 为引力势， $\vec{g}$ 为引力场强度，$\rho_{m}$ 为质量密度。

#### 2. 电磁理论的能量-动量张量

(2). 在第四次作业当中，我们推导了电磁理论的能量-动量张量的表达式:

$$
T^{\mu \nu} = F^{\mu \alpha} F^{\nu}_{\alpha} - \frac{1}{4} \eta^{\mu \nu} F^{\alpha \beta} F_{\alpha \beta}
$$

请计算 $T^{\mu \nu}$ 的 00 分量，并说明其物理意义。
$$
T^{00} = F^{0 \alpha} F_{\alpha}^{0} - \frac{1}{4} F^{\alpha \beta} F_{\alpha \beta} =  E^{2} - \frac{1}{2} (E^{2} - B^{2}) = \frac{1}{2} (E^{2} + B^{2})
$$

物理意义是能量密度

#### 3. 牛顿引力的张量形式泊松方程

(3). 假设牛顿引力中的引力势能也可以写成某个张量的 00 分量： $G_{00} = \nabla g_{00} = - \nabla^2 (1 + 2 \phi)$。请利用 $G_{00}$ 与 $T_{00}$ 重新写出牛顿引力满足的泊松方程。
$$
T_{00} = - \rho_{m} c^{2}
$$

所以柏松方程可以改写为
$$
G_{00} = - 8 \pi G \rho_{m} 
$$
所以
$$

$$

$$
G_{00} = \frac{8 \pi G}{c^{2}} T_{00}
$$

#### 4. Bonus：爱因斯坦方程的猜测

(4). Bonus: 此时我们写出的牛顿引力方程只是某个张量的分量方程，由电磁理论的经验，我们知道这个方程不具有协变性，即在洛伦兹变换或者坐标变换下不能保持方程的形式不变。利用协变性的要求，请从牛顿引力方程出发，猜测爱因斯坦方程的表达式。
$$
G_{\mu \nu} = \frac{8 \pi G}{c^{2}} T_{\mu \nu}
$$

