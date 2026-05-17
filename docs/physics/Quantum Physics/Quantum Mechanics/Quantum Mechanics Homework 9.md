# 量子力学 第9次作业

Chasse_neige

8.1.1 求证 $(\vec{a} \cdot \vec{\sigma})(\vec{b} \cdot \vec{\sigma}) = (\vec{a} \cdot \vec{b})I + \mathrm{i}(\vec{a} \times \vec{b}) \cdot \vec{\sigma}$，其中 $\vec{a}, \vec{b}$ 是任何三维矢量（纯数或者算符）。

Pauli 矩阵满足

$$
\sigma_{i}\sigma_{j}=\delta_{ij}I+\mathrm{i}\varepsilon_{ijk}\sigma_{k}
$$

所以

$$
(\vec{a}\cdot\vec{\sigma})(\vec{b}\cdot\vec{\sigma})
=a_{i}b_{j}\sigma_{i}\sigma_{j}\\
=a_{i}b_{j}\delta_{ij}I+\mathrm{i}a_{i}b_{j}\varepsilon_{ijk}\sigma_{k}\\
=(\vec{a}\cdot\vec{b})I+\mathrm{i}(\vec{a}\times\vec{b})\cdot\vec{\sigma}
$$

这里如果 $\vec{a},\vec{b}$ 的分量是算符，乘积的次序理解为 $a_{i}b_{j}$，并且这些算符与 Pauli 矩阵对易。

8.1.2 记 $\sigma_{\pm} = (1/2)(\sigma_{x} \pm \mathrm{i}\sigma_{y})$，求证：$\sigma_+\alpha = 0$，$\sigma_+\beta = \alpha$，$\sigma_-\alpha = \beta$，$\sigma_-\beta = 0$ 以及 $\sigma_+^{2} = \sigma_-^{2} = 0$，所以 $\sigma_+$ 是 $S_{z}$ 的升级算符，$\sigma_-$ 是 $S_{z}$ 的降级算符。

取

$$
\alpha=\begin{pmatrix}1\\0\end{pmatrix},\quad \beta=\begin{pmatrix}0\\1\end{pmatrix}
$$

由

$$
\sigma_{x}=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
\sigma_{y}=\begin{pmatrix}0&-\mathrm{i}\\ \mathrm{i}&0\end{pmatrix},\quad
\sigma_{z}=\begin{pmatrix}1&0\\0&-1\end{pmatrix}
$$

得到

$$
\sigma_{+}=\frac{1}{2}(\sigma_{x}+\mathrm{i}\sigma_{y})
=\begin{pmatrix}0&1\\0&0\end{pmatrix},\quad
\sigma_{-}=\frac{1}{2}(\sigma_{x}-\mathrm{i}\sigma_{y})
=\begin{pmatrix}0&0\\1&0\end{pmatrix}
$$

因此

$$
\sigma_{+}\alpha=0,\quad \sigma_{+}\beta=\alpha,\quad
\sigma_{-}\alpha=\beta,\quad \sigma_{-}\beta=0
$$

再直接相乘有

$$
\sigma_{+}^{2}=
\begin{pmatrix}0&1\\0&0\end{pmatrix}
\begin{pmatrix}0&1\\0&0\end{pmatrix}=0,\quad
\sigma_{-}^{2}=
\begin{pmatrix}0&0\\1&0\end{pmatrix}
\begin{pmatrix}0&0\\1&0\end{pmatrix}=0
$$

由于 $S_{z}=\frac{\hbar}{2}\sigma_{z}$，$\alpha$ 和 $\beta$ 的 $S_{z}$ 本征值分别为 $\frac{\hbar}{2}$ 和 $-\frac{\hbar}{2}$。所以 $\sigma_{+}$ 把 $\beta$ 升为 $\alpha$，而 $\sigma_{-}$ 把 $\alpha$ 降为 $\beta$。

8.1.3 记 $P_{\pm} = (1/2)(1 \pm \sigma_{z})$，求证：$P_+\alpha = \alpha$，$P_+\beta = 0$，$P_-\alpha = 0$，$P_-\beta = \beta$ 以及 $P_+^{2} = P_+$，$P_-^{2} = P_-$，$P_+P_- = P_-P_+ = 0$，$P_+ + P_- = I$。所以 $P_+$，$P_-$ 分别称为态 $\alpha$，$\beta$ 的投影算符。

由 $\sigma_{z}$ 的矩阵形式得到

$$
P_{+}=\frac{1}{2}(I+\sigma_{z})
=\begin{pmatrix}1&0\\0&0\end{pmatrix},\quad
P_{-}=\frac{1}{2}(I-\sigma_{z})
=\begin{pmatrix}0&0\\0&1\end{pmatrix}
$$

于是

$$
P_{+}\alpha=\alpha,\quad P_{+}\beta=0,\quad
P_{-}\alpha=0,\quad P_{-}\beta=\beta
$$

矩阵乘法给出

$$
P_{+}^{2}=P_{+},\quad P_{-}^{2}=P_{-},\quad
P_{+}P_{-}=P_{-}P_{+}=0,\quad P_{+}+P_{-}=I
$$

所以 $P_{+}$ 和 $P_{-}$ 分别把任意二分量自旋态投影到 $\alpha$ 和 $\beta$ 方向。

8.1.4（选做）对态 $\alpha = (1, 0)^{T}$，求 $\overline{(\Delta S_{x})^{2}} \cdot \overline{(\Delta S_{y})^{2}} = ?$ 它是不是最小测不准态？

对于态 $\alpha$，有

$$
S_{x}=\frac{\hbar}{2}\sigma_{x},\quad S_{y}=\frac{\hbar}{2}\sigma_{y},\quad S_{z}=\frac{\hbar}{2}\sigma_{z}
$$

先计算平均值

$$
\overline{S_{x}}=\alpha^{\dagger}S_{x}\alpha=0,\quad
\overline{S_{y}}=\alpha^{\dagger}S_{y}\alpha=0
$$

又因为 $\sigma_{x}^{2}=\sigma_{y}^{2}=I$，所以

$$
\overline{S_{x}^{2}}=\frac{\hbar^{2}}{4},\quad
\overline{S_{y}^{2}}=\frac{\hbar^{2}}{4}
$$

于是

$$
\overline{(\Delta S_{x})^{2}}=\frac{\hbar^{2}}{4},\quad
\overline{(\Delta S_{y})^{2}}=\frac{\hbar^{2}}{4}
$$

所以

$$
\overline{(\Delta S_{x})^{2}}\cdot\overline{(\Delta S_{y})^{2}}
=\frac{\hbar^{4}}{16}
$$

另一方面

$$
[S_{x},S_{y}]=\mathrm{i}\hbar S_{z},\quad \overline{S_{z}}=\frac{\hbar}{2}
$$

不确定关系右端为

$$
\frac{1}{4}\left|\overline{[S_{x},S_{y}]}\right|^{2}
=\frac{1}{4}\left|\mathrm{i}\hbar\frac{\hbar}{2}\right|^{2}
=\frac{\hbar^{4}}{16}
$$

等号成立，因此态 $\alpha$ 是 $S_{x}$ 和 $S_{y}$ 的最小测不准态。

8.2.1 令 $\hat{P}^+ = \dfrac{1}{2l+1}\left[l + 1 + \dfrac{1}{\hbar}(\vec{\sigma} \cdot \hat{\vec{L}})\right]$，$\hat{P}^- = \dfrac{1}{2l+1}\left[l - \dfrac{1}{\hbar}(\vec{\sigma} \cdot \hat{\vec{L}})\right]$。求证：

(a) $(\hat{P}^+)^{2} = \hat{P}^+$，$(\hat{P}^-)^{2} = \hat{P}^-$，$\hat{P}^+\hat{P}^- = \hat{P}^-\hat{P}^+ = 0$，$\hat{P}^+ + \hat{P}^- = I$；

令

$$
\hat{A}=\frac{1}{\hbar}\vec{\sigma}\cdot\hat{\vec{L}}
$$

先计算 $(\vec{\sigma}\cdot\hat{\vec{L}})^{2}$。利用 8.1.1 的结果，注意 $\hat{L}_{i}$ 之间不对易，所以

$$
(\vec{\sigma}\cdot\hat{\vec{L}})^{2}
=\sigma_{i}\sigma_{j}\hat{L}_{i}\hat{L}_{j}\\
=\hat{L}^{2}+\mathrm{i}\varepsilon_{ijk}\sigma_{k}\hat{L}_{i}\hat{L}_{j}\\
=\hat{L}^{2}+\frac{\mathrm{i}}{2}\varepsilon_{ijk}\sigma_{k}[\hat{L}_{i},\hat{L}_{j}]\\
=\hat{L}^{2}-\frac{\hbar}{2}\varepsilon_{ijk}\varepsilon_{ijl}\sigma_{k}\hat{L}_{l}\\
=\hat{L}^{2}-\hbar\vec{\sigma}\cdot\hat{\vec{L}}
$$

在固定 $l$ 的子空间中，$\hat{L}^{2}=l(l+1)\hbar^{2}$，因此

$$
\hat{A}^{2}=l(l+1)-\hat{A}
$$

现在

$$
\hat{P}^{+}=\frac{\hat{A}+l+1}{2l+1},\quad
\hat{P}^{-}=\frac{l-\hat{A}}{2l+1}
$$

由 $\hat{A}^{2}=l(l+1)-\hat{A}$ 可得

$$
(\hat{A}+l+1)^{2}=(2l+1)(\hat{A}+l+1)
$$

以及

$$
(l-\hat{A})^{2}=(2l+1)(l-\hat{A})
$$

所以

$$
(\hat{P}^{+})^{2}=\hat{P}^{+},\quad
(\hat{P}^{-})^{2}=\hat{P}^{-}
$$

再计算二者乘积

$$
(\hat{A}+l+1)(l-\hat{A})
=l(l+1)-\hat{A}^{2}-\hat{A}=0
$$

因此

$$
\hat{P}^{+}\hat{P}^{-}=\hat{P}^{-}\hat{P}^{+}=0
$$

最后

$$
\hat{P}^{+}+\hat{P}^{-}
=\frac{\hat{A}+l+1+l-\hat{A}}{2l+1}=I
$$

(b) $\hat{P}^+\phi_{ljm_{j}} = \phi_{ljm_{j}}$（for $j = l + \dfrac{1}{2}$），$\hat{P}^-\phi_{ljm_{j}} = \phi_{ljm_{j}}$（for $j = l - \dfrac{1}{2}$）。因此 $\hat{P}^+$ 和 $\hat{P}^-$ 分别称为 $\phi_{ljm_{j}}$（$j = l + (1/2)$）和 $\phi_{ljm_{j}}$（$j = l - (1/2)$）的投影算符。

因为 $\hat{\vec{J}}=\hat{\vec{L}}+\hat{\vec{S}}$，且 $\hat{\vec{S}}=\frac{\hbar}{2}\vec{\sigma}$，所以

$$
\vec{\sigma}\cdot\hat{\vec{L}}=\frac{2}{\hbar}\hat{\vec{L}}\cdot\hat{\vec{S}}
$$

又有

$$
\hat{\vec{L}}\cdot\hat{\vec{S}}
=\frac{1}{2}(\hat{J}^{2}-\hat{L}^{2}-\hat{S}^{2})
$$

作用在 $\phi_{ljm_{j}}$ 上时

$$
\hat{A}\phi_{ljm_{j}}
=\left[j(j+1)-l(l+1)-\frac{3}{4}\right]\phi_{ljm_{j}}
$$

当 $j=l+\frac{1}{2}$ 时

$$
j(j+1)-l(l+1)-\frac{3}{4}=l
$$

所以

$$
\hat{P}^{+}\phi_{ljm_{j}}
=\frac{l+l+1}{2l+1}\phi_{ljm_{j}}
=\phi_{ljm_{j}},\quad
\hat{P}^{-}\phi_{ljm_{j}}=0
$$

当 $j=l-\frac{1}{2}$ 时

$$
j(j+1)-l(l+1)-\frac{3}{4}=-(l+1)
$$

所以

$$
\hat{P}^{-}\phi_{ljm_{j}}
=\frac{l+l+1}{2l+1}\phi_{ljm_{j}}
=\phi_{ljm_{j}},\quad
\hat{P}^{+}\phi_{ljm_{j}}=0
$$

这说明 $\hat{P}^{+}$ 和 $\hat{P}^{-}$ 分别投影到 $j=l+\frac{1}{2}$ 和 $j=l-\frac{1}{2}$ 的子空间。

8.2.2 请推导（不是代入课文中的公式）$l = 1$，$j = (1/2)$，$m_{j} = +(1/2)$ 时 $\phi_{ljm_{j}}$ 的表达式。

>  提示：它是 $\hat{\vec{L}} \cdot \hat{\vec{S}}$ 的本征态；可以利用 $\hat{L}_+Y_{10}(\theta, \varphi) = \sqrt{2}\hbar Y_{11}(\theta, \varphi)$，$\hat{L}_-Y_{11}(\theta, \varphi) = \sqrt{2}\hbar Y_{10}(\theta, \varphi)$

当 $m_{j}=\frac{1}{2}$ 时，只能由两个态线性组合得到

$$
\phi=aY_{10}\alpha+bY_{11}\beta
$$

这里 $Y_{10}\alpha$ 的 $m_{l}=0,m_{s}=\frac{1}{2}$，而 $Y_{11}\beta$ 的 $m_{l}=1,m_{s}=-\frac{1}{2}$。

利用

$$
\hat{\vec{L}}\cdot\hat{\vec{S}}
=\hat{L}_{z}\hat{S}_{z}+\frac{1}{2}(\hat{L}_{+}\hat{S}_{-}+\hat{L}_{-}\hat{S}_{+})
$$

并且

$$
\hat{S}_{-}\alpha=\hbar\beta,\quad \hat{S}_{+}\beta=\hbar\alpha,\quad
\hat{S}_{+}\alpha=0,\quad \hat{S}_{-}\beta=0
$$

所以

$$
\hat{\vec{L}}\cdot\hat{\vec{S}}(Y_{10}\alpha)
=\frac{\hbar^{2}}{\sqrt{2}}Y_{11}\beta
$$

以及

$$
\hat{\vec{L}}\cdot\hat{\vec{S}}(Y_{11}\beta)
=-\frac{\hbar^{2}}{2}Y_{11}\beta+\frac{\hbar^{2}}{\sqrt{2}}Y_{10}\alpha
$$

对于 $l=1,j=\frac{1}{2}$，$\hat{\vec{L}}\cdot\hat{\vec{S}}$ 的本征值为

$$
\frac{1}{2}\left[j(j+1)-l(l+1)-\frac{3}{4}\right]\hbar^{2}
=-\hbar^{2}
$$

因此要求

$$
\hat{\vec{L}}\cdot\hat{\vec{S}}\phi=-\hbar^{2}\phi
$$

比较 $Y_{10}\alpha$ 和 $Y_{11}\beta$ 的系数得到

$$
\frac{b}{\sqrt{2}}=-a,\quad
\frac{a}{\sqrt{2}}-\frac{b}{2}=-b
$$

两式给出 $b=-\sqrt{2}a$。再由归一化条件 $|a|^{2}+|b|^{2}=1$，可以取

$$
a=\frac{1}{\sqrt{3}},\quad b=-\sqrt{\frac{2}{3}}
$$

所以

$$
\phi_{1,\frac{1}{2},\frac{1}{2}}
=\frac{1}{\sqrt{3}}Y_{10}\alpha-\sqrt{\frac{2}{3}}Y_{11}\beta
$$

8.2.3 (选做) 一般地说，如果电子的角动量是$\vec{J}$（轨道角动量或自旋角动量或总角动量），$\vec{J}$产生的磁矩是$\vec{M}_{J}$，那么总成立$\vec{M}_{J}/\mu_{\text{B}}=-g_{J}(\vec{J}/\hbar)$，其中$\mu_{\text{B}}$是Bohr磁子，$g_{J}$是无量纲常数，称为g因子或朗德Landé因子。已知：对于轨道角动量，$g_{L}=1$（见§6.4.3），对自旋角动量，$g_{S}=2$（见§8.1.1），因此问题是：对总角动量$\vec{J}=\vec{L}+\vec{S}$，$g_{J}=$？下面分两步来回答该问题。

![image-20260515154058580](/Users/wutong/Library/Application%20Support/typora-user-images/image-20260515154058580.png)

(a) 请证明：若$\vec{J}=\vec{J}_{1}+\vec{J}_{2}$，则有
$$
\bar{J}_{1z}=\frac{j(j+1)+j_{1}(j_{1}+1)-j_{2}(j_{2}+1)}{2j(j+1)}J_{z}, \quad \bar{J}_{2z}=\frac{j(j+1)+j_{2}(j_{2}+1)-j_{1}(j_{1}+1)}{2j(j+1)}J_{z}
$$

>  提示：参考§7.6.3给出的定理。它的半经典图像是（见右，摘自Griffiths《量子力学概论》中文版第182页，英文版p.278）：$\vec{J}_{1}$和$\vec{J}_{2}$在绕着$\vec{J}$转，$\vec{J}$又在绕着Z轴转，因而成立$\bar{J}_{1z}=\frac{\vec{J}_{1}\cdot\vec{J}}{j^{2}}J_{z}$，$\bar{J}_{2z}=\frac{\vec{J}_{2}\cdot\vec{J}}{j^{2}}J_{z}$。由此即可导出上式。

在 $|j,m\rangle$ 态中，$\vec{J}_{1}$ 和 $\vec{J}_{2}$ 的平均投影只能沿着 $\vec{J}$ 的方向。因此可以写成

$$
\bar{J}_{1z}=C_{1}J_{z},\quad \bar{J}_{2z}=C_{2}J_{z}
$$

系数由它们在 $\vec{J}$ 方向上的投影决定

$$
C_{1}=\frac{\overline{\vec{J}_{1}\cdot\vec{J}}}{\overline{\vec{J}^{2}}},\quad
C_{2}=\frac{\overline{\vec{J}_{2}\cdot\vec{J}}}{\overline{\vec{J}^{2}}}
$$

由 $\vec{J}=\vec{J}_{1}+\vec{J}_{2}$ 得到

$$
\vec{J}_{1}\cdot\vec{J}
=\frac{1}{2}(\vec{J}^{2}+\vec{J}_{1}^{2}-\vec{J}_{2}^{2})
$$

以及

$$
\vec{J}_{2}\cdot\vec{J}
=\frac{1}{2}(\vec{J}^{2}+\vec{J}_{2}^{2}-\vec{J}_{1}^{2})
$$

代入本征值

$$
\overline{\vec{J}^{2}}=j(j+1)\hbar^{2},\quad
\overline{\vec{J}_{1}^{2}}=j_{1}(j_{1}+1)\hbar^{2},\quad
\overline{\vec{J}_{2}^{2}}=j_{2}(j_{2}+1)\hbar^{2}
$$

于是

$$
C_{1}=\frac{j(j+1)+j_{1}(j_{1}+1)-j_{2}(j_{2}+1)}{2j(j+1)}
$$

以及

$$
C_{2}=\frac{j(j+1)+j_{2}(j_{2}+1)-j_{1}(j_{1}+1)}{2j(j+1)}
$$

所以

$$
\bar{J}_{1z}=\frac{j(j+1)+j_{1}(j_{1}+1)-j_{2}(j_{2}+1)}{2j(j+1)}J_{z},\quad
\bar{J}_{2z}=\frac{j(j+1)+j_{2}(j_{2}+1)-j_{1}(j_{1}+1)}{2j(j+1)}J_{z}
$$

这里 $J_{z}$ 表示总角动量在该态中的 $z$ 分量本征值。

(b) 再利用$\vec{J}=\vec{L}+\vec{S}$和$\vec{M}_{J}=\vec{M}_{L}+\vec{M}_{S}$，即可求出$g_{J}$。

对电子有

$$
\frac{\vec{M}_{L}}{\mu_{\mathrm{B}}}=-\frac{\vec{L}}{\hbar},\quad
\frac{\vec{M}_{S}}{\mu_{\mathrm{B}}}=-2\frac{\vec{S}}{\hbar}
$$

令

$$
C_{L}=\frac{j(j+1)+l(l+1)-s(s+1)}{2j(j+1)}
$$

以及

$$
C_{S}=\frac{j(j+1)+s(s+1)-l(l+1)}{2j(j+1)}
$$

则上一问给出

$$
\bar{L}_{z}=C_{L}J_{z},\quad \bar{S}_{z}=C_{S}J_{z}
$$

所以

$$
\frac{\bar{M}_{Jz}}{\mu_{\mathrm{B}}}
=-\frac{1}{\hbar}(\bar{L}_{z}+2\bar{S}_{z})\\
=-\frac{1}{\hbar}(C_{L}+2C_{S})J_{z}
$$

与定义

$$
\frac{\bar{M}_{Jz}}{\mu_{\mathrm{B}}}=-g_{J}\frac{J_{z}}{\hbar}
$$

比较得到

$$
g_{J}=C_{L}+2C_{S}
=1+\frac{j(j+1)+s(s+1)-l(l+1)}{2j(j+1)}
$$

对电子 $s=\frac{1}{2}$，因此

$$
g_{J}=1+\frac{j(j+1)+\frac{3}{4}-l(l+1)}{2j(j+1)}
$$

8.2.4 (选做) 多分量波函数还可以描写其它物理系统。比如，某Bose-Einstein凝聚体(BEC)中的原子的自旋可能是$F_{1}$也可能是$F_{2}$，若它们在给定点$\vec{r}$上的几率振幅分别为$\psi_{1}$和$\psi_{2}$，那么系统的波函数就可以写为$\psi(\vec{r},t)=(\psi_{1}(\vec{r},t),\psi_{2}(\vec{r},t))^{T}$，这种情形称为赝自旋pseudospin。这时，系统的Hamiltonian可以写为$\hat{H}=-\frac{\hbar^{2}}{2\mu}\nabla^{2}+V$，$V=\begin{pmatrix} V_{0}(\vec{r}) & -A \\ -A & V_{0}(\vec{r}) \end{pmatrix}$，其中$V_{0}(\vec{r})$描写约束BEC系统的磁光阱，而$A$是正实常数。请解释一下非对角元素$A$的物理意义。

>  提示：观察$\partial|\psi_{i}|^{2}/\partial t$（$i=1,2$）。

记

$$
\hat{h}_{0}=-\frac{\hbar^{2}}{2\mu}\nabla^{2}+V_{0}(\vec{r})
$$

则 Schrödinger 方程为

$$
\mathrm{i}\hbar\pdv{\psi_{1}}{t}=\hat{h}_{0}\psi_{1}-A\psi_{2},\quad
\mathrm{i}\hbar\pdv{\psi_{2}}{t}=\hat{h}_{0}\psi_{2}-A\psi_{1}
$$

对两个分量的几率密度分别求导，可以得到

$$
\pdv{|\psi_{1}|^{2}}{t}+\nabla\cdot\vec{j}_{1}
=-\frac{2A}{\hbar}\operatorname{Im}(\psi_{1}^{*}\psi_{2})
$$

以及

$$
\pdv{|\psi_{2}|^{2}}{t}+\nabla\cdot\vec{j}_{2}
=\frac{2A}{\hbar}\operatorname{Im}(\psi_{1}^{*}\psi_{2})
$$

其中

$$
\vec{j}_{i}=\frac{\hbar}{2\mu\mathrm{i}}(\psi_{i}^{*}\nabla\psi_{i}-\psi_{i}\nabla\psi_{i}^{*})
$$

可以看到，一个分量的源项正好是另一个分量的汇项，所以总几率密度仍然守恒

$$
\pdv{}{t}(|\psi_{1}|^{2}+|\psi_{2}|^{2})+\nabla\cdot(\vec{j}_{1}+\vec{j}_{2})=0
$$

因此非对角元素 $A$ 的物理意义是两个赝自旋分量之间的相干耦合强度，它使原子可以在 $F_{1}$ 和 $F_{2}$ 两个内部态之间发生转化。若忽略空间运动和 $V_{0}$，这种耦合会导致两分量之间的 Rabi 振荡；矩阵 $V$ 的对称与反对称组合能量相差 $2A$。

8.3.1 考虑原子序数（即核外电子数目）为 Z 的原子。如果这些原子中的单电子能级从低到高的排列顺序是 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s < ⋯ (其中 4s < 3d，5s < 4d，6s < 4f < 5d 就是壳层交叉)。请你据此指出第 1,2,3,4,5,6 周期的元素的原子序数 Z 的范围。

>  提示：一个周期中打头的和结尾的元素的主量子数是相同的。

每个壳层的容量为

$$
s:2,\quad p:6,\quad d:10,\quad f:14
$$

按照题目给出的能级顺序逐个填充。第 1 周期只填 $1s$，所以

$$
Z=1\sim 2
$$

第 2 周期从 $2s$ 到 $2p$，容量为 $2+6=8$，接在 $Z=2$ 后面，因此

$$
Z=3\sim 10
$$

第 3 周期从 $3s$ 到 $3p$，容量也是 $8$，因此

$$
Z=11\sim 18
$$

第 4 周期从 $4s$ 到 $4p$，中间插入 $3d$，容量为 $2+10+6=18$，因此

$$
Z=19\sim 36
$$

第 5 周期从 $5s$ 到 $5p$，中间插入 $4d$，容量为 $2+10+6=18$，因此

$$
Z=37\sim 54
$$

第 6 周期从 $6s$ 到 $6p$，中间插入 $4f$ 和 $5d$，容量为 $2+14+10+6=32$，因此

$$
Z=55\sim 86
$$

整理成表格为

| 周期 | 填充能级 | 原子序数 $Z$ 的范围 |
| :---: | :---: | :---: |
| 1 | $1s$ | $1\sim 2$ |
| 2 | $2s,2p$ | $3\sim 10$ |
| 3 | $3s,3p$ | $11\sim 18$ |
| 4 | $4s,3d,4p$ | $19\sim 36$ |
| 5 | $5s,4d,5p$ | $37\sim 54$ |
| 6 | $6s,4f,5d,6p$ | $55\sim 86$ |
