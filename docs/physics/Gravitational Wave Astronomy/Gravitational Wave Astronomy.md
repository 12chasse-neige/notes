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
如此引入 Riemann 张量，并且和牛顿情形对比可以得到
\[
\pdv{\Phi}{x^{i}}{x^{j}} = R^{i} {}_{0j0}
\]
