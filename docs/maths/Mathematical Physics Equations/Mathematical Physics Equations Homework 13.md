# 数学物理方程 第13次作业

Chasse_neige

2.证明下列等式

(a) $\delta(x^2 - a^2) = \frac{1}{2|a|}[\delta(x - a) + \delta(x + a)]$

证明：
$$
\delta (x^{2} - a^{2}) = \frac{\delta (x - a)}{|2a|} + \frac{\delta (x + a)}{|-2a|} = \frac{1}{2 |a|} (\delta (x - a) + \delta (x + a))
$$
(b) $\delta(x - a)\delta(x - b) = \delta(a - b)\delta(x - a)$

证明：
$$
\delta (x - a) f (x) = \delta (x - a) f(a)
$$
带入 $f(x) = \delta (x - b)$，所以
$$
\delta(x - a)\delta(x - b) = \delta(a - b)\delta(x - a)
$$
(c) 定义三维 $\delta$ 函数
$$
\delta(\mathbf{r} - \mathbf{r}_0) = \delta(x - x_0)\delta(y - y_0)\delta(z - z_0)
$$


(1)
$$
\nabla^2\frac{1}{|\mathbf{r} - \mathbf{r}_0|} = -4\pi\delta(\mathbf{r} - \mathbf{r}_0)
$$

证明：

考虑任意电势分布 $\varphi (\mathbf{r})$ 
$$
\int \varphi (\mathbf{r}) \nabla^{2} \frac{1}{|\mathbf{r} - \mathbf{r}_0|} \, \dd{\tau} = - \int \frac{1}{|\mathbf{r} - \mathbf{r}_0|} \nabla^{2} \varphi (\mathbf{r}) \, \dd{\tau} = - \int \frac{\rho (\mathbf{r})}{|\mathbf{r} - \mathbf{r}_0|} \, \dd{\tau} = - 4 \pi \varphi (\mathbf{r}_{0})
$$
所以在 $\frac{\varphi}{|\mathbf{r} - \mathbf{r}_0|}$ 在无穷远处收敛的基础上
$$
\nabla^2\frac{1}{|\mathbf{r} - \mathbf{r}_0|} = -4\pi\delta(\mathbf{r} - \mathbf{r}_0)
$$
(2) 在球坐标下
$$
\delta(\mathbf{r} - \mathbf{r}_0) = \frac{1}{r^2}\delta(r - r_0)\delta(\cos\theta - \cos\theta_0)\delta(\varphi - \varphi_0)
$$

以及在柱坐标下

$$
\delta(\mathbf{r} - \mathbf{r}_0) = \frac{1}{r}\delta(r - r_0)\delta(\varphi - \varphi_0)\delta(z - z_0)
$$

证明：

在球坐标下，利用坐标变换关系
$$
x = r \sin \theta \cos \varphi, x_{0} = r_{0} \sin \theta_{0} \cos \varphi_{0} \\
y = r \sin \theta \sin \varphi, y_{0} = r_{0} \sin \theta_{0} \sin \varphi_{0} \\
z = r \cos \theta, z_{0} = r_{0} \cos \theta_{0}
$$
得到
$$
\delta(x - x_{0}) \delta (y - y_{0}) \delta (z - z_{0}) = \pdv{(r, \theta, \varphi)}{(x, y, z)} \delta(r - r_{0}) \delta(\theta - \theta_{0}) \delta(\varphi - \varphi_{0})
$$
带入
$$
\pdv{(x, y, z)}{(r, \theta, \varphi)} = r^{2} \sin \theta
$$
所以
$$
\delta(\mathbf{r} - \mathbf{r}_0) = \frac{1}{r^2 \sin \theta} \delta(r - r_0)\delta(\theta - \theta_0)\delta(\varphi - \varphi_0)\\ = 
\frac{1}{r^2}\delta(r - r_0)\delta(\cos\theta - \cos\theta_0)\delta(\varphi - \varphi_0)
$$
在柱坐标下，同样存在坐标变换关系
$$
x = r \cos \varphi, x_{0} = r_{0} \cos \varphi_{0} \\
y = r \sin \varphi, y_{0} = r_{0} \sin \varphi_{0} \\
z = z, z_{0} = z_{0}
$$
所以
$$
\pdv{(x, y, z)}{(r, \varphi, z)} = r
$$
得到
$$
\delta(\mathbf{r} - \mathbf{r}_0) = \delta(x - x_{0}) \delta (y - y_{0}) \delta (z - z_{0}) = \frac{1}{r}\delta(r - r_0)\delta(\varphi - \varphi_0)\delta(z - z_0)
$$
3.求解下列常微分方程的定解问题

(a) 
$$
\left\{\begin{array}{l}\left[\frac{\mathrm{d}^{2}}{\mathrm{~d} x^{2}}-k^{2}\right] g\left(x, x^{\prime}\right)=\delta\left(x-x^{\prime}\right) \\ \left.g\left(x, x^{\prime}\right)\right|_{x<x^{\prime}} = 0, \left. \frac{\mathrm{d} g\left(x, x^{\prime}\right)}{\mathrm{~d} x}\right|_{x<x^{\prime}} =0\end{array}\right.
$$

当 $x \neq x'$ 时，方程变为
$$
\dv[2]{g}{x} = k^{2} g
$$
得到通解
$$
g(x, x') = A e^{k(x - x')} + B e^{-k(x - x')}
$$
利用
$$
\left. g (x) \right|_{x = x'^{-}} = \left. g (x) \right|_{x = x'^{+}}
$$

$$
\left. g' (x) \right|_{x = x'^{-}}^{x  = x'^{+}} = 1
$$

得到
$$
A + B = 0 \\
Ak - Bk = 1
$$
解得
$$
A = \frac{1}{2k} , B = - \frac{1}{2k}
$$
所以解为
$$
g (x, x') = \begin{cases}
0 \quad (x < x') \\
\frac{1}{2k} (e^{k(x - x')} - e^{-k(x - x')}) \quad (x > x')
\end{cases}
$$
5.(1) 请利用本征值问题
$$
\left\{
\begin{array}{l}
\nabla^{2} \Phi+\lambda \Phi=0 \\
\Phi|_{\Sigma}=0
\end{array}
\right.
$$

的解 $\Phi_{k}$ (对应本征值为 $\lambda_{k}$，且 0 不是本征值) 表达 Poisson 方程第一类边值问题

$$
\left\{
\begin{array}{l}
\nabla^{2} u=-f \\
u|_{\Sigma}=0
\end{array}
\right.
$$

的解

利用本征函数的正交性，把边值问题中的函数展开为本征函数
$$
f = \sum_{k} \frac{\int \Phi_{k}^{*} f \dd{\tau}}{\int \Phi_{k}^{*} \Phi_{k} \dd{\tau}} \Phi_{k}
$$
所以解函数中对应的系数由展开系数和本征值决定
$$
c_{k} = \frac{1}{\lambda_{k}} \frac{\int \Phi_{k}^{*} f \dd{\tau}}{\int \Phi_{k}^{*} \Phi_{k} \dd{\tau}}
$$
得到解函数为
$$
u = \sum_{k} c_{k} \Phi_{k} = \sum_{k} \frac{1}{\lambda_{k}} \frac{\int \Phi_{k}^{*} f \dd{\tau}}{\int \Phi_{k}^{*} \Phi_{k} \dd{\tau}} \Phi_{k}
$$
(2) 请利用该方法求解半径为 $a$ 的导体球壳内静电势分布, 其中球内电荷分布为 $\rho(r, \theta, \varphi)$, 导体球壳接地

这个物理情景对应的边值问题为
$$
\nabla^{2} \varphi = - \frac{\rho}{\epsilon_{0}} \\
\left. \varphi \right|_{\Sigma = \{r = a\}} = 0
$$
利用球坐标下本征值问题的本征函数
$$
w_{nlm} = j_{l} (k_{nl} \frac{r}{a}) Y_{lm} (\theta, \varphi)
$$
对应的本征值为 $\lambda_{nl} = k_{nl}^{2}$

得到解函数的系数为
$$
c_{nlm} =  \frac{\int \rho(r, \theta, \varphi) j_{l} (k_{nl} \frac{r}{a}) Y_{lm}^{*} (\theta, \varphi) r^{2} \sin \theta \, \dd{r} \dd{\theta} \dd{\varphi}}{\frac{k_{nl}^{2}}{2} {j'_{nl}}^{2} (k_{nl}) }
$$
所以对应的解为
$$
u(r, \theta, \varphi) = \sum_{n = 1}^{\infty} \sum_{l = 0}^{\infty} \sum_{m = -l}^{l} \left( \int \rho(r, \theta, \varphi) j_{l} (k_{nl} \frac{r}{a}) Y_{lm}^{*} (\theta, \varphi) r^{2} \sin \theta \, \dd{r} \dd{\theta} \dd{\varphi} \right) \frac{2 j_{l} (k_{nl} \frac{r}{a}) Y_{lm} (\theta, \varphi)}{k_{nl}^{2} {j'_{l}}^{2} (k_{nl})}
$$
(3) 请利用该方法求解半径为 $a$, 长为 $l$ 的圆柱形导体壳内静电势分布, 其中壳内电荷分布为 $\rho(r, \varphi, z)$, 导体壳接地

这个物理情景对应的边值问题为
$$
\nabla^{2} \varphi = - \frac{\rho}{\epsilon_{0}} \\
\left. \varphi \right|_{\Sigma = \{r = a, z = 0, l \}} = 0
$$
利用球坐标下本征值问题的本征函数
$$
w_{nim} = J_{m} (\mu_{i}^{(m)} \frac{r}{a}) \sin(\frac{n \pi}{l} z) e^{im \varphi}
$$
对应的本征值为 $\lambda_{nim} = \frac{{\mu_{i}^{(n)}}^{2}}{a^{{2}}} + \frac{n^{2} \pi^{2}}{l^{2}}$

得到解函数的系数为
$$
c_{nim} = \frac{\int \rho(r, \varphi, z) J_{m} (\mu_{i}^{(m)} \frac{r}{a}) \sin(\frac{n \pi}{l} z)  e^{- im \varphi}r^{2} \sin \theta \, \dd{r} \dd{\theta} \dd{\varphi}}{\frac{\pi a^{2} l}{2} {J'^{2} (\mu_{i}^{(m)})}}
$$
所以对应的解为
$$
u (r, \varphi, z) = \sum_{m = -\infty}^{\infty} \sum_{i = 1}^{\infty} \sum_{n = 1}^{\infty} \left({\int \rho(r, \varphi, z) J_{m} (\mu_{i}^{(m)} \frac{r}{a}) \sin(\frac{n \pi}{l} z)  e^{- im \varphi}r^{2} \sin \theta \, \dd{r} \dd{\theta} \dd{\varphi}}\right) \\ \cdot \frac{2 J_{m} (\mu_{i}^{(m)} \frac{r}{a}) \sin(\frac{n \pi}{l} z) e^{im \varphi}}{\pi a^{2} l J'^{2} (\mu_{i}^{(m)}) \left(\frac{{\mu_{i}^{(n)}}^{2}}{a^{{2}}} + \frac{n^{2} \pi^{2}}{l^{2}} \right)}
$$
