# 量子力学 第10次作业

Chasse_neige

9.2.1 选 $\vec{A}=(-By, 0, 0)$，重新写出 Hamiltonian，然后求出它的能级和波函数。提示：这时候 $\hat{p}_{x}$ 是守恒的。你会发现，"Landau 能级与线性谐振子的能级一样" 在这里几乎是一眼看穿的事情。

对于电子，仍取 $e>0$，所以最小耦合为 $\hat{\vec{p}}+e\vec{A}$。在这个规范下

$$
\hat{H}
=\frac{1}{2\mu}\left[(\hat{p}_{x}-eB\hat{y})^{2}+\hat{p}_{y}^{2}\right]
$$

Hamiltonian 不显含 $x$，所以可以同时取 $\hat{p}_{x}$ 的本征态。令

$$
\psi(x,y)=\mathrm{e}^{\mathrm{i}kx}u(y),\quad \hat{p}_{x}\psi=\hbar k\psi
$$

代入 Schrödinger 方程后得到关于 $y$ 的一维方程

$$
\left[\frac{\hat{p}_{y}^{2}}{2\mu}
+\frac{e^{2}B^{2}}{2\mu}\left(y-\frac{\hbar k}{eB}\right)^{2}\right]u(y)
=Eu(y)
$$

这就是中心在

$$
y_{0}=\frac{\hbar k}{eB}
$$

的线性谐振子，角频率为

$$
\omega_{\mathrm{c}}=\frac{eB}{\mu}
$$

因此能级为

$$
E_{n}=\left(n+\frac{1}{2}\right)\hbar\omega_{\mathrm{c}},\quad n=0,1,2,\cdots
$$

能量与 $k$ 无关，这正是 Landau 能级的简并性。若沿 $x$ 方向取长度为 $L_{x}$ 的归一化平面波，则波函数可写为

$$
\psi_{n k}(x,y)=\frac{1}{\sqrt{L_{x}}}\mathrm{e}^{\mathrm{i}kx}\varphi_{n}(y-y_{0})
$$

其中

$$
\varphi_{n}(\eta)
=\frac{1}{\sqrt{2^{n}n!}}\left(\frac{\alpha^{2}}{\pi}\right)^{1/4}
H_{n}(\alpha\eta)\mathrm{e}^{-\alpha^{2}\eta^{2}/2}\\
\alpha=\sqrt{\frac{eB}{\hbar}}
$$

9.2.2 我们已经看到，对 Landau 能级这个问题，选择不同的矢量势得到相同的能谱（虽然本征函数不同）。实际上，如果采用算符代数方法，可以无需明确地选好矢量势就得到能谱。现在的 Hamiltonian 是 $\hat{H}=\frac{1}{2\mu}[(\hat{p}_{x}+eA_{x})^{2}+(\hat{p}_{y}+eA_{y})^{2}]$，让我们令 $\hat{Q}=\sqrt{\frac{1}{\hbar eB}}(\hat{p}_{x}+eA_{x})$，$\hat{P}=\sqrt{\frac{1}{\hbar eB}}(\hat{p}_{y}+eA_{y})$。请证明：

(a) $[\hat{P},\hat{Q}]=-\mathrm{i}$

记

$$
\hat{\pi}_{x}=\hat{p}_{x}+eA_{x},\quad
\hat{\pi}_{y}=\hat{p}_{y}+eA_{y}
$$

则

$$
[\hat{\pi}_{x},\hat{\pi}_{y}]
=[\hat{p}_{x},eA_{y}]+[eA_{x},\hat{p}_{y}]\\
=-\mathrm{i}\hbar e\pdv[]{A_{y}}{x}
+\mathrm{i}\hbar e\pdv[]{A_{x}}{y}\\
=-\mathrm{i}\hbar eB
$$

因此

$$
[\hat{Q},\hat{P}]
=-\mathrm{i}
$$

严格按这里的定义和通常的 $\vec{B}=\nabla\times\vec{A}$，得到的是 $[\hat{Q},\hat{P}]=-\mathrm{i}$，也就是 $[\hat{P},\hat{Q}]=\mathrm{i}$。题面中的 $[\hat{P},\hat{Q}]=-\mathrm{i}$ 只差一个正则变量次序或 $\hat{P}\to-\hat{P}$ 的约定，不影响下面的能谱。为了和题面后面的谐振子形式保持一致，下面把这对无量纲变量看作满足

$$
[\hat{P},\hat{Q}]=-\mathrm{i}
$$

(b) $\hat{H}=\frac{1}{2}(\hat{P}^{2}+\hat{Q}^{2})\hbar\omega_{\mathrm{c}}$

由定义直接有

$$
\hat{Q}^{2}=\frac{\hat{\pi}_{x}^{2}}{\hbar eB},\quad
\hat{P}^{2}=\frac{\hat{\pi}_{y}^{2}}{\hbar eB}
$$

因此

$$
\hat{H}
=\frac{1}{2\mu}(\hat{\pi}_{x}^{2}+\hat{\pi}_{y}^{2})\\
=\frac{\hbar eB}{2\mu}(\hat{Q}^{2}+\hat{P}^{2})\\
=\frac{1}{2}(\hat{P}^{2}+\hat{Q}^{2})\hbar\omega_{\mathrm{c}}
$$

其中

$$
\omega_{\mathrm{c}}=\frac{eB}{\mu}
$$

(c) 能谱是 $E_{n}=(n+\frac{1}{2})\hbar\omega_{\mathrm{c}}$，$n=0,1,2,\cdots$

由 (a) 可知 $\hat{Q}$ 和 $\hat{P}$ 正好是一对无量纲正则变量。定义

$$
\hat{a}=\frac{1}{\sqrt{2}}(\hat{Q}+\mathrm{i}\hat{P}),\quad
\hat{a}^{\dagger}=\frac{1}{\sqrt{2}}(\hat{Q}-\mathrm{i}\hat{P})
$$

则

$$
[\hat{a},\hat{a}^{\dagger}]=1
$$

而且

$$
\hat{Q}^{2}+\hat{P}^{2}=2\hat{a}^{\dagger}\hat{a}+1
$$

所以 Hamiltonian 化为

$$
\hat{H}
=\hbar\omega_{\mathrm{c}}\left(\hat{a}^{\dagger}\hat{a}+\frac{1}{2}\right)
$$

于是能谱就是

$$
E_{n}=\left(n+\frac{1}{2}\right)\hbar\omega_{\mathrm{c}},\quad n=0,1,2,\cdots
$$

9.4.1 §9.2 中研究电子在匀强磁场中的 Landau 能级时，没有考虑电子有自旋。现在把自旋加上去，问：这时 Hamiltonian 变成了什么样子？电子的能谱有什么变化？各个能级的简并度有什么变化？

这里是在自由电子的 Landau 能级问题中加入自旋，所以需要加入的是自旋磁矩在外磁场中的 Zeeman 能。没有额外加入 $\hat{\vec{L}}\cdot\hat{\vec{S}}$，因为这个旋轨耦合通常来自原子中的中心电场，Landau 问题本身没有这样的标势。

电子的自旋磁矩为

$$
\hat{\vec{\mu}}_{s}=-g\frac{e}{2\mu}\hat{\vec{S}}
$$

所以

$$
\hat{H}
=\frac{1}{2\mu}(\hat{\vec{p}}+e\vec{A})^{2}
-\hat{\vec{\mu}}_{s}\cdot\vec{B}\\
=\frac{1}{2\mu}(\hat{\vec{p}}+e\vec{A})^{2}
+g\frac{e}{2\mu}\hat{\vec{S}}\cdot\vec{B}
$$

若 $\vec{B}=B\vec{e}_{z}$，则

$$
\hat{H}
=\frac{1}{2\mu}(\hat{\vec{p}}+e\vec{A})^{2}
+g\frac{eB}{2\mu}\hat{S}_{z}
$$

因此能量变成

$$
E_{n,m_{s}}
=\left(n+\frac{1}{2}\right)\hbar\omega_{\mathrm{c}}
+\frac{g}{2}m_{s}\hbar\omega_{\mathrm{c}}\\
m_{s}=\pm\frac{1}{2}
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
n=N,\quad m_{s}=-\frac{1}{2}\\
n=N-1,\quad m_{s}=\frac{1}{2}
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
M=2\quad \ket{1,\frac{1}{2}}\\
M=1\quad \ket{0,\frac{1}{2}}\\
M=0\quad \ket{-1,\frac{1}{2}},\quad \ket{1,-\frac{1}{2}}\\
M=-1\quad \ket{0,-\frac{1}{2}}\\
M=-2\quad \ket{-1,-\frac{1}{2}}
$$

其中 $\ket{m_{l},m_{s}}$ 表示未耦合表象。中间的 $M=0$ 有二重简并。

当磁场减小时，旋轨耦合变得重要，好量子数逐渐变成

$$
\hat{\vec{J}}=\hat{\vec{L}}+\hat{\vec{S}},\quad
m_{j}=m_{l}+m_{s}
$$

注意 $m_{j}$ 在整个过程中仍然守恒，所以只有相同 $m_{j}$ 的态会互相混合。两个极端态本来就是唯一的

$$
\ket{\frac{3}{2},\frac{3}{2}}=\ket{1,\frac{1}{2}}\\
\ket{\frac{3}{2},-\frac{3}{2}}=\ket{-1,-\frac{1}{2}}
$$

它们直接成为弱场下 $3P_{3/2}$ 的 $m_{j}=\pm\frac{3}{2}$ 态。

对于 $m_{j}=\frac{1}{2}$，强场基矢为 $\ket{0,\frac{1}{2}}$ 和 $\ket{1,-\frac{1}{2}}$。弱场下它们重新组合为

$$
\ket{\frac{3}{2},\frac{1}{2}}
=\sqrt{\frac{2}{3}}\ket{0,\frac{1}{2}}
+\sqrt{\frac{1}{3}}\ket{1,-\frac{1}{2}}\\
\ket{\frac{1}{2},\frac{1}{2}}
=\sqrt{\frac{1}{3}}\ket{0,\frac{1}{2}}
-\sqrt{\frac{2}{3}}\ket{1,-\frac{1}{2}}
$$

对于 $m_{j}=-\frac{1}{2}$，强场基矢为 $\ket{-1,\frac{1}{2}}$ 和 $\ket{0,-\frac{1}{2}}$。弱场下它们重新组合为

$$
\ket{\frac{3}{2},-\frac{1}{2}}
=\sqrt{\frac{1}{3}}\ket{-1,\frac{1}{2}}
+\sqrt{\frac{2}{3}}\ket{0,-\frac{1}{2}}\\
\ket{\frac{1}{2},-\frac{1}{2}}
=\sqrt{\frac{2}{3}}\ket{-1,\frac{1}{2}}
-\sqrt{\frac{1}{3}}\ket{0,-\frac{1}{2}}
$$

所以强场下那个二重简并的 $M=0$ 并不是整体变成弱场下的一个二重态；它的两个态分别属于 $m_{j}=-\frac{1}{2}$ 和 $m_{j}=\frac{1}{2}$ 两个不同的子空间，并分别与相邻的强场能级混合。最后形成的就是弱场下的两组精细结构能级

$$
3P_{3/2}\quad m_{j}=\frac{3}{2},\frac{1}{2},-\frac{1}{2},-\frac{3}{2}\\
3P_{1/2}\quad m_{j}=\frac{1}{2},-\frac{1}{2}
$$

在弱场极限中，它们的 Zeeman 位移为

$$
\Delta E=\mu_{\mathrm{B}}Bg_{j}m_{j}\\
g_{3/2}=\frac{4}{3}\\
g_{1/2}=\frac{2}{3}
$$

10.1.1 设 $\hat{H}^{(0)}$ 有 2 个不简并能级 $E_{10}>E_{20}$，$\hat{H}'$ 在它上面的矩阵元为 $H'_{11}=H'_{22}=a$，$H'_{12}=H'_{21}=b$，$a,b$ 是实数。(a) 用微扰论求 $\hat{H}=\hat{H}^{(0)}+\hat{H}'$ 的能级至二级修正。(b) 实际上这个问题是有严格解的，把严格解也求出来，并讨论一下：在什么条件下严格解化为微扰论的解？

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
E_{1}^{(2)}=\frac{|H'_{21}|^{2}}{E_{10}-E_{20}}=\frac{b^{2}}{\Delta}\\
E_{2}^{(2)}=\frac{|H'_{12}|^{2}}{E_{20}-E_{10}}=-\frac{b^{2}}{\Delta}
$$

因此到二级为止

$$
E_{1}=E_{10}+a+\frac{b^{2}}{\Delta}\\
E_{2}=E_{20}+a-\frac{b^{2}}{\Delta}
$$

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
E_{+}\simeq E_{10}+a+\frac{b^{2}}{\Delta}\\
E_{-}\simeq E_{20}+a-\frac{b^{2}}{\Delta}
$$

这就回到了微扰论的结果。所以真正需要的小量条件是非对角耦合远小于能级间隔，即 $|b|\ll E_{10}-E_{20}$。对角元 $a$ 在这个例子里只是把两个能级整体平移。

10.1.2 习题 3.3.1 是求粒子在无限深势阱加中心 $\delta$ 势垒中的能谱，其中

$$
V(x)=\gamma\delta(x)\quad (|x|<a,\gamma>0)\\
V(x)=+\infty\quad (|x|>a)
$$

那里是求精确解，现在请你把中心 $\delta$ 势垒 $V'(x)=\gamma\delta(x)$ 做为对无限深势阱的微扰再解一下（准确到一级微扰），并比较二者的结果。

先看未受微扰的无限深势阱 $-a<x<a$。按宇称分类，偶宇称本征态可以写为

$$
\psi_{r}^{(+)}(x)=\frac{1}{\sqrt{a}}\cos{\frac{(2r+1)\pi x}{2a}}\\
E_{r}^{(+,0)}=\frac{\hbar^{2}}{2\mu}\left(\frac{(2r+1)\pi}{2a}\right)^{2}\\
r=0,1,2,\cdots
$$

奇宇称本征态可以写为

$$
\psi_{r}^{(-)}(x)=\frac{1}{\sqrt{a}}\sin{\frac{r\pi x}{a}}\\
E_{r}^{(-,0)}=\frac{\hbar^{2}}{2\mu}\left(\frac{r\pi}{a}\right)^{2}\\
r=1,2,\cdots
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

这也很符合直觉。中心 $\delta$ 势垒只看到波函数在 $x=0$ 的值，因此奇宇称态在中心有节点，完全不受影响。

再和精确解比较。奇宇称态精确地满足 $\psi(0)=0$，所以不受 $\delta$ 势垒影响，这一点和微扰论完全一致。偶宇称态的精确解可以写成 $E=\frac{\hbar^{2}k^{2}}{2\mu}$，并满足边界条件和导数跃变条件

$$
\psi(a)=0\\
\left.\dv[]{\psi}{x}\right|_{0^{+}}
-\left.\dv[]{\psi}{x}\right|_{0^{-}}
=\frac{2\mu\gamma}{\hbar^{2}}\psi(0)
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