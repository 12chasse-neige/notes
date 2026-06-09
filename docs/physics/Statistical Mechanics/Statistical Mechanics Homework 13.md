# 统计力学 第13次作业

Chasse_neige

9.4 设分子碰撞方向 $\mathbf{n}$ 平行于 $x$ 轴，试证明 $d\mathbf{v} d\mathbf{v}_{1} = |J| d\mathbf{v}' d\mathbf{v}_{1}'$ 中的雅可比行列式 $J = -1$。

利用碰撞前后的分子速度关系

$$
\begin{gathered}
	\vec{v}^{\prime} = \vec{v} + \frac{2m_{2}}{m_{1} + m_{2}} ((\vec{v}_{1} - \vec{v}) \cdot \hat{n}) \hat{n} \\
	\vec{v}^{\prime}_{1} = \vec{v}_{1} - \frac{2m_{1}}{m_{1} + m_{2}} ((\vec{v}_{1} - \vec{v}) \cdot \hat{n}) \hat{n} \\
\end{gathered}
$$
所以对应的雅可比行列式为

$$
|J| = \left|\frac{\partial(v_{x}, v_{y}, v_{z}, v_{1x}, v_{1y}, v_{1z})}{\partial(v^{\prime}_{x}, v^{\prime}_{y}, v^{\prime}_{z}, v_{1}x^{\prime}, v_{1}y^{\prime}, v_{1}z^{\prime})}\right| = 
\begin{vmatrix}
\frac{m_{1}-m_{2}}{m_{1}+m_{2}} & 0 & 0 & \frac{2m_{2}}{m_{1}+m_{2}} & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
\frac{2m_{1}}{m_{1}+m_{2}} & 0 & 0 & \frac{m_{2}-m_{1}}{m_{1}+m_{2}} & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 1
\end{vmatrix} = -1
$$
