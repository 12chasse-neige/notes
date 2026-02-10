# 电动力学 第10周作业

Chasse_neige

### 4. 电势的多极展开，电多矩，带电体在外场中的能量，受力和力矩，矢量势的多极展开，磁多矩

作业：

(a) 书3.14, 3.15

##### 3.14 电荷体均匀分布的刚性小球

电荷体均匀分布的刚性小球，其总电荷为 $Q$，半径为 $R_0$，它以角速度 $\omega$ 绕自身某一直径转动，求：

1.它的磁矩；
$$
\vec{j} (r, \theta, \phi) = \frac{3 Q}{4 \pi R_{0}^{3}} \omega r \sin \theta \hat{\phi}
$$
所以磁矩为
$$
\vec{m} = \frac{1}{2} \int \vec{r} \times \vec{j} d \tau = \int_{0}^{\pi} \int_{0}^{R_{0}} r \sin \theta \frac{3 Q}{8 \pi R_{0}^{3}} \omega r \sin \theta \, 2 \pi r^{2} \sin \theta \, d \theta \, d r \hat{z} \\ = \frac{Q R_0^2}{5} \omega \hat{z}
$$
2.它的磁矩与自转动量矩之比（设质量 $m_0$ 是均匀分布的）。
$$
\frac{m}{I} = \frac{\frac{Q R_0^2}{5} \omega}{\frac{2}{5} m R_{0}^{2} \omega} = \frac{Q}{2 m}
$$

##### 3.15 小永磁体的受力

有一块磁矩为 $m$ 的小永磁体，位于一块磁导率非常大的实物的平坦界面附近的真空中，求作用在小永磁体上的力 $F$。

由于磁导率非常大，所以在界面处磁感应强度没有切向分量

利用镜像法求解磁矩附近的磁场：（$a$为磁矩离界面的距离， $\alpha$为 $m$ 与界面法线的夹角，假设界面法线为 $\hat{y}$ 方向，磁矩在界面方向上的投影分量为 $\hat{x}$ 方向）
$$
\vec{F} = (\vec{m} \cdot \nabla) \vec{B}  = -  \frac{3 \mu_{0} m^{2}}{64 \pi a^{4}} (1 + \cos^{2} \alpha) \hat{y}
$$
具体计算过程见（d），因为计算过程完全相同，所以此处不再展示。

(b) 半轴为 $a, b$ 和 $c$ 的椭球体内均匀带电，总电量为 $Q$，求它的电偶极矩，电四极矩以及准确到四极矩的在远处的电势。

提示：用广义球坐标 $x = a r \sin\theta \cos\phi, y = b r \sin\theta \sin\phi, z = c r \cos\theta$ 计算积分。

偶极矩	
$$
\vec{p} = \int \vec{r} \rho \, d \tau = 0
$$
四极矩
$$
D_{ij} = \int \rho (3r_{ij} - \delta_{ij} r^{2}) \, d \tau
$$
所以
$$
D_{11} = \int \frac{Q}{\frac{4 \pi}{3} abc} (2 x^{2} - (y^{2} + z^{2})) \, dxdydz \\ =
\int \frac{3Q}{4 \pi abc} (2(a r \sin\theta \cos\phi)^{2} - (b r \sin\theta \sin\phi)^{2} - (c r \cos\theta)^{2}) abc \, r^{2} dr \, \sin \theta d \theta \, d \phi \\ =
\frac{3 Q}{4 \pi}  (2 a^{2} \int_{0}^{1} r^{4} dr \int_{0}^{\pi} \sin^{3} \theta d \theta \int_{0}^{2 \pi} \cos^{2} \phi d \phi) \\ - (b^{2} \int_{0}^{1} r^{4} dr \int_{0}^{\pi} \sin^{3} \theta d \theta \int_{0}^{2 \pi} \sin^{2} \phi d \phi) - (c^{2} \int_{0}^{1} r^{4} dr \int_{0}^{\pi} \cos^{2} \theta \sin \theta d \theta \int_{0}^{2 \pi} d \phi) \\ =
\frac{3Q}{4 \pi} (\frac{8 \pi }{15} a^{2} - \frac{4 \pi}{15} b^{2} - \frac{4 \pi}{15} c^{2}) \\ =
\frac{Q}{5} (2 a^{2} - b^{2} - c^{2})
$$
同理，积分得
$$
D_{22} = \frac{Q}{5} (2 b^{2} - a^{2} - c^{2}) \\
D_{33} = \frac{Q}{5} (2 c^{2} - a^{2} - b^{2})
$$
其余分量
$$
D_{ij} = \int 3 \rho x_{i} x_{j} d \tau 
$$
积分中均正比于坐标的一次分量，由于对称性，此项为 $0$

在远处的电势
$$
\phi = \frac{1}{4 \pi \epsilon_{0}} \left(\frac{Q}{r} + \frac{Q}{10 r^{5}} (a^{2} (3 x^{2} - r^{2}) + b^{2} (3 y^{2} - r^{2}) + c^{2} (3 z^{2} - r^{2}))\right)
$$
(c) 设有两个偶极子，它们的偶极矩大小相等，并都指向 $z$ 方向，其一位于原点，另一位在：

i. $\theta = \frac{\pi}{2}$，距原点为 $R$；

ii. $\theta = 0$，距原点为 $R$。

求两种情况的相互作用能和相互作用力。

相互作用能

i. $\theta = \frac{\pi}{2}$，距原点为 $R$
$$
W = - \vec{p} \cdot \vec{E} = \frac{p^{2}}{4 \pi \epsilon_{0} R^{3}}
$$
 ii. $\theta = 0$，距原点为 $R$
$$
W = - \vec{p} \cdot \vec{E} = - \frac{p^{2}}{2 \pi \epsilon_{0} R^{3}}
$$
相互作用力

i
$$
\vec{F} = - \nabla W = \frac{3 p^{2} \vec{R}}{4 \pi \epsilon_{0} R^{5}}
$$
ii
$$
\vec{F} = - \nabla W = - \frac{3 p^{2} \vec{R}}{2 \pi \epsilon_{0} R^{5}}
$$
(d) 有一电矩为 $\vec{p}$ 的偶极子，位于距无限大导体平面为 $a$ 处，求导体对偶极子的吸引力。

利用镜像法求解偶极子附近的磁场：（$\vec{p'}$ 为像偶极子，$a$为磁矩离界面的距离， $\alpha$为 $m$ 与界面法线的夹角，假设界面法线为 $\hat{y}$ 方向，磁矩在界面方向上的投影分量为 $\hat{x}$ 方向）
$$
\vec{F} = (\vec{p} \cdot \nabla)\vec{E} = \vec{p} \cdot \left( \nabla \frac{1}{4 \pi \epsilon_{0}} \frac{3 (\vec{p'} \cdot \vec{r}) \vec{r} - r^{2} \vec{p'}}{r^{5}} \right) \\ =
\vec{p} \cdot \frac{3}{4 \pi \epsilon_{0}} \left( \frac{\vec{p'} \vec{r}}{r^{5}} - \frac{5 (\vec{p'} \cdot \vec{r}) \vec{r} \vec{r}}{r^{7}} + \frac{(\vec{p'} \cdot \vec{r}) \overset{\leftrightarrow}{I}}{r^{5}} + \frac{\vec{r} \vec{p'}}{r^{5}} \right) \\ = 
\frac{3}{4 \pi \epsilon_{0}} \frac{(\vec{p} \cdot \vec{p'}) r^{2} \vec{r} - 5 (\vec{p'} \cdot \vec{r}) (\vec{p} \cdot \vec{r}) \vec{r} + (\vec{p'} \cdot \vec{r}) r^{2} \vec{p} + (\vec{p} \cdot \vec{r}) r^{2} \vec{p'}}{r^{7}} \\ =
\frac{3}{4 \pi \epsilon_{0}} \frac{p^{2} \cos (2 \alpha) (2a)^{3} - 5 p^{2} \cos^{2} \alpha (2a)^{3} + 2 p^{2} \cos^{2} \alpha (2a)^{3}}{(2a)^{7}} \hat{y} \\ =
- \frac{3 p^{2}}{64 \pi \epsilon_{0} a^{4}} (2 \cos^{2} \alpha + \sin^{2} \alpha) \hat{y} \\ =
- \frac{3 p^{2}}{64 \pi \epsilon_{0} a^{4}} (1 + \cos^{2} \alpha) \hat{y}
$$
(e) 在后面静磁场讨论中将给出一个由电流密度 $\vec{j}$ 描述的稳恒电流体系在外磁场中的能量为：
$$
W = \int d\tau \vec{j} \cdot \vec{A}
$$
其中$\vec{A}$是外磁场的矢势。请利用上面结果证明这个电流体系的多级展开为
$$
W = \sum_{n=0}^{\infty} W_n, \quad W_n = \frac{1}{n!} \sum_{i_1,\cdots,i_n} \vec{J}_{i_1\cdots i_n} \cdot \left[ \frac{\partial^n}{\partial x_{i_1}\cdots \partial x_{i_n}} \vec{A}(\vec{r}) \right]
$$
特别地，
$$
W_0 = 0, \quad W_1 = \vec{m} \cdot \vec{B}
$$

证明：
$$
W = \int d\tau \vec{j} \cdot \vec{A} = \int d \tau \vec{j} \cdot \sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}} \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{A} (\vec{0}) \\ = 
\sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} \vec{J}_{i_{1} i_{2} \cdots i_{n}} \cdot \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{A} (\vec{0}) = \sum_{n} W_{n}
$$
其中
$$
W_n = \frac{1}{n!} \sum_{i_1,\cdots,i_n} \vec{J}_{i_1\cdots i_n} \cdot \left[ \frac{\partial^n}{\partial x_{i_1}\cdots \partial x_{i_n}} \vec{A}(\vec{0}) \right]
$$
$$
\vec{J}_{i_{1} i_{2} \cdots i_{n}} = \int d \tau \vec{j} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}}
$$
特别地，由于该体系是由电流密度 $\vec{j}$ 描述的稳恒电流体系，所以有 $\nabla \cdot \vec{j} = 0$ 

所以
$$
\int \vec{j} d \tau = \int \nabla \cdot (\vec{j} \vec{r}) - (\nabla \cdot \vec{j}) \vec{r} d \tau \\ =
\oint_{S} d \vec{S} \cdot \vec{j} \vec{r} = 0
$$

$$
W_{0} = \int d \tau \vec{j} \cdot \vec{A} (\vec{0}) = 0
$$
$$
W_{1} = \frac{1}{1!} \sum_{i} \vec{J}_{i} \cdot \frac{\partial}{\partial x_{i}} \vec{A} (\vec{0}) = \int j_{k} x_{i} d \tau \frac{\partial}{\partial x_{i}} A_{k} (\vec{0}) \\ =
\frac{1}{2} \int  ((j_{k} x_{i} - j_{i} x_{k}) + (j_{k} x_{i} + j_{i} x_{k})) d \tau  \frac{\partial}{\partial x_{i}} A_{k}  \\ = 
\frac{1}{2} \int (j_{k} x_{i} - j_{i} x_{k})  d \tau (\partial_{i} A_{k} - \partial_{k} A_{i}) + \int  j_{i} x_{k} d \tau \partial_{i} A_{k} \\ =
\frac{1}{2} \int (\vec{r} \times \vec{j}) d \tau \cdot (\nabla \times \vec{A})  + \int \partial_{i} (j_{i} x_{k} A_{k}) - A_{k} \partial_{i} (j_{i} x_{k})  d \tau\\ = 
\vec{m} \cdot \vec{B} - \int A_{k} (x_{k} \partial_{i} j_{i} + j_{i} \delta_{ik}) d \tau \\ =
\vec{m} \cdot \vec{B} - \int \vec{A} \cdot \vec{j} d \tau  = \vec{m} \cdot \vec{B}
$$
(f) 试证电流体系在外磁场中受力的多级展开为
$$
\vec{F} = \sum_{n=0}^{\infty} \vec{F}_n, \quad \vec{F}_n = \frac{1}{n!} \sum_{i_1,\cdots,i_n} \vec{J}_{i_1\cdots i_n} \times \left[ \frac{\partial^n}{\partial x_{i_1}\cdots \partial x_{i_n}} \vec{B}(\vec{r}) \right]
$$
特别地，
$$
\vec{F}_0 = 0, \quad \vec{F}_1 = (\nabla \vec{B}) \cdot \vec{m}
$$

证明：
$$
\vec{F} = \int d \tau \vec{j} \times \vec{B} = \int d \tau \vec{j} \times \sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}} \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{B} (\vec{0}) \\ = 
\sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} \vec{J}_{i_{1} i_{2} \cdots i_{n}} \times \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{B} (\vec{0}) = \sum_{n} \vec{F}_{n}
$$
其中
$$
W_n = \frac{1}{n!} \sum_{i_1,\cdots,i_n} \vec{J}_{i_1\cdots i_n} \times \left[ \frac{\partial^n}{\partial x_{i_1}\cdots \partial x_{i_n}} \vec{B}(\vec{0}) \right]
$$

$$
\vec{J}_{i_{1} i_{2} \cdots i_{n}} = \int d \tau \vec{j} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}}
$$

特别地，
$$
\vec{F}_{0} = \int \vec{j} d \tau \times \vec{B} (\vec{0}) = \vec{0}
$$

$$
\vec{F}_{1} = \frac{1}{1!} \int \vec{j} x_{i} d \tau \times \partial_{i} \vec{B} (\vec{0})  = \int j_{l} x_{i} d \tau \epsilon_{lmn} \partial_{i} B_{m} \vec{e}_{n} \\ =
\epsilon_{ilk} m_{k} \epsilon_{lmn} \partial_{i} B_{m} \vec{e}_{n} \\ = 
(\delta_{in} \delta_{km} - \delta_{im} \delta_{kn}) m_{k} \partial_{i} B_{m} \vec{e}_{n} \\ = 
m_{k} \partial_{i} B_{k} \vec{e}_{k}  = (\nabla \vec{B}) \cdot \vec{m}
$$

 (g) 试证电流体系在外磁场中受力矩的多级展开为
$$
\vec{L} = \sum_{n=0}^{\infty} \vec{L}_n, \quad \text{其中:} \quad \vec{J}_{i_1\cdots i_n} = \sum_{i} \vec{e}_i J^i_{i_1\cdots i_n}
$$
$$
\vec{L}_n = \frac{1}{n!} \sum_{i,i_1,\cdots,i_n} \left\{ \vec{J}_{i i_1\cdots i_n} \left[ \frac{\partial^n}{\partial x_{i_1}\cdots \partial x_{i_n}} B_i(\vec{r}) \right] - J^i_{i i_1\cdots i_n} \left[ \frac{\partial^n}{\partial x_{i_1}\cdots \partial x_{i_n}} \vec{B}(\vec{r}) \right] \right\}
$$
特别地，
$$
\vec{L}_0 = \vec{m} \times \vec{B}
$$

证明：
$$
\vec{L} = \int d \tau \vec{r} \times (\vec{j} \times \vec{B}) = \int d \tau \vec{j} (\vec{r} \cdot \vec{B}) - \vec{B} (\vec{r} \cdot \vec{j}) \\= 
\int \vec{j} \left(\vec{r} \cdot \sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}} \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{B} (\vec{0}) \right) \\ - (\vec{j} \cdot \vec{r})  \sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}} \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{B} (\vec{0}) d \tau \\ = 
\sum_{n} \frac{1}{n!} \sum_{i,i_1,\cdots,i_n} \left\{ \vec{J}_{i i_1\cdots i_n} \left[ \frac{\partial^n}{\partial x_{i_1}\cdots \partial x_{i_n}} B_i(\vec{r}) \right] - J^i_{i i_1\cdots i_n} \left[ \frac{\partial^n}{\partial x_{i_1}\cdots \partial x_{i_n}} \vec{B}(\vec{r}) \right] \right\}= \sum_{n} \vec{L}_{n}
$$
其中
$$
\vec{L}_n = \frac{1}{n!} \sum_{i,i_1,\cdots,i_n} \left\{ \vec{J}_{i i_1\cdots i_n} \left[ \frac{\partial^n}{\partial x_{i_1}\cdots \partial x_{i_n}} B_i(\vec{r}) \right] - J^i_{i i_1\cdots i_n} \left[ \frac{\partial^n}{\partial x_{i_1}\cdots \partial x_{i_n}} \vec{B}(\vec{r}) \right] \right\}
$$

$$
\vec{J}_{ii_{1} i_{2} \cdots i_{n}} = \int d \tau \vec{j} x_{i} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}} \\
$$

特别地
$$
\vec{L}_{0} = \frac{1}{1!} \left(\int d \tau \vec{j} x_{i} B_{i} - \int d \tau j_{i} x_{i} \vec{B} \right) \\ =
\int d \tau j_{j} x_{i} B_{i} - \int d \tau j_{i} x_{i} B_{j} \\ = 
\epsilon_{ijk} m_{k} B_{i} - 0 = \vec{m} \times \vec{B}
$$

### 5. 辐射电磁场 (书第五章第3、4、5节) 一般性质，多极展开，电偶极辐射，电四极辐射，磁偶极辐射  

作业：

(a) 书5.10, 5.11, 5.12, 5.13

##### 5.10 均匀永磁磁体小球的辐射场和能流

半径为 $R_0$ 的均匀永磁磁体小球，磁化强度为 $\vec{M}_0$，球以恒定角速度 $\omega$ 绕通过球心而垂直于 $\vec{M}_0$ 的轴旋转，设 $R_0 \omega \ll c$，求辐射场和能流。

提示：

- $\vec{M}_0$ 以角速度 $\omega$ 转动，可分解为相位差为 $\pi/2$ 的互相垂直的线振动（参阅第四章习题5）。
- 直角坐标基矢与球坐标基矢的变换关系为：
  $$
  \begin{pmatrix}
  e_x \\
  e_y \\
  e_z
  \end{pmatrix}
  =
  \begin{pmatrix}
  \sin\theta \cos\phi & \cos\theta \cos\phi & -\sin\phi \\
  \sin\theta \sin\phi & \cos\theta \sin\phi & \cos\phi \\
  \cos\theta & -\sin\theta & 0
  \end{pmatrix}
  \begin{pmatrix}
  e_r \\
  e_\theta \\
  e_\phi
  \end{pmatrix}
  $$

答案：
$$
\vec{B} = \frac{\mu_0 \omega^2 R_0^3 M_0}{3 c^2 R} (e_\theta \cos\theta + i e_\phi) e^{i(kR - \omega t + \phi)}
$$

$$
\vec{E} = \frac{\mu_0 \omega^2 R_0^3 M_0}{3 c R} (i e_\theta - e_\phi \cos\theta) e^{i(kR - \omega t + \phi)}
$$

$$
\vec{S} = \frac{\mu_0 \omega^4 R_0^6 M_0^2}{18 c^3 R^2} (1 + \cos^2\theta) e_R
$$

##### 5.11 带电粒子的辐射场和能流

带电粒子 $e$ 作半径为 $a$ 的非相对论性圆周运动，回旋频率为 $\omega$。求远处的辐射电磁场和辐射能流。

答案：
$$
\vec{B} = \frac{\mu_0 \omega^2 e a}{4 \pi c R} (e_\theta \cos\theta - i e_\phi) e^{i(kR - \omega t + \phi)}
$$

$$
\vec{E} = \frac{\mu_0 \omega^2 e a}{4 \pi c^2 R} (e_\theta \cos\theta + i e_\phi) e^{i(kR - \omega t + \phi)}
$$

$$
\vec{S} = \frac{\mu_0 \omega^4 e^2 a^2}{32 \pi^2 c R^2} (1 + \cos^2\theta) e_R
$$

##### 5.12 电偶极子的辐射场和能流

设有一电矩振幅为 $p_0$，频率为 $\omega$ 的电偶极子距理想导体平面为 $a/2$ 处，$p_0$ 平行于导体平面。设 $a \ll \lambda$，求在 $R \gg \lambda$ 处的电磁场及辐射能流。

答案：
$$
\vec{E} = \frac{\mu_0 \omega^3 p_0 a}{4 \pi c R} (-\cos^2\theta \cos\phi e_\theta + \cos\theta \sin\phi e_\phi) e^{i(kR - \omega t)}
$$

$$
\vec{B} = \frac{\mu_0 \omega^3 p_0 a}{4 \pi c^2 R} (-\cos\theta \sin\phi e_\theta + \cos^2\theta \cos\phi e_\phi) e^{i(kR - \omega t)}
$$

$$
\vec{S} = \frac{\mu_0 \omega^6 p_0^2 a^2}{32 \pi^2 c^3 R^2} (\cos^4\theta \cos^2\phi + \cos^2\theta \sin^2\phi) e_R
$$

##### 5.13 绝缘介质球的辐射场和能流

设有线偏振平面波 $\vec{E} = E_0 e^{i(kz - \omega t)}$ 照射到一个绝缘介质球上（$E_0$ 在 $z$ 方向），引起介质球极化，极化矢量 $\vec{P}$ 是随时间变化的，因而产生辐射。设平面波的波长 $2\pi/k$ 远大于球半径 $R_0$，求介质球所产生的辐射场和能流。

答案：辐射场就是总电偶极矩为
$$
\vec{p} = \frac{4 \pi \epsilon_0 (\epsilon - \epsilon_0)}{\epsilon + 2 \epsilon_0} R_0^3 E_0 e^{-i\omega t}
$$
的电偶极辐射场。



5.12题提示: 下一章介绍的镜像法给出导体表面的感应电荷可以用导体内对称点偶矩大小相同方向相反的电偶极子代表

5.13题提示: 下一章的讨论给出介质球的极化效应对球外的效应可以用位于球心的电偶极子所产生的电场代表，这个电偶极子的偶极矩为
$$
\vec{p} = 4\pi \frac{\epsilon_0 (\epsilon - \epsilon_0)}{\epsilon + 2\epsilon_0} R^3_0 \vec{E}
$$

(b) 两个相互垂直的电偶极振子，具有相同的振幅 $p_0$ 和相同的角频率 $\omega$，但位相差为 $\Phi$，试求系统的平均辐射角分布。

答案: 设偶极子在原点，分别沿 $x$ 和 $y$ 轴方向，
$$
\frac{dI}{d\Omega} = \frac{\mu_0 p_0^2 \omega^4}{32 \pi^2 c} (1 + \cos^2\theta - \sin^2\theta \sin 2\phi \cos\Phi)
$$

(c) 两个方向相同相距为 $\frac{\lambda}{4}$ 的电偶极子沿 $z$ 轴排列 ($\lambda$ 为电磁辐射波长)，它们位相差为 $\Phi$，具有相同的振幅 $p_0$、频率 $\omega$，试求系统的平均辐射角分布。

直接视为两个偶极子场的叠加

假设偶极子在原点，则它的电磁场为
$$
\vec{B} = \frac{\mu_{0} e^{ikr}}{4 \pi c r}  \ddot{\vec{p}} \times \hat{r}
$$

$$
\vec{E} = \frac{\mu_{0} e^{ikr}}{4 \pi c r} (\ddot{\vec{p}} \times \hat{r}) \times \hat{r}
$$

所以两个偶极子叠加的电磁场为
$$
\vec{B} = - \frac{\mu_{0} \omega^{2}}{4 \pi c r}  ( e^{ikr} \vec{p}_{0} + e^{ik (r + \frac{\lambda}{4} \cos \theta) + \Phi} \vec{p}_{0}) \times \hat{r}
$$

$$
\vec{E} = - \frac{\mu_{0} \omega^{2}}{4 \pi r} (( e^{ikr} \vec{p}_{0} + e^{ik (r + \frac{\lambda}{4} \cos \theta) + \Phi} \vec{p}_{0}) \times \hat{r}) \times \hat{r}
$$

所以
$$
<\vec{S}> = <\vec{E} \times \vec{H}> = \frac{<B^{2}>}{\mu_{0}} = \frac{\mu_{0} \omega^{4}}{16 \pi^{2} c r^{2}} \frac{1}{2} |(e^{ikr} \vec{p}_{0} + e^{ik (r + \frac{\lambda}{4} \cos \theta) + \Phi} \vec{p}_{0})^{2}| \sin^{2} \theta \\ =
\frac{\mu_{0} \omega^{4}}{32 \pi^{2} c r^{2}} p_{0}^{2} |(e^{ikr} + e^{ik (r + \frac{\lambda}{4} \cos \theta) + \Phi}) (e^{- ikr} + e^{- ik (r + \frac{\lambda}{4} \cos \theta) + \Phi})| \sin^{2} \theta \\ = 
\frac{\mu_{0} p_{0}^{2} \omega^{4}}{16 \pi^{2} c r^{2}} (1 + \cos (\frac{\pi}{2} \cos \theta + \Phi)) \sin^{2} \theta
$$
所以
$$
\frac{dI}{d\Omega} = <\vec{S}> r^{2} = \frac{\mu_0 p_0^2 \omega^4}{16 \pi^2 c} \left[ 1 + \cos\left( \frac{\pi}{2} \cos\theta + \Phi \right) \right] \sin^2\theta
$$
(d) 一半波天线长度为 $l = \frac{\lambda}{2}$, 其上电流分布为 $J=J_0\cos\tfrac{2\pi z}{\lambda}\cos\omega t$

条件范围: $-\frac{\lambda}{4} \leq z \leq \frac{\lambda}{4}$

答案:

$$
\frac{d I}{d \Omega} = \frac{c \mu_0 J_0^2}{8 \pi^2} \frac{\cos^2(\frac{\pi}{2} \cos\theta)}{\sin^2\theta}
$$

(e) 求加速度为 $\vec{a}$ 的低速运动带电点粒子的平均辐射角分布和辐射功率.

(f) 对一组运动的点电荷, 请给出用它们的电荷、坐标、速度、加速度表达的电偶极、电四极和磁偶极辐射场的表达式.