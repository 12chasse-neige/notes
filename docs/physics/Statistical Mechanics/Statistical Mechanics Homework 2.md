# 统计力学 第2次作业

Chasse_neige

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
H (T, V) = U + pV = \int n C_{V} \dd{T} - \frac{n^{2} a}{V} + \left(\frac{n RT}{V - nb}  - \frac{n^{2} a}{V^{2}}\right) V +\text{Const.} \\ = 
\int n C_{V} \dd{T} - \frac{2 n^{2} a}{V} + \frac{nRTV}{V - nb} +\text{Const.}
$$

$$
\dd{S} = \frac{\dd{U} + p \dd{V}}{T} = n C_{V} \frac{\dd{T}}{T} + \frac{1}{T} \left(\frac{n^{2} a}{V^{2}} \dd{V} + \frac{n RT\dd{V}}{V - nb} - \frac{n^{2} a}{V^{2}} \dd{V}\right) \\ = 
n C_{V} \frac{\dd{T}}{T} + \frac{n R \dd{V}}{V - nb}
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
\Delta S = \frac{1}{T} \left(\int_{\frac{n_{1}RT}{p_{1}}}^{\frac{n_{1} RT}{p_{1}} + \frac{n_{2} RT}{p_{2}}} \frac{n_{1}RT}{V} \dd{V} + \int_{\frac{n_{2}RT}{p_{1}}}^{\frac{n_{1} RT}{p_{1}} + \frac{n_{2} RT}{p_{2}}} \frac{n_{2}RT}{V} \dd{V}\right) \\ = 
R \left(n_{1} \ln(\frac{n_{1} p_{2} + n_{2} p_{1}}{n_{1} p_{2}}) + n_{2} \ln(\frac{n_{1} p_{2} + n_{2} p_{1}}{n_{2} p_{1}})\right)
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

