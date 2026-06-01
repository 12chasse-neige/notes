# Lecture 7 Exercise

(1) Please derive the commutator $[\phi(t, \tilde{x}), \dot{\phi}(t, \tilde{y})]$ from the commutators of creation and annihilation operators, using (1) and (2).

>  Long story short, causality (in the formal of micro-causality) requires that we pack creation and annihilation operators, $a^{\dagger}_{\tilde{k}}$ and $a_{\tilde{k}}$, properly into a local operator $\phi(x)$:
>
>  $$
>  \phi(x) = \int \frac{d^{3} \tilde{k}}{(2\pi)^{3}} \frac{1}{\sqrt{2E_{k}}} \left[ e^{+ik\cdot x} a_{\tilde{k}} + e^{-ik\cdot x} a^{\dagger}_{\tilde{k}} \right] \tag{1}
>  $$
>
>  Here $x^{\mu}$ is the position 4-vector, $k\cdot x = k^{\mu} x_{\mu}$, and $k^{0} = \sqrt{\tilde{k}^{2} + m^{2}}$ which we shall also write as $E_{k}$ sometimes.
>
>  Then we can use $\phi$ to build a Lagrangian (density):
>
>  $$
>  \mathcal{L} = -\frac{1}{2} (\partial_{\mu} \phi)^{2} - \frac{1}{2} m^{2} \phi^{2} + \text{"interactions"} \tag{2}
>  $$
>

The commutator for this problem is 
$$
\begin{gathered}
\comm{\phi (t, \tilde{x})}{\dot{\phi} (t, \tilde{y})} = \int \frac{\dd[3]{\tilde{k}}}{(2 \pi)^{3}} \int \frac{\dd[3]{\tilde{k'}}}{(2 \pi)^{3}} \frac{1}{2 \sqrt{E_{k} E_{k'}}} \comm{e^{+ik\cdot x} a_{\tilde{k}} + e^{-ik\cdot x} a^{\dagger}_{\tilde{k}}}{- i E_{k'}e^{+ik' \cdot y} a_{\tilde{k'}} + i E_{k'} e^{-ik\cdot y} a^{\dagger}_{\tilde{k'}}} \\ =
\int \frac{\dd[3]{\tilde{k}}}{(2 \pi)^{3}} \int \frac{\dd[3]{\tilde{k'}}}{(2 \pi)^{3}} \frac{1}{2 \sqrt{E_{k} E_{k'}}} i E_{k'} \left(e^{i k \cdot x - i k' \cdot y} \comm{a_{\tilde{k}}}{a^{\dagger}_{\tilde{k'}}} - e^{i k' \cdot y - i k \cdot x} \comm{a_{\tilde{k}}^{\dagger}}{a_{\tilde{k'}}}\right) \\ =
\int \frac{\dd[3]{\tilde{k}}}{(2 \pi)^{3}} \frac{1}{2 E_{k}} i E_{k} \left(e^{i k \cdot (x - y)} + e^{i k \cdot (y - x)} \right) = i \delta (x - y)
\end{gathered}
$$


(2) Please determine $a$ by the Lorentz invariance of the massless spin-1 Lagrangian $\mathcal{L}$ in (11), and also $a$, $b$, and $c$ in the massless spin-2 Lagrangian in (26).

>  Famously, the unwanted terms are avoided if we exploit the Lorentz-index contraction and add a new term:
>
>  $$
>  \mathcal{L} = -\frac{1}{2} (\partial_{\mu} A_{\nu})(\partial^{\mu} A^{\nu}) + a (\partial_{\mu} A^{\mu})^{2} \tag{11}
>  $$
>
>  ---
>
>  Up to integration by parts, the most general $\mathcal{L}$ with two $h_{\mu\nu}$ and two $\partial_{\mu}$ is:
>
>  $$
>  \mathcal{L} = +\frac{1}{4} h^{\mu\nu} \Box h_{\mu\nu} + a h \Box h + b h \partial_{\mu} \partial_{\nu} h^{\mu\nu} + c h^{\mu\nu} \partial_{\mu} \partial^{\lambda} h_{\nu\lambda} \tag{26}
>  $$
>

For the Lorentz invariance, we assume that under LGT, the vector potential and metric will transform like
$$
A'_{\mu} = A_{\mu} + \partial_{\mu} \alpha
$$

$$
h'_{\mu \nu} = h_{\mu \nu} + \partial_{\mu} \xi_{\nu} + \partial_{\nu} \xi_{\mu}
$$

Plugging in those results, we have the difference of Langrangian of spin-1 under LGT
$$
\delta \mathcal{L}^{\prime} = - (\partial_{\mu} \partial_{\nu} \alpha) \partial^{\mu} A^{\nu} - \frac{1}{2} (\partial_{\mu} \partial_{\nu} \alpha)(\partial^{\mu} \partial^{\nu} \alpha) + 2a (\partial_{\mu} \partial^{\mu} \alpha) \partial_{\nu} A^{\nu} + a (\partial_{\mu} \partial^{\mu} \alpha)^{2}
$$
To make these terms vanish, we can find that we should let $a = \frac{1}{2}$.

For spin-2, demand invariance under

$$
\delta h_{\mu\nu}=\partial_{\mu} \xi_{\nu}+\partial_{\nu} \xi_{\mu} 
$$

From

$$
\mathcal{L}=\frac14 h^{\mu\nu}\Box h_{\mu\nu}+a h\Box h+b h\partial_{\mu}\partial_{\nu} h^{\mu\nu}+c h^{\mu\nu}\partial_{\mu}\partial^{\lambda} h_{\nu\lambda}
$$

the equation-of-motion tensor is

$$
E_{\mu\nu}=\frac12\Box h_{\mu\nu}+2a\eta_{\mu\nu}\Box h+b\eta_{\mu\nu}\partial_{\rho}\partial_{\sigma} h^{\rho\sigma}+b\partial_{\mu}\partial_{\nu} h+c\left(\partial_{\mu}\partial^{\lambda} h_{\nu\lambda}+\partial_{\nu}\partial^{\lambda} h_{\mu\lambda}\right)
$$

Gauge invariance that guarantees the Lorentz invariance requires the Bianchi identity

$$
\partial^{\mu} E_{\mu\nu}=0
$$

This gives the conditions

$$
\frac12+c=0,\quad b+c=0,\quad 2a+b=0
$$

Therefore

$$
a=-\frac14,\quad b=\frac12,\quad c=-\frac12
$$

(3) Please derive the graviton's propagator (38) by solving the equation (36).

>  The graviton propagator $G_{\mu\nu,\rho\sigma}$ is a solution to
>
>  $$
>  \frac{1}{4} (\eta_{\lambda\mu} \eta_{\kappa\nu} + \eta_{\lambda\nu} \eta_{\kappa\mu} - \eta_{\lambda\kappa} \eta_{\mu\nu}) \Box_{x} G^{\mu\nu,\rho\sigma}(x,y) = \frac{i}{2} \delta^{(4)}(x-y) (\delta^{\rho}_{\lambda} \delta^{\sigma}_{\kappa} + \delta^{\sigma}_{\lambda} \delta^{\rho}_{\kappa}) \tag{36}
>  $$
>
>  The equation is easiest solved by an ansatz:
>
>  $$
>  G_{\mu\nu,\rho\sigma}(p) = \frac{-i}{p^{2} - i\epsilon} \left[ A(\eta_{\mu\rho} \eta_{\nu\sigma} + \eta_{\mu\sigma} \eta_{\nu\rho}) + B \eta_{\mu\nu} \eta_{\rho\sigma} \right] \tag{37}
>  $$
>
>  Putting it into the equation, we find $A = 1$, $B = -1$. Therefore,
>
>  $$
>  G_{\mu\nu,\rho\sigma}(p) = \frac{-i}{p^{2} - i\epsilon} \left[ \eta_{\mu\rho} \eta_{\nu\sigma} + \eta_{\mu\sigma} \eta_{\nu\rho} - \eta_{\mu\nu} \eta_{\rho\sigma} \right] \tag{38}
>  $$
>

The form $G(p)$ is given by the Fourier transform 
$$
G^{\mu \nu, \rho \sigma} (x, y) = \int \frac{\dd[4]{p}}{(2 \pi)^{4}} e^{i p \cdot (x - y)} G^{\mu \nu, \rho \sigma} (p)
$$
Plugging in the ansatz
$$
\frac{1}{4} (\eta_{\lambda\mu} \eta_{\kappa\nu} + \eta_{\lambda\nu} \eta_{\kappa\mu} - \eta_{\lambda\kappa} \eta_{\mu\nu}) \square_{x} G^{\mu\nu,\rho\sigma}(x,y) = \frac{i}{2} \delta^{(4)}(x-y) (\delta^{\rho}_{\lambda} \delta^{\sigma}_{\kappa} + \delta^{\sigma}_{\lambda} \delta^{\rho}_{\kappa})
$$


(4) Please expand the Hilbert-Einstein action $S = \frac{M_{\text{Pl}}^{2}}{2} \int d^{4} x \sqrt{-g} R$ with $g_{\mu\nu} = \eta_{\mu\nu} + \kappa h_{\mu\nu}$ to quadratic order in $h_{\mu\nu}$ and show that quadratic Lagrangian for $h_{\mu\nu}$ is identical to (27) up to total derivative terms.

>  Then, Lorentz-invariance (namely, invariant under $\delta h_{\mu\nu} = \partial_{\mu} \xi_{\nu} + \partial_{\nu} \xi_{\mu}$ with free $\xi_{\mu}$) uniquely fixes $a = -\frac{1}{4}$, $b = \frac{1}{2}$, $c = -\frac{1}{2}$. So, the Lorentz invariant Lagrangian for a free graviton reads:
>  $$
>  \mathcal{L} = \frac{1}{4} h^{\mu\nu} \Box h_{\mu\nu} - \frac{1}{4} h \Box h + \frac{1}{2} h \partial_{\mu} \partial_{\nu} h^{\mu\nu} - \frac{1}{2} h^{\mu\nu} \partial_{\mu} \partial^{\lambda} h_{\nu\lambda} \tag{27}
>  $$

For the expansion part, actually I’ve done this annoying calculation once in the general relativity homework and I don’t want to do it again. So please allow me to copy the expansion process here:

>  Consider the perturbation to the metric field in Minkowski background. We expand the metric tensor as $g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}$.
>
>  (1) Please calculate $g^{\mu\nu}$, $g^{1/2}$, $\Gamma^{\lambda} {}_{\mu\nu}$, $R_{\mu\nu}$ to the $O(h)$ order.
>
>  We raise and lower the indices of $h_{\mu\nu}$ with the background metric $\eta_{\mu\nu}$. Define
>  $$
>  h = \eta^{\mu\nu}h_{\mu\nu} = h^{\mu} {}_{\mu}
>  $$
>
>  First, from $g^{\mu\lambda}g_{\lambda\nu}=\delta^{\mu}{}_{\nu}$, we can expand
>  $$
>  g^{\mu\nu} = \eta^{\mu\nu} - h^{\mu\nu} + O(h^{2})
>  $$
>
>  For the determinant, using $\det(1+A)=\exp(\mathrm{Tr}\ln(1+A))$, we get
>  $$
>  \sqrt{-g} = 1 + \frac{1}{2}h + O(h^{2})
>  $$
>
>  For the second-order action, we will also need the next order of this expansion
>  $$
>  \sqrt{-g} = 1 + \frac{1}{2}h + \frac{1}{8}h^{2} - \frac{1}{4}h_{\mu\nu}h^{\mu\nu} + O(h^{3})
>  $$
>
>  The Christoffel symbol is
>  $$
>  \Gamma^{\lambda} {}_{\mu\nu}
>  = \frac{1}{2}g^{\lambda\rho}\left(\partial_{\mu}g_{\nu\rho}+\partial_{\nu}g_{\rho\mu}-\partial_{\rho}g_{\mu\nu}\right)
>  $$
>
>  Keeping only the $O(h)$ terms gives
>  $$
>  \Gamma^{\lambda} {}_{\mu\nu}
>  = \frac{1}{2}\eta^{\lambda\rho}\left(\partial_{\mu}h_{\nu\rho}+\partial_{\nu}h_{\rho\mu}-\partial_{\rho}h_{\mu\nu}\right) + O(h^{2})
>  $$
>
>  Using the convention
>  $$
>  R_{\mu\nu}^{(1)} = \partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu} - \partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}
>  $$
>
>  we find
>  $$
>  R_{\mu\nu}^{(1)}
>  = \frac{1}{2}\left(
>  \partial_{\lambda}\partial_{\mu}h^{\lambda} {}_{\nu}
>  + \partial_{\lambda}\partial_{\nu}h^{\lambda} {}_{\mu}
>  - \partial^{\lambda}\partial_{\lambda}h_{\mu\nu}
>  - \partial_{\mu}\partial_{\nu}h
>  \right)
>  $$
>
>  If we write $\square=\partial^{\lambda}\partial_{\lambda}$, this is
>  $$
>  R_{\mu\nu}^{(1)}
>  = \frac{1}{2}\left(
>  \partial_{\lambda}\partial_{\mu}h^{\lambda} {}_{\nu}
>  + \partial_{\lambda}\partial_{\nu}h^{\lambda} {}_{\mu}
>  - \square h_{\mu\nu}
>  - \partial_{\mu}\partial_{\nu}h
>  \right)
>  $$
>
>  The linearized Ricci scalar is
>  $$
>  R^{(1)} = \partial_{\mu}\partial_{\nu}h^{\mu\nu} - \square h
>  $$
>
>  (2) Please calculate the Einstein-Hilbert action to the $O(h^{2})$ order.
>
>  Now we calculate the Einstein-Hilbert action
>  $$
>  S_{\text{EH}} = \frac{1}{16\pi G}\int \dd[4]{x}\sqrt{-g}R
>  $$
>
>  The $O(h)$ term is
>  $$
>  R^{(1)} = \partial_{\mu}\left(\partial_{\nu}h^{\mu\nu}-\partial^{\mu}h\right)
>  $$
>
>  So it is a boundary term and can be dropped if we fix the perturbation on the boundary. The first nontrivial bulk contribution is the quadratic part.
>
>  To see the second-order part more explicitly, first write the Ricci scalar as
>  $$
>  R = g^{\mu\nu}R_{\mu\nu}
>  $$
>
>  Using the results above, we can obtain that
>  $$
>  \sqrt{-g}g^{\mu\nu}
>  = \eta^{\mu\nu}+\frac{1}{2}h\eta^{\mu\nu}-h^{\mu\nu}+O(h^{2})
>  $$
>
>  where
>  $$
>  R_{\mu\nu}
>  = \partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu}
>  - \partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}
>  + \Gamma^{\lambda} {}_{\mu\nu}\Gamma^{\sigma} {}_{\lambda\sigma}
>  - \Gamma^{\sigma} {}_{\mu\lambda}\Gamma^{\lambda} {}_{\nu\sigma}
>  $$
>
>  Therefore
>  $$
>  \sqrt{-g}R
>  = \sqrt{-g}g^{\mu\nu}
>  \left(\partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu}
>  - \partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}\right)
>  + \sqrt{-g}g^{\mu\nu}
>  \left(\Gamma^{\lambda} {}_{\mu\nu}\Gamma^{\sigma} {}_{\lambda\sigma}
>  - \Gamma^{\sigma} {}_{\mu\lambda}\Gamma^{\lambda} {}_{\nu\sigma}\right)
>  $$
>
>  Now integrate the derivative part by parts
>  $$
>  \sqrt{-g}g^{\mu\nu}\partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu}
>  = \partial_{\lambda}\left(\sqrt{-g}g^{\mu\nu}\Gamma^{\lambda} {}_{\mu\nu}\right)
>  - \Gamma^{\lambda} {}_{\mu\nu}\partial_{\lambda}\left(\sqrt{-g}g^{\mu\nu}\right)
>  $$
>
>  and
>  $$
>  -\sqrt{-g}g^{\mu\nu}\partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}
>  = -\partial_{\nu}\left(\sqrt{-g}g^{\mu\nu}\Gamma^{\lambda} {}_{\mu\lambda}\right)
>  + \Gamma^{\lambda} {}_{\mu\lambda}\partial_{\nu}\left(\sqrt{-g}g^{\mu\nu}\right)
>  $$
>
>  The first terms on the right hand side are total derivatives. Dropping these boundary terms, and using the metric compatibility relation to combine the remaining terms, the Einstein-Hilbert Lagrangian can be written in the equivalent gamma-gamma form
>  $$
>  \sqrt{-g}R
>  \doteq
>  -\sqrt{-g}g^{\mu\nu}
>  \left(\Gamma^{\lambda} {}_{\mu\nu}\Gamma^{\sigma} {}_{\lambda\sigma}
>  - \Gamma^{\sigma} {}_{\mu\lambda}\Gamma^{\lambda} {}_{\nu\sigma}\right)
>  $$
>
>  where $\doteq$ means equal up to a total derivative. Because each Christoffel symbol is already $O(h)$, to calculate the $O(h^{2})$ Lagrangian we only need to put $\sqrt{-g}g^{\mu\nu}\to\eta^{\mu\nu}$ and $\Gamma\to\Gamma^{(1)}$. Thus
>  $$
>  \mathcal{L}^{(2)}
>  = - \eta^{\mu\nu}
>  \left(\Gamma^{\lambda(1)} {}_{\mu\nu}\Gamma^{\sigma(1)} {}_{\lambda\sigma}
>  - \Gamma^{\sigma(1)} {}_{\mu\lambda}\Gamma^{\lambda(1)} {}_{\nu\sigma}\right)
>  $$
>
>  Now calculate the two pieces separately. First we have
>  $$
>  \Gamma^{\sigma(1)} {}_{\lambda\sigma}
>  = \frac{1}{2}\partial_{\lambda}h
>  $$
>
>  and
>  $$
>  \eta^{\mu\nu}\Gamma^{\lambda(1)} {}_{\mu\nu}
>  = \partial_{\mu}h^{\mu\lambda}-\frac{1}{2}\partial^{\lambda}h
>  $$
>
>  So the first product is
>  $$
>  \eta^{\mu\nu}\Gamma^{\lambda(1)} {}_{\mu\nu}\Gamma^{\sigma(1)} {}_{\lambda\sigma}
>  = \frac{1}{2}\partial_{\lambda}h\,\partial_{\mu}h^{\mu\lambda}
>  -\frac{1}{4}\partial_{\lambda}h\partial^{\lambda}h
>  $$
>
>  For the second product, we substitute the linearized Christoffel symbol
>  $$
>  \eta^{\mu\nu}\Gamma^{\sigma(1)} {}_{\mu\lambda}\Gamma^{\lambda(1)} {}_{\nu\sigma}
>  = \frac{1}{4}\eta^{\mu\nu}
>  \left(\partial_{\mu}h^{\sigma} {}_{\lambda}
>  + \partial_{\lambda}h^{\sigma} {}_{\mu}
>  - \partial^{\sigma}h_{\mu\lambda}\right)
>  \left(\partial_{\nu}h^{\lambda} {}_{\sigma}
>  + \partial_{\sigma}h^{\lambda} {}_{\nu}
>  - \partial^{\lambda}h_{\nu\sigma}\right)
>  $$
>
>  Expanding the product, using $h_{\mu\nu}=h_{\nu\mu}$, and relabeling dummy indices gives
>  $$
>  \eta^{\mu\nu}\Gamma^{\sigma(1)} {}_{\mu\lambda}\Gamma^{\lambda(1)} {}_{\nu\sigma}
>  = -\frac{1}{4}\partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
>  + \frac{1}{2}\partial_{\lambda}h_{\mu\nu}\partial^{\nu}h^{\mu\lambda}
>  $$
>
>  Therefore
>  $$
>  \mathcal{L}^{(2)}
>  = - \frac{1}{4}\partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
>  + \frac{1}{2}\partial_{\lambda}h_{\mu\nu}\partial^{\nu}h^{\mu\lambda}
>  - \frac{1}{2}\partial_{\lambda}h\,\partial_{\mu}h^{\mu\lambda}
>  + \frac{1}{4}\partial_{\lambda}h\partial^{\lambda}h
>  $$
>
>  The second term is usually rewritten by integrating by parts twice. We have
>  $$
>  \int \dd[4]{x}\,\partial_{\lambda}h_{\mu\nu}\partial^{\nu}h^{\mu\lambda}
>  = -\int \dd[4]{x}\,h_{\mu\nu}\partial_{\lambda}\partial^{\nu}h^{\mu\lambda}
>  $$
>
>  Then integrate by parts once more and use the symmetry of $h_{\mu\nu}$
>  $$
>  -\int \dd[4]{x}\,h_{\mu\nu}\partial_{\lambda}\partial^{\nu}h^{\mu\lambda}
>  = \int \dd[4]{x}\,\partial_{\mu}h^{\mu\nu}\partial^{\lambda}h_{\lambda\nu}
>  $$
>
>  Also
>  $$
>  \partial_{\lambda}h\,\partial_{\mu}h^{\mu\lambda}
>  = \partial_{\mu}h^{\mu\nu}\partial_{\nu}h
>  $$
>
>  Thus the quadratic Lagrangian density is
>  $$
>  \mathcal{L}^{(2)}
>  = - \frac{1}{4} \partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
>  + \frac{1}{4} \partial_{\lambda}h\partial^{\lambda}h
>  - \frac{1}{2} \partial_{\mu}h^{\mu\nu}\partial_{\nu}h
>  + \frac{1}{2} \partial_{\mu}h^{\mu\nu}\partial^{\lambda}h_{\lambda\nu}
>  $$
>  

Show that quadratic Lagrangian for $h_{\mu\nu}$ is identical to (27) up to total derivative terms:

Compare the result of mine to the result of (27)
$$
\mathcal{L} = \frac{1}{4} h^{\mu\nu} \Box h_{\mu\nu} - \frac{1}{4} h \Box h + \frac{1}{2} h \partial_{\mu} \partial_{\nu} h^{\mu\nu} - \frac{1}{2} h^{\mu\nu} \partial_{\mu} \partial^{\lambda} h_{\nu\lambda}
$$
We can see that all the 4 terms in the Lagrangian only  differs a total derivative.
