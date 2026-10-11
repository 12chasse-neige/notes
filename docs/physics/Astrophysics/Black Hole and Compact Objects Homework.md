# Black Hole and Compact Objects Homework

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
\[
\sigma(E)=\frac{S(E)}{E}e^{-\sqrt{E_{G}/E}}
\]
我们可以积分得到反应率的形式为
$$
\langle\sigma v\rangle=\left(\frac{8}{\pi\mu_{r}}\right)^{1/2}(k_{B}T)^{-3/2}\int_{0}^{\infty}\sigma(E)E e^{-E/(k_{B}T)} \, \dd{E} \\
= \left(\frac{8}{\pi\mu_{r}}\right)^{1/2}(k_{B}T)^{-3/2}\int_{0}^{\infty} S(E) e^{- \frac{E}{k_{B} T} - \sqrt{\frac{E_{G}}{E}}} \, \dd{E}
$$

作为一个估计，我们假设在 Gamow 峰附近 $S(E)$ 是常量，把上述表达式进行展开，并且对指数上的二次项进行高斯积分，得到
\[
\langle \sigma v \rangle \propto T^{-3/2} \left(\frac{E_{0}^{5}}{E_{G}}\right)^{1/4} e^{-\frac{3 E_{0}}{k_{B} T}}
\]
带入 $E_{0} \propto T^{2/3}$，可以知道
\[
\langle \sigma v \rangle \propto T^{-2/3} e^{-\frac{3 E_{0}}{k_{B} T}}
\]

\[
\dv{\ln \langle \sigma v \rangle}{\ln T} = - \frac{2}{3} + \frac{E_{0}}{k_{B} T} \approx 3.9
\]





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
\[
N_{\text{chain}} = \frac{L_{\odot}}{\Delta E} \approx 9.1 \times 10^{37} \, \mathrm{s^{-1}}
\]
所以太阳单位时间内放出的中微子数量约为
\[
N_{\nu} = 2 N_{\text{chain}} \approx 1.8 \times 10^{38} \, \mathrm{s^{-1}}
\]
我们假设人体的表面积为 $1 \, \mathrm{m}^{2}$，那么单位时间内穿过人体的中微子数量约为
\[
N = N_{\nu} \cdot \frac{S_{\text{person}}}{4 \pi d^{2}} = 1.8 \times 10^{38} \, \mathrm{s^{-1}} \cdot \frac{1 \, \mathrm{m}^{2}}{4 \pi \, \mathrm{AU}^{2}} \approx 6.4 \times 10^{14} \, \mathrm{s^{-1}}
\]


b) 估计在地球位置处单位面积接收到的太阳辐射功率。请以此为基础并结合现有的光伏发电效率等因素，尝试解释青海塔拉滩光伏基地的年光伏发电量。如果此发电量由煤燃烧提供，每年需要消耗多少吨煤？

利用太阳的光度，可以估算地球位置处单位时间接受的太阳辐射功率为
\[
W = L_{\odot} \cdot \frac{1}{4 \pi (1 \mathrm{AU})^{2}} = \frac{3.83 \times 10^{26} \,\mathrm{W}}{4\pi \times (1.496 \times 10^{11} \,\mathrm{m})^{2}} \approx 1.36 \times 10^{3} \,\mathrm{W/m^{2}}
\]

这就是太阳常数。光伏板实际接收到的功率还要再打折扣：昼夜交替和太阳高度角的变化使到达地面的长期平均值只有大气层外的约 $1/4$，大气吸收与散射再乘以约 $0.6$。所以估算光伏实际接受功率为
\[
\bar{W} \approx \frac{W}{4} \times 0.6 \approx 200 \,\mathrm{W/m^{2}}
\]
即每平方米地面一年接收的太阳辐射能约 $1700\,\mathrm{kWh}$。目前主流晶硅光伏组件的光电转换效率约 $20\%$，再计入逆变器损耗、积灰、组件温升等，则每平方米光伏板一年的发电量约为
\[
E \approx 200 \,\mathrm{W/m^{2}} \times 0.2 \times 0.8 \times 8760 \,\mathrm{h} \approx 280 \,\mathrm{kWh/m^{2}}
\]
查资料可得，青海海南州塔拉滩光伏园区占地约 $420\,\mathrm{km^{2}}$，总装机容量约 $16$–$21\,\mathrm{GW}$，2024 年发电量近 $180$ 亿千瓦时。这一数字可以用上面的估算来解释：发出这些电所需的光伏板面积为
\[
S_{\text{panel}} = \frac{1.8 \times 10^{10} \,\mathrm{kWh}}{280 \,\mathrm{kWh/m^{2}}} \approx 6.4 \times 10^{7} \,\mathrm{m^{2}} \approx 64 \,\mathrm{km^{2}}
\]
考虑阵列间防止前后遮挡的间距、道路与升压站等，电池板面积一般只占园区面积的 $1/5-1/3$，对应园区规模约 $200-300\,\mathrm{km^{2}}$，与其实际占地面积同数量级。也可以从装机容量的角度看：青海光伏电站的年等效利用小时数约 $1600\,\mathrm{h}$，由 $16\,\mathrm{GW} \times 1600\,\mathrm{h} \approx 2.6 \times 10^{10}\,\mathrm{kWh}$ 同样得到同数量级的年发电量。如果这些电全部由燃煤电厂提供，按我国约 $300\,\mathrm{g}$ 标准煤$/\mathrm{kWh}$ 的供电煤耗，每年需要消耗的煤约为

\[
m_{\text{coal}} \approx 1.8 \times 10^{10} \,\mathrm{kWh} \times 0.3 \,\mathrm{kg/kWh} \approx 5.4 \times 10^{9} \,\mathrm{kg} \approx 5 \times 10^{6} \,\mathrm{t}
\]
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
\[
\tau (M) \approx T \cdot \left(\frac{M}{M_{\odot}}\right)^{-2.5} \, \mathrm{yr}
\]
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
\[
n_{S} = \frac{N_{S}}{\frac{4 \pi}{3} D^{3}} = \frac{6484}{\frac{4 \pi}{3} \cdot (30 \rm pc)^{3}} \approx 0.0573 \, \mathrm{pc}^{-3}
\]

\[
n_{WD} = \frac{N_{WD}}{\frac{4 \pi}{3} D^{3}} = \frac{429}{\frac{4 \pi}{3} \cdot (30 \rm pc)^{3}} \approx 0.00379 \, \mathrm{pc}^{-3}
\]



c) 以上一步得到的白矮星的比例，估计银河系中白矮星的总数。这一数字是否与第1题中的理论估计值相符？请简单解释下可能的原因。

上述数据集中给出的白矮星比例大约为
\[
\frac{N_{WD}}{N_{S} + N_{WD}} = \frac{429}{6913} \approx 6.21 \%
\]
所以根据这个比例，银河系中白矮星的数量大约为
\[
N_{WD} = N_{form} \cdot 6.21 \% \approx 6.21 \times 10^{9}
\]
这个数字略大于我们的演化模型估计结果，可能原因是早期银河系的恒星生成速率会比现在大，所以理论上完成演化的白矮星数量应该大于均匀生成模型的估计数量；还有可能就是在理地球 30pc 以内的白矮星比例偏高，比如旋臂上产生小质量恒星的比例更大。



d) 该星表里有中子星或黑洞吗？为什么？

没有。中子星会在非常偏左的位置，并且非常暗，超出了这张图的坐标范围，并且 gaia 大概率不能在光学波段观测到中子星。很难给一个黑洞在 HR 图上标定，显然 30 pc 之内不存在 AGN，那么恒星级黑洞基本无法在光学波段上被 gaia 观测到。
