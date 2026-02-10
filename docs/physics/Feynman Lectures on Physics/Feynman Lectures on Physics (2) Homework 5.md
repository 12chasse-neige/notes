# 费曼物理学（2） 第5次作业
Chasse_neige

### 1 势与场 (15-7)
Chern-Simons 理论是一类特殊的相互作用项，在量子反常，分数量子霍尔效应，任意子以及 Dyon（既带电荷又带磁荷的粒子）中有重要的应用。其特殊之处体现在其运动方程没有动力学项，即其运动方程就是一个恒等式，在下面的计算中我们可以看到这一点。4 维时空的 Chern-Simons 理论的拉氏量可以写为：
$$
\mathcal{L} = \epsilon^{\mu\nu\rho\sigma} F_{\mu\nu} F_{\rho\sigma}
$$

1. 请回忆第一次作业第三题，证明上述拉氏量可以写为：
   $$
   \mathcal{L} = -8 \vec{E} \cdot \vec{B}
   $$
   证明：
   $$
   \mathcal{L} = \epsilon^{\mu \nu \rho \sigma} F_{\mu \nu} F_{\rho \sigma} = \epsilon^{\mu \nu \rho \sigma} (\partial_{\mu} A_{\nu} - \partial_{\nu} A_{\mu}) (\partial_{\rho} A_{\sigma} - \partial_{\sigma} A_{\rho}) \\ = 
   4 \epsilon^{\mu \nu \rho \sigma} \partial_{\mu} A_{\nu} \partial_{\rho} A_{\sigma} \\ =
   4 (\epsilon^{ijk} \partial_{0} A_{i} \partial_{j} A_{k} - \epsilon^{ijk} \partial_{i} A_{0} \partial_{j} A_{k}  + \epsilon^{ijk} \partial_{i} A_{j} \partial_{0} A_{k} - \epsilon^{ijk} \partial_{i} A_{j} \partial_{k} A_{0}) \\ =
   8 ( \partial_{t} \vec{A}  \cdot (\nabla \times \vec{A}) + \nabla \phi \cdot (\nabla \times \vec{A})) = -8 \vec{E} \cdot \vec{B}
   $$
   
2. 在低维情况下，Chern-Simons 理论有独特的性质，在 3 维时空当中，带有外源的 Chern-Simons 理论可以写为：
   $$
   \mathcal{L} = \frac{\kappa}{2} \epsilon^{\mu\nu\rho} A_\mu \partial_\nu A_\rho - A_\mu J^\mu
   $$
   其中 $\mu, \nu, \rho = \{0, 1, 2\}$。请利用 Euler-Lagrange 方程证明 3 维时空 Chern-Simons 理论对应的运动方程为：
   $$
   \rho = \kappa B
   $$
   $$
   J^i = \kappa \epsilon^{ij} E_j
   $$
   其中 $i, j = \{1, 2\}$，第一个方程可以理解为每一个电荷都带着一个垂直纸面向外的磁场，第二个方程就是第一个方程的演化方程。

   利用 Euler-Lagrange 方程
   $$
   \frac{\partial}{\partial x_{\mu}} \frac{\partial}{\partial (\partial_{\mu} A_{\nu})} \mathcal{L} = \frac{\partial}{\partial A_{\nu}} \mathcal{L}
   $$
   
   $$
   \frac{\partial}{\partial (\partial_{\mu} A_{\nu})} \mathcal{L}  = \frac{\partial}{\partial (\partial_{\mu} A_{\nu})} (\frac{\kappa}{2} \epsilon^{\rho\mu\nu} A_\rho \partial_\mu A_\nu - A_\mu J^\mu) = \frac{\kappa}{2} \epsilon^{\rho\mu\nu} A_\rho
   $$
   
   $$
   \frac{\partial}{\partial x_{\mu}} \frac{\kappa}{2} \epsilon^{\rho\mu\nu} A_\rho =  \frac{\kappa}{2} \epsilon^{\rho\mu\nu} \partial_{\mu} A_\rho
   $$
   
   $$
   \frac{\partial}{\partial A_{\nu}} (\frac{\kappa}{2} \epsilon^{\nu\mu\rho} A_\nu \partial_\mu A_\rho - A_\nu J^\nu) = \frac{\kappa}{2} \epsilon^{\nu\mu\rho} \partial_\mu A_\rho - J^{\nu}
   $$
   
   $$
    \frac{\kappa}{2} \epsilon^{\rho\mu\nu} \partial_{\mu} A_\rho = \frac{\kappa}{2} \epsilon^{\nu\mu\rho} \partial_\mu A_\rho - J^{\nu} \\
    \kappa \epsilon^{\mu \rho \nu} \partial_{\mu} A_{\rho} = J^{\nu}
   $$
   
   所以
   $$
   \rho = \kappa \epsilon^{ij 0} \partial_{i} A_{j} = \kappa (\nabla \times A) = \kappa B
   $$
   
   $$
   J^{i} = \kappa (\epsilon^{0ji} \partial_{0} A_{j} + \epsilon^{j0i} \partial_{j} A_{0}) = \kappa \epsilon^{ij} E_{j}
   $$
   
3. 考虑二维平面上存在两个电荷的情况，此时电荷密度与矢量势可以写为：
   $$
   \rho(\vec{x}, t) = e \sum_{n=1}^2 \delta(\vec{x} - \vec{x}_n(t))
   $$
   $$
   A_i(\vec{x}_n, t) = \frac{e}{2\pi\kappa} \sum_{m \neq n} \epsilon_{ij} \frac{x_n^j - x_m^j}{|\vec{x}_n - \vec{x}_m|^2}
   $$
   试计算 Aharonov-Bohm 相位：
   $$
   e \oint_C \vec{A} \cdot d\vec{x}
   $$
   注：一个粒子绕着另外一个粒子可被视为将两粒子交换两次。AB 相位的结果告诉我们两粒子交换两次多出一个相位。因此，如果相位不等于 1，则两粒子为任意子。（费米子和玻色子都要求交换两次的相位等于 1。）
   $$
   e \oint_C \vec{A} \cdot d\vec{x} = e \oint_{C}  \frac{e}{2\pi\kappa} \sum_{m \neq n} \epsilon_{ij} \frac{x_n^j - x_m^j}{|\vec{x}_n - \vec{x}_m|^2} d x^{i} \\ =
   e \iint_{S} \nabla \times \vec{A} \cdot d \vec{S} = e \iint_{S} \frac{\rho}{\kappa} d x_{1} d x_{2} \\ = 
   e \iint_{S} \frac{e}{\kappa} \sum_{n=1}^2 \delta(\vec{x} - \vec{x}_n(t)) d x_{1} d x_{2} = \frac{e^{2}}{\kappa}
   $$

### 2 最小作用量原理与磁单极 (19-1)

一般而言，考虑到磁单极子之后，麦克斯韦方程不能从一个作用量出发，利用最小作用量原理推导。特别地，如果存在磁单极子之后，为了满足环路定理，时空中会存在狄拉克弦，这也暗示着我们不能从一个简单的作用量出发，推导存在磁单极时候的麦克斯韦方程组。一个可行的方案是引入两个势能函数 $A^\mu$ 与 $B^\mu$。请利用最小作用量原理写出下面包含 $A^\mu$ 与 $B^\mu$ 的拉氏量对应的运动方程：
$$
\mathcal{L} = -\frac{n^\alpha n^\mu}{8\pi n^2} \eta^{\beta\nu} \left( F^A_{\alpha\beta} F^A_{\mu\nu} + F^B_{\alpha\beta} F^B_{\mu\nu} \right) + \frac{n^\alpha n_\mu}{16\pi n^2} \epsilon^{\mu\nu\gamma\delta} \left( F^B_{\alpha\nu} F^A_{\gamma\delta} - F^A_{\alpha\nu} F^B_{\gamma\delta} \right) - A_\mu J^\mu - \frac{4\pi}{e^2} B_\mu K^\mu
$$
其中 $F_A^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu$，$F_B^{\mu\nu} = \partial^\mu B^\nu - \partial^\nu B^\mu$。此外 $J^\mu$ 与通常的电流，$K^\mu$ 为平常的磁流，$n^\mu$ 为狄拉克弦的方向矢量。
$$
\delta s = \delta \int -\frac{n^\alpha n^\mu}{8\pi n^2} \eta^{\beta\nu} \left( F^A_{\alpha\beta} F^A_{\mu\nu} + F^B_{\alpha\beta} F^B_{\mu\nu} \right) + \frac{n^\alpha n_\mu}{16\pi n^2} \epsilon^{\mu\nu\gamma\delta} \left( F^B_{\alpha\nu} F^A_{\gamma\delta} - F^A_{\alpha\nu} F^B_{\gamma\delta} \right) - A_\mu J^\mu - \frac{4\pi}{e^2} B_\mu K^\mu \, d x^{4} \\ =
\int - \frac{n^\alpha n^\mu}{8\pi n^2} \eta^{\beta \nu} \left(F^{A}_{\alpha \beta} \delta F^{A}_{\mu \nu} + F^{A}_{\mu \nu} \delta F^{A}_{\alpha \beta} +  F^B_{\alpha\beta} \delta F^B_{\mu\nu} +  F^B_{\mu \nu} \delta F^B_{\alpha\beta} \right) \\ +
\frac{n^\alpha n_\mu}{16\pi n^2} \epsilon^{\mu\nu\gamma\delta} \left( F^B_{\alpha\nu} \delta F^A_{\gamma\delta} + F^A_{\gamma\delta} \delta F^B_{\alpha\nu} - F^A_{\alpha\nu} \delta F^B_{\gamma\delta} - F^{B}_{\gamma \delta} \delta F^{A}_{\alpha \nu} \right) \\ -
J^{\mu} \delta A_{\mu} -  \frac{4\pi}{e^2} K^\mu \delta B_\mu \, d x^{4}
$$
现在对第一项的变分进行分析
$$
\delta F^{A}_{\mu \nu} = \delta (\partial_{\mu} A_{\nu} - \partial_{\nu} A_{\mu})  = \partial_{\mu} \delta A_{\nu} - \partial_{\nu} \delta A_{\mu}
$$

$$
n^{\alpha} n^{\mu} \eta^{\beta \nu} (F^{A}_{\alpha \beta} \delta F^{A}_{\mu \nu} +  F^{A}_{\mu \nu} \delta F^{A}_{\alpha \beta}) \\ = 
n^{\alpha} n^{\mu} \eta^{\beta \nu} F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu} - n^{\alpha} n^{\mu} \eta^{\beta \nu} F^{A}_{\alpha \beta} \partial_{\nu} \delta A_{\mu} + n^{\alpha} n^{\mu} \eta^{\beta \nu} F^{A}_{\mu \nu} \partial_{\alpha} \delta A_{\beta} - n^{\alpha} n^{\mu} \eta^{\beta \nu} F^{A}_{\mu \nu} \partial_{\beta} \delta A_{\alpha} \\ = 
n^{\alpha} n^{\mu} \eta^{\beta \nu} F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu} F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu} + n^{\mu} n^{\alpha} \eta^{\nu \beta} F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu} - n^{\mu} n^{\alpha} \eta^{\nu \beta} F^{A}_{\alpha \beta} \partial_{\nu} \delta A_{\mu} \\ =
2 (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu}
$$

同理
$$
n^{\alpha} n^{\mu} \eta^{\beta \nu} (F^{B}_{\alpha \beta} \delta F^{B}_{\mu \nu} +  F^{B}_{\mu \nu} \delta F^{B}_{\alpha \beta}) \\ =
2 (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) F^{B}_{\alpha 
\beta} \partial_{\mu} \delta B_{\nu}
$$
 再分析第二项
$$
n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} \left( F^B_{\alpha\nu} \delta F^A_{\gamma\delta} + F^A_{\gamma\delta} \delta F^B_{\alpha\nu} - F^A_{\alpha\nu} \delta F^B_{\gamma\delta} - F^{B}_{\gamma \delta} \delta F^{A}_{\alpha \nu} \right) \\ =
(n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu}) \left( F^B_{\alpha\nu} \delta F^A_{\gamma\delta} + F^A_{\gamma\delta} \delta F^B_{\alpha\nu} \right) \\ = 
(2 n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu} + n^{\delta} n_{\mu} \epsilon^{\mu \gamma \alpha \nu}) F^{B}_{\alpha \nu} \partial_{\gamma} \delta A_{\delta} \\ +
(n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\nu} n_{\mu} \epsilon^{\mu \alpha \gamma \delta} - 2 n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu}) F^{A}_{\gamma \delta} \partial_{\alpha} \delta B_{\nu}
$$
对这几项作分部积分并且舍去全微分项，得到
$$
\delta s = \int d \tau - \frac{1}{4 \pi n^{2}} ((n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu} + (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) F^{B}_{\alpha \beta} \partial_{\mu} \delta B_{\nu}) \\ + 
\frac{1}{16 \pi n^{2}} ((2 n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu} + n^{\delta} n_{\mu} \epsilon^{\mu \gamma \alpha \nu}) F^{B}_{\alpha \nu} \partial_{\gamma} \delta A_{\delta} \\ +
(n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\nu} n_{\mu} \epsilon^{\mu \alpha \gamma \delta} - 2 n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu}) F^{A}_{\gamma \delta} \partial_{\alpha} \delta B_{\nu}) \\ -
J^{\mu} \delta A_{\mu} -  \frac{4\pi}{e^2} K^\mu \delta B_\mu \, d x^{4} = 0
$$

$$
\int d \tau  \frac{1}{4 \pi n^{2}} ((n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) \delta A_{\nu} \partial_{\mu} F^{A}_{\alpha \beta}   + (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) \delta B_{\nu} \partial_{\mu} F^{B}_{\alpha \beta} ) \\ -
\frac{1}{16 \pi n^{2}} ((2 n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu} + n^{\delta} n_{\mu} \epsilon^{\mu \gamma \alpha \nu})  \delta A_{\delta} \partial_{\gamma} F^{B}_{\alpha \nu}  \\ -
(n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\nu} n_{\mu} \epsilon^{\mu \alpha \gamma \delta} - 2 n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu}) \delta B_{\nu} \partial_{\alpha} F^{A}_{\gamma \delta}) \\ -
J^{\mu} \delta A_{\mu} -  \frac{4\pi}{e^2} K^\mu \delta B_\mu \, d x^{4} = 0
$$

所以可以整理得到包含 $A^\mu$ 与 $B^\mu$ 的拉氏量对应的运动方程为
$$
\frac{1}{4 \pi n^{2}} (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) \partial_{\mu} F^{A}_{\alpha \beta} - \frac{1}{16 \pi n^{2}} (2n^{\alpha} n_{\mu} \epsilon^{\mu \delta \gamma \nu} - n^{\gamma} n_{\mu} \epsilon^{\mu \nu \alpha \delta} + n^{\nu} n_{\mu} \epsilon^{\mu \gamma \alpha \delta}) \partial_{\gamma} F^{B}_{\alpha \delta} = J^{\nu}
$$

$$
\frac{1}{4 \pi n^{2}} (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) \partial_{\mu} F^{B}_{\alpha \beta} - \frac{1}{16 \pi n^{2}} (n^{\nu} n_{\mu} \epsilon^{\mu \alpha \gamma \delta} + 2 n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu} - n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta}) \partial_{\alpha} F^{A}_{\gamma \delta} = \frac{4 \pi}{e^{2}} K^{\mu}
$$

### 3 各向异性介质 (蒋济帆)

对于一般的晶体，由于各向异性，应该用介电张量 $\epsilon_{ij}$ 来表示其电学性质。取右手系 Oxyz，记电位移矢量 $\vec{D} = (D_x, D_y, D_z)$，电场强度矢量 $\vec{E} = (E_x, E_y, E_z)$，介电张量 $\epsilon$ 为：
$$
\epsilon = \begin{pmatrix}
\epsilon_{11} & \epsilon_{12} & \epsilon_{13} \\
\epsilon_{21} & \epsilon_{22} & \epsilon_{23} \\
\epsilon_{31} & \epsilon_{32} & \epsilon_{33}
\end{pmatrix}
$$
则：
$$
\vec{D} = \epsilon \cdot \vec{E} \quad \text{i.e.}
$$
$$
\begin{pmatrix}
D_x \\
D_y \\
D_z
\end{pmatrix}
=
\begin{pmatrix}
\epsilon_{11} & \epsilon_{12} & \epsilon_{13} \\
\epsilon_{21} & \epsilon_{22} & \epsilon_{23} \\
\epsilon_{31} & \epsilon_{32} & \epsilon_{33}
\end{pmatrix}
\begin{pmatrix}
E_x \\
E_y \\
E_z
\end{pmatrix}
$$
已知真空磁导率为 $\mu_0$，真空介电常数为 $\epsilon_0$。

1.证明：介电张量为对称张量。 
Hint：利用电磁场的能量。

证明：由于电场能量密度可以写成
$$
w_{E} = \frac{1}{2} \epsilon_{ij} E_{i} E_{j}
$$
由于能量密度关于电场强度是连续的，所以其偏导数满足可交换性
$$
\frac{\partial^{2}}{\partial E_{i} \partial E_{j}}  w_{E} = \frac{\partial^{2}}{\partial E_{j} \partial E_{i}}  w_{E}  
$$
所以 $\epsilon_{ij} = \epsilon_{ji}$

2.对于普通的晶体，介质是非磁性的、透明的，此时 $\vec{B} = \mu_0 \vec{H}$，其中 $\vec{B}$ 为磁感应强度，$\vec{H}$ 为磁场强度。选取合适的坐标系 Oxyz，可使得介电张量对角化，即 $\epsilon = \text{diag}\{\epsilon_x, \epsilon_y, \epsilon_z\}$（$\epsilon_x, \epsilon_y, \epsilon_z > 0$)，设晶体中某平面单色电磁波波矢 $\vec{k}$ 与 x 轴和 y 轴的夹角分别为 $\alpha$ 与 $\beta$（$0 \leqslant \alpha, \beta \leqslant 90^\circ \leqslant \alpha + \beta$)

(i) 求 $|\vec{k}|$ 所有可能的值。
$$
\vec{k} = (k \cos \alpha, k \cos \beta, k \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta})^{T}
$$

$$
\nabla \times \vec{E} = - \frac{\partial}{\partial t} \vec{B} \\
\vec{k} \times \vec{E} = \omega \vec{B}
$$

$$
\nabla \times \vec{B} = \mu_{0} \frac{\partial}{\partial t} \vec{D} \\
\vec{k} \times \vec{B} = - \mu_{0} \omega \vec{D}
$$

所以
$$
\vec{k} \times (\vec{k} \times \vec{E}) = - \mu_{0} \omega^{2} \vec{D} \\
(\vec{k} \cdot \vec{E}) \vec{k} - k^{2} \vec{E} = - \mu_{0} \omega^{2} \vec{D} \\
k_{i} E_{i} k_{j} - k^{2} E_{j} = - \mu_{0} \omega^{2} \epsilon_{ij} E_{i}
$$

$$
(k \cos \alpha E_{x} + k \cos \beta E_{y} + k \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} E_{z}) k \cos \alpha - k^{2} E_{x} = - \mu_{0} \omega^{2} \epsilon_{x} E_{x} \\
(k \cos \alpha E_{x} + k \cos \beta E_{y} + k \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} E_{z}) k \cos \beta - k^{2} E_{y} = - \mu_{0} \omega^{2} \epsilon_{y} E_{y} \\
(k \cos \alpha E_{x} + k \cos \beta E_{y} + k \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} E_{z}) k \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} - k^{2} E_{z} = - \mu_{0} \omega^{2} \epsilon_{z} E_{z}
$$

$$
\begin{pmatrix} \mu_{0} \omega^{2} \epsilon_{x} - k^{2} \sin^{2} \alpha & k^{2} \cos \beta \cos \alpha & k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \alpha \\ 
k^{2} \cos \alpha \cos \beta & \mu_{0} \omega^{2} \epsilon_{y} - k^{2} \sin^{2} \beta & k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \beta \\
k^{2} \cos \alpha \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} & k^{2} \cos \beta \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} & \mu_{0} \omega^{2} \epsilon_{z} - k^{2} (\cos^{2} \alpha + \cos^{2} \beta) \end{pmatrix}  \vec{E} = \vec{0}
$$

方程有解要求左边系数矩阵的行列式为 $0$
$$
(\mu_{0} \omega^{2} \epsilon_{x} - k^{2} \sin^{2} \alpha) (\mu_{0} \omega^{2} \epsilon_{y} - k^{2} \sin^{2} \beta) (\mu_{0} \omega^{2} \epsilon_{z} - k^{2} (\cos^{2} \alpha + \cos^{2} \beta)) \\ + k^{2} \cos \beta \cos \alpha  k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \beta k^{2} \cos \alpha \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \\ +
k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \alpha k^{2} \cos \alpha \cos \beta  k^{2} \cos \beta \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \\ -
k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \alpha (\mu_{0} \omega^{2} \epsilon_{y} - k^{2} \sin^{2} \beta) k^{2} \cos \alpha \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \\ -
(\mu_{0} \omega^{2} \epsilon_{x} - k^{2} \sin^{2} \alpha) k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \beta k^{2} \cos \beta \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \\ -
k^{2} \cos \beta \cos \alpha k^{2} \cos \alpha \cos \beta ( \mu_{0} \omega^{2} \epsilon_{z} - k^{2} (\cos^{2} \alpha + \cos^{2} \beta) ) = 0
$$
解得

行列式展开后，通过对称性化简，发现$k^6$项抵消，最终得到一个关于$k^2$的二次方程：

$$
\mu_{0}^{3} \omega^{6} \epsilon_{x} \epsilon_{y} \epsilon_{z} - \mu_{0}^{2} \omega^{4} k^{2} \left[ \epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \right] \\ + \mu_{0} \omega^{2} k^{4} \left[ \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (\sin^{2} \alpha \sin^{2} \beta - \cos^{2} \alpha \cos^{2} \beta) \right] = 0
$$

将方程除以$\mu_{0} \omega^{2}$并设$\lambda = k^{2}$，得到二次方程：

$$
\mu_{0}^{2} \omega^{4} \epsilon_{x} \epsilon_{y} \epsilon_{z} - \mu_{0} \omega^{2} \lambda \left[ \epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \right] \\ + \lambda^{2} \left[ \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (1 - \cos^{2} \alpha - \cos^{2} \beta) \right] = 0
$$

解得$\lambda$即$k^{2}$为：

$$
\lambda = \frac{\mu_{0} \omega^{2} \left[ \epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \pm \sqrt{D} \right]}{2 \left( \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (1 - \cos^{2} \alpha - \cos^{2} \beta) \right)}
$$

其中判别式$\Delta$为：

$$
\Delta = \left( \epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \right)^{2} \\ - 4 \epsilon_{x} \epsilon_{y} \epsilon_{z} \left( \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (1 - \cos^{2} \alpha - \cos^{2} \beta) \right)
$$

最终，$|\vec{k}|$的值为：

$$
|\vec{k}| = \sqrt{
\frac{
\mu_0 \omega^2 \left[
\epsilon_x \epsilon_y (\cos^2 \alpha + \cos^2 \beta) + \epsilon_x \epsilon_z \sin^2 \beta + \epsilon_y \epsilon_z \sin^2 \alpha \pm \sqrt{
\Delta
}
\right]
}{
2 \left( \epsilon_x \cos^2 \alpha + \epsilon_y \cos^2 \beta + \epsilon_z (1 - \cos^2 \alpha - \cos^2 \beta) \right)
}
}
$$


(ii) 若 $|\vec{k}|$ 只有一个可能的取值，求此时的 $\alpha$ 与 $\beta$
$$
\Delta = 0
$$

$$
\left( \epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \right)^{2} \\ = 4 \epsilon_{x} \epsilon_{y} \epsilon_{z} \left( \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (1 - \cos^{2} \alpha - \cos^{2} \beta) \right)
$$

所以
$$
(\epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta))^{2} + (\epsilon_{x} \epsilon_{z} \sin^{2} \beta )^{2} + (\epsilon_{y} \epsilon_{z} \sin^{2} \alpha)^{2} \\ =
2 \epsilon_{x} \epsilon_{y} \epsilon_{z} ( \epsilon_{x} (2 \cos^{2} \alpha - (\cos^{2} \alpha + \cos^{2} \beta) \sin^{2} \beta) +\epsilon_{y} (2 \cos^{2} \beta - (\cos^{2} \alpha \\ + \cos^{2} \beta) \sin^{2} \alpha) +  \epsilon_{z} (2 - 2 \cos^{2} \alpha - 2 \cos^{2} \beta - \sin^{2} \alpha \sin^{2} \beta ))
$$
解得，当
$$
\alpha = \beta = 0, \qquad \epsilon_{x} = \epsilon_{y}
$$

或
$$
\alpha = \frac{\pi}{2}, \beta = 0 , \qquad \epsilon_{y} = \epsilon_{z}
$$
或
$$
\alpha = 0, \beta = \frac{\pi}{2}, \qquad \epsilon_{x} = \epsilon_{z}
$$
时波矢只有一个可能的取值

3.对于单轴晶体，设 $\sqrt{\frac{\epsilon_x}{\epsilon_0}} = \sqrt{\frac{\epsilon_y}{\epsilon_0}} = n_o$，$\sqrt{\frac{\epsilon_z}{\epsilon_0}} = n_e$，求 $|\vec{k}|$，并据此论述它的双折射的性质。

此时
$$
|\vec{k}| = n_{0} \frac{\omega}{c} 
$$
或
$$
|\vec{k}| = \frac{\omega}{c} \sqrt{\frac{n_{o}^{2} n_{e}^{2}}{n_{o}^{2} (\cos^{2} \alpha + \cos^{2} \beta) + n_{e}^{2} (1 - \cos^{2} \alpha - \cos^{2} \beta)}}
$$
即单轴晶体中存在两种传播模式，分别对应 $o$ 光和 $e$ 光