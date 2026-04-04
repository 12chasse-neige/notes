# 统计力学 第6次作业

Chasse_neige

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
f(v_{1x}, v_{2x}, v_{1y}, v_{2y}) \dd{v}_{1x} \dd{v}_{2x} \dd{v}_{1y} \dd{v}_{2y} \dd{v}_{1z} \dd{v}_{2z} \\ = 
\left( \frac{m_{1}}{2\pi kT} \right)^{\frac{3}{2}} \left(\frac{m_{2}}{2\pi kT} \right)^{\frac{3}{2}} \exp\left( -\frac{m_{1} v_{1}^{2}}{2kT} \right) \exp\left( -\frac{m_{2} v_{2}^{2}}{2kT} \right) \dd{v}_{1x} \dd{v}_{2x} \dd{v}_{1y} \dd{v}_{2y} \dd{v}_{1z} \dd{v}_{2z}
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
\bar{v}_{\text{beam}} = \int v f_{\text{beam}}(\mathbf{v}) \, d^{3v} = \sqrt{\frac{9\pi kT}{8m}}
$$

方均根速率 $v_{\text{s,beam}}$
$$
v_{\text{s,beam}} = \sqrt{\overline{v^{2}}_{\text{beam}}} = \sqrt{\int v^{2} f_{\text{beam}}(\mathbf{v}) \, d^{3v}} = 2 \sqrt{\frac{kT}{m}}
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
