# 统计力学 第1次作业

Chasse_neige

1.2. 证明任何一种具有两个独立参量 $T, p$ 的物质, 其物态方程可由实验测得的体胀系数 $\alpha$ 及等温压缩系数 $\kappa_{T}$, 根据下述积分求得:
$$
\ln V=\int\left(\alpha d T-\kappa_{T} d p\right)
$$

如果 $\alpha=\frac{1}{T}$, $\kappa_{T}=\frac{1}{p}$, 试求物态方程。

证明：

利用体膨胀系数的定义
$$
\alpha = \frac{1}{V} \left( \pdv{V}{T} \right)_{p}
$$
以及等温压缩系数的定义
$$
\kappa_{T} = - \frac{1}{V} \left(\pdv{V}{p}\right)_{T}
$$
利用全微分的性质
$$
\dd{V} = \left(\pdv{V}{T}\right)_{p} \dd{T} + \left(\pdv{V}{p}\right)_{T} \dd{p}
$$
所以
$$
\dd{V} = \alpha V \dd{T} - \kappa_{T} V \dd{p}
$$

$$
\frac{\dd{V}}{V} = \alpha \dd{T} - \kappa_{T} \dd{p}
$$

积分得到
$$
\ln V = \int \left(\alpha \dd{T} - \kappa_{T} \dd{p} \right)
$$
如果 $\alpha=\frac{1}{T}$, $\kappa_{T}=\frac{1}{p}$，则物态方程变为
$$
\ln V = \ln T - \ln p + \text{Const.}
$$
即
$$
V = \text{Const.} \times \frac{T}{p}
$$
1.5. 描述金属丝的几何参量是长度 $L$, 力学参量是张力 $\sigma$, 物态方程是
$$
f(\sigma, L, T)=0
$$

实验通常在 $1 \mathrm{p}_{\mathrm{n}}$ 下进行, 其体积变化可以忽略。线胀系数定义为 $\alpha=\frac{1}{\mathrm{~L}}\left(\frac{\partial \mathrm{L}}{\partial \mathrm{T}}\right)_{\sigma}$, 等温杨氏模量定义为 $Y=\frac{L}{A}\left(\frac{\partial \sigma}{\partial L}\right)_{\mathrm{T}}$, 其中 $A$ 是金属丝的截面积。一般来说, $\alpha$ 和 $Y$ 是 $\mathrm{T}$ 的函数。对 $\sigma$ 仅有微弱的依赖关系。如果温度变化范围不大, 可以看成常量, 假设金属丝两端固定, 试证明, 当温度由 $\mathrm{T}_{1}$ 降至 $\mathrm{T}_{2}$ 时, 其张力的增加为

$$
\Delta \sigma=-Y A \alpha\left(T_{2}-T_{1}\right)
$$
证明：
$$
\dd{\sigma} = \left(\pdv{\sigma}{L}\right)_{T} \dd{L} + \left(\pdv{\sigma}{T}\right)_{L} \dd{T}
$$
利用
$$
\left(\pdv{\sigma}{T}\right)_{L} \left(\pdv{T}{L}\right)_{\sigma} \left(\pdv{L}{\sigma}\right)_{T} = -1
$$
所以
$$
\left(\pdv{\sigma}{T}\right)_{L} = - \left(\pdv{\sigma}{L}\right)_{T} \left(\pdv{L}{T}\right)_{\sigma} = - \alpha Y A
$$
所以
$$
\dd{\sigma} = \frac{YA}{L} \dd{L} - \alpha YA \dd{T}
$$
所以在温度由 $\mathrm{T}_{1}$ 降至 $\mathrm{T}_{2}$ 时, 其张力的增加为
$$
\Delta \sigma = - \int_{T_{1}}^{T_{2}} \alpha YA \dd{T} = - YA \alpha (T_{2} - T_{1})
$$
1.7. 抽成真空的小匣带有活门，打开活门让气体冲入。当压强达到外界压强 $p_{0}$ 时将活门关上。试证明：小匣内的空气在没有与外界交换热量之前，它的内能 $U$ 与原来在大气中的内能之差为 $U - U_{0} = p_{0} V_{0}$，其中 $V_{0}$ 是它原来在大气中的体积。若气体是理想气体，求它的温度和体积。

考虑冲入小匣的那部分气体：系统冲入小匣后的内能 $U$ 与其原来在大气中的内能 $U_{0}$ 满足

$$
U - U_{0} = W + Q
$$

由于过程进行得很迅速，过程中系统与外界没有热量交换，$Q = 0$。由于小匣很小，在将气体压入小匣的过程中大气压强 $p_{0}$ 可以认为没有变化，所以大气对系统所做的功为

$$
W \approx p_{0} V_{0}
$$

所以

$$
U - U_{0} = p_{0} V_{0}
$$

如果气体是理想气体，那么

$$
p_{0} V_{0} = n R T_{0}
$$

$$
U - U_{0} = C_{V} (T - T_{0}) = \frac{n R}{\gamma - 1} (T - T_{0})
$$

得到
$$
T = \gamma T_{0}
$$

由于活门是在系统的压强达到 $p_{0}$ 时关上的，所以气体在小匣内的压强也可看作 $p_{0}$，其物态方程为

$$
p_{0} V = n R \gamma T_{0}
$$

所以体积
$$
V = \gamma V_{0}
$$
1.11. 大气温度随高度降低的主要原因是在对流层中的低处与高处之间空气不断发生对流。由于气压随高度而降低，空气上升时膨胀，下降时收缩。空气的导热率很小，膨胀和收缩的过程可以认为是绝热过程。试计算大气温度随高度的变化率 $\frac{dT}{dz}$，并给出数值结果。

> 提示：根据流体静力学可导出气压随高度变化率
>
>$$
>\frac{dp(z)}{dz} = -\rho(z) g
>$$
>再利用理想气体的绝热方程求出
> 
>$$
>\left( \frac{\partial T}{\partial p} \right)_{s} = \frac{\gamma - 1}{\gamma} \frac{T(z)}{p(z)}
>$$
>
>从而可以求出 $\frac{dT}{dz}$。

根据一层大气的受力平衡，得到
$$
p (z) - p (z + \dd{z}) =  \rho (z) g \dd{z}
$$
所以
$$
\dv{p(z)}{z} = - \rho(z) g
$$
在气团上升的过程中，由于绝热近似，其温度和压强的关系可以表示为
$$
\dd{U} + p \dd{V} = 0
$$
由于
$$
\dd{U} = C_{V} \dd{T} + \left(T \left(\pdv{p}{T}\right)_{V} - p\right) \dd{V}
$$
所以
$$
C_{V} \dd{T} + T \left(\pdv{p}{T}\right)_{V} \dd{V} = 0
$$


$$
\frac{nR}{\gamma - 1} \dd{T} + T \left(\pdv{p}{T}\right)_{V} \dd{V} = 0
$$

对于理想气体
$$
\left(\pdv{p}{T}\right)_{V} = \frac{nR}{V}
$$
所以理想气体的绝热方程给出
$$
T V^{\gamma - 1} = \text{Const.}
$$
即
$$
T^{\gamma} p^{- (\gamma - 1)} = \text{Const.}
$$
所以
$$
\gamma \frac{\dd{T}}{T} - (\gamma - 1) \frac{\dd{p}}{p} = 0
$$
我们假设空气的平均摩尔质量为 $m$ , 则在高度 $z$ 处的空气密度为
$$
\rho(z) = \frac{p(z)}{R T(z)} m
$$
所以
$$
\dv{p(z)}{z} = - \frac{p(z) mg}{R T(z)}
$$

$$
\frac{\gamma}{\gamma - 1} \frac{\dd{T} (z)}{T (z)} = - \frac{mg}{R T(z)} \dd{z}
$$

得到
$$
\dv{T (z)}{z} = - \frac{\gamma - 1}{\gamma} \frac{mg}{R}
$$
带入数据估算：
$$
\gamma \approx \frac{2.5 + 1}{2.5} = 1.4
$$

$$
m \approx 0.2 \times 32 \times 10^{-3} + 0.8 \times 28 \times 10^{-3} = 28.8 \times 10^{-3} \mathrm{kg}/ \mathrm{mol}
$$

所以最终的温度梯度大概是
$$
- 0.0097 \mathrm{K}/\mathrm{m} = - 9.7 \mathrm{K}/\mathrm{km}
$$


1.14. 试根据热力学第二定律证明两条绝热线不能相交。

证明：

假设有两条绝热线相交，那么我在交点一侧的两个分支上随便划一条线构成一个“三角形”的循环，这个循环的三条路径中两条都是绝热的，只有一条的对外吸放热等于做功，这就构成了一个效率 $100 \%$  的第二类永动机，和热力学第二定律是违背的。

1.19. 一均匀杆的温度一端为 $T_{1}$，另一端为 $T_{2}$，试计算达到均匀温度 $\frac{T_{1} + T_{2}}{2}$ 后的熵增。

假设杆子初始温度是线性分布的，即
$$
T (x) = T_{1} + \frac{T_{2} - T_{1}}{L} x
$$
那么从 $x$ 到 $x + \dd{x}$ 的部分在到达均匀温度过程中的熵增为（假设单位长度的热容为 $c$）
$$
\dd{S} (x) = c \dd{x} \int_{T (x)}^{\frac{T_{1} + T_{2}}{2}} \frac{\dd{T}}{T} = \ln(\frac{\frac{T_{1} + T_{2}}{2}}{T_{1} + \frac{T_{2} - T_{1}}{L} x}) c_{p} \dd{x}
$$
所以杆子的总熵增为
$$
S = \int_{0}^{L} \ln(\frac{\frac{T_{1} + T_{2}}{2}}{T_{1} + \frac{T_{2} - T_{1}}{L} x}) c \dd{x} \\ =
c L \left( \ln(\frac{T_{1} + T_{2}}{2}) + 1 + \frac{T_{1} \ln T_{1} - T_{2} \ln T_{2}}{T_{2} - T_{1}}\right)
$$
1.21. 物体的初温 $T_{1}$ 高于热源的温度 $T_{2}$，有一热机在此物体与热源之间工作，直到将物体的温度降低到 $T_{2}$ 为止。若热机从物体吸取的热量为 $Q$，试根据熵增原理证明，此热机所能输出的最大功为
$$
W_{\text{max}} = Q - T_{2} (S_{1} - S_{2})
$$

其中 $S_{1} - S_{2}$ 是物体的熵减少量。

证明：

在热机从物体吸热 $Q_{1}$ 再到热源处放热 $Q_{2}$ 时，当物体温度为 $T$ 时，根据克劳修斯不等式，有
$$
- \frac{\dd{Q}_{1}}{T} + \frac{\dd{Q}_{2}}{T_{2}} \geq 0
$$
所以
$$
\dd{W} = \dd{Q}_{1} - \dd{Q}_{2} \leq \dd{Q}_{1} \left(1 - \frac{T_{2}}{T}\right)
$$
得到
$$
W_{\text{max}} = \int \dd{Q}_{1} \left(1 - \frac{T_{2}}{T}\right) = Q - \int \dd{S} T_{2} = Q - T_{2} (S_{1} - S_{2})
$$
