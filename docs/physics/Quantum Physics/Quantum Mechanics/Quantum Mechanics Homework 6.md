# 量子力学 第6次作业

Chasse_neige

## 第六章 中心力场

6.1.1 把二体系统的动能算符化为质心的动能算符与约化粒子的动能算符之和。

引入 $\vec{R} = \frac{m_{1}\vec{r}_{1} + m_{2} \vec{r}_{2}}{m_{1} + m_{2}}$, $\vec{r} = \vec{r}_{1} - \vec{r}_{2}$，此时质心动能以及约化粒子的动能算符可以化为
$$
\hat{T} = - \frac{\hbar^{2}}{2M} \nabla_{R}^{2} - \frac{\hbar^{2}}{2\mu} \nabla_{r}^{2}
$$
考虑
$$
\nabla^{2}_{r_{1}} = \sum_{i} \pdv[2]{}{r_{1i}} = \sum_{i} \pdv{}{r_{1i}} \left(\sum_{j} \pdv{R_{j}}{r_{1i}} \pdv{}{R_{j}} + \pdv{r_{j}}{r_{1i}} \pdv{}{r_{j}}\right) \\ =
\sum_{i} \pdv{}{r_{1i}} \left(\frac{m_{1}}{m_{1} + m_{2}} \pdv{}{R_{i}} + \pdv{}{r_{i}}\right) = \sum_{i} \left(\frac{m_{1}^{2}}{(m_{1} + m_{2})^{2}} \pdv[2]{}{R_{i}} + 2 \frac{m_{1}}{m_{1} + m_{2}} \pdv{}{R_{i}} \pdv{}{r_{i}} + \pdv[2]{}{r_{i}}\right)
$$

$$
\nabla^{2}_{r_{2}} = \sum_{i} \pdv[2]{}{r_{2i}} = \sum_{i} \pdv{}{r_{2i}} \left(\sum_{j} \pdv{R_{j}}{r_{2i}} \pdv{}{R_{j}} + \pdv{r_{j}}{r_{2i}} \pdv{}{r_{j}}\right) \\ =
\sum_{i} \pdv{}{r_{2i}} \left(\frac{m_{2}}{m_{1} + m_{2}} \pdv{}{R_{i}} - \pdv{}{r_{i}}\right) = \sum_{i} \left(\frac{m_{2}^{2}}{(m_{1} + m_{2})^{2}} \pdv[2]{}{R_{i}} - 2 \frac{m_{2}}{m_{1} + m_{2}} \pdv{}{R_{i}} \pdv{}{r_{i}} + \pdv[2]{}{r_{i}}\right)
$$

所以动能算符可以化为
$$
\hat{T} = - \frac{\hbar^{2}}{2 m_{1}} \nabla_{r_{1}}^{2} - \frac{\hbar^{2}}{2 m_{2}} \nabla^{2}_{r_{2}} \\ = 
- \frac{\hbar^{2} (m_{1} + m_{2})}{2 (m_{1} + m_{2})^{2}} \nabla_{R}^{2} - \frac{\hbar^{2}}{2} \left(\frac{1}{m_{1}} + \frac{1}{m_{2}}\right) \nabla_{r}^{2} \\ =
- \frac{\hbar^{2}}{2M} \nabla_{R}^{2} - \frac{\hbar^{2}}{2\mu} \nabla_{r}^{2}
$$
6.1.2 质量为 $\mu$ 的粒子在势阱
$$
V(r)= 
\begin{cases} 
-V_{0} \ (< 0), & (0 \le r < a) \\\
0, & (r > a)
\end{cases}
$$
中运动并处于束缚的 S 态，求它的能量 $E$ 应满足的超越方程。问这个势阱窄 ($a$ 小) 和浅 ($V_{0}$ 小) 到什么程度时，它会容纳不了任何束缚态？

此时波函数满足的径向方程为
$$
\frac{1}{r^{2}} \dv{}{r}(r^{2} \dv{R}{r}) + \frac{2 \mu}{\hbar^{2}} \left(E - V (r) - \frac{l(l + 1) \hbar^{2}}{2 \mu r^{2}}\right) R = 0
$$
引入 $u (r) = r R(r)$ ，方程可以化为
$$
\dv[2]{u}{r} + \frac{2 \mu}{\hbar^{2}} \left(E - V (r) - \frac{l(l + 1) \hbar^{2}}{2 \mu r^{2}}\right) u = 0
$$
所以 $s$ 束缚态需要满足
$$
\begin{cases} 
\dv[2]{u}{r} + \frac{2 \mu}{\hbar^{2}} \left(E + V_{0}\right) u = 0 \quad (r < a) \\
\dv[2]{u}{r} + \frac{2 \mu E}{\hbar^{2}} u = 0 \quad (r > a)
\end{cases}
$$
令 $k = \sqrt{\frac{2 \mu (E + V_{0})}{\hbar^{2}}}$, $\kappa = \sqrt{-\frac{2 \mu E}{\hbar^{2}}}$，此时方程的解可以表示为
$$
u (r) = \begin{cases}
A \sin (kr) \quad (r < a) \\
B e^{- \kappa r} \quad (r \geq a)
\end{cases}
$$
满足边界条件要求
$$
\tan ka = - \frac{k}{\kappa}
$$
所以势阱内能够容纳束缚态的条件是
$$
\tan(\sqrt{\frac{2 \mu (E + V_{0})}{\hbar^{2}}} a) = - \sqrt{\frac{E + V_{0}}{-E}}
$$
令 $x = \frac{-E}{V_{0}}$，上述条件可以化为
$$
\tan (\frac{\sqrt{2 \mu V_{0}}}{\hbar} a \sqrt{1 - x}) = - \sqrt{\frac{1 - x}{x}}
$$
所以
$$
\sin (\frac{\sqrt{2 \mu V_{0}}}{\hbar} a \sqrt{1 - x}) = \sqrt{1 - x}
$$
有解的条件就是
$$
\frac{\sqrt{2 \mu V_{0}}}{\hbar} a > \frac{\pi}{2}
$$
即
$$
V_{0} a^{2} > \frac{\pi^{2} \hbar^{2}}{8 \mu}
$$
6.3.1 在直角坐标系和球坐标系中分别算出三维各向同性谐振子的能级 $E_{N}$ 的简并度。

在直角坐标系中
$$
\hat{H} = - \frac{\hbar^{2}}{2 \mu} \left(\pdv[2]{}{x} + \pdv[2]{}{y} + \pdv[2]{}{z}\right) + \frac{1}{2} \mu \omega^{2} (x^{2} + y^{2} + z^{2})
$$
所以我们可以简单的对于三个方向分离变量
$$
- \frac{\hbar^{2}}{2 \mu} \dv[2]{}{x} \psi (x) + \frac{1}{2} \mu \omega^{2} x^{2} \psi(x) = E_{x} \psi(x)
$$
根据一维谐振子的解的结论，容易得到
$$
E_{x} = (n_{x} + \frac{1}{2}) \hbar \omega
$$
类似地处理另外两个方向，可以得到
$$
E = (n_{x} + n_{y} + n_{z} + \frac{3}{2}) \hbar \omega
$$
所以对于 $E_{N}$，能量简并度为
$$
g_{N} = \frac{(N + 2)(N + 1)}{2}
$$
在球坐标下处理这个问题
$$
\hat{H} = - \frac{\hbar^{2}}{2 \mu r^{2}} \pdv{}{r} \left(r^{2} \pdv{}{r}\right) + \frac{\hat{L^{2}}}{2 \mu r^{2}} + \frac{1}{2} \mu \omega^{2} r^{2}
$$
所以径向方程就是
$$
\dv[2]{}{r} u + \frac{2 \mu}{\hbar^{2}} \left(E - \frac{\mu \omega^{2}}{2} r^{2} - \frac{l (l + 1) \hbar^{2}}{2 \mu r^{2}} \right) u = 0
$$
进行代换 $\rho = \sqrt{\frac{\mu \omega}{\hbar}} r = \alpha r$, $\lambda = \frac{2 E}{\hbar \omega}$，此时
$$
u'' + \lambda u - \rho^{2} u - \frac{l (l + 1)}{\rho^{2}} u = 0
$$
即
$$
R'' (\rho) + \frac{2}{\rho} R'(\rho) + \left(\lambda - \rho^{2} - \frac{l (l + 1)}{\rho^{2}}\right) R (\rho) = 0
$$
进行换元
$$
R (\rho) = f (\rho) \rho^{l} e^{- \frac{\rho^{2}}{2}}
$$
径向方程化简为
$$
f'' (\rho) + 2 \left(\frac{l + 1}{\rho} - \rho\right) f' (\rho) + (\lambda - 2l - 3) f (\rho) = 0
$$
再进行代换 $\xi = \rho^{2}$，方程化为标准的合流超几何方程形式
$$
\xi \dv[2]{f}{\xi} + \left(l + \frac{3}{2} - \xi\right) \dv{f}{\xi} + \frac{1}{4} (\lambda - 2l - 3) f = 0
$$
得到系数的递推形式
$$
c_{k + 1} = \frac{2l + 3 + 4k - \lambda}{2 (2l + 3 + 2k) (k + 1)} c_{k}
$$
所以定态的能量量子化条件为
$$
2l + 3 + 4k = \lambda
$$
即
$$
E = (2k + l + \frac{3}{2}) \hbar \omega
$$
所以能级 $E_{N}$ 对应的角动量可以是
$$
l = N, N-2, N-4, \cdots
$$
对于单个 $l$，磁量子数的简并度为 $2l + 1$，所以总的简并度为


$$
g_{N} = \sum_{j = 0}^{[\frac{N}{2}]}(2N - 4j + 1) = \frac{(N + 2) (N + 1)}{2}
$$
6.3.2 三维各向同性谐振子的第一激发态 $N=1$ 的能级是 3 重简并的。请分别在直角坐标系中和球坐标系中写出它的简并波函数，并且给出从直角坐标系波函数到球坐标系波函数的变换。

直角坐标系归一化波函数为

$$
\psi_{100}(x,y,z) = \sqrt{2} \alpha^{5/2} \pi^{-3/4} x e^{-\alpha^{2} r^{2}/2}
$$

$$
\psi_{010}(x,y,z) = \sqrt{2} \alpha^{5/2} \pi^{-3/4} y e^{-\alpha^{2} r^{2}/2}
$$

$$
\psi_{001}(x,y,z) = \sqrt{2} \alpha^{5/2} \pi^{-3/4} z e^{-\alpha^{2} r^{2}/2}
$$

其中 $\alpha = \sqrt{m\omega/\hbar}$

球坐标系中对应量子数 $n=1, l=1, m = -1,0,1$ 的波函数为
$$
\psi_{1,1,0}(r,\theta,\phi) = \sqrt{\frac{8\alpha^{5}}{3\sqrt{\pi}}} r e^{-\alpha^{2} r^{2}/2} Y_{10}(\theta,\phi)
$$

$$
\psi_{1,1,1}(r,\theta,\phi) = \sqrt{\frac{8\alpha^{5}}{3\sqrt{\pi}}} r e^{-\alpha^{2} r^{2}/2} Y_{11}(\theta,\phi)
$$

$$
\psi_{1,1,-1}(r,\theta,\phi) = \sqrt{\frac{8\alpha^{5}}{3\sqrt{\pi}}} r e^{-\alpha^{2} r^{2}/2} Y_{1-1}(\theta,\phi)
$$

其中球谐函数为
$$
Y_{10} = \sqrt{\frac{3}{4\pi}} \cos\theta, \quad Y_{11} = -\sqrt{\frac{3}{8\pi}} \sin\theta e^{i\phi}, \quad Y_{1-1} = \sqrt{\frac{3}{8\pi}} \sin\theta e^{-i\phi}
$$

直角坐标到球坐标的变换关系为
$$
\psi_{z} = \psi_{1,1,0}
$$

$$
\psi_{x} = \frac{1}{\sqrt{2}} (-\psi_{1,1,1} + \psi_{1,1,-1})
$$

$$
\psi_{y} = \frac{i}{\sqrt{2}} (\psi_{1,1,1} + \psi_{1,1,-1})
$$

写成矩阵形式，就是
$$
\begin{pmatrix} \psi_{x} \\ \psi_{y} \\ \psi_{z} \end{pmatrix} = 
\begin{pmatrix} -\frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \\ \frac{i}{\sqrt{2}} & 0 & \frac{i}{\sqrt{2}} \\ 0 & 1 & 0 \end{pmatrix}
\begin{pmatrix} \psi_{1,1,1} \\ \psi_{1,1,0} \\ \psi_{1,1,-1} \end{pmatrix}
$$

6.3.3（选做）请在平面极坐标系中求解二维各向同性谐振子，即求出它的能级和各能级的简并度。提示：参看习题 3.4.3。

在平面极坐标下分离变量，得到
$$
\hat{H} = - \frac{\hbar^{2}}{2 \mu} \left(\frac{1}{r}\pdv{}{r} \left(r \pdv{}{r}\right) + \frac{1}{r^{2}} \pdv[2]{}{\theta}\right) + \frac{1}{2} \mu \omega^{2} r^{2}
$$
利用角动量算符以及其本征态的性质，对于角动量本征态
$$
\hat{H} = -\frac{\hbar^{2}}{2 \mu r} \pdv{}{r} \left(r \pdv{}{r}\right) + \frac{\hat{L}^{2}}{2 \mu r^{2}} + \frac{\mu \omega^{2}}{2} r^{2}
$$
分离变量得到径向方程
$$
\frac{1}{r} \dv{}{r} (r \dv{}{r} \psi(r)) + \frac{2 \mu E}{\hbar^{2}} \psi(r) - \frac{m_{l}^{2}}{r^{2}} \psi (r) - \frac{\mu^{2} \omega^{2}}{\hbar^{2}} r^{2} \psi (r) = 0
$$
进行代换 $\alpha = \sqrt{\frac{\mu \omega}{\hbar}}$
$$
\psi''(r) + \frac{1}{r} \psi'(r) + \left(\frac{2 \mu E}{\hbar^{2}} - \alpha^{4} r^{2}-\frac{m_{l}^{2}}{r^{2}}\right) \psi (r) = 0
$$
再代换 $\xi = \alpha r$
$$
\psi'' (\xi) + \frac{\psi' (\xi)}{\xi} + \left(\frac{2 E}{\hbar \omega} - \xi^{2} - \frac{m_{l}^{2}}{\xi^{2}}\right) \psi(\xi) = 0
$$
记 $\lambda = \frac{2 E}{\hbar \omega}$，所以
$$
\psi'' (\xi) + \frac{\psi' (\xi)}{\xi} + \left(\lambda - \xi^{2} - \frac{m_{l}^{2}}{\xi^{2}}\right) \psi(\xi) = 0
$$
根据该方程在近场和远场处的渐近行为，我们进行换元
$$
\psi (\xi) = \xi^{|m_{l}|} e^{- \frac{\xi^{2}}{2}} f (\xi)
$$
带入，化简，得到系数函数的方程
$$
f'' + \left(\frac{2 m_{l} + 1}{\xi} - 2 \xi\right) f' + (\lambda - 2 m_{l} - 2) f = 0
$$
再进行代换 $\eta = \xi^{2}$，得到
$$
4 \eta f'' + 4 (m_{l} + 1 - \eta) f' + (\lambda - 2 m_{l} - 2) f = 0
$$
所以递推关系为
$$
c_{k + 1} = \frac{4k + 2 + 2 m_{l} - \lambda}{4 (k + 1) (k + m_{l} + 1)} c_{k}
$$
所以定态的能量量子化条件是
$$
\lambda = 4 k + 2 m_{l} + 2
$$
得到二维谐振子的能级公式
$$
E_{n} = \hbar \omega (n + 1), \quad n = 0,1,2,\dots
$$
其中 $n = 2n_{\rho} + |m_{l}|$，$n_{\rho} = 0,1,2,\dots$ 为径向量子数，$m_{l} = 0, \pm 1, \pm 2, \dots$ 为角动量量子数。

简并度：对于给定 $n$，可能的 $m_{l}$ 值为 $n, n-2, \dots, -n$，零 $|m_{l}|$ 对应两个简并态（$m_{l} = \pm |m_{l}|$），$m_{l}=0$ 对应一个态，所以简并度为 $n+1$

6.4.1 求电子偶素和缪子 muon 氢原子 (以 muon $(m_{\mu}=207 m_{e})$ 代替氢原子中的电子) 的基态能量。

对于电子偶素，电子和正电子质量相等 $m_{1} = m_{2} = m_{e}$，约化质量 $\mu = m_{e}/2$，基态能量
$$
E_{1}^{Ps} = -\frac{\mu c^{2} \alpha^{2}}{2} = -\frac{1}{2} \cdot \frac{m_{e} c^{2} \alpha^{2}}{2} \approx -6.8 \, \text{eV}
$$

缪子质量 $m_{\mu} = 207 m_{e}$，质子质量 $m_{p} \approx 1836 m_{e}$，约化质量 $\mu \approx 186 m_{e}$，基态能量
$$
E_{1}^{\mu H} = -\frac{\mu c^{2} \alpha^{2}}{2} \approx -186 \times 13.6 \, \text{eV} \approx -2.53 \, \text{keV}
$$

6.4.2 求氢原子基态下的 $\delta x \cdot \delta p_{x}$；这个状态是最小测不准态吗？提示：对这个状态 $\langle x^{2} \rangle = (1/3) \langle r^{2} \rangle$, $\langle p^{2}_{x} \rangle = (1/3) \langle p^{2} \rangle$。

氢原子基态波函数 $\psi_{100}(r) = \frac{1}{\sqrt{\pi a_{0}^{3}}} e^{-r/a_{0}}$，其中 $a_{0}$ 为玻尔半径。由于球对称性
$$
\langle x \rangle = 0, \quad \langle p_{x} \rangle = 0
$$
计算得
$$
\langle x^{2} \rangle = \frac{1}{3} \langle r^{2} \rangle = a_{0}^{2}, \quad \langle p_{x}^{2} \rangle = \frac{1}{3} \langle p^{2} \rangle = \frac{\hbar^{2}}{3 a_{0}^{2}}
$$
因此
$$
\delta x = \sqrt{\langle x^{2} \rangle} = a_{0}, \quad \delta p_{x} = \sqrt{\langle p_{x}^{2} \rangle} = \frac{\hbar}{\sqrt{3} a_{0}}
$$
乘积
$$
\delta x \cdot \delta p_{x} = \frac{\hbar}{\sqrt{3}} \approx 0.577 \hbar
$$
不是最小测不准态。

6.4.3（选做）量子电动力学给出：电子偶素在单位时间内发生湮灭的几率是
$$
\Gamma = \pi r^{2}_{e} c |\psi_{100}(0)|^{2}
$$
其中 $r_{e}=k_{1} e^{2} / m_{e} c^{2} (k_{1}=1 / 4 \pi \varepsilon_{0})$ 是电子的经典半径， $\psi_{100}(r)$ 是电子偶素的基态波函数。求电子偶素的寿命 $\tau=1 / \Gamma$ 。

>  提示：我们有关系 $k_{1} e^{2}=\alpha \hbar c$ ，而 $\alpha \approx 1 / 137$ (是纯数)， $\hbar c \approx 0.1973 \mathrm{eV} \cdot \mu \mathrm{m}, m_{e} c^{2} \simeq 0.511 \mathrm{MeV}, c \simeq 3 \times 10^{8} \mathrm{~m} \cdot \mathrm{s}^{-1}$ 。记住 $\hbar c \approx 0.2 \mathrm{eV} \cdot \mu \mathrm{m}$ (误差 $\sim 1 \%$ ) 很有用。

湮灭率公式
$$
\Gamma = \pi r_{e}^{2} c |\psi_{100}(0)|^{2}
$$
其中经典半径 $r_{e} = \frac{k_{1} e^{2}}{m_{e} c^{2}} = \frac{\alpha \hbar c}{m_{e} c^{2}}$，波函数平方 $|\psi_{100}(0)|^{2} = \frac{1}{8\pi a_{0}^{3}}$，玻尔半径 $a_{0} = \frac{\hbar}{\alpha m_{e} c}$

代入得到
$$
\Gamma = \frac{\alpha^{5} m_{e} c^{2}}{8 \hbar}
$$
代入数值 $\alpha \approx \frac{1}{137}$，$m_{e} c^{2} = 0.511 \, \text{MeV}$，$\hbar c \approx 0.2 \, \text{eV} \cdot \mu\text{m}$，计算得
$$
\Gamma \approx 2.0 \times 10^{9} \, \text{s}^{-1}, \quad \tau = \frac{1}{\Gamma} \approx 5.0 \times 10^{-10} \, \text{s}
$$
