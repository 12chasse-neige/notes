# 费曼物理学（2） 第6次作业

Chasse_neige

### 1 运动电荷的场 (25-5)

直接计算匀速运动电荷产生的电磁场，并将其与静止电荷电磁场洛伦兹变换后的结果做比较。

假设电荷以速度$v$ 朝$x$ 轴正方向运动，假设 $t = 0$ 时电荷正好在原点，计算 $t = 0$ 时刻空间的电场分布

考虑李纳-维谢尔势（用$\vec{r}' = \vec{r} + \vec{v} t$ 表示推迟后的相对位矢）
$$
|\vec{r} + \vec{v} t| = ct
$$

$$
t = \frac{|\vec{r'} - \vec{r}|}{v} = \frac{r'}{c}
$$

$$
r'^{2} + r^{2} - 2 \vec{r'} \cdot \vec{r} = \beta^{2} r'^{2}
$$

$$
\frac{\vec{r'} - \vec{r}}{|\vec{r'} - \vec{r}|} \cdot \vec{r} = \vec{r} \cdot \hat{x}
$$

$$
\vec{r'} \cdot \vec{r} - r^{2} = \beta r' \vec{r} \cdot \hat{x}
$$

$$
r^{2} + (1 - \beta^{2}) r'^{2} - 2 \beta r' \vec{r} \cdot \hat{x} - 2 r^{2} = 0
$$

$$
(1 - \beta^{2}) r'^{2} - 2 \beta (\vec{r} \cdot \hat{x}) r' - r^{2} = 0
$$

$$
r' = \frac{\beta (\vec{r} \cdot \hat{x}) + \sqrt{\beta^{2} (\vec{r} \cdot \hat{x})^{2} + (1 - \beta^{2}) r^{2}}}{1 - \beta^{2}}
$$

$$
r' -  \frac{\vec{v} \cdot \vec{r'}}{c} = ct (1 - \beta^{2}) - \frac{\vec{r} \cdot \vec{v}}{c} = r' (1 - \beta^{2}) - \frac{\vec{r} \cdot \vec{v}}{c} = \sqrt{\beta^{2} (\vec{r} \cdot \hat{x})^{2} + (1 - \beta^{2}) r^{2}}
$$

$$
\phi = \frac{q}{4 \pi \epsilon_{0} (r' - \frac{\vec{v} \cdot \vec{r'}}{c})} \\
\vec{A} = \phi \vec{v} = \frac{q \vec{v}}{4 \pi \epsilon_{0} c^{2} (r' - \frac{\vec{v} \cdot \vec{r'}}{c})}
$$

所以
$$
\vec{E} = - \nabla \phi - \frac{\partial}{\partial t} \vec{A} = - \nabla \frac{q}{4 \pi \epsilon_{0} (r' - \frac{\vec{v} \cdot \vec{r'}}{c})}  - \frac{\partial}{\partial t} \frac{q \vec{v}}{4 \pi \epsilon_{0} c^{2} (r' - \frac{\vec{v} \cdot \vec{r'}}{c})} \\ =
- \frac{q}{4 \pi \epsilon_{0}} \left( - \frac{2 \beta^{2} (\vec{r} \cdot \hat{x}) \hat{x} + 2 (1 - \beta^{2}) \vec{r}}{2\sqrt{\beta^{2} (\vec{r} \cdot \hat{x})^{2} + (1 - \beta^{2}) r^{2}}^{3}} + \frac{2 \beta^{2} (\vec{r} \cdot \hat{x}) \hat{x} + 2 (1 - \beta^{2}) \vec{r}}{2\sqrt{\beta^{2} (\vec{r} \cdot \hat{x})^{2} + (1 - \beta^{2}) r^{2}}^{3}} \cdot \frac{\vec{v}}{c^{2}} \vec{v} \right)  \\ =
\frac{q}{4 \pi \epsilon_{0}}  \frac{(1 - \beta^{2}) \vec{r}}{(\beta^{2} (\vec{r} \cdot \hat{v})^{2} + (1 - \beta^{2}) r^{2})^{\frac{3}{2}}}
$$
对比洛伦兹变换结果

在粒子随动系中
$$
\vec{E'} = \frac{q}{4 \pi \epsilon_{0} r'^{3}} \vec{r'}
$$
换系后
$$
\vec{E} = \frac{q}{4 \pi \epsilon_{0}} (- (\gamma - 1) \frac{\vec{r'} \cdot \hat{v}}{r'^{3}} \hat{v} + \gamma \frac{\vec{r'}}{r'^{3}})
$$
带入 $t = 0$ 时
$$
\vec{r'} = (\gamma - 1) (\vec{r} \cdot \hat{v}) \hat{v} + \vec{r}
$$
所以
$$
\vec{E} = \frac{q}{4 \pi \epsilon_{0}} \frac{- (\gamma - 1) \gamma (\vec{r} \cdot \hat{v}) \hat{v} + \gamma (\gamma - 1) (\vec{r} \cdot \hat{v}) \hat{v} + \gamma \vec{r}}{\left( \frac{\beta^{2} (\vec{r} \cdot \hat{v})^{2} + (1 - \beta^{2}) r^{2}}{1 - \beta^{2}} \right)^{\frac{3}{2}}} \\ =
\frac{q}{4 \pi \epsilon_{0}} \frac{\gamma \vec{r}}{\left( \frac{\beta^{2} (\vec{r} \cdot \hat{v})^{2} + (1 - \beta^{2}) r^{2}}{1 - \beta^{2}} \right)^{\frac{3}{2}}} \\ =
\frac{q}{4 \pi \epsilon_{0}}  \frac{(1 - \beta^{2}) \vec{r}}{(\beta^{2} (\vec{r} \cdot \hat{v})^{2} + (1 - \beta^{2}) r^{2})^{\frac{3}{2}}}
$$
可以看出，两种计算方式的结果是相同的

### 2 麦克斯韦方程组的洛伦兹协变性 (26-3)
请证明麦克斯韦方程组在洛伦兹变换下保持协变，即麦克斯韦方程组形式在洛伦兹变换下保持不变。

麦克斯韦方程组在张量形式下可以表示为：

$$
\begin{aligned}
\partial_\mu F^{\mu\nu} &= \frac{4\pi}{c} j^\nu \\
\partial_\mu {}^\star\!F^{\mu\nu} &= 0
\end{aligned}
$$

电磁场张量 $F^{\mu\nu}$ 定义为：
$$
F^{\mu\nu} = \begin{pmatrix}
0 & -E_x & -E_y & -E_z \\
E_x & 0 & -B_z & B_y \\
E_y & B_z & 0 & -B_x \\
E_z & -B_y & B_x & 0
\end{pmatrix}.
$$

对偶电磁场张量 ${}^\star\!F^{\mu\nu}$ 定义为：
$$
{}^\star\!F^{\mu\nu} = \begin{pmatrix}
0 & B_x & B_y & B_z \\
-B_x & 0 & E_z & -E_y \\
-B_y & -E_z & 0 & E_x \\
-B_z & E_y & -E_x & 0
\end{pmatrix}.
$$

四维流密度 $j^\nu$ 定义为：
$$
j^\nu = \left( c \rho, \vec{J} \right)
$$

洛伦兹变换可以表示为：
$$
x'^\mu = \Lambda^\mu{}_\nu x^\nu
$$

其中 $\Lambda^\mu{}_\nu$ 是洛伦兹变换矩阵，满足：
$$
\Lambda^\mu{}_\alpha \Lambda^\nu{}_\beta \eta_{\mu\nu} = \eta_{\alpha\beta},
$$

其中 $\eta_{\mu\nu} = \text{diag}(-1, 1, 1, 1)$ 

$$
F'^{\mu\nu} = \Lambda^\mu{}_\alpha \Lambda^\nu{}_\beta F^{\alpha\beta},
$$

$$
j'^\nu = \Lambda^\nu{}_\beta j^\beta
$$

$$
\partial'_\mu = \frac{\partial}{\partial x'^\mu} = \frac{\partial x^\alpha}{\partial x'^\mu} \frac{\partial}{\partial x^\alpha} = \Lambda^\alpha{}_\mu \partial_\alpha
$$

$$
F'^{\mu\nu} = \Lambda^\mu{}_\alpha \Lambda^\nu{}_\beta F^{\alpha\beta}
$$

$$
j'^\nu = \Lambda^\nu{}_\beta j^\beta
$$

$$
\partial'_\mu F'^{\mu\nu} = \Lambda^\delta{}_\mu \partial_\delta \left( \Lambda^\mu{}_\alpha \Lambda^\nu{}_\beta F^{\alpha\beta} \right)
$$

$$
\partial'_\mu F'^{\mu\nu} = \delta^\delta{}_\alpha \Lambda^\nu{}_\beta \partial_\delta F^{\alpha\beta} \\ = 
\Lambda^\nu{}_\beta \partial_\alpha F^{\alpha\beta} = \frac{4 \pi}{c} \Lambda^\nu{}_\beta j^{\beta} = \frac{4 \pi}{c} j'^{\nu}
$$

同理，对于对偶电磁场张量：
$$
\partial'_\mu {}^\star\!F'^{\mu\nu} = 0
$$

所以麦克斯韦方程组是洛伦兹协变的。

### 3 对称性与电磁动量 (27-6)

在课堂上，大家表示电磁场能量-动量张量的推导比较繁琐，并且看不出太明显的物理意义。在本题当中，我们尝试从时空平移不变性出发，利用诺特定理推导能量-动量张量的表达式。从而将能量-动量张量与对称性联系起来。

(1). 考虑一个无穷小的变换: $x^\mu \rightarrow x^\mu + \epsilon^\mu(x)$。在此无穷小变换下，电磁势按照如下变换: $A^\mu \rightarrow A^\mu + \epsilon^\nu(x)\partial_\nu A^\mu$。对于一般的理论而言，其作用量只明显包含电磁势 $A^\mu$ 及其导数 $\partial_\nu A^\mu$。请证明在上述变换下，作用量的变化满足:
$$
\delta S = \int d^4x \left( \frac{\partial \mathcal{L}}{\partial A^\mu} \epsilon^\nu(x) \partial_\nu A^\mu + \frac{\partial \mathcal{L}}{\partial (\partial_\sigma A^\mu)} \partial_\sigma [\epsilon^\nu(x) \partial_\nu A^\mu] \right)
$$

证明
$$
A^\mu \rightarrow A^\mu + \epsilon^\nu(x)\partial_\nu A^\mu \\
\partial_{\sigma} A^{\mu} \rightarrow \partial_{\sigma} A^{\mu} + \partial_{\sigma} \epsilon^{\nu} (x) \partial_{\nu} A^{\mu}
$$
所以
$$
\delta S = \frac{\partial S}{\partial A^{\mu}} \epsilon^{\nu} (x) \partial_{\nu} A^{\mu} + \frac{\partial S}{\partial (\partial_{\sigma} A^{\mu})} \partial_{\sigma} \epsilon^{\nu} (x) \partial_{\nu} A^{\mu} \\ =
\int d^4x \left( \frac{\partial \mathcal{L}}{\partial A^\mu} \epsilon^\nu(x) \partial_\nu A^\mu + \frac{\partial \mathcal{L}}{\partial (\partial_\sigma A^\mu)} \partial_\sigma [\epsilon^\nu(x) \partial_\nu A^\mu] \right)
$$
(2). 在上述的基础上，请证明作用量的变化满足:
$$
\delta S = \int d^4x T^{\mu\nu} \partial_\mu \epsilon_\nu(x), \quad T^{\mu\nu} = \frac{\partial \mathcal{L}}{\partial (\partial_\mu A_\sigma)} \partial^\nu A_\sigma - \eta^{\mu\nu} \mathcal{L}
$$

证明
$$
\delta S = \int d^4x \left( \frac{\partial \mathcal{L}}{\partial A^\mu} \epsilon^\nu(x) \partial_\nu A^\mu + \frac{\partial \mathcal{L}}{\partial (\partial_\sigma A^\mu)} \partial_\sigma [\epsilon^\nu(x) \partial_\nu A^\mu] \right) \\ = 
\int d^{4} x \left( \frac{\partial \mathcal{L}}{\partial A^\mu} \epsilon^\nu(x)  +  \frac{\partial \mathcal{L}}{\partial (\partial_\mu A^\sigma)} \partial_\mu [\epsilon^\nu(x) \partial_\nu A^\sigma] \right) \\ =
\int d^{4} x \left( \frac{\partial \mathcal{L}}{\partial A^\mu} \epsilon^\nu(x) + \frac{\partial \mathcal{L}}{\partial (\partial_\mu A^\sigma)} \partial_\mu (\partial_\nu A^\sigma) \epsilon^\nu(x)  +  \frac{\partial \mathcal{L}}{\partial (\partial_\mu A^\sigma)} \partial_\nu A^\sigma \partial_\mu \epsilon^\nu(x) \right) \\ = 
\int d^{4} x \left( \partial_{\nu} \mathcal{L} \epsilon^{\nu} (x) + \frac{\partial \mathcal{L}}{\partial (\partial_\mu A^\sigma)} \partial_\nu A^\sigma \partial_\mu \epsilon^\nu(x) \right) \\ =
\int d^{4} x \left(\frac{\partial \mathcal{L}}{\partial (\partial_\mu A^\sigma)} \partial_\nu A^\sigma \partial_\mu \epsilon^\nu(x) - \mathcal{L} \partial_{\nu} \epsilon^{\nu} (x) \right) \\ =
\int d^{4} x \left(\frac{\partial \mathcal{L}}{\partial (\partial_\mu A_\sigma)} \partial^\nu A_\sigma \partial_\mu \epsilon_\nu(x) - \mathcal{L} \partial_{\mu} \eta^{\mu \nu} \epsilon_{\nu} (x) \right) \\ =
\int d^4x T^{\mu\nu} \partial_\mu \epsilon_\nu(x), \quad T^{\mu\nu} = \frac{\partial \mathcal{L}}{\partial (\partial_\mu A_\sigma)} \partial^\nu A_\sigma - \eta^{\mu\nu} \mathcal{L}
$$
(3). 对于一般的理论而言，如果其满足时空平移不变性，即 $\epsilon^\nu(x) = \epsilon^\nu$ 为一个不依赖于时空坐标的函数时，体系的作用量应该在该时空平移下保持不变: $\delta S = 0$。在分部积分的意义下，这意味着我们有 $\partial_\nu T^{\mu\nu} = 0$。对于电磁理论来说，其作用量可以写为:
$$
S = - \int d^4x \left( \frac{1}{4} F_{\mu\nu} F^{\mu\nu} \right)
$$
请利用第二问的结论证明电磁理论的能量-动量张量满足:
$$
T^{\mu\nu} = - F^{\mu\sigma} \partial_\nu A^\sigma - \eta^{\mu\nu} \mathcal{L}
$$

$$
\mathcal{L} = -\frac{1}{4} (\partial_{\mu} A_{\sigma} - \partial_{\sigma} A_{\mu}) (\partial^{\mu} A^{\sigma} - \partial^{\sigma} A^{\mu}) = - \frac{1}{2} \partial_{\mu} A_{\sigma} \partial^{\mu} A^{\sigma} + \frac{1}{2} \partial_{\mu} A_{\sigma} \partial^{\sigma} A^{\mu}
$$

$$
T^{\mu\nu} = \frac{\partial \mathcal{L}}{\partial (\partial_\mu A_\sigma)} \partial^\nu A_\sigma - \eta^{\mu\nu} \mathcal{L} \\ =
(- \partial^{\mu} A^{\sigma}  + \partial^{\sigma} A^{\mu}) \partial^\nu A_\sigma - \eta^{\mu\nu} \mathcal{L} \\ =
- F^{\mu\sigma} \partial_\nu A^\sigma - \eta^{\mu\nu} \mathcal{L}
$$

(4) 对于一般的电磁理论而言，我们可以采用希尔伯特的定义方式，让其能量-动量张量是对称张量。具体而言，对于电磁理论而言，其能量-动量张量对称化之后可以写为:
$$
T^{\mu\nu} = \eta^{\sigma\lambda} F^{\mu\sigma} F^{\lambda\nu} - \eta^{\mu\nu} \mathcal{L}
$$
请证明能量-动量张量零分量的守恒方程即为电磁场的守恒方程:
$$
\partial_\mu T^{\mu 0} = 0, \quad \Rightarrow \quad \frac{1}{2} \frac{\partial}{\partial t} \left( \vec{E} \cdot \vec{E} + \vec{B} \cdot \vec{B} \right) + \nabla \cdot ( \vec{E} \times \vec{B} ) = 0
$$

证明
$$
\partial_{\mu} T^{\mu 0} = \partial_{\mu} (\eta^{\sigma\lambda} F^{\mu\sigma} F^{\lambda 0} - \eta^{\mu 0} \mathcal{L}) \\ =
\partial_{\mu} ( - (F^{\mu 1} F^{10} + F^{\mu 2} F^{20} + F^{\mu 3} F^{30}) + F^{\mu 0} F^{00}) + \partial_{0} \mathcal{L} \\ = \partial_{0} ( E^{2}) + \partial_{i} (F^{ij} F^{j0}) - \frac{\partial}{\partial t} \mathcal{L}\\ = 
\frac{\partial}{\partial t} E^{2} + \partial_{i} (\epsilon^{ijk} E_{j} B_{k})  - \frac{\partial}{\partial t} ( \frac{1}{2} (E^{2} - B^{2}))\\ = 
\frac{1}{2} \frac{\partial}{\partial t} (\vec{E} \cdot \vec{E} + \vec{B} \cdot \vec{B}) + \nabla \cdot (\vec{E} \times \vec{B}) = 0
$$

### 4 菲涅尔定律及其应用 (33-1)

菲涅尔棱镜是一种将线性偏振光转换为圆偏振光的光学器件。如图所示，光线垂直线入射到棱镜的表面，然后在棱镜内部经历两次全内反射，最后再垂直射出棱镜。光线在棱镜内每次反射都会使平行于入射平面的光波分量与垂直于入射平面的光波分量之间产生 45° 的相位差。因此，经过两次内反射后，原本与入射平面成 45° 线偏振的光波会变成圆偏振光。

<img src="./Feynman Lectures on Physics (2) Homework 6.assets/image-20260128015539066.png" alt="image-20260128015539066" style="zoom:50%;" />

(1). 对于偏振方向平行入射平面的电磁波而言，请计算单次内部反射后，反射波与入射波的相位差。
$$
\delta_{p} = 2 \arctan \frac{n}{\cos \theta_{i}} \sqrt{(n \sin \theta_{i})^{2}  - 1}
$$
(2). 当电磁波的偏振方向垂直于入射平面时，请计算反射波相对于入射波的相位差。
$$
\delta_{s} = 2 \arctan \frac{1}{n \cos \theta_{i}} \sqrt{(n \sin \theta_{i})^{2}  - 1}
$$
(3). 如果菲涅尔棱镜中的两次全内反射的入射角均为 $\theta_i = 53.3^\circ$，请计算菲涅尔棱镜相对于周围环境的折射率。
$$
2 \left( \arctan \frac{n}{\cos \theta_{i}} \sqrt{(n \sin \theta_{i})^{2}  - 1} -  \arctan \frac{1}{n \cos \theta_{i}} \sqrt{(n \sin \theta_{i})^{2}  - 1} \right) = \frac{\pi}{4}
$$
带入数据，解得
$$
n \approx 1.5002
$$
