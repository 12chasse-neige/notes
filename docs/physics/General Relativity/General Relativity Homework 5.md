# General Relativity Homework 5

Chasse_neige

## Problem 1

Please calculate the connection and the Ricci tensor for the metric
$$
\dd{\tau^{2}} = B(t, r) \dd{t}^{2} - A(t, r) \dd{r}^{2} - r^{2} \dd{\Omega^{2}}
$$
For this time-relevant metric
$$
g_{\mu \nu} = \begin{pmatrix} -B, A, r^{2}, r^{2} \sin^{2} \theta \end{pmatrix}
$$
First we derive the Christoffel symbol
$$
\Gamma^{\lambda} {}_{\mu \nu} = g^{\lambda \eta} (g_{\eta \mu, \nu} + g_{\eta \nu, \mu} - g_{\mu \nu, \eta})
$$

Calculate the components, we can find all nonzero terms are
$$
\Gamma^{t} {}_{tr} = \Gamma^{t} {}_{rt} = \frac{B'}{2B}\\
\Gamma^{r} {}_{tt} = \frac{B'}{2A} \\
\Gamma^{r} {}_{rr} = \frac{A'}{2A} \\
\Gamma^{t} {}_{tt} = \frac{\dot{B}}{2B} \\
\Gamma^{t} {}_{rr} = \frac{\dot{A}}{2B} 
$$
$$
\Gamma^{r} {}_{tr} = \Gamma^{r} {}_{rt} = \frac{\dot{A}}{2A} \\
\Gamma^{r} {}_{\theta\theta} = -\frac{r}{A} \\
\Gamma^{r} {}_{\phi\phi} = -\frac{r\sin^{2}\theta}{A} \\
\Gamma^{\theta} {}_{r\theta} = \Gamma^{\theta} {}_{\theta r} = \frac{1}{r} \\
\Gamma^{\theta} {}_{\phi\phi} = -\sin\theta\cos\theta \\
\Gamma^{\phi} {}_{r\phi} = \Gamma^{\phi} {}_{\phi r} = \frac{1}{r} \\
\Gamma^{\phi} {}_{\theta\phi} = \Gamma^{\phi} {}_{\phi\theta} = \cot\theta
$$

where prime means derivative of the space direction while dot means derivative of the time direction.

Calculate Ricci tensors using the definition
$$
R_{\mu \kappa} = g^{\lambda \nu} R_{\lambda \mu \nu \kappa} = R^{\lambda} {}_{\mu \lambda \kappa} \\ = 
\Gamma^{\lambda} {}_{\mu \lambda, \kappa} - \Gamma^{\lambda} {}_{\mu \kappa, \lambda} + \Gamma^{\eta} {}_{\mu \lambda} \Gamma^{\lambda} {}_{\eta \kappa} - \Gamma^{\eta} {}_{\mu \kappa} \Gamma^{\lambda} {}_{\eta \lambda}
$$

And we can get all nonzero components

$$
R_{tt} = \frac{\ddot{A}}{2A} - \frac{\dot{A}^{2}}{4A^{2}} - \frac{\dot{A}\dot{B}}{4AB} - \frac{B''}{2A} + \frac{B'}{4A} \left( \frac{A'}{A} + \frac{B'}{B} \right) - \frac{B'}{rA}  \\
R_{tr} = - \frac{\dot{A}}{rA} \\
R_{rr} = -\frac{\ddot{A}}{2B} + \frac{\dot{A}}{4B} \left( \frac{\dot{A}}{A} + \frac{\dot{B}}{B} \right) + \frac{B''}{2B} - \frac{B'}{4B} \left( \frac{A'}{A} + \frac{B'}{B} \right) - \frac{A'}{rA}  \\
R_{\theta\theta} = - 1 + \frac{1}{A} - \frac{r}{2A}\left( \frac{A'}{A} - \frac{B'}{B} \right) \\
R_{\phi\phi} = \sin^{2}\theta \, R_{\theta\theta}
$$


## Problem 2 

Please derive the energy-momentum tensor for electromagnetic field.

We use the variation of the action to get the form for the energy-momentum tensor
$$
T^{\mu \nu} = \frac{2}{\sqrt{-g}} \frac{\delta S}{\delta g_{\mu \nu}}
$$
Plugging in the action of the EM field
$$
S = - \frac{1}{4} \int \dd[4]{x} \sqrt{-g} F^{\mu \nu} F_{\mu \nu}
$$
and do the variation
$$
\delta S = - \frac{1}{4} \int \dd[4]{x} F_{\alpha \beta} F_{\mu \nu} \delta (\sqrt{- g} g^{\mu \alpha} g^{\nu \beta}) \\ =
- \frac{1}{4} \int \dd[4]{x} F_{\alpha \beta} F_{\mu \nu} (g^{\mu \alpha} g^{\nu \beta} \cdot \frac{1}{2} \sqrt{- g} g^{\rho \sigma} \delta g_{\rho \sigma} - \sqrt{- g} g^{\nu \beta} g^{\sigma \alpha} g^{\mu \rho} \delta g_{\rho \sigma} - \sqrt{- g} g^{\mu \alpha} g^{\nu \rho} g^{\sigma \beta} \delta g_{\rho \sigma})
$$
So the energy-momentum tensor density is
$$
T^{\rho \sigma} = \frac{2}{\sqrt{-g}} \cdot \left(- \frac{1}{4} F_{\alpha \beta} F_{\mu \nu} (g^{\mu \alpha} g^{\nu \beta} \cdot \frac{1}{2} \sqrt{- g} g g^{\rho \sigma} - \sqrt{- g} g^{\nu \beta} g^{\sigma \alpha} g^{\mu \rho} - \sqrt{- g} g^{\mu \alpha} g^{\nu \rho} g^{\sigma \beta}\right) \\ =
F^{\rho \beta} F^{\sigma} {}_{\beta} - \frac{1}{4} g^{\rho \sigma} F^{\mu \nu} F_{\mu \nu}
$$





