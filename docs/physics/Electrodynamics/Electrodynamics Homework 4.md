# 电动力学 第5周作业

Chasse_neige

(a) 书6.17，6.19，6.25，6.27

6.17 质量为 $m$ 的静止粒子衰变为两个粒子 $m_1$ 和 $m_2$, 求粒子 $m_1$ 的动量和能量.

设 $m_1$ 和 $m_2$的动量分别为 $p_{1}$ 和 $p_{2}$ ，列出能动量守恒方程；
$$
p_{1} = p_{2}
$$

$$
\sqrt{m_{1}^{2} c^{4} + p_{1}^{2} c^{2}} + \sqrt{m_{2} c^{4} + p_{2}^{2} c^{2}} = m c^{2}
$$

解得：
$$
p_1 = \frac{c}{2m} \sqrt{[m^2 - (m_1 + m_2)^2][m^2 - (m_1 - m_2)^2]}
$$

$$
E_1 = \sqrt{m_{1}^{2} c^{4} + p_{1}^{2} c^{2}} = \frac{c^2}{2m}(m^2 + m_1^2 - m_2^2)
$$

6.19 能量和动量的洛伦兹变换

(1) 证明能量和动量的变换公式

设 $E$ 和 $p$ 是粒子体系在实验室参考系 $\Sigma$ 中的总能量和总动量（$p$ 与 $x$ 轴方向夹角为 $\theta$）。证明在另一参考系 $\Sigma'$（相对于 $\Sigma$ 以速度 $v$ 沿 $x$ 轴方向运动）中的粒子体系总能量和总动量满足：

$$
p_x' = \gamma (p_x - \beta \frac{E}{c}), \quad E' = \gamma (E - c \beta p_x)
$$

$$
\tan \theta' = \frac{\sin \theta}{\gamma (\cos \theta - \beta \frac{E}{cp})}
$$

检查动量与能量构成的四维矢量的内积 $P^{\mu} P_{\mu} = p^{2} - (- \frac{E^{2}}{c^{2}}) = m^{2}$ 是一个不变量，所以该四维矢量洛伦兹协变。
$$
p_x' = \gamma (p_x - \beta \frac{E}{c}), \quad E' = \gamma (E - c \beta p_x)
$$

$$
\tan \theta' = \frac{p_{y}'}{p_{x}'} = \frac{p_{y}}{\gamma (p_x - \beta \frac{E}{c})} = \frac{\sin \theta}{\gamma (\cos \theta - \beta \frac{E}{cp})}
$$

(2) 光束夹角的变换

某光源发出的光束在两个惯性系中与 $x$ 轴的夹角分别为 $\theta$ 和 $\theta'$，证明

$$
\cos \theta' = \frac{\cos \theta - \beta}{1 - \beta \cos \theta}, \quad \sin \theta' = \frac{\sin \theta}{\gamma (1 - \beta \cos \theta)}
$$



证明：在（1）中 $\tan \theta'$ 的变换中带入 $E = pc$ ：
$$
\tan \theta' = \frac{\sin \theta}{\gamma (\cos \theta - \beta)}
$$

$$
\therefore \,\, \cos \theta' = \frac{1}{\sqrt{1 + \tan^{2} \theta'}} =  \frac{\cos \theta - \beta}{1 - \beta \cos \theta}, \quad \sin \theta' = \sqrt{1 - \cos^{2} \theta'} = \frac{\sin \theta}{\gamma (1 - \beta \cos \theta)}
$$



(3) 立体角的变换

考虑在 $\Sigma$ 系内立体角为 $\mathrm{d} \Omega = \mathrm{d} \cos \theta d\phi$ 的光束，证明当变换到另一惯性系 $\Sigma'$ 时，立体角变为

$$
\mathrm{d} \Omega' = \frac{\mathrm{d} \Omega}{\gamma^2 (1 - \beta \cos \theta)^2}
$$
证明：
$$
\mathrm{d} \Omega' = \mathrm{d} \cos \theta' \mathrm{d} \phi'
$$
由于$\phi$在 $y-z$ 平面上，所以 $\mathrm{d} \phi' = \mathrm{d} \phi$

对与 $\theta$ 的变换而言：
$$
\frac{\mathrm{d} \cos \theta'}{\mathrm{d} \cos \theta} =  - \frac{1}{\sin \theta} \frac{\mathrm{d}}{\mathrm{d} \theta} \frac{\cos \theta - \beta}{1 - \beta \cos \theta} =   \frac{1}{\sin \theta} \frac{\sin \theta (1 - \beta^{2})}{(1 - \beta \cos \theta)^{2}}
$$

$$
\therefore \,\, \mathrm{d} \Omega' = \mathrm{d} \cos \theta' \mathrm{d} \phi' = \frac{\mathrm{d} \cos \theta'}{\mathrm{d} \cos \theta} \frac{\mathrm{d} \phi'}{\mathrm{d} \phi} \mathrm{d} \Omega = \frac{\mathrm{d} \Omega}{\gamma^2 (1 - \beta \cos \theta)^2}
$$

6.25 光子与电子的相互作用

频率为 $\omega$ 的光子（能量 $\hbar\omega$，动量 $\hbar k$）碰在静止的电子上，试证明：

(1) 电子不可能吸收这个光子，否则能量和动量守恒定律不能满足；

假设电子吸收了这个光子，则吸收后动量守恒：$p' = \hbar k$ ，能量守恒： $E' = m_{e} c^{2} + \hbar \omega$

这与关系式 $E'^{2} = m_{e}^{2} c^{4} + p'^{2} c^{2}$ 矛盾，所以能量和动量守恒定律不能同时满足。

(2) 电子可以散射这个光子，散射后光子频率 $\omega'$ 比散射前光子频率 $\omega$ 小（不同于经典理论中散射光频率不变的结论）。

总能量守恒：  
$$
\hbar\omega + m_e c^2 = \hbar\omega' + \sqrt{p_e^2 c^2 + m_e^2 c^4}
$$
其中 $p_e$ 为电子碰撞后动量。

矢量分解为分量：  
$$
\begin{cases}
\hbar k = \hbar k'\cos\theta + p_e \cos\phi \\
0 = \hbar k'\sin\theta - p_e \sin\phi
\end{cases}
$$
消去角度 $\phi$，得动量平方关系：  
$$
p_e^2 = \hbar^2 \left(k^2 + k'^2 - 2kk'\cos\theta\right)
$$

$$
\hbar(\omega - \omega') + m_e c^2 = \sqrt{\hbar^2 (\omega^2 + \omega'^2 - 2\omega\omega'\cos\theta) + m_e^2 c^4}.
$$
平方后化简：  
$$
\hbar (\omega - \omega') = \frac{\hbar^2 \omega\omega' (1 - \cos\theta)}{m_e c^2}.
$$

即散射后光子频率 $\omega'$ 比散射前光子频率 $\omega$ 小。

6.27 激发态原子的光子发射频率

一个总质量为 $m_0$ 的激发原子，对所选定的参考系静止。它在跃迁到能量比之低 $\Delta W$ 的基态时，发射一个光子（能量 $\hbar\omega$，动量 $\hbar k$），同时受到光子的反冲，因此光子的频率不能正好是 $\nu = \frac{\Delta W}{h}$，而要略小一些。证明这个频率：

$$
\nu = \frac{\Delta W}{h} \left(1 - \frac{\Delta W}{2 m_0 c^2}\right)
$$
证明：

由于动量守恒，反冲对激发原子产生的动量为$\hbar k$ ，由能量守恒：
$$
\sqrt{(m_{0} c^{2} - \Delta W)^{2} + (\hbar k)^{2} c^{2}} + \hbar \omega = m_{0} c^{2}
$$
带入 $\omega = k c$ 解得：
$$
\omega = \frac{\Delta W}{\hbar} - \frac{\Delta W^{2}}{2  m_{0} c^{2} \hbar}
$$
即$\nu = \frac{\Delta W}{h} \left(1 - \frac{\Delta W}{2 m_0 c^2}\right)$

(b) 对在外电磁场中运动的带电点粒子，试由 $\frac{d p_\mu}{d \tau} = K_\mu$ 证明 $K_\mu = \sum_\nu e F_{\mu\nu} U_\nu$

证明：$p_{\mu} = \begin{pmatrix} \vec{p} , i\frac{E}{c} \end{pmatrix}$，$u_{\mu} = \begin{pmatrix} \gamma \vec{v} , i \gamma c \end{pmatrix}$
$$
\therefore \,\, K_{\mu} = \frac{\mathrm{d} p_{\mu}}{\mathrm{d} \tau} = \begin{pmatrix} \gamma \vec{f}, i\frac{\gamma}{c} \frac{\mathrm{d} E}{\mathrm{d} t} \end{pmatrix}
$$
对一个点粒子而言，
$$
\vec{f} = e (\vec{E} + \vec{v} \times \vec{B}) \\
f_{k} = e (- ic F_{4k} + \epsilon_{ijk} v_{i} \frac{1}{2} \epsilon_{jlm} F_{lm}) = 
e ( - ic F_{4k} + \frac{1}{2} \begin{vmatrix} \delta_{kl} & \delta_{km} \\ \delta_{il} & \delta_{im} \end{vmatrix} v_{i} F_{lm}) \\ = 
e(- ic F_{4k} + \frac{1}{2} (\delta_{kl} \delta_{im} - \delta_{km} \delta_{il}) v_{i} F_{lm}) \\ = 
e(- ic F_{4k} + \frac{1}{2} v_{i} (F_{ki} - F_{ik}))
$$
利用 $F$ 的反对称性，上式可以化为：
$$
f_{k} =  e(ic F_{k4} + v_{i} F_{ki})
$$
所以对于 $K_{\mu}$ 的前三个分量而言，可以看到
$$
\gamma f_{k} = e (F_{ki} \gamma v_{i} + F_{k4} i \gamma c) 
$$

$$
K_{i} = e F_{\mu \nu} u_{\nu} \qquad (i= 1,2,3)
$$

对于$K_{\mu}$ 的第四个分量：
$$
\frac{\mathrm{d}}{\mathrm{d} t}E = \vec{f} \cdot \vec{v} = e (\vec{E} + \vec{v} \times \vec{B}) \cdot \vec{v} = e(- ic F_{4k} + \frac{1}{2} v_{i} (F_{ki} - F_{ik})) v_{k} = - e(ic F_{4k} + v_{i} F_{ik}) v_{k}
$$

$$
\therefore \,\, K_{4} = - i \frac{\gamma}{c} e(ic F_{4k} + v_{i} F_{ik}) v_{k} = e (\gamma F_{4k} v_{k} + i \frac{\gamma}{c} v_{i} v_{k} F_{ik}) = e \gamma F_{4k} v_{k}
$$

容易判断括号中后一项由于 $F$ 的反对称性为0.

所以$K_\mu = \sum_\nu e F_{\mu\nu} u_\nu$对四个分量均成立。

（用PPT上那个作用量作变分的推法也可以，不过我不想相当于把PPT抄一遍。所以此处利用分量展开直接证明。）

(c) 试证 $K_4 = \frac{i}{c} \vec{K} \cdot \vec{v}$，其中 $\vec{K}$ 是 $K_\mu$ 前三分量构成的矢量。这个结论不止对电磁作用，而是一般成立的。

对于点粒子而言，利用能量定律：$\vec{f} \cdot \vec{v} = \frac{\mathrm{d}}{\mathrm{d} t} E$

对比$K_{\mu} = \frac{\mathrm{d} p_{\mu}}{\mathrm{d} \tau} = \begin{pmatrix} \gamma \vec{f}, i\frac{\gamma}{c} \frac{\mathrm{d} E}{\mathrm{d} t} \end{pmatrix}$ 的形式，得到 $K_4 = \frac{i}{c} \vec{K} \cdot \vec{v}$