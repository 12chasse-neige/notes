# General Relativity Homework 1

Chasse_neige

## Problem 1

The energy-momentum tensor is defined as
$$
T^{\alpha\beta} = \sum_{n} p^{\alpha}_{n} \dv{x^{\beta}}{t} \delta^{3}(x - x_{n}(t))
$$

where $x_{n}(t)$ and $p^{\alpha}_{n}(t)$ are the position and four-momentum of the $n$-th particle at the time $t$. Please show that $T^{\alpha\beta}$ is a tensor under the Lorentz transformation.

$T^{\alpha \beta}$ is a tensor is equivalent to $\dv{x^{\beta}}{t} \delta^{3}(x - x_{n}(t))$ is a vector, which I’ll prove here:

When transfering from frame $S$ to $S'$, this part becomes
$$
\dv{x'^{\beta}}{t'} \delta^{3}(x' - x'_{n} (t'))
$$
Try to expand the 3-dim delta function into 4-dim
$$
\delta^{4} (x - x_{n}(\tau)) = \delta (t - t_{n} (\tau)) \cdot \delta^{3}(x - x_{n} (\tau))
$$
where $\tau$ is the proper time for the n’th particle. Using the properties of the delta function
$$
\delta (t - t_{n} (\tau)) = \frac{\delta (\tau)}{\left|\dv{(t - t_{n} (\tau))}{\tau}\right|} = \frac{\delta (\tau)}{\left|\dv{t_{n}}{\tau}\right|}
$$
Therefore, we can deduce that
$$
\dv{x^{\beta}}{t} \delta^{3}(x - x_{n}(t)) = \dv{x^{\beta}}{t} \int\dd{\tau} \delta^{4} (x - x_{n} (\tau)) \left|\dv{t_{n}}{\tau}\right| = \dv{x^{\beta}}{\tau} \int \dd{\tau} \delta^{4} (x - x_{n} (\tau))
$$


So we can see that $\dv{x^{\beta}}{\tau} = u^{\beta}$ is a vector and $\int \dd{\tau} \delta^{4} (x - x_{n} (\tau))$ is a scalar, which means $\dv{x^{\beta}}{t} \delta^{3}(x - x_{n}(t))$ is a vector and $T^{\alpha \beta}$ is a tensor.

## Problem 2

We use $\xi^{\alpha}$ to denote an inertial coordinate system in which a massive particle moves freely. In these coordinates the equation of motion is
$$
\dv[2]{\xi^{\alpha}}{\tau} = 0
$$

We now describe the same motion using a general coordinate system $x^{\mu}$. Then, we have

$$
0 = \dv[2]{\xi^{\alpha}}{\tau} = \dv{}{\tau} \left(\pdv{\xi^{\alpha}}{x^{\mu}} \dv{x^{\mu}}{\tau}\right)
$$

Please finish the calculation and show that in the general coordinate system,

$$
\dv[2]{x^{\mu}}{\tau} + \Gamma^{\mu} {}_{\rho \sigma} \dv{x^{\rho}}{\tau} \dv{x^{\sigma}}{\tau} = 0
$$

where the connection $\Gamma$ is defined as

$$
\Gamma^{\mu} {}_{\rho\sigma} = \frac{\partial x^{\mu}}{\partial \xi^{\alpha}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\rho} \partial x^{\sigma}}
$$

(Please note that in the class the definition of $\Gamma$ missed a minus sign.)

Expanding the formula
$$
0 = \dv[2]{\xi^{\alpha}}{\tau} = \dv{}{\tau} \left(\pdv{\xi^{\alpha}}{x^{\mu}} \dv{x^{\mu}}{\tau}\right) = \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\rho} \partial x^{\sigma}} \dv{x^{\rho}}{\tau} \dv{x^{\sigma}}{\tau} + \pdv{\xi^{\alpha}}{x^{\lambda}} \dv[2]{x^{\lambda}}{\tau}
$$
So
$$
\pdv{x^{\mu}}{\xi^{\alpha}} \pdv{\xi^{\alpha}}{x^{\lambda}} \dv[2]{x^{\lambda}}{\tau} + \pdv{x^{\mu}}{\xi^{\alpha}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\rho} \partial x^{\sigma}} \dv{x^{\rho}}{\tau} \dv{x^{\sigma}}{\tau} = 0
$$
Given that
$$
\pdv{x^{\mu}}{\xi^{\alpha}} \pdv{\xi^{\alpha}}{x^{\lambda}} = \delta^{\mu}_{\lambda}
$$
Therefore
$$
\dv[2]{x^{\mu}}{\tau} + \Gamma^{\mu} {}_{\rho \sigma} \dv{x^{\rho}}{\tau} \dv{x^{\sigma}}{\tau} = 0
$$
where $\Gamma^{\mu} {}_{\rho\sigma} = \frac{\partial x^{\mu}}{\partial \xi^{\alpha}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\rho} \partial x^{\sigma}}$.