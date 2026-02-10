# 数学物理方程 第6次作业

Chasse_neige

2.求解下列方程在 $z=0$ 邻域内的两个级数解

(a) 

$$
w^{\prime \prime}-z^{2} w=0
$$

显然 $z = 0$ 不是奇点，带入级数解的形式
$$
\sum_{k = 0}^{\infty} k(k - 1) C_{k} z^{k - 2} - z^{2} C_{k} z^{k} = 0
$$
所以得到递推关系
$$
k(k - 1) C_{k} = C_{k - 4} \\
C_{k} = \frac{1}{k (k - 1)} C_{k - 4}
$$
所以得到
$$
C_{2} = C_{3} = 0
$$

$$
C_{4k} = \frac{1}{4k \cdot (4k - 1) \cdot 4(k - 1) \cdot (4(k - 1) - 1) \cdots 4 \cdot 3} C_{0} \\ =
\frac{\Gamma(\frac{3}{4})}{2^{4k} \Gamma(k + 1) \Gamma(k + \frac{3}{4})} C_{0}
$$

$$
C_{4 k + 1} = \frac{1}{(4 k + 1) \cdot 4k \cdot (4 (k - 1) + 1) \cdot 4 (k - 1) \cdots 5 \cdot 4} C_{1} \\ =
\frac{\Gamma(\frac{5}{4})}{2^{4k} \Gamma(k + \frac{5}{4}) \Gamma(k + 1)} C_{1}
$$

所以两个解为
$$
w_{1} (z) = \sum_{k = 0}^{\infty} \frac{\Gamma(\frac{3}{4})}{2^{4k} \Gamma(k + 1) \Gamma(k + \frac{3}{4})} z^{4k}
$$

$$
w_{2} (z) = \sum_{k = 0}^{\infty} \frac{\Gamma(\frac{5}{4})}{2^{4k} \Gamma(k + \frac{5}{4}) \Gamma(k + 1)} z^{4k + 1}
$$



(c) 
$$
\left(z^{2}-1\right) w^{\prime \prime}+z w^{\prime}-w=0
$$

显然 $z = 0$ 不是奇点，带入级数解的形式
$$
\sum_{k = 0}^{\infty}(z^{2} - 1) k (k - 1) C_{k} z^{k - 2} + k C_{k} z^{k} - C_{k} z^{k} = 0
$$

所以递推公式满足
$$
k (k -  1) C_{k} - (k + 2) (k + 1) C_{k + 2} + k C_{k} - C_{k} = 0 \\
(k^{2} - 1) C_{k} = (k + 2)(k + 1) C_{k + 2} \\
(k - 1) C_{k} = (k + 2) C_{k + 2}
$$
所以
$$
C_{k + 2}= \frac{k - 1}{k + 2} C_{k}
$$
带入
$$
C_{2k} = \frac{2k - 3}{2k} \cdot \frac{2k - 5}{2k - 2} \cdots \frac{-1}{2} C_{0} \\ = 
\frac{\Gamma(k - \frac{1}{2})}{\Gamma(k + 1) \Gamma(- \frac{1}{2})} C_{0}
$$

$$
C_{2 k + 1} = \frac{2 k - 2}{2k + 1} \cdot \frac{2k - 4}{2k - 1} \cdots \frac{0}{3} C_{1} = 0 \quad (k \geq 1)
$$

所以得到两个解为
$$
w_{1} (z) = \sum_{k = 0}^{\infty} \frac{\Gamma(k - \frac{1}{2})}{\Gamma(k + 1) \Gamma(- \frac{1}{2})} z^{2k}
$$

$$
w_{2} = z
$$

3.求解下列方程在 $z=0$ 邻域内的两个级数解

(c) 

$$
z w^{\prime \prime}-z w^{\prime}+w=0
$$

容易判断 $z = 0$ 是方程正则奇点，所以带入试探解
$$
w(z) = z^{\rho} \sum_{k = 0}^{\infty} C_{k} z^{k}
$$

$$
\sum_{k = 0}^{\infty} z (\rho + k) (\rho + k - 1) C_{k} z^{\rho + k - 2} - z (\rho + k) C_{k} z^{\rho + k - 1} + C_{k} z^{\rho + k} = 0
$$

得到递推公式为
$$
(\rho + k + 1) (\rho + k) C_{k + 1} - (\rho + k) C_{k} + C_{k} = 0
$$

$$
C_{k + 1} = \frac{\rho + k - 1}{(\rho + k) (\rho + k + 1)} C_{k}
$$

以及指标方程
$$
\rho (\rho - 1) = 0
$$
(1) 当 $\rho = 1$ 时
$$
C_{k + 1} = \frac{k}{(k + 1)(k + 2)} C_{k}
$$
得到
$$
C_{k} = 0 \quad (k \geq 1)
$$
得到第一个解
$$
w_{1} (z) = z
$$
(2) 当 $\rho = 0$ 时
$$
w(z) = g z \ln z + \sum_{k = 0}^{\infty} C_{k} z^{k}
$$
带入方程
$$
w' (z) = g (\ln z + 1) + \sum_{k = 1}^{\infty} k C_{k} z^{k - 1}
$$

$$
w''(z) = \frac{g}{z} + \sum_{k = 2}^{\infty} k (k - 1) C_{k} z^{k - 2}
$$

所以
$$
g (1 - z) + \sum_{k = 2}^{\infty} k (k - 1) C_{k} z^{k - 1} - \sum_{k = 1}^{\infty} k C_{k} z^{k}  + \sum_{k = 0}^{\infty} C_{k} z^{k} = 0
$$
所以
$$
C_{0} = - g \\
- g + 2 C_{2} - C_{1} + C_{1} = 0 
$$
即
$$
C_{0} = -g, C_{2} = \frac{g}{2}
$$
不妨取 $C_{1} = 0$

递推关系为
$$
(k + 1) k C_{k + 1} - (k - 1) C_{k} = 0 \\
C_{k + 1} = \frac{k - 1}{k (k + 1)} C_{k}
$$
得到
$$
C_{k} = \frac{k - 2}{k (k - 1)} \cdot \frac{k - 3}{(k - 1) (k - 2)} \cdots \frac{1}{3 \cdot 2} \frac{g}{2} = \frac{g}{(k!) (k - 1)}
$$
所以第二个解为
$$
w_{2} (z) = z \ln z -1 + \sum_{k = 2}^{\infty} \frac{1}{k - 1} \frac{z^{k}}{k !}
$$
(e) 
$$
w^{\prime \prime}+\frac{2}{z} w^{\prime}+m^{2} w=0
$$

容易判断 $z = 0$ 是方程正则奇点，所以带入试探解
$$
w(z) = z^{\rho} \sum_{k = 0}^{\infty} C_{k} z^{k}
$$

$$
\sum_{k = 0}^{\infty} (\rho + k) (\rho + k - 1) C_{k} z^{\rho + k - 2} + \frac{2}{z} (\rho + k) C_{k} z^{\rho + k - 1} + m^{2} C_{k} z^{\rho + k} = 0
$$

得到递推公式为
$$
(\rho + k) (\rho + k - 1) C_{k} + 2(\rho + k) C_{k} + m^{2} C_{k - 2} = 0
$$

$$
C_{k} = - \frac{m^{2}}{(\rho + k) (\rho + k + 1)} C_{k - 2}
$$

以及指标方程
$$
\rho (\rho + 1) = 0
$$
(1) 当 $\rho = 0$ 时
$$
C_{k} = - \frac{m^{2}}{(k + 1)k} C_{k - 2}
$$
得到
$$
C_{2k} = (-1)^{k} \frac{m^{2}}{(2k + 1) 2k} \cdot \frac{m^{2}}{(2k - 1) (2k - 2)} \cdots \frac{m^{2}}{3 \cdot 2} C_{0} \\ =
(-1)^{k} \frac{m^{2k} }{(2k + 1) !} C_{0}
$$

$$
C_{2k + 1} = (-1)^{k} \frac{m^{2}}{(2k  + 2) (2k + 1)} \cdot \frac{m^{2}}{2k (2k - 1)} \cdots \frac{m^{2}}{4 \cdot 3} C_{1} \\ =
(-1)^{k} \frac{2 m^{2k}}{(2k + 2)!} C_{1}
$$

注意此时的低次项的条件需要满足（这一神奇的条件来自 $\rho$ 等于小整数带来的低此项导数缺失）
$$
C_{1} = 0
$$
所以得到第一个解
$$
w_{1} (z) = \sum_{k = 0}^{\infty} (-1)^{k} \frac{m^{2k}}{(2k + 1)!} z^{2k} = \frac{\sin(mz)}{mz}
$$
最后一步是注意到的。

(2) 当 $\rho = -1$ 时，利用递推公式中的 $C_{m}$ 项容易判断第二个解不存在对数项。

直接带入
$$
C_{k} = -\frac{m^{2}}{k (k - 1)}C_{k - 2}
$$
所以
$$
C_{1} = 0
$$

$$
C_{2k} = (-1)^{k} \frac{m^{2k}}{(2k)!} C_{0}
$$

所以第二个解为
$$
w_{2} (z) = \sum_{k = 0}^{\infty} (-1)^{k} \frac{m^{2k}}{(2k)!} z^{2k - 1} = \frac{\cos(mz)}{z}
$$
