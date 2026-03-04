# Lecture 2 Exercise

Zhong-Zhi Xianyu

Department of Physics, Tsinghua University, Beijing 100084, China

## §1  Why massless spin-2?

The key starting point of our discussion will be that the gravitation is mediated by a massless spin-2 particle, called graviton. From this, we will show that the form of the gravitation is (almost) uniquely fixed by Lorentz invariance plus a few fundamental requirements.

But first, why massless spin-2?  Let us motivate it, very informally, in the context of classical field theory.

To set the stage,  let us consider first a massless spin-1 field (EM field) and how it leads to Coulomb potential.

$$
\mathcal{L} = -\frac{1}{4} F_{\mu\nu} F^{\mu\nu} - e j^{\mu} A_{\nu} \rightarrow \partial_{\mu} F^{\mu\nu} = e j^{\nu} \quad \partial_{\mu} A^{\mu} = 0 \quad \text{---} \rightarrow \quad \Box A^{\nu} = e j^{\nu}. \tag{1}
$$

Here we take the Lorenz gauge.  Now, consider a static point source and we look for a static solution of $A_{\mu}$:

$$
j^{0}_{a} = q_{a} \delta^{(3)}(\vec{x} - \vec{x}_{a}), \quad \vec{j}_{a} = \vec{0}, \tag{2}
$$

$$
\Rightarrow \nabla^{2} A^{0} = e j^{0}_{a} \quad \Rightarrow \quad A^{0} = \frac{-e q_{a}}{4\pi |\vec{x} - \vec{x}_{a}|}. \quad \leftarrow \text{The sign has no absolute meaning.} \tag{3}
$$

Important is the energy between two static sources:

$$
j^{0}_{a} = q_{a} \delta^{(3)}(\vec{x} - \vec{x}_{a}) \quad \text{and} \quad j^{0}_{b} = \delta^{(3)}(\vec{x} - \vec{x}_{b}), \tag{4}
$$

$$
E = + \int d^{3}\vec{x} \, e j_{b\mu} A^{\mu}_{a} = \int d^{3}\vec{x} \left[ -e q_{b} \delta^{(3)}(\vec{x} - \vec{x}_{b}) \right] \left[ -\frac{e q_{a}}{4\pi |\vec{x} - \vec{x}_{a}|} \right] = \frac{\alpha q_{a} q_{b}}{|\vec{x}_{a} - \vec{x}_{b}|} \quad \Rightarrow \quad \text{Like charges repel.} \tag{5}
$$

$$
\alpha \equiv \frac{e^{2}}{4\pi}. \tag{5}
$$

Next, consider a massive scalar:

$$
L = -\frac{1}{2} (\partial \phi)^{2} - \frac{1}{2} m^{2} \phi^{2} + g \phi j, \quad \leftarrow \text{a scalar source} \tag{6}
$$

$$
\Rightarrow (\Box - m^{2}) \phi = -g j, \quad \text{Let} j_{a}(t,\vec{x}) = q_{a} \delta^{(3)}(\vec{x} - \vec{x}_{a}) \tag{7}
$$

$$
\Rightarrow \phi = \int \frac{d^{3}\vec{k}}{(2\pi)^{3}} \frac{g q_{a}}{k^{2} + m^{2}} e^{+i \vec{k} \cdot (\vec{x} - \vec{x}_{a})} = \frac{g q_{a}}{4\pi} \frac{e^{-m |\vec{x} - \vec{x}_{a}|}}{|\vec{x} - \vec{x}_{a}|}, \tag{8}
$$

$$
\Rightarrow E = -g \int d^{3}\vec{x} \, \phi j_{b} = -g \int d^{3}\vec{x} \left[ \frac{g q_{a}}{4\pi} \frac{e^{-m |\vec{x} - \vec{x}_{a}|}}{|\vec{x} - \vec{x}_{a}|} \right] q_{b} \delta^{(3)}(\vec{x} - \vec{x}_{b}) = -\frac{g^{2} q_{a} q_{b}}{4\pi} \frac{e^{m |\vec{x}_{a} - \vec{x}_{b}|}}{|\vec{x}_{a} - \vec{x}_{b}|}. \quad \leftarrow \text{Yukawa potential, like charge attracts.} \tag{9}
$$

- Lesson 1:  Inverse-square law $\Rightarrow$ massless mediator.

- Lesson2: spin-0 / spin-1 mediates (attractive / repulsive force) force between like charges.

$\Rightarrow$ Gravity could be mediated by a massless spin-0 (scalar) field if we only care about Newton’s law.

However, spin-0 is excluded by light bending:  Equivalence principle would require that the gravity mediator talks to $T_{\mu\nu}$.  For a scalar, the only Lorentz invariant way is to let the source be $j = T^{\mu}_{\mu}$.  However, $T^{\mu}_{\mu} = 0$ for light.

$\Rightarrow$ Scalar force obeying the equivalence principle cannot bend light.

$\Rightarrow$ Neither spin-0 nor spin-1 works.

Spin-2 actually works!  — You may not have much prior knowledge about spin-2, so let’s guess an equation of motion for a massless spin-2 field $h_{\mu\nu}$.

$$
L \supset -\frac{1}{2} \partial_{\lambda} h_{\mu\nu} \partial^{\lambda} h^{\mu\nu} - \kappa h_{\mu\nu} T^{\mu\nu}, \tag{10}
$$

$$
\Rightarrow \Box h_{\mu\nu} = \kappa T_{\mu\nu}. \tag{11}
$$

The source is taken to be proportional to the energy-momentum tensor $T_{\mu\nu}$ to accommodate the equivalence principle, but it is not entirely correct.  (The more correct one is $T_{\mu\nu} - \frac{1}{2} \eta_{\mu\nu} T^{\lambda}_{\lambda}$) but we will ignore this nuance for the moment.  Again, the sign of $\kappa$ is irrelevant here.

Now, taking again a static source:

$$
(T_{a})^{00} = m_{a} \delta^{(3)}(\vec{x} - \vec{x}_{a}), \quad \Rightarrow \quad h_{00} = - \int \frac{\kappa m_{a}}{k^{2}} e^{+i \vec{k} \cdot \vec{x}} \frac{d^{3}\vec{k}}{(2\pi)^{3}} = -\frac{\kappa m_{a}}{4\pi |\vec{x} - \vec{x}_{a}|}, \tag{12}
$$

$$
\Rightarrow E = +\kappa \int d^{3}\vec{x} \, h_{00} T^{00}_{b} = +\kappa \int d^{3}\vec{x} \left[ -\frac{\kappa m_{a}}{4\pi |\vec{x} - \vec{x}_{a}|} \right] \left[ m_{b} \delta^{(3)}(\vec{x} - \vec{x}_{b}) \right] = -\frac{\kappa^{2}}{4\pi} \frac{m_{a} m_{b}}{|\vec{x}_{a} - \vec{x}_{b}|}. \quad \leftarrow \text{Newton's law!} \tag{13}
$$

So, massless spin-2 is at least a possible starting point, which we will take for granted in the rest of this course.

## §2  Polarizations of Massless Spinning Particles

Let’s turn the whole machinery backward from now on and take massless spin-2 as our starting point.

The first thing we need to appreciate is that massless spinning particles are very peculiar!

**Photon** To see this, consider the photon as a warm-up example.  We all know that a photon of definite momentum $\vec{p}$ has 2 independent polarization states, described by 2 polarization vectors.

Let

$$
\vec{p} = \begin{pmatrix} 0 \\ 0 \\ p \end{pmatrix}. \tag{14}
$$

Then,

$$
\vec{e}_{x}(\vec{p}) = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \quad \text{and} \quad \vec{e}_{y}(\vec{p}) = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}. \tag{15}
$$

We can also work with circular polarization vectors:

$$
\vec{e}_{\pm} = \frac{1}{\sqrt{2}} (\vec{e}_{x} \pm i \vec{e}_{y}), \tag{16}
$$

which are $R_{z}(\theta)$ (rotation along $z$-axis by $\theta$) eigenstates:

$$
R_{z}(\theta) \vec{e}_{\pm} = e^{\mp i \theta} \vec{e}_{\pm}. \tag{17}
$$

Now the question:  for arbitrary $\vec{p} = p (\sin \theta \cos \varphi, \sin \theta \sin \varphi, \cos \varphi)$, how to find $\vec{e}_{\pm}(\vec{p})$?

Observation: $\vec{e}_{\pm}(\vec{p})$ depends only on $\hat{p}$, not $|\vec{p}|$.  So, for an arbitrary $\vec{p}$, we just rotate $\hat{k} = (0,0,1)^{T}$ to $\hat{p}$:

$$
\hat{p} = R_{z}(\varphi) R_{y}(\theta) \hat{k}. \tag{18}
$$

Then, we can define

$$
\vec{e}_{\pm}(\hat{p}) \equiv R_{z}(\varphi) R_{y}(\theta) \vec{e}_{\pm}(\hat{k}). \tag{19}
$$

So, SO(3) rotation is enough to specify polarization vectors for photon with all possible 3-momentum, $\vec{e}_{\pm}$ is uniquely defined in this way and is an SO(3)-vector.

However, it is impossible to promote the above 3-vector $\vec{e}_{\pm}$ into a Lorentz vector.  The problem is:  when including boosts, there are more than one way to connect $\hat{k}$ to $\hat{p}$.  Different ways give different polarization vectors.  Let’s work it out.

First, the “reference momentum” $k$ is now promoted to a null 4-vector, and so is an arbitrary null 4-vector $p$:

$$
k^{\mu} = (k,0,0,k)^{T}, \quad p^{\mu} = p (1, \sin \theta \cos \varphi, \sin \theta \sin \varphi, \cos \varphi)^{T}. \tag{20}
$$

Now, we have more than one way to connect $k$ to $p$ by Lorentz transforms:

First, we can still just do a 3-rotation:

$$
p^{\mu} = R_{y}(\theta) k^{\mu}. \tag{21}
$$

However, we have a second option (In fact, infinitely many options):

$$
p^{\mu} = L_{x}(\eta_{2}) L_{z}(\eta_{1}) k^{\mu}, \quad \text{with} \quad \eta_{1} = \log(\cos \theta), \quad \eta_{2} = \text{arcsinh}(\tan \theta). \tag{22}
$$

Then, we would guess a polarization 4-vector for $k^{\mu}$ to be:

$$
e^{\mu}_{\pm}(k) = \frac{1}{\sqrt{2}} \begin{pmatrix} 0 \\ 1 \\ \pm i \\ 0 \end{pmatrix}. \tag{23}
$$

However,

$$
e^{\mu}_{\pm}(p)|_{R} \equiv R_{y}(\theta) e^{\mu}_{\pm}(k), \quad e^{\mu}_{\pm}(p)|_{B} \equiv L_{x}(\eta_{2}) L_{z}(\eta_{1}) e^{\mu}_{\pm}(k) \tag{24}
$$

are not equal.

If they equal, then

$$
R_{y}^{-1}(\theta) L_{x}(\eta_{2}) L_{z}(\eta_{1}) e^{\mu}_{\pm}(k) \overset{?}{=} e^{\mu}_{\pm}(k). \tag{25}
$$

But a direct calculation gives:

$$
R_{y}^{-1}(\theta) L_{x}(\eta_{2}) L_{z}(\eta_{1}) e^{\mu}_{\pm}(k) = e^{\mu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} k^{\mu}. \tag{26}
$$

Since $-\pi < \theta < \pi$, $\tan \theta$ fills entire $\mathbb{R}$ $\Rightarrow$ $e^{\mu}_{\pm}$ is a Lorentz vector only up to an additive term $\propto k^{\mu}$ with arbitrary real coefficient.

### Summary

We have found two types of Lorentz transform leaving $k^{\mu}$ invariant:

1)  Rotation around $\hat{k}$: $R_{z}(\theta)$ — $e^{\mu}_{\pm}$ transform nicely as eigenstates.

2) $R \times L$-type transform: $R_{y}^{-1}(\theta) L_{x}(\text{arcsinh}(\tan \theta)) L_{z}(\log(\cos \theta))$ also another independent one by $y \rightarrow -x$, $x \rightarrow y$: $R_{x}^{-1}(-\theta) L_{y}(\text{arcsinh}(\tan \theta)) L_{z}(\log(\cos \theta))$ — $e^{\mu}_{\pm}$ transforms badly.

These are all independent Lorentz transforms leaving $k^{\mu}$ invariant and are called **little group transforms** (LGTs).

What are they? $R_{z}(\theta)$ is clearly an SO(2) generator; For 2 $R \times L$-type transform, taking $\theta \rightarrow 0$ we get generators:

$$
R_{z}(\theta) = 1 - i \theta \underbrace{\begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & i & 0 \\ 0 & -i & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}}_{J_{z}}, \quad R_{y}^{-1} L_{x} L_{z} = 1 - i \theta \underbrace{\begin{pmatrix} 0 & i & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & 0 & 0 \\ 0 & i & 0 & 0 \end{pmatrix}}_{T_{x}}, \tag{27}
$$

$$
R_{x}^{-1} L_{y} L_{z} = 1 - i \theta \underbrace{\begin{pmatrix} 0 & 0 & i & 0 \\ 0 & 0 & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & i & 0 \end{pmatrix}}_{T_{y}}. \tag{28}
$$

$$
\Rightarrow [J_{z}, T_{x}] = i T_{y}, \quad [J_{z}, T_{y}] = -i T_{x}, \quad [T_{x}, T_{y}] = 0. \tag{29}
$$

The little group is ISO(2).

A peculiar fact about photon (and other massless spinning particles) is that their polarization states only represent SO(2) part; they transform trivially under $T_{x,y}$.

The charge of SO(2) is called helicity:
$$
R_{z}(\theta) X = e^{-i \theta h} X. \tag{30}
$$

So photons have helicities $\pm 1$.

So, the term $\propto \frac{\tan \theta}{\sqrt{2} k^{0}} k^{\mu}$ is the price we have to pay for embedding a pair of helicity $\pm 1$ states into $e^{\mu}_{\pm}$.

The transform $e^{\mu}_{\pm} \rightarrow e^{\mu}_{\pm} + \alpha k^{\mu}$ is traditionally called a gauge transform — It’s really just a subset of LGTs of $e^{\mu}_{\pm}$.

The gauge invariance is enforced by Lorentz symmetry.

**Consequence:**  For any genuine Lorentz vector $M^{\mu}$, $e^{\mu} M_{\mu}$ is Lorentz invariant if $k^{\mu} M_{\mu} = 0$. (sufficient, but necessary?)

When $M^{\mu}$ is an amplitude of emitting a photon field $A^{\mu}$, $k^{\mu} M_{\mu} = 0$ is called the Ward identity.

**Graviton** Now the graviton (massless spin-2):  it still has only two helicity states with $h = \pm 2$. We can embed them into a rank-2 “tensor”.  For $k^{\mu} = (k,0,0,k)^{T}$,
$$
R_{z}(\theta) e^{\mu\nu}(k) = e^{\mp 2 i \theta} e^{\mu\nu}(k). \tag{31}
$$

Simple guess:

$$
e^{\mu\nu}_{\pm}(k) = e^{\mu}_{\pm}(k) e^{\nu}_{\pm}(k) = \frac{1}{2} \begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 1 & \pm i & 0 \\ 0 & \pm i & -1 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}. \tag{32}
$$

### “photon” polarization

The polarization tensor $e^{\mu\nu}_{\pm}$ is symmetric, traceless, and transverse.  Once again, $e^{\mu\nu}_{\pm}$ is not a Lorentz tensor.  Under the two “Abelian” LGTs:

$$
e^{\mu\nu}_{\pm}(k) \rightarrow e^{\mu\nu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} \left[ e^{\mu}_{\pm}(k) + \frac{\tan \theta}{2\sqrt{2} k^{0}} k^{\mu} \right] k^{\nu} + (\mu \leftrightarrow \nu). \tag{33}
$$

The LGTs give rise to gauge transform.

Unlike the photon, the gauge transform of a graviton polarization $e^{\mu\nu}_{\pm}$ involves a “vector” $\xi^{\mu} = e^{\mu}_{\pm} + \alpha k^{\mu}$ which satisfies $\xi \cdot k = 0$.

Note that the LGTs (or gauge transforms) preserve the symmetric, transverse, and traceless properties of $e^{\mu\nu}_{\pm}$.

Then, $e^{\mu\nu} M_{\mu\nu}$ will be Lorentz invariant if $M_{\mu\nu}$ satisfies $k^{\mu} M_{\mu\nu} = 0$.  This is the consequence of the gauge invariance of amplitudes involving massless spin-2.

The above discussion generalizes to higher spins.  For example, massless spin-3 is represented by a rank-3 tensor $e^{\mu\nu\lambda}_{\pm}$ which is symmetric, transverse, and traceless.  Under LGTs,

$$
e^{\mu\nu\lambda}_{\pm} \rightarrow \begin{cases} e^{\mp 3 i \theta} e^{\mu\nu\lambda}_{\pm}, & R, \\ e^{\mu\nu\lambda}_{\pm} + (\xi^{\mu\nu} k^{\lambda} + \text{perms}), & T, \end{cases} \tag{34}
$$

with $\xi^{\mu\nu}$ a symmetric, transverse, and traceless coefficient.

### Summary

The polarization tensor of a massless spinning boson cannot be Lorentz tensors. They are at best Lorentz tensors up to nonlinear LGTs (gauge transform).

This has consequences when introducing interactions. We have two options in how to construct consistent interactions of massless spinning particles:

1)  Either, we use polarization tensors to construct (gauge dependent) canonical fields and use fields to construct local interactions (QFT). — Nontrivial to satisfy gauge invariance + Lots of redundancies.

2)  Or, we directly construct scattering amplitudes from symmetries and other basic principles (unitarity, locality, causality).  — We follow this approach in the future lectures.

## References

[1]  A. Zee, *Quantum Field Theory in a Nutshell: Second Edition*. Princeton University Press, 2, 2010.

[2]  R. P. Feynman, *Feynman lectures on gravitation*. 1996.

[3]  S. Weinberg, *The Quantum theory of fields. Vol. 1: Foundations*. Cambridge University Press, 6, 2005.

[4]  M. D. Schwartz, *Quantum Field Theory and the Standard Model*. Cambridge University Press, 3, 2014.

## Exercise

(1) Please finish the integral:

$$
\int \frac{d^{3}\vec{k}}{(2\pi)^{3}} \frac{e^{+i \vec{k} \cdot \vec{x}}}{\vec{k}^{2} + m^{2}} \tag{35}
$$

The integral equals
$$
\int \frac{d^{3}\vec{k}}{(2\pi)^{3}} \frac{e^{+i \vec{k} \cdot \vec{x}}}{\vec{k}^{2} + m^{2}} = \frac{1}{(2 \pi)^{2}} \int \frac{k^{2} \dd{k}}{k^{2} + m^{2}} \int \sin \theta \dd{\theta} e^{i k x \cos \theta} = \frac{1}{(2 \pi)^{2} x} \int_{0}^{\infty} \frac{2u \sin u \dd{u}}{u^{2} + m^{2} x^{2}}
$$
We’ll use the residue theorem to treat wirth the radial part
$$
\frac{1}{(2 \pi)^{2}x} \int_{0}^{\infty} \frac{2u \sin u \dd{u}}{u^{2} + m^{2} x^{2}} = \frac{1}{(2 \pi)^{2} x} \int_{- \infty}^{\infty} \frac{1}{2 i} \frac{2u e^{iu} \dd{u}}{u^{2} + m^{2} x^{2}} = \frac{1}{2 \pi x} \Res[\frac{u e^{iu}}{u^{2} + m^{2} x^{2}}, u = imx] = \frac{e^{- mx}}{4 \pi x}
$$
(2) Starting from the action of the photon field (without source), please derive its gauge invariant energy-momentum tensor $T_{\mu\nu}$ and show that it is traceless.

The Lagrangian of the photon field is
$$
\mathcal{L} = -\frac{1}{4} F_{\mu\nu} F^{\mu\nu}
$$
And the energy-momentum tensor is defined as
$$

$$


(3) Please derive (26).



(4) Please prove (29).



(5) Please derive (33).

