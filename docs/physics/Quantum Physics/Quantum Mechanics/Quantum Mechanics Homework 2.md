# 量子力学 第2次作业

吴桐 2024012555

3.2.1 质量为 $m$ 的粒子被放在宽度为 $L$ 的无限深势阱中，并处于能量为 $E_{n}$ 的能量本征态。问它对阱壁施加的压力是多大?

首先给出归一化之后的波函数
$$
\psi_{n} (x) = \sqrt{\frac{2}{L}} \sin (\frac{n \pi}{L} x) \quad (0 \leq x \leq L)
$$


3.2.2 粒子在 $-a < x < a$ 的无限深势阱中运动，$t = 0$ 时波函数为 $\Psi_{0}(x) = C \cos\frac{\pi x}{a} \cos\frac{\pi x}{2a} (-a < x < a)$。求常数 $C$ 以及任意时刻的波函数 $\Psi(x, t)$。粒子的质量为 $m$。



3.2.3（选做）设粒子在 $-a < x < a$ 的无限深势阱中运动，其波函数为 $\psi(x) = C(a^{2} - x^{2}) \, (-a \leq x \leq a)$, 粒子的质量为 $m$。

(a) 求归一化常数 $C = ?$



(b) 测量粒子的能量得到 $E_{n}$ 的几率 $P_{n} = ?$



(c) 试求无穷级数
$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{6}} = ?
$$



(d) 利用
$$
\bar{E} = -\frac{\hbar^{2}}{2m} \int_{-a}^{a} \psi^*(x) \frac{d^{2} \psi(x)}{dx^{2}} dx
$$

求出粒子的能量平均值。



(e) 由于 $\bar{E} = \sum_{n} P_{n} E_{n}$, 因此无穷级数
$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{4}} = ?
$$



(f) 采用类似的方法但取一个新的 $\psi(x)$, 求出无穷级数
$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{2}} = ?
$$


3.3.1 设粒子在无限深势阱加中心 $\delta$ 势垒 $V(x)=\left\{\begin{array}{cc}\gamma \delta(x), & (|x|<a, \gamma>0) \\ +\infty, & (|x|>a)\end{array}\right.$ 中运动, 求它的能谱。提示: 区分不同的宇称。



3.3.2（选做）设粒子在相距为 $a$ 的对称双 $\delta$ 势阱 $V(x)=-\frac{\hbar^{2}}{m L}\left\{\delta\left(x+\frac{a}{2}\right)+\delta\left(x-\frac{a}{2}\right)\right\}$ 中运动, 求它的束缚态能级。提示: a. 区分偶宇称态和奇宇称态; b. 区分 $a \leq L$ 和 $a>L$ 两种不同情形。



3.4.1 分别求线性谐振子处于基态和第一激发态时, 粒子出现几率最大的位置。



3.4.2 半壁谐振子势是 $V(x)=\left\{\begin{array}{cc}+\infty, & (x<0) \\ \frac{1}{2} m \omega^{2} x^{2}, & (x>0)\end{array}\right.$, 求粒子在其中的能级和归一化波函数。



3.4.3 假设势能为 
$$
V(x)=\left\{\begin{array}{cc}+\infty, & (x<0) \\ 
\frac{1}{2} m \omega^{2} x^{2} + \frac{[v(v-1) \hbar^{2}]}{2m x^{2}}, & (x>0, v \geq 1 / 2 \text {可连续变化})\end{array}\right.
$$
求粒子在其中的能级。

方法提示: 基于 $x \rightarrow+\infty$ 和 $x \rightarrow 0^{+}$时 $\psi(x)$ 的行为, 可设 $\psi(x)=\xi^{\nu} \mathrm{e}^{-\xi^{2} / 2} F(\xi)$, 其中 $\xi=\sqrt{m \omega / \hbar} x, F(\xi)$ 是 $\xi$ 的多项式且 $F(0) \neq 0$; 再注意 $F(-\xi)$ 满足与 $F(\xi)$ 相同的方程, 所以可重新取自变量为 $\eta=\xi^{2}$ 而 $F(\eta)$ 是 $\eta(n=0,1,2, \cdots)$ 次多项式; 然后仿照课文中的做法就可以了。结果提示: 这些能级是类谐振子的, 即, 是等间隔的。本题的结果还可以和 3.4.2 题的答案相对照。