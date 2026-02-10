# 分析力学 第6周作业

Chasse_neige

3.4 已知一质点运动轨迹可以用平面极坐标表示为阿基米德螺线 $r = r_0\theta$，求作用在质点上的有心力。

由于角动量守恒，所以
$$
\dot{\theta} r^{2} = \dot{\theta} \theta^{2} r_{0}^{2} = \frac{L}{m}
$$
即
$$
\theta^{2} \dd \theta = \frac{L}{m r_{0}^{2}} \dd t \\
\theta (t) = \left( \frac{3 L}{mr_{0}^{2}} t \right)^{\frac{1}{3}}
$$
可以求出
$$
\dot{\theta} = \frac{L}{m r_{0}^{2} \theta^{2}} 
$$

$$
\dot{r} = r_{0} \dot{\theta} = \frac{L}{m r_{0} \theta^{2}} \\
\ddot{r} = - \frac{2 L }{m r_{0} \theta^{3}} \dot{\theta} = - \frac{2 L^{2}}{m^{2} r_{0}^{3} \theta^{5}}
$$



直接带入
$$
F = m (\ddot{r} - r \dot{\theta}^{2}) = m (- \frac{2 L^{2} r_{0}^{2}}{m^{2} r^{5}} - r \frac{L^{2}}{m^{2} r^{4}}) = - \frac{L^{2}}{m} \left(\frac{1}{r^{3}} + \frac{2 r_{0}^{2}}{r^{5}} \right)
$$
3.5 已知作用在一质点上的有心力是引力，且与距离的三次方成反比，求质点运动轨迹。

此时势函数可以写成
$$
V(r) = - \frac{a}{r^{2}}
$$
所以径向运动方程可以写成
$$
m (\ddot{r} - r \dot{\theta}^{2})  =  - \frac{2 a}{r^{3}}
$$
带入
$$
\dot{\theta} = \frac{L}{m r^{2}}
$$

$$
\ddot{r} - \frac{L^{2}}{m^{2} r^{3}} = - \frac{2 a}{m r^{3}}
$$

作代换
$$
u = \frac{1}{r}  
$$
此时
$$
\dot{r} = - \frac{1}{u^{2}} \dv{u}{\theta} \frac{L}{m} u^{2} = - \frac{L}{m} \dv{u}{\theta} \\
\ddot{r} = - \frac{L^{2}}{m^{2}} \frac{\mathrm{d}^{2} u}{\mathrm{d} \theta^{2}} u^{2}
$$
所以
$$
- \frac{L^{2}}{m^{2}} \frac{\mathrm{d}^{2} u}{\mathrm{d} \theta^{2}} u^{2} - \frac{L^{2}}{m^{2}} u^{3} = - \frac{2a}{m} u^{3}
$$
即
$$
\frac{\mathrm{d}^{2} u}{\mathrm{d} \theta^{2}} + (1 - \frac{2ma}{L^{2}}) u = 0
$$
分类讨论

当$\frac{2 m a}{L^{2}} < 1$ 时
$$
u = A \cos(\sqrt{1 - \frac{2 m a}{L^{2}}} \theta + \phi)
$$
所以
$$
r = \frac{1}{A \cos(\sqrt{1 - \frac{2 m a}{L^{2}}} \theta + \phi)}
$$
其中 $A$ 和 $\phi$ 由初始条件决定

当 $\frac{2 m a}{L^{2}} = 1$ 时
$$
u = A \theta + B
$$
所以
$$
r = \frac{1}{A \theta + B}
$$
其中 $A$ 和 $B$ 由初始条件决定

当 $\frac{2 m a}{L^{2}} > 1$ 时
$$
u = A e^{\sqrt{\frac{2 m a}{L^{2}} - 1} \theta} + B e^{- \sqrt{\frac{2 m a}{L^{2}} - 1} \theta}
$$
所以
$$
r = \frac{1}{u = A e^{\sqrt{\frac{2 m a}{L^{2}} - 1} \theta} + B e^{- \sqrt{\frac{2 m a}{L^{2}} - 1} \theta}}
$$
其中 $A$ 和 $B$ 由初始条件决定

3.8 一质点受有心力 $F(r)=- \frac{k m }{r^{4}}$ 作用。若质点在距力心 $2 a$ 处，垂直于极轴以速率 $\sqrt{\frac{k} {12 a^{3}}}$ 抛出, 求质点的轨道。

我们选取质点发射的坐标为 $\theta = 0$

此时比奈方程的形式变为
$$
\frac{\mathrm{d}^{2} u}{\mathrm{d} \theta^{2}} + u = \frac{k m^{2}}{L^{2}} u^{2}
$$

$$
\frac{1}{2} \dv{(\dv{u}{\theta})^{2}}{u} = \frac{k m^{2}}{L^{2}} u^{2} - u \\
\left( \dv{u}{\theta} \right)^{2} = 2 \int_{\frac{1}{2a}}^{u} \left( \frac{k m^{2}}{L^{2}} u^{2} - u \right) \, \dd u = \frac{2 k m^{2}}{3 L^{2}} (u^{3} - \frac{1}{8 a^{3}}) - (u^{2} - \frac{1}{4 a^{2}})
$$

带入 $L = m  \sqrt{\frac{k}{3 a}}$, 整理得到
$$
\left( \dv{u}{\theta} \right)^{2} = 2 a u^{3} - u^{2} \\
\dv{u}{\theta} = u \sqrt{2 a u - 1} 
$$
积分
$$
\int_{\frac{1}{2a}}^{u} \frac{\dd u}{u \sqrt{2a u - 1}} = \theta
$$

$$
\int_{\frac{1}{2a}}^{u} \frac{\dd u}{u \sqrt{2a u - 1}} = \int_{0}^{\sqrt{2 a u - 1}} \frac{1}{2a} \frac{\dd{(x^{2} + 1)}}{\frac{1}{2a} (x^{2} + 1) x} \\
= 2 \int_{0}^{\sqrt{2a u - 1}} \frac{\dd{x}}{x^{2} + 1} = 2 \int_{0}^{\arctan(\sqrt{2a u - 1})} \dd{\theta} = 2 \arctan(\sqrt{2a u - 1})
$$

所以轨道方程为
$$
\sqrt{2a u - 1} = \tan(\frac{\theta}{2}) \\
u (\theta) = \frac{1}{2a} (1 + \tan^{2}(\frac{\theta}{2}))
$$
即
$$
r (\theta) = 2a \cos^{2} (\frac{\theta}{2}) = a (1 + \cos \theta)
$$
3.12 一轻绳的一端系着质量为 $m$ 的质点，绳的另一端绕在一半径为 $a$ 的棒上，不考虑重力。开始拉紧的绳长 $s_{0}$, 在垂直于棒长的平面以初速 $v_{0}$ 绕棒转动, 并缠绕到棒上, 最终质点碰到棒上, 如图 3.8 所示。求花费的时间。

<img src="./Analytical Mechanics Homework 5.assets/image-20251022192259511.png" alt="image-20251022192259511" style="zoom:50%;" />

绳子张力不做功，所以质点速度始终为 $v_{0}$

所以
$$
\dv{r}{t} = - \frac{a}{r} v_{0}
$$

$$
r \, \dd r = - a v_{0} \, \dd t \\
\int_{\sqrt{s_{0}^{2} + a^{2}}}^{a} r \, \dd r = - \int_{0}^{t} a v_{0} \, \dd t \\
\frac{s_{0}^{2}}{2} = a v_{0} t
$$

所以花费的时间为
$$
\Delta t = \frac{s_{0}^{2}}{2a v_{0}}
$$
3.14 讨论一粒子在屏蔽势场 $V(r)=-\frac{k}{r}\mathrm{e}^{-r/a}$ 中沿圆轨道运动的稳定性条件,其中 $k>0,a>0$ 。

圆周运动的动力学方程满足
$$
m (\ddot{r} - r \frac{L^{2}}{m^{2} r^{4}}) = F(r) \\
m \ddot{r} = F(r) + \frac{L^{2}}{m r^{3}}
$$
所以有效势能可以表示为
$$
V_{eff} (r) = V(r) + \frac{L^{2}}{2 m r^{2}} = - \frac{k}{r} e^{- \frac{r}{a}} + \frac{L^{2}}{2 m r^{2}}
$$
平衡位置
$$
\pdv{V}{r} = 0
$$

$$
\frac{k}{r^{2}} e^{- \frac{r}{a}} + \frac{k}{ar} e^{- \frac{r}{a}} - \frac{L^{2}}{m r^{3}} = 0 \\
(r + \frac{r^{2}}{a}) e^{- \frac{r}{a}} = \frac{L^{2}}{m k}
$$

判断稳定性
$$
\pdv{V}{r^{2}}{} = e^{- \frac{r}{a}} (- \frac{2k}{r^{3}} - \frac{2k}{a r^{2}} - \frac{k}{a^{2} r}) + \frac{3 L^{2}}{m r^{4}} = \frac{k}{r^{4}} \left( -(2r + \frac{2 r^{2}}{a} + \frac{r^{3}}{a^{2}}) e^{ - \frac{r}{a}}  + \frac{3 L^{2}}{mk} \right)
$$
带入 $(r + \frac{r^{2}}{a}) e^{- \frac{r}{a}} = \frac{L^{2}}{m k}$ 
$$
\pdv{V}{r^{2}}{} = \frac{k}{r^{4}} \left(\frac{L^{2}}{mk}- \frac{r^{3}}{a^{2}} e^{- \frac{r}{a}}\right) = \frac{k}{r^{4}} \left((r + \frac{r^{2}}{a} - \frac{r^{3}}{a^{2}}) e^{- \frac{r}{a}}\right) \\
= \frac{k}{r^{3}} e^{- \frac{r}{a}} (1 + \frac{r}{a} - \frac{r^{2}}{a^{2}})
$$
另 $x = \frac{r}{a}$ ，则稳定性条件可以写为
$$
1 + x - x^{2} > 0
$$
即
$$
0 < x < \frac{1 + \sqrt{5}}{2}
$$
所以当 $0 < r < \frac{1 + \sqrt{5}}{2} a$ 时粒子是稳定的