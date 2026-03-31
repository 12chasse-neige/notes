# 量子力学 第4次作业

Chasse_neige

4.2.1 (a) 记 $\hat{S}^{-1}$ 为 $\hat{S}$ 的逆算符即 $\hat{S}^{-1} \hat{S} = \hat{S} \hat{S}^{-1} = \hat{I}$，$\hat{I}$ 是单位算符。求证：$(\hat{S}^{-1})^{\dagger} = (\hat{S}^{\dagger})^{-1}$。 

证明：

由于 $\hat{S} \hat{S}^{-1} = \hat{S}^{-1} \hat{S} = \hat{I}$，所以 $(\hat{S}^{-1})^{\dagger} \hat{S}^{\dagger} = \hat{S}^{\dagger} (\hat{S}^{-1})^{\dagger} = I$，所以 $(\hat{S}^{\dagger})^{-1} = (\hat{S}^{-1})^{\dagger}$

(b) $\hat{F}$ 的表象变换是 $\hat{F}' = \hat{S} \hat{F} \hat{S}^{-1}$。若 $\hat{F}$ 是 Hermitian 算符，问 $\hat{S}$ 满足什么条件能使 $\hat{F}'$ 仍是 Hermitian 算符？

$$
\hat{F'}^{\dagger} = (\hat{S}^{-1})^{\dagger} \hat{F}^{\dagger} \hat{S}^{\dagger} = (\hat{S}^{\dagger})^{-1} \hat{F} \hat{S}^{\dagger}
$$
$\hat{F'}$ 是 Hermitian 的要求 $\hat{F'}^{\dagger} = \hat{F'}$，所以
$$
(\hat{S}^{\dagger})^{-1} \hat{F} \hat{S}^{\dagger} = \hat{S} \hat{F} \hat{S}^{-1}
$$

$$
\hat{F} \hat{S}^{\dagger} \hat{S} = \hat{S}^{\dagger} \hat{S} \hat{F}
$$

即 $\hat{S}^{\dagger} \hat{S}$ 必须和任意 Hermitian 算符对易。所以得到
$$
\hat{S}^{\dagger} \hat{S} = n \hat{I}
$$
经过适当的 normalization 之后可以说 $\hat{S}$ 是幺正的。

4.2.2 不确定关系还可以推广。 
(a) 设 $\hat{F}, \hat{G}$ 是 Hermitian 算符，记 $\{\hat{F}, \hat{G}\} \equiv \hat{F} \hat{G} + \hat{G} \hat{F}$，那么请证明成立不等式 $\overline{\hat{F}^{2}} \cdot \overline{\hat{G}^{2}} \geq \frac{1}{4} \overline{[\hat{F}, \hat{G}]^{2}} + \frac{1}{4} \overline{\{\hat{F}, \hat{G}\}^{2}}$

设 $\hat{F}, \hat{G}$ 为 Hermitian 算符，考虑任意态 $|\psi\rangle$，令 $|\alpha\rangle = \hat{F}|\psi\rangle$，$|\beta\rangle = \hat{G}|\psi\rangle$，由 Schwarz 不等式  
$$
\langle\alpha|\alpha\rangle \langle\beta|\beta\rangle \ge |\langle\alpha|\beta\rangle|^{2}
$$
即  
$$
\langle\hat{F}^{2}\rangle \langle\hat{G}^{2}\rangle \ge |\langle\hat{F}\hat{G}\rangle|^{2}
$$
将 $\langle\hat{F}\hat{G}\rangle$ 分解为实部与虚部
$$
\langle\hat{F}\hat{G}\rangle = \frac{1}{2}\langle\{\hat{F},\hat{G}\}\rangle + \frac{1}{2}\langle[\hat{F},\hat{G}]\rangle
$$
其中 $\langle\{\hat{F},\hat{G}\}\rangle$ 为实数，$\langle[\hat{F},\hat{G}]\rangle$ 为纯虚数。故  
$$
|\langle\hat{F}\hat{G}\rangle|^{2} = \frac{1}{4}\langle\{\hat{F},\hat{G}\}\rangle^{2} + \frac{1}{4}\langle[\hat{F},\hat{G}]\rangle^{2}
$$
代入即得  
$$
\overline{\hat{F}^{2}} \cdot \overline{\hat{G}^{2}} \geq \frac{1}{4} \overline{\{\hat{F}, \hat{G}\}}^{2} + \frac{1}{4} \overline{[\hat{F}, \hat{G}]}^{2}
$$
(b) 证明推广的不确定关系 $(\Delta \hat{F})^{2} \cdot (\Delta \hat{G})^{2} \geq \frac{1}{4} \overline{[\hat{F}, \hat{G}]^{2}} + \frac{1}{4} \overline{\{\Delta \hat{F}, \Delta \hat{G}\}^{2}}$。

定义 $\Delta\hat{F} = \hat{F} - \langle\hat{F}\rangle$，$\Delta\hat{G} = \hat{G} - \langle\hat{G}\rangle$，它们也是 Hermitian 算符。将 (a) 应用于 $\Delta\hat{F}$ 和 $\Delta\hat{G}$，注意到  
$$
\overline{(\Delta\hat{F})^{2}} = (\Delta\hat{F})^{2},\quad \overline{(\Delta\hat{G})^{2}} = (\Delta\hat{G})^{2},\quad [\Delta\hat{F},\Delta\hat{G}] = [\hat{F},\hat{G}]
$$
即得  
$$
(\Delta \hat{F})^{2} \cdot (\Delta \hat{G})^{2} \geq \frac{1}{4} \overline{[\hat{F}, \hat{G}]^{2}} + \frac{1}{4} \overline{\{\Delta \hat{F}, \Delta \hat{G}\}^{2}}
$$

4.3.1 设粒子的波函数是 $\psi(x) = C[\sin^{2} kx + \frac{1}{2} \cos kx]$ ($-\infty < x < +\infty$, $k > 0$)，求它的动量测量值和相应的测量几率、动量平均值和动能平均值。提示：把 $\psi(x)$ 化为 $e^{\frac{i}{\hbar}px}$ 的线性组合。由于 $|\psi(x)|^{2}$ 在 $-\infty < x < +\infty$ 上的积分是发散的，所以无需求 $C$，但是所问的值都是有意义的。
$$
\psi(x) = C \frac{1 - \cos (2kx)}{2} + \frac{C}{2} \cos kx \\ =
\frac{C}{2} \left(1 + \frac{1}{2} e^{ikx} + \frac{1}{2} e^{-ikx} - \frac{1}{2} e^{2ikx} + \frac{1}{2} e^{-2ikx}\right)
$$
所以可能的动量测量值是 $\hbar k, -\hbar k, 2 \hbar k, -2 \hbar k, 0$，对应的概率分别是

|   $\hbar k$   |  $-\hbar k$   |  $2 \hbar k$  | $-2 \hbar k$  |       0       |
| :-----------: | :-----------: | :-----------: | :-----------: | :-----------: |
| $\frac{1}{8}$ | $\frac{1}{8}$ | $\frac{1}{8}$ | $\frac{1}{8}$ | $\frac{1}{2}$ |

对应的动量平均值是
$$
\bar{p} = 0
$$
动能平均值是
$$
\bar{E}_{k} = \frac{1}{2} \left(\frac{\hbar^{2} k^{2}}{4m} + \frac{4 \hbar^{2} k^{2}}{4m}\right) = \frac{5 \hbar^{2} k^{2}}{8m}
$$
4.3.2 $\psi_{0}(x) = \frac{\sqrt{\alpha}}{4\sqrt[4]{\pi}} e^{-\alpha^{2}x^{2}/2}$ 通称为 Gauss 波包，是粒子的真实物理状态的一个典型代表，但并不意味着粒子在抛物线势阱中运动。设我们取一个自由粒子的波函数的初值为 $\Psi(x, 0) = \psi_{0}(x)$，请验证下面这个与时间有关的 Gauss 波包 $\Psi(x, t) = \frac{\sqrt{\alpha}}{4\sqrt[4]{\pi}} \sqrt{f(t)} \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right)$ 其中 $f(t) = \left(1 + i \frac{\hbar \alpha^{2}t}{m}\right)^{-1}$，服从含时间的自由粒子的 Schrödinger 方程。这个波包的宽度是随时间而增加的，所以这个现象称为波包弥散。

含时间的自由粒子的 Schrödinger 方程是
$$
i \hbar \pdv{}{t} \Psi (x, t) = - \frac{\hbar^{2}}{2m} \pdv[2]{}{x} \Psi (x, t)
$$
带入
$$
LHS = i \hbar \pdv{}{t} \frac{\sqrt{\alpha}}{4\sqrt[4]{\pi}} \sqrt{f(t)} \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right) \\ = 
\frac{i \hbar \sqrt{\alpha}}{4\sqrt[4]{\pi}} \left(\frac{f' (t)}{2 \sqrt{f(t)}} - \frac{\alpha^{2} x^{2}}{2} \sqrt{f (t)} f'(t) \right) \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right)
$$
考虑到
$$
f' (t) = - i \frac{\hbar \alpha^{2}}{m} f^{2} (t)
$$
所以上述式子可以表示为
$$
LHS = \frac{i \hbar \sqrt{\alpha}}{4\sqrt[4]{\pi}} \left(- i\frac{\hbar \alpha^{2}}{2m} (f (t))^{\frac{3}{2}} + i\frac{\hbar \alpha^{4} x^{2}}{2m} (f(t))^{\frac{5}{2}} \right) \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right)
$$
我们再考虑右侧
$$
RHS = - \frac{\hbar^{2}}{2m} \pdv[2]{}{x} \frac{\sqrt{\alpha}}{4\sqrt[4]{\pi}} \sqrt{f(t)} \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right) \\ =
\frac{\hbar^{2} \sqrt{\alpha}}{8 m \sqrt[4]{\pi}} \pdv{}{x} \alpha^{2} x\sqrt{f^{3} (t)} \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right) \\ = 
\frac{\hbar^{2} \sqrt{\alpha}}{8 m \sqrt[4]{\pi}} \left(\alpha^{2} (f(t))^{\frac{3}{2}} - \alpha^{4} x^{2} (f(t))^{\frac{5}{2}}\right) \exp\left(-\frac{\alpha^{2}x^{2}}{2} f(t)\right)
$$
比较之后发现 $LHS = RHS$ ，所以该波函数是满足含时薛定谔方程的。

4.3.3（选做）求线性谐振子的任意能量本征态 $\psi_{n}(x)$（参见 §3.4）的 Fourier 变换 $\phi_{n}(p)$

>提示：具体地说，$\psi_{n}(\xi)=(-1)^{n} \sqrt{\frac{1}{\sqrt{\pi} 2^{n} n !}} \mathrm{e}^{\xi^{2} / 2} \frac{\mathrm{d}^{n}}{\mathrm{~d} \xi^{n}} \mathrm{e}^{-\xi^{2}}$ ($\xi=\sqrt{\frac{m \omega}{\hbar}} x$)，可以反复进行分部积分，并应用下面的定理：如果 $f(x, y)=g(a x+b y)$，则 $\frac{1}{a} \frac{\partial f}{\partial x}=\frac{1}{b} \frac{\partial f}{\partial y}$，其中 $a, b$ 是常数。

$$
\phi_{n} (p) = \frac{1}{\sqrt{2 \pi \hbar} \alpha} \int_{- \infty}^{\infty} \psi_{n} (\xi) e^{- i \frac{p}{\hbar \alpha} \xi} \dd{\xi}
$$

其中 $\alpha = \sqrt{\frac{m \omega}{\hbar}}$ ，带入线性谐振子的能量本征态表达式
$$
\psi_{n}(\xi)=(-1)^{n} \sqrt{\frac{1}{\sqrt{\pi} 2^{n} n !}} \mathrm{e}^{\frac{\xi^{2}}{2}} \dv[n]{}{\xi} \mathrm{e}^{-\xi^{2}}
$$
所以上述积分就是
$$
\phi_{n} (p) = \frac{(-1)^{n}}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} \int_{-\infty}^{\infty} e^{\frac{\xi^{2}}{2}} e^{- \frac{ip}{\hbar \alpha} \xi} \dv[n]{}{\xi} e^{- \xi^{2}} \dd{\xi} \\ =
\frac{1}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} \int_{-\infty}^{\infty} \dv[n]{}{\xi} \left(e^{\frac{\xi^{2}}{2} - \frac{i p}{\hbar \alpha} \xi}\right) e^{- \xi^{2}} \dd{\xi} \\ =
\frac{1}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} \int_{- \infty}^{\infty} \dv[n]{}{\xi} \left(e^{\frac{1}{2} (\xi - \frac{ip}{\hbar \alpha})^{2} + \frac{p^{2}}{2 \hbar^{2} \alpha^{2}}} \right) e^{- \xi^{2}} \dd{\xi}
$$

利用提示中的定理
$$
\pdv[n]{}{\xi} = i^{n} \pdv[n]{}{\eta}
$$
其中 $\eta = \frac{p}{\hbar \alpha}$，所以上面那个积分可以表示为
$$
\frac{1}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} \int_{- \infty}^{\infty} i^{n} \pdv[n]{}{\eta} \left(e^{\frac{1}{2} (\xi - i \eta)^{2}} \right) e^{\frac{\eta^{2}}{2}} e^{- \xi^{2}} \dd{\xi} \\ =
\frac{i^{n}}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} e^{\frac{\eta^{2}}{2}} \pdv[n]{}{\eta} \int_{- \infty}^{\infty}  \left(e^{\frac{1}{2} (\xi - i \eta)^{2}} \right) e^{- \xi^{2}} \dd{\xi} \\ =
\frac{i^{n}}{\alpha} \sqrt{\frac{1}{2^{n + 1} \hbar \pi^{\frac{3}{2}} n!}} e^{\frac{\eta^{2}}{2}} \pdv[n]{}{\eta} e^{- \eta^{2}} \int_{- \infty}^{\infty} e^{-\frac{1}{2} (\xi + i \eta)^{2}} \dd{\xi}  \\ =
\frac{i^{n}}{\alpha} \sqrt{\frac{1}{2^{n} \hbar \pi^{\frac{1}{2}} n!}} e^{\frac{\eta^{2}}{2}} \dv[n]{}{\eta} e^{- \eta^{2}}
$$
所以
$$
\phi_{n} (p) = i^{n} \sqrt{\frac{1}{m \omega}} \sqrt{\frac{1}{\sqrt{\pi} 2^{n} n!}} e^{\frac{\eta^{2}}{2}} \dv[n]{}{\eta} e^{- \eta^{2}}
$$
4.4.1 在经典力学里，动量和角动量都是矢量，二者的区别只是动量是极矢量而角动量是轴矢量。但是在量子力学里动量和角动量的区别要大得多。请指出这些区别都有哪些？

量子力学中动量与角动量的主要区别：

1. 动量算符各分量对易，角动量算符各分量不对易。
2. 动量本征值连续，角动量本征值离散。
3. 动量是平移生成元，角动量是旋转生成元。

4.4.2 绕定轴转动的转子的 Hamiltonian 是 $\hat{H}=\frac{1}{2 I} \hat{L}_{z}^{2}$（$\hat{L}_{z}=-\mathrm{i} \hbar \frac{\mathrm{d}}{\mathrm{d} \varphi}$），其中 $\varphi$ 是转动角，$I$ 是对定轴的转动惯量。求它的能级和归一化的能量本征函数，并指出每个能级的简并度。
本征方程

$$
-\frac{\hbar^{2}}{2I} \dv[2]{\psi}{\varphi} = E \psi
$$
 的解为 $\psi_{m}(\varphi)= C_{m} e^{im\varphi}$，$m$ 为整数。代入得能量  
$$
E_{m} = \frac{\hbar^{2} m^{2}}{2I}, \quad m=0,\pm1,\pm2,\dots
$$
对应的归一化本征函数为 $\psi_{m}(\varphi)=\frac{1}{\sqrt{2\pi}} e^{im\varphi}$
简并度：$m=0$ 时非简并；$|m|\ge 1$ 时二重简并。

4.4.3 在量子力学里，满足 $[\hat{L}_{i}, \hat{S}]=0$（$i=x, y, z$）的算符 $\hat{S}$ 称为标量算符，满足 $[\hat{L}_{i}, \hat{V}_{j}]=\mathrm{i} \hbar \varepsilon_{i j k} \hat{V}_{k}$

（$i, j, k=1,2,3=x, y, z$）的算符 $\vec{\hat{V}}=\left(\hat{V}_{x}, \hat{V}_{y}, \hat{V}_{z}\right)$ 称为矢量算符。求证：(a) $\hat{\vec{r}}$ 和 $\hat{\vec{p}}$ 是矢量算符。 

利用 $\hat{L}_{i} = \epsilon_{ikl} \hat{x}_{k} \hat{p}_{l}$ 及基本对易式 $[x_{i}, p_{j}]=i\hbar\delta_{ij}$，计算得  
$$
[\hat{L}_{i}, \hat{x}_{j}] = [\epsilon_{ikl} \hat{x}_{k} \hat{p}_{l}, \hat{x}_{j}] = \epsilon_{ikl} \hat{x}_{k} [\hat{p}_{l}, \hat{x}_{j}] = i\hbar \epsilon_{ijk} \hat{x}_{k}
$$

$$
[\hat{L}_{i}, \hat{p}_{j}] = [\epsilon_{ikl} \hat{x}_{k} \hat{p}_{l}, \hat{p}_{j}] = [\hat{x}_{k}, \hat{p}_{j}] \epsilon_{ikl} \hat{p}_{l} = i\hbar \epsilon_{ijk} \hat{p}_{k}
$$



故 $\hat{\vec{r}}$ 和 $\hat{\vec{p}}$ 均为矢量算符。

(b) 若 $\hat{\vec{a}}$ 和 $\hat{\vec{c}}$ 是矢量算符，则 $\hat{\vec{a}} \cdot \hat{\vec{c}}=\hat{a}_{x} \hat{c}_{x}+\hat{a}_{y} \hat{c}_{y}+\hat{a}_{z} \hat{c}_{z}$ 是标量算符。

计算  
$$
[\hat{L}_{i}, \hat{a}_{j} \hat{c}_{j}] = [\hat{L}_{i}, \hat{a}_{j}] \hat{c}_{j} + \hat{a}_{j} [\hat{L}_{i}, \hat{c}_{j}] = i\hbar \epsilon_{ijk} (\hat{a}_{k} \hat{c}_{j} + \hat{a}_{j} \hat{c}_{k}).
$$
交换第二项指标 $j \leftrightarrow k$，得 $\epsilon_{ijk} \hat{a}_{j} \hat{c}_{k} = -\epsilon_{ijk} \hat{a}_{k} \hat{c}_{j}$，两项相消，故 $[\hat{L}_{i}, \hat{S}]=0$，即 $\hat{S}$ 为标量算符。

4.4.4 若 $L_{z}$ 有确定值，问 $\bar{L}_{x}, \bar{L}_{y}=$？提示：其实这里无需用到 $\hat{L}_{x}, \hat{L}_{y}$ 的表达式。

若 $\hat{L}_{z}$ 有确定值（态为 $\hat{L}_{z}$ 的本征态），由于 $[\hat{L}_{z}, \hat{L}_{x}] = i\hbar \hat{L}_{y} \neq 0$，$[\hat{L}_{z}, \hat{L}_{y}] = -i\hbar \hat{L}_{x} \neq 0$，$\hat{L}_{x}$ 和 $\hat{L}_{y}$ 与 $\hat{L}_{z}$ 不对易，因此它们没有确定值。但是我们可以利用对易关系求出其期望
$$
i \hbar \hat{L}_{y} \ket{\psi} = \comm{\hat{L}_{z}}{\hat{L}_{x}} \ket{\psi} = (\hat{L}_{z} - L_{z}) \hat{L}_{x} \ket{\psi}
$$
所以对上式平均之后得到 $\bar{L}_{x} = 0$，同理 $\bar{L}_{y} = 0$

