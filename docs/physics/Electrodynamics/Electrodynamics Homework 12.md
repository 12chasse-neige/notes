# 电动力学 第14周作业

Chasse_neige

### 8. 恒定电流的电场
(a) 书2.7.2.13  

2.7 在一很大的电解槽中充满电导率为 $\sigma_2$ 的液体，使其中流着均匀的电流 $\vec{J}_{f0}$。今在液体中置入一个电导率为 $\sigma_1$ 的小球，求恒定时电流分布和面电荷分布，讨论 $\sigma_1 \gg \sigma_2$ 及 $\sigma_2 \gg \sigma_1$ 两种情况的电流分布的特点。

小球中 $\vec{j}_{in} = \sigma_{1} \vec{E}_{in}$ ，小球外 $\vec{j}_{out} = \sigma_{2} \vec{E}_{out} = \sigma_{2} (\frac{\vec{J}_{f0}}{\sigma_{2}} + \vec{E'})$

由于是稳态，所以内外的总电场对应电势均满足拉普拉斯方程，假设
$$
\vec{E}_{in} = E_{1} \cos \theta \hat{r} -  E_{1} \sin \theta \hat{\theta}
$$

$$
\vec{E}_{out} = E_{2} \cos \theta \hat{r} -  E_{2} \sin \theta \hat{\theta} + \frac{E_{3} R_{0}^{3}}{r^{3}} (2 \cos \theta \hat{r} + \sin \theta \hat{\theta})
$$

边界条件
$$
\hat{n} \cdot \vec{j}_{in} = \hat{n} \cdot \vec{j}_{out} \\
\hat{n} \times \vec{E}_{in} = \hat{n} \times \vec{E}_{out}
$$
又因为在沿着$\vec{J}_{f0}$ 方向趋近于无穷远时场强为$\frac{\vec{J}_{f0}}{\sigma_{2}}$ ，所以 $E_{2} = \frac{J_{f0}}{\sigma_{2}}$
$$
\sigma_{1} E_{1} = \sigma_{2} (\frac{J_{f0}}{\sigma_{2}} + 2 E_{3}) \\
- E_{1} = - \frac{J_{f0}}{\sigma_{2}} + E_{3}
$$
解得
$$
E_{1} = \frac{3 J_{f0}}{\sigma_{1} + 2 \sigma_{2}} \\ 
E_{3} = \frac{J_{f0}}{\sigma_{2}} - \frac{3 J_{f0}}{\sigma_{1} + 2 \sigma_{2}} = \frac{\sigma_{1} - \sigma_{2}}{\sigma_{2}(\sigma_{1} + 2 \sigma_{2})} J_{f0}
$$
所以电流密度为
$$
\vec{j}_{in} = \frac{3 \sigma_{1}}{\sigma_{1} + 2 \sigma_{2}} \vec{J}_{f0} \\
\vec{j}_{out} = \vec{J}_{f0} + \frac{(\sigma_{1} - \sigma_{2}) R_{0}^{3}}{\sigma_{1} + 2 \sigma_{2}} \left(\frac{3 (\vec{J}_{f0} \cdot \vec{r}) \vec{r}}{r^{5}} - \frac{\vec{J}_{f0}}{r^{3}} \right)
$$
面电荷密度
$$
\sigma' = \epsilon_{0} \hat{n} \cdot (\vec{E}_{out} - \vec{E}_{in}) \\ =
\epsilon_{0} (\frac{1}{\sigma_{2}} + \frac{2 (\sigma_{1} - \sigma_{2})}{(\sigma_{1} + 2 \sigma_{2}) \sigma_{2}} - \frac{3}{\sigma_{1} + 2 \sigma_{2}}) J_{f0} \cos \theta \\ = 
\frac{3 \epsilon_{0} (\sigma_{1} - \sigma_{2})}{\sigma_{2} (\sigma_{1} + 2 \sigma_{2})} J_{f0} \cos \theta
$$
当 $\sigma_1 \gg \sigma_2$ 时，电流密度以及面电荷密度的分布趋近于
$$
\vec{j}_{in} = 3 \vec{J}_{f0} \\
\vec{j}_{out} = \vec{J}_{f0} + R_{0}^{3} \left(\frac{3 (\vec{J}_{f0} \cdot \vec{r}) \vec{r}}{r^{5}} - \frac{\vec{J}_{f0}}{r^{3}} \right) \\ 
\sigma' =  \frac{3 \epsilon_{0}}{\sigma_{2}} J_{f0} \cos \theta
$$
当$\sigma_2 \gg \sigma_1$ 时，电流密度以及面电荷密度的分布趋近于
$$
\vec{j}_{in} = \frac{3 \sigma_{1}}{2 \sigma_{2}} \vec{J}_{f0} \\
\vec{j}_{out} = \vec{J}_{f0} - \frac{1}{2} R_{0}^{3} \left(\frac{3 (\vec{J}_{f0} \cdot \vec{r}) \vec{r}}{r^{5}} - \frac{\vec{J}_{f0}}{r^{3}} \right) \\ 
\sigma' = - \frac{3 \epsilon_{0}}{2 \sigma_{2}} J_{f0} \cos \theta
$$
2.13 设有两平面围成的直角形无穷容器，其内充满电导率为 $\sigma$ 的液体。取该两平面为 $xz$ 面和 $yz$ 面，在 $(x_0, y_0, z_0)$ 和 $(x_0, y_0, -z_0)$ 两点分别置正负电极并通以电流 $I$，求导电液体中的电势。

边界条件即在两平面处的电场强度沿切向，所以可以采取类似于电像的方法求解，即在 $(x_{0}, - y_{0}, z_{0}), (- x_{0}, y_{0}, z_{0}), (- x_{0}, - y_{0}, z_{0})$ 处放置正像电极，在 $(x_{0}, - y_{0}, - z_{0}), (- x_{0}, y_{0}, - z_{0}), (- x_{0}, - y_{0}, - z_{0})$ 处放置负电极，此时直角形区域内的电势为
$$
\phi (x, y, z) = \frac{I}{4 \pi \sigma} (\frac{1}{\sqrt{(x - x_{0})^{2} + (y - y_{0})^{2} + (z - z_{0})^{2}}} + \frac{1}{\sqrt{(x + x_{0})^{2} + (y - y_{0})^{2} + (z - z_{0})^{2}}} \\ + 
\frac{1}{\sqrt{(x - x_{0})^{2} + (y + y_{0})^{2} + (z - z_{0})^{2}}} + \frac{1}{\sqrt{(x + x_{0})^{2} + (y + y_{0})^{2} + (z - z_{0})^{2}}} \\ - 
\frac{1}{\sqrt{(x - x_{0})^{2} + (y - y_{0})^{2} + (z + z_{0})^{2}}} - \frac{1}{\sqrt{(x + x_{0})^{2} + (y - y_{0})^{2} + (z + z_{0})^{2}}} \\ -
\frac{1}{\sqrt{(x - x_{0})^{2} + (y + y_{0})^{2} + (z + z_{0})^{2}}} - \frac{1}{\sqrt{(x + x_{0})^{2} + (y + y_{0})^{2} + (z + z_{0})^{2}}})
$$
(b) 两个距离很远半径为 $a$ 的金属半球埋入电导率为 $\gamma$ 的地面,使半球平面部分与地面平齐,在此两半球电极上加电压 $V$, 求地面下极面附近电流分布,并求两半球间的电阻和每个半球的接的电阻。  

同样利用镜像法求解，此时应当把地面下的部分镜像到地面上，以保持地面处场强沿切向的边界条件

由于两个半球之间的距离 $d >> a$ ，所以保留至零阶结果，即假设一个半球上的电荷分布不会对另一半球的电势产生影响。此时电流分布可以表示为（假设坐标系的原点在两半球中心位置，$x$ 轴方向和两球连线方向重合，两球之间距离为 $d$）
$$
\vec{j} (x, y, z) = \gamma a \frac{V}{2} \left( \frac{(x - \frac{d}{2}, y, z)}{((x - \frac{d}{2})^{2} + y^{2} + z^{2})^{\frac{3}{2}}} - \frac{(x + \frac{d}{2}, y, z)}{((x + \frac{d}{2})^{2} + y^{2} + z^{2})^{\frac{3}{2}}} \right)
$$
所以此时两球之间的电流为
$$
I_{12} = \frac{1}{2} \iint_{x=0} \gamma a \frac{V}{2} \frac{d}{((\frac{d}{2})^{2} + y^{2} + z^{2})^{\frac{3}{2}}}  dy dz = \frac{\gamma a V d}{4} \int_{0}^{\infty} \frac{1}{(\frac{d^{2}}{4} + r^{2})^{\frac{3}{2}}} 2 \pi r dr = \pi \gamma a V
$$
所以两球间的电阻为
$$
R_{12} = \frac{1}{\pi \gamma a}
$$
一个半球的接地电阻
$$
I = \frac{\gamma a \frac{V}{2}}{r^{2}} \cdot (2 \pi r^{2}) = \pi \gamma a V
$$
所以接地电阻为
$$
R = \frac{1}{2 \pi \gamma a V}
$$
(c) 两个半径为 $a$ 的金属小球放在电导率为 $\gamma$ 的半无限大导电媒质内作为电极，两小球球心的距离为 $b(b>>a)$， 球心离媒质平面的距离为 $d(d>>a)$，求两电极之间的电阻（要求准到 $\frac{a}{b},\frac{a}{d}$ 的一次项）。  

同样使用镜像法，在关于导电媒质对称位置放置同样电势的小球，求出保留到一阶项的电势，此时
$$
I_{12} = \frac{1}{2} \iint_{x = 0} \frac{\gamma Q}{4 \pi \epsilon_{0}} \left( \frac{b}{(\frac{b^{2}}{4} + y^{2} + (z + d)^{2})^{\frac{3}{2}}} + \frac{b}{(\frac{b^{2}}{4} + y^{2} + (z - d)^{2})^{\frac{3}{2}}} \right) dy dz \\ =
\frac{\gamma Q}{8 \pi \epsilon_{0}} \int_{0}^{\infty}  \frac{2b}{(\frac{b^{2}}{4} + r^{2})^{\frac{3}{2}}} 2 \pi r dr =  \frac{\gamma Q}{\epsilon_{0}}
$$
而电势差为
$$
\Delta V = 2 (\frac{Q}{4 \pi \epsilon_{0} a} - \frac{Q}{4 \pi \epsilon_{0} b} + \frac{Q}{8 \pi \epsilon_{0} d} - \frac{Q}{4 \pi \epsilon_{0} \sqrt{4 d^{2} + b^{2}}})
$$
所以保留至一阶项的电阻为
$$
R_{12} \approx \frac{1}{2 \pi \gamma a} (1 - \frac{a}{b} + \frac{a}{2d} - \frac{a}{\sqrt{4 d^{2} + b^{2}}})
$$
(d) 在一块无限大的导电平板上某点 $p$ 处通入电流并向无穷远流出,在板上任意处开一圆孔,不包含 $p$ 点,试证在此圆孔边缘上任意两点的电势差之值为不开圆孔时该两点的电势差之值的一倍。

证明

注意到在圆柱内离圆心 $\frac{a^{2}}{d}$ 处放置大小为$I$ 的电流源，并且在圆柱中心放置大小为 $-I$ 的电流源时，圆柱表面法向电流密度为
$$
j_{n} = - \frac{I}{2 \pi} \frac{d \cos \theta - a}{a^{2} + d^{2} - 2ad \cos \theta} + \frac{ I}{2 \pi} \frac{a - \frac{a^{2}}{d} \cos \theta}{a^{2} + \frac{a^{4}}{d^{2}} - 2 a \frac{a^{2}}{d} \cos \theta} - \frac{I}{2 \pi r} \\ = 
\frac{I}{2 \pi} \left(\frac{\frac{d^{2}}{a} - 2d \cos \theta + a}{a^{2} + d^{2} - 2ad \cos \theta} - \frac{1}{a} \right) = 0
$$
 满足孔边需要的边界条件。所以在挖去圆孔之后孔外空间电流密度分布可以视作电流源和两个像电流源的叠加。假设在圆周上两个点相对于电流源和圆心的连线夹角为 $\theta_{1}$ 和 $\theta_{2}$，此时在挖孔之前，二点之间的电势差为
$$
V_{12} = \frac{I}{4 \pi \gamma} \ln \frac{d^{2} + a^{2} - 2 ad \cos \theta_{2}}{d^{2} + a^{2} - 2 ad \cos \theta_{1}}
$$
在挖孔之后，电势差还应该加上离圆心 $\frac{a^{2}}{d}$ 处电流源带来的电势差
$$
V'_{12}  = \frac{I}{4 \pi \gamma} \ln \frac{d^{2} + a^{2} - 2 ad \cos \theta_{2}}{d^{2} + a^{2} - 2 ad \cos \theta_{1}} + \frac{I}{4 \pi \gamma} \ln \frac{a^{2} + \frac{a^{4}}{d^{2}} - 2 a \frac{a^{2}}{d} \cos \theta_{2}}{a^{2} + \frac{a^{4}}{d^{2}} - 2 a \frac{a^{2}}{d} \cos \theta_{1}} \\ =
\frac{I}{2 \pi \gamma} \ln \frac{d^{2} + a^{2} - 2 ad \cos \theta_{2}}{d^{2} + a^{2} - 2 ad \cos \theta_{1}} = 2 V_{12}
$$

### 9. 稳恒电流的磁场

书3.2, 3.7

3.2 均匀无穷长直圆柱形螺线管，每单位长度线圈匝数为 $n$，电流为 $I$，试用唯一性定理求管内外磁感应强度 $\vec{B}$。

证明

由于管内外空间均无自由电流，所以可以使用标势求解，考虑到沿角向的旋转对称性以及沿 $z$ 轴的平移对称性，边界条件为
$$
B_{in,z} - B_{out, z} = \mu_{0} n I \\
\left. B_{out} = 0 \right|_{r \to \infty}
$$
所以不妨猜测
$$
\vec{B}_{in} = \mu_{0} n I \hat{z} \\
\vec{B}_{out} = 0
$$
由于此时标势和静电场的情况一样具有唯一性，所以该解是合理的

3.7 半径为 $a$ 的无限长圆柱导体上有恒定电流 $J$ 均匀分布于截面上，试解矢势 $\vec{A}$ 的微分方程，设导体的磁导率为 $\mu_0$，导体外的磁导率为 $\mu$。
$$
\nabla^{2} \vec{A} = - \mu_{0} \vec{J}
$$
所以 $\vec{A}$ 仅仅有平行于 $\vec{J}$ 方向的分量，此处可以当作标量处理，在圆柱外其满足拉普拉斯方程
$$
A = C \ln r +  \sum_{n = 0}^{\infty} (A_{n} r^{n} + \frac{B_{n}}{r^{n}}) \cos (n \theta) + (C_{n} r^{n} + \frac{D_{n}}{r^{n}}) \sin (n \theta) 
$$
由旋转对称性，柱外矢势与角度无关，所以
$$
A_{out} = C \ln r + D
$$
再考虑柱内，考虑到沿角向的旋转对称性以及沿 $z$ 轴的平移对称性，所以 $A = A (r)$
$$
\frac{1}{r} \frac{d}{dr} (r \frac{d}{dr} A) = - \mu_{0} J
$$

$$
r \frac{d}{dr} A = - \frac{1}{2} \mu_{0} J r^{2} + C
$$

$$
\frac{d}{dr} A = - \frac{1}{2} \mu_{0} J r + \frac{C}{r}
$$

为了避免柱中心的发散，取 $C = 0$
$$
A (r) = - \frac{1}{4} \mu_{0} J r^{2} + D
$$
由于矢势本身多一个自由度，不妨令柱面上 $A = 0$

所以
$$
A_{in} (r) = \frac{1}{4} \mu_{0} J (a^{2} - r^{2})
$$
对于柱外空间，由于柱面上矢势大小的连续性
$$
A_{out} (r)  = C \ln \frac{a}{r}
$$
此外由磁场强度的切向连续性，在柱面上
$$
\frac{1}{2} J a = \frac{C}{\mu a} 
$$

$$
C = \frac{\mu a^{2} J}{2}
$$

所以磁矢势解为
$$
A_{in} = \frac{1}{4} \mu_{0} J (a^{2} - r^{2}) \hat{z} \\
A_{out} = \frac{\mu a^{2} J}{2} \ln \frac{a}{r} \hat{z}
$$

### 10. 磁场问题的一般解法

书3.4, 3.9, 3.13

3.4 设 $x<0$ 半空间充满磁导率为 $\mu$ 的均匀介质，$z>0$ 空间为真空，今有线电流 $I$ 沿 $z$ 轴流动，求磁感应强度和磁化电流分布。

由于界面上磁感应强度法向连续，所以在全空间的磁感应强度大小相等
$$
\pi r (\frac{1}{\mu_{0}} + \frac{1}{\mu}) B = I
$$

$$
\vec{B} = \frac{\mu_0 \mu}{\mu + \mu_0} \frac{I}{\pi r} \vec{e}_\phi
$$

磁化电流
$$
\frac{\mu_{0} (I + I_{m})}{2 \pi r} = \frac{\mu_0 \mu}{\mu + \mu_0} \frac{I}{\pi r}
$$

$$
\frac{\mu - \mu_{0}}{\mu + \mu_{0}} I
$$

3.9 将一磁导率为 $\mu$，半径为 $R_0$ 的球体，放入均匀磁场 $\vec{H}_0$ 内，求总磁感应强度 $\vec{B}$ 和诱导磁矩 $\vec{m}$。

由于是稳态，所以内外的总磁场对应标势均满足拉普拉斯方程，假设
$$
\vec{H}_{in} = H_{1} \cos \theta \hat{r} -  H_{1} \sin \theta \hat{\theta}
$$

$$
\vec{H}_{out} = H_{2} \cos \theta \hat{r} -  H_{2} \sin \theta \hat{\theta} + \frac{H_{3} R_{0}^{3}}{r^{3}} (2 \cos \theta \hat{r} + \sin \theta \hat{\theta})
$$

边界条件
$$
\hat{n} \cdot \vec{B}_{in} = \hat{n} \cdot \vec{B}_{out} \\
\hat{n} \times \vec{H}_{in} = \hat{n} \times \vec{H}_{out}
$$
又因为在沿着$\vec{H}_{0}$ 方向趋近于无穷远时场强为$H_{0}$ ，所以 $H_{2} = H_{0}$
$$
\mu H_{1} = \mu_{0} (H_{0} + 2 H_{3}) \\
- H_{1} = - H_{0} + H_{3}
$$
解得
$$
H_{1} = \frac{3 \mu_{0}}{\mu + 2 \mu_{0}} H_{0} \\ 
H_{3} = \frac{\mu - \mu_{0}}{\mu + 2 \mu_{0}} H_{0}
$$
所以磁场强度为
$$
\vec{H}_{in} = \frac{3 \mu_{0}}{\mu + 2 \mu_{0}} \vec{H}_{0}  \\
\vec{H}_{out} = \vec{H}_{0} + \frac{\mu - \mu_{0}}{\mu + 2 \mu_{0}} R_{0}^{3} \left(\frac{3 (\vec{H}_{0} \cdot \vec{r}) \vec{r}}{r^{5}} - \frac{\vec{H}_{0}}{r^{3}} \right)
$$
所以
$$
\vec{B} = 
\begin{cases} 
\frac{3\mu \mu_0}{\mu + 2\mu_0} \vec{H}_0 & (r < R_0) \\ 
\mu_0 \vec{H}_0 + \frac{\mu - \mu_0}{\mu + 2\mu_0} \mu_0 R_0^3 \left( \frac{3(\vec{H}_0 \cdot \vec{r})\vec{r}}{r^5} - \frac{\vec{H}_0}{r^3} \right) & (r > R_0)
\end{cases}
$$
诱导磁矩
$$
\vec{m} = 4 \pi \frac{\mu - \mu_{0}}{\mu + 2 \mu_{0}} R_{0}^{3} \vec{H}_{0}
$$
3.13 有一个均匀带电的薄导体壳，其半径为 $R_0$，总电荷为 $Q$，今使球壳绕自身某一直径以角速度 $\omega$ 转动，求球内外的磁场 $\vec{B}$。

提示：本题通过解 $\vec{A}$ 或 $\varphi_m$ 的方程都可以解决，也可以比较本题与 §5 例3 和例5 的电流分布得到结果。

面电流密度
$$
\vec{i} = \frac{Q \omega }{4 \pi R_{0}} \sin \theta \hat{\phi}
$$
在球内外，磁标势都满足拉普拉斯方程

所以假设
$$
\vec{H}_{in} = H_{1} \cos \theta \hat{r} -  H_{1} \sin \theta \hat{\theta}
$$

$$
\vec{H}_{out} = \frac{H_{3} R_{0}^{3}}{r^{3}} (2 \cos \theta \hat{r} + \sin \theta \hat{\theta})
$$

边界条件
$$
H_{1} = 2 H_{3}
$$

$$
- H_{1} - H_{3} = - \frac{Q \omega }{4 \pi R_{0}}
$$

所以
$$
H_{1} = \frac{Q \omega}{6 \pi R_{0}}
$$

$$
H_{3} = \frac{Q \omega}{12 \pi R_{0}}
$$

所以磁感应强度为
$$
\vec{B}_{in} =  \frac{\mu_{0} Q \omega}{6 \pi R_{0}} \hat{z} \\
\vec{B}_{out} = \frac{\mu_{0} Q \omega R_{0}^{2}}{12 \pi} \left( \frac{3(\hat{z} \cdot \vec{r})\vec{r} - \hat{z} r^2}{r^5}  \right)
$$
