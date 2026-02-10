# 分析力学 第7次作业

Chasse_neige

4.8 单摆振动方程为 $\ddot{\theta}+\frac{g}{l} \sin \theta=0$, 若振动角度不太大, 利用微扰近似方法给出二阶精度的近似解, 包括周期的二阶精度修正。

展开
$$
\sin \theta = \theta - \frac{1}{6} \theta^{3} + o(\theta^{5})
$$
假设
$$
\theta = \theta_{0} + \epsilon \theta_{1} + \epsilon^{2} \theta_{2}
$$
令 $\omega_{0} = \sqrt{\frac{g}{l}}$
$$
\omega = \omega_{0} + \epsilon \omega_{1} + \epsilon^{2} \omega_{2}
$$

$$
\ddot{\theta} = - \omega_{0}^{2} \theta + \epsilon^{2} \frac{\omega_{0}^{2}}{6} \theta^{3} \\
\ddot{\theta} + \omega^{2} \theta = (\omega^{2} - \omega_{0}^{2}) \theta + \epsilon^{2} \frac{\omega_{0}^{2}}{6} \theta^{3}
$$

作代换 $\tau = \omega t + \phi$，得到
$$
\theta'' + \theta = (1 - \frac{\omega_{0}^{2}}{\omega^{2}}) \theta + \epsilon^{2} \frac{\omega_{0}^{2}}{6 \omega^{2}} \theta^{3}
$$
分离得到
$$
\theta''_{0} + \theta_{0} = 0 \\
\theta''_{1} + \theta_{1} = 2\frac{\omega_{1}}{\omega_{0}} \theta_{0} \\
\theta''_{2} + \theta_{2} = \left(2 \frac{\omega_{2}}{\omega_{0}} - 3 \left(\frac{\omega_{1}}{\omega_{0}} \right)^{2} \right) \theta_{0} + 2 \frac{\omega_{1}}{\omega_{0}} \theta_{1} +  \frac{1}{6} \theta_{0}^{3}
$$
解得0阶解
$$
\theta_{0} (t) = A \cos (\tau)
$$
所以1阶方程为
$$
\theta''_{1} + \theta_{1} = 2 A \frac{\omega_{1}}{\omega_{0}} \cos \tau 
$$
采用拉普拉斯变换，舍弃初值相关项
$$
p^{2} L[\theta_{1}] + L[\theta_{1}] = L \left[2 A \frac{\omega_{1}}{\omega_{0}} \cos \tau  \right]
$$
所以
$$
\theta_{1} (t) = L^{-1} \left[\frac{1}{p^{2} + 1} L \left[2 A \frac{\omega_{1}}{\omega_{0}} \cos \tau \right]\right] \\ = 
\int_{0}^{\tau} 2 A \frac{\omega_{1}}{\omega_{0}} \cos (\tau - \tau') \sin \tau' \, \dd{\tau'} \\ =
A \frac{\omega_{1}}{\omega_{0}} \tau \sin \tau
$$
为了消除非物理项，得到
$$
\omega_{1} = 0
$$
所以
$$
\theta_{1} (t) = 0
$$
不存在1阶项。对于2阶
$$
\theta''_{2} + \theta_{2} = 2 A \frac{\omega_{2}}{\omega_{0}} \cos \tau + \frac{A^{3}}{6} \cos^{3} \tau
$$
所以
$$
\theta_{2} (t) = L^{-1} \left[\frac{1}{p^{2} + 1} L \left[2 A \frac{\omega_{2}}{\omega_{0}} \cos \tau + \frac{A^{3}}{6} \cos^{3} \tau \right]\right] \\ =
\int_{0}^{\tau} 2 A \frac{\omega_{2}}{\omega_{0}} \cos (\tau - \tau') \sin \tau' + \frac{A^{3}}{6} \cos^{3} (\tau - \tau') \sin \tau' \, \dd{\tau'} \\ =
A \frac{\omega_{2}}{\omega_{0}} \tau \sin\tau + \frac{A^3}{192} \left(12\tau \sin\tau + \cos\tau - \cos 3\tau \right)
$$
消去非物理项，得到
$$
\omega_{2} = - \frac{A^{2}}{16} \omega_{0}
$$
得到结论
$$
\theta (t) = A \cos \tau + \frac{A^3}{192} \left(\cos\tau - \cos 3\tau \right)
$$

$$
\omega = \omega_{0} \left( 1- \frac{A^{2}}{16} \right)
$$

4.13 二氧化碳分子经典模型如图 4.15 所示,平衡时原子在一直线上。只考虑原子在直线上运动的模式,求分子的简正频率和简正振动模式。

<img src="./Analytical Mechanics Homework 7.assets/image-20251104165523589.png" alt="image-20251104165523589" style="zoom:50%;" />

直接给出相对于平衡位置的坐标运动方程
$$
\ddot{x}_{1} = \frac{k}{m} (x_{2} - x_{1}) \\
\ddot{x}_{2} = \frac{k}{M} (x_{1} + x_{3} - 2 x_{2}) \\
\ddot{x}_{3} = \frac{k}{m} (x_{2} - x_{3})
$$
令 $\omega_{1}^{2} = \frac{k}{m}, \omega_{2}^{2} = \frac{k}{M}$，得到系数矩阵
$$
\begin{pmatrix} 
- \omega_{1}^{2} & \omega_{1}^{2} & 0 \\
\omega_{2}^{2} & - 2 \omega_{2}^{2} & \omega_{2}^{2} \\
0 & \omega_{1}^{2} & - \omega_{1}^{2}
\end{pmatrix}
$$
对角化
$$
A = 
\begin{pmatrix}
1 & 1 & -1 \\
1 & 0 & 2 \frac{\omega_{2}^{2}}{\omega_{1}^{2}} \\
1 & -1 & -1
\end{pmatrix}
\begin{pmatrix}
0 & 0 & 0 \\
0 & -\omega_1^2 & 0 \\
0 & 0 & -\omega_1^2 - 2\omega_2^2
\end{pmatrix}
\frac{1}{2(2\omega_{2}^{2} + \omega_{1}^{2})} \begin{pmatrix}
2\omega_{2}^{2} & 2\omega_{1}^{2} & 2\omega_{2}^{2} \\
2\omega_{2}^{2} + \omega_{1}^{2} & 0 & - (2\omega_{2}^{2} + \omega_{1}^{2}) \\
- \omega_{1}^{2} & 2\omega_{1}^{2} & - \omega_{1}^{2}
\end{pmatrix}
$$
得到两个振动模式的频率和简正坐标为（特征值0对应了平动）
$$
\omega = \omega_{1} = \sqrt{\frac{k}{m}} \\
x = x_{1} - x_{3}
$$

$$
\omega = \sqrt{\omega_{1}^{2} + 2 \omega_{2}^{2}} = \sqrt{\frac{k}{m} + 2 \frac{k}{M}} \\
x = - x_{1} + 2 x_{2} - x_{3}
$$

4.15 一耦合摆作小振动，如图 4.17所示，两个小球质量都是 $m$，系在长度都是 $l$ 的轻杆，小球之间用劲度系数为 $k$ 的弹簧相连，弹簧的自然长度与两个悬点 $O, O'$ 之间的距离相同，系统限于两个轻杆自然下垂的铅直平面内运动。两球初始静止，一球在平衡位置，另一球则拉到 $\theta_{2}=\alpha$，求解系统。

<img src="./Analytical Mechanics Homework 7.assets/image-20251104165552635.png" alt="image-20251104165552635" style="zoom:50%;" />

首先写出运动方程
$$
\begin{pmatrix} \ddot{\theta}_{1} \\ \ddot{\theta}_{2} \end{pmatrix} = 
\begin{pmatrix} 
- \frac{g}{l} - \frac{k}{m} & \frac{k}{m} \\
\frac{k}{m} & - \frac{g}{l} - \frac{k}{m}
\end{pmatrix} \begin{pmatrix} \theta_{1} \\ \theta_{2} \end{pmatrix}
$$
令 $\omega_{1}^{2} = \frac{k}{m}, \omega_{2}^{2} = \frac{g}{l} + \frac{k}{m}$，系数矩阵化为
$$
\begin{pmatrix} 
- \omega_{2}^{2} & \omega_{1}^{2} \\
\omega_{1}^{2} & - \omega_{2}^{2}
\end{pmatrix}
$$
所以
$$
\begin{pmatrix} 
- \omega_{2}^{2} & \omega_{1}^{2} \\
\omega_{1}^{2} & - \omega_{2}^{2}
\end{pmatrix} = 
\begin{pmatrix} 
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & - \frac{1}{\sqrt{2}}
\end{pmatrix}
\begin{pmatrix} 
\omega_{1}^{2} - \omega_{2}^{2} & 0 \\
0 & - \omega_{1}^{2} - \omega_{2}^{2}
\end{pmatrix}
\begin{pmatrix} 
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & - \frac{1}{\sqrt{2}}
\end{pmatrix}
$$
得到
$$
\begin{pmatrix} \ddot{\theta}_{1} \\ \ddot{\theta}_{2} \end{pmatrix} = 
\begin{pmatrix} 
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & - \frac{1}{\sqrt{2}}
\end{pmatrix}
\begin{pmatrix} 
\omega_{1}^{2} - \omega_{2}^{2} & 0 \\
0 & - \omega_{1}^{2} - \omega_{2}^{2}
\end{pmatrix}
\begin{pmatrix} 
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & - \frac{1}{\sqrt{2}}
\end{pmatrix} \begin{pmatrix} \theta_{1} \\ \theta_{2} \end{pmatrix}
$$
重新定义坐标
$$
q_{1} = \frac{1}{\sqrt{2}} (\theta_{1} + \theta_{2}) \\
q_{2} = \frac{1}{\sqrt{2}} (\theta_{1} - \theta_{2})
$$
所以
$$
\begin{pmatrix} \ddot{q}_{1} \\ \ddot{q}_{2} \end{pmatrix} = 
\begin{pmatrix} 
\omega_{1}^{2} - \omega_{2}^{2} & 0 \\
0 & - \omega_{1}^{2} - \omega_{2}^{2}
\end{pmatrix} \begin{pmatrix} q_{1} \\ q_{2} \end{pmatrix}
$$
结合初始条件
$$
q_{1} (0) = \frac{\alpha}{\sqrt{2}} \quad q_{2} (0) = - \frac{\alpha}{\sqrt{2}} \\
\dot{q}_{1} (0) = \dot{q}_{2} (0) = 0
$$
所以
$$
q_{1} (t) = \frac{\alpha}{\sqrt{2}} \cos(\sqrt{- \omega_{1}^{2} + \omega_{2}^{2}} t) \\
q_{2} (t) = - \frac{\alpha}{\sqrt{2}} \cos(\sqrt{\omega_{1}^{2} + \omega_{2}^{2}} t)
$$
得到
$$
\theta_{1} (t) = \frac{\alpha}{2} \left( \cos(\sqrt{\frac{g}{l}} t) - \cos(\sqrt{\frac{g}{l} + 2 \frac{k}{m}} t)\right) \\
\theta_{2} (t) = \frac{\alpha}{2} \left( \cos(\sqrt{\frac{g}{l}} t) + \cos(\sqrt{\frac{g}{l} + 2 \frac{k}{m}} t)\right)
$$
