# Black Hole and Compact Objects Homework

## 第一次书面作业

1. 设一颗冷白矮星在非相对论电子退化极限下可用 $n=3/2$ 多方模型描述。若其质量由 $M$ 增加到 $2M$，其半径变为原来的多少倍？

   Lane-Emden 方程的解给出白矮星的总质量可以表示为
   $$
   M = 4\pi a^{3}\rho_{c}[-\xi_{1}^{2}\theta'(\xi_{1})]
   $$
   即 $M \propto a^{3} \rho_{c}$，利用 
   $$
   a^{2} \propto (n+1) \rho_{c}^{1/n - 1}
   $$
   得到 $M$ 与 $a$ 的关系为
   $$
   M \propto a^{3} \cdot a^{- \frac{2n}{n-1}} = a^{\frac{n - 3}{n - 1}}
   $$
   带入 $n = 3/2$，得到 $M \propto a^{-3}$，所以质量增加到两倍，半径变为原来的 $2^{-1/3}$ 倍。

   

2. 对 p-p 反应，取太阳中心附近： $T \approx 1.5 \times 10^{7}\text{K}$， $k_{B} T \approx 1.3\text{keV}$， $E_{G} \approx 493\text{keV}$

a) 用讲义公式估算 Gamow 峰能量  $E_{0}$
$$
E_{0} = \left(\frac{E_{G}}{4} (k_{B} T)^{2}\right)^{1/3} \approx 5.928 \mathrm{keV}
$$



b) 估算反应率  $\langle\sigma v\rangle$ 的局部温度指数  $d \ln\langle\sigma v\rangle / d \ln T$

利用课上给出的反应截面公式
$$
\sigma(E)=\frac{S(E)}{E}e^{-\sqrt{E_{G}/E}}
$$
我们可以积分得到反应率的形式为
$$
\langle\sigma v\rangle=\left(\frac{8}{\pi\mu_{r}}\right)^{1/2}(k_{B}T)^{-3/2}\int_{0}^{\infty}\sigma(E)E e^{-E/(k_{B}T)} \, \dd{E} \\
= \left(\frac{8}{\pi\mu_{r}}\right)^{1/2}(k_{B}T)^{-3/2}\int_{0}^{\infty} S(E) e^{- \frac{E}{k_{B} T} - \sqrt{\frac{E_{G}}{E}}} \, \dd{E}
$$

作为一个估计，我们假设在 Gamow 峰附近 $S(E)$ 是常量，把上述表达式进行展开，并且对指数上的二次项进行高斯积分，得到
$$
\langle \sigma v \rangle \propto T^{-3/2} \left(\frac{E_{0}^{5}}{E_{G}}\right)^{1/4} e^{-\frac{3 E_{0}}{k_{B} T}}
$$
带入 $E_{0} \propto T^{2/3}$，可以知道
$$
\langle \sigma v \rangle \propto T^{-2/3} e^{-\frac{3 E_{0}}{k_{B} T}}
$$

$$
\dv{\ln \langle \sigma v \rangle}{\ln T} = - \frac{2}{3} + \frac{E_{0}}{k_{B} T} \approx 3.9
$$





c) 解释为什么太阳中的核聚变虽然需要量子隧穿，却仍能在远低于经典库仑势垒的能量下发生

-  粒子的能量分布在高能段有“尾巴”，这小部分高能粒子比较容易发生量子隧穿
-  等离子体中电子对原子核的屏蔽效应导致这个库伦势垒得到了一定的降低，使得反应率增加



3. 量级估计。该题目中所需相关数字请自行搜索获得，数值结果误差在3倍以内均可接受。

a) 太阳光度来源于氢燃烧，主要是 p-p 链反应。估计单位时间内太阳释放的中微子数量，以及单位时间内穿过人体的中微子数量。

一次 p-p 链反应放出两个中微子，所以要估计单位时间内太阳放出中微子的数量，需要利用辐射能流估计单位时间发生 p-p 链反应次数。已知一次 p-p 链反应放出的能量为
$$
\Delta E = 4 m_{\rm p} - m_{{}^{4} \rm He} + 2m_{\rm e} \approx 26.73 \, \mathrm{MeV} \approx 4.2 \times 10^{-5} \, \mathrm{erg}
$$
而太阳的光度约为 $3.83 \times 10^{33} \, \mathrm{erg/s}$，由此可以估计出，单位时间内 p-p 链的数量约为
$$
N_{\text{chain}} = \frac{L_{\odot}}{\Delta E} \approx 9.1 \times 10^{37} \, \mathrm{s^{-1}}
$$
所以太阳单位时间内放出的中微子数量约为
$$
N_{\nu} = 2 N_{\text{chain}} \approx 1.8 \times 10^{38} \, \mathrm{s^{-1}}
$$
我们假设人体的表面积为 $1 \, \mathrm{m}^{2}$，那么单位时间内穿过人体的中微子数量约为
$$
N = N_{\nu} \cdot \frac{S_{\text{person}}}{4 \pi d^{2}} = 1.8 \times 10^{38} \, \mathrm{s^{-1}} \cdot \frac{1 \, \mathrm{m}^{2}}{4 \pi \, \mathrm{AU}^{2}} \approx 6.4 \times 10^{14} \, \mathrm{s^{-1}}
$$


b) 估计在地球位置处单位面积接收到的太阳辐射功率。请以此为基础并结合现有的光伏发电效率等因素，尝试解释青海塔拉滩光伏基地的年光伏发电量。如果此发电量由煤燃烧提供，每年需要消耗多少吨煤？

利用太阳的光度，可以估算地球位置处单位时间接受的太阳辐射功率为
$$
W = L_{\odot} \cdot \frac{1}{4 \pi (1 \mathrm{AU})^{2}} = \frac{3.83 \times 10^{26} \,\mathrm{W}}{4\pi \times (1.496 \times 10^{11} \,\mathrm{m})^{2}} \approx 1.36 \times 10^{3} \,\mathrm{W/m^{2}}
$$

这就是太阳常数。光伏板实际接收到的功率还要再打折扣：昼夜交替和太阳高度角的变化使到达地面的长期平均值只有大气层外的约 $1/4$，大气吸收与散射再乘以约 $0.6$。所以估算光伏实际接受功率为
$$
\bar{W} \approx \frac{W}{4} \times 0.6 \approx 200 \,\mathrm{W/m^{2}}
$$
即每平方米地面一年接收的太阳辐射能约 $1700\,\mathrm{kWh}$。目前主流晶硅光伏组件的光电转换效率约 $20\%$，再计入逆变器损耗、积灰、组件温升等，则每平方米光伏板一年的发电量约为
$$
E \approx 200 \,\mathrm{W/m^{2}} \times 0.2 \times 0.8 \times 8760 \,\mathrm{h} \approx 280 \,\mathrm{kWh/m^{2}}
$$
查资料可得，青海海南州塔拉滩光伏园区占地约 $420\,\mathrm{km^{2}}$，总装机容量约 $16$–$21\,\mathrm{GW}$，2024 年发电量近 $180$ 亿千瓦时。这一数字可以用上面的估算来解释：发出这些电所需的光伏板面积为
$$
S_{\text{panel}} = \frac{1.8 \times 10^{10} \,\mathrm{kWh}}{280 \,\mathrm{kWh/m^{2}}} \approx 6.4 \times 10^{7} \,\mathrm{m^{2}} \approx 64 \,\mathrm{km^{2}}
$$
考虑阵列间防止前后遮挡的间距、道路与升压站等，电池板面积一般只占园区面积的 $1/5-1/3$，对应园区规模约 $200-300\,\mathrm{km^{2}}$，与其实际占地面积同数量级。也可以从装机容量的角度看：青海光伏电站的年等效利用小时数约 $1600\,\mathrm{h}$，由 $16\,\mathrm{GW} \times 1600\,\mathrm{h} \approx 2.6 \times 10^{10}\,\mathrm{kWh}$ 同样得到同数量级的年发电量。如果这些电全部由燃煤电厂提供，按我国约 $300\,\mathrm{g}$ 标准煤$/\mathrm{kWh}$ 的供电煤耗，每年需要消耗的煤约为

$$
m_{\text{coal}} \approx 1.8 \times 10^{10} \,\mathrm{kWh} \times 0.3 \,\mathrm{kg/kWh} \approx 5.4 \times 10^{9} \,\mathrm{kg} \approx 5 \times 10^{6} \,\mathrm{t}
$$
即每年约 $500$ 万吨标准煤。




4. 银河系年龄约 100 亿年，有约一千亿颗恒星（高于 0.08 倍太阳质量）。假定恒星的初始质量分布为 Salpeter 质量函数

$$
\xi(\lg M)=\frac{d N}{d\lg M}\propto M^{-1.35}
$$

一般认为，初始质量小于 8  倍太阳质量的恒星最终会演化为白矮星，初始质量大于 20 倍太阳质量的恒星最终会演化为黑洞，而质量介于中间的恒星最终会演化成中子星。
a) 如果银河系所有的恒星都几乎是在同一个时间形成的，那么现在银河系中大概分别有多少白矮星、中子星和黑洞？请写出具体的计算过程，计算结果用科学计数法保留至两位有效数字。

令 $m=M/M_{\odot}$ 为无量纲初始质量，$T=10^{10}\,\mathrm{yr}$，题目没有给出质量上限，因此采用 $m_{\max}\to\infty$ 

$$
\frac{\mathrm{d}N}{\mathrm{d}\lg m}=C m^{-1.35}
$$
由于 $\mathrm{d}\lg m=\mathrm{d}m/(m\ln10)$，转换为每单位质量区间后得到
$$
\frac{\mathrm{d}N}{\mathrm{d}m}=A m^{-2.35}, \qquad A=\frac{C}{\ln10}
$$
归一化条件为
$$
N_{\rm form}=A\int_{0.08}^{\infty}m^{-2.35}\,\mathrm{d}m
=\frac{A}{1.35}(0.08)^{-1.35}
$$
故
$$
A=1.35N_{\rm form}(0.08)^{1.35}\simeq4.46175\times10^9
$$
于是初始质量位于 $a<m<b$ 的恒星总数为
$$
N(a,b)=N_{\rm form}(0.08)^{1.35}\left(a^{-1.35}-b^{-1.35}\right)
$$
需要注意的是，假设所有恒星在银河系产生时同时产生，那么在 $100$ 亿年之后一些质量很小的恒星也无法演化为白矮星，使用主序星的寿命近似公式来进行估算，课上貌似没有提到这部分内容，所以我查了一下一个近似公式是
$$
\tau (M) \approx T \cdot \left(\frac{M}{M_{\odot}}\right)^{-2.5} \, \mathrm{yr}
$$
所以在估算目前白矮星个数的时候，需要以一倍太阳质量对下界进行一个截断。由此得到如果所有恒星产生于银河系产生时期，现在河内致密星的数量大致为
$$
\begin{aligned}
N_{\rm WD}
&=10^{11}(0.08)^{1.35}\left(1^{-1.35}-8^{-1.35}\right)
\simeq3.1\times10^9 \\
N_{\rm NS}
&=10^{11}(0.08)^{1.35}\left(8^{-1.35}-20^{-1.35}\right)
\simeq1.4\times10^8\\
N_{\rm BH}
&=10^{11}(0.08)^{1.35}20^{-1.35}
\simeq5.8\times10^7
\end{aligned}
$$


b) 如果银河系的恒星不是在同一时间形成的，而是在过去 100 亿年内以一个均匀的速度形成的，那么现在银河系又分别有多少白矮星、中子星和黑洞？

假定每个形成时刻都有相同的 Salpeter 初始质量分布，则
$$
\frac{\mathrm{d}^2N}{\mathrm{d}m\,\mathrm{d}t_{\rm f}}
=\frac{A}{T}m^{-2.35},
\qquad 0\leq t_{\rm f}\leq T
$$
其中 $t_{\rm f}$ 是自银河系开始形成恒星起算的出生时刻。质量为 $m$ 的恒星只有满足 $T-t_{\rm f}\geq\tau(m)$，现在才已成为致密星。因此允许的出生时间区间长度是 $\max[T-\tau(m),0]$，已经演化为遗迹的比例为
$$
f_{\rm rem}(m)=\max\!\left[1-\frac{\tau(m)}{T},0\right]
=\begin{cases}
0,&m<1 \\
1-m^{-2.5},&m\geq1
\end{cases}
$$
对 $1\leq a<b$
$$
\begin{aligned}
N (a,b)
&=A\int_a^b m^{-2.35}\left(1-m^{-2.5}\right)\,\mathrm{d}m\\
&=A\left[
\frac{a^{-1.35}-b^{-1.35}}{1.35}
-\frac{a^{-3.85}-b^{-3.85}}{3.85}
\right]\\
&=N_{\rm form}(0.08)^{1.35}\left[
a^{-1.35}-b^{-1.35}
-\frac{1.35}{3.85}\left(a^{-3.85}-b^{-3.85}\right)
\right]
\end{aligned}
$$
取相应质量区间，得到
$$
\begin{aligned}
N_{\rm WD}
&=N(1,8)
\simeq1.9\times10^9 \\
N_{\rm NS}
&=N(8,20)
\simeq1.4\times10^8\\
N_{\rm BH}
&=N_{\rm rem}(20,\infty)
\simeq5.8\times10^7
\end{aligned}
$$




5.  附件“gaia_dr3_30pc.csv”包含了欧洲航空局盖亚（Gaia）卫星最新观测发现的太阳系附近 30pc 恒星表。请基于该数据完成以下问题：

a) 计算各个恒星的绝对星等，画出颜色 ——（绝对）星等图（即赫罗图），并在图上用标出太阳的位置  
$$
(B_{p}-R_{p}, M_{G})_{\star} = (0.8, 4.6)
$$
请注意作图规范。

![image-20260928000944599](./Black%20Hole%20and%20Compact%20Objects%20Homework.assets/image-20260928000944599.png)



b）估算全部恒星的数密度和白矮星的数密度。请选择合适的单位来表示最后的结果。

经过我的人工神经网络划定分类标准以及程序计数，得到样本里面的总恒星数量为 $6484$，总白矮星数量为 $429$，所以我估计二者数密度如下
$$
n_{S} = \frac{N_{S}}{\frac{4 \pi}{3} D^{3}} = \frac{6484}{\frac{4 \pi}{3} \cdot (30 \rm pc)^{3}} \approx 0.0573 \, \mathrm{pc}^{-3}
$$

$$
n_{WD} = \frac{N_{WD}}{\frac{4 \pi}{3} D^{3}} = \frac{429}{\frac{4 \pi}{3} \cdot (30 \rm pc)^{3}} \approx 0.00379 \, \mathrm{pc}^{-3}
$$



c) 以上一步得到的白矮星的比例，估计银河系中白矮星的总数。这一数字是否与第1题中的理论估计值相符？请简单解释下可能的原因。

上述数据集中给出的白矮星比例大约为
$$
\frac{N_{WD}}{N_{S} + N_{WD}} = \frac{429}{6913} \approx 6.21 \%
$$
所以根据这个比例，银河系中白矮星的数量大约为
$$
N_{WD} = N_{form} \cdot 6.21 \% \approx 6.21 \times 10^{9}
$$
这个数字略大于我们的演化模型估计结果，可能原因是早期银河系的恒星生成速率会比现在大，所以理论上完成演化的白矮星数量应该大于均匀生成模型的估计数量；还有可能就是在理地球 30pc 以内的白矮星比例偏高，比如旋臂上产生小质量恒星的比例更大。



d) 该星表里有中子星或黑洞吗？为什么？

没有。中子星会在非常偏左的位置，并且非常暗，超出了这张图的坐标范围，并且 gaia 大概率不能在光学波段观测到中子星。很难给一个黑洞在 HR 图上标定，显然 30 pc 之内不存在 AGN，那么恒星级黑洞基本无法在光学波段上被 gaia 观测到。



## 第二次书面作业

1. 该 [Jupyter Notebook](https://github.com/weizhu0026/public/blob/main/ideal_wd.ipynb) 介绍了如何数值计算非多方情况下白矮星的内部结构以及质量和半径。从这一程序（习惯 matlab 的同学可以参考该程序写出其 matlab 版本）出发，考虑中心密度范围 $10^{5}$-$10^{11} \, \mathrm{g/cm^{3}}$，数值求解 CO 白矮星（$\mu_e = 2$）的质量-半径关系。

   利用该方程可以画出在题给中心密度范围内的质量半径关系曲线
   
   <img src="./Black%20Hole%20and%20Compact%20Objects%20Homework.assets/image-20261102111317779.png" alt="image-20261102111317779"  />
   
   a) 不同化学组成的白矮星所对应的质量-半径关系有所不同。如果白矮星由 ${}^{56}\mathrm{Fe}$ 组成，那么它的 $\mu_e$ 是多少？请计算它在同一中心密度范围内的质量-半径关系。
   \[
   \mu_{e} = \frac{A}{Z} = \frac{56}{26} = \frac{28}{13}
   \]
   对于 ${}^{56}\mathrm{Fe}$ 白矮星，同一中心密度范围内的质量-半径关系为
   
   ![image-20261102112801943](./Black%20Hole%20and%20Compact%20Objects%20Homework.assets/image-20261102112801943.png)
   
   可以看出在这种情况下质量上限会减小。
   
   
   
   b) 请将以上两步所得到的白矮星质量-半径关系画到同一个图上。同时标注出两种极限情况（低速电子和相对论电子）下的质量-半径关系（或极限值）。请注意作图规范（选取合适坐标范围，正确标注横纵坐标的物理量和单位，合理区分不同的曲线，等）。
   
   作图如下
   
   ![image-20261102114145599](./Black%20Hole%20and%20Compact%20Objects%20Homework.assets/image-20261102114145599.png)
   
   
   
   c) 简要描述测量白矮星质量的三种主要方法。
   
   光谱法：通过分析白矮星光谱中的吸收线轮廓，可以拟合出它的表面重力加速度和有效温度。一旦知道了表面重力和半径（半径可通过测光或视差估算），就可以通过公式 $g = GM/R^{2}$ 直接计算出质量。
   
   双星轨道动力学法：对于双星中的白矮星，可以通过长期监测其光谱，测量出双星轨道的周期和径向速度。利用开普勒定律和牛顿力学，就可以精确地计算出白矮星的质量。
   
   引力红移法：通过高分辨率光谱精确测量谱线的红移量，并结合独立方法（如测光）得到的半径，就可以利用公式 $z=GM/(Rc^2)$ 反推出质量。



2. 相对论效应的简单计算

a) 证明牛顿力学下光线的偏折角为 $\alpha \approx \frac{2GM}{c^{2}b}$

（即广义相对论偏折角的一半）。各物理量含义如右下图所示。

![光线偏折角、碰撞距离与最短距离的几何示意](./Black%20Hole%20and%20Compact%20Objects%20Homework.assets/homework-2-light-deflection.png)

偏折角 $\alpha$，碰撞距离 $b$，最短距离 $r_0$，中心天体质量 $M$

设中心天体位于原点，光线的碰撞距离为 $b$，取最近点为 $t = 0$，则路径上各点到中心的距离满足

$$
r^{2} = b^{2} + c^{2}t^{2}
$$

引力加速度指向中心，其垂直于路径的分量为

$$
a_{\perp} = -\frac{GM}{r^{2}}\frac{b}{r} = -\frac{GMb}{(b^{2} + c^{2}t^{2})^{3/2}}
$$

沿这条直线把横向加速度积分，得到横向速度的总改变

$$
\Delta v_{\perp} = \int_{-\infty}^{+\infty} a_{\perp} \, \dd{t} = -\frac{GM}{bc}\int_{-\infty}^{+\infty} \frac{\dd{u}}{(1 + u^{2})^{3/2}} = -\frac{2GM}{bc}
$$

在 $GM/(bc^{2}) \ll 1$ 的弱场下，偏折角就是横向速度增量与 $c$ 之比

$$
\alpha \approx \frac{|\Delta v_{\perp}|}{c} = \frac{2GM}{bc^{2}}
$$



b) 在最短距离 $r_0 \gtrsim 3r_s$（$r_s$ 为中心天体的史瓦西半径）情况下，以下公式可以很好地近似光线的偏折角 $\alpha$（各物理量含义如右图示意）
$$
\sin \frac{\alpha}{2} = \frac{r_s}{r_0}\left(1 - \frac{r_s}{r_0}\right)^{-1}, \quad b = r_0 \left(1 - \frac{r_s}{r_0}\right)^{-1/2}
$$
证明中子星的可观测表面积为总表面积的 75%。

忽略中子星的自转带来的拖曳。对于其表面一个面元发出的光来说，我们假设与表面相切的光线正好到达平行于地球和该中子星连线的方向，那么这个极限面元和中子星中心的连线和该方向的夹角 $\theta$ 满足
\[
\sin \frac{\alpha}{2} = \frac{r_s}{r_0}\left(1 - \frac{r_s}{r_0}\right)^{-1} \quad r_{s} = r_{0} - \frac{r_{0}^{3}}{b^{2}}
\]

\[
\theta = \frac{\pi}{2} + \frac{\alpha}{2}
\]

我们带入中子星的典型质量以及半径关系 $r_{0} \sim 3 r_{s}$，得到
\[
\theta \approx \frac{\pi}{2} + \arcsin \frac{1}{2} \approx \frac{2}{3} \pi
\]
所以能看到的表面积占比大约
\[
\frac{1 - \cos \frac{2}{3} \pi}{2} = \frac{3}{4}
\]


c) 质量各为 $M$、间距为 $a$ 的双星系统的引力波辐射功率约
$$
L_{\mathrm{gw}} \approx \left(\frac{r_s}{a}\right)^{5} \frac{c^{5}}{G},
$$
证明双星的轨道间距随时间的变化关系满足
$$
a = a_0 \left(1 - \frac{t}{t_{\mathrm{merge}}}\right)^{1/4},
$$
其中 $a_0$ 为双星的初始间距。估算对于典型的致密双星（$M \sim M_{\odot}$，$a \sim R_{\odot}$），并合时间 $t_{\mathrm{merge}}$ 为多久。

对于这样一个双星系统而言，它们的总能量为
\[
E = \frac{1}{4}M \omega^{2} a^{2} - \frac{GM^{2}}{a}
\]
带入力学平衡的结果
\[
\omega = \sqrt{\frac{2 GM}{a^{3}}}
\]

\[
E = -\frac{1}{2} \frac{G M^{2}}{a}
\]

所以假设能量损失完全来自引力波辐射，可以得到距离的演化方程
\[
\frac{1}{2} \frac{G M^{2}}{a^{2}}\dv{a}{t} = - \left(\frac{r_s}{a}\right)^{5} \frac{c^{5}}{G}
\]
解得
\[
a = a_0 \left(1 - \frac{t}{t_{\mathrm{merge}}}\right)^{1/4}
\]
其中
\[
t_{\rm merge} = \frac{G^{2} M^{2} a_{0}^{4}}{8 r_{s}^{5} c^{5}} 
\]
对于典型双星系统，这个合并时间大概是
\[
t_{\rm merge} \approx 9.5 \times 10^{14} \rm \, s \approx 3 \times 10^{7} \rm \, y
\]



d) （附加题，但无额外分数）熟悉并复现广义相对论下水星近心点进动的推导。可参考 [Weingartner: The Schwarzschild Metric and Applications](http://physics.gmu.edu/~joe/PHYS428/Topic10.pdf) 或其他相关介绍。

我直接把之前我在广相作业里写的推导 copy 过来：

用 Schwarzschild 度规描述中心天体外的引力场，$M$ 为中心天体质量

$$
\dd{s}^{2} = \left(1 - \frac{2GM}{rc^{2}}\right)c^{2}\dd{t}^{2} - \left(1 - \frac{2GM}{rc^{2}}\right)^{-1}\dd{r}^{2} - r^{2}\left(\dd{\theta}^{2} + \sin^{2}\theta \, \dd{\phi}^{2}\right)
$$

括号中的 $1 - 2GM/(rc^{2})$ 就是通常的 $1 - r_{s}/r$，$r_{s}$ 为中心天体的史瓦西半径。度规不显含 $t$ 与 $\phi$，所以 $\delta^{\mu}{}_{t}$ 和 $\delta^{\mu}{}_{\phi}$ 是 Killing 矢量，沿测地线给出两个守恒量

$$
\left(1 - \frac{2GM}{rc^{2}}\right)\dv{t}{\tau} = E, \quad r^{2}\dv{\phi}{\tau} = L
$$

其中 $\tau$ 为固有时，$L$ 是单位质量的角动量。取轨道在赤道面内，$\theta = \pi/2$，此时 $\theta$ 方向的测地线方程自动满足。由四速度归一化 $g_{\mu\nu}U^{\mu}U^{\nu} = c^{2}$ 得到

$$
c^{2} = \left(1 - \frac{2GM}{rc^{2}}\right)c^{2}\left(\dv{t}{\tau}\right)^{2} - \left(1 - \frac{2GM}{rc^{2}}\right)^{-1}\left(\dv{r}{\tau}\right)^{2} - r^{2}\left(\dv{\phi}{\tau}\right)^{2}
$$

代入守恒量并整理，得到径向运动方程

$$
\left(\dv{r}{\tau}\right)^{2} = c^{2}(E^{2} - 1) + \frac{2GM}{r} - \frac{L^{2}}{r^{2}} + \frac{2GM}{c^{2}}\frac{L^{2}}{r^{3}}
$$

最后一项就是广义相对论的修正，它相当于在牛顿的有效势中多加了一个 $1/r^{3}$ 的吸引项，使轨道不再闭合。令 $u = 1/r$，利用 $\dd{r}/\dd{\tau} = -L\,\dd{u}/\dd{\phi}$，上式化为

$$
\left(\dv{u}{\phi}\right)^{2} = \frac{c^{2}(E^{2} - 1)}{L^{2}} + \frac{2GM}{L^{2}}u - u^{2} + \frac{2GM}{c^{2}}u^{3}
$$

对 $\phi$ 求导后即得轨道方程

$$
\dv[2]{u}{\phi} + u = \frac{GM}{L^{2}} + \frac{3GM}{c^{2}}u^{2}
$$

与牛顿情形相比，右边多了 $3GMu^{2}/c^{2}$ 这一项。对行星轨道作微扰展开 $u = u_{0} + u_{1}$，零阶解为

$$
u_{0} = \frac{GM}{L^{2}}(1 + e\cos\phi)
$$

代回后，一阶修正满足

$$
\begin{aligned}
\dv[2]{u_{1}}{\phi} + u_{1} &= \frac{3GM}{c^{2}}u_{0}^{2} \\
&= \frac{3G^{3}M^{3}}{L^{4}c^{2}}\left(1 + \frac{e^{2}}{2} + 2e\cos\phi + \frac{e^{2}}{2}\cos 2\phi\right)
\end{aligned}
$$

解中只有与 $\cos\phi$ 共振的项会随 $\phi$ 累积，即所谓的进动项

$$
u_{1} = \frac{G^{3}M^{3}}{L^{4}c^{2}}\left(3 + \frac{3}{2}e^{2} + 3e\phi\sin\phi - \frac{e^{2}}{2}\cos 2\phi\right)
$$

所以

$$
\begin{aligned}
u &\approx \frac{GM}{L^{2}}\left[1 + e\left(\cos\phi + \frac{3G^{2}M^{2}}{L^{2}c^{2}}\phi\sin\phi\right)\right] \\
&\approx \frac{GM}{L^{2}}\left[1 + e\cos\left(\left(1 - \frac{3G^{2}M^{2}}{L^{2}c^{2}}\right)\phi\right)\right]
\end{aligned}
$$

所以每转一圈，近心点的方位角多出

$$
\Delta\phi = 2\pi \cdot \frac{3G^{2}M^{2}}{L^{2}c^{2}} = \frac{6\pi G^{2}M^{2}}{L^{2}c^{2}}
$$

在弱场近似下 $L$ 就是牛顿角动量 $r^{2}\dd{\phi}/\dd{t}$，由圆锥曲线的半通径 $p = a(1 - e^{2})$ 和 $L^{2} = GMp$ 得到

$$
\Delta\phi = \frac{6\pi GM}{a(1 - e^{2})c^{2}}
$$

若像广义相对论作业那样取 $c = 1$，就回到 $6\pi G^{2}M^{2}/L^{2}$。对水星代入数值

$$
\begin{aligned}
\Delta\phi &= \frac{6\pi \times 1.3271244 \times 10^{26}}{5.546 \times 10^{12} \times (2.99792458 \times 10^{10})^{2}} \\
&\approx 5.019 \times 10^{-7}\,\mathrm{rad} \approx 0.1035''
\end{aligned}
$$

即每圈进动约 $0.1035''$。取一个世纪为 $100 \times 365.25\,\mathrm{d}$，水星在此期间转过

$$
N = \frac{100 \times 365.25}{87.969257} \approx 415.2
$$

圈，累积进动为

$$
\Delta\phi_{100\,\mathrm{yr}} = N \times 0.1035'' \approx 43''
$$



3. 日本神冈探测器利用 3000 吨纯水作为探测器来探测中微子。在 SN 1987A 超新星爆发事件中，神冈探测到 12 个平均能量为 15 MeV 的中微子。

a) 已知中微子与单个原子核的反应截面（电子反中微子逆 β 衰变截面）约 $2 \times 10^{-41} \, \mathrm{cm^{2}}$，估计中微子的自由程。

逆 $\beta$ 衰变 $\bar\nu_e + p \to n + e^+$ 的靶是水中的质子。取水的密度 $\rho = 1 \, \mathrm{g/cm^{3}}$、摩尔质量 $18.015 \, \mathrm{g/mol}$，每个水分子含 $2$ 个质子，因此单位体积内的靶质子数为

$$
n_p = \frac{2}{18.015}\rho N_A \approx 6.7 \times 10^{22} \, \mathrm{cm^{-3}}
$$

取逆 $\beta$ 衰变截面 $\sigma \approx 2 \times 10^{-41} \, \mathrm{cm^{2}}$，则自由程为

$$
\lambda = \frac{1}{n_p\sigma} = \frac{1}{6.7 \times 10^{22} \times 2 \times 10^{-41}} \approx 7.5 \times 10^{17} \, \mathrm{cm} = 7.5 \times 10^{15} \, \mathrm{m} \approx 0.24 \, \mathrm{pc}
$$

（若把每个核子都当作靶，$n \approx \rho/m_p \approx 6.0 \times 10^{23} \, \mathrm{cm^{-3}}$，$\lambda$ 会小约一个量级；但逆 $\beta$ 衰变的靶是质子，所以这里按质子计数。）



b) SN 1987A 超新星距离我们的距离约 50 kpc，探测到的中微子为六种中微子之一，假设各种中微子能量均分，估计 SN 1987A 中微子辐射的总能量。

若中微子各向同性发射，则每个反中微子发生逆 $\beta$ 衰变而被探测到的概率为

$$
P = \frac{N_p \sigma}{4\pi d^{2}} = \frac{2.0 \times 10^{32} \times 2 \times 10^{-41}}{4\pi \left(1.54 \times 10^{23}\right)^{2}} \approx \frac{4.0 \times 10^{-9}}{3.0 \times 10^{47}} \approx 1.3 \times 10^{-56}
$$

探测到 $12$ 个事例，反推穿过探测器的电子反中微子数目为

$$
N_{\bar{\nu}_{e}} \approx \frac{12}{P} \approx 9.0 \times 10^{56}
$$

取平均能量 $\langle E \rangle = 15 \, \mathrm{MeV} = 2.40 \times 10^{-5} \, \mathrm{erg}$，则电子反中微子带走的能量为

$$
E_{\bar{\nu}_{e}} \approx N_{\bar{\nu}_{e}} \langle E \rangle \approx 2.2 \times 10^{52} \, \mathrm{erg}
$$

六种中微子能量均分，总辐射能量为

$$
E_{\mathrm{tot}} \approx 6 E_{\bar{\nu}_{e}} \approx 1.3 \times 10^{53} \, \mathrm{erg}
$$

即总辐射能量为 $10^{53} \, \mathrm{erg}$ 量级，与中子星引力束缚能同量级。



c) 神冈探测器对中微子的吸收系数，即“光深”，等于多少？

取 $L \sim 16 \, \mathrm{m} = 1.6 \times 10^{3} \, \mathrm{cm}$

$$
\tau = n_p\sigma L = \frac{L}{\lambda} = \frac{1.6 \times 10^{3}}{7.5 \times 10^{17}} \approx 2.1 \times 10^{-15}
$$

$\tau \ll 1$，说明探测器对中微子几乎完全透明。



4. （附加题，+20 分）爱丁顿标准模型和标准太阳模型对比。请以 Jupyter Notebook 形式（或 matlab 脚本）提交本题目答案。

a) 根据已知的太阳质量和半径，求太阳内部气体热压力占总压力的比值（即爱丁顿参数 $\beta$）。

我们利用爱丁顿模型给出的结论
$$
\frac{M_{\star}}{M_{\odot}}\simeq\frac{18.1}{\mu^{2}}\frac{\sqrt{1-\beta}}{\beta^{2}}
$$
带入 $M_{\star} = M_{\odot}$ 以及太阳的平均分子量 $\mu \approx 0.6$（离子与电子都计入）得到
\[
\beta \approx 0.9995
\]




b) 参考第 1 题中的 python 程序，编写程序求解爱丁顿标准模型对应的 Lane-Emden 方程。

详见 Jupyter Notebook 的第二部分。



c) 作图对比爱丁顿标准模型和标准太阳模型（图片效果参见第 2 讲 ppt）。标准太阳模型的相关数据：[Standard Solar Model](http://www.sns.ias.edu/~jnb/SNdata/solarmodels.html)，请选择其中的 BS2005 (OP) 版本。

作图如下

![image-20261102233058484](./Black%20Hole%20and%20Compact%20Objects%20Homework.assets/image-20261102233058484.png)
