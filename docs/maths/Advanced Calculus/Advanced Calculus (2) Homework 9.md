# 高等微积分（2） 第9次作业

Chasse_neige

### 1 

#### (1)

设 $S$ 是椭球面 
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1
$$
请用二重积分表示 $S$ 的面积（不必计算该积分）。

对椭球面做如下参数化
$$
x = a \sin \theta \cos \phi \\
y = b \sin \theta \sin \phi \\
z = c \cos \theta
$$
所以
$$
x_{\theta} = a \cos \theta \cos \phi, y_{\theta} = b \cos \theta \sin \phi, z_{\theta} = - c \sin \theta \\
x_{\phi} = - a \sin \theta \sin \phi, y_{\phi} = b \sin \theta \cos \phi, z_{\phi} = 0
$$

$$
S = \iint d S = \iint \begin{vmatrix}  \begin{pmatrix} a \cos \theta \cos \phi, b \cos \theta \sin \phi, - c \sin \theta \end{pmatrix} \times \begin{pmatrix} - a \sin \theta \sin \phi, b \sin \theta \cos \phi, 0 \end{pmatrix} \end{vmatrix} d \theta d \phi \\ =
\iint \sqrt{(bc \sin^{2} \theta \cos \phi)^{2} + (ac \sin^{2} \theta \sin \phi)^{2} + (ab \sin \theta \cos \theta)^{2}} d \theta d \phi \\ =
\iint \sqrt{b^{2} c^{2} \sin^{2} \theta \cos^{2} \phi + a^{2} c^{2} \sin^{2} \theta \sin^{2} \phi + a^{2} b^{2} \cos^{2} \theta} \sin \theta d \theta d \phi
$$

#### (2)
计算球面 $x^2 + y^2 + z^2 = R^2$ 的面积。

取 $a = b = c = R$
$$
S = R^{2} \iint  \sin \theta d \theta d \phi = 2 \pi R^{2} \int_{-1}^{1} dx = 4 \pi R^{2}
$$

### 2
设 $\Sigma$ 为质量均匀的上半球面  
$$
\Sigma = \{(x, y, z) | x^2 + y^2 + z^2 = 1, z \geq 0\}
$$

求出 $\Sigma$ 的质心位置，即计算 
$$
\left( \frac{\iint_{\Sigma} x \, dS}{\iint_{\Sigma} dS}, \frac{\iint_{\Sigma} y \, dS}{\iint_{\Sigma} dS}, \frac{\iint_{\Sigma} z \, dS}{\iint_{\Sigma} dS} \right)
$$
由对称性，显然有
$$
\frac{\iint_{\Sigma} x \, dS}{\iint_{\Sigma} dS} = \frac{\iint_{\Sigma} y \, dS}{\iint_{\Sigma} dS} = 0
$$

$$
\frac{\iint_{\Sigma} z \, dS}{\iint_{\Sigma} dS} = \frac{1}{2 \pi} \iint \cos \theta \sin \theta d \theta d \phi = \int_{0}^{\frac{\pi}{2}} \cos \theta \sin \theta d \theta = \frac{1}{2}
$$

### 3

给定 $a > b > 0$，定义曲面 $T$ 为  
$$
T = \{(x, y, z) \in \mathbb{R}^3 | (\sqrt{x^2 + y^2} - a)^2 + z^2 = b^2\}
$$
求 $T$ 的面积。

显然，$T$ 是双层曲面

做如下参数化
$$
x = (b \cos \theta + a) \sin \phi \\ 
y = (b \cos \theta + a) \cos \phi \\
z = b \sin \theta
$$
其中，参数取值范围 $\theta \in [0, \pi], \phi \in [0, 2 \pi)$所以
$$
x_{\theta} = - b \sin \theta \sin \phi, y_{\theta} = - b \sin \theta \cos \phi, z_{\theta} = b \cos \theta \\
x_{\phi} = (b \cos \theta + a) \cos \phi, y_{\phi} = - (b \cos \theta + a) \sin \phi, z_{\phi} = 0
$$
面积
$$
S = \iint |(-b \sin \theta \sin \phi, -b \sin \theta \cos \phi, b \cos \theta) \times ((b \cos \theta + a) \cos \phi, - (b \cos \theta + a) \sin \phi, 0)| d \theta d \phi \\ =
\iint \sqrt{(b^{2} \cos^{2} \theta + ab \cos \theta)^{2} \sin^{2} \phi + (b^{2} \cos^{2} \theta + ab \cos \theta)^{2} \cos^{2} \phi + (b^{2} \sin \theta \cos \theta + ab \sin \theta)^{2}} d \theta d \phi \\ =
\iint \sqrt{b^{4} \cos^{2} \theta + 2 ab^{3} \cos \theta + a^{2} b^{2}} d \theta d \phi \\ =
\iint b (b \cos \theta + a) d \theta d \phi = 2 \pi b \int_{0}^{\pi} (b \cos \theta + a) d \theta = 2 \pi^{2} ab 
$$


### 4

令 $S$ 为单位球面 
$$
S = \{(x, y, z) | x^2 + y^2 + z^2 = 1\}
$$

设 $p : [0, 1] \to S$ 是 $C^1$ 光滑映射  
$$
p(t) = (x(t), y(t), z(t)), \quad \forall t \in [0, 1]
$$

假设 $p(0) = (0, 0, -1), \, p(1) = (0, 0, 1)$，且对任何 $0 < t < 1$ 有 $-1 < z(t) < 1$。

#### (1)
证明：对任何 $t \in [0, 1]$，有  
$$
x(t)x'(t) + y(t)y'(t) + z(t)z'(t) = 0
$$
证明
$$
x^{2} (t) + y^{2} (t) + z^{2} (t) = 1
$$

$$
\frac{d}{dt} (x^{2} (t) + y^{2} (t) + z^{2} (t)) = 0
$$

所以
$$
x(t)x'(t) + y(t)y'(t) + z(t)z'(t) = 0
$$

#### (2)

证明：对任何 $0 < t < 1$，有  
$$
x'(t)^2 + y'(t)^2 \geq \frac{z(t)^2}{x(t)^2 + y(t)^2} z'(t)^2
$$
证明

由 Cauchy 不等式
$$
(x^{2} + y^{2}) (x'^{2} + y'^{2}) \geq (x x' + y y')^{2} = (- z z')^{2}
$$
所以
$$
x'(t)^2 + y'(t)^2 \geq \frac{z(t)^2}{x(t)^2 + y(t)^2} z'(t)^2
$$

#### (3)
定义 $p$ 的弧长为 
$$
L = \int_0^1 \sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} \, dt
$$

证明：$L \geq \pi$

证明
$$
L = \int_0^1 \sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} \, dt \geq \int_{0}^{1} \sqrt{\frac{z(t)^2}{x(t)^2 + y(t)^2} z'(t)^2 + z'^{2} (t)} \, dt \\ =
\int_{0}^{1} \frac{|z' (t)|}{\sqrt{x^{2} (t) + y^{2} (t)}} dt = \int_{0}^{1} \sqrt{\frac{z'^{2} (t)}{1 - z^{2} (t)}} dt \\ \geq 
\int_{0}^{1} \frac{z' (t)}{\sqrt{1 - z^{2} (t)}} dt = \int_{-1}^{1} \frac{dz}{\sqrt{1 - z^{2}}} = \pi
$$

### 5
给定正数 $c < \sqrt{2}$。设曲面 $S = \{(x, y, z) | x^2 + y^2 + z^2 = 1, x + y \geq c\}$。

#### (1)
计算第一型曲面积分 $\iint_S x \, dS$，其中 $dS$ 表示面积微元。

作换元
$$
\begin{pmatrix} u \\ v \\ w \end{pmatrix} = \begin{pmatrix} 
\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} & 0 \\
- \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} & 0 \\
0 & 0 & 1
\end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
$$
由于变换矩阵是正交阵，所以面积元不变
$$
x = \frac{\sqrt{2}}{2} (u - v)
$$
再换到球坐标下
$$
u = \cos \theta \\
v = \sin \theta \sin \phi \\
w = \sin \theta \cos \phi
$$
所以积分范围为 $\theta \in [0, \arccos \frac{\sqrt{2}}{2} c], \phi \in [0, 2 \pi]$
$$
\iint_{S} x dS = \iint_{S} \frac{\sqrt{2}}{2} (\cos \theta - \sin \theta \sin \phi) \sin \theta d \theta d \phi \\ =
\frac{\sqrt{2}}{2} \cdot 2 \pi \int_{0}^{\arccos \frac{\sqrt{2}}{2} c} \cos \theta \sin \theta d \theta \\ = \sqrt{2} \pi \cdot \frac{1}{2} (1 - \frac{c^{2}}{2}) = \frac{\sqrt{2}}{2} \pi (1 - \frac{c^{2}}{2})
$$

#### (2)
计算第一型曲线积分 $\int_{\partial S} x \, dl$，其中 $\partial S$ 表示 $S$ 的边界，$dl$ 表示弧长微元

参数化边界，由于边界上 $u = \frac{\sqrt{2}}{2} c$
$$
l: (\frac{\sqrt{2}}{2} c, \sqrt{1 - \frac{c^{2}}{2}} \sin \phi, \sqrt{1 - \frac{c^{2}}{2}} \cos \phi)
$$
所以
$$
\int_{\partial S} x \, dl = \int_{0}^{2 \pi} \frac{\sqrt{2}}{2} (\frac{\sqrt{2}}{2} c - \sqrt{1 - \frac{c^{2}}{2}} \sin \phi) \sqrt{1 - \frac{c^{2}}{2}} d \phi = \pi c \sqrt{1 - \frac{c^{2}}{2}}
$$


### 6
设 $C = \{(x, y) | x^2 + y^2 = 1\}$ 是平面上的单位圆周，取逆时针定向（方向）。

#### (1)
计算第二型曲线积分 
$$
B(u) = \oint_C \frac{-y \, dx + x \, dy}{(x^2 + y^2 + u^2)^{3/2}}
$$
参数化
$$
x = \cos \theta \\
y = \sin \theta
$$

$$
B(u) = \oint_C \frac{-y \, dx + x \, dy}{(x^2 + y^2 + u^2)^{3/2}} = \int_{0}^{2 \pi} \frac{ \sin^{2} \theta + \cos^{2} \theta}{(1 + u^{2})^{\frac{3}{2}}} d \theta = \frac{2 \pi}{(1 + u^{2})^{\frac{3}{2}}}
$$

#### (2)
计算极限 
$$
\lim_{A \to +\infty} \int_{-A}^A B(u) \, du
$$

$$
\lim_{A \to +\infty} \int_{-A}^A B(u) \, du = \lim_{A \to \infty} \int_{-A}^{A} \frac{2 \pi}{\cosh^{3} \theta} d (\sinh \theta) \\ =
\lim_{A \to \infty} \int_{- A}^{A} \frac{2 \pi}{\cosh^{2} \theta} d \theta = 4 \pi
$$

### 7
计算 
$$
\oint_L xy \, dx + yz \, dy + zx \, dz
$$

其中 $L$ 为曲线  
$$
\begin{cases}  
x^2 + y^2 + z^2 = 1 \\  
x + y + z = 1  
\end{cases}
$$
积分方向从 $(1, 0, 0)$ 沿着劣弧指向 $(0, 1, 0)$

同样先做正交变换
$$
\begin{pmatrix} u \\ v \\ w \end{pmatrix} = \begin{pmatrix} 
\frac{\sqrt{3}}{3} & \frac{\sqrt{3}}{3} & \frac{\sqrt{3}}{3} \\
- \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} & 0 \\
\frac{\sqrt{6}}{6} & \frac{\sqrt{6}}{6} & - \frac{\sqrt{6}}{3}
\end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
$$

$$
\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 
\frac{\sqrt{3}}{3} & - \frac{\sqrt{2}}{2} & \frac{\sqrt{6}}{6} \\
\frac{\sqrt{3}}{3} & \frac{\sqrt{2}}{2} & \frac{\sqrt{6}}{6} \\
\frac{\sqrt{3}}{3} & 0 & - \frac{\sqrt{6}}{3}
\end{pmatrix}
\begin{pmatrix} u \\ v \\ w \end{pmatrix}
$$

所以利用 Stokes 公式
$$
\nabla \times (xy, yz, zx) = - (y, z, x)
$$

$$
\oint_L xy \, dx + yz \, dy + zx \, dz = \iint_{S} - (y, z, x) \cdot \frac{\sqrt{3}}{3} (1, 1, 1) dS \\ = - \frac{\sqrt{3}}{3} \iint_{S} d S = - \frac{2 \sqrt{3} \pi}{9}
$$

### 8
设 $a, b, c$ 为给定的正数，$S$ 为椭球面 
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1
$$

取指向外面的定向。对于正整数 $n$，计算第二型曲面积分 
$$
I_n = \iint_S (x^n \, dy \, dz + y^n \, dz \, dx + z^n \, dx \, dy)
$$
对椭球面做如下参数化
$$
x = a \sin \theta \cos \phi \\
y = b \sin \theta \sin \phi \\
z = c \cos \theta
$$
所以利用 Gauss 公式
$$
I_n = \iint_S (x^n \, dy \, dz + y^n \, dz \, dx + z^n \, dx \, dy) \\ = \iiint_{V} n (x^{n - 1} + y^{n - 1} + z^{n - 1}) dx dy dz \\ =
n abc \iiint_{V} (a^{n - 1} r^{n - 1} \sin^{n - 1} \theta \cos^{n - 1} \phi + b^{n - 1} r^{n - 1} \sin^{n - 1} \theta \sin^{n - 1} \phi + c^{n - 1}  r^{n - 1} \cos^{n - 1} \theta) r^{2} \sin \theta dr d \theta d \phi \\ =
\frac{2n \pi}{n + 2} abc \int_{0}^{\pi} \int_{0}^{2 \pi} (a^{n - 1} \sin^{n - 1} \theta \cos^{n - 1} \phi + b^{n - 1} \sin^{n - 1} \theta \sin^{n - 1} \phi + c^{n - 1}  \cos^{n - 1} \theta)  \sin \theta d \theta d \phi \\ =
\frac{2n \pi}{n + 2} abc  ((a^{n - 1} + b^{n - 1}) 2 \frac{(n - 2)!!}{n!!} + c^{n - 1} \frac{2}{n}) \\ = 
\frac{4 \pi}{n + 2} abc (a^{n - 1} + b^{n - 1} + c^{n + 1})
$$
