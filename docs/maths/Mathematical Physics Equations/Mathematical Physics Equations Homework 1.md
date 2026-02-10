# 数学物理方程 第1次作业

Chasse_neige

### 2. 弹簧振动定解问题

一质量线密度为 $\lambda$ 的细弹簧, 上端固定在天花板上, 下端挂一质量为 $m$ 的重物, 系统达到平衡时弹簧长度为 $l$. 弹簧劲度系数为 $k$, 忽略弹簧拉伸时带来的质量分布不均匀. 现轻拉重物使得其向下偏离一个小的高度 $H$ 并在 $t=0$ 时释放重物, 请给出定解问题所满足的方程, 边界条件和初始条件.

#### 方程

假设弹簧在水平放置的时候原长为 $l_{0}$, 考虑此时坐标为 $x \sim x+dx$ 的一段微元在之后情形中的运动

因为题目没有给出，假设 $\lambda$ 是对弹簧原长定义的，则这段微元的质量为 $\lambda$dx

在弹簧竖直挂起即以后的运动中，假设弹簧上 $x$ 处质点偏离原来坐标的距离为 $u (x, t)$, 以重物方向为正

这段微元的运动方程为
$$
\lambda dx \frac{\partial^{2}}{\partial t^{2}} u (x, t) = \frac{\partial}{\partial x} T (x) dx + \lambda g dx \\
\lambda \frac{\partial^{2}}{\partial t^{2}} u (x, t) = \frac{\partial}{\partial x} T (x) + \lambda g
$$
而张力关于 $x$ 的表达式为
$$
T (x) = k l_{0}  \frac{\partial u}{\partial x}
$$
所以波动方程的形式为
$$
\lambda \frac{\partial^{2} u}{\partial t^{2}} = k l_{0} \frac{\partial^{2} u}{\partial x^{2}} + \lambda g
$$
在弹簧竖直挂起且平衡时，上述方程化为
$$
0 = k l_{0} \frac{d^{2} u}{d x^{2}} + \lambda g
$$
带入边界条件
$$
u(0) = 0, u(l_{0}) = l - l_{0}, \left. \frac{d u}{dx} \right|_{x = 0} = \frac{\lambda l_{0} g + mg}{k l_{0}}, \left. \frac{d u}{dx} \right|_{x = l_{0}} = \frac{mg}{k l_{0}}
$$
解得
$$
u (x) = - \frac{\lambda g}{2 k l_{0}} x^{2} + \frac{(\lambda l_{0} + m) g}{k l_{0}} x
$$
反解出
$$
l = \frac{\lambda l_{0} g}{2k} + \frac{mg}{k} + l_{0}
$$
即
$$
l_{0} = \frac{l - \frac{mg}{k}}{1 + \frac{\lambda g}{2k}}
$$

#### 边界条件和初始条件

在弹簧竖直放置且被拉长至 $l + H$ 后 ，边界条件变为
$$
u(0) = 0, u(l_{0}) = l + H - l_{0}
$$
此时的伸长量函数解得
$$
u (x) = - \frac{\lambda g}{2kl_{0}} x^{2} + (\frac{\lambda g}{2k} - 1 + \frac{l + H}{l_{0}}) x
$$
在释放弹簧后的运动过程中，初始条件和边界条件可以确定为
$$
u(0, t) = 0, u(l_{0}, 0) = l + H - l_{0}, \left. \frac{\partial u}{\partial x} \right|_{x=0, t = 0}  = \frac{\lambda g}{2k} - 1 + \frac{l + H}{l_{0}}, \left. \frac{\partial u}{\partial x} \right|_{x = l_{0}, t = 0}  = - \frac{\lambda g}{2k} - 1 + \frac{l + H}{l_{0}}
$$

$$
\frac{\partial}{\partial t} u (x, 0) = 0, \frac{\partial^{2}}{\partial t^{2}} u (l_{0}, 0) = \frac{k l_{0}}{m} (\frac{l + H - l_{0}}{l_{0}} - \frac{\lambda g}{2k}) - g
$$

有几个条件是可以互相推导的，这里为了全面起见全部列出。

运动微分方程为
$$
\frac{\partial^{2} u}{\partial t^{2}} = \frac{k l_{0}}{\lambda} \frac{\partial^{2} u}{\partial x^{2}} + g
$$
其中 $l_{0} = \frac{l - \frac{mg}{k}}{1 + \frac{\lambda g}{2k}}$.

### 3. 中子浓度微分方程

在铀块中, 除了中子的扩散运动外, 还存在中子的吸收和增值过程. 设在单位时间单位体积铀块中吸收和增值的中子数正比于该时刻和该位置中子的浓度 $u(\boldsymbol{r}, t)$, 为 $\alpha u$, 其中 $\alpha$ 为比例常数. 试导出中子浓度满足的微分方程.

考虑单位体积单位时间内中子数变化，因为吸收和增值而增加的中子数为
$$
\Delta n (\vec{r}, t) = \alpha u \, dV \,dt
$$
而因为扩散进入该体积元内的中子数为 $D \nabla^{2} u \, dV \, dt$

所以得到微分方程
$$
\frac{\partial}{\partial t} u  - D \nabla^{2} u = \alpha u
$$
