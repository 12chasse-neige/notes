# 噪声组成以及量子噪声

## 干涉仪的噪声组成

干涉仪的噪声基底由基本噪声源决定，包括量子噪声和热噪声。热噪声由干涉仪中的固定参数决定，例如材料特性和光束尺寸。而量子噪声则取决于易于调节的输入激光功率，以及（较不易调节的）信号循环镜（SRM）的透射率。其他噪声源，例如激光频率或振幅噪声、光电探测器暗噪声、执行器噪声等，被归类为"技术"噪声。通过设计控制这些技术噪声，使得每个噪声源的等效应变噪声在整个探测频带（10—7000 Hz）内不超过目标应变灵敏度的$10\%$。由于这些噪声源通常是统计独立的，它们以平方根和的形式叠加到总噪声中；因此，单个$10\%$的噪声源仅使噪声基底增加$0.5\%$。

Advanced LIGO名义运行模式的预期应变噪声谱如图2所示。在名义模式下，功率循环镜（PRM）处的输入功率为125 W，SRM透射率为$20\%$，信号循环腔（SRC）失谐量为零。各个噪声项将在后续章节中描述。

除了应变噪声谱外，探测器灵敏度的另一个标准品质因数是能够探测到双中子星（BNS）并合发出的引力波信号的距离。BNS范围定义为：在单个探测器中，一个并合事件产生匹配滤波器信噪比为8时的体积和方向平均距离[13]。图2中应变噪声曲线对应的BNS范围为190 Mpc。

<img src="./Quantum Noise.assets/image-20260218162407674.png" alt="image-20260218162407674" style="zoom:33%;" />
图2 Advanced LIGO名义（高功率、宽带）运行模式的主要噪声项。

### 量子噪声 

Quantum noise

量子噪声包含了探测到的光子到达率的统计涨落（散粒噪声）以及由于光子数涨落引起的辐射压力效应。量子噪声是利用 Buonanno 和 Chen [14] 的公式计算得出的。我们假设每个臂腔的往返损耗为 75 ppm，功率循环腔的损耗为 $10^{-3}$，这将导致分束器处的功率为 5.2 kW，每个臂腔内的功率为 750 kW。假设探测效率为 90%；这考虑了输出法拉第隔离器和输出模式清洁器的有限透射率，以及光电探测器的量子效率。

### 测试质量热噪声 

Test mass thermal noise

镀膜布朗噪声（Coating Brownian noise）是各种测试质量热噪声项中占主导地位的一项。它源于镀膜中的机械耗散，并根据参考文献 [15] 进行计算。镀膜设计和材料参数将在 4.3 节中描述。镀膜热光噪声（Coating thermo-optic noise）源于镀膜中的热耗散，通过镀膜材料的热弹（thermoelastic）和热折射（thermorefractive）系数产生噪声。根据参考文献 [16]，这两种效应是相干计算的。基底熔融石英（bulk fused silica）是基底布朗噪声项的来源。参考文献 [17] 提供了该项的计算，使用了参考文献 [18] 中建立的熔融石英体损耗和表面损耗模型。

### 悬挂热噪声 

Suspension thermal noise

测试质量悬挂系统中的热噪声主要源于最终悬挂级所使用的熔融石英纤维中的损耗。正如悬挂设计章节（4.4.2）所述，这四根玻璃纤维具有圆形但直径可变的截面：它们在纤维的主体（中间）部分较细，而在两端附近大约厚两倍。这种几何形状在最小化热噪声的同时，保持了纤维的小提琴模式频率较高（基频 510 Hz）和垂直拉伸模式频率较低（9 Hz）。热噪声是利用末级悬挂的有限元模型计算的，其中包括了纤维材料的体损耗、表面损耗和热弹分量的损耗项 [19]。

### 重力梯度 

Gravity gradients

地震波会在测试质量附近的地球内部产生密度扰动，进而对质量产生波动的引力。这种地震重力梯度噪声是利用参考文献 [20] 的传递函数公式以及一个观测站台址地震运动的代表性模型估算出来的。后者随时间变化可能很大，预计在某些时间段内，重力梯度噪声会比图 2 所示高出数倍 [21]。

图 2 还显示了地震噪声通过隔振和悬挂系统传递到测试质量的应变噪声（“Seismic noise”曲线）。由于巨大的机械隔离作用，这种噪声在 11 Hz 以上可以忽略不计。

### 残余气体噪声 

Residual gas noise

$4$公里长光束管中的残余气体会导致光路中气体粒子柱密度的统计变化，从而产生沿路径的有效折射率涨落。由此产生的光程长度噪声是通过计算分子穿过光束时腔内场相位的脉冲变化，并对分子速度分布进行积分来建模的 [22]。该噪声曲线仅包含了最主要的残余气体成分——氢气，其压力为 $4 \times 10^{-7} \mathrm{Pa}$。

虽然未包含在图 2 的噪声曲线中，但测试质量真空室中的残余气体会对测试质量悬挂产生一定的阻尼，可能会增加悬挂热噪声。这种阻尼效应由于测试质量与其悬挂的反作用质量（reaction mass）之间相对狭窄的间隙而增强——即所谓的薄膜阻尼（thin-film damping）[23]。气体阻尼噪声在 10—40 Hz 频带内最为显著，在该频带内它几乎随 $f^{-2}$ 下降。在预期的 $H_{2}$ 腔体压力 $7 \times 10^{-7}$ 帕斯卡下，由此产生的应变噪声在 20 Hz 时为 $5 \times 10^{-24} / \sqrt{\text{Hz}}$——比图 2 中的干涉仪应变噪声低 3-4 倍。为了减轻这种影响，输入测试质量（ITM）的间隙（20 mm）比末端测试质量（ETM）的间隙（5 mm）要大，因为前者不需要那么大的静电致动力。这一噪声项未包含在图 2 中，是因为通过降低腔体压力、增加 ETM 的间隙以及可能采用更复杂的（环形）末端反作用质量几何形状的某种组合，最终将使其变得可以忽略不计（即再降低 3 倍）。

### 其他运行模式 

如上所述，可以改变激光输入功率和信号循环腔参数，以实现与图 2 代表的名义模式不同的运行模式。我们用两种特定的替代干涉仪模式来说明潜在的参数空间：一种针对低输入功率优化的模式；一种针对双中子星（BNS）探测优化的模式。低功率模式之所以受关注，是因为实现全功率运行可能需要较长的调试时间；因此，早期的运行和观测将在降低功率的情况下进行。BNS 优化模式展示了针对这一特定源的潜在灵敏度，以及相应的宽带灵敏度折衷。表 2 给出了这两种模式的参数，图 3 显示了它们的应变噪声谱。

表 2 两种替代运行模式的干涉仪参数

| 模式 (Mode) | 输入功率 (Input power) | SRM 透射率 (SRM transmission) | SRC 失谐 (SRC detuning) | BNS 范围 (BNS range) |
| :--- | :---: | :---: | :---: | :---: |
| 低功率 (Low power) | 25 W | 35% | 0 | 160 Mpc |
| BNS 优化 (BNS optimized) | 125 W | 20% | 16 deg. | 210 Mpc |

<img src="./Quantum Noise.assets/image-20260218162448475.png" alt="image-20260218162448475" style="zoom:50%;" />
图3 对应于表2定义的模式以及图2所示名义灵敏度的Advanced LIGO应变噪声谱。$500\ \mathrm{Hz}$处的特征是测试质量悬挂光纤的（未解析的）基频振动模式。





## 量子噪声

<img src="./Quantum Noise.assets/image-20260318172019657.png" alt="image-20260318172019657" style="zoom:50%;" />

### Dark Port 端的光场输出

假设 dark port 端的输入是
$$
E_{\text{in}}^{(+)} = \int_{0}^{\infty} \sqrt{\frac{2 \pi \hbar \omega}{\mathcal{A} c}} a_{\omega} e^{- i \omega t} \, \frac{\dd{\omega}}{2 \pi}
$$
其中频域的产生湮灭算符满足对易关系
$$
\comm{a_{\omega}}{a_{\omega'}} = 0 \quad \comm{a_{\omega}}{a_{\omega'}^{\dagger}} = 2 \pi \delta(\omega - \omega')
$$
对于频谱进行一个拆分，在中心频率 $\omega_{o}$ 附近 $\Omega$ 定义
$$
a_{+} = a_{\omega_{o} + \Omega} \quad a_{-} = a_{\omega_{o} - \Omega}
$$
此时对易关系变为
$$
\comm{a_{+}}{a_{+'}^{\dagger}} = 2 \pi \delta(\Omega - \Omega') \quad \comm{a_{-}}{a_{-'}^{\dagger}} = 2 \pi \delta(\Omega - \Omega')
$$
并且可以把 dark port 的输入端改写为
$$
E_{\text{in}}^{(+)} = \int_{0}^{\infty} \sqrt{\frac{2 \pi \hbar \omega_{o}}{\mathcal{A} c}} e^{- i \omega_{o} t} \left( a_{+} e^{- i \Omega t} + a_{-} e^{i \Omega t} \right) \, \frac{\dd{\Omega}}{2 \pi}
$$
这个表达式进行了近似，注意到 $\Omega$ 的范围远小于中心频率 $\omega_{o}$ (差 $10^{-13}$ 左右量级)，在积分过程中直接用 $\omega_{0}$ 代替根号中的 $\omega$ ，并且把对 $\Omega$ 的积分延拓到无穷。对上式进行一次重定义
$$
a_{1} = \frac{a_{+} + a_{-}^{\dagger}}{\sqrt{2}} \quad a_{2} = \frac{a_{+} - a_{-}^{\dagger}}{\sqrt{2} i}
$$
把输入信号改写成形式
$$
E_{\text{in}} = E_{\text{in}}^{(+)} + E_{\text{in}}^{(-)} \\ =
\int_{o}^{\infty} \sqrt{\frac{4 \pi \hbar \omega_{o}}{\mathcal{A} c}} (\cos (\omega_{o} t) - i \sin (\omega_{o} t)) \left(\frac{1}{2} (a_{1} + i a_{2}) e^{- i \Omega t} + \frac{1}{2} (a_{1}^{\dagger} + i a_{2}^{\dagger}) e^{i \Omega t} \right) \, \frac{\dd{\Omega}}{2 \pi} + c.c. \\ =
\int_{0}^{\infty} \sqrt{\frac{4 \pi \hbar \omega_{o}}{\mathcal{A} c}} \left[ \frac{\cos (\omega_{o} t)}{2} (a_{1} e^{- i \Omega t} + a_{1}^{\dagger} e^{i \Omega t}) + \frac{\sin (\omega_{o} t)}{2} (a_{2} e^{- i \Omega t} + a_{2}^{\dagger} e^{i \Omega t}) \right] \, \frac{\dd{\Omega}}{2 \pi} + c.c. \\ =
\int_{0}^{\infty} \sqrt{\frac{4 \pi \hbar \omega_{o}}{\mathcal{A} c}} \left[ \cos (\omega_{o} t) (a_{1} e^{- i \Omega t} + a_{1}^{\dagger} e^{i \Omega t}) + \sin (\omega_{o} t) (a_{2} e^{- i \Omega t} + a_{2}^{\dagger} e^{i \Omega t}) \right] \, \frac{\dd{\Omega}}{2 \pi}
$$
对于 dark port 端的输出信号，我们只要替换上式中的产生湮灭算符，就可以在三角基底下将其表示为
$$
E_{\text{out}} = E_{1} \cos (\omega_{o} t) + E_{2} \sin (\omega_{o} t)
$$
其中
$$
E_{j} = \int_{0}^{\infty} \sqrt{\frac{4 \pi \hbar \omega_{o}}{\mathcal{A} c}} (b_{j} e^{- i \Omega t} + b_{j}^{\dagger} e^{i \Omega t}) \, \frac{\dd{\Omega}}{2 \pi}
$$

### 出入射光场之间的关系

为了得到 $a$ 和 $b$ 之间的关系，我们考虑干涉仪内部对于光场的影响是如何反应到 annihilation and creation operators 上的。

#### Beam Splitter 处的传递

对于 splitter mirror 处 bright port 的入射电场，可以写成激光和量子噪声的叠加
$$
E_{in}^{+} = \sqrt{\frac{2 \pi \hbar \omega_{o}}{\mathcal{A} c}} e^{- i \omega_{o} t} \left(D + \int_{0}^{\infty} d_{+} e^{- i \Omega} + d_{-} e^{i \Omega t} \frac{\dd{\Omega}}{2 \pi}\right)
$$
转换到两个 quadrature 的基底上
$$
E_{in} = \sqrt{\frac{4 \pi \hbar \omega_{o}}{\mathcal{A} c}} \left\{\cos \omega_{o} t \left( \sqrt{2} D + \int_{0}^{\infty} d_{1} e^{- i \Omega t} + d_{1}^{\dagger} e^{i \Omega t} \frac{\dd{\Omega}}{2 \pi} \right) + \sin \omega_{o} t \int_{0}^{\infty} d_{2} e^{- i \Omega t} + d_{2}^{\dagger} e^{i \Omega t} \frac{\dd{\Omega}}{2 \pi} \right\}
$$
所以在 beam splitter 处几个端口的场可以用下图的关系表示

<img src="./Quantum Noise.assets/image-20260318192533476.png" alt="image-20260318192533476" style="zoom:50%;" />

$$
f_{j}^{n} = \frac{d_{j} + a_{j}}{\sqrt{2}} \quad f_{j}^{e} = \frac{d_{j} - a_{j}}{\sqrt{2}} 
$$

$$
b_{j} = \frac{g_{j}^{n} - g_{j}^{e}}{\sqrt{2}} \quad d_{j} = \frac{g_{j}^{n} + g_{j}^{e}}{\sqrt{2}}
$$

#### 腔内的传递

假设腔的 front mirror 和 back mirror 的能量反、透射率分别是 $R, T$  和 $\tilde{R}, \tilde{T}$ ，约定腔内到外的振幅透、反射系数为
$$
\sqrt{T}, \sqrt{R}
$$
以及
$$
\sqrt{\tilde{T}}, \sqrt{\tilde{R}}
$$
腔外到内的振幅反射系数多一个负号。

<img src="./Quantum Noise.assets/image-20260319090928024.png" alt="image-20260319090928024" style="zoom:50%;" />

上图表示了腔内各个分量（激光和噪声）的传递，其中的 $\frac{2}{\sqrt{T}}$ 因子来自于
$$
E_{cav} = \sqrt{T} E_{in} + \sqrt{R} \sqrt{\tilde{R}} E_{cav}
$$
即腔锁相之后对于振幅的放大作用，然后因子 $e^{i \frac{\Omega L}{c}}$ 来自于 $X$ 产生的相位变化。

由上图的边界条件，可以得到噪声项之间的关系为
$$
j_{j} = \sqrt{T} f_{j} + \sqrt{R} k_{j} \\
g_{j} = \sqrt{T} k_{j} - \sqrt{R} f_{j}
$$

我们现在加入引力波对于腔内光场的影响。假设 carrier light 在打到镜面上的时候腔的长度是 $L + X(t)$，那么 carrier light 一来一回回到 $x = L$ 的位置的时候的相位就是
$$
E_{\text{carrier}} = \sqrt{\frac{4 \pi \hbar \omega_{o}}{\mathcal{A} c}} \frac{2}{\sqrt{T}} D \cos (\omega_{o} (t - \frac{2 X (t)}{c})) \\ =
\sqrt{\frac{4 \pi \hbar \omega_{o}}{\mathcal{A} c}} \frac{2}{\sqrt{T}} D \left(\cos \omega_{o} t + \sin \omega_{o} t \cdot \frac{2 \omega_{o}}{c} \int_{- \infty}^{\infty} X e^{- i \Omega t} \frac{\dd{\Omega}}{2 \pi}\right)
$$
所以引力波在这里的效果实际上是把一部分的 carrier light 给挤到了 side band 里面！这个效果用 annihilation and creation operators 可以表示为
$$
\delta k_{1} = 0 \\
\delta k_{2} = \frac{2}{\sqrt{T}} D\frac{2 \omega_{o} X}{c}
$$
所以在 back mirror 处的 operator 之间的关系可以表示为
$$
k_{j} e^{-i \frac{\Omega L}{c}} = j_{j} e^{i \frac{\Omega L}{c}} \sqrt{\tilde{R}} + q_{j} \sqrt{\tilde{T}} + \delta k_{j}
$$
把 back mirror 公式中的 $k_{j}$ 表达式代入 front mirror 处关系的第一行，消去 $k_{j}$，就可以解出腔内向右传播的边带场 $j_{j}$

$$
j_{j} = \frac{\sqrt{T} f_{j} + \sqrt{R} e^{i\Omega L/c} \left(\sqrt{\tilde{T}} q_{j} + \delta k_{j}\right)}{1 - \sqrt{R\tilde{R}} e^{2i\Omega L/c}}
$$

为了简化它，使用 Resonant Approximation
-  假设镜子反射率极高（$R \approx 1, \tilde{R} \approx 1$）
-   假设 side band 频率 $\Omega$ 远小于自由光谱范围（$\Omega \ll c/2L$），所以 $e^{2i\Omega L/c} \approx 1 + 2i\Omega L/c$
-   引入腔的半带宽 $\gamma = \frac{Tc}{4L}$ 和损耗修正 $\gamma_* = \gamma(1 + \epsilon/2)$

经过近似分母变成了极其简洁的形式：$(2L/c)(\gamma_* - i\Omega)$，于是，$j_{j}$ 化简为
$$
j_{j} = \frac{\sqrt{T}(f_{j} + \sqrt{\epsilon/2} q_{j}) + \delta k_{j}}{(2L/c)(\gamma_* - i\Omega)}
$$
所以腔内的循环功率 $W_{\text{circ}}$ 为
$$
W_{\text{circ}} = \frac{4}{T} \cdot \frac{1}{2} I_{0} = \frac{I_{0}/2}{\gamma L/c}
$$
涨落 $\delta W_{\text{circ}}$
$$
\delta W_{\text{circ}} = \int_{0}^{\infty} \frac{\sqrt{I_{o}\hbar\omega_{o}} (f_{1} + \sqrt{\epsilon/2} q_{1})}{(L/c)(\gamma_* - i\Omega)} e^{-i\Omega t} \frac{d\Omega}{2\pi} + c.c.
$$
这个光强涨落公式纯粹是由真空散粒噪声（$f_{1}, q_{1}$）引起的，引力波的影响全部反应在相位涨落上。

#### 镜子的运动

腔内的光强在不断随机涨落，这就意味着打在镜子上的辐射压力也在随机抖动。镜子受到的辐射压波动产生的力是 $F_{\text{BA}} = \frac{2 \delta W_{\text{circ}}}{c}$
同时，引力波 $h(t)$ 也在拉伸空间。把这两者加起来，就是干涉仪单臂长度变化 $X(t)$ 的运动方程
$$
\dv[2]{X(t)}{t} = \frac{1}{2} \eta_{ne} L \dv[2]{h (t)}{t} + \frac{4 \delta W_{\text{circ}}(t)}{mc}
$$
我们关心的是两条臂的位移之差 $x = X_{n} - X_{e}$，对上面的运动方程做傅里叶变换，解出 $x(\Omega)$，结果由两部分组成
$$
x = Lh + x_{\text{BA}}
$$

*   $Lh$：引力波信号带来的位移
*   $x_{\text{BA}}$：由辐射压噪声导致的随机位移

定义
$$
\mathcal{K}_* \equiv \frac{(I_{o}/I_{\text{SQL}}) 2\gamma^{4}}{\Omega^{2}[\gamma^{2}(1 + \epsilon/2)^{2} + \Omega^{2}]}
$$

$$
\beta_* \equiv \arctan\left(\frac{\Omega}{\gamma_*}\right) = \arctan\left(\frac{\Omega}{\gamma(1 + \epsilon/2)}\right)
$$

$$
n_{j} = \frac{q_{j}^{n} - q_{j}^{e}}{\sqrt{2}}
$$

最后得到
$$
x_{\text{BA}} = - \sqrt{\frac{{\cal K}_*}{2}} L h_{\text{SQL}} \cdot \left(a_{1} + \sqrt{\frac{\epsilon}{2}} n_{1}\right) e^{i\beta_*}
$$
其中
$$
I_{SQL} = \frac{m L^{2} \gamma^{4}}{4 \omega_{o}} \\
h_{SQL} = \sqrt{\frac{8 \hbar}{m \Omega^{2} L^{2}}}
$$
这就是 Ponderomotive effect，即散粒噪声 $a_{1}$ 推动了镜子，产生了一个与 $a_{1}$ 成正比的随机位移 $x_{\text{BA}}$

#### 腔的输出场

根据前镜的反射公式，把前面求出来的腔内场代进去，经过和分母一样的 Resonant Approximation，化简后得到离开单条臂的输出场 $g_{j}$

$$
g_{j} = \left(1 - \frac{1}{2}{\cal E}\right) e^{2i\beta} f_{j} + \sqrt{\cal E} e^{i\beta} q_{j} + \sqrt{\frac{(c/2L)^{2} T}{\gamma_*^{2} + \Omega^{2}}} e^{i\beta_*} \delta k_{j}
$$

其中
$$
\mathcal{E} = \frac{2 \gamma^{2}}{\gamma^{2} + \Omega^{2}} \epsilon
$$
它清晰地展示了 F-P 腔的三大输出成分

1.  第一项（输入反射）：输入的量子噪声 $f_{j}$ 原路反回，但带上了一个频变相移 $2\beta$，并且因为吸收损耗衰减了 $(1 - {\cal E}/2)$
2.  第二项（损耗噪声）：从后镜漏进来的外接真空噪声 $q_{j}$
3.  第三项（信号泄漏）：在腔内诞生的引力波信号 $\delta k_{j}$

#### 分束镜输出

从北臂出来的光 $g_{j}^{n}$ 和从东臂出来的光 $g_{j}^{e}$ 再次回到分束镜，在暗端口发生干涉，合成最终的输出场 $b_{j}$
$$
g_{j}^{n} = \left(1 - \frac{1}{2}{\cal E}\right) e^{2i\beta} f_{j}^{n} + \sqrt{\cal E} e^{i\beta} q_{j}^{n} + \sqrt{\frac{(c/2L)^{2} T}{\gamma_*^{2} + \Omega^{2}}} e^{i\beta_*} \delta k_{j}^{n}
$$

$$
g_{j}^{e} = \left(1 - \frac{1}{2}{\cal E}\right) e^{2i\beta} f_{j}^{e} + \sqrt{\cal E} e^{i\beta} q_{j}^{e} + \sqrt{\frac{(c/2L)^{2} T}{\gamma_*^{2} + \Omega^{2}}} e^{i\beta_*} \delta k_{j}^{e}
$$

所以二者合成之后得到
$$
b_{j} = \frac{g_{j}^{n} - g_{j}^{e}}{\sqrt{2}} \\ =
\left(1 - \frac{1}{2}{\cal E}\right) e^{2i\beta} a_{j} + \sqrt{\cal E} e^{i\beta} n_{j} + \sqrt{\frac{(c/2L)^{2} T}{\gamma_*^{2} + \Omega^{2}}} e^{i\beta_*} \frac{\delta k_{j}^{n} - \delta k_{j}^{e}}{\sqrt{2}}
$$

对于量子噪声项（第一、二项）：共模的激光器噪声被完美抵消，只剩下 $a_{j}$ 和 $n_{j}$

对于信号项（第三项）：代入前面求得的镜子差动位移 $x$
$$
b_{1} = \left(1 - \frac{1}{2}{\cal E}\right) a_{1} e^{2i\beta} + \sqrt{\cal E} n_{1} e^{i\beta}
$$

$$
b_{2} = \left(1 - \frac{1}{2}{\cal E}\right) a_{2} e^{2i\beta} + \sqrt{\cal E} n_{2} e^{i\beta} + \sqrt{2{\cal K}_*} \left( \frac{h + x_{\text{BA}}/L}{h_{\text{SQL}}} \right) e^{i\beta_*}
$$

如果我们忽略 end mirror 处的损耗并且代入 $x_{BA}$ 和噪声项之间的关系 $x_{\text{BA}} = - \sqrt{\frac{{\cal K}_*}{2}} L h_{\text{SQL}} \cdot \left(a_{1} + \sqrt{\frac{\epsilon}{2}} n_{1}\right) e^{i\beta_*}$，那么上述结论可以进一步表示为
$$
b_{1} = a_{1} e^{2 i \beta}
$$

$$
b_{2} = (a_{2} - \mathcal{K} a_{1}) e^{2 i \beta} - \sqrt{2 \mathcal{K}} \frac{h}{h_{SQL}} e^{i \beta}
$$

#### 噪声谱

从上面的输出表达式中，我们关心的 $b_{2}$ 分量可以分为要测量的引力波分量 $h (\Omega)$ 以及噪声分量 $h_{n} (\Omega)$
$$
h_{n} (\Omega) = \frac{h_{SQL}}{\sqrt{2 \mathcal{K}}} \Delta b_{2} e^{- i \beta}
$$
所以对应的噪声谱是
$$
\langle h_{n} h_{n}^{\dagger} \rangle = \frac{h^{2}_{SQL}}{2 \mathcal{K}} \left(a_{1} a_{1}^{\dagger} - \mathcal{K} a_{1} a_{2}^{\dagger} - \mathcal{K} a_{1}^{\dagger} a_{2} + \mathcal{K}^{2} a_{2} a_{2}^{\dagger}\right)
$$
利用关系
$$
S_{a_{1}} = S_{a_{2}} = 1, \quad S_{a_{1} a_{2}} = 0
$$
所以量子噪声谱可以表示为
$$
S_{h}^{SQL} = \frac{h_{SQL}^{2}}{2} \left(\frac{1}{\mathcal{K}} + \mathcal{K}\right)
$$


### 压缩

#### Rotation 和 Squeeze 算符

rotation 算符 $R (\theta)$ 作用在 side bands 频率模式的 Hilbert 空间上，定义为
$$
R (\theta) = e^{- i \theta (a_{+}^{\dagger} a_{+} + a_{-}^{\dagger} a_{-})}
$$
这个算符是 Unitary 的，并且逆为
$$
R^{-1} (\theta) = R^{\dagger} (\theta) = R (- \theta)
$$
这个算符作用在光场上的行为是
$$
R (\theta) a_{\pm} R^{\dagger} (\theta) = a_{\pm} e^{i \theta}
$$
这个性质可以利用公式 $e^{A} B e^{-A}$ 的对易子展开式证明。当我们把变量替换成 $a_{i}$ 的时候，上述算符就开始体现出旋转的性质
$$
R (\theta) a_{1} R^{\dagger} (\theta) = a_{1} \cos \theta - a_{2} \sin \theta \\
R (\theta) a_{2} R^{\dagger} (\theta) = a_{2} \cos \theta + a_{1} \sin \theta
$$
所以 rotation 算符在 $1,2$ 相空间上的性质就是把态矢量逆时针旋转 $\theta$

squeeze 算符的定义则是
$$
S (r, \phi) = e^{r (a_{+} a_{-} e^{- 2 i \phi} - a_{+}^{\dagger} a_{-}^{\dagger} e^{2 i \phi})}
$$
这个算符也是 Unitary 的，并且逆为
$$
S^{-1} (r, \phi) = S^{\dagger} (r, \phi) = S (-r, \phi) = S (r, \phi + \frac{\pi}{2})
$$
这个算符作用在光场上的行为是
$$
S(r, \phi) a_{\pm} S^{\dagger} (r, \phi) = a_{\pm} \cosh r + a_{\mp}^{\dagger} e^{2 i \phi} \sinh r
$$
这个性质同样可以利用公式 $e^{A} B e^{-A}$ 的对易子展开式证明。当我们把变量替换成 $a_{i}$ 的时候，上述算符变为
$$
S (r, \phi) a_{1} S^{\dagger} (r, \phi) = a_{1} (\cosh r + \sinh r \cos 2 \phi) + a_{2} \sinh r \sin 2 \phi \\
S (r, \phi) a_{2} s^{\dagger} (r, \phi) = a_{2} (\cosh r - \sinh r \cos 2 \phi) + a_{1} \sinh r \sin 2 \phi
$$

#### 利用算符描述噪声传递

上述推导出的量子噪声传递
$$
\Delta b_{1} = a_{1} e^{2 i \beta} \\
\Delta b_{2} = (a_{2} - \mathcal{K} a_{1}) e^{2 i \beta} \\
$$
用两个算符重新表示，就是
$$
b_{j} = S^{\dagger} (r, \phi) R^{\dagger} (- \theta) a_{j} e^{2 i \beta} R (- \theta) S (r, \phi)
$$
其中
$$
\theta = \arctan(\frac{\mathcal{K}}{2}), \quad \phi = \frac{1}{2} \arccot(\frac{\mathcal{K}}{2}), \quad r = \mathop{\text{arcsinh}}\left(\frac{\mathcal{K}}{2}\right)
$$
所以
$$
b_{\pm} \ket{0_{b_{\pm}}} = S^{\dagger} R^{\dagger} a_{\pm} e^{\pm i 2 \beta} R S \ket{0_{b_{\pm}}} = 0
$$
可以得到 $a_{\pm}$ 对应真空态的表示
$$
\ket{0_{a_{\pm}}} = e^{\pm i 2 \beta} RS \ket{0_{b_{\pm}}}
$$
利用真空态在旋转下不变的性质
$$
\ket{\text{in}} = \ket{0_{a_{\pm}}} = e^{\pm 2 i \beta} S(r, \phi) \ket{0_{b_{\pm}}}
$$
所以在没有旋转的时候
$$
S_{b_{1}} = 1, \quad S_{b_{2}} = 1 + \mathcal{K}^{2}, \quad S_{b_{1} b_{2}} = \langle \text{in} | \frac{1}{2} (\Delta b_{1} \Delta b_{2}^{\dagger} + \Delta b_{2} \Delta b_{1}^{\dagger}) | \text{in} \rangle = - \mathcal{K}
$$
那么我们在把噪声扭转一个角度 $\phi$ 之后，对应的谱密度就是
$$
b'_{1} = b_{1} \cos \phi + b_{2} \sin \phi \\
b'_{2} = b_{2} \cos \phi - b_{1} \sin \phi
$$
计算得到
$$
S_{b'_{1}} = e^{-2 r} = \left(\sqrt{1 + \frac{\mathcal{K}}{2}} - \frac{\mathcal{K}}{2}\right)^{2}
$$

$$
S_{b'_{1}} = e^{2 r} = \left(\sqrt{1 + \frac{\mathcal{K}}{2}} + \frac{\mathcal{K}}{2}\right)^{2}
$$

$$
S_{b'_{1} b'_{2}} = 0
$$

#### 压缩噪声

我们可以在 dark port 输入之前给它上一个压缩，来减少最后的量子噪声。所谓的 squeezed-input 可以表示成
$$
\ket{\text{in}} = S (R, \lambda) \ket{0_{a}}
$$
所以最后的噪声就是
$$
\langle \text{in} | h_{n} h_{n'} | \text{in} \rangle 
$$
把压缩算符提进去
$$
\langle 0_{a} | h_{ns} h_{ns'} | 0_{a} \rangle
$$
其中
$$
h_{ns} = S^{\dagger} (R, \lambda) h_{n} S (R, \lambda)
$$
带入
$$
h_{n} = \frac{h_{SQL}}{\sqrt{2 \mathcal{K}}} \Delta b_{2} e^{- i \beta}
$$
计算得到
$$
h_{ns} = - \frac{h_{SQL}}{\sqrt{2 \mathcal{K}}} \sqrt{1 + \mathcal{K}^{2}} e^{- i \beta} \times \\ \left(a_{1} (\cosh R \cos \Phi - \sinh R \cos(\Phi - 2(\Phi + \lambda)) - a_{2} (\cosh R  \sin \Phi - \sinh R \sin(\Phi - 2 (\Phi + \lambda)))\right)
$$
所以总的噪声谱就是
$$
S_{h} = \frac{h_{SQL}^{2}}{2} \left(\mathcal{K} + \frac{1}{\mathcal{K}}\right) (\cosh 2R - \cos (2 (\lambda + \Phi)) \sinh 2R)
$$
其中 $\Phi = \arccot \mathcal{K}$，所以在 $\lambda = - \Phi$ 的时候，噪声压缩到最小为
$$
S_{h} = \frac{h_{SQL}^{2}}{2} \left(\mathcal{K} + \frac{1}{\mathcal{K}}\right) e^{- 2 R}
$$

### Detuned Interferometer 噪声谱

为了减少在特定频率出的量子噪声，可以通过 detuned interferometer 的方法来减小窄带内的量子噪声。
