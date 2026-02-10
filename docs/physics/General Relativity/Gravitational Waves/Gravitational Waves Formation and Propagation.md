# 引力波的产生、传播与探测

### 线性引力近似

在考虑引力波相关的问题的时候，我们一般在线性引力近似下进行求解。线性引力近似指的是假设引力波带来的度规是背景平直时空的度规叠加上一个微扰，即
$$
g_{\mu \nu} = \eta_{\mu \nu} + h_{\mu \nu}
$$
其中 $\eta_{\mu \nu}$ 是闵可夫斯基度规， $h_{\mu \nu}$ 是引力波带来的度规扰动。在线性引力的近似下求解问题的时候，由于我们一般仅仅保留到一阶近似，所以之前的各种物理量都可以用“背景时空+微扰”的方法进行线性展开。

#### 线性化爱因斯坦方程

在保留至一阶线性项的前提下，我们可以用这些符号线性化爱因斯坦方程。从 Christoffel 符号的分量形式出发
$$
\Gamma^\lambda {}_{\mu\nu} = \frac{1}{2}g^{\lambda\rho}(\partial_\mu g_{\nu\rho} + \partial_\nu g_{\rho\mu} - \partial_\rho g_{\mu\nu})
$$
此时随着 $x_{\mu}$ 变化而变化的部分是微扰项，所以
$$
\Gamma^{\lambda} {}_{\mu \nu} = \frac{1}{2} \eta^{\lambda \rho} (\partial_{\mu} h_{\nu \rho} + \partial_{\nu} h_{\rho \mu} - \partial_{\rho} h_{\mu \nu})
$$
再考虑黎曼张量
$$
R_{\mu \nu} = \partial_\lambda \Gamma^\lambda {}_{\mu\nu} - \partial_\nu \Gamma^\lambda {}_{\mu\lambda} + \Gamma^\lambda {}_{\lambda\rho}\Gamma^\rho {}_{\mu\nu} - \Gamma^\lambda {}_{\nu\rho} \Gamma^\rho {}_{\mu\lambda}
$$
我们带入上面克氏符的表达式，并且保留至 $h$ 的一阶项，可以得到以下形式
$$
R_{\mu \nu} = \partial_{\lambda} \Gamma^{\lambda} {}_{\mu \nu} - \partial_{\nu} \Gamma^{\lambda} {}_{\mu \lambda}
$$

$$
=\frac{1}{2} \eta^{\lambda \rho} \partial_{\lambda} (\partial_{\mu} h_{\nu \rho} + \partial_{\nu} h_{\rho \mu} - \partial_{\rho} h_{\mu \nu}) - \frac{1}{2} \eta^{\lambda \rho} \partial_{\nu} (\partial_{\mu} h_{\lambda \rho} + \partial_{\lambda} h_{\rho \mu} - \partial_{\rho} h_{\mu \lambda})
$$

$$
=\frac{1}{2} \eta^{\lambda \rho} (\partial_{\lambda} \partial_{\mu} h_{\nu \rho} + \partial_{\nu} \partial_{\rho} h_{\mu \lambda} - \partial_{\lambda} \partial_{\rho} h_{\mu \nu} - \partial_{\nu} \partial_{\mu} h_{\lambda \rho})
$$

$$
=\frac{1}{2} (\partial_{\lambda} \partial_{\mu} h^{\lambda} {}_{\nu} + \partial_{\nu} \partial_{\lambda} h^{\lambda} {}_{\mu} - \partial^{\lambda} \partial_{\lambda} h_{\mu \nu} - \partial_{\mu} \partial_{\nu} h)
$$



（其中 $h = h^{\nu} {}_{\nu}$ 代表了缩并后的微扰项 ）。再进行一次缩并，得到标量曲率为
$$
R = \eta^{\mu \nu} R_{\mu \nu} = \frac{1}{2} \eta^{\mu \nu} \eta^{\lambda \rho} (\partial_{\lambda} \partial_{\mu} h_{\nu \rho} + \partial_{\nu} \partial_{\rho} h_{\mu \lambda} - \partial_{\lambda} \partial_{\rho} h_{\mu \nu} - \partial_{\nu} \partial_{\mu} h_{\lambda \rho}) = 
\partial_{\mu} \partial_{\nu} h^{\mu \nu} - \partial^{\mu} \partial_{\mu} h
$$
所以，在线性引力近似下用 $h$ 表示的爱因斯坦方程为
$$
G_{\mu \nu} = R_{\mu \nu} - \frac{R}{2} \eta_{\mu \nu}
$$

$$
=\frac{1}{2} (\partial_{\lambda} \partial_{\mu} h^{\lambda} {}_{\nu} + \partial_{\nu} \partial_{\lambda} h^{\lambda} {}_{\mu} - \partial^{\lambda} \partial_{\lambda} h_{\mu \nu} - \partial_{\mu} \partial_{\nu} h) - \frac{1}{2} \eta_{\mu \nu} (\partial_{\lambda} \partial_{\rho} h^{\lambda \rho} - \partial^{\lambda} \partial_{\lambda} h)
$$

$$
=\frac{1}{2} (\partial_{\lambda} \partial_{\mu} h^{\lambda} {}_{\nu} + \partial_{\nu} \partial_{\lambda} h^{\lambda} {}_{\mu} - \partial^{\lambda} \partial_{\lambda} h_{\mu \nu} - \partial_{\mu} \partial_{\nu} h - (\partial_{\lambda} \partial_{\rho} h^{\lambda \rho}) 
\eta_{\mu \nu} + (\partial^{\lambda} \partial_{\lambda} h) \eta_{\mu \nu} )
$$

有时候也将 $\partial^{\lambda} \partial_{\lambda} = - \partial_{t}^{2} + \nabla^{2}$  记作 $\square$，则此时爱因斯坦场方程可以化为
$$
\partial_{\lambda} \partial_{\mu} h^{\lambda} {}_{\nu} + \partial_{\nu} \partial_{\lambda} h^{\lambda} {}_{\mu} - \square h_{\mu \nu} - \partial_{\mu} \partial_{\nu} h - (\partial_{\lambda} \partial_{\rho} h^{\lambda \rho}) \eta_{\mu \nu} + (\square h) \eta_{\mu \nu} = \frac{16 \pi G}{c^{4}} T_{\mu \nu}
$$
的形式。

#### Trace-reversed perturbation variable 和 Lorentz 规范

上面的爱因斯坦方程左侧由 6 项组成，形式十分复杂。但是我们如果引入
$$
\bar{h}_{\mu \nu} = h_{\mu \nu} - \frac{h}{2} \eta_{\mu \nu}
$$
即
$$
h_{\mu \nu} = \bar{h}_{\mu \nu} - \frac{1}{2} \bar{h} \eta_{\mu \nu}
$$
那么经过比较复杂的运算，上面的场方程就可以变为
$$
- \square \bar{h}_{\mu \nu} + \partial_{\lambda} \partial_{\mu} \bar{h}^{\lambda} {}_{\nu} + \partial_{\lambda} \partial_{\nu} \bar{h}^{\lambda} {}_{\mu} - \partial_{\lambda} \partial_{\rho} \bar{h}^{\lambda \rho} \eta_{\mu \nu} = 16 \pi T_{\mu \nu}
$$
我们称 $\bar{h}$ 这样的的代换为 trace-reversed perturbation variable，顾名思义，它的迹和 $h$ 的迹是相反数（从表达式中很容易看出这一点）。上述表达式就没有进一步简化的空间了吗？并不尽然。事实上，通过重新选取坐标系的方式，我们可以对 $\bar{h}$ 的分量进行一次规范变换，使其满足 Lorentz 规范
$$
\partial_{\lambda} \bar{h}^{\mu \lambda} = 0
$$
则场方程在这一规范下可以化为极其简洁的形式
$$
\square \bar{h}_{\mu \nu} = - 16 \pi T_{\mu \nu}
$$
在远离源的区域，这一方程显然有波动形式的解，即
$$
h_{\mu \nu} (t, \vec{x}) = h_{\mu \nu} (t - x)
$$
注：存在满足一种规范的形式并非一件显然的事情。对于 Lorentz 规范的存在性证明如下，感兴趣的同学可以自行 follow。

首先，让我们想象两个坐标系 $x^{\mu}$ 和 $x^{\mu^{\prime}}$，它们之间相差一个非常小的量 $\xi^{\mu}$

$$
x^{\mu}=x^{\mu^{\prime}}-\xi^{\mu}
$$

那么，在 $\xi$ 的一阶近似下，两个系统中的度规通过以下方式相关

$$
g_{\mu^{\prime}, \nu^{\prime}}\left(x^{\prime}\right) =\frac{\partial x^{\alpha}}{\partial x^{\mu^{\prime}}} \frac{\partial x^{\beta}}{\partial x^{\nu^{\prime}}} g_{\alpha \beta}(x)
$$

$$
=\left(\delta_{\mu}^{\alpha}-\partial_{\mu^{\prime}}\xi^{\alpha}\right)\left(\delta_{\nu}^{\beta}-\partial_{\nu^{\prime}}\xi^{\beta}\right)\left[g_{\alpha \beta}\left(x^{\prime}\right)-\partial_{\sigma}g_{\alpha \beta}\left(x^{\prime}\right) \xi^{\sigma}\right]
$$

$$
=g_{\mu \nu}(x)-\partial_{\mu}\xi^{\alpha} g_{\alpha \nu}-\partial_{\nu}\xi^{\beta} g_{\mu \beta}-\partial_{\sigma}g_{\mu \nu} \xi^{\sigma}
$$

这是对于一般无穷小坐标变换的情况。在闵可夫斯基时空的特殊情况下，我们可以忽略最后一项（在线性引力理论中是二阶项），于是有
$$
\begin{aligned}
g_{\mu^{\prime}, \nu^{\prime}}\left(x^{\prime}\right)-g_{\mu \nu}(x)=-\partial_{\mu}\xi_{\nu}-\partial_{\nu}\xi_{\mu} .
\end{aligned}
$$

因此，一个无穷小的坐标变换，$h$ 会按照以下方式改变度规扰动

$$
\begin{aligned}
\Delta h_{\mu \nu}=-\partial_{\mu}\xi_{\nu}-\partial_{\nu}\xi_{\mu}
\end{aligned}
$$

或者写成  trace-reversed perturbation variable 的形式，那就是

$$
\Delta \bar{h}_{\mu \nu}=-\partial_{\mu}\xi_{\nu}-\partial_{\nu}\xi_{\mu}+\eta_{\mu \nu} \partial_{\alpha}\xi^{\alpha}
$$

在求解爱因斯坦方程时，通常的做法是施加规范条件：在度规张量上添加新的条件，直到坐标系被唯一确定。在这样做时，必须证明规范条件可以通过适当选择 $\xi$ 来满足。在施加了4个规范条件（选择坐标系的自由度数量）之后，度规就被确定了。

在使用洛伦兹规范之前，我们必须证明它的存在性，即我们总能找到一个 $\xi$，将任意扰动的闵可夫斯基空间转变为满足上述方程的空间。为此，规范变换会导致一个新的 trace-reversed perturbation variable

$$
\bar{h}^{\prime}_{\mu \nu} = \bar{h}_{\mu \nu} - \partial_{\mu}\xi_{\nu} - \partial_{\nu}\xi_{\mu} + \eta_{\mu \nu} \partial_{\alpha}\xi^{\alpha}.
$$

取散度得到

$$
\partial_{\alpha}\bar{h}^{\prime \mu \alpha} = \partial_{\alpha}\bar{h}^{\mu \alpha} - \partial_{\alpha}\partial^{\mu}\xi^{\alpha} - \partial_{\alpha}\partial^{\alpha}\xi^{\mu} + \partial_{\beta}\partial_{\alpha}\xi^{\beta} \eta^{\mu \alpha}
$$

$$
= \partial_{\alpha}\bar{h}^{\mu \alpha} - \square \xi^{\mu}
$$

因此，如果我们能选择 $\square \xi^{\mu} = \partial_{\alpha}\bar{h}^{\mu \alpha}$，那么变换后的系统就处于洛伦兹规范中。对于任何函数 $f$，总存在一个函数 $F$ 使得 $\square F = f$（这是一个数学问题，反正这个结论是对的）。因此，总存在满足洛伦兹条件的规范选择。

### 引力波解以及引力波的传播

让我们考虑一列弯曲时空传播的引力波。假设其波长 $\lambda$ 远小于局部的曲率半径 $R \sim 1/\sqrt{R_{\alpha\beta\gamma\delta}}$ 以及时空曲率发生显著变化的特征尺度 $\mathcal{L} \sim R/\partial R$，比如对地球来说 $\mathcal{L}$ 大概就是地球半径
$$
\lambda \ll \{ R, \mathcal{L} \}
$$

我们可以将黎曼曲率张量分成两个部分：一个部分是背景黎曼曲率 $R^B_{\alpha\beta\gamma\delta}$，作为对黎曼曲率张量的局部平均
$$
R^B_{\alpha\beta\gamma\delta} = \langle R_{\alpha\beta\gamma\delta} \rangle
$$
这里 $\langle \ \rangle$ 意味着对局部好几个波长范围内的平均。另一个部分是一个振动项，或者叫引力波项 $R^{GW}_{\alpha\beta\gamma\delta}$
$$
R_{\alpha\beta\gamma\delta} = R^B_{\alpha\beta\gamma\delta} + R^{GW}_{\alpha\beta\gamma\delta}
$$
同理，我们也可以把时空度规作类似分解
$$
g_{\alpha\beta} = g^B_{\alpha\beta} + h_{\alpha\beta} \ , \quad g^B_{\alpha\beta} = \langle g_{\alpha\beta} \rangle
$$

因此，背景 $R^B_{\alpha\beta\gamma\delta}$ 也可由 $g^B_{\alpha\beta}$ 计算出来。在一般情况下引力波带来的时空扰动都是比较弱的。因此我们可以把 $h_{\alpha\beta}, R^{GW}_{\alpha\beta\gamma\delta}$ 当作在背景时空下的线性扰动。（注：接下来为了区分对于完整时空度规的导数和对于时空背景的导数，我们用 $;$ 代表对于完整时空的协变导数，用 $|$ 代表对于时空背景的协变导数）当我们计算协变导数时，在一阶近似下，我们可以把对完整时空度规相应的导数替换成直接用背景时空度规 $g^B_{\alpha\beta}$ 计算的协变导数，比如 $R^{GW}_{\alpha\beta\gamma\delta;\mu} = R^{GW}_{\alpha\beta\gamma\delta|\mu}$。因此，我们可以选取背景时空中的局部惯性系来计算 $R^{GW}_{\alpha\beta\gamma\delta}$。通过非常复杂的计算，我们可以得到
$$
R^{GW}_{\alpha\beta\gamma\delta} = \frac{1}{2} ( h_{\alpha\delta|\beta\gamma} + h_{\beta\gamma|\alpha\delta} - h_{\alpha\gamma|\beta\delta} - h_{\beta\delta|\alpha\gamma} )
$$

我们可以看到上述式子中的指标选取和 $R^{GW}_{\alpha\beta\gamma\delta}$ 的对称性
$$
R_{\alpha\beta\gamma\delta} = -R_{\beta\alpha\gamma\delta}, \quad R_{\alpha\beta\gamma\delta} = -R_{\alpha\beta\delta\gamma}, \quad R_{\alpha\beta\gamma\delta} = R_{\gamma\delta\alpha\beta}
$$
是一致的。这种指标组合在引力波理论中很常见，因此我们也可以用一个简写记号 $\{\ \}$ 来代替
$$
S_{\{\alpha\beta\gamma\delta\}} = S_{\alpha\beta\gamma\delta} + S_{\beta\gamma\alpha\delta} - S_{\alpha\gamma\beta\delta} - S_{\beta\delta\alpha\gamma}
$$
在这个记号下
$$
R^{GW}_{\alpha\beta\gamma\delta} = \frac{1}{2} h_{\{\alpha\beta|\gamma\delta\}}
$$

#### 引力波的极化

有了引力波的解，我们可以来看它们的极化问题。 $R^{GW}_{\alpha\beta\gamma\delta}$ 本身会有 $20$ 个自由的分量，但是我们可以利用对称性消去其中的大部分自由度。注意到利用 Bianchi 恒等式
$$
R^\alpha_{\beta\gamma\delta;\epsilon} + R^\alpha_{\beta\delta\epsilon;\gamma} + R^\alpha_{\beta\epsilon\gamma;\delta} = 0
$$
可以证明 $R^{GW}_{\alpha\beta xy} = 0, \ R^{GW}_{\alpha\beta xz} = -R^{GW}_{\alpha\beta x0}, \ R^{GW}_{\alpha\beta yz} = -R^{GW}_{\alpha\beta y0}$。同时因为黎曼张量的对称性
$$
R_{\alpha\beta\gamma\delta} = -R_{\beta\alpha\gamma\delta}, \ R_{\alpha\beta\gamma\delta} = -R_{\alpha\beta\delta\gamma}, \ R_{\alpha\beta\gamma\delta} = R_{\gamma\delta\alpha\beta}
$$
使得所有的分量都能用 $R^{GW}_{j0k0}$ 表示。最后，由于 $R_{\alpha\beta} = 0 = R^\mu_{\alpha\mu\beta}$，我们可以得到

$$
R^{GW}_{z0z0} = R^{GW}_{z0x0} = R^{GW}_{z0y0} = 0
$$
且 $R^{GW}_{x0x0} = -R^{GW}_{y0y0} \equiv -\frac{1}{2} \ddot{h}_+(t-z), \quad R^{GW}_{x0y0} = R^{GW}_{y0x0} \equiv -\frac{1}{2} \ddot{h}_\times(t-z)$

这里两个独立非0的分量分别被定义成了两个无量纲函数的导数： $h_+, h_\times$ 这里 $\ddot{ \ } \equiv \partial^2/\partial t^2$。由于 $z0z0, z0x0, z0y0$ 分量全为0，所以对应的 $\mathcal{E}_{zz}, \mathcal{E}_{yz}, \mathcal{E}_{xz}$ 全为0，所以此波为横波，因为它没有传播方向 $z$ 方向的分量。而 $R^{GW}_{x0x0} = -R^{GW}_{y0y0} \Rightarrow \mathcal{E}^{GW}_{xx} = -\mathcal{E}^{GW}_{yy}$，所以 $\mathcal{E}^{GW}$ 的迹为 $0$。这两个性质：Transverse 和 Traceless 通常被简称为 TT， $h_+$ 和 $h_\times$ 通常被称为引力波场中“+”偏振态和“$\times$”偏振态。

因此我们可以利用两个偏振态基矢来重构所有的黎曼张量分量。首先我们定义 $e^+ = \vec{e}_x \otimes \vec{e}_x - \vec{e}_y \otimes \vec{e}_y, \, e ^\times = \vec{e}_x \otimes \vec{e}_y + \vec{e}_y \otimes \vec{e}_x$和一个 $2$ 阶引力波场
$$
h^{TT}_{\alpha\beta} = h_+ e^+_{\alpha\beta} + h_\times e^\times_{\alpha\beta}
$$
那么对应的黎曼张量则是
$$
R^{GW}_{\alpha\beta\gamma\delta} = \frac{1}{2} h^{TT}_{\{\alpha\beta|\gamma\delta\}}
$$
即
$$
\quad R^{GW}_{0j0k} = -\frac{1}{2} \ddot{h}^{TT}_{jk}
$$
我们发现这样通过极化张量 $e_+, e_\times$ 定义出来的 $h_+, h_\times$ 和我们之前通过 $R^{GW}_{x0x0}$ 和 $R^{GW}_{x0y0}$ 定义的 $h_+, h_\times$ 是一致的。

#### 引力波和物质的相互作用

考虑一团自由漂浮在空间的粒子。设想有个局部惯性系在粒子团的中心的一个粒子处，而其它粒子的相对位置 $\xi^j = x^j + \delta x^j$，其中 $x^j$ 是引力波来之前其它粒子的位置， $\delta x^j$ 是引力波来之后位置的改变。我们代入测地线偏离方程：
$$
\frac{d^2 \delta x^j}{dt^2} = - R^{GW}_{j0k0} x^k = \frac{1}{2} \ddot{h}^{TT}_{jk} x^k
$$
把此方程对时间作两次积分
$$
\delta x^j = \frac{1}{2} h^{TT}_{jk} x^k
$$

如果来的引力波是“+”偏振，我们得到
$$
\delta x = \frac{1}{2} h_+ x, \quad \delta y = -\frac{1}{2} h_+ y, \quad \delta z = 0
$$
粒子的运动垂直于 $z$ 方向（横波）。而初始在 $x-y$ 平面上的一个环状的粒子分布将随着引力波的到达在 $x$ 方向拉长和 $y$ 方向压缩，或反过来。由于 $R_{x0x0} = -R_{y0y0}$，压缩的程度一直和拉长的程度一样，因此这个椭圆的面积和初始的圆面积一样。

$h_+$ 偏振波的效应能用潮汐力场的形式表达
$$
\frac{d^2 \delta \vec{x}}{dt^2} = \frac{1}{2} \ddot{h}_+ (x \vec{e}_x - y \vec{e}_y)
$$

所以这个场的散度为0 $[\nabla \cdot (\ ) = 0]$，它可以像电场一样用电力线来描述场，此处我们就唤作潮汐力线，可以看出来整个力线的分布是遵循二极矩的形式。

同理的，当入射的引力波是“$\times$”偏振态，那时粒子的位移则是
$$
\delta x = \frac{1}{2} h_\times y, \quad \delta y = \frac{1}{2} h_\times x, \quad \delta z = 0
$$
而此时的加速度场为
$$
\frac{d^2 \delta \vec{x}}{dt^2} = \frac{1}{2} \ddot{h}_\times (y \vec{e}_x + x \vec{e}_y)
$$

### 引力波的能动张量和辐射功率

1968年 Richard Isaacson 发现了推导引力波能动张量的方法。我们考虑将度规张量 $g_{\mu\nu} = g^B_{\mu\nu} + \epsilon h_{\mu\nu}$，其中 $\epsilon$ 是一个微扰用的小量。将这个度规代入爱因斯坦张量
$$
G_{\alpha\beta} = G^B_{\alpha\beta} + \epsilon G^{(1)}_{\alpha\beta} + \epsilon^2 G^{(2)}_{\alpha\beta} + \dots = 0
$$
这里我们将爱因斯坦张量按照 $g_{\mu\nu}$ 中 $\epsilon$ 的阶数作展开。 $G^B_{\alpha\beta}$ 是用 $g^B_{\mu\nu}$ 算的爱因斯坦张量， $G^{(1)}$ 是线性部分（正比于 $h_{\mu\nu}$ 的大小）， $G^{(2)}$ 是平方阶。由于引力波是波动，我们可以在 $\lambda \ll L \ll R$ 的范围内进行平均。注意到 $\langle G^{(1)}_{\alpha\beta} \rangle = 0$，所以
$$
G^B_{\alpha\beta} = - \langle G^{(2)}_{\alpha\beta} \rangle \equiv 8\pi T^{GW}_{\alpha\beta}
$$

因此，我们可以把 $-\frac{1}{8\pi} \langle G^{(2)}_{\alpha\beta} \rangle$ 看成是引力波的能动张量
$$
T^{GW}_{\alpha\beta} = - \frac{1}{8\pi} \langle G^{(2)}_{\alpha\beta} \rangle
$$
由于这个定义的来源是用了空间平均，所以相应的引力波能动张量在小于波长的尺度上没有定义。在近场中，当我们关注 $L < \lambda$ 范围内的时空动力学，此关系就不适用。但在远场时，我们可以看到这个表达式满足能动张量所需的性质，尤其是由于 $G^B_{\alpha\beta|\beta} = 0$ (Bianchi 恒等式)，所以
$$
T^{GW}_{\alpha\beta|\beta} = 0
$$
所以它满足能动张量的守恒方程。我们可以代入平坦背景，求出 $G^{(2)}_{\alpha\beta}$，最后得到（这一步涉及比较复杂的推导，出于篇幅原因在此不再展示）
$$
T^{GW}_{\alpha\beta} = \frac{1}{16\pi} \langle h_{+,\alpha} h_{+,\beta} + h_{\times,\alpha} h_{\times,\beta} \rangle
$$
当引力波是沿着 $z$ 方向传播的平面波时， $h_+ = h_+(t-z), h_\times = h_\times(t-z)$，我们会发现能动张量的非零分量为
$$
T^{GW}_{00} = T^{GW}_{0z} = T^{GW}_{z0} = T^{GW}_{zz} = \frac{1}{16\pi} \langle \dot{h}_+^2 + \dot{h}_\times^2 \rangle
$$
与电磁波的能动张量 $T_{EM} \propto E^2 + B^2$ 很类似。考虑一个弱引力，接近能用牛顿力学描述的系统。它的牛顿引力势为
$$
\Phi(\vec{x}) = - \int \frac{\rho(\vec{x}')}{|\vec{x}-\vec{x}'|} dV_{x'}
$$
其中 $\frac{1}{|\vec{x}-\vec{x}'|}$ 可以在 Cartesian 坐标系下展开
$$
\frac{1}{|\vec{x}-\vec{x}'|} = \frac{1}{r} + \frac{x^j x'^j}{r^3} + \frac{x^j x^k (3 x'^j x'^k - r'^2 \delta_{jk})}{2r^5} + \dots
$$
所以 $\Phi$ 可以写作
$$
\Phi(\vec{x}) = - \frac{M}{r} - \frac{3 I_{jk} x^j x^k}{2r^5} + \dots
$$
其中 $M = \int \rho dV_x$ ， $I_{jk} = \int \rho (x_j x_k - \frac{1}{3} r^2 \delta_{jk}) dV_x$ （注意这个四极矩经过和电动力学中多级展开里电四极类似的重定义，使其迹为 $0$）。由于振动的四极矩能产生引力波。这些波应该描述满足

$$
\partial^{\alpha} \partial_{\alpha} \bar{h}_{\mu\nu} = 0, \quad \partial^{\nu} \bar{h}_{\mu \nu} = 0
$$
在近场，有
$$
\bar{h}_{00} = \frac{3 I_{jk} x^j x^k}{r^5} = \frac{1}{2} (\bar{h}_{00} + \bar{h}_{xx} + \bar{h}_{yy} + \bar{h}_{zz})
$$
可以证明，满足要求的解为 
$$
\bar{h}_{00} = 2 \left[ \frac{\ddot{I}_{jk}(t-r)}{r} \right]_{,jk}, \ \bar{h}_{0j} = 2 \left[ \frac{\ddot{I}_{jk}(t-r)}{r} \right]_{,k}, \ \bar{h}_{jk} = \frac{2}{r} \frac{\ddot{I}_{jk}(t-r)}{r}
$$
在远场 $r \gg \lambda$ 时， $\bar{h}_{\alpha\beta}$ 的 $f(t-r)/r$ 的表达形式描述了出射波。而出射波的振幅 $A \propto 1/r$。我们可以从 $\bar{h}_{jk}$ 来计算它的 TT 分量
$$
h^{TT}_{jk} = 2 \left[ \frac{\ddot{I}_{jk}(t-r)}{r} \right]^{TT}
$$
这被称为引力波产生的四极矩公式。虽然在推导它的时候我们假设波源是牛顿的（即弱引力，低速），但仔细回顾推导细节我们发现实际上我们只用到了爱因斯坦方程的线性近似，以及在远场引力微弱的假设。因此，四极矩公式也适用于内部引力较强的波源，比如中子星。当然，对于此等波源，当我们在远场读出 $I_{jk}$ 时，它的含义不一定和通常意义下定义的质量四极矩一致。

当波源的确近似为牛顿波源时，我们在远场测量得到的 $I_{jk}$ 和质量四极
$$
I^n_{jk} = \int \rho x_j x_k dV_x
$$
一致。所以引力波的二极矩公式就是
$$
h^{TT}_{jk} = 2 \left[ \frac{\ddot{I}^n_{jk}(t-r)}{r} \right]^{TT}
$$
在数量级上，由于 $I^n_{jk}$ 的二次时间导数大致就是
$$
\ddot{I}^n_{jk} \sim \int \rho v_j v_k dV_x \sim E_{k}
$$
由于引力波本身携带能量和动量，那么波源通过引力波辐射必定会损失能量和动量。我们可以利用引力波的能动张量 $T^{GW}_{\mu\nu}$，对一个半径为 $r$ 的球面积分，从而算出质量和能流
$$
\frac{dM}{dt} = - \frac{1}{5} \langle \dddot{I}_{jk} \dddot{I}_{jk} \rangle
$$

$$
\frac{dS_i}{dt} = - \frac{2}{5} \epsilon_{ijk} \langle \ddot{I}_{jm} \dddot{I}_{km} \rangle
$$

且 $\frac{dP_j}{dt} = 0$ (动量的变化出现在更高阶项上，我们在此不讨论)。

### 引力波的探测

目前的引力波探测装置主要有 LIGO， VIRGO 等。这些探测器采用迈克耳孙构型，并通过在干涉仪臂中添加法布里-珀罗腔以进一步增强最终的信号。下面简单讨论一个迈克尔逊构型的干涉装置对于引力波的响应。

在 TT 规范中，来自天空方向沿着 $\hat{n}$ 传播的平面引力波由下式给出
$$
h_{ij}(t,\vec{x}) = h_{+}(t,\vec{x}) e^{+}_{ij}(\hat{n}) + h_{\times}(t,\vec{x}) e^{\times}_{ij}(\hat{n})
$$
其中 $h_{+,\times}(t,\vec{x}) = h_{+,\times}(t + \vec{x} \cdot \hat{n})$，极化张量为
$$
e^{+}_{ij}(\hat{n}) = \ell_i \ell_j - m_i m_j
$$

$$
e^{\times}_{ij}(\hat{n}) = \ell_i m_j + \ell_j m_i
$$

单位矢量 $\hat{\ell}$ 和 $\hat{m}$ 的选择使得 $\hat{\ell}, \hat{m}, \hat{n}$ 构成右手正交基。与垂直于 $\hat{n}$ 的平面内 $\hat{\ell}$ 和 $\hat{m}$ 选择相关的旋转自由度通常称为极化角 $\beta$。考虑一个臂沿单位矢量 $\hat{a}$ 和 $\hat{b}$ 排列的迈克耳孙干涉仪。在长波近似下，引力波在探测器中产生的信号为
$$
V(t) = \frac{1}{2} (a_i a_j - b_i b_j) h_{ij}(t,\vec{0})
$$
其中我们假设探测器位于 $\vec{x} = \vec{0}$ 且其尺寸可以忽略。等效地，信号可以写为
$$
V(t) = F_{+}(\hat{n}) h_{+}(t) + F_{\times}(\hat{n}) h_{\times}(t)
$$
其中
$$
F_A(\hat{n}) = \frac{1}{2} (a_i a_j - b_i b_j) e^A_{ij}(\hat{n})
$$
是干涉仪对引力波两个独立极化（$A = +, \times$）的响应。在频域中，上式变为
$$
\tilde{V}(f) = F_{+}(\hat{n}) \tilde{h}_{+}(f) + F_{\times}(\hat{n}) \tilde{h}_{\times}(f)
$$
在下文中，波浪号始终表示相对于 $t$ 的傅里叶变换。

#### 单光子对引力波的响应

在具有引力波的时空中传播的光子的线元为
$$
ds^2 = -c^2 dt^2 + [\delta_{ij} + h_{ij}(t,\vec{x})] dx^i dx^j = 0
$$
考虑一个沿 $\hat{a}$ 方向发射的光子，被距离 $L$ 处的镜子反射回来。在前向路径上，未受扰动的光子轨迹为 $x^i = a^i \xi$，其中 $\xi \in [0, L]$。将此轨迹代入上式中并求解 $t$，我们得到
$$
c(t - t_0) = \int_0^\xi \left( 1 + h_{ij} a^i a^j \right)^{1/2} d\xi'
$$
设 $T$ 为标称光子 transit time $T \equiv L/c$。在引力波存在的情况下，其将略微偏离其在闵可夫斯基时空中的值，产生微小扰动
$$
\delta T(t) = \frac{1}{2c} a_i a_j \int_0^L h_{ij}\left( t_0 + \frac{\xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi \right) d\xi
$$
其中 $t_0$ 是光子传播的起始时间，可以近似为 $t_0 = t - T$。类似地，在返回路径上
$$
\delta T'(t) = \frac{1}{2c} a_i a_j \int_0^L h_{ij}\left( t_0 + \frac{L - \xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi \right) d\xi
$$
其中 $t_0$ 也可以近似为 $t_0 = t - T$。那么往返时间的扰动由下式给出
$$
\delta T_{\text{r.t.}}(t) = \delta T(t - T) + \delta T'(t)
$$

<!-- 
$$
\delta T (t - T) + \delta T' (t) = \frac{1}{2c} a_{i} a_{j} \int_{0}^{L} h_{ij}\left( t - 2T + \frac{\xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi \right) +  h_{ij}\left( t - T + \frac{L - \xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi \right) d \xi
$$

FT:

$$
\delta \tilde{T}_{\text{r.t.}} (\omega) = \frac{1}{2c} a_{i} a_{j} \int_{- \infty}^{\infty} \left[\int_{0}^{L} h_{ij}\left( t - 2T + \frac{\xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi \right) +  h_{ij}\left( t - T + \frac{L - \xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi \right) d \xi \right] e^{- i \omega t} dt
$$

$$
\int_{- \infty}^{\infty} h_{ij}\left( t - 2T + \frac{\xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi \right) e^{- i \omega t} \, dt = \tilde{h}_{ij} (\omega) e^{i \omega (-2T + \frac{\xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi)}
$$

$$
\int_{- \infty}^{\infty} h_{ij}\left( t - T + \frac{L - \xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi \right) e^{- i \omega t} \, dt = \tilde{h}_{ij} (\omega) e^{i \omega (-T + \frac{L - \xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi)}
$$

$$
\delta \tilde{T}_{\text{r.c.}} (\omega) = \frac{1}{2c} a_{i} a_{j} \tilde{h}_{ij} (\omega) \int_{0}^{L} e^{i \omega (-2T + \frac{\xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi)} + e^{i \omega (-T + \frac{L - \xi}{c} + \frac{\hat{n} \cdot \hat{a}}{c} \xi)} \, d \xi = \frac{1}{2c} a_{i} a_{j} \tilde{h}_{ij} (\omega)
$$ -->

在频域中，它可以写为
$$
\frac{\delta \tilde{T}_{\text{r.t.}}(f)}{T} = a_i a_j D(\hat{a}, f) e^A_{ij}(\hat{n}) \tilde{h}_A(f)
$$
其中传递函数定义为
$$
D(\hat{a}, f) = \frac{e^{-i 2\pi f T}}{2} \left[ e^{i \pi f T_+} \operatorname{sinc}(\pi f T_-) + e^{-i \pi f T_-} \operatorname{sinc}(\pi f T_+) \right]
$$
其中 $T_{\pm} \equiv T(1 \pm \hat{a} \cdot \hat{n})$ 是简写。进一步的分析需要从光子转向连续电磁波。

#### 电磁波对引力波的响应

假设沿着 $\hat{a}$ 方向传播的单频电磁波的场可以表示为
$$
\mathcal{E} (t, \vec{x}) = A e^{i(\omega t - k \vec{x} \cdot \hat{a})}
$$
在电磁波于一条臂中传播一个周期之后，相应场的相位延迟为
$$
 \omega(2T + \delta T_{\text{r.c.}}) = 2kL + \psi
$$
定义 $\psi(t) = \omega \delta T_{\text{r.c.}} (t)$，那么对于两条臂上返回的电磁波，其相位分别可以表示为
$$
\mathcal{E}_{a} = A_{0} e^{i(2kL + \psi_{a} (t))}
$$
以及
$$
\mathcal{E}_{b} = A_{0} e^{i(2kL + \psi_{b} (t))}
$$