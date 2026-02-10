# 数学物理方程 第5次作业

Chasse_neige

1.无限长空心圆柱导体半径为 $a$, 分成两半且相互绝缘, 一半电势为 $V$, 另外一半电势为 $-V$, 求柱内电势分布.

柱内空间满足拉普拉斯方程
$$
\nabla^{2} \phi = 0 \\
\phi(r, 0 ,z) = \phi(r, 2\pi, z) \quad \left. \phi \right|_{r = 0} \text{有界}
$$

$$
\frac{1}{r} \pdv{}{r} (r \pdv{}{r} \phi) + \frac{1}{r^{2}} \pdv{}{\theta^{2}}{} \phi + \pdv{}{z^{2}}{} \phi = 0
$$

直接分离变量
$$
\phi(r, \theta, z) = w(r, \theta) Z(z)
$$
得到
$$
\frac{1}{wr} \pdv{}{r} (r \pdv{}{r} w) + \frac{1}{wr^{2}} \pdv{}{\theta^{2}}{} w = - \frac{1}{Z} \frac{\mathrm{d}^{2}}{\mathrm{d} z^{2}} Z = \lambda
$$
由于问题在 $z$ 方向具有对称性，所以 $\phi$ 不含 $z$ ，得到 $\lambda = 0$。继续分离变量
$$
w(r, \theta) = R(r) \Theta(\theta)
$$

$$
\frac{r}{R} \dv{}{r} (r \dv{}{r} R) = - \frac{1}{\Theta} \frac{\mathrm{d}^{2}}{\mathrm{d} \theta^{2}} \Theta = \alpha
$$

$$
\Theta'' = - \alpha \Theta
$$

$$
r^{2} R'' + r R' = \alpha R
$$

解得特征函数
$$
\Theta(\theta) = A \sin(\sqrt{\alpha} \theta) + B \cos(\sqrt{\alpha} \theta)
$$

$$
R(r) = C r^{\lambda_{+}} + D r^{\lambda_{-}}
$$

其中 $\lambda_{\pm}$ 为特征方程 $\lambda (\lambda - 1) + \lambda = \alpha$ 的解
$$
R(r) = C r^{\sqrt{\alpha}} + D r^{- \sqrt{\alpha}}
$$
由循环边界条件，得到
$$
\sqrt{\alpha} \in \mathbb{Z}
$$
特别的，当 $\sqrt{\alpha} = 0$ 时，径向函数为
$$
R(r) = E + F \ln r
$$
由原点处电势不发散，得到
$$
D = F = 0
$$
所以
$$
\phi(r, \theta) = C + \sum_{n = 1}^{\infty} (A_{n} \sin(n \theta) + B_{n} \cos(n \theta)) r^{n}
$$
不妨假设两半的分界线处为 $\theta = 0$，所以解中只应该存在正弦函数
$$
\phi(r, \theta) = \sum_{n = 1}^{\infty} A_{n } \sin(n \theta) r^{n}
$$
带入边界
$$
\phi(R, \theta) = \begin{cases}
V \quad (0 \leq \theta \leq \pi)\\ 
-V \quad (\pi \leq \theta \leq 2 \pi)
\end{cases}
$$
利用三角函数的正交性确定系数
$$
\pi A_{n} a^{n} = \int_{0}^{\pi} V \sin(n \theta) \, \dd \theta + \int_{\pi}^{2\pi} -V \sin(n \theta) \, \dd \theta \\ =
\frac{V}{n} (1 - (-1)^{n}) + \frac{V}{n} (1 - (-1)^{n}) = \frac{2 V}{n} (1 - (-1)^{n})
$$
得到
$$
A_{n} = \frac{2 V (1 - (-1)^{n})}{\pi n a^{n}}
$$
所以柱内电势分布为
$$
\phi(r, \theta) = \sum_{n = 1}^{\infty} \frac{2 V (1 - (-1)^{n})}{\pi n} \left(\frac{r}{a}\right)^{n} \sin(n \theta) \\ =
\sum_{m = 0}^{\infty} \frac{4 V}{(2m + 1) \pi} \left(\frac{r}{a}\right)^{2m + 1} \sin(2m + 1) \theta
$$
2.试求扇形区域 $0 \leq r \leq a$, $0 \leq \varphi \leq \pi / 3$ 内稳定温度分布. 已知该区域内无热源, 扇形之边保持温度为 0, 弧形变上保持温度为 $f(\phi)$.

由于区域内无热源，在稳定温度分布下热传导方程的形式等价与拉普拉斯方程
$$
\nabla^{2} T = 0 \\
T(r, 0) = T(r, \frac{\pi}{3}) = 0, \quad \left. T \right|_{r = 0} \text{有界}
$$
我们直接把上一问的分离变量解抄过来
$$
\sqrt{\alpha} = 0 : \quad R(r) = E + F \ln r
$$

$$
\sqrt{\alpha}： \quad \Theta(\theta) = A \sin(\sqrt{\alpha} \theta) + B \cos(\sqrt{\alpha} \theta) \\
R(r) = C r^{\sqrt{\alpha}} + D r^{- \sqrt{\alpha}}
$$

带入边界条件
$$
\Theta(0) = \Theta(\frac{\pi}{3}) = 0
$$
得到
$$
\sqrt{\alpha} = 3n \quad (n \in \mathbb{Z}) \\
B = 0
$$
由 $r = 0$ 时温度的有界性
$$
E = F = D = 0
$$
所以解函数可以表示为
$$
T(r, \theta) = \sum_{n = 1}^{\infty} A_{n} \sin (3n \theta) r^{3n}
$$
利用三角函数的正交性确定系数
$$
\frac{\pi}{6} A_{n} a^{3n} = \int_{0}^{\frac{\pi}{3}} f(\phi) \sin(3n \phi) \, \dd \phi
$$

$$
A_{n} = \frac{6 \int_{0}^{\frac{\pi}{3}} f(\phi) \sin(3n \phi) \, \dd \phi}{\pi a^{3n}}
$$

所以解函数可以表示为
$$
T(r, \theta) = \sum_{n = 1}^{\infty} \frac{6 \int_{0}^{\frac{\pi}{3}} f(\phi) \sin(3n \phi) \, \dd \phi}{\pi a^{3n}} r^{3n} \sin(3n \theta)
$$
3.在圆形区域 $0 \leq r \leq a$ 内求解
$$
\begin{aligned}
& \nabla^{2} u=r^{3} \sin 2 \theta \\
& u \mid_{r=a}=0
\end{aligned}
$$
此时方程的形式应该修改为
$$
\frac{1}{r} \pdv{}{r} (r \pdv{}{r} u) + \frac{1}{r^{2}} \pdv{}{\theta^{2}}{} u + \pdv{}{z^{2}}{} u = r^{3} \sin 2 \theta
$$
特解：容易猜出一个特解为
$$
v(r, \theta) = \frac{r^{5}}{21} \sin 2 \theta
$$
所以齐次方程的边界条件修改为
$$
\left. w \right|_{r = a} = - \frac{a^{5}}{21} \sin 2 \theta
$$
直接把1.中分离变量的结果抄过来，由边界处的情况容易得到仅有一项非0
$$
\Theta(\theta) = A \sin 2 \theta
$$

$$
R(r) =  r^{2}
$$

待定系数
$$
A a^{2} \sin 2 \theta = - \frac{a^{5}}{21} \sin 2 \theta \\
A = - \frac{a^{3}}{21}
$$
所以齐次方程的解为
$$
w (r, \theta)  = - \frac{a^{3}}{21} r^{2} \sin 2 \theta
$$
叠加得到
$$
u(r, \theta) = \frac{1}{21} r^2 (r^3 - a^3) \sin 2\theta
$$
