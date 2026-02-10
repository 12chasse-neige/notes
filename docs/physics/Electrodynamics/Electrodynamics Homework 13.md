# 电动力学 第15周作业

Chasse_neige

### 1. 运动带电粒子的电磁场

运动带电粒子的描述，推迟效应，李纳-维谢尔势，电磁场，辐射功率及角分布 
作业：  

(a) 书7.7  

7.7 相对论性加速带电粒子的辐射场  

(1) 根据相对论协变的力学方程，证明相对论性加速带电荷 $q$ 的粒子的辐射场公式(1.17)用作用力表示为  
$$
\vec{E} = \frac{q}{4\pi \epsilon_0 m c^2 R} \left\{ \frac{\delta^3}{\gamma} \vec{e}_r \times [(\vec{e}_r - \vec{\beta}) \times \vec{F} - (\vec{\beta} \cdot \vec{F})(\vec{e}_r \times \vec{\beta})] \right\}_{\text{ret}}
$$
其中 $\delta = (1 - \vec{\beta} \cdot \vec{e}_r)^{-1}$，$\text{ret}$ 表示时刻 $t' = t - \frac{R}{c}$ 时的值。  
$$
\vec{E}_{radia} (\vec{r}, t) = \frac{q}{4 \pi \epsilon_{0} S_{ret}^{3}} \left\{ \vec{R} \times ((\vec{R} - R \vec{\beta}) \times \vec{a}) \right\}_{ret} = \frac{q}{4 \pi \epsilon_{0} R} \left\{ \delta^{3} \vec{e}_{r} \times ((\vec{e}_{r} - \vec{\beta}) \times \vec{a}) \right\}_{rev}
$$
带入
$$
\vec{F} = \frac{d \vec{p}}{dt} = \gamma m \vec{a} + \gamma^{3} m (\vec{\beta} \cdot \vec{a}) \vec{\beta}
$$
所以
$$
\frac{1}{\gamma m} \vec{e}_r \times [(\vec{e}_r - \vec{\beta}) \times \vec{F} - (\vec{\beta} \cdot \vec{F})(\vec{e}_r \times \vec{\beta})] \\ = 
\vec{e}_{r} \times \left((\vec{e}_{r} - \vec{\beta}) \times (\vec{a} + \gamma^{2} (\vec{\beta} \cdot \vec{a}) \vec{\beta}) - (\vec{\beta} \cdot (\vec{a} + \gamma^{2} (\vec{\beta} \cdot \vec{a}) \vec{\beta})) (\vec{e}_{r} \times \vec{\beta}) \right) \\ =
\vec{e}_{r} \times \left( (\vec{e}_{r} - \vec{\beta}) \times \vec{a} - (\vec{\beta} \cdot \vec{a}) (\vec{e}_{r} \times \vec{\beta}) + (\vec{\beta} \cdot \vec{a}) (\vec{e}_{r} \times \vec{\beta})) \right) = \vec{e}_{r} \times ((\vec{e}_{r} - \vec{\beta}) \times \vec{a})
$$
所以
$$
\frac{q}{4\pi \epsilon_0 m c^2 R} \left\{ \frac{\delta^3}{\gamma} \vec{e}_r \times [(\vec{e}_r - \vec{\beta}) \times \vec{F} - (\vec{\beta} \cdot \vec{F})(\vec{e}_r \times \vec{\beta})] \right\}_{\text{ret}} \\ = 
\frac{q}{4 \pi \epsilon_{0} R} \left\{ \delta^{3} \vec{e}_{r} \times ((\vec{e}_{r} - \vec{\beta}) \times \vec{a}) \right\}_{rev} = \vec{E}_{radia}
$$
(2) 利用公式 $(\vec{A} \times \vec{B})^2 = \vec{A}^2 \vec{B}^2 - (\vec{A} \cdot \vec{B})^2$，计算 $[(\vec{e}_r - \vec{\beta}) \times \vec{F}]^2$ 和 $[\vec{F} \cdot (\vec{e}_r \times \vec{\beta})]^2$
$$
[(\vec{e}_r - \vec{\beta}) \times \vec{F}]^2 = (\vec{e}_{r} - \vec{\beta})^{2} F^{2} - ((\vec{e}_{r} - \vec{\beta}) \cdot \vec{F})^{2} \\ =
(1 + \beta^{2} - 2 \vec{e}_{r} \cdot \vec{\beta}) F^{2} - (\vec{e}_{r} \cdot \vec{F})^{2} - (\vec{\beta} \cdot \vec{F})^{2} + 2 (\vec{e}_{r} \cdot \vec{F}) (\vec{\beta} \cdot \vec{F})
$$

$$
[\vec{F} \cdot (\vec{e}_r \times \vec{\beta})]^2 =  F^{2} |\vec{e}_{r} \times \vec{\beta}|^{2} - |\vec{F} \times (\vec{e}_{r} \times \vec{\beta})|^{2} = F^{2} (\beta^{2} - (\vec{e}_{r} \cdot \vec{\beta})^{2}) - |(\vec{F} \cdot \vec{\beta}) \vec{e}_{r} - (\vec{F} \cdot \vec{e}_{r}) \vec{\beta}|^{2} \\ =
F^{2} (\beta^{2} - (\vec{e}_{r} \cdot \vec{\beta})^{2}) - (\vec{F} \cdot \vec{\beta})^{2} - (\vec{F} \cdot \vec{e}_{r})^{2} \beta^{2} + 2 (\vec{e}_{r} \cdot \vec{F}) (\vec{\beta} \cdot \vec{F}) (\vec{e}_{r} \cdot \vec{\beta})
$$

(3) 利用上述公式，证明带电粒子的辐射功率的角分布公式(2.5)用作用力表示为  
$$
\frac{d P}{d \Omega} = \frac{q^2}{16 \pi^2 \epsilon_0 m^2 c^3} \frac{\delta^3}{\gamma^2} \left[ \vec{F}^2 - (\vec{\beta} \cdot \vec{F})^2 - \frac{\delta^2}{\gamma^2} (\vec{F} \cdot \vec{e}_r - \vec{F} \cdot \vec{\beta})^2 \right]
$$

证明
$$
\frac{dP}{d \Omega} = \frac{1}{\mu_{0}} (\vec{E} \times \vec{B}) \cdot \vec{e}_{r} R^{2} \frac{dt}{dt'} =  \frac{R^{2}}{\mu_{0} c} |\vec{E}_{radia}|^{2} \delta^{-1}  \\ = 
\frac{q^{2}}{16 \pi^{2} \epsilon_{0} m^{2} c^{3}} \left\{ \frac{\delta^{5}}{\gamma^{2}} \left| \vec{e}_r \times [(\vec{e}_r - \vec{\beta}) \times \vec{F} - (\vec{\beta} \cdot \vec{F})(\vec{e}_r \times \vec{\beta})] \right|^{2} \right\}_{\text{ret}} \\ =
\frac{q^{2}}{16 \pi^{2} \epsilon_{0} m^{2} c^{3}} \frac{\delta^{5}}{\gamma^{2}} \left( \left|(\vec{e}_r - \vec{\beta}) \times \vec{F} - (\vec{\beta} \cdot \vec{F})(\vec{e}_r \times \vec{\beta}) \right|^{2} - [\vec{F} \cdot (\vec{e}_r \times \vec{\beta})]^2 \right) \\ = 
\frac{q^{2}}{16 \pi^{2} \epsilon_{0} m^{2} c^{3}} \frac{\delta^{5}}{\gamma^{2}} ([(\vec{e}_r - \vec{\beta}) \times \vec{F}]^2 + (\vec{\beta} \cdot \vec{F})^{2} (\beta^{2} - (\vec{e}_{r} \cdot \vec{\beta})^{2}) - 2 (\vec{\beta} \cdot \vec{F}) ((\vec{e}_r - \vec{\beta}) \times \vec{F}) \cdot (\vec{e}_{r} \times \vec{\beta}) \\ - [\vec{F} \cdot (\vec{e}_r \times \vec{\beta})]^2) \\ = 
\frac{q^{2}}{16 \pi^{2} \epsilon_{0} m^{2} c^{3}} \frac{\delta^{5}}{\gamma^{2}} \left[ (1 - \vec{e}_{r} \cdot \vec{\beta})^{2} (\vec{F}^2 - (\vec{\beta} \cdot \vec{F})^2) - (1 - \beta^{2}) (\vec{F} \cdot \vec{e}_r - \vec{F} \cdot \vec{\beta})^2 \right] \\ = 
\frac{q^2}{16 \pi^2 \epsilon_0 m^2 c^3} \frac{\delta^3}{\gamma^2} \left[ \vec{F}^2 - (\vec{\beta} \cdot \vec{F})^2 - \frac{\delta^2}{\gamma^2} (\vec{F} \cdot \vec{e}_r - \vec{F} \cdot \vec{\beta})^2 \right]
$$
(b) 试由定义，$\frac{1}{J} = \int d^3x' \delta \left( r' - r_0\left(t - \frac{\|r-r'\|}{c}\right) \right)$ 证明：$J = 1 - \frac{\vec{R}^*}{R^*} \cdot \frac{\vec{v}^*}{c}$。并讨论 $J$ 的物理意义。若在介质中，式中 $c$ 应换为 $\frac{c}{n}$（$n$ 为介质的折射率），则 $J$ 有可能为$0$，它对应什么物理？  

证明，由三维 $\delta$ 函数的性质
$$
\delta (\vec{r}' - \vec{r}_{0} (t - \frac{|\vec{r} - \vec{r}'|}{c})) = \frac{\delta (\vec{r}')}{\|\nabla' (\vec{r}' - \vec{r}_{0} (t - \frac{|\vec{r} - \vec{r}'|}{c}))\|}
$$
所以
$$
J = ||\nabla' (\vec{r}' - \vec{r}_{0} (t - \frac{|\vec{r} - \vec{r}'|}{c}))|| = \left\|\overset{\leftrightarrow}{I} - \frac{\vec{R}^{*} \vec{v}^{*}}{c R^{*}} \right\|
$$
利用线性代数中的结论，对于 $A_{m \times n}$ 以及 $B_{n \times m}$ 来说
$$
\|I_{m} - AB \| = \|I_{n} - BA \|
$$
所以
$$
J = \left\|\overset{\leftrightarrow}{I} - \frac{\vec{R}^{*} \vec{v}^{*}}{c R^{*}} \right\| = 1 - \frac{\vec{R}^*}{R^*} \cdot \frac{\vec{v}^*}{c}
$$
当在介质中时
$$
J = 1 - \frac{\vec{R}^*}{R^*} \cdot \frac{n \vec{v}^*}{c}
$$
当 $n$ 取值大到 $J = 0$ 时，也就是粒子运动速度大于介质中光速，此时会发生切连科夫辐射，此时辐射强度集中在 $\cos \theta = \frac{c}{n v^{*}}$ 处。

(c) 试证任意运动的电磁场为
$$
\vec{E}(\vec{r}, t) = \frac{q}{4\pi\epsilon_0 S^{* 3}} \left( \vec{R}^* - \frac{R^* \vec{v}^*}{c} \right) \left(1 - \frac{v^2}{c^2}\right) + \frac{q}{4\pi\epsilon_0 c^2 S^{* 3}} \vec{R}^* \times \left[ \left( \vec{R}^* - \frac{R^* \vec{v}^*}{c} \right) \times \vec{a}^* \right]
$$

$$
\vec{B}(\vec{r}, t) = \frac{\vec{R}^*}{cR^*} \times \vec{E}(\vec{r}, t)
$$

证明

注意：一下推导中可以分解算符为
$$
\nabla = \nabla^{*} + \nabla t^{*} \frac{\partial}{\partial t^{*}} \\
\frac{\partial}{\partial t} = \frac{\partial t^{*}}{\partial t} \frac{\partial}{\partial t^{*}}
$$
由推迟时间定义 $t^* = t - \frac{R^*}{c}$，固定场点 $\vec{r}$，对 $t$ 求导：
$$
\frac{\partial t^*}{\partial t} = 1 - \frac{1}{c} \frac{\partial R^*}{\partial t}
$$
其中 $R^* = |\vec{r} - \vec{r}_0(t^*)|$，且：
$$
\frac{\partial R^*}{\partial t} = -\frac{\vec{R}^* \cdot \vec{v}^*}{R^*} \frac{\partial t^*}{\partial t}
$$
代入得：
$$
\frac{\partial t^*}{\partial t} = 1 + \frac{\vec{R}^* \cdot \vec{v}^*}{c R^*} \frac{\partial t^*}{\partial t} \implies \frac{\partial t^*}{\partial t} = \frac{R^*}{R^* - \frac{\vec{R}^* \cdot \vec{v}^*}{c}} = \frac{R^*}{S^*}
$$
$\nabla R^*$
$R^* = |\vec{r} - \vec{r}_0(t^*)|$，固定 $t$，对 $\vec{r}$ 求梯度：
$$
\nabla R^* = \frac{\vec{R}^*}{R^*} - \frac{\vec{R}^* \cdot \vec{v}^*}{R^*} \nabla t^*
$$
代入 $\nabla t^* = -\frac{1}{c} \nabla R^*$：
$$
\nabla R^* = \frac{\vec{R}^*}{R^*} + \frac{\vec{R}^* \cdot \vec{v}^*}{c R^*} \nabla R^* \implies \nabla R^* = \frac{\frac{\vec{R}^*}{R^*}}{1 - \frac{\vec{R}^* \cdot \vec{v}^*}{c R^*}} = \frac{\vec{R}^*}{S^*}
$$
$\nabla t^*$ 
由 $t^* = t - \frac{R^*}{c}$ 得：
$$
\nabla t^* = -\frac{1}{c} \nabla R^* = -\frac{1}{c} \frac{\vec{R}^*}{S^*}
$$
综上所述
$$
\nabla R^{*} = \frac{\vec{R}^{*}}{S^{*}} \\
\nabla t^{*} = - \frac{1}{c} \frac{\vec{R}^{*}}{S^{*}} \\
\frac{\partial R^{*}}{\partial t} = - \frac{\vec{R}^{*} \cdot \vec{v}^{*}}{S^{*}} \\
\frac{\partial t^{*}}{\partial t} = \frac{R^{*}}{S^{*}}
$$
所以由李纳维谢尔势
$$
\phi(\vec{r}, t) = \frac{q}{4\pi\epsilon_0} \frac{1}{S^*}
$$
$$
\vec{A}(\vec{r}, t) = \frac{\mu_0 q}{4\pi} \frac{\vec{v}^*}{S^*}
$$

$$
\vec{E} = -\nabla \phi - \frac{\partial \vec{A}}{\partial t}
$$



$-\nabla \phi$ 
$\phi = \frac{q}{4\pi\epsilon_0} (S^*)^{-1}$，先求 $\nabla S^*$：
$$
\nabla S^* = \nabla R^* - \frac{1}{c} \nabla (\vec{R}^* \cdot \vec{v}^*) = \frac{\vec{R}^*}{S^*} - \frac{\vec{v}^*}{c} + \frac{1}{c^2} (\vec{R}^* \cdot \vec{a}^* - v^{*2}) \frac{\vec{R}^*}{S^*}
$$
故：
$$
-\nabla \phi = \frac{q}{4\pi\epsilon_0} \frac{1}{(S^*)^2} \left[ \frac{\vec{R}^*}{S^*} - \frac{\vec{v}^*}{c} + \frac{1}{c^2} (\vec{R}^* \cdot \vec{a}^* - v^{*2}) \frac{\vec{R}^*}{S^*} \right]
$$
$-\frac{\partial \vec{A}}{\partial t}$
$\vec{A} = \frac{\mu_0 q}{4\pi} \frac{\vec{v}^*}{S^*}$，计算得：
$$
-\frac{\partial \vec{A}}{\partial t} = -\frac{q}{4\pi\epsilon_0 c^2} \frac{1}{(S^*)^2} \frac{R^*}{S^*} \left[ \vec{a}^* + \frac{\vec{v}^* (\vec{R}^* \cdot \vec{v}^*)}{(R^*)^2} - \frac{v^{*2}}{c} \frac{\vec{v}^*}{R^*} + \frac{\vec{v}^* (\vec{R}^* \cdot \vec{a}^*)}{c R^*} \right]
$$
自场项：
$$
\vec{E}_{\text{self}} = \frac{q}{4\pi\epsilon_0 S^{*3}} \left( \vec{R}^* - \frac{R^* \vec{v}^*}{c} \right) \left(1 - \frac{v^{2}}{c^2}\right)
$$
辐射项：
$$
\vec{E}_{\text{radia}} = \frac{q}{4\pi\epsilon_0 c^2 S^{*3}} \vec{R}^* \times \left[ \left( \vec{R}^* - \frac{R^* \vec{v}^*}{c} \right) \times \vec{a}^* \right]
$$
总电场：
$$
\vec{E}(\vec{r}, t) = \vec{E}_{\text{vel}} + \vec{E}_{\text{acc}} = \frac{q}{4\pi\epsilon_0 S^{* 3}} \left( \vec{R}^* - \frac{R^* \vec{v}^*}{c} \right) \left(1 - \frac{v^2}{c^2}\right) + \frac{q}{4\pi\epsilon_0 c^2 S^{* 3}} \vec{R}^* \times \left[ \left( \vec{R}^* - \frac{R^* \vec{v}^*}{c} \right) \times \vec{a}^* \right]
$$
磁场：
$$
\vec{B}(\vec{r}, t) = \nabla \times \vec{A} = \nabla^{*} \times \vec{A} + (\nabla t^{*}) \times \frac{\partial \vec{A}}{\partial t^{*}} = \nabla^{*} \times (\vec{v}^{*} \frac{\phi}{c^{2}}) + \frac{\partial t}{\partial t^{*}} (\nabla t^{*}) \times \frac{\partial \vec{A}}{\partial t}  \\ = (\nabla^{*} \phi) \times \frac{\vec{v}^{*}}{c^{2}} - \frac{\vec{R}^{*}}{c R^{*}} \times \frac{\partial \vec{A}}{\partial t}
$$
$$
\nabla^{*} \phi = \nabla^{*} \frac{q}{4\pi\epsilon_0} \frac{1}{S^*}  = - \frac{q}{4\pi\epsilon_0 S^{2*}} \nabla^{*} (R^{*} - \frac{\vec{R}^{*} \cdot \vec{v}^{*}}{c}) = - \frac{q}{4\pi\epsilon_0 S^{2*}} (\frac{\vec{R}^{*}}{R^{*}} - \frac{\vec{v}^{*}}{c})
$$

所以
$$
(\nabla^{*} \phi) \times \frac{\vec{v}^{*}}{c^{2}} = - \frac{q}{4\pi\epsilon_0 S^{2*}} \frac{\vec{R}^{*}}{R^{*}} \times \frac{\vec{v}^{*}}{c^{2}} = - \frac{\vec{R}^{*}}{cR^{*}} \times \frac{q \vec{v}^{*}}{4 \pi \epsilon_{0} c S^{2*}} = \frac{\vec{R}^{*}}{c R^{*}} \times (- \nabla \phi)
$$
所以
$$
\vec{B} = \frac{\vec{R}^{*}}{c R^{*}} \times (- \nabla \phi - \frac{\partial \vec{A}}{\partial t}) =  \frac{\vec{R}^{*}}{c R^{*}} \times \vec{E}
$$
(d) 书7.1, 7.3, 7.4  

7.1 电子的速度与加速度的夹角  

电子的速度 $v$ 与加速度 $\dot{v}$ 的夹角为 $\alpha$，证明 $v$ 与 $\dot{v}$ 平面内与 $\dot{v}$ 的夹角为 $\beta$ 的方向上无辐射，$\beta$ 由以下方程决定：  

$$
\sin \beta = \frac{v}{c} \sin \alpha
$$

证明
$$
\frac{d P}{d \Omega} (t') = \frac{q^{2}}{16 \pi^{2} \epsilon_{0} c^{3}} \frac{|\vec{e}_{r} \times ((\vec{e}_{r} - \vec{\beta}) \times \vec{a})|^{2}}{(1 - \vec{e}_{r} \cdot \vec{\beta})^{5}}
$$

$$
\vec{e}_{r} \times ((\vec{e}_{r} - \vec{\beta}) \times \vec{a}) = (\vec{e}_{r} \cdot \vec{a}) (\vec{e}_{r} - \vec{\beta}) - (1 - \vec{e}_{r} \cdot \vec{\beta}) \vec{a}
$$

没有辐射的方向满足
$$
(\vec{e}_{r} \cdot \vec{a}) (\vec{e}_{r} - \vec{\beta}) = (1 - \vec{e}_{r} \cdot \vec{\beta}) \vec{a} \\
(\vec{e}_{r} \cdot \vec{a}) (\vec{e}_{r} \cdot \vec{a} - \vec{\beta} \cdot \vec{a}) = (1 - \vec{e}_{r} \cdot \vec{\beta}) a^{2}
$$
假设 $\vec{e}_{r}$ 与 $\vec{a}$ 的夹角为 $\beta$ ，切该夹角的正方向与 $\alpha$ 定义相同
$$
\cos \beta (\cos \beta - \frac{v}{c} \cos \alpha) = 1 - \frac{v}{c} \cos (\beta - \alpha)
$$

$$
\cos^{2} \beta - \frac{v}{c} \cos \beta \cos \alpha = 1 - \frac{v}{c} (\cos \beta \cos \alpha + \sin \beta \sin \alpha)
$$

$$
\cos^{2} \beta = 1 - \frac{v}{c} \sin \beta \sin \alpha
$$

$$
\frac{v}{c} \sin \beta \sin \alpha = \sin^{2} \beta
$$

$$
\sin \beta = \frac{v}{c} \sin \alpha
$$

7.3 带电粒子的简谐振动  

有一带电荷 $q$ 的粒子沿 $z$ 轴作简谐振动 $z = z_0 e^{- i\omega t}$。设 $z_0 \omega \ll c$，求： 
(1) 它的辐射场和能流

利用偶极辐射的结论，假设场点和 $z$ 轴的夹角为 $\theta$
$$
\vec{E} \approx \frac{q}{4 \pi \epsilon_{0} c^{2} R} (\vec{e}_{r} \times (\vec{e}_{r} \times \vec{a}))
$$
其中 $R$ 和 $a$ 均为推迟时间时的结果。由于场点和粒子距离 $R >> z_{0}$ ，所以在远场处推迟时间可以近似为 $\frac{R}{c}$
$$
\vec{E} \approx \frac{q}{4 \pi \epsilon_{0} c^{2} R} (\vec{e}_{r} \times (\vec{e}_{r} \times \vec{a})) = \frac{q}{4 \pi \epsilon_{0} c^{2} R} (- \omega^{2} z_{0} e^{- i \omega (t - \frac{R}{c})}) (\vec{e}_{r} \times (\vec{e}_{r} \times \vec{e}_{z})) \\ = 
- \frac{\omega^{2} q z_{0} \sin \theta}{4 \pi \epsilon_{0} c^{2} R} e^{i \omega (\frac{R}{c} - t)} \vec{e}_{\theta}
$$

$$
\vec{B} \approx \frac{\vec{e}_{r}}{c} \times \vec{E} = - \frac{\omega^{2} q z_{0} \sin \theta}{4 \pi \epsilon_{0} c^{3} R} e^{i \omega (\frac{R}{c} - t)} \vec{e}_{\phi}
$$

$$
<\vec{S}> = \frac{1}{2 \mu_{0}} \vec{E} \times \vec{B}^{*} = \frac{\omega^{4} \mu_{0} q^{2} z_{0}^{2} \sin^{2} \theta}{32 \pi^{2} c R^{2}} \vec{e}_{r}
$$

(2) 它的自场，比较两者的不同

自场
$$
\vec{E} \approx \frac{q}{ 4 \pi \epsilon_{0} R^{3}} \vec{R}
$$

$$
\vec{B} \approx \frac{\mu_{0} q}{4 \pi R^{3}} (\vec{v} \times \vec{R})
$$

区别在于在远场处自场是近似不变的，而辐射场会随时间波动，并且辐射场在远处的能流积分不会衰减，而自场在远处无法产生明显效果

7.4 带电粒子的匀速率圆周运动  

带电荷 $q$ 的粒子在 $xy$ 平面上绕 $z$ 轴作匀速率圆周运动，角频率为 $\omega$，半径 $R_0$。设 $\omega R_0 \ll c$，试计算辐射场的频率和能流密度，讨论 $\theta = 0, \frac{\pi}{4}, \frac{\pi}{2}$ 及 $\pi$ 处电磁场的偏振。  

假设电子运动方程为 （取场点方向在 $x-y$ 平面上的投影为 $x$ 轴正方向）
$$
\vec{r} (t) = (R_{0} \cos \omega t, R_{0} \sin \omega t)
$$

$$
\vec{v} = (- \omega R_{0} \sin \omega t, \omega R_{0} \cos \omega t)
$$

$$
\vec{a}  = (- \omega^{2} R_{0} \cos \omega t, - \omega^{2} R_{0} \sin \omega t) = - \omega^{2} R_{0} \cos \theta \cos \omega t \vec{e}_{r} - \omega^{2} R_{0} \sin \theta \cos \omega t \vec{e}_{\theta} - \omega^{2} R_{0} \sin \omega t \vec{e}_{\phi}
$$

所以在远场近似下
$$
\vec{E}_{radia} = \frac{q}{4 \pi \epsilon_{0} c^{2} R} (\vec{e}_{r} \times (\vec{e}_{r} \times \vec{a})) = \frac{q}{4 \pi \epsilon_{0} c^{2} R} (\vec{e}_{r} \times (- \omega^{2} R_{0 }\cos \theta \cos \omega (t - \frac{R}{c}) \vec{e}_{\phi} + \omega^{2} R_{0} \sin \omega (t - \frac{R}{c} ) \vec{e}_{\theta})) \\ =
\frac{q \omega^{2} R_{0}}{4 \pi \epsilon_{0} c^{2} R} (\cos \theta \cos \omega (t - \frac{R}{c})  \vec{e}_{\theta} + \sin \omega (t - \frac{R}{c}) \vec{e}_{\phi}) = \frac{q R_0 \omega^2}{4\pi \epsilon_0 c^2 R} (\cos \theta \vec{e}_\theta + i \vec{e}_\phi) e^{i\left(\frac{\omega R - \omega t }{c}\right)}
$$

$$
\vec{B}_{radia} = \frac{\vec{e}_{r}}{c} \times \vec{E}_{radia} = \frac{q R_0 \omega^2}{4\pi \epsilon_0 c^3 R} (-i \vec{e}_\theta + \cos \theta \vec{e}_\phi) e^{i\left(\frac{\omega R - \omega t}{c}\right)}
$$

$$
<\vec{S}> = \frac{1}{2 \mu_{0}} \vec{E} \times \vec{B}^{*} = \frac{q^{2} R_{0}^{2} \omega^{4}}{32 \pi^{2} \epsilon_{0} c^{3} R^{2}} (\cos^{2} \theta + 1) \vec{e}_{r}
$$

当 $\theta = 0, \pi$ 时， 辐射为圆偏振  

当$\theta = \frac{\pi}{2}$ 时，辐射为线偏振  

其余情况为椭圆偏振 （$\theta = \frac{\pi}{4}$）

### 4. 带电粒子的电磁场对粒子本身的反作用
能量转化与守恒定律，牛顿定律，电子的经典运动方程，电磁质量，辐射阻尼力，谱线的自然宽度 

作业：书7.9 

7.9 带电粒子在磁场中的辐射  

一个质量为 $m$，电荷为 $q$ 的粒子在一个平面上运动，该平面垂直于均匀静磁场 $\vec{B}$。 
(1) 计算辐射功率，用 $m, q, B, \gamma$ 表示 ($E = \gamma m c^2$) 

角频率
$$
q v B = \gamma m v \omega
$$

$$
\omega = \frac{q B}{\gamma m}
$$

回旋半径
$$
R_{0} = \frac{v}{\omega} = \frac{m c}{q B} \sqrt{\gamma^{2} - 1}
$$
再推导相对论情形下的辐射功率表达式
$$
\vec{E} = \frac{q}{4 \pi \epsilon_{0} c^{2} R (1 - \frac{\vec{v} \cdot \vec{R} }{c R})^{3}} (\vec{e}_{r} \times ((\vec{e}_{r} - \frac{\vec{v}}{c}) \times \vec{a})))
$$

$$
\vec{a}  = (- \omega^{2} R_{0} \cos \omega t, - \omega^{2} R_{0} \sin \omega t) = - \omega^{2} R_{0} \cos \theta \cos \omega t \vec{e}_{r} - \omega^{2} R_{0} \sin \theta \cos \omega t \vec{e}_{\theta} - \omega^{2} R_{0} \sin \omega t \vec{e}_{\phi} 
$$

带入 $\vec{v} \cdot \vec{a} = 0$ 时的辐射功率公式
$$
P = \frac{q^{2} a^{2}}{6 \pi \epsilon_{0} c^{3}} \gamma^{4} = \frac{q^{2} \omega^{4} R_{0}^{2}}{6 \pi \epsilon_{0} c^{3}} \gamma^{4} = \frac{B^{2} q^{4}}{6 \pi \epsilon_{0} m^{2} c} (\gamma^{2} - 1)
$$
(2) 若在 $t = t_0$ 时，$E_0 = \gamma_0 m c^2$，求 $E(t)$
$$
\frac{d E}{dt} = - \frac{B^2 q^4}{6 \pi \epsilon_0 m^2 c} (\frac{E^{2}}{m^{2} c^{4}} - 1)
$$

$$
\frac{d E}{E^{2} - m^{2} c^{4}} = - \frac{B^2 q^4}{6 \pi \epsilon_0 m^{4} c^{5}} dt
$$

$$
\int_{\gamma_{0} m c^{2}}^{E} \frac{d E}{E - m c^{2}} - \frac{d E}{E + m c^{2}} = \int_{t_{0}}^{t} - \frac{B^2 q^4}{3 \pi \epsilon_0 m^{3} c^{3}} dt
$$

$$
E (t) = m c^{2} \left( \frac{1 + \frac{\gamma_0 - 1}{\gamma_0 + 1} e^{-\frac{B^2 q^4}{3 \pi \epsilon_0 m^{3} c^{3}} (t - t_{0})}}{1 - \frac{\gamma_0 - 1}{\gamma_0 + 1} e^{-\frac{B^2 q^4}{3 \pi \epsilon_0 m^{3} c^{3}} (t - t_{0})}} \right)
$$

(3) 若初始时刻粒子为非相对论性的，其动能为 $T_0$，求时刻 $t$ 的粒子动能 $T$

非相对论时
$$
P \approx \frac{q^{4} B^{2}}{6 \pi \epsilon_{0} c^{3} m^{2}} v^{2} = \frac{q^{4} B^{2}}{3 \pi \epsilon_{0} c^{3} m^{3}} T
$$

$$
\frac{d T}{dt} = - \frac{q^{4} B^{2}}{3 \pi \epsilon_{0} c^{3} m^{3}} T
$$

$$
\int_{T_{0}}^{T} \frac{d T}{T} = \int_{0}^{t}  - \frac{q^{4} B^{2}}{3 \pi \epsilon_{0} c^{3} m^{3}} dt
$$

$$
T (t) = T_0  e^{ -\frac{B^2 q^4}{3 \pi \epsilon_0 m^3 c^3} (t - t_0) }
$$

### 5. 电磁波的散射与吸收，介质的色散
自由电子对电磁波的散射，束缚电子对电磁波的散射，介质的色散，因果性与色散关系 

作业：书7.5, 7.6, 7.8

7.5 带电谐振子在磁场中的运动  

设有一各向同性的带电谐振子（无外场时粒子受弹性恢复力 $-m \omega_0^2 \vec{r}$ 作用），处于均匀恒定外磁场 $\vec{B}$ 中，假设粒子速度 $v \ll c$ 及辐射阻尼力可以忽略，求： 
(1) 振子运动的通解

在非相对论情形下
$$
\vec{f} = - m \omega_{0}^{2} \vec{r} + q \vec{v} \times \vec{B} = m \vec{a}
$$

$$
m \ddot{x} = - m \omega_{0}^{2} x + q B\dot{y} \\ 
m \ddot{y} = - m \omega_{0}^{2} y - q B \dot{x} \\
m \ddot{z} = - m \omega_{0}^{2} z
$$

采取复数法求解 （ $z = x + iy$ ）
$$
\ddot{z} = - \omega_{0}^{2} z - i 2\omega_{B} \dot{z}
$$
其中 $\omega_{B} = \frac{q B}{2m}$

方程通解为
$$
z = A e^{i (\sqrt{\omega_{0}^{2} + \omega_{B}^{2}} - \omega_{0}) t} + B e^{ - i (\sqrt{\omega_{0}^{2} + \omega_{B}^{2}} + \omega_{0}) t}
$$
所以振子运动的通解为 
$$
\vec{r} (t) =  A (\hat{x} - i \hat{y}) e^{- i (-\sqrt{\omega_{0}^{2} + \omega_{B}^{2}} + \omega_{0}) t} + B (\hat{x} + i \hat{y}) e^{ - i (\sqrt{\omega_{0}^{2} + \omega_{B}^{2}} + \omega_{0}) t} + C \hat{z} e^{- i \omega_{0} t}
$$
(2) 利用上题结果，讨论沿磁场方向和垂直于磁场方向上辐射场的频率和偏振。  

沿着磁场方向：因为 $z$ 方向振动平行于 $\vec{e}_{r}$ ，所以不会产生辐射场

利用7.4 的结果，可以把振动分解为频率为 $- \omega_{0} + \sqrt{\omega_{0}^{2} + \omega_{B}^{2}}$  和 $\omega_{0} + \sqrt{\omega_{0}^{2} + \omega_{B}^{{2}}}$ 的叠加，并且二者均为圆偏振，其中前者是左旋，后者是右旋

垂直磁场方向：此时在垂直于 $\vec{e}_{r}$ 的平面内振动的投影可以分解为

$z$ 方向的频率为 $\omega_{0}$ 的以及原来 $x- y$ 平面内频率为 $\omega_{0} - \sqrt{\omega_{0}^{2} + \omega_{B}^{2}}$  和 $\omega_{0} + \sqrt{\omega_{0}^{2} + \omega_{B}^{{2}}}$ 的叠加。三者均为线偏振，并且频率为 $\omega_{0}$ 的波的偏振方向与频率为 $\omega_{0} - \sqrt{\omega_{0}^{2} + \omega_{B}^{2}}$  和 $\omega_{0} + \sqrt{\omega_{0}^{2} + \omega_{B}^{{2}}}$ 的波是垂直的。

7.6 电子在均匀磁场中的运动  

设电子在均匀外磁场 $\vec{B}_0$ 中运动，取磁场 $\vec{B}$ 的方向为 $z$ 轴方向，已知 $t = 0$ 时，$x = R_0$，$y = z = 0$，$\dot{x} = \dot{z} = 0$，$\dot{y} = v_0$，设非相对论条件满足，求： 
(1) 考虑辐射阻尼力的电子运动轨道

对于题示这种准周期运动，可以采取平均辐射阻尼力 $\frac{e^{2}}{6 \pi \epsilon_{0} c^{3}} \dot{\vec{a}}$

此时运动方程变为
$$
\ddot{x} = \omega_{0} \dot{y} + \frac{\gamma}{\omega_{0}^{2}} \dddot{x} \\
\ddot{y} = - \omega_{0} \dot{x} + \frac{\gamma}{\omega_{0}^{2}} \dddot{y}
$$
其中 $\omega_{0} = \frac{q B}{m}, \gamma = \frac{e^{2} \omega_{0}^{2}}{6 \pi \epsilon_{0} m c^{3}}$

同样采取复数法求解，令 $z = x + iy$
$$
\ddot{z} = - i \omega_{0} \dot{z} + \frac{\gamma}{\omega_{0}^{2}} \dddot{z}
$$
特征方程
$$
\frac{\gamma}{\omega_{0}^{2}} \lambda^{2} - \lambda - i \omega_{0} = 0
$$

$$
\lambda = \frac{\omega_{0}^{2} \pm \omega_{0}^{2} \sqrt{1 + i 4 \frac{\gamma}{\omega_{0}}}}{2 \gamma}
$$

由于 $\gamma << 1$ ，所以
$$
\lambda \approx \frac{\omega_{0}^{2} - \omega_{0}^{2} (1 + i 2 \frac{\gamma}{\omega_{0}} + 2 \frac{\gamma^{2}}{\omega_{0}^{2}})}{2 \gamma} = - i \omega_{0} - \gamma
$$
所以带入初始条件，得到运动轨迹为
$$
x \approx \left( R_0 - \frac{v_0}{\omega_0} \right) + \frac{v_0}{\omega_0} e^{-\gamma t} \cos \omega_0 t \\
y \approx \frac{v_0}{\omega_0} e^{-\gamma t} \sin \omega_0 t
$$
(2) 电子单位时间内的辐射能量

单位时间内，带入运动方向与加速度方向垂直的结论
$$
P (t) = \frac{e^{2}}{6 \pi \epsilon_{0} c^{3}} a^{2} = \frac{e^{2}}{6 \pi \epsilon_{0} c^{3}} \omega_{0}^{2} v_{0}^{2} e^{- 2 \gamma t}
$$
7.8 等离子体折射率  

应用 §6 中导出介质色散的方法，推导等离子体折射率的公式(见第四章(9.29)式) 

 假设等离子体中单位体积的正负电荷数密度为 $N$ ，在打入电磁波 $\vec{E} = \vec{E}_{0} e^{-i \omega t}$ 时，电子运动方程可以写作
$$
\ddot{\vec{r}} = - \frac{e \vec{E}_{0}}{m} e^{- i \omega t}
$$
所以稳定时
$$
\vec{r} = \frac{e \vec{E}_{0}}{m \omega^{2}} e^{- i \omega t}
$$
极化强度
$$
\vec{P} = - \frac{N e^{2} \vec{E}_{0}}{m \omega^{2}} e^{- i \omega t}
$$

$$
\epsilon_{r} = 1 - \frac{N e^{2}}{m \epsilon_{0} \omega^{2}}
$$

$$
n(\omega) = \sqrt{1 - \frac{N e^2}{\epsilon_0 m \omega^2}}
$$

