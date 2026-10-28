# Statistical Mechanics Homework

## 第1次作业

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

### Reference material

提示：根据流体静力学可导出气压随高度变化率

$$
\frac{dp(z)}{dz} = -\rho(z) g
$$

再利用理想气体的绝热方程求出

$$
\left( \frac{\partial T}{\partial p} \right)_{s} = \frac{\gamma - 1}{\gamma} \frac{T(z)}{p(z)}
$$

从而可以求出 $\frac{dT}{dz}$。

---

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
\begin{gathered}
S = \int_{0}^{L} \ln(\frac{\frac{T_{1} + T_{2}}{2}}{T_{1} + \frac{T_{2} - T_{1}}{L} x}) c \dd{x} \\ =
c L \left( \ln(\frac{T_{1} + T_{2}}{2}) + 1 + \frac{T_{1} \ln T_{1} - T_{2} \ln T_{2}}{T_{2} - T_{1}}\right)
\end{gathered}
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

## 第2次作业

2.2. 设一物质的物态方程具有以下的形式:
$$
P = f(v) T
$$
试证明其内能与体积无关。

证明：

带入
$$
\left(\pdv{U}{V}\right)_{T} = T \left(\pdv{p}{T}\right)_{V} - p = T f(v) - f(v) T = 0
$$
所以内能与体积无关。

2.11. 求范氏气体的特性函数 $F_{\mathrm{m}}$ ，并导出其它的热力学函数。

范式气体的状态方程是
$$
(p + \frac{n^{2}a}{V^{2}}) (V - nb) = nRT
$$
假设其摩尔等容热容为 $C_{V}$，则其内能可以表示为
$$
\left(\pdv{U}{T}\right)_{V} = n C_{V}
$$

$$
\left(\pdv{U}{V}\right)_{T} = T \left(\pdv{p}{T}\right)_{V} - p = \frac{n^{2} a}{V^{2}}
$$

所以内能函数为
$$
U (T, V) = \int n C_{V} \dd{T} - \frac{n^{2} a}{V} + \text{Const.}
$$
利用Legendre变换得到其余特性函数
$$
\begin{gathered}
H (T, V) = U + pV = \int n C_{V} \dd{T} - \frac{n^{2} a}{V} + \left(\frac{n RT}{V - nb}  - \frac{n^{2} a}{V^{2}}\right) V +\text{Const.} \\ = 
\int n C_{V} \dd{T} - \frac{2 n^{2} a}{V} + \frac{nRTV}{V - nb} +\text{Const.}
\end{gathered}
$$

$$
\begin{gathered}
\dd{S} = \frac{\dd{U} + p \dd{V}}{T} = n C_{V} \frac{\dd{T}}{T} + \frac{1}{T} \left(\frac{n^{2} a}{V^{2}} \dd{V} + \frac{n RT\dd{V}}{V - nb} - \frac{n^{2} a}{V^{2}} \dd{V}\right) \\ = 
n C_{V} \frac{\dd{T}}{T} + \frac{n R \dd{V}}{V - nb}
\end{gathered}
$$

得到
$$
S (T, V) = \int n C_{V} \frac{\dd{T}}{T} + n R \ln (V - nb) + \text{Const.}
$$
所以
$$
F (T, V)  = U - TS = \int n C_{V} \dd{T} - T \int n C_{V} \frac{\dd{T}}{T} - \frac{n^{2} a}{V} - nRT \ln (V - nb) + \text{Const.}
$$

$$
G (T, V) = F (T, V) + pV = \int n C_{V} \dd{T} - T \int n C_{V} \frac{\dd{T}}{T} - \frac{2 n^{2} a}{V} + \frac{n RTV}{V - nb} - nRT \ln (V - nb) + \text{Const.}
$$

2.13. X射线衍射实验发现, 橡皮带未被拉紧时具有无定形结构, 当受张力而被拉伸时, 具有晶型结构, 这一事实表明橡皮带具有大的分子链。

(a) 试讨论橡皮带在等温过程中被拉伸时它的熵是增加还是减少; 

熵减少，因为拉伸后橡皮带具有晶型结构，微观状态数较少。

(b) 试证明它的膨胀系数 $\alpha=\frac{1}{\mathrm{~L}}\left(\frac{\partial \mathrm{L}}{\partial \mathrm{T}}\right)_{\sigma}$ 是负的。

在橡皮带被拉伸时熵减少，即
$$
\left(\pdv{S}{L}\right)_{T} < 0 \quad \left(\pdv{S}{\sigma}\right)_{T} < 0
$$
我们来推导一下橡胶带满足的麦克斯韦关系，橡胶带的内能满足
$$
\dd{G} = - S \dd{T} - L \dd{\sigma}
$$
其中 $\sigma$ 是橡胶带的张力。所以
$$
\left(\pdv{G}{T}\right)_{\sigma} = - S \quad \left(\pdv{G}{\sigma}\right)_{T} = -L
$$
得到
$$
\left(\pdv{S}{\sigma}\right)_{T} = \left(\pdv{L}{T}\right)_{\sigma}
$$
所以 $\left(\pdv{L}{T}\right)_{\sigma} < 0$， 所以它的膨胀系数是负的。

2.19. 已知顺磁物质遵从居里定律
$$
M = \frac{C}{T} H
$$

若维持物质的温度不变，使磁场由 $0$ 增至 $H$，求磁化过程释放出的热量。
$$
\dd{Q} = \dd{U} - \mu_{0} V H \dd{M}
$$
在温度不变时，形式可以变为
$$
\dd{Q} = - \frac{\mu_{0} CV}{T} H \dd{H}
$$
所以磁化过程放出的热量为
$$
\frac{\mu_{0} CV}{2T} H^{2}
$$
2.21. 已知顺磁介质遵从居里定律，今忽略其体积的变化，试分别用$dw = \mu_{0} H dM$和$dw = -\mu_{0} M dH$的微功表达式，求磁介质单位体积的自由能、内能和熵，并对结果加以解释。

1. 当微功表达式为  $\dd{w} = \mu_{0} H \, \mathrm{d}M$ 时

$$
\mathrm{d} U = T \, \mathrm{d}S + \mu_{0} H \, \mathrm{d}M
$$

居里定律  
$$
M = \frac{C}{T} H \quad
$$
自由能（亥姆霍兹自由能）$F = U - TS$，由 $\mathrm{d} F = - S \, \mathrm{d}T + \mu_{0} H \, \mathrm{d}M$ 和居里定律积分得
$$
F(T, M) = \frac{\mu_{0} T}{2C} M^{2} + \varphi(T)
$$
其中 $\varphi(T)$ 是仅与温度有关的函数。熵为  
$$
S(T, M) = -\left. \frac{\partial F}{\partial T} \right|_{M} = -\frac{\mu_{0}}{2C} M^{2} - \varphi'(T)
$$
内能  
$$
U(T) = F + TS = \varphi(T) - T\varphi'(T)
$$
可见内能只与温度有关，与磁化强度 $M$ 无关。

2. 当微功表达式为 $\mathrm{d}w = -\mu_{0} M \, \mathrm{d}H$ 时

$$
\mathrm{d}U = T \, \mathrm{d}S - \mu_{0} M \, \mathrm{d}H
$$

自由能 $F = U - TS$（以 $T, H$ 为自变量）
由 $\mathrm{d}F = -S \, \mathrm{d}T - \mu_{0} M \, \mathrm{d}H$ 和居里定律积分得
$$
F(T, H) = -\frac{\mu_{0} C}{2T} H^{2} + \chi(T)
$$
其中 $\chi(T)$ 是仅与温度有关的函数。熵 
$$
S(T, H) = -\left. \frac{\partial F}{\partial T} \right|_{H} = -\frac{\mu_{0} C}{2T^{2}} H^{2} - \chi'(T)
$$
内能
$$
U(T, H) = F + TS = \chi(T) - T\chi'(T) - \frac{\mu_{0} C}{T} H^{2}
$$
内能依赖于温度 $T$ 和磁场 $H$。

两种表达式的关系与物理解释：热力学势的对应两种微功表达式对应于不同的系统边界和热力学势。  

当 $\mathrm{d}w = \mu_{0} H \, \mathrm{d}M$ 时，系统为介质本身，内能 $U$ 不包括外磁场的能量，自变量为 $(T, M)$，自由能为亥姆霍兹自由能。  

当 $\mathrm{d}w = -\mu_{0} M \, \mathrm{d}H$ 时，系统包括介质与外磁场的耦合，内能 $U'$ 包含了相互作用能，自变量为 $(T, H)$，自由能对应于吉布斯自由能。两种内能之间满足关系
$$
U' = U - \mu_{0} H M
$$
其中扣除了磁偶极在外场中的势能。综上，两种微功表达式在热力学上都是合理的，但对应的内能和自由能具有不同的物理含义。

4.11. 试根据热力学第三定律证明，在 $T \to 0$ 时，表面张力系数与温度无关，即 $\frac{d\sigma}{dT} \to 0$，这一结论在液氦中得到实验的证实。

证明：

对于表面系统而言，其自由能为
$$
\dd{F} = - S\dd{T} + \sigma \dd{A}
$$
所以可以得到一组麦克斯韦关系
$$
\left(\pdv{S}{A}\right)_{T} = - \left(\pdv{\sigma}{T}\right)_{A}
$$
利用热力学第三定律，当 $T \to 0$ 时，$\lim_{T \to 0} S = 0$，所以此时 $\left(\pdv{S}{A}\right)_{T} = - \left(\pdv{\sigma}{T}\right)_{A} \to 0$，联系表面张力系数仅仅是温度的函数，所以此时 $\dv{\sigma}{T} \to 0$，表面张力系数与温度无关。

3.5. 求证
$$
\left(\frac{\partial U}{\partial n}\right)_{T, V} - \mu = -T\left(\frac{\partial \mu}{\partial T}\right)_{V, n}
$$

证明：
$$
\dd{U} = T \dd{S} - p \dd{V} + \mu \dd{n}
$$
所以
$$
\left(\pdv{U}{n}\right)_{S, V} = \mu =\left(\pdv{U}{n}\right)_{T, V} - \left(\pdv{U}{S}\right)_{n, V} \left(\pdv{S}{n}\right)_{T, V}
$$
得到
$$
\left(\frac{\partial U}{\partial n}\right)_{T, V} - \mu = \left(\pdv{U}{S}\right)_{n, V} \left(\pdv{S}{n}\right)_{T, V} = T \left(\pdv{S}{n}\right)_{T, V}
$$
利用偏导关系
$$
\dd{F} = -S \dd{T} - p \dd{V} + \mu \dd{n}
$$
所以
$$
\left(\pdv{F}{T}\right)_{n, V} =-S \quad \left(\pdv{F}{n}\right)_{T, V} = \mu
$$
所以
$$
\left(\pdv{S}{n}\right)_{T, V} = - T\left(\frac{\partial \mu}{\partial T}\right)_{V, n}
$$
带入得到
$$
\left(\frac{\partial U}{\partial n}\right)_{T, V} - \mu = -T\left(\frac{\partial \mu}{\partial T}\right)_{V, n}
$$
4.2. 证明 $\mu_{i}(T, p, n_{1}, \ldots, n_{k})$ 是 $n_{1}, \ldots, n_{k}$ 的零次齐函数
$$
\sum_{j} n_{j} \frac{\partial \mu_{i}}{\partial n_{j}} = 0
$$

证明：

利用化学势的定义
$$
\mu_{i} = \left(\pdv{G}{n_{i}}\right)_{T, V}
$$
由于$G$ 为广延量，所以 $G$ 是$n_{1}, \ldots, n_{k}$ 的一次齐函数，即
$$
\sum_{i} n_{i} \pdv{G}{n_{i}} = G
$$
所以
$$
\sum_{j} n_{j} \frac{\partial \mu_{i}}{\partial n_{j}} = \sum_{j} n_{j} \frac{\partial^{2} G}{\partial n_{i} \partial n_{j}} = \sum_{j} n_{j} \cdot 0 = 0
$$
即 $\mu_{i}(T, p, n_{1}, \ldots, n_{k})$ 是 $n_{1}, \ldots, n_{k}$ 的零次齐函数。

4.8. 绝热容器中有隔离板隔开, 两边分别装有 $n_{1}$ mol 和 $n_{2}$ mol 的理想气体, 温度同为 $T$, 压强分别为 $p_{1}$ 和 $p_{2}$, 今将隔离板抽去,

(a) 试求气体混合后的压强;

混合后压强为
$$
p = \frac{(n_{1} + n_{2}) R T}{\frac{n_{1} RT}{p_{1}} + \frac{n_{2} RT}{p_{2}}} = \frac{(n_{1} + n_{2})p_{1} p_{2}}{n_{1} p_{2} + n_{2} p_{1}}
$$
(b) 如果两种气体是不同的, 计算混合后的熵增;

由于熵是状态量，可以构造一个等温过程来计算熵增
$$
\begin{gathered}
\Delta S = \frac{1}{T} \left(\int_{\frac{n_{1}RT}{p_{1}}}^{\frac{n_{1} RT}{p_{1}} + \frac{n_{2} RT}{p_{2}}} \frac{n_{1}RT}{V} \dd{V} + \int_{\frac{n_{2}RT}{p_{1}}}^{\frac{n_{1} RT}{p_{1}} + \frac{n_{2} RT}{p_{2}}} \frac{n_{2}RT}{V} \dd{V}\right) \\ = 
R \left(n_{1} \ln(\frac{n_{1} p_{2} + n_{2} p_{1}}{n_{1} p_{2}}) + n_{2} \ln(\frac{n_{1} p_{2} + n_{2} p_{1}}{n_{2} p_{1}})\right)
\end{gathered}
$$
(c) 如果两种气体是相同的, 计算混合后的熵增。

根据理想气体熵的公式
$$
S = n C_{V} \ln T + n R \ln(\frac{V}{n}) + S_{0}
$$
此处的全同气体不应视作扩散，所以熵增为
$$
\Delta S = (n_{1} + n_{2}) R \ln (\frac{\frac{n_{1} RT}{p_{1}} + \frac{n_{2} RT}{p_{2}}}{n_{1} + n_{2}}) - n_{1} R \ln(\frac{R T}{p_{1}}) - n_{2} R \ln(\frac{R T}{p_{2}})
$$

## 第3次作业

3.7. 试证明在相变中物质摩尔内能的变化为

$$
\Delta U_{m}=L\left(1-\frac{p}{T} \dv{T}{p} \right)
$$
如果一相是气相, 可看作理想气体, 另一相是凝聚相, 试将公式化简。

证明：

假设相变过程中的潜热 $L$ 表示
$$
L = T \Delta S_{m}
$$
利用
$$
\Delta U_{m} = T \Delta S_{m} - p \Delta V_{m}
$$
再带入 Clapeyron 方程
$$
\dv{p}{T} = \frac{L}{T \Delta V_{m}}
$$
所以
$$
\Delta V_{m} = \frac{L}{T} \dv{T}{p}
$$
最终得到
$$
\Delta U_{m} = L - p \cdot \frac{L}{T} \dv{T}{p} = L\left(1-\frac{p}{T} \dv{T}{p} \right)
$$
如果一相是气相，可看作理想气体，另一相是凝聚相，则此时 Clapeyron 方程可以变为
$$
\dv{p}{T} = \frac{L}{T V^{g}_{m}} = \frac{L p}{R T^{2}}
$$
内能变换变为
$$
\Delta U_{m} = L \left(1 - \frac{p}{T} \cdot \frac{R T^{2}}{L p}\right) = L \left(1 - \frac{RT}{L}\right)
$$
3.10. 试证明, 相变潜热随温度的变化率为
$$
\dv{L}{T}=c_{p}^{\beta}-c_{p}^{\alpha}+\frac{L}{T}-\left[\left(\frac{\partial V_{m}^{\beta}}{\partial T}\right)_{p}-\left(\frac{\partial V_{m}^{\alpha}}{\partial T}\right)_{p}\right] \frac{L}{V_{m}^{\beta}-V_{m}^{\alpha}}
$$
如果 $\beta$ 相是气相, $\alpha$ 相是凝聚相, 试证明上式可简化为

$$
\dv{L}{T}=c_{p}^{\beta}-c_{p}^{\alpha}
$$
证明：

利用潜热的定义
$$
L = T (S_{m}^{\beta} - S_{m}^{\alpha}) = H_{m}^{\beta} - H_{m}^{\alpha}
$$
所以
$$
\begin{gathered}
\dv{L}{T} = \left(\pdv{H_{m}^{\beta}}{T}\right)_{p} + \left(\pdv{H_{m}^{\beta}}{p}\right)_{T} \dv{p}{T} - \left(\pdv{H_{m}^{\alpha}}{T}\right)_{p} - \left(\pdv{H_{m}^{\alpha}}{p}\right)_{T} \dv{p}{T} \\ =
c_{p}^{\beta} - c_{p}^{\alpha} + \left(V_{m}^{\beta} - V_{m}^{\alpha} + T \left(\pdv{V_{m}^{\alpha}}{T}\right)_{p} - T \left(\pdv{V_{m}^{\beta}}{T}\right)_{p}\right) \dv{p}{T}
\end{gathered}
$$
再带入 Clapeyron 方程
$$
\dv{p}{T} = \frac{L}{T (V_{m}^{\beta} - V_{m}^{\alpha})}
$$

$$
\begin{gathered}
\dv{L}{T} = c_{p}^{\beta} - c_{p}^{\alpha} + \left(V_{m}^{\beta} - V_{m}^{\alpha} + T \left(\pdv{V_{m}^{\alpha}}{T}\right)_{p} - T \left(\pdv{V_{m}^{\beta}}{T}\right)_{p}\right) \frac{L}{T (V_{m}^{\beta} - V_{m}^{\alpha})} \\ =
c_{p}^{\beta}-c_{p}^{\alpha}+\frac{L}{T}-\left[\left(\frac{\partial V_{m}^{\beta}}{\partial T}\right)_{p}-\left(\frac{\partial V_{m}^{\alpha}}{\partial T}\right)_{p}\right] \frac{L}{V_{m}^{\beta}-V_{m}^{\alpha}}
\end{gathered}
$$

如果 $\beta$ 相是气相， $\alpha$ 相是凝聚相，则上式可以变为
$$
\dv{L}{T} = c_{p}^{\beta}-c_{p}^{\alpha}+\frac{L}{T} - \left(\frac{\partial V_{m}^{\beta}}{\partial T}\right)_{p} \frac{L}{V_{m}^{\beta}}
$$
带入状态方程
$$
V_{m}^{\beta} = \frac{RT}{p}
$$

$$
\dv{L}{T} = c_{p}^{\beta}-c_{p}^{\alpha}+\frac{L}{T} - \frac{R}{p} \frac{L p}{RT} = c_{p}^{\beta}-c_{p}^{\alpha}
$$

3.13. 将范氏气体在不同温度下的等温线的极大点 $N$ 与极小点 $J$ 联起来, 可以得到一条曲线 $NCJ$, 如右图所示 (此处 $V_{\mathrm{m}}$ 为气体的摩尔体积)。
<img src="./Statistical Mechanics Homework.assets/image-20260311100008543.png" alt="image-20260311100008543" style="zoom:50%;" />

试证明这条曲线的方程为
$$
\mathrm{p} V_{\mathrm{m}}^{3}=a\left(V_{\mathrm{m}}-2 b\right)
$$

并说明这条曲线划分出来的三个区域Ⅰ、Ⅱ、Ⅲ的含义。

证明：

极值点具有性质
$$
\pdv{p}{V_{m}} = 0
$$
带入范式气体状态方程中
$$
\left(p + \frac{a}{V_{m}^{2}}\right) (V_{m} - b) = RT
$$
所以极值点满足
$$
\pdv{}{V_{m}} \left(\frac{RT}{V_{m} - b} - \frac{a}{V_{m}^{2}}\right) = - \frac{RT}{(V_{m} - b)^{2}} + \frac{2a}{V_{m}^{3}} = 0
$$
即
$$
p + \frac{a}{V_{m}^{2}} = \frac{2a}{V_{m}^{3}} (V_{m} - b)
$$

$$
p V_{m}^{3} = a V_{m} - 2ab
$$

**划分出的区域的含义**

图中区域Ⅰ中的状态相应于过热液体；区域 Ⅲ 中的状态相应于过饱和蒸气；区域Ⅱ中的状态是不能实现的，因为这些状态不满足平衡稳定性的要求。

3.20 试根据朗道自由能式导出单轴铁磁体的熵函数在无序相和有序相的表达式并证明熵函数在临界点是连续的。

Landau 自由能在临界点附近可以展开为
$$
F (T, M) = F_{0} (T) + \frac{1}{2} a (T) M^{2} + \frac{1}{4} b (T) M^{4}
$$
所以熵函数可以表示为
$$
S = - \left(\pdv{F}{T}\right)_{M} = - F'_{0} (T) - \frac{1}{2} a' (T) M^{2} - \frac{1}{4} b'(T) M^{4}
$$
所以临界点两侧的熵为
$$
\begin{gathered}
S (T) = - F'_{0} (T) \quad (T > T_{c}) \\
S (T) = - F'_{0} (T) + \frac{a}{b} a'(T) - \frac{a^{2}}{4 b^{2}} b'(T) \quad (T < T_{c})
\end{gathered}
$$
带入临界点附近 $a$ 和 $b$ 的行为
$$
\begin{gathered}
a (T) = a_{0} \frac{T - T_{c}}{T_{c}} \\
b (T) = b
\end{gathered}
$$
所以有序相中的熵函数为
$$
S (T) = - F'_{0} (T) + \frac{a_{0}}{b} \frac{T - T_{c}}{T_{c}} \frac{a_{0}}{T_{c}}
$$
在临界点处
$$
\frac{a_{0}}{b} \frac{T - T_{c}}{T_{c}} \frac{a_{0}}{T_{c}} = 0
$$
所以熵在临界点是连续的。

选做题: 假定朗道自由能写为
$$
G(T, m)=a(T)+\frac{1}{2} b(T) m^{2}+\frac{1}{3} c m^{4}+\frac{1}{4} d m^{6}
$$

其中, $d>0, c<0$。试证明这一体系有一级相变，并请计算相变潜热。

寻找极值点
$$
\begin{gathered}
\left(\pdv{G}{m}\right)_{T} = bm + \frac{4}{3} c m^{3} + \frac{3}{2} d m^{5} = 0 \\
\left(\pdv[2]{G}{m}\right)_{T} = b + 4 c m^{2} + \frac{15}{2} d m^{4} > 0
\end{gathered}
$$
对于一级相变，在临界点处序参量会发生跳变。考虑临界温度处相变前后的自由能
$$
G (T_{c}, 0) = G (T_{c}, m_{c})
$$
这给出了
$$
\frac{1}{2} b (T_{c}) m_{c}^{2} + \frac{1}{3} c m_{c}^{4} + \frac{1}{4} d m_{c}^{6} = 0
$$
所以可以解出
$$
m_{c} = \sqrt{- \frac{2c}{3d}}
$$
检查一下这是不是极小值
$$
\left(\pdv[2]{G}{m}\right)_{T_{c}} = b + 4 c m_{c}^{2} + \frac{15}{2} d m_{c}^{4}  = b - \frac{8 c^{2}}{3d} + \frac{10}{3} \frac{c^{2}}{d} = b + \frac{2}{3} \frac{c^{2}}{d} > 0
$$
很好是极小值，这说明存在序参量跳变的一级相变。求相变潜热
$$
L = - T_{c} \left. \left(\pdv{G}{T}\right)_{T_{c}} \right|_{m = m_{c}}^{m = 0} = - \frac{1}{2} T_{c} b'(T_{c}) \frac{2c}{3d} = - \frac{c T_{c} b'(T_{c})}{3d}
$$

## 第4次作业

### 补充题

已知几率分布
$$
\rho(x, y) d x d y \propto x y d x d y
$$
其中 $x$ 和 $y$ 的变化范围为 $0 \leq x \leq a, 0 \leq y \leq b$

#### a) 试将几率分布函数归一化

归一化条件
$$
\int_{0}^{b} \int_{0}^{a} N x y \, dx \, dy = 1
$$
计算积分
$$
\int_{0}^{a} x \, dx = \frac{a^{2}}{2}, \quad \int_{0}^{b} y \, dy = \frac{b^{2}}{2}, \quad \int_{0}^{b} \int_{0}^{a} x y \, dx \, dy = \frac{a^{2} b^{2}}{4}
$$
因此归一化常数
$$
N = \frac{4}{a^{2} b^{2}}
$$
归一化后的分布函数为
$$
\rho(x, y) \, dx \, dy = \frac{4}{a^{2} b^{2}} \, x y \, dx \, dy
$$

#### b) 求 $y$ 为任意值, 而 $x$ 在 $x$ 到 $x+d x$ 的几率。

对 $y$ 积分得到边缘分布
$$
\rho(x) \, dx = \int_{0}^{b} \rho(x, y) \, dy \, dx = \frac{4}{a^{2} b^{2}} \, x \, dx \int_{0}^{b} y \, dy = \frac{4}{a^{2} b^{2}} \cdot \frac{b^{2}}{2} \, x \, dx = \frac{2}{a^{2}} \, x \, dx
$$
因此几率为

$$
\rho(x) \, dx = \frac{2}{a^{2}} \, x \, dx, \quad 0 \leq x \leq a.
$$

#### 根据粒子的自旋, 对下列粒子进行分类, 即判断它们是玻色子还是费米子

${}^{12} \mathrm{C}$ 原子; ${}^{13} \mathrm{C}$ 原子; $\mathrm{H}_{2}$ 分子; $\mathrm{H}^{-}$离子; ${}^{3} \mathrm{He}$ 原子; ${}^{4} \mathrm{He}$ 原子; $\alpha$ 粒子; 正电子; ${}^{6} \mathrm{Li}^{-}$离子

|                   粒子                    |         总费米子数         |  自旋  |  分类  |
| :---------------------------------------: | :------------------------: | :----: | :----: |
|         $^{12}\mathrm{C}$ 原子          | 6质子 + 6中子 + 6电子 = 18 |   0    | 玻色子 |
|         $^{13}\mathrm{C}$ 原子          | 6质子 + 7中子 + 6电子 = 19 |  1/2   | 费米子 |
|          $\mathrm{H}_{2}$ 分子          |     2质子 + 2电子 = 4      | 0 或 1 | 玻色子 |
|          $\mathrm{H}^{-}$ 离子          |     1质子 + 2电子 = 3      |  1/2   | 费米子 |
|         $^{3}\mathrm{He}$ 原子          | 2质子 + 1中子 + 2电子 = 5  |  1/2   | 费米子 |
|         $^{4}\mathrm{He}$ 原子          | 2质子 + 2中子 + 2电子 = 6  |   0    | 玻色子 |
| $\alpha$ 粒子（$^{4}\mathrm{He}$ 核） |     2质子 + 2中子 = 4      |   0    | 玻色子 |
|                  正电子                   |     基本粒子，自旋 1/2     |  1/2   | 费米子 |
|       $^{6}\mathrm{Li}^{-}$ 离子        | 3质子 + 3中子 + 4电子 = 10 |   1    | 玻色子 |

#### 若粒子有两个能级，每个能级的简并度为4，设系统由4个费米子组成。问：系统可能出现哪几种分布？各分布出现的微观状态数是多少？那一种分布出现几率最大？请列表表示。

费米子遵守泡利不相容原理，每个量子态最多占据一个粒子。
可能分布：$n_{1}$（能级 $1$ 粒子数）和 $n_{2}$（能级 $2$ 粒子数），满足 $n_{1} + n_{2} = 4$，且 $n_{1}, n_{2} \leq 4$
微观状态数：$W = C(4, n_{1}) \times C(4, n_{2})$

| 分布 $(n_{1}, n_{2})$ | 微观状态数 $W$                           |
| :-----------------: | :----------------------------------------: |
| $(0, 4)$              | $C(4,0) \times C(4,4) = 1 \times 1 = 1$  |
| $(1, 3)$              | $C(4,1) \times C(4,3) = 4 \times 4 = 16$ |
| $(2, 2)$              | $C(4,2) \times C(4,2) = 6 \times 6 = 36$ |
| $(3, 1)$              | $C(4,3) \times C(4,1) = 4 \times 4 = 16$ |
| $(4, 0)$              | $C(4,4) \times C(4,0) = 1 \times 1 = 1$  |

总微观状态数：$1 + 16 + 36 + 16 + 1 = 70$
出现几率最大的分布是 $(2, 2)$，微观状态数为 $36$

#### 将上题的粒子换成玻色子，给出对应的结果。

玻色子不受泡利不相容原理限制，每个量子态可占据任意数量粒子。
微观状态数：$W = C(n_{1} + 4 - 1, n_{1}) \times C(n_{2} + 4 - 1, n_{2}) = C(n_{1} + 3, n_{1}) \times C(n_{2} + 3, n_{2})$

| 分布 $(n_{1}, n_{2})$ | 微观状态数 $W$                              |
| :-----------------: | :-------------------------------------------: |
| $(0, 4)$              | $C(3,0) \times C(7,4) = 1 \times 35 = 35$   |
| $(1, 3)$              | $C(4,1) \times C(6,3) = 4 \times 20 = 80$   |
| $(2, 2)$              | $C(5,2) \times C(5,2) = 10 \times 10 = 100$ |
| $(3, 1)$              | $C(6,3) \times C(4,1) = 20 \times 4 = 80$   |
| $(4, 0)$              | $C(7,4) \times C(3,0) = 35 \times 1 = 35$   |

总微观状态数：$35 + 80 + 100 + 80 + 35 = 330$
出现几率最大的分布是 $(2, 2)$，微观状态数为 $100$

## 第5次作业

6.6 设系统含有两种粒子, 其粒子数分别为 $N$ 和 $N'$, 粒子间的相互作用很弱, 可以看作是近独立的, 试计算平衡状态下两种粒子的最概然分布（分别就三种情况进行计算：经典粒子，玻色子，费米子）。并根据热力学第零定律讨论分布中的什么参数和温度对应。

设第一种粒子的能级为 $\varepsilon_{l}$，简并度为 $\omega_{l}$；第二种粒子的能级为 $\varepsilon_{m}'$，简并度为 $\omega_{m}'$。分布记为 $\{a_{l}\}$ 和 $\{a_{m}'\}$，满足约束
$$
\sum_{l} a_{l} = N, \quad \sum_{m} a_{m}' = N', \quad \sum_{l} \varepsilon_{l} a_{l} + \sum_{m} \varepsilon_{m}' a_{m}' = E
$$
通过最大化总微观状态数 $\Omega = \Omega_{1} \times \Omega_{2}$（或总熵 $S = k \ln \Omega$），引入拉格朗日乘子 $\alpha, \alpha', \beta$，可得最概然分布。

经典粒子

经典粒子服从玻尔兹曼统计，微观状态数为
$$
W_{1} = N! \prod_{l} \frac{\omega_{l}^{a_{l}}}{a_{l}!}, \quad W_{2} = N'! \prod_{m} \frac{\omega_{m}'^{a_{m}'}}{a_{m}'!}
$$
最大化 $\ln W_{1} + \ln W_{2}$，得到分布
$$
a_{l} = \omega_{l} e^{-\alpha - \beta \varepsilon_{l}}, \quad a_{m}' = \omega_{m}' e^{-\alpha' - \beta \varepsilon_{m}'}
$$
其中 $\alpha, \alpha'$ 由粒子数 $N, N'$ 确定，$\beta$ 为公共参数。

玻色子

玻色子服从玻色-爱因斯坦统计，微观状态数为
$$
W_{1} = \prod_{l} \frac{(\omega_{l} + a_{l} - 1)!}{a_{l}! (\omega_{l} - 1)!} \approx \prod_{l} \frac{(\omega_{l} + a_{l})!}{a_{l}! \omega_{l}!}, \quad W_{2} \approx \prod_{m} \frac{(\omega'_{m} + a'_{m})!}{a'_{m}! \omega'_{m}!}
$$
最大化后得分布
$$
a_{l} = \frac{\omega_{l}}{e^{\alpha + \beta \varepsilon_{l}} - 1}, \quad a_{m}' = \frac{\omega_{m}'}{e^{\alpha' + \beta \varepsilon_{m}'} - 1}
$$
其中 $\alpha, \alpha'$ 由粒子数确定，$\beta$ 公共。

费米子

费米子服从费米-狄拉克统计，微观状态数为
$$
W_{1} = \prod_{l} \frac{\omega_{l}!}{a_{l}! (\omega_{l} - a_{l})!}, \quad W_{2} = \prod_{m} \frac{\omega'_{m}!}{a'_{m}! (\omega'_{m} - a'_{m})!}
$$
最大化后得分布
$$
a_{l} = \frac{\omega_{l}}{e^{\alpha + \beta \varepsilon_{l}} + 1}, \quad a_{m}' = \frac{\omega_{m}'}{e^{\alpha' + \beta \varepsilon_{m}'} + 1}
$$
其中 $\alpha, \alpha'$ 由粒子数确定，$\beta$ 公共。热力学第零定律指出：处于热平衡的系统具有相同的温度。在上述分布中，拉格朗日乘子 $\beta$ 对两种粒子相同，所以和温度对应。

6.2 试证明对于一维自由粒子，在长度 $L$ 内，$\varepsilon$ 到 $\varepsilon+d\varepsilon$ 的能量范围内，量子态数为
$$
\mathrm{D}(\varepsilon) d \varepsilon=\frac{2 L}{h}\left(\frac{m}{2 \varepsilon}\right)^{1 / 2} \dd{\varepsilon}
$$

对于一维自由粒子，在周期性边界条件下动量量子化满足
$$
k_{n} = \frac{2 \pi}{L} n
$$
对应的能量是
$$
E_{n} = \frac{\hbar^{2} k_{n}^{2}}{2m} = \frac{n^{2} h^{2}}{2m L^{2}}
$$
此时在能量间隙之间，状态数为
$$
D(\varepsilon) \dd{\varepsilon} = 2 \cdot \frac{m L^{2}}{h^{2}} \sqrt{\frac{h^{2}}{2 m \varepsilon L^{2}}} \dd{\varepsilon} = \frac{2L}{h} \sqrt{\frac{m}{2 \varepsilon}} \dd{\varepsilon}
$$
其中因子 $2$ 来自两个方向的行波态。

6.3 试证明对于二维自由粒子，在长度 $L^{2}$ 内，$\varepsilon$ 到 $\varepsilon+d\varepsilon$ 的能量范围内，量子态数为
$$
\mathrm{D}(\varepsilon) \dd{\varepsilon} = \frac{2 \pi L^{2}}{h^{2}} m \dd{\varepsilon}
$$

此时周期性边界条件带来的动量量子化是
$$
k_{x} = \frac{2 \pi}{L} n_{x}, \quad k_{y} = \frac{2 \pi}{L} n_{y}
$$
对应的能量是
$$
E = \frac{h^{2}}{2m L^{2}} (n_{x}^{2} + n_{y}^{2})
$$
等能面为球面，所以单位能量对应的量子态数为
$$
D (\varepsilon)\dd{\varepsilon} = L^{2} \frac{2 \pi p \dd{p}}{h^{2}} = \frac{2 \pi L^{2}}{h^{2}} m \dd{\epsilon}
$$
6.4 在极端相对论情形下，粒子的能量动量关系为 $\varepsilon=c p$, 试求在体积 $V$ 内，$\varepsilon$ 到 $\varepsilon + \dd{\varepsilon}$ 的能量范围内三维粒子的量子态数。

此时等能面仍然为球面，所以量子态数依旧可以表示为
$$
D (\varepsilon) \dd{\varepsilon} = V \frac{4 \pi p^{2} \dd{p}}{h^{3}} = V \frac{4 \pi}{h^{3} c^{3}} \varepsilon^{2} \dd{\varepsilon}
$$

## 第6次作业

7.11 表面活性物质的分子在液面上作二维自由运动, 可以看作二维气体。试写出在二维气体中分子的速度分布和速率分布, 并求平均速率 $\bar{v}$ 、最概然速率 $v_{\mathrm{m}}$ 和方均根速率 $v_{\mathrm{s}}$.

对于二维理想气体，首先利用总数的约束定出 $e^{\alpha}$
$$
Z_{t} (\beta, V) = \frac{1}{h^{3}} \int \dd{\omega} e^{- \beta \epsilon_{t}} = \frac{2 \pi m V}{\beta h^{3}}
$$
所以
$$
e^{\alpha} = \frac{2 \pi m V}{N \beta h^{3}}
$$
所以速度分布函数为
$$
f(v_{x}, v_{y}) \, dv_{x} \, dv_{y} =  \frac{m}{2\pi kT} \exp\left( -\frac{m(v_{x}^{2} + v_{y}^{2})}{2kT} \right) \, dv_{x} \, dv_{y}
$$
其中 $m$ 为分子质量，$k$ 为玻尔兹曼常数，$T$ 为温度。速率分布函数为

$$
g(v) \, dv = \frac{m}{kT} v \exp\left( -\frac{m v^{2}}{2kT} \right) \, dv
$$

平均速率 $\bar{v}$
$$
\bar{v} = \int_{0}^{\infty} v g(v) \, dv = \sqrt{\frac{\pi kT}{2m}}
$$

最概然速率 $v_{\mathrm{m}}$
$$
v_{\mathrm{m}} = \sqrt{\frac{kT}{m}}
$$

方均根速率 $v_{\mathrm{s}}$
$$
v_{\mathrm{s}} = \sqrt{\overline{v^{2}}} = \sqrt{\int_{0}^{\infty} v^{2} g(v) \, dv} = \sqrt{\frac{2kT}{m}}
$$

7.12 试根据麦氏速度分布律导出两分子的相对速度 $\mathbf{v}_{\mathrm{r}}=\mathbf{v}_{2}-\mathbf{v}_{1}$ 和相对速率 $v_{\mathrm{r}}=\left|\mathbf{v}_{\mathrm{r}}\right|$ 的概然分布, 并求相对速率的平均值 $\bar{v}_{\mathrm{r}}$.

由于两个速度分布是独立的，所以我们可以从联合分布出发
$$
\begin{gathered}
f(v_{1x}, v_{2x}, v_{1y}, v_{2y}) \dd{v}_{1x} \dd{v}_{2x} \dd{v}_{1y} \dd{v}_{2y} \dd{v}_{1z} \dd{v}_{2z} \\ = 
\left( \frac{m_{1}}{2\pi kT} \right)^{\frac{3}{2}} \left(\frac{m_{2}}{2\pi kT} \right)^{\frac{3}{2}} \exp\left( -\frac{m_{1} v_{1}^{2}}{2kT} \right) \exp\left( -\frac{m_{2} v_{2}^{2}}{2kT} \right) \dd{v}_{1x} \dd{v}_{2x} \dd{v}_{1y} \dd{v}_{2y} \dd{v}_{1z} \dd{v}_{2z}
\end{gathered}
$$
注意到体积元之间存在变换
$$
\dd{v}_{1x} \dd{v}_{2x} \dd{v}_{1y} \dd{v}_{2y} \dd{v}_{1z} \dd{v}_{2z} = \dd{v_{rx}} \dd{v}_{ry} \dd{v}_{rz} \dd{v_{comx}} \dd{v_{com y}} \dd{v}_{comz}
$$
其中 $\vec{v}_{r} = \vec{v}_{1} - \vec{v}_{2}$, $\vec{v}_{com} = \frac{m_{1}\vec{v}_{1} + m_{2}\vec{v}_{2}}{m_{1} + m_{2}}$，所以对于 $\vec{v}_{r}$ 和 $\vec{v}_{tot}$  之间的分布是
$$
f(v_{rx}, v_{ry}, v_{totx}, v_{toty}) = C \exp\left( -\frac{\mu v_{r}^{2} + m_{tot} v_{com}^{2}}{2kT} \right)
$$
其中约化质量 $\mu = \frac{m_{1}m_{2}}{m_{1} + m_{2}}$，利用独立性分离变量，然后归一化，得到
$$
f_{\mathrm{r}}(\mathbf{v}_{\mathrm{r}}) = \left( \frac{\mu}{2\pi kT} \right)^{\frac{3}{2}} \exp\left( -\frac{\mu v_{\mathrm{r}}^{2}}{2kT} \right)
$$

相对速率分布函数
$$
h(v_{\mathrm{r}}) = \sqrt{\frac{2}{\pi}} \frac{\mu^{\frac{3}{2}}}{(kT)^{\frac{3}{2}}} v_{\mathrm{r}}^{2} \exp\left( -\frac{\mu v_{\mathrm{r}}^{2}}{2kT} \right)
$$

相对速率的平均值 $\bar{v}_{\mathrm{r}}$
$$
\bar{v}_{\mathrm{r}} = \sqrt{\frac{8kT}{\pi \mu}} = \sqrt{\frac{16kT}{\pi m}} = \sqrt{2} \, \bar{v}
$$
其中 $\bar{v} = \sqrt{\frac{8kT}{\pi m}}$ 是单个分子的平均速率。

7.14 分子从器壁的小孔射出, 求在射出的分子束中, 分子的平均速率、方均根速率和平均能量。

分子从器壁小孔射出形成分子束。容器内分子服从麦克斯韦速度分布，射出分子的速度分布与 $v_{z} f(\mathbf{v})$ 成正比（$v_{z} > 0$，小孔法线沿 $z$ 轴）。分子束的速度分布

$$
f_{\text{beam}}(\mathbf{v}) = \sqrt{\frac{2\pi m}{kT}} \, v_{z} f(\mathbf{v}), \quad v_{z} > 0
$$
其中 
$$
f(\mathbf{v}) = \left( \frac{m}{2\pi kT} \right)^{\frac{3}{2}} \exp\left( -\frac{m v^{2}}{2kT} \right)
$$
平均速率 $\bar{v}_{\text{beam}}$
$$
\bar{v}_{\text{beam}} = \int v f_{\text{beam}}(\mathbf{v}) \, \dd[3]{v} = \sqrt{\frac{9\pi kT}{8m}}
$$

方均根速率 $v_{\text{s,beam}}$
$$
v_{\text{s,beam}} = \sqrt{\overline{v^{2}}_{\text{beam}}} = \sqrt{\int v^{2} f_{\text{beam}}(\mathbf{v}) \, \dd[3]{v}} = 2 \sqrt{\frac{kT}{m}}
$$

平均能量 $\bar{\epsilon}_{\text{beam}}$
$$
\bar{\epsilon}_{\text{beam}} = \frac{1}{2} m \overline{v^{2}}_{\text{beam}} = 2kT
$$

7.17 气柱的高度为 $H$, 处在重力场中, 试证明此气柱的内能和热容量为
$$
\begin{gathered}
U=U_{0}+N k T-\frac{N m g H}{\left(\exp \left(\frac{m g h}{k T}\right)-1\right)} \\
C_{V}=C_{V}^{0}+N k-\frac{N(m g H)^{2} \exp \left(\frac{m g h}{k T}\right)}{\left(\exp \left(\frac{m g h}{k T}\right)-1\right)^{2}} \frac{1}{k T^{2}}
\end{gathered}
$$

单粒子配分函数
$$
Z_{1} =  \frac{A}{h^{3}} (2\pi m kT)^{\frac{3}{2}} \int_{0}^{H} e^{-\frac{mgz}{kT}} \, dz = \frac{A}{h^{3}} (2\pi m kT)^{\frac{3}{2}} \cdot \frac{kT}{mg} \left(1 - e^{-\frac{mgH}{kT}} \right)
$$

$N$ 粒子配分函数
$$
Z = Z_{1}^{N}
$$

内能 $U$
$$
U = k T^{2} \left( \frac{\partial \ln Z}{\partial T} \right)_{V,N} = U_{0} + NkT - \frac{N mg H}{e^{\frac{mgH}{kT}} - 1}
$$
其中 $U_{0} = \frac{3}{2} NkT$ 为无重力场时单原子理想气体的内能。

定容热容量 $C_{V}$
$$
C_{V} = \left( \frac{\partial U}{\partial T} \right)_{V} = C_{V}^{0} + Nk - \frac{N (mgH)^{2} e^{\frac{mgH}{kT}}}{k T^{2} \left( e^{\frac{mgH}{kT}} - 1 \right)^{2}}
$$
其中 $C_{V}^{0}$ 为无重力场时的定容热容量。

## 第7次作业

7.20 试求爱因斯坦固体的熵。

爱因斯坦固体的配分函数为
$$
Z (\beta) = \frac{e^{- \frac{1}{2} \beta h \nu}}{1 - e^{- \beta h \nu}}
$$
所以熵是
$$
\begin{gathered}
S = 3N k_{B} \left(\ln Z - \beta \pdv{\ln Z}{\beta}\right) \\ = 
3N k_{B} \left(- \frac{1}{2} \beta h \nu - \ln (1 - e^{- \beta h \nu}) - \beta \frac{1 - e^{- \beta h \nu}}{e^{- \frac{1}{2} \beta h \nu}} \cdot \frac{- \frac{1}{2} h \nu e^{- \frac{1}{2} \beta h \nu} (1 - e^{- \beta h \nu}) - h \nu e^{- \frac{3}{2} \beta h \nu}}{(1 - e^{- \beta h \nu})^{2}}\right) \\ =
- 3N k_{B} \left(\frac{1}{2} \beta h \nu + \ln (1 - e^{- \beta h \nu}) - \beta h \nu \frac{e^{- \beta h \nu} + \frac{1}{2} (1 - e^{- \beta h \nu})}{1 - e^{- \beta h \nu}}\right) \\ = 
3N k_{B} \left(-\ln (1 - e^{- \beta h \nu}) + \beta h \nu \frac{1}{e^{\beta h \nu} - 1}\right)
\end{gathered}
$$
7.22 以 $n$ 表示晶体中原子的密度, 设原子的总角动量量子数为$1$, 磁矩为 $\mu$, 在外磁场 $B$ 下, 原子磁矩可以有三个不同的取向, 即平行、垂直、反平行于外磁场。假设磁矩之间的相互作用可以忽略, 试求在温度为 $T$ 时晶体的磁化强度 $M$, 以及 $M$ 在弱场高温极限和强场低温极限下的近似值。

利用玻尔兹曼统计，此时沿着磁场方向的平均磁矩为
$$
\bar{\mu} = \frac{\mu e^{\beta \mu B} - \mu e^{- \beta \mu B}}{e^{\beta \mu B} + 1 + e^{- \beta \mu B}}
$$
所以
$$
M (\beta) = n \mu \frac{2 \sinh (\beta \mu B)}{2 \cosh (\beta \mu B) + 1}
$$
弱场高温极限下，$\beta \mu B \ll 1$，所以此时上述磁化强度可以展开为
$$
M (\beta) \approx \frac{2}{3} n \beta \mu^{2} B
$$
在强场低温极限下，$\beta \mu B \gg 1$，所以此时上述磁化强度可以近似为
$$
M (\beta) \approx n \mu
$$

### 补充题

#### 顺磁固体 $\mathrm{Gd}_{2}\left(\mathrm{SO}_{4}\right)_{3} \cdot\left(\mathrm{H}_{2} \mathrm{O}\right)_{8}$ 的顺磁性来自 $\mathrm{Gd}^{3+}$ 离子, $\mathrm{Gd}^{3+}$ 离子基态的谱项为 ${}^{8} \mathrm{S}_{7 / 2}(L=0, J=S=7 / 2)$, 试求在高温和低温极限下 $\mathrm{Gd}_{2}\left(\mathrm{SO}_{4}\right)_{3} \cdot\left(\mathrm{H}_{2} \mathrm{O}\right)_{8}$ 的磁化率。

朗德因子 $g$ 的计算公式为

$$
g = 1 + \frac{J(J+1) + S(S+1) - L(L+1)}{2J(J+1)}
$$

代入 $L=0$, $S=J=7/2$, 得

$$
g = 1 + \frac{\frac{7}{2} \times \frac{9}{2} + \frac{7}{2} \times \frac{9}{2} - 0}{2 \times \frac{7}{2} \times \frac{9}{2}} = 2
$$

在高温极限下，居里常数 $C$ 为

$$
C = \frac{n g^{2} \mu_{0} \mu_{B}^{2} J(J+1)}{3 k_{B}}
$$

其中 $n$ 为 $\mathrm{Gd}^{3+}$ 离子数密度。代入 $g=2$, $J = \frac{7}{2}$, $J(J+1) = \frac{63}{4}$, 得

$$
C =  \frac{63 n \mu_{0} \mu_{B}^{2}}{3 k_{B}} = \frac{21 n \mu_{0} \mu_{B}^{2}}{k_{B}}
$$

零场磁化率服从居里定律

$$
\chi = \frac{C}{T}
$$

即

$$
\chi = \frac{21 n \mu_{0} \mu_{B}^{2}}{k_{B} T}
$$

在低温极限下
$$
m \approx n \mu_{B} g J
$$

$$
\chi = \frac{m}{H} \to 0
$$

#### 银原子蒸气置于磁场中，它的磁矩只能取两个方向，沿磁场方向与逆磁场方向。求：1. 磁矩 $\mu$ 沿磁场方向的分子占总数的成分比；2. 单个分子的平均磁矩。

磁矩 $\mu$ 沿着磁场方向的分子占总数的成分比为
$$
\frac{e^{\beta \mu B}}{e^{\beta \mu B} + e^{- \beta \mu B}}
$$
单个分子的平均磁矩为
$$
\bar{\mu} = \mu \tanh (\beta \mu B)
$$

## 第8次作业

8.4 试证明，在热力学极限下均匀的二维理想玻色气体不会发生玻色爱因斯坦凝聚。

对于二维理想玻色气体，其态密度可以写作
$$
g (\epsilon) \dd{\epsilon} = \frac{2 \pi V}{h^{2}} p \dd{p} = \frac{2 \pi m V}{h^{2}} \dd{\epsilon}
$$
所以粒子数为
$$
\dd{N} = \frac{2 \pi m V}{h^{2}} \int_{0}^{\infty} \frac{\dd{\epsilon}}{e^{\beta(\epsilon - \mu)} - 1}
$$
临界温度由以下积分确定
$$
T_{c} = \frac{n h^{2}}{2 \pi m k_{B}} \frac{1}{\int_{0}^{\infty} \frac{\dd{x}}{e^{x} - 1}}
$$
我们发现分母上的积分是发散的，所以对于二维理想玻色气体，它的临界温度 $T_{c} \to 0$，也就是说，对于任何有限温度的二维理想玻色气体，它不会出现化学势趋近于 $0$ 的情况，也不会出现大量粒子聚集在基态的情况。

8.5 约束在磁光陷阱中的理想原子气体，在三维谐振势场
$$
V = \frac{1}{2} m \left(\omega_{x} x^{2}+\omega_{y} y^{2}+\omega_{z} z^{2}\right)
$$

内运动，如果原子是玻色子，试证明: $T \leq T_{c}$ 时, 将有宏观量级的原子凝聚在能量为

$$
\varepsilon_{0}=\frac{\hbar}{2}\left(\omega_{x}+\omega_{y}+\omega_{z}\right)
$$

的基态。在 $N \rightarrow \infty, \bar{\omega} \rightarrow 0, N \bar{\omega}^{3}$ 保持有限的热力学极限下, 临界温度 $\mathrm{T}_{\mathrm{c}}$ 由下式确定

$$
N = 1.202 \times\left(\frac{k_{B} T_{c}}{\hbar \bar{\omega}}\right)^{3}
$$

其中 $\bar{\omega}=\left(\omega_{x} \omega_{y} \omega_{z}\right)^{1 / 3}$，温度为 $T$ 时, 凝聚在基态的原子数 $N_{0}$ 与总原子数 $N$ 之比为

$$
\frac{N_{0}}{N}=1-\left(\frac{T}{T_{c}}\right)^{3}
$$

证明：

对于三维谐振势场中的粒子，其分布满足
$$
a_{i} = \frac{\omega_{i}}{e^{\alpha + \beta (\epsilon_{k} + V (x))} - 1}
$$
注意到在这种谐振子势场中，粒子的能级是分立的，可以用
$$
\epsilon(n_{x}, n_{y}, n_{z}) = \hbar \omega_{x} (n_{x} + \frac{1}{2}) + \hbar \omega_{y} (n_{y} + \frac{1}{2}) + \hbar \omega_{z} (n_{z} + \frac{1}{2})
$$
来确定，所以此时粒子数为
$$
N = \sum_{n_{x}, n_{y}, n_{z}} \frac{1}{e^{\beta(\epsilon(n_{x}, n_{y}, n_{z}) - \mu)} - 1}
$$
记
$$
\epsilon_{0} = \frac{\hbar}{2} (\omega_{x} + \omega_{y} + \omega_{z})
$$
在临界温度以下，$\mu \to \epsilon_{0}^{-}$，此时激发态的粒子数可以表示为
$$
N = \sum_{n_{x}, n_{y}, n_{z}} \frac{1}{e^{\beta \hbar (n_{x} \omega_{x} + n_{y} \omega_{y} + n_{z} \omega_{z})} - 1}
$$
对于稠密的情况，进行积分近似
$$
\begin{gathered}
N \approx \int \dd{n}_{x} \int \dd{n}_{y} \int \dd{n}_{z} \frac{1}{e^{\beta \hbar(n_{x} \omega_{x} + n_{y} \omega_{y} + n_{z} \omega_{z})} - 1} \\ =
\frac{1}{(\beta\hbar)^{3} \omega_{x} \omega_{y} \omega_{z}} \int_{0}^{\infty} \dd{x} \int_{0}^{\infty} \dd{y} \int_{0}^{\infty} \dd{z} \frac{1}{e^{x + y + z} - 1}  = \frac{\zeta(3)}{(\beta\hbar)^{3} \omega_{x} \omega_{y} \omega_{z}}
\end{gathered}
$$
所以
$$
N \approx 1.202 \times \left(\frac{k_{B} T}{\hbar \bar{\omega}}\right)^{3}
$$
其中
$$
\bar{\omega}=\left(\omega_{x} \omega_{y} \omega_{z}\right)^{1 / 3}
$$

而临界温度应该用
$$
N = 1.202 \times \left(\frac{k_{B} T_{c}}{\hbar \bar{\omega}}\right)^{3}
$$
确定。在温度低于临界温度的时候，基态个数为
$$
N_{0} = N \left(1 - \left(\frac{T}{T_{c}}\right)^{3}\right)
$$
所以
$$
\frac{N_{0}}{N}=1-\left(\frac{T}{T_{c}}\right)^{3}
$$
8.6 承前8.5题，如果 $\omega_{z} \gg \omega_{x}, \omega_{y}$，则在 $kT \ll \hbar \omega_{z}$ 的情形下，原子在 $z$ 方向的运动将冻结在基态作零点振动，于是形成二维气体。试证明 $T \leq T_{c}$ 时原子的二维运动中将有宏观量级的原子凝聚在能量为 $\varepsilon_{0}=\frac{\hbar}{2}(\omega_{x}+\omega_{y})$ 的基态。在 $N\rightarrow\infty$，$\overline{\omega}\rightarrow0$，$N\overline{\omega}^{3}$ 保持有限的热力学极限下，临界温度 $T_{c}$ 由下式确定
$$
\begin{aligned} N=1.645\times\left(\frac{k_{B} T_{c}}{\hbar\overline{\omega}}\right)^{2} \end{aligned}
$$

其中 $\overline{\omega}=(\omega_{x}\omega_{y})^{1/2}$。温度为 $T$ 时，凝聚在基态的原子数 $N_{0}$ 与总原子数 $N$ 之比为

$$
\begin{aligned} \frac{N_{0}}{N}=1-\left(\frac{T}{T_{c}}\right)^{2} \end{aligned}
$$

重复一遍上一题的计算，把维度改成 $2$ 维，此时能级的表达式为
$$
\epsilon(n_{x}, n_{y}) = \hbar \omega_{x} (n_{x} + \frac{1}{2}) + \hbar \omega_{y} (n_{y} + \frac{1}{2})
$$
所以此时在临界温度以下，激发态粒子数为
$$
\begin{gathered}
N = \int \dd{n}_{x} \int \dd{n}_{y} \frac{1}{e^{\beta \hbar (n_{x} \omega_{x} + n_{y} \omega_{y})} - 1} \\ =
\frac{1}{\beta^{2} \hbar^{2} \omega_{x} \omega_{y}} \int_{0}^{\infty} \dd{x} \int_{0}^{\infty} \dd{y} \frac{1}{e^{x + y} - 1} \approx \frac{1.645}{\beta^{2} \hbar^{2} \omega_{x} \omega_{y}}
\end{gathered}
$$
记 $\bar{\omega} = \sqrt{\omega_{x} \omega_{y}}$ ，则此时确定临界温度的表达式为
$$
N = 1.645 \times \left(\frac{k_{B} T_{c}}{\hbar \bar{\omega}}\right)^{2}
$$
在临界温度以下时，基态的粒子数可以表示为
$$
N_{0} = N \left(1 - \left(\frac{T}{T_{c}}\right)^{2}\right)
$$
所以
$$
\frac{N_{0}}{N} = 1 - \left(\frac{T}{T_{c}}\right)^{2}
$$
8.7 计算温度为 $T$ 时，在体积 $V$ 内光子气体的平均总光子数，并据此估算

(1) 温度为1000K的平均辐射。

(2) 温度为3K的宇宙背景辐射中光子的数密度。

光子气体的平均总光子数为
$$
\bar{N} = g_{s} \frac{4 \pi V}{c^{3}} \int_{0}^{\infty} \frac{\nu^{2}}{e^{\beta h \nu} - 1} \dd{\nu} = \frac{2\zeta(3)V}{\pi^{2}} \left( \frac{k_{B}T}{\hbar c} \right)^{3}
$$

其中 $\zeta(3) \approx 1.2020569$。数密度为
$$
n = \frac{\bar{N}}{V} = \frac{2\zeta(3)}{\pi^{2}} \left( \frac{k_{B} T}{\hbar c} \right)^{3}
$$

代入常数 $k_{B} = 1.380649 \times 10^{-23} \, \text{J/K}$，$\hbar = 1.0545718 \times 10^{-34} \, \text{J·s}$，$c = 2.99792458 \times 10^{8} \, \text{m/s}$，计算得
$$
\frac{k_{B}}{\hbar c} \approx 436.693 \, \text{m}^{-1} \cdot \text{K}^{-1}
$$

(1) 当 $T = 1000 \, \text{K}$ 时
$$
n = \frac{2\zeta(3)}{\pi^{2}} \left(\frac{k_{B}T}{\hbar c} \right)^{3} \approx 0.243693 \times (436.693 \times 1000)^{3} \approx 2.03 \times 10^{16} \, \text{m}^{-3}
$$

此时辐射通量密度为
$$
J = \sigma T^{4} = \frac{2 \pi^{5} k_{B}^{4}}{15 h^{3} c^{2}} T^{4} \approx 56.7 \mathrm{kW}/\text{m}^{2}
$$

(2) 当 $T = 3 \, \text{K}$ 时
$$
n \approx 0.243693 \times (436.693 \times 3)^{3} \approx 5.48 \times 10^{8} \, \text{m}^{-3}
$$

8.9 按波长分布太阳辐射能的极大值在$\lambda \approx 480 \mathrm{nm}$ 处。假设太阳是黑体，求太阳表面的温度。

带入
$$
\lambda_{m} T \approx \frac{h c}{4.96k}
$$
则
$$
T = \frac{b}{\lambda_{\text{max}}} = \frac{2.898 \times 10^{-3}}{4.80 \times 10^{-7}} \approx 6037 \, \text{K}.
$$
故太阳表面的温度约为 $6.0 \times 10^{3} \, \text{K}$

## 第9次作业

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

### 高温极限

先看高温极限。此时 $T \gg \theta_{D}$，也就是 $y_{D} \ll 1$，利用展开
$$
-\frac{x}{2} - \ln \left(1 - e^{-x}\right) = - \ln x - \frac{x^{2}}{24} + O(x^{4})
$$
代入积分，得到
$$
\ln Z \approx N \left[1 + 3\ln \left(\frac{T}{\theta_{D}}\right)\right] - \frac{3N}{40} \left(\frac{\theta_{D}}{T}\right)^{2}
$$
只保留主项时
$$
\ln Z \approx N \left[1 + 3 \ln \left(\frac{T}{\theta_{D}}\right)\right]
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
S \approx 3N k_{B} \left[\frac{4}{3} + \ln \left(\frac{T}{\theta_{D}}\right) + \frac{1}{40} \left(\frac{\theta_{D}}{T}\right)^{2}\right]
$$
只保留主项时
$$
S \approx 3N k_{B} \left[\frac{4}{3} + \ln \left(\frac{T}{\theta_{D}}\right)\right]
$$

### 低温极限

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

## 第10次作业

8.14 试求绝对零度下金属自由电子气体中电子的平均速率 $\bar{v}$

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

8.18 试求在极端相对论条件下，自由电子气体在 $0 \mathrm{K}$ 时的费米能量、内能和简并压。

极端相对论条件下，单个电子的能量可以写作
$$
\varepsilon = pc
$$
费米动量仍然由态数决定，所以
$$
p_{F} = \hbar (3\pi^{2}n)^{\frac{1}{3}}
$$
因此 $0\mathrm{K}$ 时的费米能量为
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
由于$\varepsilon_{F}\propto n^{\frac{1}{3}}\propto V^{-\frac{1}{3}}$，内能满足$U\propto V^{-\frac{1}{3}}$，于是简并压为
$$
P = -\left(\pdv[]{U}{V}\right)_{N} = \frac{1}{3}\frac{U}{V}
$$
也就是
$$
P = \frac{1}{4}n\varepsilon_{F} = \frac{c p_{F}^{4}}{12\pi^{2}\hbar^{3}}
$$

8.19 假设自由电子在二维平面上运动，面密度为 $n$，试求 $0 \mathrm{K}$ 时二维电子气体的费米能量、内能和简并压。

设二维面积为 $A$，在 $0\mathrm{K}$ 时，动量平面内从 $p=0$ 到 $p=p_{F}$ 的态全部被填满，所以
$$
N = 2 \frac{A}{h^{2}}\pi p_{F}^{2}
$$
因此
$$
n = \frac{N}{A} = \frac{p_{F}^{2}}{2\pi\hbar^{2}}
$$
费米动量和费米能量分别为
$$
\begin{gathered}
p_{F} = \hbar (2\pi n)^{\frac{1}{2}} \\
\varepsilon_{F} = \frac{p_{F}^{2}}{2m} = \frac{\pi\hbar^{2}n}{m}
\end{gathered}
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
其中 $k_{B}T_{F}=\varepsilon_{F}=\mu(0)$，利用题目给出的热力学公式，并取 $T=0$ 时 $S=0$，有
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

8.24 关于原子核半径 $R$ 的经验公式给出$R = (1.3 \times 10^{-15}\mathrm{m}) \cdot A^{\frac{1}{3}}$，式中 $A$ 是原子核所含核子数。假设质子数和中子数相等，均为$A/2$，试计算二者在核内的密度 $n$，如果将核内的质子和中子看作简并费米气体，试求二者的 $\mu(0)$ 以及核子在核内的平均动能。核子质量 $m_{0} = 1.67 \times 10^{-27}\mathrm{kg}$

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
把质子和中子分别看作自旋为 $\frac{1}{2}$ 的简并费米气体，它们各自的费米动量为
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
$0\mathrm{K}$ 时非相对论费米气体的平均动能为
$$
\bar{\varepsilon} = \frac{3}{5}\varepsilon_{F}
$$
所以核子在核内的平均动能为
$$
\bar{\varepsilon} \approx 2.74 \times 10^{-12}\mathrm{J} \approx 17.1\mathrm{MeV}
$$

5.12 证明，在任意温度下电子气的顺磁化率由下式给出
$$
\chi = 2 \mu_{B}^{2} \int_{0}^{\infty} g'(\varepsilon) f(\varepsilon) \dd{\varepsilon}
$$

其中 $g(\varepsilon)$ 是不计自旋简并度时电子的每单位体积的态密度，并由上式导出 $T=0$ 时的顺磁化率，与非简并条件下的顺磁化率。

设外磁场为 $B$，对于磁矩平行和反平行于磁场的电子，能量分别移动 $\mp\mu_{B}B$，单位体积内两种取向的电子数为
$$
\begin{gathered}
n_{+} = \int_{0}^{\infty} g(\varepsilon) f(\varepsilon - \mu_{B}B)\dd{\varepsilon} \\
n_{-} = \int_{0}^{\infty} g(\varepsilon) f(\varepsilon + \mu_{B}B)\dd{\varepsilon}
\end{gathered}
$$
磁化强度为
$$
M = \mu_{B}(n_{+}-n_{-})
$$
在弱磁场下展开到 $B$ 的一阶
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
对上式作分部积分，并利用 $g(0)=0$ 以及 $f(\infty)=0$，得到
$$
\chi = 2\mu_{B}^{2}\int_{0}^{\infty}\dv[]{g}{\varepsilon}f(\varepsilon)\dd{\varepsilon} = 2\mu_{B}^{2}\int_{0}^{\infty}g'(\varepsilon)f(\varepsilon)\dd{\varepsilon}
$$
这就是题目要求的结果。在 $T=0$ 时，能量低于费米能量的态全部被占据，高于费米能量的态为空态，也就是

$$
\begin{gathered}
f(\varepsilon) = 1,\quad 0\leq \varepsilon < \varepsilon_{F} \\
f(\varepsilon) = 0,\quad \varepsilon > \varepsilon_{F}
\end{gathered}
$$
所以
$$
\chi(0) = 2\mu_{B}^{2}\int_{0}^{\varepsilon_{F}}g'(\varepsilon)\dd{\varepsilon} = 2\mu_{B}^{2}g(\varepsilon_{F})
$$
对三维自由电子气体
$$
g(\varepsilon) = \frac{1}{2\pi^{2}}\left(\frac{2m}{\hbar^{2}}\right)^{\frac{3}{2}}\varepsilon^{\frac{1}{2}}
$$
又因为
$$
n = \int_{0}^{\varepsilon_{F}}g(\varepsilon)\dd{\varepsilon} = \frac{2}{3}g(\varepsilon_{F})\varepsilon_{F}
$$
所以
$$
\chi(0) = \frac{3n\mu_{B}^{2}}{2\varepsilon_{F}}
$$
这就是 $0\mathrm{K}$ 时的泡利顺磁磁化率。在非简并条件下，费米分布可以近似为玻尔兹曼分布

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

## 第11次作业

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
\begin{gathered}
z_{A} = V\left(\frac{2\pi m_{A} k_{B}T}{h^{2}}\right)^{\frac{3}{2}} \\
z_{B} = V\left(\frac{2\pi m_{B} k_{B}T}{h^{2}}\right)^{\frac{3}{2}}
\end{gathered}
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
\begin{gathered}
S = k_{B}N_{A}\left\{\ln\left[\frac{V}{N_{A}}\left(\frac{2\pi m_{A} k_{B}T}{h^{2}}\right)^{\frac{3}{2}}\right]+\frac{5}{2}\right\} \\
+ k_{B}N_{B}\left\{\ln\left[\frac{V}{N_{B}}\left(\frac{2\pi m_{B} k_{B}T}{h^{2}}\right)^{\frac{3}{2}}\right]+\frac{5}{2}\right\}
\end{gathered}
$$
令
$$
\begin{gathered}
\lambda_{A} = \frac{h}{\sqrt{2\pi m_{A} k_{B}T}} \\
\lambda_{B} = \frac{h}{\sqrt{2\pi m_{B} k_{B}T}}
\end{gathered}
$$
化学势分别由
$$
\begin{gathered}
\mu_{A} = \left(\pdv[]{F}{N_{A}}\right)_{T,V,N_{B}} \\
\mu_{B} = \left(\pdv[]{F}{N_{B}}\right)_{T,V,N_{A}}
\end{gathered}
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
\begin{gathered}
U = \frac{f}{2}Nk_{B}T \\
C_{V} = \frac{f}{2}Nk_{B}
\end{gathered}
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
对于任意一对粒子，有
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

设各向同性情形下伊辛模型的哈密顿量为
$$
E = -\epsilon\sum_{\langle i,j\rangle}s_{i}s_{j} - \mu_{0} \mu H\sum_{i}s_{i}
$$
其中 $s_{i}=\pm 1$，$z$ 为每个格点的最近邻数。平均场近似下，用平均磁化强度
$$
\bar{S} = \langle s_{i}\rangle
$$
代替邻近自旋，于是等效磁场强度为
$$
\bar{H} = H + \frac{1}{\mu_{0} \mu} z \epsilon \bar{S}
$$
自洽方程为
$$
\bar{S} = \tanh (\beta z \epsilon \bar{S} + \beta \mu_{0} \mu H)
$$
在 $H = 0$ 时，临界温度由线性项决定，即
$$
\beta_{c} z \epsilon = 1
$$
所以
$$
k_{B}T_{c} = z \epsilon
$$

先求序参量的临界指数。令 $H = 0$，在 $T_{c}$ 附近 $\bar{S}$ 很小，因此
$$
\bar{S} = \tanh\left(\frac{T_{c}}{T} \bar{S} \right)
\approx \frac{T_{c}}{T} \bar{S} - \frac{1}{3}\left(\frac{T_{c}}{T} \bar{S} \right)^{3}
$$
当 $T<T_{c}$ 时，非零解满足
$$
\bar{S}^{2} \approx 3\frac{\frac{T_{c}}{T}-1}{\left(\frac{T_{c}}{T}\right)^{3}}
$$
在临界点附近可以化为
$$
\bar{S}^{2} \approx 3\frac{T_{c}-T}{T_{c}}
$$
所以
$$
\bar{S} \propto (1- \frac{T}{T_{c}})^{\frac{1}{2}}
$$
因此序参量临界指数为
$$
\beta = \frac{1}{2}
$$

再求磁化率指数。磁化率定义为
$$
\chi = \left(\pdv[]{M}{H}\right)_{H=0}
$$
对平均场方程求导，得到
$$
\chi = (1-\bar{S}^{2})\beta(z\epsilon\chi+1)
$$
也就是
$$
\chi = \frac{\beta(1 - \bar{S}^{2})}{1-\beta z \epsilon (1-\bar{S}^{2})}
$$
当 $T>T_{c}$ 时，$\bar{S} = 0$，所以
$$
\chi = \frac{\beta}{1-\beta z \epsilon}
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
\bar{S} = \tanh\left(\bar{S} + \frac{\mu_{0}\mu H}{k_{B}T_{c}}\right)
$$
展开到最低非线性阶，得到
$$
\bar{S} \approx \bar{S} + \frac{\mu_{0} \mu H}{k_{B}T_{c}}-\frac{1}{3} \bar{S}^{3}
$$
因此
$$
H \propto \bar{S}^{3}
$$
所以临界等温线指数为
$$
\delta = 3
$$

最后看热容量。平均场近似下，零场时相互作用能为
$$
U = -\frac{1}{2}Nz \epsilon \bar{S}^{2}
$$
当 $T>T_{c}$ 时，$\bar{S} = 0$，这部分热容量没有奇异贡献。当 $T<T_{c}$ 时，代入 $\bar{S}^{2} \approx 3(T_{c}-T)/T_{c}$，得到
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
\begin{gathered}
\alpha = 0 \\
\beta = \frac{1}{2} \\
\gamma = 1 \\
\delta = 3
\end{gathered}
$$
如果还把关联长度和临界关联函数的指数列入平均场结果，则有
$$
\begin{gathered}
\nu = \frac{1}{2} \\
\eta = 0
\end{gathered}
$$

## 第12次作业

9.14 试证明在巨正则系综理论中熵可表示为

$$
S = -k \sum_{N} \sum_{s} \rho_{Ns} \ln \rho_{Ns}
$$

其中 $\rho_{Ns} = \frac{1}{\Xi} e^{-\alpha N - \mu E_{s}}$ 是系统具有 $N$ 个粒子、处在状态 $s$ 的概率。

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
9.16 设单原子分子理想气体与固体吸附面接触达到平衡，被吸附的分子可以在吸附面上作二维运动，其能量为 $\frac{p^{2}}{2m} - \varepsilon_{0}$，束缚能 $\varepsilon_{0}$ 是
大于零的常量。试根据巨正则分布求吸附面上被吸附分子的面密度与气体温度和压强的关系。

首先写出该吸附系统的巨配分函数。设吸附面面积为 $A$，吸附分子数为 $N$ 时总能量为

$$
E_{N} = \sum_{i=1}^{N} \left( \frac{p_{xi}^{2}+p_{yi}^{2}}{2m} - \varepsilon_{0} \right)
$$

所以经典极限下的巨配分函数为

$$
\begin{aligned}
	\Xi
	&= \sum_{N=0}^{\infty} e^{-\alpha N} \frac{1}{N! h^{2N}}
	\int_{A} \dd[2N]{q} \int \dd[2N]{p}\,
	\exp\left[-\beta \sum_{i=1}^{N}\left(\frac{p_{xi}^{2}+p_{yi}^{2}}{2m}-\varepsilon_{0}\right)\right] \\
	&= \sum_{N=0}^{\infty} \frac{1}{N!}
	\left[ e^{-\alpha+\beta \varepsilon_{0}} \frac{A}{h^{2}}
	\int \dd[2]{p}\, e^{-\beta p^{2}/2m} \right]^{N} 
\end{aligned}
$$

二维动量积分为

$$
\int \dd[2]{p}\, e^{-\beta p^{2}/2m}
= \int_{0}^{2\pi} \dd{\theta} \int_{0}^{\infty} p e^{-\beta p^{2}/2m}\dd{p}
= \frac{2\pi m}{\beta}
$$

因此

$$
\Xi
= \sum_{N=0}^{\infty} \frac{1}{N!}
\left( e^{-\alpha+\beta \varepsilon_{0}} \frac{A}{h^{2}} \frac{2\pi m}{\beta} \right)^{N}
= \exp\left( e^{-\alpha+\beta \varepsilon_{0}} \frac{A}{h^{2}} \frac{2\pi m}{\beta} \right)
$$

由此吸附面上的平均分子数为

$$
\bar{N} = -\pdv{\ln \Xi}{\alpha}
= e^{-\alpha+\beta \varepsilon_{0}} \frac{A}{h^{2}} \frac{2\pi m}{\beta}
$$

面密度为

$$
n_{s} = \frac{\bar{N}}{A}
= e^{-\alpha+\beta \varepsilon_{0}} \frac{2\pi m}{\beta h^{2}}
$$

平衡时吸附相和气相的化学势相同，即 $e^{-\alpha}=e^{\beta \mu}$。对三维单原子理想气体，经典极限下

$$
p = \frac{kT}{\lambda^{3}} e^{\beta \mu},
\qquad
\lambda = \frac{h}{\sqrt{2\pi m kT}}
$$

因此

$$
n_{s} = \frac{p\lambda}{kT} e^{\varepsilon_{0}/kT}
= \frac{p h}{\sqrt{2\pi m}\,(kT)^{3/2}} e^{\varepsilon_{0}/kT}
$$

9.19 光子气的 $\alpha = 0$，试证明

$$
\overline{(a_{i} - \bar{a}_{i})^{2}} = -\frac{1}{\beta} \frac{\partial \bar{a}_{i}}{\partial \varepsilon_{i}}
$$

从而证明

$$
\overline{(a_{i} - \bar{a}_{i})^{2}} = \bar{a}_{i} (1 + \bar{a}_{i})
$$
若要求证

$$
\overline{(a_{i}-\bar{a}_{i})^{2}}=\bar{a}_{i}(1+\bar{a}_{i})
$$

则

$$
a_{i}
$$

应理解为某一个单光子量子态的占有数，也就是先取简并度

$$
\omega_{i}=1
$$

的情况。对单个量子态，光子数可以取

$$
a_{i}=0,1,2,\cdots
$$

其巨配分函数为

$$
\Xi_{i}
=\sum_{a_{i}=0}^{\infty}e^{-a_{i}(\alpha+\beta\varepsilon_{i})}
=\frac{1}{1-e^{-\alpha-\beta\varepsilon_{i}}}
$$

平均占有数为

$$
\bar{a}_{i}
=\frac{1}{\Xi_{i}}\sum_{a_{i}=0}^{\infty}a_{i} e^{-a_{i}(\alpha+\beta\varepsilon_{i})}
=-\pdv{\ln \Xi_{i}}{\alpha}
$$

由于

$$
\pdv{\Xi_{i}}{\alpha}
=-\sum_{a_{i}=0}^{\infty}a_{i} e^{-a_{i}(\alpha+\beta\varepsilon_{i})}
$$

所以有

$$
\bar{a}_{i}=-\frac{1}{\Xi_{i}}\pdv{\Xi_{i}}{\alpha}
=-\pdv{\ln \Xi_{i}}{\alpha}
$$

同理，二次平均为

$$
\overline{a_{i}^{2}}
=\frac{1}{\Xi_{i}}\sum_{a_{i}=0}^{\infty}a_{i}^{2} e^{-a_{i}(\alpha+\beta\varepsilon_{i})}
=\frac{1}{\Xi_{i}}\pdv[2]{\Xi_{i}}{\alpha}
$$

又因为

$$
\frac{1}{\Xi_{i}}\pdv[2]{\Xi_{i}}{\alpha}
=
\pdv[2]{\ln \Xi_{i}}{\alpha}
+
\left(\pdv{\ln \Xi_{i}}{\alpha}\right)^{2}
$$

并且

$$
\pdv{\ln \Xi_{i}}{\alpha}=-\bar{a}_{i}
$$

所以

$$
\overline{a_{i}^{2}}
=
\pdv[2]{\ln \Xi_{i}}{\alpha}+\bar{a}_{i}^{2}
$$

因此涨落为

$$
\overline{(a_{i}-\bar{a}_{i})^{2}}
=\overline{a_{i}^{2}}-\bar{a}_{i}^{2}
=\pdv[2]{\ln \Xi_{i}}{\alpha}
$$

另一方面，既然

$$
\bar{a}_{i}=-\pdv{\ln \Xi_{i}}{\alpha}
$$

由于

$$
\pdv{\bar{a}_{i}}{\alpha}
=\frac{1}{\beta}\pdv{\bar{a}_{i}}{\varepsilon_{i}}
$$

所以

$$
\overline{(a_{i}-\bar{a}_{i})^{2}}
=-\frac{1}{\beta}\pdv{\bar{a}_{i}}{\varepsilon_{i}}
$$

对于光子气，光子数不守恒，因此

$$
\alpha=0
$$

于是

$$
\Xi_{i}
=\frac{1}{1-e^{-\beta\varepsilon_{i}}}
$$

并且

$$
\bar{a}_{i}
=-\pdv{\ln \Xi_{i}}{\alpha}\bigg|_{\alpha=0}
=\frac{1}{e^{\beta\varepsilon_{i}}-1}
$$

对能量求导，得到

$$
\pdv{\bar{a}_{i}}{\varepsilon_{i}}
= -\frac{\beta e^{\beta\varepsilon_{i}}}{(e^{\beta\varepsilon_{i}}-1)^{2}}
$$

所以

$$
\overline{(a_{i}-\bar{a}_{i})^{2}}
=-\frac{1}{\beta}\pdv{\bar{a}_{i}}{\varepsilon_{i}}
=\frac{e^{\beta\varepsilon_{i}}}{(e^{\beta\varepsilon_{i}}-1)^{2}}
$$

又因为

$$
\bar{a}_{i}
=\frac{1}{e^{\beta\varepsilon_{i}}-1}
$$

所以

$$
1+\bar{a}_{i}
=1+\frac{1}{e^{\beta\varepsilon_{i}}-1}
=\frac{e^{\beta\varepsilon_{i}}}{e^{\beta\varepsilon_{i}}-1}
$$

因此

$$
\bar{a}_{i}(1+\bar{a}_{i})
=\frac{1}{e^{\beta\varepsilon_{i}}-1}
\frac{e^{\beta\varepsilon_{i}}}{e^{\beta\varepsilon_{i}}-1}
=\frac{e^{\beta\varepsilon_{i}}}{(e^{\beta\varepsilon_{i}}-1)^{2}}
$$

于是

$$
\overline{(a_{i}-\bar{a}_{i})^{2}}
=\bar{a}_{i}(1+\bar{a}_{i})
$$

## 第13次作业

9.4 设分子碰撞方向 $\mathbf{n}$ 平行于 $x$ 轴，试证明 $d\mathbf{v} d\mathbf{v}_{1} = |J| d\mathbf{v}' d\mathbf{v}_{1}'$ 中的雅可比行列式 $J = -1$。

利用碰撞前后的分子速度关系

$$
\begin{gathered}
	\vec{v}^{\prime} = \vec{v} + \frac{2m_{2}}{m_{1} + m_{2}} ((\vec{v}_{1} - \vec{v}) \cdot \hat{n}) \hat{n} \\
	\vec{v}^{\prime}_{1} = \vec{v}_{1} - \frac{2m_{1}}{m_{1} + m_{2}} ((\vec{v}_{1} - \vec{v}) \cdot \hat{n}) \hat{n} \\
\end{gathered}
$$
所以对应的雅可比行列式为

$$
|J| = \left|\frac{\partial(v_{x}, v_{y}, v_{z}, v_{1x}, v_{1y}, v_{1z})}{\partial(v^{\prime}_{x}, v^{\prime}_{y}, v^{\prime}_{z}, v_{1}x^{\prime}, v_{1}y^{\prime}, v_{1}z^{\prime})}\right| = 
\begin{vmatrix}
\frac{m_{1}-m_{2}}{m_{1}+m_{2}} & 0 & 0 & \frac{2m_{2}}{m_{1}+m_{2}} & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
\frac{2m_{1}}{m_{1}+m_{2}} & 0 & 0 & \frac{m_{2}-m_{1}}{m_{1}+m_{2}} & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 1
\end{vmatrix} = -1
$$
