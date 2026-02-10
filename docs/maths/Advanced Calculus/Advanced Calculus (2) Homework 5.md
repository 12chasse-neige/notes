# 高等微积分 （2） 第5次作业

Chasse_neige

### 1 

计算偏导数

(1) 设 $f \in C^1(\mathbb{R}, \mathbb{R})$, $z = xy + xf\left( \dfrac{y}{x} \right)$. 求 $x \dfrac{\partial z}{\partial x} + y \dfrac{\partial z}{\partial y}$
$$
x \dfrac{\partial z}{\partial x} + y \dfrac{\partial z}{\partial y} = x (y + f + x f' (- \frac{y}{x^{2}})) + y(x + x f' \frac{1}{x}) = 2 x y + x f
$$
(2) 设 $f \in C^2(\mathbb{R}^2, \mathbb{R})$, $z = f(x, xy)$. 求 $\dfrac{\partial^2 z}{\partial y^2}$
$$
\dfrac{\partial^2 z}{\partial y^2} = \frac{\partial}{\partial y} f'_{2} x = f''_{22} x^{2}
$$
(3) 设 $f, g \in C^2(\mathbb{R}, \mathbb{R})$, $z = xf\left( \dfrac{y}{x} \right) + yg\left( \dfrac{x}{y} \right)$. 求 $\dfrac{\partial^2 z}{\partial x \partial y}$
$$
\dfrac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial x} (x f' \frac{1}{x} + g + y g' (- \frac{x}{y^{2}})) = \frac{\partial}{\partial x} (f' + g - \frac{x}{y} g') \\ = - \frac{y}{x^{2}} f'' + \frac{1}{y} g' - \frac{1}{y} g' - \frac{x}{y^{2}} g'' = - \frac{y}{x^{2}} f'' - \frac{x}{y^{2}} g''
$$
(4) 设 $f \in C^1(\mathbb{R}, \mathbb{R})$, $z = \dfrac{y}{f(x^2 - y^2)}$. 求 $\dfrac{1}{x} \dfrac{\partial z}{\partial x} + \dfrac{1}{y} \dfrac{\partial z}{\partial y}$
$$
\dfrac{1}{x} \dfrac{\partial z}{\partial x} + \dfrac{1}{y} \dfrac{\partial z}{\partial y} = \frac{1}{x} ( - \frac{y}{f^{2}} f') 2x + \frac{1}{y} (\frac{1}{f} + \frac{y}{f^{2}} f' 2y) = \frac{1}{yf}
$$
(5) 设 $f \in C^1(\mathbb{R}^3, \mathbb{R})$, $u = f(x, xy, xyz)$. 求 $\dfrac{\partial u}{\partial x}, \dfrac{\partial u}{\partial y}, \dfrac{\partial u}{\partial z}$
$$
\frac{\partial u}{\partial x} = f'_{1} + y f'_{2} + yz f'_{3} \\
\frac{\partial u}{\partial y} = x f'_{2} + xz f'_{3} \\
\frac{\partial u}{\partial z} = xy f'_{3}
$$
这里, 我们称函数 $f : \mathbb{R}^n \rightarrow \mathbb{R}$ 是 $C^k$ 光滑的, 记作 $f \in C^k(\mathbb{R}^n, \mathbb{R})$, 如果 $f$ 的各个 $k$ 阶 (偏) 导函数都存在且连续.

### 2 

给定 $C^1$ 光滑的函数 $F : \mathbb{R}^3 \rightarrow \mathbb{R}$. 求函数
$$
F(u^2 - x^2, u^2 - y^2, u^2 - z^2)
$$
对 $x, y, z, u$ 的偏导数
$$
\frac{\partial F}{\partial x} = -2x F'_{1} \\
\frac{\partial F}{\partial y} = -2y F'_{2} \\
\frac{\partial F}{\partial z} = -2z F'_{3} \\
\frac{\partial F}{\partial u} = 2u (F'_{1} + F'_{2} + F'_{3})
$$

### 3 

给定 $n \times n$ 的对称实矩阵 $(A_{ij})_{1 \leq i,j \leq n}$(即对任何 $i, j$, 有 $A_{ij} = A_{ji}$). 定义二次函数
$$
Q(x_1, \ldots, x_n) = \sum_{i=1}^n \sum_{j=1}^n A_{ij} x_i x_j, \quad \forall (x_1, \ldots, x_n) \in \mathbb{R}^n
$$

(1) 求 $Q$ 的微分
$$
d Q = 2  \sum_{i=1}^n \sum_{j=1}^n A_{ij} x_i d x_j, \quad \forall (x_1, \ldots, x_n) \in \mathbb{R}^n
$$
(2) 设 $f : \mathbb{R}^n \rightarrow \mathbb{R}$ 是 $C^1$ 光滑的函数. 定义函数
$$
g(x_1, \ldots, x_n) = f(x_1, \ldots, x_n) e^{- \frac{1}{2} Q(x_1, \ldots, x_n)}.
$$
计算 $g$ 的各个偏导数 $\dfrac{\partial g}{\partial x_1}, \ldots, \dfrac{\partial g}{\partial x_n}$.

$$
\frac{\partial g}{\partial x_{k}} = f'_{k} e^{- \frac{1}{2} Q} - \frac{1}{2}  f  \sum_{i=1}^n \sum_{j=1}^n A_{ij} \delta_{ik} x_{j} + A_{ij} x_{i} \delta_{jk} e^{- \frac{1}{2} Q} =  f'_{k} e^{- \frac{1}{2} Q} - f  \sum_{i=1}^n A_{ik} x_{i} e^{- \frac{1}{2} Q}
$$

### 4 

设 $f : \mathbb{R}^3 \rightarrow \mathbb{R}$ 是 $C^1$ 光滑的函数, 即 $f$ 的各个偏导数都存在且连续.

(1) 对于给定的点 $(x, y, z) \in \mathbb{R}^3$, 考虑关于 $t$ 的一元函数
$$
g(t) = f(tx, ty, tz).
$$
求 $g'(t)$
$$
g' (t) =  x f'_{1} + y f'_{2} + z f'_{3}
$$
(2) 证明: 对任何 $(x, y, z) \in \mathbb{R}^3$, 有
$$
f(x, y, z) = f(0, 0, 0) + x \int_0^1 f_x(tx, ty, tz) \, dt + y \int_0^1 f_y(tx, ty, tz) \, dt + z \int_0^1 f_z(tx, ty, tz) \, dt
$$

在本题 (3), (4) 小问中假设 $f$ 满足: 对任何 $(x, y, z) \in \mathbb{R}^3$ 都有
$$
x f_x(x, y, z) + y f_y(x, y, z) + z f_z(x, y, z) = n f(x, y, z),
$$
其中 $n$ 是某个给定的正整数.

证明：
$$
f (x, y, z) = g (1) = g (0) + \int_{0}^{1} g'(t) dt = g (0) + \int_{0}^{1} (x f'_{1} + y f'_{2} + z f'_{3}) dt \\ 
=  f(0, 0, 0) + x \int_0^1 f_x(tx, ty, tz) \, dt + y \int_0^1 f_y(tx, ty, tz) \, dt + z \int_0^1 f_z(tx, ty, tz) \, dt
$$
(3) 对于给定的点 $(x, y, z) \in \mathbb{R}^3$, 考虑关于 $t$ 的一元函数
$$
h(t) = \dfrac{f(tx, ty, tz)}{t^n}.
$$
求 $h'(t)$
$$
h' (t)  = \frac{x f'_{1} + y f'_{2} + z f'_{3}}{t^{n}} - n \frac{f}{t^{n + 1}}
$$
(4) 证明: 对任何 $(x, y, z) \in \mathbb{R}^3$ 与 $t > 0$, 都有
$$
f(tx, ty, tz) = t^n f(x, y, z)
$$

证明：

由于 $f$ 满足: 对任何 $(x, y, z) \in \mathbb{R}^3$ 都有
$$
x f_x(x, y, z) + y f_y(x, y, z) + z f_z(x, y, z) = n f(x, y, z),
$$
所以 $g' (1) = n g (1)$

对于一般的 $g (t)$ ，作换元 $x' = tx, y' = ty, z' =tz$，所以
$$
t g' (t) = n g (t) 
$$

$$
\frac{d g}{g} = n \frac{dt}{t}
$$

两遍同时积分
$$
\int_{g(1)}^{g(t)} \frac{dg}{g} = n \int_{1}^{t} \frac{dt}{t} \\
g (t) = t^{n} g (1)
$$
所以
$$
f(tx, ty, tz) = t^n f(x, y, z)
$$
