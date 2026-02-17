# 数学物理方程 第11次作业

Chasse_neige

1.计算下列积分 
(a)  
$$
\int_{0}^{1} \sqrt{1 - x} \sin(a \sqrt{x}) \, \dd{x},\quad a > 0
$$
作代换 $\sqrt{x} = u$
$$
\int_{0}^{1} \sqrt{1 - x} \sin(a \sqrt{x}) \, \dd{x} = \int_{0}^{1} 2u \sqrt{1 - u^{2}} \sin (au) \, \dd{u} \\ = 
\int_{-1}^{1} u \sqrt{1 - u^{2}} \sin(au) \, \dd{u} = \int_{- \frac{\pi}{2}}^{\frac{\pi}{2}} \cos^{2} \theta \sin \theta \sin(a \sin \theta) \, \dd{\theta} \\ =
\frac{1}{2i} \int_{- \frac{\pi}{2}}^{\frac{\pi}{2}} \cos^{2} \theta \sin \theta \left(e^{i a \sin \theta} - e^{- i a \sin \theta}\right) \, \dd{\theta}
$$
考虑
$$
\int_{- \frac{\pi}{2}}^{\frac{\pi}{2}} \cos^{2} \theta \sin \theta e^{i a \sin \theta}  \, \dd{\theta} = \left. \frac{1}{ia} \cos \theta \sin \theta e^{ia \sin \theta} \right|_{- \frac{\pi}{2}}^{\frac{\pi}{2}} - \frac{1}{ia} \int_{- \frac{\pi}{2}}^{\frac{\pi}{2}} (2 \cos^{2} \theta - 1) e^{ia \sin \theta} \, \dd{\theta} \\ =
\frac{i}{2a} \int_{-\pi}^{\pi} \cos 2 \theta e^{ia \sin \theta} \, \dd{\theta} \\ =
\frac{i}{4a} \int_{-\pi}^{\pi} e^{ia \sin \theta + i 2 \theta} + e^{ia \sin \theta - i 2 \theta} \, \dd{\theta} \\ = 
\frac{i \pi}{a} J_{2} (a)
$$
同理


$$
\int_{- \frac{\pi}{2}}^{\frac{\pi}{2}} \cos^{2} \theta \sin \theta e^{- i a \sin \theta}  \, \dd{\theta} = - \left. \frac{1}{ia} \cos \theta \sin \theta e^{- ia \sin \theta} \right|_{- \frac{\pi}{2}}^{\frac{\pi}{2}} + \frac{1}{ia} \int_{- \frac{\pi}{2}}^{\frac{\pi}{2}} (2 \cos^{2} \theta - 1) e^{- ia \sin \theta} \, \dd{\theta} \\ =
- \frac{i}{2a} \int_{-\pi}^{\pi} \cos 2 \theta e^{-ia \sin \theta} \, \dd{\theta} \\ =
- \frac{i}{4a} \int_{-\pi}^{\pi} e^{- ia \sin \theta + i 2 \theta} + e^{- ia \sin \theta - i 2 \theta} \, \dd{\theta} \\ = 
- \frac{i \pi}{a} J_{2} (a)
$$
所以
$$
\frac{1}{2i} \int_{- \frac{\pi}{2}}^{\frac{\pi}{2}} \cos^{2} \theta \sin \theta \left(e^{i a \sin \theta} - e^{- i a \sin \theta}\right) \, \dd{\theta} = \frac{\pi}{a} J_{2} (a)
$$


2.利用生成函数证明下列等式 
(a)  
$$
\cos x=J_{0}(x)-2 J_{2}(x)+2 J_{4}(x)-2 J_{6}(x)+\cdots
$$
$$
\sin x=2 J_{1}(x)-2 J_{3}(x)+2 J_{5}(x)-2 J_{7}(x)+\cdots
$$
证明：
$$
e^{ix} = \sum_{k = - \infty}^{\infty} J_{k} (x) (i)^{k}
$$

$$
e^{-i x} = \sum_{k = - \infty}^{\infty} J_{k} (x) (-i)^{k}
$$

所以
$$
\cos x = \frac{1}{2}(e^{ix} + e^{- ix}) = J_{0}(x)-2 J_{2}(x)+2 J_{4}(x)-2 J_{6}(x)+\cdots
$$

$$
\sin x = \frac{1}{2i} (e^{ix} - e^{- ix}) = 2 J_{1}(x)-2 J_{3}(x)+2 J_{5}(x)-2 J_{7}(x)+\cdots
$$

(b)  
$$
1=J_{0}^{2}(x)+2\left[J_{1}^{2}(x)+J_{2}^{2}(x)+\cdots\right]
$$

$$
1 = e^{ix} e^{-ix} = \left(\sum_{k = - \infty}^{\infty} J_{k} (x) (i)^{k} \right) \left(\sum_{k = - \infty}^{\infty} J_{k} (x) (-i)^{k} \right) = \sum_{k = - \infty}^{\infty} J_{k}^{2} (x) = J_{0}^{2}(x)+2\left[J_{1}^{2}(x)+J_{2}^{2}(x)+\cdots\right]
$$

3.计算如下积分 
(a)  
$$
\int_{0}^{x} x^{-1} \mathrm{~J}_{4}(x) \mathrm{d} x, \quad \int_{0}^{x} x^{3} \mathrm{~J}_{0}(x) \mathrm{d} x
$$
$$
\int_{0}^{x} x^{-1} J_{4} (x) \, \dd{x} = \int_{0}^{x} \frac{1}{8} (J_{3} (x) + J_{5} (x)) \, \dd{x} = \frac{1}{8} \left(2 J_{4}(x) + 2 \int_{0}^{x} J_{5} (x) \, \dd{x} \right)
$$

利用递推关系
$$
J_{5} = J_{3} - 2 J'_{4} = J_{1} - 2J'_{2} - 2 J'_{4}
$$
所以
$$
\int_{0}^{x} J_{5} (x) \, \dd{x} =  \int_{0}^{x} J_{1} (x) \, \dd{x} - 2 J_{2} (x) - 2J_{4} (x)
$$

$$
\int_{0}^{x} J_{1} (x) \, \dd{x} = - \int_{0}^{x} J'_{0} (x) \, \dd{x} = - (J_{0} (x) - 1)
$$

所以
$$
\int_{0}^{x} x^{-1} J_{4} (x) \, \dd{x} = \frac{1}{8} (2(1 - J_{0} (x)) - 4J_{2} (x) - 2J_{4} (x)) = \frac{1}{4} (1 - J_{0} (x) - 2 J_{2} (x) - J_{4} (x))
$$

$$
\int_{0}^{x} x^{3} J_{0} (x) \, \dd{x} = \int_{0}^{x} 2 x^{2} J_{1} (x) - x^{3} J_{2} (x) \, \dd{x} \\ = 
\int_{0}^{x} 2 \dv{}{x}(x^{2} J_{2} (x)) - \dv{}{x} (x^{3} J_{3} (x)) \, \dd{x} = 2 x^{2} J_{2} (x) - x^{3} J_{3} (x)
$$

(b)  
$$
\int_{0}^{x} \mathrm{~J}_{0}(x) \cos x \mathrm{~d} x, \quad \int_{0}^{x} x^{n} \mathrm{~J}_{n}(x) \cos x \mathrm{~d} x
$$
令  
$$
F(t) = t J_0(t) \cos t + t J_1(t) \sin t
$$
则  
$$
F'(t) = J_0(t) \cos t + t J_0'(t) \cos t - t J_0(t) \sin t + J_1(t) \sin t + t J_1'(t) \sin t + t J_1(t) \cos t \\
= J_0(t) \cos t + t(-J_1(t)) \cos t - t J_0(t) \sin t + J_1(t) \sin t + t\left(J_0(t) - \frac{J_1(t)}{t}\right) \sin t + t J_1(t) \cos t \\
= J_0(t) \cos t - t J_1(t) \cos t - t J_0(t) \sin t + J_1(t) \sin t + t J_0(t) \sin t - J_1(t) \sin t + t J_1(t) \cos t \\
= J_0(t) \cos t
$$

因此  
$$
\int J_0(t) \cos t \, dt = t J_0(t) \cos t + t J_1(t) \sin t + C
$$

所以
$$
\int_0^x J_0(t) \cos t \, dt = \left. t J_0(t) \cos t + t J_1(t) \sin t \right|_0^x = x J_0(x) \cos x + x J_1(x) \sin x.
$$

对于第二个积分，考虑 $\dv{}{x} (x^{n} J_{n} (x)) = x^{n} J_{n - 1} (x)$ ，所以
$$
F(t) = t^{n + 1} J_{n} (t) \cos t + t^{n + 1} J_{n + 1} (t) \sin t
$$

$$
F' (t) = (n + 1)  t^{n} J_{n} (t) \cos t + t^{n + 1} J'_{n} (t) \cos t - t^{n + 1} J_{n} (t) \sin t + t^{n + 1} J_{n} (t) \sin t + t^{n + 1} J_{n + 1} (t) \cos t \\ =
(n + 1)  t^{n} J_{n} (t) \cos t + t^{n + 1} (J'_{n} (t) + J_{n + 1} (t)) \cos t = (n + 1)  t^{n} J_{n} (t) \cos t + \frac{1}{2} t^{n + 1} (J_{n - 1} (t) + J_{n + 1} (t)) \cos t \\ =
(n + 1)  t^{n} J_{n} (t) \cos t + t^{n} J_{n} (t) \cos t = (2n + 1) t^{n} J_{n} (t) \cos t
$$

所以
$$
\int_{0}^{x} x^{n} \mathrm{~J}_{n}(x) \cos x \mathrm{~d} x = \frac{1}{2n + 1} x^{n} J_{n} (x) \cos x
$$
7.求解下列定解问题  
$$
\left\{\begin{array}{l} \frac{\partial u}{\partial t}-\kappa\left[\frac{1}{r} \frac{\partial}{\partial r}\left(r \frac{\partial u}{\partial r}\right)+\frac{1}{r^{2}} \frac{\partial^{2} u}{\partial \varphi^{2}}\right]=0 \\ \left.u\right|_{r=a}=0, \quad\left.u\right|_{t=0}=u_{0} \sin 2 \varphi \end{array}\right.
$$
应用分离变量法
$$
u (r, \varphi, t) = R(r) \Phi (\varphi) T(t)
$$
满足
$$
\dv{}{t} T = - \omega^{2} T
$$

$$
\dv[2]{}{\varphi} \Phi = - \mu \Phi
$$

$$
R'' + \frac{R'}{\rho} + (1 - \frac{\mu}{\rho^{2}}) R = 0
$$

其中
$$
\rho = \sqrt{\frac{\omega^{2}}{\kappa}} r
$$
显然当 $\omega = 0$ 时解不满足初始条件

所以解为
$$
\Phi(\varphi) = \sin 2 \varphi
$$
得到 $\mu = 4$，再利用原点处的有界性，得到
$$
R(r) = B_{2,n} J_{2} (\rho)
$$
带入 $u|_{r = a} = 0$
$$
\omega_{i} = \frac{\mu^{(2)}_{i}}{a} \sqrt{\kappa}
$$
所以本征值问题的解为
$$
u(r, \varphi, t) = \sin 2\varphi \sum_{n=1}^{\infty} B_{2,n} \, J_2\left( \frac{\mu^{(2)}_{n}}{a} r \right) \exp\left( -\kappa \left( \frac{\mu^{(2)}_{n}}{a} \right)^2 t \right)
$$
其系数 $B_{2,n}$ 由初始条件确定
$$
B_{2,n} = \frac{ u_0 \int_0^a r J_2\left( \frac{\mu^{(2)}_{n}}{a} r \right) \mathrm{d}r }{ \int_0^a r \left[ J_2\left( \frac{\mu^{(2)}_{n}}{a} r \right) \right]^2 \mathrm{d}r }
$$

计算积分得系数为
$$
B_{2,n} = \frac{2 u_0 \left[ 2 - 2 J_0(\mu^{(2)}_{n}) - \mu^{(2)}_{n} J_1(\mu^{(2)}_{n}) \right]}{{\mu^{(2)}_{n}}^{2} \left[ J_3(\mu^{(2)}_{n}) \right]^2}
$$

所以最终解为
$$
u(r, \varphi, t) = 2 u_0 \sin 2\varphi \sum_{n=1}^{\infty} \frac{2 - 2 J_0(\mu^{(2)}_{n}) - \mu^{(2)}_{n} J_1(\mu^{(2)}_{n})}{{\mu^{(2)}_{n}}^{2} \left[ J_3(\mu^{(2)}_{n}) \right]^2} J_2\left( \frac{\mu^{(2)}_{n}}{a} r \right) \exp\left( -\kappa \left( \frac{\mu^{(2)}_{n}}{a} \right)^2 t \right)
$$