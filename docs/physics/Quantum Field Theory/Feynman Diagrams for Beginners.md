# Feynman Diagrams for Beginners

$\text{Krešimir Kumerički}^{\dagger}$

Department of Physics, Faculty of Science, University of Zagreb, Croatia

注释：这是一片有关费曼图计算的介绍，我为了入门QFT并且快速上手计算，对其进行了一次阅读批注，并且完成了其中的习题。所有文字由AI翻译成中文，并经过我的校对。

## Abstract

本文对费曼图进行了简要介绍，并包含许多练习题。文本针对那些先前很少或没有接触过量子场论的学生。我们介绍了单粒子狄拉克方程、自由量子场以及使用费曼图构建费曼振幅的简明描述。作为一个例子，我们详细计算了电子和正电子湮灭成 $\mu$ 子对的截面。我们还展示了如何借助计算机进行此类计算。

## Cotents

1 自然单位

2 单粒子狄拉克方程 

2.1 狄拉克方程
2.2 伴随狄拉克方程与狄拉克流
2.3 狄拉克方程的自由粒子解

3 自由量子场

3.1 自旋 0：标量场
3.2 自旋 1/2：狄拉克场
3.3 自旋 1：矢量场

4 衰变与散射的黄金规则

5 费曼图

6 示例：QED 中的 $e^{+} e^{-} \to \mu^{+} \mu^{-}$

6.1 对极化求和
6.2 Casimir 技巧
6.3 $\gamma$ 矩阵的迹与缩并恒等式
6.4 质心系中的运动学
6.5 对二粒子相空间积分
6.6 步骤总结
6.7 Mandelstam 变量

附录：在计算机上计算费曼图

---

## 1 自然单位

为了描述某个物理系统或事件的运动学，我们可以自由选择三个基本运动学物理量的度量单位：长度 $(L)$ 、质量 $(M)$ 和时间 $(T)$。等价地，我们可以选择这些量的任意三个线性无关组合。通常选择 $L$ 、$T$ 和 $M$（例如在 SI 单位制中），因为它们对于描述我们的直接经验最为方便。然而，基本粒子体验的是一个不同的世界，一个由相对论性量子力学定律支配的世界。

相对论性量子力学中的自然单位选择使得该理论的基本常数 $c$ 和 $\hbar$ 都等于 1。$[c] = L T^{-1}$ ，$[\hbar] = M L^{-2} T^{-1}$ ，为了完全确定我们的单位制，我们指定能量单位 $(M L^{2} T^{-2})$：

$$
1 \mathrm{GeV} = 1.6 \cdot 10 ^ {-10} \mathrm{kg} \mathrm{m}^{2} \cdot \mathrm{s}^{-2}
$$

约等于质子的质量。我们在实践中的做法是：

- 在公式中忽略 $\hbar$ 和 $c$，只在最后（如果需要）恢复它们  
- 用 $\mathrm{GeV}$、$\mathrm{GeV}^{-1}$ 、$\mathrm{GeV}^{2}$ 等度量一切

## 示例：汤姆逊散射截面

在自然单位中，经典电磁辐射被自由电子散射（汤姆逊散射）的总截面为：

$$
\sigma_{\mathrm{T}} = \frac{8 \pi \alpha^{2}}{3 m_{e}^{2}} \tag{1}
$$

为了恢复 $\hbar$ 和 $c$，我们将它们以一般幂次 $\alpha$ 和 $\beta$ 插入上述方程，通过要求截面具有面积量纲 $(L^{2})$ 来确定这些幂次：

$$
\sigma_{\mathrm{T}} = \frac{8 \pi \alpha^{2}}{3 m_{e}^{2}} \hbar^ {\alpha} c^{\beta} \tag{2}
$$

$$
[\sigma] = L^{2} = \frac{1}{M^{2}} (M L^{2} T^{- 1})^{\alpha} (L T^{-1})^{\beta} \\ 
\Rightarrow \alpha = 2, \quad \beta = - 2
$$

即

$$
\sigma_{\mathrm{T}} = \frac{8 \pi \alpha^{2}}{3 m_{e}^{2}} \frac{\hbar^{2}}{c^{2}} = 0.665 \cdot 10^{-24} \mathrm {cm}^{2} = 665 \mathrm {mb} \tag {3}
$$

$\hbar$ 和 $c$ 的线性无关性意味着这总是可以以唯一的方式完成。

以下转换关系通常很有用：

$$
\begin{array}{l} 1 \text{fermi} = 5.07 \mathrm{GeV}^{-1} \\ 
1 \mathrm{GeV}^{-2} = 0.389 \mathrm{mb} \\ 
1 \mathrm {GeV}^{-1} = 6.582 \cdot 10^{-25} \mathrm{s} \\ 
1 \mathrm{kg} = 5.61 \cdot 10^{26} \mathrm {GeV} \\ 
1 \mathrm{m} = 5.07 \cdot 10^{15} \mathrm {GeV}^{-1} \\ 
1 \mathrm{s} = 1.52 \cdot 10^{24} \mathrm {GeV}^{-1} \\ 
\end{array}
$$

**练习 1** 验证这些关系。

>我们利用鲜于课上讲的关系对这些关系的正确性进行一个快速的口头估算验证。
>$$
>1 \mathrm{eV}^{-1} = 1 \mathrm{\mu m}
>$$
>
>$$
>1 \text{K} = 10^{-4} \text{eV}
>$$
>
>$$
>1 \text{g} = 10^{23} \text{GeV}
>$$
>
>结合自然单位制的基本规律，$1 \text{fermi} = 10^{-15} \text{m} = 10^{-23} \text{s}$，所以
>$$
>1 \mathrm{fermi} = 10^{-9} \mathrm{\mu m} \approx 10^{9} \mathrm{eV}^{-1} = 1 \mathrm{GeV}^{-1}
>$$
>
>同理
>$$
>1 \text{mb} = 10^{-27} \text{cm}^{2} = 10^{-19} \mathrm{\mu m}^{2} \approx 10^{19} \text{eV}^{-2} = 10 \text{GeV}^{-2}
>$$
>还有
>$$
>1 \text{GeV}^{-1} = 10^{-9} \text{eV}^{-1} \approx 10^{-9} \mathrm{\mu m} = 10^{-15} \text{m} \approx 10^{-23} \text{s}
>$$
>
>$$
>1 \text{kg} = 1000 \text{g} \approx 10^{26} \text{GeV}
>$$
>
>$$
>1 \text{m} \approx 10^{-8} \text{s} = 10^{6} \mathrm{\mu m} = 10^{6} \text{eV}^{-1} = 10^{15} \text{GeV}^{-1}
>$$
>
用 $\mathrm{GeV}$ 计算要优雅得多。使用 $ m_{e} = 0.511{\cdot} 10^{-3} \mathrm{GeV}$，我们立即得到：
$$
\sigma_{\mathrm{T}} = \frac{8 \pi \alpha^{2}}{3 m_{e}^{2}} = 1709 \mathrm {GeV}^{-2} = 665 \mathrm{mb} \tag{4}
$$

**练习 2** $\pi^{0}$ 粒子的衰变宽度为
$$
\Gamma = \frac{1}{\tau} = 7.7 \mathrm{eV} \tag{5}
$$

计算其寿命 $\tau$（以秒为单位）。（顺便说一下，粒子的半衰期等于 $\tau \ln 2$。）

>同样进行估算。
>$$
>\tau \approx 0.1 \text{eV}^{-1} = 0.1 \mathrm{\mu m} = 10^{-7} \text{m} \approx 10^{-15} \text{s}
>$$
---

## 2 单粒子狄拉克方程

### 2.1 狄拉克方程

将相对论性能量方程

$$
E^{2} = \vec{p}^{2} + m^{2} \tag {6}
$$

通过通常的替换

$$
\vec{p} \rightarrow -i \nabla, \quad E \rightarrow i\frac{\partial}{\partial t} \tag{7}
$$

转化为微分方程，得到 Klein-Gordan 方程：

$$
\left(\square + m^{2}\right) \psi(x) = 0 \tag {8}
$$

将其解释为单粒子波方程时，存在有问题的负能量解。这是由于 $E = \pm \sqrt {p^{2} + m^{2}}$ 中的负根。也就是说，在相对论力学中可以忽略这个负根，但在量子物理中必须保留微分方程的所有完全解。

为了克服这个问题，狄拉克尝试了如下 ansatz

$$
\left(i \beta^{\mu} \partial_{\mu} + m\right) \left(i\gamma^{\nu} \partial_{\nu} - m\right) \psi (x) = 0 \tag {9}
$$

其中 $\beta^{\mu}$ 和 $\gamma^{\nu}$ 将通过要求与 Klein-Gordan 方程的一致性来确定。这要求 $\gamma^{\mu} = \beta^{\mu}$ 且

$$
\gamma^ {\mu} \partial_{\mu} \gamma^{\nu} \partial_{\nu} = \partial^{\mu} \partial_{\mu} \tag {10}
$$

这又意味着

$$
\left(\gamma^{0}\right)^{2} = 1, \quad \left(\gamma^{i}\right)^{2} = -1
$$

$$
\left\{\gamma^{\mu}, \gamma^{\nu} \right\} \equiv \gamma^{\mu} \gamma^{\nu} + \gamma^{\nu} \gamma^{\mu} = 0 \quad \text {for} \quad \mu \neq \nu
$$

这可以紧凑地写成反对易关系的形式

$$
\left\{\gamma^{\mu}, \gamma^{\nu} \right\} = 2 g^{\mu \nu}, \quad g^{\mu \nu} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & - 1 & 0 & 0 \\ 0 & 0 & - 1 & 0 \\ 0 & 0 & 0 & - 1 \end{pmatrix} \tag {11}
$$

这些条件显然不可能用通常的数字 $\gamma$ 来满足，但我们可以通过取 $\gamma$ 为（至少）4×4 矩阵来满足它们。现在，要满足 (9)，只需该方程中的两个因子之一为零，按照惯例我们要求第二个因子为零。由此我们得到狄拉克方程：

$$
(i \gamma^{\mu} \partial_{\mu} - m) \psi (x) = 0 \tag {12}
$$

$\psi ( x )$ 现在有四个分量，称为狄拉克旋量。最常用的 $\gamma$ 矩阵表示之一是原始的狄拉克表示

$$
\gamma^{0} = \begin{pmatrix} 1 & 0 \\ 0 & - 1 \end{pmatrix}  \quad \gamma^{i} = \begin{pmatrix} 0 & \sigma^{i} \\ -\sigma^{i} & 0 \end{pmatrix} \tag {13}
$$

其中 $\sigma ^ { i }$ 是泡利矩阵。这种表示对于非相对论近似非常方便，因为此时主导的能量项 $(i\gamma^{0} \partial_{0} - \cdots -m) \psi(0)$ 是对角化的。另外两种常用的表示是：

- Weyl（或手征）表示——在超相对论区域（$E \gg m$）方便  
-  Majorana 表示——使狄拉克方程变为实数；对于反粒子等于粒子的 Majorana 费米子方便

问题：为什么我们最多只能选择一个 $\gamma$ 矩阵为对角矩阵？

>这是显然的，否则反对易括号就会出现非对角项非零的情况。

泡利矩阵的性质

$$
\sigma^{i^{\dagger}} = \sigma^{i} \tag {15}
$$

$$
\sigma^{i*} = (i \sigma^{2}) \sigma^{i} (i \sigma^{2}) \tag {16}
$$

$$
[\sigma^ {i}, \sigma^ {j}] = 2 i \epsilon^{ijk} \sigma^{k} \tag {17}
$$

$$
\left\{\sigma^{i}, \sigma^{j} \right\} = 2 \delta^{ij} \tag {18}
$$

$$
\sigma^{i} \sigma^{j} = \delta^{ij} + i \epsilon^{ijk} \sigma^{k} \tag {19}
$$

**练习 3** 证明对于任意三维矢量 $\vec{a}$，$( \vec{\sigma} \cdot \vec{a})^{2} = \vec{a}^{2}$。
>$$
>\sigma_{i} a_{i} \sigma_{j} a_{j} \delta_{ij} = (\delta_{ij} + i \epsilon_{ijk} \sigma_{k}) \delta_{ij} a_{i} a_{j} = a_{i} a_{i}
>$$
>

**练习 4** 利用泡利矩阵的性质，证明狄拉克表示中的 $\gamma$ 矩阵满足 $\{\gamma^{i} , \gamma^{j}\} = 2 g^{ij} = -  \delta^{ij}$，符合反对易关系。（反对易关系的其他分量，$(\gamma^{0})^{2} = 1$，$\{\gamma^{0}, \gamma^{i} \} = 0$，是平凡的证明。）

>$$
>\{\gamma^{i} , \gamma^{j}\} = \gamma^{i} \gamma^{j} + \gamma^{j} \gamma^{i} = \begin{pmatrix} 0 & \sigma^{i} \\ -\sigma^{i} & 0 \end{pmatrix} \begin{pmatrix} 0 & \sigma^{j} \\ -\sigma^{j} & 0 \end{pmatrix} + \begin{pmatrix} 0 & \sigma^{j} \\ -\sigma^{j} & 0 \end{pmatrix} \begin{pmatrix} 0 & \sigma^{i} \\ -\sigma^{i} & 0 \end{pmatrix} = 2 \begin{pmatrix} - \{\sigma^{i}, \sigma^{j}\} & 0 \\ 0 & - \{\sigma^{i}, \sigma^{j}\} \end{pmatrix} = -2 \delta_{ij}
>$$

**练习 5** 证明在狄拉克表示中 $\gamma^{0} \gamma^{\mu} \gamma^{0} = \gamma^{\mu^{\dagger}}$。

>$$
>\gamma^{0} \gamma^{\mu} \gamma^{0} = \begin{pmatrix} 1 & 0 \\ 0 & - 1 \end{pmatrix} \gamma^{\mu} \begin{pmatrix} 1 & 0 \\ 0 & - 1 \end{pmatrix}
>$$
>
>假设 $\gamma^{\mu} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$，此时
>$$
>\begin{pmatrix} 1 & 0 \\ 0 & - 1 \end{pmatrix} \gamma^{\mu} \begin{pmatrix} 1 & 0 \\ 0 & - 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & - 1 \end{pmatrix} \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & - 1 \end{pmatrix} = \begin{pmatrix} a & -b \\ -c & d \end{pmatrix}
>$$
>带入 $\gamma^{i} = \begin{pmatrix} 0 & \sigma^{i} \\ -\sigma^{i} & 0 \end{pmatrix}$，所以
>$$
>\gamma^{0} \gamma^{\mu} \gamma^{0} = \gamma^{\mu^{\dagger}}
>$$

**练习 6** 通过将狄拉克方程写成 $i \partial \psi / \partial t = H \psi$ 的形式来确定狄拉克哈密顿量。证明狄拉克哈密顿量的厄米性意味着无论表示如何，前一个练习中的关系都成立。Feynman slash 记号 $\rlap / a \equiv a_{\mu} \gamma^{\mu}$ 经常被使用。

>改写狄拉克方程
>$$
>i \gamma^{\mu} \partial_{\mu} \psi = m \psi
>$$
>即
>$$
>i \pdv{\psi}{t} = (m + i \gamma^{j} \partial_{j} \gamma^{0}) \psi
>$$
>所以哈密顿量为
>$$
>H = m + i \gamma^{j} \gamma^{0} \partial_{j}
>$$

### 2.2 伴随狄拉克方程与狄拉克流

为了构建狄拉克流，我们需要 $\psi ( x ) ^ { \dagger }$ 的方程。取狄拉克方程的dagger，我们得到

$$
\psi^{\dagger} \gamma^{0} (i \overleftarrow{\rlap / \partial} + m) = 0
$$

我们定义伴随旋量 ${ \bar { \psi } } \equiv \psi ^ { \dagger } \gamma ^ { 0 }$，得到伴随狄拉克方程

$$
\bar{\psi}(x) (i \overleftarrow{\rlap / \partial} + m) = 0
$$

引入 $\bar { \psi }$ 不仅是为了得到美学上令人愉悦的方程，而且因为可以证明，与 $\psi ^ { \dagger }$ 不同，它在洛伦兹变换下协变地变换。

**练习 7** 验证流 $j ^ { \mu } = \bar { \psi } \gamma ^ { \mu } \psi$ 是守恒的，即满足连续性关系 $\partial _ { \mu } j ^ { \mu } = 0$。这个相对论性四流的分量是 $j ^ { \mu } = ( \rho , j )$。注意 $\rho =$ $j ^ { 0 } = \bar { \psi } \gamma ^ { 0 } \psi = \psi ^ { \dagger } \psi > 0$，即概率是正定的。

>

### 2.3 狄拉克方程的自由粒子解

由于我们正在为微扰理论计算做准备，我们只需要考虑自由粒子解。关于各种势中的解，请参阅文献。狄拉克旋量满足克莱因-戈尔登方程这一事实提示了以下 ansatz

$$
\psi (x) = u(\vec{p}) e^{-ipx} \tag {20}
$$

将其代入狄拉克方程后，得到动量空间狄拉克方程

$$
(p - m) u (\boldsymbol {p}) = 0. \tag {21}
$$

这有两个正能量解

$$
u (\boldsymbol {p}, \sigma) = N \left( \begin{array}{c} \chi^ {(\sigma)} \\ \frac {\boldsymbol {\sigma} \cdot \boldsymbol {p}}{E + m} \chi^ {(\sigma)} \end{array} \right), \quad \sigma = 1, 2, \tag {22}
$$

其中

$$
\chi^ {(1)} = \left( \begin{array}{l} 1 \\ 0 \end{array} \right), \quad \chi^ {(2)} = \left( \begin{array}{l} 0 \\ 1 \end{array} \right), \tag {23}
$$

以及两个负能量解，它们被解释为正能量的反粒子解

$$
v (\boldsymbol {p}, \sigma) = - N \left( \begin{array}{c} \frac {\boldsymbol {\sigma} \cdot \boldsymbol {p}}{E + m} (i \sigma^ {2}) \chi^ {(\sigma)} \\ (i \sigma^ {2}) \chi^ {(\sigma)} \end{array} \right), \quad \sigma = 1, 2, \quad E > 0. \tag {24}
$$

$N$ 是待定的归一化常数。上面的旋量与 [1] 中的一致。反粒子解的动量空间狄拉克方程是

$$
(\not p + m) v (\boldsymbol {p}, \sigma) = 0. \tag {25}
$$

可以证明，两个解（一个 $\sigma = 1$，另一个 $\sigma = 2$）对应于自旋-1/2 粒子的两个自旋状态。

**练习 8** 确定 $\bar { u } ( { \pmb p } , \sigma )$ 和 $\bar { v } ( p , \sigma )$ 的动量空间狄拉克方程。

>

#### 归一化

在非相对论单粒子量子力学中，波函数的归一化很简单。粒子在空间中某处的概率等于一，这转化为归一化条件 $\textstyle \int \psi ^ { * } \psi d V = 1$。另一方面，我们最终将在多粒子量子场论中使用旋量 (22) 和 (24)，因此它们的归一化不是唯一的。我们将选择归一化约定：单位体积内有 $2 E$ 个粒子

$$
\int_{\text{unitvolume}} \rho dV = \int_{\text{unitvolume}} \psi^{\dagger} \psi dV  = 2 E \tag{26}
$$

这个选择是相对论协变的，因为体积元的洛伦兹收缩被能量变化所补偿。还有其他具有其他优点的归一化约定。

**练习 9** 根据此选择确定归一化常数 N。

>

#### 完备性

**练习 10** 使用显式表达式 (22) 和 (24) 证明
$$
\sum_ {\sigma = 1, 2} u (\boldsymbol {p}, \sigma) \bar {u} (\boldsymbol {p}, \sigma) = \not p + m, \tag {27}
$$

$$
\sum_ {\sigma = 1, 2} v (\boldsymbol {p}, \sigma) \bar {v} (\boldsymbol {p}, \sigma) = \not p - m. \tag {28}
$$

这些关系在计算未极化费米子的费曼图时经常需要。参见后面的章节。

>

#### 宇称与双线性协变量

宇称变换：

- P： $x \to −x, t \to t$
- P： ψ → γ 0 ψ

**练习 11** 验证流 $j ^ { \mu } = \bar { \psi } \gamma ^ { \mu } \psi$ 在宇称下像矢量一样变换，即 $j ^ { 0 } \to j ^ { 0 }$ 且 $j \to - j$。

任何费米子流都具有 ${ \bar { \psi } } \Gamma \psi$ 的形式，其中 $\Gamma$ 是某个 4×4 矩阵。为了构建相互作用拉格朗日量，我们希望只使用那些具有确定洛伦兹变换性质的流。为此，我们首先定义两个新矩阵：

$$
\gamma^ {5} \equiv i \gamma^ {0} \gamma^ {1} \gamma^ {2} \gamma^ {3} \stackrel {\text {D i r a c r e p .}} {=} \left( \begin{array}{c c} 0 & 1 \\ 1 & 0 \end{array} \right), \quad \left\{\gamma^ {5}, \gamma^ {\mu} \right\} = 0, \tag {29}
$$

$$
\sigma^ {\mu \nu} \equiv \frac {i}{2} \left[ \gamma^ {\mu}, \gamma^ {\nu} \right], \quad \sigma^ {\mu \nu} = - \sigma^ {\nu \mu}. \tag {30}
$$

现在，如果 $\Gamma$ 是下表中给出的矩阵之一，则 ${ \bar { \psi } } \Gamma \psi$ 将协变地变换。下表还显示了 ${ \bar { \psi } } \Gamma \psi$ 的变换性质、$\Gamma$ 中不同 $\gamma$ 矩阵的数量以及 $\Gamma$ 的分量数。

| Γ | 变换性质 | # of γ's | # of components |
|---|---|---|---|
| 1 | 标量 | 0 | 1 |
| γμ | 矢量 | 1 | 4 |
| σμν | 张量 | 2 | 6 |
| γ5γμ | 轴矢量 | 3 | 4 |
| γ5 | 赝标量 | 4 | 1 |

这穷尽了所有可能性。分量总数为 16，这意味着集合 $\left\{ 1 , \gamma ^ { \mu } , \sigma ^ { \mu \nu } , \gamma ^ { 5 } \gamma ^ { \mu } , \gamma ^ { 5 } \right\}$ 构成任何 4×4 矩阵的完备基。这样的 ${ \bar { \psi } } \Gamma \psi$ 流称为双线性协变量。

---

## 3 自由量子场

单粒子狄拉克方程（a）即使对于单粒子系统（如 H 原子）也不完全正确，并且（b）无法处理多粒子过程（如 $\beta$ -衰变 $n  p e ^ { - } \bar { \nu }$）。我们必须升级到量子场论。

任何狄拉克场都是以下完备集的某种叠加

$$
u (\boldsymbol {p}, \sigma) e ^ {- i p x}, \quad v (\boldsymbol {p}, \sigma) e ^ {i p x}, \quad \sigma = 1, 2, \quad \boldsymbol {p} \in \mathbb {R} ^ {3}
$$

我们可以将其写为

$$
\psi (x) = \sum_ {\sigma} \int \frac {d ^ {3} p}{\sqrt {(2 \pi) ^ {3} 2 E}} \left[ u (\boldsymbol {p}, \sigma) a (\boldsymbol {p}, \sigma) e ^ {- i p x} + v (\boldsymbol {p}, \sigma) a ^ {c \dagger} (\boldsymbol {p}, \sigma) e ^ {i p x} \right]. \tag {31}
$$

这里 $1 / \sqrt { ( 2 \pi ) ^ { 3 } 2 E }$ 是归一化因子（有许多不同的约定），$a ( \pmb { p } , \sigma )$ 和 $a ^ { c \dagger } ( \pmb { p } , \sigma )$ 是展开系数。为了使这成为量子狄拉克场，我们通过强加反对易关系将这些系数提升为算符：

$$
\left\{a \left(\boldsymbol {p}, \sigma\right), a ^ {\dagger} \left(\boldsymbol {p} ^ {\prime}, \sigma^ {\prime}\right) \right\} = \delta_ {\sigma \sigma^ {\prime}} \delta^ {3} \left(\boldsymbol {p} - \boldsymbol {p} ^ {\prime}\right), \tag {32}
$$

类似地对于 $a ^ { c } ( \pmb { p } , \sigma )$。（对于玻色场，我们将有对易关系。）这类似于通过 $[ x _ { i } , p _ { j } ] = i \hbar \delta _ { i j }$ 对易关系将位置和动量提升为算符，这就是为什么从单粒子量子理论过渡到量子场论有时被称为二次量子化。

算符 $a ^ { \dagger }$ 作用于真空态 $| 0 \rangle$ 时，产生单粒子态 $| p , \sigma \rangle$：

$$
a ^ {\dagger} (\boldsymbol {p}, \sigma) | 0 \rangle = | \boldsymbol {p}, \sigma \rangle , \tag {33}
$$

这就是它被称为产生算符的原因。类似地，$a$ 是湮灭算符：

$$
a (\boldsymbol {p}, \sigma) | \boldsymbol {p}, \sigma \rangle = | 0 \rangle , \tag {34}
$$

而 $a ^ { c \dagger }$ 和 $a ^ { c }$ 是反粒子态的产生和湮灭算符（$a ^ { c }$ 中的 $c$ 代表“共轭”）。

粒子物理学中的过程大多在此类场的理论框架内计算——量子场论。该理论可以在不同严格程度上描述，但无论如何都足够复杂，超出了这些笔记的范围。

然而，量子场论关于基本粒子相互作用的预测通常可以使用相对简单的“配方”——费曼图来计算。

在我们转向描述费曼图方法之前，让我们先指定参与基本粒子物理相互作用的其他量子场。所有这些场都是自由场，相互作用被视为它们的微扰。每种粒子类型（电子、光子、希格斯玻色子……）都有自己的量子场。

### 3.1 自旋 0：标量场

例如，希格斯玻色子、π 介子……

$$
\phi (x) = \int \frac {d ^ {3} p}{\sqrt {(2 \pi) ^ {3} 2 E}} \left[ a (\boldsymbol {p}) e ^ {- i p x} + a ^ {c \dagger} (\boldsymbol {p}) e ^ {i p x} \right] \tag {35}
$$

### 3.2 自旋 1/2：狄拉克场

例如，夸克、轻子

我们已经指定了狄拉克自旋-1/2 场。还有其他类型：Weyl 和 Majorana 自旋-1/2 场，但它们超出了我们的范围。

### 3.3 自旋 1：矢量场

可能是

• 有质量的（例如 W、Z 弱玻色子）或  
• 无质量的（例如光子）

$$
A ^ {\mu} (x) = \sum_ {\lambda} \int \frac {d ^ {3} p}{\sqrt {(2 \pi) ^ {3} 2 E}} \left[ \epsilon^ {\mu} (\boldsymbol {p}, \lambda) a (\boldsymbol {p}, \lambda) e ^ {- i p x} + \epsilon^ {\mu *} (\boldsymbol {p}, \lambda) a ^ {\dagger} (\boldsymbol {p}, \lambda) e ^ {i p x} \right] \tag {36}
$$

$\epsilon ^ { \mu } ( \pmb { p } , \lambda )$ 是极化矢量。对于有质量粒子，它自动满足

$$
p _ {\mu} \epsilon^ {\mu} (\boldsymbol {p}, \lambda) = 0 \tag {37}
$$

而在无质量情况下，由于规范不变性（洛伦兹规范条件），可以强加这个条件。这意味着有质量矢量粒子只有三个独立极化：$\lambda = 1 , 2 , 3$ 或 $\lambda =$ $+ , - , 0$。在无质量情况下，可以进一步利用规范对称性消除一个极化态，只留下两个：$\lambda = 1 , 2$ 或 $\lambda = + , -$。

极化矢量的归一化使得

$$
\epsilon^ {*} (\boldsymbol {p}, \lambda) \cdot \epsilon (\boldsymbol {p}, \lambda) = - 1. \tag {38}
$$

例如，对于沿 $z$ 轴运动的有质量粒子 $( p = ( E , 0 , 0 , | \pmb { p } | ) )$，我们可以取

$$
\epsilon (\boldsymbol {p}, \pm) = \mp \frac {1}{\sqrt {2}} \left( \begin{array}{c} 0 \\ 1 \\ \pm i \\ 0 \end{array} \right), \quad \epsilon (\boldsymbol {p}, 0) = \frac {1}{m} \left( \begin{array}{c} | \boldsymbol {p} | \\ 0 \\ 0 \\ E \end{array} \right) \tag {39}
$$

**练习 12** 计算

$$
\sum_ {\lambda} \epsilon^ {\mu *} (\boldsymbol {p}, \lambda) \epsilon^ {\nu} (\boldsymbol {p}, \lambda)
$$

提示：将其写成最一般的形式 $( A g ^ { \mu \nu } + B p ^ { \mu } p ^ { \nu } )$，然后确定 $A$ 和 $B$。

显然，所得结果不能简单地通过极限 $m \to 0$ 外推到无质量情况。规范对称性使无质量极化求和稍微复杂一些，但为了进行简单的费曼图计算，可以只使用以下关系

$$
\sum_ {\lambda} \epsilon^ {\mu *} (\boldsymbol {p}, \lambda) \epsilon^ {\nu} (\boldsymbol {p}, \lambda) = - g ^ {\mu \nu}.
$$

---

## 4 衰变与散射的黄金规则

粒子物理学的主要实验可观测量是

• 散射截面 $\sigma ( 1 + 2  1 ^ { \prime } + 2 ^ { \prime } + \cdot \cdot \cdot + n ^ { \prime } )$  
• 衰变宽度 $\Gamma ( 1 \to 1 ^ { \prime } + 2 ^ { \prime } + \cdot \cdot \cdot + n ^ { \prime } )$

另一方面，理论是用量子场的拉格朗日密度定义的，例如

$$
\mathcal {L} = \frac {1}{2} \partial_ {\mu} \phi \partial^ {\mu} \phi - \frac {1}{2} m ^ {2} \phi^ {2} - \frac {g}{4 !} \phi^ {4}.
$$

如何从 $\mathcal { L }$ 计算 $\sigma$ 和 Γ？

在非相对论量子理论中，为了计算存在相互作用势 $V _ { I }$ 时从态 $| \alpha \rangle$ 到态 $| \beta \rangle$ 的跃迁速率，我们有费米黄金规则

$$
\binom {\alpha \rightarrow \beta} {\text {t r a n s i t i o n r a t e}} = \frac {2 \pi}{\hbar} \left| \right.\left\langle \right. \beta \left. \right| V _ {I} \mid \alpha \left. \right\rangle\left. \right| ^ {2} \times \binom {\text {d e n s i t y o f f i n a l}} {\text {q u a n t u m s t a t e s}}. \tag {40}
$$

这是最低阶微扰理论。对于更高阶，我们有更多相互作用势矩阵元 $\langle \vert V _ { I } \vert \rangle$ 的乘积项。

在量子场论中，有与这些矩阵元对应的东西——S 矩阵：

$$
\langle \beta | V _ {I} | \alpha \rangle + \left(\text {h i g h e r - o r d e r t e r m s}\right) \quad \longrightarrow \quad \langle \beta | S | \alpha \rangle . \tag {41}
$$

一方面，S 矩阵元可以（在知道相互作用拉格朗日量/哈密顿量的情况下）借助戴森级数进行微扰计算

$$
S = 1 - i \int d ^ {4} x _ {1} \mathcal {H} \left(x _ {1}\right) + \frac {(- i) ^ {2}}{2 !} \int d ^ {4} x _ {1} d ^ {4} x _ {2} T \left\{\mathcal {H} \left(x _ {1}\right) \mathcal {H} \left(x _ {2}\right) \right\} + \dots , \tag {42}
$$

另一方面，我们有将这些矩阵元与截面和衰变宽度联系起来的“黄金规则”。

将这些黄金规则用费曼不变振幅 $\mathcal { M }$ 表示很方便，$\mathcal { M }$ 是通过从 $S$ - 矩阵中剥离一些运动学因子得到的：

$$
\langle \beta | S | \alpha \rangle = \delta_ {\beta \alpha} - i (2 \pi) ^ {4} \delta^ {4} \left(p _ {\beta} - p _ {\alpha}\right) \mathcal {M} _ {\beta \alpha} \prod_ {i = \alpha , \beta} \frac {1}{\sqrt {\left(2 \pi\right) ^ {3} 2 E _ {i}}}. \tag {43}
$$

现在我们有两个规则：

• $1 \to 1 ^ { \prime } + 2 ^ { \prime } + \cdot \cdot \cdot + n ^ { \prime }$ 的部分衰变率

$$
d \Gamma = \frac {1}{2 E _ {1}} \overline {{| \mathcal {M} _ {\beta \alpha} | ^ {2}}} (2 \pi) ^ {4} \delta^ {4} \left(p _ {1} - p _ {1} ^ {\prime} - \dots - p _ {n} ^ {\prime}\right) \prod_ {i = 1} ^ {n} \frac {d ^ {3} p _ {i} ^ {\prime}}{\left(2 \pi\right) ^ {3} 2 E _ {i} ^ {\prime}}, \tag {44}
$$

• $1 + 2  1 ^ { \prime } + 2 ^ { \prime } + \cdot \cdot + n ^ { \prime }$ 散射的微分截面

$$
d \sigma = \frac {1}{u _ {\alpha}} \frac {1}{2 E _ {1}} \frac {1}{2 E _ {2}} \overline {{\left| \mathcal {M} _ {\beta \alpha} \right| ^ {2}}} (2 \pi) ^ {4} \delta^ {4} \left(p _ {1} + p _ {2} - p _ {1} ^ {\prime} - \dots - p _ {n} ^ {\prime}\right) \prod_ {i = 1} ^ {n} \frac {d ^ {3} p _ {i} ^ {\prime}}{\left(2 \pi\right) ^ {3} 2 E _ {i} ^ {\prime}}, \tag {45}
$$

其中 $u _ { \alpha }$ 是粒子 1 和 2 的相对速度：

$$
u _ {\alpha} = \frac {\sqrt {\left(p _ {1} \cdot p _ {2}\right) ^ {2} - m _ {1} ^ {2} m _ {2} ^ {2}}}{E _ {1} E _ {2}}, \tag {46}
$$

而 $\overline { { | \mathcal { M } | ^ { 2 } } }$ 是费曼不变振幅对未测量的粒子自旋的平均（参见第 6.1 节）。$\mathcal { M }$ 的量纲（以能量为单位）为

• 对于衰变 $\left[ \mathcal { M } \right] = 3 - n$  
• 对于两个粒子的散射 $[ { \mathcal { M } } ] = 2 - n$

其中 $n$ 是产生的粒子数。

因此，计算某个可观测量包括两个阶段：

1. 确定 $\overline { { | \mathcal { M } | ^ { 2 } } }$。为此，我们使用下一节将介绍的费曼图方法。  
2. 对洛伦兹不变相空间积分

$$
d \text {L i p s} = (2 \pi) ^ {4} \delta^ {4} \left(p _ {1} + p _ {2} - p _ {1} ^ {\prime} - \dots - p _ {n} ^ {\prime}\right) \prod_ {i = 1} ^ {n} \frac {d ^ {3} p _ {i} ^ {\prime}}{\left(2 \pi\right) ^ {3} 2 E _ {i} ^ {\prime}}.
$$

---

## 5 费曼图

示例：$\phi ^ { 4 }$ -理论

$$
\mathcal {L} = \frac {1}{2} \partial_ {\mu} \phi \partial^ {\mu} \phi - \frac {1}{2} m ^ {2} \phi^ {2} - \frac {g}{4 !} \phi^ {4}
$$

• 自由（动能）拉格朗日量（恰好包含两个场的项）决定了理论的粒子及其传播子。这里我们只有一个标量场： [图片：标量传播子]

• 相互作用拉格朗日量（包含三个或更多场的项）决定了可能的顶点。这里，同样只有一个顶点： [图片：四点顶点]

我们构建所有具有固定外粒子的可能图。例如，对于此理论中两个标量粒子的散射，我们会有

费曼图时间从左向右流动。有些人绘制费曼图时时间向上流动，这更符合我们通常在相对论物理中绘制时空的方式。

由于每个顶点对应于 (42) 中的一个相互作用拉格朗日量（哈密顿量）项，带有圈的图对应于微扰理论的更高阶。这里我们只处理最低阶，因此只使用树图。

为了实际写出费曼振幅 $\mathcal { M }$，我们有一套费曼规则，将因子与费曼图的元素关联起来。具体来说，为了得到 $- i \mathcal { M }$，我们按以下方式构建费曼规则：

• 顶点因子就是 $i$ 乘以（动量空间）拉格朗日量中的相互作用项，并移除所有场：

$$
i \mathcal {L} _ {\mathrm {I}} = - i \frac {g}{4 !} \phi^ {4} \quad \stackrel {\text {r e m o v i n g f i e l d s}} {\Rightarrow} \quad - i \frac {g}{4 !} \quad \text{[顶点图示]}
$$

• 传播子是 $i$ 乘以动量空间中动能算符（由自由运动方程定义）的逆：

$$
\mathcal {L} _ {\text {f r e e}} \xrightarrow {\text {E u l e r - L a r g r a n e e q .}} \left(\partial_ {\mu} \partial^ {\mu} + m ^ {2}\right) \phi = 0 \quad \text {(K l e i n - G o r d o n e q .)} \tag {48}
$$

使用替换 $\partial ^ { \mu } \rightarrow - i p ^ { \mu }$ 转到动量空间，然后取逆得到：

$$
(p ^ {2} - m ^ {2}) \phi = 0 \quad \Rightarrow \quad \phi = \frac {i}{p ^ {2} - m ^ {2}} \tag {49}
$$

（实际上，正确的费曼传播子是 $i / ( p ^ { 2 } - m ^ { 2 } + i \epsilon )$，但为了我们的目的，我们可以忽略无穷小 $i \epsilon$ 项。）

• 外线由适当的极化矢量或旋量表示（在 (31)、(35)、(36) 及其共轭场中，位于相应产生或湮灭算符旁边的那个）：

| 粒子 | 费曼规则 |
|---|---|
| 入射费米子 | u |
| 出射费米子 | u |
| 入射反费米子 | v |
| 出射反费米子 | v |
| 入射光子 | εμ |
| 出射光子 | εμ* |
| 入射标量 | 1 |
| 出射标量 | 1 |

因此，这个 $\phi ^ { 4 }$ 理论中标量-标量散射振幅的树图贡献就是

$$
- i \mathcal {M} = - i \frac {g}{4 !}. \tag {50}
$$

**练习 13** 确定电子传播子以及量子电动力学（QED）唯一顶点的费曼规则：

$$
\mathcal {L} = \bar {\psi} (i \not \partial + e A - m) \psi - \frac {1}{4} F _ {\mu \nu} F ^ {\mu \nu} \quad F ^ {\mu \nu} = \partial^ {\mu} A ^ {\nu} - \partial^ {\nu} A ^ {\mu}. \tag {51}
$$

注意也有

$$
\xrightarrow {\mathbf {p}} = \frac {i \sum_ {\sigma} u (\boldsymbol {p} , \sigma) \bar {u} (\boldsymbol {p} , \sigma)}{p ^ {2} - m ^ {2}}, \tag {52}
$$

即，电子传播子只是标量传播子乘以极化求和。很好的是，这可以推广到所有粒子的传播子。这非常有帮助，因为由于规范对称性的复杂性，反转动子动能算符并非易事。因此，矢量粒子的传播子是：

有质量情况： [传播子表达式]
无质量情况：
$$
\mathbf {p} = \frac {- i g ^ {\mu \nu}}{p ^ {2}}. \tag {54}
$$

原则上，这几乎是我们需要知道的全部，以便能够计算任何给定过程的费曼振幅。注意，传播子和外线极化矢量仅由粒子类型（其自旋和质量）决定，因此上述相应规则不仅限于 $\phi ^ { 4 }$ 理论和 QED，而且适用于所有标量、自旋-1 矢量玻色子和狄拉克费米子（如标准模型）的理论。我们需要的唯一附加信息是顶点因子。

上一段中的“几乎”指的是，在一般的费曼图计算中，还有几个额外的微妙之处：

• 在圈图中，一些内部动量未确定，我们必须对这些动量积分。此外，每个封闭的费米子圈有一个额外的因子 (-1)。由于我们只考虑树图，我们可以忽略这一点。  
• 当相同场进入单个顶点时，存在一些组合数值因子。  
• 有时图之间存在相对 (-) 号。  
• 如果终态有相同粒子，则存在对称性因子。

关于这些的解释，建议读者查阅一些量子场论教科书。

---

## 6 示例：QED 中的 $e ^ { + } e ^ { - } \to \mu ^ { + } \mu ^ { - }$

只有一个贡献的树图：

[图片：s-channel 电子-正电子湮灭成μ子对的费曼图]

我们使用 QED 的费曼规则并沿着费米子线反向写下振幅。线本身的顺序无关紧要。

$$
- i \mathcal {M} = \left[ \bar {u} \left(\boldsymbol {p} _ {3}, \sigma_ {3}\right) \left(i e \gamma^ {\nu}\right) v \left(\boldsymbol {p} _ {4}, \sigma_ {4}\right) \right] \frac {- i g _ {\mu \nu}}{\left(p _ {1} + p _ {2}\right) ^ {2}} \left[ \bar {v} \left(\boldsymbol {p} _ {2}, \sigma_ {2}\right) \left(i e \gamma^ {\mu}\right) u \left(\boldsymbol {p} _ {1}, \sigma_ {1}\right) \right], \tag {55}
$$

或者，引入缩写 $u _ { 1 } \equiv u ( \pmb { p } _ { 1 } , \sigma _ { 1 } )$，

$$
\mathcal {M} = \frac {e ^ {2}}{\left(p _ {1} + p _ {2}\right) ^ {2}} \left[ \bar {u} _ {3} \gamma_ {\mu} v _ {4} \right] \left[ \bar {v} _ {2} \gamma^ {\mu} u _ {1} \right]. \tag {56}
$$

**练习 14** 为康普顿散射 $\gamma e ^ { - } \to \gamma e ^ { - }$ 绘制费曼图并写下振幅。

### 6.1 对极化求和

如果我们知道所有外粒子的动量和极化，我们就可以显式计算 $\mathcal { M }$。然而，实验通常使用未极化粒子进行，因此我们必须对未态粒子的极化（自旋）求和，并对初态粒子的极化（自旋）求平均：

$$
| \mathcal {M} | ^ {2} \rightarrow \overline {{| \mathcal {M} | ^ {2}}} = \underbrace {\frac {1}{2} \frac {1}{2} \sum_ {\sigma_ {1} \sigma_ {2}}} _ {\text {a v g . o v e r i n i t i a l p o l .}} \overbrace {\sum_ {\sigma_ {3} \sigma_ {4}}} ^ {\text {s u m o v e r f i n a l p o l .}} | \mathcal {M} | ^ {2}. \tag {57}
$$

因子 $1 / 2$ 是因为每个初态费米子有两个极化（自旋）态。

（问题：为什么我们对概率求和而不是对振幅求和？）

在计算 $| { \mathcal { M } } | ^ { 2 } = { \mathcal { M } } ^ { * } { \mathcal { M } }$ 时，需要以下恒等式

$$
[ \bar {u} \gamma^ {\mu} v ] ^ {*} = [ u ^ {\dagger} \gamma^ {0} \gamma^ {\mu} v ] ^ {\dagger} = v ^ {\dagger} \gamma^ {\mu \dagger} \gamma^ {0} u = [ \bar {v} \gamma^ {\mu} u ]. \tag {58}
$$

因此，

$$
\overline {{\left| \mathcal {M} \right| ^ {2}}} = \frac {e ^ {4}}{4 \left(p _ {1} + p _ {2}\right) ^ {4}} \sum_ {\sigma_ {1, 2, 3, 4}} \left[ \bar {v} _ {4} \gamma_ {\mu} u _ {3} \right] \left[ \bar {u} _ {1} \gamma^ {\mu} v _ {2} \right] \left[ \bar {u} _ {3} \gamma_ {\nu} v _ {4} \right] \left[ \bar {v} _ {2} \gamma^ {\nu} u _ {1} \right]. \tag {59}
$$

### 6.2 Casimir 技巧

使用以下技巧可以轻松执行对极化的求和。首先，我们用显式的旋量指标 $\alpha , \beta , \gamma , \delta = 1 , 2 , 3 , 4$ 写出 $\sum [ \bar { u } _ { 1 } \gamma ^ { \mu } v _ { 2 } ] [ \bar { v } _ { 2 } \gamma ^ { \nu } u _ { 1 } ]$：

$$
\sum_ {\sigma_ {1} \sigma_ {2}} \bar {u} _ {1 \alpha} \gamma_ {\alpha \beta} ^ {\mu} v _ {2 \beta} \bar {v} _ {2 \gamma} \gamma_ {\gamma \delta} ^ {\nu} u _ {1 \delta}. \tag {60}
$$

我们现在可以将 $u _ { 1 \delta }$ 移到前面（$u _ { 1 \delta }$ 只是一个数字，是 $u _ { 1 }$ 向量的元素，因此它与所有东西都对易），然后使用完备性关系 (27) 和 (28)，

$$
\begin{array}{l} \sum_ {\sigma_ {1}} u _ {1 \delta} \bar {u} _ {1 \alpha} = (\not {p} _ {1} + m _ {1}) _ {\delta \alpha}, \\ \sum_ {\sigma_ {2}} v _ {2 \beta} \bar {v} _ {2 \gamma} = \left(\not {p} _ {2} - m _ {2}\right) _ {\beta \gamma}, \\ \end{array}
$$

这将求和 (60) 变为

$$
\left(\not p _ {1} + m _ {1}\right) _ {\delta \alpha} \gamma_ {\alpha \beta} ^ {\mu} \left(\not p _ {2} - m _ {2}\right) _ {\beta \gamma} \gamma_ {\gamma \delta} ^ {\nu} = \operatorname {T r} \left[ \left(\not p _ {1} + m _ {1}\right) \gamma^ {\mu} \left(\not p _ {2} - m _ {2}\right) \gamma^ {\nu} \right]. \tag {61}
$$

这意味着

$$
\overline {{| \mathcal {M} | ^ {2}}} = \frac {e ^ {4}}{4 \left(p _ {1} + p _ {2}\right) ^ {4}} \operatorname {T r} \left[ \left(p _ {1} + m _ {1}\right) \gamma^ {\mu} \left(p _ {2} - m _ {2}\right) \gamma^ {\nu} \right] \operatorname {T r} \left[ \left(p _ {4} - m _ {4}\right) \gamma_ {\mu} \left(p _ {3} + m _ {3}\right) \gamma_ {\nu} \right]. \tag {62}
$$

因此我们摆脱了所有旋量，只剩下 $\gamma$ 矩阵的迹。这些可以使用下一节的关系来评估。

### 6.3 $\gamma$ 矩阵的迹与缩并恒等式

所有这些都是反对易关系 $\{ \gamma ^ { \mu } , \gamma ^ { \nu } \} = 2 g ^ { \mu \nu }$ 、$\{ \gamma ^ { \mu } , \gamma ^ { 5 } \} =$ $0 , ( \gamma ^ { 5 } ) ^ { 2 } = 1$ 的结果，而不是其他任何东西！

#### 迹恒等式

1. 奇数个 $\gamma$ 的迹为零：

$$
\begin{array}{l} \operatorname {T r} \left(\gamma^ {\mu_ {1}} \gamma^ {\mu_ {2}} \dots \gamma^ {\mu_ {2 n + 1}}\right) = \operatorname {T r} \left(\gamma^ {\mu_ {1}} \gamma^ {\mu_ {2}} \dots \gamma^ {\mu_ {2 n + 1}} \overbrace {\gamma^ {5} \gamma^ {5}} ^ {1}\right) \\ \left(\text {m o v i n g} \gamma^ {5} \text {o v e r e a c h} \gamma^ {\mu_ {i}}\right) = - \operatorname {T r} \left(\gamma^ {5} \gamma^ {\mu_ {1}} \gamma^ {\mu_ {2}} \dots \gamma^ {\mu_ {2 n + 1}} \gamma^ {5}\right) \\ \text {(c y c l i c p r o p e r t y o f t r a c e)} = - \operatorname {T r} \left(\gamma^ {\mu_ {1}} \gamma^ {\mu_ {2}} \dots \gamma^ {\mu_ {2 n + 1}} \gamma^ {5} \gamma^ {5}\right) \\ = - \operatorname {T r} \left(\gamma^ {\mu_ {1}} \gamma^ {\mu_ {2}} \dots \gamma^ {\mu_ {2 n + 1}}\right) \\ = 0 \\ \end{array}
$$

2. Tr 1 = 4

3.

$$
\begin{array}{l} \mathrm {T r} \gamma^ {\mu} \gamma^ {\nu} = \mathrm {T r} (2 g ^ {\mu \nu} - \gamma^ {\nu} \gamma^ {\mu}) \stackrel {(2 .)} {=} 8 g ^ {\mu \nu} - \mathrm {T r} \gamma^ {\nu} \gamma^ {\mu} = 8 g ^ {\mu \nu} - \mathrm {T r} \gamma^ {\mu} \gamma^ {\nu} \\ \Rightarrow 2 \operatorname {T r} \gamma^ {\mu} \gamma^ {\nu} = 8 g ^ {\mu \nu} \Rightarrow \operatorname {T r} \gamma^ {\mu} \gamma^ {\nu} = 4 g ^ {\mu \nu} \\ \end{array}
$$

这也意味着：

$$
\operatorname {T r} \partial / \partial / = 4 a \cdot b
$$

4. **练习 15** 计算 $\operatorname { T r } ( \gamma ^ { \mu } \gamma ^ { \nu } \gamma ^ { \rho } \gamma ^ { \sigma } )$。提示：使用反对易关系将 $\gamma ^ { \sigma }$ 一直移到左边。然后使用 3。

作业：证明 $\operatorname { T r } ( \gamma ^ { \mu _ { 1 } } \gamma ^ { \mu _ { 2 } } \cdot \cdot \cdot \gamma ^ { \mu _ { 2 n } } )$ 有 $( 2 n - 1 ) ! !$ 项。

5. ${ \mathrm { T r } } ( \gamma ^ { 5 } \gamma ^ { \mu _ { 1 } } \gamma ^ { \mu _ { 2 } } \cdot \cdot \cdot \gamma ^ { \mu _ { 2 n + 1 } } ) = 0$。这可以从 1. 以及 $\gamma ^ { 5 }$ 由偶数个 $\gamma$ 组成的事实得出。  
6. $\mathrm { T r } \gamma ^ { 5 } = \mathrm { T r } ( \gamma ^ { 0 } \gamma ^ { 0 } \gamma ^ { 5 } ) = - \mathrm { T r } ( \gamma ^ { 0 } \gamma ^ { 5 } \gamma ^ { 0 } ) = - \mathrm { T r } \gamma ^ { 5 } = 0$  
7. ${ \mathrm { T r } } ( \gamma ^ { 5 } \gamma ^ { \mu } \gamma ^ { \nu } ) = 0$。（与上面相同的技巧，用 $\gamma ^ { \alpha } \neq \mu , \nu$ 代替 $\gamma ^ { 0 }$。）  
8. $\operatorname { T r } ( \gamma ^ { 5 } \gamma ^ { \mu } \gamma ^ { \nu } \gamma ^ { \rho } \gamma ^ { \sigma } ) = - 4 i \epsilon ^ { \mu \nu \rho \sigma }$，其中 $\epsilon ^ { 0 1 2 3 } = 1$。注意：也有使用 $\epsilon ^ { 0 1 2 3 } = - 1$ 的约定。

#### 缩并恒等式

1.

$$
\gamma^ {\mu} \gamma_ {\mu} = \frac {1}{2} g _ {\mu \nu} \underbrace {\left(\gamma^ {\mu} \gamma^ {\nu} + \gamma^ {\nu} \gamma^ {\mu}\right)} _ {2 g ^ {\mu \nu}} = g _ {\mu \nu} g ^ {\mu \nu} = 4
$$

2.

$$
\gamma^ {\mu} \underbrace {\gamma^ {\alpha} \gamma_ {\mu}} _ {- \gamma_ {\mu} \gamma^ {\alpha} + 2 g _ {\mu} ^ {\alpha}} = - 4 \gamma^ {\alpha} + 2 \gamma^ {\alpha} = - 2 \gamma^ {\alpha}
$$

3. **练习 16** 缩并 $\gamma ^ { \mu } \gamma ^ { \alpha } \gamma ^ { \beta } \gamma _ { \mu }$  
4. $\gamma ^ { \mu } \gamma ^ { \alpha } \gamma ^ { \beta } \gamma ^ { \gamma } \gamma _ { \mu } = - 2 \gamma ^ { \gamma } \gamma ^ { \beta } \gamma ^ { \alpha }$

**练习 17** 计算 $\overline { { | \mathcal { M } | ^ { 2 } } }$ 中的迹：

$$
\operatorname {T r} \left[ \left(\not p _ {1} + m _ {1}\right) \gamma^ {\mu} \left(\not p _ {2} - m _ {2}\right) \gamma^ {\nu} \right] = ?
$$

$$
\mathrm {T r} [ (\not {p} _ {4} - m _ {4}) \gamma_ {\mu} (\not {p} _ {3} + m _ {3}) \gamma_ {\nu} ] = ?
$$

**练习 18** 计算 $| \overline { { | \mathcal { M } | ^ { 2 } } }$。

### 6.4 质心系中的运动学

在 $e ^ { + } e ^ { - }$ 对撞机中，通常 $p _ { i } \gg m _ { e } , m _ { \mu }$ ，$i = 1 , \dots , 4$，因此我们可以取

$$
m _ {i} \rightarrow 0 \quad \text {‘高能”或“极端相对论”极限}
$$

那么

$$
\overline {{| \mathcal {M} | ^ {2}}} = \frac {8 e ^ {4}}{(p _ {1} + p _ {2}) ^ {4}} \left[ \left(p _ {1} \cdot p _ {3}\right) \left(p _ {2} \cdot p _ {4}\right) + \left(p _ {1} \cdot p _ {4}\right) \left(p _ {2} \cdot p _ {3}\right) \right] \tag {63}
$$

为了计算散射截面 $\sigma$，我们必须具体到某个特定参考系（$\sigma$ 不是与参考系无关的）。对于 $e ^ { + } e ^ { - }$ 对撞机，最相关的是质心 (CM) 系：

[图片：质心系运动学示意图]

**练习 19** 用 $E$ 和 $\theta$ 表示 $| \overline { { | \mathcal { M } | ^ { 2 } } }$。

### 6.5 对二粒子相空间积分

现在我们可以对 $1 + 2 \to 3 + 4$ 微分散射截面使用“黄金规则” (45)

$$
d \sigma = \frac {1}{u _ {\alpha}} \frac {1}{2 E _ {1}} \frac {1}{2 E _ {2}} \overline {{| \mathcal {M} | ^ {2}}} d \mathrm {L i p s} _ {2} \tag {64}
$$

其中要积分的二粒子相空间为

$$
d \operatorname {L i p s} _ {2} = (2 \pi) ^ {4} \delta^ {4} \left(p _ {1} + p _ {2} - p _ {3} - p _ {4}\right) \frac {d ^ {3} p _ {3}}{(2 \pi) ^ {3} 2 E _ {3}} \frac {d ^ {3} p _ {4}}{(2 \pi) ^ {3} 2 E _ {4}}. \tag {65}
$$

首先，我们对六个积分变量中的四个积分，并在一般参考系中进行。$\delta$ -函数使得对 $d ^ { 3 } p _ { 4 }$ 的积分变得平凡：

$$
d \operatorname {L i p s} _ {2} = \frac {1}{(2 \pi) ^ {2} 4 E _ {3} E _ {4}} \delta \left(E _ {1} + E _ {2} - E _ {3} - E _ {4}\right) \underbrace {d ^ {3} p _ {3}} _ {\boldsymbol {p} _ {3} ^ {2} d \left| \boldsymbol {p} _ {3} \right| d \Omega_ {3}} \tag {66}
$$

现在，我们注意到 $E _ { 3 }$ 和 $E _ { 4 }$ 是 $\left| p _ { 3 } \right|$ 的函数：

$$
E _ {3} = E _ {3} \left(\left| \boldsymbol {p} _ {3} \right|\right) = \sqrt {\boldsymbol {p} _ {3} ^ {2} + m _ {3} ^ {2}},
$$

$$
E _ {4} = \sqrt {\boldsymbol {p} _ {4} ^ {2} + m _ {4} ^ {2}} = \sqrt {\boldsymbol {p} _ {3} ^ {2} + m _ {4} ^ {2}},
$$

并通过 $\delta$ -函数关系

$$
\delta \left(E _ {1} + E _ {2} - \sqrt {\boldsymbol {p} _ {3} ^ {2} + m _ {3} ^ {2}} - \sqrt {\boldsymbol {p} _ {3} ^ {2} + m _ {4} ^ {2}}\right) = \delta \left[ f \left(\left| \boldsymbol {p} _ {3} \right|\right) \right] = \frac {\delta \left(\left| \boldsymbol {p} _ {3} \right| - \left| \boldsymbol {p} _ {3} ^ {(0)} \right|\right)}{\left| f ^ {\prime} \left(\left| \boldsymbol {p} _ {3} \right|\right) \right| _ {\left| \boldsymbol {p} _ {3} \right| = \left| \boldsymbol {p} _ {3} ^ {(0)} \right|}}. \tag {67}
$$

这里 $| p _ { 3 } |$ 只是积分变量，$| p _ { 3 } ^ { ( 0 ) } |$ 是 $f ( | p _ { 3 } | )$ 的零点，即第三个粒子的实际动量。在对 $d | p _ { 3 } |$ 积分后，我们令 $\vert p _ { 3 } ^ { ( 0 ) } \vert \rightarrow \vert p _ { 3 } \vert$。

由于

$$
f ^ {\prime} \left(\left| \boldsymbol {p} _ {3} \right|\right) = - \frac {E _ {3} + E _ {4}}{E _ {3} E _ {4}} \left| \boldsymbol {p} _ {3} \right|, \tag {68}
$$

我们得到

$$
d \operatorname {L i p s} _ {2} = \frac {\left| \boldsymbol {p} _ {3} \right| d \Omega}{1 6 \pi^ {2} \left(E _ {1} + E _ {2}\right)}. \tag {69}
$$

现在我们再次具体到 CM 系，并注意通量因子为

$$
4 E _ {1} E _ {2} u _ {\alpha} = 4 \sqrt {\left(p _ {1} \cdot p _ {2}\right) ^ {2} - m _ {1} ^ {2} m _ {2} ^ {2}} = 4 \left| \boldsymbol {p} _ {1} \right| \left(E _ {1} + E _ {2}\right), \tag {70}
$$

最终给出

$$
\frac {d \sigma_ {\mathrm {C M}}}{d \Omega} = \frac {1}{6 4 \pi^ {2} \left(E _ {1} + E _ {2}\right) ^ {2}} \frac {\left| \boldsymbol {p} _ {3} \right|}{\left| \boldsymbol {p} _ {1} \right|} \overline {{\left| \mathcal {M} \right| ^ {2}}}. \tag {71}
$$

注意，我们在每一步都保留了质量，因此这个公式对于任何 CM 散射都是普遍有效的。

对于我们特定的 $e ^ { - } e ^ { + } \to \mu ^ { - } \mu ^ { + }$ 散射，这给出了微分截面的最终结果（引入精细结构常数 $\alpha = e ^ { 2 } / ( 4 \pi ) )$

$$
\frac {d \sigma}{d \Omega} = \frac {\alpha^ {2}}{1 6 E ^ {2}} \left(1 + \cos^ {2} \theta\right). \tag {72}
$$

**练习 20** 对此积分得到总截面 $\sigma$。

注意，显然 $\sigma \propto \alpha ^ { 2 }$，并且量纲分析要求 $\sigma \propto 1 / E ^ { 2 }$，因此只有角度依赖关系 $\left( 1 + \cos ^ { 2 } \theta \right)$ 检验了 QED 作为轻子和光子理论的地位。

### 6.6 步骤总结

概括地说，计算（未极化）散射截面（或衰变宽度）包括以下步骤：

1. 绘制费曼图  
2. 使用费曼规则写出 $- i \mathcal { M }$  
3. 平方 $\mathcal { M }$ 并使用 Casimir 技巧得到迹  
4. 评估迹  
5. 应用所选参考系的运动学  
6. 对相空间积分

### 6.7 Mandelstam 变量

Mandelstam 变量 s、$t$ 和 $u$ 常用于散射计算。它们（对于 $1 + 2  3 + 4$ 散射）定义为

$$
\begin{array}{l} s = (p _ {1} + p _ {2}) ^ {2} \\ t = (p _ {1} - p _ {3}) ^ {2} \\ u = (p _ {1} - p _ {4}) ^ {2} \\ \end{array}
$$

**练习 21** 证明 $s + t + u = m _ { 1 } ^ { 2 } + m _ { 2 } ^ { 2 } + m _ { 3 } ^ { 2 } + m _ { 4 } ^ { 2 }$。

这意味着只有两个 Mandelstam 变量是独立的。它们的主要优点是它们是洛伦兹不变量，这使得它们在费曼振幅计算中很方便。只有在最后，我们才能将它们换成“实验者”的变量 $E$ 和 $\theta$。

**练习 22** 用 Mandelstam 变量表示 $e ^ { - } e ^ { + } \to \mu ^ { - } \mu ^ { + }$ 散射的 $\overline { { | \mathcal { M } | ^ { 2 } } }$。

---

## 附录：在计算机上计算费曼图

有几个计算机程序可以执行费曼图计算中的部分或全部步骤。以下是与其中一个程序（FeynCalc [2]，Wolfram Mathematica 的包）的一个简单会话，我们在其中计算了与正文中相同的过程，$e ^ { - } e ^ { + } \to \mu ^ { - } \mu ^ { + }$。另一个仅依赖开源软件的框架是 FORM [3]。

### FeynCalc 演示

这个 Mathematica 笔记本演示了使用 Feyncalc 包对 $e ^ { - } ~ e ^ { + } \to \mu ^ { - } \mu ^ { + }$ 散射进行费曼不变振幅的计算机计算。

首先，我们将 FeynCalc 加载到 Mathematica 中：

```
I n [ 1 ] := <<HighEnergyPhysics`fc`
```

FeynCalc 4.1.0.3b 评估 ?FeynCalc 获取帮助或访问 www.feyncalc.org

在使用费曼规则并应用 Casimir 技巧后，自旋平均的费曼振幅平方 $\overline { { | \mathcal { M } | ^ { 2 } } }$：

```
I n [ 2 ] := Msq = (e^4/(4 (p1 + p2)^4)) * Contract[ 
  Tr[(GS[p1] + me).GA[μ].(GS[p2] - me).GA[ν]] *
  Tr[(GS[p4] - mm).GA[μ].(GS[p3] + mm).GA[ν]] ]
```

```
O u t [ 2 ] = (1/(4 (p1 + p2)^4)) (e^4 (64 mm^2 me^2 + 32 p3·p4 me^2 + 32 mm^2 p1·p2 + 32 p1·p4 p2·p3 + 32 p1·p3 p2·p4))
```

迹被自动评估，缩并自动执行。现在我们通过替换规则引入 Mandelstam 变量：

```
I n [ 3 ] := prod[a_, b_] := Pair[Momentum[a], Momentum[b]];
mandelstam = {prod[p1, p2] -> (s - me^2 - me^2)/2,
              prod[p3, p4] -> (s - mm^2 - mm^2)/2,
              prod[p1, p3] -> (t - me^2 - mm^2)/2,
              prod[p2, p4] -> (t - me^2 - mm^2)/2,
              prod[p1, p4] -> (u - me^2 - mm^2)/2,
              prod[p2, p3] -> (u - me^2 - mm^2)/2,
              (p1 + p2) -> Sqrt[s]};
```

并将这些替换应用于我们的振幅：

```
I n [ 5 ] := Msq /. mandelstam
```

```
O u t [ 5 ] = (1/(4 s^2)) (e^4 (64 mm^2 me^2 + 16 (s - 2 mm^2) me^2 + 8 (- me^2 - mm^2 + t)^2 + 8 (- me^2 - mm^2 + u)^2 + 16 mm^2 (s - 2 me^2)))
```

通过消除一个 Mandelstam 变量可以简化这个结果：

```
I n [ 6 ] := Simplify[TrickMandelstam[%, s, t, u, 2 me^2 + 2 mm^2]]
```

```
O u t [ 6 ] = (2 e^4 (2 me^4 + 4 (mm^2 - u) me^2 + 2 mm^4 + s^2 + 2 u^2 - 4 mm^2 u + 2 s u))/s^2
```

如果我们进入超相对论极限，我们得到的结果与手动计算一致：

```
I n [ 7 ] := Simplify[% /. {mm -> 0, me -> 0}]
```

```
O u t [ 7 ] = (2 e^4 (t^2 + u^2))/s^2
```

---

## 参考文献

[1] D. Griffiths, Introduction to elementary particles, Wiley (1987)

[2] V. Shtabovenko, R. Mertig and F. Orellana, New Developments in FeynCalc 9.0, arXiv:1601.01167 [hep-ph].  
[3] J. A. M. Vermaseren, New features of FORM, math-ph/0010025.


$$
\begin{gather}
a + b = c \\
e = mc^2
\end{gather}
$$
