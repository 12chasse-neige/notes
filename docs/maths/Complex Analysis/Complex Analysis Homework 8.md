# 复变函数 第8次作业

Chasse_neige

1.求将下列函数的 Laurent 展开  

(a)  
$$
\frac{1}{z^2(z-1)}  
$$
在 $z=1$ 附近以及 $|z-1|>1$ 展开

在 $z=1$ 附近 ($0 < |z - 1| < 1$) 展开


$$
\frac{1}{z^{2} (z - 1)} = \frac{1}{z - 1} \frac{1}{(1 + (z - 1))^{2}} = \frac{1}{z - 1} \sum_{n = 0}^{\infty} \begin{pmatrix} n \\ -2 \end{pmatrix} (z - 1)^{n} = \sum_{n = -1}^{\infty}  \begin{pmatrix} n + 1 \\ -2 \end{pmatrix} (z - 1)^{n}
$$

在$|z-1|>1$ 展开
$$
\frac{1}{z^{2} (z - 1)} = \frac{1}{(z - 1)^{3}} \frac{1}{(1 + \frac{1}{z - 1})^{2}} = \frac{1}{(z - 1)^{3}} \sum_{n = 0}^{\infty} \begin{pmatrix} n \\ -2 \end{pmatrix} (z - 1)^{-n} = \sum_{n = 0}^{\infty}  \begin{pmatrix} n \\ -2 \end{pmatrix} (z - 1)^{- n - 3}
$$
(b)   
$$
\frac{1}{z^2 - 3z + 2}
$$
在 $1 < |z| < 2$ 以及 $|z| > 2$ 区域内展开

在 $1 < |z| < 2$ 上展开
$$
\frac{1}{z^{2} - 3z + 2} = \frac{1}{(z - 1) (z - 2)} = - \frac{1}{z - 1} \frac{1}{1 - (z - 1)} \\ =
- \frac{1}{z - 1} \sum_{n = 0}^{\infty} (-1)^{n} \begin{pmatrix} n \\ -1 \end{pmatrix} (z - 1)^{n} \\ =
\sum_{n = -1}^{\infty} (-1)^{n}  \begin{pmatrix} n + 1 \\ -1 \end{pmatrix} (z - 1)^{n}
$$
在 $|z| > 2$ 区域内展开
$$
\frac{1}{z^{2} - 3z + 2} = \frac{1}{(z - 1) (z - 2)} = \frac{1}{(z - 1)^{2}} \frac{1}{1 - \frac{1}{(z - 1)}} \\ =
\frac{1}{(z - 1)^{2}} \sum_{n = 0}^{\infty} (-1)^{n} \begin{pmatrix} n \\ -1 \end{pmatrix} (z - 1)^{- n} \\ =
\sum_{n = 0}^{\infty} (-1)^{n}  \begin{pmatrix} n \\ -1 \end{pmatrix} (z - 1)^{- n - 2}
$$
(e)  
$$
\ln^{-1} \frac{1 + z}{1 - z}
$$
在 $z = 0$ 以及 $z = \infty$ 的邻域在不同单位分支内的展开，割线为 $|z| = 1$ 的下半圆弧

支点为 $z = -1$ 以及 $z = 1$，割线为 $|z| = 1$ 的下半圆弧，假设 $z = -1$ 到 $z = 1$ 连线上宗量辐角为 $2 k \pi， (k \in \mathbb{Z})$  ，此时
$$
\ln^{-1} \frac{1 + z}{1 - z} = \frac{1}{\ln \frac{1 + z}{1 - z}} = \frac{1}{i 2 k \pi + \sum_{n = 1}^{\infty} \frac{(-1)^{n + 1}}{n} z^{n} + \frac{1}{n} z^{n}}
$$
在$z = 0$ 邻域内

当$k = 0$ 时
$$
\ln^{-1} \frac{1 + z}{1 - z} = \frac{1}{\sum_{n = 0}^{\infty} \frac{2}{2n + 1} z^{2n + 1}} = \frac{1}{2z} \frac{1}{1 + \sum_{n = 1}^{\infty} \frac{1}{2n + 1} z^{2n}} \\ = 
\frac{1}{2 z} - \frac{1}{6} z - \frac{2}{45} z^{3} - \cdots
$$
当 $k \neq 0$ 时
$$
\ln^{-1} \frac{1 + z}{1 - z} = \frac{1}{i 2 k \pi} \frac{1}{1 + \sum_{n = 0}^{\infty} \frac{z^{2n + 1}}{i (2n + 1) k \pi}} \\ = 
- \frac{i}{2 k \pi} + \frac{1}{2 k^{2} \pi^{2}} z + \frac{i}{2 k^{3} \pi^{3}} z^{2} + \cdots
$$
在$z = \infty$ 邻域内，假设 $z = -1$ 到 $z = 1$ 连线上宗量辐角为 $2 k \pi， (k \in \mathbb{Z})$  ，此时在无穷远点宗量辐角为 $(2k + 1) \pi$
$$
\ln^{-1} \frac{1 + z}{1 - z} = \frac{1}{i (2 k + 1) \pi} \frac{1}{1 + \sum_{n = 0}^{\infty} \frac{2z^{- 2n - 1}}{i (2n + 1) (2k + 1) \pi}} \\ = 
- \frac{i}{(2 k + 1) \pi} + \frac{2}{(2 k + 1)^{2} \pi^{2}} \frac{1}{z} + \frac{4i}{(2 k + 1)^{3} \pi^{3}} \frac{1}{z^{2}} + \cdots
$$
