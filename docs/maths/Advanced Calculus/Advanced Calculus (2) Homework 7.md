# 高等微积分（2） 第7次作业

Chasse_neige

### 1  
设 $f(x, y) = (2 + \sin x) \cdot \sin y$，令 $D = \{(x, y)|0 < x, y < 2\pi\}$。

(1) 求出 $f$ 在 $D$ 上的所有临界点。
$$
\frac{\partial}{\partial x} f = \cos x \sin y = 0
$$

$$
x = \frac{\pi}{2}, \frac{3 \pi}{2} 
$$

或
$$
y = \pi
$$

$$
\frac{\partial}{\partial y} f = (2 + \sin x) \cos y = 0
$$

$$
y = \frac{\pi}{2} ,\frac{3 \pi}{2}
$$

所以一共有四个临界点
$$
(x,y) = (\frac{\pi}{2}, \frac{\pi}{2}), (\frac{3 \pi}{2}, \frac{\pi}{2}), (\frac{\pi}{2}, \frac{3 \pi}{2}), (\frac{3 \pi}{2}, \frac{3 \pi}{2})
$$
(2) 判断上述每个临界点是否为 $f$ 的极值点。如果是的话，请指出它是极大值点还是极小值点。
$$
\frac{\partial^{2}}{\partial x^{2}} f = - \sin x \sin y \\
\frac{\partial^{2}}{\partial x \partial y} f = \frac{\partial^{2}}{\partial y \partial x} f = \cos x \cos y \\
\frac{\partial^{2}}{\partial y^{2}} f = - (2 + \sin x) \sin y
$$
对于 $(x, y) = (\frac{\pi}{2}, \frac{\pi}{2})$
$$
\frac{\partial^{2}}{\partial x^{2}} f = -1 < 0 \\
\frac{\partial^{2}}{\partial x \partial y} f = 0 \\
\frac{\partial^{2}}{\partial y^{2}} f = -3 < 0
$$
该点的 $H_{f}$ 负定，所以该点为极小值点

对于 $(x, y) = (\frac{3 \pi}{2}, \frac{\pi}{2})$
$$
\frac{\partial^{2}}{\partial x^{2}} f = 1 > 0 \\
\frac{\partial^{2}}{\partial x \partial y} f = 0 \\
\frac{\partial^{2}}{\partial y^{2}} f = -1 < 0
$$
该点的 $H_{f}$ 不定，所以该点并非极值点

对于 $(x, y) = (\frac{\pi}{2}, \frac{3 \pi}{2})$
$$
\frac{\partial^{2}}{\partial x^{2}} f = 1 > 0 \\
\frac{\partial^{2}}{\partial x \partial y} f = 0 \\
\frac{\partial^{2}}{\partial y^{2}} f = 3 > 0
$$
该点的 $H_{f}$ 正定，所以该点为极大值点

对于 $(x, y) = (\frac{3 \pi}{2}, \frac{3 \pi}{2})$
$$
\frac{\partial^{2}}{\partial x^{2}} f = -1 < 0 \\
\frac{\partial^{2}}{\partial x \partial y} f = 0 \\
\frac{\partial^{2}}{\partial y^{2}} f = 1 > 0
$$
该点的 $H_{f}$ 不定，所以该点并非极值点

### 2  
设 $f(x, y, z) = x + y + z + xyz$，令 $B = \{(x, y, z)|x^2 + y^2 + z^2 \leq 1\}$。

(1) 证明：$f$ 在 $B$ 上有最大值。

证明

显然 $B$ 有界，并且 $f$ 为 $B$ 上的连续函数

再证明 $B^{\complement}$ 为开集
$$
\forall \vec{x} \in B^{\complement}, \exist \delta = \frac{|\vec{x}| - 1}{2}, s.t. B_{\delta} (\vec{x}) \subseteq B^{\complement}
$$
所以 $B^{\complement}$ 为开集，即 $B$ 为闭集，所以 $B$ 是紧致的。

又因为 $f$ 为 $B$ 上的连续函数，所以$f$ 在 $B$ 上有最大值。

(2) 利用拉格朗日（Lagrange）乘子法求出 $f$ 在 $B$ 上的最大值。

证明 $f$ 在 $B$ 上的最大值在 $\partial B$ 上

在 $\overset{\circ}{B}$ 上，$f$ 的临界点满足
$$
1 + yz = 0 \\
1 + xz = 0 \\
1 + xy = 0 \\
$$
所以 $xy = xz = yz = -1$ ，即 $(xyz)^{2} = -1$，在实数范围内无解，所以 $f$ 在 $\overset{\circ}{B}$ 上没有极值点，所以最大值在 $\partial B$ 上

利用拉格朗日乘子法
$$
L = x + y + z + xyz - \lambda (x^{2} + y^{2} + z^{2} - 1)
$$
所以极值点满足
$$
1 + yz - 2 \lambda x = 0 \\
1 + xz - 2 \lambda y = 0 \\
1 + xy - 2 \lambda z = 0 \\
x^{2} + y^{2} + z^{2} = 1
$$
所以
$$
3 + xy + xz + yz = 2 \lambda (x + y + z) \\
\frac{5}{2} + \frac{1}{2} (x + y + z)^{2} - 2 \lambda (x + y + z) = 0 \\
(x + y + z)^{2} - 4 \lambda (x + y + z) + 5 = 0 
$$
解得
$$
x + y + z =  2 \lambda \pm \sqrt{4 \lambda^{2} - 5}
$$
由上方程组的对称性，解应当满足 $x = y = z$，所以极值点有
$$
(x, y, z) = (\frac{\sqrt{3}}{3}, \frac{\sqrt{3}}{3}, \frac{\sqrt{3}}{3}) \text{or} (-\frac{\sqrt{3}}{3}, -\frac{\sqrt{3}}{3}, -\frac{\sqrt{3}}{3})
$$
带入原函数
$$
f (\frac{\sqrt{3}}{3}, \frac{\sqrt{3}}{3}, \frac{\sqrt{3}}{3}) = \sqrt{3} + \frac{\sqrt{3}}{9} = \frac{10}{9} \sqrt{3} \\
f (-\frac{\sqrt{3}}{3}, -\frac{\sqrt{3}}{3}, -\frac{\sqrt{3}}{3}) = - \frac{10}{9} \sqrt{3} < \frac{10}{9} \sqrt{3}
$$
所以 $f$ 在 $B$ 上的最大值为 $\frac{10}{9} \sqrt{3}$ 

###  3  
设 $x, y, z$ 满足两个约束条件 $x + y + z = 1, x^2 + y^2 + z^2 = 1$。求函数 $f(x, y, z) = xyz$ 的最小值。
$$
L = xyz - \lambda_{1} (x + y + z - 1) - \lambda_{2} (x^{2} + y^{2} + z^{2} - 1)
$$
所以极值点满足
$$
yz - \lambda_{1} - 2 \lambda_{2} x = 0 \\
xz - \lambda_{1} - 2 \lambda_{2} y = 0 \\
xy - \lambda_{1} - 2 \lambda_{2} z = 0 \\
x + y + z = 1 \\
x^{2} + y^{2} + z^{2} = 1
$$
所以
$$
xy + xz + yz = 3 \lambda_{1} + 2 \lambda_{2}  \\
(x + y + z)^{2} = 1 + 6 \lambda_{1} + 4 \lambda_{2} = 1
$$
所以
$$
3 \lambda_{1} + 2 \lambda_{2} = 0
$$
然后进行暴力计算
$$
(xyz)^{2} = (\lambda_{1} + 2 \lambda_{2} x) (\lambda_{1} + 2 \lambda_{2} y) (\lambda_{1} + 2 \lambda_{2} z) \\ =
\lambda_{1}^{3} + 8 \lambda_{2}^{3} xyz + 2 \lambda_{1}^{2} \lambda_{2} (x + y + z) + 4 \lambda_{1} \lambda_{2}^{2} (xy + xz + yz) \\ =
\lambda_{1}^{3} + 8 \lambda_{2}^{3} xyz + 2 \lambda_{1}^{2} \lambda_{2} = \lambda_{1}^{3} (1 - 27 xyz - 3)
$$

$$
xyz (x + y + z) = (\lambda_{1} + 2 \lambda_{2} x) (\lambda_{1} + 2 \lambda_{2} y) + (\lambda_{1} + 2 \lambda_{2} x) (\lambda_{1} + 2 \lambda_{2} z) + (\lambda_{1} + 2 \lambda_{2} y) (\lambda_{1} + 2 \lambda_{2} z) \\
xyz = 3 \lambda_{1}^{2} + 4 \lambda_{1} \lambda_{2} = -3 \lambda_{1}^{2}
$$

所以
$$
9 \lambda_{1}^{4} + \lambda_{1}^{3} (2 - 81 \lambda_{1}^{2}) = 0 \\ 
\lambda_{1} = \frac{1 \pm 3}{18}
$$
所以函数 $f(x, y, z) = xyz$ 的最小值为
$$
xyz = -3 (\frac{1 + 3}{18})^{2} = - \frac{4}{27}
$$

### 4  
给定整数 $n \geq 2$，定义 $(n - 1)$ 维球面为 
$$
S = \{(x_1, ..., x_n) \in \mathbb{R}^n | \sum_{i=1}^{n} x_i^2 = 1\}
$$
设 $f : \mathbb{R}^n \to \mathbb{R}$ 是 $C^1$ 光滑映射，$(\overline{x}_1, ..., \overline{x}_n) \in S$ 是 $f$ 在 $S$ 上的最大值点，即对任何 $(x_1, ..., x_n) \in S$，有 
$$
f(x_1, ..., x_n) \leq f(\overline{x}_1, ..., \overline{x}_n)
$$
证明：$f$ 在 $(\overline{x}_1, ..., \overline{x}_n)$ 处的梯度方向平行于向量 $(\overline{x}_1, ..., \overline{x}_n)$，即存在实数 $\lambda$，使得 
$$
\left( \frac{\partial f}{\partial x_1}, ..., \frac{\partial f}{\partial x_n} \right) |_{(\overline{x}_1, ..., \overline{x}_n)} = \lambda (\overline{x}_1, ..., \overline{x}_n)
$$
证明$S$ 是紧致的，显然 $S$ 有界，再说明 $S$ 为闭集，即 $S^{\complement}$是开集，即证明 $S^{\complement}$中的每一个点均为其内点即可。
$$
S^{\complement} = \{(x_1, ..., x_n) \in \mathbb{R}^n | \sum_{i=1}^{n} x_i^2 \neq 1\}
$$
对于 $\sum_{ i = 1}^{n} x_{i}^{2} < 1$ 的点 $x_{0}$，取 $r_{0} = \frac{1 - d(0, x_{0})}{2}$ ，则 
$$
\forall a \in B_{r_{0}} (x_{0}), d(0, a) \leq d(0, x_{0}) + r_{0} = 1 - r_{0} < 1
$$
所以 $x_{0}$ 为 $S^{\complement}$ 内点

对于 $\sum_{ i = 1}^{n} x_{i}^{2} > 1$ 的点 $x_{0}$，取 $r_{0} = - \frac{1 - d(0, x_{0})}{2}$ ，则 
$$
\forall a \in B_{r_{0}} (x_{0}), d(0, a) \geq d(0, x_{0}) - r_{0} = 1 - r_{0} > 1
$$
所以 $x_{0}$ 为 $S^{\complement}$ 内点

所以 $S$ 紧致，显然 $g$ 对于坐标的偏导不全为0，所以对于题给条件，拉格朗日定理成立，即极值点$(\overline{x}_1, ..., \overline{x}_n) \in S$ 满足
$$
L (x_{1}, x_{2}, \cdots, x_{n}, \lambda) = f (x_{1}, x_{2}, \cdots, x_{n}) - \lambda (\sum_{i = 1}^{n} x_{i}^{2} - 1) \\ 
\nabla L = \vec{0}
$$
所以
$$
\nabla f = 2 \lambda (\overline{x}_1, ..., \overline{x}_n)^{T}
$$
即
$$
\left( \frac{\partial f}{\partial x_1}, ..., \frac{\partial f}{\partial x_n} \right) |_{(\overline{x}_1, ..., \overline{x}_n)} = \lambda (\overline{x}_1, ..., \overline{x}_n)
$$

### 5  

设 $n$ 元函数 $f(x_1, ..., x_n), g(x_1, ..., x_n)$ 与一元函数 $x_1(t), ..., x_n(t)$ 都是 $C^2$ 光滑的定义函数 
$$
h(t) = f(x_1(t), ..., x_n(t))
$$
(1) 求 $h''(t)$，请用 $f(x_1, ..., x_n)$ 与 $x_1(t), ..., x_n(t)$ 的高阶（偏）导函数表示。  
$$
h' (t) = \sum_{i = 1}^{n}  x'_{i} (t) \frac{\partial}{\partial x_{i}} f
$$

$$
h'' (t) = \sum_{i = 1}^{n}  x''_{i} (t) \frac{\partial}{\partial x_{i}} f +  \sum_{i = 1}^{n}  \sum_{j = 1}^{n} x'_{i} (t) x'_{j} (t) \frac{\partial^{2}}{\partial x_{j} \partial x_{i}} f
$$

(2) 令 $p = (x_1(0), ..., x_n(0))$。假设 $p$ 是函数 $f(x_1, ..., x_n)$ 在约束条件 $g(x_1, ..., x_n) = 0$ 下的条件极值点。请叙述此情形下的拉格朗日乘子法。  
$$
L = f(x_1, ..., x_n) - \lambda g(x_1, ..., x_n)
$$
条件极值点满足
$$
\left. \nabla f \right|_{x_{i} = x_{i} (0), 1 \leq i \leq n } = \lambda \left. \nabla g \right|_{x_{i} = x_{i} (0), 1 \leq i \leq n } \\ 
g (x_{1} (0), \cdots, x_{n} (0)) = 0
$$
(3) 设 $\lambda \in \mathbb{R}$ 满足 (2) 中所述拉格朗日乘子法的结论，定义 $n$ 元函数 $F$ 为 
$$
F(x_1, ..., x_n) = f(x_1, ..., x_n) - \lambda g(x_1, ..., x_n)
$$
证明：如果对任何 $t$，都有 $g(x_1(t), ..., x_n(t)) = 0$，则 
$$
h''(0) =  \left. \sum_{i=1}^n \sum_{j=1}^n \frac{\partial^2 F}{\partial x_i \partial x_j} \right|_\mathbf{p}  x_i'(0)  x_j'(0)
$$
证明：已知
$$
h'' (0) = \left. \sum_{i = 1}^{n}  x''_{i} (0) \frac{\partial}{\partial x_{i}} f \right|_{\mathbf{p}} + \left. \sum_{i = 1}^{n}  \sum_{j = 1}^{n} x'_{i} (0) x'_{j} (0) \frac{\partial^{2}}{\partial x_{j} \partial x_{i}} f \right|_{\mathbf{p}}
$$
由于
$$
\left. \frac{\partial^2 F}{\partial x_i \partial x_j} \right|_\mathbf{p} = \left. \frac{\partial^2 f}{\partial x_i \partial x_j} \right|_\mathbf{p}  - \lambda \left. \frac{\partial^2 g}{\partial x_i \partial x_j} \right|_\mathbf{p}
$$
所以
$$
h'' (0) = \left. \sum_{i = 1}^{n}  x''_{i} (0) \frac{\partial}{\partial x_{i}} f \right|_{\mathbf{p}} - \lambda  \left. \sum_{i = 1}^{n}  \sum_{j = 1}^{n} x'_{i} (0) x'_{j} (0) \frac{\partial^{2}}{\partial x_{j} \partial x_{i}} g \right|_{\mathbf{p}} + \left. \sum_{i = 1}^{n}  \sum_{j = 1}^{n} x'_{i} (0) x'_{j} (0) \frac{\partial^{2}}{\partial x_{j} \partial x_{i}} F \right|_{\mathbf{p}}
$$
因为 $n$ 元函数 $f(x_1, ..., x_n), g(x_1, ..., x_n)$ 与一元函数 $x_1(t), ..., x_n(t)$ 都是 $C^2$ 光滑的定义函数 ，所以导数顺序可以交换

因为对任何 $t$，都有 $g(x_1(t), ..., x_n(t)) = 0$，所以
$$
g'' (t) = 0
$$
所以
$$
g'' (t) = \sum_{i = 1}^{n}  x''_{i} (t) \frac{\partial}{\partial x_{i}} g +  \sum_{i = 1}^{n}  \sum_{j = 1}^{n} x'_{i} (t) x'_{j} (t) \frac{\partial^{2}}{\partial x_{j} \partial x_{i}} g = 0
$$
所以
$$
\lambda  \left. \sum_{i = 1}^{n}  \sum_{j = 1}^{n} x'_{i} (0) x'_{j} (0) \frac{\partial^{2}}{\partial x_{j} \partial x_{i}} g \right|_{\mathbf{p}} = - \lambda \left. \sum_{i = 1}^{n}  x''_{i} (t) \frac{\partial}{\partial x_{i}} g \right|_{\mathbf{p}}
$$
因为
$$
\left. \nabla f \right|_{x_{i} = x_{i} (0), 1 \leq i \leq n } = \lambda \left. \nabla g \right|_{x_{i} = x_{i} (0), 1 \leq i \leq n }
$$
所以
$$
- \lambda \left. \sum_{i = 1}^{n}  x''_{i} (t) \frac{\partial}{\partial x_{i}} g \right|_{\mathbf{p}} = - \left. \sum_{i = 1}^{n}  x''_{i} (t) \frac{\partial}{\partial x_{i}} f \right|_{\mathbf{p}}
$$
所以
$$
h'' (0) = \left. \sum_{i = 1}^{n}  x''_{i} (0) \frac{\partial}{\partial x_{i}} f \right|_{\mathbf{p}} - \lambda  \left. \sum_{i = 1}^{n}  \sum_{j = 1}^{n} x'_{i} (0) x'_{j} (0) \frac{\partial^{2}}{\partial x_{j} \partial x_{i}} g \right|_{\mathbf{p}} + \left. \sum_{i = 1}^{n}  \sum_{j = 1}^{n} x'_{i} (0) x'_{j} (0) \frac{\partial^{2}}{\partial x_{j} \partial x_{i}} F \right|_{\mathbf{p}} \\ =
\left. \sum_{i=1}^n \sum_{j=1}^n \frac{\partial^2 F}{\partial x_i \partial x_j} \right|_\mathbf{p}  x_i'(0)  x_j'(0)
$$

### 6  

设 $f, g \in C^1(\mathbb{R}^2, \mathbb{R})$，令 $D = \{(x, y)|g(x, y) \geq 0\}$。设 $g(x_0, y_0) = 0$ 且 $g_x(x_0, y_0), g_y(x_0, y_0)$ 不全为零，且对任何 $(x, y) \in D$ 有 $f(x_0, y_0) \leq f(x, y)$。

证明：存在非负实数 $\lambda$，使得 
$$
\begin{cases}  
f_x(x_0, y_0) - \lambda g_x(x_0, y_0) = 0, \\  
f_y(x_0, y_0) - \lambda g_y(x_0, y_0) = 0.  
\end{cases}
$$
证明
由于 $g(x_0, y_0) = 0$ 且 $\nabla g(x_0, y_0) \neq 0$ ，根据隐函数定理，存在邻域  $U$  和唯一 $C^1$  函数  $y = \varphi(x)$，使得 $g(x, \varphi(x)) = 0$ 对所有 $x \in U$ 成立。 
$$
h'(x_0) = f_x(x_0, y_0) + f_y(x_0, y_0) \varphi'(x_0) = 0
$$

根据隐函数定理，$\varphi'(x_0) = -\frac{g_x(x_0, y_0)}{g_y(x_0, y_0)}$
$$
f_x - f_y \cdot \frac{g_x}{g_y} = 0
$$

令  $\lambda = \frac{f_{y} (x_{0}, y_{0})}{g_{y} (x_{0}, y_{0})}$，则
$$
\begin{cases}  
f_x(x_0, y_0) - \lambda g_x(x_0, y_0) = 0, \\  
f_y(x_0, y_0) - \lambda g_y(x_0, y_0) = 0.  
\end{cases}
$$
由于 $(x_0, y_0)$$是$$f$ 在 $D$ 上的极小值点，沿梯度 $\nabla g$ 方向
$$
\nabla f \cdot \frac{\nabla g}{\|\nabla g\|} \geq 0.
$$
结合 $\nabla f = \lambda \nabla g$
$$
\lambda \|\nabla g\|^2 \geq 0 \quad \implies \quad \lambda \geq 0.
$$

