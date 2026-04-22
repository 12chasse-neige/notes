# 统计力学 第3次作业

Chasse_neige

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
\dv{L}{T} = \left(\pdv{H_{m}^{\beta}}{T}\right)_{p} + \left(\pdv{H_{m}^{\beta}}{p}\right)_{T} \dv{p}{T} - \left(\pdv{H_{m}^{\alpha}}{T}\right)_{p} - \left(\pdv{H_{m}^{\alpha}}{p}\right)_{T} \dv{p}{T} \\ =
c_{p}^{\beta} - c_{p}^{\alpha} + \left(V_{m}^{\beta} - V_{m}^{\alpha} + T \left(\pdv{V_{m}^{\alpha}}{T}\right)_{p} - T \left(\pdv{V_{m}^{\beta}}{T}\right)_{p}\right) \dv{p}{T}
$$
再带入 Clapeyron 方程
$$
\dv{p}{T} = \frac{L}{T (V_{m}^{\beta} - V_{m}^{\alpha})}
$$

$$
\dv{L}{T} = c_{p}^{\beta} - c_{p}^{\alpha} + \left(V_{m}^{\beta} - V_{m}^{\alpha} + T \left(\pdv{V_{m}^{\alpha}}{T}\right)_{p} - T \left(\pdv{V_{m}^{\beta}}{T}\right)_{p}\right) \frac{L}{T (V_{m}^{\beta} - V_{m}^{\alpha})} \\ =
c_{p}^{\beta}-c_{p}^{\alpha}+\frac{L}{T}-\left[\left(\frac{\partial V_{m}^{\beta}}{\partial T}\right)_{p}-\left(\frac{\partial V_{m}^{\alpha}}{\partial T}\right)_{p}\right] \frac{L}{V_{m}^{\beta}-V_{m}^{\alpha}}
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
<img src="./Statistical Mechanics Homework 3.assets/image-20260311100008543.png" alt="image-20260311100008543" style="zoom:50%;" />

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
S (T) = - F'_{0} (T) \quad (T > T_{c}) \\
S (T) = - F'_{0} (T) + \frac{a}{b} a'(T) - \frac{a^{2}}{4 b^{2}} b'(T) \quad (T < T_{c})
$$
带入临界点附近 $a$ 和 $b$ 的行为
$$
a (T) = a_{0} \frac{T - T_{c}}{T_{c}} \\
b (T) = b
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
\left(\pdv{G}{m}\right)_{T} = bm + \frac{4}{3} c m^{3} + \frac{3}{2} d m^{5} = 0 \\
\left(\pdv[2]{G}{m}\right)_{T} = b + 4 c m^{2} + \frac{15}{2} d m^{4} > 0
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
