# 统计力学 第8次作业

Chasse_neige

8.4 试证明，在热力学极限下均匀的二维理想玻色气体不会发生玻色爱因斯坦凝聚。

对于二维理想玻色气体，其态密度可以写作
$$
g (\epsilon) \dd{\epsilon} = \frac{2 \pi V}{h^{2}} p \dd{p} = \frac{2 \pi m V}{h^{2}} \dd{\epsilon}
$$
所以粒子数为
$$
\dd{N} = \frac{2 \pi m V}{h^{2}} \int_{0}^{\infty} \frac{\dd{\epsilon}}{e^{\beta(\epsilon - \mu)} - 1}
$$
临界温度由以下积分确定
$$
T_{c} = \frac{n h^{2}}{2 \pi m k_{B}} \frac{1}{\int_{0}^{\infty} \frac{\dd{x}}{e^{x} - 1}}
$$
我们发现分母上的积分是发散的，所以对于二维理想玻色气体，它的临界温度 $T_{c} \to 0$，也就是说，对于任何有限温度的二维理想玻色气体，它不会出现化学势趋近于 $0$ 的情况，也不会出现大量粒子聚集在基态的情况。

8.5 约束在磁光陷阱中的理想原子气体，在三维谐振势场
$$
V = \frac{1}{2} m \left(\omega_{x} x^{2}+\omega_{y} y^{2}+\omega_{z} z^{2}\right)
$$

内运动，如果原子是玻色子，试证明: $T \leq T_{c}$ 时, 将有宏观量级的原子凝聚在能量为

$$
\varepsilon_{0}=\frac{\hbar}{2}\left(\omega_{x}+\omega_{y}+\omega_{z}\right)
$$

的基态。在 $N \rightarrow \infty, \bar{\omega} \rightarrow 0, N \bar{\omega}^{3}$ 保持有限的热力学极限下, 临界温度 $\mathrm{T}_{\mathrm{c}}$ 由下式确定

$$
N = 1.202 \times\left(\frac{k_{B} T_{c}}{\hbar \bar{\omega}}\right)^{3}
$$

其中 $\bar{\omega}=\left(\omega_{x} \omega_{y} \omega_{z}\right)^{1 / 3}$，温度为 $T$ 时, 凝聚在基态的原子数 $N_{0}$ 与总原子数 $N$ 之比为

$$
\frac{N_{0}}{N}=1-\left(\frac{T}{T_{c}}\right)^{3}
$$

证明：

对于三维谐振势场中的粒子，其分布满足
$$
a_{i} = \frac{\omega_{i}}{e^{\alpha + \beta (\epsilon_{k} + V (x))} - 1}
$$
注意到在这种谐振子势场中，粒子的能级是分立的，可以用
$$
\epsilon(n_{x}, n_{y}, n_{z}) = \hbar \omega_{x} (n_{x} + \frac{1}{2}) + \hbar \omega_{y} (n_{y} + \frac{1}{2}) + \hbar \omega_{z} (n_{z} + \frac{1}{2})
$$
来确定，所以此时粒子数为
$$
N = \sum_{n_{x}, n_{y}, n_{z}} \frac{1}{e^{\beta(\epsilon(n_{x}, n_{y}, n_{z}) - \mu)} - 1}
$$
记
$$
\epsilon_{0} = \frac{\hbar}{2} (\omega_{x} + \omega_{y} + \omega_{z})
$$
在临界温度以下，$\mu \to \epsilon_{0}^{-}$，此时激发态的粒子数可以表示为
$$
N = \sum_{n_{x}, n_{y}, n_{z}} \frac{1}{e^{\beta \hbar (n_{x} \omega_{x} + n_{y} \omega_{y} + n_{z} \omega_{z})} - 1}
$$
对于稠密的情况，进行积分近似
$$
N \approx \int \dd{n}_{x} \int \dd{n}_{y} \int \dd{n}_{z} \frac{1}{e^{\beta \hbar(n_{x} \omega_{x} + n_{y} \omega_{y} + n_{z} \omega_{z})} - 1} \\ =
\frac{1}{(\beta\hbar)^{3} \omega_{x} \omega_{y} \omega_{z}} \int_{0}^{\infty} \dd{x} \int_{0}^{\infty} \dd{y} \int_{0}^{\infty} \dd{z} \frac{1}{e^{x + y + z} - 1}  = \frac{\zeta(3)}{(\beta\hbar)^{3} \omega_{x} \omega_{y} \omega_{z}}
$$
所以
$$
N \approx 1.202 \times \left(\frac{k_{B} T}{\hbar \bar{\omega}}\right)^{3}
$$
其中
$$
\bar{\omega}=\left(\omega_{x} \omega_{y} \omega_{z}\right)^{1 / 3}
$$

而临界温度应该用
$$
N = 1.202 \times \left(\frac{k_{B} T_{c}}{\hbar \bar{\omega}}\right)^{3}
$$
确定。在温度低于临界温度的时候，基态个数为
$$
N_{0} = N \left(1 - \left(\frac{T}{T_{c}}\right)^{3}\right)
$$
所以
$$
\frac{N_{0}}{N}=1-\left(\frac{T}{T_{c}}\right)^{3}
$$
8.6 承前8.5题，如果 $\omega_{z} \gg \omega_{x}, \omega_{y}$，则在 $kT \ll \hbar \omega_{z}$ 的情形下，原子在 $z$ 方向的运动将冻结在基态作零点振动，于是形成二维气体。试证明 $T \leq T_{c}$ 时原子的二维运动中将有宏观量级的原子凝聚在能量为 $\varepsilon_{0}=\frac{\hbar}{2}(\omega_{x}+\omega_{y})$ 的基态。在 $N\rightarrow\infty$，$\overline{\omega}\rightarrow0$，$N\overline{\omega}^{3}$ 保持有限的热力学极限下，临界温度 $T_{c}$ 由下式确定
$$
\begin{aligned} N=1.645\times\left(\frac{k_{B} T_{c}}{\hbar\overline{\omega}}\right)^{2} \end{aligned}
$$

其中 $\overline{\omega}=(\omega_{x}\omega_{y})^{1/2}$。温度为 $T$ 时，凝聚在基态的原子数 $N_{0}$ 与总原子数 $N$ 之比为

$$
\begin{aligned} \frac{N_{0}}{N}=1-\left(\frac{T}{T_{c}}\right)^{2} \end{aligned}
$$

重复一遍上一题的计算，把维度改成 $2$ 维，此时能级的表达式为
$$
\epsilon(n_{x}, n_{y}) = \hbar \omega_{x} (n_{x} + \frac{1}{2}) + \hbar \omega_{y} (n_{y} + \frac{1}{2})
$$
所以此时在临界温度以下，激发态粒子数为
$$
N = \int \dd{n}_{x} \int \dd{n}_{y} \frac{1}{e^{\beta \hbar (n_{x} \omega_{x} + n_{y} \omega_{y})} - 1} \\ =
\frac{1}{\beta^{2} \hbar^{2} \omega_{x} \omega_{y}} \int_{0}^{\infty} \dd{x} \int_{0}^{\infty} \dd{y} \frac{1}{e^{x + y} - 1} \approx \frac{1.645}{\beta^{2} \hbar^{2} \omega_{x} \omega_{y}}
$$
记 $\bar{\omega} = \sqrt{\omega_{x} \omega_{y}}$ ，则此时确定临界温度的表达式为
$$
N = 1.645 \times \left(\frac{k_{B} T_{c}}{\hbar \bar{\omega}}\right)^{2}
$$
在临界温度以下时，基态的粒子数可以表示为
$$
N_{0} = N \left(1 - \left(\frac{T}{T_{c}}\right)^{2}\right)
$$
所以
$$
\frac{N_{0}}{N} = 1 - \left(\frac{T}{T_{c}}\right)^{2}
$$
8.7 计算温度为 $T$ 时，在体积 $V$ 内光子气体的平均总光子数，并据此估算

(1) 温度为1000K的平均辐射。

(2) 温度为3K的宇宙背景辐射中光子的数密度。

光子气体的平均总光子数为
$$
\bar{N} = g_{s} \frac{4 \pi V}{c^{3}} \int_{0}^{\infty} \frac{\nu^{2}}{e^{\beta h \nu} - 1} \dd{\nu} = \frac{2\zeta(3)V}{\pi^{2}} \left( \frac{k_{B}T}{\hbar c} \right)^{3}
$$


其中 $\zeta(3) \approx 1.2020569$。数密度为
$$
n = \frac{\bar{N}}{V} = \frac{2\zeta(3)}{\pi^{2}} \left( \frac{k_{B} T}{\hbar c} \right)^{3}
$$

代入常数 $k_{B} = 1.380649 \times 10^{-23} \, \text{J/K}$，$\hbar = 1.0545718 \times 10^{-34} \, \text{J·s}$，$c = 2.99792458 \times 10^{8} \, \text{m/s}$，计算得
$$
\frac{k_{B}}{\hbar c} \approx 436.693 \, \text{m}^{-1} \cdot \text{K}^{-1}
$$

(1) 当 $T = 1000 \, \text{K}$ 时
$$
n = \frac{2\zeta(3)}{\pi^{2}} \left(\frac{k_{B}T}{\hbar c} \right)^{3} \approx 0.243693 \times (436.693 \times 1000)^{3} \approx 2.03 \times 10^{16} \, \text{m}^{-3}
$$

此时辐射通量密度为
$$
J = \sigma T^{4} = \frac{2 \pi^{5} k_{B}^{4}}{15 h^{3} c^{2}} T^{4} \approx 56.7 \mathrm{kW}/\text{m}^{2}
$$


(2) 当 $T = 3 \, \text{K}$ 时
$$
n \approx 0.243693 \times (436.693 \times 3)^{3} \approx 5.48 \times 10^{8} \, \text{m}^{-3}
$$

8.9 按波长分布太阳辐射能的极大值在$\lambda \approx 480 \mathrm{nm}$ 处。假设太阳是黑体，求太阳表面的温度。

带入
$$
\lambda_{m} T \approx \frac{h c}{4.96k}
$$
则
$$
T = \frac{b}{\lambda_{\text{max}}} = \frac{2.898 \times 10^{-3}}{4.80 \times 10^{-7}} \approx 6037 \, \text{K}.
$$
故太阳表面的温度约为 $6.0 \times 10^{3} \, \text{K}$
