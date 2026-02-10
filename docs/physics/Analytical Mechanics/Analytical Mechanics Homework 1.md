---

---
# 分析力学 第1周作业

Chasse_neige

### 1.1 光滑半球形碗中的匀质棒

半径为 $R$ 的光滑半球形碗，固定在水平面上，一质量为 $m$ 的匀质棒斜靠在碗缘，一端在碗内，一端在碗外，在碗内的长度为 $c$ ，如图 1.4 所示。试用虚功原理给出棒的全长。

<img src="./Analytical Mechanics Homework 1.assets/image-20250916180135440.png" alt="image-20250916180135440">

假设棒子全长为$L$，则质心位置可以表示为
$$
x_{c} = (c - \frac{L}{2}) \cos \theta \\
y_{c} = (c - \frac{L}{2}) \sin \theta
$$
其中 $\cos \theta = \frac{c}{2R}$

由虚功原理
$$
\sum_{i} \vec{F}_{i} \cdot \delta \vec{r}_{i} = 0
$$
所以 $\delta y_{c} = 0$

约束可以用广义坐标 $\theta$ 表示为
$$
x_{c} = (2R \cos \theta - \frac{L}{2}) \cos \theta \\
y_{c} = (2R \cos \theta - \frac{L}{2}) \sin \theta
$$
虚位移
$$
\delta y_{c} = (2R \cos \theta - \frac{L}{2}) \cos \theta \delta \theta - 2R \sin^{2} \theta \delta \theta = 0 \\
2R \cos (2 \theta) = \frac{L}{2} \cos \theta = \frac{Lc}{4R}
$$
所以
$$
Lc = 8R^{2} (2 \frac{c^{2}}{4R^{2}} - 1)\\
L = 4c - \frac{8R^{2}}{c}
$$

### 1.3 竖直半圆钢丝上的两球

在一半径为 $R$ 的竖直半圆硬钢丝上 (两端点在水平线上), 穿有质量分别为 $P$ 和 $Q$ 的两个小球, 两球用长为 $2 l$ 的不可伸长的轻绳相连, 如图 1.6 所示。不计摩擦力, 试用虚功原理求两球的平衡位置 (即绳和水平线所成夹角 $\alpha$ )。

<img src="./Analytical Mechanics Homework 1.assets/image-20250916180159519.png" alt="image-20250916180159519">

假设两个小球的坐标分别为$(r \cos \theta_{1}, r \sin \theta_{1}), (r \cos \theta_{2}, r \sin \theta_{2})$，则约束可以表示为
$$
r \sin \frac{\theta_{1} - \theta_{2}}{2} = l
$$
虚位移满足
$$
\delta \theta_{1} = \delta \theta_{2}
$$
由虚功原理
$$
\sum_{i} \vec{F}_{i} \cdot \delta \vec{r}_{i} = 0
$$
假设绳子张力为$T$，记 $\alpha = \frac{\theta_{1} + \theta_{2}}{2} - \frac{\pi}{2}$

则有
$$
-Pg r \cos \theta_{1} \delta \theta - Qg r \cos \theta_{2} \delta \theta  + T r \cos \frac{\theta_{1} - \theta_{2}}{2} \delta \theta - T r \cos \frac{\theta_{1} - \theta_{2}}{2} \delta \theta = 0
$$
所以
$$
P \cos \theta_{1} + Q \cos \theta_{2} = 0
$$
即
$$
P (\cos \frac{\theta_{1} + \theta_{2}}{2} \cos \frac{\theta_{1} - \theta_{2}}{2} - \sin \frac{\theta_{1} + \theta_{2}}{2} \sin \frac{\theta_{1} - \theta_{2}}{2}) \\ + Q (\cos \frac{\theta_{1} + \theta_{2}}{2} \cos \frac{\theta_{1} - \theta_{2}}{2} + \sin \frac{\theta_{1} + \theta_{2}}{2} \sin \frac{\theta_{1} - \theta_{2}}{2}) = 0
$$
带入 $\sin \frac{\theta_{1} - \theta_{2}}{2} = \frac{l}{r}$
$$
\cos \frac{\theta_{1} +\theta_{2}}{2} (P + Q) \frac{\sqrt{r^{2} - l^{2}}}{r} = \sin \frac{\theta_{1} +\theta_{2}}{2} (P - Q) \frac{l}{r}
$$
所以
$$
\alpha = \frac{\theta_{1} + \theta_{2}}{2} - \frac{\pi}{2} = \arctan (\frac{P + Q}{P - Q} \sqrt{(\frac{r}{l})^{2} - 1}) - \frac{\pi}{2}
$$

### 1.5 光滑斜面上的小块

质量为 $M$, 倾角为 $\theta$ 的光滑斜面的底面放在光滑的水平面上, 有一质量为 $m$ 的小块从顶端沿此斜面滑下, 如图 1.8 所示。利用达朗贝尔原理,给出小块相对斜面的加速度。

<img src="./Analytical Mechanics Homework 1.assets/image-20250916180216974.png" alt="image-20250916180216974">

假设大滑块质心的 $x$ 坐标为 $X_{M}$，小滑块质心相对大滑块质心的坐标为$x_{m}, y_{m}$

约束
$$
y_{m} + \tan \theta x_{m} = C
$$
虚位移满足
$$
\delta Y_{M} = 0 \\
- \tan \theta \delta x_{m} = \delta y_{m}
$$
根据达朗贝尔原理
$$
- Mg \delta Y_{M} - mg \delta y_{m} = M \delta X_{M} \ddot{X}_{M} + m ((\delta x_{m} + \delta X_{M}) (\ddot{x}_{m} + \ddot{X}_{M}) + \delta y_{m} \ddot{y}_{m})
$$
即
$$
mg \delta y_{m} + M \delta X_{M} \ddot{X}_{M} + m ((\delta x_{m} + \delta X_{M}) (\ddot{x}_{m} + \ddot{X}_{M}) + \delta y_{m} \ddot{y}_{m}) = 0
$$
所以
$$
- mg \tan \theta \delta x_{m} + M \ddot{X}_{M} \delta X_{M} + m (\ddot{x}_{m} + \ddot{X}_{M}) (\delta x_{m} + \delta X_{M}) + m \tan^{2} \theta \ddot{x}_{m} \delta x_{m} = 0
$$
整理得
$$
m \ddot{x}_{m} (1 + \tan^{2} \theta) + m \ddot{X}_{M} = mg \tan \theta \\
M \ddot{X}_{M} + m (\ddot{x}_{m} + \ddot{X}_{M}) = 0
$$
解得
$$
\ddot{x}_{m} = \frac{(m + M) g \tan \theta}{M + (m + M) \tan^{2} \theta}
$$
所以小滑块相对斜面的加速度为
$$
a_{relative} = \frac{\ddot{x}_{m}}{\cos \theta} = \frac{(m + M) g \tan \theta}{M \cos \theta + (m + M) \tan \theta \sin \theta} = \frac{(m + M)g \sin \theta}{M + m \sin^{2} \theta}
$$

### 1.7 质点在圆锥面内的运动

设质量为 $m$ 的质点受重力作用，且被约束在半顶角为 $\alpha$ 的倒立圆锥面内运动，如图 1.10 所示。试以柱坐标中的 $r, \theta$ 为广义坐标，用达朗贝尔原理给出运动微分方程。

<img src="./Analytical Mechanics Homework 1.assets/image-20250916180233856.png" alt="image-20250916180233856">

采用球坐标，设除了给出的两个坐标外的第三个角度为$\phi$ ，则·约束为
$$
\phi = \alpha
$$
球坐标下的速度表示为
$$
\dot{\vec{r}} = \dot{r} \vec{e}_{r} + r \sin \alpha \dot{\theta} \vec{e}_{\theta}
$$
加速度为
$$
\ddot{\vec{r}} = (\ddot{r} - r \sin^{2} \alpha \dot{\theta}^{2}) \vec{e}_{r} + (2 \dot{r} \sin \alpha \dot{\theta} + r \sin \alpha \ddot{\theta}) \vec{e}_{\theta} - r \sin \alpha \cos \alpha \dot{\theta}^{2} \vec{e}_{\phi}
$$


根据达朗贝尔原理
$$
- mg \delta r \cos \alpha = m (\ddot{r} - r \dot{\theta}^{2} \sin^{2} \alpha) \delta r + m (2 \dot{r} \sin \alpha \dot{\theta} + r \sin \alpha \ddot{\theta}) r \sin \alpha \delta \theta
$$
所以运动微分方程为
$$
g \cos \alpha + \ddot{r} - r \dot{\theta}^{2} \sin^{2} \alpha = 0 \\
2 \dot{r} \dot{\theta} + r \ddot{\theta} = 0
$$

