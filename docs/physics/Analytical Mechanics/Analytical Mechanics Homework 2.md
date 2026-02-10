# 分析力学 第2周作业

Chasse_neige

### 1.9
在无摩擦的桌面上, 一弹簧劲度系数为 $k$，一端固定在墙上, 另一端与一个质量为 $m$ 的物体相连,该物体又通过一连线与另一等质量物体相连,连线通过一设置在桌面缘上的滑轮, 使另一物体在竖直方向一起移动, 如图 1.12 所示。令 $x$ 为弹簧由其松弛状态的伸长量, 试用拉格朗日方程导出运动方程, 并设 $t=0$ 时, $x=0$, $\dot{x}=0$, 解出 $x=x(t)$ 的形式。

<img src="./Analytical Mechanics Homework 2.assets/image-20250923165854257.png" alt="image-20250923165854257">

$$
L = \frac{1}{2} 2m \dot{x}^{2} - (\frac{1}{2} k x^{2} - mgx) = m \dot{x}^{2}  - \frac{1}{2} k x^{2} + mgx
$$
带入拉格朗日方程
$$
\frac{d}{dt} 2m \dot{x} = -kx + mg \\
2m \ddot{x} = - kx + mg
$$

### 1.11

质量为 $M$, 倾角为 $\theta$ 的光滑斜面的底面放在光滑的水平面上, 有一质量为 $m$ 的小块从顶端沿此斜面滑下, 如图 1.8 所示。利用拉格朗日方程,给出小块相对斜面的加速度。

<img src="./Analytical Mechanics Homework 2.assets/image-20250923165912251.png" alt="image-20250923165912251">

假设大滑块质心的 $x$ 坐标为 $X$，小滑块质心相对大滑块质心在斜面上沿着平行斜面方向移动的广义坐标为$l$

拉格朗日量
$$
L = \frac{1}{2} M \dot{X}^{2} + \frac{1}{2} m ((\dot{X} + \dot{l} \cos \theta)^{2} + \dot{l} \sin \theta^{2} ) - mgl \sin \theta
$$
带入拉格朗日方程
$$
\frac{d}{dt} (M \dot{X} + m \dot{X} + m \dot{l} \cos \theta) = 0 \\
\frac{d}{dt} (m \dot{X} \cos \theta + m \dot{l}) = - mg \sin \theta
$$
即
$$
(M + m) \ddot{X} + m \cos \theta \ddot{l} = 0 \\
m \cos \theta \ddot{X} + m \ddot{l} = - mg \sin \theta
$$
解得小块相对斜面的加速度为
$$
\ddot{l} = - \frac{(M + m) g  \sin \theta}{M + m \sin^{2} \theta}
$$
以平行斜面向上为正方向

### 1.13

设质量为 $m$ 的质点受重力作用，且被约束在半顶角为 $\alpha$ 的倒立圆锥面内运动, 如图 1.10 所示。试以柱坐标中的 $r$, $\theta$ 为广义坐标, 用拉格朗日方程给出运动微分方程，并给出循环积分。

<img src="./Analytical Mechanics Homework 2.assets/image-20250923165926721.png" alt="image-20250923165926721">

拉格朗日量
$$
L = \frac{1}{2} m (\dot{r}^{2} + r^{2} \sin^{2} \alpha \dot{\theta}^{2}) - mg r \cos \alpha
$$
带入拉格朗日方程
$$
\frac{d}{dt} (m \dot{r}) = m \sin^{2} \alpha \dot{\theta}^{2} r - mg \cos \alpha \\
\frac{d}{dt} (m r^{2} \sin^{2} \alpha \dot{ \theta}) = 0
$$
得到
$$
g \cos \alpha + \ddot{r} - r \dot{\theta}^{2} \sin^{2} \alpha = 0 \\
2 \dot{r} \dot{\theta} + r \ddot{\theta} = 0
$$
注意到 $\theta$ 是循环坐标 ，所以存在循环积分
$$
\frac{\partial L}{\partial \dot{\theta}} = m r^{2} \sin^{2} \alpha \dot{ \theta}
$$

### 1.18

一质量为 $m$ 的质点的拉格朗日量为

$$
L= e^{\frac{\gamma t}{m}(T-V)}
$$

其中 $\gamma$ 是大于零的常量, $T=\frac{1}{2} m\left(\dot{x}^{2}+\dot{y}^{2}+\dot{z}^{2}\right)$, $V=V(x, y, z)$ 给出运动微分方程, 并描述这是什么系统。

带入拉格朗日方程
$$
\frac{d}{dt} (\gamma t \dot{x} e^{\frac{\gamma t}{m}(T-V)})  = - \frac{\gamma t}{m} \frac{\partial V}{\partial x} e^{\frac{\gamma t}{m}(T-V)} \\
\frac{d}{dt} (\gamma t \dot{y} e^{\frac{\gamma t}{m}(T-V)})  = - \frac{\gamma t}{m} \frac{\partial V}{\partial y} e^{\frac{\gamma t}{m}(T-V)} \\
\frac{d}{dt} (\gamma t \dot{z} e^{\frac{\gamma t}{m}(T-V)})  = - \frac{\gamma t}{m} \frac{\partial V}{\partial z} e^{\frac{\gamma t}{m}(T-V)} \\
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
\vec{R} = \frac{m_1 \vec{r}_1 + m_2 \vec{r}_2}{m_1 + m_2}, \quad \vec{r} = \vec{r}_1 - \vec{r}_2
$$
总质量 $M = m_1 + m_2$，约化质量 $\mu = \frac{m_1 m_2}{M}$。动能 $T$ 和势能 $V$ 表示为
$$
T = \frac{1}{2} M \dot{\vec{R}}^2 + \frac{1}{2} \mu \dot{\vec{r}}^2, \quad V = V(\vec{r})
$$
拉格朗日量 $L$ 为：
$$
L = T - V = \frac{1}{2} M \dot{\vec{R}}^2 + \frac{1}{2} \mu \dot{\vec{r}}^2 - V(\vec{r})
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
R = - \frac{\vec{P}^2}{M} + \left( \frac{1}{2} M \dot{\vec{R}}^2 + \frac{1}{2} \mu \dot{\vec{r}}^2 - V(\vec{r}) \right) = - \frac{\vec{P}^2}{M} + \frac{1}{2} M \dot{\vec{R}}^2 + \frac{1}{2} \mu \dot{\vec{r}}^2 - V(\vec{r})
$$
罗斯函数为
$$
R = - \frac{\vec{P}^2}{2M} + \frac{1}{2} \mu \dot{\vec{r}}^2 + V(\vec{r})
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
L=\frac{1}{2}m(\dot{\rho}^2+\rho^2\dot{\varphi}^2+\dot{z}^2)-V(\sqrt{\rho^2+z^2})
$$

另有一个转动坐标系，绕 $z$ 轴以角速度 $\omega$ 转动。若 $t=0$ 时两个坐标系重合，转动坐标系质点坐标为 $(\rho', \varphi', z')$。

(1) 给出转动坐标系坐标表示的拉格朗日量和循环积分；

在旋转系中，坐标与地面系之间的对应关系为
$$
\rho' = \rho \\
z' = z \\
\varphi' = \varphi - \omega t
$$
所以旋转系中的拉格朗日量可以写作
$$
L = \frac{1}{2} m ( \dot{\rho'}^2 + \rho^2 (\dot{\varphi'} + \omega)^2 + \dot{z'}^2 ) - V(\sqrt{\rho'^2 + z'^2})
$$
循环坐标为 $\varphi'$ 

循环积分为
$$
p_{\varphi'} = m \rho'^{2} (\dot{\varphi'} + \omega)
$$
(2) 给出拉格朗日方程；

$$
\frac{d}{dt} (m \dot{\rho'}) = \frac{p_{\varphi'}^{2}}{m \rho'^{3}} - \frac{\partial V}{\partial \rho'} \\
\frac{d}{dt} (m \dot{z'}) = - \frac{\partial V}{\partial z'}
$$
即
$$
m \ddot{\rho'} = \frac{p_{\varphi'}^{2}}{m \rho'^{3}} - \frac{\partial V}{\partial \rho'} \\
m \ddot{z'} = - \frac{\partial V}{\partial z'}
$$
也可以写为
$$
\ddot{\rho'} - \rho' \dot{\varphi'}^2 - 2\omega \rho' \dot{\varphi'} - \omega^2 \rho' + \frac{1}{m} \frac{\partial V}{\partial \rho'} = 0 \\
\rho' \ddot{\varphi'} + 2 \dot{\rho'} \dot{\varphi'} + 2 \dot{\rho'} \omega = 0 \\
\ddot{z'} + \frac{1}{m} \frac{\partial V}{\partial z'} = 0
$$
的形式。

(3) 考查此时的“虚拟力”的形式。

在转动坐标系中，运动方程出现额外项，对应虚拟力。其中

在 $\rho'$ 方程中，项 $-\omega^2 \rho'$ 对应离心加速度，离心力为 $m \omega^2 \rho'$，方向径向向外。

在 $\rho'$ 方程中，项 $-2\omega \rho' \dot{\varphi'}$ 对应科里奥利力的径向分量，科里奥利加速度径向分量为 $2\omega \rho' \dot{\varphi'}$。

在 $\varphi'$ 方程中，项 $2 \dot{\rho'} \omega$ 对应科里奥利力的横向分量，科里奥利加速度横向分量为 $-2\omega \dot{\rho'}$。

因此，虚拟力包括惯性离心力和科里奥利力，与经典力学中的形式一致。