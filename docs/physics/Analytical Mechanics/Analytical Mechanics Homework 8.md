# 分析力学 第8次作业

Chasse_neige

5.3 杆 $AB$ 长 $L$ 绕 $O C$ 以 $\omega$ 转动, $D$ 是其中心, $O D=a$, 而 $O C$ 绕坚直轴以 $\Omega$ 转动, 如图 5.13 所示。假设初始时刻 $B$ 点刚好在最低点, 求角速度在实验室系和本体坐标系的表示, 以及 $B$ 点在最低点时的速率。

<img src="./Analytical Mechanics Homework 8.assets/image-20251119192724553.png" alt="image-20251119192724553" style="zoom:50%;" />



在利用欧拉角表示的角速度为
$$
\dot{\theta} = 0, \quad \dot{\phi} = \Omega, \quad \dot{\psi} = \omega
$$
所以在本体系下的角速度为
$$
\vec{\omega} = \begin{pmatrix}
\Omega \sin \theta \sin \psi \\
\Omega \sin \theta \cos \psi \\
\omega + \Omega \cos \theta
\end{pmatrix}
$$
在实验室系下的角速度为
$$
\vec{\omega} = \begin{pmatrix}
\omega \sin \theta \sin \phi \\
- \omega \sin \theta \cos \phi \\
\Omega + \omega \cos \theta
\end{pmatrix}
$$
其中， $\phi = \Omega t, \psi = \omega t$

B 在最低点的速率，考虑 $t = 0$ 时
$$
\vec{v}_{B} = \vec{\omega} \times \vec{r}_{B} = \begin{pmatrix}
0 \\
- \omega \sin \theta \\
\Omega + \omega \cos \theta
\end{pmatrix} \times \begin{pmatrix}
0 \\
- a \sin \theta - \frac{L}{2} \cos \theta \\
a \cos \theta - \frac{L}{2} \sin \theta 
\end{pmatrix} \\ = 
\begin{pmatrix}
\omega \frac{L}{2} + \Omega (a \sin \theta + \frac{L}{2} \cos \theta) \\
0 \\
0
\end{pmatrix}
$$
所以 B 在最低点处的速率为
$$
|\vec{v}_{B}| = \omega \frac{L}{2} + \Omega (a \sin \theta + \frac{L}{2} \cos \theta)
$$
5.6 一匀质薄圆盘, 质量 $m$, 半径 $R$, 以圆心为原点, $x$, $y$ 轴在盘面建立直角坐标系, 求惯量张量; 如果一轴通过圆盘边缘但与 $z$ 轴成 $\theta$ 角, 如图 5.15 所示。求对该轴的转动惯量。

<img src="./Analytical Mechanics Homework 8.assets/image-20251119192807422.png" alt="image-20251119192807422" style="zoom:50%;" />

直接写出相对于质心的惯量张量为
$$
I = \begin{pmatrix}
\frac{1}{4} m R^{2} & 0 & 0 \\
0 & \frac{1}{4} m R^{2} & 0 \\
0 & 0 & \frac{1}{2} m R^{2}
\end{pmatrix}
$$
对于圆盘边缘的点 $(R, 0 , 0)$, 根据惯量张量分量在平移下的变换关系得到
$$
I' = \begin{pmatrix}
\frac{1}{4} m R^{2} & 0 & 0 \\
0 & \frac{5}{4} m R^{2} & 0 \\
0 & 0 & \frac{3}{2} m R^{2}
\end{pmatrix}
$$


再求出相对图中给出轴的转动惯量
$$
J = \begin{pmatrix} \sin \theta & 0 & \cos \theta \end{pmatrix} \begin{pmatrix}
\frac{1}{4} m R^{2} & 0 & 0 \\
0 & \frac{5}{4} m R^{2} & 0 \\
0 & 0 & \frac{3}{2} m R^{2}
\end{pmatrix} \begin{pmatrix}
\sin \theta \\
0 \\
\cos \theta
\end{pmatrix} = \frac{1}{4} m R^{2} (1 + 5 \cos^{2} \theta)
$$
5.8 质量为 $m$ 的两质点连接于长度 $l$ 的刚性轻杆上, 绕通过质心 $O$ 的轴 $OA$ 以角速度 $\Omega$ 转动, $OA$ 与两质点的连线夹角为 $\alpha$, 如图 5.17 所示。求:

<img src="./Analytical Mechanics Homework 8.assets/image-20251119193115425.png" alt="image-20251119193115425" style="zoom:50%;" />

(1) 系统对质心的角动量;

在本体系下写出惯量张量
$$
I = \begin{pmatrix}
2 m l^{2} & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 2 m l^{2}
\end{pmatrix}
$$
这个刚体在欧拉角的描述下是没有自转的，所以我们不妨取 $\psi = 0, \phi = \Omega t$

本体系中的角速度为
$$
\vec{\omega} = \begin{pmatrix}
0 \\
- \Omega \cos \alpha \\
\Omega \sin \alpha
\end{pmatrix}
$$
所以在本体系中的角动量为
$$
\vec{L} = \begin{pmatrix}
0 \\
0 \\
2 m l^{2} \Omega \sin \alpha
\end{pmatrix}
$$
转换到实验室系中，得到相对于质心的角动量为
$$
\vec{L} = \begin{pmatrix}
2 m l^{2} \Omega \sin \alpha \cos \alpha \sin \phi \\
- 2 m l^{2} \Omega \sin \alpha \cos \alpha \cos \phi\\
2 m l^{2} \Omega \sin^{2} \alpha
\end{pmatrix}
$$
其中 $\phi  = \Omega t$

(2) 系统所受力矩;

直接求导得到
$$
\vec{M} = \dv{\vec{L}}{t} = \begin{pmatrix}
2 m l^{2} \Omega^{2} \sin \alpha \cos \alpha \cos \phi \\
2 m l^{2} \Omega^{2} \sin \alpha \cos \alpha \sin \phi\\
0
\end{pmatrix}
$$
(3) 系统转动动能。
$$
T = \frac{1}{2} \omega^{T} I \omega  = \frac{1}{2} \begin{pmatrix}
0 &
- \Omega \cos \alpha &
\Omega \sin \alpha
\end{pmatrix}
\begin{pmatrix}
2 m l^{2} & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 2 m l^{2}
\end{pmatrix}
\begin{pmatrix}
0 \\
- \Omega \cos \alpha \\
\Omega \sin \alpha
\end{pmatrix} = m l^{2} \Omega^{2} \sin^{2} \alpha
$$


5.10 5.8 题力矩突然撤除, 求:
(1) 系统对 $O$ 点的角动量;

不妨假设在 $\phi = 0$ 的时候力矩突然消除，那么此后角动量守恒
$$
\vec{L} = \begin{pmatrix}0 \\- 2 m l^{2} \Omega \sin \alpha \cos \alpha \\ 2 m l^{2} \Omega \sin^{2} \alpha\end{pmatrix}
$$
(2) 系统转动的角速度及各欧拉角的时间变化率。

撤去外力矩之后系统的自由转动即为欧拉-潘索情况，带入欧拉方程
$$
I_{1} \dot{\omega}_{1} -  (I_{2} - I_{3}) \omega_{2} \omega_{3} = 0 \\
I_{2} \dot{\omega}_{2} -  (I_{3} - I_{1}) \omega_{3} \omega_{1} = 0 \\
I_{3} \dot{\omega}_{3} -  (I_{1} - I_{2}) \omega_{1} \omega_{2} = 0
$$
所以
$$
\dot{\omega}_{1} + \omega_{2} \omega_{3} = 0 \\
\dot{\omega}_{3} - \omega_{1} \omega_{2} = 0
$$
带入初始条件
$$
\omega_{1} = 0\\
\omega_{2} = - \Omega \cos \alpha \\
\omega_{3} = \Omega \sin \alpha
$$
解得
$$
\omega_{1} = \Omega \sin \alpha \sin (\Omega \cos \alpha t) \\
\omega_{2} = - \Omega \cos \alpha \\
\omega_{3} = \Omega \sin \alpha \cos (\Omega \cos \alpha t)
$$
所以实验室系中的角速度为（重新选取实验室系坐标轴的方向使得 $+z$ 方向和角动量方向相同）
$$
\vec{\omega} = \begin{pmatrix}
- \Omega \cos \alpha \sin (\Omega \sin \alpha t) \\
- \Omega \cos \alpha \cos(\Omega \sin \alpha t) \\
\Omega \sin \alpha
\end{pmatrix}
$$
欧拉角的时间变化率为（为了简单起见，在处理这种对称刚体时我们选取自转轴为 $-y$ 方向）
$$
\dot{\theta} = 0, \dot{\phi} = \Omega \sin \alpha, \dot{\psi} = \Omega \cos \alpha
$$



