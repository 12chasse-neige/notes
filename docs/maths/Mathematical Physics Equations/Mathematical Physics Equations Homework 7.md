# 数学物理方程 第7次作业

Chasse_neige

3.求解下列方程在 $z=0$ 邻域内的两个级数解

(c) 

$$
z w^{\prime \prime}-z w^{\prime}+w=0
$$

容易判断 $z = 0$ 是方程正则奇点，所以带入试探解
$$
w(z) = z^{\rho} \sum_{k = 0}^{\infty} C_{k} z^{k}
$$

$$
\sum_{k = 0}^{\infty} z (\rho + k) (\rho + k - 1) C_{k} z^{\rho + k - 2} - z (\rho + k) C_{k} z^{\rho + k - 1} + C_{k} z^{\rho + k} = 0
$$

得到递推公式为
$$
(\rho + k + 1) (\rho + k) C_{k + 1} - (\rho + k) C_{k} + C_{k} = 0
$$

$$
C_{k + 1} = \frac{\rho + k - 1}{(\rho + k) (\rho + k + 1)} C_{k}
$$

以及指标方程
$$
\rho (\rho - 1) = 0
$$
(1) 当 $\rho = 1$ 时
$$
C_{k + 1} = \frac{k}{(k + 1)(k + 2)} C_{k}
$$
得到
$$
C_{k} = 0 \quad (k \geq 1)
$$
得到第一个解
$$
w_{1} (z) = z
$$
(2) 当 $\rho = 0$ 时
$$
w(z) = g z \ln z + \sum_{k = 0}^{\infty} C_{k} z^{k}
$$
带入方程
$$
w' (z) = g (\ln z + 1) + \sum_{k = 1}^{\infty} k C_{k} z^{k - 1}
$$

$$
w''(z) = \frac{g}{z} + \sum_{k = 2}^{\infty} k (k - 1) C_{k} z^{k - 2}
$$

所以
$$
g (1 - z) + \sum_{k = 2}^{\infty} k (k - 1) C_{k} z^{k - 1} - \sum_{k = 1}^{\infty} k C_{k} z^{k}  + \sum_{k = 0}^{\infty} C_{k} z^{k} = 0
$$
所以
$$
C_{0} = - g \\
- g + 2 C_{2} - C_{1} + C_{1} = 0 
$$
即
$$
C_{0} = -g, C_{2} = \frac{g}{2}
$$
不妨取 $C_{1} = 0$

递推关系为
$$
(k + 1) k C_{k + 1} - (k - 1) C_{k} = 0 \\
C_{k + 1} = \frac{k - 1}{k (k + 1)} C_{k}
$$
得到
$$
C_{k} = \frac{k - 2}{k (k - 1)} \cdot \frac{k - 3}{(k - 1) (k - 2)} \cdots \frac{1}{3 \cdot 2} \frac{g}{2} = \frac{g}{(k!) (k - 1)}
$$
所以第二个解为
$$
w_{2} (z) = z \ln z -1 + \sum_{k = 2}^{\infty} \frac{1}{k - 1} \frac{z^{k}}{k !}
$$
(e) 
$$
w^{\prime \prime}+\frac{2}{z} w^{\prime}+m^{2} w=0
$$

容易判断 $z = 0$ 是方程正则奇点，所以带入试探解
$$
w(z) = z^{\rho} \sum_{k = 0}^{\infty} C_{k} z^{k}
$$

$$
\sum_{k = 0}^{\infty} (\rho + k) (\rho + k - 1) C_{k} z^{\rho + k - 2} + \frac{2}{z} (\rho + k) C_{k} z^{\rho + k - 1} + m^{2} C_{k} z^{\rho + k} = 0
$$

得到递推公式为
$$
(\rho + k) (\rho + k - 1) C_{k} + 2(\rho + k) C_{k} + m^{2} C_{k - 2} = 0
$$

$$
C_{k} = - \frac{m^{2}}{(\rho + k) (\rho + k + 1)} C_{k - 2}
$$

以及指标方程
$$
\rho (\rho + 1) = 0
$$
(1) 当 $\rho = 0$ 时
$$
C_{k} = - \frac{m^{2}}{(k + 1)k} C_{k - 2}
$$
得到
$$
C_{2k} = (-1)^{k} \frac{m^{2}}{(2k + 1) 2k} \cdot \frac{m^{2}}{(2k - 1) (2k - 2)} \cdots \frac{m^{2}}{3 \cdot 2} C_{0} \\ =
(-1)^{k} \frac{m^{2k} }{(2k + 1) !} C_{0}
$$

$$
C_{2k + 1} = (-1)^{k} \frac{m^{2}}{(2k  + 2) (2k + 1)} \cdot \frac{m^{2}}{2k (2k - 1)} \cdots \frac{m^{2}}{4 \cdot 3} C_{1} \\ =
(-1)^{k} \frac{2 m^{2k}}{(2k + 2)!} C_{1}
$$

注意此时的低次项的条件需要满足（这一神奇的条件来自 $\rho$ 等于小整数带来的低此项导数缺失）
$$
C_{1} = 0
$$
所以得到第一个解
$$
w_{1} (z) = \sum_{k = 0}^{\infty} (-1)^{k} \frac{m^{2k}}{(2k + 1)!} z^{2k} = \frac{\sin(mz)}{mz}
$$
最后一步是注意到的。

(2) 当 $\rho = -1$ 时，利用递推公式中的 $C_{m}$ 项容易判断第二个解不存在对数项。

直接带入
$$
C_{k} = -\frac{m^{2}}{k (k - 1)}C_{k - 2}
$$
所以
$$
C_{1} = 0
$$

$$
C_{2k} = (-1)^{k} \frac{m^{2k}}{(2k)!} C_{0}
$$

所以第二个解为
$$
w_{2} (z) = \sum_{k = 0}^{\infty} (-1)^{k} \frac{m^{2k}}{(2k)!} z^{2k - 1} = \frac{\cos(mz)}{z}
$$
6.试求下列方程在无穷远点邻域内的展开的主项

(a) 
$$
w'' + (\lambda - \alpha z^2 - \beta z^4)w = 0
$$
假设 $w(z) = e^{S(z)}$

所以
$$
w'(z) = S'(z) e^{S(z)} \\
w''(z) = S''(z) e^{S(z)} + S'^{2} (z) e^{S(z)}
$$
所以方程化为
$$
S'' + S'^{2} + \lambda - \alpha z^{2} - \beta z^{4} = 0
$$

$$
S_{0}'^{2} = \beta z^{4} \\
S_{0}' = \pm \sqrt{\beta} z^{2}
$$

得到 $0$ 阶
$$
S_{0} (z) = \pm \frac{\sqrt{\beta}}{3} z^{3}
$$

$$
S (z) = \pm \frac{\sqrt{\beta}}{3} z^{3} + S_{1} (z)
$$

带入
$$
\pm 2 \sqrt{\beta} z + S''_{1} + (\pm \sqrt{\beta} z^{2}  + S_{1}')^{2} + \lambda - \alpha z^{2} - \beta z^{4} = 0
$$
得到
$$
S_{1}'^{2} \pm 2 \sqrt{\beta} z^{2} S_{1}' + \beta z^{4} - \alpha z^{2} - \beta z^{4} = 0 \\
S_{1}' = \pm \frac{\alpha}{2 \sqrt{\beta}}
$$
得到

$$
S_{1} (z) = \pm \frac{\alpha}{2 \sqrt{\beta}} z
$$
继续考虑
$$
S = \pm (\frac{\sqrt{\beta}}{3} z^{3} + \frac{\alpha}{2 \sqrt{\beta}} z) + S_{2} (z)
$$
于是
$$
\pm 2 \sqrt{\beta} z + S_{2}'' + \left(\pm (\sqrt{\beta} z^{2} + \frac{\alpha}{2 \sqrt{\beta}}) + S_{2}' \right)^{2} + \lambda - \alpha z^{2} - \beta z^{4} = 0
$$
所以
$$
\pm 2 \sqrt{\beta} z + S_{2}'' + S_{2}'^{2} + (\sqrt{\beta} z^{2} + \frac{\alpha}{2 \sqrt{\beta}})^{2} \pm 2 (\sqrt{\beta} z^{2} + \frac{\alpha}{2 \sqrt{\beta}}) S_{2}' + \lambda - \alpha z^{2} - \beta z^{4} = 0
$$

$$
\pm 2 \sqrt{\beta} z + S_{2}'' + S_{2}'^{2} + \frac{\alpha^{2}}{4 \beta} \pm 2 \sqrt{\beta} z^{2} S_{2}' \pm \frac{\alpha}{\sqrt{\beta}} S_{2}' + \lambda = 0
$$

保留同阶项，得到
$$
\pm 2 \sqrt{\beta} z^{2} S_{2}' = \mp 2 \sqrt{\beta} z
$$

$$
S_{2}' = - \frac{1}{z}
$$

 所以
$$
S_{2} = - \ln z
$$
得到主项为
$$
e^{S} = e^{\pm \left(\frac{\sqrt{\beta}}{3} z^{3} + \frac{\alpha}{2 \sqrt{\beta}} z \right) - \ln z} = \frac{e^{\pm \left(\frac{\sqrt{\beta}}{3} z^{3} + \frac{\alpha}{2 \sqrt{\beta}} z\right)} }{z}
$$
