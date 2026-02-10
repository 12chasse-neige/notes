# 高等微积分（2） 第10次作业  
Chasse_neige

### 1  

定义曲面 $S$ 为 
$$
S = \{(x, y, z) \mid x^2 + y^2 \leq 1, x + y + z = 1\}
$$
取指向 $z$ 轴正方向的定向（或者用课本上的术语，选定了曲面的上侧）
(1) 计算第二型曲面积分  
$$
\iint_S x^2 \, dy \, dz + y^2 \, dz \, dx + z^2 \, dx \, dy
$$
利用 $x, y$ 对原曲面进行参数化，则第二型曲面积分简化为
$$
\iint_S x^2 \, dy \, dz + y^2 \, dz \, dx + z^2 \, dx \, dy = \iint_{D}  ((1 - x - y)^{2}, y^{2}, x^{2}) \cdot ((1, 0, -1) \times (0, 1, -1)) dx \, dy \\ = 
\iint_{D} ((1 - x - y)^{2}, y^{2}, x^{2}) \cdot (1, 1, 1) dx \, dy = \iint_{D} (1 + 2 x^{2} + 2 y^{2} - 2x - 2y + 2xy) dx \, dy \\ =
\pi + \pi - 0  = 2 \pi
$$
(2) 设 $S$ 的边界为 $\partial S$，赋予边界的正定向。计算第二型曲线积分  
$$
\int_{\partial S} z^2 \, dx + x^2 \, dy + y^2 \, dz
$$
同样使用参数化 $z = 1 - x - y, x = \cos \theta, y = \sin \theta$ ，则第二型曲面积分化为
$$
\int_{\partial S} z^2 \, dx + x^2 \, dy + y^2 \, dz = \int_{0}^{2 \pi} ((1 - x - y)^{2}, x^{2}, y^{2}) \cdot (- \sin \theta, \cos \theta, \sin \theta - \cos \theta) d \theta \\ = 
\int_{0}^{2 \pi} (- (1 - \cos \theta - \sin \theta)^{2} \sin \theta + \cos^{3} \theta + \sin^{3} \theta - \cos \theta \sin^{2} \theta) d \theta = 2 \pi
$$

### 2  

设 $C \subset \mathbb{R}^2$ 是光滑的闭曲线，取逆时针方向（定向）。假设 $(0, 0) \notin C$，计算第二型曲线积分  
$$
\oint_C \frac{-(x^2 y + y^3) \, dx + (x^3 + x y^2) \, dy}{(x^2 + y^2)^2}
$$
由于$C \subset \mathbb{R}^2$ 是光滑的闭曲线，所以 $C$ 可以参数化。假设 
$$
x = x (t) \\
y = y (t)
$$
其中 $t \in [0,1]$ 是一个参数化

注意到
$$
\left(\arctan (\frac{y}{x}) \right)' = \frac{- yx' + xy'}{x^{2} + y^{2}} = \frac{-(x^2 y + y^3) x' + (x^3 + x y^2) y'}{(x^2 + y^2)^2}
$$
则第二型曲线积分化为
$$
\oint_C \frac{-(x^2 y + y^3) \, dx + (x^3 + x y^2) \, dy}{(x^2 + y^2)^2} = \int_{0}^{1} \frac{-(x^2 y + y^3) x' + (x^3 + x y^2) y'}{(x^2 + y^2)^2} dt = \int_{0}^{1} \left(\arctan (\frac{y}{x}) \right)' dt \\= 
\begin{cases} 
0  \qquad (\text{原点不在曲线内})\\
2 \pi \qquad (\text{原点在曲线内})
\end{cases}
$$
第3 题需要用到如下事实：设 $f$ 在矩形区域 $[a, b] \times [c, d]$ 上连续，且有连续的偏导函数 $\frac{\partial f}{\partial x}$。对每个 $x \in [a, b]$，定义函数 $g(x) = \int_c^d f(x, y) \, dy$，则有 $g'(x) = \int_c^d \frac{\partial f(x,y)}{\partial x} \, dy$。  

### 3  
给定$(x_0, y_0) \in \mathbb{R}^2$。对于正数 $r$，令 $C(r) = \{(x, y) \mid (x - x_0)^2 + (y - y_0)^2 = r^2\}$。设$f$ 在区域 $D(R) = \{(x, y) \mid (x - x_0)^2 + (y - y_0)^2 \leq R^2\}$ 上是光滑函数，定义函数$g(r)$ 为如下的第一型曲线积分  
$$
g(r) = \frac{1}{2\pi r} \int_{C(r)} f(x, y) \, ds, \quad \forall 0 < r \leq R,
$$
其中 $ds$ 表示弧长微元。 
(1) 利用前述事实，证明：对任何 $0 < r \leq R$，有  
$$
g'(r) = \frac{1}{2\pi r} \int_{C(r)} -f_y(x,y) \, dx + f_x(x,y) \, dy
$$
其中 $C(r)$ 取逆时针定向。

证明

第一型曲线积分
$$
g(r) = \frac{1}{2\pi r} \int_{C(r)} f(x, y) \, ds = \frac{1}{2 \pi r} \int_{C (r)} f (x_{0} + r \cos \theta, y_{0} + r \sin \theta) r d \theta
$$

$$
g' (r) = \frac{1}{2 \pi} \int_{C (r)} \frac{\partial f}{\partial r} d \theta = \frac{1}{2 \pi} \int_{C (r)} f_{x} \cos \theta + f_{y} \sin \theta d \theta \\ = 
\frac{1}{2 \pi r} \int_{C (r)} f_{x} d (y_{0} + r \sin \theta) - f_{y} d (x_{0} + r \cos \theta) = \frac{1}{2\pi r} \int_{C(r)} -f_y(x,y) \, dx + f_x(x,y) \, dy
$$

(2) 设 $x_0^2 + y_0^2 > R^2$。计算 $\frac{1}{2\pi R} \int_{C(R)} \ln(x^2 + y^2) \, ds$。  
$$
g (r) = \frac{1}{2\pi r} \int_{C(r)} \ln(x^2 + y^2) \, ds
$$
利用2的结论，由于原点不在 $C (r)$ 内
$$
g' (r) = \frac{1}{2 \pi r} \int_{C (r)} - \frac{2 y }{x^{2} + y^{2}} dx + \frac{2x}{x^{2} + y^{2}} dy = 0
$$
所以
$$
g (R) = \lim_{r \to 0} \frac{1}{2\pi r} \int_{C(r)} \ln(x^2 + y^2) \, ds = \ln (x_{0}^{2} + y_{0}^{2})
$$

### 4  

设 $S = \{(x, y, z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 = 1\}$ 是单位球面，取指向外面的定向。对给定的非负整数 $k$，计算第二型曲面积分  
$$
\iint_S z^k (x \, dy \, dz + y \, dz \, dx + z \, dx \, dy) \quad \text{或等价的} \quad \iint_S z^k (x \, dy \wedge dz + y \, dz \wedge dx + z \, dx \wedge dy)
$$
选取球坐标作为参数化
$$
x = \sin \theta \cos \phi \\
y = \sin \theta \sin \phi \\
z = \cos \theta
$$
上半球
$$
\iint_S z^k (x \, dy \, dz + y \, dz \, dx + z \, dx \, dy) \\= 
\iint_{S} \cos^{k} \theta (\sin \theta \cos \phi, \sin \theta \sin \phi, \cos \theta) \cdot \((\cos \theta \cos \phi, \cos \theta \sin \phi, - \sin \theta) \times (- \sin \theta \sin \phi, \sin \theta \cos \phi, 0)) d \theta d \phi \\ = 
\iint_{S} \cos^{k} \theta (\sin \theta \cos \phi, \sin \theta \sin \phi, \cos \theta) \cdot (\sin \theta \cos \phi, \sin \theta \sin \phi, \cos \theta) \sin \theta d \theta d \phi \\ = 
\iint_{S} \cos^{k} \theta \sin \theta d \theta d \phi = 2 \pi \int_{0}^{1} x^{k} dx = \frac{2 \pi}{k + 1}
$$

所以整个球面积分为
$$
\iint_S z^k (x \, dy \, dz + y \, dz \, dx + z \, dx \, dy) = \begin{cases}  0 \qquad (\text{n为偶数}) \\ \frac{4 \pi}{k + 1} \qquad (\text{n为奇数}) \end{cases}
$$


### 5  

设 $S$ 为曲面  
$$
(x-1)^2 + y^2 + z^2 = 2,
$$
取指向外面的定向。计算第二型曲面积分  
$$
\iint_S \frac{x \, dy \, dz + y \, dz \, dx + z \, dx \, dy}{(x^2 + y^2 + z^2)^{3/2}}
$$
$$
\iint_S \frac{x \, dy \, dz + y \, dz \, dx + z \, dx \, dy}{(x^2 + y^2 + z^2)^{3/2}} = \iint_{S} \frac{\vec{r}}{r^{3}} \cdot d \vec{S}
$$

利用 Gauss 定理
$$
\iint_{S‘} \frac{\vec{r}}{r^{3}} \cdot d \vec{S} = \iiint_{V’} \nabla \cdot \frac{\vec{r}}{r^{3}} d v = 0 \qquad (0 \notin S')
$$
取 $S' = \{ (x - 1)^{2} + y^{2}+ z^{2} = 2, x^{2} + y^{2} + z^{2} = 0.1 \}$

所以
$$
\iint_S \frac{x \, dy \, dz + y \, dz \, dx + z \, dx \, dy}{(x^2 + y^2 + z^2)^{3/2}} = \iint_{x^{2} + y^{2} + z^{2} = 0.1} \frac{x \, dy \, dz + y \, dz \, dx + z \, dx \, dy}{(x^2 + y^2 + z^2)^{3/2}} = 4 \pi
$$

### 6  

设 $S \subseteq \mathbb{R}^3$ 是 $C^1$ 光滑的闭曲面，取指向外面的定向（或用课本上的术语，$S$ 是它所围成区域的外侧面），$(0, 0, 0) \notin S$。计算第二型曲面积分  
$$
\iint_S \frac{x \, dy \, dz + y \, dz \, dx + z \, dx \, dy}{(a^2 x^2 + b^2 y^2 + c^2 z^2)^{3/2}}
$$
其中 $a, b, c$ 是给定的正数。  

同样使用 Gauss 定理
$$
\nabla \cdot \frac{(x, y, z)}{(a^{2} x^{2} + b^{2}y^{2} + c^{2} z^{2})^\frac{3}{2}} = \frac{1}{(a^{2} x^{2} + b^{2}y^{2} + c^{2} z^{2})^{3}} ((a^{2} x^{2} + b^{2}y^{2} + c^{2} z^{2})^\frac{3}{2} - 3 (a^{2} x^{2} + b^{2}y^{2} + c^{2} z^{2})^\frac{1}{2} a x^{2} \\ + (a^{2} x^{2} + b^{2}y^{2} + c^{2} z^{2})^\frac{3}{2} - 3 (a^{2} x^{2} + b^{2}y^{2} + c^{2} z^{2})^\frac{1}{2} b y^{2} \\ + (a^{2} x^{2} + b^{2}y^{2} + c^{2} z^{2})^\frac{3}{2} - 3 (a^{2} x^{2} + b^{2}y^{2} + c^{2} z^{2})^\frac{1}{2} c z^{2}) = 0 \qquad (0 \notin S)
$$
所以
$$
\iint_S \frac{x \, dy \, dz + y \, dz \, dx + z \, dx \, dy}{(a^2 x^2 + b^2 y^2 + c^2 z^2)^{3/2}} = \iiint_{V} \nabla \cdot \frac{(x, y, z)}{(a^{2} x^{2} + b^{2}y^{2} + c^{2} z^{2})^\frac{3}{2}}d v = 0
$$

### 7  
设 $S \subseteq \mathbb{R}^3$ 是封闭的光滑曲面，$V$ 是由 $S$ 围成的三维有界闭区域（称之为 $S$ 的内部）。设 $f(x, y, z), P(x, y, z), Q(x, y, z), R(x, y, z)$ 都是 $V$ 上的 $C^1$ 光滑函数，且 $P, Q, R$ 在 $S$ 上恒等于 0。证明：  
$$
\iiint_V \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) e^{f(x, y, z)} \, dx \, dy \, dz = -\iiint_V \left( P \frac{\partial f}{\partial x} + Q \frac{\partial f}{\partial y} + R \frac{\partial f}{\partial z} \right) e^{f(x, y, z)} \, dx \, dy \, dz
$$
证明

因为$P, Q, R$ 在 $S$ 上恒等于 0，所以积分
$$
\iint_{S} P e^{f (x, y, z)} dy dz + Q e^{f (x, y, z)} dz dx + R e^{f (x, y, z)} dx dy = 0
$$
利用 Gauss 定理
$$
\iint_{S} P e^{f (x, y, z)} dy dz + Q e^{f (x, y, z)} dz dx + R e^{f (x, y, z)} dx dy \\ =
\iiint_{V} \frac{\partial}{\partial x} (P e^{f (x, y, z)}) + \frac{\partial}{\partial y} ( Q e^{f (x, y, z)})  + \frac{\partial}{\partial z} ( R e^{f (x, y, z)}) dx dy dz \\ = 
\iiint_V \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) e^{f(x, y, z)} \, dx \, dy \, dz + \iiint_V \left( P \frac{\partial f}{\partial x} + Q \frac{\partial f}{\partial y} + R \frac{\partial f}{\partial z} \right) e^{f(x, y, z)} \, dx \, dy \, dz = 0
$$
所以
$$
\iiint_V \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) e^{f(x, y, z)} \, dx \, dy \, dz = -\iiint_V \left( P \frac{\partial f}{\partial x} + Q \frac{\partial f}{\partial y} + R \frac{\partial f}{\partial z} \right) e^{f(x, y, z)} \, dx \, dy \, dz
$$


### 8  

对于函数 $f : \mathbb{R}^3 \to \mathbb{R}$，如果极限  
$$
\lim_{M \to \infty} \iiint_{x^2 + y^2 + z^2 \leq M^2} f(x, y, z) \, dx \, dy \, dz
$$
存在, 则把上述极限记作  
$$
\iiint_{\mathbb{R}^3} f(x,y,z) \, dx \, dy \, dz,
$$
称为 $f$ 在 $\mathbb{R}^3$ 上的无穷积分。 
(1) 设 $P, Q : \mathbb{R}^3 \to \mathbb{R}$ 是 $C^1$ 光滑函数。证明：对正数 $M$，有  
$$
\iint_{\partial B} P(x,y,z) e^{Q(x,y,z)} \, dy \wedge dz = \iiint_B \left( \frac{\partial P}{\partial x} + P \frac{\partial Q}{\partial x} \right) e^{Q(x,y,z)} \, dV
$$
其中 $B = \{(x,y,z) \mid x^2 + y^2 + z^2 \leq M^2\}$, $\partial B$ 是 $B$ 的边界，取指向外面的定向。

利用推导 Gauss 定理时 local model 的结果
$$
\iint_{\partial B} P(x,y,z) e^{Q(x,y,z)} \, dy \wedge dz = \iiint_{B} \frac{\partial}{\partial x} ( P(x,y,z) e^{Q(x,y,z)}) dx  \wedge dy \wedge dz \\ = 
\iiint_B \left( \frac{\partial P}{\partial x} + P \frac{\partial Q}{\partial x} \right) e^{Q(x,y,z)} \, dV
$$

 (2) 证明：对于三元多项式 $P(x,y,z)$，有  
$$
\iiint_{\mathbb{R}^3} \frac{\partial P}{\partial x} e^{-x^2 - y^2 - z^2} \, dx \, dy \, dz = 2 \iiint_{\mathbb{R}^3} x P(x,y,z) e^{-x^2 - y^2 - z^2} \, dx \, dy \, dz
$$
证明

取 $f (x, y, z) = - (x^{2} + y^{2} + z^{2})$，上一小问结果化为
$$
\iint_{\partial B} P(x,y,z) e^{- (x^{2} + y^{2} + z^{2})} \, dy \wedge dz = \iiint_{B} \frac{\partial P}{\partial x} e^{-x^2 - y^2 - z^2} \, dx \, dy \, dz - 2 \iiint_{B} x P(x,y,z) e^{-x^2 - y^2 - z^2} \, dx \, dy \, dz
$$
取 $B = \{(x, y, z)| x^{2} + y^{2} + z^{2} \leq R^{2} \}$ ，设 $k$ 次多项式 $P$ 在紧致集  $\partial B$ 上的最大值为 $M R^{k}$
$$
\forall \epsilon > 0, \exist R, s.t. \iint_{\partial B} P(x,y,z) e^{- (x^{2} + y^{2} + z^{2})} \, dy \wedge dz \leq 2 M R^{k} \pi R^{2} e^{- R^{2}} \leq \epsilon
$$
所以当 $R \to \infty$ ，即 $B \to \mathbb{R}^{3}$ 时
$$
\iiint_{B} \frac{\partial P}{\partial x} e^{-x^2 - y^2 - z^2} \, dx \, dy \, dz - 2 \iiint_{B} x P(x,y,z) e^{-x^2 - y^2 - z^2} \, dx \, dy \, dz \to 0
$$
所以
$$
\iiint_{\mathbb{R}^3} \frac{\partial P}{\partial x} e^{-x^2 - y^2 - z^2} \, dx \, dy \, dz = 2 \iiint_{\mathbb{R}^3} x P(x,y,z) e^{-x^2 - y^2 - z^2} \, dx \, dy \, dz
$$
