# 统计力学 第11次作业

Chasse_neige

9.2 试用正则分布求单原子分子理想气体的物态方程、内能、熵和化学势。

对于非简并的情形，可以用单粒子配分函数来处理正则系综的配分函数。单个分子的配分函数为
$$
z_{0} = \frac{V}{h^{3}}\int e^{- \beta \frac{p^{2}}{2m}}\dd[3]{p}
= \frac{4 \pi V}{h^{3}}\int_{0}^{\infty} e^{- \beta \frac{p^{2}}{2m}}p^{2}\dd{p}
= V\left(\frac{2\pi m}{\beta h^{2}}\right)^{\frac{3}{2}}
$$
也可以写成
$$
z_{0} = V\left(\frac{2\pi m k_{B}T}{h^{2}}\right)^{\frac{3}{2}}
= \frac{V}{\lambda^{3}}
$$
其中
$$
\lambda = \frac{h}{\sqrt{2\pi m k_{B}T}}
$$
由于分子之间不可分辨，总配分函数为
$$
Z = \frac{1}{N!}z_{0}^{N}
$$
在 $N$ 很大时，用 Stirling 公式
$$
\ln N! \approx N\ln N - N
$$
于是
$$
\ln Z = N\ln z_{0}-\ln N!
\approx N\ln\frac{z_{0}}{N}+N
$$
也就是
$$
\ln Z = N\ln\left[\frac{V}{N}\left(\frac{2\pi m k_{B}T}{h^{2}}\right)^{\frac{3}{2}}\right]+N
$$
物态方程由
$$
P = k_{B}T\left(\pdv[]{\ln Z}{V}\right)_{T,N}
$$
给出，因此
$$
P = \frac{Nk_{B}T}{V}
$$
也就是
$$
PV = Nk_{B}T
$$
内能为
$$
U = -\left(\pdv[]{\ln Z}{\beta}\right)_{V,N}
$$
由于 $\ln Z$ 中只有 $\frac{3N}{2}\ln \beta^{-1}$ 与 $\beta$ 有关，所以
$$
U = \frac{3N}{2\beta} = \frac{3}{2}Nk_{B}T
$$
熵可以由
$$
S = k_{B}(\ln Z+\beta U)
$$
求得，因此
$$
S = Nk_{B}\left\{\ln\left[\frac{V}{N}\left(\frac{2\pi m k_{B}T}{h^{2}}\right)^{\frac{3}{2}}\right]+\frac{5}{2}\right\}
$$
最后求化学势，由 $F=-k_{B}T\ln Z$ 和
$$
\mu = \left(\pdv[]{F}{N}\right)_{T,V}
$$
得到
$$
\mu = -k_{B}T\ln\frac{z_{0}}{N}
$$
所以
$$
\mu = -k_{B}T\ln\left[\frac{V}{N}\left(\frac{2\pi m k_{B}T}{h^{2}}\right)^{\frac{3}{2}}\right]
$$
9.4 体积为 $V$ 的容器内盛有 $A$、$B$ 两种组元的单原子分子混合理想气体，其物质的量分别为 $N_{A}$ 和 $N_{B}$，温度为 $T$。试用正则系综理论计算混合理想气体的物态方程、内能、熵和化学势。

把 $N_{A}$ 和 $N_{B}$ 看作两种分子的粒子数。两种分子的单粒子配分函数分别为
$$
z_{A} = V\left(\frac{2\pi m_{A} k_{B}T}{h^{2}}\right)^{\frac{3}{2}} \\
z_{B} = V\left(\frac{2\pi m_{B} k_{B}T}{h^{2}}\right)^{\frac{3}{2}}
$$
由于同种分子不可分辨而不同种分子可以分辨，总配分函数为
$$
Z = \frac{z_{A}^{N_{A}}}{N_{A}!}\frac{z_{B}^{N_{B}}}{N_{B}!}
$$
取对数并使用 Stirling 公式，得到
$$
\ln Z = N_{A}\ln\frac{z_{A}}{N_{A}}+N_{A}+N_{B}\ln\frac{z_{B}}{N_{B}}+N_{B}
$$
物态方程仍然由
$$
P = k_{B}T\left(\pdv[]{\ln Z}{V}\right)_{T,N_{A},N_{B}}
$$
决定。因为 $z_{A}$ 和 $z_{B}$ 都正比于 $V$，所以
$$
P = \frac{(N_{A}+N_{B})k_{B}T}{V}
$$
也就是
$$
PV = (N_{A}+N_{B})k_{B}T
$$
内能为
$$
U = -\left(\pdv[]{\ln Z}{\beta}\right)_{V,N_{A},N_{B}}
$$
两种单原子分子各自贡献 $\frac{3}{2}N_{i} k_{B}T$，所以
$$
U = \frac{3}{2}(N_{A}+N_{B})k_{B}T
$$
熵为
$$
S = k_{B}(\ln Z+\beta U)
$$
代入上面的 $\ln Z$ 和 $U$，得到
$$
S = k_{B}N_{A}\left\{\ln\left[\frac{V}{N_{A}}\left(\frac{2\pi m_{A} k_{B}T}{h^{2}}\right)^{\frac{3}{2}}\right]+\frac{5}{2}\right\} \\
+ k_{B}N_{B}\left\{\ln\left[\frac{V}{N_{B}}\left(\frac{2\pi m_{B} k_{B}T}{h^{2}}\right)^{\frac{3}{2}}\right]+\frac{5}{2}\right\}
$$
令
$$
\lambda_{A} = \frac{h}{\sqrt{2\pi m_{A} k_{B}T}} \\
\lambda_{B} = \frac{h}{\sqrt{2\pi m_{B} k_{B}T}}
$$
化学势分别由
$$
\mu_{A} = \left(\pdv[]{F}{N_{A}}\right)_{T,V,N_{B}} \\
\mu_{B} = \left(\pdv[]{F}{N_{B}}\right)_{T,V,N_{A}}
$$
给出，因此
$$
\mu_{A} = -k_{B}T\ln\frac{z_{A}}{N_{A}}
= k_{B}T\ln\left(\frac{N_{A}}{V}\lambda_{A}^{3}\right)
$$
以及
$$
\mu_{B} = -k_{B}T\ln\frac{z_{B}}{N_{B}}
= k_{B}T\ln\left(\frac{N_{B}}{V}\lambda_{B}^{3}\right)
$$
这表明混合理想气体中每种组元的化学势只与本组元的数密度有关。

9.3 试根据正则分布的涨落公式求单原子和双原子分子理想气体的能量相对涨落。

正则分布中的能量涨落公式为
$$
\overline{(\Delta E)^{2}} = -\pdv[]{U}{\beta}
$$
也可以写成
$$
\overline{(\Delta E)^{2}} = k_{B}T^{2}C_{V}
$$
对于具有 $f$ 个二次型自由度的经典理想气体，能均分定理给出
$$
U = \frac{f}{2}Nk_{B}T \\
C_{V} = \frac{f}{2}Nk_{B}
$$
所以
$$
\overline{(\Delta E)^{2}} = \frac{f}{2}N(k_{B}T)^{2}
$$
方均根相对涨落为
$$
\frac{\sqrt{\overline{(\Delta E)^{2}}}}{U}
= \frac{\sqrt{\frac{f}{2}N}k_{B}T}{\frac{f}{2}Nk_{B}T}
= \sqrt{\frac{2}{fN}}
$$
对于单原子分子理想气体，$f=3$，所以
$$
\frac{\sqrt{\overline{(\Delta E)^{2}}}}{U}
= \sqrt{\frac{2}{3N}}
$$
对于双原子分子理想气体，如果只考虑平动和转动自由度而不考虑振动自由度，则 $f=5$，所以
$$
\frac{\sqrt{\overline{(\Delta E)^{2}}}}{U}
= \sqrt{\frac{2}{5N}}
$$
因此能量相对涨落都随 $N^{-\frac{1}{2}}$ 趋于零，在热力学极限下可以忽略。

9.6 有 $N$ 个被吸附在液体表面的分子形成一种二维气体。若两分子间相互作用位能为 $u(r)$，试用正则分布证明，二维气体的物态方程为
$$
PS = Nk_{B}T\left(1 + \frac{B}{S}\right)
$$

其中

$$
B = -\frac{N}{2}\int_{0}^{\infty}\left(e^{-\frac{u(r)}{k_{B}T}} - 1\right)2\pi r \dd{r}
$$

设二维气体所占的面积为 $S$，系统的哈密顿量为
$$
H = \sum_{i=1}^{N}\frac{p_{i}^{2}}{2m}+\sum_{i<j}u(r_{ij})
$$
正则配分函数可以写成
$$
Z = \frac{1}{N!h^{2N}}\int e^{-\beta H}\prod_{i=1}^{N}\dd[2]{p_{i}}\dd[2]{r_{i}}
$$
动量积分可以直接积出，因此
$$
Z = \frac{1}{N!}\left(\frac{2\pi m}{\beta h^{2}}\right)^{N}Q_{N}
$$
其中位形积分为
$$
Q_{N} = \int \exp\left[-\beta\sum_{i<j}u(r_{ij})\right]\prod_{i=1}^{N}\dd[2]{r_{i}}
$$
引入 Mayer 函数
$$
f_{ij} = e^{-\beta u(r_{ij})}-1
$$
则有
$$
\exp\left[-\beta\sum_{i<j}u(r_{ij})\right] = \prod_{i<j}(1+f_{ij})
$$
在低密度近似下，只保留 $f_{ij}$ 的一次项，得到
$$
Q_{N} \approx \int \left(1+\sum_{i<j}f_{ij}\right)\prod_{i=1}^{N}\dd[2]{r_{i}}
$$
第一项给出 $S^{N}$。对于任意一对粒子，有
$$
\int f_{12}\prod_{i=1}^{N}\dd[2]{r_{i}}
= S^{N-2}\int f_{12}\dd[2]{r_{1}}\dd[2]{r_{2}}
$$
由于势能只依赖于相对距离，在忽略边界效应时
$$
\int f_{12}\dd[2]{r_{1}}\dd[2]{r_{2}}
= S\int_{0}^{\infty}\left(e^{-\beta u(r)}-1\right)2\pi r\dd{r}
$$
所以
$$
Q_{N} \approx S^{N}\left[1+\frac{N(N-1)}{2S}\int_{0}^{\infty}\left(e^{-\beta u(r)}-1\right)2\pi r\dd{r}\right]
$$
在 $N$ 很大时，可以把 $N-1$ 近似为 $N$，并取对数到同一阶，得到
$$
\ln Q_{N} \approx N\ln S+\frac{N^{2}}{2S}\int_{0}^{\infty}\left(e^{-\beta u(r)}-1\right)2\pi r\dd{r}
$$
利用题中定义
$$
B = -\frac{N}{2}\int_{0}^{\infty}\left(e^{-\beta u(r)}-1\right)2\pi r\dd{r}
$$
于是
$$
\ln Q_{N} \approx N\ln S-\frac{NB}{S}
$$
二维气体的压强由
$$
P = k_{B}T\left(\pdv[]{\ln Z}{S}\right)_{T,N}
$$
给出。动量积分部分与 $S$ 无关，所以只需要对 $\ln Q_{N}$ 求导，得到
$$
P = k_{B}T\left(\frac{N}{S}+\frac{NB}{S^{2}}\right)
$$
两边乘以 $S$，就得到
$$
PS = Nk_{B}T\left(1+\frac{B}{S}\right)
$$
这就是二维气体的第二维里展开形式。


9.14 求伊辛模型在平均场近似下的临界指数。

设伊辛模型的哈密顿量为
$$
\mathcal{H} = -J\sum_{\langle i,j\rangle}s_{i}s_{j} - h\sum_{i}s_{i}
$$
其中 $s_{i}=\pm 1$，$z$ 为每个格点的最近邻数。平均场近似下，用平均磁化强度
$$
m = \langle s_{i}\rangle
$$
代替邻近自旋，于是自洽方程为
$$
m = \tanh[\beta(zJm+h)]
$$
在 $h=0$ 时，临界温度由线性项决定，即
$$
\beta_{c} zJ = 1
$$
所以
$$
k_{B}T_{c} = zJ
$$

先求序参量的临界指数。令 $h=0$，在 $T_{c}$ 附近 $m$ 很小，因此
$$
m = \tanh\left(\frac{T_{c}}{T}m\right)
\approx \frac{T_{c}}{T}m-\frac{1}{3}\left(\frac{T_{c}}{T}m\right)^{3}
$$
当 $T<T_{c}$ 时，非零解满足
$$
m^{2} \approx 3\frac{\frac{T_{c}}{T}-1}{\left(\frac{T_{c}}{T}\right)^{3}}
$$
在临界点附近可以化为
$$
m^{2} \approx 3\frac{T_{c}-T}{T_{c}}
$$
所以
$$
m \propto (T_{c}-T)^{\frac{1}{2}}
$$
因此序参量临界指数为
$$
\beta_{\mathrm{crit}} = \frac{1}{2}
$$

再求磁化率指数。磁化率定义为
$$
\chi = \left(\pdv[]{m}{h}\right)_{h=0}
$$
对平均场方程求导，得到
$$
\chi = (1-m^{2})\beta(zJ\chi+1)
$$
也就是
$$
\chi = \frac{\beta(1-m^{2})}{1-\beta zJ(1-m^{2})}
$$
当 $T>T_{c}$ 时，$m=0$，所以
$$
\chi = \frac{\beta}{1-\beta zJ}
= \frac{1}{k_{B}(T-T_{c})}
$$
当 $T<T_{c}$ 时，代入 $m^{2}\approx 3(T_{c}-T)/T_{c}$，也有
$$
\chi \propto (T_{c}-T)^{-1}
$$
所以磁化率临界指数为
$$
\gamma = 1
$$

在临界等温线上，令 $T=T_{c}$，平均场方程变为
$$
m = \tanh\left(m+\frac{h}{k_{B}T_{c}}\right)
$$
展开到最低非线性阶，得到
$$
m \approx m+\frac{h}{k_{B}T_{c}}-\frac{1}{3}m^{3}
$$
因此
$$
h \propto m^{3}
$$
所以临界等温线指数为
$$
\delta = 3
$$

最后看热容量。平均场近似下，零场时相互作用能为
$$
U = -\frac{1}{2}NzJm^{2}
$$
当 $T>T_{c}$ 时，$m=0$，这部分热容量没有奇异贡献。当 $T<T_{c}$ 时，代入 $m^{2}\approx 3(T_{c}-T)/T_{c}$，得到
$$
U \approx -\frac{3}{2}Nk_{B}(T_{c}-T)
$$
所以
$$
C_{V} = \left(\pdv[]{U}{T}\right)_{V} \approx \frac{3}{2}Nk_{B}
$$
热容量在临界点附近至多有有限跃变，没有幂次发散，因此
$$
\alpha = 0
$$

综上，平均场近似下伊辛模型的主要临界指数为
$$
\alpha = 0 \\
\beta_{\mathrm{crit}} = \frac{1}{2} \\
\gamma = 1 \\
\delta = 3
$$
如果还把关联长度和临界关联函数的指数列入平均场结果，则有
$$
\nu = \frac{1}{2} \\
\eta = 0
$$
