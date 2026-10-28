# Feynman Lectures on Physics (3) Homework

## 第1次作业（第3章）

### 70.3

Vertically polarized monochromatic light is incident on a polaroid whose  axis for transmitting light is tilted at an angle $\theta$ to the vertical. Classically, what is the ratio of the transmitted intensity to the incident intensity? What does the polaroid do for the case of a single incident photon?

经典情形下，投射率为$\cos^{2} \theta$。

对于仅有一个光子入射的情形，光子有$\cos^{2} \theta$ 的概率透过偏振片并且偏振方向变为和偏振片方向相同，有$\sin^{2} \theta$ 的概率被吸收。

### 70.6

In the diffraction experiment shown in Fig. 70-2, the source emits particles of momentum $ p_0 $, mass $ m $, and velocity $ v $.

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20250922193135679.png" alt="image-20250922193135679">
(a) What is the spacing $ a $ between the central maximum and the neighboring maxima? Assume $ L \gg d $, $ L \gg a $.
$$
d \sin \theta = \lambda \\
\sin \theta = \frac{\lambda}{d} \\
a \approx \frac{L \lambda}{d} = \frac{L h}{d p_{0}}
$$
(b) If some influence alters the phase for the upper path (1) by $ \delta \phi_1 $ and for the lower path (2) by $ \delta \phi_2 $, show that the central maximum is displaced by a distance $ S $ given by: 
$$
S = + (\delta \phi_1 - \delta \phi_2) \frac{L}{d} \frac{\hbar}{p_0}
$$
Thus, if $ (\delta \phi_1 - \delta \phi_2) $ is the same for all paths giving rise to the interference pattern, then the whole pattern is displaced and we may say that the particles have been deflected upward a distance $ S $.

在主极大处两粒子束相位相同，假设主极大在原来位置的基础上向上偏离了$ S $
$$
\sin \theta = \frac{S}{L}
$$
所以产生的相位差为
$$
\delta \phi = \frac{d \sin \theta p_{0}}{\hbar} 2 \pi
$$
所以
$$
\delta \phi_{1} - \delta \phi_{2} = \frac{2 \pi d \sin \theta p_{0}}{h} \\
S = (\delta \phi_1 - \delta \phi_2) \frac{L}{d} \frac{\hbar}{p_0}
$$
(c) Suppose that in Region $ A $ the particle has a small potential energy which is a function only of its vertical position. Then the momentum of a particle at height $ x $ above the center line, $ p(x) $, will differ slightly from $ p(0) $, its value on the center line. Show that 
$$
p(x) = p(0) + \frac{m}{p(0)} (V(0) - V(x))
$$

 or, for the case where $ V(x) $ varies slowly, 
$$
p(x) = p(0) + \frac{Fx}{v}
$$
 where $ F $ is the negative of the gradient of the potential $ -{\partial V \over \partial x}$.

对于位置在$ x $ 处的粒子
$$
\frac{p(0)^{2}}{2m} + V(0) = \frac{p(x)^{2}}{2m} + V(x)
$$
所以动量满足
$$
2 m (V(0) - V(x)) = p(0)^{2} - p(x)^{2} = (p(0) + p(x)) (p(0) - p(x))
$$
由于“differ slightly from $ p(0) $”，所以$ p(0) + p(x) \approx 2 p(0) $

所以
$$
p(x) \approx p(0) + \frac{m}{p(0)} (V(0) - V(x))
$$
当$ V(x) $变化缓慢时，可以将$V(0) - V(x)$ 近似为
$$
V(0) - V(x) \approx F x
$$
带入$ p(0) = mv $，得到
$$
p(x) = p(0) + \frac{Fx}{v}
$$
(d) Under the circumstances in part (c) above, the momenta on paths (1) and (2) will differ, and also the wavelengths.

​	(1) Show that the phase difference between the upper and lower paths is:
$$
(\delta \phi_1 - \delta \phi_2) = \frac{d}{2v} \frac{F}{\hbar} L
$$
​	 (Note that the average vertical spacing between the two routes is $\frac{d}{2}$.)

​	对于上路，粒子的相位变化为
$$
\delta \phi_{1} = \int_{\frac{d}{2}}^{x} \frac{p(0) + \frac{Ft}{v}}{\hbar \sin \theta_{upper}} dt \approx \left(\frac{p(0)}{\hbar} (x - \frac{d}{2}) + \frac{F}{2 \hbar v} (x^{2} - \frac{d^{2}}{4}) \right) \frac{L}{x - \frac{d}{2}}
$$
​	而对于下路
$$
\delta \phi_{2} = \int_{- \frac{d}{2}}^{x} \frac{p(0) + \frac{Ft}{v}}{\hbar \sin \theta_{upper}} dt \approx \left(\frac{p(0)}{\hbar} (x + \frac{d}{2}) + \frac{F}{2 \hbar v} (x^{2} - \frac{d^{2}}{4}) \right) \frac{L}{x + \frac{d}{2}}
$$
​	所以相位差为
$$
\delta \phi_{1} - \delta \phi_{2} = \frac{F}{2 \hbar v} \frac{d}{2} L \times 2 =\frac{d}{2v} \frac{F}{\hbar} L
$$

​	(2) Show that the pattern is displaced upwards by $ \frac{1}{2} \frac{F}{m} t^2 $, where $ t = \frac{L}{v} $ is the classical time to go from slit to screen. Comment.

​	干涉图样上移
$$
S = (\delta \phi_1 - \delta \phi_2) \frac{L}{d} \frac{\hbar}{p_0} = \frac{d}{2v} \frac{F}{\hbar} L \frac{L}{d} \frac{\hbar}{mv} = \frac{1}{2} \frac{F}{m} \frac{L}{v}^{2}
$$
​	这表明了统一的外场并不会起到类似“观测”的效果让干涉消失，只是让图像移动。

### 70.7

Electrons (spin one-half) are emitted from a source $ S $ placed in front of a screen which contains two slits as shown in Fig. 70-3. Assume that when an electron reaches a slit, it goes through with amplitude $\alpha$ for "unflipped" spin and amplitude $\beta$ for "flipped" spin. Assume further that it is impossible to distinguish which slit the electron passed through.

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20250922193153937.png" alt="image-20250922193153937">
(a) If all electrons are emitted with spin up, calculate the intensity distribution $P$ on the screen at point $ x $ in terms of $\alpha$, $\beta$, and amplitudes such as $\langle 1 \mid S\rangle$ and $\langle x \mid 1\rangle$.
$$
P(x) = \left| \langle x | 1 \rangle \langle 1 | S \rangle \alpha + \langle x | 2 \rangle \langle 2 | S \rangle \alpha \right|^{2} + \left| \langle x | 1 \rangle \langle 1 | S \rangle \beta + \langle x | 2 \rangle \langle 2 | S \rangle \beta \right|^{2} \\
= \left| \langle x | 1 \rangle \langle 1 | S \rangle + \langle x | 2 \rangle \langle 2 | S \rangle \right|^{2} (|\alpha|^{2} + |\beta|^{2})
$$
(b) How does this distribution differ from the case in which all electrons emitted are spin down and all other conditions are similar?

没区别。
$$
P(x) = \left| \langle x | 1 \rangle \langle 1 | S \rangle \alpha + \langle x | 2 \rangle \langle 2 | S \rangle \alpha \right|^{2} + \left| \langle x | 1 \rangle \langle 1 | S \rangle \beta + \langle x | 2 \rangle \langle 2 | S \rangle \beta \right|^{2} \\
= \left| \langle x | 1 \rangle \langle 1 | S \rangle + \langle x | 2 \rangle \langle 2 | S \rangle \right|^{2} (|\alpha|^{2} + |\beta|^{2})
$$
(c) If the electrons are emitted with spins randomly up or down, again find how this case differs from part (a) above, assuming all other conditions unchanged.

此时发射时自旋向上和向下的概率均为$\frac{1}{2}$。
$$
P(x) = \frac{1}{2} \left| \langle x | 1 \rangle \langle 1 | S \rangle + \langle x | 2 \rangle \langle 2 | S \rangle \right|^{2} (2|\alpha|^{2} + 2|\beta|^{2}) = \left| \langle x | 1 \rangle \langle 1 | S \rangle + \langle x | 2 \rangle \langle 2 | S \rangle \right|^{2} (|\alpha|^{2} + |\beta|^{2})
$$

## 第2次作业（第4章）

### Problem 71.2

In a black body, $E(\omega)$ the energy per unit volume in the radiation with frequencies between $\omega$ and $\omega+\Delta\omega$, is given by Planck's Radiation Formula,  
$$
\Delta E(\omega)=\frac{\hbar \omega^{3}}{\pi^{2} c^{3}\left(e^{\hbar \omega / k T}-1\right)} \Delta \omega
$$
(a) What is the behavior of $E(\omega)$ for small $\omega$ ? For large $\omega$ ? 

当 $\omega$ 比较小时，
\[
e^{\hbar \omega / k T}-1 \approx \frac{\hbar \omega}{k T}
\]

\[
E (\omega) \approx \frac{k T}{\pi^{2} c^{3}} \omega^{2}
\]

正比于 $\omega^{2}$

当 $\omega$ 比较大时

\[
e^{\hbar \omega / k T}-1 \approx e^{\frac{\hbar \omega}{k T}}
\]

\[
E (\omega) \approx \frac{\hbar \omega^{3}}{\pi^{2} c^{3}} e^{- \frac{\hbar \omega}{k T}}
\]

正比于 $\omega^{3} e^{- \omega}$

(b) At what frequency $\omega_{E_{\max }}$ is there the most energy per unit frequency interval? 

\[
\frac{d}{d \omega} \frac{\Delta E(\omega)}{\Delta \omega} = \dfrac{d}{d \omega} \frac{\hbar \omega^{3}}{\pi^{2} c^{3} (e^{\frac{\hbar \omega}{k T}} - 1)} = 0
\]
解得
\[
\omega_{E_{max}} = \frac{k T}{\hbar} x
\]
其中 $x$ 为方程
\[
3 (e^{x} - 1) = x e^{x}
\]
的非零解，数值上大概2.82左右

(c) At what wavelength $\lambda_{E_{\max }}$ is there the most energy per unit wavelength interval? 

带入德布罗意关系
\[
\omega = \frac{2 \pi c}{\lambda}
\]
改写黑体辐射分布
\[
\Delta E (\lambda)  = \frac{8 \pi h c}{\lambda^{5} (e^{\frac{h c}{\lambda k T}} - 1)} \Delta \lambda
\]
所以
\[
\frac{d}{d \lambda} \frac{\Delta E(\lambda)}{\Delta \lambda} = \frac{d}{d \lambda}  \frac{8 \pi h c}{\lambda^{5} (e^{\frac{h c}{\lambda k T}} - 1)} = 0
\]
解得
\[
\lambda_{E_{max}} = \frac{ h c}{k T x}
\]
其中 $x$ 为方程
\[
5 (e^{x} - 1) = x e^{x}
\]
的非零解，数值上大概4.97左右

(d) Estimate the temperature $T$ of the sun by assuming that its maximum energy radiation occurs in the middle of the visible spectrum $(\approx 5000 \AA)$.  

带入
\[
\lambda_{E_{max}} = \frac{h c}{k T x} \approx 5000 \AA
\]
解得
\[
T \approx 5.8 \times 10^{3} K
\]

### Problem 71.5

Before neutrons were discovered it was thought that nuclei contained protons and electrons. Show that the N14 atom (atom of nitrogen with nucleus of mass near 14 times the proton) would be a Bose particle. Experiments (spectrum of the N2 molecule) showed that this atom was a Fermi particle. This was the first evidence for a new nuclear particle. Show how the neutron hypothesis resolves the dilemma.  

在不考虑中子的情况下 ${}^{14} N $ 原子核由14个质子与7个电子组成。此时核中总共21个费米子，再加上7个核外电子总共28个费米子，所以${}^{14} N $ 表现出玻色子的特征；在考虑中子的情况下 ${}^{14} N $ 原子核由7个质子与7个中子组成。此时核中总共14个费米子，再加上7个核外电子总共21个费米子，所以${}^{14} N $ 表现出费米子的特征。

### Problem 71.12

Suppose $N$ electrons are in a very large box of volume $V$ in a condition to give the least possible energy. 

(a) If we disregard the interaction between the electrons show that each mode of the box is occupied by just two electrons, provided that the momentum of the mode $\hbar k = p$ has a magnitude less than $p_{\text{max}}$ where  
$$
N = \frac{1}{(2 \pi \hbar)^3} \int_0^{p_{\text{max}}} V \cdot 2 \cdot 4 \pi p^2  dp
$$

 (b) What is the energy $U$ of all the electrons? Express this internal energy $U$ in terms of the volume of the box. 

\[
U = \frac{1}{(2 \pi \hbar)^{3}} \int_{0}^{p_{max}} \frac{p^{2}}{2m} 2V 4 \pi p^{2} dp = \frac{V}{(2 \pi \hbar)^{3}} \frac{4 \pi p_{max}^{5}}{5m}
\]
带入
\[
N = \frac{V}{(2 \pi \hbar)^{3}} \frac{8 \pi}{3} p_{max}^{3} \\
p_{max} = 2 \pi \hbar \left(\frac{3N}{8 \pi V}\right)^{\frac{1}{3}}
\]
所以
\[
U = (2 \pi \hbar)^{2} \frac{4 \pi}{5 m} \left(\frac{3N}{8 \pi }\right)^{\frac{5}{3}} V^{- \frac{2}{3}}
\]
(c) Find the pressure exerted by this so-called "degenerate electron" gas. Show the pressure-volume relation is of the form $P V^\gamma = \text{constant}$. 

压强
\[
P = - \left(\frac{\partial U}{\partial V}\right)_{N} = (2 \pi \hbar)^{2} \frac{8 \pi}{15 m} \left(\frac{3N}{8 \pi }\right)^{\frac{5}{3}} V^{- \frac{5}{3}}
\]
所以存在关系
\[
P V^{\frac{5}{3}} = (2 \pi \hbar)^{2} \frac{8 \pi}{15 m} \left(\frac{3N}{8 \pi }\right)^{\frac{5}{3}} = Const
\]
(d) Find $\gamma$.
\[
\gamma = \frac{5}{3}
\]

## 第3次作业（第5章）

72.2 Three "improved" Stern-Gerlach apparatuses, described in Chapter 5 of Vol. III, which separate a beam according to the value of the z-component of spin but which bring the beam together spatially, are put in series with each other, and a beam of spin one particles is sent through. The first and third are lined up with the same orientation while the middle is set at an arbitrary angle. In the notation of Chapter 5, this would appear as shown in Fig. 72-1.

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20251013201734492.png" alt="image-20251013201734492">
Figure 72-1

(a) If one slot of T is "open", does the proportion of the beam found in each of the three states of the final S system depend on the input state, i.e., on the proportion of the beam in $+S$, $0S$, or $-S$. Why?

最终输出中三个态的占比和输入中三个态的占比无关。理由：

在粒子经过T方向的"filter"后输出的仅是自旋在T方向的某个纯态，所以最终输出粒子的S方向自旋态比例不依赖于输入。

(b) What if two slots of T are "open"?

最终输出中三个态的占比和输入中三个态的占比有关。理由：

在粒子经过T方向的"filter"后输出的是自旋在T方向的某两个态的混合，而这两个态的比例和输入的粒子中三个态的占比有关，所以最终输出粒子的S方向自旋态比例依赖于输入。

(c) What if three slots of T are "open"?

最终输出中三个态的占比和输入中三个态的占比有关。理由：

在粒子经过T方向的"filter"后输出的是自旋在T方向的三个态的混合，此时所谓的"filter"失效，并不起到选择的效果。经过"filter"的三个态的比例和输入的粒子中三个态的占比有关，所以最终输出粒子的S方向自旋态比例依赖于输入。

72.3 A set of three "improved-type" Stern-Gerlach experiments is set up for spin one particles as shown in as shown in Fig. 72-2. The three apparatuses are placed along a straight line, but the T apparatus is rotated about this line by an angle of $90^\circ$ with respect to the two S apparatuses. A beam of spin one particles enters from the left. The beam which leaves the first S apparatus has an intensity of $N_1$ particles per second.

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20251013201751207.png" alt="image-20251013201751207">
Figure 72-2

(a) What is $N_2$, the intensity of the beam leaving the T apparatus?

上课已经推导出对于spin-1粒子的 $z$ 方向旋转矩阵可以表示为
\[
R_{z} (\alpha) = \begin{pmatrix} 
e^{i \alpha} & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -e^{- i \alpha}
\end{pmatrix}
\]
我们假设这三个装置的连线方向为 $+y$ 方向，并且先选取 $\ket{+S}, \ket{-S}$ 为态空间的基

那么在讲义中采取的被动变换的意义下，从 $S$ 到 $T$ 的坐标变换对应一个 $R_{y} (\theta = 90 \degree)$ 的矩阵

课本中不加证明的给出了 $y$ 方向上旋转矩阵的形式为
\[
R_{y} (\theta) = \begin{pmatrix} 
\frac{1}{2} (1 + \cos \theta) & \frac{1}{\sqrt{2}} \sin \theta & \frac{1}{2} (1 - \cos \theta) \\
- \frac{1}{\sqrt{2}} \sin \theta & \cos \theta & \frac{1}{\sqrt{2}} \sin \theta \\
\frac{1}{2} ( 1 -  \cos \theta) & - \frac{1}{\sqrt{2}} \sin \theta & \frac{1}{2} (1 + \cos \theta)
\end{pmatrix}
\]
所以在经过第一个装置后的 $\ket{+S}$ 态粒子在 $T$ 坐标下的系数为
\[
\begin{pmatrix} c_{+z} \\ c_{0z} \\ c_{-z} \end{pmatrix}  = \begin{pmatrix} 
\frac{1}{2} (1 + \cos \theta) & \frac{1}{\sqrt{2}} \sin \theta & \frac{1}{2} (1 - \cos \theta) \\
- \frac{1}{\sqrt{2}} \sin \theta & \cos \theta & \frac{1}{\sqrt{2}} \sin \theta \\
\frac{1}{2} ( 1 -  \cos \theta) & - \frac{1}{\sqrt{2}} \sin \theta & \frac{1}{2} (1 + \cos \theta)
\end{pmatrix} \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \\
= \begin{pmatrix} \frac{1}{2} (1 + \cos \theta) \\ - \frac{1}{\sqrt{2}} \sin \theta \\ \frac{1}{2} (1 - \cos \theta) \end{pmatrix}
\]
所以每秒通过的粒子数为
\[
N_{2} = \left( \frac{1}{2} \sin^{2} \theta + \frac{1}{4} (1 + \cos^{2} \theta - 2 \cos \theta) \right) N_{1}
\]
带入 $\theta = 90 \degree$，得到
\[
N_{2}  = \frac{3}{4} N_{1}
\]
(b) What is the intensity $N_3$ of the beam that leaves the last S apparatus?

此处的坐标变换相当于乘一个 $R_{y} (- 90 \degree)$
\[
\begin{pmatrix} c_{+s} \\ c_{0s} \\ c_{-s} \end{pmatrix}  = \begin{pmatrix} 
\frac{1}{2} (1 + \cos \theta) & - \frac{1}{\sqrt{2}} \sin \theta & \frac{1}{2} (1 - \cos \theta) \\
\frac{1}{\sqrt{2}} \sin \theta & \cos \theta & - \frac{1}{\sqrt{2}} \sin \theta \\
\frac{1}{2} ( 1 -  \cos \theta) & \frac{1}{\sqrt{2}} \sin \theta & \frac{1}{2} (1 + \cos \theta)
\end{pmatrix} \begin{pmatrix} 0 \\ - \frac{1}{\sqrt{2}} \sin \theta \\ \frac{1}{2} (1 - \cos \theta) \end{pmatrix} = \begin{pmatrix}\frac{1}{4} (2 + \sin^{2} \theta - 2 \cos \theta) \\
- \frac{\sqrt{2}}{4} \sin \theta (1 + \cos \theta) \\ - \frac{1}{4} \sin^{2}\theta \end{pmatrix}
\]
所以每秒通过的粒子数为
\[
N_{3} = (\frac{1}{4} \sin^{2} \theta)^{2} N_{1}
\]
带入 $\theta = 90\degree$ 
\[
N_{3} = \frac{1}{16} N_{1}
\]
(c) What are $N_2$ and $N_3$ if all the "stops" are removed from the T apparatus?

此时T这个装置没有效果，即
\[
N_{2} = N_{1} \\
N_{3} = 0
\]
73.1 Imagine that atoms with a spin of one-half are filtered by a sequence of two "improved" Stern-Gerlach apparatuses. It is supposed that each apparatus is arranged to permit only one beam to go through, as indicated in Fig. 73-1. For each of the eight arrangements shown in (a)-(h) consider that $N$ unpolarized atoms enter at $P$. Give the expected number of atoms to arrive at $Q$.

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20251013201808908.png" alt="image-20251013201808908">
Figure 73-1

(a)
\[
\langle N_{out} \rangle = \frac{N}{2}
\]
(b) 
\[
R_{y} (\frac{\pi}{2}) = \begin{pmatrix} 
\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \\
- \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}
\end{pmatrix}
\]
所以出射粒子满足
\[
\begin{pmatrix} 
\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \\
- \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}
\end{pmatrix} \begin{pmatrix}
1 \\ 0
\end{pmatrix} = \begin{pmatrix} \frac{\sqrt{2}}{2} \\ - \frac{\sqrt{2}}{2} \end{pmatrix}
\]
所以
\[
\langle N_{out} \rangle = \frac{N}{4}
\]
(c)
\[
R_{x} (\frac{\pi}{2}) = \begin{pmatrix} 
\frac{\sqrt{2}}{2} & i \frac{\sqrt{2}}{2} \\
 i \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}
\end{pmatrix}
\]
所以出射粒子满足
\[
\begin{pmatrix} 
\frac{\sqrt{2}}{2} & i \frac{\sqrt{2}}{2} \\
 i \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}
\end{pmatrix} \begin{pmatrix}
1 \\ 0
\end{pmatrix} = \begin{pmatrix} \frac{\sqrt{2}}{2} \\ i \frac{\sqrt{2}}{2} \end{pmatrix}
\]
所以
\[
\langle N_{out} \rangle = \frac{N}{4}
\]
(d) 
\[
R_{y} (\frac{\pi}{2}) R_{x} (\frac{\pi}{2}) = \begin{pmatrix} 
\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \\
- \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}
\end{pmatrix} \begin{pmatrix} 
\frac{\sqrt{2}}{2} & i \frac{\sqrt{2}}{2} \\
 i \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}
\end{pmatrix} = \begin{pmatrix} \frac{1}{2} + i \frac{1}{2} & \frac{1}{2} + i \frac{1}{2} \\
- \frac{1}{2} + i \frac{1}{2} &  \frac{1}{2} - i \frac{1}{2} \end{pmatrix}
\]
所以出射粒子满足
\[
\begin{pmatrix} \frac{1}{2} + i \frac{1}{2} & \frac{1}{2} + i \frac{1}{2} \\
- \frac{1}{2} + i \frac{1}{2} &  \frac{1}{2} - i \frac{1}{2} \end{pmatrix} \begin{pmatrix} 
1 \\ 0
\end{pmatrix} = \begin{pmatrix} \frac{1}{2} + i \frac{1}{2} \\ - \frac{1}{2} + i \frac{1}{2} \end{pmatrix}
\]
所以
\[
\langle N_{out} \rangle = \frac{N}{4}
\]
(e) 
\[
R_{x} (\frac{\pi}{4}) = \begin{pmatrix}
\cos \frac{\pi}{8} & i \sin \frac{\pi}{8} \\
i \sin \frac{\pi}{8} & \cos \frac{\pi}{8}
\end{pmatrix}
\]
所以出射粒子满足
\[
R_{x} (\frac{\pi}{4}) = \begin{pmatrix}
\cos \frac{\pi}{8} & i \sin \frac{\pi}{8} \\
i \sin \frac{\pi}{8} & \cos \frac{\pi}{8}
\end{pmatrix} \begin{pmatrix} 
1 \\ 0
\end{pmatrix} = \begin{pmatrix} \cos \frac{\pi}{8} \\ i \sin \frac{\pi}{8} \end{pmatrix}
\]
所以
\[
\langle N_{out} \rangle = \frac{N}{2} \cos^{2} \frac{\pi}{8} = \frac{3 + 2\sqrt{2}}{4 + 2 \sqrt{2}} \frac{N}{2}
\]
(f) 
\[
R_{y} (\frac{\pi}{2}) R_{x} (\frac{\pi}{4}) = \begin{pmatrix} 
\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \\
- \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}
\end{pmatrix} \begin{pmatrix}
\cos \frac{\pi}{8} & i \sin \frac{\pi}{8} \\
i \sin \frac{\pi}{8} & \cos \frac{\pi}{8}
\end{pmatrix} = \frac{\sqrt{2}}{2} \begin{pmatrix}
e^{i\pi/8} & e^{i\pi/8} \\
-e^{-i\pi/8} & e^{-i\pi/8}
\end{pmatrix}
\]
所以出射粒子满足
\[
\frac{\sqrt{2}}{2} \begin{pmatrix}e^{i\pi/8} & e^{i\pi/8} \\-e^{-i\pi/8} & e^{-i\pi/8}\end{pmatrix}
\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \frac{\sqrt{2}}{2} \begin{pmatrix}e^{i\pi/8} \\-e^{-i\pi/8} \end{pmatrix}
\]
所以
\[
\langle N_{out} \rangle = \frac{N}{4}
\]
(g) 
\[
R_{y} (\frac{\pi}{2}) R_{z} (\frac{\pi}{4}) = \begin{pmatrix} 
\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \\
- \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}
\end{pmatrix} \begin{pmatrix} 
e^{i \frac{\pi}{8}} & 0 \\
0 & e^{- i \frac{\pi}{8}}
\end{pmatrix} = \frac{\sqrt{2}}{2} \begin{pmatrix}e^{i\pi/8} & e^{- i\pi/8} \\-e^{i\pi/8} & e^{-i\pi/8}\end{pmatrix}
\]
所以出射粒子满足
\[
\frac{\sqrt{2}}{2} \begin{pmatrix}e^{i\pi/8} & e^{- i\pi/8} \\-e^{i\pi/8} & e^{-i\pi/8}\end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \frac{\sqrt{2}}{2} \begin{pmatrix}e^{i\pi/8} & \\-e^{i\pi/8}\end{pmatrix}
\]
所以
\[
\langle N_{out} \rangle = \frac{N}{4}
\]
(h) 
\[
R_{z} (\frac{\pi}{4}) = \begin{pmatrix} 
e^{i \frac{\pi}{8}} & 0 \\
0 & e^{- i \frac{\pi}{8}}
\end{pmatrix}
\]
仅改变相位，所以
\[
\langle N_{out} \rangle = \frac{N}{2}
\]

## 第4次作业（第7章）

73.3 Three modified spin one-half  Stern-Gerlach apparatuses $S$, $T$ and $U$ are in series as shown part (a) of Fig. 73-2.

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20251026215733529.png" alt="image-20251026215733529" style="zoom:50%;" />

(a) Express $N$, the number of spin one-half particles coming out of $U$, in terms of $N_{0}$, the number coming out of $S$, and in terms of objects like $\langle+T|+U\rangle$, etc.

直接写出最终出射的概率幅
\[
\bra{+U} \ket{+T} \bra{+T} \ket{-S} + \bra{+U} \ket{-T} \bra{-T} \ket{-S}
\]
所以出射粒子数为
\[
N = N_{0} \abs{\bra{+U} \ket{+T} \bra{+T} \ket{-S} + \bra{+U} \ket{-T} \bra{-T} \ket{-S}}^{2}
\]
Now consider the same apparatus as above, but with the $B$-field orientations given in part (b) of Fig. 73-2. In particular, the $B$-field of the $T$-apparatus is rotated anti-parallel to the $B$-field of the $S$-apparatus, and the $B$-field of the $U$-apparatus is rotated an angle $\theta$ from the $z$-axis.

(b) Find $\langle+T|-S\rangle$ and $\langle-T|-S\rangle$ explicitly.

自旋 $\frac{1}{2}$ 的旋转矩阵为
\[
R_{x} (\pi) = \begin{pmatrix}
0 & i \\
i & 0
\end{pmatrix}
\]
所以上述概率幅可以表示为
\[
P_{+} (T) R_{z} (\pi) \ket{-S} = \begin{pmatrix} 1 & 0 \\
0 & 0
\end{pmatrix}\begin{pmatrix}
0 & i \\
i & 0
\end{pmatrix} \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} i \\ 0 \end{pmatrix}
\]
 所以
\[
\langle+T|-S\rangle = i
\]
同理
\[
P_{-} (T) R_{z} (\pi) \ket{-S} = \begin{pmatrix} 0 & 0 \\
0 & 1
\end{pmatrix}\begin{pmatrix}
0 & i \\
i & 0
\end{pmatrix} \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
\]
所以
\[
\langle-T| -S\rangle = 0
\]
(c) Find explicitly $\langle+U|-S\rangle$ using, as an exercise, only the transformation table for rotations around the $z$- and the $y$-axes.

从 $S$ 到 $U$ 的变换在旋转矩阵下可以表示为
\[
R_{x} (\theta) = \begin{pmatrix}
\cos \frac{\theta}{2} & i \sin \frac{\theta}{2} \\
i \sin \frac{\theta}{2} &  \cos \frac{\theta}{2}
\end{pmatrix}
\]
所以上述概率幅可以表示为
\[
P_{+} (U) R_{x} (\pi + \theta) R_{x} (\pi) \ket{-S} = \begin{pmatrix} 1 & 0 \\
0 & 0
\end{pmatrix} \begin{pmatrix} 
\cos \frac{\theta}{2} & i \sin \frac{\theta}{2} \\
i \sin \frac{\theta}{2} & \cos \frac{\theta}{2}
\end{pmatrix} \begin{pmatrix} 0 \\ 1 \end{pmatrix} = 
\begin{pmatrix} 
i \sin \frac{\theta}{2} \\ 0
\end{pmatrix}
\]
所以
\[
\langle+U|-S\rangle = i \sin \frac{\theta}{2}
\]
(d) Find limiting forms of your answer in part (c) for

(1) $\theta=0$.
\[
\langle+U|-S\rangle = 0
\]
(2) $\theta=\pi$.
\[
\langle+U|-S\rangle = i
\]
(e) Explain your answer for $\theta=\pi$ in part (d) upon comparison with $\langle+T|-S\rangle$ of part (b).

在 $\theta = \pi$ 时， $U$ 和 $T$ 的指向相同，所以两个概率幅大小相同，均为 $i$

73.6 According to the theory of $\beta$-decay in a certain kind of nuclear decay (in which the nucleus suffers no change of angular momentum or parity, called "Fermi allowed") an electron moving along the $z$-axis with velocity $v$ is emitted with amplitude $\sqrt{1-\frac{v}{c}} \sin(\frac{\theta}{2})$ with spin up along $z$, and with amplitude $\sqrt{1+\frac{v}{c}} \cos(\frac{\theta}{2})$ with spin down along $z$. (Here $\theta$ is the angle, from $z$, that the anti-neutrino is emitted, as shown in Fig. 73-3. Incidentally, anti-neutrinos always have their spin along their direction of motion).

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20251026215810907.png" alt="image-20251026215810907" style="zoom:50%;" />

(a) What is the probability that the spin is up along $z$? Down?
\[
P_{up} = \frac{(1 - \frac{v}{c}) \sin^{2} \frac{\theta}{2}}{1 + \frac{v}{c} \cos \theta}
\]

\[
P_{down} = \frac{(1 + \frac{v}{c}) \cos^{2} \frac{\theta}{2}}{1 + \frac{v}{c} \cos \theta}
\]

(b) What is the probability that the spin is in the direction $+x$ (if the neutrino is in the $xz$-plane)? The direction $-x$?

取 $+z$ 和 $-z$ 为态空间的一组基，则出射的自旋态可以表示为
\[
\begin{pmatrix} \sqrt{1-\frac{v}{c}} \sin(\frac{\theta}{2}) \\ \sqrt{1+\frac{v}{c}} \cos(\frac{\theta}{2}) \end{pmatrix}
\]
在被动变换的意义下把基换为 $x$ 方向，旋转矩阵为
\[
R_{y} (\frac{\pi}{2})  = \begin{pmatrix} 
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
- \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}
\end{pmatrix}
\]
所以此时出射的自旋态
\[
\begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\- \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}\end{pmatrix} 
\begin{pmatrix} \sqrt{1-\frac{v}{c}} \sin(\frac{\theta}{2}) \\ \sqrt{1+\frac{v}{c}} \cos(\frac{\theta}{2}) \end{pmatrix}
= \begin{pmatrix} 
\frac{1}{\sqrt{2}} \sqrt{1-\frac{v}{c}} \sin(\frac{\theta}{2}) + \frac{1}{\sqrt{2}} \sqrt{1+\frac{v}{c}} \cos(\frac{\theta}{2}) \\
- \frac{1}{\sqrt{2}} \sqrt{1-\frac{v}{c}} \sin(\frac{\theta}{2}) + \frac{1}{\sqrt{2}} \sqrt{1+\frac{v}{c}} \cos(\frac{\theta}{2})
\end{pmatrix}
\]
所以概率为
\[
P_{+x} = \frac{1}{2} \left(1 + \frac{\sqrt{1 - \frac{v^{2}}{c^{2}}} \sin \theta}{1 + \frac{v}{c} \cos \theta} \right)
\]

\[
P_{-x} = \frac{1}{2} \left(1 - \frac{\sqrt{1 - \frac{v^{2}}{c^{2}}} \sin \theta}{1 + \frac{v}{c} \cos \theta} \right)
\]

(c) What is the probability in the directions $\pm y$?

在被动变换的意义下把基换为 $y$ 方向，旋转矩阵为
$$
R_{x} (- \frac{\pi}{2})  = \begin{pmatrix} 
\frac{1}{\sqrt{2}} & - i \frac{1}{\sqrt{2}} \\
- i \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}
\end{pmatrix}
$$
所以此时出射的自旋态
$$
\begin{pmatrix} \frac{1}{\sqrt{2}} & - i \frac{1}{\sqrt{2}} \\ - i \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}\end{pmatrix} 
\begin{pmatrix} \sqrt{1-\frac{v}{c}} \sin(\frac{\theta}{2}) \\ \sqrt{1+\frac{v}{c}} \cos(\frac{\theta}{2}) \end{pmatrix}
= \begin{pmatrix} 
\frac{1}{\sqrt{2}} \sqrt{1-\frac{v}{c}} \sin(\frac{\theta}{2}) - i \frac{1}{\sqrt{2}} \sqrt{1+\frac{v}{c}} \cos(\frac{\theta}{2}) \\
- i \frac{1}{\sqrt{2}} \sqrt{1-\frac{v}{c}} \sin(\frac{\theta}{2}) + \frac{1}{\sqrt{2}} \sqrt{1+\frac{v}{c}} \cos(\frac{\theta}{2})
\end{pmatrix}
$$
所以概率为
$$
P_{+y} = \frac{1}{2} 
$$

$$
P_{-y} = \frac{1}{2} 
$$

(d) If, as is usual, the neutrino is not observed (average over all anti-neutrino directions) what is the answer to part (a)?

此时我们假设中微子出射在球面上是等概率的，求出自旋沿 $z$ 方向概率的期望值
\[
\bar{P}_{up} = \frac{1}{4 \pi} \int \dd \Omega \frac{(1 - \frac{v}{c}) \sin^{2} \frac{\theta}{2}}{1 + \frac{v}{c} \cos \theta} = (1 - \frac{v}{c}) \int_{0}^{\pi} \frac{1 - \cos \theta}{4(1 + \frac{v}{c} \cos \theta)} \sin \theta \, \dd \theta \\
= \frac{1 - \frac{v^{2}}{c^{2}}}{4 \frac{v^{2}}{c^{2}}} \ln \frac{1 + \frac{v}{c}}{1 - \frac{v}{c}} - \frac{1 -  \frac{v}{c}}{2 \frac{v}{c}}
\]
\[
\bar{P}_{down} = 1 - \bar{P}_{up} = - \frac{1 - \frac{v^{2}}{c^{2}}}{4 \frac{v^{2}}{c^{2}}} \ln \frac{1 + \frac{v}{c}}{1 - \frac{v}{c}} + \frac{- 1 + 3 \frac{v}{c}}{2 \frac{v}{c}}
\]

74.1 A particle of spin one in a magnetic field $B$ in the $z$ direction has three states (labeled $+$, $0$, $-$) with energies $+\mu B$, $0$ and $-\mu B$ respectively.

(a) Show quantum mechanically that in an inhomogeneous magnetic field a beam of such particles would be split into three beams and find the laws giving the deflection $\Delta \theta$, assumed small (in terms of the length of the field $L$, the initial momentum of the particles $p_{0}$, etc.).

三个态的能量分别为 $\mu B$, $0$ 和 $- \mu B$ ，所以此时粒子概率波的相位满足
\[
W + \frac{p^{2}}{2 m } + V = Const
\]
在经过距离为 $L$ 的梯度为 $G$ 的非均匀磁场之后，粒子的等相位面上满足
\[
\frac{p_{0}}{m} \Delta p + \Delta V = 0
\]
即
\[
\Delta p = - \frac{\Delta V m}{p_{0}}
\]
所以经过磁场区域后上下距离 $D$ 的粒子产生的相位差为
\[
\Delta \phi = - \frac{m \Delta V}{\hbar p_{0}} L
\]
所以偏转角可以表示为
\[
\Delta \theta = \frac{\Delta x}{D} = - \frac{\hbar}{p_{0}}\frac{m \Delta V}{\hbar p_{0} D} L
\]
所以相应偏转角为
\[
|+\rangle: \Delta \theta = -\frac{\mu G L m}{p_0^2} \\
|0\rangle: \Delta \theta = 0 \\
|-\rangle: \Delta \theta = +\frac{\mu G L m}{p_0^2}
\]
(b) Show quantum mechanically that such a particle will “precess” (use the coefficients of Section 5-7 in Vol. III, to make an argument like that of Section 7-5).

在磁场中对于该三态粒子而言自旋态的随时间演化可以表示为
\[
\ket{s} = C_{+} (0) e^{- \frac{i \mu B}{\hbar} t} \ket{+ z} + C_{0} (0) \ket{0 z} + C_{-} (0) e^{i \frac{\mu B}{\hbar} t} \ket{- z}
\]
所以在 $t$ 时刻自旋沿 $+x$ 的概率幅为
\[
\bra{+x} s \rangle = C_{+} (0) e^{- \frac{i \mu B}{\hbar} t} \langle +x \ket{+ z} + C_{0} (0) \langle +x \ket{0 z} + C_{-} (0) e^{i \frac{\mu B}{\hbar} t} \langle +x \ket{- z} \\
 = \frac{1}{4} (e^{- \frac{i \mu B}{\hbar} t} + e^{\frac{i \mu B}{\hbar} t}) + \frac{1}{2}
\]
所以测得 $t$ 时刻自旋沿 $+x$ 的概率为
\[
P_{+x} = \frac{1}{4}\left(\cos (\frac{\mu B}{\hbar} t) + 1 \right)^{2}
\]
也就是说测得 $t$ 时刻自旋沿 $+x$ 的概率看起来在进动

(c) Suggest at least two independent ways in which $\mu$ might be measured experimentally.

1. 类似 Stern-Gerlach 实验的装置，制备一束自旋1粒子，使其沿 \(y\) 方向运动，初始动量 \(p_0\)，粒子质量 \(m\)。施加一个沿 \(z\) 方向的不均匀磁场，磁场梯度 \(G = dB/dz\) 为常数，磁场区域长度 \(L\)。测量其中一束（例如 \(S_z = +1\) 或 \(S_z = -1\)）的偏转角 \(\Delta \theta\)。最后得到磁矩的表达式 $\mu = \frac{\Delta \theta p_{0}^{2}}{G L m}$

2. 制备一束自旋1粒子，使其初始自旋沿 $+x$ 方向，并且把粒子放入 $+z$ 方向大小为 $B$ 的匀强磁场中，测量 $t$ 时刻自旋沿 $+x$ 的粒子数占比随时间的演化关系，拟合出
   \[
   N_{+x} =  \frac{1}{4}\left(\cos (\frac{\mu B}{\hbar} t) + 1 \right)^{2} N_{0}
   \]
   曲线的角频率 $\omega$，利用关系 $\mu = \frac{\omega \hbar}{B}$ 得到磁矩大小。

## 第5次作业（第8、9章）

75.1 A beam of spin one-half particles with magnetic moment $\mu$ is sent into a Stern-Gerlach filter which passes only particles in the $|+\rangle$ state (spin up) with respect to the $z$-axis. The particles then spend the time $T$ in a uniform magnetic field $B_{0}$ which is parallel to the $x$-axis. After leaving the uniform field the particles enter a second Stern-Gerlach filter which passes only particles in the $|-\rangle$ state (spin down) with respect to the $z$-axis.

(a) What is the smallest value of $B_{0}$ for which all of the particles will get through the second filter?

$T = 0$ 时，展开
\[
\ket{+z} = \frac{1}{\sqrt{2}} (\ket{+x} - \ket{-x})
\]
在 $+x$ 方向上的磁场中的能量本征态的演化为
\[
C_{+x} (t) = C_{+x} (0) e^{i \frac{\mu B_{0}}{\hbar} t} \\
C_{-x} (t) = C_{-x} (0) e^{- i \frac{\mu B_{0}}{\hbar} t}
\]
考虑到
\[
\ket{-z} = \frac{1}{\sqrt{2}} (\ket{+x} + \ket{-x})
\]
所以想让所有的出射粒子均以 $\ket{-z}$ 的状态出射，磁场必须满足
\[
e^{i \frac{\mu B_{0}}{\hbar} T} = - e^{- i \frac{\mu B_{0}}{\hbar} T}
\]
所以 $B_{0}$ 最小满足
\[
\frac{\mu B_{0}}{\hbar} T = \frac{\pi}{2}
\]

\[
B_{0}^{min} = \frac{\hbar \pi}{2 \mu T}
\]

(b) If the particles spend only half as long in the same field, what is the probability $P$ that they will get through the second filter?

把在磁场中的时间缩短一半之后，粒子的末态将演化为
\[
\ket{\psi} = \frac{1}{\sqrt{2}} \left(\frac{\sqrt{2}}{2} (1 + i) \ket{+x} -  \frac{\sqrt{2}}{2} (1 - i) \ket{-x} \right) \\ =
\frac{1}{2}(1 + i) \frac{1}{\sqrt{2}} (\ket{+z} + \ket{-z}) - \frac{1}{2} (1 - i) \frac{1}{\sqrt{2}} (\ket{-z} - \ket{+z}) \\ = 
\frac{i}{\sqrt{2}} \ket{+ z} + \frac{1}{\sqrt{2}} \ket{-z}
\]
所以经过第二个filter的概率为
\[
P_{pass} = \frac{1}{2}
\]
75.3 A spin one-half particle has its spin pointing in the +z direction at time $t = 0$. The particle is located in an apparatus such that the amplitude per unit time to go from the plus to minus z-state is the same as the amplitude to go from minus to plus z-state and both are equal to $i$ times some positive constant $(A/\hbar)$, i.e., $H_{12} = H_{21} = -A$. Further $H_{11} = H_{22}$ and may be taken equal to zero.

(a) What is the probability $P_{+z}(t)$ for finding the particle in the +z state at time $t \geq 0$?

直接写出schrödinger方程
\[
i \hbar \begin{pmatrix} \dot{C_{+}} \\ \dot{C_{-}}  \end{pmatrix} = \begin{pmatrix} 0 & -A \\
-A & 0 \end{pmatrix} \begin{pmatrix} C_{+} \\ C_{-}  \end{pmatrix} \\
C_{+} (0) = 1 \quad C_{-} (0) = 0
\]
 解得
\[
C_{+} (t) = \cos(\frac{A}{\hbar} t) \\
C_{-} (t) = i \sin(\frac{A}{\hbar} t)
\]
所以概率的随时演化为
\[
P_{+z} (t) = \cos^{2}\left(\frac{A}{\hbar} t\right)
\]
(b) Find the two combinations of amplitudes to be in the +z and -z states which correspond to stationary states. What are the energies of these states?

本征态有	
\[
\frac{1}{\sqrt{2}} (\ket{+z} + \ket{-z})
\]
对应能量 $H = -A$

以及
\[
\frac{1}{\sqrt{2}} (\ket{+z} - \ket{-z})
\]
对应能量 $H = A$

(c) At any time $t$, there exists an axis along which the probability of spin up is unity. In what direction is this axis?

找到从 $z$ 方向到该方向的旋转矩阵为
\[
R = \begin{pmatrix} 
\cos(\frac{A}{\hbar} t) & -i \sin(\frac{A}{\hbar} t) \\
- i \sin(\frac{A}{\hbar} t) & \cos(\frac{A}{\hbar} t)
\end{pmatrix}
\]
对比 $R_{y}$ 的形式，容易得到这个旋转矩阵与 $R_{x} (- 2\frac{A}{\hbar} t)$ 相同。所以这根轴的方向为
\[
\hat{n}_{axis} = \begin{pmatrix} 
0 \\
\sin(\frac{2A}{\hbar} t) \\
\cos(\frac{2A}{\hbar} t)
\end{pmatrix}
\]
由于绕 $z$ 方向的旋转仅仅添加相位因子，所以 $\phi$ 角在此问题中不固定，上述给出的仅仅是一个肯能的方向向量，把它绕 $z$ 轴旋转不会影响本结果。

(d) Can you think of a physical piece of equipment that would have this effect?

在 $+x$ 方向的匀强磁场中放置初始状态下磁矩朝着 $+z$ 方向的电子就可以得到类似效果的哈密顿量，其中 $A = \mu B$

76.1 In Chapter 9 of Vol. III, the probability of an ammonia molecule making a transition from state $|II\rangle$ to state $|I\rangle$ by shining microwaves on the molecule was calculated; state $|II\rangle$ has a lower energy than state $|I\rangle$ so this corresponds to the absorption of energy by radiation.

(a) Redevelop these ideas to find the probability $P(I \to II)$ per unit time for inducing emission by the ammonia molecule.

在没有外加电场的能量本征态坐标下考虑在时谐电场中的schrödinger方程
\[
i \hbar \begin{pmatrix} \dot{C_{II}} \\ \dot{C_{I}}  \end{pmatrix} = \begin{pmatrix} E_{0} - A & \mu \mathcal{E} \\
\mu \mathcal{E} & E_{0} + A \end{pmatrix} \begin{pmatrix} C_{II} \\ C_{I}  \end{pmatrix} \\
\]
得到系数满足
\[
C_{II} = \gamma_{II} (t) e^{- i \frac{E_{0} - A}{\hbar} t} \\
C_{I} = \gamma_{I} (t) e^{-i \frac{E_{0} + A}{\hbar} t}
\]

所以关于 $\gamma$ 的演化方程可以写作
\[
i \hbar \dot{\gamma}_{II} (t) = \mu \mathcal{E} e^{- i \frac{2A}{\hbar} t} \gamma_{I} (t) \\
i \hbar \dot{\gamma}_{I} (t) = \mu \mathcal{E} e^{i \frac{2A}{\hbar} t} \gamma_{II} (t)
\]
带入 $\mathcal{E} = \mathcal{E}_{0} (e^{i \omega t} + e^{- i \omega t})$ 并且舍去时间平均意义下的高频项，得到方程
\[
i \hbar \dot{\gamma}_{II} (t) = \mu \mathcal{E}_{0} e^{i (\omega - \omega_{0}) t} \gamma_{I} (t) \\
i \hbar \dot{\gamma}_{I} (t) = \mu \mathcal{E}_{0} e^{- i (\omega - \omega_{0}) t} \gamma_{II} (t)
\]
其中 $\omega_{0} = \frac{2A}{\hbar}$ 。解得
\[
\ddot{\gamma}_{II}  - i (\omega - \omega_{0}) \dot{\gamma}_{II} + \frac{\mu^{2} \mathcal{E}^{2}_{0}}{\hbar^{2}} \gamma_{II} = 0
\]
所以
\[
\gamma_{II} (t) = A e^{i \frac{(\omega - \omega_{0}) + \sqrt{(\omega - \omega_{0})^{2} + \frac{4 \mu^{2} \mathcal{E}^{2}_{0}}{\hbar^{2}}}}{2} t} + B e^{i \frac{(\omega - \omega_{0}) - \sqrt{(\omega - \omega_{0})^{2} + \frac{4 \mu^{2} \mathcal{E}^{2}_{0}}{\hbar^{2}}}}{2} t} \\ =
A e^{i \lambda_{+} t} + B e^{i \lambda_{-} t}
\]
也解得
\[
\gamma_{I} (t) = - \frac{\hbar}{\mu \mathcal{E}_{0}} e^{- i (\omega - \omega_{0}) t} (\lambda_{+} A e^{i \lambda_{+} t}  + \lambda_{-} B e^{i \lambda_{-} t})
\]
利用初始条件得到
\[
A + B = 0 \\
\lambda_{+} A + \lambda_{-} B = - \frac{\mu \mathcal{E}_{0}}{\hbar}
\]
所以
\[
A = \frac{\mu \mathcal{E}_{0}}{\hbar(\lambda_{-} - \lambda_{+})} \\
B = \frac{\mu \mathcal{E}_{0}}{\hbar(\lambda_{+} - \lambda_{-})}
\]
最后得到
\[
\gamma_{II} (t) = \frac{\mu \mathcal{E}_{0}}{\hbar(\lambda_{+} - \lambda_{-})} (e^{i \lambda_{-} t} - e^{i \lambda_{+} t})
\]
所以
\[
C_{II} (t) = \frac{\mu \mathcal{E}_{0}}{\hbar(\lambda_{+} - \lambda_{-})} (e^{i \lambda_{-} t} - e^{i \lambda_{+} t}) e^{- i \frac{E_{0} - A}{\hbar} t}  \\ =
- i \frac{2\mu \mathcal{E}_{0} e^{i \frac{\omega - \omega_{0}}{2} t}}{\hbar \sqrt{(\omega - \omega_{0})^{2} + \frac{4 \mu^{2} \mathcal{E}^{2}_{0}}{\hbar^{2}}}} \sin(\sqrt{\frac{1}{4}(\omega - \omega_{0})^{2} + \frac{\mu^{2} \mathcal{E}^{2}_{0}}{\hbar^{2}}} t) e^{- i \frac{E_{0} - A}{\hbar} t}
\]
所以受激辐射的概率为
\[
P(I \to II) (t) = \frac{\mu^{2} \mathcal{E}^{2}_{0}}{\hbar^{2} \left(\frac{1}{4} (\omega - \omega_{0})^{2} + \frac{\mu^{2} \mathcal{E}^{2}_{0}}{\hbar^{2}}\right)} \sin^{2} \left(\sqrt{\frac{1}{4} (\omega - \omega_{0})^{2} + \frac{\mu^{2} \mathcal{E}^{2}_{0}}{\hbar^{2}}} t\right)
\]
在弱场近似下，这一概率退化为
\[
P(I \to II) (t) = \frac{4 \mu^{2} \mathcal{E}^{2}_{0}}{\hbar^{2} \Delta \omega^{2}} \sin^{2} (\frac{\Delta \omega}{2} t)
\]
计算单位时间内的概率

辐射场强度和电场强度之间的关系为
$$
\mathcal{G}(\omega) = 4c \epsilon_{0} \langle E^{2} \rangle = 2 c\epsilon_{0} \mathcal{E}^{2}_{0}
$$

所以在弱场近似下对于不同频率分量积分得到
\[
P (I \to II) (t) = \frac{\mu^{2}}{2 c \epsilon_{0} \hbar^{2}} t^{2} \int_{- \infty}^{\infty} \dd{(\Delta \omega)} \mathcal{G} (\omega_{0} + \Delta \omega) \frac{\sin^{2}(\frac{\Delta \omega}{2} t)}{(\frac{\Delta \omega}{2} t)^{2}} \\ \approx
\frac{\mu^{2}}{2 c \epsilon_{0} \hbar^{2}} \mathcal{G} (\omega_{0}) 2 \pi t
\]
单位时间的概率
\[
P(I \to II) = \frac{\pi \mu^{2}}{c \epsilon_{0} \hbar^{2}} \mathcal{G} (\omega_{0})
\]
(b) How does the probability of absorption $P(II \to I)$ compare to that of (stimulated) emission $P(I \to II)$?
\[
P(II \to I) = P(I \to II)
\]
(c) How are these probabilities related to the Einstein $A$ and $B$ coefficients defined in Chapter 42 of Vol. I?

对于 AB 系数来说，刚刚算出的 $P(I \to II)$ 对应受激辐射系数 $B_{I, II}$ ，书里给出的 $P(II \to I)$ 对应激发的系数 $B_{II, I}$，且之间满足关系
\[
N_{I} B_{I, II} \mathcal{G}(\omega_{0}) = N_{I} P(I \to II) \\
N_{II} B_{II, I} \mathcal{G}(\omega_{0}) = N_{II} P(II \to I)
\]
得到
\[
B_{II, I} = B_{I, II} = \frac{\pi \mu^{2}}{c \epsilon_{0} \hbar^{2}}
\]
(d) Find the rate $A_{I,II}$ of spontaneous emission by the ammonia molecule.

回忆自发辐射系数以及受激辐射系数的关系，给出
\[
A_{I, II} = \frac{\hbar \omega_{0}^{3}}{\pi^{2} c^{2}} B_{I, II} = \frac{\hbar \omega_{0}^{3}}{\pi^{2} c^{2}} \frac{\pi \mu^{2}}{c \epsilon_{0} \hbar^{2}} = \frac{\omega_{0}^{3} \mu^{2}}{\pi c^{3} \epsilon_{0} \hbar}
\]

## 第6次作业

77.1 Protons (magnetic moment $\mu$) in a water sample are exposed to a uniform magnetic field. Now although the magnitude of the field $\mathbf{B}$ is constant, the field changes its direction in time for a nuclear magnetic resonance (NMR) experiment:

$$
\begin{aligned}
B_{x} &= B \sin \theta \cos \omega t \\
B_{y} &= -B \sin \theta \sin \omega t \\
B_{z} &= B \cos \theta
\end{aligned}
$$

Initially $(t=0)$ we are given that the spin of the protons are along the magnetic field in the $+\frac{1}{2}$ state. Assume $\theta$, the angle from the $z$-axis in spherical coordinates, is very small.

(a) What value must $\omega$ have for resonance?

先写出哈密顿量
\[
H = - \mu (\sigma_{x} B \sin \theta \cos \omega t - \sigma_{y} B \sin \theta \sin \omega t + \sigma_{z} B \cos \theta)
\]

所以
\[
H = - \mu B \begin{pmatrix} 
\cos \theta & \sin \theta e^{i \omega t} \\
\sin \theta e^{- i \omega t} & - \cos \theta
\end{pmatrix}
\]
由于 $\theta$ 是小角度，得到微扰项是
\[
H = H_{0} + \Delta H = - \mu B \left(\sigma_{z} + \begin{pmatrix} 0 & \theta e^{i \omega t} \\
\theta e^{- i \omega  t} & 0 \end{pmatrix} \right)
\]
所以在一阶微扰的意义下，在相互作用绘境中，自旋状态的系数演化方程可以表示为
\[
i \hbar \begin{pmatrix}
\dot{c}_{1} \\
\dot{c}_{2}
\end{pmatrix}
= - \mu B \begin{pmatrix} 0 & \theta e^{i (\omega - \frac{2 \mu B}{\hbar}) t} \\
\theta e^{- i (\omega - \frac{2 \mu B}{\hbar}) t} & 0 \end{pmatrix} \begin{pmatrix}
c_{1} \\
c_{2}
\end{pmatrix}
\]
得到共振条件为频率等价于拉莫尔频率
\[
\omega = \frac{2 \mu B}{\hbar} \cos \theta
\]
在本问题中可以取0阶近似为
\[
\omega \approx \frac{2 \mu B}{\hbar}
\]
(b) What is the probability $P_{-z}(t)$ for the particle at time $t$ to have a spin down along the $z$-axis, for $\omega$ at resonance?

由上述方程得到系数演化方程
$$
\ddot{c}_{1} - i \Delta \dot{c}_{1} + \frac{\mu^{2} B^{2}}{\hbar^{2}} \theta^{2} c_{1} = 0 \\
\ddot{c}_{2} + i \Delta \dot{c}_{2} + \frac{\mu^{2} B^{2}}{\hbar^{2}} \theta^{2} c_{2} = 0
$$
所以在没有失谐的情况下，演化方程退化为
\[
\ddot{c}_{1} + \frac{\mu^{2} B^{2}}{\hbar^{2}} \theta^{2} c_{1} = 0 \\
\ddot{c}_{2} + \frac{\mu^{2} B^{2}}{\hbar^{2}} \theta^{2} c_{2} = 0
\]
带入初始条件
\[
c_{1} (0) = 1, c_{2} (0) = 0
\]
得到
\[
c_{2} (t) = \sin (\frac{\mu B}{\hbar} \theta t)
\]
即 $\ket{-}$ 前面的系数为
\[
\sin (\frac{\mu B}{\hbar} \theta t) e^{- i \frac{\mu B}{\hbar} t}
\]
得到
\[
P_{-z} (t) = \sin^{2} \left(\frac{\mu B}{\hbar} \theta t \right)
\]
77.2 A spin one-half particle (magnetic moment $\mu$) is placed in a large magnetic field $\mathbf{B}_{0}$. An oscillating magnetic field $2 \mathbf{B}_{n} \cos \omega t$ whose magnitude is much smaller than $\mathbf{B}_{0}$ is applied in a direction normal to $\mathbf{B}_{0}$. If the spins of the particle were initially lined up in a direction opposite to $\mathbf{B}_{0}$, what is the probability $P_{\|}(t)$ of having the spin lined parallel to $\mathbf{B}_{0}$ after a time $t$?

我们直接写出哈密顿量
\[
H = - \mu (\sigma_{x} 2 B_{n} \cos \omega t + \sigma_{z} B_{0}) \\ =
- \mu B_{0} \begin{pmatrix} 
1 & 2 \frac{B_{n}}{B_{0}} \cos \omega t \\
2 \frac{B_{n}}{B_{0}} \cos \omega t & -1
\end{pmatrix}
\]
依旧可以写成微扰的形式。在相互作用绘境下，系数的演化方程可以写为
\[
i \hbar \begin{pmatrix}
\dot{c}_{1} \\
\dot{c}_{2}
\end{pmatrix}
= - 2 \mu B_{n} \cos \omega t  \begin{pmatrix} 0 & e^{- i \frac{2 \mu B_{0}}{\hbar} t} \\
e^{i \frac{2 \mu B_{0}}{\hbar}t} & 0 \end{pmatrix} \begin{pmatrix}
c_{1} \\
c_{2}
\end{pmatrix}
\]
由于
\[
2 \cos \omega t = e^{i \omega t}  + e^{- i \omega t}
\]
带入原方程中并且舍去高频项，得到
\[
i \hbar \dot{c}_{1} = - \mu B_{n} e^{i (\omega - \frac{2 \mu B_{0}}{\hbar}) t} c_{2} \\
i \hbar \dot{c}_{2} = - \mu B_{n} e^{- i (\omega - \frac{2 \mu B_{0}}{\hbar}) t} c_{1} \\
\]
记 $\frac{2 \mu B_{0}}{\hbar} = \omega_{0}, \frac{2 \mu B_{n}}{\hbar} = \omega_{n}$ ，所以
\[
\ddot{c}_{1} - i (\omega - \omega_{0}) \dot{c}_{1} + \frac{1}{4} \omega_{n}^{2} c_{1} =0
\]
带入初始条件
\[
c_{1} (0) = 0 \\
c_{2} (0) = 1
\]
解得
\[
\lambda_{\pm} = i \frac{(\omega - \omega_{0}) \pm \sqrt{(\omega - \omega_{0})^{2} + \omega_{n}^{2}}}{2}
\]

\[
c_{1} (t) = a_{+} e^{\lambda_{+} t} + a_{-} e^{\lambda_{-} t}
\]

待定系数
\[
a_{+} + a_{-} = 0 \\
a_{+} \lambda_{+} + a_{-} \lambda_{-} = i \frac{\omega_{n}}{2}
\]
得到
\[
a_{+} = - a_{-} =  \frac{\omega_{n}}{2 \sqrt{(\omega - \omega_{0})^{2} + \omega_{n}^{2}}}
\]
所以
\[
c_{1} (t) = i \frac{\omega_{n}}{\sqrt{(\omega - \omega_{0})^{2} + \omega_{n}^{2}}} \sin(\frac{1}{2} \sqrt{(\omega - \omega_{0})^{2} + \omega_{n}^{2}} t) e^{i (\omega - \omega_{0}) t}
\]
所以随时演化中 $\ket{+}$ 前的系数为
\[
i \frac{\omega_{n}}{\sqrt{(\omega - \omega_{0})^{2} + \omega_{n}^{2}}} \sin(\frac{1}{2}  \sqrt{(\omega - \omega_{0})^{2} + \omega_{n}^{2}} t) e^{i (\omega - \frac{1}{2} \omega_{0}) t}
\]
所以
\[
P_{\|}(t) = \frac{\omega_{n}^{2}}{(\omega - \omega_{0})^{2} + \omega_{n}^{2}} \sin^{2} \left(\frac{1}{2}  \sqrt{(\omega - \omega_{0})^{2} + \omega_{n}^{2}} t\right)
\]

## 第7次作业

79.1 Calculate the amount of splitting in the $j=1$ level of a hydrogen atom which is placed (Express your answers both in frequency and wavelength.) 

直接计算塞曼分裂的结果（不妨假设磁场方向为 $z$ 方向）
\[
H' =  - \mu_{e} \sigma_{z}^{e} B - \mu_{p} \sigma_{z}^{p} B
\]
得到
\[
H = \begin{pmatrix}
A & 0 & 0 & 0 \\
0 & -A & 2A & 0 \\
0 & 2A & -A & 0 \\
0 & 0 & 0 & A 
\end{pmatrix} - \mu_{e} B \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & -1 
\end{pmatrix} - \mu_{p} B \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & -1 
\end{pmatrix}
\]
解得能级的值为
\[
E_{1} = A - (\mu_{e} + \mu_{p}) B \\
E_{2} = A + (\mu_{e} + \mu_{p}) B \\
E_{3, 4} = -A \pm \sqrt{4 A^{2} + (\mu_{e} - \mu_{p})^{2} B^{2}}
\]
所以对于自旋1的氢原子，在很小的磁场下，产生的能级劈裂大小约为
\[
\Delta E = 2 (\mu_{e} + \mu_{p}) B
\]
(a) in interstellar space where the magnetic field is of the order of $10^{-5}$ gauss,

在极弱场下，会有两条谱线，大小为
\[
\nu_{1} = - \frac{(\mu_{e} + \mu_{p}) B}{h} \approx \frac{\mu_{B} B}{h} = 14 Hz
\]

\[
\nu_{2} = 2 \nu_{1} \approx 28 Hz
\]

对应波长为
\[
\lambda_{1} = \frac{c}{\nu_{1}} \approx 2.14 \times 10^{7} m
\]

\[
\lambda_{2} = \frac{c}{\nu_{2}} \approx 1.07 \times 10^{7} m
\]

(b) at the surface of the earth where the magnetic field is about $\frac{1}{2}$ gauss,

同样带入
\[
\nu_{1} = - \frac{(\mu_{e} + \mu_{p}) B}{h} \approx \frac{\mu_{B} B}{h} = 0.7 MHz
\]

\[
\nu_{2} = 2 \nu_{1} \approx 1.4 MHz
\]

对应波长为
$$
\lambda_{1} = \frac{c}{\nu_{1}} \approx 428.5 m
$$

$$
\lambda_{2} = \frac{c}{\nu_{2}} \approx 214.3 m
$$

(c) in the largest magnetic fields which have been produced in the laboratory, i.e., fields of about $10^{5}$ gauss.

此时为强场，需要考虑 $E_{3}$ 的能量偏移
\[
E_{3} = -A - (\mu_{e} - \mu_{p}) B \sqrt{1 + \frac{4 A^{2}}{(\mu_{e} - \mu_{p})^{2} B^{2}}} \approx
-A - (\mu_{e} - \mu_{p}) B - \frac{2 A^{2}}{(\mu_{e} - \mu_{p}) B}
\]
带入 $4A = \frac{hc}{\lambda}$ 其中 $\lambda \approx 21 cm$

得到
\[
\nu_{12} = \frac{|E_{1} - E_{2}|}{h} = \frac{2 (\mu_{e} + \mu_{p}) B}{h} \approx 2.798 \times 10^{2} GHz
\]
对应波长为
\[
\lambda_{12} = \frac{c}{\nu_{12}} \approx 1.07 \times 10^{-3} m
\]

$$
\nu_{13} = \frac{|E_{1} - E_{3}|}{h} \approx \frac{2A + 2 \mu_{p} B}{h} \approx  1.14 GHz
$$

对应波长为
$$
\lambda_{12} = \frac{c}{\nu_{12}} \approx 0.26 m
$$

## 第8次作业

80.1 Consider an infinite line of atoms with equal spacing $b$, and assume that an electron can be attached to any given atom in two configurations $i$ and $j$ with different energies $E_i$ and $E_j$, i.e., assume that a suitable set of base states are:
$$
\begin{aligned} \text { electron at atom } x_{n} \\ \text { in configuration } i \end{aligned}=\left|x_{n}, i\right\rangle,
$$

$$
\begin{aligned} \text { electron at atom } x_{n} \\ \text { in configuration } j \end{aligned}=\left|x_{n}, j\right\rangle .
$$

Assume further that the electron can jump from one atom to its nearest neighbor with amplitudes:

$$
-\frac{A_{i i}}{i \hbar} \text { to go from }\left|x_{n}, i\right\rangle \text { to }\left|x_{n+1}, i\right\rangle \text { or }\left|x_{n-1}, i\right\rangle,
$$

$$
-\frac{A_{j j}}{i \hbar} \text { to go from }\left|x_{n}, j\right\rangle \text { to }\left|x_{n+1}, j\right\rangle \text { or }\left|x_{n-1}, j\right\rangle,
$$

$$
-\frac{A_{j i}}{i \hbar} \text { to go from }\left|x_{n}, i\right\rangle \text { to }\left|x_{n+1}, j\right\rangle \text { or }\left|x_{n-1}, j\right\rangle,
$$

$$
-\frac{A_{i j}}{i \hbar} \text { to go from }\left|x_{n}, j\right\rangle \text { to }\left|x_{n+1}, i\right\rangle \text { or }\left|x_{n-1}, i\right\rangle .
$$

Consider the case when $A_{i j}=A_{j i}=-A$ and $A_{j j}=A_{i i}=-B$.

(a) Follow the procedure described in Chapter 13 of Vol. III to find the allowed values of the energy of such a system.

选取一组基 $\{ \ket{x_{n}, i}, \ket{x_{n}, j} \}$ 其中 $n = 1, 2, \cdots, N $，则 Schrödinger 方程可以表示为
\[
i \hbar \pdv{}{t} \ket{x_{n}, i} = E_{i} \ket{x_{n}, i} - B ( \ket{x_{n - 1}, i} - \ket{x_{n + 1}, i}) + A (\ket{x_{n - 1}, j} + \ket{x_{n + 1}, j})
\]

\[
i \hbar \pdv{}{t} \ket{x_{n}, j} = E_{j} \ket{x_{n}, j} - A ( \ket{x_{n - 1}, i} + \ket{x_{n + 1}, i}) - B (\ket{x_{n - 1}, j} + \ket{x_{n + 1}, j})
\]

带入试探解
\[
\ket{x_{n}, i} (t) = c_{i} e^{-i \frac{E}{\hbar} t - i k_{i} n b} \ket{x_{0}, i} (0)
\]

\[
\ket{x_{n}, j} (t) = c_{j} e^{-i \frac{E}{\hbar} t - i k_{j} n b} \ket{x_{0}, j} (0)
\]

\[
E \ket{x_{n}, i} = E_{i} \ket{x_{n}, i} - 2 B \ket{x_{n}, i} \cos(k_{i} b) - 2 A \ket{x_{n}, j} \cos (k_{j} b)
\]

\[
E \ket{x_{n}, j} = E_{j} \ket{x_{n}, j} - 2 A \ket{x_{n}, i} \cos(k_{i} b) - 2 B \ket{x_{n}, j} \cos (k_{j} b)
\]

解得
\[
(E - E_{i} + 2B \cos (k_{i} b)) (E - E_{j} + 2B \cos (k_{j} b)) = 4 A^{2} \cos (k_{i} b) \cos (k_{j} b)
\]
所以
\[
E_{\pm} = \frac{1}{2} (E_{i} - 2B \cos(k_{i} b) + E_{j} - 2B \cos(k_{j} b)) \\ \pm \frac{1}{2} \sqrt{(E_{i} - 2B \cos(k_{i} b) - E_{j} + 2B \cos(k_{j} b))^{2} + 16A^{2} \cos(k_{i} b) \cos(k_{j} b)}
\]
(b) Describe the band structure in the cases that $\left|E_{i}-E_{j}\right| \ll 2 B$, and $\left|E_{i}-E_{j}\right| \gg 2 B$.

当$\left|E_{i}-E_{j}\right| \ll 2 B$ 时，
\[
E_{\pm} \approx \frac{1}{2} (E_{i} + E_{j} - 2B \cos(k_{i} b)  - 2B \cos(k_{j} b)) \\ \pm \frac{1}{2} \sqrt{(2B \cos(k_{j} b) - 2B \cos(k_{i} b))^{2} + 16A^{2} \cos(k_{i} b) \cos(k_{j} b)}
\]

此时能带是一整段连续的能带。

当$\left|E_{i}-E_{j}\right| \gg 2 B$ 时，
\[
E_{\pm} \approx \frac{1}{2} (E_{i} + E_{j} - 2B \cos(k_{i} b)  - 2B \cos(k_{j} b) \pm (E_{i} - E_{j}))
\]
此时能带是以 $E_{i}$ 为中心和以 $E_{j}$为中心的两段分立的能带。

80.3 Scattering from an impurity: Referring to the example in Section 13-6 of Vol. III, let the atom at $n=0$ be different in a different way. Let $H_{00}=E_{0}$, $H_{01}=H_{10}=H_{0(-1)}=H_{(-1)0}=-B$, where $B \neq A$.

(a) Find the amplitude of transmission $\gamma$, and the amplitude of reflection (scattering) $\beta$.

写出哈密顿量如下
\[
H = \begin{pmatrix}
\ddots & \ddots & & &   \\
\ddots & E_{0} & -B & & \\
& -B & E_{0} & -B & \\
&  & -B & E_{0} & \ddots \\
& & & \ddots & \ddots
\end{pmatrix}
\]

同样假设振幅
\[
C_{n} = \begin{cases}
e^{- i k n b} + \beta e^{i k n b} & (n < 0) \\
\gamma e^{- i k n b} & (n > 0)
\end{cases}
\]
其中 $1 + \beta = \gamma$

带入方程：
\[
E = E_{0} - 2A \cos(k b)
\]

\[
\gamma E =  \gamma E_{0} - (\gamma + \beta) B e^{- i k b} - B e^{i k b}
\]

所以
\[
\gamma 2A \cos(kb) = (\gamma + \beta)B e^{-ikb} + B e^{ikb} \\
\gamma 2A \cos(kb) = \gamma 2B e^{-ikb} + B 2i \sin(kb) \\
\]
解得
\[
\gamma = \frac{i B \sin (kb)}{A \cos(kb) - B e^{-ikb}}
\]

\[
\beta = \frac{i B \sin (kb)}{A \cos(kb) - B e^{-ikb}} - 1 = \frac{(B - A) \cos(kb)}{A \cos(kb) - B e^{-ikb}}
\]

(b) Verify that $|\beta|^{2}+|\gamma|^{2}=1$.
\[
|\beta|^{2} + |\gamma|^{2} = \frac{(B - A)^{2} \cos^{2}(kb)}{(A - B)^{2} \cos^{2} (kb) + B^{2} \sin^{2} (kb)} + \frac{B^{2} \sin^{2} (kb)}{(A - B)^{2} \cos^{2} (kb) + B^{2} \sin^{2} (kb)} = 1
\]
82.1 The structure of the butadiene molecule can be represented as shown in Fig. 82-1. If we remove (theoretically) the four electrons of the double bonds, and then add them separately we can treat the problem in terms of the independent particle model. Specifically, we can consider a four pit system with the usual energies $E_{0}$ and Hamiltonian elements $-A$.

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20251201125414242.png" alt="image-20251201125414242" style="zoom:50%;" />

(a) What wavelength radiation $\lambda$ is emitted when butadiene molecules make transitions from the first excited to the ground state? Assume $A = 1$ eV.

对于这种四个碳原子组成的直链，利用书上的驻波模式给出的边界条件，得到
\[
\sin (5 k b) = \pi s
\]
所以
\[
kb = \frac{\pi}{5} s \quad (s = 1, 2, \cdots , 4)
\]
所以本征态能量有
\[
E = E_{0} - 2 A \cos (\frac{\pi}{5} s)
\]
所以对于两个双键上的四个电子排入其中时，在独立粒子假设下，基态能量为
\[
E_{g} = 2(E_{0} - 2 A \cos (\frac{\pi}{5})) + 2(E_{0} - 2 A \cos (\frac{2\pi}{5}))
\]
第一激发态的能量为
\[
E_{e} = 2(E_{0} - 2 A \cos (\frac{\pi}{5})) + (E_{0} - 2 A \cos (\frac{2\pi}{5})) + (E_{0} - 2 A \cos (\frac{3\pi}{5}))
\]
所以跃迁谱线波长为
\[
\lambda = \frac{hc}{E_{e} - E_{g}} = \frac{hc}{2A (\cos \frac{2 \pi}{5} - \cos \frac{3 \pi}{5})}\approx 1003 nm
\]
(b) In singly ionized butadiene, only three of the electrons of the double bonds are present. What can you say about how these electrons are distributed in the molecule?

三个电子中，两个会以相反自旋占据能量为 $E_{0} - 2A \cos (\frac{\pi}{5})$ 的轨道，还有一个在 $E_{0} - 2A \cos (\frac{2\pi}{5})$ 轨道上。

## 第9次作业

83.1 Consider in one dimension the motion of a particle of mass $m$ bound in a square well potential, as shown in Fig. 83-1, with

$$
V = \begin{cases} 
V_0, & x < 0 \text{ or } x > a \\
0, & 0 < x < a.
\end{cases}
$$

Note: for simplicity, let $V_0 \to \infty$.

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20251214204437931.png" alt="image-20251214204437931" style="zoom:50%;" />

(a) For the stationary state of lowest energy $E_0$, $\psi_0(x,t) = u_0(x)e^{-iE_0t/\hbar}$. We must have $u_0(x) = 0$ just outside the well (i.e., at $x = -\epsilon$ or $x = a + \epsilon$). Why?

在势阱外部的薛定谔方程可以写为
\[
i \hbar \pdv{}{t} \Psi = \hat{H} \Psi
\]
对应的定态方程为
\[
(E_{0} - V_{0}) \psi =  -\frac{\hbar^{2}}{2m} \pdv[2]{}{x} \psi
\]
所以
\[
\psi  \propto e^{\pm \sqrt{\frac{2m (V_{0} - E_{0})}{\hbar}} x}
\]
所以在势阱之外的地方，由于$V_0 \to \infty$，所以波函数很快会趋近于0

(b) Solve the Schrödinger Equation inside the well, subject to the condition stated in part (a).

在内部，定态方程可以表示为
\[
E_{0} \psi =  -\frac{\hbar^{2}}{2m} \pdv[2]{}{x} \psi
\]
解是三角函数
\[
\psi (x) \propto \sin(\sqrt{\frac{2m E_{0}}{\hbar^{2}}} x)
\]
(c) Find $E_0$ and sketch $u_0(x)$. ($u_0(x)$ need not be normalized.)

利用边界条件，得到
$$
\psi(x) \propto \sin(\frac{\pi}{a} x)
$$
所以
\[
E_{0} = \frac{\hbar^{2} \pi^{2}}{2m a^{2}}
\]
归一化，得到
$$
\psi_{0} (x, t) = \sqrt{\frac{2}{a}} \sin (\frac{\pi}{a} x) e^{- i \frac{\hbar \pi^{2}}{2m a^{2}} t}
$$
(d) Find the energy difference between the lowest state and the first excited state.

第一激发态
\[
E_{1} = \frac{2 \hbar^{2} \pi^{2}}{m a^{2}}
\]
得到能隙
\[
E_{1} - E_{0} = \frac{3 \hbar^{2} \pi^{2}}{2m a^{2}}
\]
(e) For the lowest state, roughly sketch the probability distribution for finding the particle with momentum $p$ in the range $dp$. No exact integrations are required. Don't worry about normalization. But, be sure to indicate the scale along the momentum axis.

直接得到
\[
\psi(p) \propto \int_{0}^{a} \sin (\frac{\pi}{a} x) e^{- i \frac{p}{\hbar} x} \, \dd{x} \\ \propto
\frac{1 + e^{-i \frac{p}{\hbar} a}}{(\frac{\pi}{a})^2 - (\frac{p}{\hbar})^2}
\]
得到动量分布函数
\[
P (p) \propto \frac{\cos^2\left(\frac{p a}{2\hbar}\right)}{(\frac{\pi}{a})^2 - (\frac{p}{\hbar})^2}
\]
83.2 Consider the motion of a particle of mass $m$ in a one-dimensional potential well, as shown in Fig. 83-2(a), defined by:
$$
V = \begin{cases}
\infty, & x < 0 \\
0, & 0 < x < a \\
V_0, & x > a
\end{cases}
$$

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20251214204635031.png" alt="image-20251214204635031" style="zoom:50%;" />

(a) Find the value of $V_0$ such that the energy of the particle in the ground state for this well is $10\%$ less than the ground state energy for a well with $V_0 \to \infty$.

利用无限深势阱的结论
\[
E = 0.9 \cdot \frac{\hbar^{2} \pi^{2}}{2m a^{2}}
\]
直接待定系数，势阱内
\[
\psi (x) \propto \sin (\sqrt{\frac{2m E}{\hbar^{2}}} x)
\]
右侧
\[
\psi (x) \propto e^{-\sqrt{\frac{2m (V_{0} - E)}{\hbar^{2}}} x}
\]
令
$$
\alpha = +\sqrt{\frac{2mE}{\hbar^2}}
$$

$$
\beta = +\sqrt{\frac{2m(V_0 - E)}{\hbar^2}}
$$

所以
\[
A \sin (\alpha a) = B e^{- \beta a}
\]

\[
A \alpha \cos(\alpha a) = - \beta B e^{- \beta a}
\]

得到
\[
\alpha \cot(\alpha a) = - \beta
\]
假设 $V_{0} = x \frac{\hbar^{2}}{2m a^{2}}$
\[
\alpha a \cot(\alpha a) + \sqrt{x - \alpha^{2} a^{2}} = 0
\]
带入 $\alpha a = \sqrt{0.9} \pi$ ，计算得到
\[
V_{0} \approx 34.93 \frac{\pi^{2} \hbar^{2}}{2m a^{2}}
\]

(b) Let $V_0$ be equal to the value found for part (a) above, in the potential well shown in Fig. 83-2(b), defined by:

$$
V = \begin{cases}
V_0, & x < -a \\
0, & -a < x < a \\
V_0, & x > a
\end{cases}
$$

Without detailed calculation, give the energy of the first excited state for this well.

这里的波函数就是上面那一问的结果对称了一下，所以第一个激发态能量就是 $0.9 \cdot \frac{\hbar^{2} \pi^{2}}{2m a^{2}}$

83.3 Consider the one-dimensional problem of a particle of mass $m$ bound in a rectangular potential well:
$$
V = \begin{cases} 
V_0, & |x| > a \\
0, & |x| < a 
\end{cases}
$$

(a) Show that the following two equations are obtained by requiring that the wave functions are solutions of the Schrödinger equation which fulfill the required boundary conditions:

$$
\alpha \cot (\alpha a) = -\beta
$$

or

$$
\alpha \tan (\alpha a) = +\beta
$$

where

$$
\alpha = +\sqrt{\frac{2mE}{\hbar^2}}
$$

$$
\beta = +\sqrt{\frac{2m(V_0 - E)}{\hbar^2}}
$$

直接写出势阱内外的薛定谔方程
\[
(E - V_{0}) \psi =  -\frac{\hbar^{2}}{2m} \pdv[2]{}{x} \psi \quad (|x| > a) \\
E \psi =  -\frac{\hbar^{2}}{2m} \pdv[2]{}{x} \psi \quad (|x| < a)
\]
所以解为
\[
\psi (x) = A \cos (\sqrt{\frac{2m E}{\hbar^{2}}} x) + C \sin (\sqrt{\frac{2m E}{\hbar^{2}}} x) \quad (|x| < a) \\
\psi (x) = B e^{\pm \sqrt{\frac{2m (V_{0} - E)}{\hbar^{2}}} x} \quad (|x| > a)
\]
分别对势阱内得到的两个线性无关的解待定边界条件，得到
\[
A \cos (\alpha a) = B e^{- \beta a} \\
- A \alpha \sin (\alpha a) = - \beta B e^{- \beta a}
\]
所以
\[
\alpha \tan (\alpha a) = \beta
\]
或者
\[
C \sin (\alpha a) = B e^{- \beta a} \\
C \alpha \cos (\alpha a) = - B \beta e^{- \beta a}
\]
所以
\[
\alpha \cot(\alpha a) = - \beta
\]
(b) If $V_0a^2 = 4\hbar^2/2m$, estimate the energies of the ground state and first excited state. Sketch the wave functions of these states.

直接带入
\[
\alpha a \tan(\alpha a) = \sqrt{4 - \alpha^{2} a^{2}}
\]
得到
\[
\alpha \approx \frac{1.03}{a}
\]
所以
\[
E \approx 0.53 \frac{\hbar^{2}}{ma^{2}}
\]

\[
\alpha a \cot(\alpha a) = - \sqrt{4 - \alpha^{2} a^{2}}
\]

得到
\[
\alpha \approx \frac{1.895}{a}
\]
所以
\[
E \approx 1.8 \frac{\hbar^{2}}{m a^{2}}
\]
比较得到基态能量为
\[
E_{g} \approx 0.53 \frac{\hbar^{2}}{ma^{2}}
\]
前几个激发态的能量为
\[
E_{1} \approx 1.8 \frac{\hbar^{2}}{m a^{2}}
\]
(c) How many bound states are there if $V_0a^2 < \pi^2\hbar^2/8m$?

解方程
\[
\alpha a \tan(\alpha a) = \sqrt{\frac{\pi^{2}}{4} - \alpha^{2} a^{2}}
\]

\[
\alpha a \cot(\alpha a) = - \sqrt{\frac{\pi^{2}}{4} - \alpha^{2} a^{2}}
\]

得到只有 $1$ 个束缚态 。                   

## 第10次作业

84.1 A certain excited state of an atom has spin one and can lose its energy by emitting a photon and going to a state of spin zero. Consider an excited atom whose component of angular momentum along some z-axis is zero, and let \(A(\theta)\) be the amplitude that it will emit a right-hand-circularly polarized photon into a small solid angle \(\Delta\Omega\) in a direction at the angle \(\theta\) with respect to the z-axis. How does \(A(\theta)\) depend on \(\theta\)?

假设极化为 $+1$ 时沿着 $z$ 轴方向发射 RHC 的振幅为 $a$ ，则对于和原来 $z$  轴夹角为 $\theta$ 的 $z'$，此时发射RHC的振幅为
\[
a \langle + | R_{y} (\theta) | 0 \rangle = \frac{a}{\sqrt{2}} \sin \theta
\]
所以
\[
A (\theta) \propto \sin \theta
\]
84.2 The X, a spin \(1/2\) even parity particle, decays via the following scheme:
\[
X \rightarrow Y + \gamma
\]

where the Y is a spin \(1/2\) even parity particle. If the X were polarized with its spin up along the \(+z\)-axis, it could decay with the end products moving along the z-axis in eight ways, with amplitudes \(a\) through \(h\), as shown in Fig. 84-1 (the wiggly arrows indicate photons moving in the direction of the arrow, and the arrow on the Y indicates the direction of its spin). Assume the angle between the polarization of the X and the momentum of the Y equals \(\theta\).

<img src="./Feynman Lectures on Physics (3) Homework.assets/image-20251217212457069.png" alt="image-20251217212457069" style="zoom:25%;" />

(a) Which of the amplitudes \(a\)–\(h\) are necessarily zero?

根据观察判断得到，振幅 $a,c,d,e,f,g$ 均为 $0$，即可能的情况就 $b, h$ 两种

(b) Calculate the angular distribution of Y’s polarized with their spins pointing in the same direction as their direction of motion (“positive helicity”) \(f^{+}(\theta)\) when a group of X’s polarized up along the z-axis decays.

自旋方向和运动方向一致的时候，假设振幅为 $b$ ，也就是说
\[
f^{+} (\theta) \propto |b \langle - | R_{y} (\theta) | + \rangle |^{2} = |b^{2}| \sin^{2} \frac{\theta}{2}
\]
(c) Calculate the angular distribution of all Y’s regardless of their polarizations \(f(\theta)\) when a group of X’s polarized up along the z-axis decays.

此时平行和反平行两种情况都要考虑，假设相反时振幅为 $h$
\[
f (\theta) = |b \langle - | R_{y} (\theta) | + \rangle |^{2} + |h \langle + | R_{y} (\theta) | + \rangle |^{2} = |b^{2}| \sin^{2} \frac{\theta}{2} + |h^{2}| \cos^{2} \frac{\theta}{2}
\]
(d) Careful experiments have failed to show any deviation from a uniform angular distribution in this decay. What might be the physical reason for this?

发现 $b$ 在宇称变换后就对应 $h$，所以由对称性有 $|b^{2}| = |h^{2}|$ ，所以
\[
f (\theta) = |b^{2} |
\]
所以观察不到角分布。

84.5 The ground state of an atom has spin zero and even parity. The first excited state has spin one and unknown parity. Assume a supply of atoms in the first excited state, all with \(m = +1\) in the \(z\)-direction, and consider photons emitted in transitions to the ground state.

(a) If photons are detected regardless of their polarization, investigate whether their angular distribution can be used to determine the parity of the first excited state.

不可以。在不区分极化的时候，跃迁概率角分布为（假设基态粒子飞行的方向为 $z'$ 轴）
\[
A (\theta) \propto |a \langle - R_{y} (\theta) | + \rangle |^{2} + | b \langle + | R_{y} (\theta) | + \rangle|^{2} \\ = 
\frac{1}{4} ((|a^{2}| + |b^{2}|) (1 + \cos^{2} \theta) + 2(|b^{2}| - |a^{2}|) \cos \theta)
\]
宇称变换要求$|a^{2}| = |b^{2}|$，所以
\[
A (\theta) \propto (1 + \cos^{2} \theta)
\]
这一结果和第一激发态的宇称没有关系。所以探测结果无法用来决定宇称。

(b) Show that measurement of the angular distributions of \(x'\)- and \(y'\)-polarized photons can determine the unknown parity. (The \(z'\)-axis is taken along the direction of photon emission, and is in the \(xz\)-plane.)  

测量得到 $x'$ 方向的角分布
\[
\begin{pmatrix}
\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \\
-\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}
\end{pmatrix}
\begin{pmatrix}
\frac{a}{2} (1 - \cos \theta) \\
\frac{b}{2} (1 + \cos \theta)
\end{pmatrix} = 
\begin{pmatrix}
\frac{\sqrt{2}}{4} (a + b + \cos \theta (- a + b)) \\
\frac{\sqrt{2}}{4} (-a + b + \cos \theta (a + b))
\end{pmatrix}
\]
所以在 $x'$ 方向极化的光在 $\theta$ 角出射概率为
\[
B (\theta) \propto |a + b + \cos \theta (- a + b)|^{2} = |a + b|^{2} + |b - a|^{2} \cos^{2} \theta +(\langle a + b, b - a \rangle + \langle b - a, a + b \rangle) \cos \theta \\ =
(|a^{2}| + |b^{2}|) (1 + \cos^{2} \theta) + (\langle a, b \rangle + \langle b, a \rangle) (1 - \cos^{2} \theta) + 2 (|b^{2}| - |a^{2}|) \cos \theta
\]
当激发态是偶宇称时，$a = b$，所以出射角分布与 $\theta$ 无关。

当激发态是奇宇称时，$a= -b$，所以出射角分布正比于 $\cos^{2} \theta$，和偶宇称的情况不同，所以可以用来判断宇称。

## 第11次作业

85.1 Hydrogen gas prepared in the \(3d\) state is allowed to decay to the ground state by emission of radiation. Describe the emission spectrum of this radiation. (How many lines does it have? What are their wavelengths and relative intensities?)

电偶极跃迁： $3d \to 2p$,  $2p \to 1s$

磁偶极跃迁：$3d$ 内部跃迁

电四极跃迁： $3d \to 2s$, $3d \to 1s$ （算了这里应该不用考虑）

在不考虑精细结构的情况下，上述跃迁仅产生两条谱线
\[
\Delta E = \begin{cases} - 13.6 \cdot \left(\frac{1}{2^{2}} - \frac{1}{1^{2}}\right) \, \text{eV} \approx 10.2 \text{eV}\\
- 13.6 \cdot \left(\frac{1}{3^{2}} - \frac{1}{2^{2}}\right) \, \text{eV} \approx 1.89 \, \text{eV}
\end{cases}
\]
对应的谱线长分别是：$2p \to 1s$
\[
\lambda = \frac{h c}{\Delta E} \approx 1215.53 \, \text{\AA}
\]
以及 $3d \to 2p$
\[
\lambda = \frac{hc}{\Delta E} \approx 6563.87 \, \text{\AA}
\]
85.2 (a) Use a classical argument to show that the distance \(r\) between the nucleus and the electron in a hydrogen atom in the ground state can not exceed \(R = 2r_B\) (where \(r_B = \hbar^2 / me^2\) is the Bohr radius).

氢原子基态电子的能量为
\[
E = - \frac{e^{2}}{2 r_{B}}
\]
而在电子处于 $R = 2 r_{B}$ 处，它的势能是
\[
V = - \frac{e^{2}}{2 r_{B}}
\]
也就意味着在电子超出 $2r_{B}$ 的范围时，它的动能会小于零，即经典情形下该区域为电子的动力学禁戒区。

(b) Use quantum mechanics to find the probability \(P(r > R)\) that the electron in a hydrogen atom in the ground state can be found further from the nucleus than the distance \(R = 2r_B\).

写出氢原子的基态波函数
\[
\psi_{100}= \frac{1}{\sqrt{\pi r_{B}^{3}}} e^{- \frac{r}{r_{B}}}
\]
所以在两倍半径之外的概率为
\[
P = \int \psi^{*}  \psi \, \dd{\tau} = 
4 \pi \int_{2 r_{B}}^{\infty} \frac{1}{\pi r_{B}^{3}} e^{- \frac{2r}{r_{B}}} r^{2} \, \dd{r} = 13 e^{-4}
\]
85.4 A student passes light from a tube of incandescent hydrogen gas through a diffraction grating, resulting in a number of discrete spectral lines.

(a) One of the lines measured has a wavelength of \(4430\) Å, with a width of \(150\) Å. This corresponds to an energy and uncertainty of \(E = (2.80 \pm 0.09)\) eV. Which transition between H energy levels could produce this line? What energy is required to excite the hydrogen atom from the ground state into the level that produces this transition?

计算这条谱线对应的能量差
\[
\Delta E = \frac{hc}{\lambda} \approx 2.79874 \, \text{eV}
\]
因为
\[
\frac{\Delta E}{E_{g}} \approx 0.2057 \approx \frac{1}{4} - \frac{1}{25}
\]
由于
\[
\frac{2.80 \pm 0.09}{13.6} \approx [0.1993, 0.2125]
\]
所以这一结果是在可以接受的误差范围内的。对应的跃迁是从 $n = 5$ 到 $n = 2$ 的跃迁。

把氢原子从基态激发到跃迁前的态 $n = 5$ 需要的能量大概是
\[
\Delta E \approx \frac{13.6}{1^{2}} - \frac{13.6}{5^{2}} \approx 13.056 \, \text{eV}
\]
(b) The line of part (a) is a member of the Balmer series. The Balmer series is the series of spectral lines produced by a transition from a higher energy state into the \(n = 2\) state of H. What are the shortest and longest wavelengths of emission in the Balmer series?

波长最长：能量差最小
\[
\Delta E_{min} = \frac{E_{g}}{2^{2}} - \frac{E_{g}}{3^{2}} \approx 1.889 \, \text{eV}
\]
对应波长为
\[
\lambda = \frac{hc}{\Delta E} \approx 6563.87 \, \text{\AA}
\]
波长最短：能量差最大，对应着完全电离
\[
\Delta E_{max} = \frac{E_{g}}{2^{2}} \approx 3.4 \, \text{eV}
\]
对应着波长
\[
\lambda = \frac{hc}{\Delta E} \approx 3646.59 \, \text{\AA}
\]
(c) In many astrophysical applications, such as the study of spectral absorption lines in stellar atmospheres, H spectral lines are found alongside spectral lines of other elements. One such set of spectral lines belong to singly ionized helium atoms. What is the ground state energy of singly ionized He?

这个类氢离子的基态能量和氢原子差 $Z^{2}$ 倍，所以
\[
E_{g} (\text{He}^{+}) \approx - 13.6 \cdot 4 = - 54.4 \, \text{eV}
\]
(d) What is the shortest wavelength spectral line that can be produced from a transition into the \(n = 4\) state of singly ionized He? How does this compare to the shortest wavelength line in the Balmer series?

最短的谱线对应的能量差为
\[
\Delta E = - 54.4 \cdot \left(0 - \frac{1}{4^{2}}\right) \approx 3.4 \, \text{eV}
\]
对应的波长为
\[
\lambda \approx \frac{hc}{\Delta E} \approx 3646.59 \, \text{\AA}
\]
对比前几问结论，发现 transition into the \(n = 4\) state 中的最短波长是 Balmer 系中最短波长一样。
