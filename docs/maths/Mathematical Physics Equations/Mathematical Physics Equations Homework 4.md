# 数学物理方程 第4次作业

Chasse_neige

7.求解
$$
\begin{gathered}
\frac{\partial u}{\partial t}-\kappa \frac{\partial^{2} u}{\partial x^{2}}=0 \\
\left.u\right|_{x=0}=0, \quad\left.u\right|_{x=l}=A \sin \omega t \\
\left.u\right|_{t=0}=0
\end{gathered}
$$

考虑解的分解
$$
u(x, t) = w(x, t) + v(x, t)
$$
其中 $v(x, t)$ 满足
$$
\left. v \right|_{x = 0} = 0, \quad \left. v \right|_{x = l} = A \sin \omega t
$$
带入特解
$$
v(x, t) = A \frac{x}{l} \sin \omega t
$$
所以 $w(x, t)$ 满足
$$
\pdv{w}{t} - \kappa \pdv{w}{x^{2}}{} = - \omega A \frac{x}{l} \cos \omega t \\
\left. w \right|_{x = 0} = 0, \quad \left. w \right|_{x = l} = 0 \\
\left. w \right|_{t = 0} = 0
$$
对于这个方程，我们直接使用特征函数展开。特征函数为
$$
E_{n} = \sin(\frac{n \pi}{l} x)
$$
右侧函数用特征函数展开的系数为
$$
c_{n} = \frac{2}{l} \int_{0}^{l} \omega A \frac{x}{l} \cos \omega t  \sin \omega_{n} x \, \dd x \\ =- \frac{2 \omega A}{n \pi} \cos \omega t \int_{0}^{n \pi} \frac{x}{n \pi} \sin x \, \dd x \\ = (-1)^{n} \frac{2 \omega A}{n \pi} \cos \omega t
$$
所以微分方程化为
$$
\pdv{w}{t} - \kappa \pdv{w}{x^{2}}{} = \sum_{n = 1}^{\infty} (-1)^{n} \frac{2 \omega A}{n \pi} \cos \omega t \sin \omega_{n} x
$$
假设 $w_{n} (x, t) = (C_{n} \sin \omega t + D_{n} \cos \omega t) \sin \omega_{n} t$

待定系数得到
$$
C_{n} \omega +  D_{n} \kappa \omega_{n}^{2} = (-1)^{n} \frac{2 \omega A}{n \pi} \\
- D_{n} \omega + C_{n} \kappa \omega_{n}^{2} = 0
$$
解得
$$
C_{n} = \frac{(-1)^{n} 2 \omega^{2} A}{n \pi (\omega^{2} + \kappa^{2} \frac{n^{4} \pi^{4}}{l^{4}})}  \\
D_{n} = \frac{(-1)^{n} 2 \omega \kappa \frac{n^{2} \pi^{2}}{l^{2}} A}{n \pi (\omega^{2} + \kappa^{2} \frac{n^{4} \pi^{4}}{l^{4}})}
$$
这是特解，再根据初始条件确定该方程的通解
$$
w(x, t) = \sum_{n = 1}^{\infty} \frac{(-1)^{n} 2 \omega A}{n \pi \left(\omega^{2} + \kappa^{2} \frac{n^{4} \pi^{4}}{l^{4}}\right)} (\omega \sin \omega t + \kappa \frac{n^{2} \pi^{2}}{l^{2}} \cos \omega t) \sin (\frac{n \pi}{l} x) + \sum_{n = 0}^{\infty} D_{n} e^{- \kappa \omega_{n}^{2} t} \sin \frac{n \pi}{l} x
$$
带入 $\left. w \right|_{t = 0} = 0$ 

所以 $D_{n}$ 满足
$$
D_{n} = - \frac{(-1)^{n} 2 \omega A}{n \pi \left(\omega^{2} + \kappa^{2} \frac{n^{4} \pi^{4}}{l^{4}}\right)} \kappa \frac{n^{2} \pi^{2}}{l^{2}}
$$
所以原方程的解为
$$
u(x, t) = \frac{x}{l} A \sin \omega t +  \sum_{n = 1}^{\infty} \frac{(-1)^{n} 2 \omega A}{n \pi \left(\omega^{2} + \kappa^{2} \frac{n^{4} \pi^{4}}{l^{4}}\right)} (\omega \sin \omega t + \kappa \frac{n^{2} \pi^{2}}{l^{2}} \cos \omega t - \kappa \frac{n^{2} \pi^{2}}{l^{2}} e^{- \kappa \frac{n^{2} \pi^{2}}{l^{2}} t} ) \sin (\frac{n \pi}{l} x)
$$
8.求解如下定解问题
$$
\begin{gathered}
\frac{\partial^{2} u}{\partial t^{2}}+2 \beta \frac{\partial u}{\partial x}- \alpha^{2} \frac{\partial^{2} u}{\partial x^{2}}=0 \\
\left.u\right|_{x=0}=0, \quad\left.u\right|_{x=l}=0 \\
\left.u\right|_{t=0}=\varphi(x), \quad \left.\frac{\partial u}{\partial t}\right|_{t=0}=\psi(x)
\end{gathered}
$$

通过变量变换 $u(x,t) = e^{\frac{\beta}{\alpha^{2}} x} v(x,t)$ 简化方程
$$
\frac{\partial^{2} v}{\partial t^{2}} - \alpha^{2} \frac{\partial^{2} v}{\partial x^{2}} + \frac{\beta^{2}}{\alpha^{2}} v = 0
$$

边界条件为 $v(0,t) = 0$, $v(l,t) = 0$，初始条件变为 $v(x,0) = e^{-\frac{\beta}{\alpha^{2}} x} \varphi(x)$, $\frac{\partial v}{\partial t}(x,0) = e^{-\frac{\beta}{\alpha^{2}} x} \psi(x)$

使用分离变量法求解 $v(x,t)$

$$
v(x,t) = \sum_{n=1}^{\infty} \sin \frac{n \pi x}{l} \left( A_n \cos \omega_n t + B_n \sin \omega_n t \right)
$$

其中 $\omega_n = \sqrt{ \alpha^{2} \left( \frac{n \pi}{l} \right)^2 + \frac{\beta^{2}}{\alpha^{2}} }$，系数 $A_n$ 和 $B_n$ 由初始条件确定

$$
A_n = \frac{2}{l} \int_{0}^{l} e^{-\frac{\beta}{\alpha^{2}} x} \varphi(x) \sin \frac{n \pi x}{l} \, dx
$$

$$
B_n = \frac{2}{l \omega_n} \int_{0}^{l} e^{-\frac{\beta}{\alpha^{2}} x} \psi(x) \sin \frac{n \pi x}{l} \, dx
$$

最终，原问题的解为：

$$
u(x,t) = e^{\frac{\beta}{\alpha^{2}} x} \sum_{n=1}^{\infty} \sin \frac{n \pi x}{l} \left( A_n \cos \omega_n t + B_n \sin \omega_n t \right)
$$

其中 $\omega_n$, $A_n$, $B_n$ 如上所示

12.求解如下热传导问题的稳定解
$$
\begin{gathered}
\frac{\partial u}{\partial t}-\kappa \frac{\partial^{2} u}{\partial x^{2}}=0 \\
u \mid_{x=0}=A \cos \omega t, \quad u \mid_{x \rightarrow \infty} \text{有界}
\end{gathered}
$$
齐次化边界条件，另 $u(x, t) = w(x, t) + v(x, t)$

引入 $v(x, t) = A \cos \omega t$，此时 $w(x, t)$ 满足
$$
\pdv{w}{t} - \kappa \pdv{w}{x^{2}}{} = A \omega \sin \omega t
$$
作时域上的FT
$$
is \mathcal{W} (x, s) - \kappa \pdv{\mathcal{W}(x, s)}{x^{2}}{} = - i \pi A \omega \delta(\omega - s) + i \pi A \omega \delta(\omega + s)
$$
对于 $\omega \neq s$，齐次方程存在解
$$
\mathcal{W}(x, s) = F(x) \delta(s - \omega) + G(x) \delta(s + \omega)
$$
1. 对于 $s = \omega$
   $$
   i \omega F(x) - \kappa F''(x) = -i \pi A \omega
   $$
   重写为：
   $$
   F''(x) - \frac{i \omega}{\kappa} F(x) = \frac{i \pi A \omega}{\kappa} \tag{2}
   $$

2. 对于 $s = -\omega$
   $$
   -i \omega G(x) - \kappa G''(x) = i \pi A \omega
   $$
   重写为：
   $$
   G''(x) + \frac{i \omega}{\kappa} G(x) = -\frac{i \pi A \omega}{\kappa} \tag{3}
   $$

边界条件 
$$
F(0) = 0, \quad G(0) = 0
$$
同时，有界性条件要求 $F(x)$ 和 $G(x)$ 在 $x \to \infty$ 时有界。

齐次解： $F(x) = C e^{-\sqrt{\frac{i \omega}{\kappa}} x}$，其中 $\sqrt{\frac{i \omega}{\kappa}} = \sqrt{\frac{\omega}{2 \kappa}} (1 + i)$，确保衰减。特解
$$
0 - \frac{i \omega}{\kappa} K = \frac{i \pi A \omega}{\kappa} \implies K = -\pi A
$$
所以 $F(x) = C e^{-\sqrt{\frac{i \omega}{\kappa}} x} - \pi A$

利用 $F(0) = 0$
$$
C - \pi A = 0 \implies C = \pi A
$$
所以
$$
F(x) = \pi A \left( e^{-\sqrt{\frac{i \omega}{\kappa}} x} - 1 \right)
$$
对于另一部分

特解：设 $G = L$，代入方程
$$
0 + \frac{i \omega}{\kappa} L = -\frac{i \pi A \omega}{\kappa} \implies L = -\pi A
$$
所以 $G(x) = D e^{-\sqrt{-\frac{i \omega}{\kappa}} x} - \pi A$

利用 $G(0) = 0$
$$
D - \pi A = 0 \implies D = \pi A
$$
所以
$$
G(x) = \pi A \left( e^{-\sqrt{-\frac{i \omega}{\kappa}} x} - 1 \right)
$$

逆傅里叶变换
$$
w(x, t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \mathcal{W}(x, s) e^{i s t} \, ds = \frac{1}{2\pi} \left[ F(x) e^{i \omega t} + G(x) e^{-i \omega t} \right]
$$
代入 $F(x)$ 和 $G(x)$
$$
w(x, t) = \frac{1}{2\pi} \left[ \pi A \left( e^{-\sqrt{\frac{i \omega}{\kappa}} x} - 1 \right) e^{i \omega t} + \pi A \left( e^{-\sqrt{-\frac{i \omega}{\kappa}} x} - 1 \right) e^{-i \omega t} \right]
$$
简化
$$
w(x, t) = \frac{A}{2} \left( e^{-\sqrt{\frac{i \omega}{\kappa}} x} - 1 \right) e^{i \omega t} + \frac{A}{2} \left( e^{-\sqrt{-\frac{i \omega}{\kappa}} x} - 1 \right) e^{-i \omega t}
$$
将指数项写为实部形式
$$
e^{-\sqrt{\frac{i \omega}{\kappa}} x} = e^{-\sqrt{\frac{\omega}{2 \kappa}} x} e^{-i \sqrt{\frac{\omega}{2 \kappa}} x}, \quad e^{-\sqrt{-\frac{i \omega}{\kappa}} x} = e^{-\sqrt{\frac{\omega}{2 \kappa}} x} e^{i \sqrt{\frac{\omega}{2 \kappa}} x}
$$
所以
$$
w(x, t) = \frac{A}{2} e^{-\sqrt{\frac{\omega}{2 \kappa}} x} \left[ e^{i (\omega t - \sqrt{\frac{\omega}{2 \kappa}} x)} + e^{-i (\omega t - \sqrt{\frac{\omega}{2 \kappa}} x)} \right] - \frac{A}{2} \left( e^{i \omega t} + e^{-i \omega t} \right)
$$
$$
w(x, t) = A e^{-\sqrt{\frac{\omega}{2 \kappa}} x} \cos \left( \omega t - \sqrt{\frac{\omega}{2 \kappa}} x \right) - A \cos \omega t
$$



由于 $u(x, t) = w(x, t) + v(x, t) = w(x, t) + A \cos \omega t$
$$
u(x, t) = A e^{-\sqrt{\frac{\omega}{2 \kappa}} x} \cos \left( \omega t - \sqrt{\frac{\omega}{2 \kappa}} x \right)
$$



