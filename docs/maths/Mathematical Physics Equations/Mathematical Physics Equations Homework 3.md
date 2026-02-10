# 数学物理方程 第3次作业

Chasse_neige

3.求解
$$
\begin{aligned}
& \frac{\partial^{2} u}{\partial x^{2}}+\frac{\partial^{2} u}{\partial y^{2}}=0 \\
& u \mid_{x=0}=u_{0}, \quad u \mid_{x=a}=u_{0}\left[\left(\frac{y}{b}\right)^{2}-2 \frac{y}{b}\right] \\
& \left.\frac{\partial u}{\partial y}\right|_{y=0}=\left.\frac{\partial u}{\partial y}\right|_{y=b}=0
\end{aligned}
$$

分离变量
$$
u(x, y) = X (x) Y (y)
$$

$$
X'' + \lambda X = 0 \\
Y'' - \lambda Y = 0
$$

所以通解为
$$
Y (y) = A \sin(\sqrt{\lambda} y) + B \cos(\sqrt{\lambda} y) \\
X (x) = C \sinh(\sqrt{\lambda} x) + D \cosh(\sqrt{\lambda} x)
$$
带入第2条边界条件
$$
\frac{\partial u}{\partial y} = X (x) \left(\sqrt{\lambda} A \cos(\sqrt{\lambda y}) - \sqrt{\lambda} B \sin (\sqrt{\lambda} y)\right)
$$
所以 $A = 0$, $\omega_{n} = \sqrt{\lambda} = \frac{n \pi}{b}$

带回原解中，得到一般形式的解
$$
u (x, y)  = E x + F + \sum_{n = 1}^{\infty} (C_{n} \sinh(\omega_{n} x) + D_{n} \cosh(\omega_{n} x))B_{n} \cos(\omega_{n} y) 
$$
再考虑第1条边界条件
$$
u_{0} = \sum_{n = 1}^{\infty} B_{n} D_{n} \cos(\omega_{n} y) + F
$$
所以
$$
B_{n} D_{n} = \frac{2}{b} \int_{0}^{b} u_{0} \cos(\omega_{n} y) dy = 0
$$

$$
u (x, y) = \sum_{n = 1}^{\infty} B_{n} C_{n} \sinh(\omega_{n} x) \cos(\omega_{n} y) + Ex + F
$$

所以
$$
u_{0} \left[\left(\frac{y}{b}\right)^{2}-2 \frac{y}{b}\right] = \sum_{n = 1}^{\infty} B_{n} C_{n} \sinh(\omega_{n} a) \cos(\omega_{n} y) + Ea + F
$$

$$
B_{n} C_{n} = \frac{2}{b \sinh(\omega_{n} a)} \int_{0}^{b} u_{0} \left[\left(\frac{y}{b}\right)^{2}-2 \frac{y}{b}\right] \cos(\omega_{n} y) dy = \frac{4 u_{0}}{n^{2} \pi^{2} \sinh(\frac{n \pi}{b} a)}
$$

所以方程的解为
$$
u(x, y) = Ex + F + \sum_{n = 1}^{\infty} \frac{4 u_{0}}{n^{2} \pi^{2} \sinh(\frac{n \pi}{b} a)} \sinh(\frac{n \pi}{b} x) \cos(\frac{n \pi}{b} y)
$$
再带入 $u \mid_{x=0}=u_{0}, \quad u \mid_{x=a}=u_{0}\left[\left(\frac{y}{b}\right)^{2}-2 \frac{y}{b}\right]$,得到
$$
u (x, y) = u_{0} \left(1 - \frac{5x}{3a}\right) + \sum_{n = 1}^{\infty} \frac{4 u_{0}}{n^{2} \pi^{2} \sinh(\frac{n \pi}{b} a)} \sinh(\frac{n \pi}{b} x) \cos(\frac{n \pi}{b} y)
$$
4.当层状铀块的厚度超过一定临界值时, 中子浓度将随时间不断增加, 以致引起爆炸. 试估算层状铀块的临界厚度. 如果铀块为立方体, 则其临界棱长应为多大?

（1）层状铀块，一维情形

采用第一次作业中求出的扩散方程
$$
\frac{\partial}{\partial t} u  - D \nabla^{2} u = \alpha u
$$
在一维情形下化为
$$
\frac{\partial}{\partial t} u - D \frac{\partial^{2}}{\partial x^{2}} u = \alpha u \qquad (- \frac{d}{2} \leq x \leq \frac{d}{2}) \\
\frac{\partial}{\partial t} u - D \frac{\partial^{2}}{\partial x^{2}} u = 0 \qquad (x < -\frac{d}{2} \quad \text{or} \quad x > \frac{d}{2} )
$$
 分离变量，对于铀块内的情形
$$
u(x, t) = X (x) T (t)
$$

$$
X T' - D X'' T = \alpha X T
$$

$$
\frac{T'}{T} = D \frac{X''}{X} + \alpha = \lambda
$$

所以
$$
D X'' + (\alpha - \lambda) X = 0 \\
T' = \lambda T
$$
对于铀块外
$$
D X'' = \lambda' X \\
T' = \lambda' T
$$
由对称性以及界面处的数密度以及流密度连续性条件，容易得到坐标方程的解仅余弦项非零，且边界处为对应驻波的波节处
$$
\sqrt{\frac{\alpha - \lambda}{D}} \frac{d}{2} = \frac{2 n + 1}{2} \pi \qquad (n = 1, 2, \cdots)
$$
中子数不随时间发散要求
$$
\lambda \leq 0
$$
所以临界厚度可以估计为
$$
d_{c} = \pi \sqrt{\frac{D}{\alpha}}
$$
（2）立方体铀块，三维情形

此时数密度的演化方程变为
$$
\frac{\partial}{\partial t} u - D \left(\frac{\partial^{2}}{\partial x^{2}} u + \frac{\partial^{2}}{\partial y^{2}} u + \frac{\partial^{2}}{\partial z^{2}} u\right) = \alpha u \qquad (0 \leq x \leq a \quad \text{and} \quad 0 \leq y \leq a \quad \text{and} \quad 0 \leq z \leq a) \\
\frac{\partial}{\partial t} u - D \left(\frac{\partial^{2}}{\partial x^{2}} u + \frac{\partial^{2}}{\partial y^{2}} u + \frac{\partial^{2}}{\partial z^{2}} u\right) = 0 \qquad (\text{Other area} )
$$

和一维的时候的处理方法基本相同，先分离变量
$$
u(x, y, z, t) = U(x, y, z) T(t)
$$
得到
$$
T' = \lambda T\\
D \nabla^{2} U + (\alpha - \lambda) U = 0
$$
对于立方体外空间
$$
T' = \lambda' T \\
D \nabla^{2} U = \lambda' U
$$
由于这个问题对于三个坐标显然是对称的，所以在对 $U$ 的进一步分离变量中我们可以假设
$$
U(x, y, z) = X(x) Y(y) Z(z)
$$
且任意方向满足
$$
D X'' + \frac{\alpha - \lambda}{3} X = 0
$$
边界上和（1）满足相同的条件，所以直接得到临界边长为
$$
a_{c} = \pi \sqrt{\frac{3D}{\alpha}}
$$
5.求解
$$
\begin{aligned}
& \frac{\partial^{2} u}{\partial x^{2}}+\frac{\partial^{2} u}{\partial y^{2}}=x^{2} y \\
& u \mid_{x=0}=u \mid_{x=a}=0 \\
& u \mid_{y=0}=u \mid_{y=b}=0
\end{aligned}
$$

$$
u(x, y) = v(x, y) + w(x, y) 
$$

对齐次方程分离变量
$$
w(x, y) = X (x) Y (y)
$$

$$
X'' - \lambda X = 0 \\
Y'' + \lambda Y = 0
$$

所以通解为
$$
X (x) = C \sin(\sqrt{\lambda} x) + D \cos(\sqrt{\lambda} x) \\
Y (y) = A \sinh(\sqrt{\lambda} y) + B \cosh(\sqrt{\lambda} y)
$$
带入边界条件
$$
D = 0, \quad \omega_{n} = \sqrt{\lambda}  = \frac{n \pi}{a}
$$
初始条件由特解的情况给出

对于特解，给定泊松方程
$$
\frac{\partial^{2} v}{\partial x^{2}} + \frac{\partial^{2} v}{\partial y^{2}} = x^{2} y
$$
边界条件
$$
v(0, y) = v(a, y) = 0
$$

容易得到一个特解为
$$
v (x, y) = \frac{1}{12} x^{4}y - \frac{1}{12} a^{3} xy
$$
回带至通解的系数中
$$
v(x, b) = \frac{b}{12} (x^{4} - a^{3} x)
$$
所以通解应该满足
$$
w(x, 0) = 0, \qquad w(x, b) = - \frac{b}{12} x(x^{3} - a^{3})
$$
回带至通解
$$
w(x, y) = \sum_{n = 1}^{\infty} \sin(\omega_{n} x) (A_{n} \sinh(\omega_{n} y) + B_{n} \cosh(\omega_{n} y))
$$
由于 $w(x, 0) = 0$

所以 $B_{n} = 0$

$$
w(x, y) = \sum_{n = 1}^{\infty} A_{n} \sin(\omega_{n} x) \sinh(\omega_{n} y)
$$

$$
\sum_{n = 1}^{\infty} A_{n} \sinh(\omega_{n} b) \sin(\omega_{n} x) =  - \frac{b}{12} x(x^{3} - a^{3})
$$

利用正交性确定系数
$$
A_{n} = - \frac{b}{6 a \sinh(\omega_{n} b)} \int_{0}^{a} x (x^{3} - a^{3}) \sin(\omega_{n} x) dx \\
= - \frac{2b}{ a \sinh(\omega_{n} b)}\left(\dfrac{a^{5} \left(-1\right)^{n}}{n^{3} \pi^{3}} + \dfrac{2 a^{5}}{n^{5} \pi^{5}} \left(1 - \left(-1\right)^{n}\right)\right)
$$
所以解为
$$
u(x, y) = v(x, y) + w(x, y) \\
= \frac{1}{12} x^{4}y - \frac{1}{12} a^{3} xy- \sum_{n = 1}^{\infty} \frac{2a^{4}b}{ \sinh(\frac{n \pi}{a} b)}\left(\dfrac{\left(-1\right)^{n}}{n^{3} \pi^{3}} + \dfrac{2}{n^{5} \pi^{5}} \left(1 - \left(-1\right)^{n}\right)\right) \sin(\frac{n \pi}{a} x) \sinh(\frac{n \pi}{a} y)
$$
或者可以写成一种更对称的等价形式（这是直接猜的形式再待定系数得到的解）
$$
u(x, y) = \sum_{m=1}^{\infty} \sum_{n=1}^{\infty} \frac{4 a^2 b (-1)^n}{n\pi^3 \left( \frac{m^2}{a^2} + \frac{n^2}{b^2} \right)} \left[ \frac{1}{m} (-1)^m + \frac{2}{m^3 \pi^2} \left( (-1)^m - 1 \right) \right] \sin\left(\frac{m\pi x}{a}\right) \sin\left(\frac{n\pi y}{b}\right)
$$

