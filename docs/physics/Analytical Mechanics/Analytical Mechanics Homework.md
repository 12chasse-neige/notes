# Analytical Mechanics Homework

## 第1次作业

### 1.1 光滑半球形碗中的匀质棒

半径为 $R$ 的光滑半球形碗，固定在水平面上，一质量为 $m$ 的匀质棒斜靠在碗缘，一端在碗内，一端在碗外，在碗内的长度为 $c$ ，如图 1.4 所示。试用虚功原理给出棒的全长。

<img src="./Analytical Mechanics Homework.assets/image-20250916180135440.png" alt="image-20250916180135440">

假设棒子全长为$L$，则质心位置可以表示为
$$
\begin{gathered}
x_{c} = (c - \frac{L}{2}) \cos \theta \\
y_{c} = (c - \frac{L}{2}) \sin \theta
\end{gathered}
$$
其中 $\cos \theta = \frac{c}{2R}$

由虚功原理
$$
\sum_{i} \vec{F}_{i} \cdot \delta \vec{r}_{i} = 0
$$
所以 $\delta y_{c} = 0$

约束可以用广义坐标 $\theta$ 表示为
$$
\begin{gathered}
x_{c} = (2R \cos \theta - \frac{L}{2}) \cos \theta \\
y_{c} = (2R \cos \theta - \frac{L}{2}) \sin \theta
\end{gathered}
$$
虚位移
$$
\begin{gathered}
\delta y_{c} = (2R \cos \theta - \frac{L}{2}) \cos \theta \delta \theta - 2R \sin^{2} \theta \delta \theta = 0 \\
2R \cos (2 \theta) = \frac{L}{2} \cos \theta = \frac{Lc}{4R}
\end{gathered}
$$
所以
$$
\begin{gathered}
Lc = 8R^{2} (2 \frac{c^{2}}{4R^{2}} - 1)\\
L = 4c - \frac{8R^{2}}{c}
\end{gathered}
$$

### 1.3 竖直半圆钢丝上的两球

在一半径为 $R$ 的竖直半圆硬钢丝上 (两端点在水平线上), 穿有质量分别为 $P$ 和 $Q$ 的两个小球, 两球用长为 $2 l$ 的不可伸长的轻绳相连, 如图 1.6 所示。不计摩擦力, 试用虚功原理求两球的平衡位置 (即绳和水平线所成夹角 $\alpha$ )。

<img src="./Analytical Mechanics Homework.assets/image-20250916180159519.png" alt="image-20250916180159519">

假设两个小球的坐标分别为$(r \cos \theta_{1}, r \sin \theta_{1}), (r \cos \theta_{2}, r \sin \theta_{2})$，则约束可以表示为
$$
r \sin \frac{\theta_{1} - \theta_{2}}{2} = l
$$
虚位移满足
$$
\delta \theta_{1} = \delta \theta_{2}
$$
由虚功原理
$$
\sum_{i} \vec{F}_{i} \cdot \delta \vec{r}_{i} = 0
$$
假设绳子张力为$T$，记 $\alpha = \frac{\theta_{1} + \theta_{2}}{2} - \frac{\pi}{2}$

则有
$$
-Pg r \cos \theta_{1} \delta \theta - Qg r \cos \theta_{2} \delta \theta  + T r \cos \frac{\theta_{1} - \theta_{2}}{2} \delta \theta - T r \cos \frac{\theta_{1} - \theta_{2}}{2} \delta \theta = 0
$$
所以
$$
P \cos \theta_{1} + Q \cos \theta_{2} = 0
$$
即
$$
\begin{gathered}
P (\cos \frac{\theta_{1} + \theta_{2}}{2} \cos \frac{\theta_{1} - \theta_{2}}{2} - \sin \frac{\theta_{1} + \theta_{2}}{2} \sin \frac{\theta_{1} - \theta_{2}}{2}) \\ + Q (\cos \frac{\theta_{1} + \theta_{2}}{2} \cos \frac{\theta_{1} - \theta_{2}}{2} + \sin \frac{\theta_{1} + \theta_{2}}{2} \sin \frac{\theta_{1} - \theta_{2}}{2}) = 0
\end{gathered}
$$
带入 $\sin \frac{\theta_{1} - \theta_{2}}{2} = \frac{l}{r}$
$$
\cos \frac{\theta_{1} +\theta_{2}}{2} (P + Q) \frac{\sqrt{r^{2} - l^{2}}}{r} = \sin \frac{\theta_{1} +\theta_{2}}{2} (P - Q) \frac{l}{r}
$$
所以
$$
\alpha = \frac{\theta_{1} + \theta_{2}}{2} - \frac{\pi}{2} = \arctan (\frac{P + Q}{P - Q} \sqrt{(\frac{r}{l})^{2} - 1}) - \frac{\pi}{2}
$$

### 1.5 光滑斜面上的小块

质量为 $M$, 倾角为 $\theta$ 的光滑斜面的底面放在光滑的水平面上, 有一质量为 $m$ 的小块从顶端沿此斜面滑下, 如图 1.8 所示。利用达朗贝尔原理,给出小块相对斜面的加速度。

<img src="./Analytical Mechanics Homework.assets/image-20250916180216974.png" alt="image-20250916180216974">

假设大滑块质心的 $x$ 坐标为 $X_{M}$，小滑块质心相对大滑块质心的坐标为$x_{m}, y_{m}$

约束
$$
y_{m} + \tan \theta x_{m} = C
$$
虚位移满足
$$
\begin{gathered}
\delta Y_{M} = 0 \\
- \tan \theta \delta x_{m} = \delta y_{m}
\end{gathered}
$$
根据达朗贝尔原理
$$
- Mg \delta Y_{M} - mg \delta y_{m} = M \delta X_{M} \ddot{X}_{M} + m ((\delta x_{m} + \delta X_{M}) (\ddot{x}_{m} + \ddot{X}_{M}) + \delta y_{m} \ddot{y}_{m})
$$
即
$$
mg \delta y_{m} + M \delta X_{M} \ddot{X}_{M} + m ((\delta x_{m} + \delta X_{M}) (\ddot{x}_{m} + \ddot{X}_{M}) + \delta y_{m} \ddot{y}_{m}) = 0
$$
所以
$$
- mg \tan \theta \delta x_{m} + M \ddot{X}_{M} \delta X_{M} + m (\ddot{x}_{m} + \ddot{X}_{M}) (\delta x_{m} + \delta X_{M}) + m \tan^{2} \theta \ddot{x}_{m} \delta x_{m} = 0
$$
整理得
$$
\begin{gathered}
m \ddot{x}_{m} (1 + \tan^{2} \theta) + m \ddot{X}_{M} = mg \tan \theta \\
M \ddot{X}_{M} + m (\ddot{x}_{m} + \ddot{X}_{M}) = 0
\end{gathered}
$$
解得
$$
\ddot{x}_{m} = \frac{(m + M) g \tan \theta}{M + (m + M) \tan^{2} \theta}
$$
所以小滑块相对斜面的加速度为
$$
a_{relative} = \frac{\ddot{x}_{m}}{\cos \theta} = \frac{(m + M) g \tan \theta}{M \cos \theta + (m + M) \tan \theta \sin \theta} = \frac{(m + M)g \sin \theta}{M + m \sin^{2} \theta}
$$

### 1.7 质点在圆锥面内的运动

设质量为 $m$ 的质点受重力作用，且被约束在半顶角为 $\alpha$ 的倒立圆锥面内运动，如图 1.10 所示。试以柱坐标中的 $r, \theta$ 为广义坐标，用达朗贝尔原理给出运动微分方程。

<img src="./Analytical Mechanics Homework.assets/image-20250916180233856.png" alt="image-20250916180233856">

采用球坐标，设除了给出的两个坐标外的第三个角度为$\phi$ ，则·约束为
$$
\phi = \alpha
$$
球坐标下的速度表示为
$$
\dot{\vec{r}} = \dot{r} \vec{e}_{r} + r \sin \alpha \dot{\theta} \vec{e}_{\theta}
$$
加速度为
$$
\ddot{\vec{r}} = (\ddot{r} - r \sin^{2} \alpha \dot{\theta}^{2}) \vec{e}_{r} + (2 \dot{r} \sin \alpha \dot{\theta} + r \sin \alpha \ddot{\theta}) \vec{e}_{\theta} - r \sin \alpha \cos \alpha \dot{\theta}^{2} \vec{e}_{\phi}
$$

根据达朗贝尔原理
$$
- mg \delta r \cos \alpha = m (\ddot{r} - r \dot{\theta}^{2} \sin^{2} \alpha) \delta r + m (2 \dot{r} \sin \alpha \dot{\theta} + r \sin \alpha \ddot{\theta}) r \sin \alpha \delta \theta
$$
所以运动微分方程为
$$
\begin{gathered}
g \cos \alpha + \ddot{r} - r \dot{\theta}^{2} \sin^{2} \alpha = 0 \\
2 \dot{r} \dot{\theta} + r \ddot{\theta} = 0
\end{gathered}
$$

## 第2次作业

### 1.9
在无摩擦的桌面上, 一弹簧劲度系数为 $k$，一端固定在墙上, 另一端与一个质量为 $m$ 的物体相连,该物体又通过一连线与另一等质量物体相连,连线通过一设置在桌面缘上的滑轮, 使另一物体在竖直方向一起移动, 如图 1.12 所示。令 $x$ 为弹簧由其松弛状态的伸长量, 试用拉格朗日方程导出运动方程, 并设 $t=0$ 时, $x=0$, $\dot{x}=0$, 解出 $x=x(t)$ 的形式。

<img src="./Analytical Mechanics Homework.assets/image-20250923165854257.png" alt="image-20250923165854257">

$$
L = \frac{1}{2} 2m \dot{x}^{2} - (\frac{1}{2} k x^{2} - mgx) = m \dot{x}^{2}  - \frac{1}{2} k x^{2} + mgx
$$
带入拉格朗日方程
$$
\begin{gathered}
\frac{d}{dt} 2m \dot{x} = -kx + mg \\
2m \ddot{x} = - kx + mg
\end{gathered}
$$

### 1.11

质量为 $M$, 倾角为 $\theta$ 的光滑斜面的底面放在光滑的水平面上, 有一质量为 $m$ 的小块从顶端沿此斜面滑下, 如图 1.8 所示。利用拉格朗日方程,给出小块相对斜面的加速度。

<img src="./Analytical Mechanics Homework.assets/image-20250923165912251.png" alt="image-20250923165912251">

假设大滑块质心的 $x$ 坐标为 $X$，小滑块质心相对大滑块质心在斜面上沿着平行斜面方向移动的广义坐标为$l$

拉格朗日量
$$
L = \frac{1}{2} M \dot{X}^{2} + \frac{1}{2} m ((\dot{X} + \dot{l} \cos \theta)^{2} + \dot{l} \sin \theta^{2} ) - mgl \sin \theta
$$
带入拉格朗日方程
$$
\begin{gathered}
\frac{d}{dt} (M \dot{X} + m \dot{X} + m \dot{l} \cos \theta) = 0 \\
\frac{d}{dt} (m \dot{X} \cos \theta + m \dot{l}) = - mg \sin \theta
\end{gathered}
$$
即
$$
\begin{gathered}
(M + m) \ddot{X} + m \cos \theta \ddot{l} = 0 \\
m \cos \theta \ddot{X} + m \ddot{l} = - mg \sin \theta
\end{gathered}
$$
解得小块相对斜面的加速度为
$$
\ddot{l} = - \frac{(M + m) g  \sin \theta}{M + m \sin^{2} \theta}
$$
以平行斜面向上为正方向

### 1.13

设质量为 $m$ 的质点受重力作用，且被约束在半顶角为 $\alpha$ 的倒立圆锥面内运动, 如图 1.10 所示。试以柱坐标中的 $r$, $\theta$ 为广义坐标, 用拉格朗日方程给出运动微分方程，并给出循环积分。

<img src="./Analytical Mechanics Homework.assets/image-20250923165926721.png" alt="image-20250923165926721">

拉格朗日量
$$
L = \frac{1}{2} m (\dot{r}^{2} + r^{2} \sin^{2} \alpha \dot{\theta}^{2}) - mg r \cos \alpha
$$
带入拉格朗日方程
$$
\begin{gathered}
\frac{d}{dt} (m \dot{r}) = m \sin^{2} \alpha \dot{\theta}^{2} r - mg \cos \alpha \\
\frac{d}{dt} (m r^{2} \sin^{2} \alpha \dot{\theta}) = 0
\end{gathered}
$$
得到
$$
\begin{gathered}
g \cos \alpha + \ddot{r} - r \dot{\theta}^{2} \sin^{2} \alpha = 0 \\
2 \dot{r} \dot{\theta} + r \ddot{\theta} = 0
\end{gathered}
$$
注意到 $\theta$ 是循环坐标 ，所以存在循环积分
$$
\frac{\partial L}{\partial \dot{\theta}} = m r^{2} \sin^{2} \alpha \dot{\theta}
$$

### 1.18

一质量为 $m$ 的质点的拉格朗日量为

$$
L= e^{\frac{\gamma t}{m}(T-V)}
$$

其中 $\gamma$ 是大于零的常量, $T=\frac{1}{2} m\left(\dot{x}^{2}+\dot{y}^{2}+\dot{z}^{2}\right)$, $V=V(x, y, z)$ 给出运动微分方程, 并描述这是什么系统。

带入拉格朗日方程
$$
\begin{gathered}
\frac{d}{dt} (\gamma t \dot{x} e^{\frac{\gamma t}{m}(T-V)})  = - \frac{\gamma t}{m} \frac{\partial V}{\partial x} e^{\frac{\gamma t}{m}(T-V)} \\
\frac{d}{dt} (\gamma t \dot{y} e^{\frac{\gamma t}{m}(T-V)})  = - \frac{\gamma t}{m} \frac{\partial V}{\partial y} e^{\frac{\gamma t}{m}(T-V)} \\
\frac{d}{dt} (\gamma t \dot{z} e^{\frac{\gamma t}{m}(T-V)})  = - \frac{\gamma t}{m} \frac{\partial V}{\partial z} e^{\frac{\gamma t}{m}(T-V)} \\
\end{gathered}
$$
所以运动微分方程为
$$
\gamma \dot{x} + \gamma t \ddot{x} + \gamma t \dot{x} (\frac{\gamma}{m} (T - V) + \gamma t (\dot{x} \ddot{x} + \dot{y} \ddot{y} + \dot{z} \ddot{z})) = - \frac{\gamma t}{m} \frac{\partial V}{\partial x}
$$
化简得
$$
m (\dot{x} + t \ddot{x} + \frac{1}{2} \gamma t \dot{x} (\dot{x}^{2} + \dot{y}^{2} + \dot{z}^{2} -\frac{2V}{m}) + t (\dot{x} \ddot{x} + \dot{y} \ddot{y} + \dot{z} \ddot{z})) = -t \frac{\partial V}{\partial x}
$$
这什么东西。

---

怀疑题目有typo，以下按拉格朗日量为 $L = e^{\frac{\gamma t}{m}} (T - V)$来解答：

对于 $x$ 方向
$$
\frac{\partial L}{\partial \dot{x}} = e^{\frac{\gamma t}{m}} m \dot{x}, \quad \frac{\partial L}{\partial x} = - e^{\frac{\gamma t}{m}} \frac{\partial V}{\partial x}
$$
$$
\frac{d}{dt} \left( \frac{\partial L}{\partial \dot{x}} \right) = m e^{\frac{\gamma t}{m}} \ddot{x} + e^{\frac{\gamma t}{m}} \gamma \dot{x}
$$
代入拉格朗日方程
$$
m e^{\frac{\gamma t}{m}} \ddot{x} + e^{\frac{\gamma t}{m}} \gamma \dot{x} + e^{\frac{\gamma t}{m}} \frac{\partial V}{\partial x} = 0
$$
$$
m \ddot{x} + \gamma \dot{x} + \frac{\partial V}{\partial x} = 0
$$
类似地，对于 $y$ 和 $z$ 方向
$$
m \ddot{y} + \gamma \dot{y} + \frac{\partial V}{\partial y} = 0, \quad m \ddot{z} + \gamma \dot{z} + \frac{\partial V}{\partial z} = 0
$$

运动微分方程
$$
\begin{aligned}
m \ddot{x} + \gamma \dot{x} + \frac{\partial V}{\partial x} &= 0 \\
m \ddot{y} + \gamma \dot{y} + \frac{\partial V}{\partial y} &= 0 \\
m \ddot{z} + \gamma \dot{z} + \frac{\partial V}{\partial z} &= 0
\end{aligned}
$$

系统描述

该系统描述了一个质量为 $m$ 的质点在势场 $V(x, y, z)$ 中运动，但受到与速度成正比的线性阻尼力。因此，这是一个有阻尼的保守系统。

### 1.19
两质点质量分别为 $m_{1}$ 和 $m_{2}$, 坐标为 $r_{1}$ 和 $r_{2}$, 它们之间的相互作用势能为 $V\left(x_{1}-x_{2}, y_{1}-y_{2}, z_{1}-z_{2}\right)$ 。

(1) 以两质点的质心坐标和相对坐标作为广义坐标, 给出拉格朗日量, 并找到循环坐标和循环积分;

以质心坐标 $\vec{R}$ 和相对坐标 $\vec{r}$ 作为广义坐标，其中
$$
\vec{R} = \frac{m_{1} \vec{r}_{1} + m_{2} \vec{r}_{2}}{m_{1} + m_{2}}, \quad \vec{r} = \vec{r}_{1} - \vec{r}_{2}
$$
总质量 $M = m_{1} + m_{2}$，约化质量 $\mu = \frac{m_{1} m_{2}}{M}$。动能 $T$ 和势能 $V$ 表示为
$$
T = \frac{1}{2} M \dot{\vec{R}}^{2} + \frac{1}{2} \mu \dot{\vec{r}}^{2}, \quad V = V(\vec{r})
$$
拉格朗日量 $L$ 为：
$$
L = T - V = \frac{1}{2} M \dot{\vec{R}}^{2} + \frac{1}{2} \mu \dot{\vec{r}}^{2} - V(\vec{r})
$$

 $\vec{R}$ 是循环坐标
$$
\vec{P} = \frac{\partial L}{\partial \dot{\vec{R}}} = M \dot{\vec{R}}
$$
循环积分为广义动量守恒
$$
\vec{P} = Const
$$
(2) 给出罗斯函数, 并导出运动微分方程。
$$
R = - \vec{P} \cdot \dot{\vec{R}} + L
$$
$$
R = - \frac{\vec{P}^{2}}{M} + \left( \frac{1}{2} M \dot{\vec{R}}^{2} + \frac{1}{2} \mu \dot{\vec{r}}^{2} - V(\vec{r}) \right) = - \frac{\vec{P}^{2}}{M} + \frac{1}{2} M \dot{\vec{R}}^{2} + \frac{1}{2} \mu \dot{\vec{r}}^{2} - V(\vec{r})
$$
罗斯函数为
$$
R = - \frac{\vec{P}^{2}}{2M} + \frac{1}{2} \mu \dot{\vec{r}}^{2} + V(\vec{r})
$$

运动方程由罗斯函数导出
$$
\frac{d}{dt} \frac{\partial R}{\partial \dot{\vec{r}}} - \frac{\partial R}{\partial \vec{r}} = 0
$$
即
$$
\mu \ddot{\vec{r}} = -\nabla V
$$
### 1.21

有一质点质量为 $m$，在中心力场 $V(r)$ 中运动，柱坐标为 $(\rho, \varphi, z)$，其拉格朗日量为

$$
L=\frac{1}{2}m(\dot{\rho}^{2}+\rho^{2}\dot{\varphi}^{2}+\dot{z}^{2})-V(\sqrt{\rho^{2}+z^{2}})
$$

另有一个转动坐标系，绕 $z$ 轴以角速度 $\omega$ 转动。若 $t=0$ 时两个坐标系重合，转动坐标系质点坐标为 $(\rho', \varphi', z')$。

(1) 给出转动坐标系坐标表示的拉格朗日量和循环积分；

在旋转系中，坐标与地面系之间的对应关系为
$$
\begin{gathered}
\rho' = \rho \\
z' = z \\
\varphi' = \varphi - \omega t
\end{gathered}
$$
所以旋转系中的拉格朗日量可以写作
$$
L = \frac{1}{2} m ( \dot{\rho'}^{2} + \rho^{2} (\dot{\varphi'} + \omega)^{2} + \dot{z'}^{2} ) - V(\sqrt{\rho'^{2} + z'^{2}})
$$
循环坐标为 $\varphi'$

循环积分为
$$
p_{\varphi'} = m \rho'^{2} (\dot{\varphi'} + \omega)
$$
(2) 给出拉格朗日方程；

$$
\begin{gathered}
\frac{d}{dt} (m \dot{\rho'}) = \frac{p_{\varphi'}^{2}}{m \rho'^{3}} - \frac{\partial V}{\partial \rho'} \\
\frac{d}{dt} (m \dot{z'}) = - \frac{\partial V}{\partial z'}
\end{gathered}
$$
即
$$
\begin{gathered}
m \ddot{\rho'} = \frac{p_{\varphi'}^{2}}{m \rho'^{3}} - \frac{\partial V}{\partial \rho'} \\
m \ddot{z'} = - \frac{\partial V}{\partial z'}
\end{gathered}
$$
也可以写为
$$
\begin{gathered}
\ddot{\rho'} - \rho' \dot{\varphi'}^{2} - 2\omega \rho' \dot{\varphi'} - \omega^{2} \rho' + \frac{1}{m} \frac{\partial V}{\partial \rho'} = 0 \\
\rho' \ddot{\varphi'} + 2 \dot{\rho'} \dot{\varphi'} + 2 \dot{\rho'} \omega = 0 \\
\ddot{z'} + \frac{1}{m} \frac{\partial V}{\partial z'} = 0
\end{gathered}
$$
的形式。

(3) 考查此时的“虚拟力”的形式。

在转动坐标系中，运动方程出现额外项，对应虚拟力。其中

在 $\rho'$ 方程中，项 $-\omega^{2} \rho'$ 对应离心加速度，离心力为 $m \omega^{2} \rho'$，方向径向向外。

在 $\rho'$ 方程中，项 $-2\omega \rho' \dot{\varphi'}$ 对应科里奥利力的径向分量，科里奥利加速度径向分量为 $2\omega \rho' \dot{\varphi'}$。

在 $\varphi'$ 方程中，项 $2 \dot{\rho'} \omega$ 对应科里奥利力的横向分量，科里奥利加速度横向分量为 $-2\omega \dot{\rho'}$。

因此，虚拟力包括惯性离心力和科里奥利力，与经典力学中的形式一致。

## 第3次作业

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
\begin{gathered}
\frac{d}{dt} \left( \frac{\partial}{\partial \theta'} \sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}} \right) = \frac{\partial}{\partial \theta} \sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}} \\
\frac{d}{dt} \frac{\theta'}{\sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}}} = \frac{\sin \theta \cos \theta \phi'^{2}}{\sqrt{\theta'^{2} + \sin^{2} \theta \phi'^{2}}}
\end{gathered}
$$

带入循环坐标，解得
$$
\phi' = 0, \quad \theta' = \theta_{0}
$$
即路径是大圆。

2.4 函数 $y=f(x)$ 连接点 $(0, y_{0})$ 和点 $(x_{1}, y_{1})$ 形成一曲线，利用泛函变分极值方法找到使得该曲线绕 $x$ 轴旋转表面面积最小的函数形式。

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
\begin{gathered}
\frac{d}{dx} \frac{\partial}{\partial f'} f \sqrt{1 + f'^{2}} =  \frac{\partial}{\partial f} f \sqrt{1 + f'^{2}} \\
f f'' = 1 + f'^{2} \\
f = A \cosh(\frac{x - c}{A})
\end{gathered}
$$
所以解析式为
$$
f(x) = A \cosh(\frac{x - c}{A})
$$
其中
$$
\begin{gathered}
A \cosh(\frac{c}{A}) = y_{0}\\
A \cosh(\frac{x_{1} - c}{A}) = y_{1}
\end{gathered}
$$
2.8 一软绳的两端分别固定在 $A$, $B$ 两点，在重力作用下绳子自然下垂，绳长 $D > AB$，求绳子的形状。

不妨假设 $A$ 在原点，$B$ 的坐标为 $(x_{0}, y_{0})$，绳长为 $l$，线密度为 $\lambda$
$$
\begin{gathered}
y = f(x), \quad f(0) = 0, f(x_{0}) = y_{0} \\
\int_{0}^{x_{0}} \sqrt{1 + f'^{2}} dx = l
\end{gathered}
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
\begin{gathered}
p \dot{q} - L = f'(- \frac{\lambda f f'}{\sqrt{1 + f'^{2}}} + c \frac{f'}{\sqrt{1 + f'^{2}}}) + \lambda \sqrt{1 + f'^{2}} f - c \sqrt{1 + f'^{2}} = Const \\
\frac{\lambda f - c}{\sqrt{1 + f'^{2}}} = Const = C_{1}
\end{gathered}
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
\begin{gathered}
\cosh(C_{2}) = - \frac{c}{\lambda} \\
y_{0} = \frac{C_{1}}{\lambda}(\cosh(\frac{\lambda}{C_{1}} x_{0} + C_{2}) + \frac{c}{\lambda}) \\
\int_{0}^{x_{0}} \cosh(\frac{\lambda}{C_{1}} x + C_{2}) dx = l
\end{gathered}
$$

2.13 假设可以自由地在地球内部穿梭，如图 2.3 所示，则只依靠重力从地面某一处到地面另一处的最快的路径为何？

<img src="./Analytical Mechanics Homework.assets/image-20251004151805427.png" alt="image-20251004151805427" style="zoom:50%;" />

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
\begin{gathered}
r'^{2} = \frac{C r^{4} - R^{2} r^{2} + r^{4}}{R^{2} - r^{2}} \\
\sqrt{\frac{R^{2} - r^{2}}{C r^{4} - R^{2} r^{2} + r^{4}}} dr = d\theta
\end{gathered}
$$
积分得到（作代换 $r = R \cos \phi$）注：积分时的常数和上面的常数可能不代表一个常数，反正都是常数，所以我就随便换了
$$
\begin{gathered}
\theta = \int_{0}^{\arccos \frac{r}{R}} (- \frac{1}{\cos \phi} + \cos \phi) \frac{d \phi}{\sqrt{C \cos^{2} \phi - 1}} \\ 
= \arctan \left( \sqrt{\frac{R^{2} - r^{2}}{C r^{2} - R^{2}}} \right) - \frac{1}{\sqrt{C}} \arctan \left( \sqrt{\frac{C (R^{2} - r^{2})}{C r^{2} - R^{2}}} \right)
\end{gathered}
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
S_{0} = \int \mathbf{p} \cdot d\mathbf{q} = m \int v \, ds
$$
对于从点 $A$ 到点 $B$ 的路径，经过球面上的点 $P$，有
$$
S_{0} = m v_{1} \cdot AP + m v_{2} \cdot PB
$$
其中 $AP$ 和 $PB$ 是直线距离。变分点 $P$ 的位置，令 $\delta S_{0} = 0$，得
$$
m v_{1} \, \delta(AP) + m v_{2} \, \delta(PB) = 0
$$
$$
- m v_{1} \sin \theta_{1} \, \delta s + m v_{2} \sin \theta_{2} \, \delta s = 0
$$
即
$$
\frac{\sin \theta_{1}}{\sin \theta_{2}} = \frac{v_{2}}{v_{1}} = \frac{\sqrt{v_{0}^{2} - \frac{2 U_{0}}{m}}}{v_{0}}
$$
从这个“折射定律”可以看出，当
$$
\sin\theta_{1} \frac{v_{0}}{\sqrt{v_{0}^{2} - \frac{2 U_{0}}{m}}} \geq 1
$$
时或者 $v_{0} < \sqrt{\frac{2 U_{0}}{m}}$ 时，粒子在球面表面发生全反射；

在其他情况下，轨迹由三段直线组成，在进出球面处满足上述折射条件，整个路径位于入射方向与球心确定的平面内。

## 第4次作业

2.11 地球表面大气由于重力导致密度不均, 也因此造成光的折射率随高度变化。若气体分子数密度可以用 $n(y)$ 来表示, $y$ 是距地面的垂直高度, 则 $n(y)=n_{0} \mathrm{e}^{-\alpha y}$, $n_{0}$ 是地面上气体分子数密度, 而折射率为 $\sqrt{1+\beta n(y)}$, 为简化问题, 可以假设 $\alpha$ 、 $\beta$ 都是常量。由于大气厚度相比地球半径小很多, 可以忽略地面弧度, 只考虑高度变化。当太阳光线以某个人射角 $\theta$ 进入大气层后, 光线通过大气到达地面的轨迹可以通过光程极小来确定, 也就是使得积分值 $\int_{\infty}^{0} \sqrt{1+\beta n(y)} \mathrm{d} s$ 极小, 这里 $\mathrm{d} s$ 是光线的长度。试利用泛函变分极值方法给出光线轨迹方程。

假设光线轨迹方程为 $x(y)$

代入折射率和高度的依赖关系，得到光程
$$
S = \int_{\infty}^{0} \sqrt{1 + \beta n_{0} e^{- \alpha y}} \sqrt{1 + x'^{2}} \, \dd y
$$
由泛函极值的变分关系得到
$$
\delta S = 0
$$
所以轨迹函数满足EL方程
$$
\dv{}{y} \left(\pdv{\sqrt{1 + \beta n_{0} e^{- \alpha y}} \sqrt{1 + x'^{2}}}{x'} \right) = 0
$$
所以
$$
\sqrt{1 + \beta n_{0} e^{- \alpha y}} \frac{x'}{\sqrt{1 + x'^{2}}} = Const
$$
定义 $x' = \tan \theta(y)$
$$
\sin \theta(y) = \frac{C}{\sqrt{1 + \beta n_{0} e^{- \alpha y}}}
$$
利用“太阳光线以某个人射角 $\theta$ 进入大气层”的条件得到
$$
C = \sin \theta
$$
所以
$$
\begin{gathered}
\frac{x'}{\sqrt{1 + x'^{2}}} = \frac{\sin \theta}{\sqrt{1 + \beta n_{0} e^{- \alpha y}}} \\
x' = \sqrt{\frac{1}{\cot^{2} \theta + \frac{\beta n_{0}}{\sin^{2} \theta} e^{- \alpha y}}}
\end{gathered}
$$
积分得到
$$
\begin{gathered}
x (y) = \int_{\infty}^{y} \sqrt{\frac{1}{\cot^{2} \theta + \frac{\beta n_{0}}{\sin^{2} \theta} e^{- \alpha y}}} \dd y = \sin \theta \int_{\infty}^{y} \sqrt{\frac{1}{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}}} \dd y \\ 
= \sin \theta \int_{\cos^{2} \theta}^{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}} \sqrt{\frac{1}{u}} \dd{\left(- \frac{1}{\alpha} \ln(\frac{u - \cos^{2} \theta}{\beta n_{o}}) \right)} \\
= - \frac{\sin \theta}{\alpha} \int_{\cos^{2} \theta}^{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}} \frac{\dd u}{(u - \cos^{2} \theta) \sqrt{u}} = - \frac{2 \sin \theta}{\alpha} \int_{\cos \theta}^{\sqrt{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}}} \frac{\dd x}{x^{2} - \cos^{2} \theta} \\
= - \frac{\tan \theta}{\alpha} \int_{\cos \theta}^{\sqrt{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}}} \frac{\dd x}{x - \cos \theta} - \frac{\dd x}{x + \cos \theta} \\
= \frac{\tan \theta}{\alpha} \ln(\frac{\sqrt{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}} + \cos \theta}{\sqrt{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}} - \cos \theta}) + C
\end{gathered}
$$
其中常数用来消除原点处 $y$ 坐标的发散

2.16 一带电粒子(质量为 $m$ 、电荷为 $e$ ) 在电磁场中的运动速度为 $\boldsymbol{v}$, 其非相对论的拉格朗日量为 
$$
L=\frac{1}{2} m \boldsymbol{v}^{2}-e \phi+e \mathbf{A} \cdot \boldsymbol{v}
$$
其中 $\phi$ 和 $\mathbf{A}$ 分别是电磁场的标量势和矢量势。试利用哈密顿原理给出粒子的运动微分方程。
$$
\delta S = \delta \int (\frac{1}{2} m \vec{v}^{2}-e \phi+e \vec{A} \cdot \vec{v}) \, \dd t = 0
$$

$$
\delta \int (\frac{1}{2} m \vec{v}^{2}-e \phi+e \vec{A} \cdot \vec{v}) \, \dd t  = \int \dd t \left( m \vec{v} \cdot \delta \vec{v} + e \vec{A} \cdot \delta \vec{v} - e \delta \phi + e \vec{v} \cdot \delta \vec{A} \right)
$$

现在把所有的变分通过分部积分等手段化为对坐标的变分
$$
(m \vec{v} + e \vec{A}) \cdot \delta \vec{v} = - (m \vec{a} + e \pdv{\vec{A}}{t} + e \nabla \vec{A} \cdot \vec{v}) \cdot \delta \vec{r}
$$

$$
e \delta \phi = e \nabla \phi \cdot \delta \vec{r}
$$

$$
e \vec{v} \cdot \delta \vec{A} = e \vec{v} \cdot \nabla \vec{A} \cdot \delta \vec{r}
$$

所以
$$
- (m \vec{a} + e \pdv{\vec{A}}{t} + e \nabla \vec{A} \cdot \vec{v}) - e \nabla \phi + e \vec{v} \cdot \nabla \vec{A} = 0
$$
得到运动方程
$$
m \vec{a} = - e (\nabla \phi + \pdv{\vec{A}}{t}) + e [\vec{v}, \nabla \vec{A}] =  e (\vec{E} + \vec{v} \times \vec{B} )
$$
3.1 一带电粒子 (质量 $m$ 、电荷 $e$ ) 以速度 $\boldsymbol{v}$ 在匀强磁场中运动, 其拉格朗日量为 
$$
L= \frac{m c^{2}}{\sqrt{1-\frac{v^{2}}{c^{2}}}}+e \mathbf{A} \cdot \boldsymbol{v}
$$
其中 $\mathbf{A}$ 是矢势。试证明系统具有空间反射对称性。

证明

不失一般性，考虑对于 $x-y$ 平面的反射变换
$$
R = \begin{pmatrix} 
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1
\end{pmatrix}
$$
变换后的速度以及矢势变为
$$
\vec{v'} = \begin{pmatrix} \dot{x} \\ \dot{y} \\ - \dot{z} \end{pmatrix} \qquad \vec{A'} = \begin{pmatrix} A_{x} \\ A_{y} \\ - A_{z} \end{pmatrix}
$$
反射变换下的拉氏量中

第一项
$$
\frac{m c^{2}}{\sqrt{1-\frac{v'^{2}}{c^{2}}}} =  \frac{m c^{2}}{\sqrt{1-\frac{v^{2}}{c^{2}}}}
$$
第二项
$$
e \vec{A'} \cdot \vec{v'} = e (A_{x} \dot{x} + A_{y}  \dot{y} + A_{z} \dot{z} ) = e \vec{A} \cdot \vec{v}
$$
由于拉氏量在空间反射下保持不变，再看EL方程中
$$
\dv{}{t} \pdv{}{\dot{x}}, \dv{}{t} \pdv{}{\dot{y}}, \pdv{}{x}, \pdv{}{y}
$$
不变
$$
- \dv{}{t} \pdv{}{\dot{z}}, - \pdv{}{z}
$$
中的负号相互抵消，所以运动方程也具有空间反射不变性，即系统是空间反射对称的。

3.2 一带电粒子 (质量 $m$ 、电荷 $e$ ) 在静电场中运动。利用其拉格朗日量的性质证明系统具有时间反演对称性。

证明

带电粒子的拉氏量为
$$
L = \frac{m c^{2}}{\sqrt{1 - \frac{v^{2}}{c^{2}}}} - e \phi
$$
在时间反演变换下
$$
\vec{v'} = - \dv{\vec{r}}{t}   = - \vec{v}
$$
由于是静电场，所以电势分布不会改变

时间变换下的拉氏量中

第一项
$$
\frac{m c^{2}}{\sqrt{1-\frac{v'^{2}}{c^{2}}}} =  \frac{m c^{2}}{\sqrt{1-\frac{v^{2}}{c^{2}}}}
$$
第二项显然不变，所以拉氏量在时间反演下不变

注意EL方程中
$$
\dv{}{t} \pdv{}{\dot{\vec{r}}}
$$
中的两个负号相互抵消，而右侧对坐标的偏导数与时间无关，所以运动方程也不变

故系统具有时间反演对称性

3.3 试证一质点在有心力的作用下, 其运动轨迹一定是在一个平面内。

证明

拉格朗日量可以写为
$$
L = \frac{1}{2} m \dot{\vec{r}}^{2}  + \frac{G M m}{r}
$$
利用无穷小转动变换下的对称性容易得到存在守恒量
$$
\vec{L} = \vec{r} \times \vec{p}
$$
由于
$$
\vec{r} \cdot \vec{L} = \vec{r} \cdot (\vec{r} \times \vec{p}) = 0
$$
所以运动轨迹一定在垂直于 $\vec{L}$ 的平面内

## 第5次作业

3.4 已知一质点运动轨迹可以用平面极坐标表示为阿基米德螺线 $r = r_{0}\theta$，求作用在质点上的有心力。

由于角动量守恒，所以
$$
\dot{\theta} r^{2} = \dot{\theta} \theta^{2} r_{0}^{2} = \frac{L}{m}
$$
即
$$
\begin{gathered}
\theta^{2} \dd \theta = \frac{L}{m r_{0}^{2}} \dd t \\
\theta (t) = \left( \frac{3 L}{mr_{0}^{2}} t \right)^{\frac{1}{3}}
\end{gathered}
$$
可以求出
$$
\dot{\theta} = \frac{L}{m r_{0}^{2} \theta^{2}}
$$

$$
\begin{gathered}
\dot{r} = r_{0} \dot{\theta} = \frac{L}{m r_{0} \theta^{2}} \\
\ddot{r} = - \frac{2 L}{m r_{0} \theta^{3}} \dot{\theta} = - \frac{2 L^{2}}{m^{2} r_{0}^{3} \theta^{5}}
\end{gathered}
$$

直接带入
$$
F = m (\ddot{r} - r \dot{\theta}^{2}) = m (- \frac{2 L^{2} r_{0}^{2}}{m^{2} r^{5}} - r \frac{L^{2}}{m^{2} r^{4}}) = - \frac{L^{2}}{m} \left(\frac{1}{r^{3}} + \frac{2 r_{0}^{2}}{r^{5}} \right)
$$
3.5 已知作用在一质点上的有心力是引力，且与距离的三次方成反比，求质点运动轨迹。

此时势函数可以写成
$$
V(r) = - \frac{a}{r^{2}}
$$
所以径向运动方程可以写成
$$
m (\ddot{r} - r \dot{\theta}^{2})  =  - \frac{2 a}{r^{3}}
$$
带入
$$
\dot{\theta} = \frac{L}{m r^{2}}
$$

$$
\ddot{r} - \frac{L^{2}}{m^{2} r^{3}} = - \frac{2 a}{m r^{3}}
$$

作代换
$$
u = \frac{1}{r}
$$
此时
$$
\begin{gathered}
\dot{r} = - \frac{1}{u^{2}} \dv{u}{\theta} \frac{L}{m} u^{2} = - \frac{L}{m} \dv{u}{\theta} \\
\ddot{r} = - \frac{L^{2}}{m^{2}} \frac{\mathrm{d}^{2} u}{\mathrm{d} \theta^{2}} u^{2}
\end{gathered}
$$
所以
$$
- \frac{L^{2}}{m^{2}} \frac{\mathrm{d}^{2} u}{\mathrm{d} \theta^{2}} u^{2} - \frac{L^{2}}{m^{2}} u^{3} = - \frac{2a}{m} u^{3}
$$
即
$$
\frac{\mathrm{d}^{2} u}{\mathrm{d} \theta^{2}} + (1 - \frac{2ma}{L^{2}}) u = 0
$$
分类讨论

当$\frac{2 m a}{L^{2}} < 1$ 时
$$
u = A \cos(\sqrt{1 - \frac{2 m a}{L^{2}}} \theta + \phi)
$$
所以
$$
r = \frac{1}{A \cos(\sqrt{1 - \frac{2 m a}{L^{2}}} \theta + \phi)}
$$
其中 $A$ 和 $\phi$ 由初始条件决定

当 $\frac{2 m a}{L^{2}} = 1$ 时
$$
u = A \theta + B
$$
所以
$$
r = \frac{1}{A \theta + B}
$$
其中 $A$ 和 $B$ 由初始条件决定

当 $\frac{2 m a}{L^{2}} > 1$ 时
$$
u = A e^{\sqrt{\frac{2 m a}{L^{2}} - 1} \theta} + B e^{- \sqrt{\frac{2 m a}{L^{2}} - 1} \theta}
$$
所以
$$
r = \frac{1}{u = A e^{\sqrt{\frac{2 m a}{L^{2}} - 1} \theta} + B e^{- \sqrt{\frac{2 m a}{L^{2}} - 1} \theta}}
$$
其中 $A$ 和 $B$ 由初始条件决定

3.8 一质点受有心力 $F(r)=- \frac{k m}{r^{4}}$ 作用。若质点在距力心 $2 a$ 处，垂直于极轴以速率 $\sqrt{\frac{k} {12 a^{3}}}$ 抛出, 求质点的轨道。

我们选取质点发射的坐标为 $\theta = 0$

此时比奈方程的形式变为
$$
\frac{\mathrm{d}^{2} u}{\mathrm{d} \theta^{2}} + u = \frac{k m^{2}}{L^{2}} u^{2}
$$

$$
\begin{gathered}
\frac{1}{2} \dv{(\dv{u}{\theta})^{2}}{u} = \frac{k m^{2}}{L^{2}} u^{2} - u \\
\left( \dv{u}{\theta} \right)^{2} = 2 \int_{\frac{1}{2a}}^{u} \left( \frac{k m^{2}}{L^{2}} u^{2} - u \right) \, \dd u = \frac{2 k m^{2}}{3 L^{2}} (u^{3} - \frac{1}{8 a^{3}}) - (u^{2} - \frac{1}{4 a^{2}})
\end{gathered}
$$

带入 $L = m  \sqrt{\frac{k}{3 a}}$, 整理得到
$$
\begin{gathered}
\left( \dv{u}{\theta} \right)^{2} = 2 a u^{3} - u^{2} \\
\dv{u}{\theta} = u \sqrt{2 a u - 1} 
\end{gathered}
$$
积分
$$
\int_{\frac{1}{2a}}^{u} \frac{\dd u}{u \sqrt{2a u - 1}} = \theta
$$

$$
\begin{gathered}
\int_{\frac{1}{2a}}^{u} \frac{\dd u}{u \sqrt{2a u - 1}} = \int_{0}^{\sqrt{2 a u - 1}} \frac{1}{2a} \frac{\dd{(x^{2} + 1)}}{\frac{1}{2a} (x^{2} + 1) x} \\
= 2 \int_{0}^{\sqrt{2a u - 1}} \frac{\dd{x}}{x^{2} + 1} = 2 \int_{0}^{\arctan(\sqrt{2a u - 1})} \dd{\theta} = 2 \arctan(\sqrt{2a u - 1})
\end{gathered}
$$

所以轨道方程为
$$
\begin{gathered}
\sqrt{2a u - 1} = \tan(\frac{\theta}{2}) \\
u (\theta) = \frac{1}{2a} (1 + \tan^{2}(\frac{\theta}{2}))
\end{gathered}
$$
即
$$
r (\theta) = 2a \cos^{2} (\frac{\theta}{2}) = a (1 + \cos \theta)
$$
3.12 一轻绳的一端系着质量为 $m$ 的质点，绳的另一端绕在一半径为 $a$ 的棒上，不考虑重力。开始拉紧的绳长 $s_{0}$, 在垂直于棒长的平面以初速 $v_{0}$ 绕棒转动, 并缠绕到棒上, 最终质点碰到棒上, 如图 3.8 所示。求花费的时间。

<img src="./Analytical Mechanics Homework.assets/image-20251022192259511.png" alt="image-20251022192259511" style="zoom:50%;" />

绳子张力不做功，所以质点速度始终为 $v_{0}$

所以
$$
\dv{r}{t} = - \frac{a}{r} v_{0}
$$

$$
\begin{gathered}
r \, \dd r = - a v_{0} \, \dd t \\
\int_{\sqrt{s_{0}^{2} + a^{2}}}^{a} r \, \dd r = - \int_{0}^{t} a v_{0} \, \dd t \\
\frac{s_{0}^{2}}{2} = a v_{0} t
\end{gathered}
$$

所以花费的时间为
$$
\Delta t = \frac{s_{0}^{2}}{2a v_{0}}
$$
3.14 讨论一粒子在屏蔽势场 $V(r)=-\frac{k}{r}\mathrm{e}^{-r/a}$ 中沿圆轨道运动的稳定性条件,其中 $k>0,a>0$ 。

圆周运动的动力学方程满足
$$
\begin{gathered}
m (\ddot{r} - r \frac{L^{2}}{m^{2} r^{4}}) = F(r) \\
m \ddot{r} = F(r) + \frac{L^{2}}{m r^{3}}
\end{gathered}
$$
所以有效势能可以表示为
$$
V_{eff} (r) = V(r) + \frac{L^{2}}{2 m r^{2}} = - \frac{k}{r} e^{- \frac{r}{a}} + \frac{L^{2}}{2 m r^{2}}
$$
平衡位置
$$
\pdv{V}{r} = 0
$$

$$
\begin{gathered}
\frac{k}{r^{2}} e^{- \frac{r}{a}} + \frac{k}{ar} e^{- \frac{r}{a}} - \frac{L^{2}}{m r^{3}} = 0 \\
(r + \frac{r^{2}}{a}) e^{- \frac{r}{a}} = \frac{L^{2}}{m k}
\end{gathered}
$$

判断稳定性
$$
\pdv{V}{r^{2}}{} = e^{- \frac{r}{a}} (- \frac{2k}{r^{3}} - \frac{2k}{a r^{2}} - \frac{k}{a^{2} r}) + \frac{3 L^{2}}{m r^{4}} = \frac{k}{r^{4}} \left( -(2r + \frac{2 r^{2}}{a} + \frac{r^{3}}{a^{2}}) e^{- \frac{r}{a}}  + \frac{3 L^{2}}{mk} \right)
$$
带入 $(r + \frac{r^{2}}{a}) e^{- \frac{r}{a}} = \frac{L^{2}}{m k}$ 
$$
\begin{gathered}
\pdv{V}{r^{2}}{} = \frac{k}{r^{4}} \left(\frac{L^{2}}{mk}- \frac{r^{3}}{a^{2}} e^{- \frac{r}{a}}\right) = \frac{k}{r^{4}} \left((r + \frac{r^{2}}{a} - \frac{r^{3}}{a^{2}}) e^{- \frac{r}{a}}\right) \\
= \frac{k}{r^{3}} e^{- \frac{r}{a}} (1 + \frac{r}{a} - \frac{r^{2}}{a^{2}})
\end{gathered}
$$
另 $x = \frac{r}{a}$ ，则稳定性条件可以写为
$$
1 + x - x^{2} > 0
$$
即
$$
0 < x < \frac{1 + \sqrt{5}}{2}
$$
所以当 $0 < r < \frac{1 + \sqrt{5}}{2} a$ 时粒子是稳定的

## 第6次作业

3.18 一质量为 $m$ 的质点的势能，在一半径为 $R$ 的球形区域内为 $\left|U_{0}\right|$，球外为零。该粒子以初速度 $v_{\infty}$ 入射，类似于 3.9 图所示。求散射截面。

<img src="./Analytical Mechanics Homework.assets/image-20251028165811846.png" alt="image-20251028165811846" style="zoom:50%;" />

球内的粒子速度为
$$
v_{in} = \sqrt{v_{\infty}^{2} - \frac{2 \abs{U_{0}}}{m}}
$$
利用前几次作业中得到的在势阱表面的折射定律，得到粒子的折射角
$$
\sin \alpha = \sin \theta \sqrt{1 - \frac{2 \abs{U_{0}}}{m v_{\infty}^{2}}}
$$
所以以瞄准距离 $\rho$ 入射的粒子将会运动到方位角为
$$
\begin{gathered}
\phi = 2 (\pi - \theta - \alpha) = 2 \pi - 2 \theta - 2 \arcsin(\sin \theta \sqrt{1 - \frac{2 \abs{U_{0}}}{m v_{\infty}^{2}}}) \\ = 
2 \arcsin(\frac{\rho}{R}) - 2 \arcsin(\frac{\rho}{R} \sqrt{1 - \frac{2 \abs{U_{0}}}{m v_{\infty}^{2}}})
\end{gathered}
$$
处，所有进入势阱的粒子均会与其相互作用。所以散射截面为
$$
\sigma_{tot} = \pi R^{2}
$$
3.20 求两电子之间的卢瑟福散射截面。

两个电子的电荷均为 $-e$，因此库仑势能为 $U(r) = \frac{1}{4\pi\epsilon_{0}} \frac{e^{2}}{r}$，其中 $r$ 是两电子之间的距离。在质心系中，两体问题可简化为一个质量为约化质量 $\mu = \frac{m}{2}$ 的粒子在中心势 $U(r)$ 中的运动，其中 $m$ 是电子质量。质心系中的动能记为 $E$。
对于中心势 $U(r) = \frac{k}{r}$，散射角 $\theta$ 与瞄准半径$b$ 的关系为
$$
b = \frac{k}{2E} \cot \frac{\theta}{2}
$$
所以
$$
\left| \frac{db}{d\theta} \right| = \frac{k}{4E} \csc^{2} \frac{\theta}{2}
$$
利用 $\sin\theta = 2 \sin \frac{\theta}{2} \cos \frac{\theta}{2}$ 和 $\cot \frac{\theta}{2} = \frac{\cos \frac{\theta}{2}}{\sin \frac{\theta}{2}}$，有：
$$
\frac{b}{\sin\theta} = \frac{\frac{k}{2E} \cot \frac{\theta}{2}}{2 \sin \frac{\theta}{2} \cos \frac{\theta}{2}} = \frac{k}{2E} \cdot \frac{\cos \frac{\theta}{2}}{\sin \frac{\theta}{2}} \cdot \frac{1}{2 \sin \frac{\theta}{2} \cos \frac{\theta}{2}} = \frac{k}{4E} \csc^{2} \frac{\theta}{2}
$$

$$
\frac{d\sigma}{d\Omega} = \frac{b}{\sin\theta} \left| \frac{db}{d\theta} \right| = \left( \frac{k}{4E} \csc^{2} \frac{\theta}{2} \right) \left( \frac{k}{4E} \csc^{2} \frac{\theta}{2} \right) = \left( \frac{k}{4E} \right)^{2} \csc^{4} \frac{\theta}{2}
$$
因此，两电子之间卢瑟福散射的微分散射截面为：

$$
\dfrac{d\sigma}{d\Omega} = \dfrac{1}{4} \left( \dfrac{e^{2}}{4\pi\epsilon_{0} E} \right)^{2} \dfrac{1}{\sin^{4}(\frac{\theta}{2})}
$$

转换到实验室系中：在实验室系中，初始时刻入射电子运动而靶粒子静止，所以实验室系以及质心系之间的速度变换公式可以表示为
$$
\vec{v}_{Lab} = \vec{v}_{COM} + \frac{\vec{v}_{\infty}}{2}
$$
所以在实验室系中的散射角 $\phi$ 是质心系中散射角 $\theta$ 的一半，得到微分散射截面之间的关系（考虑到电子是全同粒子，此处应该加上不可分辨的 $\pi - \theta$ 情形）
$$
\begin{gathered}
\sigma_{Lab} (\phi) = \frac{\sin \theta}{\sin \phi} \dv{\theta}{\phi} \sigma_{COM} (\theta) + \frac{\sin \theta}{\sin \phi} \dv{\theta}{\phi} \sigma_{COM} (\pi - \theta) \\ =
\left( \dfrac{e^{2}}{4\pi\epsilon_{0} E} \right)^{2} \left(\dfrac{1}{\sin^{4} \phi} + \frac{1}{\cos^{4} \phi} \right) \cos \phi
\end{gathered}
$$
4.2 一质量为 $M$ ，半径为 $R$ 的圆环在重力作用下绕固定点 $(O)$ 在其平面内作小振动, 如图 4.12 所示。求振动频率。

<img src="./Analytical Mechanics Homework.assets/image-20251028172116393.png" alt="image-20251028172116393" style="zoom:50%;" />

写出拉格朗日量
$$
L = \frac{1}{2} (2M R^{2}) \dot{\theta}^{2} + M g R \cos \theta
$$
得到运动方程
$$
2 M R^{2} \ddot{\theta} = - M g R \sin \theta \approx - MgR \theta
$$
所以小振动的角频率为
$$
\omega = \sqrt{\frac{g}{2 R}}
$$
4.4 原子之间的相互作用可用勒纳-琼斯势近似 $V(r) = \frac{A}{r^{12}} - \frac{B}{r^{6}}$, 其中$A > 0, B > 0$。由此计算氧分子中两原子的平衡距离以及振动频率（氧原子质量为 $m$）。

平衡距离
$$
\pdv{V}{r} = 0
$$

$$
-12 \frac{A}{r^{13}} + 6 \frac{B}{r^{7}} = 0
$$

得到平衡时
$$
r_{0} = \left( \frac{2A}{B} \right)^{\frac{1}{6}}
$$
以两个原子之间的距离为广义坐标，写出拉格朗日量
$$
\begin{gathered}
L (r) = 2 \times \frac{1}{2} m (\dot{\frac{r}{2}})^{2} - \frac{A}{r^{12}} + \frac{B}{r^{6}} \\ =
\frac{1}{4} m \dot{r}^{2} - \frac{A}{r^{12}} + \frac{B}{r^{6}}
\end{gathered}
$$
在平衡位置附近把势能展开为2阶项
$$
r = r_{0} + \delta
$$

$$
\frac{A}{r^{12}} - \frac{B}{r^{6}} = \frac{1}{2} \left(\frac{156 A}{r_{0}^{14}} - \frac{42 B}{r_{0}^{8}}\right) \delta^{2} + o (\delta^{3})
$$

所以
$$
L(\delta) = \frac{1}{4} m \dot{\delta}^{2} - \left( \frac{78 A}{r_{0}^{14}}  - \frac{21 B}{r_{0}^{8}} \right) \delta^{2}
$$
得到运动方程
$$
\frac{1}{2} m \ddot{\delta} = - \left(\frac{156 A}{r_{0}^{14}} - \frac{42 B}{r_{0}^{8}}\right) \delta^{2}
$$
所以运动角频率为
$$
\begin{gathered}
\omega = \sqrt{\frac{B}{2A} \frac{312 A}{m r_{0}^{8}} - \frac{84 B}{m r_{0}^{8}}} \\ =
\sqrt{\frac{72 B}{m r_{0}^{8}}} = \sqrt{\frac{36 B^{2}}{m A}} \left( \frac{B}{2 A} \right)^{\frac{1}{6}} = \frac{6}{2^{\frac{1}{6}}} \sqrt{\frac{B^{\frac{7}{3}}}{A^{\frac{4}{3}} m}}
\end{gathered}
$$

## 第7次作业

4.8 单摆振动方程为 $\ddot{\theta}+\frac{g}{l} \sin \theta=0$, 若振动角度不太大, 利用微扰近似方法给出二阶精度的近似解, 包括周期的二阶精度修正。

展开
$$
\sin \theta = \theta - \frac{1}{6} \theta^{3} + o(\theta^{5})
$$
假设
$$
\theta = \theta_{0} + \epsilon \theta_{1} + \epsilon^{2} \theta_{2}
$$
令 $\omega_{0} = \sqrt{\frac{g}{l}}$
$$
\omega = \omega_{0} + \epsilon \omega_{1} + \epsilon^{2} \omega_{2}
$$

$$
\begin{gathered}
\ddot{\theta} = - \omega_{0}^{2} \theta + \epsilon^{2} \frac{\omega_{0}^{2}}{6} \theta^{3} \\
\ddot{\theta} + \omega^{2} \theta = (\omega^{2} - \omega_{0}^{2}) \theta + \epsilon^{2} \frac{\omega_{0}^{2}}{6} \theta^{3}
\end{gathered}
$$

作代换 $\tau = \omega t + \phi$，得到
$$
\theta'' + \theta = (1 - \frac{\omega_{0}^{2}}{\omega^{2}}) \theta + \epsilon^{2} \frac{\omega_{0}^{2}}{6 \omega^{2}} \theta^{3}
$$
分离得到
$$
\begin{gathered}
\theta''_{0} + \theta_{0} = 0 \\
\theta''_{1} + \theta_{1} = 2\frac{\omega_{1}}{\omega_{0}} \theta_{0} \\
\theta''_{2} + \theta_{2} = \left(2 \frac{\omega_{2}}{\omega_{0}} - 3 \left(\frac{\omega_{1}}{\omega_{0}} \right)^{2} \right) \theta_{0} + 2 \frac{\omega_{1}}{\omega_{0}} \theta_{1} +  \frac{1}{6} \theta_{0}^{3}
\end{gathered}
$$
解得0阶解
$$
\theta_{0} (t) = A \cos (\tau)
$$
所以1阶方程为
$$
\theta''_{1} + \theta_{1} = 2 A \frac{\omega_{1}}{\omega_{0}} \cos \tau
$$
采用拉普拉斯变换，舍弃初值相关项
$$
p^{2} L[\theta_{1}] + L[\theta_{1}] = L \left[2 A \frac{\omega_{1}}{\omega_{0}} \cos \tau  \right]
$$
所以
$$
\begin{gathered}
\theta_{1} (t) = L^{-1} \left[\frac{1}{p^{2} + 1} L \left[2 A \frac{\omega_{1}}{\omega_{0}} \cos \tau \right]\right] \\ = 
\int_{0}^{\tau} 2 A \frac{\omega_{1}}{\omega_{0}} \cos (\tau - \tau') \sin \tau' \, \dd{\tau'} \\ =
A \frac{\omega_{1}}{\omega_{0}} \tau \sin \tau
\end{gathered}
$$
为了消除非物理项，得到
$$
\omega_{1} = 0
$$
所以
$$
\theta_{1} (t) = 0
$$
不存在1阶项。对于2阶
$$
\theta''_{2} + \theta_{2} = 2 A \frac{\omega_{2}}{\omega_{0}} \cos \tau + \frac{A^{3}}{6} \cos^{3} \tau
$$
所以
$$
\begin{gathered}
\theta_{2} (t) = L^{-1} \left[\frac{1}{p^{2} + 1} L \left[2 A \frac{\omega_{2}}{\omega_{0}} \cos \tau + \frac{A^{3}}{6} \cos^{3} \tau \right]\right] \\ =
\int_{0}^{\tau} 2 A \frac{\omega_{2}}{\omega_{0}} \cos (\tau - \tau') \sin \tau' + \frac{A^{3}}{6} \cos^{3} (\tau - \tau') \sin \tau' \, \dd{\tau'} \\ =
A \frac{\omega_{2}}{\omega_{0}} \tau \sin\tau + \frac{A^{3}}{192} \left(12\tau \sin\tau + \cos\tau - \cos 3\tau \right)
\end{gathered}
$$
消去非物理项，得到
$$
\omega_{2} = - \frac{A^{2}}{16} \omega_{0}
$$
得到结论
$$
\theta (t) = A \cos \tau + \frac{A^{3}}{192} \left(\cos\tau - \cos 3\tau \right)
$$

$$
\omega = \omega_{0} \left( 1- \frac{A^{2}}{16} \right)
$$

4.13 二氧化碳分子经典模型如图 4.15 所示,平衡时原子在一直线上。只考虑原子在直线上运动的模式,求分子的简正频率和简正振动模式。

<img src="./Analytical Mechanics Homework.assets/image-20251104165523589.png" alt="image-20251104165523589" style="zoom:50%;" />

直接给出相对于平衡位置的坐标运动方程
$$
\begin{gathered}
\ddot{x}_{1} = \frac{k}{m} (x_{2} - x_{1}) \\
\ddot{x}_{2} = \frac{k}{M} (x_{1} + x_{3} - 2 x_{2}) \\
\ddot{x}_{3} = \frac{k}{m} (x_{2} - x_{3})
\end{gathered}
$$
令 $\omega_{1}^{2} = \frac{k}{m}, \omega_{2}^{2} = \frac{k}{M}$，得到系数矩阵
$$
\begin{pmatrix} 
- \omega_{1}^{2} & \omega_{1}^{2} & 0 \\
\omega_{2}^{2} & - 2 \omega_{2}^{2} & \omega_{2}^{2} \\
0 & \omega_{1}^{2} & - \omega_{1}^{2}
\end{pmatrix}
$$
对角化
$$
A = 
\begin{pmatrix}
1 & 1 & -1 \\
1 & 0 & 2 \frac{\omega_{2}^{2}}{\omega_{1}^{2}} \\
1 & -1 & -1
\end{pmatrix}
\begin{pmatrix}
0 & 0 & 0 \\
0 & -\omega_{1}^{2} & 0 \\
0 & 0 & -\omega_{1}^{2} - 2\omega_{2}^{2}
\end{pmatrix}
\frac{1}{2(2\omega_{2}^{2} + \omega_{1}^{2})} \begin{pmatrix}
2\omega_{2}^{2} & 2\omega_{1}^{2} & 2\omega_{2}^{2} \\
2\omega_{2}^{2} + \omega_{1}^{2} & 0 & - (2\omega_{2}^{2} + \omega_{1}^{2}) \\
- \omega_{1}^{2} & 2\omega_{1}^{2} & - \omega_{1}^{2}
\end{pmatrix}
$$
得到两个振动模式的频率和简正坐标为（特征值0对应了平动）
$$
\begin{gathered}
\omega = \omega_{1} = \sqrt{\frac{k}{m}} \\
x = x_{1} - x_{3}
\end{gathered}
$$

$$
\begin{gathered}
\omega = \sqrt{\omega_{1}^{2} + 2 \omega_{2}^{2}} = \sqrt{\frac{k}{m} + 2 \frac{k}{M}} \\
x = - x_{1} + 2 x_{2} - x_{3}
\end{gathered}
$$

4.15 一耦合摆作小振动，如图 4.17所示，两个小球质量都是 $m$，系在长度都是 $l$ 的轻杆，小球之间用劲度系数为 $k$ 的弹簧相连，弹簧的自然长度与两个悬点 $O, O'$ 之间的距离相同，系统限于两个轻杆自然下垂的铅直平面内运动。两球初始静止，一球在平衡位置，另一球则拉到 $\theta_{2}=\alpha$，求解系统。

<img src="./Analytical Mechanics Homework.assets/image-20251104165552635.png" alt="image-20251104165552635" style="zoom:50%;" />

首先写出运动方程
$$
\begin{pmatrix} \ddot{\theta}_{1} \\ \ddot{\theta}_{2} \end{pmatrix} = 
\begin{pmatrix} 
- \frac{g}{l} - \frac{k}{m} & \frac{k}{m} \\
\frac{k}{m} & - \frac{g}{l} - \frac{k}{m}
\end{pmatrix} \begin{pmatrix} \theta_{1} \\ \theta_{2} \end{pmatrix}
$$
令 $\omega_{1}^{2} = \frac{k}{m}, \omega_{2}^{2} = \frac{g}{l} + \frac{k}{m}$，系数矩阵化为
$$
\begin{pmatrix} 
- \omega_{2}^{2} & \omega_{1}^{2} \\
\omega_{1}^{2} & - \omega_{2}^{2}
\end{pmatrix}
$$
所以
$$
\begin{pmatrix} 
- \omega_{2}^{2} & \omega_{1}^{2} \\
\omega_{1}^{2} & - \omega_{2}^{2}
\end{pmatrix} = 
\begin{pmatrix} 
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & - \frac{1}{\sqrt{2}}
\end{pmatrix}
\begin{pmatrix} 
\omega_{1}^{2} - \omega_{2}^{2} & 0 \\
0 & - \omega_{1}^{2} - \omega_{2}^{2}
\end{pmatrix}
\begin{pmatrix} 
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & - \frac{1}{\sqrt{2}}
\end{pmatrix}
$$
得到
$$
\begin{pmatrix} \ddot{\theta}_{1} \\ \ddot{\theta}_{2} \end{pmatrix} = 
\begin{pmatrix} 
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & - \frac{1}{\sqrt{2}}
\end{pmatrix}
\begin{pmatrix} 
\omega_{1}^{2} - \omega_{2}^{2} & 0 \\
0 & - \omega_{1}^{2} - \omega_{2}^{2}
\end{pmatrix}
\begin{pmatrix} 
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & - \frac{1}{\sqrt{2}}
\end{pmatrix} \begin{pmatrix} \theta_{1} \\ \theta_{2} \end{pmatrix}
$$
重新定义坐标
$$
\begin{gathered}
q_{1} = \frac{1}{\sqrt{2}} (\theta_{1} + \theta_{2}) \\
q_{2} = \frac{1}{\sqrt{2}} (\theta_{1} - \theta_{2})
\end{gathered}
$$
所以
$$
\begin{pmatrix} \ddot{q}_{1} \\ \ddot{q}_{2} \end{pmatrix} = 
\begin{pmatrix} 
\omega_{1}^{2} - \omega_{2}^{2} & 0 \\
0 & - \omega_{1}^{2} - \omega_{2}^{2}
\end{pmatrix} \begin{pmatrix} q_{1} \\ q_{2} \end{pmatrix}
$$
结合初始条件
$$
\begin{gathered}
q_{1} (0) = \frac{\alpha}{\sqrt{2}} \quad q_{2} (0) = - \frac{\alpha}{\sqrt{2}} \\
\dot{q}_{1} (0) = \dot{q}_{2} (0) = 0
\end{gathered}
$$
所以
$$
\begin{gathered}
q_{1} (t) = \frac{\alpha}{\sqrt{2}} \cos(\sqrt{- \omega_{1}^{2} + \omega_{2}^{2}} t) \\
q_{2} (t) = - \frac{\alpha}{\sqrt{2}} \cos(\sqrt{\omega_{1}^{2} + \omega_{2}^{2}} t)
\end{gathered}
$$
得到
$$
\begin{gathered}
\theta_{1} (t) = \frac{\alpha}{2} \left( \cos(\sqrt{\frac{g}{l}} t) - \cos(\sqrt{\frac{g}{l} + 2 \frac{k}{m}} t)\right) \\
\theta_{2} (t) = \frac{\alpha}{2} \left( \cos(\sqrt{\frac{g}{l}} t) + \cos(\sqrt{\frac{g}{l} + 2 \frac{k}{m}} t)\right)
\end{gathered}
$$

## 第8次作业

5.3 杆 $AB$ 长 $L$ 绕 $O C$ 以 $\omega$ 转动, $D$ 是其中心, $O D=a$, 而 $O C$ 绕坚直轴以 $\Omega$ 转动, 如图 5.13 所示。假设初始时刻 $B$ 点刚好在最低点, 求角速度在实验室系和本体坐标系的表示, 以及 $B$ 点在最低点时的速率。

<img src="./Analytical Mechanics Homework.assets/image-20251119192724553.png" alt="image-20251119192724553" style="zoom:50%;" />

在利用欧拉角表示的角速度为
$$
\dot{\theta} = 0, \quad \dot{\phi} = \Omega, \quad \dot{\psi} = \omega
$$
所以在本体系下的角速度为
$$
\vec{\omega} = \begin{pmatrix}
\Omega \sin \theta \sin \psi \\
\Omega \sin \theta \cos \psi \\
\omega + \Omega \cos \theta
\end{pmatrix}
$$
在实验室系下的角速度为
$$
\vec{\omega} = \begin{pmatrix}
\omega \sin \theta \sin \phi \\
- \omega \sin \theta \cos \phi \\
\Omega + \omega \cos \theta
\end{pmatrix}
$$
其中， $\phi = \Omega t, \psi = \omega t$

B 在最低点的速率，考虑 $t = 0$ 时
$$
\begin{gathered}
\vec{v}_{B} = \vec{\omega} \times \vec{r}_{B} = \begin{pmatrix}
0 \\
- \omega \sin \theta \\
\Omega + \omega \cos \theta
\end{pmatrix} \times \begin{pmatrix}
0 \\
- a \sin \theta - \frac{L}{2} \cos \theta \\
a \cos \theta - \frac{L}{2} \sin \theta 
\end{pmatrix} \\ = 
\begin{pmatrix}
\omega \frac{L}{2} + \Omega (a \sin \theta + \frac{L}{2} \cos \theta) \\
0 \\
0
\end{pmatrix}
\end{gathered}
$$
所以 B 在最低点处的速率为
$$
|\vec{v}_{B}| = \omega \frac{L}{2} + \Omega (a \sin \theta + \frac{L}{2} \cos \theta)
$$
5.6 一匀质薄圆盘, 质量 $m$, 半径 $R$, 以圆心为原点, $x$, $y$ 轴在盘面建立直角坐标系, 求惯量张量; 如果一轴通过圆盘边缘但与 $z$ 轴成 $\theta$ 角, 如图 5.15 所示。求对该轴的转动惯量。

<img src="./Analytical Mechanics Homework.assets/image-20251119192807422.png" alt="image-20251119192807422" style="zoom:50%;" />

直接写出相对于质心的惯量张量为
$$
I = \begin{pmatrix}
\frac{1}{4} m R^{2} & 0 & 0 \\
0 & \frac{1}{4} m R^{2} & 0 \\
0 & 0 & \frac{1}{2} m R^{2}
\end{pmatrix}
$$
对于圆盘边缘的点 $(R, 0 , 0)$, 根据惯量张量分量在平移下的变换关系得到
$$
I' = \begin{pmatrix}
\frac{1}{4} m R^{2} & 0 & 0 \\
0 & \frac{5}{4} m R^{2} & 0 \\
0 & 0 & \frac{3}{2} m R^{2}
\end{pmatrix}
$$

再求出相对图中给出轴的转动惯量
$$
J = \begin{pmatrix} \sin \theta & 0 & \cos \theta \end{pmatrix} \begin{pmatrix}
\frac{1}{4} m R^{2} & 0 & 0 \\
0 & \frac{5}{4} m R^{2} & 0 \\
0 & 0 & \frac{3}{2} m R^{2}
\end{pmatrix} \begin{pmatrix}
\sin \theta \\
0 \\
\cos \theta
\end{pmatrix} = \frac{1}{4} m R^{2} (1 + 5 \cos^{2} \theta)
$$
5.8 质量为 $m$ 的两质点连接于长度 $l$ 的刚性轻杆上, 绕通过质心 $O$ 的轴 $OA$ 以角速度 $\Omega$ 转动, $OA$ 与两质点的连线夹角为 $\alpha$, 如图 5.17 所示。求:

<img src="./Analytical Mechanics Homework.assets/image-20251119193115425.png" alt="image-20251119193115425" style="zoom:50%;" />

(1) 系统对质心的角动量;

在本体系下写出惯量张量
$$
I = \begin{pmatrix}
2 m l^{2} & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 2 m l^{2}
\end{pmatrix}
$$
这个刚体在欧拉角的描述下是没有自转的，所以我们不妨取 $\psi = 0, \phi = \Omega t$

本体系中的角速度为
$$
\vec{\omega} = \begin{pmatrix}
0 \\
- \Omega \cos \alpha \\
\Omega \sin \alpha
\end{pmatrix}
$$
所以在本体系中的角动量为
$$
\vec{L} = \begin{pmatrix}
0 \\
0 \\
2 m l^{2} \Omega \sin \alpha
\end{pmatrix}
$$
转换到实验室系中，得到相对于质心的角动量为
$$
\vec{L} = \begin{pmatrix}
2 m l^{2} \Omega \sin \alpha \cos \alpha \sin \phi \\
- 2 m l^{2} \Omega \sin \alpha \cos \alpha \cos \phi\\
2 m l^{2} \Omega \sin^{2} \alpha
\end{pmatrix}
$$
其中 $\phi  = \Omega t$

(2) 系统所受力矩;

直接求导得到
$$
\vec{M} = \dv{\vec{L}}{t} = \begin{pmatrix}
2 m l^{2} \Omega^{2} \sin \alpha \cos \alpha \cos \phi \\
2 m l^{2} \Omega^{2} \sin \alpha \cos \alpha \sin \phi\\
0
\end{pmatrix}
$$
(3) 系统转动动能。
$$
T = \frac{1}{2} \omega^{T} I \omega  = \frac{1}{2} \begin{pmatrix}
0 &
- \Omega \cos \alpha &
\Omega \sin \alpha
\end{pmatrix}
\begin{pmatrix}
2 m l^{2} & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 2 m l^{2}
\end{pmatrix}
\begin{pmatrix}
0 \\
- \Omega \cos \alpha \\
\Omega \sin \alpha
\end{pmatrix} = m l^{2} \Omega^{2} \sin^{2} \alpha
$$

5.10 5.8 题力矩突然撤除, 求:
(1) 系统对 $O$ 点的角动量;

不妨假设在 $\phi = 0$ 的时候力矩突然消除，那么此后角动量守恒
$$
\vec{L} = \begin{pmatrix}0 \\- 2 m l^{2} \Omega \sin \alpha \cos \alpha \\ 2 m l^{2} \Omega \sin^{2} \alpha\end{pmatrix}
$$
(2) 系统转动的角速度及各欧拉角的时间变化率。

撤去外力矩之后系统的自由转动即为欧拉-潘索情况，带入欧拉方程
$$
\begin{gathered}
I_{1} \dot{\omega}_{1} -  (I_{2} - I_{3}) \omega_{2} \omega_{3} = 0 \\
I_{2} \dot{\omega}_{2} -  (I_{3} - I_{1}) \omega_{3} \omega_{1} = 0 \\
I_{3} \dot{\omega}_{3} -  (I_{1} - I_{2}) \omega_{1} \omega_{2} = 0
\end{gathered}
$$
所以
$$
\begin{gathered}
\dot{\omega}_{1} + \omega_{2} \omega_{3} = 0 \\
\dot{\omega}_{3} - \omega_{1} \omega_{2} = 0
\end{gathered}
$$
带入初始条件
$$
\begin{gathered}
\omega_{1} = 0\\
\omega_{2} = - \Omega \cos \alpha \\
\omega_{3} = \Omega \sin \alpha
\end{gathered}
$$
解得
$$
\begin{gathered}
\omega_{1} = \Omega \sin \alpha \sin (\Omega \cos \alpha t) \\
\omega_{2} = - \Omega \cos \alpha \\
\omega_{3} = \Omega \sin \alpha \cos (\Omega \cos \alpha t)
\end{gathered}
$$
所以实验室系中的角速度为（重新选取实验室系坐标轴的方向使得 $+z$ 方向和角动量方向相同）
$$
\vec{\omega} = \begin{pmatrix}
- \Omega \cos \alpha \sin (\Omega \sin \alpha t) \\
- \Omega \cos \alpha \cos(\Omega \sin \alpha t) \\
\Omega \sin \alpha
\end{pmatrix}
$$
欧拉角的时间变化率为（为了简单起见，在处理这种对称刚体时我们选取自转轴为 $-y$ 方向）
$$
\dot{\theta} = 0, \dot{\phi} = \Omega \sin \alpha, \dot{\psi} = \Omega \cos \alpha
$$

## 第9次作业

5.16 假设地球自转轴沿着对称轴方向，而与黄道面夹角 $\varphi$ (白道面与黄道面的倾角 $5^{\circ}$ 多一点，可以近似认为在同一个面内)。由于地球是扁椭球，所受太阳引力与此倾角有关，从而产生力矩。假设地球与太阳距离为 $R$，相互作用势能为
$$
V(\theta)=-G \frac{M_{\text {sun}} M_{\text {earth}}}{R}+G \frac{M_{\text {sun}}}{2 R^{3}}\left(I_{3}-I_{1}\right)\left(\frac{1-3 \cos^{2} \theta}{2}\right)
$$

其中 $\theta=\frac{\pi}{2}-\varphi$，而 $I_{1}, I_{3}$ 分别为椭球 (地球) 的长短轴主转动惯量。求地球自转轴进动角速度 (所需参数可以从网络查得)。

写出拉格朗日量为
$$
L = K_{COM} + \frac{I_{1}}{2} (\dot{\theta}^{2} + \dot{\phi}^{2} \sin^{2} \theta) + \frac{I_{3}}{2} (\dot{\phi} \cos \theta + \dot{\psi})^{2} + \frac{G M_{sun} M_{earth}}{R} - G \frac{M_{sun}}{2 R^{3}} (I_{3} - I_{1}) \left(\frac{1 - 3 \cos^{2} \theta}{2}\right)
$$
得到运动积分
$$
p_{\phi} = I_{1} \sin^{2} \theta \dot{\phi} + I_{3} (\dot{\phi} \cos \theta + \dot{\psi}) \cos \theta
$$

$$
p_{\psi} = I_{3} (\dot{\phi} \cos \theta + \dot{\psi})
$$

$$
E = K_{COM} + \frac{I_{1}}{2} (\dot{\theta}^{2} + \dot{\phi}^{2} \sin^{2} \theta) + \frac{I_{3}}{2} (\dot{\phi} \cos \theta + \dot{\psi})^{2} - \frac{G M_{sun} M_{earth}}{R} + G \frac{M_{sun}}{2 R^{3}} (I_{3} - I_{1}) \left(\frac{1 - 3 \cos^{2} \theta}{2}\right)
$$

得到地轴的进动角速度为
$$
\dot{\phi} = \frac{p_{\psi} \cos \theta - p_{\phi}}{I_{1} \sin^{2} \theta}
$$
对于 $\theta$ 方向的运动方程给出
$$
-I_{3} (\dot{\phi} \cos \theta + \dot{\psi}) \dot{\phi} \sin \theta - G \frac{3 M_{sun}}{2 R^{3}} (I_{3} - I_{1}) \cos \theta \sin \theta = 0
$$
所以
$$
\dot{\phi} \approx \frac{3 G M_{sun}}{2 R^{3}} \frac{I_{3} - I_{1}}{I_{3} \dot{\psi}} \cos \theta
$$
查资料得到
$$
I_{3} = 8.034 \times 10^{37} kg \cdot m^{2}
$$

$$
I_{1} = 8.014 \times 10^{37} kg \cdot m^{2}
$$

$$
G = 6.674 \times 10^{-11} \, \text{m}^{3} \text{kg}^{-1} \text{s}^{-2}
$$

$$
M_{\text{sun}} = 1.989 \times 10^{30} \, \text{kg}
$$

$$
R = 1.496 \times 10^{11} \, \text{m}
$$

$$
\dot{\psi} = 7.292 \times 10^{-5} \, \text{rad/s}
$$

$$
\theta\approx 23.5^{\circ}
$$

计算可得 $\dot{\phi} \approx 7.78 \times 10^{-12} \, \text{rad/s}$，对应进动周期约 $2.56 \times 10^{4}$ 年。

5.17 通常刚体的主转动惯量各不相同，假设 $I_{1}<I_{2}<I_{3}$。求证：自由转动时，若开始沿主轴 $1$ 或 $3$，则转动是稳定的，而开始沿主轴 $2$，则转动不稳定。(提示：为了证明这个命题，可以假设刚体开始角速度沿某个主轴方向，但附加了一个小扰动 $\delta$，看这个扰动在以后的运动中是线性振动还是指数发散。)

证明：对于欧拉-潘索情形下的自由转动
$$
I_{1} \dot{\omega}_{1} = (I_{2} - I_{3}) \omega_{2} \omega_{3}, \quad I_{2} \dot{\omega}_{2} = (I_{3} - I_{1}) \omega_{3} \omega_{1}, \quad I_{3} \dot{\omega}_{3} = (I_{1} - I_{2}) \omega_{1} \omega_{2}
$$

沿主轴1转动：设初始 $\omega_{1} = \Omega + x$，$\omega_{2} = y$，$\omega_{3} = z$（$x, y, z$ 为小扰动）。线性化得：
$$
\dot{y} = \frac{(I_{3} - I_{1})\Omega}{I_{2}} z, \quad \dot{z} = \frac{(I_{1} - I_{2})\Omega}{I_{3}} y
$$
特征值 $\lambda^{2} = \frac{(I_{3} - I_{1})(I_{1} - I_{2})\Omega^{2}}{I_{2} I_{3}} < 0$，故稳定。

沿主轴3转动：设初始 $\omega_{3} = \Omega + x$，$\omega_{1} = y$，$\omega_{2} = z$。线性化得：
$$
\dot{y} = \frac{(I_{2} - I_{3})\Omega}{I_{1}} z, \quad \dot{z} = \frac{(I_{3} - I_{1})\Omega}{I_{2}} y
$$
特征值 $\lambda^{2} = \frac{(I_{2} - I_{3})(I_{3} - I_{1})\Omega^{2}}{I_{1} I_{2}} < 0$，故稳定。

沿主轴2转动：设初始 $\omega_{2} = \Omega + x$，$\omega_{1} = y$，$\omega_{3} = z$。线性化得：
$$
\dot{y} = \frac{(I_{2} - I_{3})\Omega}{I_{1}} z, \quad \dot{z} = \frac{(I_{1} - I_{2})\Omega}{I_{3}} y
$$
特征值 $\lambda^{2} = \frac{(I_{2} - I_{3})(I_{1} - I_{2})\Omega^{2}}{I_{1} I_{3}} > 0$，故在扰动下角速度会指数发散，不稳定。因此，沿主轴1或3转动稳定，沿主轴2转动不稳定。

6.7 有一小珠子质量为 $m$，串在光滑的硬丝线上，丝线是抛物线形状， $y = a^{2} x^{2}$，重力加速度与 $y$ 轴反向。现丝线绕 $y$ 轴以角速度 $\omega$ 匀速转动，以小珠子到 $y$ 轴的距离作为广义坐标，给出哈密顿量以及哈密顿方程。

丝线方程 $y = a^{2} x^{2}$，绕 $y$ 轴以角速度 $\omega$ 匀速转动，重力沿 $-y$ 方向。广义坐标取珠子到 $y$ 轴的距离 $x$。

珠子坐标（惯性系）：
$$
X = x \cos \omega t, \quad Y = a^{2} x^{2}, \quad Z = x \sin \omega t
$$
动能 $T = \frac{1}{2} m (\dot{X}^{2} + \dot{Y}^{2} + \dot{Z}^{2})$，势能 $V = m g Y = m g a^{2} x^{2}$。

计算得拉格朗日量：
$$
L = \frac{1}{2} m \left((1 + 4 a^{4} x^{2}) \dot{x}^{2} + \omega^{2} x^{2} \right) - m g a^{2} x^{2}
$$

广义动量：
$$
p = \frac{\partial L}{\partial \dot{x}} = m (1 + 4 a^{4} x^{2}) \dot{x}
$$

哈密顿量：
$$
H = \frac{p^{2}}{2m (1 + 4 a^{4} x^{2})} + m \left( g a^{2} - \frac{\omega^{2}}{2} \right) x^{2}
$$

哈密顿方程：
$$
\dot{x} = \frac{\partial H}{\partial p} = \frac{p}{m (1 + 4 a^{4} x^{2})}, \quad \dot{p} = -\frac{\partial H}{\partial x} = \frac{4 a^{4} x p^{2}}{m (1 + 4 a^{4} x^{2})^{2}} - 2m \left( g a^{2} - \frac{\omega^{2}}{2} \right) x
$$

6.11两质点质量分别为 $m_{1}$ 和 $m_{2}$, 中间用劲度系数为 $k$ 、自然伸长为 $l$的弹簧相连，并放在光滑桌面上运动。给出哈密顿量及循环积分，并导出哈密顿方程。

引入质心坐标 $\mathbf{R} = \frac{(m_{1} \mathbf{r}_{1} + m_{2} \mathbf{r}_{2})}{m_{1} + m_{2}}$ 和相对坐标 $\mathbf{r} = \mathbf{r}_{1} - \mathbf{r}_{2}$

拉格朗日量
$$
L = \frac{1}{2} M \dot{\mathbf{R}}^{2} + \frac{1}{2} \mu \dot{\mathbf{r}}^{2} - \frac{1}{2} k (r - l)^{2}
$$
其中 $M = m_{1} + m_{2}$，$\mu = \frac{m_{1} m_{2}}{M}$，$r = |\mathbf{r}|$

广义动量
$$
\mathbf{P} = \frac{\partial L}{\partial \dot{\mathbf{R}}} = M \dot{\mathbf{R}}, \quad \mathbf{p} = \frac{\partial L}{\partial \dot{\mathbf{r}}} = \mu \dot{\mathbf{r}}
$$

哈密顿量
$$
H = \frac{P^{2}}{2M} + \frac{p^{2}}{2\mu} + \frac{1}{2} k (r - l)^{2}
$$
其中 $P^{2} = P_{x}^{2} + P_{y}^{2}$，$p^{2} = p_{x}^{2} + p_{y}^{2}$。

循环积分：由于 $H$ 不依赖于 $\mathbf{R}$，故 $\mathbf{P}$ 守恒（即质心动量守恒）。

哈密顿方程：
$$
\dot{\mathbf{R}} = \frac{\partial H}{\partial \mathbf{P}} = \frac{\mathbf{P}}{M}, \quad \dot{\mathbf{P}} = -\frac{\partial H}{\partial \mathbf{R}} = 0
$$
假设 $\mathbf{r} = (x, y)$
$$
\dot{x} = \frac{\partial H}{\partial p_{x}} = \frac{p_{x}}{\mu}, \quad \dot{y} = \frac{\partial H}{\partial p_{y}} = \frac{p_{y}}{\mu}
$$

$$
\dot{p}_{x} = -\frac{\partial H}{\partial x} = -k \left(1 - \frac{l}{r}\right) x, \quad \dot{p}_{y} = -\frac{\partial H}{\partial y} = -k \left(1 - \frac{l}{r}\right) y
$$

其中 $r = \sqrt{x^{2} + y^{2}}$

6.15 有一质点质量 $m$，在中心力场 $V(r)$ 中运动，其在球坐标中的拉格朗日量为
$$
L=\frac{1}{2} m\left(\dot{r}^{2}+r^{2} \dot{\theta}^{2}+r^{2} \sin^{2} \theta \dot{\varphi}^{2}\right)-V(r)
$$

(1) 给出 $(r, \theta, \varphi)$ 对应的共轭正则动量；

(2) 给出哈密顿量及循环积分；

(3) 给出正则方程。

拉格朗日量
$$
L = \frac{1}{2} m (\dot{r}^{2} + r^{2} \dot{\theta}^{2} + r^{2} \sin^{2} \theta \dot{\varphi}^{2}) - V(r)
$$

(1) 正则动量
$$
p_{r} = \frac{\partial L}{\partial \dot{r}} = m \dot{r}, \quad p_{\theta} = \frac{\partial L}{\partial \dot{\theta}} = m r^{2} \dot{\theta}, \quad p_{\varphi} = \frac{\partial L}{\partial \dot{\varphi}} = m r^{2} \sin^{2} \theta \dot{\varphi}
$$

(2) 哈密顿量
$$
H = \frac{1}{2m} \left( p_{r}^{2} + \frac{p_{\theta}^{2}}{r^{2}} + \frac{p_{\varphi}^{2}}{r^{2} \sin^{2} \theta} \right) + V(r)
$$
循环积分：由于 $L$ 不显含 $\varphi$，故 
$$
p_{\varphi} = mr^{2} \sin^{2} \theta \dot{\varphi}
$$
守恒

(3) 正则方程
$$
\dot{r} = \frac{\partial H}{\partial p_{r}} = \frac{p_{r}}{m}, \quad \dot{p}_{r} = -\frac{\partial H}{\partial r} = \frac{p_{\theta}^{2}}{m r^{3}} + \frac{p_{\varphi}^{2}}{m r^{3} \sin^{2} \theta} - V'(r)
$$

$$
\dot{\theta} = \frac{\partial H}{\partial p_{\theta}} = \frac{p_{\theta}}{m r^{2}}, \quad \dot{p}_{\theta} = -\frac{\partial H}{\partial \theta} = \frac{p_{\varphi}^{2} \cos \theta}{m r^{2} \sin^{3} \theta}
$$

$$
\dot{\varphi} = \frac{\partial H}{\partial p_{\varphi}} = \frac{p_{\varphi}}{m r^{2} \sin^{2} \theta}, \quad \dot{p}_{\varphi} = -\frac{\partial H}{\partial \varphi} = 0
$$

## 第10次作业

6.16 引入正则变量的好处是，坐标变量和共轭动量地位相同。对于一维谐振动系统，哈密顿量为

$$
H = \frac{p^{2}}{2m} + \frac{1}{2}m\omega^{2}q^{2}
$$

1.若引入动量空间的拉格朗日量 $K(p,\dot{p},t) = L(q,\dot{q},t) - p\dot{q} - q\dot{p}$，求证其形式与 $L = L(\dot{q},q)$ 相同
$$
L (\dot{q}, q) = p \dot{q} - H = \frac{p^{2}}{2m} - \frac{1}{2} m \omega^{2} q^{2}
$$

所以
$$
K(p,\dot{p},t) = L(q,\dot{q},t) - \dot{p}q - q\dot{p} = \frac{p^{2}}{2m} - \frac{1}{2} m \omega^{2} q^{2} - \frac{p^{2}}{m} - q (- m \omega^{2} q) = \frac{\dot{p}^{2}}{2m \omega^{2}} - \frac{p^{2}}{2m}
$$
有相同的形式。

2.证明动量空间的拉格朗日方程与坐标空间的形式相同

先得到坐标空间的运动方程
$$
\begin{gathered}
\dv{}{t}(m \dot{q}) = - m \omega^{2} q \\
\ddot{q} = - \omega^{2} q
\end{gathered}
$$
再写出动量空间的拉格朗日方程
$$
\begin{gathered}
\dv{}{t} \pdv{}{\dot{p}} K = \pdv{}{p} K\\
\frac{\ddot{p}}{m \omega^{2}} = - \frac{p}{m} \\
\ddot{p} = - \omega^{2} p
\end{gathered}
$$
二者形式相同。

6.17 双摆，其中 $m_{1} = m_{2}$, $l_{1} = l_{2}$，做小角度近似，给出哈密顿量及循环积分。此时相轨迹在四维相空间的二维环上，如果时间足够长，相轨迹是否会遍历二维环？逐渐增加振幅，小角度近似慢慢失效，简单描述这个过程。

<img src="./Analytical Mechanics Homework.assets/image-20251210202842195.png" alt="image-20251210202842195" style="zoom:25%;" />

写出动能
$$
\begin{gathered}
T = \frac{1}{2} m (l \dot{\theta}_{1})^{2} + \frac{1}{2} m (l^{2} \dot{\theta}_{1}^{2} + l^{2} (\dot{\theta}_{1} + \dot{\theta}_{2})^{2} + 2 l^{2} \dot{\theta}_{1}(\dot{\theta}_{1} + \dot{\theta}_{2}) \cos(\theta_{2})) \\ \approx
\frac{1}{2} m l^{2} (5 \dot{\theta}_{1}^{2} + \dot{\theta}_{2}^{2} + 4 \dot{\theta}_{1} \dot{\theta}_{2})
\end{gathered}
$$
势能
$$
\begin{gathered}
V = - mg l \cos \theta_{1} - mg (l \cos \theta_{1} + l \cos(\theta_{1} + \theta_{2})) \\ \approx
\frac{1}{2} mgl (3 \theta_{1}^{2} + \theta_{2}^{2} + 2 \theta_{1} \theta_{2})
\end{gathered}
$$
所以
$$
L \approx \frac{1}{2} m l^{2} (5 \dot{\theta}_{1}^{2} + \dot{\theta}_{2}^{2} + 4 \dot{\theta}_{1} \dot{\theta}_{2}) - \frac{1}{2} mgl (3 \theta_{1}^{2} + \theta_{2}^{2} + 2 \theta_{1} \theta_{2})
$$
得到
$$
\begin{gathered}
p_{\theta_{1}} = m l^{2} (5 \dot{\theta}_{1} + 2 \dot{\theta}_{2}) \\
p_{\theta_{2}} = m l^{2} ( \dot{\theta}_{2} + 2 \dot{\theta}_{1})
\end{gathered}
$$
所以
$$
\begin{gathered}
H = p_{\theta_{1}} \frac{p_{\theta_{1}} - 2 p_{\theta_{2}}}{ml^{2}} + p_{\theta_{2}} \frac{5 p_{\theta_{2}} - 2 p_{\theta_{1}}}{ml^{2}} - \frac{p_{\theta_{1}}^{2} + 5 p_{\theta_{2}}^{2} - 4 p_{\theta_{1}} p_{\theta_{2}}}{2m l^{2}} + \frac{1}{2} mgl (3 \theta_{1}^{2} + \theta_{2}^{2} + 2 \theta_{1} \theta_{2}) \\ =
\frac{p_{\theta_{1}}^{2} + 5 p_{\theta_{2}}^{2} - 4 p_{\theta_{1}} p_{\theta_{2}}}{2m l^{2}} + \frac{1}{2} mgl (3 \theta_{1}^{2} + \theta_{2}^{2} + 2 \theta_{1} \theta_{2})
\end{gathered}
$$
循环积分
$$
H = Const
$$
正则方程
$$
\begin{gathered}
\dot{p_{\theta_{1}}} = -mgl (3 \theta_{1} + \theta_{2}) \\
\dot{p_{\theta_{2}}} = -mgl (\theta_{2} + \theta_{1})
\end{gathered}
$$
解得
$$
\omega = \sqrt{(2 \pm \sqrt{2}) \frac{g}{l}}
$$
由于 $\omega$ 是无理数，所以曲线在两个方向上并没有办法找到一个确定比值的周期，所以曲线可以遍历二维环。

逐渐增加振幅，小角度近似慢慢失效，此时相空间中原本的二维不变环面会变形，中间的洞变小，环面上的相轨迹之间出现裂隙，最终走向混沌。

7.1 一粒子质量 $m$，以加速度 $a$ 作匀加速直线运动，初始 $t = 0$，位置和动量分别为 $x_{0}$，$p_{0}$，将位置和动量作为正则变量。 
1.给出哈密顿量，并给出运动方程和守恒量；
$$
L = \frac{1}{2} m \dot{x}^{2} + ma x
$$

$$
p = m \dot{x}
$$

$$
H = \frac{p^{2}}{2m} - ma x
$$

运动方程
$$
\frac{p}{m} = \dot{x}
$$

$$
\dot{p} = ma
$$

所以
$$
\ddot{x} = a
$$
守恒量
$$
H = \frac{p^{2}}{2m} - ma x = \frac{p_{0}^{2}}{2m} - ma x_{0}
$$
2.求 $t$ 时刻正则变量 $x$，$p$

直接积分得到
$$
x(t) = x_{0} + \frac{p_{0}}{m} t + \frac{1}{2} a t^{2}
$$

$$
p(t) = p_{0} + ma t
$$

3.给出第二种形式的正则变换生成函数 $F_{2}(x_{0}, p, t)$，由此证明 $x_{0}$，$p_{0}$ 到 $x$，$p$ 是正则变换
$$
\begin{gathered}
\dd{F_{2}} = p_{0} \dd{x_{0}}+ x \dd{p} + (H - H_{0}) \, \dd{t} \\ = (p - mat) \, \dd{x_{0}} +(x_{0} + \frac{p - mat}{m} t + \frac{1}{2} a t^{2}) \dd{p} + (\frac{p^{2}}{2m} - ma (x_{0} + \frac{p - mat}{m} t + \frac{1}{2} a t^{2})) \, \dd{t} 
\end{gathered}
$$
所以
$$
F_{2} (x_{0}, p, t) = \frac{p^{2}}{2m} t + p x_{0} - mat x_{0} - \frac{1}{2} a p t^{2}  + \frac{1}{6} m a^{2} t^{3}
$$
所以$x_{0}$，$p_{0}$ 到 $x$，$p$ 是正则变换

4.利用泊松括号 $[x,p]_{x_{0},p_{0}}$，证明 $x_{0}$，$p_{0}$ 到 $x$，$p$ 是正则变换

检验泊松括号
$$
\comm{x}{p}_{x_{0}, p_{0}} = \pdv{x}{x_{0}} \pdv{p}{p_{0}} - \pdv{x}{p_{0}} \pdv{p}{x_{0}} = 1
$$
所以$x_{0}$，$p_{0}$ 到 $x$，$p$ 是正则变换

## 第11次作业

7.3 用两种方法证明以下变换是正则变换
$$
Q = -p, \quad P = q + \alpha p^{2}
$$

其中，$\alpha$ 是适当的常量。

(1) 求得生成函数
计算得到
$$
\dd{F_{1}} = -Q \dd{q} - (q + \alpha Q^{2}) \dd{Q}
$$

所以
$$
F_{1} (q, Q) = - qQ - \frac{1}{3} \alpha Q^{3}
$$
所以是正则变换

7.4 用两种方法证明以下变换是正则变换
$$
Q = \arctan\left(\frac{\alpha q}{p}\right), \quad P = \frac{\alpha q^{2}}{2}\left(1 + \frac{p^{2}}{\alpha^{2} q^{2}}\right)
$$

其中 $\alpha$ 是适当的常量。

(1) 求得生成函数

计算得到
$$
\dd{F}_{1} = \frac{\alpha q}{\tan Q} \dd{q} - \frac{\alpha q^{2}}{2} \left(1 + \cot^{2} Q \right) \dd{Q}
$$
所以 
$$
F_{1} (q, Q) = \frac{\alpha q^{2}}{2 \tan Q}
$$
所以是正则变换

7.5 用两种方法证明以下变换是正则变换
$$
Q = \sqrt{2p} \sin q, \quad P = \sqrt{2p} \cos q
$$

(1) 求得生成函数

$$
\dd{F}_{1} = \frac{Q^{2} + \frac{Q^{2}}{\tan^{2} q}}{2} \dd{q} - \frac{Q}{\tan q} \dd{Q}
$$
所以
$$
F_{1} (q, Q) = - \frac{Q^{2}}{2 \tan q}
$$
所以是正则变换

7.6 用两种方法证明以下变换是正则变换
$$
\begin{aligned}
Q_{1} &= q_{1} q_{2}, & P_{1} &= 1 - \frac{p_{1} - p_{2}}{q_{1} - q_{2}} \\
Q_{2} &= q_{1} + q_{2}, & P_{2} &= -q_{1} - q_{2} + \frac{q_{1} p_{1} - q_{2} p_{2}}{q_{1} - q_{2}}
\end{aligned}
$$

(1) 求得生成函数

$$
\begin{gathered}
\dd{F}_{2} = p_{1} \dd{q}_{1} + p_{2} \dd{q}_{2} + Q_{1} \dd{P}_{1} + Q_{2} \dd{P}_{2} \\ = 
(P_{2} + q_{1} + q_{2} P_{1}) \dd{q}_{1} + (P_{2} + q_{2} + q_{1} P_{1}) \dd{q}_{2} + q_{1} q_{2} \dd{P}_{1} + (q_{1} + q_{2}) \dd{P}_{2}
\end{gathered}
$$
所以
$$
F_{2} (q, P) = (q_{1} + q_{2}) P_{2} + \frac{q_{1}^{2} + q_{2}^{2}}{2} + q_{1} q_{2} P_{1}
$$
所以是正则变换

7.7 用两种方法证明以下变换是正则变换
$$
Q_{i} = q_{i} \cos \theta_{i} - p_{i} \sin \theta_{i}, \quad P_{i} = q_{i} \sin \theta_{i} + p_{i} \cos \theta_{i}, \quad i = 1, 2, 3, \cdots, s
$$

其中 $\theta_{i}$ 是适当的常量，$s$ 是系统自由度个数。

(1) 求得生成函数
$$
\dd{F}_{1} = \sum_{i} - \frac{Q_{i} - q_{i} \cos \theta_{i}}{\sin \theta_{i}} \dd{q}_{i} - \frac{q_{i} - Q_{i} \cos \theta_{i}}{\sin \theta_{i}} \dd{Q}_{i}
$$
所以生成函数为
$$
F_{1} (q_{i}, Q_{i}) = \sum_{i = 1}^{s} \frac{-Q_{i} q_{i} + \frac{1}{2} (q_{i}^{2} + Q_{i}^{2}) \cos \theta_{i}}{\sin \theta_{i}}
$$
所以是正则变换

7.8  有一质点质量为 $m$, 在中心力场 $V(r)$ 中运动, 柱坐标为 $(\rho, \phi, z)$, 其拉格朗日量为
$$
L = \frac{1}{2}m(\dot{\rho}^{2} + \rho^{2} \dot{\phi}^{2} + \dot{z}^{2}) - V(\sqrt{\rho^{2} + z^{2}})
$$

另有一个转动坐标系, 绕 $z$ 轴以角速度 $\omega$ 转动。若 $t=0$ 时两个坐标系重合, 转动坐标系质点坐标为 $(\rho', \phi', z')$。选择第二种正则变换生成函数 $F_{2} = \sum_{i=1}^{3}p_{i}^{\prime}r_{i}^{\prime}$ 形式，其中，$r_{i}^{\prime}$ 和 $p_{i}^{\prime}$ 分别为转动坐标系的广义坐标和广义动量分量。给出相应的哈密顿量及正则方程，并考查虚拟力的形式。

首先写出坐标变换关系
$$
\begin{gathered}
\rho' = \rho \\
\phi' = \phi - \omega t \\
z' = z
\end{gathered}
$$
利用旋转系内坐标重新表示拉格朗日量得到
$$
L' = \frac{1}{2} m (\dot{\rho'}^{2} + \rho'^{2} (\dot{\phi'} + \omega)^{2} + \dot{z'}^{2}) - V (\sqrt{\rho'^{2} + z'^{2}})
$$
得到旋转系内的广义动量为
$$
\begin{gathered}
p'_{\rho'} = m \dot{\rho'} \\
p'_{\phi'} = m \rho'^{2} (\dot{\phi'} + \omega) \\
p'_{z'} = m \dot{z'}
\end{gathered}
$$
所以第二种正则变换生成函数为
$$
\begin{gathered}
F_{2} (q_{i}, P_{i}) = m \left( \dot{\rho'} \rho' + \rho'^{2} (\dot{\phi'} + \omega) \phi' + \dot{z'} z' \right) \\=
p'_{\rho'} \rho + p'_{\phi'} (\phi - \omega t) + p'_{z'} z
\end{gathered}
$$
利用 
$$
\dd{F}_{2} = \sum_{i} p_{i} \dd{q}_{i} + Q_{i} \dd{P}_{i} + (H' - H) \dd{t}
$$
所以
$$
H' - H = - p'_{\phi'} \omega
$$
所以
$$
\begin{gathered}
H' = \frac{1}{2}m(\dot{\rho}^{2} + \rho^{2} \dot{\phi}^{2} + \dot{z}^{2}) + V( \sqrt{\rho^{2} + z^{2}}) - p'_{\phi'} \omega \\=
\frac{1}{2} p'_{\rho'} \dot{\rho'} + \frac{1}{2} p'_{\phi'} (\dot{\phi'} + \omega) + \frac{1}{2} p'_{z'} \dot{z'}  + V - p'_{\phi'} \omega \\= 
\frac{{p'_{\rho'}}^{2}}{2m} + \frac{p'_{\phi'} (p'_{\phi'} - 2m \omega \rho'^{2})}{2m \rho'^{2}} + \frac{{p'_{z'}}^{2}}{2m} + V
\end{gathered}
$$
正则方程
$$
\begin{gathered}
\dot{p'}_{\rho'} = - m \pdv{V}{\rho'} + \frac{{p'_{\phi'}}^{2}}{m \rho'^{3}} \\
\dot{p'}_{\phi'} = - m \pdv{V}{\phi'} \\
\dot{p'}_{z'} = - m \pdv{V}{z'}
\end{gathered}
$$
虚拟力，从运动方程中得到
$$
\frac{{p'_{\phi'}}^{2}}{m \rho'^{3}} = m \rho' (\dot{\phi'} + \omega)^{2} = m \rho' \omega^{2} + m \rho' \dot{\phi'}^{2} + 2 m \rho' \dot{\phi'} \omega
$$
所以惯性离心力为
$$
m \omega^{2} \rho'
$$
科里奥利力的一个分量
$$
2m \rho' \dot{\phi'} \omega
$$
再由角向的方程
$$
\dot{p'}_{\phi'} = m \rho'^{2} \ddot{\phi'} + 2m \rho' \dot{\rho'} (\dot{\phi'} + \omega)
$$
得到科里奥利力的另一个分量
$$
2m \dot{\rho'} \omega
$$

## 第12次作业

7.6 用两种方法证明以下变换是正则变换
$$
Q = \sqrt{2p} \sin q, \quad P = \sqrt{2p} \cos q
$$

(2)  计算泊松括号。

计算泊松括号为
$$
\begin{gathered}
[Q, P]_{pq} = \pdv{Q}{q} \pdv{P}{p} - \pdv{Q}{p} \pdv{P}{q} \\ = 
\sqrt{2p} \cos q \frac{\cos q}{\sqrt{2p}} + \frac{\sin q}{\sqrt{2p}} \sqrt{2p} \sin q = 1
\end{gathered}
$$
并且显然有
$$
[Q,Q]_{pq} = [P, P]_{pq} = 0
$$
所以是正则变换。

7.8 用两种方法证明以下变换是正则变换
$$
Q_{i} = q_{i} \cos \theta_{i} - p_{i} \sin \theta_{i}, \quad P_{i} = q_{i} \sin \theta_{i} + p_{i} \cos \theta_{i}, \quad i = 1, 2, 3, \cdots, s
$$

其中 $\theta_{i}$ 是适当的常量，$s$ 是系统自由度个数。

(2) 计算泊松括号。

计算泊松括号
$$
\begin{gathered}
[Q_{i}, P_{j}]_{pq} = \sum_{k} \pdv{Q_{i}}{q_{k}} \pdv{P_{j}}{p_{k}} - \pdv{Q_{i}}{p_{k}} \pdv{P_{j}}{q_{k}} \\ = 
\sum_{k} \delta_{ik} \cos \theta_{i} \delta_{jk} \cos \theta_{j} - \delta_{ik} \sin \theta_{k} \delta_{jk} \sin \theta_{k} \\=
\delta_{ij}
\end{gathered}
$$

$$
\begin{gathered}
[Q_{i}, Q_{j}]_{pq} = \sum_{k} \pdv{Q_{i}}{q_{k}} \pdv{Q_{j}}{p_{k}} - \pdv{Q_{i}}{p_{k}} \pdv{Q_{j}}{q_{k}} \\ = 
\sum_{k} \delta_{ik} \cos \theta_{i} \delta_{jk} \sin \theta_{j} - \delta_{ik} \sin \theta_{k} \delta_{jk} \cos \theta_{k} \\=
0
\end{gathered}
$$

$$
\begin{gathered}
[P_{i}, P_{j}]_{pq} = \sum_{k} \pdv{P_{i}}{q_{k}} \pdv{P_{j}}{p_{k}} - \pdv{P_{i}}{p_{k}} \pdv{P_{j}}{q_{k}} \\ = 
\sum_{k} \delta_{ik} \sin \theta_{i} \delta_{jk} \cos \theta_{j} - \delta_{ik} \cos \theta_{k} \delta_{jk} \sin \theta_{k} \\=
0
\end{gathered}
$$

所以是正则变换。

7.11 求证: 角动量 $J = (J_{1}, J_{2}, J_{3})$ 分量之间满足 $[J_{1}, J_{2}] = J_{3}$。

证明：

写出角动量的分量式子
$$
J_{k}  = \epsilon_{ijk} r_{i} p_{k}
$$
所以
$$
\begin{gathered}
[J_{i}, J_{j}] = [\epsilon_{kli} r_{k} p_{l}, \epsilon_{mnj} r_{m} p_{n}] = \epsilon_{kli} \epsilon_{mnj} [r_{k} p_{l}, r_{m} p_{n}] \\ = 
\epsilon_{kli} \epsilon_{mnj} (\delta_{kn} p_{l} r_{m} - \delta_{lm} r_{k} p_{n}) \\=
\epsilon_{nli} \epsilon_{mnj} p_{l} r_{m} - \epsilon_{kmi} \epsilon_{mnj} r_{k} p_{n} \\=
(\delta_{lj} \delta_{im} - \delta_{lm} \delta_{ij}) p_{l} r_{m} - (\delta_{in} \delta_{kj} - \delta_{kn} \delta_{ij}) r_{k} p_{n} \\ = 
p_{j} r_{i} - \delta_{ij} p_{l} r_{l} - p_{i} r_{j}  + \delta_{ij} r_{k} p_{k} = r_{i} p_{j} - r_{j} p_{i}
\end{gathered}
$$
所以
$$
[J_{1}, J_{2}] = r_{1} p_{2} - r_{2} p_{1} = J_{3}
$$
7.13 在中心力场 $V(r) = -\frac{k}{r}$ 运动的质点，质量 $m$，动量 $p$，角动量 $J$，还有一个守恒量，拉普拉斯-龙格-楞次 (Laplace-Runge-Lenz) 矢量
$$
\vec{A} = \vec{p} \times \vec{J} - \frac{mk\vec{r}}{r}
$$

利用泊松括号证明该矢量是守恒量。

由于 $A$ 不显含 $t$ ，所以
$$
\dv{\vec{A}}{t} = \pdv{\vec{A}}{t} + [\vec{A}, H] = [\vec{A},H]
$$
由于
$$
H = \frac{p^{2}}{2m} - \frac{k}{r}
$$
所以
$$
[\vec{A}, H] = [\vec{p} \times \vec{J} - \frac{m k \vec{r}}{r}, \frac{p^{2}}{2m} - \frac{k}{r}]
$$
展开上述式子
$$
\begin{gathered}
[p^{2} \vec{r} - (\vec{p} \cdot \vec{r}) \vec{p} - \frac{mk \vec{r}}{r},\frac{p^{2}}{2m} - \frac{k}{r}] = [p^{2}, \frac{p^{2}}{2m}] \vec{r} + [\vec{r}, \frac{p^{2}}{2m}] p^{2} - [p^{2} \vec{r} , \frac{k}{r}] - [(\vec{p} \cdot \vec{r}) \vec{p}, \frac{p^{2}}{2m}] + [(\vec{p} \cdot \vec{r}) \vec{p}, \frac{k}{r}] \\ 
- [\frac{mk \vec{r}}{r}, \frac{p^{2}}{2m}] + [\frac{mk \vec{r}}{r}, \frac{k}{r}]
\end{gathered}
$$
做等价变换
$$
[,\frac{p^{2}}{2m}] = [, \frac{\vec{p} \cdot \vec{p}}{2m}] = [,\vec{p}] \cdot \frac{\vec{p}}{m}
$$
带入泊松括号的表达式
$$
[p^{2}, \frac{p^{2}}{2m}] = 0
$$

$$
[r_{i}, \frac{p^{2}}{2m}] = [r_{i}, p_{j}] \frac{p_{j}}{m} = \delta_{ij} \frac{p_{j}}{m} =\frac{p_{i}}{m}
$$

$$
\begin{gathered}
[p^{2} r_{i}, \frac{k}{r}] = [r_{i}, \frac{k}{r}] p^{2} + 2 p_{j} [p_{j}, \frac{k}{r}] r_{i} \\ = 
0 + \frac{2 p_{j} r_{j}}{r^{3}} k r_{i}
\end{gathered}
$$

$$
[(p_{j} r_{j}) p_{i}, \frac{p^{2}}{2m}] = [p_{j} r_{j} p_{i}, p_{k}] \frac{p_{k}}{m} = p_{j} p_{i} \delta_{jk} \frac{p_{k}}{m} = \frac{p^{2}}{m} p_{i}
$$

$$
[p_{j} r_{j} p_{i}, \frac{k}{r}] = \frac{k}{r^{2}}  (r_{j} p_{i} \frac{r_{j}}{r} + p_{j} r_{j} \frac{r_{i}}{r} )
$$

$$
[\frac{mk r_{i}}{r}, \frac{p^{2}}{2m}] = p_{j} k [\frac{r_{i}}{r}, p_{j}] = \frac{p_{i} k}{r} - \frac{k p_{j} r_{j} r_{i}}{r^{3}}
$$

$$
[\frac{mk r_{i}}{r}, \frac{k}{r}] = 0
$$

所以带入得到
$$
[A_{i}, H] = p^{2} \frac{p_{i}}{m} - \frac{2 p_{j} r_{j}}{r^{3}} k r_{i} - \frac{p^{2}}{m} p_{i} +\frac{k}{r^{2}}  (r p_{i} + p_{j} r_{j} \frac{r_{i}}{r}) - \frac{p_{i} k}{r} + \frac{k p_{j} r_{j} r_{i}}{r^{3}} = 0
$$
所以是守恒量

7.14 计算拉普拉斯-龙格-楞次矢量 $\mathbf{A}$ 各分量之间的泊松括号。
$$
\begin{gathered}
[A_{i}, A_{j}] = [\epsilon_{lmi} p_{l} J_{m} - \frac{mk r_{i}}{r}, \epsilon_{knj} p_{k} J_{n} - \frac{mk r_{j}}{r} ] \\ =
\epsilon_{lmi} \epsilon_{knj} [p_{l}J_{m}, p_{k} J_{n}] - mk \epsilon_{knj} [\frac{r_{i}}{r}, p_{k} J_{n}] - mk \epsilon_{lmi} [p_{l} J_{m}, \frac{r_{j}}{r}]
\end{gathered}
$$
第一项
$$
\epsilon_{lmi} \epsilon_{knj} [p_{l}J_{m}, p_{k} J_{n}] = -2mH \epsilon_{ijk} J_{k} - 2mk \frac{1}{r} \epsilon_{ijk} J_{k} + 2mk \left( \frac{r_{j}}{r} p_{i} - \frac{r_{i}}{r} p_{j} \right)
$$

第二项
$$
- mk \epsilon_{knj} [\frac{r_{i}}{r}, p_{k} J_{n}] = -2 mk \frac{1}{r} \epsilon_{ijk} J_{k} - 2 mk \frac{r_{j}}{r} p_{i} + 2 mk \frac{r_{i}}{r} p_{j}
$$

第三项
$$
- mk \epsilon_{lmi} [p_{l} J_{m}, \frac{r_{j}}{r}] = 2 mk \frac{1}{r} \epsilon_{ijk} J_{k} + 2 mk \frac{r_{j}}{r} p_{i} - 2 mk \frac{r_{i}}{r} p_{j}
$$

将三项相加，所有含 $\frac{mk}{r}$ 和 $r_{i} p_{j}$ 的项相互抵消，最终结果为
$$
[A_{i}, A_{j}] = -2mH \epsilon_{ijk} J_{k}
$$
其中 $H = \frac{p^{2}}{2m} - \frac{k}{r}$ 是系统的哈密顿量。

## 第13次作业

7.17 (1) 假设使下面变换在一阶近似下是正则变换
$$
q=Q+aQ^{2}+2bQP+cP^{2}
$$

$$
p=P+dQ^{2}+2eQP+fP^{2}
$$

找到小量 $a$, $b$, $c$, $d$, $e$, $f$ 应满足的条件。

利用 $\comm{q}{p} = 1$，所以
$$
\begin{gathered}
\comm{q}{p}_{QP} = \comm{Q+aQ^{2}+2bQP+cP^{2}}{P+dQ^{2}+2eQP+fP^{2}} \\ = 
\comm{Q}{P} + a\comm{Q^{2}}{P} + 2b \comm{QP}{P} + c \comm{P^{2}}{P} + d \comm{Q}{Q^{2}} + 2e \comm{Q}{QP} + f \comm{Q}{P^{2}}
\end{gathered}
$$
所以在一阶近似下要求满足
$$
a\comm{Q^{2}}{P} + 2b \comm{QP}{P} + c \comm{P^{2}}{P} + d \comm{Q}{Q^{2}} + 2e \comm{Q}{QP} + f \comm{Q}{P^{2}} = 0
$$

$$
\begin{gathered}
2a Q + 2b P + 2e Q + 2f P = 0 \\
(a + e) Q + (b + f) P = 0
\end{gathered}
$$

即 $a = -e, b = -f$

(2) 含非谐振项从而稍微偏离谐振动的哈密顿量为
$$
H=\frac{p^{2}}{2m}+\frac{1}{2}m\omega^{2}q^{2}+ \alpha q^{3}
$$

其中，$\alpha$ 是小量。通过（1）的正则变换，使新哈密顿量在二阶近似下不含非谐振项，即

$$
H^{*}=\frac{P^{2}}{2m}+\frac{1}{2} m \omega^{2} Q^{2}+ \text{二阶项}
$$

直接给出变换后哈密顿量的形式为
$$
H^{*} = \frac{(P+dQ^{2}+2eQP+fP^{2})^{2}}{2m} + \frac{1}{2} m \omega^{2} (Q+aQ^{2}+2bQP+cP^{2})^{2} + \alpha (Q+aQ^{2}+2bQP+cP^{2})^{3}
$$
展开后要哈密顿量没有三次方项
$$
\frac{P}{m} (d Q^{2} + 2e QP + f P^{2}) + m \omega^{2} Q (a Q^{2} + 2b QP + c P^{2}) + \alpha Q^{3} = 0
$$
所以
$$
a = - \frac{\alpha}{m \omega^{2}}
$$

$$
e = \frac{\alpha}{m \omega^{2}}
$$

$$
c = - \frac{2 \alpha}{m^{3} \omega^{4}}
$$

$$
b = d = f = 0
$$

(3) 利用新的正则变量求解，再通过正则变换，给出一阶近似下非谐振问题的解。

在新的正则变量下，正则方程的解为
$$
\begin{gathered}
P =- m \omega Q_{0} \sin (\omega t + \phi) \\
Q = Q_{0} \cos (\omega t + \phi)
\end{gathered}
$$
逆变换回去得到
$$
p = - m \omega Q_{0} \sin (\omega t + \phi) - \frac{2 \alpha Q_{0}^{2}}{\omega} \cos (\omega t + \phi) \sin (\omega t + \phi)
$$

$$
q = Q_{0} \cos (\omega t + \phi) - \frac{\alpha Q_{0}^{2}}{m \omega^{2}} (1 + \sin^{2} (\omega t + \phi))
$$

7.21 一维运动的质量 $m$ 的质点势能为
$$
V = V_{0} \tan^{2} \frac{\pi q}{a}
$$

其中 $V_{0}$, $a$ 是大于零的常量。

(1) 假设作用量和角变量分别为 $I$, $\Psi$，给出作用量 $I$ 的积分表示

先给出哈密顿量
$$
H  = \frac{p^{2}}{2m} + V_{0} \tan^{2} \frac{\pi q}{a}
$$
积分得到作用量
$$
I = \frac{1}{2 \pi} \oint p \, \dd{q} =\frac{2}{\pi} \int_{0}^{q_{0}} \sqrt{2 m E - 2m V_{0} \tan^{2} \frac{\pi q}{a}} \, \dd{q}
$$
(2) 用能量 $E$ 表示振动频率 $\omega$

$$
\frac{1}{\omega} = \frac{\sqrt{2m}}{\pi} \int_{0}^{q_{0}} \frac{\dd{q}}{\sqrt{E - V_{0} \tan^{2} \frac{\pi q}{a}}}
$$
所以
$$
\omega = \frac{\pi}{\sqrt{2m}} \frac{1}{\int_{0}^{q_{0}} \frac{\dd{q}}{\sqrt{E - V_{0} \tan^{2} \frac{\pi q}{a}}}} = \frac{2 \pi}{a} \sqrt{\frac{E + V_{0}}{2m}}
$$
(3) 给出哈密顿-雅可比方程的第二种形式，并假设此时新的正则变量刚好为作用量和角变量 $I$, $\Psi$，给出生成函数的积分形式
$$
E = \frac{1}{2m} \left(\dv{W}{q}\right)^{2} + V_{0} \tan^{2} \frac{\pi q}{a}
$$

$$
\dv{W}{q} = \pm \sqrt{2mE - 2m V_{0} \tan^{2} \frac{\pi q}{a}}
$$

所以
$$
W (q, I) = \pm \int \sqrt{2m E - 2m V_{0} \tan^{2} \frac{\pi q}{a}} \, \dd{q}
$$
(4) 给出角变量 $\Psi$ 与 $q$ 的关系

$$
\Psi = \pdv{W (q, I)}{I} = \pdv{W}{E} \dv{E}{I} = \arcsin(\sqrt{1 + \frac{V_{0}}{E}} \sin \frac{\pi q}{a})
$$
(5) 假设质点初始时刻在平衡位置，初速度 $v_{0}$，求解 $q(t)$

$$
q (t) = \frac{a}{\pi} \arcsin(\frac{\sin(\omega t + \phi_{0})}{\sqrt{1 + \frac{V_{0}}{E}}})
$$
