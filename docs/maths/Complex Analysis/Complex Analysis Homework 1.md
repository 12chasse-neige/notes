# 复变函数 第1次作业

Chasse_neige

5.若 $|z| = 1$，请证明对任意复数 $a$ 和 $b$，均有
$$
\left| \frac{a z + b}{\overline{b} z + \overline{a}} \right| = 1
$$
证明：由于 $|z| = 1$，所以 $z \overline{z} = 1$
$$
\left| \frac{a z + b}{\overline{b} z + \overline{a}} \right|  = \frac{|a z + b|}{|\overline{b} z + \overline{a}|} = \frac{|a z + b|}{\left|\overline{\overline{b} z + \overline{a}}\right|} = \frac{|a z + b|}{|b \overline{z} + a|} = \frac{|a z + b|}{|z \overline{z}(b \overline{z} + a)|} = \frac{|a z + b|}{|\overline{z} (b + a z)|} = \frac{|a z + b|}{|\overline{z}| |a z + b|} = 1
$$
6.请利用单倍角的三角函数表示 $\cos(n\theta)$ 和 $\sin(n\theta)$，并给出 $\cos(3\theta)$ 和 $\sin(3\theta)$ 的具体表达式。
$$
\cos (n \theta) = \frac{e^{i n \theta} + e^{- i n \theta}}{2} = \frac{1}{2} ((\cos \theta + i \sin \theta)^{n} + (\cos \theta - i \sin \theta)^{n}) \\ = \frac{1}{2} (\sum_{k = 0}^{n} i^{k} C_{n}^{k} \cos^{n - k} \theta \sin^{k} \theta + \sum_{k = 0}^{n} (-i)^{k} C_{n}^{k} \cos^{n-k} \theta \sin^{k} \theta) = \frac{1}{2} (2 \sum_{k = 0}^{[\frac{n}{2}]} i^{2k} C_{n}^{2k} \cos^{n-2k} \sin^{2k} \theta) \\ = \sum_{k = 0}^{[\frac{n}{2}]} i^{2k} C_{n}^{2k} \cos^{n-2k} \theta \sin^{2k} \theta
$$

$$
\sin (n \theta)  = \frac{e^{i n \theta} - e^{- i n \theta}}{2 i} = \frac{1}{2i} ((\cos \theta + i \sin \theta)^{n} - (\cos \theta - i \sin \theta)^{n}) \\ = \frac{1}{2i} (\sum_{k = 0}^{n} i^{k} C_{n}^{k} \cos^{n - k} \theta \sin^{k} \theta - \sum_{n = 0}^{k} (-i)^{k} \cos^{n - k} \theta \sin^{k} \theta) = \frac{1}{2i} (2i \sum_{n = 0}^{[\frac{n}{2}]} i^{2k} C_{n}^{2k + 1} \cos^{n - 2k - 1} \theta \sin^{2k + 1} \theta) \\ = 
\sum_{n = 0}^{[\frac{n}{2}]} i^{2k} C_{n}^{2k + 1} \cos^{n - 2k - 1} \theta \sin^{2k + 1} \theta
$$

特别地，对于 $n = 3$
$$
\cos (3 \theta) = \sum_{k = 0}^{1} i^{2k} C_{3}^{2k} \cos^{3-2k} \theta \sin^{2k} \theta \\ =
\cos^{3} \theta - 3 \cos \theta \sin^{2} \theta
$$

$$
\sin (3 \theta) = \sum_{n = 0}^{1} i^{2k} C_{3}^{2k + 1} \cos^{3 - 2k - 1} \theta \sin^{2k + 1} \theta \\ =
3 \cos^{2} \theta \sin \theta - \sin^{3} \theta
$$

7.请利用多倍角三角函数的线性关系表达 $\cos^n\theta$ 和 $\sin^n\theta$，并给出 $\cos^3\theta$ 和 $\sin^3\theta$ 的具体表达式。
$$
\cos^{n} \theta = \left( \frac{e^{i  \theta} + e^{- i \theta}}{2} \right)^{n}  = \sum_{k = 0}^{[\frac{n + 1}{2}]} C_{n}^{k} \frac{e^{i (n - 2k) \theta} + e^{- i (n - 2k) \theta}}{2^{n}} = 
\frac{1}{2^{n - 1}} \sum_{k = 0}^{[\frac{n + 1}{2}]} C_{n}^{k} \cos ((n - 2k) \theta)
$$

$$
\sin^{n} \theta = \left( \frac{e^{i  \theta} - e^{- i \theta}}{2 i} \right)^{n}  = \sum_{k = 0}^{[\frac{n + 1}{2}]} C_{n}^{k} \frac{(-1)^{k} e^{i (n - 2k) \theta} + (-1)^{n - k} e^{- i (n - 2k) \theta}}{(2i)^{n}} \\ = 
\begin{cases} \frac{1}{(2i)^{n - 1}} \sum_{k = 0}^{[\frac{n}{2}]} (-1)^{k} C_{n}^{k} \sin ((n - 2k) \theta) & (\text{n为奇数}) \\ \frac{1}{(2i)^{n}} \sum_{k = 0}^{[\frac{n}{2}]} 2 (-1)^{k} C_{n}^{k} \cos ((n - 2k) \theta) & (\text{n为偶数}) \end{cases}
$$

特别地，对于 $n = 3$
$$
\cos^{3} \theta = \frac{1}{2^{2}} \sum_{k = 0}^{1} C_{3}^{k} \cos ((3 - 2k) \theta) = \frac{1}{4} (\cos (3 \theta) + 3 \cos \theta)
$$

$$
\sin^{3} \theta = \frac{1}{(2i)^{2}} \sum_{k = 0}^{1} (-1)^{k}  C_{3}^{k} \sin ((3 - 2k) \theta) = - \frac{1}{4} (\sin (3 \theta) - 3 \sin \theta)
$$

11 证明下列 Cauchy-Riemann 条件，其中 $w = u + iv = \rho e^{i\varphi}$，$z = x + iy = r e^{i\theta}$：

(a) 
$$
\frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta}, \quad \frac{\partial v}{\partial r} = -\frac{1}{r} \frac{\partial u}{\partial \theta}
$$

考虑沿着径向的逼近方式：
$$
\lim_{\Delta z \to 0} \frac{\Delta w}{\Delta z} = \lim_{\Delta r \to 0} \frac{\Delta u + i \Delta v}{e^{i \theta} \Delta r} = \frac{\partial u}{\partial r} \cos \theta + \frac{\partial v}{\partial r} \sin \theta + i (\frac{\partial v}{\partial r} \cos \theta - \frac{\partial v}{\partial r} \sin \theta)
$$
再考虑沿着角向的逼近方式：
$$
\lim_{\Delta z \to 0} \frac{\Delta w}{\Delta z} = \lim_{\Delta \theta \to 0} \frac{\Delta u + i \Delta v}{r (i \cos \theta - \sin \theta) \Delta \theta} = \frac{1}{r} ((\frac{\partial v}{\partial \theta} \cos \theta - \frac{\partial u}{\partial \theta} \sin \theta) - i (\frac{\partial u }{\partial \theta} \cos \theta + \frac{\partial v}{\partial \theta} \sin \theta))
$$
对比上述二式，得到
$$
\frac{\partial u}{\partial r} \cos \theta + \frac{\partial v}{\partial r} \sin \theta =  \frac{1}{r} (\frac{\partial v}{\partial \theta} \cos \theta - \frac{\partial u}{\partial \theta} \sin \theta) \\
\frac{\partial v}{\partial r} \cos \theta - \frac{\partial v}{\partial r} \sin \theta = - \frac{1}{r} (\frac{\partial u }{\partial \theta} \cos \theta + \frac{\partial v}{\partial \theta} \sin \theta)
$$
即
$$
\frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta}, \quad \frac{\partial v}{\partial r} = -\frac{1}{r} \frac{\partial u}{\partial \theta}
$$
14.已知函数 $f(z) = u + iv$ 在区域 $G$ 中解析，则对于常实数 $a$ 和 $b$，$au + bv$ 在区域中也解析的条件为什么？并据此证明若在 $G$ 中 $\text{Im}\, f(z) = 0$，则 $f(z)$ 为常函数。

也解析的条件：由于 $f (z)$ 解析，所以 $f(z)$ 的各个偏导数在区域 $G$ 中连续，即 $au + bv$ 的各个偏导数在区域 $G$ 中连续，所以 $au + bv$ 在区域中也解析的充要条件即为 Cauchy-Riemann 条件：
$$
a \frac{\partial u}{\partial x} + b \frac{\partial v}{\partial x} = \frac{\partial u}{\partial y} + b \frac{\partial v}{\partial y} = 0
$$
若在 $G$ 中 $\text{Im}\, f(z) = 0$，则 $v = 0$，即有
$$
\frac{\partial u}{\partial x} = \frac{\partial u}{\partial y} = 0
$$
由于由于 $f (z)$ 解析，所以在区域 $G$ 中$u \in C^{1}$，所以在区域 $G$ 中 $\mathrm{d} u = 0$

所以对于任意路径的积分有
$$
u (\mathbf{x}) - u(\mathbf{x}_{0}) = \int_{\mathbf{x}_{0}}^{\mathbf{x}} \mathrm{d}u =0
$$
即$f(z)$ 为常函数。





