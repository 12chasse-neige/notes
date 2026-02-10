# 电动力学 第6周作业

Chasse_neige

1.  书6.12, 6.15, 6.16

6.12 电偶极子 $p_0$ 以速度 $v$ 作匀速运动，求它产生的电磁势和场 $\varphi, A; E, B$。

取Lorentz Boost的方向为x轴，记 $p_{0}$ 所在位置为原点，记当前时刻为时间零点。

电磁势：

在电偶极子系中，电偶极子产生的电磁势为：
$$
\phi'  = \frac{1}{4 \pi \epsilon_{0}} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}}
$$

$$
\vec{A}' = 0
$$

换至地面系中：
$$
\begin{pmatrix} A_{x} \\ A_{y} \\ A_{z} \\ \frac{\phi}{c} \end{pmatrix} = \begin{pmatrix} \gamma & 0 & 0 & \gamma \beta \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \gamma \beta & 0 & 0 & \gamma  \end{pmatrix} \begin{pmatrix} A'_{x} \\ A'_{y} \\ A'_{z} \\ \frac{\phi'}{c} \end{pmatrix} = \begin{pmatrix} \gamma & 0 & 0 & \gamma \beta \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \gamma \beta & 0 & 0 & \gamma  \end{pmatrix} \begin{pmatrix} 0 \\ 0 \\ 0 \\ \frac{1}{4 \pi \epsilon_{0} c} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}} \end{pmatrix} = \begin{pmatrix} \frac{\gamma \beta}{4 \pi \epsilon_{0} c} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}} \\ 0 \\ 0 \\ \frac{\gamma}{4 \pi \epsilon_{0} c} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}} \end{pmatrix}
$$
所以$\phi = \frac{\gamma}{4 \pi \epsilon_{0}} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}}$， $\vec{A} = \begin{pmatrix} \frac{\gamma \beta}{4 \pi \epsilon_{0} c} \frac{\vec{r'} \cdot \vec{p_{0}}}{r'^{3}}, 0, 0 \end{pmatrix}^{\top}$

其中$\vec{r'} = \begin{pmatrix} \gamma (x - \beta c t), y, z \end{pmatrix}^{\top}$

在电偶极子系中，电偶极子产生的电场为：
$$
\vec{E} = \frac{1}{4 \pi \epsilon_{0}} \frac{3(\vec{p_{0}} \cdot \vec{r'}) \vec{r'} - r'^{2} \vec{p_{0}}}{r'^{5}}
$$
换至地面系中，得到：
$$
E_{x} = E'_{x} = \frac{1}{4 \pi \epsilon_{0}} \frac{3 (\vec{p_{0}} \cdot \vec{r'}) x' - r'^{2} (\vec{p_{0}} \cdot \hat{x'})}{r'^{5}}
$$

$$
E_{y} = \gamma (E'_{y} + \beta c B'_{z}) = \gamma E'_{y} = \frac{\gamma}{4 \pi \epsilon_{0}} \frac{3(\vec{p_{0}} \cdot \vec{r'}) y' - r'^{2} (\vec{p_{0}} \cdot \hat{y'})}{r'^{5}}
$$

$$
E_{z} = \gamma (E'_{z} - \beta c B'_{y}) = \gamma E'_{z} = \frac{\gamma}{4 \pi \epsilon_{0}} \frac{3(\vec{p_{0}} \cdot \vec{r'}) z' - r'^{2} (\vec{p_{0}} \cdot \hat{z'})}{r'^{5}}
$$

$$
B_{x} = B'_{x} = 0
$$

$$
B_{y} = \gamma (B_{y'} - \beta \frac{E'_{z}}{c}) = - \frac{\gamma}{\beta c} E'_{z} = - \frac{\gamma}{4 \pi \epsilon_{0} \beta c} \frac{3(\vec{p_{0}} \cdot \vec{r'}) z' - r'^{2} (\vec{p_{0}} \cdot \hat{z'})}{r'^{5}}
$$

$$
B_{z} = \gamma (B_{z'} + \beta \frac{E'_{y}}{c}) = \frac{\gamma}{\beta c} E'_{y} = \frac{\gamma}{4 \pi \epsilon_{0} \beta c} \frac{3(\vec{p_{0}} \cdot \vec{r'}) y' - r'^{2} (\vec{p_{0}} \cdot \hat{y'})}{r'^{5}}
$$

其中$\vec{r'} = \begin{pmatrix} \gamma (x - \beta c t), y, z \end{pmatrix}^{\top}$

6.15 有一沿 $z$ 轴方向螺旋进动的静磁场 $\vec{B} = B_0 (\cos k_m z \hat{e}_x + \sin k_m z \hat{e}_y)$，其中 $k_m = 2\pi / \lambda_m$，$\lambda_m$ 为磁场周期长度。现有一沿 $z$ 轴以速度 $v = \beta c$ 运动的惯性系，求在该惯性系中观察到的电磁场。证明当 $\beta \simeq 1$ 时该电磁场类似于一列频率为 $\gamma \cdot \beta c k_m$ 的圆偏振电磁波。

在该系中：
$$
E'_{x} = \gamma (E_{x} - \beta c B_{y}) = - \gamma \beta c B_{0} \sin k_{m} z
$$

$$
E'_{y} = \gamma (E_{y} + \beta c B_{x}) = \gamma \beta c B_{0} \cos k_{m} z
$$

$$
E'_{z} = E_{z} = 0
$$

$$
B'_{x} = \gamma (B_{x} + \beta c E_{z}) = \gamma B_{x} = \gamma B_{0} \cos k_{m} z
$$

$$
B'_{y} = \gamma (B_{y} - \beta c E_{x}) = \gamma B_{y} = \gamma B_{0} \sin k_{m} z
$$

$$
B'_{z} = B_{z} = 0
$$

其中 $z = \gamma (z' + \beta c t')$ ，得到该波波矢沿 $- z$ 方向，且圆频率为 $\gamma \beta c k_{m}$。

所以$\beta \approx 1$时该系中 
$$
\vec{B} \approx \frac{\hat{k}}{c} \times \vec{E}
$$
正好为左旋光的电磁场表达式。

6.16 有一无限长均匀带电直线，在其静止参考系中线电荷密度为 $\lambda$。该线电荷以速度 $v = \beta c$ 沿自身长度匀速移动。在与直线相距为 $d$ 的地方有一以同样速度平行于直线运动的点电荷 $q$。分别用下列两种方法求出作用在电荷上的力：

(a) 在带电线静止系中确定力，然后用四维力变换公式；

带电线静止系中：
$$
\vec{f} (r) = \frac{\lambda q}{2 \pi \epsilon_{0} d} \hat{r}
$$
使用力的逆变换：
$$
\begin{pmatrix} \gamma_{v} f_{x} \\ \gamma_{v} f_{y} \\ \gamma_{v} f_{z} \\ \gamma_{v} \frac{\vec{f} \cdot \vec{v}}{c} \end{pmatrix} = \begin{pmatrix} \gamma & 0 & 0 & \gamma \beta  \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \gamma \beta & 0 & 0 & \gamma \end{pmatrix} \begin{pmatrix} \gamma_{v'} f'_{x} \\ \gamma_{v'} f'_{y} \\ \gamma_{v'} f'_{z} \\ \gamma_{v'} \frac{\vec{f'} \cdot \vec{v'}}{c}  \end{pmatrix}
$$
在带电线静止系中，4-力矢量为$\begin{pmatrix} \frac{\lambda q}{2 \pi \epsilon_{0} d} \hat{r}, 0 \end{pmatrix}$

所以$\gamma_{v} \vec{f} = \frac{\lambda q}{2 \pi \epsilon_{0} d} \hat{r}$

$\mathbf{F} = \frac{\lambda q}{2 \pi \epsilon_{0} d \gamma} \hat{r}$

(b) 直接计算线电荷和线电流作用在运动电荷上的电磁力。

在线电荷系中，流矢量为$\begin{pmatrix} c \lambda , 0 \end{pmatrix}$，所以地面系中，流矢量变为
$$
\begin{pmatrix} c \lambda_{s} \\ I_{s} \end{pmatrix} = \begin{pmatrix} \gamma & \gamma \beta \\ \gamma \beta & \gamma \end{pmatrix} \begin{pmatrix} c \lambda \\ 0 \end{pmatrix} = \begin{pmatrix} \gamma c \lambda \\ \gamma \lambda \beta c\end{pmatrix}
$$
所以离导线 $d$ 处的电磁场为 $\vec{E} = \frac{\gamma \lambda}{2 \pi \epsilon_{0} d} \hat{r}$     $\vec{B} = \frac{\gamma \beta c \lambda}{2 \pi \mu_{0} d} \hat{j} \times \hat{r}$

此时电荷受力为：
$$
\mathbf{F} = \frac{\gamma \lambda q}{2 \pi \epsilon_{0} d} \hat{r} + q \vec{v} \times \frac{\gamma \beta c \lambda}{2 \pi \mu_{0} d} (\hat{j} \times \hat{r}) = \frac{\gamma \lambda q}{2 \pi \epsilon_{0} d} (1 - \frac{v^{2}}{c^{2}}) \hat{r} = \frac{\lambda q}{2 \pi \epsilon_{0} d \gamma} \hat{r}
$$

2. 试证, 电磁场的一般变换关系为,

$$
\vec{E}' = \frac{\vec{E} \cdot \vec{v}}{v^2} \vec{v} + \frac{\vec{E} - \frac{\vec{E} \cdot \vec{v}}{v^2} \vec{v} + \vec{v} \times \vec{B}}{\sqrt{1 - \frac{v^2}{c^2}}}
$$

$$
\vec{B}' = \frac{\vec{B} \cdot \vec{v}}{v^2} \vec{v} + \frac{\vec{B} - \frac{\vec{B} \cdot \vec{v}}{v^2} \vec{v} - \frac{\vec{v}}{c^2} \times \vec{E}}{\sqrt{1 - \frac{v^2}{c^2}}}
$$

由于电磁场张量在变换下满足二阶张量的变换关系，所以对于 $x$ 方向的Boost：
$$
F' = 
\begin{pmatrix}
\gamma & 0 & 0 & i\beta\gamma \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
-i\beta\gamma & 0 & 0 & \gamma
\end{pmatrix}
\begin{pmatrix}
0 & B_3 & -B_2 & -iE_1/c \\
-B_3 & 0 & B_1 & -iE_2/c \\
B_2 & -B_1 & 0 & -iE_3/c \\
iE_1/c & iE_2/c & iE_3/c & 0
\end{pmatrix}
\begin{pmatrix}
\gamma & 0 & 0 & - i\beta\gamma \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
i\beta\gamma & 0 & 0 & \gamma
\end{pmatrix}
\\ =
\begin{pmatrix}
0 & \gamma(B_3 - \tfrac{\beta E_2}{c}) & \gamma(B_2 + \tfrac{\beta E_3}{c}) & -i \frac{E_1}{c} \\
-\gamma(B_3 - \tfrac{\beta E_2}{c}) & 0 & B_1 & -i\gamma(\tfrac{E_2}{c} - \beta B_3) \\
-\gamma(B_2 + \tfrac{\beta E_3}{c}) & -B_1 & 0 & -i\gamma(\tfrac{E_3}{c} + \beta B_2) \\
i \frac{E_1}{c} & i\gamma(\tfrac{E_2}{c} - \beta B_3) & i\gamma(\tfrac{E_3}{c} + \beta B_2) & 0
\end{pmatrix}
$$
得到对于 Boost 而言 $E'_{\parallel} = E_{\parallel}$   $E'_{\perp} = \gamma (E_{\perp} + \vec{v} \times \vec{B})$  $B'_{\parallel} = B_{\parallel}$  $B'_{\perp} = \gamma (B_{\perp} - \vec{v} \times \vec{E})$

所以
$$
\vec{E'} =  \vec{E} \cdot \frac{\vec{v}}{v} + \gamma (\vec{E} - \vec{E} \cdot \frac{\vec{v}}{v} + \vec{v} \times \vec{B})
$$

$$
\vec{B'} = \vec{B} \cdot \frac{\vec{v}}{v} + \gamma (\vec{B} - \vec{B} \cdot \frac{\vec{v}}{v} - \frac{\vec{v}}{c^{2}} \times \vec{E})
$$

3.  试证, 匀速运动的点电荷$q$产生的电磁场为,

$$
\vec{E} = \frac{q \vec{R}}{4 \pi \epsilon_0 S^3} (1 - \frac{v^2}{c^2})
$$

$$
\vec{B} = \frac{\vec{v}}{c^2} \times \vec{E}
$$

其中:

$$
\vec{R} = \vec{r} - \vec{v} t
$$

$$
S^2 = (\vec{R} \cdot \frac{\vec{v}}{v})^2 + (1 - \frac{v^2}{c^2}) (\vec{R} - \vec{R} \cdot \frac{\vec{v}}{v^2} \vec{v}) \cdot (\vec{R} - \vec{R} \cdot \frac{\vec{v}}{v^2} \vec{v}) = \frac{(\vec{R} \cdot \vec{v})^2}{c^2} + (1 - \frac{v^2}{c^2}) R^2
$$

证明：在电荷参考系 $s'$ 中，电磁场为：
$$
\vec{E} = \frac{q}{4 \pi \epsilon_{0} r'^{2}} \hat{r'} \qquad \vec{B} = \vec{0}
$$
利用电磁场变换：
$$
\vec{E} = \vec{E'} \cdot \frac{\vec{v}}{v} \hat{v} + \gamma (\vec{E'} - \vec{E'} \cdot \frac{\vec{v}}{v} \hat{v})
$$

$$
\vec{B} = \gamma \frac{\vec{v}}{c^{2}} \times \vec{E'}
$$

再考虑 $\vec{E'}$ ，在 $t$ 时刻，对于场点 $(x,y,z)^{\top}$， $S$ 系中相对距离为 $\vec{R} = \vec{r} - \vec{v} t$ 

变换至 $S'$系中，相对距离为(假设电荷运动方向为 $x$ 方向) $\vec{r'} = \begin{pmatrix} \gamma (x - vt),  y,z \end{pmatrix}^{\top} = \gamma (\vec{R} \cdot \hat{v}) \hat{v} + \vec{R} - (\vec{R} \cdot \hat{v}) \hat{v}$

所以 $r'^{2} = \gamma^{2} S^{2}$
$$
\vec{E'} = \frac{q}{4 \pi \epsilon_{0} r'^{3}} \vec{r'} = \frac{q}{4 \pi \epsilon_{0} \gamma^{3} S^{3}} (\gamma (\vec{R} \cdot \hat{v}) \hat{v} + \vec{R} - (\vec{R} \cdot \hat{v}) \hat{v})
$$
换至 $S$ 系中
$$
\vec{E} = \vec{E'} \cdot \frac{\vec{v}}{v} \hat{v} + \gamma (\vec{E'} - \vec{E'} \cdot \frac{\vec{v}}{v} \hat{v} ) = \frac{q}{4 \pi \epsilon_{0} \gamma^{3} S^{3}} (\gamma (\vec{R} \cdot \hat{v}) \hat{v} + \gamma (\gamma (\vec{R} \cdot \hat{v}) \hat{v} + \vec{R} - (\vec{R} \cdot \hat{v}) \hat{v}  - \gamma (\vec{R} \cdot \hat{v}) \hat{v}) \\ = \frac{q}{4 \pi \epsilon_{0} \gamma^{3} S^{3}}  \gamma \vec{R} = \frac{q \vec{R}}{4 \pi \epsilon_0 S^3} (1 - \frac{v^2}{c^2})
$$

$$
\vec{B} = \gamma \frac{\vec{v}}{c^{2}} \times \vec{E'} = \gamma \frac{\vec{v}}{c^{2}} \times \frac{q}{4 \pi \epsilon_{0} \gamma^{3} S^{3}} (\gamma (\vec{R} \cdot \hat{v}) \hat{v} + \vec{R} - (\vec{R} \cdot \hat{v}) \hat{v}) = \frac{\vec{v}}{c^{2}} \times \frac{q}{4 \pi \epsilon_{0} \gamma^{3} S^{3}}  \gamma \vec{R} = \frac{\vec{v}}{c^2} \times \vec{E}
$$

