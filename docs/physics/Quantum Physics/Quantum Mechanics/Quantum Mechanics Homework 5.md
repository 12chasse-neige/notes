# 量子力学 第5次作业

Chasse_neige

## 第五章 量子力学中的对称性与守恒量

5.1.1 自由运动粒子的角动量 $\vec{L}=(\hat{L}_{x}, \hat{L}_{y}, \hat{L}_{z})$ 是不是守恒量? 请证明你的结论。

自由运动粒子的角动量 $\vec{L} = (\hat{L}_{x}, \hat{L}_{y}, \hat{L}_{z})$ 是守恒量。 
自由粒子的 Hamiltonian 为 $\hat{H} = \frac{\hat{p}^{2}}{2m} = -\frac{\hbar^{2}}{2m} \nabla^{2}$，角动量算符分量为 $\hat{L}_{i} = \epsilon_{ijk} \hat{r}_{j} \hat{p}_{k}$，守恒量要求算符与 Hamiltonian 对易，即 $[\hat{L}_{i}, \hat{H}] = 0$，由于 $\hat{H}$ 正比于 $\hat{p}^{2}$，只需证明 $[\hat{L}_{i}, \hat{p}^{2}] = 0$，利用对易关系 $[\hat{L}_{i}, \hat{p}_{j}] = i\hbar \epsilon_{ijk} \hat{p}_{k}$，计算
$$
[\hat{L}_{i}, \hat{p}^{2}] = [\hat{L}_{i}, \sum_{j} \hat{p}_{j}^{2}] = \sum_{j} \left( \hat{p}_{j} [\hat{L}_{i}, \hat{p}_{j}] + [\hat{L}_{i}, \hat{p}_{j}] \hat{p}_{j} \right) = \sum_{j} \left( \hat{p}_{j} (i\hbar \epsilon_{ijk} \hat{p}_{k}) + (i\hbar \epsilon_{ijk} \hat{p}_{k}) \hat{p}_{j} \right)
$$
由于动量算符分量对易 $[\hat{p}_{j}, \hat{p}_{k}] = 0$，有 $\hat{p}_{j} \hat{p}_{k} = \hat{p}_{k} \hat{p}_{j}$，因此
$$
[\hat{L}_{i}, \hat{p}^{2}] = i\hbar \sum_{j,k} \epsilon_{ijk} (\hat{p}_{j} \hat{p}_{k} + \hat{p}_{k} \hat{p}_{j}) = 2i\hbar \sum_{j,k} \epsilon_{ijk} \hat{p}_{j} \hat{p}_{k}
$$
对于固定 $i$，$\epsilon_{ijk}$ 关于 $j,k$ 反对称，而 $\hat{p}_{j} \hat{p}_{k}$ 对称，求和为零，故 $[\hat{L}_{i}, \hat{p}^{2}] = 0$，因此 $[\hat{L}_{i}, \hat{H}] = 0$，角动量各分量均为守恒量。

5.1.2 求证 Feynman-Hellmann 定理: 若系统的能级和波函数分别为 $E_{n}$ 和 $\psi_{n}$，系统的 Hamiltonian 算符依赖于一个参数 $\lambda$，则 
$$
\frac{\partial E_{n}}{\partial \lambda}=\left(\psi_{n}, \frac{\partial \hat{H}}{\partial \lambda} \psi_{n}\right)=\int \psi_{n}^* \frac{\partial \hat{H}}{\partial \lambda} \psi_{n} \, \mathrm{d}\tau
$$
证明：
$$
E_{n} = \langle \psi_{n} | \hat{H} | \psi_{n} \rangle
$$
所以
$$
\pdv{E_{n}}{\lambda} = \langle \psi_{n} | \pdv{\hat{H}}{\lambda} | \psi_{n} \rangle + \langle \pdv{\psi_{n}}{\lambda} | \hat{H} | \psi_{n} \rangle + \langle \psi_{n} | \hat{H} | \pdv{\psi_{n}}{\lambda} \rangle
$$
注意到
$$
\langle \psi_{n} | \hat{H} | \pdv{\psi_{n}}{\lambda} \rangle = \langle \hat{H}^{\dagger} \psi_{n} | \pdv{\psi_{n}}{\lambda} \rangle = \langle \pdv{\psi_{n}}{\lambda} | \hat{H}^{\dagger} \psi_{n} \rangle^{*} = \langle \pdv{\psi_{n}}{\lambda} | \hat{H} \psi_{n} \rangle^{*}
$$

上述最后一步利用了 Hamiltonian 的厄米性。所以
$$
\pdv{E_{n}}{\lambda} = \langle \psi_{n} | \pdv{\hat{H}}{\lambda} | \psi_{n} \rangle + \langle \pdv{\psi_{n}}{\lambda} | \hat{H}  \psi_{n} \rangle + \langle \pdv{\psi_{n}}{\lambda} | \hat{H} \psi_{n} \rangle^{*} \\ =
\langle \psi_{n} | \pdv{\hat{H}}{\lambda} | \psi_{n} \rangle + E_{n}  \left( \langle \pdv{\psi_{n}}{\lambda} | \psi_{n} \rangle + \langle \pdv{\psi_{n}}{\lambda} | \psi_{n} \rangle^{*} \right) \\ =
\langle \psi_{n} | \pdv{\hat{H}}{\lambda} | \psi_{n} \rangle + E_{n}  \left( \langle \pdv{\psi_{n}}{\lambda} | \psi_{n} \rangle + \langle  \psi_{n} | \pdv{\psi_{n}}{\lambda} \rangle \right) = \langle \psi_{n} | \pdv{\hat{H}}{\lambda} | \psi_{n} \rangle
$$
5.2.1 一个带电量 $q$ 的粒子在匀强电场 $\vec{E}=|\vec{E}|\vec{e}_{z}$ 中运动，它有哪些基本的（函数独立的）守恒量? 请证明你的结论。

取电势 $\phi = -|\vec{E}| \hat{z}$，则 Hamiltonian 为
$$
\hat{H} = \frac{\hat{p}_{x}^{2} + \hat{p}_{y}^{2} + \hat{p}_{z}^{2}}{2m} - q |\vec{E}| \hat{z}
$$

1. 能量守恒：$\hat{H}$ 不显含时间，故 $\frac{\mathrm{d}\hat{H}}{\mathrm{d}t} = 0$

2. $\hat{p}_{x}$ 和 $\hat{p}_{y}$ 守恒：计算对易子
   $[\hat{p}_{x}, \hat{H}] = [\hat{p}_{x}, -q|\vec{E}| \hat{z}] = -q|\vec{E}| [\hat{p}_{x}, \hat{z}] = 0$，同理 $[\hat{p}_{y}, \hat{H}] = 0$，故 $\hat{p}_{x}, \hat{p}_{y}$ 与 $\hat{H}$ 对易，是守恒量。

3. $\hat{L}_{z}$ 守恒：$\hat{L}_{z} = x \hat{p}_{y} - y \hat{p}_{x}$
   $$
   [\hat{L}_{z}, \hat{H}] = [\hat{L}_{z}, \frac{\hat{p}^{2}}{2m}] + [\hat{L}_{z}, -q|\vec{E}| z]
   $$
   由 5.1.1 知 $[\hat{L}_{z}, \hat{p}^{2}] = 0$，故第一项为零。第二项
   $$
   [\hat{L}_{z}, z] = [x \hat{p}_{y} - y \hat{p}_{x}, z] = x [\hat{p}_{y}, z] - y [\hat{p}_{x}, z] + [x, z] \hat{p}_{y} - [y, z] \hat{p}_{x} = 0
   $$
   因此 $[\hat{L}_{z}, \hat{H}] = 0$，$\hat{L}_{z}$ 守恒。

这些守恒量函数独立，构成基本守恒量集。

5.2.2 (选做) 从变换不变性导致守恒定律的角度来看，几率守恒来自波函数的相位变换不变性。

(a) 证明：对作用量 $S=\int\left[\frac{\mathrm{i}\hbar}{2}\left(\Psi^* \left(\partial_{t} \Psi\right)-\left(\partial_{t} \Psi^*\right)\Psi\right)-\frac{\hbar^{2}}{2m}\nabla\Psi^* \cdot \nabla\Psi\right]\mathrm{d}^{3}\vec{r}\,\mathrm{d}t$ 应用最小作用量原理 $\delta S=0$（对 $\Psi, \Psi^*$ 做变分）得到 Schrödinger 方程 $\mathrm{i}\hbar \frac{\partial \Psi}{\partial t}+\frac{\hbar^{2}}{2m}\nabla^{2}\Psi=0$
$$
S = \int \dd[4]{x} \left[\frac{\mathrm{i}\hbar}{2}\left(\Psi^* \left(\partial_{t} \Psi\right)-\left(\partial_{t} \Psi^*\right)\Psi\right)-\frac{\hbar^{2}}{2m}\nabla\Psi^* \cdot \nabla\Psi\right]
$$

$$
\delta S = \int \dd[4]{x} \delta \Psi \left[- i \hbar(\partial_{t} \Psi^{*}) + \frac{\hbar^{2}}{2m} \nabla^{2} \Psi^{*}\right] = 0
$$

所以
$$
- i \hbar(\partial_{t} \Psi^{*}) + \frac{\hbar^{2}}{2m} \nabla^{2} \Psi^{*} = 0
$$
即
$$
\mathrm{i}\hbar \frac{\partial \Psi}{\partial t}+\frac{\hbar^{2}}{2m}\nabla^{2}\Psi=0
$$
(b) $\Psi, \Psi^*$ 的无穷小相位变换是 $\delta \Psi=\mathrm{e}^{\mathrm{i}\epsilon/\hbar}\Psi-\Psi\approx\frac{\mathrm{i}}{\hbar}\epsilon\Psi, \delta \Psi^*=-\frac{\mathrm{i}}{\hbar}\epsilon\Psi^*$，利用 $\mathcal{L}$ 在这个变换下的不变性和诺特定理导出几率守恒。

考虑拉格朗日量在这个变换下的行为
$$
\delta \mathcal{L} = \left(- i \hbar(\partial_{t} \Psi^{*}) + \frac{\hbar^{2}}{2m} \nabla^{2} \Psi^{*}\right) \delta \Psi + \left(\mathrm{i}\hbar \frac{\partial \Psi}{\partial t}+\frac{\hbar^{2}}{2m}\nabla^{2}\Psi\right) \delta \Psi^{*} \\ = 
\left(- i \hbar(\partial_{t} \Psi^{*}) + \frac{\hbar^{2}}{2m} \nabla^{2} \Psi^{*}\right) \frac{i}{\hbar} \epsilon \Psi - \left(\mathrm{i}\hbar \frac{\partial \Psi}{\partial t}+\frac{\hbar^{2}}{2m}\nabla^{2}\Psi\right) \frac{i}{\hbar} \epsilon \Psi^{*}
$$
所以由于无穷小变换下的拉格朗日量不变性
$$
- i \hbar \Psi \pdv{\Psi^{*}}{t} + \frac{\hbar^{2}}{2m} \Psi \nabla^{2} \Psi^{*} -\mathrm{i}\hbar \Psi^{*} \frac{\partial \Psi}{\partial t} - \frac{\hbar^{2}}{2m}\Psi^{*} \nabla^{2}\Psi = 0
$$

$$
- i \hbar \pdv{}{t} (\Psi^{*} \Psi) + \frac{\hbar^{2}}{2m} \nabla \cdot(\Psi \nabla \Psi^{*} - \Psi^{*} \nabla \Psi) = 0
$$

$$
\Rightarrow \nabla \cdot \left(\frac{i \hbar}{2m} (\Psi \nabla \Psi^{*} - \Psi^{*} \nabla \Psi）\right) + \pdv{}{t} (\Psi^{*} \Psi) = 0
$$

即流守恒方程。

5.3.1 设系统由 3 个全同粒子组成，单粒子有 3 个可能的不同状态 $\psi_{1}, \psi_{2}, \psi_{3}$。问系统有几个可能的状态? 它们的波函数如何用单粒子波函数构成? 分别讨论 (a) 玻色子；(b) 费米子；(c) 经典粒子。玻色子的波函数写出同时包含 $\psi_{1}, \psi_{2}, \psi_{3}$ 的情形作为例子就可以了，经典粒子的波函数就不用写了。

单粒子有三个不同状态 $\psi_{1}, \psi_{2}, \psi_{3}$，系统由三个全同粒子组成。

(a) 玻色子：波函数对称。状态由占据数 $(n_{1}, n_{2}, n_{3})$ 描述，$n_{i} \geq 0$，$n_{1}+n_{2}+n_{3}=3$
可能占据数

- $(3,0,0),\ (0,3,0),\ (0,0,3)$：各1种，共3种。

- $(2,1,0),\ (2,0,1),\ (1,2,0),\ (0,2,1),\ (1,0,2),\ (0,1,2)$：各1种，共6种。

- $(1,1,1)$：1种。 

总状态数：10种。 波函数构造示例

$$
\Psi = \frac{1}{\sqrt{6}} \sum_{P} \psi_{P[1]}(q_{1}) \psi_{P[2]}(q_{2}) \psi_{P[3]}(q_{3})
$$

其中 $P$ 为 $(1,2,3)$ 的排列。

(b) 费米子：波函数反对称。泡利不相容原理允许每个状态最多一个粒子，唯一占据数为 $(1,1,1)$，故只有1个状态。 
波函数为 Slater 行列式
$$
\Psi = \frac{1}{\sqrt{6}} \begin{vmatrix}
\psi_{1}(q_{1}) & \psi_{1}(q_{2}) & \psi_{1}(q_{3}) \\
\psi_{2}(q_{1}) & \psi_{2}(q_{2}) & \psi_{2}(q_{3}) \\
\psi_{3}(q_{1}) & \psi_{3}(q_{2}) & \psi_{3}(q_{3})
\end{vmatrix}
$$

(c) 经典粒子：粒子可区分，每个粒子独立选择状态，总状态数 $3^{3} = 27$。波函数无需对称化，为简单乘积形式。

5.3.2 把两个电子放入一维无限深势阱 $(0<x<L)$ 中，不考虑它们之间的相互作用。对于：(a) 两个电子都处在势阱的基态 $\psi_{0}(x)$；(b) 一个电子处在基态，另一个处在第一激发态 $\psi_{1}(x)$；分别写出它们可能的状态的波函数。可以用 $|\uparrow\rangle$ 和 $|\downarrow\rangle$ 分别代表电子的自旋向上和自旋向下。

不考虑相互作用，单粒子基态 $\psi_{0}(x) = \sqrt{\frac{2}{L}} \sin(\frac{\pi x}{L})$，第一激发态 $\psi_{1}(x) = \sqrt{\frac{2}{L}} \sin(\frac{2\pi x}{L})$。电子为费米子，总波函数反对称。

(a) 两个电子均处于基态：空间波函数相同，故自旋部分必须反对称以满足泡利原理。唯一可能为自旋单态
$$
\Psi(x_{1}, x_{2}) = \psi_{0}(x_{1})\psi_{0}(x_{2}) \cdot \frac{1}{\sqrt{2}} (\ket{\uparrow\downarrow} - \ket{\downarrow\uparrow})
$$

(b) 一个电子基态，另一个第一激发态：空间波函数可构造对称与反对称组合
$$
\psi_{S}(x_{1}, x_{2}) = \frac{1}{\sqrt{2}} [\psi_{0}(x_{1})\psi_{1}(x_{2}) + \psi_{1}(x_{1})\psi_{0}(x_{2})], \quad \psi_{A}(x_{1}, x_{2}) = \frac{1}{\sqrt{2}} [\psi_{0}(x_{1})\psi_{1}(x_{2}) - \psi_{1}(x_{1})\psi_{0}(x_{2})]
$$
总波函数反对称，有两种情况

1. 空间对称 $\psi_{S}$ 与自旋单态 $\chi_{00} = \frac{1}{\sqrt{2}} (\ket{\uparrow\downarrow} - \ket{\downarrow\uparrow})$ 结合
   $$
   \Psi_{1} = \psi_{S}(x_{1}, x_{2}) \cdot \chi_{00}
   $$

2. 空间反对称 $\psi_{A}$ 与自旋三重态（对称）结合，三重态有三个
   $$
   \Psi_{2} = \psi_{A}(x_{1}, x_{2}) \cdot \ket{\uparrow\uparrow}, \quad \Psi_{3} = \psi_{A}(x_{1}, x_{2}) \cdot \frac{1}{\sqrt{2}} (\ket{\uparrow\downarrow} + \ket{\downarrow\uparrow}), \quad \Psi_{4} = \psi_{A}(x_{1}, x_{2}) \cdot \ket{\downarrow\downarrow}
   $$
   共四个可能状态。

5.4.1 (选做) 在 Schrödinger 图画中，Hamiltonian 算符常常可以分解为 $\hat{H}^{(\mathrm{S})}=\hat{H}_{0}+\hat{V}^{(\mathrm{S})}$，$\hat{H}_{0}$ 描述自由粒子的运动，而 $\hat{V}^{(\mathrm{S})}$ 描述粒子间的相互作用。这时候可以采用相互作用图画 interaction picture。把该图画中的波函数记为 $\Psi^{(\mathrm{I})}$，力学量算符记为 $\hat{F}^{(\mathrm{I})}$，那么它们由 $\Psi^{(\mathrm{S})}$ 和 $\hat{F}^{(\mathrm{S})}$ 经下面的幺正变换给出：$\Psi^{(\mathrm{I})}=\mathrm{e}^{\frac{i}{\hbar}\hat{H}_{0t}}\Psi^{(\mathrm{S})}$，$\hat{F}^{(\mathrm{I})}=\mathrm{e}^{\frac{i}{\hbar}\hat{H}_{0t}}\hat{F}^{(\mathrm{S})}\mathrm{e}^{-\frac{i}{\hbar}\hat{H}_{0t}}$。问：在相互作用图画中，$\mathrm{i}\hbar \frac{\partial \Psi^{(\mathrm{I})}}{\partial t}=$?， $\mathrm{i}\hbar \frac{\partial \hat{F}^{(\mathrm{I})}}{\partial t}=$? 
Schrödinger 绘景中 $\hat{H}^{(S)} = \hat{H}_{0} + \hat{V}^{(S)}$，相互作用绘景定义为
$$
\Psi^{(I)} = e^{\frac{i}{\hbar}\hat{H}_{0} t} \Psi^{(S)}, \quad \hat{F}^{(I)} = e^{\frac{i}{\hbar} \hat{H}_{0} t} \hat{F}^{(S)} e^{-\frac{i}{\hbar}\hat{H}_{0} t}
$$

在相互作用绘景中波函数满足
$$
i\hbar \frac{\partial \Psi^{(I)}}{\partial t} = i\hbar \frac{\partial}{\partial t} \left( e^{\frac{i}{\hbar}\hat{H}_{0} t} \Psi^{(S)} \right) = i\hbar \left( \frac{i}{\hbar} \hat{H}_{0} e^{\frac{i}{\hbar}\hat{H}_{0} t} \Psi^{(S)} + e^{\frac{i}{\hbar} \hat{H}_{0} t} \frac{\partial \Psi^{(S)}}{\partial t} \right)
$$
利用 Schrödinger 方程 $i\hbar \frac{\partial \Psi^{(S)}}{\partial t} = \hat{H}^{(S)} \Psi^{(S)}$，代入得


$$
i\hbar \frac{\partial \Psi^{(I)}}{\partial t} = -\hat{H}_{0} e^{\frac{i}{\hbar}\hat{H}_{0} t} \Psi^{(S)} + e^{\frac{i}{\hbar} \hat{H}_{0}} (\hat{H}_{0} + \hat{V}^{(S)}) \Psi^{(S)} = e^{\frac{i}{\hbar}\hat{H}_{0} t} \hat{V}^{(S)} \Psi^{(S)}
$$
注意到 $e^{\frac{i}{\hbar}\hat{H}_{0} t} \hat{V}^{(S)} \Psi^{(S)} = \ \hat{V}^{(I)} \Psi^{(I)}$，因此
$$
i\hbar \frac{\partial \Psi^{(I)}}{\partial t} = \hat{V}^{(I)} \Psi^{(I)}
$$
算符方程  
$$
i\hbar \frac{\partial \hat{F}^{(I)}}{\partial t} = i\hbar \frac{\partial}{\partial t} \left( e^{\frac{i}{\hbar}\hat{H}_{0} t} \hat{F}^{(S)} e^{-\frac{i}{\hbar}\hat{H}_{0} t} \right)
$$
求导得三项
$$
i\hbar \frac{\partial \hat{F}^{(I)}}{\partial t} = i\hbar \left[ \frac{i}{\hbar} \hat{H}_{0} e^{\frac{i}{\hbar}\hat{H}_{0} t} \hat{F}^{(S)} e^{-\frac{i}{\hbar}\hat{H}_{0} t} + e^{\frac{i}{\hbar} \hat{H}_{0} t} \frac{\partial \hat{F}^{(S)}}{\partial t} e^{-\frac{i}{\hbar} \hat{H}_{0} t} + e^{\frac{i}{\hbar}\hat{H}_{0} t} \hat{F}^{(S)} \left( -\frac{i}{\hbar} \hat{H}_{0} e^{-\frac{i}{\hbar} \hat{H}_{0} t} \right) \right]
$$
化简为
$$
i\hbar \frac{\partial \hat{F}^{(I)}}{\partial t} = [\hat{F}^{(I)}, \hat{H}_{0}] + i\hbar e^{\frac{i}{\hbar}\hat{H}_{0} t} \frac{\partial \hat{F}^{(S)}}{\partial t} e^{-\frac{i}{\hbar}\hat{H}_{0} t}
$$
若 $\hat{F}^{(S)}$ 不显含时间，则 $\frac{\partial \hat{F}^{(S)}}{\partial t} = 0$，则上面的结论可以进一步简化为
$$
i\hbar \frac{\partial \hat{F}^{(I)}}{\partial t} = [\hat{F}^{(I)}, \hat{H}_{0}]
$$







