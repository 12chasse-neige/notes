# 高等微积分（2） 第4次作业

Chasse_neige

1. 设 $f : \mathbb{R}^2 \to \mathbb{R}$ 是连续函数, 当 $x^2 + y^2 \to +\infty$ 时, $f(x, y) \to +\infty$. 证明: $f$ 在 $\mathbb{R}^2$ 上有最小值, 即存在 $(x_0, y_0) \in \mathbb{R}^2$, 使得
$$
f(x, y) \geq f(x_0, y_0), \quad \forall (x, y) \in \mathbb{R}^2.
$$

证明：

因为当 $x^2 + y^2 \to +\infty$ 时, $f(x, y) \to +\infty$，所以$\forall A > 0, \exist N \in \mathbb{N}_{+}, s.t. \forall x^{2} + y^{2} > N, f(x, y) > A$

对于  $A = f(\vec{0})$，记相应的 $N$为 $N_{0}$ 。

根据最值定理，由于集合 $X = \{(x,y) \mid x^{2} + y^{2} \leq N \}$  为 $\mathbb{R}^{2}$ 上的有界闭集，所以在 $X$ 上 $f$ 存在最小值 $f_{min} \leq f (\vec{0})$

所以 $\forall x^{2} + y^{2} > N_{0}, f(x, y) > f (\vec{0}) \neq f_{min}$

所以$f$ 在 $\mathbb{R}^2$ 上有最小值 $f_{min}$。

2. 令 $S$ 为平面上的单位圆周

$$
S = \{(x, y) \mid x^2 + y^2 = 1\}.
$$
(1) 证明: $S$ 是 $\mathbb{R}^2$ 的闭集.

证明：证明 $S^{\complement}$是开集，即证明 $S^{\complement}$中的每一个点均为其内点即可。
$$
S^{\complement} = \{(x, y) \mid x^{2} + y^{2} \neq 1 \}
$$
对于 $x^{2} + y^{2} < 1$ 的点 $(x_{0}, y_{0})$，取 $r_{0} = \frac{1 - d(0, (x_{0}, y_{0}))}{2}$ ，则 $\forall a \in B_{r_{0}} (x_{0}, y_{0}), d(0, a) \leq d(0, (x_{0}, y_{0})) + r_{0} = 1 - r_{0} < 1$，所以 $(x_{0}, y_{0})$ 为 $S^{\complement}$ 内点

对于 $x^{2} + y^{2} > 1$ 的点 $(x_{0}, y_{0})$，取 $r_{0} = -\frac{1 - d(0, (x_{0}, y_{0}))}{2}$ ，则 $\forall a \in B_{r_{0}} (x_{0}, y_{0}), d(0, a) \geq d(0, (x_{0}, y_{0})) - r_{0} = 1 + r_{0} > 1$，所以 $(x_{0}, y_{0})$ 为 $S^{\complement}$ 内点

综上，$S^{\complement}$是开集，所以$S$ 是 $\mathbb{R}^2$ 的闭集

(2) 设 $f : \mathbb{R}^2 \to \mathbb{R}$ 是连续函数. 证明: $f$ 在 $S$ 上能取到最大值与最小值, 即存在 $(x_0, y_0), (x_1, y_1) \in S$, 使得
$$
f(x_0, y_0) \leq f(x, y) \leq f(x_1, y_1), \quad \forall (x, y) \in S
$$

利用反证法，记 $\sup f(x,y) = M, \inf f(x,y) = m \quad \forall  (x,y) \in S$，假设 $M,m \notin U, U = \{ f(x,y) \mid (x,y) \in S \}$：

由于$S$ 是 $\mathbb{R}^2$ 的闭集且有界，所以 $S$ 紧致，又因为 $f$ 为连续函数，所以  $U=\{f(x,y) \mid (x,y) \in S\}$是紧致的。所以 $M,m \notin U$代表$M,m \in U^{\complement}$，又因为 $U^{\complement}$ 为开集，所以 $M,m$为 $U^{\complement}$ 内点，所以 $\exist r_{M}, r_{m} > 0, s.t. B_{r_{m}}(m) \in U^{\complement},B_{r_{M}} (M) \in U^{\complement}$
$$
\therefore \,\, \sup f (x,y) \leq M - r_{M} \quad \inf f(x,y) \geq m + r_{m}
$$

与 $\sup f(x,y) = M, \inf f(x,y) = m \quad \forall  (x,y) \in S$ 矛盾。

所以$f$ 在 $S$ 上能取到最大值与最小值。


3. 对于二元函数 $f : \mathbb{R}^2 \to \mathbb{R}$, 判断如下断言是否正确, 并说明理由.

(1) 如果 $f$ 在 $(x_0, y_0)$ 处可微, 则 $f$ 在 $(x_0, y_0)$ 处连续.
    
正确。理由：$f$ 在 $(x_0, y_0)$ 处可微，所以存在线性映射 $\mathcal{L}$ 使得
    
$$
f (x_{0} + h_{1}, y_{0} + h_{2}) = f (x_{0}, y_{0}) + \mathcal{L} (\mathbf{h}) + \alpha (\mathbf{h})
$$
所以 在 $(x_0, y_0)$ 处 
$$
\lim_{\mathbf{h} \to 0} f(\mathbf{x} + \mathbf{h}) = \lim_{\mathbf{h} \to 0} f (x_{0}, y_{0}) + \mathcal{L} (\mathbf{h}) + \alpha (\mathbf{h}) = f(x_{0}, y_{0})
$$
所以 $f$ 在 $(x_0, y_0)$ 处连续。
    
(2) 如果 $f$ 在 $(x_0, y_0)$ 处可微, 则 $f$ 在 $(x_0, y_0)$ 处有各个方向的方向导数.
    
正确。理由：$f$ 在 $(x_0, y_0)$ 处可微，所以存在线性映射 $\mathcal{L}$ 使得
$$
f (x_{0} + h_{1}, y_{0} + h_{2}) = f (x_{0}, y_{0}) + \mathcal{L} (\mathbf{h}) + \alpha (\mathbf{h})
$$
所以 在 $(x_0, y_0)$ 处 
$$
\nabla_{\vec{V}} f = \frac{\partial}{\partial t} \mathcal{L} (\vec{V} t) + \alpha (\vec{V} t) \Big|_{t = 0}  = \mathcal{L} (\vec{V})
$$
所以所有方向导数存在。
    
(3) 如果 $f$ 在 $(x_0, y_0)$ 处有各个方向的方向导数, 则 $f$ 在 $(x_0, y_0)$ 处连续.
    
错误。反例：
$$
f(x, y) = \begin{cases} 
\dfrac{x^2 y}{x^4 + y^2} &  (x, y) \neq (0, 0) \\
0 &  (x, y) = (0, 0)
\end{cases}
$$
沿方向向量 $\mathbf{v} = (a, b)$（其中 $a^2 + b^2 = 1$），方向导数为：
$$
\nabla_{\mathbf{v}} f(0, 0) = \lim_{t \to 0} \frac{f(ta, tb) - f(0, 0)}{t}
$$
代入 $f(ta, tb) = \dfrac{(ta)^2 (tb)}{(ta)^4 + (tb)^2} = \dfrac{t^3 a^2 b}{t^4 a^4 + t^2 b^2} = \dfrac{t a^2 b}{t^2 a^4 + b^2}$
    
所有方向导数均存在且为 $\frac{a^{2}}{b}$
但是函数在原点不连续：
沿抛物线路径 $y = x^2$ 趋近原点：
$$
\lim_{x \to 0} f(x, x^2) = \lim_{x \to 0} \dfrac{x^2 \cdot x^2}{x^4 + (x^2)^2} = \dfrac{x^4}{2x^4} = \dfrac{1}{2} \neq f(0, 0).
$$
因此，函数在原点处不连续。
    
(4) 如果 $f$ 在 $(x_0, y_0)$ 处有各个方向导数, 则对任何方向 $q = (a, b)$, 有 
$$
\frac{\partial f}{\partial q}\bigg|_{(x_0,y_0)} = a\frac{\partial f}{\partial x}\bigg|_{(x_0,y_0)} + b\frac{\partial f}{\partial y}\bigg|_{(x_0,y_0)}
$$
不正确，反例：
$$
f (x, y) = \begin{cases} \frac{|y| \sqrt{x^{2} + y^{2}}}{x} \qquad (x \neq 0) \\ 0 \qquad (x = 0) \end{cases}
$$
对于 $(0,0)$ 处的方向导数 $\vec{V} = (\cos \theta, \sin \theta)$
$$
\nabla_{\vec{V}} f(0,0) = \begin{cases} 0 \qquad (\cos \theta = 0) \\ \frac{|\sin \theta|}{\cos \theta} \qquad (\cos \theta \neq 0)\end{cases}
$$
但是对于 $f$ 的偏导而言
$$
f'_{1} (0,0) = 0, \quad f'_{2} (0,0) = 0
$$
所以 $\frac{\partial f}{\partial q}\bigg|_{(x_0,y_0)} = a\frac{\partial f}{\partial x}\bigg|_{(x_0,y_0)} + b\frac{\partial f}{\partial y}\bigg|_{(x_0,y_0)}$ 并不成立。
    
4. 设 $f(x, y) = \sqrt{|x^2 - y^2|}$ 在 $(0, 0)$ 处沿着哪些方向 $f$ 的方向导数存在?
    
对于 $(0,0)$ 处的方向导数  $\vec{V} = (\cos \theta, \sin \theta)$：
$$
\nabla_{\vec{V} } f = \lim_{t \to 0} \frac{|t|}{t} \sqrt{|\cos^{2} \theta - \sin^{2} \theta|}
$$
所以对于所有 $\cos^{2} \theta = \sin^{2} \theta$ 的 $\theta$ 而言方向导数存在，即对于 $\theta = \frac{\pi}{4}$ 和 $\theta = \frac{3 \pi}{4}$ ,方向导数存在

4. 计算函数的各个偏导数.
(1) $f(x, y) = xy$
$$
f'_{1} = y, f'_{2} = x
$$
(2) $f(x, y) = \arctan\left(\frac{y}{x}\right)$
$$
f'_{1} = - \frac{y}{x^{2} + y^{2}},  f'_{2} = \frac{x}{x^{2} + y^{2}}
$$
(3) $f(x_1, \ldots, x_n) = \sqrt{x_1^2 + \ldots + x_n^2}$
$$
f'_{k} = \frac{x_{k}}{\sqrt{x_{1}^{2} + \cdots + x_{n}^{2}}} \qquad (1 \leq k \leq n)
$$

5. (1) $f(x, y) = \sqrt{|xy|}$ 在 $(0, 0)$ 处是否可微?

不可微。理由：
$f(x, y) = \sqrt{|xy|}$ 在 $(0, 0)$ 处的偏导
$$
f'_{1} = f'_{2} = 0
$$
但是
$$
\lim_{(x,y) \to 0}  \sqrt{\abs{\frac{xy}{x^{2} + y^{2}}}} 
$$
显然不存在，所以不可微。

(2) 设 $f$ 在 $(0, 0)$ 点的某个开球邻域 $U$ 中有定义, 且满足 $|f(x, y)| \leq x^2 + y^2$, $\forall x, y \in U$. 证明: $f$ 在 $(0, 0)$ 处可微, 并计算它在 $(0, 0)$ 处的微分
微分为0，理由：
利用微分的定义$f$ 在 $(x_0, y_0)$ 处可微，所以存在线性映射 $\mathcal{L}$ 使得
$$
f (x_{0} + h_{1}, y_{0} + h_{2}) = f (x_{0}, y_{0}) + \mathcal{L} (\mathbf{h}) + \alpha (\mathbf{h})
$$
带入 $f (0,0) = 0$以及$|f(x, y)| \leq x^2 + y^2$ 可以作为 $\alpha (\mathbf{h})$，所以f$在$(0, 0)$处的微分为0

证明$|f(x, y)| \leq x^2 + y^2$可以作为$\alpha (\mathbf{h})$可以作为误差项：
$$
\lim_{(x, y) \to 0} \frac{|f (x, y)|}{\sqrt{x^{2} + y^{2}}}  \leq \lim_{(x, y) \to 0} \sqrt{x^{2} + y^{2}} = 0
$$
(3) 设$g$在$(0, 0)$点的某个开球邻域$U$中有定义, 且满足$|g(x, y)| \leq \sqrt{x^2 + y^2}$,$\forall x, y \in U$.$g$在$(0, 0)$处是否一定可微?

不一定，反例：
$$
g(x,y) = \begin{cases} \frac{xy}{\sqrt{x^2 + y^2}} \qquad (x \neq 0) \\ 0 \qquad (x = 0) \end{cases}
$$
$$
\lim_{(x,y) \to 0} g(x,y) = \lim_{(x,y) \to 0} \frac{xy}{\sqrt{x^2 + y^2}}
$$
不存在。$g$ 甚至不连续。

  ​	

  