# Gravitational Wave Astronomy

Office hour: Mon 4:00-5:00 p.m.

## Introduction

### 不同波段的探测器

天基探测器：LISA，太极，天琴  mHz 波段

Pulser Timing Array： nHz 波段

## 相对论基础

找对偶基可以用对应分量的梯度方向，即
$$
\theta^{\alpha} = \nabla x^{\alpha}
$$

### 测地线方程

可以用几何语言写成
\[
\nabla_{\vec{P}} \vec{P} = 0 \equiv P^{\beta} P^{\alpha} {}_{; \beta} = 0
\]


### 测地线偏移方程

对于两个粒子，在 $t=0$ 时两个粒子速度相等，相对位置为 $\xi = x_{B} - x_{A}$
\[
\dv[2]{\xi^{i}}{t} = - \pdv{\Phi}{x^{i}}{x^{j}} \xi^{j}
\]
在相对论情形下，让 $\xi(\zeta) = P_{B} (\zeta) - P_{A} (\zeta)$
\[
\nabla_{\vec{P}} \vec{\xi} = 0
\]
利用 $[P, \xi] = 0$，得到
\[
\nabla_{P} (\nabla_{P} \xi) = (P^{\alpha}{}_{; \gamma \delta} - P^{\alpha} {}_{;\delta \gamma}) \xi^{\gamma} P^{\delta} = - R^{\alpha} {}_{\beta \gamma \delta} P^{\beta} \xi^{\gamma} P^{\delta}
\]
如此引入 Riemann 张量
$$
[\nabla_{\gamma},\nabla_{\delta}]V^{\alpha}=R^{\alpha}{}_{\beta\gamma\delta}V^{\beta}
$$

$$
\begin{aligned}{R_{\phantom{\alpha}\beta\gamma\delta}^{\alpha}}&{{}=\partial_{\gamma}\Gamma_{\phantom{\alpha}\beta\delta}^{\alpha}-\partial_{\delta}\Gamma_{\phantom{\alpha}\beta\gamma}^{\alpha}}\\ {}&{{}\quad+\Gamma_{\phantom{\alpha}\mu\gamma}^{\alpha}\Gamma_{\phantom{\mu}\beta\delta}^{\mu}-\Gamma_{\phantom{\alpha}\mu\delta}^{\alpha}\Gamma_{\phantom{\mu}\beta\gamma}^{\mu}}\\ \end{aligned}
$$

和牛顿情形对比可以得到
\[
\pdv{\Phi}{x^{i}}{x^{j}} = R^{i} {}_{0j0}
\]

## 弱场近似和引力波解

近似条件
\[
\frac{GM}{c^{2} R} \ll 1
\]
按照此形式的展开称为 Post-Minkowski，此外如果再加上低速条件 $v \ll c$，就可以变成牛顿近似。

### 弱场近似下的相对论

\[
g_{\alpha \beta} = \eta_{\alpha \beta} + h_{\alpha \beta}
\]

此处的弱场意味着
\[
|\boldsymbol{v}| \ll 1, \quad |\partial_t h_{\mu\nu}| \ll |\partial_i h_{\mu\nu}|, \quad |T^{0i}| \ll T^{00}, \quad |T^{ij}| \ll T^{00} \simeq \rho
\]
测地线方程的近似给出
\[
\frac{\mathrm{d}^{2}x^{i}}{\mathrm{d}t^{2}}\simeq-\Gamma^{i} {}_{00}=-\partial_{0}h_{0i}+\frac{1}{2}\partial_{i}h_{00}\simeq\frac{1}{2}\partial_{i}h_{00}
\]

### 弱场 Einstein 方程

弱场近似给出
$$
\begin{aligned}{R_{\mu\nu}^{(1)}}&{{}=\frac{1}{2}\left(\partial_{\alpha}\partial_{\mu}h^{\alpha}{}_{\nu}+\partial_{\alpha}\partial_{\nu}h^{\alpha}{}_{\mu}-\Box h_{\mu\nu}-\partial_{\mu}\partial_{\nu}h\right)}\\ {R^{(1)}}&{{}=\partial_{\alpha}\partial_{\beta}h^{\alpha\beta}-\Box h} \end{aligned}
$$
场方程化为
$$
\begin{aligned}{2G_{\mu\nu}^{(1)}}&{{}=\partial_{\alpha}\partial_{\mu}h^{\alpha}{}_{\nu}+\partial_{\alpha}\partial_{\nu}h^{\alpha}{}_{\mu}-\Box h_{\mu\nu}-\partial_{\mu}\partial_{\nu}h}\\ {}&{{}\quad-\eta_{\mu\nu}\left(\partial_{\alpha}\partial_{\beta}h^{\alpha\beta}-\Box h\right)=16\pi G T_{\mu\nu}} \end{aligned}
$$
引入反迹微扰

$$
\bar{h}_{\mu\nu}=h_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}h
$$

在四维时空中， $\bar{h} = \eta^{\mu\nu}\bar{h}_{\mu\nu} = -h$，所以反变换具有同样形式

$$
h_{\mu\nu}=\bar{h}_{\mu\nu}-\frac{1}{2}\eta_{\mu\nu}\bar{h}
$$

场方程变为

$$
-\Box\bar{h}_{\mu\nu}-\eta_{\mu\nu}\partial_{\alpha}\partial_{\beta}\bar{h}^{\alpha\beta}+\partial_{\mu}\partial^{\alpha}\bar{h}_{\alpha\nu}+\partial_{\nu}\partial^{\alpha}\bar{h}_{\alpha\mu}=16\pi G T_{\mu\nu}
$$

#### Lorenz 规范

对于迹反转之后的 EQ，我们利用 Lorenz Gauge 来简化它：作一个保持弱场展开有效的小坐标变换，把  $\xi^{\mu}$ 及其变化都按微扰一阶计
$$
x^{\prime\mu}=x^{\mu}+\xi^{\mu}(x),\qquad\partial_{\nu}\xi^{\mu}=O(h)
$$

张量变换律，在一阶精度下，新的微扰为

$$
h_{\mu\nu}^{\prime}=h_{\mu\nu}-\partial_{\mu}\xi_{\nu}-\partial_{\nu}\xi_{\mu}
$$
因此，在可解相应波动方程的区域内，选择

$$
\Box\xi_{\mu}=\partial^{\nu}\bar{h}_{\mu\nu}
$$

便能施加四个 Lorenz 规范条件

$$
\partial^{\nu}\bar{h}_{\mu\nu}=0
$$
注意：这四个方程并不能完全消去四个自由度！在 Lorenz 规范下场方程变为
\[
\square \bar{h}_{\mu \nu} = - 16 \pi G T_{\mu \nu}
\]
那么这个形式显然有推迟解
$$
\bar{h}_{\mu\nu}(t,x)=4G\int\frac{T_{\mu\nu}(t-|x-x^{\prime}|,x^{\prime})}{|x-x^{\prime}|}\mathrm{d}^{3}x^{\prime}
$$
在远场区展开这个解的形式，如果源是静止的，那么解的形式可以写作
$$
\begin{align*}\mathrm{d}s^{2}=&~-\left(1-\frac{2G M}{r}\right)\mathrm{d}t^{2}-\frac{4G\epsilon_{i j k}J^{j}x^{k}}{r^{3}}\mathrm{d}t\mathrm{d}x^{i}\\&+\left(1+\frac{2G M}{r}\right)\delta_{i j}\mathrm{d}x^{i}\mathrm{d}x^{j}+O(r^{-3})\mathrm{d}x^{\mu}\mathrm{d}x^{\nu}\end{align*}
$$

## 相对论星体

### 星体内部的场方程解

