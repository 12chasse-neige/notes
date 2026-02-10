# 电动力学 第8周作业

Chasse_neige

### 4. 谐振腔 

书4.14, 4.15

4.14 一对无限大的平行理想导体板，相距为 $b$，电磁波沿平行于板面的 $z$ 方向传播，设波在 $x$ 方向是均匀的，求可能传播的波模和每种波模的截止频率。

 解亥姆霍兹方程 $(\nabla^{2} + k^{2}) u = 0$得
$$
u (x, y, z) = X(x) Y(y) Z(z) = (C_{1} \cos k_{x} x  + D_{1} \sin k_{x} x) (C_{2} \cos k_{y} y + D_{2} \sin k_{y} y) e^{i(k_{z} z - \omega t)}
$$
由于波在 $x$ 方向均匀，所以
$$
u (x, y, z) = (C_{2} \cos k_{y} y + D_{2} \sin k_{y} y)  e^{i(k_{z} z - \omega t)}
$$
对于 $E_{x}$ ，带入边界条件 $E_{x} \big|_{y = 0} = 0$ 以及$E_{x} \big|_{y = b} = 0$

得到
$$
E_x = A_1 \sin\left(\frac{n\pi}{b} y\right) e^{i(k_z z - \omega t)}
$$
对于 $E_{z}$ ，带入边界条件 $E_{z} \big|_{y = 0} = 0$ 以及$E_{z} \big|_{y = b} = 0$

得到
$$
E_z = A_3 \sin\left(\frac{n\pi}{b} y\right) e^{i(k_z z - \omega t)}
$$
对于 $E_{y}$ ，由 $\nabla \cdot \vec{E} = 0$

得到
$$
E_y = A_2 \cos\left(\frac{n\pi}{b} y\right) e^{i(k_z z - \omega t)}
$$
且有
$$
\frac{n\pi}{b} A_2 = i k_z A_3
$$
其中
$$
\frac{n \pi}{b}^{2} + k_{z}^{2} = \frac{\omega}{c}^{2}
$$
截止频率
$$
\omega_{c}^{(n)} = \frac{n \pi c}{b}
$$
4.15 证明整个谐振腔内的电场能量和磁场能量对时间的平均值总相等。

证明：
$$
\mathbf{E}(\mathbf{r}, t) = \text{Re}[\mathbf{E}(\mathbf{r}) e^{-i\omega t}]
$$

$$
\mathbf{B}(\mathbf{r}, t) = \text{Re}[\mathbf{B}(\mathbf{r}) e^{-i\omega t}]
$$
由于
$$
\nabla \cdot (\mathbf{E} \times \mathbf{H}^*) = \mathbf{H}^{*} \cdot (\nabla \times \mathbf{E}) - \mathbf{E} \cdot (\nabla \times \mathbf{H}^{*}) = i\omega (\mu_0 |\mathbf{H}|^2 - \varepsilon_0 |\mathbf{E}|^2)
$$
对两边进行体积积分，并应用散度定理：
$$
\int_V \nabla \cdot (\mathbf{E} \times \mathbf{H}^*) \, dV = \oint_{\partial V} (\mathbf{E} \times \mathbf{H}^*) \cdot d\mathbf{S}
$$
在谐振腔的金属边界上，电场的切向分量为零，磁场的法向分量为零，导致面积分为零。因此：

$$
\int_V (\mu_0 |\mathbf{H}|^2 - \varepsilon_0 |\mathbf{E}|^2) \, dV = 0
$$
即
$$
\frac{1}{\mu_0} \int_V |\mathbf{B}|^2 \, dV = \varepsilon_0 \int_V |\mathbf{E}|^2 \, dV
$$

这说明电场能量和磁场能量的时间平均值相等。

### 5. 电磁波的定向传播

作业：

(a) 书4.12, 4.13

4.12 论证矩形波导管内不存在 $TM_{m0}$ 或 $TM_{0n}$ 波。

证明：

对于矩形波导中的 $TM$ 波，有分量
$$
E_{x} = A_{x} \cos k_{x} x \sin k_{y} y e^{i (k_{z} z - \omega t)} \\
E_{y} = A_{y} \sin k_{x} x \cos k_{y} y e^{i (k_{z} z - \omega t)} \\
E_{z} = A_{z} \sin k_{x} x \sin k_{y} y e^{i (k_{z} z - \omega t)}
$$
由 $\nabla \cdot \vec{E} = 0$，得到$- k_{x} A_{x} - k_{y} A_{y} + i k_{z} A_{z} = 0$

由 $B_{z} = 0$，得到  $k_{y} A_{x} = k_{x} A_{y}$ 

对于$k_{x}$ 或 $k_{y}$ 中一个为 $0$ 的传播模式：不妨假设 $k_{x} = 0$
则有
$$
E_{x} = A_{x}  \sin k_{y} y e^{i (k_{z} z - \omega t)} \\
E_{y} = 0 \\
E_{z} = 0
$$
由于  $k_{y} A_{x} = k_{x} A_{y}$ ，所以 $A_{x} = 0$，即电场的三个方向分量均为零，故矩形波导管内不存在 $TM_{m0}$ 或 $TM_{0n}$ 波。

4.13 频率为 $30 \times 10^9 \, \text{Hz}$ 的微波，在 $0.7 \, \text{cm} \times 0.4 \, \text{cm}$ 的矩形波导管中能以什么波模传播？在 $0.7 \, \text{cm} \times 0.6 \, \text{cm}$ 的矩形波导管中能以什么波模传播？

带入截止频率公式
$$
f_{c}^{(m,n)} = \frac{c}{2 \pi} \sqrt{\frac{m \pi}{L_{1}}^{2} + \frac{n \pi}{L_{2}}^{2}}
$$
在 $0.7 \, \text{cm} \times 0.4 \, \text{cm}$ 的矩形波导管中
$$
f_{c}^{10} = 2.14 \times 10^{10} \text{Hz} \\
f_{c}^{01} = 3.75 \times 10^{10} \text{Hz}
$$
所以仅有$TE_{10}$ 模式

在 $0.7 \, \text{cm} \times 0.6 \, \text{cm}$ 的矩形波导管中
$$
f_{c}^{10} = 2.14 \times 10^{10} \text{Hz} \\
f_{c}^{01} = 2.50 \times 10^{10} \text{HZ} \\
f_{c}^{11} = 3.29 \times 10^{10} \text{Hz}
$$
所以仅$TE_{10} ,\,  TE_{01}$ 模式可以传播

(b) 试证，电磁波定向传输中的$TM$波 ($B_z = 0$) 满足，

$$
(\nabla_{xy}^2 + \mu\epsilon\omega^2 - k_z^2) E_z = 0
$$

边界条件：
$$
E_z \bigg|_{\text{边界}} = 0
$$

横向电场和磁场：
$$
\vec{E}_t = \frac{i k_z}{\mu\epsilon\omega^2 - k_z^2} \nabla_{xy} E_z
$$

$$
\vec{B}_t = \frac{-i \mu\epsilon\omega}{\mu\epsilon\omega^2 - k_z^2} \nabla_{xy} \times \vec{E}_z
$$

并求表面(管壁)上的面电荷与面电流。

证明：
对于定向传输中的$TM$波 ，作如下拆分：
$$
\vec{E} = (\vec{E}_{z} + \vec{E}_{t}) e^{i (k_{z} z - \omega t)} \\
\vec{B} = (\vec{B}_{z} + \vec{B}_{t}) e^{i (k_{z} z - \omega t)} \\
\nabla = \nabla_{xy} + \frac{\partial}{\partial_{z}} \hat{z}
$$
所以麦克斯韦方程化为
$$
i \omega \vec{B}_{z} = \nabla_{xy} \times \vec{E}_{t} \\
- i \mu \epsilon \omega \vec{E}_{z} = \nabla_{xy} \times \vec{B}_{t} \\
i \omega \vec{B}_{t} = \nabla_{xy} \times \vec{E}_{z} + i k_{z} (\hat{z} \times \vec{E}_{t}) \\
- i \mu \epsilon \omega \vec{E}_{t} = \nabla_{xy} \times \vec{B}_{z} + i k_{z} (\hat{z} \times \vec{B}_{t}) \\
\nabla_{xy} \cdot \vec{E}_{t} + i k_{z} E_{z} = 0 \\
\nabla_{xy} \cdot \vec{B}_{t} + i k_{z} B_{z} = 0
$$
对于$TM$波，有 $B_{z} = 0$

所以 $\nabla_{xy} \times \vec{E}_{t} = 0$
$$
i \omega \nabla_{xy} \times \vec{B}_{t} = \nabla_{xy} \times (\nabla_{xy} \times \vec{E}_{z}) + i k_{z} \nabla_{xy} \times (\hat{z} \times \vec{E}_{t}) = - \nabla_{xy}^{2} \vec{E}_{z} + i k_{z} \nabla_{xy} \cdot E_{t} \hat{z}
$$
 所以
$$
\mu \epsilon \omega^{2} E_{z} = - \nabla_{xy}^{2} E_{z} + k_{z}^{2} E_{z}
$$
即
$$
(\nabla_{xy}^2 + \mu\epsilon\omega^2 - k_z^2) E_z = 0
$$
又有
$$
- i \mu \epsilon \omega \vec{E}_{t} = i k_{z} (\hat{z} \times  \frac{1}{i \omega} (\nabla_{xy} \times \vec{E}_{z} + i k_{z} (\hat{z} \times \vec{E}_{t}))) = \frac{k_{z}}{\omega} (\nabla_{xy} E_{z} - i k_{z} \vec{E}_{t})
$$
所以
$$
i (\frac{k_{z}^{2}}{\omega} - \mu \epsilon \omega) \vec{E}_{t} = \frac{k_{z}}{\omega} \nabla_{xy} E_{z} \\
\vec{E}_t = \frac{i k_z}{\mu\epsilon\omega^2 - k_z^2} \nabla_{xy} E_z
$$
所以
$$
i \omega \vec{B}_{t} = \nabla_{xy} \times \vec{E}_{z} + i k_{z} (\hat{z} \times \vec{E}_{t}) = \nabla_{xy} \times \vec{E}_{z} + i k_{z} (\hat{z} \times \frac{i k_z}{\mu\epsilon\omega^2 - k_z^2} \nabla_{xy} E_z) \\ = 
\nabla_{xy} \times \vec{E}_{z} - i k_{z} (\frac{i k_z}{\mu\epsilon\omega^2 - k_z^2} \nabla_{xy} \times \vec{E}_{z}) = \frac{\mu \epsilon \omega^{2}}{\mu \epsilon \omega^{2} - k_{z}^{2}} \nabla_{xy} \times \vec{E}_{z}
$$
即
$$
\vec{B}_t = \frac{-i \mu\epsilon\omega}{\mu\epsilon\omega^2 - k_z^2} \nabla_{xy} \times \vec{E}_z
$$
表面(管壁)上的面电荷与面电流：

面电荷
$$
\sigma_{f} = \hat{n} \cdot \vec{D} = \epsilon \hat{n} \cdot \vec{E}_{t} e^{i (k_{z} z - \omega t)}  = \epsilon \frac{i k_z}{\mu\epsilon\omega^2 - k_z^2} \hat{n} \cdot \nabla_{xy} E_z e^{i (k_{z} z - \omega t)}
$$
面电流
$$
\vec{i}_{f} = \hat{n} \times \vec{H} = \frac{1}{\mu} \hat{n} \times \vec{B}_{t} e^{i (k_{z} z - \omega t)} = \frac{1}{\mu} \frac{-i \mu\epsilon\omega}{\mu\epsilon\omega^2 - k_z^2} \hat{n} \times  (\nabla_{xy} \times \vec{E}_z) e^{i (k_{z} z - \omega t)} \\ = \frac{1}{\mu} \frac{i \mu\epsilon\omega}{\mu\epsilon\omega^2 - k_z^2} (\hat{n} \cdot \nabla_{xy}) \vec{E}_{z}  e^{i (k_{z} z - \omega t)}
$$
