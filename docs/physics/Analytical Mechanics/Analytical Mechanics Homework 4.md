# 分析力学 第4次作业

Chasse_neige

2.11 地球表面大气由于重力导致密度不均, 也因此造成光的折射率随高度变化。若气体分子数密度可以用 $n(y)$ 来表示, $y$ 是距地面的垂直高度, 则 $n(y)=n_{0} \mathrm{e}^{-\alpha y}$, $n_{0}$ 是地面上气体分子数密度, 而折射率为 $\sqrt{1+\beta n(y)}$, 为简化问题, 可以假设 $\alpha$ 、 $\beta$ 都是常量。由于大气厚度相比地球半径小很多, 可以忽略地面弧度, 只考虑高度变化。当太阳光线以某个人射角 $\theta$ 进入大气层后, 光线通过大气到达地面的轨迹可以通过光程极小来确定, 也就是使得积分值 $\int_{\infty}^{0} \sqrt{1+\beta n(y)} \mathrm{d} s$ 极小, 这里 $\mathrm{d} s$ 是光线的长度。试利用泛函变分极值方法给出光线轨迹方程。

假设光线轨迹方程为 $x(y)$

代入折射率和高度的依赖关系，得到光程
$$
S = \int_{\infty}^{0} \sqrt{1 + \beta n_{0} e^{- \alpha y}} \sqrt{1 + x'^{2}} \, \dd y
$$
由泛函极值的变分关系得到
$$
\delta S = 0
$$
所以轨迹函数满足EL方程
$$
\dv{}{y} \left(\pdv{\sqrt{1 + \beta n_{0} e^{- \alpha y}} \sqrt{1 + x'^{2}}}{x'} \right) = 0
$$
所以
$$
\sqrt{1 + \beta n_{0} e^{- \alpha y}} \frac{x'}{\sqrt{1 + x'^{2}}} = Const
$$
定义 $x' = \tan \theta(y)$
$$
\sin \theta(y) = \frac{C}{\sqrt{1 + \beta n_{0} e^{- \alpha y}}}
$$
利用“太阳光线以某个人射角 $\theta$ 进入大气层”的条件得到
$$
C = \sin \theta
$$
所以
$$
\frac{x'}{\sqrt{1 + x'^{2}}} = \frac{\sin \theta}{\sqrt{1 + \beta n_{0} e^{- \alpha y}}} \\
x' = \sqrt{\frac{1}{\cot^{2} \theta + \frac{\beta n_{0}}{\sin^{2} \theta} e^{- \alpha y}}}
$$
积分得到
$$
x (y) = \int_{\infty}^{y} \sqrt{\frac{1}{\cot^{2} \theta + \frac{\beta n_{0}}{\sin^{2} \theta} e^{- \alpha y}}} \dd y = \sin \theta \int_{\infty}^{y} \sqrt{\frac{1}{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}}} \dd y \\ 
= \sin \theta \int_{\cos^{2} \theta}^{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}} \sqrt{\frac{1}{u}} \dd{\left(- \frac{1}{\alpha} \ln(\frac{u - \cos^{2} \theta}{\beta n_{o}}) \right)} \\
= - \frac{\sin \theta}{\alpha} \int_{\cos^{2} \theta}^{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}} \frac{\dd u}{(u - \cos^{2} \theta) \sqrt{u}} = - \frac{2 \sin \theta}{\alpha} \int_{\cos \theta}^{\sqrt{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}}} \frac{\dd x}{x^{2} - \cos^{2} \theta} \\
= - \frac{\tan \theta}{\alpha} \int_{\cos \theta}^{\sqrt{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}}} \frac{\dd x}{x - \cos \theta} - \frac{\dd x}{x + \cos \theta} \\
= \frac{\tan \theta}{\alpha} \ln(\frac{\sqrt{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}} + \cos \theta}{\sqrt{\cos^{2} \theta + \beta n_{0} e^{- \alpha y}} - \cos \theta }) + C
$$
其中常数用来消除原点处 $y$ 坐标的发散

2.16 一带电粒子(质量为 $m$ 、电荷为 $e$ ) 在电磁场中的运动速度为 $\boldsymbol{v}$, 其非相对论的拉格朗日量为 
$$
L=\frac{1}{2} m \boldsymbol{v}^{2}-e \phi+e \mathbf{A} \cdot \boldsymbol{v}
$$
其中 $\phi$ 和 $\mathbf{A}$ 分别是电磁场的标量势和矢量势。试利用哈密顿原理给出粒子的运动微分方程。
$$
\delta S = \delta \int (\frac{1}{2} m \vec{v}^{2}-e \phi+e \vec{A} \cdot \vec{v}) \, \dd t = 0
$$

$$
\delta \int (\frac{1}{2} m \vec{v}^{2}-e \phi+e \vec{A} \cdot \vec{v}) \, \dd t  = \int \dd t \left( m \vec{v} \cdot \delta \vec{v} + e \vec{A} \cdot \delta \vec{v} - e \delta \phi + e \vec{v} \cdot \delta \vec{A} \right)
$$

现在把所有的变分通过分部积分等手段化为对坐标的变分
$$
(m \vec{v} + e \vec{A}) \cdot \delta \vec{v} = - (m \vec{a} + e \pdv{\vec{A}}{t} + e \nabla \vec{A} \cdot \vec{v}) \cdot \delta \vec{r}
$$

$$
e \delta \phi = e \nabla \phi \cdot \delta \vec{r}
$$

$$
e \vec{v} \cdot \delta \vec{A} = e \vec{v} \cdot \nabla \vec{A} \cdot \delta \vec{r}
$$

所以
$$
- (m \vec{a} + e \pdv{\vec{A}}{t} + e \nabla \vec{A} \cdot \vec{v}) - e \nabla \phi + e \vec{v} \cdot \nabla \vec{A} = 0
$$
得到运动方程
$$
m \vec{a} = - e (\nabla \phi + \pdv{\vec{A}}{t}) + e [\vec{v}, \nabla \vec{A}] =  e (\vec{E} + \vec{v} \times \vec{B} )
$$
3.1 一带电粒子 (质量 $m$ 、电荷 $e$ ) 以速度 $\boldsymbol{v}$ 在匀强磁场中运动, 其拉格朗日量为 
$$
L= \frac{m c^{2}}{\sqrt{1-\frac{v^{2}}{c^{2}}}}+e \mathbf{A} \cdot \boldsymbol{v}
$$
其中 $\mathbf{A}$ 是矢势。试证明系统具有空间反射对称性。

证明

不失一般性，考虑对于 $x-y$ 平面的反射变换
$$
R = \begin{pmatrix} 
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1
\end{pmatrix}
$$
变换后的速度以及矢势变为
$$
\vec{v'} = \begin{pmatrix} \dot{x} \\ \dot{y} \\ - \dot{z} \end{pmatrix} \qquad \vec{A'} = \begin{pmatrix} A_{x} \\ A_{y} \\ - A_{z} \end{pmatrix}
$$
反射变换下的拉氏量中

第一项
$$
\frac{m c^{2}}{\sqrt{1-\frac{v'^{2}}{c^{2}}}} =  \frac{m c^{2}}{\sqrt{1-\frac{v^{2}}{c^{2}}}}
$$
第二项
$$
e \vec{A'} \cdot \vec{v'} = e (A_{x} \dot{x} + A_{y}  \dot{y} + A_{z} \dot{z} ) = e \vec{A} \cdot \vec{v}
$$
由于拉氏量在空间反射下保持不变，再看EL方程中
$$
\dv{}{t} \pdv{}{\dot{x}}, \dv{}{t} \pdv{}{\dot{y}}, \pdv{}{x}, \pdv{}{y}
$$
不变
$$
- \dv{}{t} \pdv{}{\dot{z}}, - \pdv{}{z}
$$
中的负号相互抵消，所以运动方程也具有空间反射不变性，即系统是空间反射对称的。

3.2 一带电粒子 (质量 $m$ 、电荷 $e$ ) 在静电场中运动。利用其拉格朗日量的性质证明系统具有时间反演对称性。

证明

带电粒子的拉氏量为
$$
L = \frac{m c^{2}}{\sqrt{1 - \frac{v^{2}}{c^{2}}}} - e \phi
$$
在时间反演变换下
$$
\vec{v'} = - \dv{\vec{r}}{t}   = - \vec{v}
$$
由于是静电场，所以电势分布不会改变

时间变换下的拉氏量中

第一项
$$
\frac{m c^{2}}{\sqrt{1-\frac{v'^{2}}{c^{2}}}} =  \frac{m c^{2}}{\sqrt{1-\frac{v^{2}}{c^{2}}}}
$$
第二项显然不变，所以拉氏量在时间反演下不变

注意EL方程中
$$
\dv{}{t} \pdv{}{\dot{\vec{r}}}
$$
中的两个负号相互抵消，而右侧对坐标的偏导数与时间无关，所以运动方程也不变

故系统具有时间反演对称性

3.3 试证一质点在有心力的作用下, 其运动轨迹一定是在一个平面内。

证明

拉格朗日量可以写为
$$
L = \frac{1}{2} m \dot{\vec{r}}^{2}  + \frac{G M m}{r}
$$
利用无穷小转动变换下的对称性容易得到存在守恒量
$$
\vec{L} = \vec{r} \times \vec{p}
$$
由于
$$
\vec{r} \cdot \vec{L} = \vec{r} \cdot (\vec{r} \times \vec{p}) = 0
$$
所以运动轨迹一定在垂直于 $\vec{L}$ 的平面内