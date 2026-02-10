# 复变函数 第7次作业

Chasse_neige

1.将下列函数在指定点展开成 Taylor 级数, 并给出收敛半径

(e) 
$$
\sec z
$$
 在 $z = 0$ 展开

使用待定系数法
$$
\cos z = \sum_{n = 0}^{\infty} \frac{(-1)^{n}}{(2n)!} z^{2n}
$$
所以
$$
1 = \sum_{l = 0}^{\infty} \sum_{k = 0}^{\infty} \frac{(-1)^{l}}{(2l)!} a_{2k} z^{2l + 2k} = \sum_{n = 0}^{\infty} \sum_{k = 0}^{n} \frac{(-1)^{n - k}}{(2(n - k))!} a_{2k} z^{2n}
$$
所以
$$
\sum_{k = 0}^{n} \frac{(-1)^{n - k}}{(2(n - k))!} a_{2k} = \begin{cases} 1 \qquad (n = 0) \\ 0 \qquad (n \neq 0) \end{cases}
$$

$$
a_{0} = 1
$$

Taylor 系数可以通过一下递推式得出
$$
a_{2n} = \sum_{k = 0}^{n - 1} \frac{(-1)^{n - k + 1}}{(2 (n - k))!} a_{2k}
$$
前几项为
$$
a_{0} = 1, a_{2} = \frac{1}{2}, a_{4} = \frac{5}{24}, a_{6} = \frac{61}{720}
$$
收敛半径为 $\frac{\pi}{2}$

2.将下列函数在指定点展开成 Taylor 级数, 并给出收敛半径

(b) 将
$$
\ln \frac{1 + z}{1 - z}
$$
在 $z = \infty$ 展开

支点为 $z = 1$ 和 $z = -1$

假设割线为从 $z = 1$ 沿 $x$ 方向延伸到无穷远，在从 $-x$ 方向从无穷远延伸到 $z = -1$ ，并且在割线上岸 $\arg (\frac{1 + z}{1 - z}) = \pi$
$$
\ln (1 + z) = \sum_{n = 1}^{\infty} \frac{(-1)^{n + 1}}{n} z^{n}
$$

$$
\ln (1 - z)  = - \sum_{n = 1}^{\infty}  \frac{1}{n} z^{n}
$$

所以
$$
\ln \frac{1 + z}{1 - z} = \sum_{n = 0}^{\infty} \frac{2}{2n + 1} z^{2n + 1}
$$
收敛半径为 $1$

(c) 将 
$$
\sqrt{\frac{1-z}{1+z}}
$$
在 $z = 0$ 以及 $z = \infty$ 处展开

在 $z = 0$ 处

支点为 $z = 1$ 和 $z = -1$

假设割线为从 $z = 1$ 沿 $x$ 方向延伸到无穷远，在从 $-x$ 方向从无穷远延伸到 $z = -1$ ，并且在割线上岸 $\arg (\frac{1 - z}{1 + z}) = - \pi$
$$
\sqrt{\frac{1-z}{1+z}} = (1 - z) (1 - z^{2})^{- \frac{1}{2}} = (1 - z) \sum_{n = 0}^{\infty} (-1)^{n} \begin{pmatrix} n \\ - \frac{1}{2} \end{pmatrix} z^{2n} = \sum_{n = 0}^{\infty} (-1)^{n} \begin{pmatrix} n \\ - \frac{1}{2} \end{pmatrix} (z^{2n} - z^{2n + 1})
$$
收敛半径为 $1$

在 $z = \infty$ 处

支点为 $z = 1$ 和 $z = -1$

割线为从 $z = -1$ 到 $z = 1$ 沿 $x$ 轴的连线，并且在割线上岸 $\arg (\frac{1 - z}{1 + z}) = 0$
$$
\sqrt{\frac{1-z}{1+z}} = \sqrt{\frac{\frac{1}{z} - 1}{\frac{1}{z} + 1}} = i (\frac{1}{z} - 1) (1 - \frac{1}{z^{2}})^{- \frac{1}{2}} = i (\frac{1}{z} - 1) \sum_{n = 0}^{\infty} (-1)^{n} \begin{pmatrix} n \\ - \frac{1}{2} \end{pmatrix} \frac{1}{z}^{2n} \\ = 
i \sum_{n = 0}^{\infty} (-1)^{n} \begin{pmatrix} n \\ - \frac{1}{2} \end{pmatrix} (\frac{1}{z}^{2n + 1} - \frac{1}{z}^{2n})
$$
收敛半径为 $\left|\frac{1}{z}\right| < 1$

(d) 将  
$$
\frac{z^{(1-p)}(1-z)^p}{2z}
$$
在 $z = \infty$ 处展开，其中 $-1 < p < 2$  

支点为 $z = 0$ 和 $z = 1$ 

划分割线为从 $z = 0$ 沿着 $x$ 轴指向 $z = 1$ 的连线，并且在割线上岸 $\arg \frac{1 - z}{z} = 0$
$$
\frac{(1 - z)^{p}}{2 z^{p}} = e^{-i p \pi} \frac{1}{2} \sum_{n = 0}^{\infty} (-1)^{n} \begin{pmatrix} n \\ p \end{pmatrix} \frac{1}{z}^{n} = e^{-i p \pi} \sum_{n = 0}^{\infty}  \frac{(-1)^{n}}{2} \begin{pmatrix} n \\ p \end{pmatrix} \frac{1}{z}^{n}
$$
收敛半径为 $\left|\frac{1}{z}\right| < 1$

3.验证等式  
$$
\sum_{n=0}^\infty \frac{(-1)^n}{a + nb} = \int_0^1 \frac{t^{a-1}}{1 + t^b} dt, \quad a, b > 0
$$

证明
$$
\int_0^1 \frac{t^{a-1}}{1 + t^b} dt = \int_{0}^{1} \sum_{n = 0}^{\infty} (-1)^{n} t^{nb + a - 1} dt \\ = 
\sum_{n = 0}^{\infty} \int_{0}^{1} (-1)^{n} t^{nb + a - 1} dt = \sum_{n=0}^\infty \frac{(-1)^n}{a + nb}
$$
据此求出以下级数之和：  

(a)  
$$
1 - \frac{1}{4} + \frac{1}{7} - \frac{1}{10} + \cdots
$$

$$
\sum_{n = 0}^{\infty} \frac{(-1)^{n}}{1 + 3n} = \int_{0}^{1} \frac{1}{1 + t^{3}} dt = \frac{\sqrt{3} \pi + \ln 8}{9}
$$

(b)  
$$
\frac{1}{2} - \frac{1}{5} + \frac{1}{8} - \frac{1}{11} + \cdots
$$

$$
\sum_{n = 0}^{\infty} \frac{(-1)^{n}}{2 + 3n} = \int_{0}^{1} \frac{t}{1 + t^{3}} dt =  \frac{\sqrt{3} \pi - \ln{8}}{9}
$$

(c)  
$$
1 - \frac{1}{5} + \frac{1}{9} - \frac{1}{13} + \cdots
$$

$$
\sum_{n = 0}^{\infty} \frac{(-1)^{n}}{1 + 4n} = \int_{0}^{1} \frac{1}{1 + t^{4}} dt = \frac{\pi + 2\coth^{-1} (\sqrt{2}) }{4 \sqrt{2}}
$$

