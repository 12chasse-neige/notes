# General Relativity Homework 3

Chasse_neige

## Problem 1

Following the steps in Wednesday’s class, please derive the Einstein’s field equation of general relativity.

To get the Einstein’s field equation, we’ll need to construct a tensor which contains the second order derivative of the metric tensor. As is proved in the last homework, the Riemann tensor, which has the form
$$
R^{\lambda} {}_{\mu \nu \kappa} = \Gamma^{\lambda} {}_{\mu \nu, \kappa} - \Gamma^{\lambda} {}_{\mu \kappa, \nu} + \Gamma^{\eta} {}_{\mu \nu} \Gamma^{\lambda} {}_{\eta \kappa} - \Gamma^{\eta} {}_{\mu \kappa} \Gamma^{\lambda} {}_{\eta \nu}
$$

is the tensor we can use to build the field equation. To be compatible with the energy momentum tensor (second order), we’ll need to contract the Riemann tensor to get the Ricci tensor, which is defined as
$$
R_{\mu \kappa} = g^{\lambda \nu} R_{\lambda \mu \nu \kappa} = R^{\lambda} {}_{\mu \lambda \kappa} \\ = 
\Gamma^{\lambda} {}_{\mu \lambda, \kappa} - \Gamma^{\lambda} {}_{\mu \kappa, \lambda} + \Gamma^{\eta} {}_{\mu \lambda} \Gamma^{\lambda} {}_{\eta \kappa} - \Gamma^{\eta} {}_{\mu \kappa} \Gamma^{\lambda} {}_{\mu \lambda}
$$
And we continue to contract the Ricci tensor to get the Ricci scalar, which is defined as
$$
R = g^{\mu \kappa} R_{\mu \kappa}
$$
So our second order derivative tensor is combined by the Ricci tensor and the Ricci scalar, which we might as well assume as
$$
G_{\mu \nu} = C_{1} R_{\mu \nu} + C_{2} R g_{\mu \nu}
$$
Notice that the energy momentum is conserved, which means $T^{\mu \nu} {}_{; \mu} = 0$, we can get
$$
G^{\mu \nu}{}_{; \mu} = 0 \Rightarrow C_{1} R^{\mu \nu}{}_{; \mu} + C_{2} g^{\mu \nu} R_{; \mu} = 0
$$
How to derive the relation of $C_{1}$ and $C_{2}$? We can use the Bianchi identity, which is
$$
R_{\lambda \mu \{\nu \kappa; \eta\}} = 0
$$
Contract Bianchi identity, we can get
$$
g^{\lambda \nu} R_{\lambda \mu \{\nu \kappa; \eta\}} = 0  \Rightarrow R_{\mu \kappa; \eta} - R_{\mu \eta; \kappa} + R^{\nu} {}_{\mu \kappa \eta; \nu} = 0
$$
Contract again
$$
g^{\mu \kappa} \left(R_{\mu \kappa; \eta} - R_{\mu \eta; \kappa} + R^{\nu} {}_{\mu \kappa \eta; \nu}\right) = R_{; \eta} - 2 R^{\mu} {}_{\eta ; \mu} = 0
$$
So to be consistent with the conservation of energy momentum, we can get the ratio between the two coefficients, say
$$
C_{1} R^{\mu \nu}{}_{; \mu} + C_{2} g^{\mu \nu} R_{; \mu} = 0 \\
g_{\eta \nu} (C_{1} R^{\mu \nu}{}_{; \mu} + C_{2} g^{\mu \nu} R_{; \mu}) = 0 \Rightarrow
C_{1} R^{\mu} {}_{\eta; \mu} + C_{2} R_{; \eta} = 0
$$
Compare this equation with the result of the Bianchi identity, we can know that
$$
C_{2} = - \frac{1}{2} C_{1}
$$
So the tensor we constructed can be represented as
$$
G_{\mu \nu} = C_{1} \left(R_{\mu \nu} - \frac{1}{2}R g_{\mu \nu}\right)
$$
Now the only barrier between us and the field equation is the coefficient $C_{1}$, whose value can be confirmed through weak field approximation. In the local inertial coordinate system, the Ricci tensor is
$$
R_{\mu \nu} = \Gamma^{\lambda} {}_{\mu \lambda, \nu} - \Gamma^{\lambda} {}_{\mu \nu, \lambda} + \underbrace{\Gamma^{\eta} {}_{\mu \lambda} \Gamma^{\lambda} {}_{\eta \nu} - \Gamma^{\eta} {}_{\mu \nu} \Gamma^{\lambda} {}_{\eta \lambda}}_{=0}
$$

Given the Christoffel symbol
$$
\Gamma^{\lambda} {}_{\mu \lambda} = \frac{1}{2} g^{\lambda \eta} \left(g_{\eta \mu, \lambda} + g_{\eta \lambda, \mu} - g_{\mu \lambda, \eta}\right)
$$

$$
\Gamma^{\lambda} {}_{\mu \nu} = \frac{1}{2} g^{\lambda \eta} \left(g_{\eta \mu, \nu} + g_{\eta \nu, \mu} - g_{\mu \nu, \eta}\right)
$$
So the Ricci tensor can be expressed as, using the metric tensor
$$
R_{\mu \nu} = \Gamma^{\lambda} {}_{\mu \lambda, \nu} - \Gamma^{\lambda} {}_{\mu \nu, \lambda} \\ =
\frac{1}{2} g^{\lambda \eta} \left(g_{\eta \lambda, \mu \nu} + g_{\mu \nu, \eta \lambda} - g_{\mu \lambda, \eta \nu} - g_{\eta \nu, \mu \lambda}\right) 
$$
Under weak field approximation
$$
g_{\mu \nu} = \eta_{\mu \nu} + h_{\mu \nu} \quad (h \ll 1)
$$

$$
R_{\mu \nu} \approx \frac{1}{2} \eta^{\lambda \kappa} (h_{\kappa \lambda, \mu \nu} + h_{\mu \nu, \kappa \lambda} - h_{\mu \lambda, \kappa \nu} - h_{\kappa \nu,\mu \lambda}) \\ =
\frac{1}{2} (h_{, \mu \nu} + \square h_{\mu \nu} - h_{\mu} {}^{\kappa} {}_{, \kappa \nu} - h^{\lambda} {}_{\nu, \mu \lambda})
$$

And the Ricci scalar
$$
R = \square h - h^{\rho \sigma} {}_{, \rho \sigma}
$$
So the $00$ component of our tensor equals (given that the problem is static and under weak field)
$$
R_{00} - \frac{R}{2} g_{00} \approx \frac{1}{2} (\square h_{00} + \square h - h^{\rho \sigma} {}_{, \rho \sigma})
$$
Our assumption is that the metric perturbation for a static, isotropic weak field is
$$
h_{\mu \nu} = \text{diag} (- 2 \Phi, - 2 \Phi, - 2 \Phi, - 2 \Phi)
$$
where $\Phi$ is the Newtonian gravitational potential. Using this metric, we can calculate the trace of the perturbation $h = \eta^{\mu \nu} h_{\mu \nu}$. 

$$
h = (-1)(-2\Phi) + 3(1)(-2\Phi) = -4\Phi = 2h_{00}
$$
Because the field is static, all time derivatives vanish ($\partial_{0} = 0$). Thus, the d'Alembertian $\square$ reduces to the spatial Laplacian $\nabla^{2}$. Moreover, the term $h^{\rho \sigma}{}_{, \rho \sigma}$ simplifies nicely because $h_{ij} = h_{00}\delta_{ij}$ for spatial components
$$
h^{\rho \sigma} {}_{, \rho \sigma} = \partial_{i} \partial_{j} h_{ij} = \sum_{i} \partial_{i}^{2} h_{00} = \nabla^{2} h_{00}
$$

Substitute these relations into the $00$ component of our tensor
$$
G_{00} = R_{00} - \frac{R}{2} g_{00} \approx \frac{1}{2} (\square h_{00} + \square h - h^{\rho \sigma} {}_{, \rho \sigma})
$$
$$
G_{00} = \frac{1}{2} \left( \nabla^{2} h_{00} + \nabla^{2} (2h_{00}) - \nabla^{2} h_{00} \right) = \nabla^{2} h_{00}
$$
Therefore, by defining $C_{1} = 1$ in our constructed geometric tensor $G_{\mu \nu}$, we have successfully derived the Einstein's Field Equation
$$
G_{\mu \nu} = R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu} = - 8 \pi G T_{\mu \nu}
$$


## Problem 2

For an isotropic static system, as shown in Friday’s class, the general form of the metric can be written as
$$
\dd{\tau}^{2} = B(r) \dd{t}^{2} - A(r) \dd{r}^{2} - r^{2} (\dd{\theta}^{2} + \sin^{2} \theta \dd{\phi}^{2})
$$

Please calculate the affine connection $\Gamma^{\lambda} {}_{\mu \nu}$ and the Ricci tensor.

The components of the metric tensors (covariant and contravariant) are
$$
g_{\mu \nu} = \text{diag} (-B, A, r^{2}, r^{2} \sin^{2} \theta) \\
g^{\mu \nu} = \text{diag} (-\frac{1}{B}, \frac{1}{A}, \frac{1}{r^{2}}, \frac{1}{r^{2} \sin^{2} \theta})
$$

### Affine Connection

The affine connection is defined as
$$
\Gamma^{\lambda} {}_{\mu \nu} = \frac{1}{2} g^{\lambda \eta} (g_{\eta \mu, \nu} + g_{\eta \nu, \mu} - g_{\mu \nu, \eta})
$$
Calculate the components of the affine connection, I find that all non-zero componets are
$$
\Gamma^{t} {}_{tr} = \Gamma^{t}_{rt} = \frac{B'}{2B}\\
\Gamma^{r} {}_{tt} = \frac{B'}{2A} \\
\Gamma^{r} {}_{rr} = \frac{A'}{2A} \\
\Gamma^{r} {}_{\theta\theta} = -\frac{r}{A} \\
\Gamma^{r} {}_{\phi\phi} = -\frac{r\sin^{2}\theta}{A} \\
\Gamma^{\theta} {}_{r\theta} = \Gamma^{\theta} {}_{\theta r} = \frac{1}{r} \\
\Gamma^{\theta} {}_{\phi\phi} = -\sin\theta\cos\theta \\
\Gamma^{\phi} {}_{r\phi} = \Gamma^{\phi} {}_{\phi r} = \frac{1}{r} \\
\Gamma^{\phi} {}_{\theta\phi} = \Gamma^{\phi} {}_{\phi\theta} = \cot\theta
$$
where primes denote derivatives with respect to $r$.

### **Ricci Tensor**  

First, we’ll calculate the components of the Riemann tensor
$$
R^{\lambda} {}_{\mu \nu \kappa} = \Gamma^{\lambda} {}_{\mu \nu, \kappa} - \Gamma^{\lambda} {}_{\mu \kappa, \nu} + \Gamma^{\eta} {}_{\mu \nu} \Gamma^{\lambda} {}_{\eta \kappa} - \Gamma^{\eta} {}_{\mu \kappa} \Gamma^{\lambda} {}_{\eta \nu}
$$
So the Ricci tensor is, after contraction
$$
R_{\mu \kappa} = g^{\lambda \nu} R_{\lambda \mu \nu \kappa} = R^{\lambda} {}_{\mu \lambda \kappa} \\ = 
\Gamma^{\lambda} {}_{\mu \lambda, \kappa} - \Gamma^{\lambda} {}_{\mu \kappa, \lambda} + \Gamma^{\eta} {}_{\mu \lambda} \Gamma^{\lambda} {}_{\eta \kappa} - \Gamma^{\eta} {}_{\mu \kappa} \Gamma^{\lambda} {}_{\mu \lambda}
$$
The Ricci tensor is diagnal, because we can consider some transformations, like time inversion and space reflection, under which the transformation rules of the tensor requires the Ricci tensor’s off-diagnal components to be zero. For example, the time inversion transformation $t \to -t$ requires Ricci tensor to transform like
$$
R'_{t' r} = - R_{tr}
$$
But the metric itself doesn't change at all under such inversion, which means that the Ricci tensor (only depends on the metric)
$$
R'_{t' r} = R_{tr}
$$
So we can derive that $R_{tr} = 0$. Similarly, using the transformation of $\phi \to - \phi$ and $\theta \to \pi - \theta$ we can know that the other off-diagnal components of the tensor are also zero.

The diagnal part of the components are as follows (after careful calculation)
$$
R_{tt} = -\frac{B''}{2A} + \frac{B'A'}{4A^{2}} + \frac{(B')^{2}}{4AB} - \frac{B'}{A r} \\
R_{rr} = \frac{B''}{2B} - \frac{(B')^{2}}{4B^{2}} - \frac{A'B'}{4AB} - \frac{A'}{A r} \\
R_{\theta\theta} = - 1 + \frac{1}{A} - \frac{r A'}{2A^{2}} + \frac{r B'}{2AB} \\
R_{\phi\phi} = \sin^{2}\theta \, R_{\theta\theta}
$$
