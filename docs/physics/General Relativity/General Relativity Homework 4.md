# General Relativity Homework 4

Chasse_neige

## Problem 1

Please show that $\delta^{\mu} {}_{t}$ and $\delta^{\mu} {}_{\phi}$ are Killing vectors of the Schwarzschild metric.

The Schwarzschild metric can be written as
$$
g_{\mu \nu} = \text{diag} \begin{pmatrix}
- \left(1 - \frac{2 GM}{r}\right), \left(1 - \frac{2 GM}{r}\right)^{-1}, r^{2}, r^{2} \sin^{2} \theta
\end{pmatrix}
$$
Copy the Christoffel symbols of the Schwarzschild metric from the last homework
$$
\Gamma^{t} {}_{tr} = \Gamma^{t} {}_{rt} = \frac{B'}{2B} = \frac{GM}{r^{2} - 2 GM r} \\
\Gamma^{r} {}_{tt} = \frac{B'}{2A} = \frac{GM}{r^{2}} \left(1 - \frac{2 GM}{r}\right) \\
\Gamma^{r} {}_{rr} = \frac{A'}{2A} = - \frac{GM}{r^{2} - 2 GM r} \\
\Gamma^{r} {}_{\theta\theta} = -\frac{r}{A} = GM - r \\
\Gamma^{r} {}_{\phi\phi} = -\frac{r\sin^{2}\theta}{A} = \sin^{2} \theta (GM - r) \\
\Gamma^{\theta} {}_{r\theta} = \Gamma^{\theta} {}_{\theta r} = \frac{1}{r} \\
\Gamma^{\theta} {}_{\phi\phi} = -\sin\theta\cos\theta \\
\Gamma^{\phi} {}_{r\phi} = \Gamma^{\phi} {}_{\phi r} = \frac{1}{r} \\\Gamma^{\phi} {}_{\theta\phi} = \Gamma^{\phi} {}_{\phi\theta} = \cot\theta
$$
To proove that $\delta^{\mu} {}_{t}$ is Killing vector, we have to show that
$$
\xi {}_{\mu; \nu} + \xi {}_{\nu; \mu} = 0
$$
Using the metric tensor to lower the index of $\delta^{\mu} {}_{t}$, we have
$$
\xi_{\mu} = g_{\mu \nu} \delta^{\nu} {}_{t} = \left(-\left(1 - \frac{2 GM}{r}\right), 0, 0, 0 \right)
$$
Consider the covariant derivative of the vector
$$
\xi_{\mu; \nu} = \xi_{\mu, \nu} - \Gamma^{\eta} {}_{\mu \nu} \xi_{\eta}
$$

$$
\xi_{\nu; \mu} = \xi_{\nu, \mu} - \Gamma^{\eta} {}_{\nu \mu} \xi_{\eta}
$$

So we can write down the non-zero components of the covariant derivative of this vector (for this derivative is symmetric, we only need to consider the components with $\mu \leq \nu$)
$$
\xi_{t; r} + \xi_{r; t} = - \frac{2 GM}{r^{2}} - \Gamma^{t} {}_{tr} \xi_{t} - \Gamma^{t} {}_{rt} \xi_{t} = - \frac{2GM}{r^{2}} + 2 \cdot \frac{GM}{r^{2} - 2 GM r} \cdot \left(1 - \frac{2GM}{r}\right) = 0
$$
For other components, the $\xi_{\mu, \nu}$ is zero and the Christoffel symbols with the sign $\Gamma^{t} {}_{\mu \nu}$ are zero, so the covariant derivative is zero. So we have shown that $\delta^{\mu} {}_{t}$ is a Killing vector.

Similarly, to show that the vector $\delta^{\mu} {}_{\phi}$ is a Killing vector, we first use the metric tensor to lower the index of $\delta^{\mu} {}_{\phi}$, we have
$$
\xi_{\mu} = g_{\mu \nu} \delta^{\nu} {}_{\phi} =  \left(0, 0, 0, r^{2} \sin^{2} \theta\right)
$$
So we also add the covariant derivatives of this vector
$$
\xi_{\phi; r} + \xi_{r; \phi} = \xi_{\phi, r} + \xi_{r, \phi} - \Gamma^{\phi} {}_{\phi r} \xi_{\phi} - \Gamma^{\phi} {}_{r \phi} \xi_{\phi} \\ = 
2 r \sin^{2} \theta + 0 - 2 \cdot \frac{1}{r} \cdot r^{2} \sin^{2} \theta = 0
$$

$$
\xi_{\phi; \theta} + \xi_{\theta; \phi} = \xi_{\phi, \theta} + \xi_{\theta, \phi} - \Gamma^{\phi} {}_{\phi \theta} \xi_{\phi} - \Gamma^{\phi} {}_{\theta \phi} \xi_{\phi} = 2 r^{2} \sin\theta \cos\theta + 0 - 2 \cdot \cot\theta \cdot r^{2} \sin^{2} \theta = 0
$$

For other components, the $\xi_{\mu, \nu}$ is zero and the Christoffel symbols with the sign $\Gamma^{\phi} {}_{\mu \nu}$ are zero, so the covariant derivative is zero. So we have shown that $\delta^{\mu} {}_{\phi}$ is a Killing vector.

## Problem 2

Please repeat the steps of calculating the phenomena of Mercury precession and light deflection induced by general relativity, and calculate what is the precession angle of the Mars during GR effect.

First, we use the Killing vectors to find some conserved quantities. For the Killing vector $\delta^{\mu} {}_{t}$, we have
$$
g_{\mu \nu} U^{\mu} \delta^{\nu} {}_{t} = - \left(1 - \frac{2 GM}{r}\right) \cdot \dv{t}{\tau} = \text{Constant} \equiv -E
$$
For the Killing vector $\delta^{\mu} {}_{\phi}$,  we have
$$
g_{\mu \nu} U^{\mu} \delta^{\nu} {}_{\phi} = r^{2} \sin^{2} \theta \cdot \dv{\phi}{\tau} = \text{Constant} \equiv L
$$
We choose the plain $\theta = \frac{\pi}{2}$,  so the $\theta$ component’s geodesic equation is automatically satisfied.

Now we can derive the track of the planet
$$
\dd{\tau}^{2} = \left(1 − \frac{2 GM}{r}\right) \dd{t}^{2} − \left(1 − \frac{2GM}{r}\right)^{−1} \dd{r}^{2} − r^{2} (\dd{\theta}^{2} + \sin^{2} \theta \dd{\phi}^{2})
\tag{1}
$$
So
$$
1 = \left(1 − \frac{2 GM}{r}\right) \left(\dv{t}{\tau}\right)^{2} - \left(1 − \frac{2 GM}{r}\right)^{-1} \left(\dv{r}{\tau}\right)^{2} - r^{2} \left(\dv{\phi}{\tau}\right)^{2}
$$
Substituting the conserved quantities into the above equation, we have
$$
\left(\dv{r}{\tau}\right)^{2} - E^{2} + \left(1 + \frac{L^{2}}{r^{2}}\right)\left(1 - \frac{2 GM}{r}\right) =0
$$
Use a new variable $u = \frac{1}{r}$, we can rewrite the above equation as
$$
\left(\dv{u}{\phi}\right)^{2} + \frac{- E^{2} + 1}{L^{2}} - \frac{2 GM u}{L^{2}} + u^{2} - 2 GM u^{3} = 0
$$
So this equals
$$
\dv[2]{u}{\phi} + u = \frac{GM}{L^{2}} + 3 GM u^{2}
$$
We use the perturbation method to solve this equation
$$
u = u_{0} + u_{1}
$$
The first-order solution $u_{0}$ is
$$
u_{0} = \frac{GM}{L^{2}} (1 + e \cos \phi)
$$
The second-order perturbation is described by the equation
$$
\dv[2]{u_{1}}{\phi} + u_{1} = 3 GM u_{0}^{2} =  \frac{3 G^{3} M^{3}}{2L^{4}} (2 + 4e \cos \phi + e^{2}\cos 2 \phi + e^{2})
$$
So the approximate $u_{1}$ is
$$
u_{1} = \frac{G^{3} M^{3}}{L^{4}} (3 + \frac{3}{2} e^{2} + 3 e \phi \sin \phi - \frac{e^{2}}{2} \cos 2 \phi)
$$
Thus our total track equation leads to
$$
u = \cdots + \frac{GM}{L^{2}} e \cos \phi + 3 \frac{G^{3} M^{3}}{L^{4}} e \phi \sin \phi \\ \approx 
\cdots + \frac{GM}{L^{2}} e \cos ((1 - 3 \frac{G^{2} M^{2}}{L^{2}}) \phi)
$$
So the precession angle per period is
$$
\Delta \phi = 6 \pi \frac{G^{2} M^{2} m^{2}}{L^{2} c^{2}}
$$
The $L$ in this precession angle is the classical $L$ which contains the mass of the planet.

### Mercury Precession

The parameters of Mercury orbit are
$$
a = 0.3870993 \mathrm{AU} \\
e = 0.20564 \\
T = 87.969257 \mathrm{D}
$$
So the total precession angle in one century of the Mercury orbit is
$$
\Delta \phi = \frac{100 \times 365}{87.969257} \times 6 \pi \times \frac{G M_{\text{sun}}}{a (1 - e^{2}) \cdot c^{2}} \approx 42.98''
$$

### Mars Precession

The parameters of Mars orbit are
$$
a = 1.52371 \mathrm{AU} \\
e = 0.09339 \\
T = 686.92971 \mathrm{D}
$$
So the total precession angle in one century of the Mars orbit is
$$
\Delta \phi = \frac{100 \times 365}{686.92971} \times 6 \pi \times \frac{G M_{\text{sun}}}{a (1 - e^{2}) \cdot c^{2}} \approx 1.35''
$$

## Problem 3

For a Schwarzschild blackhole with mass $M$, the metric can be written as
$$
\dd{\tau}^{2} = \left(1 − \frac{2 GM}{r}\right) \dd{t}^{2} − \left(1 − \frac{2GM}{r}\right)^{−1} \dd{r}^{2} − r^{2} (\dd{\theta}^{2} + \sin^{2} \theta \dd{\phi}^{2})
\tag{1}
$$

Now, consider two observers $A$ and $B$. At $t=t_{0}$ they were both at $r= 6GM$. At $t_{0}$, $A$ starts to freely fall into the blackhole in the radial direction, while $B$ remains fixed at $r= 6GM$. From $t_{0}$, $A$ sends back a signal to $B$ every $Δt$ (measured by the clock flying with $A$). Please calculate how often $B$ observed a signal from $A$.

 First consider the geodesic equation of the observer $A$ in the radial direction, the motion equation is
$$
\left(\dv{r}{\tau}\right)^{2} - E^{2} + 1 - \frac{2 GM}{r} =0
$$
Using the initial condition $r = 6 GM$ at $\tau = t_{0}$, we can get
$$
E = \sqrt{\frac{2}{3}}
$$
Therefore
$$
\dv{r}{\tau} = \sqrt{\frac{2 GM}{r} - \frac{1}{3}}
$$
and the integral gives out
$$
6 \sqrt{3} GM \arccos (\sqrt{1 - \frac{r}{6GM}}) - \sqrt{3r (6GM - r)} = \tau - t_{0}
$$
Then consider the geodesic equation of the signal sent by $A$, we have the null geodesic equation
$$
0 = \left(1 − \frac{2 GM}{r}\right) \left(\dv{t}{\lambda}\right)^{2} - \left(1 − \frac{2 GM}{r}\right)^{-1} \left(\dv{r}{\lambda}\right)^{2} - r^{2} \left(\dv{\phi}{\lambda}\right)^{2}
$$
For the signal travels radially, we have $\dv{\phi}{\lambda} = 0$, so the above equation can be rewritten as
$$
\dv{r}{t} = 1 - \frac{2 GM}{r}
$$
At the position $r$, when the time in A’s frame passes $\Delta t$, A actually moves 
$$
\Delta r = \Delta t \cdot \sqrt{\frac{2 GM}{r} - \frac{1}{3}}
$$
closer to the blackhole, and while the time in A’s frame passes $\Delta t$, the time in B’s frame passes
$$
\Delta \tau_{B} = \Delta t \cdot \frac{2}{3\left(1 - \frac{2 GM}{r}\right)}
$$
So B will receive the later signal when time in its frame has passed
$$
\Delta t_{B} = \Delta t \cdot \frac{2}{3\left(1 - \frac{2 GM}{r}\right)} + \Delta t \cdot \frac{\sqrt{\frac{2 GM}{r} - \frac{1}{3}}}{1 - \frac{2 GM}{r}} \cdot \sqrt{\frac{2}{3}} \\ =
\frac{2 + \sqrt{\frac{12 GM}{r} - 2}}{3 \left(1 - \frac{2 GM}{r}\right)} \Delta t
$$
