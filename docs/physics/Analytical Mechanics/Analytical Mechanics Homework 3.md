# 分析力学 第3周作业

Chasse_neige

2.2 利用泛函变分极值方法证明，在给定球面上，两点之间的最短距离是沿着大圆(半径与球体一致的圆)的一段弧线。

利用球坐标证明。不妨取半径为1，第一个点的角度坐标为 $\theta = 0$ ，第二个点的角度坐标为 $(\theta_{0}, \phi_{0})$

假设从点1到点2的路径为
$$
s[\theta (t), \phi (t)], \qquad t \in [0, 1]
$$
最短距离要求
$$
\delta d = \delta \int_{Point1}^{Point2} \sqrt{d^{2} \theta + \sin^{2} \theta d^{2} \phi} = \delta \int_{0}^{1} \sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}} dt = 0
$$
 利用EL方程，容易发现 $\phi$ 是循环坐标，所以
$$
p_{\phi} = \frac{\partial}{\partial \phi'} \sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}} = \frac{\sin^{2} \theta \phi'}{\sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}}} = Const
$$

$$
\frac{d}{dt} \left( \frac{\partial}{\partial \theta'} \sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}} \right) = \frac{\partial}{\partial \theta} \sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}} \\
\frac{d}{dt} \frac{\theta'}{\sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}}} = \frac{\sin \theta \cos \theta \phi'^{2}}{\sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}}}
$$

带入循环坐标，解得
$$
\phi' = 0, \quad \theta' = \theta_{0}
$$
即路径是大圆。

2.4 函数 $y=f(x)$ 连接点 $(0, y_0)$ 和点 $(x_1, y_1)$ 形成一曲线，利用泛函变分极值方法找到使得该曲线绕 $x$ 轴旋转表面面积最小的函数形式。

假设曲线函数为
$$
y = f (x), \quad f(0) = y_{0}, f(x_{1}) = y_{1}
$$
则旋转体面积为
$$
S = \int_{0}^{x_{1}} 2 \pi f \sqrt{1 + f'^{2}} dx
$$
带入EL方程
$$
\frac{d}{dx} \frac{\partial}{\partial f'} f \sqrt{1 + f'^{2}} =  \frac{\partial}{\partial f} f \sqrt{1 + f'^{2}} \\
f f'' = 1 + f'^{2} \\
f = A \cosh(\frac{x - c}{A})
$$
所以解析式为
$$
f(x) = A \cosh(\frac{x - c}{A})
$$
其中
$$
A \cosh(\frac{c}{A}) = y_{0}\\
A \cosh(\frac{x_{1} - c}{A}) = y_{1}
$$
2.8 一软绳的两端分别固定在 $A$, $B$ 两点，在重力作用下绳子自然下垂，绳长 $D > AB$，求绳子的形状。

不妨假设 $A$ 在原点，$B$ 的坐标为 $(x_{0}, y_{0})$，绳长为 $l$，线密度为 $\lambda$
$$
y = f(x), \quad f(0) = 0, f(x_{0}) = y_{0} \\
\int_{0}^{x_{0}} \sqrt{1 + f'^{2}} dx = l
$$
所以在此处的EL方程中需要引入拉格朗日乘子 $c$
$$
L = - \lambda \sqrt{1 + f'^{2}} f + c \sqrt{1 + f'^{2}}
$$
带入EL方程
$$
\frac{d}{dx}  \frac{\partial}{\partial f'} (- \lambda \sqrt{1 + f'^{2}} f + c \sqrt{1 + f'^{2}} ) = \frac{\partial}{\partial f}  - \lambda \sqrt{1 + f'^{2}} f + c \sqrt{1 + f'^{2}} 
$$
由于拉格朗日量中不显含 $x$

所以对应哈密顿量
$$
p \dot{q} - L = f'(- \frac{\lambda f f'}{\sqrt{1 + f'^{2}}} + c \frac{f'}{\sqrt{1 + f'^{2}}}) + \lambda \sqrt{1 + f'^{2}} f - c \sqrt{1 + f'^{2}} = Const \\
\frac{\lambda f - c}{\sqrt{1 + f'^{2}}} = Const = C_{1}
$$


所以
$$
f' = \frac{\sqrt{(\lambda f - c)^{2} - C_{1}^{2}}}{C_{1}}
$$
解得
$$
\lambda f - c = C_{1} \cosh(\frac{\lambda}{C_{1}} x + C_{2})
$$
所以悬链线方程为
$$
f = \frac{C_{1}}{\lambda} (\cosh(\frac{\lambda}{C_{1}}x + C_{2}) + \frac{c}{\lambda})
$$
其中参数满足
$$
\cosh(C_{2}) = - \frac{c}{\lambda} \\
y_{0} = \frac{C_{1}}{\lambda}(\cosh(\frac{\lambda}{C_{1}} x_{0} + C_{2}) + \frac{c}{\lambda}) \\
\int_{0}^{x_{0}} \cosh(\frac{\lambda}{C_{1}} x + C_{2}) dx = l
$$

2.13 假设可以自由地在地球内部穿梭，如图 2.3 所示，则只依靠重力从地面某一处到地面另一处的最快的路径为何？

<img src="./Analytical Mechanics Homework 3.assets/image-20251004151805427.png" alt="image-20251004151805427" style="zoom:50%;" />

此时势函数修改为
$$
V(r) = \frac{GMr^{2}}{2 R^{3}}
$$
由对称性，最快路径显然在两点所处的截面上，所以此处用一个角度 $\theta$ 来标记质点的位置。

假设质点出发时 $\theta = 0$, 到达 $\theta = \theta_{0}$ 处，所经过的路径为 $r(\theta)$

用时可以表示为泛函
$$
\Delta t = \int_{0}^{\theta_{0}} \frac{\sqrt{r'^{2} + r^{2}}}{\sqrt{GM \frac{R^{2} - r^{2}}{R^{3}}}} d \theta
$$

带入EL方程，得到哈密顿量
$$
p \dot{q} - L = - \frac{1}{\sqrt{G M}} \sqrt{\frac{R^{3}}{R^{2} - r^{2}}} \frac{r^{2}}{\sqrt{r^{2} + r'^{2}}} = Const
$$
所以
$$
r'^{2} = \frac{C r^{4} - R^{2} r^{2} + r^{4}}{R^{2} - r^{2}} \\
\sqrt{\frac{R^{2} - r^{2}}{C r^{4} - R^{2} r^{2} + r^{4}}} dr = d\theta
$$
积分得到（作代换 $r = R \cos \phi$）注：积分时的常数和上面的常数可能不代表一个常数，反正都是常数，所以我就随便换了
$$
\theta = \int_{0}^{\arccos \frac{r}{R}} (- \frac{1}{\cos \phi} + \cos \phi) \frac{d \phi}{\sqrt{C \cos^{2} \phi - 1}} \\ 
= \arctan \left( \sqrt{\frac{R^2 - r^2}{C r^2 - R^2}} \right) - \frac{1}{\sqrt{C}} \arctan \left( \sqrt{\frac{C (R^2 - r^2)}{C r^2 - R^2}} \right)
$$
是一条摆线。常数 $C$ 可由端点待定系数给出。

2.15 质量为 $m$ 的粒子的势能，在一半径为 $R$ 的球形区域内为 $\left|U_{0}\right|$，球外为零。该粒子以初速度 $v_{0}$ 射到球面某处。根据哈密顿原理给出粒子的运动轨迹。

最小作用量原理要求粒子运动轨迹作用量变分为0。

显然粒子在球外的拉格朗日量为
$$
L_{out} = \frac{1}{2} m v_{0}^{2}
$$
在球内为
$$
L_{in} = \frac{1}{2} m v^{2} - U_{0}
$$

$$
v = \sqrt{v_{0}^{2} - \frac{2 U_{0}}{m}}
$$

由于这里并非末态等时变分，所以使用莫培督原理更为方便

（加入从作用量的原始定义出发，利用
$$
\delta S = - H \delta t
$$
也可以给出和后文讨论的相同结果，此处不再赘述）此处简约作用量为
$$
S_0 = \int \mathbf{p} \cdot d\mathbf{q} = m \int v \, ds
$$
对于从点 $A$ 到点 $B$ 的路径，经过球面上的点 $P$，有
$$
S_0 = m v_1 \cdot AP + m v_2 \cdot PB
$$
其中 $AP$ 和 $PB$ 是直线距离。变分点 $P$ 的位置，令 $\delta S_0 = 0$，得
$$
m v_1 \, \delta(AP) + m v_2 \, \delta(PB) = 0
$$
$$
- m v_1 \sin \theta_1 \, \delta s + m v_2 \sin \theta_2 \, \delta s = 0
$$
即
$$
\frac{\sin \theta_1}{\sin \theta_2} = \frac{v_2}{v_1} = \frac{ \sqrt{v_{0}^{2} - \frac{2 U_{0}}{m}}}{v_{0}}
$$
从这个“折射定律”可以看出，当
$$
\sin\theta_{1} \frac{v_{0}}{\sqrt{v_{0}^{2} - \frac{2 U_{0}}{m}}} \geq 1
$$
时或者 $v_{0} < \sqrt{\frac{2 U_{0}}{m}}$ 时，粒子在球面表面发生全反射；

在其他情况下，轨迹由三段直线组成，在进出球面处满足上述折射条件，整个路径位于入射方向与球心确定的平面内。

