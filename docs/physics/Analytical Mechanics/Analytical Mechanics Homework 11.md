# 分析力学 第11次作业

Chasse_neige

7.3 用两种方法证明以下变换是正则变换
$$
Q = -p, \quad P = q + \alpha p^2
$$

其中，$\alpha$ 是适当的常量。

(1) 求得生成函数
计算得到
$$
\dd{F_{1}} = -Q \dd{q} - (q + \alpha Q^{2}) \dd{Q}
$$

所以
$$
F_{1} (q, Q) = - qQ - \frac{1}{3} \alpha Q^{3}
$$
所以是正则变换

7.4 用两种方法证明以下变换是正则变换
$$
Q = \arctan\left(\frac{\alpha q}{p}\right), \quad P = \frac{\alpha q^2}{2}\left(1 + \frac{p^2}{\alpha^2 q^2}\right)
$$

其中 $\alpha$ 是适当的常量。

(1) 求得生成函数

计算得到
$$
\dd{F}_{1} = \frac{\alpha q}{\tan Q} \dd{q} - \frac{\alpha q^{2}}{2} \left(1 + \cot^{2} Q \right) \dd{Q}
$$
所以 
$$
F_{1} (q, Q) = \frac{\alpha q^{2}}{2 \tan Q}
$$
所以是正则变换

7.5 用两种方法证明以下变换是正则变换
$$
Q = \sqrt{2p} \sin q, \quad P = \sqrt{2p} \cos q
$$

(1) 求得生成函数

$$
\dd{F}_{1} = \frac{Q^{2} + \frac{Q^{2}}{\tan^{2} q}}{2} \dd{q} - \frac{Q}{\tan q} \dd{Q}
$$
所以
$$
F_{1} (q, Q) = - \frac{Q^{2}}{2 \tan q}
$$
所以是正则变换

7.6 用两种方法证明以下变换是正则变换
$$
\begin{aligned}
Q_{1} &= q_{1} q_{2}, & P_{1} &= 1 - \frac{p_{1} - p_{2}}{q_{1} - q_{2}} \\
Q_{2} &= q_{1} + q_{2}, & P_{2} &= -q_{1} - q_{2} + \frac{q_{1} p_{1} - q_{2} p_{2}}{q_{1} - q_{2}}
\end{aligned}
$$

(1) 求得生成函数

$$
\dd{F}_{2} = p_{1} \dd{q}_{1} + p_{2} \dd{q}_{2} + Q_{1} \dd{P}_{1} + Q_{2} \dd{P}_{2} \\ = 
(P_{2} + q_{1} + q_{2} P_{1}) \dd{q}_{1} + (P_{2} + q_{2} + q_{1} P_{1}) \dd{q}_{2} + q_{1} q_{2} \dd{P}_{1} + (q_{1} + q_{2}) \dd{P}_{2}
$$
所以
$$
F_{2} (q, P) = (q_{1} + q_{2}) P_{2} + \frac{q_{1}^{2} + q_{2}^{2}}{2} + q_{1} q_{2} P_{1}
$$
所以是正则变换

7.7 用两种方法证明以下变换是正则变换
$$
Q_{i} = q_{i} \cos \theta_{i} - p_{i} \sin \theta_{i}, \quad P_{i} = q_{i} \sin \theta_{i} + p_{i} \cos \theta_{i}, \quad i = 1, 2, 3, \cdots, s
$$

其中 $\theta_{i}$ 是适当的常量，$s$ 是系统自由度个数。

(1) 求得生成函数
$$
\dd{F}_{1} = \sum_{i} - \frac{Q_{i} - q_{i} \cos \theta_{i}}{\sin \theta_{i}} \dd{q}_{i} - \frac{q_{i} - Q_{i} \cos \theta_{i}}{\sin \theta_{i}} \dd{Q}_{i}
$$
所以生成函数为
$$
F_{1} (q_{i}, Q_{i}) = \sum_{i = 1}^{s} \frac{-Q_{i} q_{i} + \frac{1}{2} (q_{i}^{2} + Q_{i}^{2}) \cos \theta_{i}}{\sin \theta_{i}}
$$
所以是正则变换

7.8  有一质点质量为 $m$, 在中心力场 $V(r)$ 中运动, 柱坐标为 $(\rho, \phi, z)$, 其拉格朗日量为
$$
L = \frac{1}{2}m(\dot{\rho}^2 + \rho^2 \dot{\phi}^2 + \dot{z}^2) - V(\sqrt{\rho^2 + z^2})
$$

另有一个转动坐标系, 绕 $z$ 轴以角速度 $\omega$ 转动。若 $t=0$ 时两个坐标系重合, 转动坐标系质点坐标为 $(\rho', \phi', z')$。选择第二种正则变换生成函数 $F_{2} = \sum_{i=1}^{3}p_{i}^{\prime}r_{i}^{\prime}$ 形式，其中，$r_{i}^{\prime}$ 和 $p_{i}^{\prime}$ 分别为转动坐标系的广义坐标和广义动量分量。给出相应的哈密顿量及正则方程，并考查虚拟力的形式。

首先写出坐标变换关系
$$
\rho' = \rho \\
\phi' = \phi - \omega t \\
z' = z
$$
利用旋转系内坐标重新表示拉格朗日量得到
$$
L' = \frac{1}{2} m (\dot{\rho'}^{2} + \rho'^{2} (\dot{\phi'} + \omega)^{2} + \dot{z'}^{2}) - V (\sqrt{\rho'^{2} + z'^{2}})
$$
得到旋转系内的广义动量为
$$
p'_{\rho'} = m \dot{\rho'} \\
p'_{\phi'} = m \rho'^{2} (\dot{\phi'} + \omega) \\
p'_{z'} = m \dot{z'}
$$
所以第二种正则变换生成函数为
$$
F_{2} (q_{i}, P_{i}) = m \left( \dot{\rho'} \rho' + \rho'^{2} (\dot{\phi'} + \omega) \phi' + \dot{z'} z' \right) \\=
p'_{\rho'} \rho + p'_{\phi'} (\phi - \omega t) + p'_{z'} z
$$
利用 
$$
\dd{F}_{2} = \sum_{i} p_{i} \dd{q}_{i} + Q_{i} \dd{P}_{i} + (H' - H) \dd{t}
$$
所以
$$
H' - H = - p'_{\phi'} \omega
$$
所以
$$
H' = \frac{1}{2}m(\dot{\rho}^2 + \rho^2 \dot{\phi}^2 + \dot{z}^2) + V( \sqrt{\rho^{2} + z^{2}}) - p'_{\phi'} \omega \\=
\frac{1}{2} p'_{\rho'} \dot{\rho'} + \frac{1}{2} p'_{\phi'} (\dot{\phi'} + \omega) + \frac{1}{2} p'_{z'} \dot{z'}  + V - p'_{\phi'} \omega \\= 
\frac{{p'_{\rho'}}^{2}}{2m} + \frac{p'_{\phi'} (p'_{\phi'} - 2m \omega \rho'^{2})}{2m \rho'^{2}} + \frac{{p'_{z'}}^{2}}{2m} + V
$$
正则方程
$$
\dot{p'}_{\rho'} = - m \pdv{V}{\rho'} + \frac{{p'_{\phi'}}^{2}}{m \rho'^{3}} \\
\dot{p'}_{\phi'} = - m \pdv{V}{\phi'} \\
\dot{p'}_{z'} = - m \pdv{V}{z'}
$$
虚拟力，从运动方程中得到
$$
\frac{{p'_{\phi'}}^{2}}{m \rho'^{3}} = m \rho' (\dot{\phi'} + \omega)^{2} = m \rho' \omega^{2} + m \rho' \dot{\phi'}^{2} + 2 m \rho' \dot{\phi'} \omega
$$
所以惯性离心力为
$$
m \omega^{2} \rho'
$$
科里奥利力的一个分量
$$
2m \rho' \dot{\phi'} \omega
$$
再由角向的方程
$$
\dot{p'}_{\phi'} = m \rho'^{2} \ddot{\phi'} + 2m \rho' \dot{\rho'} (\dot{\phi'} + \omega)
$$
得到科里奥利力的另一个分量
$$
2m \dot{\rho'} \omega
$$




