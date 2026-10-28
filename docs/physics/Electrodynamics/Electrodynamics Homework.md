# Electrodynamics Homework

## 第1次作业

本作业所有求和默认采用爱因斯坦求和约定。

### 1. 矢量分析

#### (a)

$\epsilon_{ijk}$ 满足:
$$
\sum_{k=1}^{3} \epsilon_{ijk} \epsilon_{lmk} = \delta_{il} \delta_{jm} - \delta_{im} \delta_{jl}
$$

证明：

先除去所有 $\epsilon_{ijk} \epsilon_{lmk} = 0$ 的情况，仅考虑$i,j,k \text{和} l,m,k$ 互不相同的时侯。此时仅存在两种情况， $i=l$ 且 $j=m$ 和 $i=m \text{且} j=l$ 。显然，当 $i=l$ 且 $j=m$时，$\epsilon_{ijk} = \epsilon_{lmk}$ ；当 $i=m \text{且} j=l$ 时，$\epsilon_{ijk} = - \epsilon_{lmk}$。所以 $\epsilon_{ijk} \epsilon_{lmk} = \delta_{il} \delta_{jm} - \delta_{im} \delta_{jl}$，因为求和时仅有一个 $k$ 满足$i,j,k \text{和} l,m,k$ 互不相同的条件。

#### (b)

用 $\delta_{ij}$ 和 $\epsilon_{ijk}$ 证明，

1.
$$
\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a} \cdot \vec{c}) \vec{b} - (\vec{a} \cdot \vec{b}) \vec{c}
$$
证明：
$$
\begin{gathered}
\vec{a} \times  (\vec{b} \times \vec{c}) = \epsilon_{lkm} \epsilon_{ijk} a_{l} b_{i} c_{j} \vec{e_{m}} = 
\epsilon_{mlk} \epsilon_{ijk} a_{l} b_{i} c_{j} \vec{e_{m}} \\= 
(\delta_{mi} \delta_{lj} - \delta_{mj} \delta_{li}) a_{l} b_{i} c_{j} \vec{e_{m}} = 
a_{j} b_{i} c_{j} \vec{e_{i}} - a_{i} b_{i} c_{j} \vec{e_{m}} = (\vec{a} \cdot \vec{c}) \vec{b} - (\vec{a} \cdot \vec{b}) \vec{c}
\end{gathered}
$$
2.
$$
(\vec{a} \times \vec{b}) \times (\vec{c} \times \vec{d}) = [\vec{a} \cdot (\vec{b} \times \vec{d})] \vec{c} - [\vec{a} \cdot (\vec{b} \times \vec{c})] \vec{d} = [\vec{a} \cdot (\vec{c} \times \vec{d})] \vec{b} - [\vec{b} \cdot (\vec{c} \times \vec{d})] \vec{a}
$$
证明：
$$
\begin{gathered}
(\vec{a} \times \vec{b}) \times (\vec{c} \times \vec{d}) = (\epsilon_{ijk} a_{i} b_{j} \vec{e_{k}}) \times (\epsilon_{lmn} c_{l} d_{m} \vec{e_{n}}) \\ = 
\epsilon_{kns} \epsilon_{ijk} \epsilon_{lmn} a_{i} b_{j} c_{l} d_{m} \vec{e_{s}} = 
\epsilon_{ijk} (\delta_{sl} \delta_{km} - \delta_{sm} \delta_{kl}) a_{i} b_{j} c_{l} d_{m} \vec{e_{s}} \\ = 
\epsilon_{ijk}  (a_{i} b_{j} c_{l} d_{k} \vec{e_{l}} - a_{i} b_{j} c_{k} d_{m} \vec{e_{m}}) =
[\vec{a} \cdot (\vec{b} \times \vec{d})] \vec{c} - [\vec{a} \cdot (\vec{b} \times \vec{c})] \vec{d} \\ 

\epsilon_{kns} \epsilon_{ijk} \epsilon_{lmn} a_{i} b_{j} c_{l} d_{m} \vec{e_{s}} =
(\delta_{ni} \delta_{sj} - \delta_{nj} \delta_{si}) \epsilon_{lmn} a_{i} b_{j} c_{l} d_{m} \vec{e_{s}} \\ = 
\epsilon_{lmn} (a_{n} b_{s} c_{l} d_{m} \vec{e_{s}} - a_{s} b_{n} c_{l} d_{m} \vec{e_{s}}) =
[\vec{a} \cdot (\vec{c} \times \vec{d})] \vec{b} - [\vec{b} \cdot (\vec{c} \times \vec{d})] \vec{a}
\end{gathered}
$$

#### (c) 思考选做题

试证明

i. 一阶张量除零矢量外，都不是各向同性的

证明：矢量$\vec{A} = \begin{pmatrix} A_{1}, A_{2}, \cdots, A_{n} \end{pmatrix}$ 各向同性意味着对所有方向的单位矢量而言，$\vec{A}$ 在它们上的投影值相同。
$$
\vec{A} \cdot \hat{e} = |\vec{A}| \cos<\vec{A}, \hat{e}> = const
$$

$$
\therefore \,\, |\vec{A}| = 0
$$

ii. 二阶张量中的各向同性的张量必为 $\lambda \delta_{ij}$

证明：设二阶张量 $T_{ij}$ 满足 $Q_{ki} Q_{lj} T_{ij} = T_{kl}$ 对所有正交阵 $Q$均成立。取$Q$为绕 $z$ 轴的旋转阵，代入条件可得：
$$
\begin{pmatrix} \cos \theta & \sin \theta \\ - \sin \theta &  \cos \theta \end{pmatrix} \begin{pmatrix} T_{11} & T_{12} \\ T_{21} & T_{22} \end{pmatrix} \begin{pmatrix} \cos \theta & - \sin \theta \\ \sin \theta & \cos \theta \end{pmatrix}  = \begin{pmatrix} T_{11} & T_{12} \\ T_{21} & T_{22} \end{pmatrix}
$$

$$
\therefore \,\, \begin{cases} T_{11} = T_{12} \\ T_{22} = T_{21} = 0 \end{cases}
$$
同理，可以得到
$$
\begin{cases} T_{11} = T_{33} \\ T_{13} = T_{31} = 0 \\ T_{22} = T_{33} \\ T_{23} = T_{32} = 0 \end{cases}
$$
即$T_{ij} = \lambda \delta_{ij}$

iii. 三阶张量中的各向同性的张量必为 $\lambda \epsilon_{ijk}$

证明：此时用上面的方法去凑变换消去自由度太繁琐，尝试再换一种方法：

考虑坐标架的一个无穷小转动 $\delta \vec{\theta}$ 则任意三阶张量在转动后可以表达为：
$$
T_{ijk}^{'} = T_{ijk} + \delta \theta_{l} (\epsilon_{lim}T_{mjk} + \epsilon_{ljm} T_{imk} + \epsilon_{lkm} T_{ijm})
$$
要求转动前后分量相等，所以
$$
\epsilon_{lim}T_{mjk} + \epsilon_{ljm} T_{imk} + \epsilon_{lkm} T_{ijm} = 0
$$
假设 $T$是完全反对称的，即满足：
$$
T_{ijk} = A \epsilon_{ijk},
$$
将 $T_{ijk} = A \epsilon_{ijk}$ 代入原方程：
$$
\epsilon_{lim} (A \epsilon_{mjk}) + \epsilon_{ljm} (A \epsilon_{imk}) + \epsilon_{lkm} (A \epsilon_{ijm}) = 0.
$$
提取常数 $A$：
$$
A \left( \epsilon_{lim} \epsilon_{mjk} + \epsilon_{ljm} \epsilon_{imk} + \epsilon_{lkm} \epsilon_{ijm} \right) = 0.
$$
将三项相加：
$$
\begin{aligned}
& (\delta_{lj}\delta_{ik} - \delta_{lk}\delta_{ij}) \\

+ & (-\delta_{li}\delta_{jk} + \delta_{lk}\delta_{ij}) \\

+ & (\delta_{li}\delta_{kj} - \delta_{lj}\delta_{ki}) \\
  = & \delta_{lj}\delta_{ik} - \delta_{lk}\delta_{ij} -\delta_{li}\delta_{jk} + \delta_{lk}\delta_{ij} + \delta_{li}\delta_{kj} - \delta_{lj}\delta_{ki} = 0
  \end{aligned}
$$
对于非完全反对称的一般 $T$ ，对其做对称反对称分解，其中的对称部分设为$S_{ijk}$

带入：
$$
\epsilon_{lim} S_{mjk} + \epsilon_{ljm} S_{imk} + \epsilon_{lkm} S_{ijm} = 0
$$

$$
\epsilon_{lnm} (\epsilon_{lim} S_{mjk} + \epsilon_{ljm} S_{imk} + \epsilon_{lkm} S_{ijm}) = 0
$$

$$
2(\delta_{ni} S_{mjk} + \delta_{nj} S_{imk} + \delta_{nk} S_{ijm}) = 0
$$

当 $n = i$ 时：
$$
\delta_{ni} S_{mjk} + \delta_{nj} S_{imk} + \delta_{nk} S_{ijm} = S_{mjk} + \delta_{ij} S_{imk} + \delta_{ik} S_{ijm} =  S_{mjk} + S_{jmk} + S_{kjm} = 
3 S_{mjk}
$$

当$n = j$ 和$n = k$ 时同理。
$$
\therefore \,\, \delta_{ni} S_{mjk} + \delta_{nj} S_{imk} + \delta_{nk} S_{ijm} = 
3 (S_{mjk} + S_{imk} + S_{ijm}) = 0
$$

$$
S_{ijk} = 0
$$

即不能存在对称分量。

iv. 四阶张量中的各向同性的张量必为 $\lambda \delta_{ij} \delta_{kl} + \alpha \delta_{ik} \delta_{jl} + \beta \delta_{il} \delta_{jk}$

对于四阶各向同性张量，推广形式为：  

$\epsilon_{mis}\,a_{sjkl} + \epsilon_{mjs}\,a_{iskl} + \epsilon_{mks}\,a_{ijsl} + \epsilon_{mls}\,a_{ijks} = 0$  

分别乘以$\epsilon_{mit}$、$\epsilon_{mjt}$、$\epsilon_{mkt}$和$\epsilon_{mlt}$，并令$t=i$、$t=j$、$t=k$和$t=l$，得到：  

$2\,a_{ijkl} + a_{jikl} + a_{kjil} + a_{ljki} = a_{sskl}\,\delta_{ij} + a_{sjsl}\,\delta_{ik} + a_{sjks}\,\delta_{il}$ 
$2\,a_{ijkl} + a_{jikl} + a_{ikjl} + a_{iljk} = a_{sskl}\,\delta_{ij} + a_{isks}\,\delta_{jl} + a_{issl}\,\delta_{jk}$ 
$2\,a_{ijkl} + a_{kjil} + a_{ikjl} + a_{ijlk} = a_{ijss}\,\delta_{kl} + a_{sjsl}\,\delta_{ik} + a_{issl}\,\delta_{jk}$ 
$2\,a_{ijkl} + a_{ljki} + a_{ilkj} + a_{ijlk} = a_{ijss}\,\delta_{kl} + a_{isks}\,\delta_{jl} + a_{sjks}\,\delta_{il}$  

由于$a_{sskl}$、$a_{sjsl}$和$a_{sjks}$是二阶各向同性张量，我们有：  

$a_{sskl} = \lambda\,\delta_{kl}$
$a_{sjsl} = \mu\,\delta_{jl}$ 
$a_{sjks} = \nu\,\delta_{jk}$  

因此，  

$a_{ijkl} = \alpha\,\delta_{ij}\,\delta_{kl} + \beta\,\delta_{ik}\,\delta_{jl} + \gamma\,\delta_{il}\,\delta_{jk}$  

其中：  

$\alpha = \frac{4\lambda - \mu - \nu}{10}$ 
$\beta = \frac{4\mu - \nu - \lambda}{10}$ 
$\gamma = \frac{4\nu - \lambda - \mu}{10}$  

### 2. 场论

#### 1.1

根据算符∇的微分性与矢量性，推导下列公式：
$$
\nabla(\mathbf{A} \cdot \mathbf{B}) = \mathbf{B} \times (\nabla \times \mathbf{A}) + (\mathbf{B} \cdot \nabla) \mathbf{A} + \mathbf{A} \times (\nabla \times \mathbf{B}) + (\mathbf{A} \cdot \nabla) \mathbf{B}
$$

$$
\mathbf{A} \times (\nabla \times \mathbf{A}) = \frac{1}{2} \nabla A^{2} - (\mathbf{A} \cdot \nabla) \mathbf{A}
$$

证明：第一个式子从右推左
$$
\mathbf{B} \times (\nabla \times \mathbf{A}) + \mathbf{A} \times (\nabla \times \mathbf{B}) = 
\nabla_{A} (\mathbf{A} \cdot \mathbf{B}) + \nabla_{B} (\mathbf{A} \cdot \mathbf{B}) - (\mathbf{B} \cdot \nabla) \mathbf{A} - (\mathbf{A} \cdot \nabla) \mathbf{B}
$$
其中 $\nabla$ 的下标表示仅对该分量做微分。
$$
\begin{gathered}
\therefore \,\, \mathbf{B} \times (\nabla \times \mathbf{A}) + (\mathbf{B} \cdot \nabla) \mathbf{A} + \mathbf{A} \times (\nabla \times \mathbf{B}) + (\mathbf{A} \cdot \nabla) \mathbf{B} \\ = 
\nabla_{A} (\mathbf{A} \cdot \mathbf{B}) + \nabla_{B} (\mathbf{A} \cdot \mathbf{B}) - (\mathbf{B} \cdot \nabla) \mathbf{A} - (\mathbf{A} \cdot \nabla) \mathbf{B} + (\mathbf{B} \cdot \nabla) \mathbf{A} + (\mathbf{A} \cdot \nabla) \mathbf{B} \\ = 
\nabla_{A} (\mathbf{A} \cdot \mathbf{B}) + \nabla_{B} (\mathbf{A} \cdot \mathbf{B}) = \nabla (\mathbf{A} \cdot \mathbf{B})
\end{gathered}
$$
第二个式子从左推右，为了区分，给两个A加上下标，但是它们本质上是一样的。
$$
\mathbf{A_{1}} \times (\nabla \times \mathbf{A_{2}}) =  \nabla_{\mathbf{A_{2}}} (\mathbf{A_{1}} \cdot \mathbf{A_{2}}) - (\mathbf{A_{1}} \cdot \nabla) \mathbf{A_{2}}
$$

$$
\because \,\, \nabla_{\mathbf{A_{2}}} (\mathbf{A_{1}} \cdot \mathbf{A_{2}}) = \nabla_{\mathbf{A_{1}}} (\mathbf{A_{1}} \cdot \mathbf{A_{2}})
$$

$$
\therefore \,\, \nabla_{\mathbf{A_{2}}} (\mathbf{A_{1}} \cdot \mathbf{A_{2}}) = \frac{1}{2}  (\nabla_{\mathbf{A_{1}}} (\mathbf{A_{1}} \cdot \mathbf{A_{2}}) + \nabla_{\mathbf{A_{2}}} (\mathbf{A_{1}} \cdot \mathbf{A_{2}})) = \frac{1}{2} \nabla A^{2}
$$

$$
\therefore \,\, \mathbf{A} \times (\nabla \times \mathbf{A}) = \frac{1}{2} \nabla A^{2} - (\mathbf{A} \cdot \nabla) \mathbf{A}
$$

#### 1.3

设 $r=\sqrt{(x-x')^{2}+(y-y')^{2}+(z-z')^{2}}$ 为源点 $x'$ 到场点 $x$ 的距离，$r$ 的方向规定为从源点指向场点。

(1) 证明下列结果，并体会对源变数求微商 $\left(\nabla'=\mathbf{e}_{x} \frac{\partial}{\partial x'}+\mathbf{e}_{y} \frac{\partial}{\partial y'}+\mathbf{e}_{z} \frac{\partial}{\partial z'}\right)$ 与对场变数求微商 $\left(\nabla=\mathbf{e}_{x} \frac{\partial}{\partial x}+\mathbf{e}_{y} \frac{\partial}{\partial y}+\mathbf{e}_{z} \frac{\partial}{\partial z}\right)$ 的关系：

$$
\begin{gathered}
\nabla r = -\nabla' r = \frac{\mathbf{r}}{r} \\
\nabla \frac{1}{r} = -\nabla' \frac{1}{r} = -\frac{\mathbf{r}}{r^{3}} \\
\nabla \times \frac{\mathbf{r}}{r^{3}} = 0 \\
\nabla \cdot \frac{\mathbf{r}}{r^{3}} = -\nabla' \cdot \frac{\mathbf{r}}{r^{3}} = 0 \quad (r \neq 0)
\end{gathered}
$$
（最后一式在 $r=0$ 点不成立，见第二章 §5）。

证明：将 $r$ 表示为直角坐标下的分量式  $\vec{r} = (x-x^{'}) \vec{e_{x}} + (y - y^{'}) \vec{e_{y}} + (z - z^{'}) \vec{e_{z}}$ 和 $r=\sqrt{(x-x')^{2}+(y-y')^{2}+(z-z')^{2}}$  
$$
\nabla r = \partial_{i} \sqrt{(x_{i} - x_{i}^{'})^{2}} \vec{e_{i}} = \frac{(x_{i} - x_{i}^{'}) \vec{e_{i}}}{\sqrt{(x_{i} - x_{i}^{'})^{2}}} = \frac{\vec{r}}{r}
$$

$$
\nabla^{'} r = \partial_{i}^{'} \sqrt{(x_{i} - x_{i}^{'})^{2}} \vec{e_{i}} = - \frac{(x_{i} - x_{i}^{'}) \vec{e_{i}}}{\sqrt{(x_{i} - x_{i}^{'})^{2}}} = - \frac{\vec{r}}{r}
$$

$$
\nabla \frac{1}{r} = \partial_{i} \frac{1}{\sqrt{(x_{i} - x_{i}^{'})^{2}}} \vec{e_{i}} = - \frac{(x_{i} - x_{i}^{'}) \vec{e_{i}}}{\sqrt{(x_{i} - x_{i}^{'})^{2}}^{3}} = - \frac{\vec{r}}{r^{3}}
$$

$$
\nabla^{'} \frac{1}{r} = \partial_{i}^{'} \frac{1}{\sqrt{(x_{i} - x_{i}^{'})^{2}}} \vec{e_{i}} = \frac{(x_{i} - x_{i}^{'}) \vec{e_{i}}}{\sqrt{(x_{i} - x_{i}^{'})^{2}}^{3}} = \frac{\vec{r}}{r^{3}}
$$

$$
\nabla \times \frac{\vec{r}}{r^{3}} =  - \nabla \times (\nabla \frac{1}{r}) = 0
$$

$$
\nabla \cdot \frac{\vec{r}}{r^{3}} = -\nabla' \cdot \frac{\vec{r}}{r^{3}} = \frac{3}{r^{3}} - 3 \frac{\vec{r}}{r^{5}} \cdot \vec{r} = 0 \,\, (r \neq 0 )
$$

(2) 求 $\nabla \cdot \mathbf{r}$，$\nabla \times \mathbf{r}$，$(\mathbf{a} \cdot \nabla) \mathbf{r}$，$\nabla (\mathbf{a} \cdot \mathbf{r})$，$\nabla \cdot [\mathbf{E}_{0} \sin (\mathbf{k} \cdot \mathbf{r})]$ 及 $\nabla \times [\mathbf{E}_{0} \sin (\mathbf{k} \cdot \mathbf{r})]$，其中 $\mathbf{a}$、$\mathbf{k}$ 及 $\mathbf{E}_{0}$ 均为常矢量。
$$
\nabla \cdot \vec{r} = 3
$$

$$
\nabla \times \vec{r} = 0
$$

$$
(\vec{a} \cdot \nabla)\vec{r} = \vec{a} \cdot \overset{\leftrightarrow}{I} = \vec{a}
$$

$$
\nabla (\vec{a} \cdot \vec{r}) = (\vec{a} \cdot \nabla) \vec{r} + (\vec{r} \cdot \nabla) \vec{a} + \vec{a} \times (\nabla \times \vec{r}) + \vec{r} \times (\nabla \times \vec{a}) = \vec{a} + 0 + 0 + 0 = \vec{a}
$$

$$
\nabla \cdot [\mathbf{E}_{0} \sin (\mathbf{k} \cdot \mathbf{r})] = (\nabla \sin(\vec{k} \cdot \vec{r})) \cdot \vec{E_{0}} + \sin(\vec{k} \cdot \vec{r}) \nabla \cdot \vec{E_{0}} = \cos (\vec{k} \cdot \vec{r}) \,\, \nabla(\vec{k} \cdot \vec{r}) \cdot \vec{E_{0}} + 0 = \cos (\vec{k} \cdot \vec{r}) (\vec{k} \cdot \vec{E_{0}})
$$

$$
\nabla \times [\mathbf{E}_{0} \sin (\mathbf{k} \cdot \mathbf{r})] = (\nabla \sin(\vec{k} \cdot \vec{r})) \times \vec{E_{0}} + \sin(\vec{k} \cdot \vec{r}) \nabla \times \vec{E_{0}} = \cos (\vec{k} \cdot \vec{r}) \vec{k} \times \vec{E_{0}} + 0 = \cos (\vec{k} \cdot \vec{r}) (\vec{k} \times \vec{E_{0}})
$$

#### 1.6

若 $\mathbf{m}$ 是常矢量，证明除 $R=0$ 点以外，矢量 $\mathbf{A} = \frac{\mathbf{m} \times \mathbf{R}}{R^{3}}$ 的旋度等于标量 $\varphi = \frac{\mathbf{m} \cdot \mathbf{R}}{R^{3}}$ 的梯度的负值，即
$$
\nabla \times \mathbf{A} = -\nabla \varphi \qquad (R \neq 0)
$$

其中 $\mathbf{R}$ 为坐标原点到场点的距离，方向由原点指向场点。

证明：
$$
\begin{gathered}
\nabla \times \vec{A} = - \nabla \times (\vec{m} \times \nabla \frac{1}{r}) =  - (\vec{m} \nabla^{2} \frac{1}{r} - \vec{m} \cdot \nabla \nabla \frac{1}{r} + (\nabla \frac{1}{r}) \cdot (\nabla \vec{m}) - (\nabla \frac{1}{r})(\nabla \cdot \vec{m})) \\ = -(0 - \frac{3 (\vec{m} \cdot \vec{r}) \vec{r}}{r^{5}} + \frac{\vec{m}}{r^{3}} + 0 - 0) = - \frac{\vec{m}}{r^{3}} + \frac{3(\vec{m} \cdot \vec{r})}{r^{5}} \qquad (R \neq 0)
\end{gathered}
$$

$$
\begin{gathered}
- \nabla \varphi = \nabla (\vec{m} \cdot \nabla \frac{1}{r}) = \vec{m} \times (\nabla \times \nabla \frac{1}{r}) + \nabla \frac{1}{r} \times (\nabla \times \vec{m}) + (\vec{m} \cdot \nabla) \nabla \frac{1}{r} + (\nabla \frac{1}{r} \cdot \nabla) \vec{m} \\ = 
0 + 0 + \vec{m} \cdot \nabla \nabla \frac{1}{r} + 0 = - \frac{\vec{m}}{r^{3}} + \frac{3(\vec{m} \cdot \vec{r})}{r^{5}} \qquad (R \neq 0)
\end{gathered}
$$

#### 思考题

$\nabla \cdot \vec{A} > 0$，$\nabla \cdot \vec{A} = 0$，$\nabla \cdot \vec{A} < 0$ 在直观图像上有什么差别？$\nabla \times \vec{A} > 0$，$\nabla \times \vec{A} = 0$，$\nabla \times \vec{A} < 0$ 呢？

$\nabla \cdot \vec{A} > 0$ 在直观上表示为矢量场$\vec{A}$ 在图像上从该点向四周“发射”，总体作用向外的；

$\nabla \cdot \vec{A} = 0$ 在直观上表现为该点的矢量场在打转或者干脆没有，进出相互抵消，总通量为0；

$\nabla \cdot \vec{A} < 0$ 在直观上表现为该点的矢量场向内汇聚，总体作用向内。

$\nabla \times \vec{A} = 0$ 表现为该点的矢量场沿着径向或者为0。

我不知道$\nabla \times \vec{A} > 0$ $\nabla \times \vec{A} < 0$是什么意思。如果是针对一个特定方向定义的话那么代表着二者旋转方向相反。

### 3. $\delta$ 函数

#### 2.14

画出函数 $\frac{\mathrm{d}\delta(x)}{\mathrm{d}x}$ 的图，说明 $\rho = -(\mathbf{p} \cdot \nabla)\delta(\mathbf{x})$ 是一个位于原点的偶极子的电荷密度。

函数  $\frac{\mathrm{d}\delta(x)}{\mathrm{d}x}$ 的图：

<img src="./Electrodynamics Homework.assets/image-20260128015449020.png" alt="image-20260128015449020" style="zoom:50%;" />

注：因为严格的图像画出后函数曲线和坐标轴不太好分辨，此图是利用高斯函数在极限情况下的一个近似图像，可以体现函数的部分性质。 

证明：
$$
\begin{gathered}
\int \rho \vec{r} \, d \tau = \int  -(\vec{p} \cdot \nabla)\delta(\vec{r}) \, \vec{r} \, d \tau = \int ( (\nabla \cdot \vec{p}) \delta(\vec{r}) - \nabla \cdot (\delta(\vec{r}) \vec{p})) \vec{r} d \tau \\ = - \int \nabla \cdot (\delta(\vec{r}) \vec{p} \vec{r}) d \tau + \int \delta(\vec{r}) \vec{p} \cdot \nabla \vec{r} \, d \tau = \int \delta(\vec{r}) \vec{p} \, d \tau = \vec{p}
\end{gathered}
$$

#### 思考题：

(1) $\delta(ax) = \frac{1}{|a|}\delta(x), a > 0$. （若 $a < 0$，结果如何？）

证明：
$$
\begin{gathered}
\delta(ax) \, d (ax) =  \delta (x) \, dx \\
\therefore \,\, \delta(ax) = \frac{1}{|a|}\delta(x), a > 0
\end{gathered}
$$
当 $a < 0$ 时，
$$
\delta(ax) = - \frac{1}{|a|}\delta(x), a > 0
$$

(2) $x\delta(x) = 0$.
$$
\because \,\, f(x) \delta(x-x_{0}) = f(x_{0})
$$

$$
\therefore \,\, x \delta (x-0) = 0
$$

## 第2次作业

### 1. 电磁相互作用的源

思考题：对一闭合曲面 $S$，$\oint_{S} \vec{j} \cdot d\vec{S} < 0$，$\oint_{S} \vec{j} \cdot d\vec{S} = 0$，$\oint_{S} \vec{j} \cdot d\vec{S} > 0$ 分别代表什么物理意义？

$\oint_{S} \vec{j} \cdot d\vec{S} < 0$ 在图像上表示在曲面上电流总体表现为向内，即对于该空间而言电荷量增加；

$\oint_{S} \vec{j} \cdot d\vec{S} > 0$ 在图像上表示在曲面上电流总体表现为向外，即对于该空间而言电荷量减少；

$\oint_{S} \vec{j} \cdot d\vec{S} = 0$ 在图像上表示在该处向内和向外的流量相抵消，曲面内空间电荷量不变。

### 2. 电磁相互作用的场与真空中的基本实验定律

1.5 已知一个电荷系统的偶极矩定义为
$$
p(t) = \int_{V} \rho(\vec{r'}, t) \vec{r'} dV'
$$

利用电荷守恒定律 $\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0$ 证明 $p$ 的变化率为

$$
\frac{dp}{dt} = \int_{V} \mathbf{J}(\vec{r'}, t) dV'
$$
证明：
$$
\begin{gathered}
\frac{dp}{dt} = \frac{d}{dt} \int_{V} \rho(\vec{r'}, t) \vec{r'} dV' = \int_{V} \frac{\partial}{\partial t} \rho(\vec{r'}, t) \vec{r'} dV' = \int_{V} (- \nabla' \cdot \mathbf{J} (\vec{r'}, t)) \vec{r'} dV' \\ =
\int_{V} ( - \nabla' \cdot (\mathbf{J}(\vec{r'}, t) \vec{r'}) + \mathbf{J}(\vec{r'}, t) \cdot \nabla' \vec{r'}) dV'
= - \int_{S} d \vec{S'} \cdot \mathbf{J}(\vec{r'}, t) \vec{r'} + \int_{V}\mathbf{J}(\vec{r'}, t) \cdot \overset{\leftrightarrow}{I} dV'
\end{gathered}
$$
取积分曲面为无穷远，则第一项面积分为0，所以
$$
\frac{dp}{dt} = \int_{V}\mathbf{J}(\vec{r'}, t) \cdot \overset{\leftrightarrow}{I} dV' = \int_{V} \mathbf{J}(\vec{r'}, t) dV'
$$
1.10 证明两个闭合的恒定电流圈之间的相互作用力大小相等，方向相反（但两个电流元之间的相互作用力一般并不服从牛顿第三定律）。

证明：假设线圈1和2的电流大小分别为 $I_{1}, I_{2}$ ，两个线圈上电流源之间的位矢为 $\vec{r}_{12}$ 。

考虑线圈1收到线圈2的力：
$$
\vec{B_{2}} = \frac{\mu_{0}}{4 \pi} \oint_{l_{2}} \frac{I_{2} d \vec{l_{2}} \times \vec{r}_{12}}{r_{12}^{3}}
$$

$$
d \vec{F}_{12} = I_{1} d \vec{l_{1}} \times \frac{\mu_{0}}{4 \pi} \oint_{l_{2}} \frac{I_{2} d \vec{l_{2}} \times \vec{r}_{12}}{r_{12}^{3}}
$$

$$
\vec{F}_{12} = \oint_{l_{1}} \oint_{l_{2}} \frac{\mu_{0}}{4 \pi} \frac{I_{1} d \vec{l_{1}} \times (I_{2} d \vec{l_{2}} \times \vec{r}_{12})}{r_{12}^{3}} = \oint_{l_{1}} \oint_{l_{2}} \frac{\mu_{0}}{4 \pi} I_{1} I_{2} \left( \frac{\vec{r}_{12} \cdot d \vec{l_{1}}}{r_{12}^{3}} d \vec{l_{2}} - \frac{d \vec{l_{1}} \cdot d \vec{l_{2}}}{r_{12}^{3}} \vec{r}_{12} \right)
$$

再计算线圈2收到线圈1的力：
$$
\vec{F}_{21} = \oint_{l_{1}} \oint_{l_{2}} \frac{\mu_{0}}{4 \pi} I_{1} I_{2} \left( \frac{\vec{r}_{21} \cdot d \vec{l_{2}}}{r_{21}^{3}} d \vec{l_{1}} - \frac{d \vec{l_{2}} \cdot d \vec{l_{1}}}{r_{21}^{3}} \vec{r}_{21} \right)
$$

$$
\therefore \,\, \vec{F}_{12} + \vec{F}_{21} = 
\frac{\mu_{0} I_{1} I_{2}}{4 \pi} \oint_{l_{1}} \oint_{l_{2}} \frac{\vec{r}_{12} \cdot d \vec{l_{1}}}{r_{12}^{3}} d \vec{l_{2}} - \frac{\vec{r}_{12} \cdot d \vec{l_{2}}}{r_{12}^{3}} d \vec{l_{1}}
$$

考虑积分的第一部分：
$$
\oint_{l_{1}} \oint_{l_{2}} \frac{\vec{r}_{12} \cdot d \vec{l_{1}}}{r_{12}^{3}} d \vec{l_{2}} = \oint_{l_{2}} 
d \vec{l_{2}} \oint_{l_{1}} \frac{d r_{12}}{r_{12}^{2}} = 0
$$
同理，第二项也为0。
$$
\therefore \,\, \vec{F}_{12} + \vec{F}_{21} = 0
$$

### 3. 真空中电磁相互作用的场方程

(a) 求证电偶极子(正负电荷相对距离 $l \rightarrow 0$，电量 $q \rightarrow \infty$，$lq$ 固定)产生的电势为，
$$
\phi = \frac{1}{4\pi\epsilon_{0}} \frac{\vec{r} \cdot \vec{p}}{r^{3}} + \text{常数}
$$

证明：

上次作业中已经得到偶极子的电荷密度可以写作 $\rho = -(\vec{p} \cdot \nabla)\delta(\vec{r})$

所以直接作电势积分：
$$
\begin{gathered}
\phi = \int \frac{1}{4 \pi \epsilon_{0}} \frac{\rho}{|\vec{r} - \vec{r'}|} d \tau' = \int \frac{1}{4 \pi \epsilon_{0}} \frac{-(\vec{p} \cdot \nabla')\delta(\vec{r'})}{|\vec{r} - \vec{r'}|} d \tau' \\ = \int \frac{1}{4 \pi \epsilon_{0}} (- \nabla' \cdot (\frac{\vec{p} \delta(\vec{r'})}{|\vec{r} - \vec{r'}|}) + \nabla' \cdot \frac{\vec{p}}{|\vec{r} - \vec{r'}|} \delta(\vec{r'})) d \tau' = 0 + \int \frac{1}{4 \pi \epsilon_{0}} \frac{(\vec{r} - \vec{r'}) \cdot \vec{p}}{|\vec{r} - \vec{r'}|^{3}} \delta(\vec{r'}) d \tau' \\ = \frac{1}{4\pi\epsilon_{0}} \frac{\vec{r} \cdot \vec{p}}{r^{3}} + C
\end{gathered}
$$

(b) 求证磁偶极子(电流圈面积 $S \rightarrow 0$，电流 $J \rightarrow \infty$，$JS$ 固定)产生的矢量势为，
$$
\vec{A} = \frac{\mu_{0}}{4\pi} \frac{\vec{m} \times \vec{r}}{r^{3}} + \text{常数}
$$

证明：

与电偶极子类似，磁偶极子的电流密度可以表示为$\vec{j} = - \vec{m} \times \nabla \delta(\vec{r})$

我们先证明这个表达式：
$$
\vec{\mu} = \frac{1}{2} \int \vec{r} \times \left( -\vec{m} \times \nabla \delta(\vec{r}) \right) d\tau
$$

$$
\vec{r} \times (\vec{m} \times \nabla \delta) = \vec{m} (\vec{r} \cdot \nabla \delta) - (\vec{r} \cdot \vec{m}) \nabla \delta
$$

$$
\vec{m} = -\frac{1}{2} \int \left[ \vec{m} (\vec{r} \cdot \nabla \delta) - (\vec{r} \cdot \vec{m}) \nabla \delta \right] d\tau
$$

$$
\int \vec{r} \cdot \nabla \delta \, d\tau = - \int \delta (\nabla \cdot \vec{r}) d \tau = -3
$$

$$
\int (\vec{r} \cdot \vec{m}) \nabla \delta d \tau = - \int \delta \nabla (\vec{r} \cdot \vec{m}) d \tau = - \vec{m}
$$

$$
\therefore \,\, \vec{\mu} = \frac{1}{2} \int \vec{r} \times \left( - \vec{m} \times \nabla \delta(\vec{r}) \right) d\tau = - \frac{1}{2} (-3 \vec{m} + \vec{m}) = \vec{m}
$$

然后用和（a）类似的方法，直接积分：
$$
\begin{gathered}
\vec{A} = \int \frac{\mu_{0}}{4 \pi} \frac{\vec{j}}{|\vec{r} - \vec{r'}|} d \tau' = - \int \frac{\mu_{0}}{4 \pi} \frac{\vec{m} \times \nabla' \delta(\vec{r'})}{|\vec{r} - \vec{r'}|}d \tau' \\ = - \int \frac{\mu_{0}}{4 \pi} \left( - \nabla' \times (\delta(\vec{r'}) \frac{\vec{m}}{|\vec{r} - \vec{r'}|}) + \delta(\vec{r'}) \nabla' \times \frac{\vec{m}}{|\vec{r} - \vec{r'}|} \right) d \tau' \\ = - \int \frac{\mu_{0}}{4 \pi} \delta(\vec{r'}) \nabla' \frac{1}{|\vec{r} - \vec{r'}|} \times \vec{m} d \tau' = - \int \frac{\mu_{0}}{4 \pi} \delta(\vec{r'}) \frac{\vec{r} - \vec{r'}}{|\vec{r} -\vec{r'}|^{3}} \times \vec{m} d \tau' = \frac{\mu_{0}}{4\pi} \frac{\vec{m} \times \vec{r}}{r^{3}} + C
\end{gathered}
$$

(c) 假定实验上发现库伦定律对平方反比有一微小的指数偏离 $\delta$，$\vec{f}_{21} = k_{1} \frac{q_{1} q_{2}}{R^{3}} \vec{R} e^{-\delta \frac{R}{R_{0}}}$

i. 求证，关系 $\vec{E} = -\nabla \phi$ 仍成立，并请对给定的电荷密度分布，给出 $\phi$ 的计算公式。

证明：证明$\nabla \times \vec{E} = 0$ 即可。由于电场可以看作所有源点产生电场的线性叠加，所以验证由点电荷产生的电场无旋即可。

注意到 $\vec{f}_{21} = k_{1} \frac{q_{1} q_{2}}{R^{3}} \vec{R} e^{-\delta \frac{R}{R_{0}}} = k_{1} q_{1} q_{2} f(R) \vec{R}$
$$
\nabla \times \vec{E} = k_{1} q \nabla \times f(R) \vec{R} = k_{1} q ((\nabla f(R) \times \vec{R}) + f(R) \nabla \times \vec{R}) = k_{1} q (f'(R) \hat{R} \times \vec{R} + 0) = 0
$$
所以该电场无旋，可以用势函数表示。

ii. 问：这时高斯定理 $\oint \vec{E} \cdot d\vec{S} = Q/\epsilon_{0}$ 是否还成立？

此时：
$$
\vec{E} = \int k_{1} \rho(\vec{r'}) \frac{\vec{R}}{R^{3}} e^{- \delta \frac{R}{R_{0}}} d \tau'
$$

$$
\oint \vec{E} \cdot d\vec{S} = \int d \tau \nabla \cdot \int k_{1} \rho(\vec{r'}) \frac{\vec{R}}{R^{3}} e^{- \delta \frac{R}{R_{0}}} d \tau' \neq \int d \tau \int d \tau' k_{1} 4 \pi \delta (\vec{R}) \rho (\vec{r'}) = \frac{1}{\epsilon_{0}} \int \rho d \tau
$$

由于此时的 $f(R) \vec{R}$ 无法写成 $- \nabla \frac{1}{R}$ 的形式，所以后续的计算中无法得出 $\delta (\vec{R})$，高斯定理不再严格成立。

(d) 假定实验上发现比萨定律对平方反比有一微小的指数偏离 $\delta$，$d^{2} \vec{F}_{21} = k_{2} J_{2} d\vec{l}_{2} \times \left(\frac{J_{1} d\vec{l}_{1} \times \vec{R}}{R^{3}}\right) e^{-\delta \frac{R}{R_{0}}}$

i. 求证，关系 $\vec{B} = \nabla \times \vec{A}$ 仍成立，并请对给定的电流密度分布，给出 $\vec{A}$ 的计算公式。

同理，验证单一电流源产生的磁场无源即可。
$$
\nabla \cdot (k_{2} J_{1} d \vec{l}_{1} \times \frac{\vec{R}}{R^{3}} e^{- \delta \frac{R}{R_{0}}}) =
 f(R) \vec{R} \cdot (\nabla \times k_{2} J_{1} d \vec{l}_{1}) - k_{2} J_{1} d \vec{l}_{1} \cdot (\nabla \times f(R) \vec{R}) = 0 - 0 = 0
$$
ii. 问：这时安培环路定理 $\oint \vec{B} \cdot d\vec{l} = \mu_{0} J$ 是否还成立？

不成立。因为此时：
$$
\begin{gathered}
\oint \vec{B} \cdot d\vec{l} = \int d \vec{S} \cdot \nabla \times \int k_{2} \vec{j} \times \frac{\vec{R}}{R^{3}} e^{- \frac{\delta R}{R_{0}}} d \tau' \neq - \int d \vec{S} \cdot \nabla \times \int k_{2} \vec{j} \times \nabla \frac{1}{R} d \tau' \\ = \int d \vec{S} \cdot \int d \tau' k_{2} 4 \pi \vec{j} (\vec{r'}) \delta(\vec{r} - \vec{r'}) = \mu_{0} J
\end{gathered}
$$
思考题：

i. 叠加原理对麦克斯韦方程组起什么影响？

叠加原理导致了麦克斯韦方程组的线性性：已经证明库伦势即电场强度的可以叠加，所以自然地推出麦克斯韦方程组中的电磁场是可以线性叠加的。再结合散度、旋度以及对时间的偏导数都是线性算子， 可以得到麦克斯韦方程组是良好的线性方程组。

ii. 积分形式与微分形式的麦克斯韦方程组，哪个更普遍，为什么？

微分。我认为微分形式的麦克斯韦方程组应用场景更广泛，因为对于不好定义边界和积分路径的复杂拓扑结构来说，只要确定了度量以及边界条件，在其上的微分方程任然是可以求解的。

### 4. 介质中电磁相互作用的场方程

1.7 有一内外半径分别为 $r_{1}$ 和 $r_{2}$ 的空心介质球，介质的电容率为 $\varepsilon$。使介质内均匀带静止自由电荷密度 $\rho_{f}$，求

(1) 空间各点的电场；

电位移矢量：
$$
\vec{D} = \begin{cases} 0 & (r < r_{1}) \\ \rho_{f} \frac{r^{3} - r_{1}^{3}}{3 r^{2}} \hat{r} & (r_{1} < r < r_{2}) \\ \rho_{f} \frac{r_{2}^{3} - r_{1}^{3}}{3 r^{2}} \hat{r} & (r > r_{2}) \end{cases}
$$
电场：
$$
\vec{E} = \begin{cases} 0 & (r < r_{1}) \\ \rho_{f} \frac{r^{3} - r_{1}^{3}}{3 \epsilon r^{2}} \hat{r} & (r_{1} < r < r_{2}) \\ \rho_{f} \frac{r_{2}^{3} - r_{1}^{3}}{3 \epsilon_{0} r^{2}} \hat{r} & (r > r_{2}) \end{cases}
$$

(2) 极化体电荷和极化面电荷分布。
$$
\vec{P} = \vec{D} - \epsilon_{0} \vec{E} = \begin{cases} 0 & (r < r_{1}) \\ \rho_{f} \frac{r^{3} - r_{1}^{3}}{3 r^{2}} (1 - \frac{\epsilon_{0}}{\epsilon}) \hat{r} & (r_{1} < r < r_{2}) \\ 0 & (r > r_{2}) \end{cases}
$$
极化体电荷：
$$
\rho' = - \nabla \cdot \vec{P} = \begin{cases} 0 & (r < r_{1}) \\ - \rho_{f} (1 - \frac{\epsilon_{0}}{\epsilon}) & (r_{1} < r < r_{2}) \\ 0 & (r > r_{2}) \end{cases}
$$
极化面电荷：

$r = r_{1}$表面：
$$
\sigma' = - \hat{n} \cdot (\vec{P}_{2} - \vec{P}_{1}) = 0
$$
$r = r_{2}$表面：
$$
\sigma' = - \hat{n} \cdot (\vec{P}_{2} - \vec{P}_{1}) = - (0 - \rho_{f} (1 - \frac{\epsilon_{0}}{\epsilon}) \frac{r_{2}^{3} - r_{1}^{3}}{3 r_{2}^{2}}) = \rho_{f} (1 - \frac{\epsilon_{0}}{\epsilon}) \frac{r_{2}^{3} - r_{1}^{3}}{3 r_{2}^{2}}
$$

1.9  证明均匀介质内部的极化电荷体密度 $\rho_{P}$ 总是等于自由电荷体密度 $\rho_{f}$ 的 $-\left(1 - \frac{\varepsilon_{0}}{\varepsilon}\right)$ 倍。

证明：
$$
\rho_{P} = - \nabla \cdot \vec{P} = - \nabla \cdot (\vec{D} - \epsilon_{0} \vec{E}) = - \nabla \cdot (\vec{D} - \epsilon_{0} \frac{\vec{D}}{\epsilon}) = -\left(1 - \frac{\varepsilon_{0}}{\varepsilon}\right) \nabla \cdot \vec{D} = -\left(1 - \frac{\varepsilon_{0}}{\varepsilon}\right) \rho_{f}
$$
思考题:介质中的麦克斯韦方程组中哪些方程依赖于物质的具体电磁性质,哪些不依赖, 为什么?

我认为只有本构关系是依赖于物质具体电磁性质的，电场和磁场的四个方程均和具体是什么物质没有关系，因为它们从真空的麦克斯韦方程组转化过来只用到了一个将极化产生的偶极矩平均后定义极化强度。但是电场和极化强度、磁场和磁化强度之间的关系是依赖于具体物质的。

### 5. 电磁场的边值关系

1.12  证明

(1)当两种绝缘介质的分界面上不带面自由电荷时，电场线的曲折满足

$$
\frac{\tan \theta_{2}}{\tan \theta_{1}} = \frac{\varepsilon_{2}}{\varepsilon_{1}}
$$

其中 $\varepsilon_{1}$ 和 $\varepsilon_{2}$ 分别为两种介质的介电常数，$\theta_{1}$ 和 $\theta_{2}$ 分别为界面两侧电场线与法线的夹角。

证明：利用边值关系证明。

由电场强度切向连续：$E_{1 \tau} = E_{2 \tau}$ 和电位移矢量法向连续：$D_{1n} = D_{2n}$
$$
\therefore \,\, \frac{E_{1 \tau}}{\epsilon_{1} E_{1 n}} = \frac{E_{2 \tau}}{\epsilon_{2} E_{2 n}}
$$
考虑到 $\tan \theta_{1} = \frac{E_{1 \tau}}{E_{1 n}}$ 和 $\tan \theta_{2} = \frac{E_{2 \tau}}{E_{2 n}}$
$$
\therefore \,\, \frac{\tan \theta_{2}}{\tan \theta_{1}} = \frac{\varepsilon_{2}}{\varepsilon_{1}}
$$
(2) 当两种导电介质内流有恒定电流时，分界面上电场线的曲折满足
$$
\frac{\tan \theta_{2}}{\tan \theta_{1}} = \frac{\sigma_{2}}{\sigma_{1}}
$$

其中 $\sigma_{1}$ 和 $\sigma_{2}$ 分别为两种介质的电导率。

同理，利用电场的边值关系：

由电场强度切向连续：$E_{1 \tau} = E_{2 \tau}$ ，由法向电流密度连续（这是界面不出现电荷积累的必要条件）：$\sigma_{1} E_{1 n} = \sigma_{2} E_{2 n}$
$$
\therefore \,\, \frac{\tan \theta_{2}}{\tan \theta_{1}} = \frac{\frac{E_{1 \tau}}{E_{1 n}}}{\frac{E_{2 \tau}}{E_{2 n}}} = \frac{\sigma_{2}}{\sigma_{1}}
$$
思考题：能否说明或最好证明ϵ → ∞的电介质表面为等势面。

证明：利用 1.12 (1) 问的结论，当介电常数趋向于无穷大时，介质外表面附近电场线垂直于表面，所以是等势面。

一个更加数学的证明：

由于电介质内部自由电荷有限，所以$\mathbf{D}$ 有界，所以介质内部 $\mathbf{E} \to 0$。所以表面附近$E_{\tau} \to 0$，即$\frac{\partial \phi}{\partial n} \to 0$，故是等势面。

### 6. 电磁相互作用能量动量的转化与守恒

1.14 内外半径分别为 $a$ 和 $b$ 的无限长圆柱形电容器，单位长度电荷为 $\lambda_{f}$，板间填充电导率为 $\sigma$ 的非磁性物质。

(1)证明在介质中任何一点传导电流与位移电流严格抵消，因此内部无磁场。

证明：

设介质中电场强度 $\vec{E}(\vec{r})$ ：

则传导电流为 $\vec{j} = \sigma \vec{E}(\vec{r})$，假设该介质的介电常数为$\epsilon$。
$$
\vec{E}(\vec{r}) = \frac{\lambda_{f}}{2 \pi \epsilon r} \hat{r} \qquad (a < r < b)
$$

$$
\frac{\mathrm{d} \lambda_{f}}{\mathrm{d} t} = - \sigma \vec{E}(\vec{r}) 2 \pi r = - \frac{\sigma \lambda_{f}}{\epsilon}
$$

$$
\therefore \,\, \vec{j} + \epsilon \frac{\partial \vec{E}}{\partial t} = \sigma \vec{E} + \epsilon (- \frac{\sigma \vec{E}}{\epsilon}) = 0
$$

(2) 求 $\lambda_{f}$ 随时间的衰减规律。
$$
\because \,\, \frac{\mathrm{d} \lambda_{f}}{\mathrm{d} t} = - \frac{\sigma \lambda_{f}}{\epsilon}
$$

$$
\therefore \,\, \lambda_{f} (t) = \lambda_{f0} e^{- \frac{\sigma t}{\epsilon}}
$$

(3) 求与轴相距为 $r$ 的地方的能量耗散功率密度。
$$
\sigma j^{2} = \sigma (\frac{\lambda_{f}}{2 \pi \epsilon r})^{2}
$$

(4) 求长度为 $l$ 的一段介质总的能量耗散功率，并证明它等于这段的静电能减少率。
$$
W = - l \int_{a}^{b} \sigma (\frac{\lambda_{f}}{2 \pi \epsilon r})^{2} 2 \pi r dr = - \frac{l \sigma \lambda_{f}^{2}}{2 \pi \epsilon^{2}} \ln \frac{b}{a}
$$
证明：静电能减少率：
$$
\frac{\mathrm{d}}{\mathrm{d} t} l \int_{a}^{b} \frac{1}{2} \epsilon E^{2} 2 \pi r dr = \frac{\mathrm{d}}{\mathrm{d} t} l \int_{a}^{b} \frac{\epsilon}{2} (\frac{\lambda_{f}}{2 \pi \epsilon r})^{2} 2 \pi r dr = \frac{\mathrm{d}}{\mathrm{d} t} \frac{l \lambda_{f}^{2}}{4 \pi \epsilon} \ln \frac{b}{a} = - \frac{\sigma \lambda_{f}}{\epsilon} \frac{l \lambda_{f}}{2 \pi \epsilon} \ln \frac{b}{a} =  - \frac{l \sigma \lambda_{f}^{2}}{2 \pi \epsilon^{2}} \ln \frac{b}{a}
$$

思考题: 试用张量力说明电力线和磁力线前后受拉力,相互之间有斥力。

可用MOOC上提到的橡皮筋模型来分析：假设几根相邻的电（磁）力线构成一根流管，利用Maxwell应力张量的表达式可以导出由单一电（磁）部分对一个表面产生的力的方向和面法线的夹角是电（磁）场强度和面法线夹角的两倍。

考虑流管的前表面，此时电（磁）场强度和面法向同向，所以受力沿面法向方向。

考虑流管的后表面，此时电（磁）场强度和面法向反向，所以受力和面法向反向夹角为$\pi \times 2  = 2 \pi$ 即也和面法向同向。所以“前后受拉力”。

考虑流管的侧面，此时相邻电（磁）力线产生的电（磁）场和流管侧面法向量夹角为90度，所以应力方向和法向夹角为180度，即起到排斥的效果。

研究问题：

1. 能否通过修改麦克斯韦方程组，使能流密度 $\vec{S}$ 有沿 $E$ 或 $B$ 方向的分量？

   对非各向同性线性介质而言，本身能流密度可能存在磁感应强度方向分量，比如双轴晶体。不知道“修改麦克斯韦方程组”具体代表什么，如果不改变电磁作用的基本规律似乎无法使能流密度具有电场强度分量。

2. 考虑有介质的情况，动量的转化与守恒定律（动量密度，动量流密度）应如何写？

对线性极化介质而言： 
$$
\mathbf{f} = (\nabla \cdot \mathbf{D}) \mathbf{E} + (\nabla \times \mathbf{H}) \times \mathbf{B} - \frac{\partial \mathbf{D}}{\partial t} \times \mathbf{B} = \nabla \cdot \mathbf{T} - \frac{\partial \mathbf{g}}{\partial t}
$$

$$
(\nabla \cdot \mathbf{D}) \mathbf{E} = \nabla \cdot (\mathbf{D} \mathbf{E}) - (\mathbf{D} \cdot \nabla) \mathbf{E}
$$

 展开叉积项： 
$$
(\nabla \times \mathbf{H}) \times \mathbf{B} = \mathbf{B} \cdot (\nabla \mathbf{H}) - \nabla (\mathbf{H} \cdot \mathbf{B}) + (\mathbf{H} \cdot \nabla) \mathbf{B}
$$

$$
\frac{\partial \mathbf{g}}{\partial t} = \frac{\partial}{\partial t} (\mathbf{D} \times \mathbf{B}) = \frac{\partial \mathbf{D}}{\partial t} \times \mathbf{B} + \mathbf{D} \times \frac{\partial \mathbf{B}}{\partial t}
$$

$$
\therefore \,\, -\frac{\partial \mathbf{D}}{\partial t} \times \mathbf{B} = -\frac{\partial \mathbf{g}}{\partial t} + \mathbf{D} \times (\nabla \times \mathbf{E})
$$

$$
\therefore \,\, \mathbf{T} = \mathbf{D}\mathbf{E} + \mathbf{B} \mathbf{H} - \frac{1}{2} \mathbf{I} (\mathbf{D} \cdot \mathbf{E} + \mathbf{B} \cdot \mathbf{H})
$$

对一般介质我不会推导。

## 第3次作业

### 1. 相对论基本原理，洛伦兹变换

(a) 试证，四维速度 $U^{i}, U^{4}$ 与 $x^{i}, ict$ 具有相同变换关系.

证明：

$x^{\mu} x_{\mu} = s^{2}$ 为洛伦兹标量，$U^{\mu} U_{\mu} = \gamma^{2} (v^{2} - c^{2}) = -c^{2}$ 同为洛伦兹标量，所以二者协变。

(b) 试计算 $\sqrt{1 - \frac{v^{2}}{c^{2}}}$ 的变换.

从（a）问的结果可以得到，$\sqrt{1 - \frac{v^{2}}{c^{2}}} \mathrm{d} t$ 为洛伦兹标量。所以 $\frac{\sqrt{1 - \frac{v'^{2}}{c^{2}}}}{\sqrt{1 - \frac{v^{2}}{c^{2}}}} = \frac{\mathrm{d} t}{\mathrm{d} t'} = \frac{1}{\gamma_{r}(1 - \frac{\beta_{r}}{c} v_{x})}$ 其中r角标代表两个坐标系之间的相对速度。

(c) 一列“火车”静止在站台旁时，其长度与站台一样 $l = 8.64 \times 10^{8}$ 公里，现在此“火车”以 $\frac{4}{5}c$ 的速度自左向右通过站台，火车头尾 $A'$ 和 $B'$ 各有一只时钟。当火车头与站台左端 $A$ 相遇时，火车头和站台左端的时钟都指在零点（12点），问：

i. 这时火车尾 $B'$ 和站台右端 $B$ 的时钟是几点？

记 $\beta = \frac{v}{c} = \frac{4}{5}$， $\gamma = \frac{1}{\sqrt{1 - \beta^{2}}} = \frac{5}{3}$

地面系：$t_{B} = 12:00$    $t_{B'} = t_{A'} - \gamma \frac{\beta}{c} (-\frac{3}{5} l) = 12:38:24$

火车系：$t_{B'} = 12:00$    $t_{B} =  t_{A'} + \gamma \frac{\beta}{c} \frac{3}{5} l = 12:38:24$

ii. 当火车继续运行到火车头 $A'$ 与站台右端 $B$相重时，火车头尾和站台左右端的时钟各是几点？

注：以下计算均以$12:00$ 为时间零点，但是给出的最后数值结果均已加上 $12:00$。

在地面系中：$t_{A} = t_{B} = 13:00$    $t_{A'} = \gamma (t_{B} - \frac{\beta}{c} l) = 12:36$   $t_{B'} = \gamma (t_{B} - \frac{\beta}{c} \cdot 0.4 l) = 13:14:24$

在火车系中：$t_{A'} = t_{B'} = 12:36$    $t_{B} = 13:00$   $t_{A} = 12:00 + \frac{3}{5} \times 00:36 = 12:21:36$ 

### 2. 相对论的时空理论

(a) 书6.2，6.3，6.4，6.5

6.2 长度收缩问题

设有两根互相平行的尺，在各自静止的参考系中的长度均为 $l_{0}$，它们以相同速率 $v$ 相对于某一参考系运动，但运动方向相反，且平行于尺子。求站在一根尺上测量另一根尺的长度。

两尺的相对速度为$v_{r} = \frac{v + v}{1 + \frac{v^{2}}{c^{2}}}$

所以在一根尺子系中测量另一根尺子长度为：
$$
l = l_{0} \sqrt{1 - \frac{v_{r}^{2}}{c^{2}}} = l_{0} \frac{1 - \frac{v^{2}}{c^{2}}}{1 + \frac{v^{2}}{c^{2}}}
$$
6.3 小球运动时间问题

静止长度为 $l_{0}$ 的车厢，以速度 $v$ 相对于地面运行，车厢的后壁以速度 $u_{0}$ 向前推出一个小球，求地面观察者看到小球从后壁到前壁的运动时间。

在地面系中求解该问题：

此时车厢长度为$l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}$ ，小球速度为 $\frac{u_{0} + v}{1 + \frac{u_{0} v}{c^{2}}}$ 。

所以运动时间为：
$$
\Delta t = \frac{l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}}{\frac{u_{0} + v}{1 + \frac{u_{0} v}{c^{2}}} - v} = \frac{l_{0} \left(1 + \frac{u_{0} v}{c^{2}}\right)}{u_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}}
$$
6.4 光电照亮铁塔时刻差问题

一辆以速度 $v$ 运动的列车上的观察者，在经过某一高大建筑物时，看见其避雷针上跳起一脉冲电火花，电光迅速传播，先后照亮了铁路沿线上的两铁塔。求列车上观察者看到的两铁塔被电光照亮的时刻差。设建筑物及两铁塔都在一直线上，与列车前进方向一致。铁塔到建筑物的地面距离已知都是 $l_{0}$。

在列车系中考虑该问题，此时距离收缩为 $l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}$

在列车系中，两方向的时间分别为 $\frac{l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}}{c + v}$ 、$\frac{l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}}{c - v}$

所以时间差为$\Delta t = \frac{2 v l_{0}}{c^{2} \sqrt{1 - \frac{v^{2}}{c^{2}}}}$。

6.5 光信号传播时间问题

有一光源 S 与接收器 R 相对静止，距离为 $l_{0}$，S-R 装置浸在均匀无限的液体介质（静止折射率 $n$）中。试对下列三种情况计算光源发出讯号到接收器接到讯号所经历的时间。

（1）液体介质相对于 S-R 装置静止；
$$
\Delta t = \frac{n l_{0}}{c}
$$
（2）液体沿着 S-R 连线方向以速度 $v$ 流动；

根据速度合成： $c_{\text{地}} = \frac{\frac{c}{n} + v}{1 + \frac{v}{nc}}$
$$
\therefore \,\, \Delta t = \frac{l_{0} (1 + \frac{v}{nc})}{\frac{c}{n} + v}
$$
（3）液体垂直于 S-R 连线方向以速度 $v$ 流动。

在液体系中考虑该问题：

在液体系中，为了保证光线会由一点射向另一点，其垂直于液体流动方向的速度为 $\sqrt{\left(\frac{c}{n}\right)^{2} - v^{2}}$

所以在液体系中，传播时间为 $\frac{l_{0}}{\sqrt{\left(\frac{c}{n}\right)^{2} - v^{2}}}$

在地面系中，逆用时间膨胀公式，传播时间为 $\Delta t = \frac{l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}}{\sqrt{\left(\frac{c}{n}\right)^{2} - v^{2}}}$

(b) 求证：若两事件间的间隔是类空间隔，则

i. 两事件之间无法建立联系.

证明：

两事件之间的间隔 $s^{2} = (x_{2} - x_{1})^{2} - (ct_{2} - ct_{1})^{2} >0$为类空间隔，这意味着空间距离超过光在该时间间隔内能传播的距离，因此任何物质粒子或电磁波都无法在两事件之间传播，从而无法建立因果联系。

ii. 事件之间的时间次序不确定，存在一个参考系，在其中两事件同时发生.

证明：

考虑两事件在惯性系 S 中的坐标为 $(x_{1}, t_{1})$ 和 $(x_{2}, t_{2})$，类空间隔满足 $(x_{2} - x_{1})^{2} > (ct_{2} - ct_{1})^{2}$。通过洛伦兹变换到另一惯性系 S'，变换关系为：
$$
x' = \gamma (x - vt)
$$

$$
t' = \gamma \left( t - \frac{vx}{c^{2}} \right)
$$

其中 $\gamma = \frac{1}{\sqrt{1 - \frac{v^{2}}{c^{2}}}}$

两事件在 S' 系中的时间差为：
$$
\Delta t' = \gamma \left( \Delta t - \frac{v \Delta x}{c^{2}} \right)
$$
要使 $\Delta t' = 0$，需满足：
$$
\Delta t = \frac{v \Delta x}{c^{2}}
$$
由于 $\Delta x$ 和 $\Delta t$ 满足类空间隔条件，总能找到合适的 v 使得上式成立，即存在一个参考系 S'，在其中两事件同时发生。同时，由于类空间隔下不同参考系中时间次序可能改变，因此时间次序不确定。

iii. 事件之间的空间次序不会颠倒，不存在一个参考系，在其中两事件在同一地点发生.

证明：

对于空间次序，考虑两事件在 S 系中的空间顺序为 $x_{1} < x_{2}$。在 S' 系中，空间坐标差为：
$$
\Delta x' = \gamma (\Delta x - v \Delta t)
$$
若存在参考系使 $\Delta x' = 0$，则需：
$$
\Delta x = v \Delta t
$$
代入类空间隔条件 $\Delta x^{2} > (c \Delta t)^{2}$，得：
$$
v^{2} \Delta t^{2} > c^{2} \Delta t^{2} \implies v^{2} > c^{2}
$$
这与 v 的物理意义（小于光速）矛盾，因此不存在这样的参考系。同时，由于 $\Delta x'$ 的符号由 $\Delta x - v \Delta t$ 决定，而类空间隔下无法使 $\Delta x'$ 改变符号，因此空间次序不会颠倒。

(c) 考虑三个事件，若已知第一个事件和第二个事件之间的间隔及第二个事件和第三个事件之间的间隔类型，能否知道第一个事件和第三个事件之间的间隔类型？请证明。

不能，构造反例如下：

考虑三个事件 A、B、C，A 和 B 为类空间隔，B 和 C 也为类空间隔，但 A 和 C 可能是类时间隔、类空间隔或类光间隔，具体取决于它们的坐标关系，以下讨论采取自然单位制。

设 A 在原点 $(0, 0)$，B 在 $(2, 1)$，C 在 $(4, 0)$。A 和 B 的间隔 $s_{AB}^{2} = 4 - 1 = 3 > 0$（类空），B 和 C 的间隔 $s_{BC}^{2} = 4 - 1 = 3 > 0$（类空），A 和 C 的间隔 $s_{AC}^{2} = 16 - 0 = 16 > 0$（类空）。

改变坐标，C 改为 $(-1, -1)$，则 A 和 B 类空，B 和 C 间隔 $s_{BC}^{2} = 9 - 4 = 5 > 0$（类空），但 A 和 C 的间隔 $s_{AC}^{2} = 9 - 9 = 0$（类光）。

再改变坐标，C 改为 $(-1, 3)$，则 A 和 B 类空，B 和 C间隔 $s_{BC}^{2} = 9 - 4 = 5 > 0$（类空），但 A 和 C 的间隔 $s_{AC}^{2} = 1 - 9 = -8 < 0$（类时）。

因此，仅知道两对间隔类型，无法确定第三对的间隔类型。

### 3. 相对论理论的协变形式

(a)书6.11

6.11 在洛伦兹变换中，若定义快度 $y$ 为 $\tanh y=\beta$.

(1) 证明洛伦兹变换矩阵可写为
$$
a_{\mu\nu}=\begin{pmatrix}
\text{ch} y & 0 & 0 & i \text{sh} y \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
- i \text{sh} y & 0 & 0 & \text{ch} y
\end{pmatrix}
$$

证明：利用双曲函数的关系：$\cosh y = \frac{1}{\sqrt{1 - \tanh^{2} y}} = \frac{1}{\sqrt{1 - \beta^{2}}}$ ，$\sinh y = \sqrt{\cosh^{2} y - 1} = \frac{\beta}{\sqrt{1 - \beta^{2}}}$
$$
a_{\mu\nu}=\begin{pmatrix}
\text{ch} y & 0 & 0 & i \text{sh} y \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
- i \text{sh} y & 0 & 0 & \text{ch} y
\end{pmatrix}
=\begin{pmatrix}
\frac{1}{\sqrt{1 - \beta^{2}}} & 0 & 0 & i \frac{\beta}{\sqrt{1 - \beta^{2}}} \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
- i \frac{\beta}{\sqrt{1 - \beta^{2}}} & 0 & 0 & \frac{1}{\sqrt{1 - \beta^{2}}}
\end{pmatrix}
$$
就是洛伦兹变换矩阵的形式。

(2) 对应的速度合成公式
$$
\beta=\frac{\beta^{\prime}+\beta^{\prime\prime}}{1+\beta^{\prime}\beta^{\prime\prime}}
$$

可用快度表为 $y=y^{\prime}+y^{\prime\prime}$.

证明：改写为用快度表示的速度合成公式：
$$
\tanh y = \frac{\tanh y' + \tanh y''}{1 + \tanh y' \tanh y''} = \tanh (y' + y'')
$$
由于 $\tanh y$ 为关于 $y$ 的严格单调函数，所以上式等价于 $y=y^{\prime}+y^{\prime\prime}$。

(b) 试证，$n$ 阶张量收缩一次变成 $n - 2$ 阶张量.

证明：假设$n$ 阶张量 $T^{i_{1} i_{2} \cdots i_{p}}_{j_{1} j_{2} \cdots j_{q}}$，有 $p$ 个逆变指标和 $q$ 个协变指标。在坐标变换下，其分量变换为：
$$
T'^{i_{1}' i_{2}' \cdots i_{p}'}_{j_{1}' j_{2}' \cdots j_{q}'} = \frac{\partial x^{i_{1}'}}{\partial x^{i_{1}}} \frac{\partial x^{i_{2}'}}{\partial x^{i_{2}}} \cdots \frac{\partial x^{i_{p}'}}{\partial x^{i_{p}}} \frac{\partial x^{j_{1}}}{\partial x^{j_{1}'}} \frac{\partial x^{j_{2}}}{\partial x^{j_{2}'}} \cdots \frac{\partial x^{j_{q}}}{\partial x^{j_{q}'}} T^{i_{1} i_{2} \cdots i_{p}}_{j_{1} j_{2} \cdots j_{q}}
$$
考虑对其一组上下标进行缩并：
$$
T^{i_{1} i_{2} \cdots i_{k-1} i_{k+1} \cdots i_{p}}_{j_{1} j_{2} \cdots j_{l-1} j_{l+1} \cdots j_{q}} = \sum_{m} T^{i_{1} i_{2} \cdots i_{k-1} m i_{k+1} \cdots i_{p}}_{j_{1} j_{2} \cdots j_{l-1} m j_{l+1} \cdots j_{q}}
$$

 考虑缩并后的张量 $S^{i_{1} i_{2} \cdots i_{k-1} i_{k+1} \cdots i_{p}}_{j_{1} j_{2} \cdots j_{l-1} j_{l+1} \cdots j_{q}}$，其分量为：
$$
S^{i_{1} i_{2} \cdots i_{k-1} i_{k+1} \cdots i_{p}}_{j_{1} j_{2} \cdots j_{l-1} j_{l+1} \cdots j_{q}} = \sum_{m} T^{i_{1} i_{2} \cdots i_{k-1} m i_{k+1} \cdots i_{p}}_{j_{1} j_{2} \cdots j_{l-1} m j_{l+1} \cdots j_{q}}
$$
在坐标变换下，缩并后的张量的分量变换为：
$$
S'^{i_{1}' i_{2}' \cdots i_{k-1}' i_{k+1}' \cdots i_{p}'}_{j_{1}' j_{2}' \cdots j_{l-1}' j_{l+1}' \cdots j_{q}'} = \sum_{m'} \frac{\partial x^{i_{1}'}}{\partial x^{i_{1}}} \cdots \frac{\partial x^{i_{k-1}'}}{\partial x^{i_{k-1}}} \frac{\partial x^{i_{k+1}'}}{\partial x^{i_{k+1}}} \cdots \frac{\partial x^{i_{p}'}}{\partial x^{i_{p}}} \frac{\partial x^{j_{1}}}{\partial x^{j_{1}'}} \cdots \frac{\partial x^{j_{l-1}}}{\partial x^{j_{l-1}'}} \frac{\partial x^{j_{l+1}}}{\partial x^{j_{l+1}'}} \cdots \frac{\partial x^{j_{q}}}{\partial x^{j_{q}'}} T^{i_{1} i_{2} \cdots i_{k-1} m i_{k+1} \cdots i_{p}}_{j_{1} j_{2} \cdots j_{l-1} m j_{l+1} \cdots j_{q}}
$$
由于求和指标 $m$ 在变换前后保持一致，可以将求和与变换操作交换顺序，得到：
$$
S'^{i_{1}' i_{2}' \cdots i_{k-1}' i_{k+1}' \cdots i_{p}'}_{j_{1}' j_{2}' \cdots j_{l-1}' j_{l+1}' \cdots j_{q}'} = \frac{\partial x^{i_{1}'}}{\partial x^{i_{1}}} \cdots \frac{\partial x^{i_{k-1}'}}{\partial x^{i_{k-1}}} \frac{\partial x^{i_{k+1}'}}{\partial x^{i_{k+1}}} \cdots \frac{\partial x^{i_{p}'}}{\partial x^{i_{p}}} \frac{\partial x^{j_{1}}}{\partial x^{j_{1}'}} \cdots \frac{\partial x^{j_{l-1}}}{\partial x^{j_{l-1}'}} \frac{\partial x^{j_{l+1}}}{\partial x^{j_{l+1}'}} \cdots \frac{\partial x^{j_{q}}}{\partial x^{j_{q}'}} S^{i_{1} i_{2} \cdots i_{k-1} i_{k+1} \cdots i_{p}}_{j_{1} j_{2} \cdots j_{l-1} j_{l+1} \cdots j_{q}}
$$
这表明缩并后的张量 $S$ 仍然满足张量的变换规律，但其阶数为 $(p - 1) + (q - 1) = n - 2$。

## 第4次作业

(a) 书6.17，6.19，6.25，6.27

6.17 质量为 $m$ 的静止粒子衰变为两个粒子 $m_{1}$ 和 $m_{2}$, 求粒子 $m_{1}$ 的动量和能量.

设 $m_{1}$ 和 $m_{2}$的动量分别为 $p_{1}$ 和 $p_{2}$ ，列出能动量守恒方程；
$$
p_{1} = p_{2}
$$

$$
\sqrt{m_{1}^{2} c^{4} + p_{1}^{2} c^{2}} + \sqrt{m_{2} c^{4} + p_{2}^{2} c^{2}} = m c^{2}
$$

解得：
$$
p_{1} = \frac{c}{2m} \sqrt{[m^{2} - (m_{1} + m_{2})^{2}][m^{2} - (m_{1} - m_{2})^{2}]}
$$

$$
E_{1} = \sqrt{m_{1}^{2} c^{4} + p_{1}^{2} c^{2}} = \frac{c^{2}}{2m}(m^{2} + m_{1}^{2} - m_{2}^{2})
$$

6.19 能量和动量的洛伦兹变换

(1) 证明能量和动量的变换公式

设 $E$ 和 $p$ 是粒子体系在实验室参考系 $\Sigma$ 中的总能量和总动量（$p$ 与 $x$ 轴方向夹角为 $\theta$）。证明在另一参考系 $\Sigma'$（相对于 $\Sigma$ 以速度 $v$ 沿 $x$ 轴方向运动）中的粒子体系总能量和总动量满足：

$$
p_{x}' = \gamma (p_{x} - \beta \frac{E}{c}), \quad E' = \gamma (E - c \beta p_{x})
$$

$$
\tan \theta' = \frac{\sin \theta}{\gamma (\cos \theta - \beta \frac{E}{cp})}
$$

检查动量与能量构成的四维矢量的内积 $P^{\mu} P_{\mu} = p^{2} - (- \frac{E^{2}}{c^{2}}) = m^{2}$ 是一个不变量，所以该四维矢量洛伦兹协变。
$$
p_{x}' = \gamma (p_{x} - \beta \frac{E}{c}), \quad E' = \gamma (E - c \beta p_{x})
$$

$$
\tan \theta' = \frac{p_{y}'}{p_{x}'} = \frac{p_{y}}{\gamma (p_{x} - \beta \frac{E}{c})} = \frac{\sin \theta}{\gamma (\cos \theta - \beta \frac{E}{cp})}
$$

(2) 光束夹角的变换

某光源发出的光束在两个惯性系中与 $x$ 轴的夹角分别为 $\theta$ 和 $\theta'$，证明

$$
\cos \theta' = \frac{\cos \theta - \beta}{1 - \beta \cos \theta}, \quad \sin \theta' = \frac{\sin \theta}{\gamma (1 - \beta \cos \theta)}
$$

证明：在（1）中 $\tan \theta'$ 的变换中带入 $E = pc$ ：
$$
\tan \theta' = \frac{\sin \theta}{\gamma (\cos \theta - \beta)}
$$

$$
\therefore \,\, \cos \theta' = \frac{1}{\sqrt{1 + \tan^{2} \theta'}} =  \frac{\cos \theta - \beta}{1 - \beta \cos \theta}, \quad \sin \theta' = \sqrt{1 - \cos^{2} \theta'} = \frac{\sin \theta}{\gamma (1 - \beta \cos \theta)}
$$

(3) 立体角的变换

考虑在 $\Sigma$ 系内立体角为 $\mathrm{d} \Omega = \mathrm{d} \cos \theta d\phi$ 的光束，证明当变换到另一惯性系 $\Sigma'$ 时，立体角变为

$$
\mathrm{d} \Omega' = \frac{\mathrm{d} \Omega}{\gamma^{2} (1 - \beta \cos \theta)^{2}}
$$
证明：
$$
\mathrm{d} \Omega' = \mathrm{d} \cos \theta' \mathrm{d} \phi'
$$
由于$\phi$在 $y-z$ 平面上，所以 $\mathrm{d} \phi' = \mathrm{d} \phi$

对与 $\theta$ 的变换而言：
$$
\frac{\mathrm{d} \cos \theta'}{\mathrm{d} \cos \theta} =  - \frac{1}{\sin \theta} \frac{\mathrm{d}}{\mathrm{d} \theta} \frac{\cos \theta - \beta}{1 - \beta \cos \theta} =   \frac{1}{\sin \theta} \frac{\sin \theta (1 - \beta^{2})}{(1 - \beta \cos \theta)^{2}}
$$

$$
\therefore \,\, \mathrm{d} \Omega' = \mathrm{d} \cos \theta' \mathrm{d} \phi' = \frac{\mathrm{d} \cos \theta'}{\mathrm{d} \cos \theta} \frac{\mathrm{d} \phi'}{\mathrm{d} \phi} \mathrm{d} \Omega = \frac{\mathrm{d} \Omega}{\gamma^{2} (1 - \beta \cos \theta)^{2}}
$$

6.25 光子与电子的相互作用

频率为 $\omega$ 的光子（能量 $\hbar\omega$，动量 $\hbar k$）碰在静止的电子上，试证明：

(1) 电子不可能吸收这个光子，否则能量和动量守恒定律不能满足；

假设电子吸收了这个光子，则吸收后动量守恒：$p' = \hbar k$ ，能量守恒： $E' = m_{e} c^{2} + \hbar \omega$

这与关系式 $E'^{2} = m_{e}^{2} c^{4} + p'^{2} c^{2}$ 矛盾，所以能量和动量守恒定律不能同时满足。

(2) 电子可以散射这个光子，散射后光子频率 $\omega'$ 比散射前光子频率 $\omega$ 小（不同于经典理论中散射光频率不变的结论）。

总能量守恒：  
$$
\hbar\omega + m_{e} c^{2} = \hbar\omega' + \sqrt{p_{e}^{2} c^{2} + m_{e}^{2} c^{4}}
$$
其中 $p_{e}$ 为电子碰撞后动量。

矢量分解为分量：  
$$
\begin{cases}
\hbar k = \hbar k'\cos\theta + p_{e} \cos\phi \\
0 = \hbar k'\sin\theta - p_{e} \sin\phi
\end{cases}
$$
消去角度 $\phi$，得动量平方关系：  
$$
p_{e}^{2} = \hbar^{2} \left(k^{2} + k'^{2} - 2kk'\cos\theta\right)
$$

$$
\hbar(\omega - \omega') + m_{e} c^{2} = \sqrt{\hbar^{2} (\omega^{2} + \omega'^{2} - 2\omega\omega'\cos\theta) + m_{e}^{2} c^{4}}.
$$
平方后化简：  
$$
\hbar (\omega - \omega') = \frac{\hbar^{2} \omega\omega' (1 - \cos\theta)}{m_{e} c^{2}}.
$$

即散射后光子频率 $\omega'$ 比散射前光子频率 $\omega$ 小。

6.27 激发态原子的光子发射频率

一个总质量为 $m_{0}$ 的激发原子，对所选定的参考系静止。它在跃迁到能量比之低 $\Delta W$ 的基态时，发射一个光子（能量 $\hbar\omega$，动量 $\hbar k$），同时受到光子的反冲，因此光子的频率不能正好是 $\nu = \frac{\Delta W}{h}$，而要略小一些。证明这个频率：

$$
\nu = \frac{\Delta W}{h} \left(1 - \frac{\Delta W}{2 m_{0} c^{2}}\right)
$$
证明：

由于动量守恒，反冲对激发原子产生的动量为$\hbar k$ ，由能量守恒：
$$
\sqrt{(m_{0} c^{2} - \Delta W)^{2} + (\hbar k)^{2} c^{2}} + \hbar \omega = m_{0} c^{2}
$$
带入 $\omega = k c$ 解得：
$$
\omega = \frac{\Delta W}{\hbar} - \frac{\Delta W^{2}}{2  m_{0} c^{2} \hbar}
$$
即$\nu = \frac{\Delta W}{h} \left(1 - \frac{\Delta W}{2 m_{0} c^{2}}\right)$

(b) 对在外电磁场中运动的带电点粒子，试由 $\frac{d p_{\mu}}{d \tau} = K_{\mu}$ 证明 $K_{\mu} = \sum_{\nu} e F_{\mu\nu} U_{\nu}$

证明：$p_{\mu} = \begin{pmatrix} \vec{p} , i\frac{E}{c} \end{pmatrix}$，$u_{\mu} = \begin{pmatrix} \gamma \vec{v} , i \gamma c \end{pmatrix}$
$$
\therefore \,\, K_{\mu} = \frac{\mathrm{d} p_{\mu}}{\mathrm{d} \tau} = \begin{pmatrix} \gamma \vec{f}, i\frac{\gamma}{c} \frac{\mathrm{d} E}{\mathrm{d} t} \end{pmatrix}
$$
对一个点粒子而言，
$$
\begin{gathered}
\vec{f} = e (\vec{E} + \vec{v} \times \vec{B}) \\
f_{k} = e (- ic F_{4k} + \epsilon_{ijk} v_{i} \frac{1}{2} \epsilon_{jlm} F_{lm}) = 
e ( - ic F_{4k} + \frac{1}{2} \begin{vmatrix} \delta_{kl} & \delta_{km} \\ \delta_{il} & \delta_{im} \end{vmatrix} v_{i} F_{lm}) \\ = 
e(- ic F_{4k} + \frac{1}{2} (\delta_{kl} \delta_{im} - \delta_{km} \delta_{il}) v_{i} F_{lm}) \\ = 
e(- ic F_{4k} + \frac{1}{2} v_{i} (F_{ki} - F_{ik}))
\end{gathered}
$$
利用 $F$ 的反对称性，上式可以化为：
$$
f_{k} =  e(ic F_{k4} + v_{i} F_{ki})
$$
所以对于 $K_{\mu}$ 的前三个分量而言，可以看到
$$
\gamma f_{k} = e (F_{ki} \gamma v_{i} + F_{k4} i \gamma c)
$$

$$
K_{i} = e F_{\mu \nu} u_{\nu} \qquad (i= 1,2,3)
$$

对于$K_{\mu}$ 的第四个分量：
$$
\frac{\mathrm{d}}{\mathrm{d} t}E = \vec{f} \cdot \vec{v} = e (\vec{E} + \vec{v} \times \vec{B}) \cdot \vec{v} = e(- ic F_{4k} + \frac{1}{2} v_{i} (F_{ki} - F_{ik})) v_{k} = - e(ic F_{4k} + v_{i} F_{ik}) v_{k}
$$

$$
\therefore \,\, K_{4} = - i \frac{\gamma}{c} e(ic F_{4k} + v_{i} F_{ik}) v_{k} = e (\gamma F_{4k} v_{k} + i \frac{\gamma}{c} v_{i} v_{k} F_{ik}) = e \gamma F_{4k} v_{k}
$$

容易判断括号中后一项由于 $F$ 的反对称性为0.

所以$K_{\mu} = \sum_{\nu} e F_{\mu\nu} u_{\nu}$对四个分量均成立。

（用PPT上那个作用量作变分的推法也可以，不过我不想相当于把PPT抄一遍。所以此处利用分量展开直接证明。）

(c) 试证 $K_{4} = \frac{i}{c} \vec{K} \cdot \vec{v}$，其中 $\vec{K}$ 是 $K_{\mu}$ 前三分量构成的矢量。这个结论不止对电磁作用，而是一般成立的。

对于点粒子而言，利用能量定律：$\vec{f} \cdot \vec{v} = \frac{\mathrm{d}}{\mathrm{d} t} E$

对比$K_{\mu} = \frac{\mathrm{d} p_{\mu}}{\mathrm{d} \tau} = \begin{pmatrix} \gamma \vec{f}, i\frac{\gamma}{c} \frac{\mathrm{d} E}{\mathrm{d} t} \end{pmatrix}$ 的形式，得到 $K_{4} = \frac{i}{c} \vec{K} \cdot \vec{v}$

## 第5次作业

1.  书6.12, 6.15, 6.16

6.12 电偶极子 $p_{0}$ 以速度 $v$ 作匀速运动，求它产生的电磁势和场 $\varphi, A; E, B$。

取Lorentz Boost的方向为x轴，记 $p_{0}$ 所在位置为原点，记当前时刻为时间零点。

电磁势：

在电偶极子系中，电偶极子产生的电磁势为：
$$
\phi'  = \frac{1}{4 \pi \epsilon_{0}} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}}
$$

$$
\vec{A}' = 0
$$

换至地面系中：
$$
\begin{pmatrix} A_{x} \\ A_{y} \\ A_{z} \\ \frac{\phi}{c} \end{pmatrix} = \begin{pmatrix} \gamma & 0 & 0 & \gamma \beta \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \gamma \beta & 0 & 0 & \gamma  \end{pmatrix} \begin{pmatrix} A'_{x} \\ A'_{y} \\ A'_{z} \\ \frac{\phi'}{c} \end{pmatrix} = \begin{pmatrix} \gamma & 0 & 0 & \gamma \beta \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \gamma \beta & 0 & 0 & \gamma  \end{pmatrix} \begin{pmatrix} 0 \\ 0 \\ 0 \\ \frac{1}{4 \pi \epsilon_{0} c} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}} \end{pmatrix} = \begin{pmatrix} \frac{\gamma \beta}{4 \pi \epsilon_{0} c} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}} \\ 0 \\ 0 \\ \frac{\gamma}{4 \pi \epsilon_{0} c} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}} \end{pmatrix}
$$
所以$\phi = \frac{\gamma}{4 \pi \epsilon_{0}} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}}$， $\vec{A} = \begin{pmatrix} \frac{\gamma \beta}{4 \pi \epsilon_{0} c} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}}, 0, 0 \end{pmatrix}^{\top}$

其中$\vec{r'} = \begin{pmatrix} \gamma (x - \beta c t), y, z \end{pmatrix}^{\top}$

在电偶极子系中，电偶极子产生的电场为：
$$
\vec{E} = \frac{1}{4 \pi \epsilon_{0}} \frac{3(\vec{p_{0}} \cdot \vec{r'}) \vec{r'} - r'^{2} \vec{p_{0}}}{r'^{5}}
$$
换至地面系中，得到：
$$
E_{x} = E'_{x} = \frac{1}{4 \pi \epsilon_{0}} \frac{3 (\vec{p_{0}} \cdot \vec{r'}) x' - r'^{2} (\vec{p_{0}} \cdot \hat{x'})}{r'^{5}}
$$

$$
E_{y} = \gamma (E'_{y} + \beta c B'_{z}) = \gamma E'_{y} = \frac{\gamma}{4 \pi \epsilon_{0}} \frac{3(\vec{p_{0}} \cdot \vec{r'}) y' - r'^{2} (\vec{p_{0}} \cdot \hat{y'})}{r'^{5}}
$$

$$
E_{z} = \gamma (E'_{z} - \beta c B'_{y}) = \gamma E'_{z} = \frac{\gamma}{4 \pi \epsilon_{0}} \frac{3(\vec{p_{0}} \cdot \vec{r'}) z' - r'^{2} (\vec{p_{0}} \cdot \hat{z'})}{r'^{5}}
$$

$$
B_{x} = B'_{x} = 0
$$

$$
B_{y} = \gamma (B_{y'} - \beta \frac{E'_{z}}{c}) = - \frac{\gamma}{\beta c} E'_{z} = - \frac{\gamma}{4 \pi \epsilon_{0} \beta c} \frac{3(\vec{p_{0}} \cdot \vec{r'}) z' - r'^{2} (\vec{p_{0}} \cdot \hat{z'})}{r'^{5}}
$$

$$
B_{z} = \gamma (B_{z'} + \beta \frac{E'_{y}}{c}) = \frac{\gamma}{\beta c} E'_{y} = \frac{\gamma}{4 \pi \epsilon_{0} \beta c} \frac{3(\vec{p_{0}} \cdot \vec{r'}) y' - r'^{2} (\vec{p_{0}} \cdot \hat{y'})}{r'^{5}}
$$

其中$\vec{r'} = \begin{pmatrix} \gamma (x - \beta c t), y, z \end{pmatrix}^{\top}$

6.15 有一沿 $z$ 轴方向螺旋进动的静磁场 $\vec{B} = B_{0} (\cos k_{m} z \hat{e}_{x} + \sin k_{m} z \hat{e}_{y})$，其中 $k_{m} = 2\pi / \lambda_{m}$，$\lambda_{m}$ 为磁场周期长度。现有一沿 $z$ 轴以速度 $v = \beta c$ 运动的惯性系，求在该惯性系中观察到的电磁场。证明当 $\beta \simeq 1$ 时该电磁场类似于一列频率为 $\gamma \cdot \beta c k_{m}$ 的圆偏振电磁波。

在该系中：
$$
E'_{x} = \gamma (E_{x} - \beta c B_{y}) = - \gamma \beta c B_{0} \sin k_{m} z
$$

$$
E'_{y} = \gamma (E_{y} + \beta c B_{x}) = \gamma \beta c B_{0} \cos k_{m} z
$$

$$
E'_{z} = E_{z} = 0
$$

$$
B'_{x} = \gamma (B_{x} + \beta c E_{z}) = \gamma B_{x} = \gamma B_{0} \cos k_{m} z
$$

$$
B'_{y} = \gamma (B_{y} - \beta c E_{x}) = \gamma B_{y} = \gamma B_{0} \sin k_{m} z
$$

$$
B'_{z} = B_{z} = 0
$$

其中 $z = \gamma (z' + \beta c t')$ ，得到该波波矢沿 $- z$ 方向，且圆频率为 $\gamma \beta c k_{m}$。

所以$\beta \approx 1$时该系中 
$$
\vec{B} \approx \frac{\hat{k}}{c} \times \vec{E}
$$
正好为左旋光的电磁场表达式。

6.16 有一无限长均匀带电直线，在其静止参考系中线电荷密度为 $\lambda$。该线电荷以速度 $v = \beta c$ 沿自身长度匀速移动。在与直线相距为 $d$ 的地方有一以同样速度平行于直线运动的点电荷 $q$。分别用下列两种方法求出作用在电荷上的力：

(a) 在带电线静止系中确定力，然后用四维力变换公式；

带电线静止系中：
$$
\vec{f} (r) = \frac{\lambda q}{2 \pi \epsilon_{0} d} \hat{r}
$$
使用力的逆变换：
$$
\begin{pmatrix} \gamma_{v} f_{x} \\ \gamma_{v} f_{y} \\ \gamma_{v} f_{z} \\ \gamma_{v} \frac{\vec{f} \cdot \vec{v}}{c} \end{pmatrix} = \begin{pmatrix} \gamma & 0 & 0 & \gamma \beta  \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \gamma \beta & 0 & 0 & \gamma \end{pmatrix} \begin{pmatrix} \gamma_{v'} f'_{x} \\ \gamma_{v'} f'_{y} \\ \gamma_{v'} f'_{z} \\ \gamma_{v'} \frac{\vec{f'} \cdot \vec{v'}}{c}  \end{pmatrix}
$$
在带电线静止系中，4-力矢量为$\begin{pmatrix} \frac{\lambda q}{2 \pi \epsilon_{0} d} \hat{r}, 0 \end{pmatrix}$

所以$\gamma_{v} \vec{f} = \frac{\lambda q}{2 \pi \epsilon_{0} d} \hat{r}$

$\mathbf{F} = \frac{\lambda q}{2 \pi \epsilon_{0} d \gamma} \hat{r}$

(b) 直接计算线电荷和线电流作用在运动电荷上的电磁力。

在线电荷系中，流矢量为$\begin{pmatrix} c \lambda , 0 \end{pmatrix}$，所以地面系中，流矢量变为
$$
\begin{pmatrix} c \lambda_{s} \\ I_{s} \end{pmatrix} = \begin{pmatrix} \gamma & \gamma \beta \\ \gamma \beta & \gamma \end{pmatrix} \begin{pmatrix} c \lambda \\ 0 \end{pmatrix} = \begin{pmatrix} \gamma c \lambda \\ \gamma \lambda \beta c\end{pmatrix}
$$
所以离导线 $d$ 处的电磁场为 $\vec{E} = \frac{\gamma \lambda}{2 \pi \epsilon_{0} d} \hat{r}$     $\vec{B} = \frac{\gamma \beta c \lambda}{2 \pi \mu_{0} d} \hat{j} \times \hat{r}$

此时电荷受力为：
$$
\mathbf{F} = \frac{\gamma \lambda q}{2 \pi \epsilon_{0} d} \hat{r} + q \vec{v} \times \frac{\gamma \beta c \lambda}{2 \pi \mu_{0} d} (\hat{j} \times \hat{r}) = \frac{\gamma \lambda q}{2 \pi \epsilon_{0} d} (1 - \frac{v^{2}}{c^{2}}) \hat{r} = \frac{\lambda q}{2 \pi \epsilon_{0} d \gamma} \hat{r}
$$

2. 试证, 电磁场的一般变换关系为,

$$
\vec{E}' = \frac{\vec{E} \cdot \vec{v}}{v^{2}} \vec{v} + \frac{\vec{E} - \frac{\vec{E} \cdot \vec{v}}{v^{2}} \vec{v} + \vec{v} \times \vec{B}}{\sqrt{1 - \frac{v^{2}}{c^{2}}}}
$$

$$
\vec{B}' = \frac{\vec{B} \cdot \vec{v}}{v^{2}} \vec{v} + \frac{\vec{B} - \frac{\vec{B} \cdot \vec{v}}{v^{2}} \vec{v} - \frac{\vec{v}}{c^{2}} \times \vec{E}}{\sqrt{1 - \frac{v^{2}}{c^{2}}}}
$$

由于电磁场张量在变换下满足二阶张量的变换关系，所以对于 $x$ 方向的Boost：
$$
\begin{gathered}
F' = 
\begin{pmatrix}
\gamma & 0 & 0 & i\beta\gamma \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
-i\beta\gamma & 0 & 0 & \gamma
\end{pmatrix}
\begin{pmatrix}
0 & B_{3} & -B_{2} & -iE_{1}/c \\
-B_{3} & 0 & B_{1} & -iE_{2}/c \\
B_{2} & -B_{1} & 0 & -iE_{3}/c \\
iE_{1}/c & iE_{2}/c & iE_{3}/c & 0
\end{pmatrix}
\begin{pmatrix}
\gamma & 0 & 0 & - i\beta\gamma \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
i\beta\gamma & 0 & 0 & \gamma
\end{pmatrix}
\\ =
\begin{pmatrix}
0 & \gamma(B_{3} - \tfrac{\beta E_{2}}{c}) & \gamma(B_{2} + \tfrac{\beta E_{3}}{c}) & -i \frac{E_{1}}{c} \\
-\gamma(B_{3} - \tfrac{\beta E_{2}}{c}) & 0 & B_{1} & -i\gamma(\tfrac{E_{2}}{c} - \beta B_{3}) \\
-\gamma(B_{2} + \tfrac{\beta E_{3}}{c}) & -B_{1} & 0 & -i\gamma(\tfrac{E_{3}}{c} + \beta B_{2}) \\
i \frac{E_{1}}{c} & i\gamma(\tfrac{E_{2}}{c} - \beta B_{3}) & i\gamma(\tfrac{E_{3}}{c} + \beta B_{2}) & 0
\end{pmatrix}
\end{gathered}
$$
得到对于 Boost 而言 $E'_{\parallel} = E_{\parallel}$   $E'_{\perp} = \gamma (E_{\perp} + \vec{v} \times \vec{B})$  $B'_{\parallel} = B_{\parallel}$  $B'_{\perp} = \gamma (B_{\perp} - \vec{v} \times \vec{E})$

所以
$$
\vec{E'} =  \vec{E} \cdot \frac{\vec{v}}{v} + \gamma (\vec{E} - \vec{E} \cdot \frac{\vec{v}}{v} + \vec{v} \times \vec{B})
$$

$$
\vec{B'} = \vec{B} \cdot \frac{\vec{v}}{v} + \gamma (\vec{B} - \vec{B} \cdot \frac{\vec{v}}{v} - \frac{\vec{v}}{c^{2}} \times \vec{E})
$$

3.  试证, 匀速运动的点电荷$q$产生的电磁场为,

$$
\vec{E} = \frac{q \vec{R}}{4 \pi \epsilon_{0} S^{3}} (1 - \frac{v^{2}}{c^{2}})
$$

$$
\vec{B} = \frac{\vec{v}}{c^{2}} \times \vec{E}
$$

其中:

$$
\vec{R} = \vec{r} - \vec{v} t
$$

$$
S^{2} = (\vec{R} \cdot \frac{\vec{v}}{v})^{2} + (1 - \frac{v^{2}}{c^{2}}) (\vec{R} - \vec{R} \cdot \frac{\vec{v}}{v^{2}} \vec{v}) \cdot (\vec{R} - \vec{R} \cdot \frac{\vec{v}}{v^{2}} \vec{v}) = \frac{(\vec{R} \cdot \vec{v})^{2}}{c^{2}} + (1 - \frac{v^{2}}{c^{2}}) R^{2}
$$

证明：在电荷参考系 $s'$ 中，电磁场为：
$$
\vec{E} = \frac{q}{4 \pi \epsilon_{0} r'^{2}} \hat{r'} \qquad \vec{B} = \vec{0}
$$
利用电磁场变换：
$$
\vec{E} = \vec{E'} \cdot \frac{\vec{v}}{v} \hat{v} + \gamma (\vec{E'} - \vec{E'} \cdot \frac{\vec{v}}{v} \hat{v})
$$

$$
\vec{B} = \gamma \frac{\vec{v}}{c^{2}} \times \vec{E'}
$$

再考虑 $\vec{E'}$ ，在 $t$ 时刻，对于场点 $(x,y,z)^{\top}$， $S$ 系中相对距离为 $\vec{R} = \vec{r} - \vec{v} t$ 

变换至 $S'$系中，相对距离为(假设电荷运动方向为 $x$ 方向) $\vec{r'} = \begin{pmatrix} \gamma (x - vt),  y,z \end{pmatrix}^{\top} = \gamma (\vec{R} \cdot \hat{v}) \hat{v} + \vec{R} - (\vec{R} \cdot \hat{v}) \hat{v}$

所以 $r'^{2} = \gamma^{2} S^{2}$
$$
\vec{E'} = \frac{q}{4 \pi \epsilon_{0} r'^{3}} \vec{r'} = \frac{q}{4 \pi \epsilon_{0} \gamma^{3} S^{3}} (\gamma (\vec{R} \cdot \hat{v}) \hat{v} + \vec{R} - (\vec{R} \cdot \hat{v}) \hat{v})
$$
换至 $S$ 系中
$$
\begin{gathered}
\vec{E} = \vec{E'} \cdot \frac{\vec{v}}{v} \hat{v} + \gamma (\vec{E'} - \vec{E'} \cdot \frac{\vec{v}}{v} \hat{v} ) = \frac{q}{4 \pi \epsilon_{0} \gamma^{3} S^{3}} (\gamma (\vec{R} \cdot \hat{v}) \hat{v} + \gamma (\gamma (\vec{R} \cdot \hat{v}) \hat{v} + \vec{R} - (\vec{R} \cdot \hat{v}) \hat{v}  - \gamma (\vec{R} \cdot \hat{v}) \hat{v}) \\ = \frac{q}{4 \pi \epsilon_{0} \gamma^{3} S^{3}}  \gamma \vec{R} = \frac{q \vec{R}}{4 \pi \epsilon_{0} S^{3}} (1 - \frac{v^{2}}{c^{2}})
\end{gathered}
$$

$$
\vec{B} = \gamma \frac{\vec{v}}{c^{2}} \times \vec{E'} = \gamma \frac{\vec{v}}{c^{2}} \times \frac{q}{4 \pi \epsilon_{0} \gamma^{3} S^{3}} (\gamma (\vec{R} \cdot \hat{v}) \hat{v} + \vec{R} - (\vec{R} \cdot \hat{v}) \hat{v}) = \frac{\vec{v}}{c^{2}} \times \frac{q}{4 \pi \epsilon_{0} \gamma^{3} S^{3}}  \gamma \vec{R} = \frac{\vec{v}}{c^{2}} \times \vec{E}
$$

## 第6次作业

### 1. 理想绝缘介质中的波动方程及平面电磁波解

(a) 书4.4

若 $\mathbf{E}, \mathbf{D}, \mathbf{B}, \mathbf{H}$ 仍按 $e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)}$ 变化，但 $\mathbf{D}$ 不再与 $\mathbf{E}$ 平行（即 $\mathbf{D} = \epsilon \mathbf{E}$ 不成立）。

(1) 证明：
$$
\mathbf{k} \cdot \mathbf{B} = \mathbf{k} \cdot \mathbf{D} = \mathbf{B} \cdot \mathbf{D} = \mathbf{B} \cdot \mathbf{E} = 0
$$
但一般 $\mathbf{k} \cdot \mathbf{E} \neq 0$。

证明：
$$
\nabla \cdot \mathbf{B}  = 0
$$
所以 
$$
\nabla \cdot \mathbf{B}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)} = i \mathbf{k} \cdot \mathbf{B} = 0
$$
非线性极化介质中，由于$\mathbf{D}$ 不再与 $\mathbf{E}$ 平行，所以 $\mathbf{E}$ 不一定在与 $\mathbf{k}$ 垂直的平面内，所以一般 $\mathbf{k} \cdot \mathbf{E} \neq 0$。

同理，在没有自由电荷的空间中
$$
\nabla \cdot \mathbf{D} = 0
$$

$$
\nabla \cdot \mathbf{D}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)} = i \mathbf{k} \cdot \mathbf{D} = 0
$$

由于
$$
\nabla \times \mathbf{B} = \mu \frac{\partial}{\partial t} \mathbf{D}
$$
所以
$$
\nabla \times \mathbf{B}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)} = \mu \frac{\partial}{\partial t} \mathbf{D}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)}
$$

$$
\mathbf{k} \times \mathbf{B} =  - \mu \omega \mathbf{D}
$$

$$
\mathbf{B} \cdot \mathbf{D} = 0
$$

同理
$$
\nabla \times \mathbf{E} = - \frac{\partial}{\partial t} \mathbf{B}
$$
所以
$$
\nabla \times \mathbf{E}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)} = - \frac{\partial}{\partial t} \mathbf{B}_{0} e^{i(\mathbf{k} \cdot \mathbf{x} - \omega t)}
$$

$$
\mathbf{k} \times \mathbf{E} =  \omega \mathbf{B}
$$

$$
\mathbf{E} \cdot \mathbf{B} = 0
$$

(2) 证明：
$$
\mathbf{D} = \frac{1}{\omega^{2} \mu} \left[ k^{2} \mathbf{E} - (\mathbf{k} \cdot \mathbf{E}) \mathbf{k} \right]
$$

证明：
$$
\mathbf{D} = - \frac{1}{\mu \omega} \mathbf{k} \times \mathbf{B} = - \frac{1}{\mu \omega} \mathbf{k} \times \left( \frac{1}{\omega} \mathbf{k} \times \mathbf{E} \right) = \frac{1}{\omega^{2} \mu} \left[ k^{2} \mathbf{E} - (\mathbf{k} \cdot \mathbf{E}) \mathbf{k} \right]
$$

(3) 证明：

能流 $\mathbf{S}$ 与波矢 $\mathbf{k}$ 一般不在同一方向上。
证明：
$$
\therefore \,\, \mathbf{k} \times \mathbf{S} = \mathbf{k} \times (\mathbf{E} \times \mathbf{H}) = 
- (\mathbf{k} \cdot \mathbf{E}) \mathbf{H} \neq 0
$$

所以能流 $\mathbf{S}$ 与波矢 $\mathbf{k}$ 一般不在同一方向上。

(b) 试证：对 $\rho = 0, \vec{J} = 0$ 的麦克斯韦方程组，四个方程中只有两个是独立的。

证明：在无自由电荷和电流的情况下，麦克斯韦方程组为：

$$
\begin{gathered}
\nabla \cdot \mathbf{E} = 0 \\
\nabla \cdot \mathbf{B} = 0 \\
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} = \mu_{0} \epsilon_{0} \frac{\partial \mathbf{E}}{\partial t}
\end{gathered}
$$
可以通过两个旋度方程导出散度方程如下：
$$
\nabla \cdot (\nabla \times \mathbf{E}) = - \frac{\partial}{\partial t} (\nabla \cdot \mathbf{B}) = 0
$$

$$
\nabla \cdot (\nabla \times \mathbf{B}) = \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} (\nabla \cdot \mathbf{E}) = 0
$$

所以
$$
\begin{gathered}
\frac{\partial}{\partial t} \nabla \cdot \mathbf{E} = 0 \\
\frac{\partial}{\partial t} \nabla \cdot \mathbf{B} = 0
\end{gathered}
$$
所以对 $\rho = 0, \vec{J} = 0$ 的麦克斯韦方程组，四个方程中是独立的，我认为无法从两个方程推出其余的两个。

### 2. 定态波动方程及平面波解

(a) 书4.1

考虑两列振幅相同、偏振方向相同、频率分别为 $\omega + d\omega$ 和 $\omega - d\omega$ 的线偏振平面波，它们都沿 z 轴方向传播。

(1) 求合成波，证明波的振幅不是一个常数，而是一个波。
合成波：$(k = \frac{\omega}{c})$
$$
A \cos ((k + dk)z - (\omega + d \omega) t) + A \cos ((k - dk)z - (\omega - d \omega) t) = 2 A \cos (dk z - d \omega t) \cos(kz - \omega t)
$$
所以合成波的振幅为 $2 A \cos (d k z - d \omega t)$，是一个波。
(2) 求合成波的相位传播速度和振幅传播速度。
相位传播速度：
$$
v_{p} = \frac{\omega}{k}
$$
振幅传播速度：
$$
v_{g} = \frac{d \omega}{d k}
$$
(b) 试证,用复数方法得到的麦克斯韦方程组平面波解(包括 $\gamma \neq 0$),在取实部后仍是麦克斯韦方程组的解.

证明：

使用复数法解麦克斯韦方程组：
$$
\begin{gathered}
\nabla \cdot \mathbf{E} = 0 \\ 
\nabla \times \mathbf{E} = - \frac{\partial}{\partial t} \mathbf{B} \\ 
\nabla \cdot \mathbf{B} = 0 \\
\nabla \times \mathbf{B} = \mu (\gamma \mathbf{E} + \epsilon \frac{\partial}{\partial t} \mathbf{E})
\end{gathered}
$$

带入波动假设：
$$
\begin{gathered}
\mathbf{k} \cdot \mathbf{E} = 0 \\
\mathbf{k} \times \mathbf{E} = \omega \mathbf{B} \\
\mathbf{k} \cdot \mathbf{B} = 0 \\
\mathbf{k} \times \mathbf{B} =  - \mu (i \gamma + \epsilon \omega) \mathbf{E}
\end{gathered}
$$
所以 
$$
\mathbf{k} \times (\mathbf{k} \times \mathbf{B}) = - k^{2} \mathbf{B} = - \mu (i \gamma + \epsilon \omega) \omega \mathbf{B}
$$
即
$$
\mathbf{k}^{2} = \mu \epsilon \omega^{2} + i \gamma \mu \omega
$$
假设 $\mathbf{k} = \mathbf{k_{R}} + i \mathbf{k_{I}}$，则
$$
\begin{gathered}
\mathbf{k_{R}^{2}} - \mathbf{k_{I}^{2}} = \mu \epsilon \omega^{2} \\
2 \mathbf{k_{R}} \cdot  \mathbf{k_{I}} = \gamma \mu \omega
\end{gathered}
$$
所以对应的平面波解为：
$$
\begin{gathered}
\mathbf{E} = (\mathbf{E}_{0R} + i \mathbf{E}_{0I}) e^{i(\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{k}_{I} \cdot \mathbf{r}} \\
\mathbf{B} = (\mathbf{B}_{0R} + i \mathbf{B}_{0I}) e^{i(\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{k}_{I} \cdot \mathbf{r}}
\end{gathered}
$$
并且有
$$
\begin{gathered}
\mathbf{E}_{0R} \cdot \mathbf{k}_{R} - \mathbf{E}_{0I} \cdot \mathbf{k}_{I} = 0 \\ 
\mathbf{E}_{0I} \cdot \mathbf{k}_{R} + \mathbf{E}_{0R} \cdot \mathbf{k}_{I} = 0 \\
\mathbf{B}_{0R} = \frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0R} - \frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0I} \\ 
\mathbf{B}_{0I} = \frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0R} + \frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0I} \\ 
\mathbf{B}_{0R} \cdot \mathbf{k}_{R} - \mathbf{B}_{0I} \cdot \mathbf{k}_{I} = 0 \\ 
\mathbf{B}_{0I} \cdot \mathbf{k}_{R} + \mathbf{B}_{0R} \cdot \mathbf{k}_{I} = 0
\end{gathered}
$$

取实部：
$$
\begin{gathered}
\Re [\mathbf{E}] = (\mathbf{E}_{0R} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{E}_{0I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \\
\Re [\mathbf{B}] = (\mathbf{B}_{0R} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{B}_{0I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}
\end{gathered}
$$
带入麦克斯韦方程组：
$$
\begin{gathered}
\nabla \cdot (\mathbf{E}_{0R} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{E}_{0I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \\ = \mathbf{E}_{0Ri} \partial_{i} (\cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) - \mathbf{E}_{0Ii} \partial_{i} (\sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \\ = \mathbf{E}_{0Ri} (- \mathbf{k}_{Ri} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)- \mathbf{k}_{Ii} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}  - \\ 
\mathbf{E}_{0Ii} (\mathbf{k}_{Ri} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{k}_{Ii} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \\ = e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (- (\mathbf{E}_{0R} \cdot \mathbf{k}_{I} + \mathbf{E}_{0I} \cdot \mathbf{k}_{R}) \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) + (\mathbf{E}_{0I} \cdot \mathbf{k}_{I} - \mathbf{E}_{0R} \cdot \mathbf{k}_{R}) \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) \\  = 0
\end{gathered}
$$
磁场同理。

考虑旋度方程：
$$
\begin{gathered}
\nabla \times (\mathbf{E}_{0R} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{E}_{0I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \\ =
\nabla (\cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{E}_{0R} - \nabla (\sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)  e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{E}_{0I} \\ = 
(- \mathbf{k}_{R} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} - \mathbf{k}_{I} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{E}_{0R} - \\ ( \mathbf{k}_{R} \cos(\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} -  \mathbf{k}_{I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{E}_{0I} \\ =
- \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \mathbf{B}_{0I} \omega - \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \mathbf{B}_{0R} \omega = - \frac{\partial}{\partial t} \mathbf{B}
\end{gathered}
$$

$$
\begin{gathered}
\nabla \times \mathbf{B} = \nabla \times (\mathbf{B}_{0R} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) - \mathbf{B}_{0I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} \\ =
\nabla (\cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{B}_{0R} - \nabla (\sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t)  e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{B}_{0I} \\ = 
(- \mathbf{k}_{R} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} - \mathbf{k}_{I} \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{B}_{0R} - \\ ( \mathbf{k}_{R} \cos(\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} -  \mathbf{k}_{I} \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}}) \times \mathbf{B}_{0I} \\ =
- \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (\mathbf{k}_{I} \times \mathbf{B}_{0R} + \mathbf{k}_{R} \times \mathbf{B}_{0I}) - \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (\mathbf{k}_{R} \times \mathbf{B}_{0R} - \mathbf{k}_{I} \times \mathbf{B}_{0I})
\end{gathered}
$$

由于
$$
\begin{gathered}
\mathbf{k}_{I} \times \mathbf{B}_{0R} + \mathbf{k}_{R} \times \mathbf{B}_{0I}  \\ =
\mathbf{k}_{I} \times (\frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0R} - \frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0I}) + \mathbf{k}_{R} \times (\frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0R} + \frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0I}) \\ = 
\frac{1}{\omega} ((\mathbf{k}_{R} \cdot \mathbf{E}_{0R}) \mathbf{k}_{I} + (\mathbf{k}_{I} \cdot \mathbf{E}_{0R}) \mathbf{k}_{R} - 2 (\mathbf{k}_{I} \cdot \mathbf{k}_{R}) \mathbf{E}_{0R} + (\mathbf{k}_{R} \cdot \mathbf{E}_{0I}) \mathbf{k}_{R} - (\mathbf{k}_{I} \cdot \mathbf{E}_{0I}) \mathbf{k}_{I} + (\mathbf{k}_{I}^{2} - \mathbf{k}_{R}^{2}) \mathbf{E}_{0I}) \\ = 
\frac{1}{\omega} (- \mu \epsilon \omega^{2} \mathbf{E}_{0I} - \gamma \mu \omega \mathbf{E}_{0R}) = - \mu \epsilon \omega \mathbf{E}_{0I} - \gamma \mu \mathbf{E}_{0R}
\end{gathered}
$$

$$
\begin{gathered}
\mathbf{k}_{R} \times \mathbf{B}_{0R} - \mathbf{k}_{I} \times \mathbf{B}_{0I} \\ =
\mathbf{k}_{R} \times (\frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0R} - \frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0I}) - \mathbf{k}_{I} \times (\frac{\mathbf{k}_{I}}{\omega} \times \mathbf{E}_{0R} + \frac{\mathbf{k}_{R}}{\omega} \times \mathbf{E}_{0I}) \\ = 
\frac{1}{\omega} (- (\mathbf{k}_{R} \cdot \mathbf{E}_{0I}) \mathbf{k}_{I} - (\mathbf{k}_{I} \cdot \mathbf{E}_{0I}) \mathbf{k}_{R} + 2 (\mathbf{k}_{I} \cdot \mathbf{k}_{R}) \mathbf{E}_{0I} + (\mathbf{k}_{R} \cdot \mathbf{E}_{0R}) \mathbf{k}_{R} - (\mathbf{k}_{I} \cdot \mathbf{E}_{0R}) \mathbf{k}_{I} + (\mathbf{k}_{I}^{2} - \mathbf{k}_{R}^{2}) \mathbf{E}_{0R}) \\ = 
\frac{1}{\omega} (- \mu \epsilon \omega^{2} \mathbf{E}_{0R} + \gamma \mu \omega \mathbf{E}_{0I}) 
= - \mu \epsilon \omega \mathbf{E}_{0R} + \gamma \mu \mathbf{E}_{0I}
\end{gathered}
$$

所以
$$
\begin{gathered}
- \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (\mathbf{k}_{I} \times \mathbf{B}_{0R} + \mathbf{k}_{R} \times \mathbf{B}_{0I}) - \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (\mathbf{k}_{R} \times \mathbf{B}_{0R} - \mathbf{k}_{I} \times \mathbf{B}_{0I}) \\ =
- \cos (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (- \mu \epsilon \omega \mathbf{E}_{0I} - \gamma \mu \mathbf{E}_{0R}) - \sin (\mathbf{k}_{R} \cdot \mathbf{r} - \omega t) e^{- \mathbf{k}_{I} \cdot \mathbf{r}} (- \mu \epsilon \omega \mathbf{E}_{0R} + \gamma \mu \mathbf{E}_{0I}) \\ = \mu (\gamma \mathbf{E} + \epsilon \frac{\partial}{\partial t} \mathbf{E})
\end{gathered}
$$
所以该实部满足麦克斯韦方程组。

(c) 试求穿透深度的严格表达式，并从它出发证明在 $\gamma$ 很大时 $\delta \to \sqrt{\frac{2}{\omega \mu \gamma}}$

穿透深度：
$$
\begin{gathered}
k_{R}^{2} - k_{I}^{2} = \mu \epsilon \omega^{2} \\
2 k_{R} k_{I} \cos \theta = \gamma \mu \omega
\end{gathered}
$$
所以
$$
\begin{gathered}
\left( \frac{\gamma \mu \omega}{2 k_{I} \cos \theta} \right )^{2} - k_{I}^{2} = \mu \epsilon \omega^{2} \\ 
k_{I}^{4} + \mu \epsilon \omega^{2} k_{I}^{2} - \left( \frac{\gamma \mu \omega}{2 \cos \theta} \right )^{2} = 0 \\
k_{I}^{2} = \frac{- \mu \epsilon \omega^{2} + \sqrt{(\mu \epsilon \omega^{2})^{2} + 4 \left( \frac{\gamma \mu \omega}{2 \cos \theta} \right )^{2}}}{2}
\end{gathered}
$$
所以穿透深度的严格表达式为
$$
\delta = \frac{1}{k_{I} \cos \theta} = \frac{1}{\cos \theta \sqrt{\frac{- \mu \epsilon \omega^{2} + \sqrt{(\mu \epsilon \omega^{2})^{2} + 4 \left( \frac{\gamma \mu \omega}{2 \cos \theta} \right )^{2}}}{2}}}
$$
当$\gamma \gg 1$ 时，
$$
\frac{- \mu \epsilon \omega^{2} + \sqrt{(\mu \epsilon \omega^{2})^{2} + 4 \left( \frac{\gamma \mu \omega}{2 \cos \theta} \right )^{2}}}{2} \approx \frac{- \mu \epsilon \omega^{2} + 2 \left( \frac{\gamma \mu \omega}{2 \cos \theta} \right )}{2} \approx \frac{\gamma \mu \omega}{2 \cos \theta}
$$
所以
$$
\delta \to \sqrt{\frac{2}{\gamma \mu \omega \cos \theta}}
$$
当相位传播方向与衰减方向相同时 $\delta \to \sqrt{\frac{2}{\omega \mu \gamma}}$

(d) 试讨论在什么条件下,椭圆偏振是左旋或右旋的?

当椭圆偏振光对应的电矢量在两正交坐标轴上投影分量相等，且$x$ 分量相位领先 $y$ 分量 $\frac{\pi}{2}$ 时为左旋光；$x$ 分量相位落后 $y$ 分量 $\frac{\pi}{2}$ 时为右旋光。

### 3. 电磁波在界面上的反射和折射

(a) 书4.2, 4.6

4.2 一平面电磁波以 $\theta = 45^{\circ}$ 从真空入射到 $\varepsilon_{r} = 2$ 的介质，电场强度垂直于入射面。求反射系数和折射系数。

电场强度垂直于入射面，所以是 $s$ 光，入射的介质折射率为 $\sqrt{2}$。

入射角$\theta = 45^{\circ}$ ，折射角 $\sqrt{2} \sin \theta' = \sin \theta$，所以 $\theta' = \frac{\pi}{6}$

利用 $s$ 光的菲涅耳公式：
$$
r_{s} = \frac{n_{1} \cos \theta - n_{2} \cos \theta'}{n_{1} \cos \theta + n_{2} \cos \theta'} = \frac{\frac{\sqrt{2}}{2} - \sqrt{2} \frac{\sqrt{3}}{2}}{\frac{\sqrt{2}}{2} + \sqrt{2} \frac{\sqrt{3}}{2}} = \frac{1 - \sqrt{3}}{1 + \sqrt{3}}
$$

所以
$$
R = r_{s}^{2} = \frac{2 - \sqrt{3}}{2 + \sqrt{3}}
$$

$$
T = 1 - R = \frac{2\sqrt{3}}{2 + \sqrt{3}}
$$

4.6 平⾯电磁波垂直射到⾦属表⾯上，试证明透入⾦属内部的电磁波能量全部变为焦⽿热。

证明：假设入射波矢为 $\mathbf{k_{1}}$，透射为 $\mathbf{k_{2}}$ ，反射为$\mathbf{k_{3}}$ 

当平⾯电磁波垂直射到⾦属表⾯上时（金属内部$\gamma \gg 1$）：

我们假设振幅透射率为 $t$

透射部分的衰减：

由于此时相位传播方向和衰减方向同向，所以
$$
k_{I}^{2} = \frac{- \mu \epsilon \omega^{2} + \sqrt{(\mu \epsilon \omega^{2})^{2} +  \left( \gamma \mu \omega \right )^{2}}}{2}
$$
进入部分的电磁波能流：
$$
\mathbf{S} = \Re[\mathbf{E} \times \mathbf{H}] = \Re[\mathbf{E} \times (\frac{\mathbf{k}}{\mu \omega} \times \mathbf{E})] = t^{2} \mathbf{E}_{0}^{2} \frac{\mathbf{k_{R}}}{\mu \omega}
$$
所以
$$
<\mathbf{S}> = \frac{1}{2} t^{2} \mathbf{E}_{0}^{2} \frac{\mathbf{k}_{R}}{\omega}
$$
焦耳热：
$$
\mathbf{j} = \gamma \mathbf{E}
$$
发热功率密度
$$
w = \frac{1}{\gamma} j^{2} = \gamma \mathbf{E}^{2}
$$
带入上一题推导出的衰减结果
$$
\mathbf{E} = t \mathbf{E}_{0} e^{i(k_{R} z - \omega t) - k_{I} z}
$$

$$
<w> = \frac{1}{2} \gamma t^{2} \mathbf{E}_{0}^{2} e^{- 2 k_{I} z}
$$

所以
$$
\int_{0}^{\infty} <w> dz = \frac{\gamma t^{2} \mathbf{E}_{0}^{2}}{4 k_{I}}
$$
由于$2 k_{R} k_{I} = \gamma \mu \omega$，所以
$$
\frac{\gamma t^{2} \mathbf{E}_{0}^{2}}{4 k_{I}} =  \frac{1}{2} t^{2} \mathbf{E}_{0}^{2} \frac{k_{R}}{\mu \omega}
$$
即入射能量全部转化为焦耳热。

(b) 试证：当入射波电场垂直入射面时，反射和透射振幅满足：
$$
\vec{E}_{20\perp} = \frac{2 E_{10\perp} \vec{e}_{y}}{1 + \frac{\mu_{1} k_{2z}}{\mu_{2} k_{1} \cos \theta_{1}}}
$$
$$
\vec{E}_{30\perp} = \frac{1 - \frac{\mu_{1} k_{2z}}{\mu_{2} k_{1} \cos \theta_{1}}}{1 + \frac{\mu_{1} k_{2z}}{\mu_{2} k_{1} \cos \theta_{1}}} E_{10\perp} \vec{e}_{y}
$$
进一步当 $\mu_{1} = \mu_{2}, \gamma_{2} = 0$ 时，它们化为：
$$
\vec{E}_{20\perp} = \frac{2 \cos \theta_{1} \sin \theta_{2}}{\sin (\theta_{1} + \theta_{2})} E_{10\perp} \vec{e}_{y}
$$
$$
\vec{E}_{30\perp} = \frac{\sin (\theta_{2} - \theta_{1})}{\sin (\theta_{2} + \theta_{1})} E_{10\perp} \vec{e}_{y}
$$

证明：当入射波电场垂直入射时，电磁波在介质界面处满足以下边界条件：（下述所有电磁场和波矢均为复数）

电场的切向分量连续：
$$
E_{1y} + E_{3y} = E_{2y}
$$
磁场的切向分量连续：
$$
H_{1x} + H_{3x} = H_{2x}
$$
磁感应强度法向连续：
$$
\mu_{1}(H_{1z} + H_{3z}) = \mu_{2} H_{2z}
$$
入射波的磁场：
$$
\mathbf{H}_{1} = \frac{\mathbf{k}_{1} \times \mathbf{E}_{1}}{\omega \mu_{1}}
$$
反射波的磁场：
$$
\mathbf{H}_{3} = \frac{\mathbf{k}_{1} \times \mathbf{E}_{3}}{\omega \mu_{1}}
$$
透射波的磁场：
$$
\mathbf{H}_{2} = \frac{\mathbf{k}_{2} \times \mathbf{E}_{2}}{\omega \mu_{2}}
$$
将磁场分量代入边界条件：

磁场的 $x$分量连续：
$$
\frac{k_{1z}}{\mu_{1}} (E_{10\perp} - E_{30\perp}) = \frac{k_{2z}}{\mu_{2}} E_{20\perp}
$$
磁感应强度的z分量连续：
$$
k_{1x} (E_{10\perp} + E_{30\perp}) = k_{2x} E_{20\perp}
$$
从磁场的 $z$分量连续方程：
$$
\frac{k_{1x}}{\mu_{1}} (E_{10\perp} - E_{30\perp}) = \frac{k_{1x}}{\mu_{2}} E_{20\perp}
$$
$$
E_{10\perp} + E_{30\perp} = E_{20\perp}
$$
将此结果代入磁场强度的 $x$分量连续方程：
$$
\frac{k_{1z}}{\mu_{1}} (E_{10\perp} - E_{30\perp}) = \frac{k_{2z}}{\mu_{2}}  (E_{10\perp} +E_{30\perp})
$$
解得：
$$
E_{30\perp} = \frac{- \frac{k_{2z}}{\mu_{2}} + \frac{k_{1z}}{\mu_{1}}}{\frac{k_{1z}}{\mu_{1}} + \frac{k_{2z}}{\mu_{2}}} E_{10\perp}
$$

带入 $k_{1z} = k_{1} \cos \theta_{1}$，进一步整理为：
$$
E_{30\perp} = \frac{1 - \frac{\mu_{1} k_{2z}}{\mu_{2} k_{1} \cos \theta_{1}}}{1 + \frac{\mu_{1} k_{2z}}{\mu_{2} k_{1} \cos \theta_{1}}} E_{10\perp}
$$

透射振幅由 $E_{10\perp} + E_{30\perp} = E_{20\perp}$给出：
$$
E_{20\perp} = \frac{2 E_{10\perp}}{1 + \frac{\mu_{1} k_{2z}}{\mu_{2} k_{1} \cos \theta_{1}}}
$$

当 $\mu_{1} = \mu_{2}$ 且 $\gamma_{2} = 0$ 时， $k_{2z} = k_{2} \cos \theta_{2}$，并且 $k_{1} \sin \theta_{1} = k_{2} \sin \theta_{2}$：
$$
E_{20\perp} = \frac{2 \cos \theta_{1} \sin \theta_{2}}{\sin (\theta_{1} + \theta_{2})} E_{10\perp}
$$
$$
E_{30\perp} = \frac{\sin (\theta_{2} - \theta_{1})}{\sin (\theta_{2} + \theta_{1})} E_{10\perp}
$$

(c) 试证明：
$$
D_{\parallel} = \frac{4 \mu_{1} \cos \theta_{1} \text{Re} \left( \frac{k_{2} k_{2}z^{*}}{k_{2}^{*}} \right)}{\mu_{2} k_{1} \left| \frac{k_{2z}}{k_{2}} + \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1} \right|^{2}}
$$
$$
R_{\parallel} = \left| \frac{\frac{k_{2z}}{k_{2}} - \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1}}{\frac{k_{2z}}{k_{2}} + \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1}} \right|^{2}
$$
$$
D_{\parallel} + R_{\parallel} = 1
$$

证明：

对于平行时的能流透射与反射：用和（b）问相似的方法，容易得到
$$
E_{30 \parallel} = \frac{- \frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}} E_{10 \parallel}
$$

$$
E_{20 \parallel} = \frac{2 \cos \theta_{1}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}} E_{10 \parallel}
$$

所以能流的透射：
$$
D_{\parallel} = \frac{\mathbf{S}_{2 \parallel z}}{\mathbf{S}_{1 \parallel z}} =  \frac{\frac{1}{2 \mu_{2} \omega} (k_{2Rz} \mathbf{E}_{2 \parallel}^{2} - \Re [E_{2 \parallel z} (\mathbf{k}_{2} \cdot \mathbf{E}_{2 \parallel}^{*})])}{\frac{1}{2 \mu_{1} \omega} (k_{1Rz}  \mathbf{E}_{1 \parallel}^{2})}
$$

带入$\frac{\mathbf{E}_{2 \parallel}^{2}}{\mathbf{E}_{1 \parallel}^{2}} = \left|\frac{2 \cos \theta_{1}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}}\right|^{2}$以及 $k_{1Rz} = k_{1} \cos \theta_{1}$ 

由于 $\mathbf{k}_{2} \cdot \mathbf{E}_{2 \parallel} = 0$ ，所以
$$
\begin{gathered}
\Re [E_{2 \parallel z} (\mathbf{k}_{2} \cdot \mathbf{E}_{2 \parallel}^{*})] = - \Re [E_{2 \parallel z} (\mathbf{k}_{2} \cdot 2 \Im [\mathbf{E}_{2 \parallel}])] \\ =
- \Re [|\mathbf{E_{2 \parallel}}| \frac{k_{2z}}{|\mathbf{k_{2}}|} (\mathbf{k}_{2} \cdot 2 \Im [\mathbf{E}_{2 \parallel}])]  = \mathbf{E}_{2}^{2} \left( - \Re[k_{2} \frac{k_{2z}}{k_{2}}^{*}] + \Re[k_{2z}] \right)
\end{gathered}
$$
得到：
$$
\begin{gathered}
\frac{\frac{1}{2 \mu_{2} \omega} (k_{2Rz} \mathbf{E}_{2 \parallel}^{2} - \Re [E_{2 \parallel z} (\mathbf{k}_{2} \cdot \mathbf{E}_{2 \parallel}^{*})])}{\frac{1}{2 \mu_{1} \omega} (k_{1Rz}  \mathbf{E}_{1 \parallel}^{2})} = \frac{\mu_{1}}{\mu_{2} k_{1} \cos \theta_{1}} \left| \frac{2 \cos \theta_{1}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}} \right|^{2} \Re [k_{2} \frac{k_{2}z^{*}}{k_{2}^{*}}] \\ = \frac{4 \mu_{1} \cos \theta_{1} \text{Re} \left( \frac{k_{2} k_{2}z^{*}}{k_{2}^{*}} \right)}{\mu_{2} k_{1} \left| \frac{k_{2z}}{k_{2}} + \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1} \right|^{2}}
\end{gathered}
$$

$$
R_{\parallel} = \frac{\mathbf{S}_{3 \parallel z}}{\mathbf{S}_{1 \parallel z}} =  \frac{\frac{1}{2 \mu_{1} \omega} (k_{2Rz} \mathbf{E}_{3 \parallel}^{2})}{\frac{1}{2 \mu_{1} \omega} (k_{1Rz}  \mathbf{E}_{1 \parallel}^{2})}
$$
带入$\frac{\mathbf{E}_{3 \parallel}^{2}}{\mathbf{E}_{1 \parallel}^{2}} = \left| \frac{- \frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}} \right|^{2}$ 以及 $k_{1Rz} = k_{1} \cos \theta_{1}$ $k_{3Rz} = k_{3} \cos \theta_{1}$ 
$$
R_{\parallel} =  \left| \frac{- \frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}}{\frac{k_{2z}}{k_{2}} + \frac{\mu_{1} k_{2} \cos \theta_{1}}{\mu_{2} k_{1}}} \right|^{2}
$$

$$
\begin{gathered}
D_{\parallel} + R_{\parallel} = \frac{4 \mu_{1} \cos \theta_{1} \text{Re} \left( \frac{k_{2} k_{2}z^{*}}{k_{2}^{*}} \right)}{\mu_{2} k_{1} \left| \frac{k_{2z}}{k_{2}} + \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1} \right|^{2}} + \left| \frac{\frac{k_{2z}}{k_{2}} - \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1}}{\frac{k_{2z}}{k_{2}} + \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1}} \right|^{2} \\ = 
\frac{4 \mu_{1} \cos \theta_{1} \text{Re} \left( \frac{k_{2} k_{2}z^{*}}{k_{2}^{*}} \right) + \mu_{2} k_{1} \left| \frac{k_{2z}}{k_{2}} - \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1} \right|^{2}}{\mu_{2} k_{1} \left| \frac{k_{2z}}{k_{2}} + \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1} \right|^{2}} \\ =
\frac{\mu_{2} k_{1} \left(4 \frac{\mu_{1}}{\mu_{2} k_{1}} \cos \theta_{1} \text{Re} \left( \frac{k_{2} k_{2}z^{*}}{k_{2}^{*}} \right) +  \left| \frac{k_{2z}}{k_{2}} - \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1} \right|^{2}\right)}{\mu_{2} k_{1} \left| \frac{k_{2z}}{k_{2}} + \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1} \right|^{2}} \\ =
\frac{\mu_{2} k_{1} \left| \frac{k_{2z}}{k_{2}} + \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1} \right|^{2}}{\mu_{2} k_{1} \left| \frac{k_{2z}}{k_{2}} + \frac{k_{2} \mu_{1}}{k_{1} \mu_{2}} \cos \theta_{1} \right|^{2}} = 1
\end{gathered}
$$

其中利用了
$$
(z_{1} + z_{2}) (z_{1}^{*} + z_{2}^{*}) = (z_{1} - z_{2}) (z_{1}^{*} - z_{2}^{*}) + 4 \Re [z_{1} z_{2}^{*}]
$$

## 第7次作业

### 4. 谐振腔

书4.14, 4.15

4.14 一对无限大的平行理想导体板，相距为 $b$，电磁波沿平行于板面的 $z$ 方向传播，设波在 $x$ 方向是均匀的，求可能传播的波模和每种波模的截止频率。

 解亥姆霍兹方程 $(\nabla^{2} + k^{2}) u = 0$得
$$
u (x, y, z) = X(x) Y(y) Z(z) = (C_{1} \cos k_{x} x  + D_{1} \sin k_{x} x) (C_{2} \cos k_{y} y + D_{2} \sin k_{y} y) e^{i(k_{z} z - \omega t)}
$$
由于波在 $x$ 方向均匀，所以
$$
u (x, y, z) = (C_{2} \cos k_{y} y + D_{2} \sin k_{y} y)  e^{i(k_{z} z - \omega t)}
$$
对于 $E_{x}$ ，带入边界条件 $E_{x} \big|_{y = 0} = 0$ 以及$E_{x} \big|_{y = b} = 0$

得到
$$
E_{x} = A_{1} \sin\left(\frac{n\pi}{b} y\right) e^{i(k_{z} z - \omega t)}
$$
对于 $E_{z}$ ，带入边界条件 $E_{z} \big|_{y = 0} = 0$ 以及$E_{z} \big|_{y = b} = 0$

得到
$$
E_{z} = A_{3} \sin\left(\frac{n\pi}{b} y\right) e^{i(k_{z} z - \omega t)}
$$
对于 $E_{y}$ ，由 $\nabla \cdot \vec{E} = 0$

得到
$$
E_{y} = A_{2} \cos\left(\frac{n\pi}{b} y\right) e^{i(k_{z} z - \omega t)}
$$
且有
$$
\frac{n\pi}{b} A_{2} = i k_{z} A_{3}
$$
其中
$$
\frac{n \pi}b^{2} + k_{z}^{2} = \frac{\omega}c^{2}
$$
截止频率
$$
\omega_{c}^{(n)} = \frac{n \pi c}{b}
$$
4.15 证明整个谐振腔内的电场能量和磁场能量对时间的平均值总相等。

证明：
$$
\mathbf{E}(\mathbf{r}, t) = \text{Re}[\mathbf{E}(\mathbf{r}) e^{-i\omega t}]
$$

$$
\mathbf{B}(\mathbf{r}, t) = \text{Re}[\mathbf{B}(\mathbf{r}) e^{-i\omega t}]
$$
由于
$$
\nabla \cdot (\mathbf{E} \times \mathbf{H}^{*}) = \mathbf{H}^{*} \cdot (\nabla \times \mathbf{E}) - \mathbf{E} \cdot (\nabla \times \mathbf{H}^{*}) = i\omega (\mu_{0} |\mathbf{H}|^{2} - \varepsilon_{0} |\mathbf{E}|^{2})
$$
对两边进行体积积分，并应用散度定理：
$$
\int_{V} \nabla \cdot (\mathbf{E} \times \mathbf{H}^{*}) \, dV = \oint_{\partial V} (\mathbf{E} \times \mathbf{H}^{*}) \cdot d\mathbf{S}
$$
在谐振腔的金属边界上，电场的切向分量为零，磁场的法向分量为零，导致面积分为零。因此：

$$
\int_{V} (\mu_{0} |\mathbf{H}|^{2} - \varepsilon_{0} |\mathbf{E}|^{2}) \, dV = 0
$$
即
$$
\frac{1}{\mu_{0}} \int_{V} |\mathbf{B}|^{2} \, dV = \varepsilon_{0} \int_{V} |\mathbf{E}|^{2} \, dV
$$

这说明电场能量和磁场能量的时间平均值相等。

### 5. 电磁波的定向传播

作业：

(a) 书4.12, 4.13

4.12 论证矩形波导管内不存在 $TM_{m0}$ 或 $TM_{0n}$ 波。

证明：

对于矩形波导中的 $TM$ 波，有分量
$$
\begin{gathered}
E_{x} = A_{x} \cos k_{x} x \sin k_{y} y e^{i (k_{z} z - \omega t)} \\
E_{y} = A_{y} \sin k_{x} x \cos k_{y} y e^{i (k_{z} z - \omega t)} \\
E_{z} = A_{z} \sin k_{x} x \sin k_{y} y e^{i (k_{z} z - \omega t)}
\end{gathered}
$$
由 $\nabla \cdot \vec{E} = 0$，得到$- k_{x} A_{x} - k_{y} A_{y} + i k_{z} A_{z} = 0$

由 $B_{z} = 0$，得到  $k_{y} A_{x} = k_{x} A_{y}$ 

对于$k_{x}$ 或 $k_{y}$ 中一个为 $0$ 的传播模式：不妨假设 $k_{x} = 0$
则有
$$
\begin{gathered}
E_{x} = A_{x}  \sin k_{y} y e^{i (k_{z} z - \omega t)} \\
E_{y} = 0 \\
E_{z} = 0
\end{gathered}
$$
由于  $k_{y} A_{x} = k_{x} A_{y}$ ，所以 $A_{x} = 0$，即电场的三个方向分量均为零，故矩形波导管内不存在 $TM_{m0}$ 或 $TM_{0n}$ 波。

4.13 频率为 $30 \times 10^{9} \, \text{Hz}$ 的微波，在 $0.7 \, \text{cm} \times 0.4 \, \text{cm}$ 的矩形波导管中能以什么波模传播？在 $0.7 \, \text{cm} \times 0.6 \, \text{cm}$ 的矩形波导管中能以什么波模传播？

带入截止频率公式
$$
f_{c}^{(m,n)} = \frac{c}{2 \pi} \sqrt{\frac{m \pi}{L_{1}}^{2} + \frac{n \pi}{L_{2}}^{2}}
$$
在 $0.7 \, \text{cm} \times 0.4 \, \text{cm}$ 的矩形波导管中
$$
\begin{gathered}
f_{c}^{10} = 2.14 \times 10^{10} \text{Hz} \\
f_{c}^{01} = 3.75 \times 10^{10} \text{Hz}
\end{gathered}
$$
所以仅有$TE_{10}$ 模式

在 $0.7 \, \text{cm} \times 0.6 \, \text{cm}$ 的矩形波导管中
$$
\begin{gathered}
f_{c}^{10} = 2.14 \times 10^{10} \text{Hz} \\
f_{c}^{01} = 2.50 \times 10^{10} \text{HZ} \\
f_{c}^{11} = 3.29 \times 10^{10} \text{Hz}
\end{gathered}
$$
所以仅$TE_{10} ,\,  TE_{01}$ 模式可以传播

(b) 试证，电磁波定向传输中的$TM$波 ($B_{z} = 0$) 满足，

$$
(\nabla_{xy}^{2} + \mu\epsilon\omega^{2} - k_{z}^{2}) E_{z} = 0
$$

边界条件：
$$
E_{z} \bigg|_{\text{边界}} = 0
$$

横向电场和磁场：
$$
\vec{E}_{t} = \frac{i k_{z}}{\mu\epsilon\omega^{2} - k_{z}^{2}} \nabla_{xy} E_{z}
$$

$$
\vec{B}_{t} = \frac{-i \mu\epsilon\omega}{\mu\epsilon\omega^{2} - k_{z}^{2}} \nabla_{xy} \times \vec{E}_{z}
$$

并求表面(管壁)上的面电荷与面电流。

证明：
对于定向传输中的$TM$波 ，作如下拆分：
$$
\begin{gathered}
\vec{E} = (\vec{E}_{z} + \vec{E}_{t}) e^{i (k_{z} z - \omega t)} \\
\vec{B} = (\vec{B}_{z} + \vec{B}_{t}) e^{i (k_{z} z - \omega t)} \\
\nabla = \nabla_{xy} + \frac{\partial}{\partial_{z}} \hat{z}
\end{gathered}
$$
所以麦克斯韦方程化为
$$
\begin{gathered}
i \omega \vec{B}_{z} = \nabla_{xy} \times \vec{E}_{t} \\
- i \mu \epsilon \omega \vec{E}_{z} = \nabla_{xy} \times \vec{B}_{t} \\
i \omega \vec{B}_{t} = \nabla_{xy} \times \vec{E}_{z} + i k_{z} (\hat{z} \times \vec{E}_{t}) \\
- i \mu \epsilon \omega \vec{E}_{t} = \nabla_{xy} \times \vec{B}_{z} + i k_{z} (\hat{z} \times \vec{B}_{t}) \\
\nabla_{xy} \cdot \vec{E}_{t} + i k_{z} E_{z} = 0 \\
\nabla_{xy} \cdot \vec{B}_{t} + i k_{z} B_{z} = 0
\end{gathered}
$$
对于$TM$波，有 $B_{z} = 0$

所以 $\nabla_{xy} \times \vec{E}_{t} = 0$
$$
i \omega \nabla_{xy} \times \vec{B}_{t} = \nabla_{xy} \times (\nabla_{xy} \times \vec{E}_{z}) + i k_{z} \nabla_{xy} \times (\hat{z} \times \vec{E}_{t}) = - \nabla_{xy}^{2} \vec{E}_{z} + i k_{z} \nabla_{xy} \cdot E_{t} \hat{z}
$$
 所以
$$
\mu \epsilon \omega^{2} E_{z} = - \nabla_{xy}^{2} E_{z} + k_{z}^{2} E_{z}
$$
即
$$
(\nabla_{xy}^{2} + \mu\epsilon\omega^{2} - k_{z}^{2}) E_{z} = 0
$$
又有
$$
- i \mu \epsilon \omega \vec{E}_{t} = i k_{z} (\hat{z} \times  \frac{1}{i \omega} (\nabla_{xy} \times \vec{E}_{z} + i k_{z} (\hat{z} \times \vec{E}_{t}))) = \frac{k_{z}}{\omega} (\nabla_{xy} E_{z} - i k_{z} \vec{E}_{t})
$$
所以
$$
\begin{gathered}
i (\frac{k_{z}^{2}}{\omega} - \mu \epsilon \omega) \vec{E}_{t} = \frac{k_{z}}{\omega} \nabla_{xy} E_{z} \\
\vec{E}_{t} = \frac{i k_{z}}{\mu\epsilon\omega^{2} - k_{z}^{2}} \nabla_{xy} E_{z}
\end{gathered}
$$
所以
$$
\begin{gathered}
i \omega \vec{B}_{t} = \nabla_{xy} \times \vec{E}_{z} + i k_{z} (\hat{z} \times \vec{E}_{t}) = \nabla_{xy} \times \vec{E}_{z} + i k_{z} (\hat{z} \times \frac{i k_{z}}{\mu\epsilon\omega^{2} - k_{z}^{2}} \nabla_{xy} E_{z}) \\ = 
\nabla_{xy} \times \vec{E}_{z} - i k_{z} (\frac{i k_{z}}{\mu\epsilon\omega^{2} - k_{z}^{2}} \nabla_{xy} \times \vec{E}_{z}) = \frac{\mu \epsilon \omega^{2}}{\mu \epsilon \omega^{2} - k_{z}^{2}} \nabla_{xy} \times \vec{E}_{z}
\end{gathered}
$$
即
$$
\vec{B}_{t} = \frac{-i \mu\epsilon\omega}{\mu\epsilon\omega^{2} - k_{z}^{2}} \nabla_{xy} \times \vec{E}_{z}
$$
表面(管壁)上的面电荷与面电流：

面电荷
$$
\sigma_{f} = \hat{n} \cdot \vec{D} = \epsilon \hat{n} \cdot \vec{E}_{t} e^{i (k_{z} z - \omega t)}  = \epsilon \frac{i k_{z}}{\mu\epsilon\omega^{2} - k_{z}^{2}} \hat{n} \cdot \nabla_{xy} E_{z} e^{i (k_{z} z - \omega t)}
$$
面电流
$$
\begin{gathered}
\vec{i}_{f} = \hat{n} \times \vec{H} = \frac{1}{\mu} \hat{n} \times \vec{B}_{t} e^{i (k_{z} z - \omega t)} = \frac{1}{\mu} \frac{-i \mu\epsilon\omega}{\mu\epsilon\omega^{2} - k_{z}^{2}} \hat{n} \times  (\nabla_{xy} \times \vec{E}_{z}) e^{i (k_{z} z - \omega t)} \\ = \frac{1}{\mu} \frac{i \mu\epsilon\omega}{\mu\epsilon\omega^{2} - k_{z}^{2}} (\hat{n} \cdot \nabla_{xy}) \vec{E}_{z}  e^{i (k_{z} z - \omega t)}
\end{gathered}
$$

## 第8次作业

### 1. 电磁场的矢势和标势

作业：书5.1, 5.4

5.1 若把麦克斯韦方程组的所有矢量都分解为无旋的（纵场）和无散的（横场）两部分，写出 $E$ 和 $B$ 的这两部分在真空中所满足的方程式，并证明电场的无旋部分对应于库仑场。

分解：（$L$ 代表纵向，$T$ 代表横向）
$$
\begin{gathered}
\mathbf{E} = \mathbf{E}_{T} + \mathbf{E}_{L} \\
\mathbf{B} = \mathbf{B}_{T} + \mathbf{B}_{L}
\end{gathered}
$$
所以麦克斯韦方程组化为
$$
\begin{gathered}
\nabla \cdot \mathbf{E} = \nabla \cdot (\mathbf{E}_{T} + \mathbf{E}_{L}) = \nabla \cdot \mathbf{E}_{L} = \frac{\rho}{\epsilon_{0}} \\
\nabla \cdot \mathbf{B} = \nabla \cdot (\mathbf{B}_{T} + \mathbf{B}_{L}) = \nabla \cdot \mathbf{B}_{L} = 0 \\
\nabla \cdot \mathbf{B}_{L} = \nabla \times \mathbf{B}_{L} = 0 \\
\text{可以取适当横场使得} \, \mathbf{B}_{L} = 0 \\
\nabla \times \mathbf{E} = \nabla \times (\mathbf{E}_{T} + \mathbf{E}_{L}) = \nabla \times \mathbf{E}_{T} = - \frac{\partial}{\partial t} \mathbf{B}_{T} \\
\nabla \times \mathbf{B} = \nabla \times \mathbf{B}_{T} = \mu_{0}  \mathbf{J} + \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} \mathbf{E} = \mu_{0} (\mathbf{J}_{T} + \mathbf{J}_{L}) + \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} (\mathbf{E}_{T} + \mathbf{E}_{L})  = \mu_{0} \mathbf{J}_{T} + \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} \mathbf{E}_{T}\\
\mu_{0} \mathbf{J}_{L} + \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} \mathbf{E}_{L} = 0
\end{gathered}
$$
其中电场的无旋部分 $\mathbf{E}_{L}$ 满足 $\nabla \cdot \mathbf{E}_{L} = \frac{\rho}{\epsilon_{0}}$ ，即对应库仑场

5.4 设真空中矢势 $\mathbf{A}(\mathbf{x},t)$ 可用复数傅里叶展开为
$$
\mathbf{A}(\mathbf{x},t) = \sum_{k} \left[ \mathbf{a}_{k}(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_{k}^{*}(t) e^{-i \mathbf{k} \cdot \mathbf{x}} \right]
$$

其中 $\mathbf{a}_{k}^{*}$ 是 $\mathbf{a}_{k}$ 的复共轭。

(1) 证明 $\mathbf{a}_{k}$ 满足谐振子方程

$$
\frac{d^{2} \mathbf{a}_{k}(t)}{dt^{2}} + k^{2} c^{2} \mathbf{a}_{k}(t) = 0
$$

证明：真空中没有自由电荷和电流，所以
$$
\nabla \times (\nabla \times \mathbf{B}) = \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} (\nabla \times \mathbf{E}) = - \mu_{0} \epsilon_{0} \frac{\partial^{2}}{\partial t^{2}} \mathbf{B}
$$

$$
\nabla \times (\nabla \times (\nabla \times \mathbf{A})) = - \mu_{0} \epsilon_{0} \frac{\partial^{2}}{\partial t^{2}} \nabla \times \mathbf{A}
$$

$$
\nabla \times \left( \nabla \times (\nabla \times \mathbf{A}) + \mu_{0} \epsilon_{0} \frac{\partial^{2}}{\partial t^{2}} \mathbf{A} \right) = 0
$$

所以可以选取适当规范使得
$$
\nabla \times (\nabla \times \mathbf{A}) + \mu_{0} \epsilon_{0} \frac{\partial^{2}}{\partial t^{2}} \mathbf{A} = 0
$$

$$
\nabla \times (\nabla \times \sum_{k} \left[ \mathbf{a}_{k}(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_{k}^{*}(t) e^{-i \mathbf{k} \cdot \mathbf{x}} \right]) + \frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} \sum_{k} \left[ \mathbf{a}_{k}(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_{k}^{*}(t) e^{-i \mathbf{k} \cdot \mathbf{x}} \right] = 0
$$

所以在库伦规范下
$$
\nabla^{2} \mathbf{A} = \frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} \mathbf{A}
$$
所以
$$
- \mathbf{k}^{2} \mathbf{A} = \frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} \mathbf{A}
$$
即对应系数
$$
\frac{d^{2} \mathbf{a}_{k}(t)}{dt^{2}} + k^{2} c^{2} \mathbf{a}_{k}(t) = 0
$$
(2) 当选取规范 $\nabla \cdot \mathbf{A} = 0, \varphi = 0$ 时，证明 $\mathbf{k} \cdot \mathbf{a}_{k} = 0$

证明：
$$
\nabla \cdot \mathbf{A} = \nabla \cdot  \sum_{k} \left[ \mathbf{a}_{k}(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_{k}^{*}(t) e^{-i \mathbf{k} \cdot \mathbf{x}} \right] = 0
$$

$$
\therefore \,\, \nabla \cdot (\mathbf{a}_{k}(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_{k}^{*}(t) e^{-i \mathbf{k} \cdot \mathbf{x}}) = 0
$$

$$
\nabla \cdot (\mathbf{a}_{k}(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_{k}^{*}(t) e^{-i \mathbf{k} \cdot \mathbf{x}}) = (\nabla e^{i \mathbf{k} \cdot \mathbf{x}}) \cdot \mathbf{a}_{k} + (\nabla e^{- i \mathbf{k} \cdot \mathbf{x}}) \cdot \mathbf{a}_{k}^{*} = i e^{i \mathbf{k} \cdot \mathbf{x}} \mathbf{k} \cdot \mathbf{a}_{k} - i e^{- i \mathbf{k} \cdot \mathbf{x}} \mathbf{k} \cdot \mathbf{a}_{k}^{*} = 0
$$

对于任意 $\mathbf{x}$ 成立，所以$\mathbf{k} \cdot \mathbf{a}_{k} = 0$

(3) 把 $\mathbf{E}$ 和 $\mathbf{B}$ 用 $\mathbf{a}_{k}$ 和 $\mathbf{a}_{k}^{*}$ 表示出来
$$
\mathbf{E} = - \frac{\partial}{\partial t} \mathbf{A} = - \sum_{k} \left[ \frac{d}{d t} \mathbf{a}_{k}(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \frac{d}{d t} \mathbf{a}_{k}^{*}(t) e^{-i \mathbf{k} \cdot \mathbf{x}} \right]
$$

$$
\begin{gathered}
\mathbf{B} = \nabla \times \mathbf{A} = \sum_{k} \left[ (\nabla e^{i \mathbf{k} \cdot \mathbf{x}}) \times \mathbf{a}_{k}(t)  + (\nabla e^{-i \mathbf{k} \cdot \mathbf{x}}) \times \mathbf{a}_{k}^{*}(t) \right] \\ = 
i \sum_{k} e^{i \mathbf{k} \cdot \mathbf{x}} \mathbf{k} \times \mathbf{a}_{k} (t) - e^{-i \mathbf{k} \cdot \mathbf{x}} \mathbf{k} \times \mathbf{a}_{k}^{*} (t)
\end{gathered}
$$

### 2. 推迟势

作业： 
(a) 书5.5 

5.5 设 $\mathbf{A}$ 和 $\phi$ 是满足洛伦兹规范的矢势和标势

(1) 引入一矢量函数 $\mathbf{Z} (\vec{x}, t)$（赫兹矢量），若令 $\phi = -\nabla \cdot \mathbf{Z}$，证明 $\mathbf{A} = \frac{1}{c^{2}} \frac{\partial \mathbf{Z}}{\partial t}$

由于 $\nabla \cdot \mathbf{A} + \frac{1}{c^{2}} \frac{\partial}{\partial t} \phi = 0$
$$
\nabla \cdot \mathbf{A} =  \frac{1}{c^{2}} \frac{\partial}{\partial t} \nabla \cdot \mathbf{Z}
$$
所以可以选取合适的 $\mathbf{Z}$ 使得
$$
\mathbf{A} = \frac{1}{c^{2}} \frac{\partial \mathbf{Z}}{\partial t}
$$
(2) 若令 $\rho = -\nabla \cdot \mathbf{P}$ 证明 $\mathbf{Z}$ 满足方程 $\nabla^{2} \mathbf{Z} - \frac{1}{c^{2}} \frac{\partial^{2} \mathbf{Z}}{\partial t^{2}} = -c^{2} \mu_{0} \mathbf{P}$，写出在真空中的推迟解

证明：
$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_{0}}
$$

$$
\nabla \cdot (- \nabla \phi - \frac{\partial}{\partial t} \mathbf{A}) = \frac{\rho}{\epsilon_{0}}
$$

$$
\nabla \cdot (- \nabla (- \nabla \cdot \mathbf{Z}) - \frac{\partial}{\partial t} \frac{1}{c^{2}} \frac{\partial \mathbf{Z}}{\partial t}) = \frac{- \nabla \cdot \mathbf{P}}{\epsilon_{0}}
$$

$$
\nabla^{2} (\nabla \cdot \mathbf{Z}) - \frac{1}{c^{2}} \frac{\partial}{\partial t} (\nabla \cdot \mathbf{Z}) = - c^{2} \mu_{0} (\nabla \cdot \mathbf{P})
$$

所以可以选取合适的 $\mathbf{Z}$ 以及 $\mathbf{P}$ 使得
$$
\nabla^{2} \mathbf{Z} - \frac{1}{c^{2}} \frac{\partial^{2} \mathbf{Z}}{\partial t^{2}} = -c^{2} \mu_{0} \mathbf{P}
$$
在真空中，$\mathbf{Z}$ 存在推迟解
$$
\mathbf{Z} (\mathbf{r} ,t) = \int \frac{c^{2} \mu_{0} \mathbf{P} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})}{4 \pi |\mathbf{r} - \mathbf{r'}|} d \tau'
$$
(3) 证明 $\mathbf{E}$ 和 $\mathbf{B}$ 可通过 $\mathbf{Z}$ 用下列公式表出：
$$
\mathbf{E} = \nabla \times (\nabla \times \mathbf{Z}) - c^{2} \mu_{0} \mathbf{P}, \quad \mathbf{B} = \frac{1}{c^{2}} \frac{\partial}{\partial t} \nabla \times \mathbf{Z}
$$
证明：
$$
\mathbf{E} = - \nabla \phi - \frac{\partial}{\partial t} \mathbf{A} =  \nabla (\nabla \cdot \mathbf{Z}) - \frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} \mathbf{Z} = \nabla (\nabla \cdot \mathbf{Z}) - \nabla^{2} \mathbf{Z} - c^{2} \mu_{0} \mathbf{P} = \nabla \times (\nabla \times \mathbf{Z}) - c^{2} \mu_{0} \mathbf{P}
$$

$$
\mathbf{B} = \nabla \times \mathbf{A} = \nabla \times \frac{1}{c^{2}} \frac{\partial \mathbf{Z}}{\partial t} = \frac{1}{c^{2}} \frac{\partial}{\partial t} \nabla \times \mathbf{Z}
$$

(b) 试证，库伦规范的解满足 $\nabla \cdot \mathbf{A} = 0$

证明：库伦规范下的解为
$$
\phi (\mathbf{r}, t) = \int \frac{\rho (\mathbf{r}, t)}{4 \pi \epsilon_{0} |\mathbf{r} - \mathbf{r'}|} d \tau'
$$

$$
\mathbf{A} (\mathbf{r}, t) = \int \frac{\mu_{0} (\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}))}{4 \pi |\mathbf{r} - \mathbf{r'}|} d \tau'
$$

所以矢势的散度为：（以下用 $\nabla'_{r'}$ 表示仅仅对于空间部分的散度，即不考虑散度中推迟项带来的影响）
$$
\begin{gathered}
\nabla \cdot \mathbf{A} =  \nabla \cdot \int \frac{\mu_{0} (\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}))}{4 \pi |\mathbf{r} - \mathbf{r'}|} d \tau' \\ = 
\frac{\mu_{0}}{4 \pi} \int \left( - \nabla' \frac{1}{|\mathbf{r} - \mathbf{r'}|}\right) \cdot \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) + \\ 
\frac{1}{|\mathbf{r} - \mathbf{r'}|} \nabla \cdot \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) d \tau' \\ =
\frac{\mu_{0}}{4 \pi} \int - \nabla' \frac{\left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right)}{|\mathbf{r} - \mathbf{r'}|} + \\
\frac{1}{|\mathbf{r} - \mathbf{r'}|} \nabla' \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) + \\
\frac{1}{|\mathbf{r} - \mathbf{r'}|} \frac{\partial}{\partial t} \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) \cdot \nabla (t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) \, d \tau' \\ =
\frac{\mu_{0}}{4 \pi} \oiint_{S'} - d \mathbf{S'} \cdot \frac{\left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right)}{|\mathbf{r} - \mathbf{r'}|}  + \\
\int \frac{1}{|\mathbf{r} - \mathbf{r'}|} \nabla'_{r'} \cdot \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) + \\
\frac{1}{|\mathbf{r} - \mathbf{r'}|} \frac{\partial}{\partial t} \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) \cdot (\nabla (t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) + \nabla' (t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})) \, d \tau' \\ = 
\frac{\mu_{0}}{4 \pi} \int \frac{1}{|\mathbf{r} - \mathbf{r'}|} \left( \nabla'_{r'} \cdot \mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} {\nabla'_{r'}}^{2} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) \, d \tau' \\ = 
\frac{\mu_{0}}{4 \pi} \int \frac{1}{|\mathbf{r} - \mathbf{r'}|} (\nabla'_{r'} \cdot \mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) + \frac{\partial}{\partial t} \rho (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})) \, d \tau' = 0
\end{gathered}
$$
其中最后一步是流守恒的直接结果。

## 第9次作业

### 4. 电势的多极展开，电多矩，带电体在外场中的能量，受力和力矩，矢量势的多极展开，磁多矩

作业：

(a) 书3.14, 3.15

#### 3.14 电荷体均匀分布的刚性小球

电荷体均匀分布的刚性小球，其总电荷为 $Q$，半径为 $R_{0}$，它以角速度 $\omega$ 绕自身某一直径转动，求：

1.它的磁矩；
$$
\vec{j} (r, \theta, \phi) = \frac{3 Q}{4 \pi R_{0}^{3}} \omega r \sin \theta \hat{\phi}
$$
所以磁矩为
$$
\begin{gathered}
\vec{m} = \frac{1}{2} \int \vec{r} \times \vec{j} d \tau = \int_{0}^{\pi} \int_{0}^{R_{0}} r \sin \theta \frac{3 Q}{8 \pi R_{0}^{3}} \omega r \sin \theta \, 2 \pi r^{2} \sin \theta \, d \theta \, d r \hat{z} \\ = \frac{Q R_{0}^{2}}{5} \omega \hat{z}
\end{gathered}
$$
2.它的磁矩与自转动量矩之比（设质量 $m_{0}$ 是均匀分布的）。
$$
\frac{m}{I} = \frac{\frac{Q R_{0}^{2}}{5} \omega}{\frac{2}{5} m R_{0}^{2} \omega} = \frac{Q}{2 m}
$$

#### 3.15 小永磁体的受力

有一块磁矩为 $m$ 的小永磁体，位于一块磁导率非常大的实物的平坦界面附近的真空中，求作用在小永磁体上的力 $F$。

由于磁导率非常大，所以在界面处磁感应强度没有切向分量

利用镜像法求解磁矩附近的磁场：（$a$为磁矩离界面的距离， $\alpha$为 $m$ 与界面法线的夹角，假设界面法线为 $\hat{y}$ 方向，磁矩在界面方向上的投影分量为 $\hat{x}$ 方向）
$$
\vec{F} = (\vec{m} \cdot \nabla) \vec{B}  = -  \frac{3 \mu_{0} m^{2}}{64 \pi a^{4}} (1 + \cos^{2} \alpha) \hat{y}
$$
具体计算过程见（d），因为计算过程完全相同，所以此处不再展示。

(b) 半轴为 $a, b$ 和 $c$ 的椭球体内均匀带电，总电量为 $Q$，求它的电偶极矩，电四极矩以及准确到四极矩的在远处的电势。

提示：用广义球坐标 $x = a r \sin\theta \cos\phi, y = b r \sin\theta \sin\phi, z = c r \cos\theta$ 计算积分。

偶极矩	
$$
\vec{p} = \int \vec{r} \rho \, d \tau = 0
$$
四极矩
$$
D_{ij} = \int \rho (3r_{ij} - \delta_{ij} r^{2}) \, d \tau
$$
所以
$$
\begin{gathered}
D_{11} = \int \frac{Q}{\frac{4 \pi}{3} abc} (2 x^{2} - (y^{2} + z^{2})) \, dxdydz \\ =
\int \frac{3Q}{4 \pi abc} (2(a r \sin\theta \cos\phi)^{2} - (b r \sin\theta \sin\phi)^{2} - (c r \cos\theta)^{2}) abc \, r^{2} dr \, \sin \theta d \theta \, d \phi \\ =
\frac{3 Q}{4 \pi}  (2 a^{2} \int_{0}^{1} r^{4} dr \int_{0}^{\pi} \sin^{3} \theta d \theta \int_{0}^{2 \pi} \cos^{2} \phi d \phi) \\ - (b^{2} \int_{0}^{1} r^{4} dr \int_{0}^{\pi} \sin^{3} \theta d \theta \int_{0}^{2 \pi} \sin^{2} \phi d \phi) - (c^{2} \int_{0}^{1} r^{4} dr \int_{0}^{\pi} \cos^{2} \theta \sin \theta d \theta \int_{0}^{2 \pi} d \phi) \\ =
\frac{3Q}{4 \pi} (\frac{8 \pi}{15} a^{2} - \frac{4 \pi}{15} b^{2} - \frac{4 \pi}{15} c^{2}) \\ =
\frac{Q}{5} (2 a^{2} - b^{2} - c^{2})
\end{gathered}
$$
同理，积分得
$$
\begin{gathered}
D_{22} = \frac{Q}{5} (2 b^{2} - a^{2} - c^{2}) \\
D_{33} = \frac{Q}{5} (2 c^{2} - a^{2} - b^{2})
\end{gathered}
$$
其余分量
$$
D_{ij} = \int 3 \rho x_{i} x_{j} d \tau
$$
积分中均正比于坐标的一次分量，由于对称性，此项为 $0$

在远处的电势
$$
\phi = \frac{1}{4 \pi \epsilon_{0}} \left(\frac{Q}{r} + \frac{Q}{10 r^{5}} (a^{2} (3 x^{2} - r^{2}) + b^{2} (3 y^{2} - r^{2}) + c^{2} (3 z^{2} - r^{2}))\right)
$$
(c) 设有两个偶极子，它们的偶极矩大小相等，并都指向 $z$ 方向，其一位于原点，另一位在：

i. $\theta = \frac{\pi}{2}$，距原点为 $R$；

ii. $\theta = 0$，距原点为 $R$。

求两种情况的相互作用能和相互作用力。

相互作用能

i. $\theta = \frac{\pi}{2}$，距原点为 $R$
$$
W = - \vec{p} \cdot \vec{E} = \frac{p^{2}}{4 \pi \epsilon_{0} R^{3}}
$$
 ii. $\theta = 0$，距原点为 $R$
$$
W = - \vec{p} \cdot \vec{E} = - \frac{p^{2}}{2 \pi \epsilon_{0} R^{3}}
$$
相互作用力

i
$$
\vec{F} = - \nabla W = \frac{3 p^{2} \vec{R}}{4 \pi \epsilon_{0} R^{5}}
$$
ii
$$
\vec{F} = - \nabla W = - \frac{3 p^{2} \vec{R}}{2 \pi \epsilon_{0} R^{5}}
$$
(d) 有一电矩为 $\vec{p}$ 的偶极子，位于距无限大导体平面为 $a$ 处，求导体对偶极子的吸引力。

利用镜像法求解偶极子附近的磁场：（$\vec{p'}$ 为像偶极子，$a$为磁矩离界面的距离， $\alpha$为 $m$ 与界面法线的夹角，假设界面法线为 $\hat{y}$ 方向，磁矩在界面方向上的投影分量为 $\hat{x}$ 方向）
$$
\begin{gathered}
\vec{F} = (\vec{p} \cdot \nabla)\vec{E} = \vec{p} \cdot \left( \nabla \frac{1}{4 \pi \epsilon_{0}} \frac{3 (\vec{p'} \cdot \vec{r}) \vec{r} - r^{2} \vec{p'}}{r^{5}} \right) \\ =
\vec{p} \cdot \frac{3}{4 \pi \epsilon_{0}} \left( \frac{\vec{p'} \vec{r}}{r^{5}} - \frac{5 (\vec{p'} \cdot \vec{r}) \vec{r} \vec{r}}{r^{7}} + \frac{(\vec{p'} \cdot \vec{r}) \overset{\leftrightarrow}{I}}{r^{5}} + \frac{\vec{r} \vec{p'}}{r^{5}} \right) \\ = 
\frac{3}{4 \pi \epsilon_{0}} \frac{(\vec{p} \cdot \vec{p'}) r^{2} \vec{r} - 5 (\vec{p'} \cdot \vec{r}) (\vec{p} \cdot \vec{r}) \vec{r} + (\vec{p'} \cdot \vec{r}) r^{2} \vec{p} + (\vec{p} \cdot \vec{r}) r^{2} \vec{p'}}{r^{7}} \\ =
\frac{3}{4 \pi \epsilon_{0}} \frac{p^{2} \cos (2 \alpha) (2a)^{3} - 5 p^{2} \cos^{2} \alpha (2a)^{3} + 2 p^{2} \cos^{2} \alpha (2a)^{3}}{(2a)^{7}} \hat{y} \\ =
- \frac{3 p^{2}}{64 \pi \epsilon_{0} a^{4}} (2 \cos^{2} \alpha + \sin^{2} \alpha) \hat{y} \\ =
- \frac{3 p^{2}}{64 \pi \epsilon_{0} a^{4}} (1 + \cos^{2} \alpha) \hat{y}
\end{gathered}
$$
(e) 在后面静磁场讨论中将给出一个由电流密度 $\vec{j}$ 描述的稳恒电流体系在外磁场中的能量为：
$$
W = \int d\tau \vec{j} \cdot \vec{A}
$$
其中$\vec{A}$是外磁场的矢势。请利用上面结果证明这个电流体系的多级展开为
$$
W = \sum_{n=0}^{\infty} W_{n}, \quad W_{n} = \frac{1}{n!} \sum_{i_{1},\cdots,i_{n}} \vec{J}_{i_{1}\cdots i_{n}} \cdot \left[ \frac{\partial^{n}}{\partial x_{i_{1}}\cdots \partial x_{i_{n}}} \vec{A}(\vec{r}) \right]
$$
特别地，
$$
W_{0} = 0, \quad W_{1} = \vec{m} \cdot \vec{B}
$$

证明：
$$
\begin{gathered}
W = \int d\tau \vec{j} \cdot \vec{A} = \int d \tau \vec{j} \cdot \sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}} \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{A} (\vec{0}) \\ = 
\sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} \vec{J}_{i_{1} i_{2} \cdots i_{n}} \cdot \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{A} (\vec{0}) = \sum_{n} W_{n}
\end{gathered}
$$
其中
$$
W_{n} = \frac{1}{n!} \sum_{i_{1},\cdots,i_{n}} \vec{J}_{i_{1}\cdots i_{n}} \cdot \left[ \frac{\partial^{n}}{\partial x_{i_{1}}\cdots \partial x_{i_{n}}} \vec{A}(\vec{0}) \right]
$$
$$
\vec{J}_{i_{1} i_{2} \cdots i_{n}} = \int d \tau \vec{j} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}}
$$
特别地，由于该体系是由电流密度 $\vec{j}$ 描述的稳恒电流体系，所以有 $\nabla \cdot \vec{j} = 0$ 

所以
$$
\begin{gathered}
\int \vec{j} d \tau = \int \nabla \cdot (\vec{j} \vec{r}) - (\nabla \cdot \vec{j}) \vec{r} d \tau \\ =
\oint_{S} d \vec{S} \cdot \vec{j} \vec{r} = 0
\end{gathered}
$$

$$
W_{0} = \int d \tau \vec{j} \cdot \vec{A} (\vec{0}) = 0
$$
$$
\begin{gathered}
W_{1} = \frac{1}{1!} \sum_{i} \vec{J}_{i} \cdot \frac{\partial}{\partial x_{i}} \vec{A} (\vec{0}) = \int j_{k} x_{i} d \tau \frac{\partial}{\partial x_{i}} A_{k} (\vec{0}) \\ =
\frac{1}{2} \int  ((j_{k} x_{i} - j_{i} x_{k}) + (j_{k} x_{i} + j_{i} x_{k})) d \tau  \frac{\partial}{\partial x_{i}} A_{k}  \\ = 
\frac{1}{2} \int (j_{k} x_{i} - j_{i} x_{k})  d \tau (\partial_{i} A_{k} - \partial_{k} A_{i}) + \int  j_{i} x_{k} d \tau \partial_{i} A_{k} \\ =
\frac{1}{2} \int (\vec{r} \times \vec{j}) d \tau \cdot (\nabla \times \vec{A})  + \int \partial_{i} (j_{i} x_{k} A_{k}) - A_{k} \partial_{i} (j_{i} x_{k})  d \tau\\ = 
\vec{m} \cdot \vec{B} - \int A_{k} (x_{k} \partial_{i} j_{i} + j_{i} \delta_{ik}) d \tau \\ =
\vec{m} \cdot \vec{B} - \int \vec{A} \cdot \vec{j} d \tau  = \vec{m} \cdot \vec{B}
\end{gathered}
$$
(f) 试证电流体系在外磁场中受力的多级展开为
$$
\vec{F} = \sum_{n=0}^{\infty} \vec{F}_{n}, \quad \vec{F}_{n} = \frac{1}{n!} \sum_{i_{1},\cdots,i_{n}} \vec{J}_{i_{1}\cdots i_{n}} \times \left[ \frac{\partial^{n}}{\partial x_{i_{1}}\cdots \partial x_{i_{n}}} \vec{B}(\vec{r}) \right]
$$
特别地，
$$
\vec{F}_{0} = 0, \quad \vec{F}_{1} = (\nabla \vec{B}) \cdot \vec{m}
$$

证明：
$$
\begin{gathered}
\vec{F} = \int d \tau \vec{j} \times \vec{B} = \int d \tau \vec{j} \times \sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}} \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{B} (\vec{0}) \\ = 
\sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} \vec{J}_{i_{1} i_{2} \cdots i_{n}} \times \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{B} (\vec{0}) = \sum_{n} \vec{F}_{n}
\end{gathered}
$$
其中
$$
W_{n} = \frac{1}{n!} \sum_{i_{1},\cdots,i_{n}} \vec{J}_{i_{1}\cdots i_{n}} \times \left[ \frac{\partial^{n}}{\partial x_{i_{1}}\cdots \partial x_{i_{n}}} \vec{B}(\vec{0}) \right]
$$

$$
\vec{J}_{i_{1} i_{2} \cdots i_{n}} = \int d \tau \vec{j} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}}
$$

特别地，
$$
\vec{F}_{0} = \int \vec{j} d \tau \times \vec{B} (\vec{0}) = \vec{0}
$$

$$
\begin{gathered}
\vec{F}_{1} = \frac{1}{1!} \int \vec{j} x_{i} d \tau \times \partial_{i} \vec{B} (\vec{0})  = \int j_{l} x_{i} d \tau \epsilon_{lmn} \partial_{i} B_{m} \vec{e}_{n} \\ =
\epsilon_{ilk} m_{k} \epsilon_{lmn} \partial_{i} B_{m} \vec{e}_{n} \\ = 
(\delta_{in} \delta_{km} - \delta_{im} \delta_{kn}) m_{k} \partial_{i} B_{m} \vec{e}_{n} \\ = 
m_{k} \partial_{i} B_{k} \vec{e}_{k}  = (\nabla \vec{B}) \cdot \vec{m}
\end{gathered}
$$

 (g) 试证电流体系在外磁场中受力矩的多级展开为
$$
\vec{L} = \sum_{n=0}^{\infty} \vec{L}_{n}, \quad \text{其中:} \quad \vec{J}_{i_{1}\cdots i_{n}} = \sum_{i} \vec{e}_{i} J^{i}_{i_{1}\cdots i_{n}}
$$
$$
\vec{L}_{n} = \frac{1}{n!} \sum_{i,i_{1},\cdots,i_{n}} \left\{ \vec{J}_{i i_{1}\cdots i_{n}} \left[ \frac{\partial^{n}}{\partial x_{i_{1}}\cdots \partial x_{i_{n}}} B_{i}(\vec{r}) \right] - J^{i}_{i i_{1}\cdots i_{n}} \left[ \frac{\partial^{n}}{\partial x_{i_{1}}\cdots \partial x_{i_{n}}} \vec{B}(\vec{r}) \right] \right\}
$$
特别地，
$$
\vec{L}_{0} = \vec{m} \times \vec{B}
$$

证明：
$$
\begin{gathered}
\vec{L} = \int d \tau \vec{r} \times (\vec{j} \times \vec{B}) = \int d \tau \vec{j} (\vec{r} \cdot \vec{B}) - \vec{B} (\vec{r} \cdot \vec{j}) \\= 
\int \vec{j} \left(\vec{r} \cdot \sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}} \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{B} (\vec{0}) \right) \\ - (\vec{j} \cdot \vec{r})  \sum_{n} \frac{1}{n!} \sum_{i_{1}, i_{2}, \cdots, i_{n}} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}} \frac{\partial^{n}}{\partial x_{i_{1}} \partial x_{i_{2}} \cdots \partial x_{i_{n}}} \vec{B} (\vec{0}) d \tau \\ = 
\sum_{n} \frac{1}{n!} \sum_{i,i_{1},\cdots,i_{n}} \left\{ \vec{J}_{i i_{1}\cdots i_{n}} \left[ \frac{\partial^{n}}{\partial x_{i_{1}}\cdots \partial x_{i_{n}}} B_{i}(\vec{r}) \right] - J^{i}_{i i_{1}\cdots i_{n}} \left[ \frac{\partial^{n}}{\partial x_{i_{1}}\cdots \partial x_{i_{n}}} \vec{B}(\vec{r}) \right] \right\}= \sum_{n} \vec{L}_{n}
\end{gathered}
$$
其中
$$
\vec{L}_{n} = \frac{1}{n!} \sum_{i,i_{1},\cdots,i_{n}} \left\{ \vec{J}_{i i_{1}\cdots i_{n}} \left[ \frac{\partial^{n}}{\partial x_{i_{1}}\cdots \partial x_{i_{n}}} B_{i}(\vec{r}) \right] - J^{i}_{i i_{1}\cdots i_{n}} \left[ \frac{\partial^{n}}{\partial x_{i_{1}}\cdots \partial x_{i_{n}}} \vec{B}(\vec{r}) \right] \right\}
$$

$$
\begin{gathered}
\vec{J}_{ii_{1} i_{2} \cdots i_{n}} = \int d \tau \vec{j} x_{i} x_{i_{1}} x_{i_{2}} \cdots x_{i_{n}} \\
\end{gathered}
$$

特别地
$$
\begin{gathered}
\vec{L}_{0} = \frac{1}{1!} \left(\int d \tau \vec{j} x_{i} B_{i} - \int d \tau j_{i} x_{i} \vec{B} \right) \\ =
\int d \tau j_{j} x_{i} B_{i} - \int d \tau j_{i} x_{i} B_{j} \\ = 
\epsilon_{ijk} m_{k} B_{i} - 0 = \vec{m} \times \vec{B}
\end{gathered}
$$

### 5. 辐射电磁场 (书第五章第3、4、5节) 一般性质，多极展开，电偶极辐射，电四极辐射，磁偶极辐射

作业：

(a) 书5.10, 5.11, 5.12, 5.13

#### 5.10 均匀永磁磁体小球的辐射场和能流

半径为 $R_{0}$ 的均匀永磁磁体小球，磁化强度为 $\vec{M}_{0}$，球以恒定角速度 $\omega$ 绕通过球心而垂直于 $\vec{M}_{0}$ 的轴旋转，设 $R_{0} \omega \ll c$，求辐射场和能流。

提示：

- $\vec{M}_{0}$ 以角速度 $\omega$ 转动，可分解为相位差为 $\pi/2$ 的互相垂直的线振动（参阅第四章习题5）。
- 直角坐标基矢与球坐标基矢的变换关系为：
  $$
  \begin{pmatrix}
  e_{x} \\
  e_{y} \\
  e_{z}
  \end{pmatrix}
  =
  \begin{pmatrix}
  \sin\theta \cos\phi & \cos\theta \cos\phi & -\sin\phi \\
  \sin\theta \sin\phi & \cos\theta \sin\phi & \cos\phi \\
  \cos\theta & -\sin\theta & 0
  \end{pmatrix}
  \begin{pmatrix}
  e_{r} \\
  e_{\theta} \\
  e_{\phi}
  \end{pmatrix}
  $$

答案：
$$
\vec{B} = \frac{\mu_{0} \omega^{2} R_{0}^{3} M_{0}}{3 c^{2} R} (e_{\theta} \cos\theta + i e_{\phi}) e^{i(kR - \omega t + \phi)}
$$

$$
\vec{E} = \frac{\mu_{0} \omega^{2} R_{0}^{3} M_{0}}{3 c R} (i e_{\theta} - e_{\phi} \cos\theta) e^{i(kR - \omega t + \phi)}
$$

$$
\vec{S} = \frac{\mu_{0} \omega^{4} R_{0}^{6} M_{0}^{2}}{18 c^{3} R^{2}} (1 + \cos^{2}\theta) e_{R}
$$

#### 5.11 带电粒子的辐射场和能流

带电粒子 $e$ 作半径为 $a$ 的非相对论性圆周运动，回旋频率为 $\omega$。求远处的辐射电磁场和辐射能流。

答案：
$$
\vec{B} = \frac{\mu_{0} \omega^{2} e a}{4 \pi c R} (e_{\theta} \cos\theta - i e_{\phi}) e^{i(kR - \omega t + \phi)}
$$

$$
\vec{E} = \frac{\mu_{0} \omega^{2} e a}{4 \pi c^{2} R} (e_{\theta} \cos\theta + i e_{\phi}) e^{i(kR - \omega t + \phi)}
$$

$$
\vec{S} = \frac{\mu_{0} \omega^{4} e^{2} a^{2}}{32 \pi^{2} c R^{2}} (1 + \cos^{2}\theta) e_{R}
$$

#### 5.12 电偶极子的辐射场和能流

设有一电矩振幅为 $p_{0}$，频率为 $\omega$ 的电偶极子距理想导体平面为 $a/2$ 处，$p_{0}$ 平行于导体平面。设 $a \ll \lambda$，求在 $R \gg \lambda$ 处的电磁场及辐射能流。

答案：
$$
\vec{E} = \frac{\mu_{0} \omega^{3} p_{0} a}{4 \pi c R} (-\cos^{2}\theta \cos\phi e_{\theta} + \cos\theta \sin\phi e_{\phi}) e^{i(kR - \omega t)}
$$

$$
\vec{B} = \frac{\mu_{0} \omega^{3} p_{0} a}{4 \pi c^{2} R} (-\cos\theta \sin\phi e_{\theta} + \cos^{2}\theta \cos\phi e_{\phi}) e^{i(kR - \omega t)}
$$

$$
\vec{S} = \frac{\mu_{0} \omega^{6} p_{0}^{2} a^{2}}{32 \pi^{2} c^{3} R^{2}} (\cos^{4}\theta \cos^{2}\phi + \cos^{2}\theta \sin^{2}\phi) e_{R}
$$

#### 5.13 绝缘介质球的辐射场和能流

设有线偏振平面波 $\vec{E} = E_{0} e^{i(kz - \omega t)}$ 照射到一个绝缘介质球上（$E_{0}$ 在 $z$ 方向），引起介质球极化，极化矢量 $\vec{P}$ 是随时间变化的，因而产生辐射。设平面波的波长 $2\pi/k$ 远大于球半径 $R_{0}$，求介质球所产生的辐射场和能流。

答案：辐射场就是总电偶极矩为
$$
\vec{p} = \frac{4 \pi \epsilon_{0} (\epsilon - \epsilon_{0})}{\epsilon + 2 \epsilon_{0}} R_{0}^{3} E_{0} e^{-i\omega t}
$$
的电偶极辐射场。

5.12题提示: 下一章介绍的镜像法给出导体表面的感应电荷可以用导体内对称点偶矩大小相同方向相反的电偶极子代表

5.13题提示: 下一章的讨论给出介质球的极化效应对球外的效应可以用位于球心的电偶极子所产生的电场代表，这个电偶极子的偶极矩为
$$
\vec{p} = 4\pi \frac{\epsilon_{0} (\epsilon - \epsilon_{0})}{\epsilon + 2\epsilon_{0}} R^{3}_{0} \vec{E}
$$

(b) 两个相互垂直的电偶极振子，具有相同的振幅 $p_{0}$ 和相同的角频率 $\omega$，但位相差为 $\Phi$，试求系统的平均辐射角分布。

答案: 设偶极子在原点，分别沿 $x$ 和 $y$ 轴方向，
$$
\frac{dI}{d\Omega} = \frac{\mu_{0} p_{0}^{2} \omega^{4}}{32 \pi^{2} c} (1 + \cos^{2}\theta - \sin^{2}\theta \sin 2\phi \cos\Phi)
$$

(c) 两个方向相同相距为 $\frac{\lambda}{4}$ 的电偶极子沿 $z$ 轴排列 ($\lambda$ 为电磁辐射波长)，它们位相差为 $\Phi$，具有相同的振幅 $p_{0}$、频率 $\omega$，试求系统的平均辐射角分布。

直接视为两个偶极子场的叠加

假设偶极子在原点，则它的电磁场为
$$
\vec{B} = \frac{\mu_{0} e^{ikr}}{4 \pi c r}  \ddot{\vec{p}} \times \hat{r}
$$

$$
\vec{E} = \frac{\mu_{0} e^{ikr}}{4 \pi c r} (\ddot{\vec{p}} \times \hat{r}) \times \hat{r}
$$

所以两个偶极子叠加的电磁场为
$$
\vec{B} = - \frac{\mu_{0} \omega^{2}}{4 \pi c r}  ( e^{ikr} \vec{p}_{0} + e^{ik (r + \frac{\lambda}{4} \cos \theta) + \Phi} \vec{p}_{0}) \times \hat{r}
$$

$$
\vec{E} = - \frac{\mu_{0} \omega^{2}}{4 \pi r} (( e^{ikr} \vec{p}_{0} + e^{ik (r + \frac{\lambda}{4} \cos \theta) + \Phi} \vec{p}_{0}) \times \hat{r}) \times \hat{r}
$$

所以
$$
\begin{gathered}
<\vec{S}> = <\vec{E} \times \vec{H}> = \frac{<B^{2}>}{\mu_{0}} = \frac{\mu_{0} \omega^{4}}{16 \pi^{2} c r^{2}} \frac{1}{2} |(e^{ikr} \vec{p}_{0} + e^{ik (r + \frac{\lambda}{4} \cos \theta) + \Phi} \vec{p}_{0})^{2}| \sin^{2} \theta \\ =
\frac{\mu_{0} \omega^{4}}{32 \pi^{2} c r^{2}} p_{0}^{2} |(e^{ikr} + e^{ik (r + \frac{\lambda}{4} \cos \theta) + \Phi}) (e^{- ikr} + e^{- ik (r + \frac{\lambda}{4} \cos \theta) + \Phi})| \sin^{2} \theta \\ = 
\frac{\mu_{0} p_{0}^{2} \omega^{4}}{16 \pi^{2} c r^{2}} (1 + \cos (\frac{\pi}{2} \cos \theta + \Phi)) \sin^{2} \theta
\end{gathered}
$$
所以
$$
\frac{dI}{d\Omega} = <\vec{S}> r^{2} = \frac{\mu_{0} p_{0}^{2} \omega^{4}}{16 \pi^{2} c} \left[ 1 + \cos\left( \frac{\pi}{2} \cos\theta + \Phi \right) \right] \sin^{2}\theta
$$
(d) 一半波天线长度为 $l = \frac{\lambda}{2}$, 其上电流分布为 $J=J_{0}\cos\tfrac{2\pi z}{\lambda}\cos\omega t$

条件范围: $-\frac{\lambda}{4} \leq z \leq \frac{\lambda}{4}$

答案:

$$
\frac{d I}{d \Omega} = \frac{c \mu_{0} J_{0}^{2}}{8 \pi^{2}} \frac{\cos^{2}(\frac{\pi}{2} \cos\theta)}{\sin^{2}\theta}
$$

(e) 求加速度为 $\vec{a}$ 的低速运动带电点粒子的平均辐射角分布和辐射功率.

(f) 对一组运动的点电荷, 请给出用它们的电荷、坐标、速度、加速度表达的电偶极、电四极和磁偶极辐射场的表达式.

## 第10次作业

### 1. 静电势及其微分方程

电势及其满足的微分方程，非极值定理 
作业: 
(a) 书2.1  

2.1 计算

一个半径为 $R$ 的电介质球,极化强度为 $\vec{P}=K\frac{\vec{r}}{r^{2}}$,电容率为 $\epsilon$.

(1) 计算束缚电荷的体密度和面密度 

$$
\rho' = - \nabla \cdot \vec{P} = - K \nabla \cdot \frac{\vec{r}}{r^{2}} = - \frac{K}{r^{2}}
$$

$$
\sigma' = \hat{n} \cdot \vec{P} = \frac{K}{R}
$$

(2) 计算自由电荷体密度
$$
\vec{D} = \epsilon_{0} \vec{E} + \vec{P}
$$

$$
(1 - \frac{\epsilon_{0}}{\epsilon}) \vec{D} = \vec{P}
$$

$$
\vec{D} = \frac{\epsilon}{\epsilon - \epsilon_{0}} \vec{P}
$$

$$
\rho_{0} = \nabla \cdot \vec{D} = \frac{\epsilon K}{\epsilon - \epsilon_{0}} \nabla \cdot \frac{\vec{r}}{r^{2}} = \frac{\epsilon K}{(\epsilon - \epsilon_{0}) r^{2}}
$$

(3) 计算球外和球内的电势 

球外
$$
\begin{gathered}
Q = \int_{0}^{R} \left( \frac{\epsilon K}{(\epsilon - \epsilon_{0}) r^{2}} - \frac{K}{r^{2}} \right) 4 \pi r^{2} d r + 4 \pi R^{2} \frac{K}{R} = \frac{\epsilon K}{\epsilon - \epsilon_{0}} 4 \pi R \\
\phi (r) = \frac{1}{4 \pi \epsilon_{0}} \frac{Q}{r} = \frac{\epsilon KR}{(\epsilon - \epsilon_{0})\epsilon_{0} r}
\end{gathered}
$$
球内
$$
Q (r) = \int_{0}^{r}  \left( \frac{\epsilon K}{(\epsilon - \epsilon_{0}) r^{2}} - \frac{K}{r^{2}} \right) 4 \pi r^{2} d r = \frac{\epsilon_{0} K}{\epsilon - \epsilon_{0}} 4 \pi r
$$

$$
\vec{E} (r) = \frac{K}{(\epsilon - \epsilon_{0}) r} \hat{r}
$$

$$
\phi (r) = \frac{\epsilon K}{(\epsilon - \epsilon_{0})\epsilon_{0}} + \int_{r}^{R} \frac{K}{\epsilon - \epsilon_{0}} \frac{d r}{r} = \frac{K}{\epsilon - \epsilon_{0}}(\ln \frac{R}{r} + \frac{\epsilon}{\epsilon_{0}})
$$

(4) 求该带电介质球产生的静电场总能量
$$
\begin{gathered}
W_{E} = \int_{0}^{R} \frac{1}{2} \epsilon_{0} (\frac{K}{(\epsilon - \epsilon_{0}) r})^{2} 4 \pi r^{2} d r + \int_{R}^{\infty} \frac{1}{2} \epsilon_{0} (\frac{\epsilon KR}{(\epsilon - \epsilon_{0})\epsilon_{0} r^{2}})^{2} 4 \pi r^{2} d r \\ = 
2\pi \epsilon R \left(1 + \frac{\epsilon}{\epsilon_{0}}\right) \left(\frac{K}{\epsilon - \epsilon_{0}}\right)^{2}
\end{gathered}
$$
(b) 试证:极化电荷出在自由电荷处,无自由电荷也无极化电荷,极化使自由电荷处的总电荷变为原来的$\frac{1}{\epsilon_{r}}$倍.  

证明

线性极化假设下
$$
\vec{D} = \epsilon_{0} \vec{E} + \vec{P} = \epsilon \vec{E}
$$
所以
$$
\vec{P} = (1 - \frac{\epsilon_{0}}{\epsilon}) \vec{D}
$$

$$
\nabla \cdot \vec{P} = (1 - \frac{\epsilon_{0}}{\epsilon}) \nabla \cdot \vec{D}
$$

$$
- \rho' = (1 - \frac{\epsilon_{0}}{\epsilon}) \rho_{0}
$$

所以极化电荷出在自由电荷处

总电荷
$$
\rho = \rho_{0} + \rho' = \frac{\epsilon_{0}}{\epsilon} \rho_{0} = \frac{1}{\epsilon_{r}} \rho_{0}
$$
(c) 试证:对无穷大均匀电介质,有介质时的电势和电场是无介质时的$\frac{1}{\epsilon_{r}}$倍.

证明

假设自由电荷分布不变，有介质之后

线性极化假设下
$$
\vec{D} = \epsilon_{0} \vec{E} + \vec{P} = \epsilon \vec{E}
$$
所以
$$
\vec{P} = (1 - \frac{\epsilon_{0}}{\epsilon}) \vec{D}
$$

$$
\nabla \cdot \vec{P} = (1 - \frac{\epsilon_{0}}{\epsilon}) \nabla \cdot \vec{D}
$$

$$
- \rho' = (1 - \frac{\epsilon_{0}}{\epsilon}) \rho_{0}
$$

总电荷变为
$$
\rho = \rho_{0} + \rho' = \frac{\epsilon_{0}}{\epsilon} \rho_{0} = \frac{1}{\epsilon_{r}} \rho_{0}
$$
根据叠加原理
$$
\phi  = \int d \tau' \frac{\rho_{0}}{4 \pi \epsilon_{0} \epsilon_{r}|\vec{r} - \vec{r}'|}
$$

$$
\vec{E} = \int d \tau' \frac{\rho_{0} (\vec{r} - \vec{r}')}{4 \pi \epsilon_{0} \epsilon_{r}|\vec{r} - \vec{r}'|^{3}}
$$

所以场强和电势都变为无介质时的$\frac{1}{\epsilon_{r}}$倍.

### 2. 唯一性定理及应用

静电问题唯一性定理，有导体存在时的唯一性定理 
作业： 
(a) 由一组导体组成的体系,已知第$i$个导体上的总电荷为$q_{i}$,且导体外可以有介质,但无自由电荷,试证空间任一点 $\vec{r}$ 处的电势与 $q$ 的关系为:  $\phi(\vec{r}, q_{1}, q_{2}, \ldots) = \sum_{i} p_{i}(\vec{r}) q_{i}$，其中$p_{i}(\vec{r})$与导体上电荷无关. 

证明

由唯一性定理，只要说明满足边界条件
$$
\begin{gathered}
\oint_{S_{i}} d S \frac{\partial}{\partial n_{i}}  \sum_{i} p_{i}(\vec{r}) q_{i} = - \frac{q_{i}}{\epsilon} \\
\sum_{i} p_{i}(\vec{r}) q_{i} = \phi_{i} \qquad (\vec{r} \in S_{i})
\end{gathered}
$$
的解存在，那么这个解就是唯一解
$$
\begin{gathered}
\oint_{S_{i}} d S \frac{\partial}{\partial n_{i}}  \sum_{i} p_{i}(\vec{r}) q_{i} = \int_{S_{i}} d \vec{S} \cdot \nabla (\sum_{i} p_{i} (\vec{r}) q_{i}) \\
= \int_{V_{i}} d \tau \nabla \cdot \nabla  (\sum_{i} p_{i} (\vec{r}) q_{i}) = \int_{V_{i}} d \tau \nabla^{2}  (\sum_{i} p_{i} (\vec{r}) q_{i}) = - \frac{q_{i}}{\epsilon}
\end{gathered}
$$
不妨令
$$
p_{i} (\vec{r}) = \frac{1}{4 \pi \epsilon} \int_{V_{i}} \frac{\rho_{i} (\vec{r}') d \tau'}{|\vec{r} - \vec{r}'|}
$$

$$
\begin{gathered}
\int_{V_{i}} d \tau \nabla^{2}  (\sum_{i} p_{i} (\vec{r}) q_{i}) = \int_{V_{i}} d \tau \sum_{i} \frac{q_{i}}{4 \pi \epsilon} \nabla^{2} \int_{V_{i}} \frac{\rho_{i} (\vec{r}') d \tau'}{|\vec{r} - \vec{r}'|} = - \frac{q_{i}}{\epsilon} \int_{V_{i}} d \tau \sum_{i} \int_{V_{i}} d \tau' \rho_{i} (\vec{r'}) \delta (\vec{r} - \vec{r'}) \\ =
- \frac{q_{i}}{\epsilon} \int_{V_{i}} d \tau \rho_{i} (\vec{r})
\end{gathered}
$$

所以
$$
\int_{V_{i}} d \tau \rho_{i} = 1
$$
再证明存在这样一组 $\rho_{i}$ 能够让所有导体表面等势，即满足
$$
\sum_{i}  \frac{q_{i}}{4 \pi \epsilon} \int_{V_{i}} \frac{\rho_{i} (\vec{r}') d \tau'}{|\vec{r} - \vec{r}'|} = \phi_{i} \qquad (\vec{r} \in S_{i})
$$
注意到取 $q_{i} \rho_{i}$ 为平衡时，那个导体的面电荷密度满足条件，即
$$
\rho_{i} (\vec{r}) = \begin{cases} 0 & (\vec{r} \in V_{i}/\overset{\circ}{V_{i}}) \\ \frac{\sigma_{i}}{q_{i}} \delta (\hat{n}) & (\vec{r} \in \partial V_{i}) \end{cases}
$$
满足条件。所以解存在，即唯一解为
$$
p_{i} (\vec{r}) = \int_{S_{i}} \frac{\sigma_{i} (\vec{r'})}{4 \pi \epsilon |\vec{r} - \vec{r'}|} d S
$$
(b) 一导体空腔内有电荷$Q$,在导体绝缘和接地两种情况下,试用唯一性定理讨论导体内表面和外表面的电荷密度是否会变化?

内表面电荷不变，外表面在绝缘时和内表面带反号电荷，在接地时不带电

证明

对于导体空腔内的空间，接地前后边界条件不改变，由唯一性定理，空腔内的电势分布不改变，所以内表面电荷密度
$$
\sigma_{\text{内}} = -  \frac{\partial \phi}{\partial n}
$$
不改变

对于外空间，接地之后边界电势变为0，此时对于外空间，猜解
$$
\phi = 0
$$
由唯一性定理，外空间电势处处为0

所以此时外表面带电量为0，电荷密度出处为0

但是接地之前，由于导体整体不带电，所以外表面带电量为内表面的相反数不为0

所以外表面电荷密度会变化

### 3. 镜像法

作业:书2.9, 2.11

2.9 接地的空心导体球

接地的空心导体球的内外半径为 $R_{1}$ 和 $R_{2}$,在球内离球心为 $a(a<R_{1})$ 处置一点电荷 $Q$. 用镜像法求电势. 导体球上的感应电荷有多少? 分布在内表面还是外表面?

像电荷大小为$- \frac{a}{R_{1}} Q$ ，距离球心$\frac{R_{1}^{2}}{a}$

所以电势分布为
$$
\phi (r, \theta) =  \frac{1}{4\pi \epsilon_{0}} \left( \frac{Q}{\sqrt{R^{2} + a^{2} - 2Ra \cos \theta}} - \frac{\frac{R_{1}}{a} Q}{\sqrt{R^{2} + \frac{R_{1}^{2}}{a^{2}} - \frac{2R_{1}^{2} R}{a} \cos \theta}} \right)
$$
感应电荷分布于内表面,总电荷量为 $-Q$

2.11 接地的导体平面

在接地的导体平面上有一半径为 $a$ 的半球凸部(如图), 半球的球心在导体平面上, 点电荷 $Q$ 位于系统的对称轴上, 并与平面相距为 $b(b>a)$, 试用镜像法求空间电势.

<img src="./Electrodynamics Homework.assets/image-20260128015509317.png" alt="image-20260128015509317" style="zoom:50%;" />

三个像电荷分别在$\frac{a^{2}}{b}$，$- \frac{a^{2}}{b}$ ，$-b$ 处，大小为$-\frac{b}{a} Q$，$\frac{b}{a} Q$ ，$-Q$

空间电势分布为
$$
\begin{gathered}
\phi (x, y, z) = \frac{1}{4 \pi \epsilon_{0}} ( \frac{Q}{\sqrt{x^{2} + y^{2} + (z - b)^{2}}} - \frac{Q}{\sqrt{x^{2} + y^{2} + (z + b)^{2}}} \\ - \frac{\frac{b}{a}Q}{\sqrt{x^{2} + y^{2} + (z - \frac{a^{2}}{b})^{2}}} + \frac{\frac{b}{a}Q}{\sqrt{x^{2} + y^{2} + (z + \frac{a^{2}}{b})^{2}}} )
\end{gathered}
$$

## 第11次作业

### 5. 拉普拉斯方程,分离变量法

书2.2, 2.4, 2.18

2.2 在均匀外电场中置入半径为 $R_{0}$ 的导体球，试用分离变数法求下列两种情况的电势：

(1) 导体球上接有电池，使球与地保持电势差 $\Phi_{0}$；

假设球心在垂直电场方向上到无穷远处的电势为 $\phi_{0}$ ，均匀外电场大小为 $E_{0}$ ，位矢与外电场夹角为 $\theta$
$$
\phi (r, \theta) = \sum_{n} (A_{n} r^{n} + B_{n} \frac{1}{r^{n + 1}}) P_{n} (\cos \theta)
$$
保留 $n = 0$ 以及 $n = 1$ 项
$$
\phi (r, \theta) = A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta
$$
带入 $\theta = \frac{\pi}{2}, r \to \infty, \phi = \phi_{0}$，所以 $A_{0} = \phi_{0}$

当 $r = R_{0}$ 时，$\phi = \Phi_{0}$ ，所以 $A_{1} R_{0} + \frac{B_{1}}{R_{0}^{2}} = 0$
$$
A_{0} + \frac{B_{0}}{R_{0}} = \Phi_{0}
$$

$$
B_{0} = R_{0} (\Phi_{0} - \phi_{0})
$$

再利用电场定出剩余系数
$$
\begin{gathered}
\vec{E} = - \nabla \phi = - \hat{r} \frac{\partial}{\partial r} (A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta) - \frac{\hat{\theta}}{r} \frac{\partial}{\partial \theta} (A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta) \\ = 
\frac{B_{0}}{r^{2}} \hat{r} - A_{1} \cos \theta \hat{r} + \frac{2 B_{1}}{r^{3}} \cos \theta \hat{r} + \frac{1}{r} (A_{1} r + \frac{B_{1}}{r^{2}}) \sin \theta \hat{\theta} \\ =
\frac{R_{0} (\Phi_{0} - \phi_{0})}{r^{2}} \hat{r} - A_{1} \cos \theta \hat{r} + A_{1} \sin \theta \hat{\theta} + \frac{2 B_{1}}{r^{3}} \cos \theta \hat{r} + \frac{B_{1}}{r^{3}} \sin \theta \hat{\theta}
\end{gathered}
$$
当 $r \to \infty, \theta  = 0$ 时，电场大小为 $E_{0}$ ，所以 
$$
A_{1} = - E_{0}
$$

$$
- E_{0} R_{0} + \frac{B_{1}}{R_{0}^{2}} = 0
$$

$$
B_{1} = E_{0} R_{0}^{3}
$$

所以电势分布为
$$
\phi (r, \theta) = \phi_{0} + \frac{R_{0}(\Phi_{0} - \phi_{0})}{r} - E_{0} r \cos \theta + \frac{E_{0} R_{0}^{3}}{r^{2}} \cos \theta \qquad (r > R_{0})
$$
(2) 导体球上带总电荷 $Q$。

假设球心在垂直电场方向上到无穷远处的电势为 $\phi_{0}$ ，均匀外电场大小为 $E_{0}$ ，位矢与外电场夹角为 $\theta$

同样保留球坐标下拉普拉斯方程解的前两项

保留 $n = 0$ 以及 $n = 1$ 项
$$
\phi (r, \theta) = A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta
$$
带入 $\theta = \frac{\pi}{2}, r \to \infty, \phi = \phi_{0}$，所以 $A_{0} = \phi_{0}$

当 $r = R_{0}$ 时，$\phi$ 为常数 ，所以 $A_{1} R_{0} + \frac{B_{1}}{R_{0}^{2}} = 0$

再利用电场定出剩余系数
$$
\begin{gathered}
\vec{E} = - \nabla \phi = - \hat{r} \frac{\partial}{\partial r} (A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta) - \frac{\hat{\theta}}{r} \frac{\partial}{\partial \theta} (A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta) \\ = 
\frac{B_{0}}{r^{2}} \hat{r} - A_{1} \cos \theta \hat{r} + \frac{2 B_{1}}{r^{3}} \cos \theta \hat{r} + \frac{1}{r} (A_{1} r + \frac{B_{1}}{r^{2}}) \sin \theta \hat{\theta} \\ =
\frac{B_{0}}{r^{2}} \hat{r} - A_{1} \cos \theta \hat{r} + A_{1} \sin \theta \hat{\theta} + \frac{2 B_{1}}{r^{3}} \cos \theta \hat{r} + \frac{B_{1}}{r^{3}} \sin \theta \hat{\theta}
\end{gathered}
$$
当 $r \to \infty, \theta  = 0$ 时，电场大小为 $E_{0}$ ，所以 
$$
A_{1} = - E_{0}
$$

$$
- E_{0} R_{0} + \frac{B_{1}}{R_{0}^{2}} = 0
$$

$$
B_{1} = E_{0} R_{0}^{3}
$$

因为导体球表面带电量为 $Q$ ，所以
$$
Q = \epsilon_{0} \oint d \vec{S} \cdot \vec{E} = \epsilon_{0} \oint d S (\frac{B_{0}}{R_{0}^{2}}  - A_{1} \cos \theta)
$$

$$
Q = \epsilon_{0} 4 \pi B_{0}
$$

$$
B_{0} = \frac{Q}{4 \pi \epsilon_{0}}
$$

所以电势分布为
$$
\phi (r, \theta) = \phi_{0} + \frac{Q}{4 \pi \epsilon_{0} r} - E_{0} r \cos \theta + \frac{E_{0} R_{0}^{3}}{r^{2}} \cos \theta \qquad (r > R_{0})
$$

2.4 均匀介质球(电容率为 $\varepsilon_{1}$)的中心置一自由电偶极子 $\vec{p}_{t}$，球外充满了另一种介质(电容率为 $\varepsilon_{2}$)，求空间各点的电势和极化电荷分布。

提示：同上题，$\phi = \frac{\vec{p}_{t} \cdot \vec{r}}{4\pi\epsilon_{1} r^{3}} + \phi'$，而 $\phi'$ 满足拉普拉斯方程。
$$
\phi' (r, \theta) = \sum_{n} (A_{n} r^{n} + B_{n} \frac{1}{r^{n + 1}}) P_{n} (\cos \theta)
$$
保留前两项

由于 $\phi'$ 在原点处不发散，所以在 $r < R_{0}$ 区域
$$
\phi' (r, \theta) = A_{0} + \frac{B_{0}}{r} + (A_{1} r + \frac{B_{1}}{r^{2}}) \cos \theta
$$
$$
B_{0} = B_{1} = 0
$$

电场
$$
\begin{gathered}
\vec{E} = - \nabla (\phi' + \frac{\vec{p}_{t} \cdot \vec{r}}{4\pi\epsilon_{1} r^{3}}) \\ =
- \hat{r} \frac{\partial}{\partial r} (A_{0} + A_{1} r \cos \theta + \frac{p_{t} \cos \theta}{4 \pi \epsilon_{1} r^{2}}) - \frac{\hat{\theta}}{r} \frac{\partial}{\partial \theta} (A_{0} + A_{1} r + \cos \theta + \frac{p_{t} \cos \theta}{4 \pi \epsilon_{1} r^{2}}) \\ = 
- A_{1} \cos \theta \hat{r} + A_{1} \sin \theta \hat{\theta} + \frac{p_{t}}{2 \pi \epsilon_{1} r^{3}} \cos \theta \hat{r} + \frac{p_{t}}{4 \pi \epsilon_{1} r^{3}} \sin \theta \hat{\theta}
\end{gathered}
$$

由于无穷远处电势为0，所以在 $r > R_{0}$ 区域
$$
\phi (r, \theta) = C_{0} + \frac{D_{0}}{r} + (C_{1} r + \frac{D_{1}}{r^{2}}) \cos \theta
$$

$$
C_{0} = C_{1} = 0
$$

再利用电场确定剩余系数
$$
\begin{gathered}
\vec{E}  = - \nabla \phi = - \hat{r} \frac{\partial}{\partial r} (\frac{D_{0}}{r} + \frac{D_{1}}{r^{2}} \cos \theta) - \frac{\hat{\theta}}{r} \frac{\partial}{\partial \theta} (\frac{D_{0}}{r} + \frac{D_{1}}{r^{2}} \cos \theta) \\ =
\frac{D_{0}}{r^{2}} \hat{r} + \frac{2 D_{1}}{r^{3}} \cos \theta \hat{r} + \frac{D_{1}}{r^{3}} \sin \theta \hat{\theta}
\end{gathered}
$$
在 $r = R_{0}$ 处电势连续
$$
\begin{gathered}
A_{0} = \frac{D_{0}}{R_{0}} \\ 
A_{1} R_{0} + \frac{p_{t}}{4 \pi \epsilon_{1} R_{0}^{2}} = \frac{D_{1}}{R_{0}^{2}}
\end{gathered}
$$
在$r = R_{0}$ 处电场强度切向连续
$$
A_{1} + \frac{p_{t}}{4 \pi \epsilon_{1} R_{0}^{3}} = \frac{D_{1}}{R_{0}^{3}}
$$
在$r = R_{0}$ 处电位移矢量法向连续
$$
\begin{gathered}
\epsilon_{1} B_{0} = \epsilon_{2} D_{0} = 0\\ 
\epsilon_{1} (\frac{p_{t}}{2 \pi \epsilon_{1} R_{0}^{3}} - A_{1}) = \epsilon_{2} \frac{2 D_{1}}{R_{0}^{3}}
\end{gathered}
$$
可以解出
$$
\begin{gathered}
A_{0} = D_{0} = 0 \\
A_{1} = \frac{(\epsilon_{1} - \epsilon_{2}) p_{t}}{2 \pi \epsilon_{1} (\epsilon_{1} + 2 \epsilon_{2}) R_{0}^{3}} \\ 
D_{1} = \frac{3 p_{t}}{4 \pi (\epsilon_{1} + 2 \epsilon_{2})}
\end{gathered}
$$
所以电势分布为
$$
\phi = 
\begin{cases} 
\frac{3(\vec{p}_{t} \cdot \vec{r})}{4\pi(\epsilon_{1} + 2\epsilon_{2}) r^{3}}& (r > R_{0}) \\ 
\frac{\vec{p}_{t} \cdot \vec{r}}{4\pi\epsilon_{1} r^{3}} + \frac{2(\epsilon_{1} - \epsilon_{2})(\vec{p}_{t} \cdot \vec{r})}{4\pi \epsilon_{1} (\epsilon_{1} + 2\epsilon_{2}) R_{0}^{3}} & (r < R_{0})
\end{cases}
$$
极化电荷分布

球心处有极化偶极子 $\vec{p} = \left( \frac{\varepsilon_{0}}{\varepsilon_{1}} - 1 \right) \vec{p}_{t}$

球面上有极化面电荷 $\sigma_{p} = \frac{3(\varepsilon_{1} - \varepsilon_{2})\varepsilon_{0} \vec{p}_{t}}{2\pi\varepsilon_{1} (\varepsilon_{1} + 2\varepsilon_{2})R_{0}^{3}} \cos \theta$

2.18 一半径为 $R_{0}$ 的球面，在球坐标 $0<\theta<\frac{\pi}{2}$ 的半球面上电势为 $\phi_{0}$，在 $\frac{\pi}{2}<\theta<\pi$ 的半球面上电势为 $- \phi_{0}$，求空间各点电势。
$$
\phi (r, \theta) = \sum_{n} (A_{n} r^{n} + B_{n} \frac{1}{r^{n + 1}}) P_{n} (\cos \theta)
$$
分为 $r < R_{0}$ 以及 $r > R_{0}$  两块空间求解

对于 $r < R_{0}$ 

由于电势在球心处不发散，所以 $B_{n} = 0$
$$
\phi (r, \theta) = \sum_{n} A_{n} r^{n} P_{n} (\cos \theta)
$$
利用勒让德多项式的正交性
$$
\begin{gathered}
\int_{0}^{\pi} \phi (R_{0}, \theta) P_{n} (\cos \theta) \sin \theta d \theta \\ =
\int_{-1}^{0} - \phi_{0} P_{n} (x) d x + \int_{0}^{1} \phi_{0} P_{n} (x) d x = (-1)^{n + 1} \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} + \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} \\ = 
\begin{cases}
0 & (n \text{是偶数}) \\
2 \phi_{0} \frac{P_{n - 1} (0) - P_{n + 1} (0)}{2 n + 1} & (n \text{是奇数})
\end{cases}
\end{gathered}
$$
所以
$$
\int_{-1}^{1} A_{n} R_{0}^{n} P_{n}^{2} (x) d x =
\begin{cases}
0 & (n \text{是偶数}) \\
2 \phi_{0} \frac{P_{n - 1} (0) - P_{n + 1} (0)}{2 n + 1} & (n \text{是奇数})
\end{cases}
$$
即 $n$ 是奇数时
$$
\begin{gathered}
A_{n} = \frac{\phi_{0}}{R_{0}^{n}} (P_{n - 1} (0) - P_{n + 1} (0)) \\ = 
(-1)^{\frac{n - 1}{2}} \frac{\phi_{0}}{R_{0}^{n}} \frac{(n - 2)!!}{(n + 1)!!} (2n + 1)
\end{gathered}
$$
所以
$$
\phi (r, \theta) = \sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{r}{R_{0}} \right)^{2n + 1} P_{2n + 1} (\cos \theta)
$$
对于 $r > R_{0}$ 

由于电势在无穷远处不发散，所以 $A_{n} = 0$
$$
\phi (r, \theta) = \sum_{n} \frac{B_{n}}{r^{n + 1}} P_{n} (\cos \theta)
$$
利用勒让德多项式的正交性
$$
\begin{gathered}
\int_{0}^{\pi} \phi (R_{0}, \theta) P_{n} (\cos \theta) \sin \theta d \theta \\ =
\int_{-1}^{0} - \phi_{0} P_{n} (x) d x + \int_{0}^{1} \phi_{0} P_{n} (x) d x = (-1)^{n + 1} \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} + \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} \\ = 
\begin{cases}
0 & (n \text{是偶数}) \\
2 \phi_{0} \frac{P_{n - 1} (0) - P_{n + 1} (0)}{2 n + 1} & (n \text{是奇数})
\end{cases}
\end{gathered}
$$
所以
$$
\int_{-1}^{1} \frac{B_{n}}{R_{0}^{n + 1}} P_{n}^{2} (x) d x =
\begin{cases}
0 & (n \text{是偶数}) \\
2 \phi_{0} \frac{P_{n - 1} (0) - P_{n + 1} (0)}{2 n + 1} & (n \text{是奇数})
\end{cases}
$$
即 $n$ 是偶数时
$$
\begin{gathered}
B_{n} = \phi_{0} R_{0}^{n + 1} (P_{n - 1} (0) - P_{n + 1} (0)) \\ = 
(-1)^{\frac{n - 1}{2}} \phi_{0} R_{0}^{n + 1} \frac{(n - 2)!!}{(n + 1)!!} (2 n + 1)
\end{gathered}
$$
所以
$$
\phi (r, \theta) = \sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{R_{0}}{r} \right)^{2n + 2} P_{2n + 1} (\cos \theta)
$$
所以电势分布为
$$
\phi (r, \theta) = 
\begin{cases}
\sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{r}{R_{0}} \right)^{2n + 1} P_{2n + 1} (\cos \theta) \qquad (r < R_{0}) \\
\sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{R_{0}}{r} \right)^{2n + 2} P_{2n + 1} (\cos \theta) \qquad (r > R_{0})
\end{cases}
$$
提示：
$$
\int_{0}^{1} P_{n}(x) dx = \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1}
$$
$$
P_{n}(1)=1
$$
$$
P_{n}(0)=\begin{cases}
0 & (n=奇数)\\
(-1)^{\frac{n}{2}} \cdot \frac{1 \cdot 3 \cdot 5 \cdots (n-1)}{2 \cdot 4 \cdot 6 \cdots n} & (n=偶数)
\end{cases}
$$

### 6. 格林函数

书2.19

2.19 上题能用格林函数方法求解吗？结果如何？

可以使用格林函数求解

写出对于球形边界满足第一类边界条件的格林函数
$$
G (\vec{r}, \vec{r'}) = \frac{1}{4 \pi \epsilon_{0}} \left(\frac{1}{|\vec{r} - \vec{r'}|} - \frac{\frac{R_{0}}{r'}}{|\vec{r} - \frac{R_{0}^{2}}{r'^{2}} \vec{r'}|} \right)
$$
所以电势分布为
$$
\phi (\vec{r}) = - \epsilon_{0} \oint_{S} \phi (R_{0}, \alpha) d S' \frac{\partial G (\vec{r}, \vec{r'})}{\partial n'}
$$

$$
\begin{gathered}
\frac{\partial G (\vec{r}, \vec{r'})}{\partial n'} = \hat{r'} \cdot \nabla' \frac{1}{4\pi\epsilon_{0}} \left( \frac{1}{|\vec{r} - \vec{r}'|} - \frac{\frac{R_{0}}{r'}}{|\vec{r} - \frac{R_{0}^{2}}{r'^{2}}\vec{r}'|} \right) \\ = 
\hat{r'} \cdot \frac{1}{4 \pi \epsilon_{0}} \left(\frac{\vec{r} - \vec{r'}}{|\vec{r} - \vec{r'}|^{3}} + \frac{\frac{R_{0} \vec{r'}}{r'^{3}}}{|\vec{r} - \frac{R_{0}^{2}}{r'^{2}}\vec{r}'|} +  \frac{R_{0}}{r'}\frac{\vec{r} - \frac{R_{0}^{2}}{r'^{2}}\vec{r}'}{|\vec{r} - \frac{R_{0}^{2}}{r'^{2}}\vec{r}'|^{3}} \cdot (\frac{2 R_{0}^{2}}{r'^{4}} \vec{r'} \vec{r'} - \frac{R_{0}^{2}}{r'^{2}} \overset{\leftrightarrow}{I}) \right)
\end{gathered}
$$

在 $r' = R_{0}$ 处
$$
\left. \frac{\partial G (\vec{r}, \vec{r'})}{\partial n'} \right|_{r' = R_{0}} = - \frac{1}{4 \pi \epsilon_{0} R_{0}} \frac{|r^{2} - R_{0}^{2}|}{|\vec{r} - \vec{r'}|^{3}}
$$
所以
$$
\phi (\vec{r}) = \oint_{S} \phi (R_{0}, \alpha) \frac{1}{4 \pi R_{0}} \frac{|r^{2} - R_{0}^{2}|}{|\vec{r} - \vec{r'}|^{3}}  d S'
$$
展开被积函数为勒让德多项式
$$
\frac{1}{\sqrt{1 - 2 x t + t^{2}}} = \sum_{n} t^{n} P_{n} (x)
$$
两侧对 $t$ 偏导，所以
$$
\frac{x - t}{(1 - 2xt + t^{2})^{\frac{3}{2}}} = \sum_{n} n t^{n - 1} P_{n} (x)
$$

$$
\begin{gathered}
\frac{1 - t^{2}}{(1 - 2xt + t^{2})^{\frac{3}{2}}} = \frac{1 - 2xt + t^{2} + 2xt - 2t^{2}}{(1 - 2xt + t^{2})^{\frac{3}{2}}} = \frac{1}{\sqrt{1 - 2 x t + t^{2}}} + \frac{2t(x - t)}{(1 - 2xt + t^{2})^{\frac{3}{2}}} \\ = 
\sum_{n} (1 + 2n) t^{n} P_{n} (x)
\end{gathered}
$$

带入 $x = \cos \gamma$ 以及 $t = \frac{r_{<}}{r_{>}}$ （$\gamma$ 为 $\vec{r}$ 与 $\vec{r'}$ 的夹角，$\alpha$ 为积分点和 $z$ 轴的夹角，$\theta$ 为场点和$z$ 轴的夹角）

所以在球内（取 $\alpha$ 和 $\phi$ 为积分用的球坐标，其中$\phi$ 的起始位置为 $\vec{r'}$ 的投影位置）
$$
\begin{gathered}
\phi (r, \theta) =  \frac{1}{4 \pi R_{0}^{2}} \oint_{S} \phi (R_{0}, \alpha) \sum_{n} (1 + 2n) (\frac{r}{R_{0}})^{n} P_{n} (\cos \gamma) d S' \\ =
\sum_{n} \frac{1 + 2n}{4 \pi} \int_{0}^{\pi} \int_{0}^{2 \pi} (\frac{r}{R_{0}})^{n} \phi (R_{0}, \alpha) P_{n} (\sin \theta \sin \alpha \cos \phi + \cos \theta \cos \alpha) \sin \alpha d \alpha d \phi \\ =
\sum_{n} \frac{1 + 2n}{4 \pi} \int_{0}^{\pi} \int_{0}^{2 \pi} (\frac{r}{R_{0}})^{n} \phi (R_{0}, \alpha) P_{n} (\cos \theta) P_{n} (\cos \alpha) \sin \alpha d \alpha d \phi \\ = 
\sum_{n} \frac{1 + 2n}{2} \int_{0}^{\pi} (\frac{r}{R_{0}})^{n} \phi (R_{0}, \alpha) P_{n} (\cos \theta) P_{n} (\cos \alpha) \sin \alpha d \alpha  \\ = 
\sum_{n} \frac{1 + 2n}{2} (\frac{r}{R_{0}})^{n} P_{n} (\cos \theta) \int_{- 1}^{1} \phi (R_{0}, \alpha) P_{n} (\cos \alpha) \sin \alpha \, d (\cos \alpha)  \\ =
\sum_{n} \frac{1 + 2n}{2} (\frac{r}{R_{0}})^{n} P_{n} (\cos \theta) \left(\int_{-1}^{0} - \phi_{0} P_{n} (x) d x + \int_{0}^{1} \phi_{0} P_{n} (x) d x \right) \\ = 
\sum_{n} \frac{1 + 2n}{2} (\frac{r}{R_{0}})^{n} P_{n} (\cos \theta) \left((-1)^{n + 1} \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} + \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1}\right) \\ = 
\sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{r}{R_{0}} \right)^{2n + 1} P_{2n + 1} (\cos \theta)
\end{gathered}
$$
同理，在球外
$$
\begin{gathered}
\phi (r, \theta) = \frac{1}{4 \pi R_{0}^{2}} \oint_{S} \phi (R_{0}, \alpha) \sum_{n} (1 + 2n) (\frac{R_{0}}{r})^{n + 1} P_{n} (\cos \gamma) d S' \\ =
\sum_{n} \frac{1 + 2n}{4 \pi} \int_{0}^{\pi} \int_{0}^{2 \pi}(\frac{R_{0}}{r})^{n + 1} \phi (R_{0}, \alpha) P_{n} (\sin \theta \sin \alpha \cos \phi + \cos \theta \cos \alpha) \sin \alpha d \alpha d \phi \\ =
\sum_{n} \frac{1 + 2n}{4 \pi} \int_{0}^{\pi} \int_{0}^{2 \pi}(\frac{R_{0}}{r})^{n + 1} \phi (R_{0}, \alpha) P_{n} (\cos \theta) P_{n} (\cos \alpha) \sin \alpha d \alpha d \phi \\ = 
\sum_{n} \frac{1 + 2n}{2} \int_{0}^{\pi} (\frac{R_{0}}{r})^{n + 1} \phi (R_{0}, \alpha) P_{n} (\cos \theta) P_{n} (\cos \alpha) \sin \alpha d \alpha  \\ = 
\sum_{n} \frac{1 + 2n}{2} (\frac{R_{0}}{r})^{n + 1} P_{n} (\cos \theta) \int_{- 1}^{1} \phi (R_{0}, \alpha) P_{n} (\cos \alpha) \sin \alpha \, d (\cos \alpha)  \\ =
\sum_{n} \frac{1 + 2n}{2} (\frac{R_{0}}{r})^{n + 1} P_{n} (\cos \theta) \left(\int_{-1}^{0} - \phi_{0} P_{n} (x) d x + \int_{0}^{1} \phi_{0} P_{n} (x) d x \right) \\ = 
\sum_{n} \frac{1 + 2n}{2} (\frac{R_{0}}{r})^{n + 1} P_{n} (\cos \theta) \left((-1)^{n + 1} \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1} + \phi_{0} \left. \frac{P_{n+1}(x)-P_{n-1}(x)}{2n+1} \right|_{0}^{1}\right) \\ = 
\sum_{n = 0}^{\infty} (-1)^{n} (4n + 3) \frac{(2n - 1)!!}{(2n + 2)!!} \phi_{0} \left( \frac{R_{0}}{r} \right)^{2n + 2} P_{2n + 1} (\cos \theta)
\end{gathered}
$$

## 第12次作业

### 8. 恒定电流的电场

(a) 书2.7.2.13  

2.7 在一很大的电解槽中充满电导率为 $\sigma_{2}$ 的液体，使其中流着均匀的电流 $\vec{J}_{f0}$。今在液体中置入一个电导率为 $\sigma_{1}$ 的小球，求恒定时电流分布和面电荷分布，讨论 $\sigma_{1} \gg \sigma_{2}$ 及 $\sigma_{2} \gg \sigma_{1}$ 两种情况的电流分布的特点。

小球中 $\vec{j}_{in} = \sigma_{1} \vec{E}_{in}$ ，小球外 $\vec{j}_{out} = \sigma_{2} \vec{E}_{out} = \sigma_{2} (\frac{\vec{J}_{f0}}{\sigma_{2}} + \vec{E'})$

由于是稳态，所以内外的总电场对应电势均满足拉普拉斯方程，假设
$$
\vec{E}_{in} = E_{1} \cos \theta \hat{r} -  E_{1} \sin \theta \hat{\theta}
$$

$$
\vec{E}_{out} = E_{2} \cos \theta \hat{r} -  E_{2} \sin \theta \hat{\theta} + \frac{E_{3} R_{0}^{3}}{r^{3}} (2 \cos \theta \hat{r} + \sin \theta \hat{\theta})
$$

边界条件
$$
\begin{gathered}
\hat{n} \cdot \vec{j}_{in} = \hat{n} \cdot \vec{j}_{out} \\
\hat{n} \times \vec{E}_{in} = \hat{n} \times \vec{E}_{out}
\end{gathered}
$$
又因为在沿着$\vec{J}_{f0}$ 方向趋近于无穷远时场强为$\frac{\vec{J}_{f0}}{\sigma_{2}}$ ，所以 $E_{2} = \frac{J_{f0}}{\sigma_{2}}$
$$
\begin{gathered}
\sigma_{1} E_{1} = \sigma_{2} (\frac{J_{f0}}{\sigma_{2}} + 2 E_{3}) \\
- E_{1} = - \frac{J_{f0}}{\sigma_{2}} + E_{3}
\end{gathered}
$$
解得
$$
\begin{gathered}
E_{1} = \frac{3 J_{f0}}{\sigma_{1} + 2 \sigma_{2}} \\ 
E_{3} = \frac{J_{f0}}{\sigma_{2}} - \frac{3 J_{f0}}{\sigma_{1} + 2 \sigma_{2}} = \frac{\sigma_{1} - \sigma_{2}}{\sigma_{2}(\sigma_{1} + 2 \sigma_{2})} J_{f0}
\end{gathered}
$$
所以电流密度为
$$
\begin{gathered}
\vec{j}_{in} = \frac{3 \sigma_{1}}{\sigma_{1} + 2 \sigma_{2}} \vec{J}_{f0} \\
\vec{j}_{out} = \vec{J}_{f0} + \frac{(\sigma_{1} - \sigma_{2}) R_{0}^{3}}{\sigma_{1} + 2 \sigma_{2}} \left(\frac{3 (\vec{J}_{f0} \cdot \vec{r}) \vec{r}}{r^{5}} - \frac{\vec{J}_{f0}}{r^{3}} \right)
\end{gathered}
$$
面电荷密度
$$
\begin{gathered}
\sigma' = \epsilon_{0} \hat{n} \cdot (\vec{E}_{out} - \vec{E}_{in}) \\ =
\epsilon_{0} (\frac{1}{\sigma_{2}} + \frac{2 (\sigma_{1} - \sigma_{2})}{(\sigma_{1} + 2 \sigma_{2}) \sigma_{2}} - \frac{3}{\sigma_{1} + 2 \sigma_{2}}) J_{f0} \cos \theta \\ = 
\frac{3 \epsilon_{0} (\sigma_{1} - \sigma_{2})}{\sigma_{2} (\sigma_{1} + 2 \sigma_{2})} J_{f0} \cos \theta
\end{gathered}
$$
当 $\sigma_{1} \gg \sigma_{2}$ 时，电流密度以及面电荷密度的分布趋近于
$$
\begin{gathered}
\vec{j}_{in} = 3 \vec{J}_{f0} \\
\vec{j}_{out} = \vec{J}_{f0} + R_{0}^{3} \left(\frac{3 (\vec{J}_{f0} \cdot \vec{r}) \vec{r}}{r^{5}} - \frac{\vec{J}_{f0}}{r^{3}} \right) \\ 
\sigma' =  \frac{3 \epsilon_{0}}{\sigma_{2}} J_{f0} \cos \theta
\end{gathered}
$$
当$\sigma_{2} \gg \sigma_{1}$ 时，电流密度以及面电荷密度的分布趋近于
$$
\begin{gathered}
\vec{j}_{in} = \frac{3 \sigma_{1}}{2 \sigma_{2}} \vec{J}_{f0} \\
\vec{j}_{out} = \vec{J}_{f0} - \frac{1}{2} R_{0}^{3} \left(\frac{3 (\vec{J}_{f0} \cdot \vec{r}) \vec{r}}{r^{5}} - \frac{\vec{J}_{f0}}{r^{3}} \right) \\ 
\sigma' = - \frac{3 \epsilon_{0}}{2 \sigma_{2}} J_{f0} \cos \theta
\end{gathered}
$$
2.13 设有两平面围成的直角形无穷容器，其内充满电导率为 $\sigma$ 的液体。取该两平面为 $xz$ 面和 $yz$ 面，在 $(x_{0}, y_{0}, z_{0})$ 和 $(x_{0}, y_{0}, -z_{0})$ 两点分别置正负电极并通以电流 $I$，求导电液体中的电势。

边界条件即在两平面处的电场强度沿切向，所以可以采取类似于电像的方法求解，即在 $(x_{0}, - y_{0}, z_{0}), (- x_{0}, y_{0}, z_{0}), (- x_{0}, - y_{0}, z_{0})$ 处放置正像电极，在 $(x_{0}, - y_{0}, - z_{0}), (- x_{0}, y_{0}, - z_{0}), (- x_{0}, - y_{0}, - z_{0})$ 处放置负电极，此时直角形区域内的电势为
$$
\begin{gathered}
\phi (x, y, z) = \frac{I}{4 \pi \sigma} (\frac{1}{\sqrt{(x - x_{0})^{2} + (y - y_{0})^{2} + (z - z_{0})^{2}}} + \frac{1}{\sqrt{(x + x_{0})^{2} + (y - y_{0})^{2} + (z - z_{0})^{2}}} \\ + 
\frac{1}{\sqrt{(x - x_{0})^{2} + (y + y_{0})^{2} + (z - z_{0})^{2}}} + \frac{1}{\sqrt{(x + x_{0})^{2} + (y + y_{0})^{2} + (z - z_{0})^{2}}} \\ - 
\frac{1}{\sqrt{(x - x_{0})^{2} + (y - y_{0})^{2} + (z + z_{0})^{2}}} - \frac{1}{\sqrt{(x + x_{0})^{2} + (y - y_{0})^{2} + (z + z_{0})^{2}}} \\ -
\frac{1}{\sqrt{(x - x_{0})^{2} + (y + y_{0})^{2} + (z + z_{0})^{2}}} - \frac{1}{\sqrt{(x + x_{0})^{2} + (y + y_{0})^{2} + (z + z_{0})^{2}}})
\end{gathered}
$$
(b) 两个距离很远半径为 $a$ 的金属半球埋入电导率为 $\gamma$ 的地面,使半球平面部分与地面平齐,在此两半球电极上加电压 $V$, 求地面下极面附近电流分布,并求两半球间的电阻和每个半球的接的电阻。  

同样利用镜像法求解，此时应当把地面下的部分镜像到地面上，以保持地面处场强沿切向的边界条件

由于两个半球之间的距离 $d >> a$ ，所以保留至零阶结果，即假设一个半球上的电荷分布不会对另一半球的电势产生影响。此时电流分布可以表示为（假设坐标系的原点在两半球中心位置，$x$ 轴方向和两球连线方向重合，两球之间距离为 $d$）
$$
\vec{j} (x, y, z) = \gamma a \frac{V}{2} \left( \frac{(x - \frac{d}{2}, y, z)}{((x - \frac{d}{2})^{2} + y^{2} + z^{2})^{\frac{3}{2}}} - \frac{(x + \frac{d}{2}, y, z)}{((x + \frac{d}{2})^{2} + y^{2} + z^{2})^{\frac{3}{2}}} \right)
$$
所以此时两球之间的电流为
$$
I_{12} = \frac{1}{2} \iint_{x=0} \gamma a \frac{V}{2} \frac{d}{((\frac{d}{2})^{2} + y^{2} + z^{2})^{\frac{3}{2}}}  dy dz = \frac{\gamma a V d}{4} \int_{0}^{\infty} \frac{1}{(\frac{d^{2}}{4} + r^{2})^{\frac{3}{2}}} 2 \pi r dr = \pi \gamma a V
$$
所以两球间的电阻为
$$
R_{12} = \frac{1}{\pi \gamma a}
$$
一个半球的接地电阻
$$
I = \frac{\gamma a \frac{V}{2}}{r^{2}} \cdot (2 \pi r^{2}) = \pi \gamma a V
$$
所以接地电阻为
$$
R = \frac{1}{2 \pi \gamma a V}
$$
(c) 两个半径为 $a$ 的金属小球放在电导率为 $\gamma$ 的半无限大导电媒质内作为电极，两小球球心的距离为 $b(b>>a)$， 球心离媒质平面的距离为 $d(d>>a)$，求两电极之间的电阻（要求准到 $\frac{a}{b},\frac{a}{d}$ 的一次项）。  

同样使用镜像法，在关于导电媒质对称位置放置同样电势的小球，求出保留到一阶项的电势，此时
$$
\begin{gathered}
I_{12} = \frac{1}{2} \iint_{x = 0} \frac{\gamma Q}{4 \pi \epsilon_{0}} \left( \frac{b}{(\frac{b^{2}}{4} + y^{2} + (z + d)^{2})^{\frac{3}{2}}} + \frac{b}{(\frac{b^{2}}{4} + y^{2} + (z - d)^{2})^{\frac{3}{2}}} \right) dy dz \\ =
\frac{\gamma Q}{8 \pi \epsilon_{0}} \int_{0}^{\infty}  \frac{2b}{(\frac{b^{2}}{4} + r^{2})^{\frac{3}{2}}} 2 \pi r dr =  \frac{\gamma Q}{\epsilon_{0}}
\end{gathered}
$$
而电势差为
$$
\Delta V = 2 (\frac{Q}{4 \pi \epsilon_{0} a} - \frac{Q}{4 \pi \epsilon_{0} b} + \frac{Q}{8 \pi \epsilon_{0} d} - \frac{Q}{4 \pi \epsilon_{0} \sqrt{4 d^{2} + b^{2}}})
$$
所以保留至一阶项的电阻为
$$
R_{12} \approx \frac{1}{2 \pi \gamma a} (1 - \frac{a}{b} + \frac{a}{2d} - \frac{a}{\sqrt{4 d^{2} + b^{2}}})
$$
(d) 在一块无限大的导电平板上某点 $p$ 处通入电流并向无穷远流出,在板上任意处开一圆孔,不包含 $p$ 点,试证在此圆孔边缘上任意两点的电势差之值为不开圆孔时该两点的电势差之值的一倍。

证明

注意到在圆柱内离圆心 $\frac{a^{2}}{d}$ 处放置大小为$I$ 的电流源，并且在圆柱中心放置大小为 $-I$ 的电流源时，圆柱表面法向电流密度为
$$
\begin{gathered}
j_{n} = - \frac{I}{2 \pi} \frac{d \cos \theta - a}{a^{2} + d^{2} - 2ad \cos \theta} + \frac{I}{2 \pi} \frac{a - \frac{a^{2}}{d} \cos \theta}{a^{2} + \frac{a^{4}}{d^{2}} - 2 a \frac{a^{2}}{d} \cos \theta} - \frac{I}{2 \pi r} \\ = 
\frac{I}{2 \pi} \left(\frac{\frac{d^{2}}{a} - 2d \cos \theta + a}{a^{2} + d^{2} - 2ad \cos \theta} - \frac{1}{a} \right) = 0
\end{gathered}
$$
 满足孔边需要的边界条件。所以在挖去圆孔之后孔外空间电流密度分布可以视作电流源和两个像电流源的叠加。假设在圆周上两个点相对于电流源和圆心的连线夹角为 $\theta_{1}$ 和 $\theta_{2}$，此时在挖孔之前，二点之间的电势差为
$$
V_{12} = \frac{I}{4 \pi \gamma} \ln \frac{d^{2} + a^{2} - 2 ad \cos \theta_{2}}{d^{2} + a^{2} - 2 ad \cos \theta_{1}}
$$
在挖孔之后，电势差还应该加上离圆心 $\frac{a^{2}}{d}$ 处电流源带来的电势差
$$
\begin{gathered}
V'_{12}  = \frac{I}{4 \pi \gamma} \ln \frac{d^{2} + a^{2} - 2 ad \cos \theta_{2}}{d^{2} + a^{2} - 2 ad \cos \theta_{1}} + \frac{I}{4 \pi \gamma} \ln \frac{a^{2} + \frac{a^{4}}{d^{2}} - 2 a \frac{a^{2}}{d} \cos \theta_{2}}{a^{2} + \frac{a^{4}}{d^{2}} - 2 a \frac{a^{2}}{d} \cos \theta_{1}} \\ =
\frac{I}{2 \pi \gamma} \ln \frac{d^{2} + a^{2} - 2 ad \cos \theta_{2}}{d^{2} + a^{2} - 2 ad \cos \theta_{1}} = 2 V_{12}
\end{gathered}
$$

### 9. 稳恒电流的磁场

书3.2, 3.7

3.2 均匀无穷长直圆柱形螺线管，每单位长度线圈匝数为 $n$，电流为 $I$，试用唯一性定理求管内外磁感应强度 $\vec{B}$。

证明

由于管内外空间均无自由电流，所以可以使用标势求解，考虑到沿角向的旋转对称性以及沿 $z$ 轴的平移对称性，边界条件为
$$
\begin{gathered}
B_{in,z} - B_{out, z} = \mu_{0} n I \\
\left. B_{out} = 0 \right|_{r \to \infty}
\end{gathered}
$$
所以不妨猜测
$$
\begin{gathered}
\vec{B}_{in} = \mu_{0} n I \hat{z} \\
\vec{B}_{out} = 0
\end{gathered}
$$
由于此时标势和静电场的情况一样具有唯一性，所以该解是合理的

3.7 半径为 $a$ 的无限长圆柱导体上有恒定电流 $J$ 均匀分布于截面上，试解矢势 $\vec{A}$ 的微分方程，设导体的磁导率为 $\mu_{0}$，导体外的磁导率为 $\mu$。
$$
\nabla^{2} \vec{A} = - \mu_{0} \vec{J}
$$
所以 $\vec{A}$ 仅仅有平行于 $\vec{J}$ 方向的分量，此处可以当作标量处理，在圆柱外其满足拉普拉斯方程
$$
A = C \ln r +  \sum_{n = 0}^{\infty} (A_{n} r^{n} + \frac{B_{n}}{r^{n}}) \cos (n \theta) + (C_{n} r^{n} + \frac{D_{n}}{r^{n}}) \sin (n \theta)
$$
由旋转对称性，柱外矢势与角度无关，所以
$$
A_{out} = C \ln r + D
$$
再考虑柱内，考虑到沿角向的旋转对称性以及沿 $z$ 轴的平移对称性，所以 $A = A (r)$
$$
\frac{1}{r} \frac{d}{dr} (r \frac{d}{dr} A) = - \mu_{0} J
$$

$$
r \frac{d}{dr} A = - \frac{1}{2} \mu_{0} J r^{2} + C
$$

$$
\frac{d}{dr} A = - \frac{1}{2} \mu_{0} J r + \frac{C}{r}
$$

为了避免柱中心的发散，取 $C = 0$
$$
A (r) = - \frac{1}{4} \mu_{0} J r^{2} + D
$$
由于矢势本身多一个自由度，不妨令柱面上 $A = 0$

所以
$$
A_{in} (r) = \frac{1}{4} \mu_{0} J (a^{2} - r^{2})
$$
对于柱外空间，由于柱面上矢势大小的连续性
$$
A_{out} (r)  = C \ln \frac{a}{r}
$$
此外由磁场强度的切向连续性，在柱面上
$$
\frac{1}{2} J a = \frac{C}{\mu a}
$$

$$
C = \frac{\mu a^{2} J}{2}
$$

所以磁矢势解为
$$
\begin{gathered}
A_{in} = \frac{1}{4} \mu_{0} J (a^{2} - r^{2}) \hat{z} \\
A_{out} = \frac{\mu a^{2} J}{2} \ln \frac{a}{r} \hat{z}
\end{gathered}
$$

### 10. 磁场问题的一般解法

书3.4, 3.9, 3.13

3.4 设 $x<0$ 半空间充满磁导率为 $\mu$ 的均匀介质，$z>0$ 空间为真空，今有线电流 $I$ 沿 $z$ 轴流动，求磁感应强度和磁化电流分布。

由于界面上磁感应强度法向连续，所以在全空间的磁感应强度大小相等
$$
\pi r (\frac{1}{\mu_{0}} + \frac{1}{\mu}) B = I
$$

$$
\vec{B} = \frac{\mu_{0} \mu}{\mu + \mu_{0}} \frac{I}{\pi r} \vec{e}_{\phi}
$$

磁化电流
$$
\frac{\mu_{0} (I + I_{m})}{2 \pi r} = \frac{\mu_{0} \mu}{\mu + \mu_{0}} \frac{I}{\pi r}
$$

$$
\frac{\mu - \mu_{0}}{\mu + \mu_{0}} I
$$

3.9 将一磁导率为 $\mu$，半径为 $R_{0}$ 的球体，放入均匀磁场 $\vec{H}_{0}$ 内，求总磁感应强度 $\vec{B}$ 和诱导磁矩 $\vec{m}$。

由于是稳态，所以内外的总磁场对应标势均满足拉普拉斯方程，假设
$$
\vec{H}_{in} = H_{1} \cos \theta \hat{r} -  H_{1} \sin \theta \hat{\theta}
$$

$$
\vec{H}_{out} = H_{2} \cos \theta \hat{r} -  H_{2} \sin \theta \hat{\theta} + \frac{H_{3} R_{0}^{3}}{r^{3}} (2 \cos \theta \hat{r} + \sin \theta \hat{\theta})
$$

边界条件
$$
\begin{gathered}
\hat{n} \cdot \vec{B}_{in} = \hat{n} \cdot \vec{B}_{out} \\
\hat{n} \times \vec{H}_{in} = \hat{n} \times \vec{H}_{out}
\end{gathered}
$$
又因为在沿着$\vec{H}_{0}$ 方向趋近于无穷远时场强为$H_{0}$ ，所以 $H_{2} = H_{0}$
$$
\begin{gathered}
\mu H_{1} = \mu_{0} (H_{0} + 2 H_{3}) \\
- H_{1} = - H_{0} + H_{3}
\end{gathered}
$$
解得
$$
\begin{gathered}
H_{1} = \frac{3 \mu_{0}}{\mu + 2 \mu_{0}} H_{0} \\ 
H_{3} = \frac{\mu - \mu_{0}}{\mu + 2 \mu_{0}} H_{0}
\end{gathered}
$$
所以磁场强度为
$$
\begin{gathered}
\vec{H}_{in} = \frac{3 \mu_{0}}{\mu + 2 \mu_{0}} \vec{H}_{0}  \\
\vec{H}_{out} = \vec{H}_{0} + \frac{\mu - \mu_{0}}{\mu + 2 \mu_{0}} R_{0}^{3} \left(\frac{3 (\vec{H}_{0} \cdot \vec{r}) \vec{r}}{r^{5}} - \frac{\vec{H}_{0}}{r^{3}} \right)
\end{gathered}
$$
所以
$$
\vec{B} = 
\begin{cases} 
\frac{3\mu \mu_{0}}{\mu + 2\mu_{0}} \vec{H}_{0} & (r < R_{0}) \\ 
\mu_{0} \vec{H}_{0} + \frac{\mu - \mu_{0}}{\mu + 2\mu_{0}} \mu_{0} R_{0}^{3} \left( \frac{3(\vec{H}_{0} \cdot \vec{r})\vec{r}}{r^{5}} - \frac{\vec{H}_{0}}{r^{3}} \right) & (r > R_{0})
\end{cases}
$$
诱导磁矩
$$
\vec{m} = 4 \pi \frac{\mu - \mu_{0}}{\mu + 2 \mu_{0}} R_{0}^{3} \vec{H}_{0}
$$
3.13 有一个均匀带电的薄导体壳，其半径为 $R_{0}$，总电荷为 $Q$，今使球壳绕自身某一直径以角速度 $\omega$ 转动，求球内外的磁场 $\vec{B}$。

提示：本题通过解 $\vec{A}$ 或 $\varphi_{m}$ 的方程都可以解决，也可以比较本题与 §5 例3 和例5 的电流分布得到结果。

面电流密度
$$
\vec{i} = \frac{Q \omega}{4 \pi R_{0}} \sin \theta \hat{\phi}
$$
在球内外，磁标势都满足拉普拉斯方程

所以假设
$$
\vec{H}_{in} = H_{1} \cos \theta \hat{r} -  H_{1} \sin \theta \hat{\theta}
$$

$$
\vec{H}_{out} = \frac{H_{3} R_{0}^{3}}{r^{3}} (2 \cos \theta \hat{r} + \sin \theta \hat{\theta})
$$

边界条件
$$
H_{1} = 2 H_{3}
$$

$$
- H_{1} - H_{3} = - \frac{Q \omega}{4 \pi R_{0}}
$$

所以
$$
H_{1} = \frac{Q \omega}{6 \pi R_{0}}
$$

$$
H_{3} = \frac{Q \omega}{12 \pi R_{0}}
$$

所以磁感应强度为
$$
\begin{gathered}
\vec{B}_{in} =  \frac{\mu_{0} Q \omega}{6 \pi R_{0}} \hat{z} \\
\vec{B}_{out} = \frac{\mu_{0} Q \omega R_{0}^{2}}{12 \pi} \left( \frac{3(\hat{z} \cdot \vec{r})\vec{r} - \hat{z} r^{2}}{r^{5}}  \right)
\end{gathered}
$$

## 第13次作业

### 1. 运动带电粒子的电磁场

运动带电粒子的描述，推迟效应，李纳-维谢尔势，电磁场，辐射功率及角分布 
作业：  

(a) 书7.7  

7.7 相对论性加速带电粒子的辐射场  

(1) 根据相对论协变的力学方程，证明相对论性加速带电荷 $q$ 的粒子的辐射场公式(1.17)用作用力表示为  
$$
\vec{E} = \frac{q}{4\pi \epsilon_{0} m c^{2} R} \left\{ \frac{\delta^{3}}{\gamma} \vec{e}_{r} \times [(\vec{e}_{r} - \vec{\beta}) \times \vec{F} - (\vec{\beta} \cdot \vec{F})(\vec{e}_{r} \times \vec{\beta})] \right\}_{\text{ret}}
$$
其中 $\delta = (1 - \vec{\beta} \cdot \vec{e}_{r})^{-1}$，$\text{ret}$ 表示时刻 $t' = t - \frac{R}{c}$ 时的值。  
$$
\vec{E}_{radia} (\vec{r}, t) = \frac{q}{4 \pi \epsilon_{0} S_{ret}^{3}} \left\{ \vec{R} \times ((\vec{R} - R \vec{\beta}) \times \vec{a}) \right\}_{ret} = \frac{q}{4 \pi \epsilon_{0} R} \left\{ \delta^{3} \vec{e}_{r} \times ((\vec{e}_{r} - \vec{\beta}) \times \vec{a}) \right\}_{rev}
$$
带入
$$
\vec{F} = \frac{d \vec{p}}{dt} = \gamma m \vec{a} + \gamma^{3} m (\vec{\beta} \cdot \vec{a}) \vec{\beta}
$$
所以
$$
\begin{gathered}
\frac{1}{\gamma m} \vec{e}_{r} \times [(\vec{e}_{r} - \vec{\beta}) \times \vec{F} - (\vec{\beta} \cdot \vec{F})(\vec{e}_{r} \times \vec{\beta})] \\ = 
\vec{e}_{r} \times \left((\vec{e}_{r} - \vec{\beta}) \times (\vec{a} + \gamma^{2} (\vec{\beta} \cdot \vec{a}) \vec{\beta}) - (\vec{\beta} \cdot (\vec{a} + \gamma^{2} (\vec{\beta} \cdot \vec{a}) \vec{\beta})) (\vec{e}_{r} \times \vec{\beta}) \right) \\ =
\vec{e}_{r} \times \left( (\vec{e}_{r} - \vec{\beta}) \times \vec{a} - (\vec{\beta} \cdot \vec{a}) (\vec{e}_{r} \times \vec{\beta}) + (\vec{\beta} \cdot \vec{a}) (\vec{e}_{r} \times \vec{\beta})) \right) = \vec{e}_{r} \times ((\vec{e}_{r} - \vec{\beta}) \times \vec{a})
\end{gathered}
$$
所以
$$
\begin{gathered}
\frac{q}{4\pi \epsilon_{0} m c^{2} R} \left\{ \frac{\delta^{3}}{\gamma} \vec{e}_{r} \times [(\vec{e}_{r} - \vec{\beta}) \times \vec{F} - (\vec{\beta} \cdot \vec{F})(\vec{e}_{r} \times \vec{\beta})] \right\}_{\text{ret}} \\ = 
\frac{q}{4 \pi \epsilon_{0} R} \left\{ \delta^{3} \vec{e}_{r} \times ((\vec{e}_{r} - \vec{\beta}) \times \vec{a}) \right\}_{rev} = \vec{E}_{radia}
\end{gathered}
$$
(2) 利用公式 $(\vec{A} \times \vec{B})^{2} = \vec{A}^{2} \vec{B}^{2} - (\vec{A} \cdot \vec{B})^{2}$，计算 $[(\vec{e}_{r} - \vec{\beta}) \times \vec{F}]^{2}$ 和 $[\vec{F} \cdot (\vec{e}_{r} \times \vec{\beta})]^{2}$
$$
\begin{gathered}
[(\vec{e}_{r} - \vec{\beta}) \times \vec{F}]^{2} = (\vec{e}_{r} - \vec{\beta})^{2} F^{2} - ((\vec{e}_{r} - \vec{\beta}) \cdot \vec{F})^{2} \\ =
(1 + \beta^{2} - 2 \vec{e}_{r} \cdot \vec{\beta}) F^{2} - (\vec{e}_{r} \cdot \vec{F})^{2} - (\vec{\beta} \cdot \vec{F})^{2} + 2 (\vec{e}_{r} \cdot \vec{F}) (\vec{\beta} \cdot \vec{F})
\end{gathered}
$$

$$
\begin{gathered}
[\vec{F} \cdot (\vec{e}_{r} \times \vec{\beta})]^{2} =  F^{2} |\vec{e}_{r} \times \vec{\beta}|^{2} - |\vec{F} \times (\vec{e}_{r} \times \vec{\beta})|^{2} = F^{2} (\beta^{2} - (\vec{e}_{r} \cdot \vec{\beta})^{2}) - |(\vec{F} \cdot \vec{\beta}) \vec{e}_{r} - (\vec{F} \cdot \vec{e}_{r}) \vec{\beta}|^{2} \\ =
F^{2} (\beta^{2} - (\vec{e}_{r} \cdot \vec{\beta})^{2}) - (\vec{F} \cdot \vec{\beta})^{2} - (\vec{F} \cdot \vec{e}_{r})^{2} \beta^{2} + 2 (\vec{e}_{r} \cdot \vec{F}) (\vec{\beta} \cdot \vec{F}) (\vec{e}_{r} \cdot \vec{\beta})
\end{gathered}
$$

(3) 利用上述公式，证明带电粒子的辐射功率的角分布公式(2.5)用作用力表示为  
$$
\frac{d P}{d \Omega} = \frac{q^{2}}{16 \pi^{2} \epsilon_{0} m^{2} c^{3}} \frac{\delta^{3}}{\gamma^{2}} \left[ \vec{F}^{2} - (\vec{\beta} \cdot \vec{F})^{2} - \frac{\delta^{2}}{\gamma^{2}} (\vec{F} \cdot \vec{e}_{r} - \vec{F} \cdot \vec{\beta})^{2} \right]
$$

证明
$$
\begin{gathered}
\frac{dP}{d \Omega} = \frac{1}{\mu_{0}} (\vec{E} \times \vec{B}) \cdot \vec{e}_{r} R^{2} \frac{dt}{dt'} =  \frac{R^{2}}{\mu_{0} c} |\vec{E}_{radia}|^{2} \delta^{-1}  \\ = 
\frac{q^{2}}{16 \pi^{2} \epsilon_{0} m^{2} c^{3}} \left\{ \frac{\delta^{5}}{\gamma^{2}} \left| \vec{e}_{r} \times [(\vec{e}_{r} - \vec{\beta}) \times \vec{F} - (\vec{\beta} \cdot \vec{F})(\vec{e}_{r} \times \vec{\beta})] \right|^{2} \right\}_{\text{ret}} \\ =
\frac{q^{2}}{16 \pi^{2} \epsilon_{0} m^{2} c^{3}} \frac{\delta^{5}}{\gamma^{2}} \left( \left|(\vec{e}_{r} - \vec{\beta}) \times \vec{F} - (\vec{\beta} \cdot \vec{F})(\vec{e}_{r} \times \vec{\beta}) \right|^{2} - [\vec{F} \cdot (\vec{e}_{r} \times \vec{\beta})]^{2} \right) \\ = 
\frac{q^{2}}{16 \pi^{2} \epsilon_{0} m^{2} c^{3}} \frac{\delta^{5}}{\gamma^{2}} ([(\vec{e}_{r} - \vec{\beta}) \times \vec{F}]^{2} + (\vec{\beta} \cdot \vec{F})^{2} (\beta^{2} - (\vec{e}_{r} \cdot \vec{\beta})^{2}) - 2 (\vec{\beta} \cdot \vec{F}) ((\vec{e}_{r} - \vec{\beta}) \times \vec{F}) \cdot (\vec{e}_{r} \times \vec{\beta}) \\ - [\vec{F} \cdot (\vec{e}_{r} \times \vec{\beta})]^{2}) \\ = 
\frac{q^{2}}{16 \pi^{2} \epsilon_{0} m^{2} c^{3}} \frac{\delta^{5}}{\gamma^{2}} \left[ (1 - \vec{e}_{r} \cdot \vec{\beta})^{2} (\vec{F}^{2} - (\vec{\beta} \cdot \vec{F})^{2}) - (1 - \beta^{2}) (\vec{F} \cdot \vec{e}_{r} - \vec{F} \cdot \vec{\beta})^{2} \right] \\ = 
\frac{q^{2}}{16 \pi^{2} \epsilon_{0} m^{2} c^{3}} \frac{\delta^{3}}{\gamma^{2}} \left[ \vec{F}^{2} - (\vec{\beta} \cdot \vec{F})^{2} - \frac{\delta^{2}}{\gamma^{2}} (\vec{F} \cdot \vec{e}_{r} - \vec{F} \cdot \vec{\beta})^{2} \right]
\end{gathered}
$$
(b) 试由定义，$\frac{1}{J} = \int d^{3}{x}' delta \left( r' - r_{0}\left(t - \frac{\|r-r'\|}{c}\right) \right)$ 证明：$J = 1 - \frac{\vec{R}^{*}}{R^{*}} \cdot \frac{\vec{v}^{*}}{c}$。并讨论 $J$ 的物理意义。若在介质中，式中 $c$ 应换为 $\frac{c}{n}$（$n$ 为介质的折射率），则 $J$ 有可能为$0$，它对应什么物理？  

证明，由三维 $\delta$ 函数的性质
$$
\delta (\vec{r}' - \vec{r}_{0} (t - \frac{|\vec{r} - \vec{r}'|}{c})) = \frac{\delta (\vec{r}')}{\|\nabla' (\vec{r}' - \vec{r}_{0} (t - \frac{|\vec{r} - \vec{r}'|}{c}))\|}
$$
所以
$$
J = ||\nabla' (\vec{r}' - \vec{r}_{0} (t - \frac{|\vec{r} - \vec{r}'|}{c}))|| = \left\|\overset{\leftrightarrow}{I} - \frac{\vec{R}^{*} \vec{v}^{*}}{c R^{*}} \right\|
$$
利用线性代数中的结论，对于 $A_{m \times n}$ 以及 $B_{n \times m}$ 来说
$$
\|I_{m} - AB \| = \|I_{n} - BA \|
$$
所以
$$
J = \left\|\overset{\leftrightarrow}{I} - \frac{\vec{R}^{*} \vec{v}^{*}}{c R^{*}} \right\| = 1 - \frac{\vec{R}^{*}}{R^{*}} \cdot \frac{\vec{v}^{*}}{c}
$$
当在介质中时
$$
J = 1 - \frac{\vec{R}^{*}}{R^{*}} \cdot \frac{n \vec{v}^{*}}{c}
$$
当 $n$ 取值大到 $J = 0$ 时，也就是粒子运动速度大于介质中光速，此时会发生切连科夫辐射，此时辐射强度集中在 $\cos \theta = \frac{c}{n v^{*}}$ 处。

(c) 试证任意运动的电磁场为
$$
\vec{E}(\vec{r}, t) = \frac{q}{4\pi\epsilon_{0} S^{* 3}} \left( \vec{R}^{*} - \frac{R^{*} \vec{v}^{*}}{c} \right) \left(1 - \frac{v^{2}}{c^{2}}\right) + \frac{q}{4\pi\epsilon_{0} c^{2} S^{* 3}} \vec{R}^{*} \times \left[ \left( \vec{R}^{*} - \frac{R^{*} \vec{v}^{*}}{c} \right) \times \vec{a}^{*} \right]
$$

$$
\vec{B}(\vec{r}, t) = \frac{\vec{R}^{*}}{cR^{*}} \times \vec{E}(\vec{r}, t)
$$

证明

注意：一下推导中可以分解算符为
$$
\begin{gathered}
\nabla = \nabla^{*} + \nabla t^{*} \frac{\partial}{\partial t^{*}} \\
\frac{\partial}{\partial t} = \frac{\partial t^{*}}{\partial t} \frac{\partial}{\partial t^{*}}
\end{gathered}
$$
由推迟时间定义 $t^{*} = t - \frac{R^{*}}{c}$，固定场点 $\vec{r}$，对 $t$ 求导：
$$
\frac{\partial t^{*}}{\partial t} = 1 - \frac{1}{c} \frac{\partial R^{*}}{\partial t}
$$
其中 $R^{*} = |\vec{r} - \vec{r}_{0}(t^{*})|$，且：
$$
\frac{\partial R^{*}}{\partial t} = -\frac{\vec{R}^{*} \cdot \vec{v}^{*}}{R^{*}} \frac{\partial t^{*}}{\partial t}
$$
代入得：
$$
\frac{\partial t^{*}}{\partial t} = 1 + \frac{\vec{R}^{*} \cdot \vec{v}^{*}}{c R^{*}} \frac{\partial t^{*}}{\partial t} \implies \frac{\partial t^{*}}{\partial t} = \frac{R^{*}}{R^{*} - \frac{\vec{R}^{*} \cdot \vec{v}^{*}}{c}} = \frac{R^{*}}{S^{*}}
$$
$\nabla R^{*}$
$R^{*} = |\vec{r} - \vec{r}_{0}(t^{*})|$，固定 $t$，对 $\vec{r}$ 求梯度：
$$
\nabla R^{*} = \frac{\vec{R}^{*}}{R^{*}} - \frac{\vec{R}^{*} \cdot \vec{v}^{*}}{R^{*}} \nabla t^{*}
$$
代入 $\nabla t^{*} = -\frac{1}{c} \nabla R^{*}$：
$$
\nabla R^{*} = \frac{\vec{R}^{*}}{R^{*}} + \frac{\vec{R}^{*} \cdot \vec{v}^{*}}{c R^{*}} \nabla R^{*} \implies \nabla R^{*} = \frac{\frac{\vec{R}^{*}}{R^{*}}}{1 - \frac{\vec{R}^{*} \cdot \vec{v}^{*}}{c R^{*}}} = \frac{\vec{R}^{*}}{S^{*}}
$$
$\nabla t^{*}$ 
由 $t^{*} = t - \frac{R^{*}}{c}$ 得：
$$
\nabla t^{*} = -\frac{1}{c} \nabla R^{*} = -\frac{1}{c} \frac{\vec{R}^{*}}{S^{*}}
$$
综上所述
$$
\begin{gathered}
\nabla R^{*} = \frac{\vec{R}^{*}}{S^{*}} \\
\nabla t^{*} = - \frac{1}{c} \frac{\vec{R}^{*}}{S^{*}} \\
\frac{\partial R^{*}}{\partial t} = - \frac{\vec{R}^{*} \cdot \vec{v}^{*}}{S^{*}} \\
\frac{\partial t^{*}}{\partial t} = \frac{R^{*}}{S^{*}}
\end{gathered}
$$
所以由李纳维谢尔势
$$
\phi(\vec{r}, t) = \frac{q}{4\pi\epsilon_{0}} \frac{1}{S^{*}}
$$
$$
\vec{A}(\vec{r}, t) = \frac{\mu_{0} q}{4\pi} \frac{\vec{v}^{*}}{S^{*}}
$$

$$
\vec{E} = -\nabla \phi - \frac{\partial \vec{A}}{\partial t}
$$

$-\nabla \phi$ 
$\phi = \frac{q}{4\pi\epsilon_{0}} (S^{*})^{-1}$，先求 $\nabla S^{*}$：
$$
\nabla S^{*} = \nabla R^{*} - \frac{1}{c} \nabla (\vec{R}^{*} \cdot \vec{v}^{*}) = \frac{\vec{R}^{*}}{S^{*}} - \frac{\vec{v}^{*}}{c} + \frac{1}{c^{2}} (\vec{R}^{*} \cdot \vec{a}^{*} - v^{*2}) \frac{\vec{R}^{*}}{S^{*}}
$$
故：
$$
-\nabla \phi = \frac{q}{4\pi\epsilon_{0}} \frac{1}{(S^{*})^{2}} \left[ \frac{\vec{R}^{*}}{S^{*}} - \frac{\vec{v}^{*}}{c} + \frac{1}{c^{2}} (\vec{R}^{*} \cdot \vec{a}^{*} - v^{*2}) \frac{\vec{R}^{*}}{S^{*}} \right]
$$
$-\frac{\partial \vec{A}}{\partial t}$
$\vec{A} = \frac{\mu_{0} q}{4\pi} \frac{\vec{v}^{*}}{S^{*}}$，计算得：
$$
-\frac{\partial \vec{A}}{\partial t} = -\frac{q}{4\pi\epsilon_{0} c^{2}} \frac{1}{(S^{*})^{2}} \frac{R^{*}}{S^{*}} \left[ \vec{a}^{*} + \frac{\vec{v}^{*} (\vec{R}^{*} \cdot \vec{v}^{*})}{(R^{*})^{2}} - \frac{v^{*2}}{c} \frac{\vec{v}^{*}}{R^{*}} + \frac{\vec{v}^{*} (\vec{R}^{*} \cdot \vec{a}^{*})}{c R^{*}} \right]
$$
自场项：
$$
\vec{E}_{\text{self}} = \frac{q}{4\pi\epsilon_{0} S^{*3}} \left( \vec{R}^{*} - \frac{R^{*} \vec{v}^{*}}{c} \right) \left(1 - \frac{v^{2}}{c^{2}}\right)
$$
辐射项：
$$
\vec{E}_{\text{radia}} = \frac{q}{4\pi\epsilon_{0} c^{2} S^{*3}} \vec{R}^{*} \times \left[ \left( \vec{R}^{*} - \frac{R^{*} \vec{v}^{*}}{c} \right) \times \vec{a}^{*} \right]
$$
总电场：
$$
\vec{E}(\vec{r}, t) = \vec{E}_{\text{vel}} + \vec{E}_{\text{acc}} = \frac{q}{4\pi\epsilon_{0} S^{* 3}} \left( \vec{R}^{*} - \frac{R^{*} \vec{v}^{*}}{c} \right) \left(1 - \frac{v^{2}}{c^{2}}\right) + \frac{q}{4\pi\epsilon_{0} c^{2} S^{* 3}} \vec{R}^{*} \times \left[ \left( \vec{R}^{*} - \frac{R^{*} \vec{v}^{*}}{c} \right) \times \vec{a}^{*} \right]
$$
磁场：
$$
\begin{gathered}
\vec{B}(\vec{r}, t) = \nabla \times \vec{A} = \nabla^{*} \times \vec{A} + (\nabla t^{*}) \times \frac{\partial \vec{A}}{\partial t^{*}} = \nabla^{*} \times (\vec{v}^{*} \frac{\phi}{c^{2}}) + \frac{\partial t}{\partial t^{*}} (\nabla t^{*}) \times \frac{\partial \vec{A}}{\partial t}  \\ = (\nabla^{*} \phi) \times \frac{\vec{v}^{*}}{c^{2}} - \frac{\vec{R}^{*}}{c R^{*}} \times \frac{\partial \vec{A}}{\partial t}
\end{gathered}
$$
$$
\nabla^{*} \phi = \nabla^{*} \frac{q}{4\pi\epsilon_{0}} \frac{1}{S^{*}}  = - \frac{q}{4\pi\epsilon_{0} S^{2*}} \nabla^{*} (R^{*} - \frac{\vec{R}^{*} \cdot \vec{v}^{*}}{c}) = - \frac{q}{4\pi\epsilon_{0} S^{2*}} (\frac{\vec{R}^{*}}{R^{*}} - \frac{\vec{v}^{*}}{c})
$$

所以
$$
(\nabla^{*} \phi) \times \frac{\vec{v}^{*}}{c^{2}} = - \frac{q}{4\pi\epsilon_{0} S^{2*}} \frac{\vec{R}^{*}}{R^{*}} \times \frac{\vec{v}^{*}}{c^{2}} = - \frac{\vec{R}^{*}}{cR^{*}} \times \frac{q \vec{v}^{*}}{4 \pi \epsilon_{0} c S^{2*}} = \frac{\vec{R}^{*}}{c R^{*}} \times (- \nabla \phi)
$$
所以
$$
\vec{B} = \frac{\vec{R}^{*}}{c R^{*}} \times (- \nabla \phi - \frac{\partial \vec{A}}{\partial t}) =  \frac{\vec{R}^{*}}{c R^{*}} \times \vec{E}
$$
(d) 书7.1, 7.3, 7.4  

7.1 电子的速度与加速度的夹角  

电子的速度 $v$ 与加速度 $\dot{v}$ 的夹角为 $\alpha$，证明 $v$ 与 $\dot{v}$ 平面内与 $\dot{v}$ 的夹角为 $\beta$ 的方向上无辐射，$\beta$ 由以下方程决定：  

$$
\sin \beta = \frac{v}{c} \sin \alpha
$$

证明
$$
\frac{d P}{d \Omega} (t') = \frac{q^{2}}{16 \pi^{2} \epsilon_{0} c^{3}} \frac{|\vec{e}_{r} \times ((\vec{e}_{r} - \vec{\beta}) \times \vec{a})|^{2}}{(1 - \vec{e}_{r} \cdot \vec{\beta})^{5}}
$$

$$
\vec{e}_{r} \times ((\vec{e}_{r} - \vec{\beta}) \times \vec{a}) = (\vec{e}_{r} \cdot \vec{a}) (\vec{e}_{r} - \vec{\beta}) - (1 - \vec{e}_{r} \cdot \vec{\beta}) \vec{a}
$$

没有辐射的方向满足
$$
\begin{gathered}
(\vec{e}_{r} \cdot \vec{a}) (\vec{e}_{r} - \vec{\beta}) = (1 - \vec{e}_{r} \cdot \vec{\beta}) \vec{a} \\
(\vec{e}_{r} \cdot \vec{a}) (\vec{e}_{r} \cdot \vec{a} - \vec{\beta} \cdot \vec{a}) = (1 - \vec{e}_{r} \cdot \vec{\beta}) a^{2}
\end{gathered}
$$
假设 $\vec{e}_{r}$ 与 $\vec{a}$ 的夹角为 $\beta$ ，切该夹角的正方向与 $\alpha$ 定义相同
$$
\cos \beta (\cos \beta - \frac{v}{c} \cos \alpha) = 1 - \frac{v}{c} \cos (\beta - \alpha)
$$

$$
\cos^{2} \beta - \frac{v}{c} \cos \beta \cos \alpha = 1 - \frac{v}{c} (\cos \beta \cos \alpha + \sin \beta \sin \alpha)
$$

$$
\cos^{2} \beta = 1 - \frac{v}{c} \sin \beta \sin \alpha
$$

$$
\frac{v}{c} \sin \beta \sin \alpha = \sin^{2} \beta
$$

$$
\sin \beta = \frac{v}{c} \sin \alpha
$$

7.3 带电粒子的简谐振动  

有一带电荷 $q$ 的粒子沿 $z$ 轴作简谐振动 $z = z_{0} e^{- i\omega t}$。设 $z_{0} \omega \ll c$，求： 
(1) 它的辐射场和能流

利用偶极辐射的结论，假设场点和 $z$ 轴的夹角为 $\theta$
$$
\vec{E} \approx \frac{q}{4 \pi \epsilon_{0} c^{2} R} (\vec{e}_{r} \times (\vec{e}_{r} \times \vec{a}))
$$
其中 $R$ 和 $a$ 均为推迟时间时的结果。由于场点和粒子距离 $R >> z_{0}$ ，所以在远场处推迟时间可以近似为 $\frac{R}{c}$
$$
\begin{gathered}
\vec{E} \approx \frac{q}{4 \pi \epsilon_{0} c^{2} R} (\vec{e}_{r} \times (\vec{e}_{r} \times \vec{a})) = \frac{q}{4 \pi \epsilon_{0} c^{2} R} (- \omega^{2} z_{0} e^{- i \omega (t - \frac{R}{c})}) (\vec{e}_{r} \times (\vec{e}_{r} \times \vec{e}_{z})) \\ = 
- \frac{\omega^{2} q z_{0} \sin \theta}{4 \pi \epsilon_{0} c^{2} R} e^{i \omega (\frac{R}{c} - t)} \vec{e}_{\theta}
\end{gathered}
$$

$$
\vec{B} \approx \frac{\vec{e}_{r}}{c} \times \vec{E} = - \frac{\omega^{2} q z_{0} \sin \theta}{4 \pi \epsilon_{0} c^{3} R} e^{i \omega (\frac{R}{c} - t)} \vec{e}_{\phi}
$$

$$
<\vec{S}> = \frac{1}{2 \mu_{0}} \vec{E} \times \vec{B}^{*} = \frac{\omega^{4} \mu_{0} q^{2} z_{0}^{2} \sin^{2} \theta}{32 \pi^{2} c R^{2}} \vec{e}_{r}
$$

(2) 它的自场，比较两者的不同

自场
$$
\vec{E} \approx \frac{q}{4 \pi \epsilon_{0} R^{3}} \vec{R}
$$

$$
\vec{B} \approx \frac{\mu_{0} q}{4 \pi R^{3}} (\vec{v} \times \vec{R})
$$

区别在于在远场处自场是近似不变的，而辐射场会随时间波动，并且辐射场在远处的能流积分不会衰减，而自场在远处无法产生明显效果

7.4 带电粒子的匀速率圆周运动  

带电荷 $q$ 的粒子在 $xy$ 平面上绕 $z$ 轴作匀速率圆周运动，角频率为 $\omega$，半径 $R_{0}$。设 $\omega R_{0} \ll c$，试计算辐射场的频率和能流密度，讨论 $\theta = 0, \frac{\pi}{4}, \frac{\pi}{2}$ 及 $\pi$ 处电磁场的偏振。  

假设电子运动方程为 （取场点方向在 $x-y$ 平面上的投影为 $x$ 轴正方向）
$$
\vec{r} (t) = (R_{0} \cos \omega t, R_{0} \sin \omega t)
$$

$$
\vec{v} = (- \omega R_{0} \sin \omega t, \omega R_{0} \cos \omega t)
$$

$$
\vec{a}  = (- \omega^{2} R_{0} \cos \omega t, - \omega^{2} R_{0} \sin \omega t) = - \omega^{2} R_{0} \cos \theta \cos \omega t \vec{e}_{r} - \omega^{2} R_{0} \sin \theta \cos \omega t \vec{e}_{\theta} - \omega^{2} R_{0} \sin \omega t \vec{e}_{\phi}
$$

所以在远场近似下
$$
\begin{gathered}
\vec{E}_{radia} = \frac{q}{4 \pi \epsilon_{0} c^{2} R} (\vec{e}_{r} \times (\vec{e}_{r} \times \vec{a})) = \frac{q}{4 \pi \epsilon_{0} c^{2} R} (\vec{e}_{r} \times (- \omega^{2} R_{0}\cos \theta \cos \omega (t - \frac{R}{c}) \vec{e}_{\phi} + \omega^{2} R_{0} \sin \omega (t - \frac{R}{c} ) \vec{e}_{\theta})) \\ =
\frac{q \omega^{2} R_{0}}{4 \pi \epsilon_{0} c^{2} R} (\cos \theta \cos \omega (t - \frac{R}{c})  \vec{e}_{\theta} + \sin \omega (t - \frac{R}{c}) \vec{e}_{\phi}) = \frac{q R_{0} \omega^{2}}{4\pi \epsilon_{0} c^{2} R} (\cos \theta \vec{e}_{\theta} + i \vec{e}_{\phi}) e^{i\left(\frac{\omega R - \omega t}{c}\right)}
\end{gathered}
$$

$$
\vec{B}_{radia} = \frac{\vec{e}_{r}}{c} \times \vec{E}_{radia} = \frac{q R_{0} \omega^{2}}{4\pi \epsilon_{0} c^{3} R} (-i \vec{e}_{\theta} + \cos \theta \vec{e}_{\phi}) e^{i\left(\frac{\omega R - \omega t}{c}\right)}
$$

$$
<\vec{S}> = \frac{1}{2 \mu_{0}} \vec{E} \times \vec{B}^{*} = \frac{q^{2} R_{0}^{2} \omega^{4}}{32 \pi^{2} \epsilon_{0} c^{3} R^{2}} (\cos^{2} \theta + 1) \vec{e}_{r}
$$

当 $\theta = 0, \pi$ 时， 辐射为圆偏振  

当$\theta = \frac{\pi}{2}$ 时，辐射为线偏振  

其余情况为椭圆偏振 （$\theta = \frac{\pi}{4}$）

### 4. 带电粒子的电磁场对粒子本身的反作用

能量转化与守恒定律，牛顿定律，电子的经典运动方程，电磁质量，辐射阻尼力，谱线的自然宽度 

作业：书7.9 

7.9 带电粒子在磁场中的辐射  

一个质量为 $m$，电荷为 $q$ 的粒子在一个平面上运动，该平面垂直于均匀静磁场 $\vec{B}$。 
(1) 计算辐射功率，用 $m, q, B, \gamma$ 表示 ($E = \gamma m c^{2}$) 

角频率
$$
q v B = \gamma m v \omega
$$

$$
\omega = \frac{q B}{\gamma m}
$$

回旋半径
$$
R_{0} = \frac{v}{\omega} = \frac{m c}{q B} \sqrt{\gamma^{2} - 1}
$$
再推导相对论情形下的辐射功率表达式
$$
\vec{E} = \frac{q}{4 \pi \epsilon_{0} c^{2} R (1 - \frac{\vec{v} \cdot \vec{R}}{c R})^{3}} (\vec{e}_{r} \times ((\vec{e}_{r} - \frac{\vec{v}}{c}) \times \vec{a})))
$$

$$
\vec{a}  = (- \omega^{2} R_{0} \cos \omega t, - \omega^{2} R_{0} \sin \omega t) = - \omega^{2} R_{0} \cos \theta \cos \omega t \vec{e}_{r} - \omega^{2} R_{0} \sin \theta \cos \omega t \vec{e}_{\theta} - \omega^{2} R_{0} \sin \omega t \vec{e}_{\phi}
$$

带入 $\vec{v} \cdot \vec{a} = 0$ 时的辐射功率公式
$$
P = \frac{q^{2} a^{2}}{6 \pi \epsilon_{0} c^{3}} \gamma^{4} = \frac{q^{2} \omega^{4} R_{0}^{2}}{6 \pi \epsilon_{0} c^{3}} \gamma^{4} = \frac{B^{2} q^{4}}{6 \pi \epsilon_{0} m^{2} c} (\gamma^{2} - 1)
$$
(2) 若在 $t = t_{0}$ 时，$E_{0} = \gamma_{0} m c^{2}$，求 $E(t)$
$$
\frac{d E}{dt} = - \frac{B^{2} q^{4}}{6 \pi \epsilon_{0} m^{2} c} (\frac{E^{2}}{m^{2} c^{4}} - 1)
$$

$$
\frac{d E}{E^{2} - m^{2} c^{4}} = - \frac{B^{2} q^{4}}{6 \pi \epsilon_{0} m^{4} c^{5}} dt
$$

$$
\int_{\gamma_{0} m c^{2}}^{E} \frac{d E}{E - m c^{2}} - \frac{d E}{E + m c^{2}} = \int_{t_{0}}^{t} - \frac{B^{2} q^{4}}{3 \pi \epsilon_{0} m^{3} c^{3}} dt
$$

$$
E (t) = m c^{2} \left( \frac{1 + \frac{\gamma_{0} - 1}{\gamma_{0} + 1} e^{-\frac{B^{2} q^{4}}{3 \pi \epsilon_{0} m^{3} c^{3}} (t - t_{0})}}{1 - \frac{\gamma_{0} - 1}{\gamma_{0} + 1} e^{-\frac{B^{2} q^{4}}{3 \pi \epsilon_{0} m^{3} c^{3}} (t - t_{0})}} \right)
$$

(3) 若初始时刻粒子为非相对论性的，其动能为 $T_{0}$，求时刻 $t$ 的粒子动能 $T$

非相对论时
$$
P \approx \frac{q^{4} B^{2}}{6 \pi \epsilon_{0} c^{3} m^{2}} v^{2} = \frac{q^{4} B^{2}}{3 \pi \epsilon_{0} c^{3} m^{3}} T
$$

$$
\frac{d T}{dt} = - \frac{q^{4} B^{2}}{3 \pi \epsilon_{0} c^{3} m^{3}} T
$$

$$
\int_{T_{0}}^{T} \frac{d T}{T} = \int_{0}^{t}  - \frac{q^{4} B^{2}}{3 \pi \epsilon_{0} c^{3} m^{3}} dt
$$

$$
T (t) = T_{0}  e^{-\frac{B^{2} q^{4}}{3 \pi \epsilon_{0} m^{3} c^{3}} (t - t_{0})}
$$

### 5. 电磁波的散射与吸收，介质的色散

自由电子对电磁波的散射，束缚电子对电磁波的散射，介质的色散，因果性与色散关系 

作业：书7.5, 7.6, 7.8

7.5 带电谐振子在磁场中的运动  

设有一各向同性的带电谐振子（无外场时粒子受弹性恢复力 $-m \omega_{0}^{2} \vec{r}$ 作用），处于均匀恒定外磁场 $\vec{B}$ 中，假设粒子速度 $v \ll c$ 及辐射阻尼力可以忽略，求： 
(1) 振子运动的通解

在非相对论情形下
$$
\vec{f} = - m \omega_{0}^{2} \vec{r} + q \vec{v} \times \vec{B} = m \vec{a}
$$

$$
\begin{gathered}
m \ddot{x} = - m \omega_{0}^{2} x + q B\dot{y} \\ 
m \ddot{y} = - m \omega_{0}^{2} y - q B \dot{x} \\
m \ddot{z} = - m \omega_{0}^{2} z
\end{gathered}
$$

采取复数法求解 （ $z = x + iy$ ）
$$
\ddot{z} = - \omega_{0}^{2} z - i 2\omega_{B} \dot{z}
$$
其中 $\omega_{B} = \frac{q B}{2m}$

方程通解为
$$
z = A e^{i (\sqrt{\omega_{0}^{2} + \omega_{B}^{2}} - \omega_{0}) t} + B e^{- i (\sqrt{\omega_{0}^{2} + \omega_{B}^{2}} + \omega_{0}) t}
$$
所以振子运动的通解为 
$$
\vec{r} (t) =  A (\hat{x} - i \hat{y}) e^{- i (-\sqrt{\omega_{0}^{2} + \omega_{B}^{2}} + \omega_{0}) t} + B (\hat{x} + i \hat{y}) e^{- i (\sqrt{\omega_{0}^{2} + \omega_{B}^{2}} + \omega_{0}) t} + C \hat{z} e^{- i \omega_{0} t}
$$
(2) 利用上题结果，讨论沿磁场方向和垂直于磁场方向上辐射场的频率和偏振。  

沿着磁场方向：因为 $z$ 方向振动平行于 $\vec{e}_{r}$ ，所以不会产生辐射场

利用7.4 的结果，可以把振动分解为频率为 $- \omega_{0} + \sqrt{\omega_{0}^{2} + \omega_{B}^{2}}$  和 $\omega_{0} + \sqrt{\omega_{0}^{2} + \omega_{B}^{{2}}}$ 的叠加，并且二者均为圆偏振，其中前者是左旋，后者是右旋

垂直磁场方向：此时在垂直于 $\vec{e}_{r}$ 的平面内振动的投影可以分解为

$z$ 方向的频率为 $\omega_{0}$ 的以及原来 $x- y$ 平面内频率为 $\omega_{0} - \sqrt{\omega_{0}^{2} + \omega_{B}^{2}}$  和 $\omega_{0} + \sqrt{\omega_{0}^{2} + \omega_{B}^{{2}}}$ 的叠加。三者均为线偏振，并且频率为 $\omega_{0}$ 的波的偏振方向与频率为 $\omega_{0} - \sqrt{\omega_{0}^{2} + \omega_{B}^{2}}$  和 $\omega_{0} + \sqrt{\omega_{0}^{2} + \omega_{B}^{{2}}}$ 的波是垂直的。

7.6 电子在均匀磁场中的运动  

设电子在均匀外磁场 $\vec{B}_{0}$ 中运动，取磁场 $\vec{B}$ 的方向为 $z$ 轴方向，已知 $t = 0$ 时，$x = R_{0}$，$y = z = 0$，$\dot{x} = \dot{z} = 0$，$\dot{y} = v_{0}$，设非相对论条件满足，求： 
(1) 考虑辐射阻尼力的电子运动轨道

对于题示这种准周期运动，可以采取平均辐射阻尼力 $\frac{e^{2}}{6 \pi \epsilon_{0} c^{3}} \dot{\vec{a}}$

此时运动方程变为
$$
\begin{gathered}
\ddot{x} = \omega_{0} \dot{y} + \frac{\gamma}{\omega_{0}^{2}} \dddot{x} \\
\ddot{y} = - \omega_{0} \dot{x} + \frac{\gamma}{\omega_{0}^{2}} \dddot{y}
\end{gathered}
$$
其中 $\omega_{0} = \frac{q B}{m}, \gamma = \frac{e^{2} \omega_{0}^{2}}{6 \pi \epsilon_{0} m c^{3}}$

同样采取复数法求解，令 $z = x + iy$
$$
\ddot{z} = - i \omega_{0} \dot{z} + \frac{\gamma}{\omega_{0}^{2}} \dddot{z}
$$
特征方程
$$
\frac{\gamma}{\omega_{0}^{2}} \lambda^{2} - \lambda - i \omega_{0} = 0
$$

$$
\lambda = \frac{\omega_{0}^{2} \pm \omega_{0}^{2} \sqrt{1 + i 4 \frac{\gamma}{\omega_{0}}}}{2 \gamma}
$$

由于 $\gamma << 1$ ，所以
$$
\lambda \approx \frac{\omega_{0}^{2} - \omega_{0}^{2} (1 + i 2 \frac{\gamma}{\omega_{0}} + 2 \frac{\gamma^{2}}{\omega_{0}^{2}})}{2 \gamma} = - i \omega_{0} - \gamma
$$
所以带入初始条件，得到运动轨迹为
$$
\begin{gathered}
x \approx \left( R_{0} - \frac{v_{0}}{\omega_{0}} \right) + \frac{v_{0}}{\omega_{0}} e^{-\gamma t} \cos \omega_{0} t \\
y \approx \frac{v_{0}}{\omega_{0}} e^{-\gamma t} \sin \omega_{0} t
\end{gathered}
$$
(2) 电子单位时间内的辐射能量

单位时间内，带入运动方向与加速度方向垂直的结论
$$
P (t) = \frac{e^{2}}{6 \pi \epsilon_{0} c^{3}} a^{2} = \frac{e^{2}}{6 \pi \epsilon_{0} c^{3}} \omega_{0}^{2} v_{0}^{2} e^{- 2 \gamma t}
$$
7.8 等离子体折射率  

应用 §6 中导出介质色散的方法，推导等离子体折射率的公式(见第四章(9.29)式) 

 假设等离子体中单位体积的正负电荷数密度为 $N$ ，在打入电磁波 $\vec{E} = \vec{E}_{0} e^{-i \omega t}$ 时，电子运动方程可以写作
$$
\ddot{\vec{r}} = - \frac{e \vec{E}_{0}}{m} e^{- i \omega t}
$$
所以稳定时
$$
\vec{r} = \frac{e \vec{E}_{0}}{m \omega^{2}} e^{- i \omega t}
$$
极化强度
$$
\vec{P} = - \frac{N e^{2} \vec{E}_{0}}{m \omega^{2}} e^{- i \omega t}
$$

$$
\epsilon_{r} = 1 - \frac{N e^{2}}{m \epsilon_{0} \omega^{2}}
$$

$$
n(\omega) = \sqrt{1 - \frac{N e^{2}}{\epsilon_{0} m \omega^{2}}}
$$
