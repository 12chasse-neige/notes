# 分析力学 第12次作业

Chasse_neige

7.6 用两种方法证明以下变换是正则变换
$$
Q = \sqrt{2p} \sin q, \quad P = \sqrt{2p} \cos q
$$

(2)  计算泊松括号。

计算泊松括号为
$$
[Q, P]_{pq} = \pdv{Q}{q} \pdv{P}{p} - \pdv{Q}{p} \pdv{P}{q} \\ = 
\sqrt{2p} \cos q \frac{\cos q}{\sqrt{2p}} + \frac{\sin q}{\sqrt{2p}} \sqrt{2p} \sin q = 1
$$
并且显然有
$$
[Q,Q]_{pq} = [P, P]_{pq} = 0
$$
所以是正则变换。

7.8 用两种方法证明以下变换是正则变换
$$
Q_i = q_i \cos \theta_i - p_i \sin \theta_i, \quad P_i = q_i \sin \theta_i + p_i \cos \theta_i, \quad i = 1, 2, 3, \cdots, s
$$

其中 $\theta_i$ 是适当的常量，$s$ 是系统自由度个数。

(2) 计算泊松括号。

计算泊松括号
$$
[Q_{i}, P_{j}]_{pq} = \sum_{k} \pdv{Q_{i}}{q_{k}} \pdv{P_{j}}{p_{k}} - \pdv{Q_{i}}{p_{k}} \pdv{P_{j}}{q_{k}} \\ = 
\sum_{k} \delta_{ik} \cos \theta_{i} \delta_{jk} \cos \theta_{j} - \delta_{ik} \sin \theta_{k} \delta_{jk} \sin \theta_{k} \\=
\delta_{ij}
$$

$$
[Q_{i}, Q_{j}]_{pq} = \sum_{k} \pdv{Q_{i}}{q_{k}} \pdv{Q_{j}}{p_{k}} - \pdv{Q_{i}}{p_{k}} \pdv{Q_{j}}{q_{k}} \\ = 
\sum_{k} \delta_{ik} \cos \theta_{i} \delta_{jk} \sin \theta_{j} - \delta_{ik} \sin \theta_{k} \delta_{jk} \cos \theta_{k} \\=
0
$$

$$
[P_{i}, P_{j}]_{pq} = \sum_{k} \pdv{P_{i}}{q_{k}} \pdv{P_{j}}{p_{k}} - \pdv{P_{i}}{p_{k}} \pdv{P_{j}}{q_{k}} \\ = 
\sum_{k} \delta_{ik} \sin \theta_{i} \delta_{jk} \cos \theta_{j} - \delta_{ik} \cos \theta_{k} \delta_{jk} \sin \theta_{k} \\=
0
$$

所以是正则变换。

7.11 求证: 角动量 $J = (J_1, J_2, J_3)$ 分量之间满足 $[J_1, J_2] = J_3$。

证明：

写出角动量的分量式子
$$
J_{k}  = \epsilon_{ijk} r_{i} p_{k}
$$
所以
$$
[J_{i}, J_{j}] = [\epsilon_{kli} r_{k} p_{l}, \epsilon_{mnj} r_{m} p_{n}] = \epsilon_{kli} \epsilon_{mnj} [r_{k} p_{l}, r_{m} p_{n}] \\ = 
\epsilon_{kli} \epsilon_{mnj} (\delta_{kn} p_{l} r_{m} - \delta_{lm} r_{k} p_{n}) \\=
\epsilon_{nli} \epsilon_{mnj} p_{l} r_{m} - \epsilon_{kmi} \epsilon_{mnj} r_{k} p_{n} \\=
(\delta_{lj} \delta_{im} - \delta_{lm} \delta_{ij}) p_{l} r_{m} - (\delta_{in} \delta_{kj} - \delta_{kn} \delta_{ij}) r_{k} p_{n} \\ = 
p_{j} r_{i} - \delta_{ij} p_{l} r_{l} - p_{i} r_{j}  + \delta_{ij} r_{k} p_{k} = r_{i} p_{j} - r_{j} p_{i}
$$
所以
$$
[J_{1}, J_{2}] = r_{1} p_{2} - r_{2} p_{1} = J_{3}
$$
7.13 在中心力场 $V(r) = -\frac{k}{r}$ 运动的质点，质量 $m$，动量 $p$，角动量 $J$，还有一个守恒量，拉普拉斯-龙格-楞次 (Laplace-Runge-Lenz) 矢量
$$
\vec{A} = \vec{p} \times \vec{J} - \frac{mk\vec{r}}{r}
$$

利用泊松括号证明该矢量是守恒量。

由于 $A$ 不显含 $t$ ，所以
$$
\dv{\vec{A}}{t} = \pdv{\vec{A}}{t} + [\vec{A}, H] = [\vec{A},H]
$$
由于
$$
H = \frac{p^{2}}{2m} - \frac{k}{r}
$$
所以
$$
[\vec{A}, H] = [\vec{p} \times \vec{J} - \frac{m k \vec{r}}{r}, \frac{p^{2}}{2m} - \frac{k}{r}]
$$
展开上述式子
$$
[p^{2} \vec{r} - (\vec{p} \cdot \vec{r}) \vec{p} - \frac{mk \vec{r}}{r},\frac{p^{2}}{2m} - \frac{k}{r}] = [p^{2}, \frac{p^{2}}{2m}] \vec{r} + [\vec{r}, \frac{p^{2}}{2m}] p^{2} - [p^{2} \vec{r} , \frac{k}{r}] - [(\vec{p} \cdot \vec{r}) \vec{p}, \frac{p^{2}}{2m}] + [(\vec{p} \cdot \vec{r}) \vec{p}, \frac{k}{r}] \\ 
- [\frac{mk \vec{r}}{r}, \frac{p^{2}}{2m}] + [\frac{mk \vec{r}}{r}, \frac{k}{r}]
$$
做等价变换
$$
[,\frac{p^{2}}{2m}] = [, \frac{\vec{p} \cdot \vec{p}}{2m}] = [,\vec{p}] \cdot \frac{\vec{p}}{m}
$$
带入泊松括号的表达式
$$
[p^{2}, \frac{p^{2}}{2m}] = 0
$$

$$
[r_{i}, \frac{p^{2}}{2m}] = [r_{i}, p_{j}] \frac{p_{j}}{m} = \delta_{ij} \frac{p_{j}}{m} =\frac{p_{i}}{m}
$$

$$
[p^{2} r_{i}, \frac{k}{r}] = [r_{i}, \frac{k}{r}] p^{2} + 2 p_{j} [p_{j}, \frac{k}{r}] r_{i} \\ = 
0 + \frac{2 p_{j} r_{j}}{r^{3}} k r_{i}
$$

$$
[(p_{j} r_{j}) p_{i}, \frac{p^{2}}{2m}] = [p_{j} r_{j} p_{i}, p_{k}] \frac{p_{k}}{m} = p_{j} p_{i} \delta_{jk} \frac{p_{k}}{m} = \frac{p^{2}}{m} p_{i}
$$

$$
[p_{j} r_{j} p_{i}, \frac{k}{r}] = \frac{k}{r^{2}}  (r_{j} p_{i} \frac{r_{j}}{r} + p_{j} r_{j} \frac{r_{i}}{r} )
$$

$$
[\frac{mk r_{i}}{r}, \frac{p^{2}}{2m}] = p_{j} k [\frac{r_{i}}{r}, p_{j}] = \frac{p_{i} k}{r} - \frac{k p_{j} r_{j} r_{i}}{r^{3}}
$$

$$
[\frac{mk r_{i}}{r}, \frac{k}{r}] = 0
$$

所以带入得到
$$
[A_{i}, H] = p^{2} \frac{p_{i}}{m} - \frac{2 p_{j} r_{j}}{r^{3}} k r_{i} - \frac{p^{2}}{m} p_{i} +\frac{k}{r^{2}}  (r p_{i} + p_{j} r_{j} \frac{r_{i}}{r}) - \frac{p_{i} k}{r} + \frac{k p_{j} r_{j} r_{i}}{r^{3}} = 0
$$
所以是守恒量

7.14 计算拉普拉斯-龙格-楞次矢量 $\mathbf{A}$ 各分量之间的泊松括号。
$$
[A_{i}, A_{j}] = [\epsilon_{lmi} p_{l} J_{m} - \frac{mk r_{i}}{r}, \epsilon_{knj} p_{k} J_{n} - \frac{mk r_{j}}{r} ] \\ =
\epsilon_{lmi} \epsilon_{knj} [p_{l}J_{m}, p_{k} J_{n}] - mk \epsilon_{knj} [\frac{r_{i}}{r}, p_{k} J_{n}] - mk \epsilon_{lmi} [p_{l} J_{m}, \frac{r_{j}}{r}]
$$
第一项
$$
\epsilon_{lmi} \epsilon_{knj} [p_{l}J_{m}, p_{k} J_{n}] = -2mH \epsilon_{ijk} J_k - 2mk \frac{1}{r} \epsilon_{ijk} J_k + 2mk \left( \frac{r_j}{r} p_i - \frac{r_i}{r} p_j \right)
$$

第二项
$$
- mk \epsilon_{knj} [\frac{r_{i}}{r}, p_{k} J_{n}] = -2 mk \frac{1}{r} \epsilon_{ijk} J_k - 2 mk \frac{r_j}{r} p_i + 2 mk \frac{r_i}{r} p_j
$$

第三项
$$
- mk \epsilon_{lmi} [p_{l} J_{m}, \frac{r_{j}}{r}] = 2 mk \frac{1}{r} \epsilon_{ijk} J_k + 2 mk \frac{r_j}{r} p_i - 2 mk \frac{r_i}{r} p_j
$$

将三项相加，所有含 $\frac{mk}{r}$ 和 $r_i p_j$ 的项相互抵消，最终结果为
$$
[A_i, A_j] = -2mH \epsilon_{ijk} J_k
$$
其中 $H = \frac{p^2}{2m} - \frac{k}{r}$ 是系统的哈密顿量。