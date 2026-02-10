# 电动力学 第4周作业

Chasse_neige

### 1. 相对论基本原理，洛伦兹变换

(a) 试证，四维速度 $U^i, U^4$ 与 $x^i, ict$ 具有相同变换关系.

证明：

$x^{\mu} x_{\mu} = s^{2}$ 为洛伦兹标量，$U^{\mu} U_{\mu} = \gamma^{2} (v^{2} - c^{2}) = -c^{2}$ 同为洛伦兹标量，所以二者协变。

(b) 试计算 $\sqrt{1 - \frac{v^2}{c^2}}$ 的变换.

从（a）问的结果可以得到，$\sqrt{1 - \frac{v^2}{c^2}} \mathrm{d} t$ 为洛伦兹标量。所以 $\frac{\sqrt{1 - \frac{v'^2}{c^2}}}{\sqrt{1 - \frac{v^2}{c^2}}} = \frac{\mathrm{d} t}{\mathrm{d} t'} = \frac{1}{\gamma_{r}(1 - \frac{\beta_{r}}{c} v_{x})}$ 其中r角标代表两个坐标系之间的相对速度。

(c) 一列“火车”静止在站台旁时，其长度与站台一样 $l = 8.64 \times 10^8$ 公里，现在此“火车”以 $\frac{4}{5}c$ 的速度自左向右通过站台，火车头尾 $A'$ 和 $B'$ 各有一只时钟。当火车头与站台左端 $A$ 相遇时，火车头和站台左端的时钟都指在零点（12点），问：

i. 这时火车尾 $B'$ 和站台右端 $B$ 的时钟是几点？

记 $\beta = \frac{v}{c} = \frac{4}{5}$， $\gamma = \frac{1}{\sqrt{1 - \beta^{2}}} = \frac{5}{3}$

地面系：$t_{B} = 12:00$    $t_{B'} = t_{A'} - \gamma \frac{\beta}{c} (-\frac{3}{5} l) = 12:38:24$

火车系：$t_{B'} = 12:00$    $t_{B} =  t_{A'} + \gamma \frac{\beta}{c} \frac{3}{5} l = 12:38:24$

ii. 当火车继续运行到火车头 $A'$ 与站台右端 $B$相重时，火车头尾和站台左右端的时钟各是几点？

注：以下计算均以$12:00$ 为时间零点，但是给出的最后数值结果均已加上 $12:00$。

在地面系中：$t_{A} = t_{B} = 13:00$    $t_{A'} = \gamma (t_{B} - \frac{\beta}{c} l) = 12:36$   $t_{B'} = \gamma (t_{B} - \frac{\beta}{c} \cdot 0.4 l) = 13:14:24$

在火车系中：$t_{A'} = t_{B'} = 12:36$    $t_{B} = 13:00$   $t_{A} = 12:00 + \frac{3}{5} \times 00:36 = 12:21:36$ 

### 2. 相对论的时空理论

(a) 书6.2，6.3，6.4，6.5

6.2 长度收缩问题

设有两根互相平行的尺，在各自静止的参考系中的长度均为 $l_0$，它们以相同速率 $v$ 相对于某一参考系运动，但运动方向相反，且平行于尺子。求站在一根尺上测量另一根尺的长度。

两尺的相对速度为$v_{r} = \frac{v + v}{1 + \frac{v^{2}}{c^{2}}}$

所以在一根尺子系中测量另一根尺子长度为：
$$
l = l_{0} \sqrt{1 - \frac{v_{r}^{2}}{c^{2}}} = l_0 \frac{1 - \frac{v^2}{c^2}}{1 + \frac{v^2}{c^2}}
$$
6.3 小球运动时间问题

静止长度为 $l_0$ 的车厢，以速度 $v$ 相对于地面运行，车厢的后壁以速度 $u_0$ 向前推出一个小球，求地面观察者看到小球从后壁到前壁的运动时间。

在地面系中求解该问题：

此时车厢长度为$l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}$ ，小球速度为 $\frac{u_{0} + v}{1 + \frac{u_{0} v}{c^{2}}}$ 。

所以运动时间为：
$$
\Delta t = \frac{l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}}{\frac{u_{0} + v}{1 + \frac{u_{0} v}{c^{2}}} - v} = \frac{l_0 \left(1 + \frac{u_0 v}{c^2}\right)}{u_0 \sqrt{1 - \frac{v^2}{c^2}}}
$$
6.4 光电照亮铁塔时刻差问题

一辆以速度 $v$ 运动的列车上的观察者，在经过某一高大建筑物时，看见其避雷针上跳起一脉冲电火花，电光迅速传播，先后照亮了铁路沿线上的两铁塔。求列车上观察者看到的两铁塔被电光照亮的时刻差。设建筑物及两铁塔都在一直线上，与列车前进方向一致。铁塔到建筑物的地面距离已知都是 $l_0$。

在列车系中考虑该问题，此时距离收缩为 $l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}$

在列车系中，两方向的时间分别为 $\frac{l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}}{c + v}$ 、$\frac{l_{0} \sqrt{1 - \frac{v^{2}}{c^{2}}}}{c - v}$

所以时间差为$\Delta t = \frac{2 v l_0}{c^2 \sqrt{1 - \frac{v^2}{c^2}}}$。

6.5 光信号传播时间问题

有一光源 S 与接收器 R 相对静止，距离为 $l_0$，S-R 装置浸在均匀无限的液体介质（静止折射率 $n$）中。试对下列三种情况计算光源发出讯号到接收器接到讯号所经历的时间。

（1）液体介质相对于 S-R 装置静止；
$$
\Delta t = \frac{n l_{0}}{c}
$$
（2）液体沿着 S-R 连线方向以速度 $v$ 流动；

根据速度合成： $c_{\text{地}} = \frac{\frac{c}{n} + v}{1 + \frac{v}{nc}}$
$$
\therefore \,\, \Delta t = \frac{l_{0} (1 + \frac{v}{nc})}{\frac{c}{n} + v}
$$
（3）液体垂直于 S-R 连线方向以速度 $v$ 流动。

在液体系中考虑该问题：

在液体系中，为了保证光线会由一点射向另一点，其垂直于液体流动方向的速度为 $\sqrt{\left(\frac{c}{n}\right)^2 - v^2}$

所以在液体系中，传播时间为 $\frac{l_{0}}{\sqrt{\left(\frac{c}{n}\right)^2 - v^2}}$

在地面系中，逆用时间膨胀公式，传播时间为 $\Delta t = \frac{l_0 \sqrt{1 - \frac{v^2}{c^2}}}{\sqrt{\left(\frac{c}{n}\right)^2 - v^2}}$

(b) 求证：若两事件间的间隔是类空间隔，则

i. 两事件之间无法建立联系.

证明：

两事件之间的间隔 $s^2 = (x_2 - x_1)^2 - (ct_2 - ct_1)^2 >0$为类空间隔，这意味着空间距离超过光在该时间间隔内能传播的距离，因此任何物质粒子或电磁波都无法在两事件之间传播，从而无法建立因果联系。

ii. 事件之间的时间次序不确定，存在一个参考系，在其中两事件同时发生.

证明：

考虑两事件在惯性系 S 中的坐标为 $(x_1, t_1)$ 和 $(x_2, t_2)$，类空间隔满足 $(x_2 - x_1)^2 > (ct_2 - ct_1)^2$。通过洛伦兹变换到另一惯性系 S'，变换关系为：
$$
x' = \gamma (x - vt)
$$

$$
t' = \gamma \left( t - \frac{vx}{c^2} \right)
$$

其中 $\gamma = \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}}$

两事件在 S' 系中的时间差为：
$$
\Delta t' = \gamma \left( \Delta t - \frac{v \Delta x}{c^2} \right)
$$
要使 $\Delta t' = 0$，需满足：
$$
\Delta t = \frac{v \Delta x}{c^2}
$$
由于 $\Delta x$ 和 $\Delta t$ 满足类空间隔条件，总能找到合适的 v 使得上式成立，即存在一个参考系 S'，在其中两事件同时发生。同时，由于类空间隔下不同参考系中时间次序可能改变，因此时间次序不确定。

iii. 事件之间的空间次序不会颠倒，不存在一个参考系，在其中两事件在同一地点发生.

证明：

对于空间次序，考虑两事件在 S 系中的空间顺序为 $x_1 < x_2$。在 S' 系中，空间坐标差为：
$$
\Delta x' = \gamma (\Delta x - v \Delta t)
$$
若存在参考系使 $\Delta x' = 0$，则需：
$$
\Delta x = v \Delta t
$$
代入类空间隔条件 $\Delta x^2 > (c \Delta t)^2$，得：
$$
v^2 \Delta t^2 > c^2 \Delta t^2 \implies v^2 > c^2
$$
这与 v 的物理意义（小于光速）矛盾，因此不存在这样的参考系。同时，由于 $\Delta x'$ 的符号由 $\Delta x - v \Delta t$ 决定，而类空间隔下无法使 $\Delta x'$ 改变符号，因此空间次序不会颠倒。

(c) 考虑三个事件，若已知第一个事件和第二个事件之间的间隔及第二个事件和第三个事件之间的间隔类型，能否知道第一个事件和第三个事件之间的间隔类型？请证明。

不能，构造反例如下：

考虑三个事件 A、B、C，A 和 B 为类空间隔，B 和 C 也为类空间隔，但 A 和 C 可能是类时间隔、类空间隔或类光间隔，具体取决于它们的坐标关系，以下讨论采取自然单位制。

设 A 在原点 $(0, 0)$，B 在 $(2, 1)$，C 在 $(4, 0)$。A 和 B 的间隔 $s_{AB}^2 = 4 - 1 = 3 > 0$（类空），B 和 C 的间隔 $s_{BC}^2 = 4 - 1 = 3 > 0$（类空），A 和 C 的间隔 $s_{AC}^2 = 16 - 0 = 16 > 0$（类空）。

改变坐标，C 改为 $(-1, -1)$，则 A 和 B 类空，B 和 C 间隔 $s_{BC}^2 = 9 - 4 = 5 > 0$（类空），但 A 和 C 的间隔 $s_{AC}^2 = 9 - 9 = 0$（类光）。

再改变坐标，C 改为 $(-1, 3)$，则 A 和 B 类空，B 和 C间隔 $s_{BC}^2 = 9 - 4 = 5 > 0$（类空），但 A 和 C 的间隔 $s_{AC}^2 = 1 - 9 = -8 < 0$（类时）。

因此，仅知道两对间隔类型，无法确定第三对的间隔类型。

### 3. 相对论理论的协变形式

(a)书6.11

6.11 在洛伦兹变换中，若定义快度 $y$ 为 $\tanh y=\beta$.

(1) 证明洛伦兹变换矩阵可写为
$$
a_{\mu\nu}=\begin{pmatrix}
\text{ch} y & 0 & 0 & i \text{sh} y \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
- i \text{sh} y & 0 & 0 & \text{ch} y
\end{pmatrix}
$$

证明：利用双曲函数的关系：$\cosh y = \frac{1}{\sqrt{1 - \tanh^{2} y}} = \frac{1}{\sqrt{1 - \beta^{2}}}$ ，$\sinh y = \sqrt{\cosh^{2} y - 1} = \frac{\beta}{\sqrt{1 - \beta^{2}}}$
$$
a_{\mu\nu}=\begin{pmatrix}
\text{ch} y & 0 & 0 & i \text{sh} y \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
- i \text{sh} y & 0 & 0 & \text{ch} y
\end{pmatrix}
=\begin{pmatrix}
\frac{1}{\sqrt{1 - \beta^{2}}} & 0 & 0 & i \frac{\beta}{\sqrt{1 - \beta^{2}}} \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
- i \frac{\beta}{\sqrt{1 - \beta^{2}}} & 0 & 0 & \frac{1}{\sqrt{1 - \beta^{2}}}
\end{pmatrix}
$$
就是洛伦兹变换矩阵的形式。

(2) 对应的速度合成公式
$$
\beta=\frac{\beta^{\prime}+\beta^{\prime\prime}}{1+\beta^{\prime}\beta^{\prime\prime}}
$$

可用快度表为 $y=y^{\prime}+y^{\prime\prime}$.

证明：改写为用快度表示的速度合成公式：
$$
\tanh y = \frac{\tanh y' + \tanh y''}{1 + \tanh y' \tanh y''} = \tanh (y' + y'')
$$
由于 $\tanh y$ 为关于 $y$ 的严格单调函数，所以上式等价于 $y=y^{\prime}+y^{\prime\prime}$。

(b) 试证，$n$ 阶张量收缩一次变成 $n - 2$ 阶张量.

证明：假设$n$ 阶张量 $T^{i_1 i_2 \cdots i_p}_{j_1 j_2 \cdots j_q}$，有 $p$ 个逆变指标和 $q$ 个协变指标。在坐标变换下，其分量变换为：
$$
T'^{i_1' i_2' \cdots i_p'}_{j_1' j_2' \cdots j_q'} = \frac{\partial x^{i_1'}}{\partial x^{i_1}} \frac{\partial x^{i_2'}}{\partial x^{i_2}} \cdots \frac{\partial x^{i_p'}}{\partial x^{i_p}} \frac{\partial x^{j_1}}{\partial x^{j_1'}} \frac{\partial x^{j_2}}{\partial x^{j_2'}} \cdots \frac{\partial x^{j_q}}{\partial x^{j_q'}} T^{i_1 i_2 \cdots i_p}_{j_1 j_2 \cdots j_q}
$$
考虑对其一组上下标进行缩并：
$$
T^{i_1 i_2 \cdots i_{k-1} i_{k+1} \cdots i_p}_{j_1 j_2 \cdots j_{l-1} j_{l+1} \cdots j_q} = \sum_{m} T^{i_1 i_2 \cdots i_{k-1} m i_{k+1} \cdots i_p}_{j_1 j_2 \cdots j_{l-1} m j_{l+1} \cdots j_q}
$$

 考虑缩并后的张量 $S^{i_1 i_2 \cdots i_{k-1} i_{k+1} \cdots i_p}_{j_1 j_2 \cdots j_{l-1} j_{l+1} \cdots j_q}$，其分量为：
$$
S^{i_1 i_2 \cdots i_{k-1} i_{k+1} \cdots i_p}_{j_1 j_2 \cdots j_{l-1} j_{l+1} \cdots j_q} = \sum_{m} T^{i_1 i_2 \cdots i_{k-1} m i_{k+1} \cdots i_p}_{j_1 j_2 \cdots j_{l-1} m j_{l+1} \cdots j_q}
$$
在坐标变换下，缩并后的张量的分量变换为：
$$
S'^{i_1' i_2' \cdots i_{k-1}' i_{k+1}' \cdots i_p'}_{j_1' j_2' \cdots j_{l-1}' j_{l+1}' \cdots j_q'} = \sum_{m'} \frac{\partial x^{i_1'}}{\partial x^{i_1}} \cdots \frac{\partial x^{i_{k-1}'}}{\partial x^{i_{k-1}}} \frac{\partial x^{i_{k+1}'}}{\partial x^{i_{k+1}}} \cdots \frac{\partial x^{i_p'}}{\partial x^{i_p}} \frac{\partial x^{j_1}}{\partial x^{j_1'}} \cdots \frac{\partial x^{j_{l-1}}}{\partial x^{j_{l-1}'}} \frac{\partial x^{j_{l+1}}}{\partial x^{j_{l+1}'}} \cdots \frac{\partial x^{j_q}}{\partial x^{j_q'}} T^{i_1 i_2 \cdots i_{k-1} m i_{k+1} \cdots i_p}_{j_1 j_2 \cdots j_{l-1} m j_{l+1} \cdots j_q}
$$
由于求和指标 $m$ 在变换前后保持一致，可以将求和与变换操作交换顺序，得到：
$$
S'^{i_1' i_2' \cdots i_{k-1}' i_{k+1}' \cdots i_p'}_{j_1' j_2' \cdots j_{l-1}' j_{l+1}' \cdots j_q'} = \frac{\partial x^{i_1'}}{\partial x^{i_1}} \cdots \frac{\partial x^{i_{k-1}'}}{\partial x^{i_{k-1}}} \frac{\partial x^{i_{k+1}'}}{\partial x^{i_{k+1}}} \cdots \frac{\partial x^{i_p'}}{\partial x^{i_p}} \frac{\partial x^{j_1}}{\partial x^{j_1'}} \cdots \frac{\partial x^{j_{l-1}}}{\partial x^{j_{l-1}'}} \frac{\partial x^{j_{l+1}}}{\partial x^{j_{l+1}'}} \cdots \frac{\partial x^{j_q}}{\partial x^{j_q'}} S^{i_1 i_2 \cdots i_{k-1} i_{k+1} \cdots i_p}_{j_1 j_2 \cdots j_{l-1} j_{l+1} \cdots j_q}
$$
这表明缩并后的张量 $S$ 仍然满足张量的变换规律，但其阶数为 $(p - 1) + (q - 1) = n - 2$。

