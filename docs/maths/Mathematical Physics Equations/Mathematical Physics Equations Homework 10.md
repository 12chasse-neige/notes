# 数学物理方程 第10次作业

Chasse_neige

14.将下列函数按照球谐函数展开

(a) $\sin^{2} \theta \cos^{2} \varphi$

首先，利用三角恒等式
$$
\sin^{2} \theta \cos^{2} \varphi = \frac{1}{2} \sin^{2} \theta + \frac{1}{2} \sin^{2} \theta \cos 2\varphi
$$
通过球谐函数展开：
$$
\sin^{2} \theta \cos^{2} \varphi = \frac{1}{3} \sqrt{4\pi} Y_{0}^{0} - \frac{1}{3} \sqrt{\frac{4\pi}{5}} Y_{2}^{0} + \sqrt{\frac{2\pi}{15}} Y_{2}^{2} + \sqrt{\frac{2\pi}{15}} Y_{2}^{-2}
$$
其中：

$Y_{0}^{0} = \frac{1}{\sqrt{4\pi}}$

$Y_{2}^{0} = \sqrt{\frac{5}{4\pi}} \cdot \frac{1}{2} (3\cos^{2} \theta - 1)$

$Y_{2}^{2} = \sqrt{\frac{15}{32\pi}} \sin^{2} \theta e^{i2\varphi}$

$Y_{2}^{-2} = \sqrt{\frac{15}{32\pi}} \sin^{2} \theta e^{-i2\varphi}$

(b) $(1+\cos \theta) \sin \theta \cos \varphi$

 首先，展开函数：
$$
(1+\cos \theta) \sin \theta \cos \varphi = \sin \theta \cos \varphi + \cos \theta \sin \theta \cos \varphi
$$
通过球谐函数展开：
$$
(1+\cos \theta) \sin \theta \cos \varphi = -\sqrt{\frac{2\pi}{3}} (Y_{1}^{1} - Y_{1}^{-1}) - \sqrt{\frac{2\pi}{15}} (Y_{2}^{1} - Y_{2}^{-1})
$$
其中：

$Y_{1}^{1} = -\sqrt{\frac{3}{8\pi}} \sin \theta e^{i\varphi}$

$Y_{1}^{-1} = \sqrt{\frac{3}{8\pi}} \sin \theta e^{-i\varphi}$

$Y_{2}^{1} = -\sqrt{\frac{15}{8\pi}} \sin \theta \cos \theta e^{i\varphi}$

$Y_{2}^{-1} = \sqrt{\frac{15}{8\pi}} \sin \theta \cos \theta e^{-i\varphi}$

15.求解如下定解问题
$$
\nabla^{2} u  = A + B r^{2} \sin 2 \theta \cos \varphi \\
u \mid_{r=a}  = 0
$$
由于方程线性，解由两部分组成：$u = u_1 + u_2$，其中 $u_1$ 对应源项 $A$，$u_2$ 对应源项 $B r^{2} \sin 2\theta \cos \varphi$。

对于 $u_1$：满足 $\nabla^{2} u_1 = A$，且 $u_1(a) = 0$ 
特解为 $u_1 = \frac{A}{6} r^{2}$，添加齐次解满足边界条件  
$$
u_1 = \frac{A}{6} (r^{2} - a^{2})
$$
对于 $u_2$：满足 $\nabla^{2} u_2 = B r^{2} \sin 2\theta \cos \varphi$，且 $u_2(a) = 0$
假设 $u_2 = v(r) (Y_{2}^{1} - Y_{2}^{-1})$，则 $B r^{2} \sin 2\theta \cos \varphi = - \sqrt{\frac{8 \pi}{15}}B r^{2} (Y_{2}^{1} - Y_{2}^{-1})$

所以
$$
\nabla^{2} u_{2} = \frac{1}{r^{2}} \dv{}{r} ( r^{2} \dv{}{r} v(r)) (Y_{2}^{1} - Y_{2}^{-1}) - \frac{6}{r^{2}} v(r) (Y_{2}^{1} - Y_{2}^{-1})
$$
得到
$$
\frac{1}{r} \dv[2]{}{r} (rv) - \frac{6}{r^{3}} (rv) = - \sqrt{\frac{8 \pi}{15}}B r^{2} 
$$
解得
$$
v(r) = - \frac{1}{14} \sqrt{\frac{8 \pi}{15}}B r^{2} (r^{2} - a^{2})
$$

$$
u_2 = \frac{B}{14} r^{2} (r^{2} - a^{2}) \sin 2\theta \cos \varphi
$$

所以解为
$$
u = \frac{A}{6} (r^{2} - a^{2}) + \frac{B}{14} r^{2} (r^{2} - a^{2}) \sin 2\theta \cos \varphi
$$

