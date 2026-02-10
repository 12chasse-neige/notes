# 分析力学 第13次作业

Chasse_neige

7.17 (1) 假设使下面变换在一阶近似下是正则变换
$$
q=Q+aQ^{2}+2bQP+cP^{2}
$$

$$
p=P+dQ^{2}+2eQP+fP^{2}
$$

找到小量 $a$, $b$, $c$, $d$, $e$, $f$ 应满足的条件。

利用 $\comm{q}{p} = 1$，所以
$$
\comm{q}{p}_{QP} = \comm{Q+aQ^{2}+2bQP+cP^{2}}{P+dQ^{2}+2eQP+fP^{2}} \\ = 
\comm{Q}{P} + a\comm{Q^{2}}{P} + 2b \comm{QP}{P} + c \comm{P^{2}}{P} + d \comm{Q}{Q^{2}} + 2e \comm{Q}{QP} + f \comm{Q}{P^{2}}
$$
所以在一阶近似下要求满足
$$
a\comm{Q^{2}}{P} + 2b \comm{QP}{P} + c \comm{P^{2}}{P} + d \comm{Q}{Q^{2}} + 2e \comm{Q}{QP} + f \comm{Q}{P^{2}} = 0
$$

$$
2a Q + 2b P + 2e Q + 2f P = 0 \\
(a + e) Q + (b + f) P = 0
$$

即 $a = -e, b = -f$

(2) 含非谐振项从而稍微偏离谐振动的哈密顿量为
$$
H=\frac{p^{2}}{2m}+\frac{1}{2}m\omega^{2}q^{2}+ \alpha q^{3}
$$

其中，$\alpha$ 是小量。通过（1）的正则变换，使新哈密顿量在二阶近似下不含非谐振项，即

$$
H^{*}=\frac{P^{2}}{2m}+\frac{1}{2} m \omega^{2} Q^{2}+ \text{二阶项}
$$

直接给出变换后哈密顿量的形式为
$$
H^{*} = \frac{(P+dQ^{2}+2eQP+fP^{2})^{2}}{2m} + \frac{1}{2} m \omega^{2} (Q+aQ^{2}+2bQP+cP^{2})^{2} + \alpha (Q+aQ^{2}+2bQP+cP^{2})^{3}
$$
展开后要哈密顿量没有三次方项
$$
\frac{P}{m} (d Q^{2} + 2e QP + f P^{2}) + m \omega^{2} Q (a Q^{2} + 2b QP + c P^{2}) + \alpha Q^{3} = 0
$$
所以
$$
a = - \frac{\alpha}{m \omega^{2}}
$$

$$
e = \frac{\alpha}{m \omega^{2}}
$$

$$
c = - \frac{2 \alpha}{m^{3} \omega^{4}}
$$

$$
b = d = f = 0
$$

(3) 利用新的正则变量求解，再通过正则变换，给出一阶近似下非谐振问题的解。

在新的正则变量下，正则方程的解为
$$
P =- m \omega Q_{0} \sin (\omega t + \phi) \\
Q = Q_{0} \cos (\omega t + \phi)
$$
逆变换回去得到
$$
p = - m \omega Q_{0} \sin (\omega t + \phi) - \frac{2 \alpha Q_{0}^{2}}{\omega} \cos (\omega t + \phi) \sin (\omega t + \phi)
$$

$$
q = Q_{0} \cos (\omega t + \phi) - \frac{\alpha Q_{0}^{2}}{m \omega^{2}} (1 + \sin^{2} (\omega t + \phi))
$$

7.21 一维运动的质量 $m$ 的质点势能为
$$
V = V_0 \tan^2 \frac{\pi q}{a}
$$

其中 $V_0$, $a$ 是大于零的常量。

(1) 假设作用量和角变量分别为 $I$, $\Psi$，给出作用量 $I$ 的积分表示

先给出哈密顿量
$$
H  = \frac{p^{2}}{2m} + V_{0} \tan^{2} \frac{\pi q}{a}
$$
积分得到作用量
$$
I = \frac{1}{2 \pi} \oint p \, \dd{q} =\frac{2}{\pi} \int_{0}^{q_{0}} \sqrt{2 m E - 2m V_{0} \tan^{2} \frac{\pi q}{a}} \, \dd{q}
$$
(2) 用能量 $E$ 表示振动频率 $\omega$

$$
\frac{1}{\omega} = \frac{\sqrt{2m}}{\pi} \int_{0}^{q_{0}} \frac{\dd{q}}{\sqrt{E - V_{0} \tan^{2} \frac{\pi q}{a}}}
$$
所以
$$
\omega = \frac{\pi}{\sqrt{2m}} \frac{1}{\int_{0}^{q_{0}} \frac{\dd{q}}{\sqrt{E - V_{0} \tan^{2} \frac{\pi q}{a}}}} = \frac{2 \pi}{a} \sqrt{\frac{E + V_{0}}{2m}}
$$
(3) 给出哈密顿-雅可比方程的第二种形式，并假设此时新的正则变量刚好为作用量和角变量 $I$, $\Psi$，给出生成函数的积分形式
$$
E = \frac{1}{2m} \left(\dv{W}{q}\right)^{2} + V_{0} \tan^{2} \frac{\pi q}{a}
$$

$$
\dv{W}{q} = \pm \sqrt{2mE - 2m V_{0} \tan^{2} \frac{\pi q}{a}}
$$

所以
$$
W (q, I) = \pm \int \sqrt{2m E - 2m V_{0} \tan^{2} \frac{\pi q}{a}} \, \dd{q}
$$
(4) 给出角变量 $\Psi$ 与 $q$ 的关系

$$
\Psi = \pdv{W (q, I)}{I} = \pdv{W}{E} \dv{E}{I} = \arcsin(\sqrt{1 + \frac{V_{0}}{E}} \sin \frac{\pi q}{a})
$$
(5) 假设质点初始时刻在平衡位置，初速度 $v_0$，求解 $q(t)$

$$
q (t) = \frac{a}{\pi} \arcsin(\frac{\sin(\omega t + \phi_{0})}{\sqrt{1 + \frac{V_{0}}{E}}})
$$
