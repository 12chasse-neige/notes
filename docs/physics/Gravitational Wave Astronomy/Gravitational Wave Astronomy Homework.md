# Gravitational Wave Astronomy Homework

## 第一次作业

### 约定与要求

>   默认  $c = 1$，保留  $G$，场方程不含宇宙学常数，号差为  $(-, +, +, +)$；采用  $[\nabla_\gamma, \nabla_\delta] V^\alpha = R^\alpha {}_{\beta\gamma\delta} V^\beta$。可引用讲义已证明的公式，但须写出本题的具体计算与物理解释。带帽指标表示正交归一标架分量；不得把坐标分量直接当作仪器读数。

### 非正交坐标中的同一个标量场

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

这两组分量不同的原因是 $\dd{F}$ 是一个 1-form，位于该基的对偶空间中。所以用对偶基对 $\dd{F}$ 进行展开的系数和用坐标基对 $\nabla F$ 进行展开的系数之间应该用度规进行指标升降。实际上，我们利用 $g^{ab}$ 把前者的指标进行一次上升，马上就可以得到后者的形式
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
\Gamma^{v} {}_{uu} = \kappa
\]

所以我们可以计算出 Hessian 的各个分量为
\[
H_{ab} = \nabla_{a} \nabla_{b} F  \\ =
\nabla_{a} (\partial_{b} F) = \partial_{a} \partial_{b} F - \Gamma^{c} {}_{ab} \partial_{c} F
\]
然后可以计算得到
\[
H_{uu} = \kappa - \Gamma^{v} {}_{uu} \partial_{v} F = \kappa - \kappa = 0
\]
所以 $H_{ab} = 0$，而
\[
\partial_{a} \partial_{b} F = \begin{pmatrix}
\kappa & 0 \\
0 & 0
\end{pmatrix}
\]
可以看到二者是不一样的。一位同学由  $\partial_u^2 F \neq 0$ 断言 “这个标量场的梯度随位置改变”，这个论断没有考虑在移动的时候基矢量的变化，所以忽略了联络项的影响，这是这个论断错误的原因。




### 能量密度与能流由谁测量？

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
压强出现在运动观测者能量密度中的原因：Lorentz 变换会把静止系中的动量流密度混入能量密度分量。



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
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{pmatrix}
\]
测得的能量密度就是
\[
E = I \gamma^{2} (1 - v)^{2}
\]
不存在能测得该光束能量通量为 $0$ 的类时观察者。不依赖坐标系的理由：对任意类时四速度 $U$，都有 $k_{\mu}U^{\mu} \neq 0$ ，于是任何类时观察者测得的能量密度
\[
\mathcal{E}(U) = I\,(k_{\mu}U^{\mu})^{2} > 0
\]
恒成立；而零尘埃 $T^{\mu\nu} = Ik^{\mu}k^{\nu}$ 的能流大小恒等于其能量密度，所以能流也永不为零。



### 有核心的球对称引力场：潮汐总是径向拉伸吗？

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
\begin{aligned}
\Gamma^{r}{}_{\theta \theta} &= -r \\
\Gamma^{r}{}_{\phi \phi} &= -r \sin{\left(\theta\right)}^2 \\
\Gamma^{\theta}{}_{r \theta} &= r^{-1} \\
\Gamma^{\theta}{}_{\theta r} &= r^{-1} \\
\Gamma^{\theta}{}_{\phi \phi} &= -\sin{\left(\theta\right)} \cos{\left(\theta\right)} \\
\Gamma^{\phi}{}_{r \phi} &= r^{-1} \\
\Gamma^{\phi}{}_{\theta \phi} &= \frac{\cos{\left(\theta\right)}}{\sin{\left(\theta\right)}} \\
\Gamma^{\phi}{}_{\phi r} &= r^{-1} \\
\Gamma^{\phi}{}_{\phi \theta} &= \frac{\cos{\left(\theta\right)}}{\sin{\left(\theta\right)}}
\end{aligned}
\]
所以 Hessian 的分量可以表示为
\[
H_{ab} = \nabla_{a} \nabla_{b} F(r) = \partial_{a} \partial_{b} F - \Gamma^{c}{}_{ab} \partial_{c} F
\]
由于 $F$ 是径向的，$\partial_{a}F = \delta_{a}^{r}\,\partial_{r}F$，且 $\partial_{a}\partial_{b}F$ 仅当 $a = b = r$ 时等于 $\partial_{r}^{2}F$、其余分量为零，所以上述表达式化为
\[
H_{ab} = \partial_{a}\partial_{b} F - \Gamma^{r} {}_{ab} \partial_{r} F
\]
在球坐标 coordinate basis 下的 Hessian 分量为
\[
H_{ab} = \begin{pmatrix}
\partial^{2}_{r} F & 0 & 0 \\
0 & r \partial_{r} F & 0 \\
0 & 0 & r \sin^{2} \theta \partial_{r} F
\end{pmatrix}
\]
换到正交归一标架下，就是
\[
H = \partial_{r}^{2} F e_{\hat{r}}e_{\hat{r}} + \frac{\partial_{r} F}{r} e_{\hat{\theta}} e_{\hat{\theta}} + \frac{\partial_{r} F}{r} e_{\hat{\phi}} e_{\hat{\phi}}
\]
这个分量坐标变换到笛卡尔坐标下，得到
\[
H_{ij} = \pdv{r}{x_{i}} \pdv{r}{x_{j}} H_{rr} + \pdv{\theta}{x_{i}} \pdv{\theta}{x_{j}} H_{\theta \theta} + \pdv{\phi}{x_{i}} \pdv{\phi}{x_{j}} H_{\phi \phi} \\= 
n_{i} n_{j} H_{rr} + \frac{n_{z} n_i-\delta_{iz}}
{r \sqrt{1 - n_{z}^{2}}} \frac{n_{z} n_j-\delta_{jz}}
{r \sqrt{1 - n_{z}^{2}}} H_{\theta \theta} + \frac{\epsilon_{izm}n_m}{r(1-n_z^2)} \frac{\epsilon_{jzn}n_n}{r(1-n_z^2)} H_{\phi \phi} \\ =
n_{i} n_{j} \partial_{r}^{2} F + \left(\delta_{ij} - n_{i} n_{j}\right) \frac{\partial_{r} F}{r}
\]



(b)（4分）代入给定的  $\Phi$ ，求径向和两个横向的潮汐本征值。找出径向拉伸、径向压缩以及径向线性潮汐为零的区域或位置。是否有三个方向同时压缩的区域？

给定的 $\Phi$ 在径向的导数为
\[
\partial_{r}^{2} \Phi = - \partial_{r}^{2} \frac{G M}{\sqrt{r^{2}+b^{2}}} = GM\frac{b^2-2r^2}{(r^2+b^2)^{5/2}}
\]

\[
\frac{\partial_{r} \Phi}{r} = \frac{GM}{(r^{2} + b^{2})^{3/2}}
\]

潮汐张量在正交归一标架中的径向本征值为
\[
\mathcal{E}_{\hat{r}\hat{r}} = \partial_{r}^{2} \Phi = GM\frac{b^2-2r^2}{(r^2+b^2)^{5/2}}
\]
两个横向本征值
\[
\mathcal{E}_{\hat{\theta}\hat{\theta}} = \mathcal{E}_{\hat{\phi}\hat{\phi}} = \frac{\partial_{r} \Phi}{r} = \frac{GM}{(r^{2} + b^{2})^{3/2}}
\]
$\mathcal{E}_{\hat r\hat r}$ 的符号由 $b^{2} - 2r^{2}$ 决定，所以径向压缩的区域为 $0 < r < \frac{\sqrt{2}}{2} b$，径向拉伸的区域为 $r > \frac{\sqrt{2}}{2} b$，径向线性潮汐为零的位置是 $r = \frac{\sqrt{2}}{2} b$ 处的球面。

横向本征值恒为正，即横向在所有位置都压缩。所以三个方向同时压缩的区域为 $0 < r < \frac{\sqrt{2}}{2} b$



(c)（6分）用  $\nabla^{2}\Phi = 4\pi G\rho$ 求密度  $\rho(r)$，以及  $M_{\mathrm{enc}}(r) = 4\pi\int_{0}^{r}\rho(s)s^{2}\,\mathrm{d}s$，核对总质量。

\[
\nabla^2\Phi = \frac1{r^2}\frac{d}{dr}\left(r^2\frac{d\Phi}{dr}\right) = \frac{3 GM b^{2}}{(r^{2} + b^{2})^{5/2}}
\]
所以密度分布为
\[
\rho (r) = \frac{3 M b^{2}}{4 \pi (r^{2} + b^{2})^{5/2}}
\]
积分得到总质量
\[
M_{\rm enc} (r) = 4 \pi \int_{0}^{r} \rho (s) s^{2} \, \dd{s} = M \frac{r^{3}}{(r^{2} + b^{2})^{3/2}}
\]
当 $r \to \infty$ 的时候，$M_{\rm enc} (r) \to M$，总质量为 $M$



(d) （3分） 分别给出  $r \rightarrow 0$ 和  $r \gg b$ 时  $\rho$、 $M_{enc}$ 与潮汐本征值的领先行为。原点没有唯一的径向方向，这是否意味着潮汐张量在那里奇异？

当 $r \to 0$ 时，$\rho (0) \to \frac{3M}{4 \pi b^{3}}$，$M_{\rm enc} \simeq M r^{3}/b^{3} \to 0$，潮汐本征值 $\mathcal{E}_{\hat r\hat r} \to \frac{GM}{b^{3}}$，$\mathcal{E}_{\hat\theta\hat\theta} = \mathcal{E}_{\hat\phi\hat\phi} \to \frac{GM}{b^{3}}$

当 $r \gg b$ 时，$\rho(r) \simeq \frac{3 M b^{2}}{4 \pi r^{5}}$，$M_{\rm enc} (r) \simeq M\left(1 - \frac{3b^{2}}{2r^{2}}\right) \to M$，潮汐本征值 $\mathcal{E}_{\hat r\hat r} \simeq -\frac{2GM}{r^{3}}$，$\mathcal{E}_{\hat\theta\hat\theta} = \mathcal{E}_{\hat\phi\hat\phi} \simeq \frac{GM}{r^{3}}$

原点没有唯一的径向方向，但这并不意味着潮汐张量在那里奇异。用笛卡尔形式
\[
\mathcal{E}_{ij} = n_i n_j\, \partial_r^2\Phi + (\delta_{ij} - n_i n_j)\, \frac{\partial_r\Phi}{r},
\]
当 $r \to 0$ 时 $\partial_r^2\Phi$ 与 $\partial_r\Phi/r$ 都趋于同一个极限 $GM/b^{3}$，所以
\[
\mathcal{E}_{ij}(0) = \frac{GM}{b^{3}}\,\delta_{ij},
\]
有限且各向同性，这里的奇异性仅仅是坐标变换引入的。




### 相同的加速度读数，是否意味着相同的曲率？

考虑一族静态度规

$$
\mathrm{d}s^{2}=-N(x)^{2}\mathrm{d}t^{2}+\mathrm{d}x^{2}+\mathrm{d}y^{2}+\mathrm{d}z^{2},\qquad N(x)>0.
$$

取正交标架  $e_{\hat{0}} = N^{-1}\partial_{t}$、 $e_{\hat{x}} = \partial_{x}$，其余两方向同理。$N$ 为光滑函数，撇号表示对 $x$ 求导。

(a) （7分） 求全部非零 Christoffel 符号，计算  $R^{x} {}_{txt}$ 和  $R_{\hat{x}\hat{0}\hat{x}\hat{0}}$。说明其他方向的独立潮汐分量是否为零。

全部非零 Christoffel 符号为
\[
\begin{aligned}
\Gamma^{t}{}_{tx} &= \frac{N'\left(x\right)}{N\left(x\right)} \\
\Gamma^{t}{}_{xt} &= \frac{N'\left(x\right)}{N\left(x\right)} \\
\Gamma^{x}{}_{tt} &= N\left(x\right) N' \left(x\right)
\end{aligned}
\]
Riemann 张量的分量为
\[
R^{x}{}_{txt} = N(x) N''(x)
\]

\[
R_{x0x0} = g_{xx} R^{x} {}_{txt} = N(x) N''(x)
\]

转换到题给的 non-coordinate basis 下就是
\[
R_{\hat{x}\hat{0}\hat{x}\hat{0}} = N^{-2} R_{x0x0} = \frac{N''(x)}{N(x)}
\]
其他方向的独立潮汐分量都是 $0$，因为 Riemann tensor 的其他分量都为 $0$



(b)（7分）对坐标位置固定的观察者，求四速度、四加速度及加速度计读数。比较
$$
N_{1}(x)=1+ax\quad(x>-1/a),\qquad N_{2}(x)=e^{ax},\qquad a>0.
$$

两者在 $x=0$ 的加速度计读数与潮汐曲率分别如何？哪一个度规描述平直时空？仅凭 $x=0$ 处这一只静止加速度计的读数，能否区分这两个情形？

对于坐标位置固定的观测者，世界线为 $x = \text{const}$，归一化四速度为
\[
u^{\alpha} = \dv{}{\tau} x^{\alpha} = \begin{pmatrix}
N^{-1} \\
0 \\
0 \\
0
\end{pmatrix}, \qquad u_{\alpha}u^{\alpha} = -N^{2}\cdot N^{-2} = -1 .
\]
四加速度
\[
a^{\alpha} = \dv{}{\tau} u^{\alpha} + \Gamma^{\alpha}{}_{\beta\gamma}u^{\beta}u^{\gamma} = \Gamma^{\alpha}{}_{tt}(u^{t})^{2} = \frac{\Gamma^{\alpha}{}_{tt}}{N^{2}},
\]
只有 $x$ 分量非零
\[
a^{\alpha} = \begin{pmatrix}
0 \\
N'/N \\
0 \\
0
\end{pmatrix}
\]
加速度计读数
\[
\sqrt{a_{\alpha}a^{\alpha}} = \frac{|N'|}{N}
\]

比较两个函数在 $x = 0$ 处
\[
\frac{N_{1}'}{N_{1}} = \frac{a}{1 + ax} \;\xrightarrow{x = 0}\; a, \quad R_{\hat{x}\hat{0}\hat{x}\hat{0}} = \frac{N_{1}''}{N_{1}} = 0
\]
\[
\frac{N_{2}'}{N_{2}} = a,\quad R_{\hat{x}\hat{0}\hat{x}\hat{0}} = \frac{N_{2}''}{N_{2}} = a^{2} \neq 0
\]
即 $x = 0$ 处两只静止加速度计的读数都是 $a$，但潮汐曲率一个是 $0$，一个是 $a^{2}$。$N_{1}$ 描述平直时空。仅凭 $x = 0$ 处这一只静止加速度计的读数，不能区分这两个情形。



(c)（6分） 一个光子从固定于  $x_{e}$ 的发射者沿 $x$ 方向传播至固定于  $x_{r}$ 的接收者。由光子测地线方程说明  $p_{t}$ 沿途守恒，并求局部测得的能量比  $E_{r}/E_{e}$，结合  $N_{1}$，判断 “测到了频移” 是否足以证明时空具有非零曲率。

度规不依赖 $t$，$\xi = \partial_{t}$ 是 Killing 矢量，故 $p_{t} = \xi_{\mu}p^{\mu}$ 沿测地线守恒。如果直接从测地线方程出发
\[
\dv{p_{t}}{\lambda} = \frac{1}{2}g_{\alpha\beta,t}\,p^{\alpha}p^{\beta} = 0
\]

也可以得到这个结果。固定于 $x$ 的观察者局部测得的光子能量为
\[
E(x) = -p_{\mu}u^{\mu} = -p_{t}\,u^{t} = \frac{-p_{t}}{N(x)}
\]
$p_{t}$ 沿途守恒，因此
\[
\frac{E_{r}}{E_{e}} = \frac{N(x_{e})}{N(x_{r})}
\]
结合 $N_{1} = 1 + ax$
\[
\frac{E_{r}}{E_{e}} = \frac{1 + a x_{e}}{1 + a x_{r}} \neq 1
\]

上一问中已证明 $N_{1}$ 给出的是平直时空，所以测到了频移不足以证明时空具有非零曲率，频移只反映两点 $N(x)$ 之比，而曲率 $R_{\hat{x}\hat{0}\hat{x}\hat{0}} = N''/N$ 是二阶效应。



### Schwarz's child 时空：悬停与圆形自由落体

给定外部度规

$$
\mathrm{d}s^{2}=-f(r)\mathrm{d}t^{2}+\frac{\mathrm{d}r^{2}}{f(r)}+r^{2}\big(\mathrm{d}\theta^{2}+\sin^{2}\theta\mathrm{d}\phi^{2}\big),\qquad f(r)=1-\frac{2m}{r},\quad m=G M>0
$$

只考虑 $r > 2m$，不要求推导这一度规，也不讨论圆轨道的稳定性。

(a) （5分）计算  $\Gamma^{r} {}_{tt}$、 $\Gamma^{t} {}_{tr}$，以及赤道面上的  $\Gamma^{r} {}_{\phi\phi}$。无需列出全部联络系数。

\[
\Gamma^{r}{}_{tt} = \frac{1}{2}g^{rr}\left(-\partial_{r}g_{tt}\right) = \frac{f f'}{2} = \frac{m}{r^{2}}\left(1 - \frac{2m}{r}\right)
\]
\[
\Gamma^{t}{}_{tr} = \frac{1}{2}g^{tt}\partial_{r}g_{tt} = \frac{f'}{2f} = \frac{m}{r^{2}f} = \frac{m}{r(r - 2m)}
\]
\[
\Gamma^{r}{}_{\phi\phi} = -\frac{1}{2}g^{rr}\partial_{r}g_{\phi\phi} = -fr\sin^{2}\theta \xrightarrow{\theta = \pi/2}\; -fr = -(r - 2m)
\]



(b) （7分） 一个观察者固定于  $(r,\theta,\phi)$ 。求其归一化四速度、四加速度  $a^{\mu}$ 和加速度计读数  $\sqrt{a_{\mu}a^{\mu}}$ ；检验弱场极限。

固定观察者的归一化四速度为
\[
u^{\mu} = \left(f^{-1/2}, 0, 0, 0\right)
\]
四加速度为
\[
a^{\mu} = \Gamma^{\mu}{}_{tt}(u^{t})^{2} = \frac{\Gamma^{\mu}{}_{tt}}{f}
\]
只有径向分量非零
\[
a^{\mu} = \left(0, \frac{m}{r^{2}}, 0, 0\right)
\]
加速度计读数
\[
\sqrt{a_{\mu}a^{\mu}} = \sqrt{g_{rr}(a^{r})^{2}} = \frac{m}{r^{2}\sqrt{f}} = \frac{m}{r^{2}\sqrt{1 - 2m/r}}
\]
弱场极限 $r \gg m$
\[
\sqrt{a_{\mu}a^{\mu}} \simeq \frac{m}{r^{2}}\left(1 + \frac{m}{r} + \cdots\right) \xrightarrow{r \gg m} \frac{GM}{r^{2}}
\]
回到牛顿引力加速度。



(c) （9分） 一个有质量的试验粒子在赤道面上作圆形自由落体运动，$r$ 为常数。由测地线方程求  $\Omega = d\phi / dt$，再由  $u_{\mu} u^{\mu} = -1$ 求  $u^t = dt / d\tau$。计算当地静止观察者测得的粒子速率，确定允许类时圆轨道的半径范围。

赤道面上 $r = \text{const}$，故 $\dv[2]{r}{\tau} = 0$，测地线方程的径向分量给出
\[
\Gamma^{r}{}_{tt}(u^{t})^{2} + \Gamma^{r}{}_{\phi\phi}(u^{\phi})^{2} = 0
\longrightarrow
\frac{m f}{r^{2}}(u^{t})^{2} - fr(u^{\phi})^{2} = 0
\]
于是
\[
\Omega^{2} = \left(\dv{\phi}{t}\right)^{2} = \left(\frac{u^{\phi}}{u^{t}}\right)^{2} = \frac{m}{r^{3}}
\]
\[
\Omega = \sqrt{\frac{m}{r^{3}}}
\]

由归一化条件
\[
-1 = u_{\mu}u^{\mu} = -f(u^{t})^{2} + r^{2}(u^{\phi})^{2} = (u^{t})^{2}\left(-f + r^{2}\Omega^{2}\right)
\]
\[
u^{t} = \dv{t}{\tau} = \left(f - \frac{m}{r}\right)^{-1/2} = \left(1 - \frac{3m}{r}\right)^{-1/2}
\]

当地静止观察者的正交归一标架中，$u^{\hat t} = f^{1/2}u^{t}$、$u^{\hat\phi} = ru^{\phi}$，测得的粒子速率为
\[
v = \frac{u^{\hat\phi}}{u^{\hat t}} = \frac{r\Omega}{\sqrt{f}} = \sqrt{\frac{m/r}{1 - 2m/r}} = \sqrt{\frac{m}{r - 2m}}
\]
类时条件 $v < 1$ 等价于 $m < r - 2m$，所以允许类时圆轨道的半径范围为
\[
r > 3m
\]


(d) （4分） 上述两种运动都有 $r = \text{Const}$，为什么一种加速度计有读数，另一种为零？用径向四加速度的具体表达式解释，并说明  $\Omega$ 与局部测得的速率为何不是同一个物理量。

加速度计读数由四加速度 $a^{\mu} = \dd u^{\mu}/\dd\tau + \Gamma^{\mu}{}_{\nu\lambda}u^{\nu}u^{\lambda}$ 决定，联络项起关键作用。径向四加速度的具体比较
\[
a^{r}_{\rm fixed} = \Gamma^{r}{}_{tt}(u^{t})^{2} = \frac{m}{r^{2}} \neq 0
\]
\[
a^{r}_{\rm moving} = \Gamma^{r}{}_{tt}(u^{t})^{2} + \Gamma^{r}{}_{\phi\phi}(u^{\phi})^{2}
= \frac{mf}{r^{2}}(u^{t})^{2} - fr(u^{\phi})^{2} = 0
\]
悬停者没有角向运动，只有第一项，必须由火箭提供非零固有加速度；圆轨道粒子多了第二项，恰好与第一项抵消。所以圆轨道是自由落体，加速度计读数为零，粒子走测地线。

$\Omega$ 与局部测得的速率为何不是同一个物理量的原因是 $\Omega = \dd\phi/\dd t$ 是坐标角速度，其分子分母都是坐标量，$t$ 还是无穷远静止观测者的时间，它不是任何当地观测者的读数。当地速率
\[
v = \frac{r\,\dd\phi}{\sqrt{f}\,\dd t} = \frac{r\,\dd\phi}{\dd\tau_{\rm static}} = \frac{r\Omega}{\sqrt{f}}
\]
则是当地静止观测者用自己的固有时和正交归一尺测得的标架分量，是实际的仪器读数。



### 选做 会振荡的度规分量，一定能被探测到吗？

在闵可夫斯基背景上令  $C = \cos[\omega(t - z)]$， $0 < \epsilon \ll 1$、 $\omega > 0$。比较以下两组线性微扰，未列出的分量均为零：

$$
\mathbf{A}:\quad h_{00}=h_{z z}=2\epsilon C,\qquad h_{0z}=h_{z0}=-2\epsilon C;
$$

$$
\mathbf{B}:\quad h_{x x}=\epsilon C,\qquad h_{y y}=-\epsilon C.
$$

以下均只保留  $\epsilon$ 的一阶；可直接使用讲义中的线性化曲率和规范变换公式。

(a) （2分） 分别检验 Lorenz 条件  $\partial^{\nu}\bar{h}_{\mu\nu}=0$ 和真空波动方程  $\Box\bar{h}_{\mu\nu}=0$

先算迹
\[
\text{A}:  h = \eta^{\mu\nu}h_{\mu\nu} = -2\epsilon C + 2\epsilon C = 0 \\
\text{B}:  h = \epsilon C - \epsilon C = 0
\]
两组都迹零，故 $\bar{h}_{\mu\nu} = h_{\mu\nu}$

记 $\theta_{w} = \omega(t - z)$，$\partial_{t}C = -\omega\sin\theta_{w}$，$\partial_{z}C = \omega\sin\theta_{w}$，验证 Lorenz 条件
\[
\text{A}: \partial^{\nu}h_{0\nu} = -\partial_{t}h_{00} + \partial_{z}h_{0z} = 2\epsilon\omega\sin\theta_{w} - 2\epsilon\omega\sin\theta_{w} = 0
\]
\[
\partial^{\nu}h_{z\nu} = -\partial_{t}h_{z0} + \partial_{z}h_{zz} = -2\epsilon\omega\sin\theta_{w} + 2\epsilon\omega\sin\theta_{w} = 0 
\]
\[
\text{B}: \partial^{\nu}h_{x\nu} = \partial_{x}h_{xx} = 0, \quad \partial^{\nu}h_{y\nu} = \partial_{y}h_{yy} = 0
\]
两组都满足 Lorenz 条件。波动方程：两组的所有分量都正比于 $C = \cos[\omega(t-z)]$，而

\[
\Box C = (-\partial_{t}^{2} + \partial_{z}^{2})C = \omega^{2}C - \omega^{2}C = 0,
\]
所以两组都满足 $\Box\bar{h}_{\mu\nu} = 0$



(b) （4分） 计算两者的潮汐矩阵  $\pmb{\varepsilon}_{ij} = R_{i0j0}^{(1)}$，判断哪一组能产生真实的潮汐效应。

线性化 Riemann 张量为
\[
R^{(1)}_{\alpha\beta\gamma\delta} = \frac{1}{2}\left(\partial_{\gamma}\partial_{\beta}h_{\alpha\delta} - \partial_{\delta}\partial_{\beta}h_{\alpha\gamma} - \partial_{\gamma}\partial_{\alpha}h_{\beta\delta} + \partial_{\delta}\partial_{\alpha}h_{\beta\gamma}\right)
\]
潮汐矩阵
\[
\varepsilon_{ij} = R^{(1)}_{i0j0} = \frac{1}{2}\left(\partial_{j}\partial_{0}h_{i0} - \partial_{0}^{2}h_{ij} - \partial_{j}\partial_{i}h_{00} + \partial_{0}\partial_{i}h_{0j}\right)
\]

A 组：分量只涉及 $0, z$ 指标，唯一可能非零的是
\[
\varepsilon^{A}_{zz} = R_{z0z0} = \frac{1}{2}\left(\partial_{z}\partial_{0}h_{z0} - \partial_{0}^{2}h_{zz} - \partial_{z}^{2}h_{00} + \partial_{0}\partial_{z}h_{0z}\right) = -\epsilon(\partial_{t} + \partial_{z})^{2}C = 0
\]
因为 $C$ 只依赖 $t - z$，$(\partial_{t} + \partial_{z})C = 0$。故 $\varepsilon^{A}_{ij} = 0$，A 没有真实潮汐效应。

B 组：$h_{0\mu} = 0$，于是 $\varepsilon_{ij} = -\frac{1}{2}\ddot{h}_{ij}$
\[
\varepsilon^{B}_{ij} = \frac{\epsilon\omega^{2}}{2}\,C \begin{pmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 0
\end{pmatrix}
\]
B 有真实潮汐效应。



(c) （2分） 对其中可消去的一组，给出一个具体  $\xi^{\mu}$，使  $x^{\prime\mu} = x^{\mu} + \xi^{\mu}$ 后  $h_{\mu\nu}^{\prime} = 0$；核对符号。

可消去的是 A 组。取
\[
\xi_{0} = +\frac{\epsilon}{\omega}\sin\theta_{w}, \quad \xi_{z} = -\frac{\epsilon}{\omega}\sin\theta_{w}
\]
规范变换 $x'^{\mu} = x^{\mu} + \xi^{\mu}$ 下 $h'_{\mu\nu} = h_{\mu\nu} - \partial_{\mu}\xi_{\nu} - \partial_{\nu}\xi_{\mu}$，逐项核对符号
\[
2\partial_{0}\xi_{0} = 2\cdot\frac{\epsilon}{\omega}\cdot\omega C = 2\epsilon C = h_{00}, \quad
2\partial_{z}\xi_{z} = 2\cdot\left(-\frac{\epsilon}{\omega}\right)(-\omega C) = 2\epsilon C = h_{zz}
\]
\[
\partial_{0}\xi_{z} + \partial_{z}\xi_{0} = \left(-\frac{\epsilon}{\omega}\right)(\omega C) + \frac{\epsilon}{\omega}(-\omega C) = -2\epsilon C = h_{0z}
\]
所以 $h'_{\mu\nu} = h_{\mu\nu} - h_{\mu\nu} = 0$，A 组被规范变换完全消去。



(d) （2分） 对 B，取在零阶背景中静止、位于 $z=0$ 的参考自由粒子。在其平行移动正交标架中，另三个自由粒子于时刻  $t_{0}$ 分别沿 $x, y, z$ 方向相隔 $L$，且瞬时相对速度为零。求该瞬间的相对加速度，设  $L \omega \ll 1$。

参考粒子的平行移动正交标架在零阶就是笛卡尔标架，测地偏离方程给出
\[
\frac{D^{2}\xi^{\hat i}}{\dd\tau^{2}} \approx -R^{\hat i}{}_{\hat0\hat j\hat0}\,\xi^{\hat j} = -\varepsilon_{ij}\xi^{j}
\]
$L\omega \ll 1$ 保证相距 $L$ 的粒子处场的相位差可忽略，可在同一点 $z = 0$、$t = t_{0}$ 取值，该瞬时相对速度为零，故没有一阶的运动学修正。代入潮汐矩阵，三个粒子的相对加速度为
\[
\ddot{\xi}^{x}\big|_{t_{0}} = -\frac{\epsilon\omega^{2}L}{2}\cos(\omega t_{0})
\]
\[
\ddot{\xi}^{y}\big|_{t_{0}} = +\frac{\epsilon\omega^{2}L}{2}\cos(\omega t_{0})
\]
\[
\ddot{\xi}^{z}\big|_{t_{0}} = 0
\]



## 第二次作业

### 约定与要求

>  除第 5 题另作说明外，取 $c=1$、保留 $G$，号差为 $(-,+,+,+)$；$m=GM$ 表示几何质量长度。可引用讲义已证明的通式，但须给出本题的计算与物理解释。数值题须提交程序、标有坐标与单位的图和误差检查。第 4 题后半部分与第 5 题为选做。

### Lane–Emden 方程：中心展开与数值核验

考虑牛顿多方模型 $P = K\rho_0^{1+1/n}$，其中 $\rho_0$ 是静质量密度，$K>0$。可直接使用
\[
\rho_0 = \rho_{0c}\theta^n,\qquad r = \alpha\xi,\quad
\alpha^2 = \frac{(n+1)K}{4\pi G}\rho_{0c}^{1/n-1},\quad
\frac{1}{\xi^2}\frac{\mathrm{d}}{\mathrm{d}\xi}\left(\xi^2\theta'\right) = -\theta^n,
\]
以及正则中心条件 $\theta(0)=1$、$\theta'(0)=0$。$\xi_1$ 表示第一个正零点，$\omega_n = -\xi_1^2\theta'(\xi_1)$。无需重推无量纲化。

(a) (3分) 求中心展开 $\theta(\xi)$ 至 $\xi^4$ 项及 $\theta'(\xi)$ 至 $\xi^3$ 项，说明如何在小的 $\xi_0>0$ 处设置数值初值。

我们假设在中心附近 $\theta$ 可以展开为
\[
\theta (\xi) = 1 + c_{2} \xi^{2} + c_{3} \xi^{3} + c_{4} \xi^{4}
\]

\[
\theta'(\xi) = 2 c_{2} \xi + 3 c_{3} \xi^{2} + 4 c_{4} \xi^{3}
\]

所以 LE 方程的左侧可以化为
\[
\frac{1}{\xi^2}\frac{\mathrm{d}}{\mathrm{d}\xi}\left(\xi^2\theta'\right) = 6 c_{2} + 12 c_{3} \xi + 20 c_{4} \xi^{2}
\]
比较 $n$ 次方的近似形式
\[
\theta(\xi)^n
=1+n c_2\xi^2+n c_3\xi^3
+\left(n c_4+\frac{n(n-1)}{2}c_2^2\right)\xi^4
+O(\xi^5)
\]
得到 $n_{2} = -1/6, c_{3} = 0$，再利用
\[
20 c_{4} = - n c_{2}
\]

\[
c_{4} = \frac{n}{120}
\]

所以在 $0$ 附近的展开为
\[
\theta (\xi) = 1 - \frac{1}{6} \xi^{2} + \frac{n}{120} \xi^{4}
\]

\[
\theta'(\xi) = - \frac{1}{3} \xi + \frac{n}{30} \xi^{3}
\]

在小的 $\xi_0>0$ 处，对于 $n$ 阶 LE 方程，我们根据上式设置数值初值为 $\theta(\xi_{0}), \theta’(\xi_{0})$ 即可。



(b) (2分) 由 $R=\alpha\xi_1$、$M=4\pi\alpha^3\rho_{0c}\omega_n$ 求平均密度与中心密度之比。用 $n=1$ 的解析解 $\theta=\sin\xi/\xi$ 核验 $\xi_1$、$\omega_1$ 及该密度比，作为程序的对照。

平均密度为
\[
\bar{\rho} = \rho_{0c} \frac{\omega_{n}}{\xi_{1}^{3}}
\]
所以平均密度与中心密度之比为
\[
\frac{\bar{\rho}}{\rho_{0c}}  =\frac{\omega_{n}}{\xi_{1}^{3}}
\]
对于 $n= 1$ 的情形，由该解析解可以得到
\[
\xi_{1} = \pi, \quad \omega_{1} = -\xi_1^2\theta'(\xi_1) = - \pi^{2} \cdot (- \frac{1}{\pi}) = \pi
\]
此时密度比为
\[
\frac{\bar{\rho}}{\rho_{0c}} = \frac{1}{\pi^{2}}
\]


(c) (5分) 独立积分 $n=3/2$ 的方程，画出 $\theta(\xi)$ 和 $\rho_0/\rho_{0c}$，报告 $\xi_1$、$\omega_{3/2}$ 及平均密度比。改变起始半径，并将步长减半或收紧误差容限，列表检查端点结果至少达到 $10^{-4}$ 的相对稳定性。说明零点定位方法；不得将讲义表中的数值当作边界条件，也不要把负的 $\theta$ 直接取 $3/2$ 次幂。





### 各向同性坐标覆盖什么区域？

可直接引用 Schwarzschild 度规的各向同性形式与面积半径关系
\[
\mathrm{d}s^2 = -\left(\frac{1-m/(2\bar r)}{1+m/(2\bar r)}\right)^2\mathrm{d}t^2
+ \left(1+\frac{m}{2\bar r}\right)^4\left(\mathrm{d}\bar r^2 + \bar r^2\mathrm{d}\Omega^2\right),\quad
r = \bar r\left(1+\frac{m}{2\bar r}\right)^2,
\]
其中 $m>0$、$\bar r>0$，$\mathrm{d}\Omega^2 = \mathrm{d}\vartheta^2 + \sin^2\vartheta\,\mathrm{d}\phi^2$

(a) (4分) 求给定 $r>2m$ 对应的两个正根 $\bar r_\pm$ 及其乘积，并求 $r(\bar r)$ 的最小值。两支是否分别对应黑洞外部和内部？说明该表达式为何不能直接覆盖 $r<2m$。
\[
\bar{r} \left(1 + \frac{m}{2 \bar{r}}\right)^{2} = 0
\]
两个正根及其乘积为
\[
\bar r_{\pm} = \frac{r - m \pm \sqrt{r (r - 2m)}}{2}, \quad \bar r_{+} \bar r_{-} = \frac{m^{2}}{4}
\]
$r (\bar r)$ 的最小值出现在
\[
r' = \left(1 + \frac{m}{2 \bar{r}}\right)^{2} - \left(1 + \frac{m}{2 \bar{r}}\right) = 0
\]
处，也就是
\[
\bar r = \frac{m}{2} \Rightarrow r_{\rm min} = 2m
\]
所以对于所有正的 $\bar r$，只要 $\bar r \neq \frac{m}{2}$，就有 $r > 2m$ 成立。所以这个表达式只对应黑洞外部。



(b) (3分) 令 $q=m/\bar r$，把 $g_{tt}$ 和空间共形因子展开至 $q^2$，注明余项阶次。由球面大圆周长核对 $r$ 的几何意义，并解释空间线元“各向同性”是否足以说明空间平直。
\[
g_{tt} = -\left(\frac{1-m/(2\bar r)}{1+m/(2\bar r)}\right)^2  =- \left(\frac{1 - \frac{q}{2}}{1 + \frac{q}{2}}\right)^{2} \approx -1 + 2q - 2 q^{2} + O (q^{3})
\]
“空间共形因子”展开就是
\[
\left(1+\frac{m}{2\bar r}\right)^4 = \left(1+\frac{q}{2}\right)^4 \approx 1 + 2q + \frac{3}{2}q^{2} + O(q^{3})
\]

在固定 $t$ 和 $\bar{r}$ 的时候，这里的球面大圆周长就是有关
\[
\dd{\sigma}^{2} = \left(1 + \frac{m}{2 \bar{r}}\right)^{4} \bar{r}^{2} \dd{\Omega}^{2} = r^{2} \dd{\Omega}^{2}
\]
对应着大圆周长 $2 \pi r$，所以这里的 $r$ 代表了几何量。但是




(c) (3分) 在外支 $\bar r>m/2$ 求径向光线的坐标速率 $|\mathrm{d}\bar r/\mathrm{d}t|$，展开至 $q^2$。用当地静止观察者的钟尺求测得的光速，解释接近 $\bar r=m/2$ 时坐标速率趋零的含义。

在外支上的径向光线满足
\[
0 = -\left(\frac{1-m/(2\bar r)}{1+m/(2\bar r)}\right)^2\mathrm{d}t^2
+ \left(1+\frac{m}{2\bar r}\right)^4 \mathrm{d}\bar r^2
\]
所以
\[
\left|\dv{\bar{r}}{t} \right| = \frac{\left|1 - \frac{m}{2 \bar{r}}\right|}{(1 + \frac{m}{2 \bar{r}})^{3}} \approx 1 - 2q + \frac{9}{4} q^{2} + O (q^{3}) \quad (q < 1)
\]
在当地静止观测者的参考系中，$\dd{\tau} = \left|\frac{1 - \frac{q}{2}}{1 + \frac{q}{2}} \right| \dd{t}$ ，光速测出来是 
\[
c_{\rm LIF} =
\]


在接近 $\bar r=m/2$ 时坐标速率趋零的含义是



### 引力红移与运动发射者

在 Schwarzschild 外部令
\[
f(r) = 1-\frac{2m}{r},\qquad
\mathrm{d}s^2 = -f\,\mathrm{d}t^2 + f^{-1}\mathrm{d}r^2 + r^2\mathrm{d}\Omega^2.
\]
光子的守恒能量为 $\mathcal{E}=-p_t>0$，观察者 $u^\mu$ 测得的能量为 $E(u)=-p_\mu u^\mu=h_{\mathrm{P}}\nu$，$h_{\mathrm{P}}$ 为普朗克常数。接收者均在无穷远静止。可引用静态发射者在 $r_e>2m$ 处的频率比
\[
\frac{\nu_\infty}{\nu_{\mathrm{em}}} = \sqrt{f(r_e)},\qquad
z \equiv \frac{\lambda_\infty-\lambda_{\mathrm{em}}}{\lambda_{\mathrm{em}}} = \frac{\nu_{\mathrm{em}}}{\nu_\infty}-1.
\]

(a) (4分) 把地球、太阳和下表的中子星视为孤立、静态球对称天体，计算静止表面原子的精确红移 $z$ 与弱场近似 $GM/(Rc^2)$。对中子星给出弱场近似的相对误差，分母取精确值。

| 天体 | 质量 $M$ | 面积半径 $R$ |
|:---:|:---:|:---:|
| 地球 | $5.9722\times10^{24}\,\mathrm{kg}$ | $6.371\times10^{6}\,\mathrm{m}$ |
| 太阳 | $M_\odot$ | $6.957\times10^{8}\,\mathrm{m}$ |
| 中子星 | $1.4M_\odot$ | $12\,\mathrm{km}$ |

数值计算取
\[
G = 6.67430\times10^{-11}\,\mathrm{m^3\,kg^{-1}\,s^{-2}},\qquad
c = 2.99792458\times10^{8}\,\mathrm{m\,s^{-1}},
\]
\[
M_\odot = 1.98847\times10^{30}\,\mathrm{kg}.
\]



(b) (6分) 在发射事件处，原子相对当地静止标架以速率 $0\le\beta<1$ 向内运动，发射一个向外传播的径向光子。可写为
\[
e_{\hat 0} = f^{-1/2}\partial_t,\qquad
e_{\hat r} = f^{1/2}\partial_r,\qquad
u = \gamma\left(e_{\hat 0}-\beta e_{\hat r}\right),\qquad
p = E_{\mathrm{stat}}\left(e_{\hat 0}+e_{\hat r}\right),
\]
其中 $\gamma=(1-\beta^2)^{-1/2}$。用内积求 $\nu_\infty/\nu_{\mathrm{em}}$，并区分原子共动系中的 $h_{\mathrm{P}}\nu_{\mathrm{em}}$、当地静止者测得的 $E_{\mathrm{stat}}$ 和守恒量 $\mathcal{E}$。忽略发射反冲及原子对几何的影响。



(c) (6分) 原子改为从无穷远静止、径向自由下落。由 $u_t$ 守恒和 $u_\mu u^\mu=-1$ 求 $u^t$、$u^r$，以及当地静止者测得的 $\beta$。代入上一问，求在 $r_e$ 发射的向外径向光子的频率比。



(d) (4分) 在 $r_e=8m$ 比较静态原子与上述自由下落原子的频率比和红移。再以黑洞外部为背景，在 $r_e\to2m^+$ 时比较两种频率比随 $f(r_e)$ 趋零的阶次，解释运动为何会改变红移。这里的静态情形取自一族 $r_e>2m$ 的悬停者，并不假定视界上存在静止观察者。



### Penrose 过程：负能状态与分裂约束

考虑 Kerr 黑洞，$\chi = J/(GM^2)=0.8$、$m=GM$。在赤道面 $r=1.8m$ 处，已知零角动量观察者（ZAMO）的参数
\[
\alpha = 0.2469563,\qquad m\omega = 0.1936108,\qquad
\varpi/m = 2.1426878,\qquad m\Omega_H = 0.25,
\]
其中 $\alpha$ 为 lapse，$\omega$ 为拖曳角速度，$\varpi=\sqrt{g_{\phi\phi}}$。此处位于外视界 $r_+=1.6m$ 与赤道静止极限面 $r=2m$ 之间。可使用
\[
E = -p_t = \alpha E_{\mathrm{loc}}+\omega L,\qquad
L = p_\phi = \varpi p_{\hat\phi},\qquad
E-\Omega_H L \ge 0.
\]
最后一式仅是未来因果粒子穿过未来事件视界的必要条件。带帽分量及 $E_{\mathrm{loc}}$ 均由 ZAMO 测量，$E$ 为 Killing 能量。

(a) (4分) 某有质量粒子的局部三速度有以下候选值：

| | $v_{\hat r}$ | $v_{\hat\vartheta}$ | $v_{\hat\phi}$ |
|:---:|:---:|:---:|:---:|
| A | $-0.2$ | $0$ | $-0.8$ |
| B | $-0.2$ | $0$ | $-0.5$ |
| C | $-0.7$ | $0$ | $-0.8$ |

判断哪些候选值能代表有质量粒子，哪些具有负 $E$；写出此处负能所需的方位速度条件。解释负 $E$ 为何不表示当地仪器测得负能量。



(b) (6分) 另有三个拟议的内落粒子方案，粒子静质量均为 $\mu_p>0$，且 $p_{\hat\vartheta}=0$：
\[
(E,L) = (-\mu_p,-3m\mu_p),\qquad (-\mu_p,-5m\mu_p),\qquad (-\mu_p,-15m\mu_p).
\]
逐一检查视界必要条件、该事件处的未来指向条件 $E_{\mathrm{loc}}>0$，以及质壳条件是否允许实数的内向 $p_{\hat r}$。解释为什么通过这些检查，仍未完成一个可实现的 Penrose 分裂过程的论证。



**以下为选做（共 10分）：分裂反冲是否足够大？**

静质量为 $\mu$ 的母粒子从无穷远静止释放，$E_0=\mu$、$L_0=0$，在赤道面运动并到达上述事件，在此分裂为两个相同静质量 $\mu_d$ 的粒子。忽略分裂中的额外辐射。令 $v_*$ 为任一子粒子在母粒子瞬时静止系中的速率；此处时间平移 Killing 矢量 $\xi=\partial_t$ 满足 $\xi^2 = g_{tt} = 1/9$。

(c) (6分) 用局部四动量守恒求子粒子 Killing 能量的允许范围，以及出现负能子粒子所需的 $v_*$ 与 $\mu_d/\mu$ 条件。提示：把 $\xi$ 分解成平行和正交于母粒子四速度的两部分。



(d) (4分) 判断 $\mu_d=0.2\mu$ 时能否产生负能子粒子。再求 $\mu_d=0$ 极限下另一粒子 Killing 能量的最大局部运动学值，并说明它为何尚不能直接视为逃到无穷远处的可实现能量增益。



### TOV 数值模型与状态方程的有效范围

本题单独取 $G=c=1$，长度单位为 km。$\varepsilon$ 表示包括静质量能与内能的总能量密度，$P$ 为压强，$m_\star(r)$ 为包围的几何质量。采用玩具状态方程
\[
P = K\varepsilon^2,\qquad K = 140\ \mathrm{km^2},
\]
以及两组中心条件，其给定的 cgs 密度均表示 $\rho_E = \varepsilon_{\mathrm{phys}}/c^2$：
\[
A:\ \rho_{E,c} = 2.5\times10^{15}\ \mathrm{g\,cm^{-3}},\qquad
B:\ \rho_{E,c} = 2.5\times10^{16}\ \mathrm{g\,cm^{-3}}.
\]
注意，$P=K\varepsilon^2$ 与用静质量密度写出的 $P=K\rho_0^2$ 是不同的模型，不可在数值积分中互换。结构方程为
\[
\frac{\mathrm{d}m_\star}{\mathrm{d}r} = 4\pi r^2\varepsilon,\qquad
\frac{\mathrm{d}P}{\mathrm{d}r} = -\frac{(\varepsilon+P)(m_\star+4\pi r^3P)}{r(r-2m_\star)}.
\]
可引用讲义的中心展开；从足够小的 $r_0>0$ 出发，寻找第一次 $P(R)=0$ 的表面。记 $\mathcal{M}=m_\star(R)$，物理质量为 $M_{\mathrm{phys}}=c^2\mathcal{M}/G$。可取 $GM_\odot/c^2=1.476670$ km，其余常数见第 3 题。

(a) (4分) 从 SI 或 cgs 单位推导 $\rho_E$ 到 $\varepsilon$ [km$^{-2}$] 的换算，计算两组 $\varepsilon_c$ 和 $P_c$。写出中心初值的正则展开，并说明实际采用的 $r_0$ 与精度。



(b) (8分) 分别积分两个模型，报告 $R$、$M_{\mathrm{phys}}/M_\odot$ 和紧致度 $\mathcal{M}/R$，并画出 $\varepsilon(r)/\varepsilon_c$、$P(r)/P_c$ 及 $m_\star(r)/\mathcal{M}$。检查内部 $r>2m_\star(r)$ 和压强向外递减，说明表面的插值或事件定位方法。不能仅把最后一个正压网格点当作表面。



(c) (4分) 将步长减半或误差容限收紧，列表展示 $R$ 与 $\mathcal{M}$ 的相对变化均小于 $10^{-3}$；另改变 $r_0$ 检查起点影响。对于此状态方程，压强在表面趋零较平缓；可以推导并积分 $\mathrm{d}\varepsilon/\mathrm{d}r$，用 $\varepsilon=0$ 定位表面。



(d) (4分) 由 $c_s^2/c^2=\mathrm{d}P/\mathrm{d}\varepsilon$ 判断两组模型实际取样的密度区间是否满足因果声速条件，并求该状态方程允许的最大 $\rho_E$。“数值积分得到静态解”“物态在取样区间满足因果性”和“星体对径向扰动稳定”是否等价？说明本题计算能够、不能支持哪些结论。

提交内容：第 1 题及选做第 5 题的数值结果应可复现，附程序、参数设置、图及收敛表；无需使用指定的软件语言。

