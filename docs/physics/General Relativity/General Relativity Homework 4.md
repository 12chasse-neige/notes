# General Relativity Homework 4

吴桐 2024012555

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
\Gamma^{t} {}_{tr} = \Gamma^{t}_{rt} = \frac{B'}{2B} = \frac{GM}{r^{2} - 2 GM r} \\
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

### Mercury Precession

First, we use the Killing vectors to find some conserved quantities. For the Killing vector $\delta^{\mu} {}_{t}$, we have
$$
g_{\mu \nu} U^{\mu} \delta^{\nu} {}_{t} = - \left(1 - \frac{2 GM}{r}\right) \cdot \dv{t}{\tau} = \text{Constant} \equiv -E
$$
For the Killing vector $\delta^{\mu} {}_{\phi}$,  we have
$$
g_{\mu \nu} U^{\mu} \delta^{\nu} {}_{\phi} = r^{2} \sin^{2} \theta \cdot \dv{\phi}{\tau} = \text{Constant} \equiv L
$$
We choose the plain $\theta = \frac{\pi}{2}$,  so the $\theta$ component’s geodesic equation is automatically satisfied.

For the left component $r$, its geodesic equation can be written as
$$
\dv[2]{r}{\tau} + \Gamma^{r} {}_{\mu \nu} \dv{x^{\mu}}{\tau} \dv{x^{\nu}}{\tau} = 0
$$
Expand this equation, using the non-zero Christoffel symbols, we have
$$
\dv[2]{r}{\tau} + \frac{GM}{r^{2}} \left(1 - \frac{2 GM}{r}\right) \left(\dv{t}{\tau}\right)^{2} - \frac{GM}{r^{2} - 2 GM r} \left(\dv{r}{\tau}\right)^{2} + \sin^{2} \theta (GM - r) \left(\dv{\phi}{\tau}\right)^{2} = 0
$$
Substituting the conserved quantities $E$ and $L$ into the above equation, we have
$$
\dv[2]{r}{\tau} + \frac{GM}{r^{2} - 2GMr} \left(E^{2} - \left(\dv{r}{\tau}\right)^{2}\right) + L^{2} \frac{GM - r}{r^{4}} = 0
$$
Change the variable from $\tau$ to $\phi$
$$

$$


## Problem 3

For a Schwarzschild blackhole with mass $M$, the metric can be written as
$$
\dd{\tau}^{2} = \left(1 − \frac{2 GM}{r}\right) \dd{t}^{2} − \left(1 − \frac{2GM}{r}\right)^{−1} \dd{r}^{2} − r^{2} (\dd{\theta}^{2} + \sin^{2} \theta \dd{\phi}^{2})
\tag{1}
$$

Now, consider two observers $A$ and $B$. At $t=t_{0}$ they were both at $r= 6GM$. At $t_{0}$, $A$ starts to freely fall into the blackhole in the radial direction, while $B$ remains fixed at $r= 6GM$. From $t_{0}$, $A$ sends back a signal to $B$ every $Δt$ (measured by the clock flying with $A$). Please calculate how often $B$ observed a signal from $A$.