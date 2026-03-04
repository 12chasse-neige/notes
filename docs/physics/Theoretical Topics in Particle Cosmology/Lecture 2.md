# Lecture 2

Chasse_neige

## Why Massless Spin-2?

### Classical Field Theory 

First, consider a massless spin-1 particle
\[
\mathcal{L} = -\frac{1}{4} F_{\mu \nu} F^{\mu \nu} - e J_{\mu} A^{\mu}
\]

\[
\partial_{\mu} F^{\mu \nu} = e J^{\nu} \quad \square A^{\mu} = e J^{\mu}
\]

for a static point source 
\[
\begin{cases}
J^{0} = q_{\alpha} \delta^{3} (\vec{x} - \vec{x}_{\alpha}) \\
\vec{J} = 0
\end{cases}
\]
So we can get the form of the vector potential
\[
A^{0} = \frac{- e q_{\alpha}}{4 \pi |\vec{x} - \vec{x}_{\alpha}|}
\]
And the total energy 
\[
E = \int \dd{x} e J_{b \mu} A^{\mu} = \int \dd{x} e (-q_{b} 
\delta^{3} (\vec{x} - \vec{x}_{b})) \left(\frac{- e q_{\alpha}}{4 \pi |\vec{x} - \vec{x}_{\alpha}|}\right) = \frac{\alpha q_{a} q_{b}}{|\vec{x}_{\alpha} - \vec{x}_{b}|}
\]
Then consider a massive spin-0 (scalar field)
\[
\mathcal{L} = - \frac{1}{2} (\partial_{\mu} \phi)^{2} - \frac{1}{2} m^{2} \phi^{2} + g \phi j \leftarrow \text{a scalar source}
\]
and we can get
\[
(\square - m^{2})\phi = -gj \\
j_{\alpha} = q_{\alpha} \delta^{3} (\vec{x} - \vec{x}_{\alpha})
\]
the form of $\phi$ is
\[
\phi = \int \frac{\dd{k}}{(2 \pi)^{3}} \frac{g q_{\alpha}}{k^{2} + m^{2}} e^{i \vec{k} \cdot (\vec{x} - \vec{x}_{\alpha})} = \frac{g q_{\alpha}}{4 \pi} \frac{e^{- m |\vec{x} - \vec{x}_{\alpha}|}}{|\vec{x} - \vec{x}_{\alpha}|}
\]
The total energy 
\[
E = - g \int \dd{x} \phi j_{b} = -\frac{g^{2} q_{a} q_{b}}{4 \pi} \frac{e^{- m |\vec{x} - \vec{x}_{\alpha}|}}{|\vec{x} - \vec{x}_{\alpha}|}
\]

>### Lesson
>
>1. Inverse square law -> massless mediator
>2. Spin-0 mediates attractive force and Spin-1 mediates repulsive force

Gravity could be mediated by a massless spin-0 particle, but under this circumstance light won’t bend.

### Field Theory for Spin-2

We guess
\[
\mathcal{L} \propto - \frac{1}{2} \partial_{\lambda} h_{\mu \nu} \partial^{\lambda} h^{\mu \nu} - \kappa h_{\mu \nu} T^{\mu \nu}
\]
This will lead to
\[
\square h_{\mu \nu} = \kappa T_{\mu \nu}
\]
where a static point particle is defined as
\[
T_{a}^{00} = m_{a} \delta^{3} (\vec{x} - \vec{x}_{a})
\]

\[
h_{00} = - \frac{\kappa m_{a}}{4 \pi |\vec{x} - \vec{x}_{a}|}
\]

and the total energy
\[
E = \kappa \int \dd{x} h_{00} T_{b}^{00} = - \frac{\kappa^{2}}{4 \pi} \frac{m_{a} m_{b}}{|\vec{x} - \vec{x}_{a}|}
\]

## Massless Spinning Particles are peculiar! 

### Polarizations of the photon

for $\vec{k} = (0,0,k)$, we describe the polarization using the vector
\[
e_{x} = (1,0,0) \\
e_{y} = (0,1,0)
\]
or using the circular polarization
\[
e_{\pm} = \frac{1}{\sqrt{2}} (e_{x} \pm i e_{y})
\]


for arbitrary momentum $\vec{p}$
\[
e_{\pm} (\vec{p}) \equiv R_{z} (\phi) R_{y} (\theta) e_{\pm}(\vec{k})
\]
is a SO(3) vector. But it is impossible to imbed $e_{\pm}$ into a Lorentz vector. (see the deduction from Feynman Lectures on Physics (3))

Guess
\[
e_{\pm}^{\mu} (k) = \frac{1}{\sqrt{2}} (0,1,\pm i, 0)^{T}
\]
and we’ll get
\[
R_{y}^{-1}(\theta) L_{x} (\eta_{2}) L_{z} (\eta_{1}) e_{\pm}^{\mu} (k) = e_{\pm}^{\mu}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} k^{\mu}
\]
So $e_{\pm}^{\mu}$ is a L-vec only up to an additive term $\propto k^{\mu}$.

3 types of L-trans will leave $k^{\mu}$ inv.

1. Rotation around $k$: $R_{z} (\theta)$
2. R $\times$ L-type L-trans: $R_{y}^{-1} L_{x} L_{z}$
3. R $\times$ L-type L-trans with $x \to y \quad y \to -x$: $R_{x}^{-1} L_{y} L_{z}$

we call them LGT (little group transformation, ISO(2)). The generators of the LGT’s commutations are
\[
\comm{R_{z}}{T_{x}} = i T_{y} \\
\comm{R_{z}}{T_{y}} = -i T_{x} \\
\comm{T_{x}}{T_{y}} = 0
\]
Polarization is a representation of not LGT, but SO(2).

The charge of SO(2) is called helicity: $R_{z} (\theta) X = e^{- i h \theta} X$, so the nonlinear term is price we have to pay for embedding $h = \pm 1$ into “$e_{\pm}^{\mu}$”. 

The transformation $e \to e + \alpha k$ is traditionally called a gauge transformation. Gauge inv, is enforced by L-symmetry.

### Graviton: Spin-2

Assume the momentum $k = (k,0,0,k)$, and the polarization tensor is defined
\[
e_{\mu \nu}^{\pm} (k) = e_{\mu}^{\pm} (k) e^{\pm}_{\nu} (k) = \frac{1}{2} \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 1 & \pm i & 0 \\
0 & \pm i & -1 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix}
\]
for transformations within LGT, the polarization tensor will act as
\[
e^{\mu \nu}_{\pm} (k) \to e_{\pm}^{\mu \nu} (k) + \frac{\tan \theta}{\sqrt{2} k^{0}} \left[e^{\mu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} k^{\mu}\right] k^{\nu} + \mu \leftrightarrow \nu
\]

\[
e^{\mu \nu}_{\pm} (k) \to e^{\mu \nu}_{\pm} (k) + \xi^{\mu} k^{\nu} + \xi^{\nu} k^{\mu}
\]

### Spin-3 Particles

The polarization tensor $e^{\mu \nu \lambda}_{\pm}$ under LGT will be
\[
e_{\pm}^{\mu \nu \lambda} (k) \to e_{\pm}^{\mu \nu \lambda} (k) + \xi^{\mu \nu} k^{\lambda} + \cdots
\]

## Summary

Polarization tensors are up to LGT $\sub$  L-transf.