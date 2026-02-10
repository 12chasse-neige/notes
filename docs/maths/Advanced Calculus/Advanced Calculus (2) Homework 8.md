# 高等微积分（2） 第8次作业

Chasse_neige

1.给定 $0 < a < b, 0 < c < d$，设四条曲线 $xy = a, xy = b, y = cx$ 以及 $y = dx$ 在第一象限内围成的平面区域为 $D$。计算 $D$ 的面积。

作换元
$$
u = xy \\
v = \frac{y}{x}
$$
此时积分区域 $\Phi^{-1} (D)$ 变为 $u \in [a,b], v \in [c,d]$

利用换元公式
$$
S = \iint_{D} dx dy = \iint_{\Phi^{-1} (D)} \begin{vmatrix} y & - \frac{y}{x^{2}} \\ x & \frac{1}{x} \end{vmatrix}^{-1} du dv \\ =
\iint_{\Phi^{-1} (D)} \begin{vmatrix} \sqrt{uv} & - \frac{v}{\sqrt{\frac{u}{v}}} \\ \sqrt{\frac{u}{v}} & \frac{1}{\sqrt{\frac{u}{v}}} \end{vmatrix}^{-1} du dv = \iint_{\Phi^{-1} (D)} \frac{1}{2v} du dv \\ =
\frac{b - a}{2} \ln \frac{d}{c}
$$
2.设四条曲线 $x^2 - y^2 = 1, x^2 - y^2 = 4, \frac{x^2}{4} + y^2 = 1$ 以及 $\frac{x^2}{4} + y^2 = 4$ 在第一象限内围成的平面区域为 $D$。计算积分
$$
\iint_D \frac{xy}{x^2 - y^2} dxdy
$$

作换元
$$
u = x^{2} - y^{2} \\
v = \frac{x^{2}}{4} + y{2}
$$
此时积分区间变为 $\Phi^{-1} (D)$ ，即 $u \in [1,4], v \in [1,4]$            

利用换元公式
$$
\iint_D \frac{xy}{x^2 - y^2} dxdy = \iint_{\Phi^{-1} (D)} (f \circ \Phi) \det (J_{\Phi}) du dv \\ =
\iint_{\Phi^{-1} (D)} \frac{\frac{4}{5} \sqrt{(u + v) (v - \frac{u}{4})}}{u} \begin{vmatrix} \frac{1}{\sqrt{5 (u + v)}} & - \frac{1}{4} \frac{1}{\sqrt{5 (v - \frac{u}{4})}} \\ \frac{1}{\sqrt{5 (u + v)}} & \frac{1}{\sqrt{5 (v - \frac{u}{4})}} \end{vmatrix} du dv \\ =
\iint_{\Phi^{-1} (D)} \frac{1}{5u} du dv = \frac{6}{5} \ln 2
$$
3.给定 $a, b, c > 0$，令
$$
V = \{(x, y, z) | \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} \leq 1, z \geq 0\}
$$
计算三重积分
$$
\iiint_V zdxdydz
$$

作换元
$$
x = a r \sin \theta \cos \phi \\
y = b r \sin \theta \sin \phi \\
z = c r \cos \theta
$$
其中 $r \in [0,1], \theta \in [0, \frac{\pi}{2}] , \phi \in [0, 2 \pi)$

利用换元公式
$$
\iiint_V zdxdydz = \iiint_{\Phi^{-1} (V)} (f \circ \Phi) \det (J_{\Phi}) dr d\theta d\phi \\ =
\iiint_{\Phi^{-1} (V)} c r \cos \theta abc r^{2} \sin \theta dr d \theta d \phi \\ = 
\iiint_{\Phi^{-1} (V)}abc^{2} r^{3} dr \sin \theta \cos \theta d \theta d \phi \\ =
abc^{2} \cdot \frac{1}{4} \cdot \frac{1}{2} \cdot 2 \pi = \frac{\pi}{4} abc^{2}
$$
4.考虑三维区域
$$
V = \{(x, y, z) | x^2 + y^2 + z^2 + xy + yz + zx \leq 1\}
$$
计算 $V$ 的体积 (提示: 把 $V$ 的定义式配方, 然后适当换元)
$$
x^2 + y^2 + z^2 + xy + yz + zx \leq 1  \\
(\frac{\sqrt{2}}{2} x + \frac{\sqrt{2}}{2} y)^{2} + (\frac{\sqrt{2}}{2} y + \frac{\sqrt{2}}{2} z)^{2} + (\frac{\sqrt{2}}{2} x + \frac{\sqrt{2}}{2} z)^{2} \leq 1
$$
所以作换元
$$
u = \frac{\sqrt{2}}{2} y + \frac{\sqrt{2}}{2} z \\
v = \frac{\sqrt{2}}{2} x + \frac{\sqrt{2}}{2} z \\
w = \frac{\sqrt{2}}{2} x + \frac{\sqrt{2}}{2} y
$$
利用换元公式
$$
\iiint_V dxdydz = \iiint_{\Phi^{-1} (V)} (f \circ \Phi) \det (J_{\Phi}) du dv dw \\ =
\iiint_{\Phi^{-1} (V)} \begin{vmatrix} 0 & \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \\
\frac{\sqrt{2}}{2} & 0 & \frac{\sqrt{2}}{2} \\
\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} & 0 \end{vmatrix}^{-1} du dv dw \\ = 
\frac{1}{\frac{\sqrt{2}}{2}} \cdot \frac{4 \pi}{3} = \frac{4 \sqrt{2} \pi}{3}
$$
5.设 $f$ 在矩形区域 $[a, b] \times [c, d]$ 上连续，且有连续的偏导函数 $\frac{\partial f}{\partial x}$。

(1) 证明: 对任何 $x_0 \in [a, b]$，有
$$
\int_c^d f(x_0, y) dy = \int_c^d f(a, y) dy + \int_a^{x_0} dx \int_c^d \frac{\partial f(x, y)}{\partial x} dy
$$

证明

定义函数 $g (x) = f (x, y_{0})$

容易得知
$$
\left. \frac{d}{dx} g (x) \right|_{x = x_{0}} = \left. \frac{\partial f}{\partial x} \right|_{ (x,y) = (x_{0}, y_{0})}
$$
由于偏导数 $\frac{\partial f}{\partial x}$ 连续，所以 $g'$ 连续，对 $g (x)$ 使用一元的 N-L 公式
$$
g (x_{0}) = g (a) + \int_{a}^{x_{0}} g' (x) dx 
$$
所以
$$
f (x_{0}, y)  = f (a, y) + \int_{a}^{x_{0}} \frac{\partial f (x, y)}{\partial x} dx
$$

$$
\int_{c}^{d} f (x_{0}, y) dy = \int_{c}^{d} f(a, y) dy + \int_{c}^{d} dy \int_{a}^{x_{0}} \frac{\partial f (x, y)}{\partial x} dx
$$

由于偏导数 $\frac{\partial f}{\partial x}$ 连续，所以它可积。利用 Fubini 定理
$$
\int_{c}^{d} dy \int_{a}^{x_{0}} \frac{\partial f (x, y)}{\partial x} dx = \int_a^{x_0} dx \int_c^d \frac{\partial f(x, y)}{\partial x} dy
$$
所以
$$
\int_c^d f(x_0, y) dy = \int_c^d f(a, y) dy + \int_a^{x_0} dx \int_c^d \frac{\partial f(x, y)}{\partial x} dy
$$
(2) 对每个 $x \in [a, b]$，定义函数 $g(x) = \int_c^d f(x, y) dy$。证明: $g'(x) = \int_c^d \frac{\partial f(x, y)}{\partial x} dy$。

证明
$$
g' (x)  = \lim_{h \to 0} \frac{g (x + h) - g (x)}{h} = \lim_{h \to 0} \frac{1}{h} \left( \int_{c}^{d} f (x + h, y) dy - \int_{c}^{d} f (x, y) dy \right) \\ = 
\lim_{h \to 0} \int_{c}^{d} \frac{f (x + h, y) - f(x, y)}{h} dy
$$
现在证明积分和极限符号的可交换性

由微分中值定理，存在 $\theta \in [0, 1]$，使得 
$$
\frac{f (x + h, y) - f(x, y)}{h} = \frac{\partial}{\partial x} f (x + \theta h, y)
$$
由于偏导 $\frac{\partial f}{\partial x}$ 在闭区间上连续，所以原函数一定可积
$$
g' (x) = \lim_{h \to 0} \int_{c}^{d} \frac{\partial}{\partial x} f (x + \theta h, y) dy
$$
利用 $\frac{\partial f}{\partial x}$ 的连续性与（1）中的结论
$$
\lim_{h \to 0} \int_{c}^{d} \frac{\partial}{\partial x} f (x + \theta h, y) dy = \int_{c}^{d} \frac{\partial}{\partial x} f (x, y) dy + \lim_{h \to 0} \int_{x}^{x + \theta h} dx \int_{c}^{d} \frac{\partial f}{\partial x} (x, y) dy
$$
二最后一项显然为 $0$ 。所以
$$
g'(x) = \int_c^d \frac{\partial f(x, y)}{\partial x} dy
$$
6.设 $D$ 是 $Oxy$ 平面中的区域，其面积为 $S$。定义以 $D$ 为底面，$(0,0,1)$ 为顶点的锥体为
$$
V = \{(1-t)(u,v,0) + t(0,0,1)|(u,v,0) \in D, t \in [0,1]\}
$$
求 $V$ 的体积，要求答案用 $S$ 表示。
$$
V = \iiint_{V} dx dy dz
$$
现在作如下换元
$$
x = (1 - t) u \\
y = (1 - t) v \\
z = t
$$
且满足 $(u,v,0) \in D, t \in [0,1]$

利用换元公式
$$
V = \iiint_{\Phi^{-1} (V)} \det (J_{\Phi}) du dv dt \\ = 
\iiint_{\Phi^{-1} (V)} \begin{vmatrix} 1 - t & 0 & 0 \\ 0 & 1 - t & 0 \\ -u & -v & 1 \end{vmatrix} du dv dt \\ =
\iiint_{\Phi^{-1} (V)} (1 - t)^{2} du dv dt = \iint_{D} du dv \int_{0}^{1} (1 - t)^{2} dt = \frac{1}{3} S
$$
7.给定非负整数 $a,b,c$。令
$$
Q = \{(x,y,z) \in R^3 | x+y+z \leq 1, x \geq 0, y \geq 0, z \geq 0\}
$$
计算三重积分
$$
\iiint_Q x^ay^bz^c dxdydz
$$
利用 Fubini 定理的推论
$$
\iiint_{Q} x^{a} y^{b} z^{c} dx dy dz = \int_{0}^{1} z^{c} dz \iint_{D_{z}} x^{a} y^{b} dx dy \\ =
\int_{0}^{1} z^{c} dz \int_{0}^{1 - z} y^{b} dy \int_{0}^{1 - z - y} x^{a} dx \\ = 
\int_{0}^{1} z^{c} dz \int_{0}^{1 - z} \frac{1}{1 + a} y^{b} (1 - z -y)^{a + 1} dy \\ =
\frac{1}{a + 1} \int_{0}^{1} z^{c} dz \int_{0}^{1 - z} y^{b} \sum_{n = 0}^{a + 1} C_{a + 1}^{n} (1 - z)^{n} (- y)^{a + 1 - n} dy \\ = 
\frac{1}{a + 1} \int_{0}^{1} z^{c} dz \sum_{n = 0}^{a + 1} C_{a + 1}^{n} (1 - z)^{n} (-1)^{a + 1 - n}  \frac{1}{a + b + 2 - n} (1 - z)^{a + b + 2 - n} \\ =
\frac{1}{a + 1}  \sum_{n = 0}^{a + 1} C_{a + 1}^{n} \frac{(-1)^{a + 1 - n}}{a + b + 2 - n} \int_{0}^{1} z^{c} (1 - z)^{a + b + 2} dz
$$
因为
$$
\int_{0}^{1} z^{c} (1 - z)^{a + b + 2} = \left. \frac{1}{c + 1} z^{c + 1} (1 - z)^{a + b + 2} \right|_{z = 0}^{z = 1} + \frac{a + b + 2}{c + 1} \int_{0}^{1} z^{c + 1} (1 - z)^{a + b + 1} dz \\ = \frac{a + b + 2}{c + 1} \int_{0}^{1} z^{c + 1} (1 - z)^{a + b + 1} dz
$$
一直迭代下去
$$
\int_{0}^{1} z^{c} (1 - z)^{a + b + 2} = \frac{a + b + 2}{c + 1} \cdot \frac{a + b + 1}{c + 2} \cdots  \frac{1}{a + b + c + 2} \int_{0}^{1} z^{a + b + c + 2} dz = \frac{(a + b + 2)! c!}{(a + b + c + 3)!}
$$
所以原积分等于
$$
\iiint_{Q} x^{a} y^{b} z^{c} dx dy dz  \\ =
\sum_{n = 0}^{a + 1} \frac{1}{a + 1}  C_{a + 1}^{n} \frac{(-1)^{a + 1 - n}}{a + b + 2 - n} \frac{(a + b + 2)! c!}{(a + b + c + 3)!} \\ = 
\sum_{n = 0}^{a + 1} \frac{(a + 1)!}{n! (a + 1 - n)!} \frac{(a + b + 2)! c!}{(a + b + c + 3)!} \frac{(-1)^{a + 1 - n}}{(a + 1) (a + b + 2 - n)} \\ =
\frac{a! c! (a + b + 2)!}{(a + b + c + 3)!} \sum_{n = 0}^{a + 1} \frac{(-1)^{n}}{n! (a + 1 - n)! (b + 1 + n)} \\ = 
\frac{a! c!}{(a + b + c + 3)!} \sum_{n = 0}^{a + 1} \frac{(-1)^{n} (b + n)!}{n!} C_{a + b + 2}^{a + 1 - n} \\ = 
\frac{a! b! c!}{(a + b + c + 3)!} \sum_{n = 0}^{a + 1} (-1)^{n} C_{b + n}^{b} C_{a + b + 2}^{b + 1 + n}
$$
在计算最后的求和，注意到
$$
\sum_{k = 0}^{\infty} (-1)^{k} C_{b + k}^{b} x^{k} = \frac{1}{(1 + x)^{b + 1}}
$$

$$
\sum_{l = 0}^{a + b + 2} C_{a + b + 2}^{l} x^{l} = (1 + x)^{a + b + 2}
$$

所以
$$
\sum_{k = 0}^{\infty} \sum_{l = 0}^{a + b + 2} (-1)^{k} C_{b + k}^{b} C_{a + b + 2}^{l} x^{k + l} = \sum_{n = 0}^{\infty}  \sum_{k = \max \{0, n - (a + b + 2) \}}^{n} (-1)^{k} C_{b + k}^{b} C_{a + b + 2}^{n - k} x^{n} = (1 + x)^{a + 1} = \sum_{n = 0}^{a + 1} C_{a + 1}^{n} x^{n}
$$
所以令 $n= a + 1$，对比系数
$$
C_{a + 1}^{a + 1} = \sum_{k = 0}^{a + 1} (-1)^{k} C_{b + k}^{b} C_{a + b + 2}^{a + 1 - k} = 1
$$
所以最终结果为
$$
\iiint_{Q} x^{a} y^{b} z^{c} dx dy dz  = \frac{a! b! c!}{(a + b + c + 3)!}
$$
