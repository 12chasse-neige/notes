# 分析力学 第6次作业

Chasse_neige

3.18 一质量为 $m$ 的质点的势能，在一半径为 $R$ 的球形区域内为 $\left|U_{0}\right|$，球外为零。该粒子以初速度 $v_{\infty}$ 入射，类似于 3.9 图所示。求散射截面。

<img src="./Analytical Mechanics Homework 6.assets/image-20251028165811846.png" alt="image-20251028165811846" style="zoom:50%;" />

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
\phi = 2 (\pi - \theta - \alpha) = 2 \pi - 2 \theta - 2 \arcsin(\sin \theta \sqrt{1 - \frac{2 \abs{U_{0}}}{m v_{\infty}^{2}}}) \\ = 
2 \arcsin(\frac{\rho}{R}) - 2 \arcsin(\frac{\rho}{R} \sqrt{1 - \frac{2 \abs{U_{0}}}{m v_{\infty}^{2}}})
$$
处，所有进入势阱的粒子均会与其相互作用。所以散射截面为
$$
\sigma_{tot} = \pi R^{2}
$$
3.20 求两电子之间的卢瑟福散射截面。

两个电子的电荷均为 $-e$，因此库仑势能为 $U(r) = \frac{1}{4\pi\epsilon_0} \frac{e^2}{r}$，其中 $r$ 是两电子之间的距离。在质心系中，两体问题可简化为一个质量为约化质量 $\mu = \frac{m}{2}$ 的粒子在中心势 $U(r)$ 中的运动，其中 $m$ 是电子质量。质心系中的动能记为 $E$。
对于中心势 $U(r) = \frac{k}{r}$，散射角 $\theta$ 与瞄准半径$b$ 的关系为
$$
b = \frac{k}{2E} \cot \frac{\theta}{2}
$$
所以
$$
\left| \frac{db}{d\theta} \right| = \frac{k}{4E} \csc^2 \frac{\theta}{2}
$$
利用 $\sin\theta = 2 \sin \frac{\theta}{2} \cos \frac{\theta}{2}$ 和 $\cot \frac{\theta}{2} = \frac{\cos \frac{\theta}{2}}{\sin \frac{\theta}{2}}$，有：
$$
\frac{b}{\sin\theta} = \frac{ \frac{k}{2E} \cot \frac{\theta}{2} }{ 2 \sin \frac{\theta}{2} \cos \frac{\theta}{2} } = \frac{k}{2E} \cdot \frac{\cos \frac{\theta}{2}}{\sin \frac{\theta}{2}} \cdot \frac{1}{2 \sin \frac{\theta}{2} \cos \frac{\theta}{2}} = \frac{k}{4E} \csc^2 \frac{\theta}{2}
$$

$$
\frac{d\sigma}{d\Omega} = \frac{b}{\sin\theta} \left| \frac{db}{d\theta} \right| = \left( \frac{k}{4E} \csc^2 \frac{\theta}{2} \right) \left( \frac{k}{4E} \csc^2 \frac{\theta}{2} \right) = \left( \frac{k}{4E} \right)^2 \csc^4 \frac{\theta}{2}
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
\sigma_{Lab} (\phi) = \frac{\sin \theta}{\sin \phi} \dv{\theta}{\phi} \sigma_{COM} (\theta) + \frac{\sin \theta}{\sin \phi} \dv{\theta}{\phi} \sigma_{COM} (\pi - \theta) \\ =
\left( \dfrac{e^{2}}{4\pi\epsilon_{0} E} \right)^{2} \left(\dfrac{1}{\sin^{4} \phi} + \frac{1}{\cos^{4} \phi} \right) \cos \phi
$$
4.2 一质量为 $M$ ，半径为 $R$ 的圆环在重力作用下绕固定点 $(O)$ 在其平面内作小振动, 如图 4.12 所示。求振动频率。

<img src="./Analytical Mechanics Homework 6.assets/image-20251028172116393.png" alt="image-20251028172116393" style="zoom:50%;" />

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
4.4 原子之间的相互作用可用勒纳-琼斯势近似 $V(r) = \frac{A}{r^{12}} - \frac{B}{r^6}$, 其中$A > 0, B > 0$。由此计算氧分子中两原子的平衡距离以及振动频率（氧原子质量为 $m$）。

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
L (r) = 2 \times \frac{1}{2} m (\dot{\frac{r}{2}})^{2} - \frac{A}{r^{12}} + \frac{B}{r^{6}} \\ =
\frac{1}{4} m \dot{r}^{2} - \frac{A}{r^{12}} + \frac{B}{r^{6}}
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
\omega = \sqrt{ \frac{B}{2A} \frac{312 A}{m r_{0}^{8}} - \frac{84 B}{m r_{0}^{8}}} \\ =
\sqrt{\frac{72 B}{m r_{0}^{8}}} = \sqrt{\frac{36 B^{2}}{m A}} \left( \frac{B}{2 A} \right)^{\frac{1}{6}} = \frac{6}{2^{\frac{1}{6}}} \sqrt{\frac{B^{\frac{7}{3}}}{A^{\frac{4}{3}} m}}
$$
