# 复变函数 第11次作业

Chasse_neige

3.利用留数定理计算下面的积分

(a)  
$$
\int_{0}^{\infty} \frac{x^s}{(1+x^2)^2} \, dx, \quad -1 < s < 3
$$

函数支点为 $z = 0$ 以及无穷远点。取割线为 $z=0$ 沿着 $x$ 轴正半轴指向无穷远点的直线，并且割线上岸宗量辐角为 $0$

取围道为沿着割线上下岸、半个原点的小圆弧以及整个大圆弧。
$$
I (1 - e^{i 2 \pi s}) = 2 \pi i (\Res f (i) + \Res f(-i)) = 2 \pi i (\frac{(s - 1) i^{s + 1}}{4} + \frac{(s - 1) (-i)^{s + 1}}{4})
$$

$$
I = \frac{\pi (s - 1)}{2} \frac{i^{s + 2} - (-i)^{s + 2}}{1 - e^{i 2 \pi s}} = - \frac{\pi (s - 1)}{2} \frac{\sin (\frac{s \pi}{2})}{\sin (s \pi)} = - \frac{\pi (s - 1)}{4 \cos (\frac{s \pi}{2})}
$$

(b)  
$$
\int_{0}^{\infty} \frac{x^{-p}}{1+2x\cos\theta + x^2} \, dx, \quad -1 < p < 1, \quad 0 < \theta < \pi
$$

函数支点为 $z = 0$ 以及无穷远点。取割线为 $z=0$ 沿着 $x$ 轴正半轴指向无穷远点的直线，并且割线上岸宗量辐角为 $0$

取围道为沿着割线上下岸、半个原点的小圆弧以及整个大圆弧。
$$
I (1 - e^{- i 2 \pi p}) = 2 \pi i (\Res f (- e^{i \theta}) + \Res f (- e^{- i \theta})) = 
2 \pi i (\frac{e^{- i p (\theta + \pi)}}{ - 2 i \sin \theta} + \frac{e^{i p (\theta + \pi)}}{2 i \sin \theta})
$$

$$
I = \frac{\pi}{\sin \theta} \frac{e^{i p (\theta + \pi)} - e^{- i p (\theta + \pi)}}{1 - e^{-i 2 \pi p}} = \frac{\pi (\sin p \theta)}{\sin \theta \sin (p \pi)}
$$

4.利用留数定理计算下面的积分  

(b)  
$$
\int_{0}^{\infty} \frac{1}{x^3+a^3} \, dx, \quad a>0
$$

$$
f (z) = \frac{\ln z}{z^{3} + a^{3}}
$$

函数支点为 $z = 0$ 以及无穷远点。取割线为 $z=0$ 沿着 $x$ 轴正半轴指向无穷远点的直线，并且割线上岸宗量辐角为 $0$

取围道为沿着割线上下岸、半个原点的小圆弧以及整个大圆弧，计算 $f$ 沿着围道的积分


$$
- 2 \pi i  \int_{0}^{\infty} \frac{1}{x^3+a^3} \, dx = 2 \pi i (\Res f (a e^{i \frac{\pi}{3}}) + \Res f(a e^{i \pi}) + \Res f (a e^{i \frac{5 \pi}{3}}))) \\ = 
2 \pi i \left( \frac{a + i \frac{\pi}{3}}{a^{2} (e^{i \frac{\pi}{3}} - e^{i \pi}) (e^{i \frac{\pi}{3}} - e^{i \frac{5 \pi}{3}})} + \frac{a + i \pi}{a^{2} (e^{i \pi} - e^{i \frac{\pi}{3}}) (e^{i \pi} - e^{i \frac{5 \pi}{3}})} + \frac{a + i \frac{5 \pi}{3}}{a^{2} (e^{i \frac{5 \pi}{3}} - e^{i \pi}) (e^{i \frac{5 \pi}{3}} - e^{i \frac{\pi}{3}})} \right)
$$

$$
\int_{0}^{\infty} \frac{1}{x^3+a^3} \, dx = \frac{2\pi}{3 \sqrt{3}a^2}
$$

(d)  
$$
\int_{0}^{\infty} \frac{\ln x}{x^2+a^2} \, dx, \quad a>0
$$

$$
f (z) = \frac{\ln^{2}z - 2 \pi i \ln z}{z^{2} + a^{2}}
$$

函数支点为 $z = 0$ 以及无穷远点。取割线为 $z=0$ 沿着 $x$ 轴正半轴指向无穷远点的直线，并且割线上岸宗量辐角为 $0$

取围道为沿着割线上下岸、半个原点的小圆弧以及整个大圆弧，计算 $f$ 沿着围道的积分
$$
- 4 \pi i \int_{0}^{\infty} \frac{\ln x}{x^2+a^2} \, dx = 2 \pi i (\Res f (i a) + \Res f (-ia)) \\ = 2 \pi i (- \frac{\pi \ln a}{a})
$$

$$
\int_{0}^{\infty} \frac{\ln x}{x^2+a^2} \, dx = \frac{\pi \ln a}{2 a}
$$

5.利用留数定理计算下面的积分

(d)  
$$
\int_0^1 \frac{\sqrt[4]{x(1-x)^3}}{(1+x)^3} \, dx
$$
函数支点为 $z = 0$ 以及 $z = 1$。取割线为 $z=0$ 沿着 $x$ 轴正半轴指向 $z = 1$ 的线段，并且割线上岸宗量辐角为 $0$

取围道为沿着割线上下岸、半个原点的小圆弧、半个 $z = 1$ 的小圆弧以及整个大圆弧，计算 $f$ 沿着围道的积分
$$
I (1 - i) = 2 \pi i \Res f (-1)
$$

$$
I = \frac{2 \pi i }{1 - i} (-2^{\frac{3}{4}} \frac{3}{128} e^{i \frac{\pi}{4}}) = \frac{3 \pi}{64} 2^{\frac{1}{4}}
$$

