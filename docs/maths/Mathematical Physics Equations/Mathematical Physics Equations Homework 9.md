# 数学物理方程 第9次作业

Chasse_neige

7.计算下列积分

(a) 
$$
\int_{-1}^{1} \mathrm{P}_{k}^{\prime}(x) \mathrm{P}_{l}(x) \, \mathrm{d}x
$$
当 $k \leq l$ 时，利用 Legendre 多项式的正交性，积分为 $0$

当 $k > l$ 时
$$
\int_{-1}^{1} \mathrm{P}_{k}^{\prime}(x) \mathrm{P}_{l}(x) \, \mathrm{d}x = \left. P_{k} (x) P_{l} (x) \right|_{-1}^{1} - \int_{-1}^{1} P_{k} (x) P'_{l} (x) \, \dd{x} \\ =
P_{k} (1) P_{l} (1) - P_{k} (-1) P_{l} (-1) = 1 - (-1)^{k + l}
$$
(b) 
$$
\int_{-1}^{1} \dfrac{\mathrm{P}_{l}(x)}{(1 - 2xt + t^{2})^{3/2}} \, \mathrm{d}x
$$
利用生成函数，得到
$$
\pdv{}{x} \frac{1}{\sqrt{1 - 2 x t + t^{2}}} = \sum_{l} P'_{l} (x) t^{l}
$$
所以
$$
\frac{t}{(1 - 2xt + t^{2})^{\frac{3}{2}}} = \sum_{l} P'_{l} (x) t^{l}
$$
所以
$$
\int_{-1}^{1} \dfrac{\mathrm{P}_{l}(x)}{(1 - 2xt + t^{2})^{3/2}} \, \mathrm{d}x = \int_{-1}^{1} \sum_{k = 1}^{\infty} P'_{k} (x) P_{l} (x) t^{k -1} \, \dd{x}
$$
带入上一问的结果，直接得到
$$
\int_{-1}^{1} \dfrac{\mathrm{P}_{l}(x)}{(1 - 2xt + t^{2})^{3/2}} \, \mathrm{d}x =  \sum_{k = l + 1}^{\infty} (1 - (-1)^{k + l}) t^{k - 1} = 2 t^{l}  \frac{1}{1 - t^{2}} = \frac{2 t^{l}}{1 - t^{2}}
$$
8.一半径为 $a$ 的半球, 球面温度为 $u_{0}$, 底面温度为 $0$. 求半球内的温度分布.

方程以及边界条件为
$$
\nabla^{2} u = 0 \\
u |_{r = a} = u_{0}, \quad u |_{\theta = \frac{\pi}{2}} = 0
$$
由于问题关于 $z$ 轴是轴对称的，所以解可以写成径向函数以及 Legendre 多项式的叠加
$$
u (r, \theta) = \sum_{l} (A_{l} r^{l} + B_{l} r^{-l - 1}) P_{l} (\cos \theta)
$$
由原点处的有界性，得到
$$
B_{l} = 0
$$
所以
$$
u (r, \theta) = \sum_{l} A_{l} r^{l} P_{l} (\cos \theta)
$$
利用边界条件 $u (r, \frac{\pi}{2}) = 0$，得到解仅仅包含奇次项
$$
u(r, \theta) = \sum_{l} A_{2l + 1} r^{2l + 1} P_{2l + 1} (\cos \theta)
$$
再利用正交性待定系数
$$
u_{0} = u (a, \theta) = \sum_{l} A_{2l + 1} a^{2l + 1} P_{2l + 1} (\cos \theta)
$$

$$
\int_{0}^{\frac{\pi}{2}} u_{0} P_{2l + 1} (\cos \theta) \sin \theta \, \dd{\theta} - \int_{\frac{\pi}{2}}^{\pi}  u_{0} P_{2l + 1} (\cos \theta) \sin \theta \, \dd{\theta} = A_{2l + 1} a^{2l + 1} \int_{0}^{\pi} P^{2}_{2l + 1} (\cos \theta) \sin \theta \, \dd{\theta}
$$

注意这个积分已经把问题进行了延拓至整个球
$$
A_{2l + 1} = \frac{4l + 3}{2a^{2l + 1}} \left( \int_{0}^{1} u_{0} P_{2l + 1} (x) \, \dd{x} - \int_{-1}^{0} u_{0} P_{2l + 1} (x) \, \dd{x} \right)= (-1)^{l} \frac{1}{a^{2l + 1}} \frac{(2l)! (4l + 3)}{2^{2l + 1} l! (l+ 1)!}
$$
所以温度分布为
$$
u (r, \theta) = \sum_{l = 0}^{\infty} (-1)^{l} \frac{r^{2l + 1}}{a^{2l + 1}} \frac{(2l)! (4l + 3)}{2^{2l + 1} l! (l+ 1)!} P_{2l + 1} (\cos \theta)
$$
9.一半径为 $b$ 的接地导体球壳, 内部放一均匀带电圆环, 环的半径为 $a$, 电量为 $Q$, 环心与球心重合. 试求球壳内电势分布.

取圆环轴线为 $z$ 轴，直接猜测解为
$$
\phi (r, \theta) = \begin{cases} \sum_{l} A_{2l} r^{2l} P_{2l} (\cos \theta) \quad (0 \leq r \leq a) \\
\sum_{l} \left(B_{2l} r^{2l} + C_{2l} r^{- 2l - 1} \right) P_{2l} (\cos \theta) \quad (a \leq r \leq b) \end{cases}
$$
的形式，利用边界条件待定系数

对于 $0 \leq r \leq a$
$$
r^{2} \left. \pdv{u (r, \frac{\pi}{2})}{r} \right|_{r = a-}^{r = a+} = - \frac{Q}{2 \pi \epsilon_{0}} \delta (\theta - \frac{\pi}{2})
$$

$$
(2l a^{2l + 1} (B_{2l} - A_{2l}) - (2l + 1) C_{2l} a^{-2l}) \frac{2}{4l + 1} = - \frac{Q}{2 \pi \epsilon_{0}} \frac{(-1)^{l} (2l)!}{2^{2l} (l!)^{2}}
$$

再利用电势连续的条件
$$
A_{2l} a^{2l} = B_{2l} a^{2l} + C_{2l} a^{-2l-1}
$$


对于 $a \leq r \leq b$
$$
u(b, \theta) = 0
$$
所以
$$
B_{2l} b^{2l} + C_{2l} b^{-2l-1} = 0
$$
解得
$$
A_{2l} = \frac{Q}{4 \pi \epsilon_{0}} P_{2n} (0) \left( \frac{1}{a^{2l + 1}} - \frac{a^{2l}}{b^{4l + 1}}\right) \\
B_{2l} = - \frac{Q}{4 \pi \epsilon_{0}} P_{2n} (0) \frac{a^{2l}}{b^{4l + 1}} \\
C_{2l} = \frac{Q}{4 \pi \epsilon_{0}} P_{2n} (0) a^{2l} 
$$
最终得到
$$
u(r,\theta) = \begin{cases}
\dfrac{Q}{4\pi\epsilon_0} \sum\limits_{n=0}^{\infty}\frac{(-1)^{n} (2n)!}{2^{2n} (n!)^{2}} P_{2n} (\cos\theta) r^{2n} \left( \dfrac{1}{a^{2n+1}} - \dfrac{a^{2n}}{b^{4n+1}} \right) &  (0 \leq r < a) \\
\dfrac{Q}{4\pi\epsilon_0} \sum\limits_{n=0}^{\infty} \frac{(-1)^{n} (2n)!}{2^{2n} (n!)^{2}} P_{2n} (\cos \theta) \left( \dfrac{a^{2n}}{r^{2n+1}} - \dfrac{a^{2n} r^{2n}}{b^{4n+1}} \right) &  (a < r < b)
\end{cases}
$$