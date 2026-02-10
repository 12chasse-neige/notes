# 数学物理方程 第14次作业

Chasse_neige

1.利用 Laplace 变换求解受迫振动问题
$$
\left\{ \begin{array}{l} \ddot{x} + 2\beta\dot{x} + \omega_0^2x = H\cos\omega t \\ x(0) = 0, \quad \dot{x}(0) = 0 \end{array} \right.
$$

首先应用 Laplace 变换。设 $X(s) = \mathscr{L}\{x(t)\}$，利用变换性质 $\mathcal{L}\{\dot{x}(t)\} = sX(s) - x(0)$ 和 $\mathcal{L}\{\ddot{x}(t)\} = s^2X(s) - sx(0) - \dot{x}(0)$，以及 $\mathscr{L}\{\cos\omega t\} = \frac{s}{s^2 + \omega^2}$

$$
s^2X(s) + 2\beta s X(s) + \omega_0^2 X(s) = H \frac{s}{s^2 + \omega^2}
$$

所以

$$
(s^2 + 2\beta s + \omega_0^2) X(s) = H \frac{s}{s^2 + \omega^2}
$$

解出 $X(s)$

$$
X(s) = \frac{H s}{(s^2 + \omega^2)(s^2 + 2\beta s + \omega_0^2)}
$$

为求逆变换，进行部分分式分解。设分母 $s^2 + 2\beta s + \omega_0^2 = (s+\beta)^2 + \omega_1^2$，其中 $\omega_1^2 = \omega_0^2 - \beta^2$，假设 $\omega_0 > \beta$。将 $X(s)$ 写成：

$$
X(s) = \frac{A s + B}{s^2 + \omega^2} + \frac{C s + D}{s^2 + 2\beta s + \omega_0^2}
$$

通过比较系数，解得：

$$
A = H \frac{\omega_0^2 - \omega^2}{\Delta}, \quad B = H \frac{2\beta\omega^2}{\Delta}, \quad C = -H \frac{\omega_0^2 - \omega^2}{\Delta}, \quad D = -H \frac{2\beta\omega_0^2}{\Delta}
$$

其中 $\Delta = (\omega_0^2 - \omega^2)^2 + 4\beta^2\omega^2$。现在对每一项进行逆 Laplace 变换。第一项

$$
\mathscr{L}^{-1}\left\{ \frac{A s + B}{s^2 + \omega^2} \right\} = A\cos\omega t + \frac{B}{\omega}\sin\omega t
$$

第二项改写为

$$
\frac{C s + D}{s^2 + 2\beta s + \omega_0^2} = \frac{C(s+\beta)}{(s+\beta)^2 + \omega_1^2} + \frac{D - C\beta}{(s+\beta)^2 + \omega_1^2}
$$

逆变换为

$$
\mathscr{L}^{-1}\left\{ \frac{C(s+\beta)}{(s+\beta)^2 + \omega_1^2} \right\} = C e^{-\beta t}\cos\omega_1 t, \quad \mathscr{L}^{-1}\left\{ \frac{1}{(s+\beta)^2 + \omega_1^2} \right\} = \frac{1}{\omega_1} e^{-\beta t}\sin\omega_1 t
$$

所以第二项逆变换为 $C e^{-\beta t}\cos\omega_1 t + \frac{D - C\beta}{\omega_1} e^{-\beta t}\sin\omega_1 t$

$$
x(t) = H \frac{\omega_0^2 - \omega^2}{\Delta} \cos\omega t + H \frac{2\beta\omega}{\Delta} \sin\omega t - H e^{-\beta t} \left[ \frac{\omega_0^2 - \omega^2}{\Delta} \cos\omega_1 t + \beta \frac{\omega_0^2 + \omega^2}{\omega_1 \Delta} \sin\omega_1 t \right]
$$

即
$$
x(t) = H \frac{\omega_0^2 - \omega^2}{(\omega_0^2 - \omega^2)^2 + 4\beta^2\omega^2} \cos\omega t + H \frac{2\beta\omega}{(\omega_0^2 - \omega^2)^2 + 4\beta^2\omega^2} \sin\omega t \\
- H e^{-\beta t} \left( \frac{\omega_0^2 - \omega^2}{(\omega_0^2 - \omega^2)^2 + 4\beta^2\omega^2} \cos\sqrt{\omega_{0}^{2} - \beta^{2}} t + \beta \frac{\omega_0^2 + \omega^2}{(\omega_{0}^{2} - \beta^{2}) ((\omega_0^2 - \omega^2)^2 + 4\beta^2\omega^2)} \sin\sqrt{\omega_{0}^{2} - \beta^{2}} t \right)
$$
2.利用 Laplace 变换求解半无界问题
$$
\left\{ \begin{array}{l} \frac{\partial u}{\partial t} - \kappa\frac{\partial^2 u}{\partial x^2} = 0, \qquad x > 0, t > 0 \\ u|_{x=0} = u_0, \quad u|_{x\to\infty} \text{有界}, \quad t > 0 \\ u|_{t=0} = 0, \qquad \qquad \qquad \quad x > 0 \end{array} \right.
$$

对时间 $t$ 进行 Laplace 变换，设 $U(x,s) = \mathscr{L}\{u(x,t)\}$

$$
s U(x,s) - \kappa \frac{d^2 U}{dx^2} = 0
$$

整理得关于 $x$ 的常微分方程：

$$
\frac{d^2 U}{dx^2} - \frac{s}{\kappa} U = 0
$$

通解为 $U(x,s) = A(s) e^{\sqrt{\frac{s}{\kappa}} x} + B(s) e^{-\sqrt{\frac{s}{\kappa}} x}$。由有界性条件，当 $x \to \infty$ 时，$U(x,s)$ 有界，由于 $\text{Re}(s) > 0$，指数增长项需消除，故 $A(s) = 0$，所以：

$$
U(x,s) = B(s) e^{-\sqrt{\frac{s}{\kappa}} x}
$$

利用边界条件 $u(0,t) = u_0$，其 Laplace 变换为 $U(0,s) = \frac{u_0}{s}$，代入得 $B(s) = \frac{u_0}{s}$，因此：

$$
U(x,s) = \frac{u_0}{s} e^{-\sqrt{\frac{s}{\kappa}} x}
$$

为求逆变换，设 $a = \frac{x}{\sqrt{\kappa}}$，则 $U(x,s) = u_0 \frac{1}{s} e^{-a\sqrt{s}}$。利用标准 Laplace 逆变换 $\mathscr{L}^{-1}\{ \frac{1}{s} e^{-a\sqrt{s}} \} = \text{erfc}\left( \frac{a}{2\sqrt{t}} \right)$，得到

$$
u(x,t) = u_0 \, \text{erfc}\left( \frac{x}{2\sqrt{\kappa t}} \right)
$$

4.利用积分变换方法求解一维无界弦上的振动问题
$$
\left\{\begin{array}{l}\frac{\partial^{2} u}{\partial t^{2}}-a^{2} \frac{\partial^{2} u}{\partial x^{2}}=f(x, t) \\ u \mid_{t=0}=\phi(x), \quad \left.\frac{\partial u}{\partial t}\right|_{t=0}=\psi(x)\end{array}\right.
$$

使用傅里叶变换，关于空间变量 $x$，定义 $\hat{u}(k,t) = \int_{-\infty}^{\infty} u(x,t) e^{-ikx} dx$。对方程进行傅里叶变换，利用性质 $\mathscr{F}\{\frac{\partial^2 u}{\partial x^2}\} = -k^2 \hat{u}(k,t)$，$\mathscr{F}\{\frac{\partial^2 u}{\partial t^2}\} = \frac{\partial^2 \hat{u}}{\partial t^2}$，以及 $\mathscr{F}\{f(x,t)\} = \hat{f}(k,t)$，得到：

$$
\dv[2]{\hat{u}}{t} + a^2 k^2 \hat{u} = \hat{f}(k,t)
$$

这是一个关于 $t$ 的二阶常微分方程，参数为 $k$。初始条件变换为 $\hat{u}(k,0) = \hat{\phi}(k)$，$\frac{\partial \hat{u}}{\partial t}(k,0) = \hat{\psi}(k)$。解此非齐次方程，齐次解为 $\hat{u}_h(k,t) = C_1(k) \cos(akt) + C_2(k) \sin(akt)$，得到

$$
\hat{u}(k,t) = \hat{\phi}(k) \cos(akt) + \frac{\hat{\psi}(k)}{ak} \sin(akt) + \frac{1}{ak} \int_0^t \hat{f}(k,\tau) \sin(ak(t-\tau)) d\tau
$$

进行逆傅里叶变换以得到 $u(x,t)$

$$
u(x,t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \hat{u}(k,t) e^{ikx} dk
$$

代入 $\hat{u}(k,t)$ 并化简。利用傅里叶逆变换的性质，第一项

$$
\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \hat{\phi}(k) \cos(akt) e^{ikx} dk = \frac{1}{2} [\phi(x+at) + \phi(x-at)]
$$

第二项

$$
\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \frac{\hat{\psi}(k)}{ak} \sin(akt) e^{ikx} dk = \frac{1}{2a} \int_{x-at}^{x+at} \psi(\xi) d\xi
$$

第三项通过交换积分顺序并利用卷积定理，得到

$$
\frac{1}{2a} \int_0^t \int_{x-a(t-\tau)}^{x+a(t-\tau)} f(\xi,\tau) d\xi d\tau
$$

因此，最终解为

$$
u(x,t) = \frac{1}{2} [\phi(x+at) + \phi(x-at)] + \frac{1}{2a} \int_{x-at}^{x+at} \psi(\xi) d\xi + \frac{1}{2a} \int_0^t \int_{x-a(t-\tau)}^{x+a(t-\tau)} f(\xi,\tau) d\xi d\tau
$$

5.利用积分变换方法求解二维无界平面上的自由振动问题
$$
\left\{\begin{array}{l}\frac{\partial^{2} u}{\partial t^{2}}-a^{2}\left(\frac{\partial^{2} u}{\partial x^{2}}+\frac{\partial^{2} u}{\partial y^{2}}\right)=0 \\ u \mid_{t=0}=\phi(x, y), \quad \left.\frac{\partial u}{\partial t}\right|_{t=0}=\psi(x, y)\end{array}\right.
$$
利用
$$
\hat{u} (\vec{k}, t) = \frac{1}{(2 \pi)^{\frac{3}{2}}} \int u (\vec{r}, t) e^{-i \vec{k} \cdot \vec{r}} \, \dd[3]{r}
$$
 变换后的方程为
$$
\dv[2]{\hat{u}}{t} + a^{2} k^{2} \hat{u} = 0
$$
本征函数为
$$
\hat{u} (\vec{k}, t) = A(\vec{k}) \cos (a|\vec{k}| t) + B(\vec{k}) \sin(a|\vec{k}| t)
$$
初始条件在变换后为
$$
\Phi(\vec{k}) = \mathscr{F}[u (\vec{x}, 0)]
$$

$$
\Psi(\vec{k}) = \mathscr{F} [\pdv{u}{t}(\vec{x}, 0)]
$$

所以解为
$$
\hat{u} (\vec{k}, t) = \Phi(\vec{k}) \cos(ak t) + \frac{\Psi(\vec{k})}{ak} \sin(ak t)
$$
逆变换，利用卷积定理
$$
\mathscr{F}^{-1}[\Psi(\vec{k}) \frac{\sin (akt)}{ak}] = \frac{1}{(2 \pi)^{\frac{3}{2}}} \int \psi (\vec{\xi}) \frac{\sqrt{2 \pi} \delta(|\vec{r} - \vec{\xi}| - at)}{2a |\vec{r} - \vec{\xi}|} \, \dd[3]{\xi} \\ =
\frac{1}{2 \pi a} \iint_{D} \frac{\psi(x', y')}{\sqrt{(x - x')^{2} + (y - y')^{2}}} \, \dd{x'} \dd{y'}
$$
另一项
$$
\mathscr{F}^{-1}[\Psi(\vec{k}) \cos (akt)] = \pdv{}{t} \frac{1}{2 \pi a} \iint_{D} \frac{\phi(x', y')}{\sqrt{(x - x')^{2} + (y - y')^{2}}} \, \dd{x'} \dd{y'}
$$
相加得到
$$
u(x,y,t) = \frac{1}{2\pi a} \iint_{D} \frac{\psi(x',y')}{\sqrt{a^2 t^2 - (x-x')^2 - (y-y')^2}} \, dx' dy' \\
+ \frac{1}{2 \pi a} \frac{\partial}{\partial t} \iint_{D} \frac{\phi(x',y')}{\sqrt{a^2 t^2 - (x-x')^2 - (y-y')^2}} \, dx' dy'
$$
其中积分区域 $D = \{ (x',y') : (x-x')^2 + (y-y')^2 \leq a^2 t^2 \}$
