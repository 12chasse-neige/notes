# Feynman Lectures on Physics (2) Homework

## 第1次作业

以下所有运算均采取爱因斯坦求和约定

### 1.  高维空间的矢量分析

(1). 一般而言，叉乘只能定义在特殊的维度，做为其推广，外积可以定义在任意维度。假设 $\vec{e}_{1} = (1, 0, 0)^{T}$、$\vec{e}_{2} = (0, 1, 0)^{T}$ 和 $\vec{e}_{3} = (0, 0, 1)^{T}$ 为 $\mathbb{R}^{3}$ 上的标准基底，则 $\forall \vec{u} = u_{1}\vec{e}_{1} + u_{2}\vec{e}_{2} + u_{3}\vec{e}_{3}$，$\vec{v} = v_{1}\vec{e}_{1} + v_{2}\vec{e}_{2} + v_{3}\vec{e}_{3} \in \mathbb{R}^{3}$，其外积定义为：
$$
\vec{u} \wedge \vec{v} = (u_{1} {v}_{2} - u_{2}v_{1}) (\vec{e}_{1} \wedge \vec{e}_{2}) + (u_{2}v_{3} - u_{3}v_{2}) (\vec{e}_{2} \wedge \vec{e}_{3}) + (u_{3}v_{1} - u_{1}v_{3}) (\vec{e}_{3} \wedge \vec{e}_{1}) \quad (1.1)
$$
对于 $\vec{w} = w_{1}\vec{e}_{1} + w_{2}\vec{e}_{2} + w_{3}\vec{e}_{3}$，试计算：
$$
\begin{gathered}
\vec{u} \wedge \vec{v} \wedge \vec{w} \\ = ((u_{1} v_{2} - u_{2} v_{1}) (\vec{e_{1}} \wedge \vec{e_{2}}) + (u_{2} v_{3} - u_{3} v_{2}) (\vec{e_{2}} \wedge \vec{e_{3}}) + (u_{3} v_{1} - u_{1} v_{3}) (\vec{e_{3}} \wedge \vec{e_{1}})) \wedge (w_{1} \vec{e_{1}} + w_{2} \vec{e_{2}} + w_{3} \vec{e_{3}}) \\
= (u_{1} v_{2} - u_{2} v_{1}) w_{3} (\vec{e_{1}} \wedge \vec{e_{2}} \wedge \vec{e_{3}}) + (u_{2} v_{3} - u_{3} v_{2}) w_{1} (\vec{e_{2}} \wedge \vec{e_{3}} \wedge \vec{e_{1}}) + (u_{3} v_{1} - u_{1} v_{3}) w_{2} (\vec{e_{3}} \wedge \vec{e_{1}} \wedge \vec{e_{2}}) \\
= (\epsilon_{ijk} u_{i} v_{j} w_{k}) (\vec{e_{1}} \wedge \vec{e_{2}} \wedge \vec{e_{3}})
\end{gathered}
$$

(2). 从外积的运算法则中我们发现外积具有和叉乘类似的结构。事实上，两者可以通过 Hodge 对偶联系起来。假设 $u = \frac{1}{p!}u_{\mu_{1}\cdots\mu_{p}}e_{\mu_{1}} \wedge \cdots \wedge e_{\mu_{p}}$ 是 $\mathbb{R}^{n}$ 中的 $p$-形式，则 Hodge 对偶将 $u$ 映射为 $(n - p)$-形式：
$$
\star u = \star \left( \frac{1}{p!}u_{\mu_{1}\cdots\mu_{p}}e_{\mu_{1}} \wedge \cdots \wedge e_{\mu_{p}} \right) = \frac{1}{p!(n - p)!}\epsilon_{\nu_{1}\cdots\nu_{p},\mu_{1}\cdots\mu_{n-p}}u_{\nu_{1}\cdots\nu_{p}}e_{\mu_{1}} \wedge \cdots \wedge e_{\mu_{n-p}}
$$
其中 $\epsilon_{\nu_{1}\cdots\nu_{p},\mu_{1}\cdots\mu_{n-p}}$ 为 Levi-Civita 符号。写成分量形式为：
$$
(\star u)_{\mu_{1}\cdots\mu_{n-p}} = \frac{1}{p!}\epsilon_{\nu_{1}\cdots\nu_{p},\mu_{1}\cdots\mu_{n-p}}u_{\nu_{1}\cdots\nu_{p}}
$$
特别的，对于 $\mathbb{R}^{3}$ 中的矢量 $\vec{u} = (u_{1}, u_{2}, u_{3})$ 有：
$$
\star \vec{u} = u_{1}\vec{e}_{2} \wedge \vec{e}_{3} + u_{2}\vec{e}_{3} \wedge \vec{e}_{1} + u_{3}\vec{e}_{1} \wedge \vec{e}_{2}
$$
试证明：
$$
\begin{gathered}
\vec{u} \wedge \vec{v} = \star (\vec{u} \times \vec{v}) \\
\vec{u} \times \vec{v} = \star (\vec{u} \wedge \vec{v}) 
\end{gathered}
$$

证明：$\vec{u} \times \vec{v} = \epsilon_{ijk} u_{i} v_{j} \vec{e_{k}}$ ，是一个1-form。将它作霍奇对偶：

注：由于原题中的 Hodge Star 貌似是对一组排列的指标定义的（我不是很理解这么写的原因，我认为不在 p-form 前面加 $\frac{1}{p!}$ 是不利于指标运算的），为了后续利用指标计算方便，我们将其该写为对所有排列指标作用的形式，并通过因子 $\frac{1}{(n-p)!}$ 消去简并的重复系数：
$$
\star (\frac{1}{p!} u_{\mu_{1} \cdots \mu_{p}} e_{\mu_{1}} \wedge \cdots \wedge e_{\mu_{p}}) = \frac{1}{(p)! (n-p)!} \epsilon_{\nu_{1} \cdots \nu_{p}, \mu_{1} \cdots \mu_{n-p}} u_{\nu_{1} \cdots \nu_{p}} e_{\mu_{1}} \wedge \cdots \wedge e_{\mu_{n-p}}
$$
此时$\mu_{1}, \cdots ,\mu_{n-p}$ 可以取遍所有$(n-p)!$个值。
$$
\begin{gathered}
\star (\vec{u} \times \vec{v}) = \frac{1}{2!} \epsilon_{klm} \epsilon_{ijk} u_{i} v_{j} (\vec{e_{l}} \wedge \vec{e_{m}}) \\
= \frac{1}{2} \begin{vmatrix} \delta_{li} & \delta_{lj} \\ \delta_{mi} & \delta_{mj} \end{vmatrix} u_{i} v_{j} (\vec{e_{l}} \wedge \vec{e_{m}}) \\
= \frac{1}{2} (u_{i} v_{j} (\vec{e_{i}} \wedge \vec{e_{j}}) - u_{i} v_{j} (\vec{e_{j}} \wedge \vec{e_{i}})) \\
= u_{i} v_{j} (\vec{e_{i}} \wedge \vec{e_{j}}) \\
= \vec{u} \wedge \vec{v}
\end{gathered}
$$
同理：
$$
\star (\vec{u} \wedge \vec{v}) = 
\frac{1}{2!} \epsilon_{ijk} (u_{i} v_{j} - u_{j} v_{i}) \vec{e_{k}} = 
\epsilon_{ijk} u_{i} v_{j} \vec{e_{k}} = \vec{u} \times \vec{v}
$$
(3). 利用外导数与外积和 Hodge 对偶，我们可以将 Maxwell 方程组写成一个紧凑的形式。我们首先定义外导数，假设 $A = \frac{1}{p!}A_{\mu_{1}\cdots\mu_{p}}e_{\mu_{1}} \wedge \cdots \wedge e_{\mu_{p}}$ 是 $p$-形式，则外导数定义为：
$$
(dA)_{\mu_{1}\cdots\mu_{p+1}} = (p + 1) \partial_{[\mu_{1}}A_{\mu_{2}\cdots\mu_{p+1}]}
$$
其中 $[\cdots]$ 表示对所有置换指标的可能求和并除以 $(p + 1)!$，且置换次数为奇数时为负，偶数时为正。如 $A$ 是标量时：$(dA)_{\mu} = \partial_{\mu} A$。试证明：当 $A$ 为 4-矢量电磁势时，满足：
$$
F_{\mu\nu} = (dA)_{\mu\nu} = (\partial_{\mu} A_{\nu} - \partial_{\nu} A_{\mu})
$$

进一步的请证明 Maxwell 方程满足：
$$
\begin{gathered}
dF = 0 \\
d (\star F) = \star J 
\end{gathered}
$$
其中 $J$ 为四矢量形式的电流密度。（注：本题当中我们在 Euclidean 时空下，即不考虑时间和空间分量的不同，此时麦克斯韦方程组的四维协变形式为 $\partial_{\mu} F^{\mu\nu} = -J^{\nu}$。值得一提的是，如果不存在外源 $J$，我们可以发现方程在 $F \rightarrow \star F$ 变换下是不变的，此即著名的 S-对偶。）

（3） 直接利用定义导出电磁场张量：
$$
\vec{A} = \begin{pmatrix} \frac{\phi}{c}, A_{x}, A_{y}, A_{z} \end{pmatrix} = \begin{pmatrix} \frac{\phi}{c}, A_{i} \end{pmatrix} \,(i = 1,2,3)
$$

$$
\because \vec{B} = \nabla \times \vec{A}
$$

$$
\therefore B_{k} = \epsilon_{ijk} \partial_{i} A_{j}
$$

$$
\because \vec{E} = -\nabla \phi - \frac{\partial \vec{A}}{\partial t}
$$

$$
\therefore E_{i} = -\partial_{i} \phi - \partial_{t} A_{i}
$$

$$
(d A)_{\mu \nu} = (\partial_{\mu} A_{\nu} - \partial_{\nu} A_{\mu})
$$

用直观的分量形式表现出来就是
$$
\mathbf{F} = 
\begin{bmatrix}
0 & \frac{E_{x}}{c} & \frac{E_{y}}{c} & \frac{E_{z}}{c} \\
-\frac{E_{x}}{c} & 0 & B_{z} & -B_{y} \\
-\frac{E_{y}}{c} & -B_{z} & 0 & B_{x} \\
-\frac{E_{z}}{c} & B_{y} & -B_{x} & 0
\end{bmatrix}
$$

证明：1. $d \mathbf{F} = 0$
$$
(d \mathbf{F})_{ijk} = 
(2+1) \partial_{[i}F_{jk]} =
\frac{1}{2} (\epsilon_{ijk} \partial_{i} F_{jk}) = 
\frac{1}{2} (\epsilon_{ijk} \partial_{i} (\partial_{j} A_{k} - \partial_{k} A_{j})) =
\epsilon_{ijk} \partial_{i} \partial_{j} A_{k}
$$

$$
\because \epsilon_{ijk} \partial_{i} \partial_{j} A_{k} = \nabla \cdot (\nabla \times \vec{A}) = 0
$$

$$
\therefore d \mathbf{F} = 0
$$

2.$d (\star \mathbf{F}) = \star \mathbf{J}$ 

计算对偶张量：因为闵氏时空度规对角元均为1和-1，所以可以直接采用原来欧式空间中的 Hodge Star 形式。
$$
\star \mathbf{F} = \frac{1}{2! \times 2!} \epsilon_{ijkl} F_{ij} \vec{e_{k}} \wedge \vec{e_{l}} =
\frac{1}{4} \epsilon_{ijkl} (\partial_{i} A_{j} - \partial_{j} A_{i}) \vec{e_{k}} \wedge \vec{e_{l}}
$$

用分量形式表示：
$$
\mathbf{\star F} = 
\begin{bmatrix}
0 & B_{x} & B_{y} & B_{z} \\
-B_{x} & 0 & -\frac{E_{z}}{c} & \frac{E_{y}}{c} \\
-B_{y} & \frac{E_{z}}{c} & 0 & -\frac{E_{x}}{c} \\
-B_{z} & -\frac{E_{y}}{c} & \frac{E_{x}}{c} & 0
\end{bmatrix}
$$

$$
d (\star \mathbf{F}) = 
\partial_{m} (\frac{1}{4} \epsilon_{ijkl} (\partial_{i} A_{j} - \partial_{j} A_{i})) \vec{e_{m}} \wedge \vec{e_{k}} \wedge \vec{e_{l}} = 
\frac{1}{2} \epsilon_{ijkl} \partial_{m} \partial_{i} A_{j} \vec{e_{m}} \wedge \vec{e_{k}} \wedge \vec{e_{l}}
$$

注意：此处在$\vec{e_{m}} \wedge \vec{e_{k}} \wedge \vec{e_{l}}$ 跟在式子后面的情况下是不需要外微分所引起的Levi-Civita和归一化系数的，因为$\vec{e_{m}} \wedge \vec{e_{k}} \wedge \vec{e_{l}}$隐含了这一点，而“分量”应写为
$$
d(\star \mathbf{F})_{mkl} = \frac{1}{2} \epsilon_{mkl} \epsilon_{ijkl} \partial_{m} \partial_{i} A_{j}
$$

$$
\mathbf{J} = \begin{pmatrix} c \rho,\vec{j} \end{pmatrix}
$$

$$
\star \mathbf{J} = \frac{1}{3!} \epsilon_{jmkl} J_{j} \vec{e_{m}} \wedge \vec{e_{k}} \wedge \vec{e_{l}}
$$

$$
(\star \mathbf{J})_{mkl} = \frac{1}{6} \epsilon_{mkl} \epsilon_{jmkl} J_{j}
$$

在洛伦兹规范$\partial_{i} A_{i} = 0$下，$\partial_{i}^{2} A_{j} = -J_{j}$ （取自然单位制）对确定的 $m,k,l$ 而言：
$$
\begin{gathered}
d (\star \mathbf{F})_{mkl} = 
\frac{1}{2} \epsilon_{mkl} \epsilon_{ijkl} \partial_{m} \partial_{i} A_{j}  \\ = 
\frac{1}{2} \times \frac{1}{6}\epsilon_{ikl} \epsilon_{ikl} \epsilon_{mkl} \epsilon_{ijkl} \partial_{m} \partial_{i} A_{j} \\ =
\frac{1}{6} \delta_{im} \epsilon_{ikl} \epsilon_{ijkl} \partial_{m} \partial_{i} A_{j} \\ = 
\frac{1}{6} \epsilon_{mkl} \epsilon_{mjkl} \partial_{m}^{2} A_{j} \\ = 
-\frac{1}{6} \epsilon_{mkl} \epsilon_{mjkl} J_{j} \\ = 
\frac{1}{6} \epsilon_{mkl} \epsilon_{jmkl} J_{j}\\ = 
(\star \mathbf{J})_{mkl}
\end{gathered}
$$

(4). 给定一个标量场 $f$，和 1-形式场（矢量场）$A$，试证明：
$$
(\nabla f)_{\mu} = (df)_{\mu}, \quad (\nabla \times A)_{\mu} = \star (dA)_{\mu}, \quad \nabla \cdot A = \star (d \star A)
$$

既然题目里出现了旋度，默认在三维下进行运算：
$$
(df)_{\mu} = \partial_{\mu} f  = (\nabla f)_{\mu}
$$

$$
\star (d \mathbf{A})_{\mu} = 
\frac{1}{2} \epsilon_{\mu ij} (\partial_{i} A_{j} - \partial_{j} A_{i}) = 
\epsilon_{\mu ij} \partial_{i} A_{j} = (\nabla \times \mathbf{A})_{\mu}
$$

$$
\star (d \star \mathbf{A}) = \star (d \frac{1}{2} \epsilon_{ijk} A_{i} \vec{e_{j}} \wedge \vec{e_{k}}) = 
\star (\frac{1}{2} \partial_{l} \epsilon_{ijk} A_{i} \vec{e_{l}} \wedge \vec{e_{j}} \wedge \vec{e_{k}}) = 
\frac{1}{2} \partial_{l} \epsilon_{ijk} \epsilon_{ljk} A_{i} = 
\delta_{li} \partial_{l} A_{i} = \partial_{i} A_{i} = 
\nabla \times \mathbf{A}
$$

(5). 给定一个形式场 $\omega$。若 $d\omega = 0$，则称该形式场是闭的。若存在形式场 $\mu$ 使得 $\omega = d\mu$，则称该形式场是恰当的。试证明恰当的形式场一定是闭的，并由这一结论推出“梯度场无旋度，旋度场无散度”。Poincare 引理表明，在单连通空间中，闭的形式场一定是恰当的。试说明该引理与“无旋场有势，无散场有矢势”的联系。

证明：设 $\mathbf{\mu}$ 为 p-form：
$$
d(d \mathbf{\mu}) = 
\partial_{\nu_{1}} \partial_{\nu_{2}} \mu_{\nu_{3}, \cdots, \nu_{p+2}} \vec{e_{\nu_{1}}} \wedge \vec{e_{\nu_{2}}} \wedge \cdots \wedge \vec{e_{\nu_{p+2}}}
$$

$$
d(d \mathbf{\mu})_{\nu_{1} \cdots \nu_{p+2}} = \epsilon_{\nu_{1} \nu_{2} \cdots \nu_{p+2}} \partial_{\nu_{1}} \partial_{\nu_{2}} \mu_{\nu_{3} \cdots \nu_{p+2}}  = 0
$$

注：因为两个偏导数交换后Levi-Civita变号导致相消所以结果为0。

所以恰当的形式场一定是闭的。

证明梯度场无旋度：

取 $\mathbf{\mu}$ 为 0-form，则
$$
d(d \mathbf{\mu}) = \epsilon_{ij} \partial_{i} \partial_{j} \mu = 0
$$

$$
\therefore \,\, \nabla \times (\nabla \mu) = \epsilon_{ijk} \partial_{i} \partial_{j} \mu \vec{e_{k}} = 0
$$

证明旋度场无散度：

取  $\mathbf{\mu}$ 为 1-form，则
$$
d(d \mathbf{\mu}) = \epsilon_{ijk} \partial_{i} \partial_{j} \mu_{k} = 0
$$

$$
\therefore \,\, \nabla \cdot (\nabla \times \vec{\mu}) = \epsilon_{ijk} \partial_{k} \partial_{i} \mu_{j} = 0
$$

由于在单连通空间中，闭的形式场一定是恰当的，所以对于 $d \mathbf{\omega} = 0$ 而言。必定存在 $\mathbf{\mu}$使得 $d \mathbf{\mu} = \mathbf{\omega}$ 。

无旋场有势：取 $\mathbf{\omega}$ 为 1-form：
$$
d \mathbf{\omega} = \partial_{i} \omega_{j} \vec{e_{i}} \wedge \vec{e_{j}} = 0
$$

$$
\therefore \,\, (\nabla \times \vec{\omega})_{k} = \epsilon_{ijk} \partial_{i} \omega_{j} = (d \mathbf{\omega})_{ij} = 0
$$

此时，存在  0-form $\mathbf{\mu}$使得 $d \mathbf{\mu} = \mathbf{\omega}$ ，即
$$
d \mu = \partial_{i} \mu \vec{e_{i}} = \vec{\omega}
$$

$$
\vec{\omega} = \nabla \mu
$$

无散场有矢势：取 $\mathbf{\omega}$ 为 2-form：
$$
d \mathbf{\omega} = \frac{1}{2} \partial_{i} \omega_{jk} \vec{e_{i}} \wedge \vec{e_{j}} \wedge \vec{e_{k}} = 
0
$$

$$
\nabla \cdot (\star \omega) = \partial_{i} \frac{1}{2} \epsilon_{ijk} \omega_{jk} = (d \mathbf{\omega})_{ijk} = 0
$$

此时，存在  1-form $\mathbf{\mu}$使得 $d \mathbf{\mu} = \mathbf{\omega}$ ，即
$$
d \mathbf{\mu} = \partial_{i} \mu_{j} \vec{e_{i}} \wedge \vec{e_{j}} = \frac{1}{2} \omega_{ij} \vec{e_{i}} \wedge \vec{e_{j}}
$$

$$
\therefore \,\, \nabla \times \mu = \epsilon_{ijk} \partial_{i} \mu_{j} \vec{e_{k}} = 
\frac{1}{2} \epsilon_{ijk} \omega_{ij} \vec{e_{k}} = \star \mathbf{\omega}
$$

(6). 我们定义一个 $n$-形式场 $\omega$ 在一个 $n$ 维流形 $M$ 上的积分为 $\int_{M} \omega = \int_{M} \omega_{1\cdots n}(x_{1}, \cdots, x_{n}) dx_{1} \cdots dx_{n}$（1.11）。在高维空间中，Stokes 定理和 Gauss 定理可以统一表述为：$\int_{M} d\omega = \int_{\partial M} \omega$，其中 $\omega$ 是一个 $(p - 1)$-形式，$d\omega$ 是 $\omega$ 的外微分，表示场的散度或旋度，$M$ 是一个 $p$-维流形，$\partial M$ 是边界。试说明一般的 Stokes 定理在二维时如何回到我们熟悉的表述：$\oint_{\partial S} \omega_{\mu} \cdot dx^{\mu} = \int_{S} (\partial_{1} \omega_{2} - \partial_{2} \omega_{1}) dx^{1} dx^{2}$。

取 $\omega$ 为二维 1-form：
$$
d \omega = \partial_{i} \omega_{j} \vec{e_{i}} \wedge \vec{e_{j}}
$$

$$
\int_{M} d \omega = \int_{\partial M} \omega
$$

此时 $p=2$，所以 $M$为一曲面：
$$
\therefore \,\, \int_{S} \epsilon_{ij} \partial_{i} \omega_{j} dx^{i} dx^{j} =  \int_{\partial S} \omega_{i} dx^{i}
$$
即
$$
\int_{\partial S} \omega_{\mu} dx^{\mu} = \int_{S} (\partial_{1} \omega_{2} - \partial_{2} \omega_{1}) dx^{1} dx^{2}
$$

## 第2次作业

### 1 光子质量 (5-11)

若光子有质量，静电学的第一个方程应该修改为 $(-\nabla^{2} + m^{2}) \phi = \frac{\rho}{\epsilon_{0}}$，证明此时对带电质点，质点外的电势为 $\phi = \frac{q}{4\pi\epsilon_{0}} \frac{e^{-mr}}{r}$，计算此时的电场，证明此时电场不满足高斯定律。注意此时电磁方程只能用势来描述。

考虑此时点电荷周围的电势分布，取 $\rho = q \delta(r)$

方程 $(-\nabla^{2} + m^{2}) \phi = \frac{\rho}{\epsilon_{0}}$是球对称的，所以可以在求坐标下展开拉普拉斯算子并仅保留径向分量：
$$
(-\nabla^{2} + m^{2}) \phi = \frac{\rho}{\epsilon_{0}}
$$

$$
\left( - \frac{1}{r^{2}} \frac{\partial}{\partial r} (r^{2} \frac{\partial}{\partial r}) + m^{2} \right) \phi = \frac{\rho}{\epsilon_{0}}
$$

$$
\left( - \frac{1}{r} \frac{\partial^{2}}{\partial r^{2}} + \frac{m^{2}}{r} \right) (r \phi) = \frac{\rho}{\epsilon_{0}}
$$

由对称性可知 $r \phi$ 为仅$r$ 的函数，故假设 $(r \phi)(r) = a (r)$ 并解上述方程：
$$
- \frac{\mathrm{d}^{2}}{\mathrm{d} r^{2}} a + m^{2} a = \frac{r q \delta (r)}{\epsilon_{0}} = 0
$$
$$
\therefore \,\, a = C e^{-mr}
$$

舍去了$e^{mr}$ 解，因为无穷远处发散。
$$
\phi = C \frac{e^{-mr}}{r}
$$

$$
\begin{gathered}
- \nabla^{2} \phi = - C  \nabla^{2} \frac{e^{-mr}}{r} = - C \left( - 4 \pi \delta (r) e^{-mr} + \frac{1}{r} ( m^{2} e^{-mr} - \frac{2m}{r} e^{-mr}) + \frac{2m}{r^{2}} e^{-mr}  \right) \\ = C \left( 4 \pi \delta (r) e^{-mr} - \frac{1}{r}  m^{2} e^{-mr} \right)
\end{gathered}
$$

$$
\therefore \,\, (-\nabla^{2} + m^{2}) \phi = C \left( 4 \pi \delta (r) e^{-mr} - \frac{1}{r}  m^{2} e^{-mr} \right) + C m^{2} \frac{e^{-mr}}{r} = C 4 \pi \delta (r) e^{-mr} = C 4 \pi \delta (r) =\frac{q \delta(r)}{\epsilon_{0}}
$$

$$
\therefore \,\, C = \frac{q}{4 \pi \epsilon_{0}}
$$

所以质点外的电势为 $\phi = \frac{q}{4\pi\epsilon_{0}} \frac{e^{-mr}}{r}$

电场：
$$
\vec{E} = - \nabla \phi = - \nabla \frac{q}{4\pi\epsilon_{0}} \frac{e^{-mr}}{r} =  \frac{q}{4 \pi \epsilon_{0}} \frac{(1 + mr) e^{-mr}}{r^{3}} \vec{r}
$$
显然不满足高斯定律。

### 2 库仑定律的偏移

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
\begin{gathered}
\therefore \,\, \phi = \int_{0}^{\pi} \frac{1}{4 \pi \epsilon_{0}} \left( \frac{Q}{4 \pi R^{2}} 2 \pi R^{2} \sin \theta \mathrm{d} \theta \frac{1}{\sqrt{d^{2} + R^{2} - 2 d R \cos \theta}^{1 + \delta}} \right) \\ = 
\frac{Q}{8 \pi \epsilon_{0} d R} \frac{|d + R|^{1 - \delta} - |d - R|^{1 - \delta}}{1 - \delta}
\end{gathered}
$$

c) 设内球的半径为 $R_{1}$ , 外球壳的半径为 $R_{2}$ , 请求出在步骤 iv 后, 内球电势 $V_{1}$ 与外球壳原来电势 $V$ 的关系 (忽略小铜球的影响, 并保留到 $\delta$ 的一阶项).

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
\begin{gathered}
V_{1} = \frac{\Delta Q_{1}}{4\pi \epsilon_{0} R_{1}} - \frac{\Delta Q_{1}}{4 \pi \epsilon_{0} R_{2}} = \frac{\Delta Q_{1}}{4 \pi \epsilon_{0}}  \frac{R_{2} - R_{1}}{R_{1} R_{2}} \\ = 
\frac{R_{2} - R_{1}}{R_{1}} V \left( \frac{R_{1} + R_{2}}{2(R_{2} - R_{1})} \ln (R_{2} + R_{1}) - \frac{1}{2} \ln (R_{2} - R_{1})  - \frac{R_{1}}{R_{2} - R_{1}} \ln(2 R_{1}) \right) \delta \\ = 
V \left( \frac{R_{1} + R_{2}}{2R_{1}} \ln (R_{2} + R_{1}) - \frac{R_{2} - R_{1}}{2 R_{1}} \ln (R_{2} - R_{1})  - \ln(2 R_{1}) \right) \delta \\ = 
V \left( \frac{1 + \frac{R_{2}}{R_{1}}}{2} \ln (1 + \frac{R_{2}}{R_{1}}) - \frac{\frac{R_{2}}{R_{1}} - 1}{2} \ln (\frac{R_{2}}{R_{1}} - 1) - \ln2  \right) \delta
\end{gathered}
$$
v 将静电计的探针脱离接地, 由外壳的小口伸入, 与内球保持接触. 静电计的指针观察不到任何偏转.

vi 为了试验静电计的灵敏度, 将外球壳脱离接地, 并将小铜球接地放电. 此时与内球接触的静电计的指针偏转了角度 $D$ .

vii 小铜球的负电荷大小大约是外壳原来带电的 $1/54$ . 当外球壳接地时, 外壳从小铜球感应而得的正电荷大约是小铜球电荷的 $1/9$ . 因此, 当小铜球接地时, 外球壳的电势约等于内球的电势, 即静电计偏转 $D$ 所对应的数值, 大约是外球壳原来电势 $V$ 的 $1/486$ .

viii 但如果库仑力 $\propto r^{-2-\delta}$ , 即电势 $\phi = \frac{kq}{r^{1+\delta}}$ , 可由 (c) 问推得的公式得出内球电势 $V_{1}$ 应为外球壳电势 $V$ 的 $0.1478\delta$ .

ix 于是, 设静电计观察到的最大偏转为 $D$, 则 $\delta$ 不能超过  $\pm \frac{d}{72D}$ 。即使在粗糙的实验中偏转 $D$ 也会大于 $300d$， 所以 $\delta < \frac{1}{21600}$。

d) 请说明 $\delta$ 为什么不能超过 $\pm \frac{d}{72D}$ ?

如果 $\delta$ 超过 $\pm \frac{d}{72D}$，那么当小铜球接地时，内球壳电势最大值 $0.1478\delta V$ 会大于$\frac{1}{486} V$，所以静电计偏转会大于vii 中的值，与实验现象相违背。

### 3 复变函数 (7-1)

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

### 4 Casimir 效应 (8-13)

根据量子力学不确定性关系 $\Delta x \Delta p \geq \hbar$ ，一个简谐振子的位移 $x$ 和动量 $p$ 不可能都为零，因此其基态能量不可能为零。基于类似的理由，真空中的量子电磁场最低态（即没有光子的态）的能量也不能为零。这导致了一个有趣的现象：将两块相距一定距离的不带电的导体板平行放置在真空中，它们之间存在非零的电磁相互作用力。现用一个简单模型来考察这个力的起源，该模型只考虑一维空间中电磁波的传播，并假设电磁波只有一种偏振模式。将三块相同的不带电的理想导体薄板 A、B、C 相互平行放置，A、B 之间距离为 $a$ ，A、C 之间距离为 $L$ （$L \gg a$），如图1所示。已知真空中的光速为 $c$ 。

<img src="./Feynman Lectures on Physics (2) Homework.assets/image-20260128015350489.png" alt="image-20260128015350489" style="zoom:50%;" />

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
\begin{gathered}
F = - \frac{\partial E_{tot}}{\partial a} = - \lim_{L, \Lambda \to \infty} \frac{\partial}{\partial a} \frac{1}{2} \hbar \left(\frac{\pi c}{a} \frac{e^{- \frac{c}{a \Lambda}}}{(1 - e^{- \frac{c}{a \Lambda}})^{2}} + \frac{\pi c}{L - a} \frac{e^{- \frac{c}{(L - a) \Lambda}}}{(1 - e^{- \frac{c}{(L - a) \Lambda}})^{2}} \right) \\ = - \lim_{\alpha, \alpha' \to 0 \,\, L \to \infty} \frac{1}{2} \frac{\hbar \pi c}{a^{2}} \left(\frac{\alpha e^{- \alpha} (1 + e^{- \alpha})}{(1 - e^{- \alpha})^{3}} - \frac{e^{- \alpha}}{(1 - e^{- \alpha})^{2}}\right)  + \frac{1}{2} \frac{\hbar \pi c}{(L - a)^{2}} \left( - \frac{\alpha' e^{- \alpha'} (1 + e^{- \alpha'})}{(1 - e^{- \alpha'})^{3}} + \frac{e^{- \alpha'}}{(1 - e^{- \alpha'})^{2}} \right)  \\ = - \frac{1}{24} \frac{\hbar \pi c}{a^{2}} \qquad (\alpha = \frac{c}{a \Lambda}, \alpha' = \frac{c}{(L - a) \Lambda})
\end{gathered}
$$
e) d 问中，用一个特定的指数函数来控制高频电磁波的贡献，得到了一个有限的电磁力；但是，这个电磁力的大小不依赖于具体函数形式的选取。因此，考虑一个更一般的函数 $f(x)$ ，它只需要满足两个条件：

A. $f(0) = 1$ ，

B. 当 $x \to \infty$ 时，$|f(x)|$ 以比 $\frac{1}{x}$ 更快的速度趋于零；

每一个电磁波模式对电磁场总能量的贡献为 $\frac{1}{2}\hbar\omega f(\omega/\pi\Lambda)$ 。试计算在 $L \to \infty$ 、$\Lambda \to \infty$ 的极限下导体板 B 受到的电磁力，并说明结果不依赖于函数 $f(x)$ 的具体形式。

（提示：欧拉-麦克劳林公式如下

$$
\sum_{n=1}^{N} F(n) - \int_{0}^{N} F(n) \, dn = \frac{F(N) - F(0)}{2} + \frac{F'(N) - F'(0)}{12} + \cdots + \frac{B_{j}}{j!} [ F^{(j-1)}(N) - F^{(j-1)}(0) ] + \cdots
$$

这里 $F^{(j)}$ 是 $F$ 的 $j$ 阶导数，$B_{j}$ 是伯努利数。如需用到该公式，可只取前两项。）
$$
E_{tot} = \frac{1}{2} \hbar \left( \frac{\pi c}{a} \sum_{n=1}^{\infty} n f(\frac{n c}{a \Lambda}) + \frac{\pi c}{(L - a)}\sum_{n=1}^{\infty} n f(\frac{n c}{(L - a) \Lambda}) \right)
$$

$$
\begin{gathered}
- \lim_{\Lambda , L \to \infty}  \frac{\partial}{\partial a} E_{tot} = - \lim_{\Lambda , L \to \infty}  \frac{\partial}{\partial a} \frac{\hbar \pi c}{2 a} \left((\frac{a \Lambda}{c})^{2} \int_{0}^{\infty} x f(x) \mathrm{d} x - \frac{1}{12} \right) + \frac{\hbar \pi c}{2 (L - a)} \left( (\frac{(L -a) \Lambda}{c})^{2} \int_{0}^{\infty} x f(x) \mathrm{d} x  - \frac{1}{12} \right) \\ = 
- \lim_{\Lambda , L \to \infty}  \frac{\partial}{\partial a} \frac{\hbar \pi L \Lambda^{2}}{2 c} \int_{0}^{\infty} x f(x) \mathrm{d} x - \frac{1}{12} \frac{\hbar \pi c}{2 a} - \frac{1}{12} \frac{\hbar \pi c}{2 (L - a)} \\ = - \frac{1}{24} \frac{\hbar \pi c}{a^{2}}
\end{gathered}
$$

## 第3次作业

### 1 介电系数 (石镇鹏)

量子力学提出以前，人们认为电子在绕着原子核转动，这个模型虽然已经被证明是错误的，但它仍然能够解决一些问题。本题尝试使用这个模型来计算氢原子在受到外加电场时，电子偏离轨道产生的电偶极矩。为了方便计算，我们忽略外电场与电子对质子的相互作用。同时，我们仅考虑在二维情况，即电子只在一个二维平面上做圆周运动。

(1). 为了简单起见，我们假设在受到电场作用之前，电子进行圆周运动，圆周运动半径为 $r_{0} = 1$，且电子的电荷 $e = 1$ 与质量 $m = 1$。请在极坐标系下，写出此时电子的运动方程，并求解 (取 $\frac{1}{4\pi\epsilon_{0}} = 1$)；
$$
\ddot{r} - \dot{\theta}^{2} r = - \frac{1}{r^{2}}
$$

$$
2 \dot{\theta} \dot{r} + \ddot{\theta} r = 0
$$

(2). 在 $t = 0$ 时刻，我们施加一个朝 x-轴的电场 $E$，请写出此时电子满足的运动方程；
$$
\ddot{r}  - \dot{\theta}^{2} r = - \frac{1}{r^{2}} + \frac{eE}{m} \cos \theta
$$

$$
2 \dot{\theta} \dot{r} + \ddot{\theta} r = - \frac{eE}{m} \sin \theta
$$

(3). 对于一般的电场强度 $E$，电子的运动方程不易求解。因此我们考虑一个简单情形，即电场强度较弱 $\epsilon = \frac{eE}{m} \ll 1$。此时，我们可以微扰求解我们的微分方程。具体而言，我们可以 Taylor 展开我们的运动方程：
$$
r = r_{0} + \epsilon r_{1}(t) + \epsilon^{2} r_{2}(t) + \cdots,
$$
$$
\theta = \theta_{0} + \epsilon \theta_{1}(t) + \epsilon^{2} \theta_{2}(t) + \cdots
$$
请将上述展开带入 (2) 中的运动方程，并写出正比于 $\epsilon$ 阶的微扰运动方程。

微扰后：
$$
\epsilon (\ddot{r}_{1} - \dot{\theta}_{0}^{2} r_{1} - 2 \dot{\theta}_{0} \dot{\theta}_{1} r_{0}     ) = 2 \epsilon \frac{r_{1}}{r_{0}^{3}} + \epsilon \cos \theta_{0}
$$

$$
\epsilon (2 \dot{\theta}_{1} \dot{r}_{0} + 2 \dot{\theta}_{0} \dot{r}_{1} + \ddot{\theta}_{0} r_{1} + \ddot{\theta}_{1} r_{0}) = - \epsilon \sin \theta_{0}
$$

所以一阶项对应的运动方程为：
$$
\ddot{r}_{1} - \dot{\theta}_{0}^{2} r_{1} - 2 \dot{\theta}_{0} \dot{\theta}_{1} r_{0} = 2  \frac{r_{1}}{r_{0}^{3}} + \cos \theta_{0}
$$

$$
2 \dot{\theta}_{1} \dot{r}_{0} + 2 \dot{\theta}_{0} \dot{r}_{1} + \ddot{\theta}_{0} r_{1} + \ddot{\theta}_{1} r_{0} = - \sin \theta_{0}
$$

(4). 请给定的边界条件 $r_{1} = 0$, $\dot{r}_{1} = 0$, $\theta_{1} = 0$, $\dot{\theta}_{1} = 0$ 下，我们可以求解上述运动方程。假设我们仅考虑 $O(\epsilon)$ 的贡献，请求解运动方程。取 $\epsilon = 0.01$，请画出电子在 2 个，4 个，8 个周期内的运动轨迹，并在 x-轴上轨迹相对于原轨道的偏移量。请计算在上述周期下，原子的平均电偶极矩。假设原子体密度为 $N$，请计算等效的相对介电常数。

带入 $r_{0} = 1$， $\theta_{0} (t) = t$ 以及题给边界条件：
$$
\ddot{r}_{1} - r_{1} - 2 \dot{\theta}_{1}  = 2 r_{1} + \cos t
$$

$$
2 \dot{r}_{1} + \ddot{\theta}_{1} = - \sin t
$$

解得：
$$
\begin{aligned}
r_{1}(t) &= A \sin t + B \cos t + \frac{3}{2} t \sin t + C \\
\theta_{1}(t) &= - (2B + 2) \sin t + 2A \cos t + 3t \cos t - \frac{3}{2} C t + D
\end{aligned}
$$
利用边界条件待定系数，解得：
$$
\begin{gathered}
B = 2 \\ 
C = -2 \\
D = A = 0
\end{gathered}
$$
所以解为：
$$
\begin{aligned}
r_{1}(t) &= 2 \cos t + \frac{3}{2} t \sin t - 2 \\
\theta_{1}(t) &= - 6 \sin t + 3t \cos t + 3 t 
\end{aligned}
$$
作图
$$
\begin{aligned}
r (t) &= 1 + 0.01 \times ( 2 \cos t + \frac{3}{2} t \sin t - 2 ) \\
\theta (t) &= t + 0.01 \times (- 6 \sin t + 3t \cos t + 3 t )
\end{aligned}
$$

​<img src="./Feynman Lectures on Physics (2) Homework.assets/image-20250804225820529.png" alt="image-20250804225820529" style="zoom:50%">

两个周期

<img src="./Feynman Lectures on Physics (2) Homework.assets/image-20250804225831058.png" alt="image-20250804225831058" style="zoom:50%">

四个周期

<img src="./Feynman Lectures on Physics (2) Homework.assets/image-20250804225839194.png" alt="image-20250804225839194" style="zoom:50%">

八个周期

平均偶极矩：
$$
\begin{gathered}
<x> = \frac{1}{2 \pi} \int_{0}^{2 \pi} (1 + \epsilon (2 \cos t + \frac{3}{2} \sin t - 2)) \cos (t + \epsilon (- 6 \sin t + 3 t \cos t + 3 t)) \mathrm{d} t \\ \approx \frac{59}{8} \epsilon
\end{gathered}
$$
所以原子平均偶极矩为 $\frac{59}{8} e r_{0} \epsilon$

极化强度为 $\frac{59}{8} N e r_{0} \epsilon$

等效的相对介电常数为 $1 + \frac{59}{8} \frac{N e^{2} r_{0}}{m \epsilon_{0}}$

### 2 静电模拟 (12-1)

(1). 一强度密度为 $\rho$ 的无穷长直热源平行放置在热导率为 $K$ 的无限大均匀材料下距表面距离为 $a$ 的地方，忽略空气热导率，计算材料表面的温度分布。

进行电磁学的类比：
$$
\nabla \cdot (K \nabla T) = - s
$$

$$
\nabla^{2} T = - \frac{s}{K}
$$

此处 $s$ 更改为线强度密度$\rho$ ，然后使用热像法：

表面上距离无穷长直热源向表面垂线垂足 $x$ 处的温度为
$$
T (x) = - \frac{\rho}{\pi K} \ln \sqrt{\frac{1}{2} + \frac{x^{2}}{2 a^{2}}} + T (0)
$$

### 3 规范对称性 (14-4)

(1). 电磁场与电磁势的关系为 $\vec{E} = -\nabla\phi - \frac{\partial}{\partial t}\vec{A}$, $\vec{B} = \nabla \times \vec{A}$，证明在规范变换 $\phi \rightarrow \phi' = \phi - \frac{\partial}{\partial t}a$, $\vec{A} \rightarrow \vec{A}' = \vec{A} + \nabla a$ 下，电磁场保持不变，其中 $a$ 为任意函数。

证明：在规范变换后
$$
\vec{E'} = - \nabla (\phi - \frac{\partial}{\partial t} a) - \frac{\partial}{\partial t}(\vec{A} + \nabla a) = - \nabla \phi - \frac{\partial}{\partial t} \vec{A} = \vec{E}
$$

$$
\vec{B'} = \nabla \times (\vec{A} + \nabla a) = \nabla \times \vec{A} = \vec{B}
$$

所以规范变换并不会对场强产生影响

(2). 取定规范条件后，相当于对规范变换的函数 $a$ 做出了进一步限定，求出在库伦规范和洛伦茨规范下，$a$ 需要满足的方程。这些方程有非零解，故在取定规范后，电磁势并未被完全确定下来。

库伦规范：
$$
\nabla \cdot \vec{A} = 0
$$

$$
\nabla \cdot (\vec{A} + \nabla a) = 0
$$

所以 $a$满足
$$
\nabla^{2} a = 0
$$
洛伦兹规范：
$$
\nabla \cdot \vec{A} - \frac{1}{c^{2}} \frac{\partial}{\partial t} \phi = 0
$$

$$
\nabla \cdot ({\vec{A} + \nabla a}) = \frac{1}{c^{2}} \frac{\partial}{\partial t}(\phi - \frac{\partial}{\partial t} a)
$$

所以 $a$ 满足
$$
\nabla^{2} a + \frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} a = 0
$$
(3). 请用电磁场的微分形式解释规范对称性。

考虑四维势 $\mathbf{A} = (\vec{A}, \frac{\phi}{c})$，取度规为 $\begin{pmatrix} 1, 1, 1, -1 \end{pmatrix}$

规范对称性就可以表示为 $\mathbf{A'} = \mathbf{A} + \mathrm{d} \psi$，其中 $\psi$为任意标量场，$\mathrm{d}$ 为外微分。
$$
\mathbf{F} = \mathrm{d} \mathbf{A}
$$
麦克斯韦方程组可以表示为
$$
\begin{gathered}
\mathrm{d} \mathbf{F} = 0\\
\mathrm{d} \star \mathbf{F} = \star \mathbf{J}
\end{gathered}
$$
由于规范变换后
$$
\mathbf{F'} =  \mathrm{d} \mathbf{A'} = \mathrm{d} \mathbf{A} + \mathrm{d} \mathrm{d} \psi = \mathrm{d} \mathbf{A} = \mathbf{F}
$$
电磁场张量不变，所以麦克斯韦方程组形式不变。

### 4 磁单极子

(1). 若磁单极子存在，麦克斯韦方程组需引入对称的磁荷和磁流。请用场强的微分形式表达修正后的麦克斯韦方程组。

修正后麦克斯韦方程组可以表示为：（其中下标 $e$ 表示电荷，下标 $m$ 表示磁荷）
$$
\begin{gathered}
\nabla \cdot \vec{E} = \frac{\rho_{e}}{\epsilon_{0}} \\
\nabla \times \vec{E} = - \vec{j}_{m} - \frac{\partial}{\partial t} \vec{B} \\
\nabla \cdot \vec{B} = \rho_{m} \\
\nabla \times \vec{B} = \mu_{0} \vec{j}_{e} + \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} \vec{E}
\end{gathered}
$$
(2). 若宇宙中的所有粒子所具有的电荷与磁荷之比都相同，请说明我们总可以对场和荷做一种旋转变换，使得旋转过后的场和荷仍然满足麦克斯韦方程组，且所有粒子的磁荷为 0。

证明：注意到麦克斯韦方程组可以写成形式
$$
\begin{gathered}
\nabla \cdot (\vec{E} + i c \vec{B}) = \frac{1}{\epsilon_{0}} (\rho_{e} + i \sqrt{\frac{\epsilon_{0}}{\mu_{0}}} \rho_{m}) \\
\nabla \times (\vec{E} + i c \vec{B}) = i c \mu_{0} (\vec{j}_{e} + i \sqrt{\frac{\epsilon_{0}}{\mu_{0}}} \vec{j}_{m}) + \frac{i}{c} \frac{\partial}{\partial t} (\vec{E} + i c \vec{B})
\end{gathered}
$$
所以对于场和荷做变换
$$
\begin{gathered}
\vec{E'} + i c \vec{B'} = e^{i \theta} (\vec{E} + i c \vec{B}) \\
\rho_{e}' + i \sqrt{\frac{\epsilon_{0}}{\mu_{0}}} \rho_{m}' = e^{i \theta} (\rho_{e} + i \sqrt{\frac{\epsilon_{0}}{\mu_{0}}} \rho_{m}) \\
\end{gathered}
$$
之后麦克斯韦方程组形式不变。

若宇宙中的所有粒子所具有的电荷与磁荷之比都相同，即为 $\frac{q_{e}}{q_{m}} = k$，那么取上述变换中的 $\theta = - \arctan (\frac{1}{k} \sqrt{\frac{\epsilon_{0}}{\mu_{0}}})$，则变换后所有粒子的磁荷均变为 $0$，并且麦克斯韦方程组任然成立。

## 第4次作业

### 1 超导 (16-3)
1. 描述超导电流 $\vec{j_{s}}$ 时，除了正常的电磁方程，电流还额外满足伦敦方程 $(a > 0)$：
   $$
   \begin{align}
   \nabla \times \vec{j_{s}} &= -a \vec{B} \\
   \frac{\partial}{\partial t} \vec{j_{s}} &= a \vec{E} 
   \end{align}
   $$
   试证明电流有限要求超导体的电阻为零，而磁场在超导体内指数衰减。

   证明：

   假设电阻不为零，即存在 $\sigma$ 使得 $\vec{j} = \sigma \vec{E}$
   $$
   \frac{\partial}{\partial t} \vec{j_{s}} = a \vec{E} = \frac{\alpha}{\sigma} \vec{j}_{s}
   $$
   所以超导电流会随时间指数增长，最终发散。

   磁场：由于超导体内无电场，所以 $\nabla \times \vec{B} = \mu_{0} \vec{j}_{s}$
   $$
   \nabla \times (\nabla \times \vec{B}) = \mu_{0} (\nabla \times \vec{j}_{s}) = - a \mu_{0} \vec{B}
   $$

   $$
   \nabla^{2} \vec{B} = a \mu_{0} \vec{B}
   $$

   所以磁场在超导体内以 $e^{- \sqrt{a \mu_{0}} r}$ 指数衰减

### 2 矢势的应用 (蒋济帆)
1. 证明：为使得磁矢势满足 $\nabla \times \vec{A} = \vec{B}$, 可取
   $$
   \vec{A}(\vec{r}) = \frac{\mu_{0}}{4\pi} \int_{V'} \frac{\vec{j}(\vec{r'})}{|\vec{r} - \vec{r'}|} dV'
   $$
   其中 $\vec{r}$ 为空间中某一点的位矢，$\vec{r'}$ 为空间中场源的位矢，$\vec{j}(\vec{r'})$ 为空间中的电流密度，$V'$ 是整个空间。
   $$
   \nabla \times \vec{A} = \nabla \times \frac{\mu_{0}}{4\pi} \int_{V'} \frac{\vec{j}(\vec{r'})}{|\vec{r} - \vec{r'}|} dV' = - \frac{\mu_{0}}{4\pi} \int_{V'} \vec{j}(\vec{r'}) \times \nabla \frac{1}{|\vec{r} - \vec{r'}|} dV' = \frac{\mu_{0}}{4\pi} \int_{V'} \vec{j}(\vec{r'})  \times \frac{\vec{r} - \vec{r'}}{|\vec{r} - \vec{r'}|^{3}} dV' = \vec{B}
   $$

2. 计算通有方向与大小均相同的电流的两无限长平行直导线周围的磁感线的方程。该种曲线的名称是什么？

   假设两根直导线分别位于$x$ 轴上 $+a$ 和 $- a$ 处

   矢势
   $$
   \vec{A} (\vec{r}) = \frac{\mu_{0} I}{2 \pi} \left(\frac{1}{\sqrt{(x - a)^{2} + y^{2}}} + \frac{1}{\sqrt{(x + a)^{2} + y^{2}}}\right) \hat{z}
   $$
   由于二维时对于仅在$z$ 方向上的矢势，磁场可以表示为
   $$
   \vec{B} = \nabla \times \vec{A} = (\partial_{y} A_{z}, - \partial_{x} A_{z}, 0)
   $$

   $$
   \vec{B} \cdot \nabla A = \partial_{y} A_{z} \partial_{x} A_{z} - \partial_{x} A_{z} \partial_{y} A_{z} = 0
   $$

   所以 $\vec{B}$ 和 $\nabla A$ 垂直，即磁感线为 $A$ 的等值线：
   $$
   \frac{1}{\sqrt{(x - a)^{2} + y^{2}}} + \frac{1}{\sqrt{(x + a)^{2} + y^{2}}} = C
   $$
   其中$C$ 为常数。

3. 考虑一条截面为半径是 $a$ 的圆的闭合导线 (磁导率为 $\mu_{0}$, $a$ 远小于导线的其他各项几何尺寸), 设电流在导线内部均匀分布, 导线的各个横截面的中心在同一平面内。记该导线的自感为 $L$。
   - (i) 证明：在合理的近似下，有
     $$
     L = \frac{\mu_{0}}{4\pi} \oint_{l} \oint_{l} \frac{\theta(|\vec{r_{1}} - \vec{r_{2}}| - \eta a)}{|\vec{r_{1}} - \vec{r_{2}}|} d\vec{r_{1}} \cdot d\vec{r_{2}}
     $$
     的形式，其中 $\ell$ 是整条回路，
     $$
     \theta(\xi) = \begin{cases}
     1, & \xi > 0 \\
     0, & \xi < 0
     \end{cases}
     $$
     并求常数 $\eta$

     把导线通以 $\vec{j}$ 的匀强电流密度，则闭合导线内的磁通为（$l$是导线中心线）
     $$
     \Phi = \int_{S} d \vec{S} \cdot \vec{B} = \int_{S} d \vec{S} \cdot (\nabla \times \vec{A}) = \oint_{\partial S} d \vec{l} \cdot \vec{A} = \oint_{\partial S} d \vec{l} \cdot \oint_{\partial S} \frac{\mu_{0}}{4 \pi} \frac{\vec{j} d \tau'}{|\vec{r} - \vec{r'}|}
     $$
     所以自感可以表示为除去导线内部部分的区域的磁通积分
     $$
     L = \frac{\Phi}{\pi a^{2} j} = \oint_{l} \oint_{l}  d \vec{r_{1}} \cdot  \frac{\mu_{0}}{4 \pi} \frac{\theta (|\vec{r_{1}} - \vec{r_{2}}| - a)}{|\vec{r}_{1} - \vec{r}_{2}|} d \vec{r}_{2} = \frac{\mu_{0}}{4\pi} \oint_{l} \oint_{l} \frac{\theta(|\vec{r_{1}} - \vec{r_{2}}| - a)}{|\vec{r_{1}} - \vec{r_{2}}|} d\vec{r_{1}} \cdot d\vec{r_{2}}
     $$

     所以 $\eta = 1$

   - (ii) 若导线围成一个半径为 $R$ 的圆，求其自感 (涉及的数保留准确值)。

     自感为
     $$
     L = \frac{\mu_{0}R}{2} \int_{2 \arcsin \frac{a}{2 R}}^{2 \pi - 2 \arcsin \frac{a}{2R}} \frac {\cos \theta}{2 R \sin \frac{\theta}{2}} R d \theta = \frac{\mu_{0} R}{2} \left( \ln \frac{1 + \sqrt{1 - \frac{a}{2 R}^{2}}}{1 - \sqrt{1 - \frac{a}{2 R}^{2}}} - 4  \sqrt{1 - \frac{a}{2 R}^{2}} \right)
     $$

4. 计算两个半径分别为 $R_{1}$ 和 $R_{2}$、圆心间距为 $l$ 的同轴导体圆环间的互感。结果利用完全椭圆积分
   $$
   \begin{align}
   K(k^{2}) &\triangleq \int_{0}^{\frac{\pi}{2}} \frac{d\theta}{\sqrt{1 - k^{2} \sin^{2} \theta}}, \\
   E(k^{2}) &\triangleq \int_{0}^{\frac{\pi}{2}} \sqrt{1 - k^{2} \sin^{2} \theta} \, d\theta
   \end{align}
   $$
   表示，不要出现积分符号。
   $$
   \begin{gathered}
   M = \frac{\Phi_{12}}{I} = \frac{\mu_{0}}{4 \pi} \int_{0}^{2 \pi} \int_{0}^{2 \pi} \frac{R_{1} R_{2}  d \theta \cos \phi d \phi}{\sqrt{l^{2} + R_{1}^{2} + R_{2}^{2} - 2 R_{1} R_{2} \cos \phi}} \\ = \frac{\mu_{0} R_{1} R_{2}}{\sqrt{l^{2} + (R_{1} + R_{2})^{2}}} \\ \left( ( - 2 + \frac{l^{2} + (R_{1} + R_{2})^{2}}{R_{1} R_{2}}) K(\frac{4 R_{1} R_{2}}{l^{2} + (R_{1} + R_{2})^{2}}) -  \frac{l^{2} + (R_{1} + R_{2})^{2}}{R_{1} R_{2}} E(\frac{4 R_{1} R_{2}}{l^{2} + (R_{1} + R_{2})^{2}})\right)
   \end{gathered}
   $$

   注：可能用到的积分等式：
   $$
   \int_{0}^{2\pi} \ln(a - \cos x) \, dx = 2\pi \ln a + \sqrt{a^{2} - 1}, \quad a > 1
   $$

5. 

### 3 有 $\theta$ 项的麦克斯韦方程组
现在考虑修改麦克斯韦方程组，在其中加入 $\theta$ 项。麦克斯韦方程组被修改为：
$$
\begin{align}
\nabla \cdot \vec{E} &= \frac{\rho}{\epsilon_{0}} - \frac{\alpha c}{\pi} \nabla \theta \cdot \vec{B}\\
-\frac{1}{c^{2}} \frac{\partial \vec{E}}{\partial t} + \nabla \times \vec{B} &= \mu_{0} \vec{J} + \frac{\alpha}{\pi c} (\dot{\theta} \vec{B} + \nabla \theta \times \vec{E})
\end{align}
$$
其余两个无源方程没有改变。

(a)

在 $\theta$ 存在的情况下，我们可以将 $\theta$ 项放入电位移场 $\vec{D}$ 和磁场强度 $\vec{H}$，使得用 $\vec{D}$ 和 $\vec{H}$ 表达的麦克斯韦方程组不变，请给出 $\vec{D}$ 和 $\vec{H}$ 的定义。
$$
\begin{gathered}
\vec{D} =  \epsilon_{0} \vec{E} + \vec{P} + \frac{\alpha \epsilon_{0}}{\pi} c \theta \vec{B} \\ 
\vec{H} = \frac{\vec{B}}{\mu_{0}} - \vec{M} - \frac{\alpha}{\mu_{0} \pi c} \theta \vec{E}
\end{gathered}
$$
(b)

我们将满足 $\theta = \pi$ 的介质称为拓扑绝缘体。现在考虑将一种拓扑绝缘体介质充满 $z < 0$ 的半个空间，而 $z > 0$ 的半个空间为真空，即保持 $\theta = 0$。

若空间中存在分隔具有两个不同 $\theta$ 值的介质的界面，则在该界面的两侧，$\vec{B}$ 和 $\vec{E}$ 的值会发生跳变。请根据改变后的麦克斯韦方程组，重写具有两个不同 $\theta$ 值的介质的界面附近的电磁场连续性条件，给出界面两侧的 $\vec{B}$ 和 $\vec{E}$ 所满足的方程。设界面的法向单位矢量为 $\hat{n}$，界面附近没有自由电荷和电流，且两个介质的介电常数和磁导率等于真空的情况。

由于界面附近没有自由电荷和电流，所以界面附近的麦克斯韦方程组为
$$
\begin{gathered}
\nabla \cdot \vec{D} = 0 \\ 
\nabla \times \vec{E} = 0 \\
\nabla \cdot \vec{B} = 0 \\
\nabla \times \vec{H} = 0
\end{gathered}
$$
所以边界条件为：
$$
\begin{gathered}
\hat{n} \times (\vec{E}_{1} - \vec{E}_{2}) = 0 \\
\hat{n} \cdot ( \epsilon_{0} \vec{E}_{1} + \frac{\epsilon_{0} \alpha}{\pi} c \theta_{1} \vec{B}_{1} -  \epsilon_{0} \vec{E}_{2} - \frac{\epsilon_{0} \alpha}{\pi} c \theta_{2} \vec{B}_{2}) = 0 \\
\hat{n} \cdot (\vec{B}_{1} - \vec{B}_{2}) = 0 \\
\hat{n} \times (\frac{\vec{B}_{1}}{\mu_{0}} - \frac{\alpha}{\mu_{0} \pi c} \theta_{1} \vec{E}_{1} - \frac{\vec{B}_{2}}{\mu_{0}} + \frac{\alpha}{\mu_{0} \pi c} \theta_{2} \vec{E}_{2}) = 0
\end{gathered}
$$
(c)

若从下半空间加入沿着 $z$ 方向的磁场 $B_{z} = B$，则在上半空间不仅会有磁场，也会因为介质的存在而产生电场，请求出电场 $\vec{E}$ 的大小与方向。
$$
\begin{gathered}
B_{z} = B'_{z} \\
\frac{\epsilon_{0} \alpha}{\pi} c \theta B_{z} =  \epsilon_{0} E'_{z}
\end{gathered}
$$
所以
$$
\vec{E'} =  \alpha c \vec{B}
$$
方向沿 $+ z$ 方向。

(d)

若从下半空间加入沿着 $y$ 方向的电场 $E_{y} = E$，同样地，在上半空间会因为介质的存在而产生磁场，请求出磁场 $\vec{B}$ 的大小与方向。
$$
\begin{gathered}
E'_{y} = E_{y} \\
 - \frac{\alpha}{\mu_{0} \pi c} \theta E_{y} = \frac{B'_{y}}{\mu_{0}}
\end{gathered}
$$
所以
$$
\vec{B'} = - \frac{\alpha}{c} \vec{E}
$$
方向沿 $- y$ 方向。

(e)

在上半空间放入一个电荷 $q$，位于 $\vec{x} = (0, 0, d)$。分别给出上半空间和下半空间的电场与磁场的分布。提示：利用镜像电荷法，并引入与电荷类似的磁荷。

凑出电磁场分布如下：

对于上半空间而言，电场就是电荷 $q$产生的电场和在下半空间坐标为$\vec{x} = (0, 0, - d)$ 处引入像电荷$- \frac{\alpha^{2}}{4 + \alpha^{2}} q$ 的叠加
$$
\vec{E} = \frac{q}{4 \pi \epsilon_{0}} \frac{(x,y, z-d)}{\sqrt{x^{2} + y^{2} + (z - d)^{2}}^{3}} - \frac{\alpha^{2}}{4 + \alpha^{2}} \frac{q}{4 \pi \epsilon_{0}} \frac{(x,y, z+d)}{\sqrt{x^{2} + y^{2} + (z + d)^{2}}^{3}}
$$

上半空间磁场为
$$
\vec{B} = - \frac{2 \alpha}{4 + \alpha^{2}} \frac{q}{4 \pi \epsilon_{0} c} \frac{(x,y, z+d)}{\sqrt{x^{2} + y^{2} + (z + d)^{2}}^{3}}
$$
对于下半空间，电场为
$$
\vec{E} = \frac{4}{4 + \alpha^{2}} \frac{q}{4 \pi \epsilon_{0}} \frac{(x,y, z-d)}{\sqrt{x^{2} + y^{2} + (z - d)^{2}}^{3}}
$$
磁场为
$$
\vec{B} = \frac{2 \alpha}{4 + \alpha^{2}}\frac{q}{4 \pi \epsilon_{0} c} \frac{(x,y, z-d)}{\sqrt{x^{2} + y^{2} + (z - d)^{2}}^{3}}
$$

## 第5次作业

### 1 势与场 (15-7)
Chern-Simons 理论是一类特殊的相互作用项，在量子反常，分数量子霍尔效应，任意子以及 Dyon（既带电荷又带磁荷的粒子）中有重要的应用。其特殊之处体现在其运动方程没有动力学项，即其运动方程就是一个恒等式，在下面的计算中我们可以看到这一点。4 维时空的 Chern-Simons 理论的拉氏量可以写为：
$$
\mathcal{L} = \epsilon^{\mu\nu\rho\sigma} F_{\mu\nu} F_{\rho\sigma}
$$

1. 请回忆第一次作业第三题，证明上述拉氏量可以写为：
   $$
   \mathcal{L} = -8 \vec{E} \cdot \vec{B}
   $$
   证明：
   $$
   \begin{gathered}
   \mathcal{L} = \epsilon^{\mu \nu \rho \sigma} F_{\mu \nu} F_{\rho \sigma} = \epsilon^{\mu \nu \rho \sigma} (\partial_{\mu} A_{\nu} - \partial_{\nu} A_{\mu}) (\partial_{\rho} A_{\sigma} - \partial_{\sigma} A_{\rho}) \\ = 
   4 \epsilon^{\mu \nu \rho \sigma} \partial_{\mu} A_{\nu} \partial_{\rho} A_{\sigma} \\ =
   4 (\epsilon^{ijk} \partial_{0} A_{i} \partial_{j} A_{k} - \epsilon^{ijk} \partial_{i} A_{0} \partial_{j} A_{k}  + \epsilon^{ijk} \partial_{i} A_{j} \partial_{0} A_{k} - \epsilon^{ijk} \partial_{i} A_{j} \partial_{k} A_{0}) \\ =
   8 ( \partial_{t} \vec{A}  \cdot (\nabla \times \vec{A}) + \nabla \phi \cdot (\nabla \times \vec{A})) = -8 \vec{E} \cdot \vec{B}
   \end{gathered}
   $$

2. 在低维情况下，Chern-Simons 理论有独特的性质，在 3 维时空当中，带有外源的 Chern-Simons 理论可以写为：
   $$
   \mathcal{L} = \frac{\kappa}{2} \epsilon^{\mu\nu\rho} A_{\mu} \partial_{\nu} A_{\rho} - A_{\mu} J^{\mu}
   $$
   其中 $\mu, \nu, \rho = \{0, 1, 2\}$。请利用 Euler-Lagrange 方程证明 3 维时空 Chern-Simons 理论对应的运动方程为：
   $$
   \rho = \kappa B
   $$
   $$
   J^{i} = \kappa \epsilon^{ij} E_{j}
   $$
   其中 $i, j = \{1, 2\}$，第一个方程可以理解为每一个电荷都带着一个垂直纸面向外的磁场，第二个方程就是第一个方程的演化方程。

   利用 Euler-Lagrange 方程
   $$
   \frac{\partial}{\partial x_{\mu}} \frac{\partial}{\partial (\partial_{\mu} A_{\nu})} \mathcal{L} = \frac{\partial}{\partial A_{\nu}} \mathcal{L}
   $$

   $$
   \frac{\partial}{\partial (\partial_{\mu} A_{\nu})} \mathcal{L}  = \frac{\partial}{\partial (\partial_{\mu} A_{\nu})} (\frac{\kappa}{2} \epsilon^{\rho\mu\nu} A_{\rho} \partial_{\mu} A_{\nu} - A_{\mu} J^{\mu}) = \frac{\kappa}{2} \epsilon^{\rho\mu\nu} A_{\rho}
   $$

   $$
   \frac{\partial}{\partial x_{\mu}} \frac{\kappa}{2} \epsilon^{\rho\mu\nu} A_{\rho} =  \frac{\kappa}{2} \epsilon^{\rho\mu\nu} \partial_{\mu} A_{\rho}
   $$

   $$
   \frac{\partial}{\partial A_{\nu}} (\frac{\kappa}{2} \epsilon^{\nu\mu\rho} A_{\nu} \partial_{\mu} A_{\rho} - A_{\nu} J^{\nu}) = \frac{\kappa}{2} \epsilon^{\nu\mu\rho} \partial_{\mu} A_{\rho} - J^{\nu}
   $$

   $$
   \begin{gathered}
    \frac{\kappa}{2} \epsilon^{\rho\mu\nu} \partial_{\mu} A_{\rho} = \frac{\kappa}{2} \epsilon^{\nu\mu\rho} \partial_{\mu} A_{\rho} - J^{\nu} \\
    \kappa \epsilon^{\mu \rho \nu} \partial_{\mu} A_{\rho} = J^{\nu}
   \end{gathered}
   $$

   所以
   $$
   \rho = \kappa \epsilon^{ij 0} \partial_{i} A_{j} = \kappa (\nabla \times A) = \kappa B
   $$

   $$
   J^{i} = \kappa (\epsilon^{0ji} \partial_{0} A_{j} + \epsilon^{j0i} \partial_{j} A_{0}) = \kappa \epsilon^{ij} E_{j}
   $$

3. 考虑二维平面上存在两个电荷的情况，此时电荷密度与矢量势可以写为：
   $$
   \rho(\vec{x}, t) = e \sum_{n=1}^{2} \delta(\vec{x} - \vec{x}_{n}(t))
   $$
   $$
   A_{i}(\vec{x}_{n}, t) = \frac{e}{2\pi\kappa} \sum_{m \neq n} \epsilon_{ij} \frac{x_{n}^{j} - x_{m}^{j}}{|\vec{x}_{n} - \vec{x}_{m}|^{2}}
   $$
   试计算 Aharonov-Bohm 相位：
   $$
   e \oint_{C} \vec{A} \cdot d\vec{x}
   $$
   注：一个粒子绕着另外一个粒子可被视为将两粒子交换两次。AB 相位的结果告诉我们两粒子交换两次多出一个相位。因此，如果相位不等于 1，则两粒子为任意子。（费米子和玻色子都要求交换两次的相位等于 1。）
   $$
   \begin{gathered}
   e \oint_{C} \vec{A} \cdot d\vec{x} = e \oint_{C}  \frac{e}{2\pi\kappa} \sum_{m \neq n} \epsilon_{ij} \frac{x_{n}^{j} - x_{m}^{j}}{|\vec{x}_{n} - \vec{x}_{m}|^{2}} d x^{i} \\ =
   e \iint_{S} \nabla \times \vec{A} \cdot d \vec{S} = e \iint_{S} \frac{\rho}{\kappa} d x_{1} d x_{2} \\ = 
   e \iint_{S} \frac{e}{\kappa} \sum_{n=1}^{2} \delta(\vec{x} - \vec{x}_{n}(t)) d x_{1} d x_{2} = \frac{e^{2}}{\kappa}
   \end{gathered}
   $$

### 2 最小作用量原理与磁单极 (19-1)

一般而言，考虑到磁单极子之后，麦克斯韦方程不能从一个作用量出发，利用最小作用量原理推导。特别地，如果存在磁单极子之后，为了满足环路定理，时空中会存在狄拉克弦，这也暗示着我们不能从一个简单的作用量出发，推导存在磁单极时候的麦克斯韦方程组。一个可行的方案是引入两个势能函数 $A^{\mu}$ 与 $B^{\mu}$。请利用最小作用量原理写出下面包含 $A^{\mu}$ 与 $B^{\mu}$ 的拉氏量对应的运动方程：
$$
\mathcal{L} = -\frac{n^{\alpha} n^{\mu}}{8\pi n^{2}} \eta^{\beta\nu} \left( F^{A}_{\alpha\beta} F^{A}_{\mu\nu} + F^{B}_{\alpha\beta} F^{B}_{\mu\nu} \right) + \frac{n^{\alpha} n_{\mu}}{16\pi n^{2}} \epsilon^{\mu\nu\gamma\delta} \left( F^{B}_{\alpha\nu} F^{A}_{\gamma\delta} - F^{A}_{\alpha\nu} F^{B}_{\gamma\delta} \right) - A_{\mu} J^{\mu} - \frac{4\pi}{e^{2}} B_{\mu} K^{\mu}
$$
其中 $F_{A}^{\mu\nu} = \partial^{\mu} A^{\nu} - \partial^{\nu} A^{\mu}$，$F_{B}^{\mu\nu} = \partial^{\mu} B^{\nu} - \partial^{\nu} B^{\mu}$。此外 $J^{\mu}$ 与通常的电流，$K^{\mu}$ 为平常的磁流，$n^{\mu}$ 为狄拉克弦的方向矢量。
$$
\begin{gathered}
\delta s = \delta \int -\frac{n^{\alpha} n^{\mu}}{8\pi n^{2}} \eta^{\beta\nu} \left( F^{A}_{\alpha\beta} F^{A}_{\mu\nu} + F^{B}_{\alpha\beta} F^{B}_{\mu\nu} \right) + \frac{n^{\alpha} n_{\mu}}{16\pi n^{2}} \epsilon^{\mu\nu\gamma\delta} \left( F^{B}_{\alpha\nu} F^{A}_{\gamma\delta} - F^{A}_{\alpha\nu} F^{B}_{\gamma\delta} \right) - A_{\mu} J^{\mu} - \frac{4\pi}{e^{2}} B_{\mu} K^{\mu} \, d x^{4} \\ =
\int - \frac{n^{\alpha} n^{\mu}}{8\pi n^{2}} \eta^{\beta \nu} \left(F^{A}_{\alpha \beta} \delta F^{A}_{\mu \nu} + F^{A}_{\mu \nu} \delta F^{A}_{\alpha \beta} +  F^{B}_{\alpha\beta} \delta F^{B}_{\mu\nu} +  F^{B}_{\mu \nu} \delta F^{B}_{\alpha\beta} \right) \\ +
\frac{n^{\alpha} n_{\mu}}{16\pi n^{2}} \epsilon^{\mu\nu\gamma\delta} \left( F^{B}_{\alpha\nu} \delta F^{A}_{\gamma\delta} + F^{A}_{\gamma\delta} \delta F^{B}_{\alpha\nu} - F^{A}_{\alpha\nu} \delta F^{B}_{\gamma\delta} - F^{B}_{\gamma \delta} \delta F^{A}_{\alpha \nu} \right) \\ -
J^{\mu} \delta A_{\mu} -  \frac{4\pi}{e^{2}} K^{\mu} \delta B_{\mu} \, d x^{4}
\end{gathered}
$$
现在对第一项的变分进行分析
$$
\delta F^{A}_{\mu \nu} = \delta (\partial_{\mu} A_{\nu} - \partial_{\nu} A_{\mu})  = \partial_{\mu} \delta A_{\nu} - \partial_{\nu} \delta A_{\mu}
$$

$$
\begin{gathered}
n^{\alpha} n^{\mu} \eta^{\beta \nu} (F^{A}_{\alpha \beta} \delta F^{A}_{\mu \nu} +  F^{A}_{\mu \nu} \delta F^{A}_{\alpha \beta}) \\ = 
n^{\alpha} n^{\mu} \eta^{\beta \nu} F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu} - n^{\alpha} n^{\mu} \eta^{\beta \nu} F^{A}_{\alpha \beta} \partial_{\nu} \delta A_{\mu} + n^{\alpha} n^{\mu} \eta^{\beta \nu} F^{A}_{\mu \nu} \partial_{\alpha} \delta A_{\beta} - n^{\alpha} n^{\mu} \eta^{\beta \nu} F^{A}_{\mu \nu} \partial_{\beta} \delta A_{\alpha} \\ = 
n^{\alpha} n^{\mu} \eta^{\beta \nu} F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu} F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu} + n^{\mu} n^{\alpha} \eta^{\nu \beta} F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu} - n^{\mu} n^{\alpha} \eta^{\nu \beta} F^{A}_{\alpha \beta} \partial_{\nu} \delta A_{\mu} \\ =
2 (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu}
\end{gathered}
$$

同理
$$
\begin{gathered}
n^{\alpha} n^{\mu} \eta^{\beta \nu} (F^{B}_{\alpha \beta} \delta F^{B}_{\mu \nu} +  F^{B}_{\mu \nu} \delta F^{B}_{\alpha \beta}) \\ =
2 (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) F^{B}_{\alpha 
\beta} \partial_{\mu} \delta B_{\nu}
\end{gathered}
$$
 再分析第二项
$$
\begin{gathered}
n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} \left( F^{B}_{\alpha\nu} \delta F^{A}_{\gamma\delta} + F^{A}_{\gamma\delta} \delta F^{B}_{\alpha\nu} - F^{A}_{\alpha\nu} \delta F^{B}_{\gamma\delta} - F^{B}_{\gamma \delta} \delta F^{A}_{\alpha \nu} \right) \\ =
(n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu}) \left( F^{B}_{\alpha\nu} \delta F^{A}_{\gamma\delta} + F^{A}_{\gamma\delta} \delta F^{B}_{\alpha\nu} \right) \\ = 
(2 n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu} + n^{\delta} n_{\mu} \epsilon^{\mu \gamma \alpha \nu}) F^{B}_{\alpha \nu} \partial_{\gamma} \delta A_{\delta} \\ +
(n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\nu} n_{\mu} \epsilon^{\mu \alpha \gamma \delta} - 2 n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu}) F^{A}_{\gamma \delta} \partial_{\alpha} \delta B_{\nu}
\end{gathered}
$$
对这几项作分部积分并且舍去全微分项，得到
$$
\begin{gathered}
\delta s = \int d \tau - \frac{1}{4 \pi n^{2}} ((n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) F^{A}_{\alpha \beta} \partial_{\mu} \delta A_{\nu} + (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) F^{B}_{\alpha \beta} \partial_{\mu} \delta B_{\nu}) \\ + 
\frac{1}{16 \pi n^{2}} ((2 n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu} + n^{\delta} n_{\mu} \epsilon^{\mu \gamma \alpha \nu}) F^{B}_{\alpha \nu} \partial_{\gamma} \delta A_{\delta} \\ +
(n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\nu} n_{\mu} \epsilon^{\mu \alpha \gamma \delta} - 2 n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu}) F^{A}_{\gamma \delta} \partial_{\alpha} \delta B_{\nu}) \\ -
J^{\mu} \delta A_{\mu} -  \frac{4\pi}{e^{2}} K^{\mu} \delta B_{\mu} \, d x^{4} = 0
\end{gathered}
$$

$$
\begin{gathered}
\int d \tau  \frac{1}{4 \pi n^{2}} ((n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) \delta A_{\nu} \partial_{\mu} F^{A}_{\alpha \beta}   + (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) \delta B_{\nu} \partial_{\mu} F^{B}_{\alpha \beta} ) \\ -
\frac{1}{16 \pi n^{2}} ((2 n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu} + n^{\delta} n_{\mu} \epsilon^{\mu \gamma \alpha \nu})  \delta A_{\delta} \partial_{\gamma} F^{B}_{\alpha \nu}  \\ -
(n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta} - n^{\nu} n_{\mu} \epsilon^{\mu \alpha \gamma \delta} - 2 n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu}) \delta B_{\nu} \partial_{\alpha} F^{A}_{\gamma \delta}) \\ -
J^{\mu} \delta A_{\mu} -  \frac{4\pi}{e^{2}} K^{\mu} \delta B_{\mu} \, d x^{4} = 0
\end{gathered}
$$

所以可以整理得到包含 $A^{\mu}$ 与 $B^{\mu}$ 的拉氏量对应的运动方程为
$$
\frac{1}{4 \pi n^{2}} (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) \partial_{\mu} F^{A}_{\alpha \beta} - \frac{1}{16 \pi n^{2}} (2n^{\alpha} n_{\mu} \epsilon^{\mu \delta \gamma \nu} - n^{\gamma} n_{\mu} \epsilon^{\mu \nu \alpha \delta} + n^{\nu} n_{\mu} \epsilon^{\mu \gamma \alpha \delta}) \partial_{\gamma} F^{B}_{\alpha \delta} = J^{\nu}
$$

$$
\frac{1}{4 \pi n^{2}} (n^{\alpha} n^{\mu} \eta^{\beta \nu} - n^{\alpha} n^{\nu} \eta^{\beta \mu}) \partial_{\mu} F^{B}_{\alpha \beta} - \frac{1}{16 \pi n^{2}} (n^{\nu} n_{\mu} \epsilon^{\mu \alpha \gamma \delta} + 2 n^{\gamma} n_{\mu} \epsilon^{\mu \delta \alpha \nu} - n^{\alpha} n_{\mu} \epsilon^{\mu \nu \gamma \delta}) \partial_{\alpha} F^{A}_{\gamma \delta} = \frac{4 \pi}{e^{2}} K^{\mu}
$$

### 3 各向异性介质 (蒋济帆)

对于一般的晶体，由于各向异性，应该用介电张量 $\epsilon_{ij}$ 来表示其电学性质。取右手系 Oxyz，记电位移矢量 $\vec{D} = (D_{x}, D_{y}, D_{z})$，电场强度矢量 $\vec{E} = (E_{x}, E_{y}, E_{z})$，介电张量 $\epsilon$ 为：
$$
\epsilon = \begin{pmatrix}
\epsilon_{11} & \epsilon_{12} & \epsilon_{13} \\
\epsilon_{21} & \epsilon_{22} & \epsilon_{23} \\
\epsilon_{31} & \epsilon_{32} & \epsilon_{33}
\end{pmatrix}
$$
则：
$$
\vec{D} = \epsilon \cdot \vec{E} \quad \text{i.e.}
$$
$$
\begin{pmatrix}
D_{x} \\
D_{y} \\
D_{z}
\end{pmatrix}
=
\begin{pmatrix}
\epsilon_{11} & \epsilon_{12} & \epsilon_{13} \\
\epsilon_{21} & \epsilon_{22} & \epsilon_{23} \\
\epsilon_{31} & \epsilon_{32} & \epsilon_{33}
\end{pmatrix}
\begin{pmatrix}
E_{x} \\
E_{y} \\
E_{z}
\end{pmatrix}
$$
已知真空磁导率为 $\mu_{0}$，真空介电常数为 $\epsilon_{0}$。

1.证明：介电张量为对称张量。 
Hint：利用电磁场的能量。

证明：由于电场能量密度可以写成
$$
w_{E} = \frac{1}{2} \epsilon_{ij} E_{i} E_{j}
$$
由于能量密度关于电场强度是连续的，所以其偏导数满足可交换性
$$
\frac{\partial^{2}}{\partial E_{i} \partial E_{j}}  w_{E} = \frac{\partial^{2}}{\partial E_{j} \partial E_{i}}  w_{E}
$$
所以 $\epsilon_{ij} = \epsilon_{ji}$

2.对于普通的晶体，介质是非磁性的、透明的，此时 $\vec{B} = \mu_{0} \vec{H}$，其中 $\vec{B}$ 为磁感应强度，$\vec{H}$ 为磁场强度。选取合适的坐标系 Oxyz，可使得介电张量对角化，即 $\epsilon = \text{diag}\{\epsilon_{x}, \epsilon_{y}, \epsilon_{z}\}$（$\epsilon_{x}, \epsilon_{y}, \epsilon_{z} > 0$)，设晶体中某平面单色电磁波波矢 $\vec{k}$ 与 x 轴和 y 轴的夹角分别为 $\alpha$ 与 $\beta$（$0 \leqslant \alpha, \beta \leqslant 90^{\circ} \leqslant \alpha + \beta$)

(i) 求 $|\vec{k}|$ 所有可能的值。
$$
\vec{k} = (k \cos \alpha, k \cos \beta, k \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta})^{T}
$$

$$
\begin{gathered}
\nabla \times \vec{E} = - \frac{\partial}{\partial t} \vec{B} \\
\vec{k} \times \vec{E} = \omega \vec{B}
\end{gathered}
$$

$$
\begin{gathered}
\nabla \times \vec{B} = \mu_{0} \frac{\partial}{\partial t} \vec{D} \\
\vec{k} \times \vec{B} = - \mu_{0} \omega \vec{D}
\end{gathered}
$$

所以
$$
\begin{gathered}
\vec{k} \times (\vec{k} \times \vec{E}) = - \mu_{0} \omega^{2} \vec{D} \\
(\vec{k} \cdot \vec{E}) \vec{k} - k^{2} \vec{E} = - \mu_{0} \omega^{2} \vec{D} \\
k_{i} E_{i} k_{j} - k^{2} E_{j} = - \mu_{0} \omega^{2} \epsilon_{ij} E_{i}
\end{gathered}
$$

$$
\begin{gathered}
(k \cos \alpha E_{x} + k \cos \beta E_{y} + k \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} E_{z}) k \cos \alpha - k^{2} E_{x} = - \mu_{0} \omega^{2} \epsilon_{x} E_{x} \\
(k \cos \alpha E_{x} + k \cos \beta E_{y} + k \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} E_{z}) k \cos \beta - k^{2} E_{y} = - \mu_{0} \omega^{2} \epsilon_{y} E_{y} \\
(k \cos \alpha E_{x} + k \cos \beta E_{y} + k \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} E_{z}) k \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} - k^{2} E_{z} = - \mu_{0} \omega^{2} \epsilon_{z} E_{z}
\end{gathered}
$$

$$
\begin{pmatrix} \mu_{0} \omega^{2} \epsilon_{x} - k^{2} \sin^{2} \alpha & k^{2} \cos \beta \cos \alpha & k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \alpha \\ 
k^{2} \cos \alpha \cos \beta & \mu_{0} \omega^{2} \epsilon_{y} - k^{2} \sin^{2} \beta & k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \beta \\
k^{2} \cos \alpha \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} & k^{2} \cos \beta \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} & \mu_{0} \omega^{2} \epsilon_{z} - k^{2} (\cos^{2} \alpha + \cos^{2} \beta) \end{pmatrix}  \vec{E} = \vec{0}
$$

方程有解要求左边系数矩阵的行列式为 $0$
$$
\begin{gathered}
(\mu_{0} \omega^{2} \epsilon_{x} - k^{2} \sin^{2} \alpha) (\mu_{0} \omega^{2} \epsilon_{y} - k^{2} \sin^{2} \beta) (\mu_{0} \omega^{2} \epsilon_{z} - k^{2} (\cos^{2} \alpha + \cos^{2} \beta)) \\ + k^{2} \cos \beta \cos \alpha  k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \beta k^{2} \cos \alpha \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \\ +
k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \alpha k^{2} \cos \alpha \cos \beta  k^{2} \cos \beta \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \\ -
k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \alpha (\mu_{0} \omega^{2} \epsilon_{y} - k^{2} \sin^{2} \beta) k^{2} \cos \alpha \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \\ -
(\mu_{0} \omega^{2} \epsilon_{x} - k^{2} \sin^{2} \alpha) k^{2} \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \cos \beta k^{2} \cos \beta \sqrt{1 - \cos^{2} \alpha - \cos^{2} \beta} \\ -
k^{2} \cos \beta \cos \alpha k^{2} \cos \alpha \cos \beta ( \mu_{0} \omega^{2} \epsilon_{z} - k^{2} (\cos^{2} \alpha + \cos^{2} \beta) ) = 0
\end{gathered}
$$
解得

行列式展开后，通过对称性化简，发现$k^{6}$项抵消，最终得到一个关于$k^{2}$的二次方程：

$$
\begin{gathered}
\mu_{0}^{3} \omega^{6} \epsilon_{x} \epsilon_{y} \epsilon_{z} - \mu_{0}^{2} \omega^{4} k^{2} \left[ \epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \right] \\ + \mu_{0} \omega^{2} k^{4} \left[ \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (\sin^{2} \alpha \sin^{2} \beta - \cos^{2} \alpha \cos^{2} \beta) \right] = 0
\end{gathered}
$$

将方程除以$\mu_{0} \omega^{2}$并设$\lambda = k^{2}$，得到二次方程：

$$
\begin{gathered}
\mu_{0}^{2} \omega^{4} \epsilon_{x} \epsilon_{y} \epsilon_{z} - \mu_{0} \omega^{2} \lambda \left[ \epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \right] \\ + \lambda^{2} \left[ \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (1 - \cos^{2} \alpha - \cos^{2} \beta) \right] = 0
\end{gathered}
$$

解得$\lambda$即$k^{2}$为：

$$
\lambda = \frac{\mu_{0} \omega^{2} \left[ \epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \pm \sqrt{D} \right]}{2 \left( \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (1 - \cos^{2} \alpha - \cos^{2} \beta) \right)}
$$

其中判别式$\Delta$为：

$$
\begin{gathered}
\Delta = \left( \epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \right)^{2} \\ - 4 \epsilon_{x} \epsilon_{y} \epsilon_{z} \left( \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (1 - \cos^{2} \alpha - \cos^{2} \beta) \right)
\end{gathered}
$$

最终，$|\vec{k}|$的值为：

$$
|\vec{k}| = \sqrt{\frac{\mu_{0} \omega^{2} \left[
\epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \pm \sqrt{\Delta}
\right]}{2 \left( \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (1 - \cos^{2} \alpha - \cos^{2} \beta) \right)}}
$$

(ii) 若 $|\vec{k}|$ 只有一个可能的取值，求此时的 $\alpha$ 与 $\beta$
$$
\Delta = 0
$$

$$
\begin{gathered}
\left( \epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta) + \epsilon_{x} \epsilon_{z} \sin^{2} \beta + \epsilon_{y} \epsilon_{z} \sin^{2} \alpha \right)^{2} \\ = 4 \epsilon_{x} \epsilon_{y} \epsilon_{z} \left( \epsilon_{x} \cos^{2} \alpha + \epsilon_{y} \cos^{2} \beta + \epsilon_{z} (1 - \cos^{2} \alpha - \cos^{2} \beta) \right)
\end{gathered}
$$

所以
$$
\begin{gathered}
(\epsilon_{x} \epsilon_{y} (\cos^{2} \alpha + \cos^{2} \beta))^{2} + (\epsilon_{x} \epsilon_{z} \sin^{2} \beta )^{2} + (\epsilon_{y} \epsilon_{z} \sin^{2} \alpha)^{2} \\ =
2 \epsilon_{x} \epsilon_{y} \epsilon_{z} ( \epsilon_{x} (2 \cos^{2} \alpha - (\cos^{2} \alpha + \cos^{2} \beta) \sin^{2} \beta) +\epsilon_{y} (2 \cos^{2} \beta - (\cos^{2} \alpha \\ + \cos^{2} \beta) \sin^{2} \alpha) +  \epsilon_{z} (2 - 2 \cos^{2} \alpha - 2 \cos^{2} \beta - \sin^{2} \alpha \sin^{2} \beta ))
\end{gathered}
$$
解得，当
$$
\alpha = \beta = 0, \qquad \epsilon_{x} = \epsilon_{y}
$$

或
$$
\alpha = \frac{\pi}{2}, \beta = 0 , \qquad \epsilon_{y} = \epsilon_{z}
$$
或
$$
\alpha = 0, \beta = \frac{\pi}{2}, \qquad \epsilon_{x} = \epsilon_{z}
$$
时波矢只有一个可能的取值

3.对于单轴晶体，设 $\sqrt{\frac{\epsilon_{x}}{\epsilon_{0}}} = \sqrt{\frac{\epsilon_{y}}{\epsilon_{0}}} = n_{o}$，$\sqrt{\frac{\epsilon_{z}}{\epsilon_{0}}} = n_{e}$，求 $|\vec{k}|$，并据此论述它的双折射的性质。

此时
$$
|\vec{k}| = n_{0} \frac{\omega}{c}
$$
或
$$
|\vec{k}| = \frac{\omega}{c} \sqrt{\frac{n_{o}^{2} n_{e}^{2}}{n_{o}^{2} (\cos^{2} \alpha + \cos^{2} \beta) + n_{e}^{2} (1 - \cos^{2} \alpha - \cos^{2} \beta)}}
$$
即单轴晶体中存在两种传播模式，分别对应 $o$ 光和 $e$ 光

## 第6次作业

### 1 运动电荷的场 (25-5)

直接计算匀速运动电荷产生的电磁场，并将其与静止电荷电磁场洛伦兹变换后的结果做比较。

假设电荷以速度$v$ 朝$x$ 轴正方向运动，假设 $t = 0$ 时电荷正好在原点，计算 $t = 0$ 时刻空间的电场分布

考虑李纳-维谢尔势（用$\vec{r}' = \vec{r} + \vec{v} t$ 表示推迟后的相对位矢）
$$
|\vec{r} + \vec{v} t| = ct
$$

$$
t = \frac{|\vec{r'} - \vec{r}|}{v} = \frac{r'}{c}
$$

$$
r'^{2} + r^{2} - 2 \vec{r'} \cdot \vec{r} = \beta^{2} r'^{2}
$$

$$
\frac{\vec{r'} - \vec{r}}{|\vec{r'} - \vec{r}|} \cdot \vec{r} = \vec{r} \cdot \hat{x}
$$

$$
\vec{r'} \cdot \vec{r} - r^{2} = \beta r' \vec{r} \cdot \hat{x}
$$

$$
r^{2} + (1 - \beta^{2}) r'^{2} - 2 \beta r' \vec{r} \cdot \hat{x} - 2 r^{2} = 0
$$

$$
(1 - \beta^{2}) r'^{2} - 2 \beta (\vec{r} \cdot \hat{x}) r' - r^{2} = 0
$$

$$
r' = \frac{\beta (\vec{r} \cdot \hat{x}) + \sqrt{\beta^{2} (\vec{r} \cdot \hat{x})^{2} + (1 - \beta^{2}) r^{2}}}{1 - \beta^{2}}
$$

$$
r' -  \frac{\vec{v} \cdot \vec{r'}}{c} = ct (1 - \beta^{2}) - \frac{\vec{r} \cdot \vec{v}}{c} = r' (1 - \beta^{2}) - \frac{\vec{r} \cdot \vec{v}}{c} = \sqrt{\beta^{2} (\vec{r} \cdot \hat{x})^{2} + (1 - \beta^{2}) r^{2}}
$$

$$
\begin{gathered}
\phi = \frac{q}{4 \pi \epsilon_{0} (r' - \frac{\vec{v} \cdot \vec{r'}}{c})} \\
\vec{A} = \phi \vec{v} = \frac{q \vec{v}}{4 \pi \epsilon_{0} c^{2} (r' - \frac{\vec{v} \cdot \vec{r'}}{c})}
\end{gathered}
$$

所以
$$
\begin{gathered}
\vec{E} = - \nabla \phi - \frac{\partial}{\partial t} \vec{A} = - \nabla \frac{q}{4 \pi \epsilon_{0} (r' - \frac{\vec{v} \cdot \vec{r'}}{c})}  - \frac{\partial}{\partial t} \frac{q \vec{v}}{4 \pi \epsilon_{0} c^{2} (r' - \frac{\vec{v} \cdot \vec{r'}}{c})} \\ =
- \frac{q}{4 \pi \epsilon_{0}} \left( - \frac{2 \beta^{2} (\vec{r} \cdot \hat{x}) \hat{x} + 2 (1 - \beta^{2}) \vec{r}}{2\sqrt{\beta^{2} (\vec{r} \cdot \hat{x})^{2} + (1 - \beta^{2}) r^{2}}^{3}} + \frac{2 \beta^{2} (\vec{r} \cdot \hat{x}) \hat{x} + 2 (1 - \beta^{2}) \vec{r}}{2\sqrt{\beta^{2} (\vec{r} \cdot \hat{x})^{2} + (1 - \beta^{2}) r^{2}}^{3}} \cdot \frac{\vec{v}}{c^{2}} \vec{v} \right)  \\ =
\frac{q}{4 \pi \epsilon_{0}}  \frac{(1 - \beta^{2}) \vec{r}}{(\beta^{2} (\vec{r} \cdot \hat{v})^{2} + (1 - \beta^{2}) r^{2})^{\frac{3}{2}}}
\end{gathered}
$$
对比洛伦兹变换结果

在粒子随动系中
$$
\vec{E'} = \frac{q}{4 \pi \epsilon_{0} r'^{3}} \vec{r'}
$$
换系后
$$
\vec{E} = \frac{q}{4 \pi \epsilon_{0}} (- (\gamma - 1) \frac{\vec{r'} \cdot \hat{v}}{r'^{3}} \hat{v} + \gamma \frac{\vec{r'}}{r'^{3}})
$$
带入 $t = 0$ 时
$$
\vec{r'} = (\gamma - 1) (\vec{r} \cdot \hat{v}) \hat{v} + \vec{r}
$$
所以
$$
\begin{gathered}
\vec{E} = \frac{q}{4 \pi \epsilon_{0}} \frac{- (\gamma - 1) \gamma (\vec{r} \cdot \hat{v}) \hat{v} + \gamma (\gamma - 1) (\vec{r} \cdot \hat{v}) \hat{v} + \gamma \vec{r}}{\left( \frac{\beta^{2} (\vec{r} \cdot \hat{v})^{2} + (1 - \beta^{2}) r^{2}}{1 - \beta^{2}} \right)^{\frac{3}{2}}} \\ =
\frac{q}{4 \pi \epsilon_{0}} \frac{\gamma \vec{r}}{\left( \frac{\beta^{2} (\vec{r} \cdot \hat{v})^{2} + (1 - \beta^{2}) r^{2}}{1 - \beta^{2}} \right)^{\frac{3}{2}}} \\ =
\frac{q}{4 \pi \epsilon_{0}}  \frac{(1 - \beta^{2}) \vec{r}}{(\beta^{2} (\vec{r} \cdot \hat{v})^{2} + (1 - \beta^{2}) r^{2})^{\frac{3}{2}}}
\end{gathered}
$$
可以看出，两种计算方式的结果是相同的

### 2 麦克斯韦方程组的洛伦兹协变性 (26-3)
请证明麦克斯韦方程组在洛伦兹变换下保持协变，即麦克斯韦方程组形式在洛伦兹变换下保持不变。

麦克斯韦方程组在张量形式下可以表示为：

$$
\begin{aligned}
\partial_{\mu} F^{\mu\nu} &= \frac{4\pi}{c} j^{\nu} \\
\partial_{\mu} {}^{\star}\!F^{\mu\nu} &= 0
\end{aligned}
$$

电磁场张量 $F^{\mu\nu}$ 定义为：
$$
F^{\mu\nu} = \begin{pmatrix}
0 & -E_{x} & -E_{y} & -E_{z} \\
E_{x} & 0 & -B_{z} & B_{y} \\
E_{y} & B_{z} & 0 & -B_{x} \\
E_{z} & -B_{y} & B_{x} & 0
\end{pmatrix}.
$$

对偶电磁场张量 ${}^{\star}\!F^{\mu\nu}$ 定义为：
$$
{}^{\star}\!F^{\mu\nu} = \begin{pmatrix}
0 & B_{x} & B_{y} & B_{z} \\
-B_{x} & 0 & E_{z} & -E_{y} \\
-B_{y} & -E_{z} & 0 & E_{x} \\
-B_{z} & E_{y} & -E_{x} & 0
\end{pmatrix}.
$$

四维流密度 $j^{\nu}$ 定义为：
$$
j^{\nu} = \left( c \rho, \vec{J} \right)
$$

洛伦兹变换可以表示为：
$$
x'^{\mu} = \Lambda^{\mu}{}_{\nu} x^{\nu}
$$

其中 $\Lambda^{\mu}{}_{\nu}$ 是洛伦兹变换矩阵，满足：
$$
\Lambda^{\mu}{}_{\alpha} \Lambda^{\nu}{}_{\beta} \eta_{\mu\nu} = \eta_{\alpha\beta},
$$

其中 $\eta_{\mu\nu} = \text{diag}(-1, 1, 1, 1)$ 

$$
F'^{\mu\nu} = \Lambda^{\mu}{}_{\alpha} \Lambda^{\nu}{}_{\beta} F^{\alpha\beta},
$$

$$
j'^{\nu} = \Lambda^{\nu}{}_{\beta} j^{\beta}
$$

$$
\partial'_{\mu} = \frac{\partial}{\partial x'^{\mu}} = \frac{\partial x^{\alpha}}{\partial x'^{\mu}} \frac{\partial}{\partial x^{\alpha}} = \Lambda^{\alpha}{}_{\mu} \partial_{\alpha}
$$

$$
F'^{\mu\nu} = \Lambda^{\mu}{}_{\alpha} \Lambda^{\nu}{}_{\beta} F^{\alpha\beta}
$$

$$
j'^{\nu} = \Lambda^{\nu}{}_{\beta} j^{\beta}
$$

$$
\partial'_{\mu} F'^{\mu\nu} = \Lambda^{\delta}{}_{\mu} \partial_{\delta} \left( \Lambda^{\mu}{}_{\alpha} \Lambda^{\nu}{}_{\beta} F^{\alpha\beta} \right)
$$

$$
\begin{gathered}
\partial'_{\mu} F'^{\mu\nu} = \delta^{\delta}{}_{\alpha} \Lambda^{\nu}{}_{\beta} \partial_{\delta} F^{\alpha\beta} \\ = 
\Lambda^{\nu}{}_{\beta} \partial_{\alpha} F^{\alpha\beta} = \frac{4 \pi}{c} \Lambda^{\nu}{}_{\beta} j^{\beta} = \frac{4 \pi}{c} j'^{\nu}
\end{gathered}
$$

同理，对于对偶电磁场张量：
$$
\partial'_{\mu} {}^{\star}\!F'^{\mu\nu} = 0
$$

所以麦克斯韦方程组是洛伦兹协变的。

### 3 对称性与电磁动量 (27-6)

在课堂上，大家表示电磁场能量-动量张量的推导比较繁琐，并且看不出太明显的物理意义。在本题当中，我们尝试从时空平移不变性出发，利用诺特定理推导能量-动量张量的表达式。从而将能量-动量张量与对称性联系起来。

(1). 考虑一个无穷小的变换: $x^{\mu} \rightarrow x^{\mu} + \epsilon^{\mu}(x)$。在此无穷小变换下，电磁势按照如下变换: $A^{\mu} \rightarrow A^{\mu} + \epsilon^{\nu}(x)\partial_{\nu} A^{\mu}$。对于一般的理论而言，其作用量只明显包含电磁势 $A^{\mu}$ 及其导数 $\partial_{\nu} A^{\mu}$。请证明在上述变换下，作用量的变化满足:
$$
\delta S = \int d^{4x} \left( \frac{\partial \mathcal{L}}{\partial A^{\mu}} \epsilon^{\nu}(x) \partial_{\nu} A^{\mu} + \frac{\partial \mathcal{L}}{\partial (\partial_{\sigma} A^{\mu})} \partial_{\sigma} [\epsilon^{\nu}(x) \partial_{\nu} A^{\mu}] \right)
$$

证明
$$
\begin{gathered}
A^{\mu} \rightarrow A^{\mu} + \epsilon^{\nu}(x)\partial_{\nu} A^{\mu} \\
\partial_{\sigma} A^{\mu} \rightarrow \partial_{\sigma} A^{\mu} + \partial_{\sigma} \epsilon^{\nu} (x) \partial_{\nu} A^{\mu}
\end{gathered}
$$
所以
$$
\begin{gathered}
\delta S = \frac{\partial S}{\partial A^{\mu}} \epsilon^{\nu} (x) \partial_{\nu} A^{\mu} + \frac{\partial S}{\partial (\partial_{\sigma} A^{\mu})} \partial_{\sigma} \epsilon^{\nu} (x) \partial_{\nu} A^{\mu} \\ =
\int d^{4x} \left( \frac{\partial \mathcal{L}}{\partial A^{\mu}} \epsilon^{\nu}(x) \partial_{\nu} A^{\mu} + \frac{\partial \mathcal{L}}{\partial (\partial_{\sigma} A^{\mu})} \partial_{\sigma} [\epsilon^{\nu}(x) \partial_{\nu} A^{\mu}] \right)
\end{gathered}
$$
(2). 在上述的基础上，请证明作用量的变化满足:
$$
\delta S = \int d^{4x} T^{\mu\nu} \partial_{\mu} \epsilon_{\nu}(x), \quad T^{\mu\nu} = \frac{\partial \mathcal{L}}{\partial (\partial_{\mu} A_{\sigma})} \partial^{\nu} A_{\sigma} - \eta^{\mu\nu} \mathcal{L}
$$

证明
$$
\begin{gathered}
\delta S = \int d^{4x} \left( \frac{\partial \mathcal{L}}{\partial A^{\mu}} \epsilon^{\nu}(x) \partial_{\nu} A^{\mu} + \frac{\partial \mathcal{L}}{\partial (\partial_{\sigma} A^{\mu})} \partial_{\sigma} [\epsilon^{\nu}(x) \partial_{\nu} A^{\mu}] \right) \\ = 
\int d^{4} x \left( \frac{\partial \mathcal{L}}{\partial A^{\mu}} \epsilon^{\nu}(x)  +  \frac{\partial \mathcal{L}}{\partial (\partial_{\mu} A^{\sigma})} \partial_{\mu} [\epsilon^{\nu}(x) \partial_{\nu} A^{\sigma}] \right) \\ =
\int d^{4} x \left( \frac{\partial \mathcal{L}}{\partial A^{\mu}} \epsilon^{\nu}(x) + \frac{\partial \mathcal{L}}{\partial (\partial_{\mu} A^{\sigma})} \partial_{\mu} (\partial_{\nu} A^{\sigma}) \epsilon^{\nu}(x)  +  \frac{\partial \mathcal{L}}{\partial (\partial_{\mu} A^{\sigma})} \partial_{\nu} A^{\sigma} \partial_{\mu} \epsilon^{\nu}(x) \right) \\ = 
\int d^{4} x \left( \partial_{\nu} \mathcal{L} \epsilon^{\nu} (x) + \frac{\partial \mathcal{L}}{\partial (\partial_{\mu} A^{\sigma})} \partial_{\nu} A^{\sigma} \partial_{\mu} \epsilon^{\nu}(x) \right) \\ =
\int d^{4} x \left(\frac{\partial \mathcal{L}}{\partial (\partial_{\mu} A^{\sigma})} \partial_{\nu} A^{\sigma} \partial_{\mu} \epsilon^{\nu}(x) - \mathcal{L} \partial_{\nu} \epsilon^{\nu} (x) \right) \\ =
\int d^{4} x \left(\frac{\partial \mathcal{L}}{\partial (\partial_{\mu} A_{\sigma})} \partial^{\nu} A_{\sigma} \partial_{\mu} \epsilon_{\nu}(x) - \mathcal{L} \partial_{\mu} \eta^{\mu \nu} \epsilon_{\nu} (x) \right) \\ =
\int d^{4x} T^{\mu\nu} \partial_{\mu} \epsilon_{\nu}(x), \quad T^{\mu\nu} = \frac{\partial \mathcal{L}}{\partial (\partial_{\mu} A_{\sigma})} \partial^{\nu} A_{\sigma} - \eta^{\mu\nu} \mathcal{L}
\end{gathered}
$$
(3). 对于一般的理论而言，如果其满足时空平移不变性，即 $\epsilon^{\nu}(x) = \epsilon^{\nu}$ 为一个不依赖于时空坐标的函数时，体系的作用量应该在该时空平移下保持不变: $\delta S = 0$。在分部积分的意义下，这意味着我们有 $\partial_{\nu} T^{\mu\nu} = 0$。对于电磁理论来说，其作用量可以写为:
$$
S = - \int d^{4x} \left( \frac{1}{4} F_{\mu\nu} F^{\mu\nu} \right)
$$
请利用第二问的结论证明电磁理论的能量-动量张量满足:
$$
T^{\mu\nu} = - F^{\mu\sigma} \partial_{\nu} A^{\sigma} - \eta^{\mu\nu} \mathcal{L}
$$

$$
\mathcal{L} = -\frac{1}{4} (\partial_{\mu} A_{\sigma} - \partial_{\sigma} A_{\mu}) (\partial^{\mu} A^{\sigma} - \partial^{\sigma} A^{\mu}) = - \frac{1}{2} \partial_{\mu} A_{\sigma} \partial^{\mu} A^{\sigma} + \frac{1}{2} \partial_{\mu} A_{\sigma} \partial^{\sigma} A^{\mu}
$$

$$
\begin{gathered}
T^{\mu\nu} = \frac{\partial \mathcal{L}}{\partial (\partial_{\mu} A_{\sigma})} \partial^{\nu} A_{\sigma} - \eta^{\mu\nu} \mathcal{L} \\ =
(- \partial^{\mu} A^{\sigma}  + \partial^{\sigma} A^{\mu}) \partial^{\nu} A_{\sigma} - \eta^{\mu\nu} \mathcal{L} \\ =
- F^{\mu\sigma} \partial_{\nu} A^{\sigma} - \eta^{\mu\nu} \mathcal{L}
\end{gathered}
$$

(4) 对于一般的电磁理论而言，我们可以采用希尔伯特的定义方式，让其能量-动量张量是对称张量。具体而言，对于电磁理论而言，其能量-动量张量对称化之后可以写为:
$$
T^{\mu\nu} = \eta^{\sigma\lambda} F^{\mu\sigma} F^{\lambda\nu} - \eta^{\mu\nu} \mathcal{L}
$$
请证明能量-动量张量零分量的守恒方程即为电磁场的守恒方程:
$$
\partial_{\mu} T^{\mu 0} = 0, \quad \Rightarrow \quad \frac{1}{2} \frac{\partial}{\partial t} \left( \vec{E} \cdot \vec{E} + \vec{B} \cdot \vec{B} \right) + \nabla \cdot ( \vec{E} \times \vec{B} ) = 0
$$

证明
$$
\begin{gathered}
\partial_{\mu} T^{\mu 0} = \partial_{\mu} (\eta^{\sigma\lambda} F^{\mu\sigma} F^{\lambda 0} - \eta^{\mu 0} \mathcal{L}) \\ =
\partial_{\mu} ( - (F^{\mu 1} F^{10} + F^{\mu 2} F^{20} + F^{\mu 3} F^{30}) + F^{\mu 0} F^{00}) + \partial_{0} \mathcal{L} \\ = \partial_{0} ( E^{2}) + \partial_{i} (F^{ij} F^{j0}) - \frac{\partial}{\partial t} \mathcal{L}\\ = 
\frac{\partial}{\partial t} E^{2} + \partial_{i} (\epsilon^{ijk} E_{j} B_{k})  - \frac{\partial}{\partial t} ( \frac{1}{2} (E^{2} - B^{2}))\\ = 
\frac{1}{2} \frac{\partial}{\partial t} (\vec{E} \cdot \vec{E} + \vec{B} \cdot \vec{B}) + \nabla \cdot (\vec{E} \times \vec{B}) = 0
\end{gathered}
$$

### 4 菲涅尔定律及其应用 (33-1)

菲涅尔棱镜是一种将线性偏振光转换为圆偏振光的光学器件。如图所示，光线垂直线入射到棱镜的表面，然后在棱镜内部经历两次全内反射，最后再垂直射出棱镜。光线在棱镜内每次反射都会使平行于入射平面的光波分量与垂直于入射平面的光波分量之间产生 45° 的相位差。因此，经过两次内反射后，原本与入射平面成 45° 线偏振的光波会变成圆偏振光。

<img src="./Feynman Lectures on Physics (2) Homework.assets/image-20260128015539066.png" alt="image-20260128015539066" style="zoom:50%;" />

(1). 对于偏振方向平行入射平面的电磁波而言，请计算单次内部反射后，反射波与入射波的相位差。
$$
\delta_{p} = 2 \arctan \frac{n}{\cos \theta_{i}} \sqrt{(n \sin \theta_{i})^{2}  - 1}
$$
(2). 当电磁波的偏振方向垂直于入射平面时，请计算反射波相对于入射波的相位差。
$$
\delta_{s} = 2 \arctan \frac{1}{n \cos \theta_{i}} \sqrt{(n \sin \theta_{i})^{2}  - 1}
$$
(3). 如果菲涅尔棱镜中的两次全内反射的入射角均为 $\theta_{i} = 53.3^{\circ}$，请计算菲涅尔棱镜相对于周围环境的折射率。
$$
2 \left( \arctan \frac{n}{\cos \theta_{i}} \sqrt{(n \sin \theta_{i})^{2}  - 1} -  \arctan \frac{1}{n \cos \theta_{i}} \sqrt{(n \sin \theta_{i})^{2}  - 1} \right) = \frac{\pi}{4}
$$
带入数据，解得
$$
n \approx 1.5002
$$

## 第7次作业

### 1. 浅水波与电磁场

厄尔尼诺与拉尼诺现象都可以用浅水波理论来研究，然而其解析解非常困难，一般依赖于大型的数值模拟。近十年来，物理学家发现浅水波等价于一个包含 Chern-Simons 相互作用的电磁理论，从而将厄尔尼诺与拉尼诺的产生用电磁理论的处理方法（特别是反常量子霍尔效应）联系起来。本题我们尝试说明浅水波与 1+2 维规范理论的等价性。

#### 1. 浅水波运动方程的连续性方程形式

(1). 浅水波的运动方程可以用流体的高度 $h(t, x, y)$ 与水平方向的流速场 $\vec{u}(t, x, y)$ 来描述：
$$
\frac{\partial h}{\partial t} + \vec{u} \cdot \nabla h + h \nabla \cdot \vec{u} = 0
$$

$$
\frac{\partial u^{i}}{\partial t} + (\vec{u} \cdot \nabla) u^{i} - f \epsilon^{ij} u^{j} + g \frac{\partial h}{\partial x^{i}} = 0
$$

其中 $f$ 为科里奥利力参数，$g$ 为重力加速度。请证明浅水波的运动方程可以写成以下两个连续性方程：

$$
\begin{gathered}
\frac{\partial J^{0}}{\partial t} + \nabla \cdot \vec{J} = 0 \\
J_{0} = h(t, x, y) \\
\vec{J} = h(t, x, y) \vec{u}(t, x, y)
\end{gathered}
$$

$$
\begin{gathered}
\frac{\partial \tilde{J}^{0}}{\partial t} + \nabla \cdot \vec{\tilde{J}} = 0 \\ 
\tilde{J}^{0} = \zeta(t, x, y) + f \\ 
\vec{\tilde{J}} = (\zeta(t, x, y) + f) \vec{u}(t, x, y) \\
\zeta(t, x, y) = \frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y}
\end{gathered}
$$

第一个方程表征的是浅水波高度的守恒方程，第二个方程描述的是涡旋 $\zeta$ 在存在科里奥利力的情况下的守恒方程。

证明
$$
\frac{\partial J^{0}}{\partial t} + \nabla \cdot \vec{J} = \frac{\partial h}{\partial t} + \nabla \cdot (h \vec{u}) = \frac{\partial h}{\partial t} + \vec{u} \cdot \nabla h + h \nabla \cdot \vec{u} = 0
$$

$$
\begin{gathered}
\frac{\partial \tilde{J}^{0}}{\partial t} + \nabla \cdot \vec{\tilde{J}} = \frac{\partial}{\partial t} (\zeta(t, x, y) + f) + \nabla \cdot ((\zeta(t, x, y) + f) \vec{u}(t, x, y)) \\ =
\frac{\partial \zeta}{\partial t} + (\nabla \zeta) \cdot \vec{u} + (\zeta + f) \nabla \cdot \vec{u}
\end{gathered}
$$

$$
\begin{gathered}
\frac{\partial}{\partial t} \zeta = \frac{\partial}{\partial t} (\frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y}) = \frac{\partial}{\partial x} (f \epsilon^{21} u^{1} - (\vec{u} \cdot \nabla) u^{2} - g \frac{\partial h}{\partial y}) - \frac{\partial}{\partial y} (f \epsilon^{12} u^{2} - (\vec{u} \cdot \nabla) u^{1} - g \frac{\partial h}{\partial x}) \\ =
\frac{\partial}{\partial x} (-f u^{1} - (\vec{u} \cdot \nabla) u^{2} - g \frac{\partial h}{\partial y}) - \frac{\partial}{\partial y} (f u^{2} - (\vec{u} \cdot \nabla) u^{1} - g \frac{\partial h}{\partial x})
\end{gathered}
$$

$$
(\nabla \zeta) \cdot \vec{u} = \frac{\partial}{\partial x}(\frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y}) u^{1} + \frac{\partial}{\partial y}(\frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y}) u^{2}
$$

$$
(\zeta + f) \nabla \cdot \vec{u} = (\frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y} + f) (\frac{\partial u^{1}}{\partial x} + \frac{\partial u^{2}}{\partial y})
$$

所以
$$
\begin{gathered}
\frac{\partial \zeta}{\partial t} + (\nabla \zeta) \cdot \vec{u} + (\zeta + f) \nabla \cdot \vec{u} \\ = 
\frac{\partial}{\partial x} (-f u^{1} - (\vec{u} \cdot \nabla) u^{2} - g \frac{\partial h}{\partial y}) - \frac{\partial}{\partial y} (f u^{2} - (\vec{u} \cdot \nabla) u^{1} - g \frac{\partial h}{\partial x}) \\ +
\frac{\partial}{\partial x}(\frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y}) u^{1} + \frac{\partial}{\partial y}(\frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y}) u^{2} \\ + 
(\frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y} + f) (\frac{\partial u^{1}}{\partial x} + \frac{\partial u^{2}}{\partial y}) \\ = 
\frac{\partial}{\partial y} (u^{1} \frac{\partial u^{1}}{\partial x} +  u^{2} \frac{\partial u^{1}}{\partial y}) - \frac{\partial}{\partial x} (u^{1} \frac{\partial u^{2}}{\partial x} +  u^{2} \frac{\partial u^{2}}{\partial y}) \\ +
u^{1} \frac{\partial}{\partial x}(\frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y}) + u^{2} \frac{\partial}{\partial y}(\frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y}) \\ + 
(\frac{\partial u^{2}}{\partial x} - \frac{\partial u^{1}}{\partial y}) (\frac{\partial u^{1}}{\partial x} + \frac{\partial u^{2}}{\partial y}) = 0
\end{gathered}
$$

#### 2. 浅水波运动方程与麦克斯韦方程组的类比

(2). 通过一些观察，我们可以将流体的高度 $h(t, x, y)$ 与水平方向的流速场 $\vec{u}(t, x, y)$ 同 1+2 维的电场磁场类比起来。请证明，如果令  $B = h$, $E_{i} = \epsilon_{ij} h u_{j}$，则第一个浅水波运动方程(1.1)可以写成麦克斯韦方程组的一部分:

$$
\epsilon^{\mu \nu \rho} \partial_{\mu} \partial_{\nu} A_{\rho} = 0
$$

（注：事实上，第二个浅水波运动方程 (1.2) 也可以写成类似于麦克斯韦方程组的形式。感兴趣的同学可以将此作为期末小论文的一个选题。）

证明
$$
\frac{\partial h}{\partial t} + \vec{u} \cdot \nabla h + h \nabla \cdot \vec{u} = 0
$$
所以
$$
\begin{gathered}
\frac{\partial h}{\partial t} + u_{i} \partial_{i} h + h \partial_{i} u_{i} = 0 \\
\frac{\partial h}{\partial t} + \partial_{i} (u_{i} h) = 0
\end{gathered}
$$
因为 $E_{i} = h \epsilon_{ij} u_{j}$ ，所以
$$
\epsilon_{ik} E_{i} = h \epsilon_{ik} \epsilon_{ij} u_{j} = h \delta_{kj} u_{j} = h u_{k}
$$
所以
$$
\frac{\partial B}{\partial t} + \partial_{k} (\epsilon_{ik} E_{i}) = 0
$$
但是在当前度规下 $E^{i} = g^{ij} E_{j} = - E_{j}$

写成矢量的形式，即
$$
\frac{\partial \vec{B}}{\partial t} + \nabla \times \vec{E} = 0
$$
从1+2 维的电场磁场麦克斯韦方程组的协变形式出发
$$
\epsilon^{\mu \nu \rho} \partial_{\mu} \partial_{\nu} A_{\rho} = 0
$$

$$
\epsilon^{k i 0} \partial_{k} \partial_{i} A_{0} + \epsilon^{k 0 j} \partial_{k} \partial_{0} A_{j} + \epsilon^{0 i j} \partial_{0} \partial_{i} A_{j} = 0
$$

$$
\begin{gathered}
\frac{1}{c} \epsilon^{kj} \partial_{k} E_{j} + \partial_{0} (\epsilon^{ij} \partial_{i} A_{j}) = 0 \\
- \frac{1}{c} \nabla \times \vec{E} - \frac{1}{c} \frac{\partial}{\partial t} (\nabla \times \vec{A}) = 0
\end{gathered}
$$

所以
$$
\frac{\partial \vec{B}}{\partial t} + \nabla \times \vec{E} = 0
$$
即第一个运动方程可以视作 1+2 维时空麦克斯韦方程组的一部分 

### 2. 自旋，磁性与相变

#### 1. 自旋体系的概率与均值计算

(1). 考虑一个有 $N$ 个自旋为 $\frac{1}{2}$  的粒子的体系，对于每个粒子而言，其自旋沿 $+z$ 轴与 $-z$  轴的概率一样。请计算体系有 $n$ 个粒子自旋朝 $+z$ 轴方向的概率，并计算体系自旋的均值。
$$
p_{n} = \frac{C_{N}^{n}}{2^{N}}
$$
均值
$$
<s> = \sum_{n = 0}^{N} \frac{1}{2} (2n - N) \frac{C_{N}^{n}}{2^{N}} = 0
$$

#### 2. 在外磁场作用下的概率与均值计算

(2). 在一个沿 $+ z$ 方向磁场的作用下，粒子方向自旋沿 $+ z$ 轴的概率变为 $\frac{1}{2} + q$，粒子自旋朝 $-z$ 轴的概率变为 $\frac{1}{2} - q$。请计算此时体系有 $n$ 个粒子自旋朝 $+z$ 轴方向的概率，并计算体系自旋的均值。
$$
p_{n} = C_{N}^{n} (\frac{1}{2} + q)^{n} (\frac{1}{2} - q)^{N - n}
$$

$$
\begin{gathered}
<s> = \sum_{n = 0}^{N} \frac{1}{2} (2n - N) C_{N}^{n} (\frac{1}{2} + q)^{n} (\frac{1}{2} - q)^{N - n} \\ = 
\sum_{n = 0}^{N} n C_{N}^{n} (\frac{1}{2} + q)^{n} (\frac{1}{2} - q)^{N - n} - \frac{1}{2} N \\ =
(\frac{1}{2} + q) N \sum_{n = 1}^{N} C_{N - 1}^{n - 1} (\frac{1}{2} + q)^{n - 1} (\frac{1}{2} - q)^{N - n} - \frac{1}{2} N \\ =
(\frac{1}{2} + q) N - \frac{1}{2} N = q N
\end{gathered}
$$

#### 3. 一维伊辛模型的相变证明

(3). 考虑一个真实的一维 $N$ 个自旋链系统，即我们考虑一维的伊辛模型，其哈密顿量可以写为：

$$
H = -J \sum_{\langle ij \rangle} s_{i} s_{j} - h \sum_{i} s_{i}
$$

对于一维的伊辛模型而言，我们可以解析的计算其自由能：

$$
F = -N k T \log(\lambda_{1}), \quad \lambda_{1} = \sqrt{e^{\frac{2J}{T}} \sinh^{2} \left( \frac{h}{T} \right) + e^{-\frac{2J}{T}}} + e^{\frac{J}{T}} \cosh \left( \frac{h}{T} \right)
$$

请证明对于一维伊辛模型而言，其自由能对外磁场 $h$ 的导数在  $T \neq 0$ 的时候没有零点，即一维伊辛模型没有相变。

证明
$$
\frac{d F}{d h} = - \frac{NkT}{\lambda_{1}} \left(\frac{e^{\frac{2J}{T}} \sinh (\frac{h}{T}) \cosh (\frac{h}{T}) \frac{1}{T}}{\sqrt{e^{\frac{2J}{T}} \sinh^{2} \left( \frac{h}{T} \right) + e^{-\frac{2J}{T}}}} + e^{\frac{J}{T}} \sinh (\frac{h}{T}) \frac{1}{T} \right)
$$
在  $T \neq 0$ 的时候，该导数若存在零点，则
$$
e^{\frac{2J}{T}} \sinh (\frac{h}{T}) \cosh (\frac{h}{T}) + e^{\frac{J}{T}} \sinh (\frac{h}{T}) \sqrt{e^{\frac{2J}{T}} \sinh^{2} \left( \frac{h}{T} \right) + e^{-\frac{2J}{T}}} = 0
$$

$$
e^{\frac{4J}{T}} \sinh^{2} (\frac{h}{T}) \cosh^{2} (\frac{h}{T}) = e^{\frac{4J}{T}} \sinh^{4} (\frac{h}{T}) + \sinh^{2} (\frac{h}{T})
$$

$$
e^{\frac{4J}{T}} \cosh^{2} (\frac{h}{T}) = e^{\frac{4J}{T}} \sinh^{2} (\frac{h}{T}) + 1
$$

$$
(e^{\frac{4J}{T}} - 1) \cosh^{2} (\frac{h}{T}) = (e^{\frac{4J}{T}} - 1) \sinh^{2} (\frac{h}{T})
$$

由于 $J \neq 0$，所以 $e^{\frac{4J}{T}} - 1 \neq 0$
$$
\cosh^{2} (\frac{h}{T}) = \sinh^{2} (\frac{h}{T})
$$
无解。所以 $T \neq 0$ 的时候，该导数不存在零点，即一维伊辛模型没有相变。

### 3. 等效原理与引力

请利用等效原理推导粒子在引力场中的运动方程。

提示：考虑一个在引力作用下自由运动的粒子。根据等效原理，存在一个自由降落的坐标系 $\xi^{\alpha}$ ，粒子在这个坐标系里的运动方程是时空中的一条直线：

$$
\frac{d^{2} \xi^{\alpha}}{d \tau^{2}} = 0
$$

其中 $d \tau$ 为固有时。考虑一个任意的坐标系 $x^{\mu}$，则此时自由降落坐标 $\xi^{\alpha}$ 是 $x^{\mu}$ 的函数，此时我们从(3.1)出发，推导的在 $x^{\mu}$ 坐标下的运动方程即为一般的引力场中的运动方程。

根据等效原理，在自由降落的坐标系 $\xi^{\alpha}$ 中，粒子的运动方程为直线：

$$
\frac{d^{2} \xi^{\alpha}}{d\tau^{2}} = 0
$$

现在转换到任意坐标系 $x^{\mu}$，其中 $\xi^{\alpha}$ 是 $x^{\mu}$ 的函数。利用链式法则：

一阶导数：
$$
\frac{d\xi^{\alpha}}{d\tau} = \frac{\partial \xi^{\alpha}}{\partial x^{\mu}} \frac{dx^{\mu}}{d\tau}
$$
二阶导数：
$$
\frac{d^{2}\xi^{\alpha}}{d\tau^{2}} = \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\mu} \partial x^{\nu}} \frac{dx^{\mu}}{d\tau} \frac{dx^{\nu}}{d\tau} + \frac{\partial \xi^{\alpha}}{\partial x^{\mu}} \frac{d^{2}x^{\mu}}{d\tau^{2}}
$$
根据 $\frac{d^{2}\xi^{\alpha}}{d\tau^{2}} = 0$，代入得：

$$
\frac{\partial^{2} \xi^{\alpha}}{\partial x^{\mu} \partial x^{\nu}} \frac{dx^{\mu}}{d\tau} \frac{dx^{\nu}}{d\tau} + \frac{\partial \xi^{\alpha}}{\partial x^{\mu}} \frac{d^{2}x^{\mu}}{d\tau^{2}} = 0
$$

乘以 $\frac{\partial x^{\lambda}}{\partial \xi^{\alpha}}$ 并利用 $\frac{\partial x^{\lambda}}{\partial \xi^{\alpha}} \frac{\partial \xi^{\alpha}}{\partial x^{\mu}} = \delta^{\lambda}_{\mu}$，得到：

$$
\frac{d^{2}x^{\lambda}}{d\tau^{2}} + \Gamma^{\lambda}_{\mu\nu} \frac{dx^{\mu}}{d\tau} \frac{dx^{\nu}}{d\tau} = 0
$$

其中克里斯托夫符号定义为：

$$
\Gamma^{\lambda}_{\mu\nu} = \frac{\partial x^{\lambda}}{\partial \xi^{\alpha}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\mu} \partial x^{\nu}}
$$

所以在 $x^{\mu}$ 坐标下的运动方程即测地线方程为
$$
\frac{d^{2}x^{\lambda}}{d\tau^{2}} + \Gamma^{\lambda}_{\mu\nu} \frac{dx^{\mu}}{d\tau} \frac{dx^{\nu}}{d\tau} = 0
$$

### 4. 协变性，牛顿引力与爱因斯坦引力

本题当中，我们尝试从牛顿引力出发，利用协变性猜测爱因斯坦引力的运动方程，即爱因斯坦方程。

#### 1. 牛顿引力的泊松方程

(1). 请类比电磁理论写出牛顿引力满足的泊松方程。
$$
\nabla \cdot \vec{g} = - 4 \pi G \rho_{m}
$$

$$
\nabla^{2} \phi = 4 \pi G \rho_{m}
$$

其中 $\phi$ 为引力势， $\vec{g}$ 为引力场强度，$\rho_{m}$ 为质量密度。

#### 2. 电磁理论的能量-动量张量

(2). 在第四次作业当中，我们推导了电磁理论的能量-动量张量的表达式:

$$
T^{\mu \nu} = F^{\mu \alpha} F^{\nu}_{\alpha} - \frac{1}{4} \eta^{\mu \nu} F^{\alpha \beta} F_{\alpha \beta}
$$

请计算 $T^{\mu \nu}$ 的 00 分量，并说明其物理意义。
$$
T^{00} = F^{0 \alpha} F_{\alpha}^{0} - \frac{1}{4} F^{\alpha \beta} F_{\alpha \beta} =  E^{2} - \frac{1}{2} (E^{2} - B^{2}) = \frac{1}{2} (E^{2} + B^{2})
$$

物理意义是能量密度

#### 3. 牛顿引力的张量形式泊松方程

(3). 假设牛顿引力中的引力势能也可以写成某个张量的 00 分量： $G_{00} = \nabla g_{00} = - \nabla^{2} (1 + 2 \phi)$。请利用 $G_{00}$ 与 $T_{00}$ 重新写出牛顿引力满足的泊松方程。
$$
T_{00} = - \rho_{m} c^{2}
$$

所以柏松方程可以改写为
$$
G_{00} = - 8 \pi G \rho_{m}
$$
所以
$$
G_{00} = \frac{8 \pi G}{c^{2}} T_{00}
$$

#### 4. Bonus：爱因斯坦方程的猜测

(4). Bonus: 此时我们写出的牛顿引力方程只是某个张量的分量方程，由电磁理论的经验，我们知道这个方程不具有协变性，即在洛伦兹变换或者坐标变换下不能保持方程的形式不变。利用协变性的要求，请从牛顿引力方程出发，猜测爱因斯坦方程的表达式。
$$
G_{\mu \nu} = \frac{8 \pi G}{c^{2}} T_{\mu \nu}
$$
