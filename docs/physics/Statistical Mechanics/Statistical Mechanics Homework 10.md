# 统计力学 第10次作业

Chasse_neige

8.14 试求绝对零度下金属自由电子气体中电子的平均速率$\bar{v}$。

在绝对零度下，自由电子从 $p=0$ 一直填充到费米动量$p_{F}$，电子数为
$$
N = 2 \frac{V}{h^{3}} \frac{4\pi}{3} p_{F}^{3}
$$
所以
$$
n = \frac{N}{V} = \frac{p_{F}^{3}}{3\pi^{2}\hbar^{3}}
$$
由此得到
$$
p_{F} = \hbar (3\pi^{2}n)^{\frac{1}{3}}
$$
在非相对论情况下$v=p/m$，因此平均速率为
$$
\bar{v} = \frac{\int_{0}^{p_{F}} \frac{p}{m} p^{2} \dd{p}}{\int_{0}^{p_{F}} p^{2} \dd{p}} = \frac{3}{4}\frac{p_{F}}{m}
$$
也就是
$$
\bar{v} = \frac{3\hbar}{4m}(3\pi^{2}n)^{\frac{1}{3}} = \frac{3}{4}v_{F}
$$
其中
$$
v_{F} = \frac{p_{F}}{m} = \sqrt{\frac{2\varepsilon_{F}}{m}}
$$

8.18 试求在极端相对论条件下，自由电子气体在0K时的费米能量、内能和简并压。

极端相对论条件下，单个电子的能量可以写作
$$
\varepsilon = pc
$$
费米动量仍然由态数决定，所以
$$
p_{F} = \hbar (3\pi^{2}n)^{\frac{1}{3}}
$$
因此0K时的费米能量为
$$
\varepsilon_{F} = cp_{F} = \hbar c(3\pi^{2}n)^{\frac{1}{3}}
$$
内能为
$$
U = 2 \frac{V}{h^{3}} 4\pi \int_{0}^{p_{F}} cp \cdot p^{2} \dd{p}
$$
与粒子数
$$
N = 2 \frac{V}{h^{3}} 4\pi \int_{0}^{p_{F}} p^{2} \dd{p}
$$
相除可得平均能量
$$
\bar{\varepsilon} = \frac{\int_{0}^{p_{F}} cp^{3} \dd{p}}{\int_{0}^{p_{F}} p^{2} \dd{p}} = \frac{3}{4}cp_{F} = \frac{3}{4}\varepsilon_{F}
$$
所以
$$
U = \frac{3}{4}N\varepsilon_{F}
$$
由于$\varepsilon_{F}\propto n^{\frac{1}{3}}\propto V^{-\frac{1}{3}}$，内能满足$U\propto V^{-\frac{1}{3}}$。于是简并压为
$$
P = -\left(\pdv[]{U}{V}\right)_{N} = \frac{1}{3}\frac{U}{V}
$$
也就是
$$
P = \frac{1}{4}n\varepsilon_{F} = \frac{c p_{F}^{4}}{12\pi^{2}\hbar^{3}}
$$


8.19 假设自由电子在二维平面上运动，面密度为$n$，试求0K时二维电子气体的费米能量、内能和简并压。

设二维面积为$A$。在0K时，动量平面内从$p=0$到$p=p_{F}$的态全部被填满，所以
$$
N = 2 \frac{A}{h^{2}}\pi p_{F}^{2}
$$
因此
$$
n = \frac{N}{A} = \frac{p_{F}^{2}}{2\pi\hbar^{2}}
$$
费米动量和费米能量分别为
$$
p_{F} = \hbar (2\pi n)^{\frac{1}{2}} \\
\varepsilon_{F} = \frac{p_{F}^{2}}{2m} = \frac{\pi\hbar^{2}n}{m}
$$
内能为
$$
U = 2 \frac{A}{h^{2}}2\pi \int_{0}^{p_{F}} \frac{p^{2}}{2m}p\dd{p}
$$
与粒子数相除，得到平均能量
$$
\bar{\varepsilon} = \frac{\int_{0}^{p_{F}} \frac{p^{2}}{2m}p\dd{p}}{\int_{0}^{p_{F}} p\dd{p}} = \frac{1}{2}\varepsilon_{F}
$$
所以
$$
U = \frac{1}{2}N\varepsilon_{F}
$$
在二维情况下，简并压对应面积的变化
$$
P = -\left(\pdv[]{U}{A}\right)_{N}
$$
由于$\varepsilon_{F}\propto n\propto A^{-1}$，有$U\propto A^{-1}$，因此
$$
P = \frac{U}{A} = \frac{1}{2}n\varepsilon_{F} = \frac{\pi\hbar^{2}n^{2}}{2m}
$$


8.21 试根据热力学公式 $S = \int \frac{C_{V}}{T} \dd{T}$，求低温下金属中自由电子气体的熵。

低温下金属自由电子气体的热容量为
$$
C_{V} = \frac{\pi^{2}}{2}Nk_{B}\frac{T}{T_{F}}
$$
其中$k_{B}T_{F}=\varepsilon_{F}=\mu(0)$。利用题目给出的热力学公式，并取$T=0$时$S=0$，有
$$
S = \int_{0}^{T}\frac{C_{V}(T')}{T'}\dd{T'}
$$
代入$C_{V}\propto T$，得到
$$
S = \int_{0}^{T}\frac{\pi^{2}}{2}Nk_{B}\frac{1}{T_{F}}\dd{T'} = \frac{\pi^{2}}{2}Nk_{B}\frac{T}{T_{F}}
$$
也可以写成
$$
S = \frac{\pi^{2}}{2}N k_{B}^{2}\frac{T}{\varepsilon_{F}}
$$
所以低温下自由电子气体的熵与温度成正比。


8.24 关于原子核半径$R$的经验公式给出$R = (1.3 \times 10^{-15}\mathrm{m}) \cdot A^{\frac{1}{3}}$，式中$A$是原子核所含核子数。假设质子数和中子数相等，均为$A/2$。试计算二者在核内的密度$n$。如果将核内的质子和中子看作简并费米气体，试求二者的$\mu(0)$以及核子在核内的平均动能。核子质量$m_{0} = 1.67 \times 10^{-27}\mathrm{kg}$。

原子核的体积为
$$
V = \frac{4\pi}{3}R^{3} = \frac{4\pi}{3}(1.3 \times 10^{-15}\mathrm{m})^{3}A
$$
质子数和中子数都为$A/2$，所以二者的数密度相同
$$
n = \frac{A/2}{V} = \frac{3}{8\pi(1.3 \times 10^{-15}\mathrm{m})^{3}}
$$
代入数值得
$$
n \approx 5.43 \times 10^{43}\mathrm{m}^{-3}
$$
把质子和中子分别看作自旋为$\frac{1}{2}$的简并费米气体，它们各自的费米动量为
$$
p_{F} = \hbar(3\pi^{2}n)^{\frac{1}{3}}
$$
0K时的化学势就是费米能量
$$
\mu(0) = \varepsilon_{F} = \frac{p_{F}^{2}}{2m_{0}} = \frac{\hbar^{2}}{2m_{0}}(3\pi^{2}n)^{\frac{2}{3}}
$$
代入数值得
$$
\mu(0) \approx 4.57 \times 10^{-12}\mathrm{J} \approx 28.5\mathrm{MeV}
$$
0K时非相对论费米气体的平均动能为
$$
\bar{\varepsilon} = \frac{3}{5}\varepsilon_{F}
$$
所以核子在核内的平均动能为
$$
\bar{\varepsilon} \approx 2.74 \times 10^{-12}\mathrm{J} \approx 17.1\mathrm{MeV}
$$


5.12 证明，在任意温度下电子气的顺磁化率由下式给出，
$$
\chi = 2 \mu_{B}^{2} \int_{0}^{\infty} g'(\varepsilon) f(\varepsilon) \dd{\varepsilon}
$$

其中$g(\varepsilon)$是不计自旋简并度时电子的每单位体积的态密度，并由上式导出$T=0$时的顺磁化率，与非简并条件下的顺磁化率。

设外磁场为$B$。对于磁矩平行和反平行于磁场的电子，能量分别移动$\mp\mu_{B}B$。单位体积内两种取向的电子数为
$$
n_{+} = \int_{0}^{\infty} g(\varepsilon) f(\varepsilon - \mu_{B}B)\dd{\varepsilon} \\
n_{-} = \int_{0}^{\infty} g(\varepsilon) f(\varepsilon + \mu_{B}B)\dd{\varepsilon}
$$
磁化强度为
$$
M = \mu_{B}(n_{+}-n_{-})
$$
在弱磁场下展开到$B$的一阶
$$
f(\varepsilon - \mu_{B}B) - f(\varepsilon + \mu_{B}B) \approx -2\mu_{B}B\dv[]{f}{\varepsilon}
$$
所以
$$
M = -2\mu_{B}^{2}B\int_{0}^{\infty}g(\varepsilon)\dv[]{f}{\varepsilon}\dd{\varepsilon}
$$
由$\chi=\pdv[]{M}{B}$得到
$$
\chi = -2\mu_{B}^{2}\int_{0}^{\infty}g(\varepsilon)\dv[]{f}{\varepsilon}\dd{\varepsilon}
$$
对上式作分部积分，并利用$g(0)=0$以及$f(\infty)=0$，得到
$$
\chi = 2\mu_{B}^{2}\int_{0}^{\infty}\dv[]{g}{\varepsilon}f(\varepsilon)\dd{\varepsilon} = 2\mu_{B}^{2}\int_{0}^{\infty}g'(\varepsilon)f(\varepsilon)\dd{\varepsilon}
$$
这就是题目要求的结果。

在$T=0$时，能量低于费米能量的态全部被占据，高于费米能量的态为空态，也就是
$$
f(\varepsilon) = 1,\quad 0\leq \varepsilon < \varepsilon_{F} \\
f(\varepsilon) = 0,\quad \varepsilon > \varepsilon_{F}
$$
所以
$$
\chi(0) = 2\mu_{B}^{2}\int_{0}^{\varepsilon_{F}}g'(\varepsilon)\dd{\varepsilon} = 2\mu_{B}^{2}g(\varepsilon_{F})
$$
对三维自由电子气体，不计自旋简并度时
$$
g(\varepsilon) = \frac{1}{4\pi^{2}}\left(\frac{2m}{\hbar^{2}}\right)^{\frac{3}{2}}\varepsilon^{\frac{1}{2}}
$$
又因为
$$
n = 2\int_{0}^{\varepsilon_{F}}g(\varepsilon)\dd{\varepsilon} = \frac{4}{3}g(\varepsilon_{F})\varepsilon_{F}
$$
所以
$$
\chi(0) = \frac{3n\mu_{B}^{2}}{2\varepsilon_{F}}
$$
这就是0K时的泡利顺磁磁化率。

在非简并条件下，费米分布可以近似为玻尔兹曼分布
$$
f(\varepsilon) \approx e^{-\alpha}e^{-\beta\varepsilon}
$$
因此
$$
\dv[]{f}{\varepsilon} = -\beta f(\varepsilon)
$$
从
$$
\chi = -2\mu_{B}^{2}\int_{0}^{\infty}g(\varepsilon)\dv[]{f}{\varepsilon}\dd{\varepsilon}
$$
得到
$$
\chi = 2\mu_{B}^{2}\beta\int_{0}^{\infty}g(\varepsilon)f(\varepsilon)\dd{\varepsilon}
$$
又因为总电子数密度为
$$
n = 2\int_{0}^{\infty}g(\varepsilon)f(\varepsilon)\dd{\varepsilon}
$$
所以非简并条件下
$$
\chi = \frac{n\mu_{B}^{2}}{k_{B}T}
$$
这就是通常的居里形式。
