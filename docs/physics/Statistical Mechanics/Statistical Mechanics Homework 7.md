# 统计力学 第7次作业

Chasse_neige

7.20 试求爱因斯坦固体的熵。

爱因斯坦固体的配分函数为
$$
Z (\beta) = \frac{e^{- \frac{1}{2} \beta h \nu}}{1 - e^{- \beta h \nu}}
$$
所以熵是
$$
S = 3N k_{B} \left(\ln Z - \beta \pdv{\ln Z}{\beta}\right) \\ = 
3N k_{B} \left(- \frac{1}{2} \beta h \nu - \ln (1 - e^{- \beta h \nu}) - \beta \frac{1 - e^{- \beta h \nu}}{e^{- \frac{1}{2} \beta h \nu}} \cdot \frac{- \frac{1}{2} h \nu e^{- \frac{1}{2} \beta h \nu} (1 - e^{- \beta h \nu}) - h \nu e^{- \frac{3}{2} \beta h \nu}}{(1 - e^{- \beta h \nu})^{2}}\right) \\ =
- 3N k_{B} \left(\frac{1}{2} \beta h \nu + \ln (1 - e^{- \beta h \nu}) - \beta h \nu \frac{e^{- \beta h \nu} + \frac{1}{2} (1 - e^{- \beta h \nu})}{1 - e^{- \beta h \nu}}\right) \\ = 
3N k_{B} \left(-\ln (1 - e^{- \beta h \nu}) + \beta h \nu \frac{1}{e^{\beta h \nu} - 1}\right)
$$
7.22 以 $n$ 表示晶体中原子的密度, 设原子的总角动量量子数为$1$, 磁矩为 $\mu$, 在外磁场 $B$ 下, 原子磁矩可以有三个不同的取向, 即平行、垂直、反平行于外磁场。假设磁矩之间的相互作用可以忽略, 试求在温度为 $T$ 时晶体的磁化强度 $M$, 以及 $M$ 在弱场高温极限和强场低温极限下的近似值。

利用玻尔兹曼统计，此时沿着磁场方向的平均磁矩为
$$
\bar{\mu} = \frac{\mu e^{\beta \mu B} - \mu e^{- \beta \mu B}}{e^{\beta \mu B} + 1 + e^{- \beta \mu B}}
$$
所以
$$
M (\beta) = n \mu \frac{2 \sinh (\beta \mu B)}{2 \cosh (\beta \mu B) + 1}
$$
弱场高温极限下，$\beta \mu B \ll 1$，所以此时上述磁化强度可以展开为
$$
M (\beta) \approx \frac{2}{3} n \beta \mu^{2} B
$$
在强场低温极限下，$\beta \mu B \gg 1$，所以此时上述磁化强度可以近似为
$$
M (\beta) \approx n \mu
$$

## 补充题

#### 顺磁固体 $\mathrm{Gd}_{2}\left(\mathrm{SO}_{4}\right)_{3} \cdot\left(\mathrm{H}_{2} \mathrm{O}\right)_{8}$ 的顺磁性来自 $\mathrm{Gd}^{3+}$ 离子, $\mathrm{Gd}^{3+}$ 离子基态的谱项为 ${}^{8} \mathrm{S}_{7 / 2}(L=0, J=S=7 / 2)$, 试求在高温和低温极限下 $\mathrm{Gd}_{2}\left(\mathrm{SO}_{4}\right)_{3} \cdot\left(\mathrm{H}_{2} \mathrm{O}\right)_{8}$ 的磁化率。

朗德因子 $g$ 的计算公式为

$$
g = 1 + \frac{J(J+1) + S(S+1) - L(L+1)}{2J(J+1)}
$$

代入 $L=0$, $S=J=7/2$, 得

$$
g = 1 + \frac{\frac{7}{2} \times \frac{9}{2} + \frac{7}{2} \times \frac{9}{2} - 0}{2 \times \frac{7}{2} \times \frac{9}{2}} = 2
$$

在高温极限下，居里常数 $C$ 为

$$
C = \frac{n g^{2} \mu_{0} \mu_{B}^{2} J(J+1)}{3 k_{B}}
$$

其中 $n$ 为 $\mathrm{Gd}^{3+}$ 离子数密度。代入 $g=2$, $J = \frac{7}{2}$, $J(J+1) = \frac{63}{4}$, 得

$$
C =  \frac{63 n \mu_{0} \mu_{B}^{2}}{3 k_{B}} = \frac{21 n \mu_{0} \mu_{B}^{2}}{k_{B}}
$$

零场磁化率服从居里定律

$$
\chi = \frac{C}{T}
$$

即

$$
\chi = \frac{21 n \mu_{0} \mu_{B}^{2}}{k_{B} T}
$$

在低温极限下
$$
m \approx n \mu_{B} g J
$$

$$
\chi = \frac{m}{H} \to 0
$$

#### 银原子蒸气置于磁场中，它的磁矩只能取两个方向，沿磁场方向与逆磁场方向。求：1. 磁矩 $\mu$ 沿磁场方向的分子占总数的成分比；2. 单个分子的平均磁矩。

磁矩 $\mu$ 沿着磁场方向的分子占总数的成分比为
$$
\frac{e^{\beta \mu B}}{e^{\beta \mu B} + e^{- \beta \mu B}}
$$
单个分子的平均磁矩为
$$
\bar{\mu} = \mu \tanh (\beta \mu B)
$$
