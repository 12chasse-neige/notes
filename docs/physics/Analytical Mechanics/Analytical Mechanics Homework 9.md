# 分析力学 第9次作业

Chasse_neige

5.16 假设地球自转轴沿着对称轴方向，而与黄道面夹角 $\varphi$ (白道面与黄道面的倾角 $5^\circ$ 多一点，可以近似认为在同一个面内)。由于地球是扁椭球，所受太阳引力与此倾角有关，从而产生力矩。假设地球与太阳距离为 $R$，相互作用势能为
$$
V(\theta)=-G \frac{M_{\text {sun }} M_{\text {earth }}}{R}+G \frac{M_{\text {sun }}}{2 R^{3}}\left(I_{3}-I_{1}\right)\left(\frac{1-3 \cos ^{2} \theta}{2}\right)
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
G = 6.674 \times 10^{-11} \, \text{m}^3 \text{kg}^{-1} \text{s}^{-2}
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
\theta\approx 23.5^\circ
$$

计算可得 $\dot{\phi} \approx 7.78 \times 10^{-12} \, \text{rad/s}$，对应进动周期约 $2.56 \times 10^4$ 年。

5.17 通常刚体的主转动惯量各不相同，假设 $I_{1}<I_{2}<I_{3}$。求证：自由转动时，若开始沿主轴 $1$ 或 $3$，则转动是稳定的，而开始沿主轴 $2$，则转动不稳定。(提示：为了证明这个命题，可以假设刚体开始角速度沿某个主轴方向，但附加了一个小扰动 $\delta$，看这个扰动在以后的运动中是线性振动还是指数发散。)

证明：对于欧拉-潘索情形下的自由转动
$$
I_1 \dot{\omega}_1 = (I_2 - I_3) \omega_2 \omega_3, \quad I_2 \dot{\omega}_2 = (I_3 - I_1) \omega_3 \omega_1, \quad I_3 \dot{\omega}_3 = (I_1 - I_2) \omega_1 \omega_2
$$

沿主轴1转动：设初始 $\omega_1 = \Omega + x$，$\omega_2 = y$，$\omega_3 = z$（$x, y, z$ 为小扰动）。线性化得：
$$
\dot{y} = \frac{(I_3 - I_1)\Omega}{I_2} z, \quad \dot{z} = \frac{(I_1 - I_2)\Omega}{I_3} y
$$
特征值 $\lambda^2 = \frac{(I_3 - I_1)(I_1 - I_2)\Omega^2}{I_2 I_3} < 0$，故稳定。

沿主轴3转动：设初始 $\omega_3 = \Omega + x$，$\omega_1 = y$，$\omega_2 = z$。线性化得：
$$
\dot{y} = \frac{(I_2 - I_3)\Omega}{I_1} z, \quad \dot{z} = \frac{(I_3 - I_1)\Omega}{I_2} y
$$
特征值 $\lambda^2 = \frac{(I_2 - I_3)(I_3 - I_1)\Omega^2}{I_1 I_2} < 0$，故稳定。

沿主轴2转动：设初始 $\omega_2 = \Omega + x$，$\omega_1 = y$，$\omega_3 = z$。线性化得：
$$
\dot{y} = \frac{(I_2 - I_3)\Omega}{I_1} z, \quad \dot{z} = \frac{(I_1 - I_2)\Omega}{I_3} y
$$
特征值 $\lambda^2 = \frac{(I_2 - I_3)(I_1 - I_2)\Omega^2}{I_1 I_3} > 0$，故在扰动下角速度会指数发散，不稳定。因此，沿主轴1或3转动稳定，沿主轴2转动不稳定。

6.7 有一小珠子质量为 $m$，串在光滑的硬丝线上，丝线是抛物线形状， $y = a^{2} x^{2}$，重力加速度与 $y$ 轴反向。现丝线绕 $y$ 轴以角速度 $\omega$ 匀速转动，以小珠子到 $y$ 轴的距离作为广义坐标，给出哈密顿量以及哈密顿方程。

丝线方程 $y = a^2 x^2$，绕 $y$ 轴以角速度 $\omega$ 匀速转动，重力沿 $-y$ 方向。广义坐标取珠子到 $y$ 轴的距离 $x$。

珠子坐标（惯性系）：
$$
X = x \cos \omega t, \quad Y = a^2 x^2, \quad Z = x \sin \omega t
$$
动能 $T = \frac{1}{2} m (\dot{X}^2 + \dot{Y}^2 + \dot{Z}^2)$，势能 $V = m g Y = m g a^2 x^2$。

计算得拉格朗日量：
$$
L = \frac{1}{2} m \left((1 + 4 a^4 x^2) \dot{x}^2 + \omega^2 x^2 \right) - m g a^2 x^2
$$

广义动量：
$$
p = \frac{\partial L}{\partial \dot{x}} = m (1 + 4 a^4 x^2) \dot{x}
$$

哈密顿量：
$$
H = \frac{p^2}{2m (1 + 4 a^4 x^2)} + m \left( g a^2 - \frac{\omega^2}{2} \right) x^2
$$

哈密顿方程：
$$
\dot{x} = \frac{\partial H}{\partial p} = \frac{p}{m (1 + 4 a^4 x^2)}, \quad \dot{p} = -\frac{\partial H}{\partial x} = \frac{4 a^4 x p^2}{m (1 + 4 a^4 x^2)^2} - 2m \left( g a^2 - \frac{\omega^2}{2} \right) x
$$

6.11两质点质量分别为 $m_{1}$ 和 $m_{2}$, 中间用劲度系数为 $k$ 、自然伸长为 $l$的弹簧相连，并放在光滑桌面上运动。给出哈密顿量及循环积分，并导出哈密顿方程。

引入质心坐标 $\mathbf{R} = \frac{(m_1 \mathbf{r}_1 + m_2 \mathbf{r}_2)}{m_1 + m_2}$ 和相对坐标 $\mathbf{r} = \mathbf{r}_1 - \mathbf{r}_2$

拉格朗日量
$$
L = \frac{1}{2} M \dot{\mathbf{R}}^2 + \frac{1}{2} \mu \dot{\mathbf{r}}^2 - \frac{1}{2} k (r - l)^2
$$
其中 $M = m_1 + m_2$，$\mu = \frac{m_1 m_2}{M}$，$r = |\mathbf{r}|$

广义动量
$$
\mathbf{P} = \frac{\partial L}{\partial \dot{\mathbf{R}}} = M \dot{\mathbf{R}}, \quad \mathbf{p} = \frac{\partial L}{\partial \dot{\mathbf{r}}} = \mu \dot{\mathbf{r}}
$$

哈密顿量
$$
H = \frac{P^2}{2M} + \frac{p^2}{2\mu} + \frac{1}{2} k (r - l)^2
$$
其中 $P^2 = P_x^2 + P_y^2$，$p^2 = p_x^2 + p_y^2$。

循环积分：由于 $H$ 不依赖于 $\mathbf{R}$，故 $\mathbf{P}$ 守恒（即质心动量守恒）。

哈密顿方程：
$$
\dot{\mathbf{R}} = \frac{\partial H}{\partial \mathbf{P}} = \frac{\mathbf{P}}{M}, \quad \dot{\mathbf{P}} = -\frac{\partial H}{\partial \mathbf{R}} = 0
$$
假设 $\mathbf{r} = (x, y)$
$$
\dot{x} = \frac{\partial H}{\partial p_x} = \frac{p_x}{\mu}, \quad \dot{y} = \frac{\partial H}{\partial p_y} = \frac{p_y}{\mu}
$$

$$
\dot{p}_x = -\frac{\partial H}{\partial x} = -k \left(1 - \frac{l}{r}\right) x, \quad \dot{p}_y = -\frac{\partial H}{\partial y} = -k \left(1 - \frac{l}{r}\right) y
$$

其中 $r = \sqrt{x^2 + y^2}$

6.15 有一质点质量 $m$，在中心力场 $V(r)$ 中运动，其在球坐标中的拉格朗日量为
$$
L=\frac{1}{2} m\left(\dot{r}^{2}+r^{2} \dot{\theta}^{2}+r^{2} \sin ^{2} \theta \dot{\varphi}^{2}\right)-V(r)
$$

(1) 给出 $(r, \theta, \varphi)$ 对应的共轭正则动量；

(2) 给出哈密顿量及循环积分；

(3) 给出正则方程。

拉格朗日量
$$
L = \frac{1}{2} m (\dot{r}^2 + r^2 \dot{\theta}^2 + r^2 \sin^2 \theta \dot{\varphi}^2) - V(r)
$$

(1) 正则动量
$$
p_r = \frac{\partial L}{\partial \dot{r}} = m \dot{r}, \quad p_\theta = \frac{\partial L}{\partial \dot{\theta}} = m r^2 \dot{\theta}, \quad p_\varphi = \frac{\partial L}{\partial \dot{\varphi}} = m r^2 \sin^2 \theta \dot{\varphi}
$$

(2) 哈密顿量
$$
H = \frac{1}{2m} \left( p_r^2 + \frac{p_\theta^2}{r^2} + \frac{p_\varphi^2}{r^2 \sin^2 \theta} \right) + V(r)
$$
循环积分：由于 $L$ 不显含 $\varphi$，故 
$$
p_{\varphi} = mr^{2} \sin^{2} \theta \dot{\varphi}
$$
守恒

(3) 正则方程
$$
\dot{r} = \frac{\partial H}{\partial p_r} = \frac{p_r}{m}, \quad \dot{p}_r = -\frac{\partial H}{\partial r} = \frac{p_\theta^2}{m r^3} + \frac{p_\varphi^2}{m r^3 \sin^2 \theta} - V'(r)
$$

$$
\dot{\theta} = \frac{\partial H}{\partial p_\theta} = \frac{p_\theta}{m r^2}, \quad \dot{p}_\theta = -\frac{\partial H}{\partial \theta} = \frac{p_\varphi^2 \cos \theta}{m r^2 \sin^3 \theta}
$$

$$
\dot{\varphi} = \frac{\partial H}{\partial p_\varphi} = \frac{p_\varphi}{m r^2 \sin^2 \theta}, \quad \dot{p}_\varphi = -\frac{\partial H}{\partial \varphi} = 0
$$







