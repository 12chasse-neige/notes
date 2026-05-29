# 统计力学 第9次作业

Chasse_neige

9.9 利用德拜频谱求固体在高温和低温下配分函数的对数 $\ln Z$，从而求内能和熵。

德拜模型中，固体的频率分布可以写成
$$
g(\omega) \dd{\omega} = \frac{9N}{\omega_{D}^{3}} \omega^{2} \dd{\omega}, \quad 0 \leq \omega \leq \omega_{D}
$$
其中 $\omega_{D}$ 为德拜频率，满足
$$
\int_{0}^{\omega_{D}} g(\omega) \dd{\omega} = 3N
$$

频率为 $\omega$ 的一个振动模式的配分函数为
$$
z_{\omega} = \frac{e^{- \frac{1}{2} \beta \hbar \omega}}{1 - e^{- \beta \hbar \omega}}
$$
所以整个固体的配分函数满足
$$
\ln Z = \int_{0}^{\omega_{D}} g(\omega) \ln z_{\omega} \dd{\omega}
$$
也就是
$$
\ln Z = \int_{0}^{\omega_{D}} \frac{9N}{\omega_{D}^{3}} \omega^{2} \left[-\frac{1}{2} \beta \hbar \omega - \ln \left(1 - e^{- \beta \hbar \omega}\right)\right] \dd{\omega}
$$
令
$$
y = \beta \hbar \omega, \quad y_{D} = \beta \hbar \omega_{D} = \frac{\theta_{D}}{T}
$$
其中 $\theta_{D} = \frac{\hbar \omega_{D}}{k_{B}}$，则有
$$
\ln Z = -\frac{9N}{8} y_{D} - \frac{9N}{y_{D}^{3}} \int_{0}^{y_{D}} x^{2} \ln \left(1 - e^{-x}\right) \dd{x}
$$

先看高温极限。此时 $T \gg \theta_{D}$，也就是 $y_{D} \ll 1$，利用展开
$$
-\frac{x}{2} - \ln \left(1 - e^{-x}\right) = - \ln x - \frac{x^{2}}{24} + O(x^{4})
$$
代入积分，得到
$$
\ln Z \approx 3N \left[1 + \ln \left(\frac{T}{\theta_{D}}\right)\right] - \frac{3N}{40} \left(\frac{\theta_{D}}{T}\right)^{2}
$$
只保留主项时
$$
\ln Z \approx 3N \left[1 + \ln \left(\frac{T}{\theta_{D}}\right)\right]
$$
内能由
$$
U = -\pdv[]{\ln Z}{\beta}
$$
给出，所以高温下有
$$
U \approx 3N k_{B} T + \frac{3N k_{B}}{20} \frac{\theta_{D}^{2}}{T}
$$
只保留主项就是杜隆-珀替定律
$$
U \approx 3N k_{B} T
$$
熵满足
$$
S = k_{B} \left(\ln Z + \beta U\right)
$$
因此高温下
$$
S \approx 3N k_{B} \left[2 + \ln \left(\frac{T}{\theta_{D}}\right) + \frac{1}{40} \left(\frac{\theta_{D}}{T}\right)^{2}\right]
$$
只保留主项时
$$
S \approx 3N k_{B} \left[2 + \ln \left(\frac{T}{\theta_{D}}\right)\right]
$$

再看低温极限。此时 $T \ll \theta_{D}$，也就是 $y_{D} \gg 1$，积分上限可以近似取到无穷大
$$
\int_{0}^{\infty} x^{2} \ln \left(1 - e^{-x}\right) \dd{x} = -\frac{\pi^{4}}{45}
$$
于是
$$
\ln Z \approx -\frac{9N}{8} \frac{\theta_{D}}{T} + \frac{N \pi^{4}}{5} \left(\frac{T}{\theta_{D}}\right)^{3}
$$
其中第一项来自零点振动能。由 $U = -\pdv[]{\ln Z}{\beta}$ 得到
$$
U \approx \frac{9}{8} N k_{B} \theta_{D} + \frac{3N \pi^{4}}{5} k_{B} T \left(\frac{T}{\theta_{D}}\right)^{3}
$$
第一项是零点能，第二项是低温下热激发的能量。熵为
$$
S = k_{B} \left(\ln Z + \beta U\right) \approx \frac{4N \pi^{4}}{5} k_{B} \left(\frac{T}{\theta_{D}}\right)^{3}
$$

9.10 固体中某种准粒子遵从玻色分布，具有以下的色散关系 $\omega = A k^{2}$。试证明在低温范围，这种准粒子的激发所导致的热容量与 $T^{3/2}$ 成比例（铁磁体中的自旋波具有这种性质）。

对于满足 $\omega = A k^{2}$ 的准粒子，其单个激发的能量为
$$
\varepsilon = \hbar \omega = \hbar A k^{2}
$$
在三维情况下，$k$ 空间中 $k$ 到 $k+\dd{k}$ 之间的态数为
$$
\dd{\omega} = \frac{V}{(2\pi)^{3}} 4\pi k^{2} \dd{k} = \frac{V}{2\pi^{2}} k^{2} \dd{k}
$$
所以准粒子激发带来的内能为
$$
U = \frac{V}{2\pi^{2}} \int_{0}^{\infty} \frac{\hbar A k^{2} \cdot k^{2}}{e^{\beta \hbar A k^{2}} - 1} \dd{k}
$$
在低温时，只有小 $k$ 的激发比较重要，所以可以把积分上限近似取为无穷大。令
$$
x = \beta \hbar A k^{2}
$$
则有
$$
k^{4} \dd{k} = \frac{1}{2} \left(\beta \hbar A\right)^{- \frac{5}{2}} x^{\frac{3}{2}} \dd{x}
$$
于是
$$
U = \frac{V \hbar A}{4\pi^{2}} \left(\beta \hbar A\right)^{- \frac{5}{2}} \int_{0}^{\infty} \frac{x^{\frac{3}{2}}}{e^{x} - 1} \dd{x}
$$
利用
$$
\int_{0}^{\infty} \frac{x^{\frac{3}{2}}}{e^{x} - 1} \dd{x} = \Gamma\left(\frac{5}{2}\right) \zeta\left(\frac{5}{2}\right)
$$
可以得到
$$
U = \frac{V}{4\pi^{2}} \frac{\Gamma\left(\frac{5}{2}\right) \zeta\left(\frac{5}{2}\right)}{(\hbar A)^{\frac{3}{2}}} (k_{B}T)^{\frac{5}{2}}
$$
所以热容量为
$$
C_{V} = \pdv[]{U}{T} = \frac{5V k_{B}}{8\pi^{2}} \frac{\Gamma\left(\frac{5}{2}\right) \zeta\left(\frac{5}{2}\right)}{(\hbar A)^{\frac{3}{2}}} (k_{B}T)^{\frac{3}{2}}
$$
因此在低温范围内有
$$
C_{V} \propto T^{\frac{3}{2}}
$$
