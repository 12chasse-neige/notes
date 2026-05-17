# General Relativity Homework 6

吴桐 2024012555

## Problem 1 

Please work out the range of angular velocity $\Omega_{\text{obs}}$ allowed an observer inside the ergosphere who remains at a fixed value of $r$. Show that this range becomes increasingly limited as the observer is located closer to the horizon and is eventually limited to the single value $\Omega_{H}$.

Use the Kerr metric. Here $M$ is the physical mass of the black hole, while $a= \frac{J}{M}$ is the Kerr spin parameter. Since we take $c=1$ but not $G=1$, $GM$ carries the dimension of length. We define
$$
\rho^{2} = r^{2} + a^{2} \cos^{2}\theta
$$

$$
\Delta = r^{2} - 2GMr + a^{2}
$$

Then the relevant components of the Kerr metric are (we assume that $\theta = \frac{\pi}{2}$)
$$
g_{tt} = -\left(1 - \frac{2GM}{r}\right)
$$

$$
g_{t\phi} = - \frac{2GMa}{r}
$$

$$
g_{\phi\phi} = r^{2} + a^{2} + \frac{2GMa^{2}}{r}
$$

Consider an observer who stays at fixed $r$ and $\theta$, but is allowed to rotate in the $\phi$ direction. Its four-velocity can be written as
$$
u^{\mu} = u^{t} (1, 0, 0, \Omega_{\text{obs}})
$$

where
$$
\Omega_{\text{obs}} = \dv{\phi}{t} = \frac{E \frac{2 GM a}{r} + L (1 - \frac{2GM}{r})}{E (r^{2} + a^{2} + \frac{2 GM a^{2}}{r}) - L \frac{2 GM a}{r}}
$$

and the circular motion requires the observer’s energy and angular momentum constrained by
$$
(E^{2} - 1) (r^{2} + a^{2}) + (a E - L)^{2} \frac{2 GM}{r} + 2GMr - L^{2} = 0
$$
For this worldline to be timelike, we need
$$
g_{\mu\nu} u^{\mu}u^{\nu} < 0
$$

This gives
$$
(u^{t})^{2} \left(g_{tt} + 2g_{t\phi}\Omega_{\text{obs}} + g_{\phi\phi}\Omega_{\text{obs}}^{2}\right) < 0
$$

Since $(u^{t})^{2} > 0$, the allowed angular velocity has to satisfy
$$
g_{\phi\phi}\Omega_{\text{obs}}^{2} + 2g_{t\phi}\Omega_{\text{obs}} + g_{tt} < 0
$$

The coefficient $g_{\phi\phi}$ is positive, so $\Omega_{\text{obs}}$ has to lie between the two roots
$$
\Omega_{-} < \Omega_{\text{obs}} < \Omega_{+}
$$

where
$$
\Omega_{\pm} = \frac{-g_{t\phi} \pm \sqrt{g_{t\phi}^{2} - g_{tt}g_{\phi\phi}}}{g_{\phi\phi}}
$$

For the Kerr metric, the determinant identity of the $t-\phi$ block is
$$
g_{t\phi}^{2} - g_{tt}g_{\phi\phi} = \Delta \sin^{2}\theta
$$

Therefore the allowed range can also be written as
$$
\Omega_{\pm} = \frac{-g_{t\phi} \pm \sqrt{\Delta}\sin\theta}{g_{\phi\phi}} = \frac{\frac{2 GMa}{r} \pm \sqrt{r^{2} + a^{2} - 2 GM r}}{r^{2} + a^{2} + \frac{2 GM a^{2}}{r}}
$$

At the boundary of the ergosphere, $g_{tt}=0$. There, the lower bound is $\Omega_{-}=0$. Inside the ergosphere, $g_{tt}>0$, so both roots are positive. This means an observer cannot remain at fixed $r$ without rotating in the same direction as the black hole.

Now consider the outer horizon
$$
r_{+} = GM + \sqrt{G^{2}M^{2} - a^{2}}
$$

At the horizon, $\Delta(r_{+})=0$, so the width of the allowed interval becomes
$$
\Omega_{+} - \Omega_{-} = \frac{2\sqrt{\Delta}\sin\theta}{g_{\phi\phi}} \to 0
$$

Thus the two roots coincide. At $r=r_{+}$, we have
$$
\Omega_{+} = \Omega_{-} = \left.-\frac{g_{t\phi}}{g_{\phi\phi}}\right|_{r=r_{+}}
$$

Using $r_{+}^{2}+a^{2}=2GMr_{+}$, this value becomes
$$
\left.-\frac{g_{t\phi}}{g_{\phi\phi}}\right|_{r=r_{+}}
= \frac{2GMar_{+}}{(r_{+}^{2}+a^{2})^{2}}
= \frac{a}{r_{+}^{2}+a^{2}}
$$

Therefore, when the observer approaches the horizon, the allowed angular velocity is forced into the single value
$$
\Omega_{\text{obs}} \to \Omega_{H} = \frac{a}{r_{+}^{2}+a^{2}}
$$

## Problem 2

Consider the universe described by the metric
$$
ds^{2} = -\left(1-\frac{r^{2}}{R^{2}}\right) dt^{2} + \left(1-\frac{r^{2}}{R^{2}}\right)^{-1} dr^{2} + r^{2} (d\theta^{2} + \sin^{2}\theta d\varphi^{2})
$$

This metric is not asymptotically flat at $r\to 0$. But it is flat at $r=0$. Assuming we were living in the region around $r=0$, show that were we to across the horizon at $r=R$ we could never return.

Define
$$
f(r) = 1 - \frac{r^{2}}{R^{2}}
$$

Then the radial part of the metric is
$$
ds^{2} = - f(r)dt^{2} + f(r)^{-1}dr^{2}
$$

For a radial light ray, $ds^{2}=0$, so
$$
0 = - f(r)dt^{2} + f(r)^{-1}dr^{2}
$$

Therefore
$$
\dv{r}{t} = \pm f(r)
$$

For an outgoing light ray starting from $r=r_{0}<R$, we have
$$
t - t_{0} = \int_{r_{0}}^{r} \frac{\dd{r'}}{1 - r'^{2}/R^{2}}
$$

The integral gives
$$
t - t_{0} = \frac{R}{2}\ln\left(\frac{R+r}{R-r}\frac{R-r_{0}}{R+r_{0}}\right)
$$

When $r\to R$, the logarithm diverges. So in the static coordinate $t$, even light emitted outward from our region takes infinite coordinate time to reach $r=R$.

To see what happens after crossing the horizon, introduce the tortoise coordinate
$$
r_{*} = \int \frac{\dd{r}}{f(r)}
= \frac{R}{2}\ln\left|\frac{R+r}{R-r}\right|
$$

and the outgoing Eddington-Finkelstein coordinate
$$
u = t - r_{*}
$$

Using $\dd{t} = \dd{u} + f(r)^{-1} \dd{r}$, the metric becomes
$$
\dd{s}^{2} = -f(r) \dd{u}^{2} - 2 \dd{u} \, \dd{r} + r^{2} (\dd{\theta}^{2} + \sin^{2} \theta \dd{\varphi}^{2})
$$

This coordinate system is regular at $r=R$. Outside the horizon, $r>R$, we have $f(r)<0$. Then for any future-directed curve with $\dd{u}>0$
$$
0 \geq \dd{s}^{2} = |f(r)| \dd{u}^{2} - 2 \dd{u} \, \dd{r} + r^{2}(\dd{\theta}^{2} + \sin^{2} \theta \dd{\varphi}^{2})
$$

Dividing by $\dd{u}^{2}$ gives
$$
\dv{r}{u} \geq \frac{|f(r)|}{2} + \frac{r^{2}}{2}\left[\left(\dv{\theta}{u}\right)^{2} + \sin^{2}\theta \left(\dv{\varphi}{u}\right)^{2}\right]
$$

So once $r>R$, every future-directed curve must move toward larger $r$. In other words, after crossing the horizon, decreasing $r$ and returning to the region around $r=0$ would require a spacelike trajectory, which is impossible for observers.

## Problem 3

Consider the perturbation to the metric field in Minkowski background. We expand the metric tensor as $g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}$.

(1) Please calculate $g^{\mu\nu}$, $g^{1/2}$, $\Gamma^{\lambda} {}_{\mu\nu}$, $R_{\mu\nu}$ to the $O(h)$ order.

We raise and lower the indices of $h_{\mu\nu}$ with the background metric $\eta_{\mu\nu}$. Define
$$
h = \eta^{\mu\nu}h_{\mu\nu} = h^{\mu} {}_{\mu}
$$

First, from $g^{\mu\lambda}g_{\lambda\nu}=\delta^{\mu}{}_{\nu}$, we can expand
$$
g^{\mu\nu} = \eta^{\mu\nu} - h^{\mu\nu} + O(h^{2})
$$

For the determinant, using $\det(1+A)=\exp(\mathrm{Tr}\ln(1+A))$, we get
$$
\sqrt{-g} = 1 + \frac{1}{2}h + O(h^{2})
$$

For the second-order action, we will also need the next order of this expansion
$$
\sqrt{-g} = 1 + \frac{1}{2}h + \frac{1}{8}h^{2} - \frac{1}{4}h_{\mu\nu}h^{\mu\nu} + O(h^{3})
$$

The Christoffel symbol is
$$
\Gamma^{\lambda} {}_{\mu\nu}
= \frac{1}{2}g^{\lambda\rho}\left(\partial_{\mu}g_{\nu\rho}+\partial_{\nu}g_{\rho\mu}-\partial_{\rho}g_{\mu\nu}\right)
$$

Keeping only the $O(h)$ terms gives
$$
\Gamma^{\lambda} {}_{\mu\nu}
= \frac{1}{2}\eta^{\lambda\rho}\left(\partial_{\mu}h_{\nu\rho}+\partial_{\nu}h_{\rho\mu}-\partial_{\rho}h_{\mu\nu}\right) + O(h^{2})
$$

Using the convention
$$
R_{\mu\nu}^{(1)} = \partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu} - \partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}
$$

we find
$$
R_{\mu\nu}^{(1)}
= \frac{1}{2}\left(
\partial_{\lambda}\partial_{\mu}h^{\lambda} {}_{\nu}
+ \partial_{\lambda}\partial_{\nu}h^{\lambda} {}_{\mu}
- \partial^{\lambda}\partial_{\lambda}h_{\mu\nu}
- \partial_{\mu}\partial_{\nu}h
\right)
$$

If we write $\square=\partial^{\lambda}\partial_{\lambda}$, this is
$$
R_{\mu\nu}^{(1)}
= \frac{1}{2}\left(
\partial_{\lambda}\partial_{\mu}h^{\lambda} {}_{\nu}
+ \partial_{\lambda}\partial_{\nu}h^{\lambda} {}_{\mu}
- \square h_{\mu\nu}
- \partial_{\mu}\partial_{\nu}h
\right)
$$

The linearized Ricci scalar is
$$
R^{(1)} = \partial_{\mu}\partial_{\nu}h^{\mu\nu} - \square h
$$

(2) Please calculate the Einstein-Hilbert action to the $O(h^{2})$ order.

Now we calculate the Einstein-Hilbert action
$$
S_{\text{EH}} = \frac{1}{16\pi G}\int \dd[4]{x}\sqrt{-g}R
$$

The $O(h)$ term is
$$
R^{(1)} = \partial_{\mu}\left(\partial_{\nu}h^{\mu\nu}-\partial^{\mu}h\right)
$$

So it is a boundary term and can be dropped if we fix the perturbation on the boundary. The first nontrivial bulk contribution is the quadratic part.

To see the second-order part more explicitly, first write the Ricci scalar as
$$
R = g^{\mu\nu}R_{\mu\nu}
$$

Using the results above, we can obtain that
$$
\sqrt{-g}g^{\mu\nu}
= \eta^{\mu\nu}+\frac{1}{2}h\eta^{\mu\nu}-h^{\mu\nu}+O(h^{2})
$$

where
$$
R_{\mu\nu}
= \partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu}
- \partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}
+ \Gamma^{\lambda} {}_{\mu\nu}\Gamma^{\sigma} {}_{\lambda\sigma}
- \Gamma^{\sigma} {}_{\mu\lambda}\Gamma^{\lambda} {}_{\nu\sigma}
$$

Therefore
$$
\sqrt{-g}R
= \sqrt{-g}g^{\mu\nu}
\left(\partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu}
- \partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}\right)
+ \sqrt{-g}g^{\mu\nu}
\left(\Gamma^{\lambda} {}_{\mu\nu}\Gamma^{\sigma} {}_{\lambda\sigma}
- \Gamma^{\sigma} {}_{\mu\lambda}\Gamma^{\lambda} {}_{\nu\sigma}\right)
$$

Now integrate the derivative part by parts
$$
\sqrt{-g}g^{\mu\nu}\partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu}
= \partial_{\lambda}\left(\sqrt{-g}g^{\mu\nu}\Gamma^{\lambda} {}_{\mu\nu}\right)
- \Gamma^{\lambda} {}_{\mu\nu}\partial_{\lambda}\left(\sqrt{-g}g^{\mu\nu}\right)
$$

and
$$
-\sqrt{-g}g^{\mu\nu}\partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}
= -\partial_{\nu}\left(\sqrt{-g}g^{\mu\nu}\Gamma^{\lambda} {}_{\mu\lambda}\right)
+ \Gamma^{\lambda} {}_{\mu\lambda}\partial_{\nu}\left(\sqrt{-g}g^{\mu\nu}\right)
$$

The first terms on the right hand side are total derivatives. Dropping these boundary terms, and using the metric compatibility relation to combine the remaining terms, the Einstein-Hilbert Lagrangian can be written in the equivalent gamma-gamma form
$$
\sqrt{-g}R
\doteq
-\sqrt{-g}g^{\mu\nu}
\left(\Gamma^{\lambda} {}_{\mu\nu}\Gamma^{\sigma} {}_{\lambda\sigma}
- \Gamma^{\sigma} {}_{\mu\lambda}\Gamma^{\lambda} {}_{\nu\sigma}\right)
$$

where $\doteq$ means equal up to a total derivative. Because each Christoffel symbol is already $O(h)$, to calculate the $O(h^{2})$ Lagrangian we only need to put $\sqrt{-g}g^{\mu\nu}\to\eta^{\mu\nu}$ and $\Gamma\to\Gamma^{(1)}$. Thus
$$
\mathcal{L}^{(2)}
= - \eta^{\mu\nu}
\left(\Gamma^{\lambda(1)} {}_{\mu\nu}\Gamma^{\sigma(1)} {}_{\lambda\sigma}
- \Gamma^{\sigma(1)} {}_{\mu\lambda}\Gamma^{\lambda(1)} {}_{\nu\sigma}\right)
$$

Now calculate the two pieces separately. First we have
$$
\Gamma^{\sigma(1)} {}_{\lambda\sigma}
= \frac{1}{2}\partial_{\lambda}h
$$

and
$$
\eta^{\mu\nu}\Gamma^{\lambda(1)} {}_{\mu\nu}
= \partial_{\mu}h^{\mu\lambda}-\frac{1}{2}\partial^{\lambda}h
$$

So the first product is
$$
\eta^{\mu\nu}\Gamma^{\lambda(1)} {}_{\mu\nu}\Gamma^{\sigma(1)} {}_{\lambda\sigma}
= \frac{1}{2}\partial_{\lambda}h\,\partial_{\mu}h^{\mu\lambda}
-\frac{1}{4}\partial_{\lambda}h\partial^{\lambda}h
$$

For the second product, we substitute the linearized Christoffel symbol
$$
\eta^{\mu\nu}\Gamma^{\sigma(1)} {}_{\mu\lambda}\Gamma^{\lambda(1)} {}_{\nu\sigma}
= \frac{1}{4}\eta^{\mu\nu}
\left(\partial_{\mu}h^{\sigma} {}_{\lambda}
+ \partial_{\lambda}h^{\sigma} {}_{\mu}
- \partial^{\sigma}h_{\mu\lambda}\right)
\left(\partial_{\nu}h^{\lambda} {}_{\sigma}
+ \partial_{\sigma}h^{\lambda} {}_{\nu}
- \partial^{\lambda}h_{\nu\sigma}\right)
$$

Expanding the product, using $h_{\mu\nu}=h_{\nu\mu}$, and relabeling dummy indices gives
$$
\eta^{\mu\nu}\Gamma^{\sigma(1)} {}_{\mu\lambda}\Gamma^{\lambda(1)} {}_{\nu\sigma}
= -\frac{1}{4}\partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
+ \frac{1}{2}\partial_{\lambda}h_{\mu\nu}\partial^{\nu}h^{\mu\lambda}
$$

Therefore
$$
\mathcal{L}^{(2)}
= - \frac{1}{4}\partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
+ \frac{1}{2}\partial_{\lambda}h_{\mu\nu}\partial^{\nu}h^{\mu\lambda}
- \frac{1}{2}\partial_{\lambda}h\,\partial_{\mu}h^{\mu\lambda}
+ \frac{1}{4}\partial_{\lambda}h\partial^{\lambda}h
$$

The second term is usually rewritten by integrating by parts twice. We have
$$
\int \dd[4]{x}\,\partial_{\lambda}h_{\mu\nu}\partial^{\nu}h^{\mu\lambda}
= -\int \dd[4]{x}\,h_{\mu\nu}\partial_{\lambda}\partial^{\nu}h^{\mu\lambda}
$$

Then integrate by parts once more and use the symmetry of $h_{\mu\nu}$
$$
-\int \dd[4]{x}\,h_{\mu\nu}\partial_{\lambda}\partial^{\nu}h^{\mu\lambda}
= \int \dd[4]{x}\,\partial_{\mu}h^{\mu\nu}\partial^{\lambda}h_{\lambda\nu}
$$

Also
$$
\partial_{\lambda}h\,\partial_{\mu}h^{\mu\lambda}
= \partial_{\mu}h^{\mu\nu}\partial_{\nu}h
$$

Thus the quadratic Lagrangian density is
$$
\mathcal{L}^{(2)}
= \frac{1}{4}
\left[
- \partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
+ 2\partial_{\mu}h^{\mu\nu}\partial^{\lambda}h_{\lambda\nu}
- 2\partial_{\mu}h^{\mu\nu}\partial_{\nu}h
+ \partial_{\lambda}h\partial^{\lambda}h
\right]
$$

Plugging this back into the action, we obtain
$$
S_{\text{EH}}^{(2)}
= \frac{1}{64\pi G}\int \dd[4]{x}
\left[
- \partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
+ 2\partial_{\mu}h^{\mu\nu}\partial^{\lambda}h_{\lambda\nu}
- 2\partial_{\mu}h^{\mu\nu}\partial_{\nu}h
+ \partial_{\lambda}h\partial^{\lambda}h
\right]
$$

This is the Einstein-Hilbert action expanded around flat spacetime to second order in the perturbation.

## Problem 4 

Please follow the steps on the class and the materials about GWs I sent to you to show that the $h_+$ and $h_{\times}$ produced by a nonrelativistic binary system can be written as
$$
h_+(t) = \frac{4(GM_{c})^{5/3}}{r} \left(\frac{\omega_{GW}}{2}\right)^{2/3} \frac{1+\cos^{2}\theta}{2} \cos(\omega_{GW} t_{\text{ret}} + 2 \varphi)
$$

$$
h_{\times}(t) = \frac{4(GM_{c})^{5/3}}{r} \left(\frac{\omega_{GW}}{2}\right)^{2/3} \cos\theta \sin(\omega_{GW} t_{\text{ret}} + 2 \varphi)
$$

where $t_{\text{ret}} = t - r$ and $M_{c}$ is the chirp mass.

>  The chirp mass is defined as
>  $$
>  M_{c} = (\mu^{3} m^{2})^{1/5}
>  $$

For a weak and slow source, the quadrupole formula is
$$
h_{ij}^{TT}(t,\vec{x}) = \frac{2G}{r}\ddot{I}_{ij}^{TT}(t_{\text{ret}})
$$

where
$$
t_{\text{ret}} = t - r
$$

For a Newtonian binary, put the center of mass at the origin and choose the orbital plane to be the $x-y$ plane. Let $a$ be the separation between the two masses, $M=m_{1}+m_{2}$, and $\mu=m_{1}m_{2}/M$. We take the relative position to be
$$
\vec{x}(t) = a(- \sin \omega t, \cos \omega t, 0)
$$

Then the Newtonian quadrupole moment is
$$
I_{ij} = \mu x_{i}x_{j}
$$

The components which contain the time-dependent quadrupole are
$$
I_{xx} = \mu a^{2}\sin^{2}\omega t
$$

$$
I_{yy} = \mu a^{2}\cos^{2}\omega t
$$

$$
I_{xy} = -\mu a^{2}\sin\omega t\cos\omega t
$$

Taking two time derivatives gives
$$
\ddot{I}_{xx} = 2\mu a^{2}\omega^{2}\cos 2\omega t
$$

$$
\ddot{I}_{yy} = - 2\mu a^{2}\omega^{2}\cos 2\omega t
$$

$$
\ddot{I}_{xy} = 2\mu a^{2}\omega^{2}\sin 2\omega t
$$

Now suppose the observer is located in the direction
$$
\hat{n} = (\sin\theta\cos\varphi, \sin\theta\sin\varphi, \cos\theta)
$$

Choose the two transverse unit vectors
$$
\hat{e}_{\theta} = (\cos\theta\cos\varphi, \cos\theta\sin\varphi, -\sin\theta)
$$

$$
\hat{e}_{\varphi} = (-\sin\varphi, \cos\varphi, 0)
$$

With the polarization convention
$$
e^{+}_{ij} = e^{\theta}_{i}e^{\theta}_{j} - e^{\varphi}_{i}e^{\varphi}_{j} 
$$

$$
e^{\times}_{ij} = e^{\theta}_{i}e^{\varphi}_{j} + e^{\varphi}_{i}e^{\theta}_{j}
$$

the two observed polarizations are obtained by projecting $h_{ij}^{TT}$ onto these two tensors
$$
h_{+} = \frac{1}{2}e^{+}_{ij}h_{ij}^{TT}
$$

$$
h_{\times} = \frac{1}{2}e^{\times}_{ij}h_{ij}^{TT}
$$

Since the polarization tensors are already transverse and traceless, we can contract them directly with $\ddot{I}_{ij}$. 

Or we can use the form given by eq 3.72 in the textbook *Gravitational Waves*[^1]
$$
h_{+}(t; \theta, \phi) = \frac{1}{r} \frac{G}{c^{4}}[ 
  \ddot{M}_{11}(\cos^{2} \phi - \sin^{2} \phi \cos^{2} \theta) 
  + \ddot{M}_{22}(\sin^{2} \phi - \cos^{2} \phi \cos^{2} \theta) 
  - \ddot{M}_{33} \sin^{2} \theta \\
  - \ddot{M}_{12} \sin 2\phi (1 + \cos^{2} \theta) 
  + \ddot{M}_{13} \sin \phi \sin 2\theta 
  + \ddot{M}_{23} \cos \phi \sin 2\theta]
$$

$$
h_{\times}(t; \theta, \phi) = \frac{1}{r} \frac{G}{c^{4}} \left[ 
  (\ddot{M}_{11} - \ddot{M}_{22}) \sin 2\phi \cos \theta 
  + 2\ddot{M}_{12} \cos 2\phi \cos \theta 
  - 2\ddot{M}_{13} \cos \phi \sin \theta 
  + 2\ddot{M}_{23} \sin \phi \sin \theta 
\right]
$$

This gives
$$
h_{+}(t) =
\frac{2G\mu a^{2}\omega^{2}}{r}(1+\cos^{2}\theta)
\cos(2\omega t_{\text{ret}} + 2\varphi)
$$

and
$$
h_{\times}(t) =
\frac{4G\mu a^{2}\omega^{2}}{r}\cos\theta
\sin(2\omega t_{\text{ret}} + 2\varphi)
$$

Now use the Kepler relation for a circular Newtonian binary
$$
\omega^{2} = \frac{GM}{a^{3}}
$$

Therefore
$$
G\mu a^{2}\omega^{2}
= G\mu (GM)^{2/3}\omega^{2/3}
= (GM_{c})^{5/3}\omega^{2/3}
$$

And the gravitational wave frequency is twice the orbital frequency
$$
\omega_{GW} = 2\omega
$$

Substituting this into the two polarizations, we finally obtain
$$
h_+(t) = \frac{4(GM_{c})^{5/3}}{r} \left(\frac{\omega_{GW}}{2}\right)^{2/3} \frac{1+\cos^{2}\theta}{2} \cos(\omega_{GW} t_{\text{ret}} + 2\varphi)
$$

$$
h_{\times}(t) = \frac{4(GM_{c})^{5/3}}{r} \left(\frac{\omega_{GW}}{2}\right)^{2/3} \cos\theta \sin(\omega_{GW} t_{\text{ret}} + 2\varphi)
$$

## Problem 5

Assuming we have a binary neutron star system, each with the mass equal to $M_{\odot}$. Initially their distance they rotate with each other in a circular orbit with their distance 0.1 AU. Please estimate how long they will coalesce with each other via gravitational radiation. (AU is the Sun-Earth distance, $M_{\odot}$ is the mass of the Sun).

For a circular binary, the Newtonian orbital energy is
$$
E = -\frac{Gm_{1}m_{2}}{2a}
$$

where $a$ is the separation between the two stars. The gravitational-wave energy loss for a circular orbit is
$$
P_{\text{quad}} = \frac{G}{5} \langle \dddot{Q}_{ij} \dddot{Q}_{ij} \rangle
$$
In this case, we can represent the energy loss in parameters of the circular orbit
$$
\dv{E}{t}
= -\frac{32}{5}\frac{G^{4}}{c^{5}}
\frac{m_{1}^{2}m_{2}^{2}(m_{1}+m_{2})}{a^{5}}
$$

Using $\dv{E}{t}=\dv{E}{a}\dv{a}{t}$, we get
$$
\dv{a}{t}
= -\frac{64}{5}\frac{G^{3}}{c^{5}}
\frac{m_{1}m_{2}(m_{1}+m_{2})}{a^{3}}
$$

Integrating from the initial separation $a_{0}$ to $0$ gives
$$
t_{\text{coal}} =
\frac{5}{256}
\frac{c^{5}a_{0}^{4}}{G^{3}m_{1}m_{2}(m_{1}+m_{2})}
$$

Here
$$
m_{1}=m_{2}=M_{\odot}
$$

so
$$
t_{\text{coal}} =
\frac{5}{512}
\frac{c^{5}a_{0}^{4}}{G^{3}M_{\odot}^{3}}
$$

The initial separation is
$$
a_{0}=0.1\mathrm{AU}=1.496\times 10^{10}\mathrm{m}
$$

Using
$$
G=6.674\times 10^{-11}\mathrm{m^{3}kg^{-1}s^{-2}}
$$

$$
c=2.998\times 10^{8}\mathrm{m/s}
$$

$$
M_{\odot}=1.988\times 10^{30}\mathrm{kg}
$$

we obtain
$$
t_{\text{coal}} \simeq 5.07\times 10^{20}\mathrm{s}
$$

Converting this to years,
$$
t_{\text{coal}} \simeq 1.61\times 10^{13}\mathrm{yr}
$$

So a binary neutron star system with initial separation $0.1\mathrm{AU}$ would take about $1.6\times 10^{13}$ years to coalesce by gravitational radiation, much longer than the current age of the universe.

[^1]: Maggiore, M. (2017). *Gravitational waves*. Oxford university press.
