#  费曼物理学（2） 第1次作业 

Chasse_neige

以下所有运算均采取爱因斯坦求和约定

#### 1.  高维空间的矢量分析

(1). 一般而言，叉乘只能定义在特殊的维度，做为其推广，外积可以定义在任意维度。假设 $\vec{e}_1 = (1, 0, 0)^T$、$\vec{e}_2 = (0, 1, 0)^T$ 和 $\vec{e}_3 = (0, 0, 1)^T$ 为 $\mathbb{R}^3$ 上的标准基底，则 $\forall \vec{u} = u_1\vec{e}_1 + u_2\vec{e}_2 + u_3\vec{e}_3$，$\vec{v} = v_1\vec{e}_1 + v_2\vec{e}_2 + v_3\vec{e}_3 \in \mathbb{R}^3$，其外积定义为：
$$
\vec{u} \wedge \vec{v} = (u_1v_2 - u_2v_1) (\vec{e}_1 \wedge \vec{e}_2) + (u_2v_3 - u_3v_2) (\vec{e}_2 \wedge \vec{e}_3) + (u_3v_1 - u_1v_3) (\vec{e}_3 \wedge \vec{e}_1) \quad (1.1)
$$
对于 $\vec{w} = w_1\vec{e}_1 + w_2\vec{e}_2 + w_3\vec{e}_3$，试计算：
$$
\vec{u} \wedge \vec{v} \wedge \vec{w} \\ = ((u_{1} v_{2} - u_{2} v_{1}) (\vec{e_{1}} \wedge \vec{e_{2}}) + (u_{2} v_{3} - u_{3} v_{2}) (\vec{e_{2}} \wedge \vec{e_{3}}) + (u_{3} v_{1} - u_{1} v_{3}) (\vec{e_{3}} \wedge \vec{e_{1}})) \wedge (w_{1} \vec{e_{1}} + w_{2} \vec{e_{2}} + w_{3} \vec{e_{3}}) \\
= (u_{1} v_{2} - u_{2} v_{1}) w_{3} (\vec{e_{1}} \wedge \vec{e_{2}} \wedge \vec{e_{3}}) + (u_{2} v_{3} - u_{3} v_{2}) w_{1} (\vec{e_{2}} \wedge \vec{e_{3}} \wedge \vec{e_{1}}) + (u_{3} v_{1} - u_{1} v_{3}) w_{2} (\vec{e_{3}} \wedge \vec{e_{1}} \wedge \vec{e_{2}}) \\
= (\epsilon_{ijk} u_{i} v_{j} w_{k}) (\vec{e_{1}} \wedge \vec{e_{2}} \wedge \vec{e_{3}})
$$

(2). 从外积的运算法则中我们发现外积具有和叉乘类似的结构。事实上，两者可以通过 Hodge 对偶联系起来。假设 $u = \frac{1}{p!}u_{\mu_1\cdots\mu_p}e_{\mu_1} \wedge \cdots \wedge e_{\mu_p}$ 是 $\mathbb{R}^n$ 中的 $p$-形式，则 Hodge 对偶将 $u$ 映射为 $(n - p)$-形式：
$$
\star u = \star \left( \frac{1}{p!}u_{\mu_1\cdots\mu_p}e_{\mu_1} \wedge \cdots \wedge e_{\mu_p} \right) = \frac{1}{p!(n - p)!}\epsilon_{\nu_1\cdots\nu_p,\mu_1\cdots\mu_{n-p}}u_{\nu_1\cdots\nu_p}e_{\mu_1} \wedge \cdots \wedge e_{\mu_{n-p}}
$$
其中 $\epsilon_{\nu_1\cdots\nu_p,\mu_1\cdots\mu_{n-p}}$ 为 Levi-Civita 符号。写成分量形式为：
$$
(\star u)_{\mu_1\cdots\mu_{n-p}} = \frac{1}{p!}\epsilon_{\nu_1\cdots\nu_p,\mu_1\cdots\mu_{n-p}}u_{\nu_1\cdots\nu_p}
$$
特别的，对于 $\mathbb{R}^3$ 中的矢量 $\vec{u} = (u_1, u_2, u_3)$ 有：
$$
\star \vec{u} = u_1\vec{e}_2 \wedge \vec{e}_3 + u_2\vec{e}_3 \wedge \vec{e}_1 + u_3\vec{e}_1 \wedge \vec{e}_2 
$$
试证明：
$$
\vec{u} \wedge \vec{v} = \star (\vec{u} \times \vec{v}) \\
\vec{u} \times \vec{v} = \star (\vec{u} \wedge \vec{v}) 
$$

证明：$\vec{u} \times \vec{v} = \epsilon_{ijk} u_{i} v_{j} \vec{e_{k}}$ ，是一个1-form。将它作霍奇对偶：

注：由于原题中的 Hodge Star 貌似是对一组排列的指标定义的（我不是很理解这么写的原因，我认为不在 p-form 前面加 $\frac{1}{p!}$ 是不利于指标运算的），为了后续利用指标计算方便，我们将其该写为对所有排列指标作用的形式，并通过因子 $\frac{1}{(n-p)!}$ 消去简并的重复系数：
$$
\star (\frac{1}{p!} u_{\mu_{1} \cdots \mu_{p}} e_{\mu_{1}} \wedge \cdots \wedge e_{\mu_{p}}) = \frac{1}{(p)! (n-p)!} \epsilon_{\nu_{1} \cdots \nu_{p}, \mu_{1} \cdots \mu_{n-p}} u_{\nu_{1} \cdots \nu_{p}} e_{\mu_{1}} \wedge \cdots \wedge e_{\mu_{n-p}}
$$
此时$\mu_{1}, \cdots ,\mu_{n-p}$ 可以取遍所有$(n-p)!$个值。
$$
\star (\vec{u} \times \vec{v}) = \frac{1}{2!} \epsilon_{klm} \epsilon_{ijk} u_{i} v_{j} (\vec{e_{l}} \wedge \vec{e_{m}}) \\
= \frac{1}{2} \begin{vmatrix} \delta_{li} & \delta_{lj} \\ \delta_{mi} & \delta_{mj} \end{vmatrix} u_{i} v_{j} (\vec{e_{l}} \wedge \vec{e_{m}}) \\
= \frac{1}{2} (u_{i} v_{j} (\vec{e_{i}} \wedge \vec{e_{j}}) - u_{i} v_{j} (\vec{e_{j}} \wedge \vec{e_{i}})) \\
= u_{i} v_{j} (\vec{e_{i}} \wedge \vec{e_{j}}) \\
= \vec{u} \wedge \vec{v}
$$
同理：
$$
\star (\vec{u} \wedge \vec{v}) = 
\frac{1}{2!} \epsilon_{ijk} (u_{i} v_{j} - u_{j} v_{i}) \vec{e_{k}} = 
\epsilon_{ijk} u_{i} v_{j} \vec{e_{k}} = \vec{u} \times \vec{v}
$$
(3). 利用外导数与外积和 Hodge 对偶，我们可以将 Maxwell 方程组写成一个紧凑的形式。我们首先定义外导数，假设 $A = \frac{1}{p!}A_{\mu_1\cdots\mu_p}e_{\mu_1} \wedge \cdots \wedge e_{\mu_p}$ 是 $p$-形式，则外导数定义为：
$$
(dA)_{\mu_1\cdots\mu_{p+1}} = (p + 1) \partial_{[\mu_1}A_{\mu_2\cdots\mu_{p+1}]}
$$
其中 $[\cdots]$ 表示对所有置换指标的可能求和并除以 $(p + 1)!$，且置换次数为奇数时为负，偶数时为正。如 $A$ 是标量时：$(dA)_\mu = \partial_\mu A$。试证明：当 $A$ 为 4-矢量电磁势时，满足：
$$
F_{\mu\nu} = (dA)_{\mu\nu} = (\partial_\mu A_\nu - \partial_\nu A_\mu)
$$

进一步的请证明 Maxwell 方程满足：
$$
dF = 0 \\
d (\star F) = \star J 
$$
其中 $J$ 为四矢量形式的电流密度。（注：本题当中我们在 Euclidean 时空下，即不考虑时间和空间分量的不同，此时麦克斯韦方程组的四维协变形式为 $\partial_\mu F^{\mu\nu} = -J^\nu$。值得一提的是，如果不存在外源 $J$，我们可以发现方程在 $F \rightarrow \star F$ 变换下是不变的，此即著名的 S-对偶。）

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
d (\star \mathbf{F})_{mkl} = 
\frac{1}{2} \epsilon_{mkl} \epsilon_{ijkl} \partial_{m} \partial_{i} A_{j}  \\ = 
\frac{1}{2} \times \frac{1}{6}\epsilon_{ikl} \epsilon_{ikl} \epsilon_{mkl} \epsilon_{ijkl} \partial_{m} \partial_{i} A_{j} \\ =
\frac{1}{6} \delta_{im} \epsilon_{ikl} \epsilon_{ijkl} \partial_{m} \partial_{i} A_{j} \\ = 
\frac{1}{6} \epsilon_{mkl} \epsilon_{mjkl} \partial_{m}^{2} A_{j} \\ = 
-\frac{1}{6} \epsilon_{mkl} \epsilon_{mjkl} J_{j} \\ = 
\frac{1}{6} \epsilon_{mkl} \epsilon_{jmkl} J_{j}\\ = 
(\star \mathbf{J})_{mkl}
$$

(4). 给定一个标量场 $f$，和 1-形式场（矢量场）$A$，试证明：
$$
(\nabla f)_\mu = (df)_\mu, \quad (\nabla \times A)_\mu = \star (dA)_\mu, \quad \nabla \cdot A = \star (d \star A) 
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

(6). 我们定义一个 $n$-形式场 $\omega$ 在一个 $n$ 维流形 $M$ 上的积分为 $\int_M \omega = \int_M \omega_{1\cdots n}(x_1, \cdots, x_n) dx_1 \cdots dx_n$（1.11）。在高维空间中，Stokes 定理和 Gauss 定理可以统一表述为：$\int_M d\omega = \int_{\partial M} \omega$，其中 $\omega$ 是一个 $(p - 1)$-形式，$d\omega$ 是 $\omega$ 的外微分，表示场的散度或旋度，$M$ 是一个 $p$-维流形，$\partial M$ 是边界。试说明一般的 Stokes 定理在二维时如何回到我们熟悉的表述：$\oint_{\partial S} \omega_\mu \cdot dx^\mu = \int_S (\partial_1 \omega_2 - \partial_2 \omega_1) dx^1 dx^2$。

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
