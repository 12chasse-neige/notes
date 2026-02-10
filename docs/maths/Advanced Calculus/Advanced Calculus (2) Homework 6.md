# 高等微积分 （2） 第6次作业

Chasse_neige

### 1

设 $x, y, z$ 满足方程 $x^3 + y^3 + z^3 + xyz = 4$.

(1) 证明: 在点 $(1, 1, 1)$ 附近, $z$ 可以表示成 $x, y$ 的隐函数.

证明：考虑该点处的偏导矩阵
$$
\frac{\partial F}{\partial z} \Bigg|_{(1, 1, 1)} = 3 z^{2} + xy = 4 \neq 0
$$
所以隐函数存在

(2) 把上述隐函数记作 $z = z(x, y)$, 求 $\left. \dfrac{\partial z}{\partial x} \right|_{(1,1)}, \left. \dfrac{\partial z}{\partial y} \right|_{(1,1)}$
$$
3 x^{2} + 3 z^{2} \frac{\partial z}{\partial x} + yz + xy \frac{\partial z }{\partial x} = 0
$$
带入$(x,y) = (1,1)$，$z = 1$ 
$$
3 + 3 \left. \dfrac{\partial z}{\partial x} \right|_{(1,1)} + 1 + \left. \dfrac{\partial z}{\partial x} \right|_{(1,1)} = 0
$$
所以
$$
\left. \dfrac{\partial z}{\partial x} \right|_{(1,1)} = -1
$$
同理
$$
3 y^{2} + 3 z^{2} \frac{\partial z}{\partial y} + xz + xy \frac{\partial z}{\partial y} = 0
$$
所以
$$
3 + 3 \left. \dfrac{\partial z}{\partial y} \right|_{(1,1)} + 1 + \left. \dfrac{\partial z}{\partial y} \right|_{(1,1)} = 0
$$

$$
\left. \dfrac{\partial z}{\partial y} \right|_{(1,1)} = -1
$$

(3) 求 $z(x, y)$ 在 $(1, 1)$ 附近带皮亚诺余项的泰勒公式, 要求展开至二次项, 即要求余项形如 $o \left( (\Delta x)^2 + (\Delta y)^2 \right)$.

二阶项
$$
\frac{\partial^{2} z}{\partial x^{2}} \Bigg|_{(1, 1)} = - \frac{\partial}{\partial x} \left(\frac{3 x^{2} + yz}{3 z^{2} + xy} \right) = - \frac{(6 x + y \frac{\partial z}{\partial x}) (3 z^{2} + xy) - (3 x^{2} + yz) (6 z \frac{\partial z}{\partial x} + y)}{(3 z^{2} + xy)^{2}} \\ =
- \frac{5 \cdot 4 - 4 \cdot (-5)}{4^{2}} = - \frac{5}{2}
$$

$$
\frac{\partial^{2} z}{\partial y \partial x} = - \frac{\partial}{\partial y} \left(\frac{3 x^{2} + yz}{3 z^{2} + xy} \right)  = - \frac{(z + y \frac{\partial z}{\partial y}) (3 z^{2} + xy) - (3 x^{2} + yz) (6 z \frac{\partial z}{\partial y} + x)}{(3 z^{2} + xy)^{2}} \\ = 
- \frac{0 - 4 \cdot (-5)}{4^{2}} = - \frac{5}{4}
$$

$$
\frac{\partial^{2} z}{\partial y^{2}} \Bigg|_{(1, 1)} = - \frac{\partial}{\partial y} \left(\frac{3 y^{2} + xz}{3 z^{2} + xy} \right) = - \frac{(6 y + x \frac{\partial z}{\partial x}) (3 z^{2} + xy) - (3 y^{2} + xz) (6 z \frac{\partial z}{\partial x} + x)}{(3 z^{2} + xy)^{2}} \\ =
- \frac{5 \cdot 4 - 4 \cdot (-5)}{4^{2}} = - \frac{5}{2}
$$
所以$z(x, y)$ 在 $(1, 1)$ 附近带皮亚诺余项的泰勒公式为
$$
z (x,y) = 1 - (x - 1)- (y - 1) - \frac{5}{4} (x - 1)^{2} - \frac{5}{4} (x - 1)(y - 1) - \frac{5}{4} (y - 1)^{2} + o (\Delta x^{2} + \Delta y^{2})
$$
### 2 

设 $f, g : \mathbb{R}^2 \rightarrow \mathbb{R}$ 的各个 2 阶偏导函数都存在且连续, $g(x_0, y_0) = 0$, $g_y(x_0, y_0) \neq 0$. 设方程 $g(x, y) = 0$ 在 $(x_0, y_0)$ 附近确定 $C^2$ 光滑的隐函数 $y = y(x)$. 定义函数 $h : U \rightarrow \mathbb{R}$ 如下:
$$
h(x) = f(x, y(x)),
$$
其中 $U$ 是 $x_0$ 的某个邻域, $y = y(x)$ 在 $U$ 中有定义.

(1) 求导函数 $h'(x)$.

$$
h’ (x) = f’_{1} + f’_{2} \frac{\partial y}{\partial x}
$$

根据隐函数的性质

$$
\frac{\partial y}{\partial x} = - \frac{g_{x} (x_{0}, y_{0})}{g_{y} (x_{0}, y_{0})}
$$

所以

$$
h’ (x) = f’_{1} - f’_{2} \frac{g_{x} (x_{0}, y_{0})}{g_{y} (x_{0}, y_{0})}
$$
(2) 求 2 阶导函数 $h''(x)$.

$$
h’’ (x) = \frac{\partial}{\partial x} \left(f’_{1} (x, y (x)) + f’_{2} (x, y (x)) \frac{\partial y (x)}{\partial x} \right) \\ =
f’’_{11} + f’’_{21} \frac{\partial y}{\partial x} + f’’_{12} \frac{\partial y}{\partial x} + f’’_{22} (\frac{\partial y}{\partial x})^{2} + f’_{2} \frac{\partial^{2} y}{\partial x^{2}}
$$

带入$\frac{\partial y}{\partial x} = - \frac{g_{x} (x_{0}, y_{0})}{g_{y} (x_{0}, y_{0})}$ 以及 $\frac{\partial^{2} y}{\partial x^{2}} = - \frac{\partial}{\partial x} \frac{g_{x}}{g_{y}} = - \frac{g_{xx} g_{y} - g_{x} g_{xy}}{g_{y}^{2}}$

得到
$$
h'' (x) = f’’_{11} - 2  f’’_{21} \frac{g_{x}}{g_{y}} + f’’_{22} (\frac{g_{x}}{g_{y}})^{2} + f’_{2} \frac{g_{x} g_{xy} - g_{xx} g_{y}}{g_{y}^{2}}
$$

### 3 

设 $L : \mathbb{R}^2 \rightarrow \mathbb{R}$ 是给定的 $C^2$ 光滑函数. 定义映射 $\phi : \mathbb{R}^2 \rightarrow \mathbb{R}^2$ 为:
$$
\phi(x, v) = \left( x, \dfrac{\partial L(x, v)}{\partial v} \right).
$$

(1) 求 $\phi$ 的 Jacobi 矩阵 $J(\phi)_{(x, v)}$
$$
J (\phi)_{(x, \nu)} = \begin{pmatrix} \frac{\partial x}{\partial x} & \frac{\partial x}{\partial \nu} \\ \frac{\partial}{\partial x} \frac{\partial L (x, \nu)}{\partial \nu} & \frac{\partial}{\partial \nu} \frac{\partial L (x, \nu)}{\partial \nu}  \end{pmatrix} \\ =
\begin{pmatrix} 1 & 0 \\ \frac{\partial^{2} L (x, \nu)}{\partial x \partial \nu} & \frac{\partial^{2} L (x, \nu)}{\partial \nu^{2}} \end{pmatrix}
$$
(2) 证明: 如果 $\dfrac{\partial^2 L(x, v)}{\partial v^2} \neq 0$, 则 $\phi$ 在 $(x, v)$ 附近有 $C^1$ 光滑的逆映射. 以下我们假定 $\phi$ 有整体的 $C^1$ 光滑的逆 $\phi^{-1}$, 并把它记作:
$$
\phi^{-1}(q, p) = (x(q, p), v(q, p)),
$$
显然 $x(q, p) = q$

证明

由于$\dfrac{\partial^2 L(x, v)}{\partial v^2} = 0$, 则 
$$
\det J (\phi)_{(x, \nu)} = \frac{\partial^{2} L}{\partial v^{2}} \neq 0
$$
所以 $d f$ 存在逆 $d^{-1} f$

根据反函数定理，映射$\phi$ 存在整体的 $C^1$ 光滑的逆 $\phi^{-1}$

(3) 定义函数 $H(q, p) = p \cdot v(q, p) - L(x(q, p), v(q, p))$, 计算
$$
\dfrac{\partial H}{\partial q}, \dfrac{\partial H}{\partial p}
$$

$$
\frac{\partial H}{\partial q} = \frac{\partial}{\partial q} ( p \cdot v(q, p) - L(x(q, p), v(q, p))) = p \frac{\partial v}{\partial q} - \frac{\partial L}{\partial x} \frac{\partial x}{\partial q} - \frac{\partial L}{\partial v} \frac{\partial v}{\partial q}
$$

带入 $x = q, \quad p = \frac{\partial L}{\partial v}$
$$
\frac{\partial H}{\partial q} = - \frac{\partial L}{\partial x}
$$

$$
\frac{\partial H}{\partial p}  = \frac{\partial }{\partial p} ( p \cdot v(q, p) - L(x(q, p), v(q, p))) = v + p \frac{\partial v}{\partial p} - \frac{\partial L}{\partial x} \frac{\partial x}{\partial p} - \frac{\partial L}{\partial v} \frac{\partial v}{\partial p} = v
$$

(4) 对于 $C^1$ 光滑映射 $\gamma : \mathbb{R} \rightarrow \mathbb{R}^2$, $\gamma(t) = (x(t), v(t))$, 把复合映射 $\phi \circ \gamma : \mathbb{R} \rightarrow \mathbb{R}^2$ 记作:
$$
\phi \circ \gamma(t) = (q(t), p(t)).
$$
证明: $(x(t), v(t)$ 满足 Euler-Lagrange 方程
$$
\begin{cases}
v(t) = \dfrac{dx(t)}{dt} \\
\dfrac{d}{dt} \dfrac{\partial L(x(t), v(t))}{\partial v} = \dfrac{\partial L(x(t), v(t))}{\partial x}
\end{cases}
$$
的充分必要条件是 $q(t), p(t)$ 满足 Hamilton 方程
$$
\begin{cases}
\dfrac{dq(t)}{dt} = \dfrac{\partial H(q(t), p(t))}{\partial p} \\
\dfrac{dp(t)}{dt} = -\dfrac{\partial H(q(t), p(t))}{\partial q}
\end{cases}
$$

证明

充分性：假设满足哈密顿方程
$$
(x (t), \frac{\partial L}{\partial v} (t)) = \phi (x (t), v (t)) = (q (t), p (t))
$$
所以
$$
\frac{d}{d t} p (t) = \frac{d}{d t} \frac{\partial L}{\partial v} = - \dfrac{\partial H}{\partial q} = \frac{\partial L}{\partial x}
$$
即
$$
\dfrac{d}{dt} \dfrac{\partial L(x(t), v(t))}{\partial v} = \dfrac{\partial L(x(t), v(t))}{\partial x}
$$
同理
$$
\frac{d}{d t} q (t) = \frac{d}{d t} x = \frac{\partial H}{\partial p} = v
$$
即
$$
\frac{d}{d t} x (t) = v (t)
$$
必要性：假设满足拉格朗日方程，则由（3）的结论
$$
\frac{\partial H (q (t), p(t))}{\partial q} = - \frac{\partial L}{\partial x} = - \frac{d}{d t} \frac{\partial L}{\partial v} = - \frac{d}{d t} p (t)
$$

$$
\frac{\partial H (q (t), p (t))}{\partial p} = v = \frac{d}{d t} x = \frac{d}{d t} q (t)
$$

### 4 

设 $U, V$ 是 $\mathbb{R}^n$ 的开集. 已知 $f : U \rightarrow V$ 是 $C^1$ 光滑的双射, 且其逆映射 $f^{-1} : V \rightarrow U$ 是连续的.

(1) 证明: 如果在 $x_0 \in U$ 处 $f$ 的雅可比矩阵 $J_f(x_0)$ 是可逆矩阵. 证明: $f^{-1}$ 在 $f(x_0)$ 处可微.

证明

由于$f : U \rightarrow V$ 是 $C^1$ 光滑的双射, 所以其逆映射 $f^{-1} : V \rightarrow U$ 是 $C^{1}$ 的。

所以 $f^{-1}$ 在 $f(x_0)$ 处可微。这样说有点耍赖，我还是把反函数定理里的证明复述一遍吧

作平移以及换元使得$\bar{f} (0) = \bar{f}^{-1} (0) = 0$， $J_{\bar{f}} (0) = J_{\bar{f}^{-1}} (0) = I_{d}$

所以
$$
\bar{f} (u_{0} + h) = \bar{f} (u_{0}) + h + \alpha (h) \qquad \lim_{|h| \to 0} \frac{\alpha (h)}{|h|} = 0
$$

$$
\bar{f}^{-1} (v_{0} + v) = \bar{f}^{-1} (v_{0}) + v + \beta (v) 
$$

证明
$$
\lim_{|v| \to 0} \frac{\beta (v)}{|v|} = \lim_{|v| \to 0} \frac{\bar{f}^{-1} (v_{0} + v) - \bar{f}^{-1} (v_{0}) - v}{|v|} = 0
$$
即可

作换元 $\bar{f} (u_{0}) = v_{0}, \bar{f} (u_{0} + h) = v_{0} + v, \quad h = \bar{f}^{-1} (\bar{f} (u_{0}) + v) - u_{0}$
$$
\lim_{|v| \to 0} \frac{\beta (v)}{|v|} = \lim_{|v| \to 0} \frac{h - v}{|v|} = \lim_{|h| \to 0 } \frac{- \alpha (h)}{|h + \alpha (h)|} = 0
$$
所以 $\bar{f}^{-1}$ 在 $\bar{f}(u_0)$ 处可微，所以 $f^{-1}$ 在 $f(x_0)$ 处可微

(2) 假设对任何 $x \in U$, $f$ 的雅可比矩阵 $J_f(x)$ 都是可逆矩阵. 证明: $f^{-1} : V \rightarrow U$ 是 $C^1$ 光滑映射

证明

已经证明任何 $x \in U$, $f^{-1}$ 在 $f(x_0)$ 处可微，又因为$J_f(x)$ 是可逆矩阵，因为$f : U \rightarrow V$ 是 $C^1$ 光滑的，所以$J_{f}$ 的矩阵元都是连续函数

利用链式法则
$$
J_{f^{-1}} (y) = (J_{f} (f^{-1} (y)))^{-1}
$$
由于$J_f(x)$ 是可逆的所以$J_{f^{-1}} (y)$ 的矩阵元均连续，所以对任何 $x \in U$, $f^{-1}$ 各个分量的偏导均是连续的，所以$f^{-1} : V \rightarrow U$ 是 $C^1$ 光滑映射。