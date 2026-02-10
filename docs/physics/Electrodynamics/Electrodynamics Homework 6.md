# 电动力学 第7周作业

Chasse_neige

### 1. 理想绝缘介质中的波动方程及平面电磁波解

(a) 书4.4

若 $\mathbf{E}, \mathbf{D}, \mathbf{B}, \mathbf{H}$ 仍按 $e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)}$ 变化，但 $\mathbf{D}$ 不再与 $\mathbf{E}$ 平行（即 $\mathbf{D} = \epsilon \mathbf{E}$ 不成立）。

(1) 证明：
$$
\mathbf{k} \cdot \mathbf{B} = \mathbf{k} \cdot \mathbf{D} = \mathbf{B} \cdot \mathbf{D} = \mathbf{B} \cdot \mathbf{E} = 0
$$
但一般 $\mathbf{k} \cdot \mathbf{E} \neq 0$。

证明：
$$
\nabla \cdot \mathbf{B}  = 0
$$
所以 
$$
\nabla \cdot \mathbf{B}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)} = i \mathbf{k} \cdot \mathbf{B} = 0
$$
非线性极化介质中，由于$\mathbf{D}$ 不再与 $\mathbf{E}$ 平行，所以 $\mathbf{E}$ 不一定在与 $\mathbf{k}$ 垂直的平面内，所以一般 $\mathbf{k} \cdot \mathbf{E} \neq 0$。

同理，在没有自由电荷的空间中
$$
\nabla \cdot \mathbf{D} = 0
$$

$$
\nabla \cdot \mathbf{D}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)} = i \mathbf{k} \cdot \mathbf{D} = 0
$$

由于
$$
\nabla \times \mathbf{B} = \mu \frac{\partial}{\partial t} \mathbf{D}
$$
所以
$$
\nabla \times \mathbf{B}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)} = \mu \frac{\partial}{\partial t} \mathbf{D}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)}
$$

$$
\mathbf{k} \times \mathbf{B} =  - \mu \omega \mathbf{D}
$$

$$
\mathbf{B} \cdot \mathbf{D} = 0
$$

同理
$$
\nabla \times \mathbf{E} = - \frac{\partial}{\partial t} \mathbf{B}
$$
所以
$$
\nabla \times \mathbf{E}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)} = - \frac{\partial}{\partial t} \mathbf{B}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)}
$$

$$
\mathbf{k} \times \mathbf{E} =  \omega \mathbf{B}
$$

$$
\mathbf{E} \cdot \mathbf{B} = 0
$$

(2) 证明：
$$
\mathbf{D} = \frac{1}{\omega^2 \mu} \left[ k^2 \mathbf{E} - (\mathbf{k} \cdot \mathbf{E}) \mathbf{k} \right]
$$

证明：
$$
\mathbf{D} = - \frac{1}{\mu \omega} \mathbf{k} \times \mathbf{B} = - \frac{1}{\mu \omega} \mathbf{k} \times \left( \frac{1}{\omega} \mathbf{k} \times \mathbf{E} \right) = \frac{1}{\omega^2 \mu} \left[ k^2 \mathbf{E} - (\mathbf{k} \cdot \mathbf{E}) \mathbf{k} \right]
$$


(3) 证明：

能流 $\mathbf{S}$ 与波矢 $\mathbf{k}$ 一般不在同一方向上。
证明：
$$
\therefore \,\, \mathbf{k} \times \mathbf{S} = \mathbf{k} \times (\mathbf{E} \times \mathbf{H}) = 
- (\mathbf{k} \cdot \mathbf{E}) \mathbf{H} \neq 0
$$

所以能流 $\mathbf{S}$ 与波矢 $\mathbf{k}$ 一般不在同一方向上。

(b) 试证：对 $\rho = 0, \vec{J} = 0$ 的麦克斯韦方程组，四个方程中只有两个是独立的。

证明：在无自由电荷和电流的情况下，麦克斯韦方程组为：

$$
\nabla \cdot \mathbf{E} = 0 \\
\nabla \cdot \mathbf{B} = 0 \\
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
$$
可以通过两个旋度方程导出散度方程如下：
$$
\nabla \cdot (\nabla \times \mathbf{E}) = - \frac{\partial}{\partial t} (\nabla \cdot \mathbf{B}) = 0
$$

$$
\nabla \cdot (\nabla \times \mathbf{B}) = \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} (\nabla \cdot \mathbf{E}) = 0
$$

所以
$$
\frac{\partial}{\partial t} \nabla \cdot \mathbf{E} = 0 \\
\frac{\partial}{\partial t} \nabla \cdot \mathbf{B} = 0
$$
所以对 $\rho = 0, \vec{J} = 0$ 的麦克斯韦方程组，四个方程中是独立的，我认为无法从两个方程推出其余的两个。

### 2. 定态波动方程及平面波解

(a) 书4.1

考虑两列振幅相同、偏振方向相同、频率分别为 $\omega + d\omega$ 和 $\omega - d\omega$ 的线偏振平面波，它们都沿 z 轴方向传播。

(1) 求合成波，证明波的振幅不是一个常数，而是一个波。
合成波：$(k = \frac{\omega}{c})$
$$
A \cos ((k + dk)z - (\omega + d \omega) t) + A \cos ((k - dk)z - (\omega - d \omega) t) = 2 A \cos (dk z - d \omega t) \cos(kz - \omega t)
$$
所以合成波的振幅为 $2 A \cos (d k z - d \omega t)$，是一个波。
(2) 求合成波的相位传播速度和振幅传播速度。
相位传播速度：
$$
v_{p} = \frac{\omega}{k}
$$
振幅传播速度：
$$
v_{g} = \frac{d \omega}{d k}
$$
(b) 试证,用复数方法得到的麦克斯韦方程组平面波解(包括 $\gamma \neq 0$),在取实部后仍是麦克斯韦方程组的解.

证明：

使用复数法解麦克斯韦方程组：
$$
\nabla \cdot \mathbf{E} = 0 \\ 
\nabla \times \mathbf{E} = - \frac{\partial}{\partial t} \mathbf{B} \\ 
\nabla \cdot \mathbf{B} = 0 \\
\nabla \times \mathbf{B} = \mu (\gamma \mathbf{E} + \epsilon \frac{\partial}{\partial t} \mathbf{E})
$$

带入波动假设：
$$
\mathbf{k} \cdot \mathbf{E} = 0 \\
\mathbf{k} \times \mathbf{E} = \omega \mathbf{B} \\
\mathbf{k} \cdot \mathbf{B} = 0 \\
\mathbf{k} \times \mathbf{B} =  - \mu (i \gamma + \epsilon \omega) \mathbf{E}
$$
所以 
$$
\mathbf{k} \times (\mathbf{k} \times \mathbf{B}) = - k^{2} \mathbf{B} = - \mu (i \gamma + \epsilon \omega) \omega \mathbf{B}
$$
即
$$
\mathbf{k}^{2} = \mu \epsilon \omega^{2} + i \gamma \mu \omega
$$
假设 $\mathbf{k} = \mathbf{k_{R}} + i \mathbf{k_{I}}$，则
$$
\mathbf{k_{R}^{2}} - \mathbf{k_{I}^{2}} = \mu \epsilon \omega^{2} \\
2 \mathbf{k_{R}} \cdot  \mathbf{k_{I}} = \gamma \mu \omega
$$
所以对应的平面波解为：
$$
\mathbf{E} = (\mathbf{E}_{0R} + i \mathbf{E}_{0I}) e^{i(\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{k}_{I} \cdot \mathbf{r}} \\
\mathbf{B} = (\mathbf{B}_{0R} + i \mathbf{B}_{0I}) e^{i(\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{k}_{I} \cdot \mathbf{r}}
$$
并且有
$$
\mathbf{E}_{0R} \cdot \mathbf{k}_{R} - \mathbf{E}_{0I} \cdot \mathbf{k}_{I} = 0 \\ 
\mathbf{E}_{0I} \cdot \mathbf{k}_{R} + \mathbf{E}_{0R} \cdot \mathbf{k}_{I} = 0 \\
\mathbf{B}_{0R} = \frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0R} - \frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0I} \\ 
\mathbf{B}_{0I} = \frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0R} + \frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0I} \\ 
\mathbf{B}_{0R} \cdot \mathbf{k}_{R} - \mathbf{B}_{0I} \cdot \mathbf{k}_{I} = 0 \\ 
\mathbf{B}_{0I} \cdot \mathbf{k}_{R} + \mathbf{B}_{0R} \cdot \mathbf{k}_{I} = 0
$$


取实部：
$$
\Re [\mathbf{E}] = (\mathbf{E}_{0R} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{E}_{0I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \\
\Re [\mathbf{B}] = (\mathbf{B}_{0R} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{B}_{0I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}
$$
带入麦克斯韦方程组：
$$
\nabla \cdot (\mathbf{E}_{0R} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{E}_{0I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \\ = \mathbf{E}_{0Ri} \partial_{i} (\cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) - \mathbf{E}_{0Ii} \partial_{i} (\sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \\ = \mathbf{E}_{0Ri} (- \mathbf{k}_{Ri} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)- \mathbf{k}_{Ii} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}  - \\ 
\mathbf{E}_{0Ii} (\mathbf{k}_{Ri} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{k}_{Ii} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e ^{- \mathbf{k}_{I} \cdot \mathbf{r}} \\ = e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (- (\mathbf{E}_{0R} \cdot \mathbf{k}_{I} + \mathbf{E}_{0I} \cdot \mathbf{k}_{R}) \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) + (\mathbf{E}_{0I} \cdot \mathbf{k}_{I} - \mathbf{E}_{0R} \cdot \mathbf{k}_{R}) \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) \\  = 0
$$
磁场同理。

考虑旋度方程：
$$
\nabla \times (\mathbf{E}_{0R} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{E}_{0I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \\ =
\nabla (\cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{E}_{0R} - \nabla (\sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)  e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{E}_{0I} \\ = 
(- \mathbf{k}_{R} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} - \mathbf{k}_{I} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{E}_{0R} - \\ ( \mathbf{k}_{R} \cos(\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} -  \mathbf{k}_{I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{E}_{0I} \\ =
- \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \mathbf{B}_{0I} \omega - \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \mathbf{B}_{0R} \omega = - \frac{\partial}{\partial t} \mathbf{B}
$$

$$
\nabla \times \mathbf{B} = \nabla \times (\mathbf{B}_{0R} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{B}_{0I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \\ =
\nabla (\cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{B}_{0R} - \nabla (\sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)  e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{B}_{0I} \\ = 
(- \mathbf{k}_{R} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} - \mathbf{k}_{I} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{B}_{0R} - \\ ( \mathbf{k}_{R} \cos(\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} -  \mathbf{k}_{I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{B}_{0I} \\ =
- \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (\mathbf{k}_{I} \times \mathbf{B}_{0R} + \mathbf{k}_{R} \times \mathbf{B}_{0I}) - \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (\mathbf{k}_{R} \times \mathbf{B}_{0R} - \mathbf{k}_{I} \times \mathbf{B}_{0I})
$$

由于
$$
\mathbf{k}_{I} \times \mathbf{B}_{0R} + \mathbf{k}_{R} \times \mathbf{B}_{0I}  \\ =
\mathbf{k}_{I} \times (\frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0R} - \frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0I}) + \mathbf{k}_{R} \times (\frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0R} + \frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0I}) \\ = 
\frac{1}{\omega} ((\mathbf{k}_{R} \cdot \mathbf{E}_{0R}) \mathbf{k}_{I} + (\mathbf{k}_{I} \cdot \mathbf{E}_{0R}) \mathbf{k}_{R} - 2 (\mathbf{k}_{I} \cdot \mathbf{k}_{R}) \mathbf{E}_{0R} + (\mathbf{k}_{R} \cdot \mathbf{E}_{0I}) \mathbf{k}_{R} - (\mathbf{k}_{I} \cdot \mathbf{E}_{0I}) \mathbf{k}_{I} + (\mathbf{k}_{I}^{2} - \mathbf{k}_{R}^{2}) \mathbf{E}_{0I}) \\ = 
\frac{1}{\omega} (- \mu \epsilon \omega^{2} \mathbf{E}_{0I} - \gamma \mu \omega \mathbf{E}_{0R}) = - \mu \epsilon \omega \mathbf{E}_{0I} - \gamma \mu \mathbf{E}_{0R}
$$

$$
\mathbf{k}_{R} \times \mathbf{B}_{0R} - \mathbf{k}_{I} \times \mathbf{B}_{0I} \\ =
\mathbf{k}_{R} \times (\frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0R} - \frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0I}) - \mathbf{k}_{I} \times (\frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0R} + \frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0I}) \\ = 
\frac{1}{\omega} (- (\mathbf{k}_{R} \cdot \mathbf{E}_{0I}) \mathbf{k}_{I} - (\mathbf{k}_{I} \cdot \mathbf{E}_{0I}) \mathbf{k}_{R} + 2 (\mathbf{k}_{I} \cdot \mathbf{k}_{R}) \mathbf{E}_{0I} + (\mathbf{k}_{R} \cdot \mathbf{E}_{0R}) \mathbf{k}_{R} - (\mathbf{k}_{I} \cdot \mathbf{E}_{0R}) \mathbf{k}_{I} + (\mathbf{k}_{I}^{2} - \mathbf{k}_{R}^{2}) \mathbf{E}_{0R}) \\ = 
\frac{1}{\omega} (- \mu \epsilon \omega^{2} \mathbf{E}_{0R} + \gamma \mu \omega \mathbf{E}_{0I}) 
= - \mu \epsilon \omega \mathbf{E}_{0R} + \gamma \mu \mathbf{E}_{0I}
$$

所以
$$
- \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (\mathbf{k}_{I} \times \mathbf{B}_{0R} + \mathbf{k}_{R} \times \mathbf{B}_{0I}) - \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (\mathbf{k}_{R} \times \mathbf{B}_{0R} - \mathbf{k}_{I} \times \mathbf{B}_{0I}) \\ =
- \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (- \mu \epsilon \omega \mathbf{E}_{0I} - \gamma \mu \mathbf{E}_{0R}) - \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (- \mu \epsilon \omega \mathbf{E}_{0R} + \gamma \mu \mathbf{E}_{0I}) \\ = \mu (\gamma \mathbf{E} + \epsilon \frac{\partial}{\partial t} \mathbf{E})
$$
所以该实部满足麦克斯韦方程组。

(c) 试求穿透深度的严格表达式，并从它出发证明在 $\gamma$ 很大时 $\delta \to \sqrt{\frac{2}{\omega \mu \gamma}}$

穿透深度：
$$
k_{R}^{2} - k_{I}^{2} = \mu \epsilon \omega^{2} \\
2 k_{R} k_{I} \cos \theta = \gamma \mu \omega
$$
所以
$$
\left( \frac{\gamma \mu \omega}{2 k_{I} \cos \theta} \right )^{2} - k_{I}^{2} = \mu \epsilon \omega^{2} \\ 
k_{I}^{4} + \mu \epsilon \omega^{2} k_{I}^{2} - \left( \frac{\gamma \mu \omega}{2 \cos \theta} \right )^{2} = 0 \\
k_{I}^{2} = \frac{- \mu \epsilon \omega^{2} + \sqrt{(\mu \epsilon \omega^{2})^{2} + 4 \left( \frac{\gamma \mu \omega}{2 \cos \theta} \right )^{2}}}{2}
$$
所以穿透深度的严格表达式为
$$
\delta = \frac{1}{k_{I} \cos \theta} = \frac{1}{\cos \theta \sqrt{\frac{- \mu \epsilon \omega^{2} + \sqrt{(\mu \epsilon \omega^{2})^{2} + 4 \left( \frac{\gamma \mu \omega}{2 \cos \theta} \right )^{2}}}{2}}}
$$
当$\gamma \gg 1$ 时，
$$
\frac{- \mu \epsilon \omega^{2} + \sqrt{(\mu \epsilon \omega^{2})^{2} + 4 \left( \frac{\gamma \mu \omega}{2 \cos \theta} \right )^{2}}}{2} \approx \frac{- \mu \epsilon \omega^{2} + 2 \left( \frac{\gamma \mu \omega}{2 \cos \theta} \right )}{2} \approx \frac{\gamma \mu \omega}{2 \cos \theta}
$$
所以
$$
\delta \to \sqrt{\frac{2}{\gamma \mu \omega \cos \theta}}
$$
当相位传播方向与衰减方向相同时 $\delta \to \sqrt{\frac{2}{\omega \mu \gamma}}$

(d) 试讨论在什么条件下,椭圆偏振是左旋或右旋的?

当椭圆偏振光对应的电矢量在两正交坐标轴上投影分量相等，且$x$ 分量相位领先 $y$ 分量 $\frac{\pi}{2}$ 时为左旋光；$x$ 分量相位落后 $y$ 分量 $\frac{\pi}{2}$ 时为右旋光。

### 3. 电磁波在界面上的反射和折射

(a) 书4.2, 4.6

4.2 一平面电磁波以 $\theta = 45^\circ$ 从真空入射到 $\varepsilon_r = 2$ 的介质，电场强度垂直于入射面。求反射系数和折射系数。

电场强度垂直于入射面，所以是 $s$ 光，入射的介质折射率为 $\sqrt{2}$。

入射角$\theta = 45^\circ$ ，折射角 $\sqrt{2} \sin \theta' = \sin \theta$，所以 $\theta' = \frac{\pi}{6}$

利用 $s$ 光的菲涅耳公式：
$$
r_{s} = \frac{n_{1} \cos \theta - n_{2} \cos \theta'}{n_{1} \cos \theta + n_{2} \cos \theta'} = \frac{\frac{\sqrt{2}}{2} - \sqrt{2} \frac{\sqrt{3}}{2}}{\frac{\sqrt{2}}{2} + \sqrt{2} \frac{\sqrt{3}}{2}} = \frac{1 - \sqrt{3}}{1 + \sqrt{3}}
$$

所以
$$
R = r_{s}^{2} = \frac{2 - \sqrt{3}}{2 + \sqrt{3}}
$$

$$
T = 1 - R = \frac{2\sqrt{3}}{2 + \sqrt{3}}
$$

4.6 平⾯电磁波垂直射到⾦属表⾯上，试证明透入⾦属内部的电磁波能量全部变为焦⽿热。

证明：假设入射波矢为 $\mathbf{k_{1}}$，透射为 $\mathbf{k_{2}}$ ，反射为$\mathbf{k_{3}}$ 

当平⾯电磁波垂直射到⾦属表⾯上时（金属内部$\gamma \gg 1$）：

我们假设振幅透射率为 $t$

透射部分的衰减：

由于此时相位传播方向和衰减方向同向，所以
$$
k_{I}^{2} = \frac{- \mu \epsilon \omega^{2} + \sqrt{(\mu \epsilon \omega^{2})^{2} +  \left( \gamma \mu \omega \right )^{2}}}{2}
$$
进入部分的电磁波能流：
$$
\mathbf{S} = \Re[\mathbf{E} \times \mathbf{H}] = \Re[\mathbf{E} \times (\frac{\mathbf{k}}{\mu \omega} \times \mathbf{E})] = t^{2} \mathbf{E}_{0}^{2} \frac{\mathbf{k_{R}}}{\mu \omega}
$$
所以
$$
<\mathbf{S}> = \frac{1}{2} t^{2} \mathbf{E}_{0}^{2} \frac{\mathbf{k}_{R}}{\omega}
$$
焦耳热：
$$
\mathbf{j} = \gamma \mathbf{E}
$$
发热功率密度
$$
w = \frac{1}{\gamma} j^{2} = \gamma \mathbf{E}^{2}
$$
带入上一题推导出的衰减结果
$$
\mathbf{E} = t \mathbf{E}_{0} e^{i(k_{R} z - \omega t) - k_{I} z}
$$

$$
<w> = \frac{1}{2} \gamma t^{2} \mathbf{E}_{0}^{2} e^{- 2 k_{I} z}
$$

所以
$$
\int_{0}^{\infty} <w> dz = \frac{\gamma t^{2} \mathbf{E}_{0}^{2}}{4 k_{I}}
$$
由于$2 k_{R} k_{I} = \gamma \mu \omega$，所以
$$
\frac{\gamma t^{2} \mathbf{E}_{0}^{2}}{4 k_{I}} =  \frac{1}{2} t^{2} \mathbf{E}_{0}^{2} \frac{k_{R}}{\mu \omega}
$$
即入射能量全部转化为焦耳热。

(b) 试证：当入射波电场垂直入射面时，反射和透射振幅满足：
$$
\vec{E}_{20\perp} = \frac{2 E_{10\perp} \vec{e}_y}{1 + \frac{\mu_1 k_{2z}}{\mu_2 k_1 \cos \theta_1}}
$$
$$
\vec{E}_{30\perp} = \frac{1 - \frac{\mu_1 k_{2z}}{\mu_2 k_1 \cos \theta_1}}{1 + \frac{\mu_1 k_{2z}}{\mu_2 k_1 \cos \theta_1}} E_{10\perp} \vec{e}_y
$$
进一步当 $\mu_1 = \mu_2, \gamma_2 = 0$ 时，它们化为：
$$
\vec{E}_{20\perp} = \frac{2 \cos \theta_1 \sin \theta_2}{\sin (\theta_1 + \theta_2)} E_{10\perp} \vec{e}_y
$$
$$
\vec{E}_{30\perp} = \frac{\sin (\theta_2 - \theta_1)}{\sin (\theta_2 + \theta_1)} E_{10\perp} \vec{e}_y
$$

证明：当入射波电场垂直入射时，电磁波在介质界面处满足以下边界条件：（下述所有电磁场和波矢均为复数）

电场的切向分量连续：
$$
E_{1y} + E_{3y} = E_{2y}
$$
磁场的切向分量连续：
$$
H_{1x} + H_{3x} = H_{2x}
$$
磁感应强度法向连续：
$$
\mu_{1}(H_{1z} + H_{3z}) = \mu_{2} H_{2z}
$$
入射波的磁场：
$$
\mathbf{H}_1 = \frac{\mathbf{k}_1 \times \mathbf{E}_1}{\omega \mu_1}
$$
反射波的磁场：
$$
\mathbf{H}_3 = \frac{\mathbf{k}_1 \times \mathbf{E}_3}{\omega \mu_1}
$$
透射波的磁场：
$$
\mathbf{H}_2 = \frac{\mathbf{k}_2 \times \mathbf{E}_2}{\omega \mu_2}
$$
将磁场分量代入边界条件：

磁场的 $x$分量连续：
$$
\frac{k_{1z}}{\mu_1} (E_{10\perp} - E_{30\perp}) = \frac{k_{2z}}{\mu_2} E_{20\perp}
$$
磁感应强度的z分量连续：
$$
k_{1x} (E_{10\perp} + E_{30\perp}) = k_{2x} E_{20\perp}
$$
从磁场的 $z$分量连续方程：
$$
\frac{k_{1x}}{\mu_1} (E_{10\perp} - E_{30\perp}) = \frac{k_{1x}}{\mu_2} E_{20\perp}
$$
$$
E_{10\perp} + E_{30\perp} = E_{20\perp}
$$
将此结果代入磁场强度的 $x$分量连续方程：
$$
\frac{k_{1z}}{\mu_1} (E_{10\perp} - E_{30\perp}) = \frac{k_{2z}}{\mu_2}  (E_{10\perp} +E_{30\perp})
$$
解得：
$$
E_{30\perp} = \frac{- \frac{k_{2z}}{\mu_{2}} + \frac{k_{1z}}{\mu_{1}}}{\frac{k_{1z}}{\mu_{1}} + \frac{k_{2z}}{\mu_{2}}} E_{10\perp}
$$

带入 $k_{1z} = k_{1} \cos \theta_{1}$，进一步整理为：
$$
E_{30\perp} = \frac{1 - \frac{\mu_1 k_{2z}}{\mu_2 k_1 \cos \theta_1}}{1 + \frac{\mu_1 k_{2z}}{\mu_2 k_1 \cos \theta_1}} E_{10\perp}
$$

透射振幅由 $E_{10\perp} + E_{30\perp} = E_{20\perp}$给出：
$$
E_{20\perp} = \frac{2 E_{10\perp}}{1 + \frac{\mu_1 k_{2z}}{\mu_2 k_1 \cos \theta_1}}
$$

当 $\mu_1 = \mu_2$ 且 $\gamma_2 = 0$ 时， $k_{2z} = k_{2} \cos \theta_{2}$，并且 $k_{1} \sin \theta_{1} = k_{2} \sin \theta_{2}$：
$$
E_{20\perp} = \frac{2 \cos \theta_1 \sin \theta_2}{\sin (\theta_1 + \theta_2)} E_{10\perp}
$$
$$
E_{30\perp} = \frac{\sin (\theta_2 - \theta_1)}{\sin (\theta_2 + \theta_1)} E_{10\perp}
$$

(c) 试证明：
$$
D_{\parallel} = \frac{4 \mu_1 \cos \theta_1 \text{Re} \left( \frac{k_2 k_{2z}^*}{k_{2}^{*}} \right)}{\mu_2 k_1 \left| \frac{k_{2z}}{k_2} + \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1 \right|^2}
$$
$$
R_{\parallel} = \left| \frac{\frac{k_{2z}}{k_2} - \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1}{\frac{k_{2z}}{k_2} + \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1} \right|^{2}
$$
$$
D_{\parallel} + R_{\parallel} = 1
$$

证明：

对于平行时的能流透射与反射：用和（b）问相似的方法，容易得到
$$
E_{30 \parallel} = \frac{- \frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}} E_{10 \parallel}
$$

$$
E_{20 \parallel} = \frac{2 \cos \theta_{1}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}} E_{10 \parallel}
$$

所以能流的透射：
$$
D_{\parallel} = \frac{\mathbf{S}_{2 \parallel z}}{\mathbf{S}_{1 \parallel z}} =  \frac{\frac{1}{2 \mu_{2} \omega} (k_{2Rz} \mathbf{E}_{2 \parallel}^{2} - \Re [E_{2 \parallel z} (\mathbf{k}_{2} \cdot \mathbf{E}_{2 \parallel}^{*})])}{\frac{1}{2 \mu_{1} \omega} (k_{1Rz}  \mathbf{E}_{1 \parallel}^{2})}
$$

带入$\frac{\mathbf{E}_{2 \parallel}^{2}}{\mathbf{E}_{1 \parallel}^{2}} = \left|\frac{2 \cos \theta_{1}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}}\right|^{2}$以及 $k_{1Rz} = k_{1} \cos \theta_{1}$ 



由于 $\mathbf{k}_{2} \cdot \mathbf{E}_{2 \parallel} = 0$ ，所以
$$
\Re [E_{2 \parallel z} (\mathbf{k}_{2} \cdot \mathbf{E}_{2 \parallel}^{*})] = - \Re [E_{2 \parallel z} (\mathbf{k}_{2} \cdot 2 \Im [\mathbf{E}_{2 \parallel}])] \\ =
- \Re [|\mathbf{E_{2 \parallel}}| \frac{k_{2z}}{ |\mathbf{k_{2}}|} (\mathbf{k}_{2} \cdot 2 \Im [\mathbf{E}_{2 \parallel}])]  = \mathbf{E}_{2}^{2} \left( - \Re[k_{2} \frac{k_{2z}}{k_{2}}^{*}] + \Re[k_{2z}] \right)
$$
得到：
$$
\frac{\frac{1}{2 \mu_{2} \omega} (k_{2Rz} \mathbf{E}_{2 \parallel}^{2} - \Re [E_{2 \parallel z} (\mathbf{k}_{2} \cdot \mathbf{E}_{2 \parallel}^{*})])}{\frac{1}{2 \mu_{1} \omega} (k_{1Rz}  \mathbf{E}_{1 \parallel}^{2})} = \frac{\mu_{1}}{\mu_{2} k_{1} \cos \theta_{1}} \left| \frac{2 \cos \theta_{1}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}} \right|^{2} \Re [k_{2} \frac{k_{2z}^{*}}{k_{2}^{*}}] \\ = \frac{4 \mu_1 \cos \theta_1 \text{Re} \left( \frac{k_2 k_{2z}^*}{k_{2}^{*}} \right)}{\mu_2 k_1 \left| \frac{k_{2z}}{k_2} + \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1 \right|^2}
$$

$$
R_{\parallel} = \frac{\mathbf{S}_{3 \parallel z}}{\mathbf{S}_{1 \parallel z}} =  \frac{\frac{1}{2 \mu_{1} \omega} (k_{2Rz} \mathbf{E}_{3 \parallel}^{2})}{\frac{1}{2 \mu_{1} \omega} (k_{1Rz}  \mathbf{E}_{1 \parallel}^{2})}
$$
带入$\frac{\mathbf{E}_{3 \parallel}^{2}}{\mathbf{E}_{1 \parallel}^{2}} = \left| \frac{- \frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}} \right|^{2}$ 以及 $k_{1Rz} = k_{1} \cos \theta_{1}$ $k_{3Rz} = k_{3} \cos \theta_{1}$ 
$$
R_{\parallel} =  \left| \frac{- \frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}} \right|^{2}
$$

$$
D_{\parallel} + R_{\parallel} = \frac{4 \mu_1 \cos \theta_1 \text{Re} \left( \frac{k_2 k_{2z}^*}{k_{2}^{*}} \right)}{\mu_2 k_1 \left| \frac{k_{2z}}{k_2} + \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1 \right|^2} + \left| \frac{\frac{k_{2z}}{k_2} - \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1}{\frac{k_{2z}}{k_2} + \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1} \right|^{2} \\ = 
\frac{4 \mu_1 \cos \theta_1 \text{Re} \left( \frac{k_2 k_{2z}^*}{k_{2}^{*}} \right) + \mu_{2} k_{1} \left| \frac{k_{2z}}{k_2} - \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1 \right|^{2}}{\mu_2 k_1 \left| \frac{k_{2z}}{k_2} + \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1 \right|^2} \\ =
\frac{\mu_{2} k_{1} \left(4 \frac{\mu_1}{\mu_{2} k_{1}} \cos \theta_1 \text{Re} \left( \frac{k_2 k_{2z}^*}{k_{2}^{*}} \right) +  \left| \frac{k_{2z}}{k_2} - \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1 \right|^{2}\right)}{\mu_2 k_1 \left| \frac{k_{2z}}{k_2} + \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1 \right|^2} \\ =
\frac{\mu_2 k_1 \left| \frac{k_{2z}}{k_2} + \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1 \right|^2}{\mu_2 k_1 \left| \frac{k_{2z}}{k_2} + \frac{k_2 \mu_1}{k_1 \mu_2} \cos \theta_1 \right|^2} = 1
$$

其中利用了
$$
(z_{1} + z_{2}) (z_{1}^{*} + z_{2}^{*}) = (z_{1} - z_{2}) (z_{1}^{*} - z_{2}^{*}) + 4 \Re [z_{1} z_{2}^{*}]
$$
