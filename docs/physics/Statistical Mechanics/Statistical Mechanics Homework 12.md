# 统计力学 第12次作业

Chasse_neige

9.15 试证明在巨正则系综理论中熵可表示为

$$
S = -k \sum_N \sum_s \rho_{Ns} \ln \rho_{Ns}
$$

其中 $\rho_{Ns} = \frac{1}{\Xi} e^{-\alpha N - \mu E_s}$ 是系统具有 $N$ 个粒子、处在状态 $s$ 的概率。

利用熵和巨配分函数和之间的关系

$$
 S = k (\ln \Xi + \alpha \bar{N} + \beta \bar{E}) 
$$
再利用巨正则系综中热力学量和巨配分函数的关系

$$
	\bar{N} = - \pdv[]{\ln \Xi}{\alpha} = \frac{1}{\Xi} \sum_{N} \sum_{s} N e^{- \alpha N - \beta E_{s}}
$$
$$
	\bar{E} = - \pdv[]{\ln \Xi}{\beta} = \frac{1}{\Xi} \sum_{N} \sum_{s} E_{s} e^{- \alpha N - \beta E_{s}}
$$
所以可以把熵用巨配分函数展开为

$$
\begin{aligned}
S &= k (\ln \Xi + \alpha \bar{N} + \beta \bar{E}) = k (\ln \Xi - \alpha \pdv[]{\ln \Xi}{\alpha} - \beta \pdv[]{\ln \Xi}{\beta})  \\
&= k \left( \ln \Xi - \frac{1}{\Xi} \sum_{N} \sum_{s} (\alpha N + \beta E_{s}) e^{- \alpha N - \beta E_{s}} \right)
\end{aligned}
$$
发现

$$
	\ln \rho_{Ns} = - \alpha N - \beta E_{s} - \ln \Xi
$$
所以上述形式等价于

$$
	S = k \left( \ln \Xi - \frac{1}{\Xi} \sum_{N} \sum_{s} (\alpha N + \beta E_{s}) e^{- \alpha N - \beta E_{s}} \right) = - k \sum_{N} \sum_{s} \rho_{Ns} \ln \rho_{Ns}
$$
9.16 设单原子分子理想气体与固体吸附面接触达到平衡，被吸附的分子可以在吸附面上作二维运动，其能量为 $\frac{p^2}{2m} - \varepsilon_0$，束缚能 $\varepsilon_0$ 是
大于零的常量。试根据巨正则分布求吸附面上被吸附分子的面密度与气体温度和压强的关系。

首先写出该吸附系统的巨配分函数。设吸附面面积为 $A$，吸附分子数为 $N$ 时总能量为

$$
	E_N = \sum_{i=1}^{N} \left( \frac{p_{xi}^{2}+p_{yi}^{2}}{2m} - \varepsilon_0 \right)
$$

所以经典极限下的巨配分函数为

$$
\begin{aligned}
	\Xi
	&= \sum_{N=0}^{\infty} e^{-\alpha N} \frac{1}{N! h^{2N}}
	\int_A \dd[2N]{q} \int \dd[2N]{p}\,
	\exp\left[-\beta \sum_{i=1}^{N}\left(\frac{p_{xi}^{2}+p_{yi}^{2}}{2m}-\varepsilon_0\right)\right] \\
	&= \sum_{N=0}^{\infty} \frac{1}{N!}
	\left[ e^{-\alpha+\beta \varepsilon_0} \frac{A}{h^2}
	\int \dd[2]{p}\, e^{-\beta p^2/2m} \right]^N 
\end{aligned}
$$

二维动量积分为

$$
\int \dd[2]{p}\, e^{-\beta p^2/2m}
= \int_{0}^{2\pi} \dd{\theta} \int_{0}^{\infty} p e^{-\beta p^2/2m}\dd{p}
= \frac{2\pi m}{\beta} 
$$

因此

$$

\Xi
= \sum_{N=0}^{\infty} \frac{1}{N!}
\left( e^{-\alpha+\beta \varepsilon_0} \frac{A}{h^2} \frac{2\pi m}{\beta} \right)^N
= \exp\left( e^{-\alpha+\beta \varepsilon_0} \frac{A}{h^2} \frac{2\pi m}{\beta} \right)
$$

由此吸附面上的平均分子数为

$$
\bar{N} = -\pdv{\ln \Xi}{\alpha}
= e^{-\alpha+\beta \varepsilon_0} \frac{A}{h^2} \frac{2\pi m}{\beta}
$$

面密度为

$$
n_{s} = \frac{\bar{N}}{A}
= e^{-\alpha+\beta \varepsilon_0} \frac{2\pi m}{\beta h^2} 
$$

平衡时吸附相和气相的化学势相同，即 $e^{-\alpha}=e^{\beta \mu}$。对三维单原子理想气体，经典极限下

$$
p = \frac{kT}{\lambda^3} e^{\beta \mu},
\qquad
\lambda = \frac{h}{\sqrt{2\pi m kT}} 
$$

因此

$$
n_s = \frac{p\lambda}{kT} e^{\varepsilon_0/kT}
= \frac{p h}{\sqrt{2\pi m}\,(kT)^{3/2}} e^{\varepsilon_0/kT}
$$

9.19 光子气的 $\alpha = 0$，试证明

$$
\overline{(a_{i} - \bar{a}_{i})^{2}} = -\frac{1}{\beta} \frac{\partial \bar{a}_{i}}{\partial \varepsilon_i}
$$

从而证明

$$
\overline{(a_i - \bar{a}_{i})^2} = \bar{a}_{i} (1 + \bar{a}_{i})
$$
若要求证

$$
\overline{(a_i-\bar{a}_i)^2}=\bar{a}_i(1+\bar{a}_i)
$$

则

$$
a_i
$$

应理解为某一个单光子量子态的占有数，也就是先取简并度

$$
\omega_i=1
$$

的情况。对单个量子态，光子数可以取

$$
a_i=0,1,2,\cdots
$$

其巨配分函数为

$$
\Xi_i
=\sum_{a_i=0}^{\infty}e^{-a_i(\alpha+\beta\varepsilon_i)}
=\frac{1}{1-e^{-\alpha-\beta\varepsilon_i}}
$$

平均占有数为

$$
\bar{a}_i
=\frac{1}{\Xi_i}\sum_{a_i=0}^{\infty}a_i e^{-a_i(\alpha+\beta\varepsilon_i)}
=-\pdv{\ln \Xi_i}{\alpha}
$$

由于

$$
\pdv{\Xi_i}{\alpha}
=-\sum_{a_i=0}^{\infty}a_i e^{-a_i(\alpha+\beta\varepsilon_i)}
$$

所以有

$$
\bar{a}_i=-\frac{1}{\Xi_i}\pdv{\Xi_i}{\alpha}
=-\pdv{\ln \Xi_i}{\alpha}
$$

同理，二次平均为

$$
\overline{a_i^2}
=\frac{1}{\Xi_i}\sum_{a_i=0}^{\infty}a_i^2 e^{-a_i(\alpha+\beta\varepsilon_i)}
=\frac{1}{\Xi_i}\pdv[2]{\Xi_i}{\alpha}
$$

又因为

$$
\frac{1}{\Xi_i}\pdv[2]{\Xi_i}{\alpha}
=
\pdv[2]{\ln \Xi_i}{\alpha}
+
\left(\pdv{\ln \Xi_i}{\alpha}\right)^2
$$

并且

$$
\pdv{\ln \Xi_i}{\alpha}=-\bar{a}_i
$$

所以

$$
\overline{a_i^2}
=
\pdv[2]{\ln \Xi_i}{\alpha}+\bar{a}_i^2
$$

因此涨落为

$$
\overline{(a_i-\bar{a}_i)^2}
=\overline{a_i^2}-\bar{a}_i^2
=\pdv[2]{\ln \Xi_i}{\alpha}
$$

另一方面，既然

$$
\bar{a}_i=-\pdv{\ln \Xi_i}{\alpha}
$$

由于

$$
\pdv{\bar{a}_i}{\alpha}
=\frac{1}{\beta}\pdv{\bar{a}_i}{\varepsilon_i}
$$

所以

$$
\overline{(a_i-\bar{a}_i)^2}
=-\frac{1}{\beta}\pdv{\bar{a}_i}{\varepsilon_i}
$$

对于光子气，光子数不守恒，因此

$$
\alpha=0
$$

于是

$$
\Xi_i
=\frac{1}{1-e^{-\beta\varepsilon_i}}
$$

并且

$$
\bar{a}_i
=-\pdv{\ln \Xi_i}{\alpha}\bigg|_{\alpha=0}
=\frac{1}{e^{\beta\varepsilon_i}-1}
$$

对能量求导，得到

$$
\pdv{\bar{a}_i}{\varepsilon_i}
= -\frac{\beta e^{\beta\varepsilon_i}}{(e^{\beta\varepsilon_i}-1)^2}
$$

所以

$$
\overline{(a_i-\bar{a}_i)^2}
=-\frac{1}{\beta}\pdv{\bar{a}_i}{\varepsilon_i}
=\frac{e^{\beta\varepsilon_i}}{(e^{\beta\varepsilon_i}-1)^2}
$$

又因为

$$
\bar{a}_i
=\frac{1}{e^{\beta\varepsilon_i}-1}
$$

所以

$$
1+\bar{a}_i
=1+\frac{1}{e^{\beta\varepsilon_i}-1}
=\frac{e^{\beta\varepsilon_i}}{e^{\beta\varepsilon_i}-1}
$$

因此

$$
\bar{a}_i(1+\bar{a}_i)
=\frac{1}{e^{\beta\varepsilon_i}-1}
\frac{e^{\beta\varepsilon_i}}{e^{\beta\varepsilon_i}-1}
=\frac{e^{\beta\varepsilon_i}}{(e^{\beta\varepsilon_i}-1)^2}
$$

于是

$$
\overline{(a_i-\bar{a}_i)^2}
=\bar{a}_i(1+\bar{a}_i)
$$