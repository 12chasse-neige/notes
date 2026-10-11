# Gravitational Wave Astronomy Homework

## 约定与要求

默认  $c = 1$，保留  $G$，场方程不含宇宙学常数，号差为  $(-, +, +, +)$；采用  $[\nabla_\gamma, \nabla_\delta] V^\alpha = R^\alpha {}_{\beta\gamma\delta} V^\beta$。可引用讲义已证明的公式，但须写出本题的具体计算与物理解释。带帽指标表示正交归一标架分量；不得把坐标分量直接当作仪器读数。



## 非正交坐标中的同一个标量场

在二维欧氏平面上取坐标变换

$$
x=u,\qquad y=v+\frac{\kappa}{2}u^{2}
$$

其中 $u$, $v$ 的量纲为长度,  $\kappa \neq 0$ 为长度倒数。考虑标量场  $F(x, y) = y$

(a) (4分) 将坐标基  $e_{u}, e_{v}$ 用  $e_{x}, e_{y}$ 表示，求度规矩阵  $g_{ab}$ 及其逆矩阵  $g^{ab}$

\[
\partial_{u} = \pdv{x}{u} \pdv{}{x} + \pdv{y}{u} \pdv{}{y}
\]

\[
\partial_{v} = \pdv{x}{v} \pdv{}{x} + \pdv{y}{v} \pdv{}{y}
\]

带入上述关系，得到
\[
\partial_{u} = \partial_{x} + \kappa u \partial_{y}
\]

\[
\partial_{v} = \partial_{y}
\]

即
\[
e_{u} = e_{x} + \kappa u e_{y} \quad e_{v} = e_{y}
\]
其度规矩阵的表达式就是
\[
g_{ab} = \begin{pmatrix}
1 + \kappa^{2} u^{2} & \kappa u \\
\kappa u & 1
\end{pmatrix}
\]
其逆矩阵可以写为
\[
g^{ab} = \begin{pmatrix}
1 & - \kappa u  \\
-\kappa u & 1 + \kappa^{2} u^{2}
\end{pmatrix}
\]


(b) (4分) 分别给出 $\dd F$ 在协基 $(\dd u, \dd v)$ 中的分量，以及  $\nabla F$ 在坐标基  $(e_u, e_v)$ 中的分量。解释这两组分量为什么可以不同。

\[
\dd{F} = \dd{y} = \pdv{y}{u} \dd{u} + \pdv{y}{v} \dd{v} = \kappa u \dd{u} + \dd{v}
\]

\[
\nabla F = e_{y} = e_{v}
\]

这两组分量不同的原因是 $\dd{F}$ 是一个 1-form，位于该基的对偶空间中。所以用对偶基对 $\dd{F}$ 进行展开的系数和用坐标基对 $\nabla F$ 进行展开的系数之间应该用度规进行指标升降。实际上，我们利用 $g^{ab}$ 把前的指标进行一次上升，马上就可以得到后者的形式
\[
\begin{pmatrix}
1 & - \kappa u  \\
-\kappa u & 1 + \kappa^{2} u^{2}
\end{pmatrix} \begin{pmatrix}
\kappa u \\
1
\end{pmatrix} = \begin{pmatrix}
0 \\
1
\end{pmatrix}
\]


(c) (7分) 计算所需联络系数及 Hessian  $H_{ab} = \nabla_a \nabla_b F$，与  $\partial_a \partial_b F$ 比较。一位同学由  $\partial_u^2 F \neq 0$ 断言 “这个标量场的梯度随位置改变”，其论证错在哪里？

利用联络系数和度规之间的关系
\[
\Gamma^{\alpha} {}_{\beta \gamma} = \frac{1}{2} g^{\alpha \rho} (g_{\rho \beta, \gamma} + g_{\rho \gamma, \beta} - g_{\gamma \beta, \rho})
\]
先计算出度规导数中的所有非零项为
\[
g_{uu, u} = 2 \kappa^{2} u, \quad g_{uv, u} = \kappa, \quad g_{vu, u} = \kappa
\]
带入得到联络系数的所有非零分量为
\[
\Gamma^{v} {}_{uu} = k
\]

所以我们可以计算出 Hessian 的各个分量为
\[
H_{ab} = \nabla_{a} \nabla_{b} F  \\ =
\nabla_{a} (\partial_{b} F) = \partial_{a} \partial_{b} F - \Gamma^{b} {}_{ac} \partial_{b} F
\]
然后可以计算得到
\[
H_{uu} =k - \Gamma^{v} {}_{uu} \partial_{v} F = k - k = 0
\]
所以 $H_{ab} = 0$，而
\[
\partial_{a} \partial_{b} F = \begin{pmatrix}
k & 0 \\
0 & 0
\end{pmatrix}
\]
可以看到二者是不一样的。一位同学由  $\partial_u^2 F \neq 0$ 断言 “这个标量场的梯度随位置改变”，这个论断没有考虑在移动的时候基矢量的变化，所以忽略了联络项的影响，这是这个论断错误的原因。




## 能量密度与能流由谁测量？

在某事件的局部惯性系 S 中，理想流体静止，且

$$
T^{\mu\nu}=\mathrm{d i a g}(\varepsilon,P,P,P),\qquad\;\varepsilon>0,\quad P\geq0.
$$

观察者沿 x 轴以坐标速度 v 运动， $|v| < 1$，四速度为  $U^{\mu} = \gamma(1, v, 0, 0)$， $\gamma = (1 - v^2)^{-1/2}$。其瞬时惯性系采用  $t' = \gamma(t - vx)$、 $x' = \gamma(x - vt)$

(a) (8分) 求  $T^{\prime00}$、 $T^{\prime0x}$、 $T^{\prime xx}$ 和  $T^{\prime yy}$。用  $\mathcal{E}(U) = T_{\mu\nu}U^{\mu}U^{\nu}$ 独立核对能量密度，并解释压强为何出现在运动观察者测得的能量密度中。

从流体静止系到观测者瞬时惯性系到洛伦兹变换为
\[
\Lambda^{\mu} {}_{\nu} = \begin{pmatrix}
\gamma & - \gamma v & 0 & 0 \\
- \gamma v & \gamma & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\]
我们直接对能动量张量进行洛伦兹变换
\[
T'^{\mu \nu} = \Lambda^{\mu} {}_{\alpha} \Lambda^{\nu} {}_{\beta} T^{\alpha \beta}
\]
在该惯性系到坐标下分量表示为
\[
T'^{\mu \nu} =
\begin{pmatrix}
\gamma & - \gamma v & 0 & 0 \\
- \gamma v & \gamma & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix} \begin{pmatrix}
\epsilon & 0 & 0 & 0 \\
0 & P & 0 & 0 \\
0 & 0 & P & 0 \\
0 & 0 & 0 & P
\end{pmatrix} \begin{pmatrix}
\gamma & - \gamma v & 0 & 0 \\
- \gamma v & \gamma & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix} \\ = 
\begin{pmatrix}
\gamma & - \gamma v & 0 & 0 \\
- \gamma v & \gamma & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix} \begin{pmatrix}
\epsilon \gamma & - \epsilon \gamma v & 0 & 0 \\
- P \gamma v & P \gamma & 0 & 0 \\
0 & 0 & P & 0 \\
0 & 0 & 0 & P
\end{pmatrix} = \begin{pmatrix}
\epsilon \gamma^{2} + P \gamma^{2} v^{2} & - (\epsilon + P) \gamma^{2} v & 0 & 0 \\
- (\epsilon + P) \gamma^{2} v & \epsilon \gamma^{2} v^{2} + P \gamma^{2} & 0 & 0 \\
0 & 0 & P & 0 \\
0 & 0 & 0 & P
\end{pmatrix}
\]
从上述表达式中可以直接读出
\[
T'^{00} = \epsilon \gamma^{2} + P \gamma^{2} v^{2} \\
T'^{0x} = - (\epsilon + P) \gamma^{2} v \\
T'^{xx} = \epsilon \gamma^{2} v^{2} + P \gamma^{2} \\
T'^{yy} = P
\]
利用能量密度的协变形式进行一个检查
\[
E(U) = T_{\mu \nu} U^{\mu} U^{\nu} = \epsilon \gamma^{2} + P \gamma^{2} v^{2}
\]
压强出现在运动观测者能量密度中的原因是在运动观测者的局部惯性系中，流体具有非零的速度，需要原来是压强的部分来描写流体的动能。



(b) (6分) 取  $P = \varepsilon/3$，计算  $T = g_{\mu\nu}T^{\mu\nu}$。将该物质作为爱因斯坦方程的局部引力源，分别判断标量曲率 $R$ 与 Ricci 张量  $R_{\mu\nu}$ 是否为零。能否因 $T = 0$ 就认为这里是真空？

\[
T = g_{\mu \nu} T^{\mu \nu} = 0
\]
带入爱因斯坦方程中
\[
R_{\mu \nu} = 8 \pi G (T_{\mu \nu} - \frac{T}{2} g_{\mu \nu}) = 8 \pi G T_{\mu \nu}
\]
可以得到 Ricci 张量不为零，但是再收缩一次之后可以得到 Ricci 标量等于零。

不能因 $T = 0$ 就认为这里是真空，因为存在非零的 Ricci 张量和 Riemann 张量。



(c)（6分）改考虑沿 $+x$ 传播的理想光束， $T^{\mu\nu}=I k^{\mu}k^{\nu}$，其中  $I>0$、 $k^{\mu}=(1,1,0,0)$。求上述观察者测得的能量密度。是否存在任何类时观察者测得该光束的能量通量为零？给出不依赖某个特殊坐标系的理由。

在上述观测者的局部惯性系中
\[
k'^{\mu} = \Lambda^{\mu} {}_{\nu} k^{\nu}
\]
带入洛伦兹变换的具体形式就可以得到
\[
k'^{\mu} = \begin{pmatrix}
\gamma (1 - v) \\
\gamma (1 - v) \\
0 \\ 
0
\end{pmatrix}
\]
所以上述观测者系中的能动量张量为
\[
T'^{\mu \nu} = I \begin{pmatrix}
\gamma^{2} (1 - v)^{2} & \gamma^{2} (1 - v)^{2} & 0 & 0 \\
\gamma^{2} (1 - v)^{2} &  \gamma^{2} (1 - v)^{2} & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\]
测得的能量密度就是
\[
E = I \gamma^{2} (1 - v)^{2}
\]
不存在能够测得该光束能量通量为 $0$ 的观测者，因为没有观测者的速度能够达到光速。



## 有核心的球对称引力场：潮汐总是径向拉伸吗？

在欧氏三维空间考虑牛顿势

$$
\Phi(r)=-\frac{G M}{\sqrt{r^{2}+b^{2}}},\qquad M>0,\quad b>0,\quad G M/b\ll1.
$$

定义潮汐张量  $\mathcal{E}_{ij} = \nabla_i \nabla_j \Phi$，分离矢量满足  $\ddot{\xi}^\hat{i} = -\mathcal{E}_j^\hat{i} \xi^\hat{j}$。球坐标度规为
\[
{\dd{l}^{2} = \dd r^{2} + r^{2} \dd{\theta}^{2} + r^{2} \sin^{2} \theta \dd{\phi}^{2}}
\]
(a) （7分） 对一般径向标量  $F(r)$，由协变导数求 Hessian 在球坐标正交归一标架中的各分量；再写成笛卡尔分量的形式，使用  $n_i = x_i/r$

先计算球坐标度规对应的联络系数非零项，得到
\[
\Gamma^{r}{}_{\theta\,\theta} = -r \\
\Gamma^{r}{}_{\phi\,\phi} = -r \sin{\left(\theta\right)}^2 \\
\Gamma^{\theta}{}_{r\,\theta} = r^{-1} \\
\Gamma^{\theta}{}_{\theta\,r} = r^{-1} \\
\Gamma^{\theta}{}_{\phi\,\phi} = -\sin{\left(\theta\right)} \cos{\left(\theta\right)} \\
\Gamma^{\phi}{}_{r\,\phi} = r^{-1} \\
\Gamma^{\phi}{}_{\theta\,\phi} = \frac{\cos{\left(\theta\right)}}{\sin{\left(\theta\right)}} \\
\]




(b)（4分）代入给定的  $\Phi$ ，求径向和两个横向的潮汐本征值。找出径向拉伸、径向压缩以及径向线性潮汐为零的区域或位置。是否有三个方向同时压缩的区域？



(c)（6分）用  $\nabla^{2}\Phi = 4\pi G\rho$ 求密度  $\rho(r)$，以及  $M_{\mathrm{enc}}(r) = 4\pi\int_{0}^{r}\rho(s)s^{2}\,\mathrm{d}s$，核对总质量。



(d) （3分） 分别给出  $r \rightarrow 0$ 和  $r \gg b$ 时  $\rho$、 $M_{enc}$ 与潮汐本征值的领先行为。原点没有唯一的径向方向，这是否意味着潮汐张量在那里奇异？




## 相同的加速度读数，是否意味着相同的曲率？

考虑一族静态度规

$$
\mathrm{d}s^{2}=-N(x)^{2}\mathrm{d}t^{2}+\mathrm{d}x^{2}+\mathrm{d}y^{2}+\mathrm{d}z^{2},\qquad N(x)>0.
$$

取正交标架  $e_{\hat{0}} = N^{-1}\partial_{t}$、 $e_{\hat{x}} = \partial_{x}$，其余两方向同理。$N$ 为光滑函数，撇号表示对 $x$ 求导。

(a) （7分） 求全部非零 Christoffel 符号，计算  $R^{x} {}_{txt}$ 和  $R_{\hat{x}\hat{0}\hat{x}\hat{0}}$。说明其他方向的独立潮汐分量是否为零。



(b)（7分）对坐标位置固定的观察者，求四速度、四加速度及加速度计读数。比较

$$
N_{1}(x)=1+ax\quad(x>-1/a),\qquad N_{2}(x)=e^{ax},\qquad a>0.
$$

两者在 $x=0$ 的加速度计读数与潮汐曲率分别如何？哪一个度规描述平直时空？仅凭 $x=0$ 处这一只静止加速度计的读数，能否区分这两个情形？



(c)（6分） 一个光子从固定于  $x_{e}$ 的发射者沿 x 方向传播至固定于  $x_{r}$ 的接收者。由光子测地线方程说明  $p_{t}$ 沿途守恒，并求局部测得的能量比  $E_{r}/E_{e}$，结合  $N_{1}$，判断 “测到了频移” 是否足以证明时空具有非零曲率。



## Schwarz's child 时空：悬停与圆形自由落体

给定外部度规

$$
\mathrm{d}s^{2}=-f(r)\mathrm{d}t^{2}+\frac{\mathrm{d}r^{2}}{f(r)}+r^{2}\big(\mathrm{d}\theta^{2}+\sin^{2}\theta\mathrm{d}\phi^{2}\big),\qquad f(r)=1-\frac{2m}{r},\quad m=G M>0.
$$

只考虑 $r > 2m$，不要求推导这一度规，也不讨论圆轨道的稳定性。

(a) （5分）计算  $\Gamma^{r}_{tt}$、 $\Gamma^{t}_{tr}$，以及赤道面上的  $\Gamma^{r}_{\phi\phi}$。无需列出全部联络系数。



(b) （7分） 一个观察者固定于  $(r,\theta,\phi)$ 。求其归一化四速度、四加速度  $a^{\mu}$ 和加速度计读数  $\sqrt{a_{\mu}a^{\mu}}$ ；检验弱场极限。



(c) （9分） 一个有质量的试验粒子在赤道面上作圆形自由落体运动，r为常数。由测地线方程求  $\Omega = d\phi / dt$，再由  $u_{\mu} u^{\mu} = -1$ 求  $u^t = dt / d\tau$。计算当地静止观察者测得的粒子速率，确定允许类时圆轨道的半径范围。



(d) （4分） 上述两种运动都有 $r = \text{Const}$，为什么一种加速度计有读数，另一种为零？用径向四加速度的具体表达式解释，并说明  $\Omega$ 与局部测得的速率为何不是同一个物理量。



## 选做 会振荡的度规分量，一定能被探测到吗？

在闵可夫斯基背景上令  $C = \cos[\omega(t - z)]$， $0 < \epsilon \ll 1$、 $\omega > 0$。比较以下两组线性微扰，未列出的分量均为零：

$$
\mathbf{A}:\quad h_{00}=h_{z z}=2\epsilon C,\qquad h_{0z}=h_{z0}=-2\epsilon C;
$$

$$
\mathbf{B}:\quad h_{x x}=\epsilon C,\qquad h_{y y}=-\epsilon C.
$$

以下均只保留  $\epsilon$ 的一阶；可直接使用讲义中的线性化曲率和规范变换公式。

(a) （2分） 分别检验 Lorenz 条件  $\partial^{\nu}\bar{h}_{\mu\nu}=0$ 和真空波动方程  $\Box\bar{h}_{\mu\nu}=0$



(b) （4分） 计算两者的潮汐矩阵  $\pmb{\varepsilon}_{ij} = R_{i0i0}^{(1)}$，判断哪一组能产生真实的潮汐效应。



(c) （2分） 对其中可消去的一组，给出一个具体  $\xi^{\mu}$，使  $x^{\prime\mu} = x^{\mu} + \xi^{\mu}$ 后  $h_{\mu\nu}^{\prime} = 0$；核对符号。



(d) （2分） 对 B，取在零阶背景中静止、位于 z=0 的参考自由粒子。在其平行移动正交标架中，另三个自由粒子于时刻  $t_{0}$ 分别沿 x, y, z 方向相隔 L，且瞬时相对速度为零。求该瞬间的相对加速度，设  $L \omega \ll 1$。

