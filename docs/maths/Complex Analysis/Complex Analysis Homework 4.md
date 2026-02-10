# 复变函数 第4次作业

Chasse_neige

2.请计算如下积分

（1）
$$
\int_{|z|=1} \frac{\text{d}z}{z}
$$

$$
\int_{|z| = 1} \frac{d z}{z} = 2 \pi i
$$

（2）
$$
\int_{|z|=1} \frac{\text{d}z}{|z|}
$$

$$
\int_{|z| = 1} \frac{d z}{|z|} = \int_{|z|  = 1} d z = 0
$$

（3）
$$
\int_{|z|=1} \frac{|\text{d}z|}{z}
$$

$$
\int_{|z| = 1} \frac{|d z|}{z} = \int_{|z| = 1} \frac{d \theta}{e^{i \theta}} = 0
$$

（4）
$$
\int_{|z|=1} \left|\frac{\text{d}z}{z}\right|
$$

$$
\int_{|z| = 1} \left| \frac{d z}{z} \right| = \int_{|z| = 1} d \theta = 2 \pi
$$

5.计算下列积分

（1）
$$
\oint_{|z|=2} \frac{\cos z}{z} \text{d}z
$$

$$
\oint_{|z| = 2} \frac{\cos z}{z} d z = 2 \pi i \cos (0) = 2 \pi i
$$

（2）
$$
\oint_{|z|=2} \frac{\sin z}{z^2} \text{d}z
$$

$$
\oint_{|z| = 2} \frac{\sin z}{z^{2}} d z = \frac{2 \pi i }{1 !} \sin' (0) = 2 \pi i
$$

（3）
$$
\oint_{|z|=2} \frac{\text{e}^z}{z^3} \text{d}z
$$

$$
\oint_{|z| = 2} \frac{e^{z}}{z^{3}} d z = \frac{2 \pi i}{2!} e''^{0} = \pi i
$$

（4）
$$
\oint_{|z|=2} \frac{|z|\text{e}^z}{z^2} \text{d}z
$$

$$
\oint_{|z| = 2} \frac{|z| e^{z}}{z^{2}} dz = 2 \oint_{|z| = 2} \frac{e^{z}}{z^{2}} d z = 2 \cdot 2 \pi i e'^{0} = 4 \pi i
$$

6.对于什么样的 $a$ 值，函数
$$
F(z) = \int_{z_0}^z \text{e}^z \left(\frac{1}{z} + \frac{a}{z^3}\right) \text{d}z
$$

是单值的。
$$
\oint e^{z} \left( \frac{1}{z} + \frac{a}{z^{3}} \right) d z = 0
$$
即可保证该函数的单值性

当环路内包括$z = 0$ 时
$$
\oint e^{z} \left( \frac{1}{z} + \frac{a}{z^{3}} \right) d z  = 2 \pi i(e^{0} + \frac{1}{2!} a e'^{0}) = 0
$$
所以 $a = -2$ 

当环路内不包括 $z = 0$ 时
$$
\oint e^{z} \left( \frac{1}{z} + \frac{a}{z^{3}} \right) d z   = 0 + 0 = 0
$$
综上，$a = -2$

8.设 $f(z)$ 在一个包含圆域 $|z| \leq R$ 的区域中解析，$\zeta = r \text{e}^{\text{i}\theta}$ 为圆内一点，$0 \leq r < R$，证明下式（Poisson 公式）成立
$$
f(\zeta) = \frac{1}{2\pi} \int_0^{2\pi} \frac{R^2 - r^2}{R^2 - 2Rr \cos(\theta - \phi) + r^2} f\left(R \text{e}^{\text{i}\phi}\right) \text{d} \phi
$$
证明：设$z = R e^{i \phi}$
$$
\frac{1}{2\pi} \int_0^{2\pi} \frac{R^2 - r^2}{R^2 - 2Rr \cos(\theta - \phi) + r^2} f\left(R \text{e}^{\text{i}\phi}\right) \text{d} \phi  \\  = 
\frac{1}{2 \pi} \oint_{|z| = R} \frac{R^{2} - r^{2}}{|\zeta - z|^{2}} f (\zeta) \frac{1}{i z} d z \\ = 
- i \frac{R^{2} - r^{2}}{2 \pi} \oint_{|z| = R} \frac{f (z)}{z (z- \zeta)(\frac{R^{2}}{z} - \frac{r^{2}}{\zeta})} dz \\ = 
i \frac{R^{2} - r^{2}}{2 \pi} \oint_{|z| = R} \frac{ \frac{\zeta}{r^{2}} f (z)}{(z- \zeta)(z - \frac{R^{2}}{r^{2}} \zeta)} dz \\ =
i \frac{R^{2} - r^{2}}{2 \pi} \frac{\zeta}{r^{2}} \left( 2 \pi i \frac{f (\zeta)}{\zeta (1 - \frac{R^{2}}{r^{2}})} \right)  = f (\zeta)
$$
