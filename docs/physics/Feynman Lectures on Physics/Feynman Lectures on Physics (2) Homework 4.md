# 费曼物理学（2） 第4次作业
Chasse_neige

#### 1 超导 (16-3)
1. 描述超导电流 $\vec{j_s}$ 时，除了正常的电磁方程，电流还额外满足伦敦方程 $(a > 0)$：
   $$
   \begin{align}
   \nabla \times \vec{j_s} &= -a \vec{B} \\
   \frac{\partial}{\partial t} \vec{j_s} &= a \vec{E} 
   \end{align}
   $$
   试证明电流有限要求超导体的电阻为零，而磁场在超导体内指数衰减。
   
   证明：
   
   假设电阻不为零，即存在 $\sigma$ 使得 $\vec{j} = \sigma \vec{E}$
   $$
   \frac{\partial}{\partial t} \vec{j_s} = a \vec{E} = \frac{\alpha}{\sigma} \vec{j}_{s}
   $$
   所以超导电流会随时间指数增长，最终发散。
   
   磁场：由于超导体内无电场，所以 $\nabla \times \vec{B} = \mu_{0} \vec{j}_{s}$
   $$
   \nabla \times (\nabla \times \vec{B}) = \mu_{0} (\nabla \times \vec{j}_{s}) = - a \mu_{0} \vec{B}
   $$
   
   $$
   \nabla^{2} \vec{B} = a \mu_{0} \vec{B}
   $$
   
   所以磁场在超导体内以 $e^{- \sqrt{a \mu_{0}} r}$ 指数衰减

#### 2 矢势的应用 (蒋济帆)
1. 证明：为使得磁矢势满足 $\nabla \times \vec{A} = \vec{B}$, 可取
   $$
   \vec{A}(\vec{r}) = \frac{\mu_0}{4\pi} \int_{V'} \frac{\vec{j}(\vec{r'})}{|\vec{r} - \vec{r'}|} dV'
   $$
   其中 $\vec{r}$ 为空间中某一点的位矢，$\vec{r'}$ 为空间中场源的位矢，$\vec{j}(\vec{r'})$ 为空间中的电流密度，$V'$ 是整个空间。
   $$
   \nabla \times \vec{A} = \nabla \times \frac{\mu_0}{4\pi} \int_{V'} \frac{\vec{j}(\vec{r'})}{|\vec{r} - \vec{r'}|} dV' = - \frac{\mu_0}{4\pi} \int_{V'} \vec{j}(\vec{r'}) \times \nabla \frac{1}{|\vec{r} - \vec{r'}|} dV' = \frac{\mu_0}{4\pi} \int_{V'} \vec{j}(\vec{r'})  \times \frac{\vec{r} - \vec{r'}}{|\vec{r} - \vec{r'}|^{3}} dV' = \vec{B}
   $$

2. 计算通有方向与大小均相同的电流的两无限长平行直导线周围的磁感线的方程。该种曲线的名称是什么？

   假设两根直导线分别位于$x$ 轴上 $+a$ 和 $- a$ 处

   矢势
   $$
   \vec{A} (\vec{r}) = \frac{\mu_{0} I}{2 \pi} \left(\frac{1}{\sqrt{(x - a)^{2} + y^{2}}} + \frac{1}{\sqrt{(x + a)^{2} + y^{2}}}\right) \hat{z}
   $$
   由于二维时对于仅在$z$ 方向上的矢势，磁场可以表示为
   $$
   \vec{B} = \nabla \times \vec{A} = (\partial_{y} A_{z}, - \partial_{x} A_{z}, 0)
   $$

   $$
   \vec{B} \cdot \nabla A = \partial_{y} A_{z} \partial_{x} A_{z} - \partial_{x} A_{z} \partial_{y} A_{z} = 0
   $$

   所以 $\vec{B}$ 和 $\nabla A$ 垂直，即磁感线为 $A$ 的等值线：
   $$
   \frac{1}{\sqrt{(x - a)^{2} + y^{2}}} + \frac{1}{\sqrt{(x + a)^{2} + y^{2}}} = C
   $$
   其中$C$ 为常数。

3. 考虑一条截面为半径是 $a$ 的圆的闭合导线 (磁导率为 $\mu_0$, $a$ 远小于导线的其他各项几何尺寸), 设电流在导线内部均匀分布, 导线的各个横截面的中心在同一平面内。记该导线的自感为 $L$。
   - (i) 证明：在合理的近似下，有
     $$
     L = \frac{\mu_0}{4\pi} \oint_{l} \oint_{l} \frac{\theta(|\vec{r_1} - \vec{r_2}| - \eta a)}{|\vec{r_1} - \vec{r_2}|} d\vec{r_1} \cdot d\vec{r_2}
     $$
     的形式，其中 $\ell$ 是整条回路，
     $$
     \theta(\xi) = \begin{cases}
     1, & \xi > 0 \\
     0, & \xi < 0
     \end{cases}
     $$
     并求常数 $\eta$

     把导线通以 $\vec{j}$ 的匀强电流密度，则闭合导线内的磁通为（$l$是导线中心线）
     $$
     \Phi = \int_{S} d \vec{S} \cdot \vec{B} = \int_{S} d \vec{S} \cdot (\nabla \times \vec{A}) = \oint_{\partial S} d \vec{l} \cdot \vec{A} = \oint_{\partial S} d \vec{l} \cdot \oint_{\partial S} \frac{\mu_{0}}{4 \pi} \frac{\vec{j} d \tau'}{|\vec{r} - \vec{r'}|}
     $$
     所以自感可以表示为除去导线内部部分的区域的磁通积分
     $$
     L = \frac{\Phi}{\pi a^{2} j} = \oint_{l} \oint_{l}  d \vec{r_{1}} \cdot  \frac{\mu_{0}}{4 \pi} \frac{\theta (|\vec{r_{1}} - \vec{r_{2}}| - a)}{|\vec{r}_{1} - \vec{r}_{2}|} d \vec{r}_{2} = \frac{\mu_0}{4\pi} \oint_{l} \oint_{l} \frac{\theta(|\vec{r_1} - \vec{r_2}| - a)}{|\vec{r_1} - \vec{r_2}|} d\vec{r_1} \cdot d\vec{r_2}
     $$
     
     所以 $\eta = 1$
     
   - (ii) 若导线围成一个半径为 $R$ 的圆，求其自感 (涉及的数保留准确值)。
   
     自感为
     $$
     L = \frac{\mu_{0}R}{2} \int_{2 \arcsin \frac{a}{2 R}}^{2 \pi - 2 \arcsin \frac{a}{2R}} \frac {\cos \theta}{2 R \sin \frac{\theta}{2}} R d \theta = \frac{\mu_{0} R}{2} \left( \ln \frac{1 + \sqrt{1 - \frac{a}{2 R}^{2}}}{1 - \sqrt{1 - \frac{a}{2 R}^{2}}} - 4  \sqrt{1 - \frac{a}{2 R}^{2}} \right)
     $$
     
   
4. 计算两个半径分别为 $R_1$ 和 $R_2$、圆心间距为 $l$ 的同轴导体圆环间的互感。结果利用完全椭圆积分
   $$
   \begin{align}
   K(k^2) &\triangleq \int_{0}^{\frac{\pi}{2}} \frac{d\theta}{\sqrt{1 - k^2 \sin^2 \theta}}, \\
   E(k^2) &\triangleq \int_{0}^{\frac{\pi}{2}} \sqrt{1 - k^2 \sin^2 \theta} \, d\theta
   \end{align}
   $$
   表示，不要出现积分符号。
   $$
   M = \frac{\Phi_{12}}{I} = \frac{\mu_{0}}{4 \pi} \int_{0}^{2 \pi} \int_{0}^{2 \pi} \frac{R_{1} R_{2}  d \theta \cos \phi d \phi}{\sqrt{l^{2} + R_{1}^{2} + R_{2}^{2} - 2 R_{1} R_{2} \cos \phi}} \\ = \frac{\mu_{0} R_{1} R_{2}}{\sqrt{l^{2} + (R_{1} + R_{2})^{2}}} \\ \left( ( - 2 + \frac{l^{2} + (R_{1} + R_{2})^{2}}{R_{1} R_{2}}) K(\frac{4 R_{1} R_{2}}{l^{2} + (R_{1} + R_{2})^{2}}) -  \frac{l^{2} + (R_{1} + R_{2})^{2}}{R_{1} R_{2}} E(\frac{4 R_{1} R_{2}}{l^{2} + (R_{1} + R_{2})^{2}})\right)
   $$
   

   注：可能用到的积分等式：
   $$
   \int_{0}^{2\pi} \ln(a - \cos x) \, dx = 2\pi \ln a + \sqrt{a^2 - 1}, \quad a > 1
   $$

5. 

#### 3 有 $\theta$ 项的麦克斯韦方程组
现在考虑修改麦克斯韦方程组，在其中加入 $\theta$ 项。麦克斯韦方程组被修改为：
$$
\begin{align}
\nabla \cdot \vec{E} &= \frac{\rho}{\epsilon_0} - \frac{\alpha c}{\pi} \nabla \theta \cdot \vec{B}\\
-\frac{1}{c^2} \frac{\partial \vec{E}}{\partial t} + \nabla \times \vec{B} &= \mu_0 \vec{J} + \frac{\alpha}{\pi c} (\dot{\theta} \vec{B} + \nabla \theta \times \vec{E})
\end{align}
$$
其余两个无源方程没有改变。

(a)

在 $\theta$ 存在的情况下，我们可以将 $\theta$ 项放入电位移场 $\vec{D}$ 和磁场强度 $\vec{H}$，使得用 $\vec{D}$ 和 $\vec{H}$ 表达的麦克斯韦方程组不变，请给出 $\vec{D}$ 和 $\vec{H}$ 的定义。
$$
\vec{D} =  \epsilon_{0} \vec{E} + \vec{P} + \frac{\alpha \epsilon_{0}}{\pi} c \theta \vec{B} \\ 
\vec{H} = \frac{\vec{B}}{\mu_{0}} - \vec{M} - \frac{\alpha}{\mu_{0} \pi c} \theta \vec{E}
$$
(b)

我们将满足 $\theta = \pi$ 的介质称为拓扑绝缘体。现在考虑将一种拓扑绝缘体介质充满 $z < 0$ 的半个空间，而 $z > 0$ 的半个空间为真空，即保持 $\theta = 0$。

若空间中存在分隔具有两个不同 $\theta$ 值的介质的界面，则在该界面的两侧，$\vec{B}$ 和 $\vec{E}$ 的值会发生跳变。请根据改变后的麦克斯韦方程组，重写具有两个不同 $\theta$ 值的介质的界面附近的电磁场连续性条件，给出界面两侧的 $\vec{B}$ 和 $\vec{E}$ 所满足的方程。设界面的法向单位矢量为 $\hat{n}$，界面附近没有自由电荷和电流，且两个介质的介电常数和磁导率等于真空的情况。

由于界面附近没有自由电荷和电流，所以界面附近的麦克斯韦方程组为
$$
\nabla \cdot \vec{D} = 0 \\ 
\nabla \times \vec{E} = 0 \\
\nabla \cdot \vec{B} = 0 \\
\nabla \times \vec{H} = 0
$$
所以边界条件为：
$$
\hat{n} \times (\vec{E}_{1} - \vec{E}_{2}) = 0 \\
\hat{n} \cdot ( \epsilon_{0} \vec{E}_{1} + \frac{\epsilon_{0} \alpha}{\pi} c \theta_{1} \vec{B}_{1} -  \epsilon_{0} \vec{E}_{2} - \frac{\epsilon_{0} \alpha}{\pi} c \theta_{2} \vec{B}_{2}) = 0 \\
\hat{n} \cdot (\vec{B}_{1} - \vec{B}_{2}) = 0 \\
\hat{n} \times (\frac{\vec{B}_{1}}{\mu_{0}} - \frac{\alpha}{\mu_{0} \pi c} \theta_{1} \vec{E}_{1} - \frac{\vec{B}_{2}}{\mu_{0}} + \frac{\alpha}{\mu_{0} \pi c} \theta_{2} \vec{E}_{2}) = 0
$$
(c)

若从下半空间加入沿着 $z$ 方向的磁场 $B_z = B$，则在上半空间不仅会有磁场，也会因为介质的存在而产生电场，请求出电场 $\vec{E}$ 的大小与方向。
$$
B_{z} = B'_{z} \\
\frac{\epsilon_{0} \alpha}{\pi} c \theta B_{z} =  \epsilon_{0} E'_{z}
$$
所以
$$
\vec{E'} =  \alpha c \vec{B}
$$
方向沿 $+ z$ 方向。

(d)

若从下半空间加入沿着 $y$ 方向的电场 $E_y = E$，同样地，在上半空间会因为介质的存在而产生磁场，请求出磁场 $\vec{B}$ 的大小与方向。
$$
E'_{y} = E_{y} \\
 - \frac{\alpha}{\mu_{0} \pi c} \theta E_{y} = \frac{B'_{y}}{\mu_{0}}
$$
所以
$$
\vec{B'} = - \frac{\alpha}{c} \vec{E}
$$
方向沿 $- y$ 方向。

(e)

在上半空间放入一个电荷 $q$，位于 $\vec{x} = (0, 0, d)$。分别给出上半空间和下半空间的电场与磁场的分布。提示：利用镜像电荷法，并引入与电荷类似的磁荷。

凑出电磁场分布如下：

对于上半空间而言，电场就是电荷 $q$产生的电场和在下半空间坐标为$\vec{x} = (0, 0, - d)$ 处引入像电荷$- \frac{\alpha^{2}}{4 + \alpha^{2}} q$ 的叠加
$$
\vec{E} = \frac{q}{4 \pi \epsilon_{0}} \frac{(x,y, z-d)}{\sqrt{x^{2} + y^{2} + (z - d)^{2}}^{3}} - \frac{\alpha^{2}}{4 + \alpha^{2}} \frac{q}{4 \pi \epsilon_{0} } \frac{(x,y, z+d)}{\sqrt{x^{2} + y^{2} + (z + d)^{2}}^{3}}
$$


上半空间磁场为
$$
\vec{B} = - \frac{2 \alpha}{4 + \alpha^{2}} \frac{q}{4 \pi \epsilon_{0} c} \frac{(x,y, z+d)}{\sqrt{x^{2} + y^{2} + (z + d)^{2}}^{3}}
$$
对于下半空间，电场为
$$
\vec{E} = \frac{4}{4 + \alpha^{2}} \frac{q}{4 \pi \epsilon_{0}} \frac{(x,y, z-d)}{\sqrt{x^{2} + y^{2} + (z - d)^{2}}^{3}}
$$
磁场为
$$
\vec{B} = \frac{2 \alpha}{4 + \alpha^{2}}\frac{q}{4 \pi \epsilon_{0} c} \frac{(x,y, z-d)}{\sqrt{x^{2} + y^{2} + (z - d)^{2}}^{3}}
$$
