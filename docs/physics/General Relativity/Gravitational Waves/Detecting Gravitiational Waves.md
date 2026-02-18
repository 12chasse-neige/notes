# 引力波的探测与数据分析

## 探测器对引力波的响应

<img src="./Detecting%20Gravitiational%20Waves.assets/image-20260211192111036.png" alt="image-20260211192111036" style="zoom:50%;" />
(图示：展示了不同频率的引力波源，从量子涨落到双黑洞并合)

目前人们主要关注的引力波集中在四个频率区间，而对应的探测手段也各有不同。

-   在 $10^{-15} - 10^{-18}$ Hz：来自宇宙早期的引力波会改变宇宙微波背景（CMB）辐射的极化。所以通过测量 CMB 的极化能够探寻原初引力波的存在。
-   在 $10^{-7} - 10^{-9}$ Hz：人们通过测量银河系内的脉冲星对地球射来的射电脉冲的到达时间来测量它们传播途中所受引力波的影响。近年来有越来越多迹象表明我们可能已经接近探测到这一频段的引力波，之后我们会专门讨论脉冲星阵列（PTA）的引力波探测。
-   在 $10^{-4} - 0.1$ Hz：人们将于 2030s 发射绕太阳（USA, LISA, 太极）或者绕地球（天琴）的卫星编队。通过测量卫星之间的激光通信时间，从而探测来自额外双超大质量黑洞，极端质量比旋进，银河系双白矮星等源的引力波。
-   在 $10 - 10^3$ Hz：LIGO/Virgo 的探测（恒星质量双黑洞，中子星等）取得了极大的成功。在下个十年人们将建造第三代探测器，比如欧洲的 Einstein Telescope 和美国的 Cosmic Explorer。中国也有可能建造专注千赫兹的 ($\le 4 \text{kHz}$) 探测器，从而与国外的探测器实现频率空间互补。

接下来我们来讨论最熟悉的情况，地面探测器的基本工作原理。我们将采取两种不一样的方法，一种引力波作用于镜子，一种引力波作用于光。两种观点最后导致一样的结果。

<img src="./Detecting%20Gravitiational%20Waves.assets/image-20260211193235366.png" alt="image-20260211193235366" style="zoom:50%;" />

### 引力波作用于光

接下来我们首先在 TT 规范下考虑干涉仪的响应。我们把干涉仪的双臂分别放在 $x$, $y$ 轴上。简单起见我们假设引力波沿着 $z$ 轴传播，极化（偏振）态为"+"。

$$
d s^2 = - dt^2 + (1+h_+(t-z)) dx^2 + (1-h_+(t-z)) dy^2 + dz^2
$$

简化起见我们省略下标 "+"。我们把分光镜 (Beam Splitter) 和后端镜 (End Mirror) 看作自由悬浮的物体，那么引力波来后，它们应该走测地线。另外，由于上述度规与 $x$, $y$ 无关，那么 $u_x, u_y$ 应该是守恒量（回忆之前证明克尔时空 $u_t, u_\phi$ 是守恒量时用到了 $g_{\alpha\beta}$ 与 $t$ 或 $\phi$ 无关）。又由于上述度规是对角的
$$
u^{x} = \frac{dx}{d \tau} = 0, \quad u^{y} = \frac{dy}{d \tau} = 0
$$
因此这些镜子的坐标都不变。当然，对于给定的 $\Delta x = \ell_x, \Delta y = \ell_y$，对应的真实长度 (proper length) 应该是

$$
L_{x} = \left(1 + \frac{1}{2}h(t)\right)\ell_x, \quad L_{y} = \left(1 - \frac{1}{2}h(t)\right)\ell_y
$$

当 $h>0$ 时，$x$ 臂伸长而 $y$ 臂缩短；反之 $x$ 臂缩短 $y$ 臂伸长。其次，让我们来考虑干涉仪中光的传播。考虑在 $t_i$ 从分光镜出发沿 $x$ 臂传播的光

$$
ds^2=0 \Rightarrow dt^2 = (1+h(t))dx^2
$$
由于臂长远小于波长，我们近似认为传播一个来回时 $h(t)$ 不变。所以到达 $x$ 后端镜时
$$
t_{x} - t_{i} = \left(1 + \frac{1}{2}h(t) \right) \ell_x = L_{x}
$$

而从 $x$ 后端镜返回分光镜

$$
t_{f_{x}} - t_{x} = \left(1 + \frac{1}{2} h(t) \right) \ell_x = L_x \Rightarrow t_{f_{x}} - t_{i} = 2L_{x}
$$

同理对于向 $y$ 臂传播又反射回来的光

$$
t_{f_y} - t_i = 2L_y \Rightarrow t_{f_x} - t_{f_y} = 2L_x - 2L_y = 2h(t)\ell
$$

如果光的频率是 $\omega_0$。反射回来的光的相位差是 
$$
\Delta \phi = \omega_0 (t_{f_x} - t_{f_y}) = 2\omega_0 h(t) \ell
$$
而此相位差会导致在暗口 (dark port) 两束光不再是完美相消，由此我们在 dark port 会观察到与 h 成正比的信号。

### 引力波作用于镜子

接下来我们讨论第二种观点。我们可以选取原点放在分光镜的局部惯性系 $g_{\alpha\beta} = \eta_{\alpha\beta} + O(R_{\mu\nu\lambda\rho} x^\lambda x^\rho)$，假设局部惯性系的坐标为 $(\hat{t}, \hat{x}, \hat{y}, \hat{z})$，那么新的度规可以通过如下的坐标系变换从原来的 TT 规范下的度规转换而来
$$
x = \left(1 - \frac{1}{2}h(\hat{t}-\hat{z})\right) \hat{x}, \quad y = \left( 1 + \frac{1}{2}h(\hat{t}-\hat{z})\right) \hat{y}
$$


$$
t = \hat{t} - \frac{1}{4}\dot{h}(\hat{t}-\hat{z})(\hat{x}^2-\hat{y}^2), \quad z = \hat{z} - \frac{1}{4}\dot{h}(\hat{t}-\hat{z})(\hat{x}^2-\hat{y}^2)
$$

从而得到

$$
ds^2 = -d\hat{t}^2 + d\hat{x}^2 + d\hat{y}^2 + d\hat{z}^2 + \frac{1}{2}(\hat{x}^2-\hat{y}^2)\ddot{h}(\hat{t}-\hat{z})(d\hat{t}-d\hat{z})^2
$$

虽然这个表达式是从 TT 规范变换而来，但可以证明它不仅在原点附近满足真空爱因斯坦方程：它自己就是一个严格解。在此参考系内的镜子的运动方程（通过计算 $\frac{d^2\hat{x}^j}{dt^2} = -R_{j0k0}^{GW} \hat{x}^k$）可以得到

$$
\begin{cases} 
\hat{x} = L_x = (1 + \frac{1}{2}h(\hat{t})) \ell_x, \quad \hat{y} = \hat{z} = 0 & \text{对于 x 臂的后端镜} \\ 
\hat{y} = L_y = (1 - \frac{1}{2}h(\hat{t})) \ell_y, \quad \hat{x} = \hat{z} = 0 & \text{对于 y 臂的后端镜} 
\end{cases}
$$

因此光从 $x$ 臂走一个来回和从 $y$ 臂走一个来回的相位差

$$
\Delta \phi \approx 2\omega_{0} h(t) \ell
$$

与之前在 TT 规范得到的一致。

在 TT 规范中（镜子不动光传播变化）和局部惯性系中（镜子受引力波影响光传播不变）我们对镜子和光的描述有所不同，某种程度类似于量子力学中薛定谔图象与海森堡图象。不管是用哪一种描述，最后的被测量量，暗口的相位差，总是一致的。对于实际的干涉仪，人们在每个臂还添加了额外的镜子使之成为 Fabry-Perot 光腔，这样每个臂的光强能得到提升，以增加灵敏度。

<img src="./Detecting%20Gravitiational%20Waves.assets/image-20260211193651142.png" alt="image-20260211193651142" style="zoom:50%;" />

## 探测器数据分析

接下来我们将讨论怎么从引力波探测器的数据中提取有用的信号，并进行分析。我们将集中讨论地面探测器的情况。为此我们先进行统计与随机过程的一些知识准备，以便之后的应用。

### 随机过程

考虑一个一维函数 $y(t)$，其中 $t$ 是时间，而 $y(t)$ 随时间的演化不依赖其初值。那么 $y(t)$ 就描述了一个随机过程。比如引力波探测器里的噪声就是一个随机过程。对于单一随机过程的时间演化是无法预测的，人们能做的是在概率意义上谈论其演化。而概率隐含的意义就是如果有很多类似的随机过程（比如来自平行宇宙），发生各种结果的分布是多少。而这些很多随机过程的集合被称为系综 (ensemble)。

随机过程的系综能被一个概率分布描述

$$
P_n(y_n, t_n; \cdots; y_2, t_2; y_1, t_1) dy_n \cdots dy_2 dy_1
$$

这个函数告诉我们此随机过程在 $t_1$ 时的值在 $(y_1, y_1+dy_1)$，...，$t_n$ 时值在 $(y_n, y_n+dy_n)$ 的概率。理论上如果我们知道了在 $t_1, t_2, \cdots, t_n$ 所有点的概率我们便有了整个系综的统计性质。但事实上很多时候系统处于某种统计平衡态，那时我们可以根据较少信息来计算 $P$。知道 $P$ 后，我们可以计算所谓的系综平均

$$
\langle y(t_1) \rangle = \int y_1 P_1(y_1, t_1) dy_1
$$

是 $y$ 在时间 $t_1$ 的系综平均，而

$$
\langle y(t_1) y(t_2) \rangle = \int y_2 y_1 P_2(y_2, t_2; y_1, t_1) dy_1 dy_2
$$

则是 $y(t_2)y(t_1)$ 的系综平均。在概率 $P_n$ 之外，我们还可以定义条件概率

$$
P_n(y_n, t_n | y_{n-1}, t_{n-1}; \cdots; y_1, t_1) dy_n
$$

代表已知 $y(t)$ 在 $t_1$ 时取值 $y_1$，…，$t_{n-1}$ 时取值 $y_{n-1}$，然后在 $t_n$ 时取值 $(y_n, y_n+dy_n)$ 区间的概率。根据定义我们有

$$
P_{n} (y_{n}, t_{n}; \cdots; y_{1}, t_{1}) = P_{n} (y_{n}, t_{n} | y_{n - 1}, t_{n - 1} ; \cdots ; y_{1}, t_{1}) P_{n-1}(y_{n-1}, t_{n-1}; \cdots; y_1, t_1)
$$

这个公式与条件概率公式 $P(A,B) = P(A|B)P(B) = P(B|A)P(A)$ 是一致的。由此知道所有 $P_1, P_2 \cdots P_n$ 我们可以计算出条件概率 $P_n$。反过来知道了条件概率 $P_2, P_3, \cdots$ 我们也可以从 $P_1$ 出发重构所有 $P_n$。

#### 稳态随机过程

当 $P_n$ 只与时间差而不是绝对时间相关时，此随机过程系综被认为是稳态随机过程。
$$
P_n(y_n, t_n+\tau; \cdots; y_1, t_1+\tau) = P_n(y_n, t_n; \cdots; y_1, t_1)
$$

当 $P_n$ 只与时间差相关时，相应的条件概率也只与时间差相关。

<img src="./Detecting%20Gravitiational%20Waves.assets/image-20260211234017377.png" alt="image-20260211234017377" style="zoom:50%;" />

注意此稳态性质并不意味着概率密度本身与时间无关。比如考虑一个分子的随机运动，如果已知在 $t_1$ 时 $v_1=0$，那么在 $t_2$ 时，$P_2(v_2, t_2 | 0, t_1)$ 便会比较集中在 $v_2=0$ 附近（如果 $t_2$ 与 $t_1$ 接近）。这个过程是稳态的，不管在哪个时间 $t_1, v=0$，在其之后的时间都有 $P_2(v_2, t_2 | 0, t_1) = P_2(v_2, t_2-t_1 | 0, 0)$。在这之后我们主要讨论稳态随机过程。我们将把 $P_1(y_1, t_1)$ 写作 $P(y_1)$，把 $P_2(y_2, t_2 | y_1, t_1)$ 写作 $P_2(y_2, t | y_1)$。

#### 马尔可夫过程

一个随机过程在其下一个时刻的演化只和当前时刻的状态相关时
$$
P_n(y_n, t_n | y_{n-1}, t_{n-1}; \cdots; y_1, t_1) = P_n(y_n, t_n | y_{n-1}, t_{n-1})
$$

被称为一个马尔可夫过程。由于下一个时刻的演化只和前一个时刻的值有关，因此此过程系综完全由 $P_1(y)$ 和 $P_2(y_2, t | y_1) = \frac{P_2(y_2, t; y_1, 0)}{P_1(y_1)}$ 决定。

比如说，在空气中运动的一个尘埃粒子的速度分量 $v_x(t)$ 是个马尔可夫过程。但是，此粒子的位置 $x(t)$ 并不是一个马尔可夫过程，因为它不仅与初始位置有关，也与初始速度有关。而 $\{x(t), v(t)\}$ 也被认为是一个二维的马尔可夫过程。

#### 高斯过程

当一个随机过程的概率分布都是高斯型时，比如
$$
P_n(y_n, t_n; \cdots; y_1, t_1) = A \exp \left[ - \sum_{j=1}^n \sum_{k=1}^n \alpha_{jk} (y_j - \bar{y})(y_k - \bar{y}) \right]
$$

时，它被称为一个高斯过程。这里
1.  $A$ 和 $\alpha_{jk}$ 都只和 $t_2-t_1, t_3-t_1, \cdots, t_n-t_1$ 等时间差有关。
2.  $A$ 是一个正的归一化常数。
3.  $\alpha_{jk}$ 是一个正定矩阵。
4.  $\bar{y}$ 是一个常数：可以证明 $\bar{y} = \langle y \rangle = \int y P(y) dy$

高斯分布和高斯随机过程在物理系统中十分常见。比如，处于热平衡的房间里某一快空间内的气体分子数 $N(t)$ 便是一个高斯过程。通常情况下，当我们观察一个宏观系统，其内部有很多自由度，往往对应的宏观测量量就是高斯的。在数学上，这和中心极限定理有关：
>假设 $y$ 是一个随机变量，其概率分布是 $P(y)$，因此平均值和标准差分别是 
>$$
>\bar{y} = \langle y \rangle = \int y P(y) dy，\quad (\sigma_y)^2 = \langle (y-\bar{y})^2 \rangle = \langle y^2 \rangle - \bar{y}^2
>$$
>那么如果有 $N$ 个类似的随机变量 $y_1, \cdots y_n$，它们的平均值（在 $N$ 很大时）$Y = \frac{1}{N} \sum_{i=1}^N y_i$ 将满足一个均值为 $\bar{y}$，标准差 $\sigma_Y = \frac{\sigma_y}{\sqrt{N}}$ 的高斯分布
>$$
>P(Y) = \frac{1}{\sqrt{2\pi \sigma_Y^2}} e^{-(Y-\bar{y})^2/2\sigma_Y^2}
>$$

我们可以看到不管之前单一随机变量 $y_i$ 的概率分布为如何，多个加在一起的综合效应总是高斯的。这就是为什么生活中有那么多高斯分布。

<img src="./Detecting%20Gravitiational%20Waves.assets/image-20260212000617770.png" alt="image-20260212000617770" style="zoom:50%;" />

#### 相关函数

对于一个随机过程，我们有时候用时间平均 $\bar{y}$ 来代替系统平均。这是因为长时间的演化该随机过程可能可以有效的遍历整个系综的统计实现。对于任意 $y(t)$ 的函数 $F$，其时间平均定义为
$$
\bar{F}[y(t)] \equiv \lim_{T\to\infty} \frac{1}{T} \int_{-T/2}^{T/2} F[y(t)] dt
$$

而如果 $y(t)$ 的时间平均是 $\bar{y}$，那么 $y(t)$ 的关联函数定义为

$$
C_y(\tau) \equiv \overline{[y(t)-\bar{y}][y(t+\tau)-\bar{y}]} \equiv \lim_{T\to\infty} \frac{1}{T} \int_{-T/2}^{T/2} [y(t)-\bar{y}][y(t+\tau)-\bar{y}] dt
$$

<img src="./Detecting%20Gravitiational%20Waves.assets/image-20260211233659891.png" alt="image-20260211233659891" style="zoom:50%;" />

这个函数描述了 $t$ 时候的 $y$ 与 $t+\tau$ 时候的 $y$ 之间的关联性。这个 $\tau$ 有时也被称作延迟时间。对于实际物理系统，可能其状态的时间相关性在某个特征时间后就消失了，这个特征时间通常被称为弛豫时间。当 $\tau=0$ 时，我们有 $C_y(0) = \overline{(y-\bar{y})^2} = \langle (y-\bar{y})^2 \rangle = \sigma_y^2$。

而如果同时有两个随机过程 $x(t)$ 和 $y(t)$，那么我们也可以定义它们之间的关联函数

$$
C_{xy}(\tau) \equiv \overline{x(t)y(t+\tau)}
$$

有时 $C_y(\tau)$ 被称为自相关函数以区分上面两个随机过程的互相关函数。我们发现互相关函数满足

$$
C_{xy}(\tau) = C_{yx}(-\tau)
$$

而且 $C_{yy}(\tau) = C_y(\tau)$。我们也可以写下两个随机过程的相关矩阵

$$
\begin{bmatrix} C_{xx}(\tau) & C_{xy}(\tau) \\ C_{yx}(\tau) & C_{yy}(\tau) \end{bmatrix} = \begin{bmatrix} C_x(\tau) & C_{xy}(\tau) \\ C_{yx}(\tau) & C_{y}(\tau) \end{bmatrix}
$$

很明显这种相关矩阵能够被推广到更多随机过程的情况下。

#### 傅立叶变换和谱密度

这两个概念对引力波数据分析至关重要。其中傅立叶变换
$$
\tilde{y}(f) = \int_{-\infty}^{\infty} y(t) e^{i2\pi f t} dt
$$

我们在讨论黑洞与中子星的波型时已经见到过。其反变换为

$$
y(t) = \int_{-\infty}^{\infty} \tilde{y}(f) e^{-i2\pi f t} df
$$

一个函数经过一个正变换和一个反变换又能回到自身。而在实际情况中，测到的数据长度不可能是无限的。因此我们需要在时间上作某种截断。定义

$$
y_T(t) = y(t) \quad -T/2 < t < T/2 \\  
y_T(t) = 0 \quad t < -T/2, t> T/2
$$

这样 $y_T(t)$ 的傅立叶变换 $\tilde{y}_T(f)$ 就是有限的了。可以证明 (Parseval 定理)

$$
\int_{-T/2}^{T/2} y^2(t) dt = \int_{-\infty}^{\infty} y_T^2(t) dt = \int_{-\infty}^{\infty} |\tilde{y}_T(f)|^2 df = 2 \int_{0}^{\infty} |\tilde{y}_T(f)|^2 df
$$

其中最后一个等式用到了 $y_T(t)$ 是实数，所以 $\tilde{y}_T(f) = \tilde{y}^*(-f)$。从这个式子我们可以看出来

$$
\lim_{T\to\infty} \frac{1}{T} \int_{-T/2}^{T/2} y^2(t) dt = \lim_{T\to\infty} \frac{2}{T} \int_{0}^{\infty} |\tilde{y}_T(f)|^2 df
$$

由此我们可以考虑定义谱密度函数

$$
S_y(f) \equiv \lim_{T\to\infty} \frac{2}{T} \left| \int_{-T/2}^{T/2} (y(t)-\bar{y}) e^{i2\pi f t} dt \right|^2
$$

绝对值之内的表达式就是 $\tilde{y}_T(f)$，但是这里把平均的值给去掉了。根据此定义

$$
\int_{0}^{\infty} S_y(f) df = \lim_{T\to\infty} \frac{1}{T} \int_{-T/2}^{T/2} (y-\bar{y})^{2} dt = \overline{(y-\bar{y})^2} = \sigma_y^2
$$

$$
\int_{0}^{\infty} S_{y} (f) df = C_{y} (0) = \sigma_{y}^{2}
$$

因此把不同频率谱密度加到一起就是 $y$ 的平方差。而我们这里积分是从 $0$ 到 $\infty$，是因为 $S_y(-f) = S_y(f)$ ，所以可以把负频率的信息"折叠"到正频率轴上。这样的谱密度也称为单边谱密度

$$
S_{y}^{\text{双边}}(f) = \frac{1}{2} S_{y}^{\text{单边}}(f)
$$

这只是一个 Convention 的问题。但若是用双边谱密度那么负频率也得考虑。

<img src="./Detecting%20Gravitiational%20Waves.assets/image-20260212220414776.png" alt="image-20260212220414776" style="zoom: 50%;" />
如图，LIGO 在 2007 年 3 月测量的探测器读出的双臂长度差 $x(t)$ 的谱密度。在 150Hz 以上，其主要贡献是光子到达时间的非均匀性引起散粒噪声；在 150Hz 和 40Hz 之间主要来源是镜子镀的膜的涨落引起的布朗噪声；在 40Hz 以下主要是地震噪声。图中的 y 轴画的是 $\sqrt{S_x(f)}$，其单位为 $m/\sqrt{\text{Hz}}$。如果 $x(t)$ 和 $y(t)$ 是两个随机过程，那么类似于 $S_y(f)$ 的定义，我们也可以定义 $S_{xy}(f)$ (交叉谱密度)
$$
S_{xy}(f) = \lim_{T\to\infty} \frac{2}{T} \int_{-T/2}^{T/2} (x(t)-\bar{x}) e^{-i2\pi f t} dt \int_{-T/2}^{T/2} (y(t')-\bar{y}) e^{i2\pi f t'} dt'
$$

显然 $S_{yy}(f) = S_y(f)$。而如果 $x(t)$ 和 $y(t)$ 是两个不同随机过程，一般来说 $S_{xy}(f)$ 是复数

$$
S_{xy}^*(f) = S_{xy}(-f) = S_{yx}(f)
$$

因此我们可以集中讨论正频率情况

$$
\begin{bmatrix} S_{xx}(f) & S_{xy}(f) \\ S_{yx}(f) & S_{yy}(f) \end{bmatrix} = \begin{bmatrix} S_x(f) & S_{xy}(f) \\ S_{yx}(f) & S_y(f) \end{bmatrix}
$$

描述了一个二维随机过程 $\{x(t), y(t)\}$ 的谱密度的分布。与此同时，Wiener-Khintchine 定理说对于任意随机过程 $y(t)$，其相关函数 $C_y(\tau)$ 和谱密度 $S_y(\tau)$ 满足如下关系式：

$$
C_y(\tau) = \int_{0}^{\infty} S_y(f) \cos(2\pi f \tau) df, \quad S_y(f) = 4 \int_{0}^{\infty} C_y(\tau) \cos(2\pi f \tau) d\tau
$$

类似的对于二维随机过程有
$$
C_{xy}(\tau) = \frac{1}{2} \int_{-\infty}^{\infty} S_{xy} e^{-i2\pi f \tau} df = \frac{1}{2} \int_{0}^{\infty} (S_{xy} e^{-i2\pi f \tau} + S_{yx} e^{i2\pi f \tau}) df
$$

$$
S_{xy}(\tau) = 2 \int_{-\infty}^{\infty} C_{xy}(\tau) e^{i2\pi f \tau} d\tau = 2 \int_{0}^{\infty} (C_{xy}(f) e^{i2\pi f \tau} + C_{yx}(f) e^{-i2\pi f \tau}) df
$$

定理的证明可以参照 Kip Thorne 的讲义。有了以上关系，我们计算

$$
\langle \tilde{x}^{*} (f) \tilde{y}(f') \rangle = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \langle x(t) y(t') \rangle e^{-i2\pi f t} e^{i2\pi f' t'} dt dt'
$$

让 $t' = t + \tau$，遍历定理
$$
\int_{-\infty}^{\infty} C_{xy}(\tau) e^{2\pi i f' \tau} d\tau \int_{-\infty}^{\infty} e^{2\pi i (f'-f)t'} dt' = \frac{1}{2} S_{xy} \delta(f-f')
$$
类似的还有 
$$
2 \langle \tilde{y}(f) \tilde{y}^*(f') \rangle = S_y(f) \delta(f-f') 
$$
直观上，我们来理解下谱密度 $S_y(f)$ 到底是啥意思。考虑一个随机过程 $y(t)$ 在时间 $0$ 到 $\Delta t$ 之间的演化。那么它的傅利叶变换可以包括从 $f=\infty$ 到 $f=1/\Delta t$ 之间的频率。我们考虑 $f \in (f, \infty)$ 附近的 $y$ 的平方差

$$
[\Delta y(f, \Delta t)]^2 = \lim_{N\to\infty} \frac{2}{N} \sum_{n=-N/2}^{N/2} \left| \frac{1}{\Delta t} \int_{n\Delta t}^{(n+1)\Delta t} [y(t)-\bar{y}] e^{i2\pi f t} dt \right|^2
$$

其中这个 "2" 是考虑了正频和负频的贡献，而对 $N$ 求和平均反应了系统平均的一种方式。上述表达式也可以写作

$$
[\Delta y(f, \Delta t)]^2 = \lim_{N\to\infty} \frac{2}{N} \left| \sum_{n=-N/2}^{N/2} \frac{1}{\Delta t} \int_{n\Delta t}^{(n+1)\Delta t} [y(t)-\bar{y}] e^{i2\pi f t} dt \right|^2
$$

定义 $T = N\Delta t$

$$
= \lim_{T\to\infty} \frac{2}{T} \left| \int_{-T/2}^{T/2} (y-\bar{y}) e^{i2\pi f t} dt \right|^2 \frac{1}{\Delta t} = S_y(f)/\Delta t
$$

通常大家把观测窗口时长 $\Delta t$ 的倒数 $1/\Delta t \equiv \Delta f \leftarrow$ 称为带宽(bandwidth)。而在窗口 $\Delta t$ 中 $y$ 在 $f$ 频率处涨落的平方根为

$$
\Delta y(\Delta t, f) = \sqrt{S_y(f) \Delta f}, \quad \Delta f = 1/\Delta t
$$

日常生活中有 $S_y(f)$ 的常见型态有多种。比如 $S_y(f)$ 要是和频率无关，它通常被称为白噪声。在这个情况下任意频率 $f$ 下的 $y$ 的平分差 $\Delta y(\Delta t, f)$ 都和频率无关。我们来看下为什么散粒噪声谱便是白噪声。如果我们接收到很多脉冲，每个脉冲的形状都一样：$F(t)$ (特征宽度 $\tau_p$)，

$$
y(t) = \sum_i F(t-t_i) \quad \text{脉冲i达时间} t_i \text{是随机的}
$$

那么 $\langle y(f) \tilde{y}(f') \rangle = \langle \sum_i F(f) e^{i2\pi f t_i} \sum_j \tilde{F}(f') e^{-i2\pi f' t_j} \rangle = \langle \sum_j F(f) \tilde{F}(f') \rangle$

$$
= R |\tilde{F}(f)|^{2} \delta(f-f') \quad \text{R是单位时间脉冲数}
$$

$$
\Rightarrow S_y(f) = 2R |\tilde{F}(f)|^2
$$

当每个 $\tau_p$ 内都有 $R\tau_p \gg 1$ 时，中心极限定理告诉我们 $y(t)$ 实际上是一个高斯随机过程。而当我们感兴趣的 $f \ll \frac{1}{\tau_p}$ 时，$\tilde{F}(f) \approx \tilde{F}(0) \Rightarrow S_y(f) = 2R |\tilde{F}(0)|^2, \quad C_y(\tau) = R |\tilde{F}(0)|^2 \delta(\tau)$

<img src="./Detecting%20Gravitiational%20Waves.assets/image-20260217203923481.png" alt="image-20260217203923481" style="zoom:50%;" />



另一方面，如果 $S_y(f) \propto 1/f$，那么对于任意 $\Delta t \propto 1/f$，对应的 $\Delta y(\Delta t, f) = \sqrt{S_y(f)\Delta f}$ 都是常数。所以在 f 的对数指标上等间距的导致的 $\Delta y$ 涨落一样大。被称为闪烁噪声 (flicker)。
而如果 $y(t)$ 对应于一个随机行走，可以证明其 $S_y(f) \propto 1/f^2$，被称为随机行走噪声。当然，对于谱密度只和两点关联函数有关，它只反映了随机过程的一小部分信息。（可以想象 n 点关联函数, n>2）

### 信噪比与匹配滤波

在实际的干涉仪测量中，我们测到的数据一般可以写作

$$
d(t) = n(t) + h(t)
$$

其中 $n(t)$ 是探测器噪声，它的谱密度见第10页的图，而 $h(t)$ 为我们想提取的引力波信号。那么怎样提取 $h(t)$ 和测量数据中 $h(t)$ 的大小呢？假设一种最简单情况，即 $h(t)$ 的波型是已知的。我们可以定义一种滤波器

$$
D(t) = \int_{-\infty}^{\infty} d(t') k(t-t') dt'
$$

$$
= \int_{-\infty}^{\infty} n(t') k(t-t') dt' + \int_{-\infty}^{\infty} h(t') k(t-t') dt' = N(t) + H(t)
$$

对于测量的 $d(t)$ 我们只知道 $D(t)$，但不知道 $N(t)$ 和 $H(t)$ 分别多少。但是，我们可以估计 $N(t)$ 的概率分布：

$$
\langle N(t) \rangle = \int_{-\infty}^{\infty} \langle n(t') \rangle k(t-t') dt' = 0
$$

$$
\langle N^2(t) \rangle = \langle \int df_1 e^{2\pi i f_1 t} \int df_2 e^{-2\pi i f_2 t} \tilde{n}(f_1) \tilde{n}^*(f_2) k(f_1) k^*(f_2) \rangle
$$

$$
= \int_{0}^{\infty} df S_n(f) |k(f)|^2
$$



而我们的目的是选取合适的 $k(t)$ 使得 $S/\sqrt{\langle N^2 \rangle}$ 最大化。这一点，我们留在作业中证明：使其最大化的滤波函数为

$$
\tilde{k}(f) = \text{Const.} \times \frac{\tilde{h}^*(f)}{S_n(f)} \leftarrow \text{Wiener 维纳滤波函数}
$$

而将其代入对应的 $S/\sqrt{\langle N^2 \rangle}$，我们得到

$$
SNR = \frac{S}{\sqrt{\langle N^2 \rangle}} = \sqrt{2 \int_{0}^{\infty} \frac{|\tilde{h}(f)|^2}{S_n(f)} df} \leftarrow \text{信噪比}
$$

因此，对于给定波型，我们可以选取对应合适的滤波器使得期望的信号相对于期望的噪声达到最大。但实际情况中，我们虽然在理论中可以计算双黑洞和双中子星的波型 $h(\lambda)$（其中 $\lambda$ = {质量, 自旋, 偏心率, 各种角度}），但系统的内禀参数 $\lambda$ 却是未知的。因此，在实际操作时我们要要在内禀参数空间选取不同的点一次又一次的作滤波。每一次我们都将得到

<img src="./Detecting%20Gravitiational%20Waves.assets/image-20260217204136588.png" alt="image-20260217204136588" style="zoom:50%;" />

当选取的 $\lambda$ 接近于真值并且滤波函数的时间 $t$ 接近于数据中信号所处的时间时，我们会发现一个较大的 SNR 的峰，标志着我们找到了数据中的信号。这个寻找过程叫做匹配滤波。

### 参数估计

很明显由于噪声的影响，我们并不能唯一的从数据中确定真值 $\oplus$。即使我们找到 $\oplus_{\max}$ 使得对应的 SNR 最大，也无法保证真值 $\oplus$ 便是 $\oplus_{\max}$。因此在一般情况下我们探测到引力波事件后需要对波源的参数估计其误差范围。常用的方法有基于贝叶斯理论的贝叶斯参数估计，其被广泛应用于引力波数据分析。在本课程中我们介绍一种近似的，较为简单的方法 —— Fisher 信息方法。这种方法在引力波事件的 SNR 较大，对应的参数概率分布是高斯时较为准确，与贝叶斯方法一致。

我们先定义两个波型的内积：

$$
(g, h) = 2 \int_{-\infty}^{\infty} \frac{\tilde{g}(f)\tilde{h}^*(f)}{S_n(f)} df \Rightarrow SNR^2 = (h, h)
$$

对于每一个事件，都有一个真实的 $\lambda_0$。那我们怎么通过数据分析得到 $\lambda_0$ 的较好估计呢？考虑（频域）数据 $d(f) = \tilde{h}(\lambda_0, f) + n(f)$。如果我们测量的系统参数是 $\lambda$，那么数据减去期望的信号的残差为

$$
d(f) - \tilde{h}(\lambda, f) = [\tilde{h}(\lambda_0) - \tilde{h}(\lambda)] + n(f) \approx \frac{\partial \tilde{h}}{\partial \lambda} (\lambda_0 - \lambda) + n(f)
$$

如果 $\lambda = \lambda_0$，残差正好是探测器噪声，但一般情况下第一项也不为 0。如果我们想最小化残差，比如要求残差的 SNR 最小，那么

$$
\frac{\partial (\text{SNR}_{\text{残差}}^2)}{\partial \lambda_i} \bigg|_{\lambda_{\max}} = 0 = \frac{\partial}{\partial \lambda_i} (d-\tilde{h}, d-\tilde{h}) \bigg|_{\lambda_{\max}}
$$

$$
\Rightarrow (d-\tilde{h}(\lambda_{\max}), \frac{\partial h}{\partial \lambda_i}(\lambda_{\max})) = 0
$$

或者 $( \tilde{h}(\lambda_0) - \tilde{h}(\lambda_{\max}), \frac{\partial h}{\partial \lambda_i}(\lambda_{\max}) ) = -(n, \frac{\partial h}{\partial \lambda_i}(\lambda_{\max})) \quad \text{①} $
定义等 式的右边 $v_i \equiv (n, \frac{\partial h}{\partial \lambda_i}(\lambda_{\max})) \approx (n, \frac{\partial h}{\partial \lambda_i}(\lambda_0))$。$v^i$ 显然是一个高斯随机变量。其均值为 0。而它的协方差矩阵
$$
\Gamma_{ij} \equiv \langle v_i v_j \rangle = \langle (n, \frac{\partial h}{\partial \lambda_i} u_0) ( \frac{\partial h}{\partial \lambda_j} u_0, n ) \rangle = (\frac{\partial h}{\partial \lambda_i}, \frac{\partial h}{\partial \lambda_j}) \bigg|_{\lambda_0}
$$



这个矩阵被称为 Fisher 信息矩阵，因此随机变量 $\vec{v}$ 的概率分布为

$$
P(\vec{v}) = \frac{1}{\sqrt{\det(2\pi \Gamma)}} \exp \left( -\frac{1}{2} (\Gamma^{-1})_{ij} v_i v_j \right)
$$

而 $(\Gamma^{-1})_{ij}$ 这里是 Fisher 信息矩阵的逆。而公式 ① 其实也可以写作

$$
(\frac{\partial \tilde{h}}{\partial \lambda_j}, \frac{\partial \tilde{h}}{\partial \lambda_i}) \Delta \lambda_j = v_i \text{ 或 } \Gamma_{ij} \Delta \lambda_j = v_i, \quad \Delta \lambda = \lambda_0 - \lambda_{\max}
$$

$$
\Rightarrow \Delta \lambda_j = (\Gamma^{-1})_{ji} v_i
$$

因此对最佳拟合 $\lambda_{\max}$ (或称为最大似然拟合) 的估计可以由上式给出。由于 $v_i$ 是一个高斯随机变量，$\Delta \lambda$ 也是一个高斯随机变量。类似的，$\Delta \lambda$ 的概率分布为

$$
P(\Delta \lambda) \approx \sqrt{\frac{\det(\Gamma)}{2\pi}} \exp \left( -\frac{1}{2} \Gamma_{ij} \Delta \lambda_i \Delta \lambda_j \right)
$$

可以看出 Fisher 信息矩阵的逆描述了测量误差的平方差。比如

$$
(\Delta \lambda_i)_{rms} = \langle \Delta \lambda_i^2 \rangle^{1/2} = \langle \text{Var } \Delta \lambda_i \rangle^{1/2} = \sqrt{(\Gamma^{-1})_{ii}}
$$

在作业中我们将尝试计算双黑洞系统的探测误差。

