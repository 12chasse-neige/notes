# 复变函数 第2次作业

Chasse_neige

### 第二章习题 初等函数与多值函数

1.请证明下列等式

(b)
$$
\sin(z_1 + z_2) = \sin z_1 \cos z_2 + \cos z_1 \sin z_2
$$
$$
\cos(z_1 + z_2) = \cos z_1 \cos z_2 - \sin z_1 \sin z_2
$$

证明
$$
\sin(z_{1} + z_{2}) = \frac{e^{i (z_{1} + z_{2})} - e^{-i (z_{1} + z_{2})}}{2i} = \frac{(e^{i z_{1}} + e^{-i z_{1}}) (e^{i z_{2}} - e^{-i z_{2}}) + (e^{i z_{1}} - e^{-i z_{1}})(e^{i z_{2}} + e^{-i z_{2}})}{4i} \\ = 
\frac{e^{i z_{1}} + e^{-i z_{1}}}{2} \frac{e^{i z_{2}} - e^{-i z_{2}}}{2i} + \frac{e^{i z_{1}} - e^{-i z_{1}}}{2i} \frac{e^{i z_{2}} + e^{-i z_{2}}}{2} = \sin z_1 \cos z_2 + \cos z_1 \sin z_2
$$

$$
\cos (z_{1} + z_{2}) = \frac{e^{i (z_{1} + z_{2})} + e^{-i (z_{1} + z_{2})}}{2} = \frac{(e^{i z_{1}} + e^{-i z_{1}}) (e^{i z_{2}} + e^{-i z_{2}}) + (e^{i z_{1}} - e^{-i z_{1}})(e^{i z_{2}} - e^{-i z_{2}})}{4} \\ = 
\frac{e^{i z_{1}} + e^{-i z_{1}}}{2} \frac{e^{i z_{2}} + e^{-i z_{2}}}{2} - \frac{e^{i z_{1}} - e^{-i z_{1}}}{2i} \frac{e^{i z_{2}} - e^{-i z_{2}}}{2i} = \cos z_1 \cos z_2 - \sin z_1 \sin z_2
$$

(d)
$$
\cosh^2 z - \sinh^2 z = 1, \quad 1 - \tanh^2 z = \text{sech}^2 z
$$

证明
$$
\cosh^{2} z - \sinh^{2} z = \left(\frac{e^{z} + e^{-z}}{2}\right)^{2} - \left(\frac{e^{z} - e^{-z}}{2}\right)^{2} \\ =
\frac{e^{2z} + e^{-2z} + 2}{4} - \frac{e^{2z} + e^{-2z} - 2}{4} = 1
$$

$$
1 - \tanh^{2} z = 1 - \frac{\sinh^{2} z}{\cosh^{2} z} = \frac{\cosh^{2} z - \sinh^{2} z}{\cosh^{2} z} = \frac{1}{\cosh^{2} z} = \sech^{2} z
$$

(f)
$$
\frac{d}{dz} \sinh z = \cosh z, \quad \frac{d}{dz} \cosh z = \sinh z
$$
证明
$$
\frac{d}{dz} \sinh z = \frac{d}{dz} \frac{e^{z} - e^{-z}}{2} = \frac{e^{z} + e^{-z}}{2} = \cosh z
$$

$$
\frac{d}{dz} \cosh z = \frac{d}{dz} \frac{e^{z} + e^{-z}}{2} = \frac{e^{z} - e^{-z}}{2} = \sinh z
$$



2.请证明不等式 ($x$ 和 $y$ 均为实数)
$$
|\sinh y| \leq |\sin(x + iy)| \leq |\cosh y|
$$

$$
|\sinh y| \leq |\cos(x + iy)| \leq |\cosh y|
$$

证明
$$
\sin (x + iy) = \sin x \cosh y + i \cos x \sinh y
$$

$$
|\sin (x + iy)| = \sqrt{\sin^{2} x \cosh^{2} y + \cos^{2} x \sinh^{2} y}
$$

$$
\sqrt{\sin^{2} x \cosh^{2} y + \cos^{2} x \sinh^{2} y} = \sqrt{\sin^{2} x \cosh^{2} y + \cos^{2} x (\cosh^{2} y - 1)} \\ =
\sqrt{\cosh^{2} y - \cos^{2} x} \leq |\cosh y|
$$

$$
\sqrt{\sin^{2} x \cosh^{2} y + \cos^{2} x \sinh^{2} y} = \sqrt{\sin^{2} x (1 + \sinh^{2} y) + \cos^{2} x \sinh^{2} y} \\ =
\sqrt{\sin^{2} x + \sinh^{2} y} \geq |\sinh y|
$$

$$
\therefore \,\, |\sinh y| \leq |\sin(x + iy)| \leq |\cosh y|
$$

$$
\cos (x + iy) = \cos x \cosh y - i \sin x \sinh y
$$

$$
|\cos (x + iy)| = \sqrt{\cos^{2} x \cosh^{2} y + \sin^{2} x \sinh^{2} y}
$$

$$
\sqrt{\cos^{2} x \cosh^{2} y + \sin^{2} x \sinh^{2} y} = \sqrt{\cos^{2} x \cosh^{2} y + \sin^{2} x (\cosh^{2} y - 1)} \\ =
\sqrt{\cosh^{2} y - \sin^{2} x} \leq |\cosh y|
$$

$$
\sqrt{\cos^{2} x \cosh^{2} y + \sin^{2} x \sinh^{2} y} = \sqrt{\cos^{2} x (1 + \sinh^{2} y) + \sin^{2} x \sinh^{2} y} \\ =
\sqrt{\cos^{2} x + \sinh^{2} y} \geq |\sinh y|
$$

$$
\therefore \,\, |\sinh y| \leq |\cos(x + iy)| \leq |\cosh y|
$$

4.判断下列函数是否为多值函数, 若为多值函数, 请分析其支点的情况

(1) $\sqrt{1 - z^3}$

是多值函数

可能支点：$z = 1, z = - \frac{1}{2} + \frac{\sqrt{3}}{2} i, - \frac{1}{2} - \frac{\sqrt{3}}{2} i, z = \infty$

判断

1. $z=1$：此时$z$绕行一圈后$w$ 的辐角变化$\pi$，是支点
2. $z = - \frac{1}{2} + \frac{\sqrt{3}}{2} i$：此时$z$绕行一圈后$w$ 的辐角变化$\pi$，是支点
3. $z = - \frac{1}{2} - \frac{\sqrt{3}}{2} i$：此时$z$绕行一圈后$w$ 的辐角变化$\pi$，是支点
4. 无穷远点：此时$z$绕行一圈后$w$ 的辐角变化$3 \pi$，是支点

(2) $\sqrt[3]{z^2 - 1}$

是多值函数

可能支点：$z = 1, z = -1, z = \infty$

判断

1. $z = 1$：此时$z$绕行一圈后$w$ 的辐角变化$\frac{2}{3} \pi$，是支点
2. $z = - 1$：此时$z$绕行一圈后$w$ 的辐角变化$\frac{2}{3} \pi$，是支点
3. 无穷远点：此时$z$绕行一圈后$w$ 的辐角变化$\frac{4}{3} \pi$，是支点

(3) $\sqrt{\cos z}$

是多值函数

可能支点：$\cos z = 0$，即 $z = \frac{\pi}{2} + k \pi$

判断

$z = \frac{\pi}{2} + k \pi \quad (k \in \mathbb{Z})$：此时$z$绕行一圈后$w$ 的辐角变化$\pi$，是支点

