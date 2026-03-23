# 量子力学 第3次作业

吴桐 2024012555

3.5.1 设有一个阶跃势场 $V(x)=\begin{cases}0 & x<0 \\ V_{0} (>0) & x>0\end{cases}$ 粒子以能量 $E (>V_{0})$ 从左方入射。求 $R$ 和 $T$，并验证 $R+T=1$。提示：注意这时应该使用原始的 $R$ 和 $T$ 的定义。

在 $x<0$ 区域
$$
\psi_{1}(x)=A e^{ikx}+B e^{-ikx}, \quad k=\frac{\sqrt{2mE}}{\hbar}
$$
其中 $A e^{ikx}$ 为入射波，$B e^{-ikx}$ 为反射波。

在 $x>0$ 区域
$$
\psi_{2}(x)=C e^{ik'x}, \quad k'=\frac{\sqrt{2m(E-V_{0})}}{\hbar}
$$
只有透射波。在 $x=0$ 处，波函数连续且一阶导数连续

$$
\begin{cases}
A+B=C \\
ikA-ikB=ik'C
\end{cases}
$$

解得
$$
B=\frac{k-k'}{k+k'}A, \quad C=\frac{2k}{k+k'}A
$$

所以入射波概率流为
$$
j_{\text{in}}=\frac{\hbar k}{m}|A|^{2}
$$
反射波概率流为
$$
j_{\text{ref}} = -\frac{\hbar k}{m}|B|^{2}
$$
透射波概率流为
$$
j_{\text{trans}} = \frac{\hbar k'}{m}|C|^{2}
$$
反射系数
$$
R=\frac{|j_{\text{ref}}|}{|j_{\text{in}}|}=\frac{|B|^{2}}{|A|^{2}}=\left(\frac{k-k'}{k+k'}\right)^{2}
$$

透射系数
$$
T=\frac{j_{\text{trans}}}{j_{\text{in}}} = \frac{k'|C|^{2}}{k|A|^{2}}=\frac{k'}{k}\cdot\left(\frac{2k}{k+k'}\right)^{2}=\frac{4kk'}{(k+k')^{2}}
$$

验证 $R+T=1$
$$
R+T=\frac{(k-k')^{2}}{(k+k')^{2}}+\frac{4kk'}{(k+k')^{2}}= \frac{k^{2}+2kk'+k'^{2}}{(k+k')^{2}}=\frac{(k+k')^{2}}{(k+k')^{2}} = 1
$$

3.5.2 求证：对于满足 $V(\pm \infty)=0$ 的任何势场，总有 $R+T=1$，即几率守恒。

证明：

当 $x\to -\infty$ 时，波函数渐近形式
$$
\psi(x)\sim A e^{ikx}+B e^{-ikx}, \quad k=\frac{\sqrt{2mE}}{\hbar}
$$

当 $x\to +\infty$ 时，波函数渐近形式
$$
\psi(x)\sim C e^{ikx}
$$

概率流密度 $j(x)$ 与位置无关
$$
j(x)=\frac{\hbar}{2mi}\left[\psi^*\frac{d\psi}{dx}-\psi\frac{d\psi^*}{dx}\right]=\text{Const.}
$$

在 $x\to -\infty$ 处
$$
j(-\infty)=\frac{\hbar k}{m}(|A|^{2}-|B|^{2})
$$

在 $x\to +\infty$ 处
$$
j(+\infty)=\frac{\hbar k}{m}|C|^{2}
$$

由 $j(-\infty)=j(+\infty)$ 得
$$
|A|^{2}-|B|^{2}=|C|^{2}
$$

定义反射系数 $R=\frac{|B|^{2}}{|A|^{2}}$，透射系数 $T=\frac{|C|^{2}}{|A|^{2}}$，则
$$
1-R=T \quad \Rightarrow \quad R+T=1
$$

所以概率守恒。

3.5.3（选做）求证：对于满足 $V(\pm \infty)=0$ 的任何势场，粒子从左方入射和从右方入射的透射几率总是相等的。这里的“任何”两个字意味着并不要求 $V(x)=V(-x)$。提示：“从左方射到右方”和“从右方射到左方”是时间反演的关系，而在时间反演之下波函数 $\psi(x)$ 要变成它的复共轭 $\psi^*(x)$（见本章第一节的习题 3.1.2），并且我们有“共轭定理”（见本章第一节）。

证明：

已知时间反演算符 $\hat{T}$ 作用于波函数 $\psi(x)$ 的效果是取其复共轭
$$
\hat{T}\psi(x)=\psi^*(x)
$$

如果粒子从左方入射，能量为 $E$，则波函数 $\psi_{I}(x)$ 的渐近形式为
$$
\psi_{I}(x)\sim\begin{cases}
e^{ikx}+r e^{-ikx} & x\to -\infty \\
t e^{ikx} & x\to +\infty
\end{cases}
$$

如果粒子从右方入射，能量为 $E$，则波函数 $\psi_{II}(x)$ 的渐近形式为
$$
\psi_{II}(x)\sim\begin{cases}
t' e^{-ikx} & x\to -\infty \\
e^{-ikx}+r' e^{ikx} & x\to +\infty
\end{cases}
$$

对 $\psi_{I}(x)$ 做时间反演
$$
\psi_{I}^*(x)\sim\begin{cases}
e^{-ikx}+r^* e^{ikx} & x\to -\infty \\
t^* e^{-ikx} & x\to +\infty
\end{cases}
$$

这应该对应粒子从右方入射的波函数形式。为了使二者相符，我们使用共轭定理重新改写从右方入射波函数的形式
$$
\psi_{II}(x)\sim\begin{cases}
c_{1} t' e^{-ikx} + c_{2} t'^{*} e^{ikx} & x\to -\infty \\
c_{1} (e^{-ikx}+r' e^{ikx}) + c_{2} (e^{ikx} + r'^{*} e^{- ikx}) & x\to +\infty
\end{cases}
$$
带入概率流的不变性
$$
|t|^{2} = (|c_{1}|^{2} - |c_{2}|^{2}) |t'|^{2}
$$
比较两种方法得到的波函数，有
$$
c_{1} t' = 1 \\
c_{2} t'^{*} = r^{*} \\
c_{1} + c_{2} r'^{*} = t^{*} \\
c_{1} r' + c_{2} = 0
$$
 综合上述条件，得到
$$
t' = t^*, \quad r' = r^*
$$

从左侧入射透射概率为 $T=|t|^{2}$，从右入射透射概率为 $T'=|t'|^{2}=|t^*|^{2}=|t|^{2}=T$。因此左右入射透射概率相等。

3.5.4（选做）求左方入射波数为 $k$ 的粒子在双 $\delta$ 势垒 $V(x)=\frac{\hbar^{2}}{mL}[\delta(x)+\delta(x-a)]$（$L,a>0$）上的透射几率 $T$ 和反射几率 $R$。问：当 $k$ 分别满足什么条件的时候，$T$ 和 $R$ 分别达到了最大值？这些最大值是多大？为具体起见，考虑参数 $L,a$ 满足条件 $L=a$ 的情形。

假设波函数为

区域I：$x<0$，$\psi_{I}(x)=A e^{ikx}+B e^{-ikx}$

区域II：$0<x<a$，$\psi_{II}(x)=C e^{ikx}+D e^{-ikx}$

区域III：$x>a$，$\psi_{III}(x)=F e^{ikx}$

其中 $k = \frac{\sqrt{2mE}}{\hbar}$，则对于 $\delta$ 势 $V(x)=\alpha\delta(x)$，边界条件为

$$
\psi(0^+)=\psi(0^-) \\
\psi'(0^+)-\psi'(0^-)=\frac{2m\alpha}{\hbar^{2}}\psi(0)
$$
对于 $\delta(x)$ 处（$x=0$），$\alpha=\frac{\hbar^{2}}{mL}$，跃变条件
$$
\psi'(0^+)-\psi'(0^-)=\frac{2}{L}\psi(0)
$$

对于 $\delta(x-a)$ 处（$x=a$），同样有
$$
\psi'(a^+)-\psi'(a^-)=\frac{2}{L}\psi(a)
$$

应用边界条件待定系数
$$
A + B = C + D \\
ik (C - D) - ik (A - B) = \frac{2}{L} (A + B) \\
C e^{ika} + D e^{-ika} = F e^{ika} \\
ik F e^{ika} - ik (C e^{ika} - D e^{-ika}) = \frac{2}{L} F e^{ika}
$$
得到透射振幅
$$
t=\frac{F}{A}=\frac{1}{\left(1 + \frac{i}{kL}\right)^{2} + \frac{e^{i 2ka}}{k^{2} L^{2}}}
$$

透射概率 $T=|t|^{2}$
$$
T = \frac{1}{1 + \frac{4}{(kL)^{2}} \left( \cos ka + \frac{1}{kL} \sin ka \right)^{2}}
$$

反射概率 
$$
R = 1 -T = \frac{4 \left( \cos ka + \frac{1}{kL} \sin ka \right)^{2}}{k^{2} L^{2} + 4 \left( \cos ka + \frac{1}{kL} \sin ka \right)^{2}}
$$
考虑参数 $L,a$ 满足条件 $L=a$ 的情形，透射概率最大的条件是 $\cos ka + \frac{1}{ka} \sin ka = 0$， 即 $ka$ 是 $\tan x = -x$ 的解时，此时透射率
$$
T = 1
$$
反射率最大的条件是 $\cos ka + \frac{1}{ka} \sin ka = 1$，即 $ka$ 是方程 $x (1 - \cos x) = \sin x$ 的解是，此时反射率
$$
R = \frac{4}{k^{2} a^{2} + 4}
$$
3.6.1（选做）由 $\delta$ 势阱构成的 Dirac 梳子是 $V(x)=- \frac{\hbar^{2}}{mL} \delta(x-na) \quad (n\in\mathbb{Z})$，考虑 $E<0$。请论证：若 $a<2L$，则粒子的能量从一个 $<0$ 的最低能级开始向上连续变化，在 $E<0$ 的能级与 $E=0$ 之间没有间隙；若 $a>2L$，则在 $E<0$ 的区域中存在一条隔开的能带，它的高端能量与 $E=0$ 之间存在有限的能隙。

我们假设周期性的波函数，即
$$
\psi(x) = \left(A e^{\kappa (x - na)} + B e^{-\kappa (x - na)}\right) e^{ikna}
$$
其中 $\kappa = \frac{\sqrt{-2mE}}{\hbar}$ 带入边界条件
$$
A e^{\kappa a} + B e^{-\kappa a} = (A + B) e^{ika}
$$

$$
\kappa (A - B) e^{ika} - \kappa (A e^{\kappa a} - B e^{- \kappa a}) = - \frac{2}{L} (A + B) e^{ika}
$$

联立得到
$$
\cos ka = \cosh \kappa a - \frac{1}{\kappa L} \sinh \kappa a
$$
假设 $\kappa a = z, \frac{a}{L} = \beta$，则上式可以变为
$$
\cos \frac{k}{\kappa} z = \cosh z - \frac{\beta}{z} \sinh z
$$
由于 $k$ 的取值是任意的，所以左侧可以是 $[-1, 1]$ 之间的数字。考虑
$$
f(z) = \cosh z  - \frac{\beta}{z} \sinh z
$$
情况一：若 $a < 2L$（即 $\beta < 2$） 

$f(z)=-1$ 的根：此时直线斜率 $\frac{2}{\beta} > 1$。因为 $\tanh(x)$ 是凸函数且初始斜率为 $1$，直线 $y = \frac{2}{\beta}x$ 永远在 $\tanh(x)$ 的上方，两者在 $x>0$ 时没有交点。也就是说，$f(z)$ 永远无法到达 $-1$。 在 $z \to 0^+$ 处：$f(0^+) = 1 - \beta$。因为 $0 < \beta < 2$，所以 $f(0^+) \in (-1, 1)$。 随着 $z$ 从 $0$ 逐渐增大，$f(z)$ 从一个介于 $(-1, 1)$ 之间的值出发，最终在 $z_{2}$ 处穿过 $1$。因此，允许的 $z$ 的范围是 $z \in (0, z_{2}]$。因为 $z$ 可以取到无穷小，对应的能量 $E = -\frac{\hbar^{2} z^{2}}{2ma^{2}}$ 可以从最低能量 $E_{min}$ 向上连续变化，一直逼近到 $0$。在 $E<0$ 的能带顶与 $E=0$ 之间没有任何间隙。

情况二：若 $a > 2L$（即 $\beta > 2$） 

$f(z)=-1$ 的根：此时直线斜率 $\frac{2}{\beta} < 1$。直线 $y = \frac{2}{\beta}x$ 与 $\tanh(x)$ 在 $x>0$ 处必然会产生一个唯一的正交点 $x_{1}$。因此，$f(z) = -1$ 存在唯一正根 $z_{1} = 2x_{1} > 0$。 在 $z \to 0^+$ 处$f(0^+) = 1 - \beta$。因为 $\beta > 2$，此时 $f(0^+) < -1$。这意味着在 $z \to 0^+$（即能量极靠近 $0$）的地方，波函数处于禁带中。$f(z)$ 从 $1-\beta < -1$ 开始，随着 $z$ 的增大，在 $z_{1}$ 处第一次穿过 $-1$ 进入允许区间，随后在 $z_{2}$ 处穿过 $1$ 离开允许区间。允许的 $z$ 范围被严格限制在一个闭区间 $z \in [z_{1}, z_{2}]$ 内（此处 $z_{1} > 0$）, 这个区域对应着一条隔开的能带，其能量范围为 $E \in [-\frac{\hbar^{2} z_{2}^{2}}{2ma^{2}}, -\frac{\hbar^{2} z_{1}^{2}}{2ma^{2}}]$。由于 $z_{1} > 0$，能带的高端能量 $E_{max} = -\frac{\hbar^{2} z_{1}^{2}}{2ma^{2}}$ 是一个严格小于 $0$ 的负值。因此，该能带高端能量与 $E=0$ 之间存在一个大小为 $\frac{\hbar^{2} z_{1}^{2}}{2ma^{2}}$ 的有限能隙。



## 第四章 力学量算符

4.1.1 求证: (a) 若 $\hat{F}=F(\hat{x}, \hat{p}_{x})$ 是 $\hat{x}$ 和 $\hat{p}_{x}$ 的整函数, 则 $\left[\hat{x}, \hat{F}\right]=\mathrm{i} \hbar \frac{\partial \hat{F}}{\partial \hat{p}_{x}},\left[\hat{p}_{x}, \hat{F}\right]=-\mathrm{i} \hbar \frac{\partial \hat{F}}{\partial \hat{x}}$; 

首先证明 $\comm{\hat{x}}{\hat{p}_{x}^{n}} = i \hbar n \hat{p}_{x}^{n - 1}$
$$
\hat{x} \hat{p}_{x}^{n} = i \hbar \hat{p}_{x}^{n - 1} + \hat{p}_{x} \hat{x} \hat{p}_{x}^{n - 1}
$$
像这样没把 $\hat{x}$ 向后移一位都会多出来一个 $i \hbar \hat{p}_{x}^{n - 1}$，所以移了 $n$ 次之后
$$
\comm{\hat{x}}{\hat{p}_{x}^{n}} = n \cdot i \hbar \hat{p}_{x}^{n - 1}
$$
对于一般函数 $F(\hat{x},\hat{p}_{x})=\sum_{m,n}c_{mn}\hat{x}^{m}\hat{p}_{x}^{n}$ 
$$
[\hat{x},F]=\sum_{m,n}c_{mn}[\hat{x},\hat{x}^{m}\hat{p}_{x}^{n}]
=\sum_{m,n}c_{mn}\left(\hat{x}^{m}[\hat{x},\hat{p}_{x}^{n}]+[\hat{x},\hat{x}^{m}]\hat{p}_{x}^{n}\right)
=\sum_{m,n}c_{mn}\hat{x}^{m}\cdot i\hbar n\hat{p}_{x}^{n-1}
=i\hbar\frac{\partial F}{\partial \hat{p}_{x}}
$$
同理

$$
[\hat{p}_{x},F]=\sum_{m,n}c_{mn}[\hat{p}_{x},\hat{x}^{m}\hat{p}_{x}^{n}]
=\sum_{m,n}c_{mn}\left(\hat{x}^{m}[\hat{p}_{x},\hat{p}_{x}^{n}]+[\hat{p}_{x},\hat{x}^{m}]\hat{p}_{x}^{n}\right)
=\sum_{m,n}c_{mn}(-i\hbar m\hat{x}^{m-1})\hat{p}_{x}^{n}
=-i\hbar\frac{\partial F}{\partial \hat{x}}
$$

(b) $\left[\hat{L}_{x}, \hat{L}_{y}\right]=\mathrm{i} \hbar \hat{L}_{z},\left[\hat{L}^{2}, \hat{L}_{x}\right]=0$; 

证明：
$$
\comm{\hat{L}_{x}}{\hat{L}_{y}} = \comm{\hat{y} \hat{p}_{z} - \hat{z} \hat{p}_{y}}{\hat{z} \hat{p}_{x} - \hat{x} \hat{p}_{z}} = \comm{\hat{y} \hat{p}_{z}}{\hat{z} \hat{p}_{x}} - 0 - 0 + \comm{\hat{z} \hat{p}_{y}}{\hat{x} \hat{p}_{z}} \\ =
\hat{y} \comm{\hat{p}_{z}}{\hat{z}} \hat{p}_{x} - \hat{x} \comm{\hat{p}_{z}}{\hat{z}} \hat{p}_{y} = i \hbar (\hat{x} \hat{p}_{y} - \hat{y} \hat{p}_{x}) = i \hbar \hat{p}_{z}
$$

$$
\comm{\hat{L}^{2}}{\hat{L}_{x}} = \comm{\hat{L}_{x}^{2} + \hat{L}_{y}^{2} + \hat{L}_{z}^{2}}{\hat{L}_{x}} \\ = 
\hat{L}_{x} \comm{\hat{L}_{x}}{\hat{L}_{x}} + \comm{\hat{L}_{x}}{\hat{L}_{x}} \hat{L}_{x} + \hat{L}_{y} \comm{\hat{L}_{y}}{\hat{L}_{x}} + \comm{\hat{L}_{y}}{\hat{L}_{x}} \hat{L}_{y} + \hat{L}_{z} \comm{\hat{L}_{z}}{\hat{L}_{x}} + \comm{\hat{L}_{z}}{\hat{L}_{x}} \hat{L}_{z} \\ =
0 + 0 - i\hbar \{\hat{L}_{y},\hat{L}_{z}\} + i \hbar \{\hat{L}_{z}, \hat{L}_{y}\} = 0
$$

(c) $\left(\hat{F} \hat{G}\right)^{\dagger}=\hat{G}^{\dagger} \hat{F}^{\dagger}$; 

对于任意的两个态
$$
\langle\psi|\hat{F}\hat{G}\phi\rangle=\langle\hat{F}^{\dagger}\psi|\hat{G}\phi\rangle=\langle\hat{G}^{\dagger}\hat{F}^{\dagger}\psi|\phi\rangle
$$
而左边也可写为 $\langle(\hat{F}\hat{G})^{\dagger}\psi|\phi\rangle$。由于这对任意 $\psi,\phi$ 成立，故 $(\hat{F}\hat{G})^{\dagger}=\hat{G}^{\dagger}\hat{F}^{\dagger}$

(d) 若 $\hat{F}, \hat{G}$ 是 Hermitian 算符, 则 $\hat{F} \hat{G}+\hat{G} \hat{F}$ 和 $\mathrm{i}[\hat{F}, \hat{G}] \equiv \mathrm{i}\left(\hat{F} \hat{G}-\hat{G} \hat{F}\right)$ 也是 Hermitian 算符。
$$
(\hat{F} \hat{G} + \hat{G} \hat{F})^{\dagger} = \hat{G}^{\dagger} \hat{F}^{\dagger} + \hat{F}^{\dagger} \hat{G}^{\dagger} = \hat{G} \hat{F} + \hat{F} \hat{G}
$$
所以 $\hat{F} \hat{G}+\hat{G} \hat{F}$ 是 Hermitian 的。
$$
i \left(\hat{F} \hat{G}-\hat{G} \hat{F}\right)^{\dagger} = -i \left(\hat{G}^{\dagger} \hat{F}^{\dagger} - \hat{F}^{\dagger} \hat{G}^{\dagger}\right) = i \left(\hat{F} \hat{G}-\hat{G} \hat{F}\right)
$$
也是 Hermitian 的。

4.1.2 求证: 若系统的 Hamiltonian 算符 $\hat{H}$ 与时间无关，它的初始波函数 $\Psi(t=0)=\Psi_{0}$ 给定, 则它在任意时刻的波函数是 $\Psi(t)=\mathrm{e}^{- \frac{i}{\hbar} \hat{H} t} \Psi_{0}$ 。所以算符 $U(t)=\mathrm{e}^{-\frac{i}{\hbar} \hat{H} t}$ 称为时间演化算符。

证明：

含时薛定谔方程
$$
i\hbar\frac{\partial}{\partial t}\Psi(t)=\hat{H}\Psi(t)
$$
其中 $\hat{H}$ 与时间无关。初始条件：$\Psi(0)=\Psi_{0}$

这是线性微分方程，由于这里不涉及算符的交换问题，所以可以直接模仿常数的形式，得到解为
$$
\Psi(t)=e^{-\frac{i}{\hbar}\hat{H}t}\Psi_{0}
$$
其中指数算符定义为幂级数
$$
e^{-\frac{i}{\hbar}\hat{H}t}=\sum_{n=0}^{\infty}\frac{1}{n!}\left(-\frac{i}{\hbar}\hat{H}t\right)^{n}
$$

4.1.3 (选做) 求证:

 (a) $\mathrm{e}^{\hat{A}} \hat{B} \mathrm{e}^{-\hat{A}}=\hat{B}+[\hat{A}, \hat{B}]+\frac{1}{2 !}[\hat{A},[\hat{A}, \hat{B}]]+\cdots+\frac{1}{n !}([\hat{A},)^{n}\hat{B}(])^{n}+\cdots$, 其中第 $n+1$ 项里有 $n$ 个相套的对易括号。

定义
$$
f (\lambda) = e^{\lambda \hat{A}} \hat{B} e^{- \lambda \hat{A}}
$$
求导
$$
f'(\lambda)=\hat{A}e^{\lambda\hat{A}}\hat{B}e^{-\lambda\hat{A}}-e^{\lambda\hat{A}}\hat{B}e^{-\lambda\hat{A}}\hat{A}
=e^{\lambda\hat{A}}[\hat{A},\hat{B}]e^{-\lambda\hat{A}}
$$
所以一般地
$$
f^{(n)}(\lambda)=e^{\lambda\hat{A}}\underbrace{[\hat{A},[\hat{A},\cdots[\hat{A}}_{n},\hat{B}]\cdots]]e^{-\lambda\hat{A}}

$$
在 $\lambda=0$ 处展开为泰勒级数
$$
f(\lambda)=\sum_{n=0}^{\infty}\frac{\lambda^{n}}{n!}f^{(n)}(0)
=\hat{B}+\lambda[\hat{A},\hat{B}]+\frac{\lambda^{2}}{2!}[\hat{A},[\hat{A},\hat{B}]]+\cdots
$$
令 $\lambda=1$ 即得
$$
\mathrm{e}^{\hat{A}} \hat{B} \mathrm{e}^{-\hat{A}}=\hat{B}+[\hat{A}, \hat{B}]+\frac{1}{2 !}[\hat{A},[\hat{A}, \hat{B}]]+\cdots+\frac{1}{n !}([\hat{A},)^{n} \hat{B}(])^{n}+\cdots
$$
(b) 对于 $\hat{A}=-\frac{i}{\hbar}\theta \hat{L}_{y}$ 和 $\hat{B}=\hat{L}_{z}$, 计算 $\mathrm{e}^{\hat{A}} \hat{B} \mathrm{e}^{-\hat{A}}$ 。这个结果表明: 算符 $\hat{R}_{y}(\theta)=\mathrm{e}^{-\frac{i}{\hbar} \theta \hat{L}_{y}}$ 把 $\hat{L}_{z}$ 绕着 $Y$ 轴转了 $\theta$ 角, 所以被称为旋转算符。

先计算对易子
$$
[\hat{A},\hat{B}]=[-\frac{i}{\hbar}\theta\hat{L}_{y},\hat{L}_{z}]
=-\frac{i}{\hbar}\theta[\hat{L}_{y},\hat{L}_{z}]
=-\frac{i}{\hbar}\theta(i\hbar\hat{L}_{x})=\theta\hat{L}_{x}
$$

再计算 $[\hat{A},[\hat{A},\hat{B}]]$
$$
[\hat{A},[\hat{A},\hat{B}]]=[-\frac{i}{\hbar}\theta\hat{L}_{y},\theta\hat{L}_{x}]
=-\frac{i}{\hbar}\theta^{2}[\hat{L}_{y},\hat{L}_{x}]
=-\frac{i}{\hbar}\theta^{2}(-i\hbar\hat{L}_{z})=\theta^{2}\hat{L}_{z}
$$

$$
[\hat{A},[\hat{A},[\hat{A},\hat{B}]]]=[-\frac{i}{\hbar}\theta\hat{L}_{y},\theta^{2}\hat{L}_{z}]
=-\frac{i}{\hbar}\theta^{3}[\hat{L}_{y},\hat{L}_{z}]
=-\frac{i}{\hbar}\theta^{3}(i\hbar\hat{L}_{x})=\theta^{3}\hat{L}_{x}
$$

可见奇数阶对易子给出 $\theta^{n}\hat{L}_{x}$，偶数阶给出 $\theta^{n}\hat{L}_{z}$

代入展开式
$$
e^{\hat{A}}\hat{L}_{z} e^{-\hat{A}}
=\hat{L}_{z}+\theta\hat{L}_{x}+\frac{\theta^{2}}{2!}\hat{L}_{z}+\frac{\theta^{3}}{3!}\hat{L}_{x}+\frac{\theta^{4}}{4!}\hat{L}_{z}+\cdots
$$
$$
=\left(1+\frac{\theta^{2}}{2!}+\frac{\theta^{4}}{4!}+\cdots\right)\hat{L}_{z}
+\left(\theta+\frac{\theta^{3}}{3!}+\frac{\theta^{5}}{5!}+\cdots\right)\hat{L}_{x}
$$
$$
=\cos\theta\,\hat{L}_{z}+\sin\theta\,\hat{L}_{x}
$$

这正是绕 $y$ 轴旋转 $\theta$ 角后 $\hat{L}_{z}$ 的变换。因此 $\hat{R}_{y}(\theta)=e^{-\frac{i}{\hbar}\theta\hat{L}_{y}}$ 是旋转算符。

