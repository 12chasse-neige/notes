# 费曼物理学（2） 第2次作业

Chasse_neige

#### 1 光子质量 (5-11)

若光子有质量，静电学的第一个方程应该修改为 $(-\nabla^2 + m^2) \phi = \frac{\rho}{\epsilon_0}$，证明此时对带电质点，质点外的电势为 $\phi = \frac{q}{4\pi\epsilon_0} \frac{e^{-mr}}{r}$，计算此时的电场，证明此时电场不满足高斯定律。注意此时电磁方程只能用势来描述。

考虑此时点电荷周围的电势分布，取 $\rho = q \delta(r)$

方程 $(-\nabla^2 + m^2) \phi = \frac{\rho}{\epsilon_0}$是球对称的，所以可以在求坐标下展开拉普拉斯算子并仅保留径向分量：
$$
(-\nabla^2 + m^2) \phi = \frac{\rho}{\epsilon_0} 
$$

$$
\left( - \frac{1}{r^{2}} \frac{\partial}{\partial r} (r^{2} \frac{\partial}{\partial r}) + m^{2} \right) \phi = \frac{\rho}{\epsilon_{0}}
$$

$$
\left( - \frac{1}{r} \frac{\partial^{2}}{\partial r^{2}} + \frac{m^{2}}{r} \right) (r \phi) = \frac{\rho}{\epsilon_{0}}
$$

由对称性可知 $r \phi$ 为仅$r$ 的函数，故假设 $(r \phi)(r) = a (r)$ 并解上述方程：
$$
- \frac{\mathrm{d}^{2}}{ \mathrm{d} r^{2}} a + m^{2} a = \frac{r q \delta (r)}{\epsilon_{0}} = 0
$$
$$
\therefore \,\, a = C e^{-mr}
$$

舍去了$e^{mr}$ 解，因为无穷远处发散。
$$
\phi = C \frac{e^{-mr}}{r}
$$

$$
- \nabla^{2} \phi = - C  \nabla^{2} \frac{e^{-mr}}{r} = - C \left( - 4 \pi \delta (r) e^{-mr} + \frac{1}{r} ( m^{2} e^{-mr} - \frac{2m}{r} e^{-mr}) + \frac{2m}{r^{2}} e^{-mr}  \right) \\ = C \left( 4 \pi \delta (r) e^{-mr} - \frac{1}{r}  m^{2} e^{-mr} \right)
$$

$$
\therefore \,\, (-\nabla^2 + m^2) \phi = C \left( 4 \pi \delta (r) e^{-mr} - \frac{1}{r}  m^{2} e^{-mr} \right) + C m^{2} \frac{e^{-mr}}{r} = C 4 \pi \delta (r) e^{-mr} = C 4 \pi \delta (r) =\frac{q \delta(r)}{\epsilon_{0}}
$$

$$
\therefore \,\, C = \frac{q}{4 \pi \epsilon_{0}}
$$

所以质点外的电势为 $\phi = \frac{q}{4\pi\epsilon_0} \frac{e^{-mr}}{r}$

电场：
$$
\vec{E} = - \nabla \phi = - \nabla \frac{q}{4\pi\epsilon_0} \frac{e^{-mr}}{r} =  \frac{q}{4 \pi \epsilon_{0}} \frac{(1 + mr) e^{-mr}}{r^{3}} \vec{r}
$$
显然不满足高斯定律。

#### 2 库仑定律的偏移

带电体之间的静电力遵循平方反比律这一事实, 是由库仑用扭秤实验所确立的. 然而, 这种实验的误差一般较大, 无法精确地约束库仑力偏离平方反比定律的误差. 麦克斯韦通过改进卡文迪许的同心球电荷分布实验, 精确确立了库仑定律的准确性. 具体步骤如下:

i 外球壳由两个导体半球装配而成, 两半球合起来正好把内球封在其中, 内球与外球的球心相同, 两者保持绝缘. 在离外壳不远处放置一个小铜球. 初始时刻, 它们都不接地.

ii 通过某种手段, 将外球壳与内球用导线连接起来. 将外球壳充电到电势 $V$ .

iii 小铜球接地, 使其通过感应带电, 所带电荷约为外球壳电量的 $1/54$ , 然后取消接地, 保持绝缘.

a) 请由给定数据, 估算外球壳与小铜球球心距离与小铜球半径之间的比例关系.

忽略二次像电荷（因为没有给$R$，不然用级数估计可以更准确一点）之后得到 $\frac{r}{d} = \frac{1}{54}$，即距离是小球半径的45倍。

iv 取下连接外球壳与内球的导线. 然后将外球壳放电, 并保持接地.

b) 假设静电力的电势 $\phi = \frac{kq}{r^{1+\delta}}$ , 请求出一个半径为 $R$ , 电量为 $Q$ 均匀球壳在任一点上引起的电势大小.

假设该点离球心为 $d$ ：
$$
\mathrm{d} \phi = \frac{1}{4 \pi \epsilon_{0}} \left( \frac{Q}{4 \pi R^{2}} 2 \pi R^{2} \sin \theta \mathrm{d} \theta \frac{1}{\sqrt{d^{2} + R^{2} - 2 d R \cos \theta}^{1 + \delta}} \right)
$$

$$
\therefore \,\, \phi = \int_{0}^{\pi} \frac{1}{4 \pi \epsilon_{0}} \left( \frac{Q}{4 \pi R^{2}} 2 \pi R^{2} \sin \theta \mathrm{d} \theta \frac{1}{\sqrt{d^{2} + R^{2} - 2 d R \cos \theta}^{1 + \delta}} \right) \\ = 
\frac{Q}{8 \pi \epsilon_{0} d R} \frac{|d + R|^{1 - \delta} - |d - R|^{1 - \delta}}{1 - \delta}
$$

c) 设内球的半径为 $R_1$ , 外球壳的半径为 $R_2$ , 请求出在步骤 iv 后, 内球电势 $V_1$ 与外球壳原来电势 $V$ 的关系 (忽略小铜球的影响, 并保留到 $\delta$ 的一阶项).

假设 ii 后内球带电为 $Q_{1}$ ，外球带电为 $Q_{2}$ ，利用前一问的电势关系可以列出方程组：
$$
\frac{Q_{1}}{8 \pi \epsilon_{0} R_{1} R_{2}} \frac{(R_{2} + R_{1})^{1 - \delta} - (R_{2} - R_{1})^{1 - \delta}}{1 - \delta} + \frac{Q_{2}}{8 \pi \epsilon_{0} R_{2}^{2}} \frac{(2 R_{2})^{1 - \delta}}{1 - \delta} = V
$$

$$
\frac{Q_{2}}{8 \pi \epsilon_{0} R_{1} R_{2}} \frac{(R_{2} + R_{1})^{1 - \delta} - (R_{2} - R_{1})^{1 - \delta}}{1 - \delta} + \frac{Q_{1}}{8 \pi \epsilon_{0} R_{1}^{2}} \frac{(2 R_{1})^{1 - \delta}}{1 - \delta} = V
$$

将上述方程展开至 $\delta$ 一阶项：$Q_{1} = 0 + \Delta Q_{1}$   $Q_{2}  = 4 \pi \epsilon_{0} R_{2} V + \Delta Q_{2}$ ，解得：
$$
\Delta Q_{1} = 4 \pi \epsilon_{0} R_{2} V \left( \frac{R_{1} + R_{2}}{2(R_{2} - R_{1})} \ln (R_{2} + R_{1}) - \frac{1}{2} \ln (R_{2} - R_{1})  - \frac{R_{1}}{R_{2} - R_{1}} \ln(2 R_{1}) \right) \delta
$$
当外壳放完电时，为了使外球壳保持零势，外球壳会带电 $- \Delta Q_{1}$ ，此时内球壳上的电势即为内球壳和外球壳的叠加，保留至一阶项：
$$
V_{1} = \frac{\Delta Q_{1}}{4\pi \epsilon_{0} R_{1}} - \frac{\Delta Q_{1}}{4 \pi \epsilon_{0} R_{2}} = \frac{\Delta Q_{1}}{4 \pi \epsilon_{0}}  \frac{R_{2} - R_{1}}{R_{1} R_{2}} \\ = 
\frac{R_{2} - R_{1}}{R_{1}} V \left( \frac{R_{1} + R_{2}}{2(R_{2} - R_{1})} \ln (R_{2} + R_{1}) - \frac{1}{2} \ln (R_{2} - R_{1})  - \frac{R_{1}}{R_{2} - R_{1}} \ln(2 R_{1}) \right) \delta \\ = 
V \left( \frac{R_{1} + R_{2}}{2R_{1}} \ln (R_{2} + R_{1}) - \frac{R_{2} - R_{1}}{2 R_{1}} \ln (R_{2} - R_{1})  - \ln(2 R_{1}) \right) \delta \\ = 
V \left( \frac{1 + \frac{R_{2}}{R_{1}}}{2} \ln (1 + \frac{R_{2}}{R_{1}}) - \frac{\frac{R_{2}}{R_{1}} - 1}{2} \ln (\frac{R_{2}}{R_{1}} - 1) - \ln2  \right) \delta
$$
v 将静电计的探针脱离接地, 由外壳的小口伸入, 与内球保持接触. 静电计的指针观察不到任何偏转.

vi 为了试验静电计的灵敏度, 将外球壳脱离接地, 并将小铜球接地放电. 此时与内球接触的静电计的指针偏转了角度 $D$ .

vii 小铜球的负电荷大小大约是外壳原来带电的 $1/54$ . 当外球壳接地时, 外壳从小铜球感应而得的正电荷大约是小铜球电荷的 $1/9$ . 因此, 当小铜球接地时, 外球壳的电势约等于内球的电势, 即静电计偏转 $D$ 所对应的数值, 大约是外球壳原来电势 $V$ 的 $1/486$ .

viii 但如果库仑力 $\propto r^{-2-\delta}$ , 即电势 $\phi = \frac{kq}{r^{1+\delta}}$ , 可由 (c) 问推得的公式得出内球电势 $V_1$ 应为外球壳电势 $V$ 的 $0.1478\delta$ .

ix 于是, 设静电计观察到的最大偏转为 $D$, 则 $\delta$ 不能超过  $\pm \frac{d}{72D}$ 。即使在粗糙的实验中偏转 $D$ 也会大于 $300d$， 所以 $\delta < \frac{1}{21600}$。

d) 请说明 $\delta$ 为什么不能超过 $\pm \frac{d}{72D}$ ?

如果 $\delta$ 超过 $\pm \frac{d}{72D}$，那么当小铜球接地时，内球壳电势最大值 $0.1478\delta V$ 会大于$\frac{1}{486} V$，所以静电计偏转会大于vii 中的值，与实验现象相违背。

#### 3 复变函数 (7-1)

1、计算线电荷的电势分布，证明其可用复变函数 $F(z) = \log z$ 表示。

电势：
$$
\phi (r) = - \frac{\lambda}{2 \pi \epsilon_{0}} \ln r + C
$$
对于题给的复势，在自然单位制下，其实部对应着电势函数：
$$
Re[\log z] = \log \sqrt{x^{2} + y^{2}} = \log r \propto \phi (r)
$$
所以线电荷电势分布可以用复对数函数描述。

2、证明两相互靠近异号线电荷的电势分布可用复变函数 $F(z) = \frac{1}{z}$ 表示 (提示：可利用 $\frac{d \log z}{dz} = \frac{1}{z}$ )。

证明：

利用二维多级展开关系式，展开至偶极项：
$$
\phi (r) = - \frac{\vec{p}}{2 \pi \epsilon_{0}} \cdot \nabla \ln r + C = - \frac{\vec{p} \cdot \vec{r}}{2 \pi \epsilon_{0} r^{2}} + C
$$
同样的，在自然单位制下对题给复函数取实部：
$$
Re[\frac{1}{z}] = \frac{x}{x^{2} + y^{2}} = \frac{\hat{x} \cdot \vec{r}}{r^{2}} \propto \phi (r)
$$
所以两相互靠近异号线电荷的电势分布可用复变函数 $F(z) = \frac{1}{z}$ 表示。

#### 4 Casimir 效应 (8-13)

根据量子力学不确定性关系 $\Delta x \Delta p \geq \hbar$ ，一个简谐振子的位移 $x$ 和动量 $p$ 不可能都为零，因此其基态能量不可能为零。基于类似的理由，真空中的量子电磁场最低态（即没有光子的态）的能量也不能为零。这导致了一个有趣的现象：将两块相距一定距离的不带电的导体板平行放置在真空中，它们之间存在非零的电磁相互作用力。现用一个简单模型来考察这个力的起源，该模型只考虑一维空间中电磁波的传播，并假设电磁波只有一种偏振模式。将三块相同的不带电的理想导体薄板 A、B、C 相互平行放置，A、B 之间距离为 $a$ ，A、C 之间距离为 $L$ （$L \gg a$），如图1所示。已知真空中的光速为 $c$ 。

<img src="./Feynman Lectures on Physics (2) Homework 2.assets/image-20260128015350489.png" alt="image-20260128015350489" style="zoom:50%;" />

a) 真空电磁波在 A、B 之间形成驻波，导体板表面的位置为波节。试求出 A、B 之间所允许的电磁波的角频率。类似地，求出 B、C 之间所允许的电磁波的角频率。

A、B之间：
$$
a = n \frac{\lambda}{2} 
$$

$$
a = n \frac{\pi c}{\omega}
$$

$$
\omega = \frac{n \pi c}{a} \qquad (n \in \mathbb{Z}_{+})
$$

B、C之间：
$$
\omega = \frac{n \pi c}{L - a} \qquad (n \in \mathbb{Z}_{+})
$$
b) 由于量子效应，一个振动角频率为 $\omega$ 的简谐振子的基态能量为 $\frac{1}{2}\hbar\omega$ 。类似的，真空中角频率为 $\omega$ 的电磁波的一个模式所贡献的真空电磁场能量（零点能）为 $\frac{1}{2}\hbar\omega$ 。试写出 A、C 之间真空电磁场总能量的表达式。（提示：表达式可能是发散的，即不是有限的。）
$$
E_{tot} = \frac{1}{2} \hbar (\frac{\pi c}{a} + \frac{\pi c}{L - a}) \sum_{n=1}^{\infty} n
$$
c) 推导出导体板 B 所受到的电磁相互作用力的表达式。利用“所有自然数之和等于 $-\frac{1}{12}$ ”这一说法，给出该相互作用力的有限表达式。

利用“所有自然数之和等于 $-\frac{1}{12}$ ”这一说法，总能量为：
$$
E_{tot} = - \frac{1}{24} \hbar (\frac{\pi c}{a} + \frac{\pi c}{L - a})
$$
所以相互作用力就是（向右为正）：
$$
F = - \frac{\partial E_{tot}}{\partial a} = - \frac{1}{24} \hbar \pi c (\frac{1}{a^{2}} - \frac{1}{(L - a)^{2}}) \approx - \frac{1}{24} \frac{\hbar \pi c}{a^{2}} \qquad (L \gg a)
$$
d) 自然界真实力的大小总是有限的。我们导出的结果之所以发散，是因为采用了过于简化的假设。例如，实际的导体板不是理想导体，频率足够高的电磁波总能够穿过导体薄板，因而不受驻波条件的约束。所以这些高频电磁波模式几乎不受导体板位置的影响，也不会对我们想要计算的电磁力产生贡献。为了将这一效应考虑在内，可以采取如下方法：我们仍然保留第（a）问中求得的驻波条件，但假设每一个电磁波模式对电磁场总能量的有效贡献是 $\frac{1}{2}\hbar\omega e^{-\omega/\pi\Lambda}$ 。这里 $\Lambda$ 与 $\omega$ 的量纲相同，且满足 $\Lambda a/c \gg 1$ 。试计算在 $L \to \infty$ 、$\Lambda \to \infty$ 的极限下导体板 B 受到的电磁力。
$$
E_{tot} = \frac{1}{2} \hbar (\frac{\pi c}{a} \sum_{n=1}^{\infty} n e^{- \frac{n c}{a \Lambda}} + \frac{\pi c}{L - a} \sum_{n=1}^{\infty} n e^{- \frac{n c}{(L - a) \Lambda}}) = \frac{1}{2} \hbar \left(\frac{\pi c}{a} \frac{e^{- \frac{c}{a \Lambda}}}{(1 - e^{- \frac{c}{a \Lambda}})^{2}} + \frac{\pi c}{L - a} \frac{e^{- \frac{c}{(L - a) \Lambda}}}{(1 - e^{- \frac{c}{(L - a) \Lambda}})^{2}} \right)
$$
所以受力为：
$$
F = - \frac{\partial E_{tot}}{\partial a} = - \lim_{L, \Lambda \to \infty} \frac{\partial}{\partial a} \frac{1}{2} \hbar \left(\frac{\pi c}{a} \frac{e^{- \frac{c}{a \Lambda}}}{(1 - e^{- \frac{c}{a \Lambda}})^{2}} + \frac{\pi c}{L - a} \frac{e^{- \frac{c}{(L - a) \Lambda}}}{(1 - e^{- \frac{c}{(L - a) \Lambda}})^{2}} \right) \\ = - \lim_{\alpha, \alpha' \to 0 \,\, L \to \infty} \frac{1}{2} \frac{\hbar \pi c}{a^{2}} \left(\frac{\alpha e^{- \alpha} (1 + e^{- \alpha})}{(1 - e^{- \alpha})^{3}} - \frac{e^{- \alpha}}{(1 - e^{- \alpha})^{2}}\right)  + \frac{1}{2} \frac{\hbar \pi c}{(L - a)^{2}} \left( - \frac{\alpha' e^{- \alpha'} (1 + e^{- \alpha'})}{(1 - e^{- \alpha'})^{3}} + \frac{e^{- \alpha'}}{(1 - e^{- \alpha'})^{2}} \right)  \\ = - \frac{1}{24} \frac{\hbar \pi c}{a^{2}} \qquad (\alpha = \frac{c}{a \Lambda}, \alpha' = \frac{c}{(L - a) \Lambda})
$$
e) d 问中，用一个特定的指数函数来控制高频电磁波的贡献，得到了一个有限的电磁力；但是，这个电磁力的大小不依赖于具体函数形式的选取。因此，考虑一个更一般的函数 $f(x)$ ，它只需要满足两个条件：

A. $f(0) = 1$ ，

B. 当 $x \to \infty$ 时，$|f(x)|$ 以比 $\frac{1}{x}$ 更快的速度趋于零；

每一个电磁波模式对电磁场总能量的贡献为 $\frac{1}{2}\hbar\omega f(\omega/\pi\Lambda)$ 。试计算在 $L \to \infty$ 、$\Lambda \to \infty$ 的极限下导体板 B 受到的电磁力，并说明结果不依赖于函数 $f(x)$ 的具体形式。

（提示：欧拉-麦克劳林公式如下

$$
\sum_{n=1}^N F(n) - \int_0^N F(n) \, dn = \frac{F(N) - F(0)}{2} + \frac{F'(N) - F'(0)}{12} + \cdots + \frac{B_j}{j!} [ F^{(j-1)}(N) - F^{(j-1)}(0) ] + \cdots
$$

这里 $F^{(j)}$ 是 $F$ 的 $j$ 阶导数，$B_j$ 是伯努利数。如需用到该公式，可只取前两项。）
$$
E_{tot} = \frac{1}{2} \hbar \left( \frac{\pi c}{a} \sum_{n=1}^{\infty} n f(\frac{n c}{a \Lambda}) + \frac{\pi c}{(L - a)}\sum_{n=1}^{\infty} n f(\frac{n c}{(L - a) \Lambda}) \right)
$$

$$
- \lim_{\Lambda , L \to \infty}  \frac{\partial}{\partial a} E_{tot} = - \lim_{\Lambda , L \to \infty}  \frac{\partial}{\partial a} \frac{\hbar \pi c}{2 a} \left((\frac{a \Lambda}{c})^{2} \int_{0}^{\infty} x f(x) \mathrm{d} x - \frac{1}{12} \right) + \frac{\hbar \pi c}{2 (L - a)} \left( (\frac{(L -a) \Lambda}{c})^{2} \int_{0}^{\infty} x f(x) \mathrm{d} x  - \frac{1}{12} \right) \\ = 
- \lim_{\Lambda , L \to \infty}  \frac{\partial}{\partial a} \frac{\hbar \pi L \Lambda^{2}}{2 c} \int_{0}^{\infty} x f(x) \mathrm{d} x - \frac{1}{12} \frac{\hbar \pi c}{2 a} - \frac{1}{12} \frac{\hbar \pi c}{2 (L - a)} \\ = - \frac{1}{24} \frac{\hbar \pi c}{a^{2}}
$$

