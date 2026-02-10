# 电动力学 第13周作业

Chasse_neige

### 5. 拉普拉斯方程,分离变量法

书2.2, 2.4, 2.18

2.2 在均匀外电场中置入半径为 $R_0$ 的导体球，试用分离变数法求下列两种情况的电势：

(1) 导体球上接有电池，使球与地保持电势差 $\Phi_0$；

假设球心在垂直电场方向上到无穷远处的电势为 $\phi_{0}$ ，均匀外电场大小为 $E_{0}$ ，位矢与外电场夹角为 $\theta$
$$
\phi (r, \theta) = \sum_{n} (A_{n} r^{n} + B_{n} \frac{1}{r^{n + 1}}) P_{n} (\cos \theta)
$$
保留 $n = 0$ 以及 $n = 1$ 项
$$
\phi (r, \theta) = A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta
$$
带入 $\theta = \frac{\pi}{2}, r \to \infty, \phi = \phi_{0}$，所以 $A_{0} = \phi _{0}$

当 $r = R_{0}$ 时，$\phi = \Phi_{0}$ ，所以 $A_{1} R_{0} + \frac{B_{1}}{R_{0}^{2}} = 0$
$$
A_{0} + \frac{B_{0}}{R_{0}} = \Phi_{0}
$$

$$
B_{0} = R_{0} (\Phi_{0} - \phi_{0})
$$

再利用电场定出剩余系数
$$
\vec{E} = - \nabla \phi = - \hat{r} \frac{\partial}{\partial r} (A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta) - \frac{\hat{\theta}}{r} \frac{\partial}{\partial \theta} (A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta) \\ = 
\frac{B_{0}}{r^{2}} \hat{r} - A_{1} \cos \theta \hat{r} + \frac{2 B_{1}}{r^{3}} \cos \theta \hat{r} + \frac{1}{r} (A_{1} r + \frac{B_{1}}{r^{2}}) \sin \theta \hat{\theta} \\ =
\frac{R_{0} (\Phi_{0} - \phi_{0})}{r^{2}} \hat{r} - A_{1} \cos \theta \hat{r} + A_{1} \sin \theta \hat{\theta} + \frac{2 B_{1}}{r^{3}} \cos \theta \hat{r} + \frac{B_{1}}{r^{3}} \sin \theta \hat{\theta}
$$
当 $r \to \infty, \theta  = 0$ 时，电场大小为 $E_{0}$ ，所以 
$$
A_{1} = - E_{0}
$$

$$
- E_{0} R_{0} + \frac{B_{1}}{R_{0}^{2}} = 0
$$

$$
B_{1} = E_{0} R_{0}^{3}
$$

所以电势分布为
$$
\phi (r, \theta) = \phi_{0} + \frac{R_{0}(\Phi_{0} - \phi_{0})}{r} - E_{0} r \cos \theta + \frac{E_{0} R_{0}^{3}}{r^{2}} \cos \theta \qquad (r > R_{0})
$$
(2) 导体球上带总电荷 $Q$。

假设球心在垂直电场方向上到无穷远处的电势为 $\phi_{0}$ ，均匀外电场大小为 $E_{0}$ ，位矢与外电场夹角为 $\theta$

同样保留球坐标下拉普拉斯方程解的前两项

保留 $n = 0$ 以及 $n = 1$ 项
$$
\phi (r, \theta) = A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta
$$
带入 $\theta = \frac{\pi}{2}, r \to \infty, \phi = \phi_{0}$，所以 $A_{0} = \phi _{0}$

当 $r = R_{0}$ 时，$\phi$ 为常数 ，所以 $A_{1} R_{0} + \frac{B_{1}}{R_{0}^{2}} = 0$

再利用电场定出剩余系数
$$
\vec{E} = - \nabla \phi = - \hat{r} \frac{\partial}{\partial r} (A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta) - \frac{\hat{\theta}}{r} \frac{\partial}{\partial \theta} (A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta) \\ = 
\frac{B_{0}}{r^{2}} \hat{r} - A_{1} \cos \theta \hat{r} + \frac{2 B_{1}}{r^{3}} \cos \theta \hat{r} + \frac{1}{r} (A_{1} r + \frac{B_{1}}{r^{2}}) \sin \theta \hat{\theta} \\ =
\frac{B_{0}}{r^{2}} \hat{r} - A_{1} \cos \theta \hat{r} + A_{1} \sin \theta \hat{\theta} + \frac{2 B_{1}}{r^{3}} \cos \theta \hat{r} + \frac{B_{1}}{r^{3}} \sin \theta \hat{\theta}
$$
当 $r \to \infty, \theta  = 0$ 时，电场大小为 $E_{0}$ ，所以 
$$
A_{1} = - E_{0}
$$

$$
- E_{0} R_{0} + \frac{B_{1}}{R_{0}^{2}} = 0
$$

$$
B_{1} = E_{0} R_{0}^{3}
$$

因为导体球表面带电量为 $Q$ ，所以
$$
Q = \epsilon_{0} \oint d \vec{S} \cdot \vec{E} = \epsilon_{0} \oint d S (\frac{B_{0}}{R_{0}^{2}}  - A_{1} \cos \theta) 
$$

$$
Q = \epsilon_{0} 4 \pi B_{0}
$$

$$
B_{0} = \frac{Q}{4 \pi \epsilon_{0}}
$$

所以电势分布为
$$
\phi (r, \theta) = \phi_{0} + \frac{Q}{4 \pi \epsilon_{0} r} - E_{0} r \cos \theta + \frac{E_{0} R_{0}^{3}}{r^{2}} \cos \theta \qquad (r > R_{0})
$$

2.4 均匀介质球(电容率为 $\varepsilon_1$)的中心置一自由电偶极子 $\vec{p}_t$，球外充满了另一种介质(电容率为 $\varepsilon_2$)，求空间各点的电势和极化电荷分布。

提示：同上题，$\phi = \frac{\vec{p}_t \cdot \vec{r}}{4\pi\epsilon_1 r^3} + \phi'$，而 $\phi'$ 满足拉普拉斯方程。
$$
\phi' (r, \theta) = \sum_{n} (A_{n} r^{n} + B_{n} \frac{1}{r^{n + 1}}) P_{n} (\cos \theta)
$$
保留前两项

由于 $\phi'$ 在原点处不发散，所以在 $r < R_{0}$ 区域
$$
\phi' (r, \theta) = A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta
$$
$$
B_{0} = B_{1} = 0
$$

电场
$$
\vec{E} = - \nabla (\phi' + \frac{\vec{p}_t \cdot \vec{r}}{4\pi\epsilon_1 r^3}) \\ =
- \hat{r} \frac{\partial}{\partial r} (A_{0} + A_{1} r \cos \theta + \frac{p_{t} \cos \theta}{4 \pi \epsilon_{1} r^{2}}) - \frac{\hat{\theta}}{r} \frac{\partial}{\partial \theta} (A_{0} + A_{1} r + \cos \theta + \frac{p_{t} \cos \theta}{4 \pi \epsilon_{1} r^{2}}) \\ = 
- A_{1} \cos \theta \hat{r} + A_{1} \sin \theta \hat{\theta} + \frac{p_{t}}{2 \pi \epsilon_{1} r^{3}} \cos \theta \hat{r} + \frac{p_{t}}{4 \pi \epsilon_{1} r^{3}} \sin \theta \hat{\theta}
$$


由于无穷远处电势为0，所以在 $r > R_{0}$ 区域
$$
\phi (r, \theta) = C_{0} + \frac{D_{0}}{r} + (C_{1} r + \frac{D_{1}}{r^{2}}) \cos \theta
$$

$$
C_{0} = C_{1} = 0
$$

再利用电场确定剩余系数
$$
\vec{E}  = - \nabla \phi = - \hat{r} \frac{\partial}{\partial r} (\frac{D_{0}}{r} + \frac{D_{1}}{r^{2}} \cos \theta) - \frac{\hat{\theta}}{r} \frac{\partial}{\partial \theta} (\frac{D_{0}}{r} + \frac{D_{1}}{r^{2}} \cos \theta) \\ =
\frac{D_{0}}{r^{2}} \hat{r} + \frac{2 D_{1}}{r^{3}} \cos \theta \hat{r} + \frac{D_{1}}{r^{3}} \sin \theta \hat{\theta}
$$
在 $r = R_{0}$ 处电势连续
$$
A_{0} = \frac{D_{0}}{R_{0}} \\ 
A_{1} R_{0} + \frac{p_{t}}{4 \pi \epsilon_{1} R_{0}^{2}} = \frac{D_{1}}{R_{0}^{2}}
$$
在$r = R_{0}$ 处电场强度切向连续
$$
A_{1} + \frac{p_{t}}{4 \pi \epsilon_{1} R_{0}^{3}} = \frac{D_{1}}{R_{0}^{3}}
$$
在$r = R_{0}$ 处电位移矢量法向连续
$$
\epsilon_{1} B_{0} = \epsilon_{2} D_{0} = 0\\ 
\epsilon_{1} (\frac{p_{t}}{2 \pi \epsilon_{1} R_{0}^{3}} - A_{1}) = \epsilon_{2} \frac{2 D_{1}}{R_{0}^{3}}
$$
可以解出
$$
A_{0} = D_{0} = 0 \\
A_{1} = \frac{(\epsilon_{1} - \epsilon_{2}) p_{t}}{2 \pi \epsilon_{1} (\epsilon_{1} + 2 \epsilon_{2}) R_{0}^{3}} \\ 
D_{1} = \frac{3 p_{t}}{4 \pi (\epsilon_{1} + 2 \epsilon_{2})}
$$
所以电势分布为
$$
\phi = 
\begin{cases} 
\frac{3(\vec{p}_t \cdot \vec{r})}{4\pi(\epsilon_1 + 2\epsilon_2) r^{3}}& (r > R_{0}) \\ 
\frac{\vec{p}_t \cdot \vec{r}}{4\pi\epsilon_1 r^{3}} + \frac{2(\epsilon_1 - \epsilon_2)(\vec{p}_t \cdot \vec{r})}{4\pi \epsilon_1 (\epsilon_1 + 2\epsilon_2) R_{0}^{3}} & (r < R_0)
\end{cases}
$$
极化电荷分布

球心处有极化偶极子 $\vec{p} = \left( \frac{\varepsilon_0}{\varepsilon_1} - 1 \right) \vec{p}_t$

球面上有极化面电荷 $\sigma_p = \frac{3(\varepsilon_1 - \varepsilon_2)\varepsilon_0 \vec{p}_t}{2\pi\varepsilon_1 (\varepsilon_1 + 2\varepsilon_2)R_0^3} \cos \theta$

2.18 一半径为 $R_0$ 的球面，在球坐标 $0<\theta<\frac{\pi}{2}$ 的半球面上电势为 $\phi_0$，在 $\frac{\pi}{2}<\theta<\pi$ 的半球面上电势为 $- \phi_0$，求空间各点电势。
$$
\phi (r, \theta) = \sum_{n} (A_{n} r^{n} + B_{n} \frac{1}{r^{n + 1}}) P_{n} (\cos \theta)
$$
分为 $r < R_{0}$ 以及 $r > R_{0}$  两块空间求解

对于 $r < R_{0}$ 

由于电势在球心处不发散，所以 $B_{n} = 0$
$$
\phi (r, \theta) = \sum_{n} A_{n} r^{n} P_{n} (\cos \theta)
$$
利用勒让德多项式的正交性
$$
\int_{0}^{\pi} \phi (R_{0}, \theta) P_{n} (\cos \theta) \sin \theta d \theta \\ =
\int_{-1}^{0} - \phi_{0} P_{n} (x) d x + \int_{0}^{1} \phi_{0} P_{n} (x) d x = (-1)^{n + 1} \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} + \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} \\ = 
\begin{cases}
0 & (n \text{是偶数}) \\
2 \phi_{0} \frac{P_{n - 1} (0) - P_{n + 1} (0)}{2 n + 1} & (n \text{是奇数})
\end{cases}
$$
所以
$$
\int_{-1}^{1} A_{n} R_{0}^{n} P_{n}^{2} (x) d x =
\begin{cases}
0 & (n \text{是偶数}) \\
2 \phi_{0} \frac{P_{n - 1} (0) - P_{n + 1} (0)}{2 n + 1} & (n \text{是奇数})
\end{cases}
$$
即 $n$ 是奇数时
$$
A_{n} = \frac{\phi_{0}}{R_{0}^{n}} (P_{n - 1} (0) - P_{n + 1} (0)) \\ = 
(-1)^{\frac{n - 1}{2}} \frac{\phi_{0}}{R_{0}^{n}} \frac{(n - 2)!!}{(n + 1)!!} (2n + 1)
$$
所以
$$
\phi (r, \theta) = \sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{r}{R_{0}} \right)^{2n + 1} P_{2n + 1} (\cos \theta)
$$
对于 $r > R_{0}$ 

由于电势在无穷远处不发散，所以 $A_{n} = 0$
$$
\phi (r, \theta) = \sum_{n} \frac{B_{n}}{r^{n + 1}} P_{n} (\cos \theta)
$$
利用勒让德多项式的正交性
$$
\int_{0}^{\pi} \phi (R_{0}, \theta) P_{n} (\cos \theta) \sin \theta d \theta \\ =
\int_{-1}^{0} - \phi_{0} P_{n} (x) d x + \int_{0}^{1} \phi_{0} P_{n} (x) d x = (-1)^{n + 1} \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} + \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} \\ = 
\begin{cases}
0 & (n \text{是偶数}) \\
2 \phi_{0} \frac{P_{n - 1} (0) - P_{n + 1} (0)}{2 n + 1} & (n \text{是奇数})
\end{cases}
$$
所以
$$
\int_{-1}^{1} \frac{B_{n}}{R_{0}^{n + 1}} P_{n}^{2} (x) d x =
\begin{cases}
0 & (n \text{是偶数}) \\
2 \phi_{0} \frac{P_{n - 1} (0) - P_{n + 1} (0)}{2 n + 1} & (n \text{是奇数})
\end{cases}
$$
即 $n$ 是偶数时
$$
B_{n} = \phi_{0} R_{0}^{n + 1} (P_{n - 1} (0) - P_{n + 1} (0)) \\ = 
(-1)^{\frac{n - 1}{2}} \phi_{0} R_{0}^{n + 1} \frac{(n - 2)!!}{(n + 1)!!} (2 n + 1)
$$
所以
$$
\phi (r, \theta) = \sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{R_{0}}{r} \right)^{2n + 2} P_{2n + 1} (\cos \theta)
$$
所以电势分布为
$$
\phi (r, \theta) = 
\begin{cases}
\sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{r}{R_{0}} \right)^{2n + 1} P_{2n + 1} (\cos \theta) \qquad (r < R_{0}) \\
\sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{R_{0}}{r} \right)^{2n + 2} P_{2n + 1} (\cos \theta) \qquad (r > R_{0})
\end{cases}
$$
提示：
$$
\int_{0}^{1} P_n(x) dx = \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1}
$$
$$
P_n(1)=1
$$
$$
P_n(0)=\begin{cases}
0 & (n=奇数)\\
(-1)^\frac{n}{2} \cdot \frac{1 \cdot 3 \cdot 5 \cdots (n-1)}{2 \cdot 4 \cdot 6 \cdots n} & (n=偶数)
\end{cases}
$$

### 6. 格林函数

书2.19

2.19 上题能用格林函数方法求解吗？结果如何？

可以使用格林函数求解

写出对于球形边界满足第一类边界条件的格林函数
$$
G (\vec{r}, \vec{r'}) = \frac{1}{4 \pi \epsilon_{0}} \left(\frac{1}{|\vec{r} - \vec{r'}|} - \frac{\frac{R_{0}}{r'}}{|\vec{r} - \frac{R_{0}^{2}}{r'^{2}} \vec{r'}|} \right)
$$
所以电势分布为
$$
\phi (\vec{r}) = - \epsilon_{0} \oint_{S} \phi (R_{0}, \alpha) d S' \frac{\partial G (\vec{r}, \vec{r'})}{\partial n'}
$$

$$
\frac{\partial G (\vec{r}, \vec{r'})}{\partial n'} = \hat{r'} \cdot \nabla' \frac{1}{4\pi\epsilon_0} \left( \frac{1}{|\vec{r} - \vec{r}'|} - \frac{\frac{R_{0}}{r'}}{|\vec{r} - \frac{R_0^2}{r'^2}\vec{r}'|} \right) \\ = 
\hat{r'} \cdot \frac{1}{4 \pi \epsilon_{0}} \left(\frac{\vec{r} - \vec{r'}}{|\vec{r} - \vec{r'}|^{3}} + \frac{\frac{R_{0} \vec{r'}}{r'^{3}}}{|\vec{r} - \frac{R_0^2}{r'^2}\vec{r}'|} +  \frac{R_{0}}{r'}\frac{\vec{r} - \frac{R_0^2}{r'^2}\vec{r}'}{|\vec{r} - \frac{R_0^2}{r'^2}\vec{r}'|^{3}} \cdot (\frac{2 R_{0}^{2}}{r'^{4}} \vec{r'} \vec{r'} - \frac{R_{0}^{2}}{r'^{2}} \overset{\leftrightarrow}{I}) \right)
$$

在 $r' = R_{0}$ 处
$$
\left. \frac{\partial G (\vec{r}, \vec{r'})}{\partial n'} \right|_{r' = R_{0}} = - \frac{1}{4 \pi \epsilon_{0} R_{0}} \frac{|r^{2} - R_{0}^{2}|}{|\vec{r} - \vec{r'}|^{3}}
$$
所以
$$
\phi (\vec{r}) = \oint_{S} \phi (R_{0}, \alpha) \frac{1}{4 \pi R_{0}} \frac{|r^{2} - R_{0}^{2}|}{|\vec{r} - \vec{r'}|^{3}}  d S'
$$
展开被积函数为勒让德多项式
$$
\frac{1}{\sqrt{1 - 2 x t + t^{2}}} = \sum_{n} t^{n} P_{n} (x)
$$
两侧对 $t$ 偏导，所以
$$
\frac{x - t}{(1 - 2xt + t^{2})^{\frac{3}{2}}} = \sum_{n} n t^{n - 1} P_{n} (x)
$$

$$
\frac{1 - t^{2}}{(1 - 2xt + t^{2})^{\frac{3}{2}}} = \frac{1 - 2xt + t^{2} + 2xt - 2t^{2}}{(1 - 2xt + t^{2})^{\frac{3}{2}}} = \frac{1}{\sqrt{1 - 2 x t + t^{2}}} + \frac{2t(x - t)}{(1 - 2xt + t^{2})^{\frac{3}{2}}} \\ = 
\sum_{n} (1 + 2n) t^{n} P_{n} (x)
$$

带入 $x = \cos \gamma$ 以及 $t = \frac{r_{<}}{r_{>}}$ （$\gamma$ 为 $\vec{r}$ 与 $\vec{r'}$ 的夹角，$\alpha$ 为积分点和 $z$ 轴的夹角，$\theta$ 为场点和$z$ 轴的夹角）

所以在球内（取 $\alpha$ 和 $\phi$ 为积分用的球坐标，其中$\phi$ 的起始位置为 $\vec{r'}$ 的投影位置）
$$
\phi (r, \theta) =  \frac{1}{4 \pi R_{0}^{2}} \oint_{S} \phi (R_{0}, \alpha) \sum_{n} (1 + 2n) (\frac{r}{R_{0}})^{n} P_{n} (\cos \gamma) d S' \\ =
\sum_{n} \frac{1 + 2n}{4 \pi} \int_{0}^{\pi} \int_{0}^{2 \pi} (\frac{r}{R_{0}})^{n} \phi (R_{0}, \alpha) P_{n} (\sin \theta \sin \alpha \cos \phi + \cos \theta \cos \alpha) \sin \alpha d \alpha d \phi \\ =
\sum_{n} \frac{1 + 2n}{4 \pi} \int_{0}^{\pi} \int_{0}^{2 \pi} (\frac{r}{R_{0}})^{n} \phi (R_{0}, \alpha) P_{n} (\cos \theta) P_{n} (\cos \alpha) \sin \alpha d \alpha d \phi \\ = 
\sum_{n} \frac{1 + 2n}{2} \int_{0}^{\pi} (\frac{r}{R_{0}})^{n} \phi (R_{0}, \alpha) P_{n} (\cos \theta) P_{n} (\cos \alpha) \sin \alpha d \alpha  \\ = 
\sum_{n} \frac{1 + 2n}{2} (\frac{r}{R_{0}})^{n} P_{n} (\cos \theta) \int_{- 1}^{1} \phi (R_{0}, \alpha) P_{n} (\cos \alpha) \sin \alpha \, d (\cos \alpha)  \\ =
\sum_{n} \frac{1 + 2n}{2} (\frac{r}{R_{0}})^{n} P_{n} (\cos \theta) \left(\int_{-1}^{0} - \phi_{0} P_{n} (x) d x + \int_{0}^{1} \phi_{0} P_{n} (x) d x \right) \\ = 
\sum_{n} \frac{1 + 2n}{2} (\frac{r}{R_{0}})^{n} P_{n} (\cos \theta) \left((-1)^{n + 1} \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} + \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1}\right) \\ = 
\sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{r}{R_{0}} \right)^{2n + 1} P_{2n + 1} (\cos \theta)
$$
同理，在球外
$$
\phi (r, \theta) = \frac{1}{4 \pi R_{0}^{2}} \oint_{S} \phi (R_{0}, \alpha) \sum_{n} (1 + 2n) (\frac{R_{0}}{r})^{n + 1} P_{n} (\cos \gamma) d S' \\ =
\sum_{n} \frac{1 + 2n}{4 \pi} \int_{0}^{\pi} \int_{0}^{2 \pi}(\frac{R_{0}}{r})^{n + 1} \phi (R_{0}, \alpha) P_{n} (\sin \theta \sin \alpha \cos \phi + \cos \theta \cos \alpha) \sin \alpha d \alpha d \phi \\ =
\sum_{n} \frac{1 + 2n}{4 \pi} \int_{0}^{\pi} \int_{0}^{2 \pi}(\frac{R_{0}}{r})^{n + 1} \phi (R_{0}, \alpha) P_{n} (\cos \theta) P_{n} (\cos \alpha) \sin \alpha d \alpha d \phi \\ = 
\sum_{n} \frac{1 + 2n}{2} \int_{0}^{\pi} (\frac{R_{0}}{r})^{n + 1} \phi (R_{0}, \alpha) P_{n} (\cos \theta) P_{n} (\cos \alpha) \sin \alpha d \alpha  \\ = 
\sum_{n} \frac{1 + 2n}{2} (\frac{R_{0}}{r})^{n + 1} P_{n} (\cos \theta) \int_{- 1}^{1} \phi (R_{0}, \alpha) P_{n} (\cos \alpha) \sin \alpha \, d (\cos \alpha)  \\ =
\sum_{n} \frac{1 + 2n}{2} (\frac{R_{0}}{r})^{n + 1} P_{n} (\cos \theta) \left(\int_{-1}^{0} - \phi_{0} P_{n} (x) d x + \int_{0}^{1} \phi_{0} P_{n} (x) d x \right) \\ = 
\sum_{n} \frac{1 + 2n}{2} (\frac{R_{0}}{r})^{n + 1} P_{n} (\cos \theta) \left((-1)^{n + 1} \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} + \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1}\right) \\ = 
\sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{R_{0}}{r} \right)^{2n + 2} P_{2n + 1} (\cos \theta)
$$
