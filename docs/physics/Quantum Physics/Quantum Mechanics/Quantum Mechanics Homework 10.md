# 量子力学 第10次作业

Chasse_neige

9.4.1 `§9.2` 中研究电子在匀强磁场中的 Landau 能级时，没有考虑电子有自旋。现在把自旋加上去，问：这时 Hamiltonian 变成了什么样子？电子的能谱有什么变化？各个能级的简并度有什么变化？

电子的自旋磁矩为

$$
\hat{\vec{\mu}}_{s}=-g\frac{e}{2\mu}\hat{\vec{S}}
$$

所以

$$
\begin{gathered}
\hat{H}
=\frac{1}{2\mu}(\hat{\vec{p}}+e\vec{A})^{2}
-\hat{\vec{\mu}}_{s}\cdot\vec{B}\\
=\frac{1}{2\mu}(\hat{\vec{p}}+e\vec{A})^{2}
+g\frac{e}{2\mu}\hat{\vec{S}}\cdot\vec{B}
\end{gathered}
$$

若 $\vec{B}=B\vec{e}_{z}$，则

$$
\hat{H}
=\frac{1}{2\mu}(\hat{\vec{p}}+e\vec{A})^{2}
+g\frac{eB}{2\mu}\hat{S}_{z}
$$

因此能量变成

$$
\begin{gathered}
E_{n,m_{s}}
=\left(n+\frac{1}{2}\right)\hbar\omega_{\mathrm{c}}
+\frac{g}{2}m_{s}\hbar\omega_{\mathrm{c}}\\
m_{s}=\pm\frac{1}{2}
\end{gathered}
$$

其中 $S_{z}=m_{s}\hbar$。若取电子的 $g=2$，则

$$
E_{n,\frac{1}{2}}=(n+1)\hbar\omega_{\mathrm{c}},\quad
E_{n,-\frac{1}{2}}=n\hbar\omega_{\mathrm{c}}
$$

也就是说原来的零点能被自旋 Zeeman 能抵消了一支。若把最后的能级统一记为

$$
E_{N}=N\hbar\omega_{\mathrm{c}},\quad N=0,1,2,\cdots
$$

则 $N=0$ 只能来自

$$
n=0,\quad m_{s}=-\frac{1}{2}
$$

而 $N\geq 1$ 时有两种来源

$$
\begin{gathered}
n=N,\quad m_{s}=-\frac{1}{2}\\
n=N-1,\quad m_{s}=\frac{1}{2}
\end{gathered}
$$

所以若每个无自旋 Landau 能级的轨道简并度为 $\mathcal{D}$，则最低能级的简并度仍为 $\mathcal{D}$，而其余能级的简并度变为 $2\mathcal{D}$。在面积为 $\mathcal{A}$ 的有限样品中，通常有

$$
\mathcal{D}=\frac{eB\mathcal{A}}{h}
$$

如果不取 $g=2$，则每个 Landau 能级只是分裂成两支，每一支仍有同样的轨道简并度 $\mathcal{D}$。

9.4.2（选做）在钠的 D 黄线的情况下，强磁场下的正常 Zeeman 效应是 $3P$ 分裂为 5 个能级，其中有 1 个 2 重简并（见图 9.4.1）；弱磁场下的反常 Zeeman 效应是 $3P_{3/2}$ 分裂为 4 个能级，$3P_{1/2}$ 分裂为 2 个能级，都没有简并（见图 9.4.2，两种情况下的 $3S$ 都是分裂为 2 个能级，不管它）。请分析一下：当磁场强度逐渐减小的时候，强场情形下（前者）的各个量子态如何逐步重新组合出弱场情形下（后者）的各个量子态？

这里 $3P$ 态有 $l=1$，电子自旋为 $s=\frac{1}{2}$。强磁场中 Zeeman 项占主导，好量子数近似为 $m_{l}$ 和 $m_{s}$，能量主要由

$$
\Delta E_{\mathrm{B}}=\mu_{\mathrm{B}}B(m_{l}+2m_{s})
$$

决定。因此五个强场能级可以按 $M=m_{l}+2m_{s}$ 写为

$$
\begin{gathered}
M=2\quad \ket{1,\frac{1}{2}}\\
M=1\quad \ket{0,\frac{1}{2}}\\
M=0\quad \ket{-1,\frac{1}{2}},\quad \ket{1,-\frac{1}{2}}\\
M=-1\quad \ket{0,-\frac{1}{2}}\\
M=-2\quad \ket{-1,-\frac{1}{2}}
\end{gathered}
$$

其中 $\ket{m_{l},m_{s}}$ 表示未耦合表象。中间的 $M=0$ 有二重简并。

当磁场减小时，旋轨耦合变得重要，好量子数逐渐变成

$$
\hat{\vec{J}}=\hat{\vec{L}}+\hat{\vec{S}},\quad
m_{j}=m_{l}+m_{s}
$$

注意 $m_{j}$ 在整个过程中仍然守恒，所以只有相同 $m_{j}$ 的态会互相混合。两个极端态本来就是唯一的

$$
\begin{gathered}
\ket{\frac{3}{2},\frac{3}{2}}=\ket{1,\frac{1}{2}}\\
\ket{\frac{3}{2},-\frac{3}{2}}=\ket{-1,-\frac{1}{2}}
\end{gathered}
$$

它们直接成为弱场下 $3P_{3/2}$ 的 $m_{j}=\pm\frac{3}{2}$ 态。

对于 $m_{j}=\frac{1}{2}$，强场基矢为 $\ket{0,\frac{1}{2}}$ 和 $\ket{1,-\frac{1}{2}}$。弱场下它们重新组合为

$$
\begin{gathered}
\ket{\frac{3}{2},\frac{1}{2}}
=\sqrt{\frac{2}{3}}\ket{0,\frac{1}{2}}
+\sqrt{\frac{1}{3}}\ket{1,-\frac{1}{2}}\\
\ket{\frac{1}{2},\frac{1}{2}}
=\sqrt{\frac{1}{3}}\ket{0,\frac{1}{2}}
-\sqrt{\frac{2}{3}}\ket{1,-\frac{1}{2}}
\end{gathered}
$$

对于 $m_{j}=-\frac{1}{2}$，强场基矢为 $\ket{-1,\frac{1}{2}}$ 和 $\ket{0,-\frac{1}{2}}$。弱场下它们重新组合为

$$
\begin{gathered}
\ket{\frac{3}{2},-\frac{1}{2}}
=\sqrt{\frac{1}{3}}\ket{-1,\frac{1}{2}}
+\sqrt{\frac{2}{3}}\ket{0,-\frac{1}{2}}\\
\ket{\frac{1}{2},-\frac{1}{2}}
=\sqrt{\frac{2}{3}}\ket{-1,\frac{1}{2}}
-\sqrt{\frac{1}{3}}\ket{0,-\frac{1}{2}}
\end{gathered}
$$

所以强场下那个二重简并的 $M=0$ 并不是整体变成弱场下的一个二重态；它的两个态分别属于 $m_{j}=-\frac{1}{2}$ 和 $m_{j}=\frac{1}{2}$ 两个不同的子空间，并分别与相邻的强场能级混合。最后形成的就是弱场下的两组精细结构能级

$$
\begin{gathered}
3P_{3/2}\quad m_{j}=\frac{3}{2},\frac{1}{2},-\frac{1}{2},-\frac{3}{2}\\
3P_{1/2}\quad m_{j}=\frac{1}{2},-\frac{1}{2}
\end{gathered}
$$

在弱场极限中，它们的 Zeeman 位移为

$$
\begin{gathered}
\Delta E=\mu_{\mathrm{B}}Bg_{j}m_{j}\\
g_{3/2}=\frac{4}{3}\\
g_{1/2}=\frac{2}{3}
\end{gathered}
$$

10.1.1 设 $\hat{H}^{(0)}$ 有 2 个不简并能级 $E_{10}>E_{20}$，$\hat{H}'$ 在它上面的矩阵元为 $H'_{11}=H'_{22}=a$，$H'_{12}=H'_{21}=b$，$a,b$ 是实数。
(a) 用微扰论求 $\hat{H}=\hat{H}^{(0)}+\hat{H}'$ 的能级至二级修正。

记

$$
\Delta=E_{10}-E_{20}>0
$$

非简并微扰论中，一级修正为对角元，所以

$$
E_{1}^{(1)}=a,\quad E_{2}^{(1)}=a
$$

二级修正为

$$
\begin{gathered}
E_{1}^{(2)}=\frac{|H'_{21}|^{2}}{E_{10}-E_{20}}=\frac{b^{2}}{\Delta}\\
E_{2}^{(2)}=\frac{|H'_{12}|^{2}}{E_{20}-E_{10}}=-\frac{b^{2}}{\Delta}
\end{gathered}
$$

因此到二级为止

$$
\begin{gathered}
E_{1}=E_{10}+a+\frac{b^{2}}{\Delta}\\
E_{2}=E_{20}+a-\frac{b^{2}}{\Delta}
\end{gathered}
$$
(b) 实际上这个问题是有严格解的，把严格解也求出来，并讨论一下：在什么条件下严格解化为微扰论的解？

另一方面，在 $\ket{1},\ket{2}$ 这组基下，完整 Hamiltonian 的矩阵为

$$
H=
\begin{pmatrix}
E_{10}+a & b\\
b & E_{20}+a
\end{pmatrix}
$$

严格本征值为

$$
E_{\pm}
=\frac{E_{10}+E_{20}}{2}+a
\pm\sqrt{\frac{\Delta^{2}}{4}+b^{2}}
$$

其中 $E_{+}$ 对应较高能级，$E_{-}$ 对应较低能级。当 $|b|\ll \Delta$ 时

$$
\sqrt{\frac{\Delta^{2}}{4}+b^{2}}
=\frac{\Delta}{2}\sqrt{1+\frac{4b^{2}}{\Delta^{2}}}
\simeq \frac{\Delta}{2}+\frac{b^{2}}{\Delta}
$$

于是

$$
\begin{gathered}
E_{+}\simeq E_{10}+a+\frac{b^{2}}{\Delta}\\
E_{-}\simeq E_{20}+a-\frac{b^{2}}{\Delta}
\end{gathered}
$$

这就回到了微扰论的结果。所以真正需要的小量条件是非对角耦合远小于能级间隔，即 $|b|\ll E_{10}-E_{20}$。对角元 $a$ 在这个例子里只是把两个能级整体平移。

10.1.2 习题 3.3.1 是求粒子在无限深势阱加中心 $\delta$ 势垒中的能谱，其中

$$
\begin{gathered}
V(x)=\gamma\delta(x)\quad (|x|<a,\gamma>0)\\
V(x)=+\infty\quad (|x|>a)
\end{gathered}
$$

那里是求精确解，现在请你把中心 $\delta$ 势垒 $V'(x)=\gamma\delta(x)$ 做为对无限深势阱的微扰再解一下（准确到一级微扰），并比较二者的结果。

先看未受微扰的无限深势阱 $-a<x<a$。按宇称分类，偶宇称本征态可以写为

$$
\begin{gathered}
\psi_{r}^{(+)}(x)=\frac{1}{\sqrt{a}}\cos{\frac{(2r+1)\pi x}{2a}}\\
E_{r}^{(+,0)}=\frac{\hbar^{2}}{2\mu}\left(\frac{(2r+1)\pi}{2a}\right)^{2}\\
r=0,1,2,\cdots
\end{gathered}
$$

奇宇称本征态可以写为

$$
\begin{gathered}
\psi_{r}^{(-)}(x)=\frac{1}{\sqrt{a}}\sin{\frac{r\pi x}{a}}\\
E_{r}^{(-,0)}=\frac{\hbar^{2}}{2\mu}\left(\frac{r\pi}{a}\right)^{2}\\
r=1,2,\cdots
\end{gathered}
$$

一级能量修正为

$$
E^{(1)}=\langle \psi| \gamma\delta(x)|\psi\rangle
=\gamma|\psi(0)|^{2}
$$

对于偶宇称态，

$$
|\psi_{r}^{(+)}(0)|^{2}=\frac{1}{a}
$$

所以

$$
E_{r}^{(+)}
=\frac{\hbar^{2}}{2\mu}\left(\frac{(2r+1)\pi}{2a}\right)^{2}
+\frac{\gamma}{a}
$$

对于奇宇称态，

$$
\psi_{r}^{(-)}(0)=0
$$

所以

$$
E_{r}^{(-)}
=\frac{\hbar^{2}}{2\mu}\left(\frac{r\pi}{a}\right)^{2}
$$

和精确解比较：奇宇称态精确地满足 $\psi(0)=0$，所以不受 $\delta$ 势垒影响，这一点和微扰论完全一致。偶宇称态的精确解可以写成 $E=\frac{\hbar^{2}k^{2}}{2\mu}$，并满足边界条件和导数跃变条件

$$
\begin{gathered}
\psi(a)=0\\
\left.\dv[]{\psi}{x}\right|_{0^{+}}
-\left.\dv[]{\psi}{x}\right|_{0^{-}}
=\frac{2\mu\gamma}{\hbar^{2}}\psi(0)
\end{gathered}
$$

这给出超越方程


$$
-k\cot{ka}=\frac{\mu\gamma}{\hbar^{2}}
$$

当 $\gamma$ 很小时，令

$$
k=k_{r}^{(0)}+\delta k,\quad
k_{r}^{(0)}=\frac{(2r+1)\pi}{2a}
$$

因为 $\cot{(k_{r}^{(0)}a+\delta k a)}\simeq-\delta k a$，所以

$$
-k\cot{ka}\simeq k_{r}^{(0)}a\delta k
=\frac{\mu\gamma}{\hbar^{2}}
$$

于是

$$
\delta k=\frac{\mu\gamma}{\hbar^{2}k_{r}^{(0)}a}
$$

能量展开为

$$
E=\frac{\hbar^{2}}{2\mu}(k_{r}^{(0)}+\delta k)^{2}
\simeq E_{r}^{(+,0)}+\frac{\hbar^{2}k_{r}^{(0)}}{\mu}\delta k
=E_{r}^{(+,0)}+\frac{\gamma}{a}
$$

这正好就是一级微扰论的结果。也就是说，微扰论给出的是精确偶宇称能级在小 $\gamma$ 时的一级展开；当 $\gamma$ 不再小的时候，就必须回到上面的超越方程。

10.2.1 假设习题 4.4.2 中研究的绕定轴转动的转子还带有与轴垂直的固有电偶极矩 $\vec{D}$，并且外界施加了一个与轴垂直的均匀外电场 $\vec{E}$。
(a) 在电场很弱的条件下，求它的基态能量，准确到二级微扰。

不妨假设电场在 $x$ 方向，则此时 Hamiltonian 可以写作

$$
\mathcal{H} = \frac{1}{2 I} \hat{L}_{z}^{2} - \vec{D} \cdot \vec{E} = \frac{1}{2I} \hat{L}_{z}^{2} - DE \cos \phi
$$

我们把转子和电场的相互作用视为微扰，则 $0$ 阶解为

$$
E_{m} = \frac{\hbar^{2} m^{2}}{2I}, \quad m=0,\pm1,\pm2,\dots
$$

对应的归一化本征函数为 $\psi_{m}(\varphi)=\frac{1}{\sqrt{2\pi}} e^{im\varphi}$，注意它的基态是非简并的，所以对于基态的微扰而言使用非简并微扰论即可。先考虑一阶微扰，一阶微扰的能量为

$$
E_{0}^{(1)} = H_{00}^{\prime}
= \langle \psi_{0} | H' | \psi_{0} \rangle
= - \frac{DE}{2\pi}\int_{0}^{2\pi}\cos\phi\,\dd{\phi}=0
$$
再考虑二阶微扰的结果，此时能量为

$$
E_{0}^{(2)}
= \sum_{m\neq 0} \frac{|H_{m0}^{\prime}|^{2}}{E_{0}^{(0)} - E_{m}^{(0)}}
$$

先计算矩阵元

$$
\langle \psi_{m} | H' | \psi_{0} \rangle
= - \frac{DE}{2\pi} \int_{0}^{2\pi} e^{-im\phi} \cos \phi \dd{\phi}
= -\frac{DE}{2} (\delta_{m,1} + \delta_{m,-1})
$$

也就是说只有 $m=\pm 1$ 两个态对二阶修正有贡献。由于 $E_{\pm 1}^{(0)}=\frac{\hbar^{2}}{2I}$，带入得到二阶能量修正为

$$
E_{0}^{(2)}
=2\frac{(DE/2)^{2}}{0-\frac{\hbar^{2}}{2I}}
= - \frac{ID^{2}E^{2}}{\hbar^{2}}
$$

(b)（选做）反之，如果外电场非常非常强，它的基态能量又是多大？提示：此时转子做小角度的振动。

我们假设此时转子在 $\hat{x}$  附近做小角度振动，令偏离平衡方向的角度仍为 $\phi$。势能为

$$
V(\phi)=-DE\cos\phi
$$

在强电场极限下，基态波函数主要集中在 $\phi=0$ 附近，因此可以展开

$$
\cos\phi\simeq 1-\frac{\phi^{2}}{2}
$$

于是 Hamiltonian 近似为

$$
\begin{aligned}
\hat{H}
&=\frac{\hat{L}_{z}^{2}}{2I}-DE\cos\phi\\
&\simeq \frac{\hat{L}_{z}^{2}}{2I}-DE+\frac{DE}{2}\phi^{2}
\end{aligned}
$$

又因为在角坐标表象中

$$
\hat{L}_{z}=-i\hbar\frac{\partial}{\partial\phi}
$$

所以上式等价于一个一维谐振子加上常数项 $-DE$：

$$
\hat{H}\simeq
-\frac{\hbar^{2}}{2I}\frac{\partial^{2}}{\partial\phi^{2}}
+\frac{DE}{2}\phi^{2}-DE
$$

和标准谐振子 Hamiltonian

$$
\hat{H}_{\mathrm{osc}}
=\frac{\hat{p}^{2}}{2M}+\frac{1}{2}M\omega^{2}x^{2}
$$

比较可知，这里有效质量为 $I$，有效角频率满足

$$
I\omega^{2}=DE
$$

因此

$$
\omega=\sqrt{\frac{DE}{I}}
$$

所以强场极限下的基态能量近似为

$$
E_{0}\simeq -DE+\frac{1}{2}\hbar\omega
=-DE+\frac{\hbar}{2}\sqrt{\frac{DE}{I}}
$$

这里第一项是偶极矩沿电场方向排列时的最低势能，第二项是绕该最低点做小角振动的零点能。这个近似要求零点振动的角宽度远小于 $1$，也就是

$$
\Delta\phi\sim\sqrt{\frac{\hbar}{I\omega}}
=\left(\frac{\hbar^{2}}{IDE}\right)^{1/4}\ll 1
$$

等价地说，需要

$$
DE\gg \frac{\hbar^{2}}{I}
$$

10.2.2 水分子的结构式是 H-O-H，其中每一个 O-H 键都会振动，二者还会通过 O 原子发生耦合，因此系统的 Hamiltonian 是

$$
\hat{H} = \frac{1}{2\mu}\hat{p}_{1}^{2} + \frac{\mu\omega^{2}}{2}x_{1}^{2} + \frac{1}{2\mu}\hat{p}_{2}^{2} + \frac{\mu\omega^{2}}{2}x_{2}^{2} + \lambda\mu\omega^{2} x_{1} x_{2}
$$

(a) 假若 $0 < \lambda \ll 1$，则耦合项可视为微扰。请在此条件下求出它的基态和第一激发态的能量，准确到一级微扰。

此时零阶近似下的能级分别对应两个独立的谐振子

$$
E_{n}^{(0)} = \left( n_{1} + \frac{1}{2} \right) \hbar \omega + \left( n_{2} + \frac{1}{2} \right) \hbar \omega
$$
对应的波函数为

$$
\psi_{n_{1}, n_{2}} (x_{1}, x_{2}) = \frac{\alpha}{\sqrt{\pi 2^{n_{1} + n_{2}} n_{1}! n_{2}!}} H_{n_{1}} (\alpha x_{1}) H_{n_{2}} (\alpha x_{2}) e^{-\frac{\alpha^{2}}{2} (x_{1}^{2} + x_{2}^{2})}
$$
其中 $\alpha = \sqrt{\frac{\mu \omega}{\hbar}}$，其中基态对应 $n_{1} = n_{2} = 0$，第一激发态对应 $n_{1}=1, n_{2} =0$ 或者 $n_{1} =0, n_{2} = 1$，所以应该分别使用非简并以及简并微扰来处理。

在加入微扰之后，基态一阶微扰下的能量为

$$
E_{0}^{(1)} = \langle \psi_{0,0} | H' | \psi_{0,0} \rangle = \frac{\lambda \mu \omega^{2} \alpha^{2}}{\pi}\int \dd{x}_{1} \dd{x}_{2} e^{-\alpha^{2} (x_{1}^{2} + x_{2}^{2})} x_{1} x_{2} = 0
$$
所以基态能量为

$$
E_{0} = \hbar \omega
$$

对于第一激发态，我们使用简并微扰来处理这个问题。此时两个简并的零阶波函数的形式为

$$
\begin{gathered}
	\psi_{1,0} (x_{1}, x_{2}) = \frac{\alpha}{\sqrt{2 \pi}} 2 \alpha x_{1} e^{-\frac{\alpha^{2}}{2} (x_{1}^{2} + x_{2}^{2})} \\
	\psi_{0,1} (x_{1}, x_{2}) = \frac{\alpha}{\sqrt{2 \pi}} 2 \alpha x_{2} e^{-\frac{\alpha^{2}}{2} (x_{1}^{2} + x_{2}^{2})}
\end{gathered}
$$
此时一阶能量修正应该由久期方程

$$
\det\left(H^{\prime}_{ij}-E^{(1)}\delta_{ij}\right)=0
$$
确定，我们先积分得到微扰哈密顿量的矩阵形式

$$
H^{\prime}_{ij}
= \begin{pmatrix}
0 & \frac{\lambda\hbar\omega}{2} \\
\frac{\lambda\hbar\omega}{2} & 0
\end{pmatrix}
$$
所以可以解得精确到一阶微扰的能量为

$$
E_{1,-} = \left( 2 - \frac{\lambda}{2} \right) \hbar \omega
$$
或者

$$
E_{1,+} = \left( 2 + \frac{\lambda}{2} \right) \hbar \omega
$$

对应的零阶态线性组合分别为

$$
\frac{1}{\sqrt{2}}\left(\psi_{1,0}-\psi_{0,1}\right),\quad
\frac{1}{\sqrt{2}}\left(\psi_{1,0}+\psi_{0,1}\right)
$$

(b)（选做）事实上只要 $0 < \lambda < 1$，这个问题就是可以严格求解的，那就是进行一个 $(x_{1}, x_{2})$ 的坐标变换，把 $\hat{H}$ 化为两个互相独立的谐振子。请你找出这个解，并且与微扰论的解做一下比较。

把哈密顿量解耦，取

$$
\begin{gathered}
	s = \frac{1}{\sqrt{2}} (x_{1} + x_{2}) \\
	t = \frac{1}{\sqrt{2}} (x_{1} - x_{2})
\end{gathered}
$$
上述哈密顿量可以表示为

$$
\hat{H} = \frac{1}{2\mu} \hat{p}_{s}^{2} + \frac{1}{2\mu} \hat{p}_{t}^{2} + \frac{\mu \omega^{2}}{2} ((1 + \lambda) s^{2} + (1 - \lambda) t^{2})
$$
所以总体的能量相当于

$$
E_{n_{1}, n_{2}} = \left( n_{1} + \frac{1}{2} \right) \sqrt{ 1 + \lambda }\hbar \omega + \left( n_{2} + \frac{1}{2} \right) \sqrt{ 1 - \lambda }\hbar \omega
$$

基态能量为

$$
E_{0}
=\frac{\hbar\omega}{2}\left(\sqrt{1+\lambda}+\sqrt{1-\lambda}\right)
\simeq \hbar\omega+O(\lambda^{2})
$$

这说明基态的一阶修正确实为 $0$。第一激发能级为

$$
\begin{gathered}
E_{1,+}
=\hbar\omega\left(\frac{3}{2}\sqrt{1+\lambda}
+\frac{1}{2}\sqrt{1-\lambda}\right)
\simeq 2\hbar\omega+\frac{\lambda}{2}\hbar\omega\\
E_{1,-}
=\hbar\omega\left(\frac{1}{2}\sqrt{1+\lambda}
+\frac{3}{2}\sqrt{1-\lambda}\right)
\simeq 2\hbar\omega-\frac{\lambda}{2}\hbar\omega
\end{gathered}
$$

这正好和简并微扰论得到的结果相符。

10.3.1 大多数原子核都带有自旋磁矩。记核的自旋为 $\hat{\vec{S}}$，磁矩为 $\hat{\vec{M}} = \lambda \mu_{\text{N}} \hat{\vec{S}} / \hbar$，其中 $\mu_{\text{N}} = e \hbar / 2 M_{\text{N}}$ 是核磁子，$M_{\text{N}}$ 是核子质量，$\lambda$ 是表征核磁矩大小的常数。首先把核放进一个恒定强磁场 $\vec{B}_{0}$ 中，由于磁矩与磁场间有相互作用 $\hat{H}_{0} = -\vec{B}_{0} \cdot \hat{\vec{M}}$，它将形成总共 $2S + 1$ 个能级。然后垂直于 $\vec{B}_{0}$ 施加一个以频率 $\omega$ 振荡的磁场 $\vec{B}'(t)$，这个扰动磁场就会引起核在不同的能级之间跃迁。问：当 $\omega$ 满足什么条件的时候会发生共振跃迁？

#### Tip

注意：要说明如何决定选择定则。这个现象就称为核磁共振 NMR。最早的时候人们用核磁共振方法来测量核素的磁矩，是原子核物理学中的一个重要实验手段，等到对各种核的磁矩积累了完备的信息以后，情况就反过来了：我们可以利用这项技术探查一个样品中都包含哪些种类的核，丰度各有多大，包括给它们定位。因此，现在核磁共振在固体物理学、材料科学、生物学以及医疗检验等方面有广泛的应用。在近代物理学的发展史上，这是基础研究与技术应用互相促进的一个典型例子。

___

取 $\vec{B}_{0}=B_{0}\vec{e}_{z}$，则

$$
\hat{H}_{0}
=-B_{0}\hat{M}_{z}
=-\lambda\mu_{\mathrm N}B_{0}\frac{\hat{S}_{z}}{\hbar}
$$

所以本征态可记为 $\ket{S,m}$，其中 $m=-S,-S+1,\cdots,S$，对应能量为

$$
E_{m}^{(0)}=-\lambda\mu_{\mathrm N}B_{0}m
$$

相邻能级间隔的大小为

$$
|E_{m+1}^{(0)}-E_{m}^{(0)}|
=|\lambda|\mu_{\mathrm N}B_{0}
$$

再看垂直于 $\vec{B}_{0}$ 的交变磁场。不妨令它沿 $x$ 方向：

$$
\vec{B}'(t)=B_{1}\cos\omega t\,\vec{e}_{x}
$$

则微扰为

$$
\hat{H}'(t)
=-\vec{B}'(t)\cdot\hat{\vec{M}}
=-\lambda\mu_{\mathrm N}B_{1}\cos\omega t\,\frac{\hat{S}_{x}}{\hbar}
$$

由于

$$
\hat{S}_{x}=\frac{1}{2}\left(\hat{S}_{+}+\hat{S}_{-}\right)
$$

所以只有

$$
\mel{S,m'}{\hat{S}_{x}}{S,m}\neq 0
$$

的跃迁才会发生，也就是选择定则

$$
\Delta m=m'-m=\pm 1
$$

因此发生共振跃迁的条件是外场角频率等于相邻 Zeeman 能级间隔除以 $\hbar$：

$$
\boxed{
\omega=\omega_{0}
=\frac{|\lambda|\mu_{\mathrm N}B_{0}}{\hbar}
}
$$

如果保留 $\lambda$ 的符号，则吸收跃迁对应的能量差取正值；物理共振频率总是上式中的正数。

11.1.1 完全刚性硬球指的是势场

$$
V(r) = \begin{cases} +\infty, & (r < a) \\ 0, & (r > a) \end{cases}
$$

请推导出它的微分散射截面和总散射截面。问：一个刚性硬球的经典的"散射截面"是多大？与之相比，量子力学的截面有什么差别？为什么？

对于硬球势，它的 $l$ 分量径向方程为

$$
R''_{l} + \frac{2}{x} R'_{l} + \left(1-V(x)-\frac{l(l+1)}{x^{2}} \right) R_{l} = 0
$$
其中 $x = kr$，所以在球外，径向波函数满足球贝塞尔方程

$$
R'' + \frac{2}{x} R' + \left( 1-\frac{l(l+1)}{x^{2}} \right) R = 0
$$
对应的解为

$$
R_{l} (x) = A_{l} j_{l} (x) + B_{l} n_{l} (x)
$$
由于此时球内波函数为 $0$，所以连续性条件应该变为

$$
A_{l} j_{l} (ka) + B_{l} n_{l}(ka) = 0
$$
此时

$$
\frac{A_{l}}{B_{l}} = - \frac{n_{l}(ka)}{j_{l}(ka)}
$$
无穷远处的渐进行为是

$$
\lim_{r \to \infty} A_{l} \left( \frac{j_{l}(kr)}{j_{l}(ka)} - \frac{n_{l}(kr)}{n_{l}(ka)}\right) \sim \frac{1}{kr} \left( \sin\left( kr-\frac{l\pi}{2} \right) + \frac{j_{l}(ka)}{n_{l}(ka)} \cos\left( kr-\frac{l\pi}{2} \right)\right)
$$
计算得到

$$
\delta_{l} = \arctan \frac{j_{l}(ka)}{n_{l}(ka)}
$$
所以微分散射截面是

$$
\sigma (\theta) = \frac{1}{k^{2}} \left|\sum_{l=0}^{\infty}(2l+1) \sin\left(\arctan \frac{j_{l}(ka)}{n_{l}(ka)}\right) e^{i\arctan \frac{j_{l}(ka)}{n_{l}(ka)}} P_{l}(\cos \theta)\right|^{2}
$$
总散射截面是

$$
\sigma_{tot} = \frac{4\pi}{k^{2}} \sum_{l=0}^{\infty} (2l+1) \sin^{2} \left(\arctan \frac{j_{l}(ka)}{n_{l}(ka)}\right)
$$

经典情形下，只有入射参数 $b<a$ 的粒子会碰到硬球，所以经典散射截面就是几何截面

$$
\sigma_{\mathrm{cl}}=\pi a^{2}
$$

量子力学中由于波动性和衍射效应，结果一般不等于这个几何截面。特别是在低能极限 $ka\ll 1$ 时，主要只有 $s$ 波贡献。由

$$
j_{0}(x)=\frac{\sin x}{x},\quad
n_{0}(x)=-\frac{\cos x}{x}
$$

可得

$$
\tan\delta_{0}=\frac{j_{0}(ka)}{n_{0}(ka)}
=-\tan ka
$$

因此 $\delta_{0}\simeq -ka$，总截面近似为

$$
\sigma_{\mathrm{tot}}
\simeq \frac{4\pi}{k^{2}}\sin^{2}\delta_{0}
\simeq 4\pi a^{2}
$$

这是经典几何截面的 $4$ 倍。若取高能极限并把前向衍射也包括在总截面中，则总截面趋于 $2\pi a^{2}$；其中一半可看作经典反射散射，另一半来自波在硬球阴影边缘的衍射。

11.2.1 若约化势场为 $U(r) = \alpha / r^{2}$（$\alpha > 0$），则它的各阶相移 $\delta_{l}$ 都可以严格算出。对此做如下提示。

(a) $R_{l}(r)$ 满足的方程是

$$
\frac{\mathrm{d}^{2} R_{l}}{\mathrm{d}r^{2}} + \frac{2}{r} \frac{\mathrm{d}R_{l}}{\mathrm{d}r} + \left( k^{2} - U(r) - \frac{l(l+1)}{r^{2}} \right) R_{l} = 0
$$

(b) 球 Bessel 函数 $j_{l}(x)$（$l \geq 0$ 但不必是整数）满足方程

$$
\frac{\mathrm{d}^{2} j_{l}}{\mathrm{d}x^{2}} + \frac{2}{x} \frac{\mathrm{d}j_{l}}{\mathrm{d}x} + \left( 1 - \frac{l(l+1)}{x^{2}} \right) j_{l} = 0
$$

而且当 $x \to +\infty$ 时 $j_{l}(x) \to \frac{1}{x} \sin\left( x - \frac{l\pi}{2} \right)$。据此请算出它的 $\delta_{l} = ?$

对于这种情况，我们首先考虑径向方程

$$
\frac{\mathrm{d}^{2}R_{l}}{\mathrm{d}r^{2}}
+\frac{2}{r}\frac{\mathrm{d}R_{l}}{\mathrm{d}r}
+\left[
k^{2}-\frac{\alpha}{r^{2}}-\frac{l(l+1)}{r^{2}}
\right]R_{l}=0
$$

令

$$
x=kr
$$

则

$$
\frac{\mathrm{d}^{2}R_{l}}{\mathrm{d}x^{2}}
+\frac{2}{x}\frac{\mathrm{d}R_{l}}{\mathrm{d}x}
+\left[
1-\frac{l(l+1)+\alpha}{x^{2}}
\right]R_{l}=0
$$

这和球 Bessel 方程相同，只是角动量指标不再是原来的整数 $l$，而要换成一个新的数 $\nu_{l}$，满足

$$
\nu_{l}(\nu_{l}+1)=l(l+1)+\alpha
$$

取非负根，即

$$
\nu_{l}
=-\frac{1}{2}+\sqrt{\left(l+\frac{1}{2}\right)^{2}+\alpha}
$$

因此在原点正则的解为

$$
R_{l}(r)=C_{l} j_{\nu_{l}}(kr)
$$

这里 $j_{\nu_{l}}$ 是阶数不一定为整数的球 Bessel 函数。利用题目给出的渐近形式，

$$
j_{\nu_{l}}(kr)\xrightarrow[r\to\infty]{}
\frac{1}{kr}\sin\left(kr-\frac{\nu_{l}\pi}{2}\right)
$$

另一方面，按照相移的定义，远处第 $l$ 个分波应写成

$$
R_{l}(r)\xrightarrow[r\to\infty]{}
\frac{1}{kr}\sin\left(kr-\frac{l\pi}{2}+\delta_{l}\right)
$$

比较两式相位，得到

$$
kr-\frac{\nu_{l}\pi}{2}
=kr-\frac{l\pi}{2}+\delta_{l}
$$

所以

$$
\delta_{l}=\frac{\pi}{2}(l-\nu_{l})
$$

即

$$
\boxed{
\delta_{l}
=\frac{\pi}{2}\left[
l+\frac{1}{2}
-\sqrt{\left(l+\frac{1}{2}\right)^{2}+\alpha}
\right]
}
$$

因为 $\alpha>0$，所以 $\nu_{l}>l$，各阶相移都是负的。这也符合 $U(r)=\alpha/r^{2}$ 是排斥势的直观图像。

11.2.2（选做）求粒子在三维球壳 $\delta$ 势垒 $V(r) = \frac{\hbar^{2}}{\mu L} \delta(r - a)$（$L > 0$）上的散射长度 $a_{0}$，假设 $E = 0$。

#### Tip

提示：此时约化径向波函数是

$$
u(r) =
\begin{cases}
Ar, & (r < a) \\
1 - \left( r / a_{0} \right), & (r > a)
\end{cases}
$$

再利用处理一维 $\delta$ 势的方法。

___

这里只需要考虑 $s$ 波。零能散射时，球壳内外的约化径向波函数分别为

$$
u(r)=
\begin{cases}
Ar, & r<a\\
1-\dfrac{r}{a_{0}}, & r>a
\end{cases}
$$

其中 $a_{0}$ 就是散射长度。首先由波函数连续性可得

$$
Aa=1-\frac{a}{a_{0}}
$$

也就是

$$
A=\frac{1-\frac{a}{a_{0}}}{a}
$$

接下来考虑 $\delta$ 势导致的导数跃变。约化径向波函数满足

$$
-\frac{\hbar^{2}}{2\mu}u''(r)
+\frac{\hbar^{2}}{\mu L}\delta(r-a)u(r)=0
$$

在 $a$ 附近积分，有

$$
-\frac{\hbar^{2}}{2\mu}\left[u'(a^{+})-u'(a^{-})\right]
+\frac{\hbar^{2}}{\mu L}u(a)=0
$$

因此

$$
u'(a^{+})-u'(a^{-})=\frac{2}{L}u(a)
$$

由分段形式可知

$$
u'(a^{-})=A,\quad
u'(a^{+})=-\frac{1}{a_{0}},\quad
u(a)=1-\frac{a}{a_{0}}
$$

代入跃变条件：

$$
-\frac{1}{a_{0}}-A
=\frac{2}{L}\left(1-\frac{a}{a_{0}}\right)
$$

再代入连续性给出的 $A$：

$$
-\frac{1}{a_{0}}
-\frac{1-\frac{a}{a_{0}}}{a}
=\frac{2}{L}\left(1-\frac{a}{a_{0}}\right)
$$

左边可以化简为

$$
-\frac{1}{a}
$$

所以

$$
-\frac{1}{a}
=\frac{2}{L}\left(1-\frac{a}{a_{0}}\right)
$$

即

$$
1-\frac{a}{a_{0}}=-\frac{L}{2a}
$$

从而

$$
\frac{a}{a_{0}}=1+\frac{L}{2a}
$$

最后得到

$$
\boxed{
a_{0}=\frac{2a^{2}}{2a+L}
}
$$

作为检验：当 $L\to 0$ 时，$\delta$ 势垒趋于无限强，结果 $a_{0}\to a$，回到硬球的散射长度；当 $L\to\infty$ 时，势垒趋于消失，结果 $a_{0}\to 0$。
