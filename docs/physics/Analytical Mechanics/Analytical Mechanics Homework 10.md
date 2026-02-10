# 分析力学 第10次作业

Chasse_neige

6.16 引入正则变量的好处是，坐标变量和共轭动量地位相同。对于一维谐振动系统，哈密顿量为

$$
H = \frac{p^{2}}{2m} + \frac{1}{2}m\omega^{2}q^{2}
$$

1.若引入动量空间的拉格朗日量 $K(p,\dot{p},t) = L(q,\dot{q},t) - p\dot{q} - q\dot{p}$，求证其形式与 $L = L(\dot{q},q)$ 相同
$$
L (\dot{q}, q) = p \dot{q} - H = \frac{p^{2}}{2m} - \frac{1}{2} m \omega^{2} q^{2}
$$

所以
$$
K(p,\dot{p},t) = L(q,\dot{q},t) - \dot{p}q - q\dot{p} = \frac{p^{2}}{2m} - \frac{1}{2} m \omega^{2} q^{2} - \frac{p^{2}}{m} - q (- m \omega^{2} q) = \frac{\dot{p}^{2}}{2m \omega^{2}} - \frac{p^{2}}{2m}
$$
有相同的形式。

2.证明动量空间的拉格朗日方程与坐标空间的形式相同

先得到坐标空间的运动方程
$$
\dv{}{t}(m \dot{q}) = - m \omega^{2} q \\
\ddot{q} = - \omega^{2} q
$$
再写出动量空间的拉格朗日方程
$$
\dv{}{t} \pdv{}{\dot{p}} K = \pdv{}{p} K\\
\frac{\ddot{p}}{m \omega^{2}} = - \frac{p}{m} \\
\ddot{p} = - \omega^{2} p
$$
二者形式相同。

6.17 双摆，其中 $m_{1} = m_{2}$, $l_{1} = l_{2}$，做小角度近似，给出哈密顿量及循环积分。此时相轨迹在四维相空间的二维环上，如果时间足够长，相轨迹是否会遍历二维环？逐渐增加振幅，小角度近似慢慢失效，简单描述这个过程。

<img src="./Analytical Mechanics Homework 10.assets/image-20251210202842195.png" alt="image-20251210202842195" style="zoom:25%;" />

写出动能
$$
T = \frac{1}{2} m (l \dot{\theta}_{1})^{2} + \frac{1}{2} m (l^{2} \dot{\theta}_{1}^{2} + l^{2} (\dot{\theta}_{1} + \dot{\theta}_{2})^{2} + 2 l^{2} \dot{\theta}_{1}(\dot{\theta}_{1} + \dot{\theta}_{2}) \cos(\theta_{2})) \\ \approx
\frac{1}{2} m l^{2} (5 \dot{\theta}_{1}^{2} + \dot{\theta}_{2}^{2} + 4 \dot{\theta}_{1} \dot{\theta}_{2})
$$
势能
$$
V = - mg l \cos \theta_{1} - mg (l \cos \theta_{1} + l \cos(\theta_{1} + \theta_{2})) \\ \approx
\frac{1}{2} mgl (3 \theta_{1}^{2} + \theta_{2}^{2} + 2 \theta_{1} \theta_{2})
$$
所以
$$
L \approx \frac{1}{2} m l^{2} (5 \dot{\theta}_{1}^{2} + \dot{\theta}_{2}^{2} + 4 \dot{\theta}_{1} \dot{\theta}_{2}) - \frac{1}{2} mgl (3 \theta_{1}^{2} + \theta_{2}^{2} + 2 \theta_{1} \theta_{2})
$$
得到
$$
p_{\theta_{1}} = m l^{2} (5 \dot{\theta}_{1} + 2 \dot{\theta}_{2}) \\
p_{\theta_{2}} = m l^{2} ( \dot{\theta}_{2} + 2 \dot{\theta}_{1})
$$
所以
$$
H = p_{\theta_{1}} \frac{p_{\theta_{1}} - 2 p_{\theta_{2}}}{ml^{2}} + p_{\theta_{2}} \frac{5 p_{\theta_{2}} - 2 p_{\theta_{1}} }{ml^{2}} - \frac{p_{\theta_{1}}^{2} + 5 p_{\theta_{2}}^{2} - 4 p_{\theta_{1}} p_{\theta_{2}}}{2m l^{2}} + \frac{1}{2} mgl (3 \theta_{1}^{2} + \theta_{2}^{2} + 2 \theta_{1} \theta_{2}) \\ =
\frac{p_{\theta_{1}}^{2} + 5 p_{\theta_{2}}^{2} - 4 p_{\theta_{1}} p_{\theta_{2}}}{2m l^{2}} + \frac{1}{2} mgl (3 \theta_{1}^{2} + \theta_{2}^{2} + 2 \theta_{1} \theta_{2})
$$
循环积分
$$
H = Const
$$
正则方程
$$
\dot{p_{\theta_{1}}} = -mgl (3 \theta_{1} + \theta_{2}) \\
\dot{p_{\theta_{2}}} = -mgl (\theta_{2} + \theta_{1})
$$
解得
$$
\omega = \sqrt{(2 \pm \sqrt{2}) \frac{g}{l}}
$$
由于 $\omega$ 是无理数，所以曲线在两个方向上并没有办法找到一个确定比值的周期，所以曲线可以遍历二维环。

逐渐增加振幅，小角度近似慢慢失效，此时相空间中原本的二维不变环面会变形，中间的洞变小，环面上的相轨迹之间出现裂隙，最终走向混沌。

7.1 一粒子质量 $m$，以加速度 $a$ 作匀加速直线运动，初始 $t = 0$，位置和动量分别为 $x_0$，$p_0$，将位置和动量作为正则变量。 
1.给出哈密顿量，并给出运动方程和守恒量；
$$
L = \frac{1}{2} m \dot{x}^{2} + ma x
$$

$$
p = m \dot{x}
$$

$$
H = \frac{p^{2}}{2m} - ma x
$$

运动方程
$$
\frac{p}{m} = \dot{x}
$$

$$
\dot{p} = ma
$$

所以
$$
\ddot{x} = a
$$
守恒量
$$
H = \frac{p^{2}}{2m} - ma x = \frac{p_{0}^{2}}{2m} - ma x_{0}
$$
2.求 $t$ 时刻正则变量 $x$，$p$

直接积分得到
$$
x(t) = x_{0} + \frac{p_{0}}{m} t + \frac{1}{2} a t^{2}
$$

$$
p(t) = p_{0} + ma t
$$

3.给出第二种形式的正则变换生成函数 $F_2(x_0, p, t)$，由此证明 $x_0$，$p_0$ 到 $x$，$p$ 是正则变换
$$
\dd{F_{2}} = p_{0} \dd{x_{0}}+ x \dd{p} + (H - H_{0}) \, \dd{t} \\ = (p - mat) \, \dd{x_{0}} +(x_{0} + \frac{p - mat}{m} t + \frac{1}{2} a t^{2}) \dd{p} + (\frac{p^{2}}{2m} - ma (x_{0} + \frac{p - mat}{m} t + \frac{1}{2} a t^{2})) \, \dd{t} 
$$
所以
$$
F_{2} (x_{0}, p, t) = \frac{p^{2}}{2m} t + p x_{0} - mat x_{0} - \frac{1}{2} a p t^{2}  + \frac{1}{6} m a^{2} t^{3}
$$
所以$x_0$，$p_0$ 到 $x$，$p$ 是正则变换

4.利用泊松括号 $[x,p]_{x_0,p_0}$，证明 $x_0$，$p_0$ 到 $x$，$p$ 是正则变换

检验泊松括号
$$
\comm{x}{p}_{x_{0}, p_{0}} = \pdv{x}{x_{0}} \pdv{p}{p_{0}} - \pdv{x}{p_{0}} \pdv{p}{x_{0}} = 1
$$
所以$x_0$，$p_0$ 到 $x$，$p$ 是正则变换