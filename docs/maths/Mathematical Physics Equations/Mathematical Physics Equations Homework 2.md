# 数学物理方程 第2次作业

Chasse_neige

### A2

1. 求解下列线性齐次偏微分方程的通解

(a) 
$$
\frac{\partial^{2} u}{\partial x^{2}} - 2 \frac{\partial^{2} u}{\partial x \partial y} - 3 \frac{\partial^{2} u}{\partial y^{2}} = 0
$$

$$
(D_{x}^{2} - 2 D_{x} D_{y} - 3 D_{y}^{2}) u = 0
$$

$$
(D_{x} + D_{y}) (D_{x} - 3 D_{y}) u = 0
$$

$$
u = f (x - y) + g (3x + y)
$$

(b) 
$$
\frac{\partial^{2} u}{\partial x^{2}} - \frac{\partial^{2} u}{\partial x \partial y} = 0
$$

$$
(D_{x}^{2} - D_{x} D_{y}) u = 0
$$

$$
D_{x} (D_{x} - D_{y}) u = 0
$$

$$
u = f (y) g (x + y)
$$

(c) 
$$
\frac{\partial^{2} u}{\partial t^{2}} - \frac{c^{2}}{r^{2}} \frac{\partial}{\partial r} \left( r^{2} \frac{\partial u}{\partial r} \right) = 0, \quad c \neq 0
$$

(提示: $\frac{1}{r^{2}} \frac{\partial}{\partial r} \left( r^{2} \frac{\partial u}{\partial r} \right) = \frac{1}{r} \frac{\partial^{2}}{\partial r^{2}} (ru)$)
$$
(D_{t}^{2} - c^{2} D_{r}^{2}) (ru) = 0
$$

$$
(D_{t} - c D_{r}) (D_{t} + c D_{r}) (ru) = 0
$$


$$
u = \frac{1}{r} (f (r + ct) + g (r - ct))
$$

### A3

1. 求解细杆的导热问题, 杆长为 $l$, 两端均保持零度, 初始温度为 $u|_{t=0} = ax(l - x)$

热传导方程表示为
$$
\frac{\partial u}{\partial t} = \kappa \frac{\partial^{2} u}{\partial x^{2}}
$$
分离变量
$$
u(x, t) = X(x) T(t)
$$

$$
\frac{1}{T}T' = \frac{\kappa}{x} X'' = - \lambda
$$

解得
$$
T(t)  = e^{- \lambda t}
$$

$$
X(x) = A (\omega) \sin (\omega x) + B (\omega) \cos (\omega x)
$$

其中
$$
\omega = \sqrt{\frac{\lambda}{\kappa}}
$$
由于 $u|_{t=0} = ax(l - x)$

所以 $B (\omega) = 0$

且 $\omega$ 满足
$$
\omega = \frac{n \pi}{l}
$$
所以对应参数 $\omega$ 的分量系数大小为
$$
A(\omega) = \frac{2}{l} \int_{0}^{l} ax (l - x) \sin (\omega x) \, dx = \frac{8a l^{2}}{(2m - 1)^{3} \pi^{3}}
$$
其中 $n = 2m - 1$

所以解为
$$
u (x, t) = \sum_{m = 1}^{\infty} \left( \frac{8a l^{2}}{(2m - 1)^{3} \pi^{3}} \sin (\frac{(2m - 1) \pi}{l} x) \right) e^{- \kappa \frac{(2m - 1)^{2} \pi^{2}}{l^{2}} t}
$$
