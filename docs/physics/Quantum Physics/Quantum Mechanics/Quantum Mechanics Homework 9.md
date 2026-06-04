# 量子力学 第9次作业

Chasse_neige

8.4.1 设 2 个电子的自旋状态为 $\phi_{1}=\begin{pmatrix}1\\0\end{pmatrix}$ 和 $\phi_{2}=\begin{pmatrix}\cos{\frac{\theta}{2}}\\ \sin{\frac{\theta}{2}}\mathrm{e}^{\mathrm{i}\varphi}\end{pmatrix}$，求它们处在单态和三重态的几率。

把两个电子先看成有标签的粒子，则总自旋态为

$$
\ket{\Phi}=\ket{\phi_{1}}_{1}\ket{\phi_{2}}_{2}
=\cos{\frac{\theta}{2}}\ket{++}+\sin{\frac{\theta}{2}}\mathrm{e}^{\mathrm{i}\varphi}\ket{+-}
$$

单态为

$$
\ket{0,0}=\frac{1}{\sqrt{2}}(\ket{+-}-\ket{-+})
$$

所以单态振幅为

$$
\langle 0,0|\Phi\rangle
=\frac{1}{\sqrt{2}}\sin{\frac{\theta}{2}}\mathrm{e}^{\mathrm{i}\varphi}
$$

因此处在单态的几率是

$$
P_{0}=|\langle 0,0|\Phi\rangle|^{2}
=\frac{1}{2}\sin^{2}{\frac{\theta}{2}}
=\frac{1-\cos{\theta}}{4}
$$

三重态可以取为

$$
\ket{1,1}=\ket{++},\quad
\ket{1,0}=\frac{1}{\sqrt{2}}(\ket{+-}+\ket{-+}),\quad
\ket{1,-1}=\ket{--}
$$

于是

$$
\begin{gathered}
P_{1}=|\langle 1,1|\Phi\rangle|^{2}+|\langle 1,0|\Phi\rangle|^{2}+|\langle 1,-1|\Phi\rangle|^{2}\\
=\cos^{2}{\frac{\theta}{2}}+\frac{1}{2}\sin^{2}{\frac{\theta}{2}}\\
=\frac{3+\cos{\theta}}{4}
\end{gathered}
$$

也可以直接用 $P_{1}=1-P_{0}$ 得到同样的结果。

8.4.2 有 3 个电子的自旋合成为 1 个总自旋，即 $\hat{\vec{S}}=\hat{\vec{S}}_{1}+\hat{\vec{S}}_{2}+\hat{\vec{S}}_{3}$。可以先合成出 $\hat{\vec{S}}_{12}=\hat{\vec{S}}_{1}+\hat{\vec{S}}_{2}$，再合成出 $\hat{\vec{S}}=\hat{\vec{S}}_{12}+\hat{\vec{S}}_{3}$，因此有 3 种可能的情形：$S_{12}=0,S=\frac{1}{2}$；$S_{12}=1,S=\frac{3}{2}$；$S_{12}=1,S=\frac{1}{2}$。态 $\ket{S,m_{S}}$ 总是 $\ket{\pm_{1},\pm_{2},\pm_{3}}$ 的线性组合，请把它们写出来。

#### Reference material

提示：$S_{12}=0,S=\frac{1}{2}$ 和 $S_{12}=1,S=\frac{3}{2}$ 是不难写的，$S_{12}=1,S=\frac{1}{2}$ 和它们正交。
**说明** 读者会问：我们知道 $\alpha=\begin{pmatrix}1\\0\end{pmatrix},\beta=\begin{pmatrix}0\\1\end{pmatrix}$，那么 $\alpha_{1}\beta_{2}=$？答案是 $\alpha_{1}\beta_{2}=\begin{pmatrix}1\begin{pmatrix}0\\1\end{pmatrix}\\0\begin{pmatrix}0\\1\end{pmatrix}\end{pmatrix}=\begin{pmatrix}0\\1\\0\\0\end{pmatrix}$，类似可得其它 $\pm_{1}\pm_{2}$ 态的列矩阵表示。这叫做矩阵的直乘。但实际上很少用这种形式来进行表达和计算。

---

先把前两个电子合成。对于 $1,2$ 两个电子有三重态

$$
\begin{gathered}
\ket{1,1}_{12}=\ket{++}_{12}\\
\ket{1,0}_{12}=\frac{1}{\sqrt{2}}(\ket{+-}_{12}+\ket{-+}_{12})\\
\ket{1,-1}_{12}=\ket{--}_{12}
\end{gathered}
$$

以及单态

$$
\ket{0,0}_{12}=\frac{1}{\sqrt{2}}(\ket{+-}_{12}-\ket{-+}_{12})
$$

下面记 $\ket{S_{12};S,m}$ 表示先合成出 $S_{12}$，再与第三个电子合成出总自旋 $S$ 的态。

对于 $S_{12}=0,S=\frac{1}{2}$，只需要把第三个电子接上去，所以

$$
\begin{gathered}
\ket{0;\frac{1}{2},\frac{1}{2}}
=\frac{1}{\sqrt{2}}(\ket{+-+}-\ket{-++})\\
\ket{0;\frac{1}{2},-\frac{1}{2}}
=\frac{1}{\sqrt{2}}(\ket{+--}-\ket{-+-})
\end{gathered}
$$

对于 $S_{12}=1,S=\frac{3}{2}$，最高权态为 $\ket{+++}$，反复用降算符或者直接利用完全对称性得到

$$
\begin{gathered}
\ket{1;\frac{3}{2},\frac{3}{2}}=\ket{+++}\\
\ket{1;\frac{3}{2},\frac{1}{2}}
=\frac{1}{\sqrt{3}}(\ket{++-}+\ket{+-+}+\ket{-++})\\
\ket{1;\frac{3}{2},-\frac{1}{2}}
=\frac{1}{\sqrt{3}}(\ket{+--}+\ket{-+-}+\ket{--+})\\
\ket{1;\frac{3}{2},-\frac{3}{2}}=\ket{---}
\end{gathered}
$$

最后考虑 $S_{12}=1,S=\frac{1}{2}$ 的情况。在 $m=\frac{1}{2}$ 的子空间里，$S_{12}=1$ 的两个基矢是

$$
\ket{1,1}_{12}\ket{-}_{3},\quad \ket{1,0}_{12}\ket{+}_{3}
$$

其中 $S=\frac{3}{2}$ 的态为

$$
\ket{1;\frac{3}{2},\frac{1}{2}}
=\frac{1}{\sqrt{3}}\ket{1,1}_{12}\ket{-}_{3}
+\sqrt{\frac{2}{3}}\ket{1,0}_{12}\ket{+}_{3}
$$

所以与它正交的归一化态可以取为

$$
\ket{1;\frac{1}{2},\frac{1}{2}}
=\frac{1}{\sqrt{3}}\ket{1,0}_{12}\ket{+}_{3}
-\sqrt{\frac{2}{3}}\ket{1,1}_{12}\ket{-}_{3}
$$

写成 $\ket{\pm_{1}\pm_{2}\pm_{3}}$ 的形式就是

$$
\ket{1;\frac{1}{2},\frac{1}{2}}
=\frac{1}{\sqrt{6}}(\ket{+-+}+\ket{-++}-2\ket{++-})
$$

对这个态作用总降算符，得到另一个 $m=-\frac{1}{2}$ 的态

$$
\ket{1;\frac{1}{2},-\frac{1}{2}}
=\frac{1}{\sqrt{6}}(2\ket{--+}-\ket{+--}-\ket{-+-})
$$

这里最后一组态的整体相位也可以同时反过来，这不影响物理结果。

## 第九章 带电粒子在电磁场中的运动

9.1.1 一方面 Hamiltonian 算符是 $\hat{H}=\frac{1}{2\mu}(\vec{P}-q\vec{A})^{2}+q\phi$，另一方面又有 $\vec{P}-q\vec{A}=\mu\dot{\vec{r}}$，所以实际上 $H=\frac{\mu}{2}\dot{\vec{r}}^{2}+q\phi$。你怎么理解这个结果的物理含义？

这里关键是区分正则动量和机械动量。带电粒子在电磁场中的 Lagrangian 可以写为

$$
L=\frac{1}{2}\mu\dot{\vec{r}}^{2}-q\phi+q\dot{\vec{r}}\cdot\vec{A}
$$

因此正则动量不是机械动量，而是

$$
\vec{P}=\mu\dot{\vec{r}}+q\vec{A}
$$

也就是

$$
\vec{P}-q\vec{A}=\mu\dot{\vec{r}}
$$

Hamiltonian 是

$$
H=\vec{P}\cdot\dot{\vec{r}}-L
=\frac{1}{2}\mu\dot{\vec{r}}^{2}+q\phi
$$

所以从物理能量的角度看，粒子的能量仍然只是动能加上电势能。矢量势 $\vec{A}$ 没有在能量里显式出现，是因为磁场力总是垂直于速度，它只改变速度方向而不做功。

但是在 Hamiltonian 形式里必须用正则动量 $\vec{P}$，所以 $\vec{A}$ 会出现在

$$
H=\frac{1}{2\mu}(\vec{P}-q\vec{A})^{2}+q\phi
$$

这并不矛盾。$\vec{P}$ 是与坐标共轭、满足通常对易关系的量，而 $\mu\dot{\vec{r}}$ 才是有直接力学意义的动量。

9.1.2 熟知平移不变性导致动量守恒，旋转不变性导致角动量守恒，但是在有磁场存在的情况下，如何判断这些不变性却要小心，因为出现在 $\hat{H}$ 里的不是磁场 $\vec{B}$ 而是矢量势 $\vec{A}$。比如匀强磁场 $\vec{B}=B\vec{e}_{z}$ 显然是沿 X 轴和 Y 轴平移以及绕 Z 轴旋转不变的，那么 $\hat{p}_{x},\hat{p}_{y},\hat{L}_{z}$ 都守恒吗？(a) 取 $\vec{A}=(-By,0,0)$ 谁守恒？(b) 取 $\vec{A}=(0,Bx,0)$ 谁守恒？(c) 取 $\vec{A}=(-By/2,Bx/2,0)$ 谁守恒？

#### Reference material

评论：问题的本质在于现在的动量和角动量都是正则的而不是机械的，它们取决于矢量势的选择。所以，在有磁场存在的情况下，"确定的物理系统有确定的守恒量"这个概念，并不成立。

---

只看 $x,y$ 平面内的运动，并且忽略与本题无关的常数项。若 Hamiltonian 中不显含某个坐标，则对应的正则动量守恒；若 Hamiltonian 在通常的 $z$ 轴转动下形式不变，则 $\hat{L}_{z}$ 守恒。

(a) 当 $\vec{A}=(-By,0,0)$ 时

$$
\hat{H}_{a}
=\frac{1}{2\mu}\left[(\hat{p}_{x}+qB\hat{y})^{2}+\hat{p}_{y}^{2}+\hat{p}_{z}^{2}\right]
$$

它不显含 $x$，但显含 $y$，而且形式上也不是绕 $z$ 轴旋转不变的。因此

$$
[\hat{H}_{a},\hat{p}_{x}]=0,\quad
[\hat{H}_{a},\hat{p}_{y}]\neq 0,\quad
[\hat{H}_{a},\hat{L}_{z}]\neq 0
$$

所以只有 $\hat{p}_{x}$ 守恒。

(b) 当 $\vec{A}=(0,Bx,0)$ 时

$$
\hat{H}_{b}
=\frac{1}{2\mu}\left[\hat{p}_{x}^{2}+(\hat{p}_{y}-qB\hat{x})^{2}+\hat{p}_{z}^{2}\right]
$$

它不显含 $y$，但显含 $x$，也不是绕 $z$ 轴旋转不变的。因此

$$
[\hat{H}_{b},\hat{p}_{x}]\neq 0,\quad
[\hat{H}_{b},\hat{p}_{y}]=0,\quad
[\hat{H}_{b},\hat{L}_{z}]\neq 0
$$

所以只有 $\hat{p}_{y}$ 守恒。

(c) 当 $\vec{A}=(-By/2,Bx/2,0)$ 时

$$
\begin{gathered}
\hat{H}_{c}
=\frac{1}{2\mu}\left[\left(\hat{p}_{x}+\frac{qB}{2}\hat{y}\right)^{2}
+\left(\hat{p}_{y}-\frac{qB}{2}\hat{x}\right)^{2}+\hat{p}_{z}^{2}\right]\\
=\frac{\hat{p}_{x}^{2}+\hat{p}_{y}^{2}+\hat{p}_{z}^{2}}{2\mu}
-\frac{qB}{2\mu}\hat{L}_{z}
+\frac{q^{2}B^{2}}{8\mu}(\hat{x}^{2}+\hat{y}^{2})
\end{gathered}
$$

这个形式显然与 $\hat{L}_{z}$ 对易，但是它显含 $x,y$，所以

$$
[\hat{H}_{c},\hat{p}_{x}]\neq 0,\quad
[\hat{H}_{c},\hat{p}_{y}]\neq 0,\quad
[\hat{H}_{c},\hat{L}_{z}]=0
$$

因此只有 $\hat{L}_{z}$ 守恒。

9.1.3 虽然 Schrödinger 方程是规范不变的，但矢量势 $\vec{A}$ 的选择仍然有其它的考虑，而不是完全任意的。例如空间中有匀强磁场 $\vec{B}=B\vec{e}_{z}$ 而粒子在 XY 平面中运动，那么在以下几种附加条件下，你认为选择哪种 $\vec{A}$（参见 9.1.2 题）更方便？

(a) 空间中同时存在匀强电场 $\vec{E}=E\vec{e}_{x}$

可以取标势 $\phi=-Ex$。这时系统仍然沿 $y$ 方向平移不变，所以最好选

$$
\vec{A}=(0,Bx,0)
$$

于是 Hamiltonian 为

$$
\hat{H}
=\frac{1}{2\mu}\left[\hat{p}_{x}^{2}+(\hat{p}_{y}-qB\hat{x})^{2}+\hat{p}_{z}^{2}\right]-qE\hat{x}
$$

它不显含 $y$，所以 $\hat{p}_{y}$ 守恒。这样可以先把 $p_{y}, p_{z}$ 看成常数，把问题化成关于 $x$ 的一维问题。

(b) 粒子同时在各向同性谐振子势能场 $V=\frac{1}{2}\mu\omega^{2}r^{2}$ 中运动。

这时附加势能保持绕 $z$ 轴的旋转对称性，所以应当选对称规范

$$
\vec{A}=\left(-\frac{By}{2},\frac{Bx}{2},0\right)
$$

代入后

$$
\hat{H}
=\frac{\hat{p}_{x}^{2}+\hat{p}_{y}^{2}+\hat{p}_{z}^{2}}{2\mu}
+\frac{1}{2}\mu\left(\omega^{2}+\frac{q^{2}B^{2}}{4\mu^{2}}\right)(\hat{x}^{2}+\hat{y}^{2})
-\frac{qB}{2\mu}\hat{L}_{z}
$$

因此 $\hat{L}_{z}$ 仍然是好量子数。这比 Landau 规范更适合利用圆对称性。

9.1.4（选做）假设电量为 $q$ 的粒子在半径为 $a$ 的超导体细圆环中运动，垂直于该圆环所在平面加了一个强度为 $B$ 的均匀磁场。求证：穿过该圆环的磁通量 $\Phi$ 必是量子化的，即 $\Phi=n \frac{h}{q}$（$n\in \mathbb{Z}$）

#### Reference material

提示：在超导体中粒子的波函数是 $\psi=\sqrt{\rho}\mathrm{e}^{\mathrm{i}\theta}$ 而 $\rho$ 是常数；在有磁场存在的情况下，电流密度的表达式为 $\vec{j}_{e}=\frac{q}{2\mu}[\psi^{*}(-\mathrm{i}\hbar\nabla-q\vec{A})\psi+\psi(\mathrm{i}\hbar\nabla-q\vec{A})\psi^{*}]$ 而在超导体中 $\vec{j}_{e}=0$，这导致了 $\hbar\nabla\theta=q\vec{A}$。磁通量子化的现象最先由 F. London 在 1950 年预言，随后被实验所证实。如果 $q=-e$，那么磁通的量子化单位是 $\Phi_{0}=h/e$，这个量也被称为 Dirac 的单位磁荷。但是实验发现超导环的磁通量量子化的单位不是 $\Phi_{0}$ 而是 $\Phi_{0}/2$，实际上这验证了超导微观机制的 Bardeen-Cooper-Schrieffer (BCS) 理论，因为该理论认为超导体中的载流子是电子对 (Cooper pair)，其电荷为 $-2e$
**注意：如果不是超导体，这个结论是不成立的。**

---

把

$$
\psi=\sqrt{\rho}\mathrm{e}^{\mathrm{i}\theta}
$$

代入电流密度公式。因为 $\rho$ 为常数，有

$$
\nabla\psi=\mathrm{i}\psi\nabla\theta,\quad
\nabla\psi^{*}=-\mathrm{i}\psi^{*}\nabla\theta
$$

于是

$$
\vec{j}_{e}
=\frac{q\rho}{\mu}(\hbar\nabla\theta-q\vec{A})
$$

超导体中 $\vec{j}_{e}=0$，所以

$$
\hbar\nabla\theta=q\vec{A}
$$

沿圆环绕一圈积分，得到

$$
q\oint\vec{A}\cdot\dd{\vec{l}}
=\hbar\oint\nabla\theta\cdot\dd{\vec{l}}
=\hbar\Delta\theta
$$

左边的环路积分就是 $q\Phi$。另一方面，波函数必须单值，所以绕一圈以后相位只能改变 $2\pi$ 的整数倍

$$
\Delta\theta=2\pi n,\quad n\in\mathbb{Z}
$$

因此

$$
q\Phi=2\pi\hbar n=hn
$$

也就是

$$
\Phi=\frac{h}{q}n,\quad n\in\mathbb{Z}
$$

如果 $q$ 为负，负号可以吸收到整数 $n$ 中；如果载流子是 Cooper 对，实际的电荷大小为 $2e$，于是磁通量子单位变为 $\frac{h}{2e}$

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
\begin{gathered}
\varphi_{n}(\eta)
=\frac{1}{\sqrt{2^{n}n!}}\left(\frac{\alpha^{2}}{\pi}\right)^{1/4}
H_{n}(\alpha\eta)\mathrm{e}^{-\alpha^{2}\eta^{2}/2}\\
\alpha=\sqrt{\frac{eB}{\hbar}}
\end{gathered}
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
\begin{gathered}
[\hat{\pi}_{x},\hat{\pi}_{y}]
=[\hat{p}_{x},eA_{y}]+[eA_{x},\hat{p}_{y}]\\
=-\mathrm{i}\hbar e\pdv[]{A_{y}}{x}
+\mathrm{i}\hbar e\pdv[]{A_{x}}{y}\\
=-\mathrm{i}\hbar eB
\end{gathered}
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
\begin{gathered}
\hat{H}
=\frac{1}{2\mu}(\hat{\pi}_{x}^{2}+\hat{\pi}_{y}^{2})\\
=\frac{\hbar eB}{2\mu}(\hat{Q}^{2}+\hat{P}^{2})\\
=\frac{1}{2}(\hat{P}^{2}+\hat{Q}^{2})\hbar\omega_{\mathrm{c}}
\end{gathered}
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
