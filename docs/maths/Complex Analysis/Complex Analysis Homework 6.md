# 复变函数 第6次作业

Chasse_neige

5.试确定下列级数的收敛半径（或收敛区域）

(1) 
$$
\sum_{n=1}^{\infty} \frac{z^n}{n^n}
$$

$$
c_{n} = \frac{1}{n^{n}}
$$

$$
R = \lim_{n \to \infty}  \frac{1}{\sup (c_{n})^{\frac{1}{n}}} = \lim_{n \to \infty} n  = \infty
$$

对于任意 $z$ ，当 $n > 2 |z|$  时
$$
\left|\frac{z^{n}}{n^{n}}\right| < \frac{1}{2}^{n}
$$
由比较判别法，该级数绝对收敛

所以该级数在 $\mathbb{C}$ 上收敛

(2) 
$$
\sum_{n=1}^{\infty} \frac{n!}{n^n} z^n
$$

$$
c_{n} = \frac{n!}{n^{n}}
$$

根据达朗贝尔判别法
$$
R = \lim_{n \to \infty} \left| \frac{c_{n}}{c_{n + 1}} \right| = \lim_{n \to \infty} \left| \frac{n + 1}{n}^{n} \right| = \lim_{n \to \infty} (1 + \frac{1}{n})^{n} = e
$$


7.证明级数 
$$
\sum_{n=0}^{\infty} \left(\frac{z^{n+1}}{n+1} - \frac{2z^{2n+3}}{2n+3}\right)
$$
的和函数在 $z=1$ 点不连续

证明

在  $z=1$ 点，级数
$$
\sum_{n=0}^{\infty} \left(\frac{z^{n+1}}{n+1} - \frac{2z^{2n+3}}{2n+3}\right) = \sum_{n = 0}^{\infty} \frac{1}{(n + 1) (2n + 3)} \leq \sum_{n = 0}^{\infty} \frac{1}{2} \frac{1}{n^{2}}
$$
收敛

所以在 $|z| < 1$ 上该级数绝对收敛，在该开区间上
$$
S (z) = \sum_{n=0}^{\infty} \left(\frac{z^{n+1}}{n+1} - \frac{2z^{2n+3}}{2n+3}\right) = \ln (1 - z) - \ln (\frac{1 + z}{1 - z}) + 2z = 2z - \ln (1 + z)
$$
所以从收敛圆内趋近于该点的极限
$$
\lim_{z \to 1} S (z) = 2 - \ln 2
$$
该点的级数收敛于
$$
\sum_{n = 0}^{\infty} \frac{1}{(n + 1) (2n + 3)} = 2 \sum_{n = 0}^{\infty} \frac{1}{2n + 2} - \frac{1}{2n + 3} = 2 (1 - \ln 2) = 2 - 2 \ln 2 
$$
所以该点和函数不连续

这与阿贝尔第二定理并不矛盾，因为阿贝尔第二定理只对单一幂级数成立。

如果一定要把这个级数的和函数在该点的极限表示出来，那么实际上应该写为
$$
S (z) = \ln (1 - z) - \ln (\frac{1 + z}{1 - z}) + 2z
$$
的形式，该点是两个发散值的抵消，会造成奇异性。

8.求下列级数的和

(1) 
$$
\sum_{n=1}^{\infty} \frac{\cos n\theta}{n}, \quad 0 < \theta < 2\pi
$$
判断收敛性

因为 $\frac{1}{n}$ 递减切趋于0

又因为 $\cos n \theta$ 部分和
$$
\sum_{n = 1}^{\infty} \cos n \theta = \frac{\sin (n + \frac{1}{2}) \theta - \sin \frac{1}{2} \theta }{2 \sin \frac{\theta}{2}}
$$
有界，所以原级数收敛
$$
\sum_{n=1}^{\infty} \frac{\cos n\theta}{n} = \Re \left[\sum_{n = 1}^{\infty} \frac{e^{i n \theta}}{n} \right] \\ = 
- \Re [\ln (1 - e^{i \theta})] = - \frac{1}{2} \ln (2 - 2 \cos \theta) = - \ln (2 \sin \frac{\theta}{2})
$$
(3) 
$$
\sum_{n=0}^{\infty} \frac{\cos (2n+1)\theta}{2n+1}, \quad 0 < \theta < \pi
$$
由于(1)中的级数收敛，由比较定理，此级数收敛
$$
\sum_{n=0}^{\infty} \frac{\cos (2n+1)\theta}{2n+1} = \Re \left[\sum_{n = 1}^{\infty} \frac{e^{i (2n + 1) \theta}}{2n + 1}\right] = \frac{1}{2} \Re[\ln (1 + e^{i \theta}) - \ln (1 - e^{i \theta})] \\ = 
\frac{1}{4} (\ln (2 + 2 \cos \theta) - \ln (2 - 2 \cos \theta)) = \frac{1}{2} \ln (\cot \frac{\theta}{2})
$$
(5) 
$$
\sum_{n=0}^{\infty} \frac{(-1)^n \sin (2n+1)\theta}{(2n+1)^2}, \quad -\pi/2 \leq \theta \leq \pi/2
$$
证明收敛性
$$
\left|\frac{(-1)^n \sin (2n+1)\theta}{(2n+1)^2}\right| \leq \frac{1}{(2n + 1)^{2}}
$$
由于级数 $\sum_{n} \frac{1}{n^{2}}$ 收敛，所以该级数绝对收敛
$$
\sum_{n=0}^{\infty} \frac{(-1)^n \sin (2n+1)\theta}{(2n+1)^2} = \sum_{n = 0}^{\infty} \int_{0}^{\theta} \frac{(-1)^{n} \cos (2n + 1) \theta}{2n + 1} d \theta \\ = 
\int_{0}^{\theta} \left(\sum_{0}^{\infty} \frac{(-1)^{n} \cos (2n + 1) \theta}{2n + 1} \right) d \theta = \int_{0}^{\theta} \frac{\pi}{4} \text{sgn} (\cos \theta) d \theta = \frac{\pi}{4} \theta
$$
1.将下列函数在指定点展开成 Taylor 级数，并给出收敛半径

(a) $1-z^3$ 在 $z=1$ 展开
$$
1 - z^{3} = -3 (z - 1) - 3 (z - 1)^{2} -  (z - 1)^{3}
$$
收敛半径为 $\infty$

(b) $$\frac{1}{1+z+z^2}$$ 在 $z=0$ 展开
$$
\frac{1}{1 + z + z^{2}} = \frac{1}{\sqrt{3} i} \left( \frac{1}{z + \frac{1 - \sqrt{3} i}{2}} - \frac{1}{z + \frac{1 + \sqrt{3} i}{2}} \right) \\ = 
\frac{1}{\sqrt{3} i} \left( \frac{1 + \sqrt{3} i}{2} \sum_{n = 0}^{\infty} (- \frac{1 + \sqrt{3} i}{2} z)^{n} - \frac{1 - \sqrt{3} i}{2} \sum_{n = 0}^{\infty} (- \frac{1 - \sqrt{3} i}{2} z)^{n} \right) \\ =
\sum_{n = 0}^{\infty} \left( \frac{3 - \sqrt{3} i}{6}  (- \frac{1 + \sqrt{3} i}{2})^{n} + \frac{3 + \sqrt{3} i}{6} (- \frac{1 - \sqrt{3} i}{2})^{n} \right) z^{n}
$$
收敛半径为 $1$

(c) $\frac{\sin z}{1 - z}$ 在 $z = 0$ 展开
$$
\frac{\sin z}{1 - z} = \sum_{k =0}^{\infty} \sum_{l = 0}^{\infty} \frac{(-1)^{k}}{(2 k + 1)!} z^{2k + 1} z^{l} \\ = 
\sum_{k =0}^{\infty} \sum_{l = 0}^{\infty} \frac{(-1)^{k}}{(2 k + 1)!} z^{2k + l + 1} \\ = 
\sum_{n = 0}^{\infty} \left(\sum_{k = 0}^{[\frac{n - 1}{2}]} \frac{(-1)^{k}}{(2 k + 1)!} \right) z^{n} 
$$
收敛半径为 $1$