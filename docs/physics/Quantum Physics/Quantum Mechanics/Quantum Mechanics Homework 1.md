# Quantum Mechanics Homework 1

Chasse_neige

## 第一章 量子力学的历史渊源

1.1 给出温度为 $T$ 的空腔辐射中单位体积里的总光子数。提示: $\int_{0}^{\infty} \frac{x^{2} \mathrm{~d} x}{\mathrm{e}^{x}-1}=\sum_{n=1}^{\infty} \frac{2}{n^{3}}=2 \zeta(3) \approx 2.404$ (请证明)。



1.2 一维无限深势阱是 $V(x)=\left\{\begin{array}{cc}0, & (-a<x<a), \\ +\infty, & (x<-a \text {或} x>a)\end{array}\right.$，根据 Sommerfeld 量子化条件，粒子在这样的势阱中的能级是什么? 提示: 粒子的经典运动是在两个端点之间来回地匀速地运动。



1.3 de Broglie 波的相速度 $v_{p}$ 是多大? 群速度 $v_{g}$ 是多大? 它们与粒子的经典速度有什么关系? 提示: 波的 $\omega$ versus $k$ 称为波的色散关系，波的相速度和群速度分别定义为 $v_{p}=\omega / k, v_{g}=\mathrm{d} \omega / \mathrm{d} k$。



## 第二章 波函数与薛定谔方程

2.1.1 把 $\psi(r, \theta, \varphi)=C \mathrm{e}^{-r^{2} / 2 a} r \sin \theta \mathrm{e}^{\mathrm{i} \varphi}$ 归一化，即求出 $C=$ ?



2.1.2 (a) 把 $\psi(x)=C \mathrm{e}^{-\alpha^{2} x^{2} / 2}(-\infty<x<+\infty, \alpha>0)$ 归一化。(b) 求这个 $\psi(x)$ 所对应的动量空间中的波函数 $\phi(p)=$ ? 提示: $\int_{-\infty}^{+\infty} \mathrm{e}^{-u^{2}} \mathrm{~d} u=\sqrt{\pi}$；指数上配方。



2.1.3 如果 $\psi(x)$ 是实函数而且 $\int_{-\infty}^{+\infty}[\psi(x)]^{2} \mathrm{~d} x$ 是收敛的积分，求 $\overline{p_{x}}=$ ?



2.1.4 (选做) 设 $\psi(x)=C\left\{\begin{array}{cc}0, & \text {for}|x|>a, \\ a-|x|, & \text {for}|x|<a\end{array}, C \text {是归一化常数，}\right.$ 见右图。求 $\hat{T}=$ ? ($\hat{T}=\left(-\hbar^{2} / 2 m\right)\left(\mathrm{d}^{2} / \mathrm{d} x^{2}\right)$ 是动能算符)。



2.2.1 求证: 一维自由粒子的 Schrödinger 方程在 Galileo 变换 $\left\{\begin{array}{l}x^{\prime}=x-V t \\ t^{\prime}=t\end{array}\right.$ 下保持不变。提示: 波函数要同时变换才能使方程不变，请找出波函数的变换，并解释一下它的物理意义。



2.2.2 我们从 Schrödinger 方程导出几率守恒的时候，势能函数是实函数即 $V^{*}=V$ 是必要条件。那么，如果势能函数是复函数即 $V=V_{\mathrm{re}}+i V_{\mathrm{im}}\left(V_{\mathrm{re}}\right.$ 和 $\left.V_{\mathrm{im}}\right.$ 是实函数)， $\frac{\partial \rho}{\partial t}$ 变成了什么样子? 当然，虚势能在经典物理的框架内是无法理解的，但是在量子力学的意义上它却描写了确定的物理现象。由上面的方程，你如何解释 $V_{\mathrm{im}}$ 的物理意义? 说明: 在核物理里，引入复的势能的理论称为“光学模型”。



2.2.3 (选做) 把波函数写为 $\Psi(\vec{r}, t)=R(\vec{r}, t) \mathrm{e}^{(\mathrm{i} / \hbar) S(\vec{r}, t)}$，其中 $R(\vec{r}, t)$ 和 $S(\vec{r}, t)$ 是连续可微的实函数，请给出 $R^{2}$ 和 $S$ 满足的方程组。提示: $R^{2}=|\Psi|^{2}$ 是几率密度，所以 $R^{2}$ 满足的方程其实就是几率守恒方程，只不过几率流密度被重写过了； $S$ 满足的方程类似于经典力学中的 Hamilton-Jacobi 方程，只不过势能 $V$ 增加了被波姆 (也译为博姆) Bohm 称为“量子力”的项。沿着这个方向，Bohm 建立了被称为波姆力学 Bohmian Mechanics 的理论，试图重新解释量子现象。物理学界对这个理论存在不同的看法，但主流是不甚认同。