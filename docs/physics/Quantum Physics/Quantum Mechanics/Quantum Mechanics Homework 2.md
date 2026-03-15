# 量子力学 第2次作业

Chasse_neige

3.2.1 质量为 $m$ 的粒子被放在宽度为 $L$ 的无限深势阱中，并处于能量为 $E_{n}$ 的能量本征态。问它对阱壁施加的压力是多大?

首先给出归一化之后的波函数以及能级
$$
\psi_{n} (x) = \sqrt{\frac{2}{L}} \sin (\frac{n \pi}{L} x) \quad (0 \leq x \leq L) \\
E_{n} = \frac{n^{2} \pi^{2} \hbar^{2}}{2m L^{2}}
$$

所以对于阱壁的压力可以表示为
$$
F = - \pdv{E_{n}}{L} = \frac{n^{2} \pi^{2} \hbar^{2}}{m L^{3}}
$$
3.2.2 粒子在 $-a < x < a$ 的无限深势阱中运动，$t = 0$ 时波函数为 $\Psi_{0}(x) = C \cos\frac{\pi x}{a} \cos\frac{\pi x}{2a} (-a < x < a)$。求常数 $C$ 以及任意时刻的波函数 $\Psi(x, t)$。粒子的质量为 $m$。

先做归一化
$$
1 = \int_{-a}^{a} \Psi^{*}_{0} (x) \Psi_{0} (x) \dd{x} = |C|^{2} \int_{-a}^{a} \cos^{2} \frac{\pi x}{a} \cos^{2} \frac{\pi x}{2a} \, \dd{x} = \frac{a}{2 \pi} |C|^{2} \int_{- \pi}^{\pi} (1 + \cos u) \cos^{2} u \dd{u} = \frac{a}{2} |C|^{2}
$$
所以
$$
C = \sqrt{\frac{2}{a}}
$$
我们假设 $t = 0$ 时刻粒子波函数的相位为 $0$ ，把波函数展开为粒子的能量本征态
$$
\Psi_{0} (x) = \sqrt{\frac{2}{a}} \left(\frac{1}{2} \cos \frac{\pi x}{2 a} + \frac{1}{2} \cos \frac{3 \pi x}{2a}\right)
$$
所以 $t$ 时刻的波函数为
$$
\Psi (x, t) = \sqrt{\frac{1}{2a}} \left(\cos \frac{\pi x}{2 a} e^{- i \frac{\pi^{2} \hbar}{8 m a^{2}} t} + \cos \frac{3 \pi x}{2a} e^{- i \frac{9 \pi^{2} \hbar}{8 m a^{2}} t}\right)
$$
3.2.3（选做）设粒子在 $-a < x < a$ 的无限深势阱中运动，其波函数为 $\psi(x) = C(a^{2} - x^{2}) \, (-a \leq x \leq a)$, 粒子的质量为 $m$。

(a) 求归一化常数 $C = ?$

归一化
$$
1 = |C|^{2} \int_{-a}^{a} (a^{2} - x^{2})^{2} \, \dd{x} = \frac{16}{15} a^{5} |C|^{2}
$$
所以
$$
C = \sqrt{\frac{15}{16 a^{5}}}
$$
(b) 测量粒子的能量得到 $E_{n}$ 的几率 $P_{n} = ?$

我们把粒子的波函数做傅立叶展开
$$
C (a^{2} - x^{2}) = \sum_{n = 1}^{\infty} C_{n} \cos(\frac{n \pi x}{2a})
$$

$$
\int_{-a}^{a} C (a^{2} - x^{2}) \cos(\frac{n \pi x}{2a}) \, \dd{x} = \frac{2C a^{4} (-1)^{n}}{n^{2} \pi^{2}}
$$

所以
$$
\psi (x) = C(a^{2} - x^{2}) = \frac{4 a^{2}}{3} \sqrt{\frac{15}{16a^{5}}} + \sum_{k=0}^{\infty} \frac{32 a^{2}}{\pi^{3} (2k+1)^{3}} (-1)^{k} \sqrt{\frac{15}{16a^{5}}} \cos\left(\frac{(2k+1)\pi x}{2a}\right)
$$
所以
$$
P_{2k + 1} = \frac{960}{\pi^{6} (2k+1)^{6}} \quad (k=0,1,2,\cdots)
$$


(c) 试求无穷级数
$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{6}} = ?
$$

利用 $\sum_{n} P_{n} = 1$，所以
$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{6}} = \frac{\pi^{6}}{960}
$$
(d) 利用
$$
\bar{E} = -\frac{\hbar^{2}}{2m} \int_{-a}^{a} \psi^*(x) \frac{d^{2} \psi(x)}{dx^{2}} \dd{x}
$$

求出粒子的能量平均值。

$$
\bar{E} = -\frac{\hbar^{2}}{2m} \int_{-a}^{a} \psi^*(x) \frac{d^{2} \psi(x)}{dx^{2}} \dd{x} = \frac{5\hbar^{2}}{4m a^{2}}
$$
(e) 由于 $\bar{E} = \sum_{n} P_{n} E_{n}$, 因此无穷级数
$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{4}} = ?
$$

带入
$$
\bar{E} = \sum_{n} P_{n} E_{n} = \sum_{k = 0}^{\infty} \frac{960}{\pi^{6} (2k + 1)^{6}} \frac{(2k + 1)^{2} \pi^{2} \hbar^{2}}{8 m a^{2}} = \frac{120 \hbar^{2}}{\pi^{4} m a^{2}} \sum_{k = 1}^{\infty} \frac{1}{(2k + 1)^{4}}
$$
所以
$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{4}} = \frac{\pi^{4}}{96}
$$
(f) 采用类似的方法但取一个新的 $\psi(x)$, 求出无穷级数
$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{2}} = ?
$$

选取对称的三角形波函数

$$
\psi(x) = A (a - |x|) \quad -a \le x \le a
$$

该波函数为偶函数，且在边界 $x = \pm a$ 处为零。

由归一化条件

$$
1 = \int_{-a}^{a} |\psi(x)|^{2} \, dx = 2A^{2} \int_{0}^{a} (a-x)^{2} \, dx = 2A^{2} \cdot \frac{a^{3}}{3} = \frac{2A^{2} a^{3}}{3}
$$

得

$$
A = \sqrt{\frac{3}{2a^{3}}}
$$

无限深势阱中偶宇称的归一化本征函数为（$k=0,1,2,\dots$）

$$
\phi_{k}(x) = \frac{1}{\sqrt{a}} \cos\left( \frac{(2k+1)\pi x}{2a} \right)
$$

对应能量

$$
E_{k} = \frac{(2k+1)^{2} \pi^{2} \hbar^{2}}{8 m a^{2}}
$$

将 $\psi(x)$ 展开

$$
\psi(x) = \sum_{k=0}^{\infty} C_{k} \phi_{k}(x)
$$

其中展开系数

$$
C_{k} = \int_{-a}^{a} \phi_{k}(x) \psi(x) \, dx = \frac{4\sqrt{6}}{\pi^{2} (2k+1)^{2}}
$$

概率

$$
P_{k} = |C_{k}|^{2} = \frac{96}{\pi^{4} (2k+1)^{4}}
$$

利用公式

$$
\bar{E} = -\frac{\hbar^{2}}{2m} \int_{-a}^{a} \psi^*(x) \frac{d^{2} \psi(x)}{dx^{2}} \dd{x}
$$

计算得

$$
\bar{E} = \frac{3\hbar^{2}}{2 m a^{2}}
$$

$$
\bar{E} = \sum_{k=0}^{\infty} P_{k} E_{k} = \frac{12 \hbar^{2}}{m a^{2} \pi^{2}} \sum_{k=0}^{\infty} \frac{1}{(2k+1)^{2}}
$$

与积分结果比较

$$
\frac{12 \hbar^{2}}{m a^{2} \pi^{2}} \sum_{k=0}^{\infty} \frac{1}{(2k+1)^{2}} = \frac{3\hbar^{2}}{2 m a^{2}},
$$

解得

$$
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^{2}} = \frac{\pi^{2}}{8}
$$

3.3.1 设粒子在无限深势阱加中心 $\delta$ 势垒 $V(x)=\left\{\begin{array}{cc}\gamma \delta(x), & (|x|<a, \gamma>0) \\ +\infty, & (|x|>a)\end{array}\right.$ 中运动, 求它的能谱。提示: 区分不同的宇称。

先写出一维的定态方程
$$
\frac{\hbar^{2}}{2m} \dv[2]{}{x} \psi (x) + (E - V(x)) \psi(x) = 0
$$
所以 $\delta$ 函数势带来的条件可以写作
$$
\left. \psi' (x) \right|_{x = 0^{-}}^{x = 0^{+}} = \frac{2m \gamma}{\hbar^{2}} \psi (0)
$$
自由空间的薛定谔方程给出了
$$
\psi''(x) = - \frac{2m E}{\hbar^{2}} \psi(x)
$$
由于这里的解是定域的，所以必定是三角的形式。
$$
\psi (x) = A \cos (\frac{\sqrt{2mE}}{\hbar}x) + B \sin(\frac{\sqrt{2mE}}{\hbar} x)
$$

1. 对于偶宇称的情形
   $$
   \psi (x) = \begin{cases}
   A \cos (\frac{\sqrt{2mE}}{\hbar}x) + B \sin(\frac{\sqrt{2mE}}{\hbar} x) \quad (x > 0) \\
   A \cos (\frac{\sqrt{2mE}}{\hbar}x) - B \sin(\frac{\sqrt{2mE}}{\hbar} x) \quad (x < 0)
   \end{cases}
   $$
   所以此时
   $$
   \left. \psi' (x) \right|_{x = 0^{-}}^{x = 0^{+}} = \frac{2\sqrt{2mE}}{\hbar} B  = \frac{2m \gamma}{\hbar^{2}} \psi (0)
   $$
   所以
   $$
   \psi (0) = A = \sqrt{\frac{2 E \hbar^{2}}{m \gamma^{2}}} B
   $$
   再带入边界条件
   $$
   \psi(a) \propto \sqrt{\frac{2 E \hbar^{2}}{m \gamma^{2}}} \cos(\frac{\sqrt{2mE}}{\hbar} a) + \sin (\frac{\sqrt{2mE}}{\hbar}a) = 0
   $$
   得到允许的能量满足的条件是
   $$
   - \sqrt{\frac{2 E \hbar^{2}}{m \gamma^{2}}} = \tan \left(\frac{\sqrt{2mE}}{\hbar} a\right)
   $$

2. 对于奇宇称的情形
   $$
   \psi(x) = A \sin(\frac{\sqrt{2mE}}{\hbar}x)
   $$
   此时 $\left. \psi' (x) \right|_{x = 0^{-}}^{x = 0^{+}} = \frac{2\sqrt{2mE}}{\hbar} B  = \frac{2m \gamma}{\hbar^{2}} \psi (0)$ 的条件自动满足，也就是说 $\delta$ 函数势对解没有影响，所以能谱相当于无限深方势阱的奇宇称能谱
   $$
   E_{n} = \frac{n^{2} \pi^{2} \hbar^{2}}{2m a^{2}}
   $$
   
3. 

3.3.2（选做）设粒子在相距为 $a$ 的对称双 $\delta$ 势阱 $V(x)=-\frac{\hbar^{2}}{m L}\left\{\delta\left(x+\frac{a}{2}\right)+\delta\left(x-\frac{a}{2}\right)\right\}$ 中运动, 求它的束缚态能级。提示: a. 区分偶宇称态和奇宇称态; b. 区分 $a \leq L$ 和 $a>L$ 两种不同情形。

先写出一维的定态方程
$$
\frac{\hbar^{2}}{2m} \dv[2]{}{x} \psi (x) + (E - V(x)) \psi(x) = 0
$$
此时 $\delta$ 函数势带来的条件可以写作
$$
\left. \psi'(x) \right|_{x= - \frac{a}{2} - \epsilon}^{x = -\frac{a}{2} + \epsilon} = - \frac{2}{L} \psi \left(-\frac{a}{2}\right)
$$

$$
\left. \psi'(x) \right|_{x= \frac{a}{2} - \epsilon}^{x = \frac{a}{2} + \epsilon} = - \frac{2}{L} \psi \left(\frac{a}{2}\right)
$$

由于这是一个非定域的问题，所以自由空间对应的束缚态波函数必定是指数的形式，并且束缚态的能量小于零。

1. 考虑偶宇称的情况，不妨假设
   $$
   \psi (x) = \begin{cases}
   A e^{\frac{\sqrt{-2mE}}{\hbar} x} \quad (x < -\frac{a}{2}) \\
   B \left(e^{-\frac{\sqrt{-2mE}}{\hbar} x} + e^{\frac{\sqrt{-2mE}}{\hbar} x}\right) \quad (- \frac{a}{2} < x < 0) \\
   B \left(e^{\frac{\sqrt{-2mE}}{\hbar} x} + e^{-\frac{\sqrt{-2mE}}{\hbar} x}\right) \quad (0 < x < \frac{a}{2}) \\
   A e^{- \frac{\sqrt{-2mE}}{\hbar} x} \quad (x > \frac{a}{2})
   \end{cases}
   $$
   利用连续性条件和 $\delta$ 函数带来的条件待定一下系数
   $$
   A e^{- \frac{\sqrt{-2mE}a}{2\hbar}} = 2B \cosh(\frac{\sqrt{-2mE} a}{2\hbar})
   $$

   $$
   - A \frac{\sqrt{-2mE}}{\hbar} e^{- \frac{\sqrt{-2mE}a}{2\hbar}} - 2B \frac{\sqrt{-2mE}}{\hbar} \sinh(\frac{\sqrt{-2mE}a}{2 \hbar}) = - \frac{2}{L} \psi \left(\frac{a}{2}\right )
   $$

   所以能级满足的条件是
   $$
   kL \left(1 + \tanh(\frac{ka}{2})\right) = 2
   $$
   即
   $$
   kL = 1 + e^{-ka}
   $$
   其中 $k = \frac{\sqrt{-2mE}}{\hbar}$

2. 考虑奇宇称的情况，不妨假设
   $$
   \psi (x) = \begin{cases}
   - A e^{\frac{\sqrt{-2mE}}{\hbar} x} \quad (x < -\frac{a}{2}) \\
   2B \sinh(\frac{\sqrt{-2mE}}{\hbar} x) \quad (- \frac{a}{2} < x < \frac{a}{2}) \\
   A e^{- \frac{\sqrt{-2mE}}{\hbar} x} \quad (x > \frac{a}{2})
   \end{cases}
   $$
   同样假设 $k = \frac{\sqrt{-2mE}}{\hbar}$，利用连续性条件和 $\delta$ 函数带来的条件待定一下系数
   $$
   A e^{-\frac{ka}{2}} = 2B \sinh(\frac{ka}{2})
   $$

   $$
   -kA e^{- \frac{ka}{2}} - 2kB \cosh(\frac{ka}{2}) = -\frac{2}{L} \psi \left(\frac{a}{2}\right)
   $$

   所以能级满足的条件是
   $$
   kL = 1 - e^{-ka}
   $$
   此时需要对于 $L$ 和 $a$ 的相对大小进行分类。当 $L < a$ 时，上述条件方程有解，所以该问题存在奇宇称的束缚态；当 $L > a$ 时，上述条件方程没有非零解，所以该问题不存在奇宇称的解。

3.4.1 分别求线性谐振子处于基态和第一激发态时, 粒子出现几率最大的位置。

基态谐振子的波函数是（其中 $\alpha = \sqrt{\frac{m \omega}{\hbar}}$）
$$
\psi_{0} (x) = \sqrt{\frac{\alpha}{\sqrt{\pi}}} e^{- \frac{\alpha^{2} x^{2}}{2}}
$$
所以粒子出现在位置 $x$ 的概率为
$$
P_{0} (x) = \psi^{*}_{0} (x) \psi_{0} (x) = \frac{\alpha}{\sqrt{\pi}} e^{- \alpha^{2} x^{2}}
$$
概率最大的位置对应
$$
\dv{P_{0} (x)}{x} = - \frac{2 \alpha^{3}}{\sqrt{\pi}} x e^{-\alpha^{2} x^{2}} = 0
$$
所以出现概率最大的位置是 $x =0$

第一激发态谐振子的波函数是
$$
\psi_{1} = \sqrt{\frac{2 \alpha}{\sqrt{\pi}}} \alpha x e^{- \frac{\alpha^{2} x^{2}}{2}}
$$
所以粒子出现在位置 $x$ 的概率为
$$
P_{1} (x) = \psi^{*}_{1} (x) \psi_{1} (x) = \frac{2 \alpha^{3}}{\sqrt{\pi}} x^{2} e^{- \alpha^{2} x^{2}}
$$
概率最大的位置对应
$$
\dv{P_{1} (x)}{x} = \frac{4 \alpha^{3}}{\sqrt{\pi}} x e^{-\alpha^{2} x^{2}} - \frac{4 \alpha^{5}}{\sqrt{\pi}} x^{3} e^{-\alpha^{2} x^{2}} = 0
$$
所以概率最大的位置是 $x= \pm \frac{1}{\alpha}$

3.4.2 半壁谐振子势是 $V(x)=\left\{\begin{array}{cc}+\infty & (x<0) \\ \frac{1}{2} m \omega^{2} x^{2} & (x>0)\end{array}\right.$ 求粒子在其中的能级和归一化波函数。

这个势对应了完整谐振子势的所有奇宇称解，即归一化的波函数为
$$
\psi_{k} (x) = \sqrt{\frac{\alpha}{\sqrt{\pi} 2^{2k} (2k + 1)!}} H_{2k + 1} (\alpha x) e^{- \frac{\alpha^{2} x^{2}}{2}} \quad (k = 0,1,2, \cdots)
$$
对应的能级是
$$
E_{k} = \left(2k + \frac{3}{2}\right) \hbar \omega
$$
3.4.3 假设势能为 
$$
V(x)=\begin{cases}+\infty \quad (x<0) \\ 
\frac{1}{2} m \omega^{2} x^{2} + \frac{v(v-1) \hbar^{2}}{2m x^{2}} \quad (x>0, v \geq \frac{1}{2} \text {可连续变化})\end{cases}
$$
求粒子在其中的能级。

>  方法提示: 基于 $x \rightarrow+\infty$ 和 $x \rightarrow 0^{+}$时 $\psi(x)$ 的行为, 可设 $\psi(x)=\xi^{\nu} \mathrm{e}^{-\xi^{2} / 2} F(\xi)$, 其中 $\xi=\sqrt{m \omega / \hbar} x, F(\xi)$ 是 $\xi$ 的多项式且 $F(0) \neq 0$; 再注意 $F(-\xi)$ 满足与 $F(\xi)$ 相同的方程, 所以可重新取自变量为 $\eta=\xi^{2}$ 而 $F(\eta)$ 是 $\eta$ 的 $n(n=0,1,2, \cdots)$ 次多项式; 然后仿照课文中的做法就可以了。结果提示: 这些能级是类谐振子的, 即, 是等间隔的。本题的结果还可以和 3.4.2 题的答案相对照。

写出定态的薛定谔方程
$$
\dv[2]{}{x} \psi (x) + \left(\frac{2mE}{\hbar^{2}} - \alpha^{4} x^{2} - \frac{\nu (\nu - 1)}{x^{2}}\right) \psi (x) = 0
$$
假设
$$
\psi (x) = \xi^{\nu} \mathrm{e}^{- \frac{\xi^{2}}{2}} F(\xi)
$$
其中 $\xi = \alpha x$，那么经过一系列化简，原方程可以变为
$$
F'' (\xi) + \left(\frac{2 \nu}{\xi} - 2 \xi\right) F' (\xi) + \left(\frac{2E}{\hbar \omega} - 2 \nu - 1\right) F(\xi) = 0
$$
令 $\frac{2E}{\hbar \omega} = \lambda$，并且作代换 $\eta=\xi^{2}$，继续把方程化简为
$$
4 \eta F'' (\eta) + (4 \nu + 2 - 4 \eta) F' (\eta) + (\lambda - 2 \nu - 1) F (\eta) = 0
$$
利用级数解法求解此方程，假设
$$
F (\eta) = \sum_{k = 0}^{\infty} C_{k} \eta^{k}
$$
那么系数的递推公式可以表示为
$$
C_{k} = \frac{4k + 2 \nu + 1 - \lambda}{2 (2k + 2 \nu + 1) (k + 1)} C_{k}
$$
可以看出，为了避免发散，能量的取值仅仅可以为分立的
$$
\lambda = 4k + 2 \nu + 1
$$
即
$$
E_{k} = \left(2k + \nu + \frac{1}{2}\right) \hbar \omega
$$
当 $\nu = 1$ 时，这个取值就退化到了上一问的情形。