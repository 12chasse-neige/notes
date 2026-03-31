# 统计力学 第5次作业

Chasse_neige

6.6 设系统含有两种粒子, 其粒子数分别为 $N$ 和 $N'$, 粒子间的相互作用很弱, 可以看作是近独立的, 试计算平衡状态下两种粒子的最概然分布（分别就三种情况进行计算：经典粒子，玻色子，费米子）。并根据热力学第零定律讨论分布中的什么参数和温度对应。

设第一种粒子的能级为 $\varepsilon_{l}$，简并度为 $\omega_{l}$；第二种粒子的能级为 $\varepsilon_{m}'$，简并度为 $\omega_{m}'$。分布记为 $\{a_{l}\}$ 和 $\{a_{m}'\}$，满足约束
$$
\sum_{l} a_{l} = N, \quad \sum_{m} a_{m}' = N', \quad \sum_{l} \varepsilon_{l} a_{l} + \sum_{m} \varepsilon_{m}' a_{m}' = E
$$
通过最大化总微观状态数 $\Omega = \Omega_{1} \times \Omega_{2}$（或总熵 $S = k \ln \Omega$），引入拉格朗日乘子 $\alpha, \alpha', \beta$，可得最概然分布。

经典粒子

经典粒子服从玻尔兹曼统计，微观状态数为
$$
W_{1} = N! \prod_{l} \frac{\omega_{l}^{a_{l}}}{a_{l}!}, \quad W_{2} = N'! \prod_{m} \frac{\omega_{m}'^{a_{m}'}}{a_{m}'!}
$$
最大化 $\ln W_{1} + \ln W_{2}$，得到分布
$$
a_{l} = \omega_{l} e^{-\alpha - \beta \varepsilon_{l}}, \quad a_{m}' = \omega_{m}' e^{-\alpha' - \beta \varepsilon_{m}'}
$$
其中 $\alpha, \alpha'$ 由粒子数 $N, N'$ 确定，$\beta$ 为公共参数。

玻色子

玻色子服从玻色-爱因斯坦统计，微观状态数为
$$
W_{1} = \prod_{l} \frac{(\omega_{l} + a_{l} - 1)!}{a_{l}! (\omega_{l} - 1)!} \approx \prod_{l} \frac{(\omega_{l} + a_{l})!}{a_{l}! \omega_{l}!}, \quad W_{2} \approx \prod_{m} \frac{(\omega'_{m} + a'_{m})!}{a'_{m}! \omega'_{m}!}
$$
最大化后得分布
$$
a_{l} = \frac{\omega_{l}}{e^{\alpha + \beta \varepsilon_{l}} - 1}, \quad a_{m}' = \frac{\omega_{m}'}{e^{\alpha' + \beta \varepsilon_{m}'} - 1}
$$
其中 $\alpha, \alpha'$ 由粒子数确定，$\beta$ 公共。

费米子

费米子服从费米-狄拉克统计，微观状态数为
$$
W_{1} = \prod_{l} \frac{\omega_{l}!}{a_{l}! (\omega_{l} - a_{l})!}, \quad W_{2} = \prod_{m} \frac{\omega'_{m}!}{a'_{m}! (\omega'_{m} - a'_{m})!}
$$
最大化后得分布
$$
a_{l} = \frac{\omega_{l}}{e^{\alpha + \beta \varepsilon_{l}} + 1}, \quad a_{m}' = \frac{\omega_{m}'}{e^{\alpha' + \beta \varepsilon_{m}'} + 1}
$$
其中 $\alpha, \alpha'$ 由粒子数确定，$\beta$ 公共。热力学第零定律指出：处于热平衡的系统具有相同的温度。在上述分布中，拉格朗日乘子 $\beta$ 对两种粒子相同，所以和温度对应。

6.2 试证明对于一维自由粒子，在长度 $L$ 内，$\varepsilon$ 到 $\varepsilon+d\varepsilon$ 的能量范围内，量子态数为
$$
\mathrm{D}(\varepsilon) d \varepsilon=\frac{2 L}{h}\left(\frac{m}{2 \varepsilon}\right)^{1 / 2} \dd{\varepsilon}
$$

对于一维自由粒子，在周期性边界条件下动量量子化满足
$$
k_{n} = \frac{2 \pi}{L} n
$$
对应的能量是
$$
E_{n} = \frac{\hbar^{2} k_{n}^{2}}{2m} = \frac{n^{2} h^{2}}{2m L^{2}}
$$
此时在能量间隙之间，状态数为
$$
D(\varepsilon) \dd{\varepsilon} = 2 \cdot \frac{m L^{2}}{h^{2}} \sqrt{\frac{h^{2}}{2 m \varepsilon L^{2}}} \dd{\varepsilon} = \frac{2L}{h} \sqrt{\frac{m}{2 \varepsilon}} \dd{\varepsilon}
$$
其中因子 $2$ 来自两个方向的行波态。

6.3 试证明对于二维自由粒子，在长度 $L^{2}$ 内，$\varepsilon$ 到 $\varepsilon+d\varepsilon$ 的能量范围内，量子态数为
$$
\mathrm{D}(\varepsilon) \dd{\varepsilon} = \frac{2 \pi L^{2}}{h^{2}} m \dd{\varepsilon}
$$

此时周期性边界条件带来的动量量子化是
$$
k_{x} = \frac{2 \pi}{L} n_{x}, \quad k_{y} = \frac{2 \pi}{L} n_{y}
$$
对应的能量是
$$
E = \frac{h^{2}}{2m L^{2}} (n_{x}^{2} + n_{y}^{2})
$$
等能面为球面，所以单位能量对应的量子态数为
$$
D (\varepsilon)\dd{\varepsilon} = L^{2} \frac{2 \pi p \dd{p}}{h^{2}} = \frac{2 \pi L^{2}}{h^{2}} m \dd{\epsilon}
$$
6.4 在极端相对论情形下，粒子的能量动量关系为 $\varepsilon=c p$, 试求在体积 $V$ 内，$\varepsilon$ 到 $\varepsilon + \dd{\varepsilon}$ 的能量范围内三维粒子的量子态数。

此时等能面仍然为球面，所以量子态数依旧可以表示为
$$
D (\varepsilon) \dd{\varepsilon} = V \frac{4 \pi p^{2} \dd{p}}{h^{3}} = V \frac{4 \pi}{h^{3} c^{3}} \varepsilon^{2} \dd{\varepsilon}
$$




