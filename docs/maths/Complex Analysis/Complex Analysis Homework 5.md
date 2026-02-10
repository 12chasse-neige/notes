# 复变函数 第5次作业

Chasse_neige

1.$\sum_{n=1}^{\infty} a_n$ 与 $\sum_{n=1}^{\infty} b_n$ 均为正项级数，下列说法是否正确？若正确，请给出证明；若不正确，试举反例说明之。

(a) 若 $\lim_{n\to\infty} n a_n = 0$，则 $\sum_{n=1}^{\infty} a_n$ 收敛；

不正确

取$a_{n} = \frac{1}{n \ln n}$

由Cauchy反常积分判别法，原级数的收敛发散性质与积分
$$
\int_{1}^{\infty} \frac{1}{n \ln n} dn = \int_{0}^{\infty} \frac{d u}{u}
$$
相同，所以级数发散

(b) 若 $a_{2n} < a_{2n+1}$，则 $\sum_{n=1}^{\infty} a_n$ 发散；

不正确
$$
a_{2} = \frac{1}{100} \\
a_{2n} = \frac{1}{(2 n)^{3}} \quad (n \neq 1)\\ 
a_{2n + 1} = \frac{1}{(2n + 1)^{2}}
$$
此时$a_{2n} < a_{2n + 1}$，但是
$$
\sum_{n = 1}^{\infty} a_{n} < \sum_{n = 1}^{\infty} \frac{1}{n^{2}} = \frac{\pi^{2}}{6}
$$
由比较定理， $\sum_{n=1}^{\infty} a_n$ 收敛

(c) 若 $\lim_{n\to\infty} \frac{a_{2n+1}}{a_{2n}} = \infty$，则 $\sum_{n=1}^{\infty} a_n$ 发散；

不正确
$$
a_{2n} = \frac{1}{(2 n)^{3}} \\ 
a_{2n + 1} = \frac{1}{(2n + 1)^{2}}
$$

$$
\lim_{n \to \infty} \frac{a_{2n + 1}}{a_{2n}} = \lim_{n \to \infty} \frac{(2n)^{3}}{(2n + 1)^{2}} = \infty
$$

但是
$$
\sum_{n = 1}^{\infty} a_{n} < \sum_{n = 1}^{\infty} \frac{1}{n^{2}} = \frac{\pi^{2}}{6}
$$
由比较定理， $\sum_{n=1}^{\infty} a_n$ 收敛

(d) 若 $\sum_{n=1}^{\infty} a_n$ 与 $\sum_{n=1}^{\infty} b_n$ 发散，则 $\sum_{n=1}^{\infty} \sqrt{a_n b_n}$ 发散。

不正确，反例
$$
a_{2n} = \frac{1}{2n}, \qquad a_{2n + 1} = \frac{1}{(2n + 1)^{2}} \\
b_{2n} = \frac{1}{(2n)^{2}}, \qquad b_{2n + 1} = \frac{1}{2n + 1}
$$
此时
$$
\sqrt{a_{n} b_{n}}  = \frac{1}{n^{\frac{3}{2}}}
$$
$\sum_{n=1}^{\infty} \sqrt{a_n b_n}$ 收敛。

2.判断下列级数的收敛性以及绝对收敛性
(1) $\sum_{n=2}^{\infty} \frac{i^n}{\ln n}$；

由狄利克雷判别法

$\frac{1}{\ln n}$ 单调递减且趋于0，并且部分和
$$
|\sum_{n} i^{n}| = |i - 1 - i + 1 + \cdots| < \sqrt{2}
$$
所以该级数收敛

但是
$$
|\frac{i^{n}}{\ln n}| = \frac{1}{\ln n} > \frac{1}{n}
$$
由于调和级数发散，由比较判别法，原级数并非绝对收敛。

(2) $\sum_{n=1}^{\infty} \frac{i^n}{n}$

$\frac{1}{ n}$ 单调递减且趋于0，并且部分和
$$
|\sum_{n} i^{n}| = |i - 1 - i + 1 + \cdots| < \sqrt{2}
$$
所以该级数收敛

但是
$$
|\frac{i^{n}}{n}| = \frac{1}{n}
$$
由于调和级数发散，所以原级数并非绝对收敛。

(3) $\sum_{n=1}^{\infty} \frac{\sin(n\pi/6)}{n^2}$

$\frac{1}{n^{2}}$ 单调递减且趋于0，并且部分和
$$
|\sum_{k = 1}^{n} \sin (\frac{k \pi}{6})| = \left| \frac{\cos (\frac{\pi}{12}) - \cos{(n + \frac{1}{2}}) \frac{\pi}{6}}{2 \sin \frac{\pi}{12}} \right| \leq  \frac{\cos (\frac{\pi}{12}) + 1}{2 \sin \frac{\pi}{12}}
$$
所以该级数收敛
$$
\left|  \frac{\sin(\frac{n \pi}{6})}{n^2}\right| \leq \frac{1}{n^{2}}
$$
由比较定理，该级数绝对收敛

3.证明级数
$$
\sum_{n=1}^{\infty} \frac{z^{n-1}}{\left(1-z^n\right)\left(1-z^{n+1}\right)}, \quad |z| \neq 1
$$
收敛，并求其和。
提示：$z^{n-1} = \frac{z^n - z^{n+1}}{z(1-z)}$

证明

当$|z| < 1$ 时
$$
\left| \frac{z^{n-1}}{\left(1-z^n\right)\left(1-z^{n+1}\right)} \right| \leq \frac{|z|^{n - 1}}{(1 - |z|)^{2}}
$$
因为$|z| < 1$，由比较定理，原级数绝对收敛，可以进行裂项

当 $|z| > 1$ 时
$$
\left| \frac{z^{n-1}}{\left(1-z^n\right)\left(1-z^{n+1}\right)} \right| \leq \frac{|z|^{n - 1}}{(|z|^{n} - 1) (|z|^{n + 1} - 1)} = \frac{|z|^{n - 1}}{|z|^{2n + 1} - |z|^{n + 1} - |z|^{n}} \\
\leq \frac{1}{ |z|^{n + 2} - |z|^{2} - |z|} \leq \frac{1}{|z|} \frac{1}{|z|^{n + 1} - 2 |z|} = \frac{1}{|z|^{2}} \frac{1}{|z|^{n} - 2}
$$
由比较定理，原级数绝对收敛，可以进行裂项
$$
\sum_{n=1}^{\infty} \frac{z^{n-1}}{\left(1-z^n\right)\left(1-z^{n+1}\right)} = \sum_{n=1}^{\infty} \frac{z^n - z^{n+1}}{\left(1-z^n\right)\left(1-z^{n+1}\right) z(1-z)} \\ = 
\sum_{n = 1}^{\infty} \frac{1}{z (1 - z)} \left(\frac{1}{1 - z^{n}} - \frac{1}{1 - z^{n + 1}} \right) \\ = 
\begin{cases} 
\frac{1}{z (1 - z)^{2}} \qquad (|z| > 1) \\ 
\frac{1}{(1 - z)^{2}} \qquad (|z| < 1)
\end{cases}
$$
