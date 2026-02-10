# 数学物理方程 第12次作业

Chasse_neige

11.(1) 试求细长圆柱形铀块的临界半径

直接写出扩散方程：在铀块内
$$
\pdv{}{t} u - D \nabla^{2} u = \alpha u
$$
在铀块外
$$
\pdv{}{t} u - D \nabla^{2} u = 0
$$

临界状态对应稳态，即 $\pdv{}{t} u = 0$，因此方程简化为
铀块内： $\nabla^2 u + k^2 u = 0$，其中 $k^2 = \frac{\alpha}{D}$
铀块外： $\nabla^2 u = 0$

对于无限长圆柱，假设轴对称，$u$ 仅依赖于径向坐标 $r$。

由于稳态且轴对称，设 $u = R(r)$，则方程化为常微分方程：
铀块内： $\frac{1}{r} \frac{d}{dr} \left( r \frac{dR}{dr} \right) + k^2 R = 0$
铀块外： $\frac{1}{r} \frac{d}{dr} \left( r \frac{dR}{dr} \right) = 0$


铀块内方程为零阶贝塞尔方程，其解为：
$$
R_{\text{in}}(r) = A J_0(kr) + B N_0(kr)
$$
  由于 $r=0$ 处有限，$N_0$ 发散，故 $B=0$，因此：
$$
R_{\text{in}}(r) = A J_0(kr)
$$
铀块外方程积分得：
$$
R_{\text{out}}(r) = C \ln r + D
$$

待定系数，边界条件

1. $r \to \infty$ 时，$u \to 0$，代入外域解得 $C=0, D=0$，故 $R_{\text{out}}(r)=0$。
2. 在 $r=R$ 处，$u$ 连续： $A J_0(kR) = 0$

由于 $A \neq 0$（否则平凡解），必有：
$$
J_0(kR) = 0
$$


零阶贝塞尔函数 $J_0$ 的第一个正零点为 $\mu_{1}^{(0)} \approx 2.4048$，因此临界半径 $R_c$ 满足：
$$
k R_c = \mu_{1}^{(0)} \quad \Rightarrow \quad R_c = \frac{\mu_{1}^{(0)}}{k} = \mu_{1}^{(0)} \sqrt{\frac{D}{\alpha}}
$$


(2) 试求球形铀块的临界半径

设 $u = R(r)$，球坐标下拉普拉斯算子为
$$
\nabla^2 u = \frac{1}{r^2} \frac{d}{dr} \left( r^2 \frac{dR}{dr} \right)
$$
铀块内方程： $\frac{1}{r^2} \frac{d}{dr} \left( r^2 \frac{dR}{dr} \right) + k^2 R = 0$
铀块外方程： $\frac{1}{r^2} \frac{d}{dr} \left( r^2 \frac{dR}{dr} \right) = 0$


铀块内方程可化简：令 $R(r) = \frac{v (r)}{r}$，代入得 $v'' + k^2 v = 0$，解为 $v = A \sin(kr) + B \cos(kr)$，因此
$$
R_{\text{in}}(r) = A \frac{\sin(kr)}{r} + B \frac{\cos(kr)}{r}
$$
  由于 $r=0$ 处有限，故 $B=0$，所以
$$
R_{\text{in}}(r) = A \frac{\sin(kr)}{r}
$$
铀块外方程积分得
$$
R_{\text{out}}(r) = \frac{C}{r} + D
$$

待定系数，边界条件

1. $r \to \infty$ 时，$u \to 0$，得 $D=0$，故 $R_{\text{out}}(r) = \frac{C}{r}$
2. 在 $r=R$ 处，$u$ 连续： $A \frac{\sin(kR)}{R} = \frac{C}{R}$，即 $C = A \sin(kR)$

同样得到临界半径对应径向节点，所以
$$
k R_c = \pi \quad \Rightarrow \quad R_c = \frac{\pi}{k} = \pi \sqrt{\frac{D}{\alpha}}
$$

13.半径为 $a$ 的无限长圆柱体, 侧面保持温度为 $u_{0} \cos 2 \varphi \sin \omega t$, 初始温度为 $0$, 试求其温度分布以及随时间的变化

热传导方程
$$
\frac{\partial u}{\partial t} = \kappa \nabla^2 u
$$
其中 $\kappa$ 为热扩散系数。对于无限长圆柱，$u$ 与 $z$ 无关，在柱坐标下
$$
\nabla^2 u = \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial u}{\partial r} \right) + \frac{1}{r^2} \frac{\partial^2 u}{\partial \varphi^2}
$$
边界条件：在 $r=a$ 处，$u(a, \varphi, t) = u_0 \cos 2\varphi \sin \omega t$
初始条件：$u(r, \varphi, 0) = 0$

首先利用函数齐次化方程
$$
u(r, \varphi, t) = v(r, \varphi, t) + u_{0} \frac{r^{2}}{a^{2}} \cos 2 \varphi \sin \omega t
$$
其中 $v(r, \varphi, t)$ 满足
$$
\pdv{}{t} v = - \omega u_{0} \frac{r^{2}}{a^{2}} \cos 2 \varphi \cos \omega t  + \kappa \nabla^{2} v\\
v (a, \varphi, t) = 0
$$
利用扩散方程的本征函数展开
$$
v_{n} (r, \varphi, t) = J_{2} \left(\mu_{n}^{(2)} \frac{r}{a}\right) \cos 2 \varphi (A_{n} \cos \omega t + B_{n} \sin \omega t)
$$
所以
$$
\frac{r^{2}}{a^{2}} = \sum_{n = 0}^{\infty} \frac{2}{a^{2} J'^{2}_{2} (\mu_{n}^{(2)})} \frac{a}{\mu_{n}^{(2)}} J_{3} (\mu_{n}^{(2)}) J_{2} \left(\mu_{n}^{(2)} \frac{r}{a}\right)
$$
 得到
$$
- \omega A_{n} \sin \omega t + \omega B_{n} \cos \omega t = - \frac{2 u_{0} J_{3} (\mu_{n}^{(2)})}{\mu_{n}^{(2)} J'^{2}_{2} (\mu_{n}^{(2)})} \omega \cos \omega t - \kappa \frac{{\mu_{n}^{(2)}}^{2}}{a^{2}} (A_{n} \cos \omega t + B_{n} \sin \omega t)
$$
所以
$$
A_{n} = - \frac{\frac{2 \omega u_{0} J_{3} (\mu_{n}^{(2)})}{\mu_{n}^{(2)} J'^{2}_{2} (\mu_{n}^{(2)})}}{\frac{\omega^{2} a^{2}}{\kappa {\mu_{n}^{(2)}}^{2}} + \kappa\frac{{\mu_{n}^{(2)}}^{2}}{a^{2}}}
$$

$$
B_{n} = - \frac{\frac{2 \omega^{2} a^{2} u_{0} J_{3} (\mu_{n}^{(2)})}{\kappa {\mu_{n}^{(2)}}^{3} J'^{2}_{2} (\mu_{n}^{(2)})}}{\frac{\omega^{2} a^{2}}{\kappa {\mu_{n}^{(2)}}^{2}} + \kappa\frac{{\mu_{n}^{(2)}}^{2}}{a^{2}}}
$$

最终解为
$$
u(r, \varphi, t) = u_{0} \frac{r^{2}}{a^{2}} \cos 2 \varphi \sin \omega t  - \frac{\frac{2 \omega u_{0} J_{3} (\mu_{n}^{(2)})}{\mu_{n}^{(2)} J'^{2}_{2} (\mu_{n}^{(2)})}}{\frac{\omega^{2} a^{2}}{\kappa {\mu_{n}^{(2)}}^{2}} + \kappa\frac{{\mu_{n}^{(2)}}^{2}}{a^{2}}}\sum_{n = 0}^{\infty} J_{2} \left(\mu_{n}^{(2)} \frac{r}{a}\right) \cos 2 \varphi  \left(\cos \omega t - e^{- \kappa \frac{{\mu_{n}^{(2)}}^{2}}{a^{2}} t} + \frac{\omega a^{2}}{\kappa {\mu_{n}^{(2)}}^{2}} \sin \omega t\right)
$$
14.半径为 $a$ 的导体球, 初始温度为 $u_{0}$, 球面温度为 $0$, 试求球内温度的分布以及随时间的变化

热传导方程
$$
\frac{\partial u}{\partial t} = \kappa \nabla^2 u
$$
球对称下，$u = u(r, t)$，拉普拉斯算子为
$$
\nabla^2 u = \frac{1}{r^2} \frac{\partial}{\partial r} \left( r^2 \frac{\partial u}{\partial r} \right)
$$
边界条件：在 $r=a$ 处，$u(a, t) = 0$
初始条件：$u(r, 0) = u_0$

令 $u(r, t) = \frac{v(r, t)}{r}$，代入方程得
$$
\frac{\partial v}{\partial t} = \kappa \frac{\partial^2 v}{\partial r^2}
$$
边界条件变为：$v(0, t)=0$（因 $u$ 有限），$v(a, t)=0$
初始条件：$v(r, 0) = r u_0$

分离变量：设 $v(r, t) = R(r) T(t)$，代入得
$$
T' + \kappa \lambda T = 0, \quad R'' + \lambda R = 0
$$
由边界条件 $R(0)=0, R(a)=0$，解得
$$
R_n(r) = \sin\left( \frac{n\pi r}{a} \right), \quad \lambda_n = \left( \frac{n\pi}{a} \right)^2, \quad n=1,2,3,\dots
$$
时间部分：$T_n(t) = e^{-\kappa \lambda_n t}$

所以
$$
v(r, t) = \sum_{n=1}^{\infty} B_n \sin\left( \frac{n\pi r}{a} \right) e^{-\kappa \left( \frac{n\pi}{a} \right)^2 t}
$$


由初始条件 $v(r, 0) = r u_0$
$$
\sum_{n=1}^{\infty} B_n \sin\left( \frac{n\pi r}{a} \right) = r u_0
$$
利用正弦级数展开
$$
B_n = \frac{2}{a} \int_0^a r u_0 \sin\left( \frac{n\pi r}{a} \right) dr
$$
计算积分
$$
\int_0^a r \sin\left( \frac{n\pi r}{a} \right) dr = \frac{a^2}{n\pi} (-1)^{n+1}
$$
所以
$$
B_n = \frac{2u_0 a}{n\pi} (-1)^{n+1}
$$

球内温度分布为
$$
u(r, t) = \frac{v(r, t)}{r} = \frac{2u_0 a}{\pi r} \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} \sin\left( \frac{n\pi r}{a} \right) e^{-\kappa \frac{n^2 \pi^2}{a^2} t}
$$



