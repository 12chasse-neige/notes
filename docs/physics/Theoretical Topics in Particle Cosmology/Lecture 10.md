# Lecture 10

Chasse_neige

## Next to Leading Order Effect: Mercury Precession

$$
v \sim  \sqrt{\frac{Gm}{r}}
$$

The $G_{N}^{2}$ term refers to a 1-loop (non-ladder) graph.

1.  1-loop graphs are complicated
2.  Some graphs at O($G_{N}^{2}$ ) are IR diverged
3.  $V(\vec{r}, \vec{p})$ beyond Newtonian order is gauge dependent
4.  The precession rate is an “observable” from a bound state (bound state to boundary mapping)

### 1-loop Amplitudes from On-shell Data

The long-range effects come from the $q \to 0$ singularity, so we only consider the poles (which implies that the UV div is not important). We need one tech to analyze the singularity while avoid doing the loop integral.

#### Landau Analysis

$$
f(z) = \int_{w_{1}}^{w_{2}} \dd{w} g (z, w)
$$

Result: only 2 cases will give out singularity on the contour

1.  The singular point is on the end of the contour.
2.  2 poles pinches the contour from different directions on one point.

$$
\mathcal{M}^{(2)} = \int \frac{\dd[4]{l}}{(2 \pi)^{4}} \frac{-i}{l_{1}^{2}} \frac{-i}{l_{2}^{2}} \sum_{h_{1}, h_{2} = \pm 2} \text{Tree 1} \times \text{Tree 2} + \text{regular terms as q} \to 0
$$
### Gravitational Compton Scattering

Considering the 3 factorization channels (we take the t channel into account because the gravitons can have nonzero self 3-point amplitude), a solution is


$$
\mathcal{M} (p_{1}, l_{1}^{+}, l_{2}^{-}, p_{1}^{\prime}) = \frac{\langle l_{2} | p_{1} | l_{1} ]^{4}}{M_{pl}^{2} q^{2} (2 p_{1} \cdot l_{1}) (2 p_{1}^{\prime} \cdot l_{1})}
$$
$$
\mathcal{M} (p_{1}, l_{1}^{+}, l_{2}^{+}, p_{1}^{\prime}) = \frac{m^{4} [l_{1}, l_{2}]^{4}}{M_{pl}^{2} q^{2} (2 p_{1} \cdot l_{1}) (2 p_{1}^{\prime} \cdot l_{1})}
$$
which is verified in all the 3 channels. Plugging in these forms, we can give out the second-order loop amplitude as

$$
\mathcal{M}^{(2)} = \frac{1}{M_{pl}^{4}} \int \frac{\dd[4]{l}_{1}}{(2 \pi)^{4}} \frac{1}{l_{1}^{2} l_{2}^{2}} \frac{N}{q^{4} (2 p_{1} \cdot l_{1}) (2 p_{1}^{\prime} \cdot l_{1}) (2 p_{2} \cdot l_{1}) (2 p_{2}^{\prime} \cdot l_{1})}
$$

The on-shell condition needs $l_{1}^{2} = l_{2}^{2} = 0$, which will give out that

$$
\frac{1}{(2p_{1} \cdot l_{1}) (2 p_{1}^{\prime} \cdot l_{1})} = - \frac{1}{t} \left( \frac{1}{2 p_{1} \cdot l_{1}} + \frac{1}{ 2 p_{1}^{\prime}\cdot l_{1}}  \right)
$$
 This identity allows us to decompose the integrand into simpler pieces, each of which can be evaluated using standard loop integration techniques, ultimately yielding the long-range potential at next-to-leading order.

$$
\mathcal{M}^{(2)} = \frac{1}{M_{pl}^{4}} \frac{1}{t^{4}} \int \frac{\dd[4]{l}_{1}}{(2 \pi)^{4}} \frac{N}{l_{1}^{2} l_{2}^{2}} \left\{ \left[ \frac{1}{(2 p_{1} \cdot l_{1}) (2 p_{2} \cdot l_{1})} + (p_{1} \to p_{1}^{\prime}) \right] + (p_{2} \to p_{2}^{\prime}) \right\}
$$
#### NR Amplitude: Born Series

The Fourier Transform for the potential is

$$
- iV(\vec{p}^{\prime}, \vec{p}) \times 2 \pi \delta (\omega_{1}^{\prime} + \omega_{2}^{\prime} - \omega_{1} - \omega_{2})
$$

We find that the boxes will have IR divergence, so we neglect these boxes.
Next we should take into account the triangles and bubbles like

$$
\mathcal{M}_{\text{bubble}} \sim \frac{m^{4}}{M_{pl}^{4}} \int \frac{\dd[4]{l_{1}}}{l_{1}^{4} l_{2}^{4}} \sim \frac{m^{4}}{M_{pl}^{4}} \log \frac{g}{\mu}
$$

$$
\mathcal{M}_{triangle} \sim \frac{m^{6}}{M_{pl}^{4}} \int \frac{\dd[4]{l_{1}}}{l_{1}^{2} l_{2}^{2} (2 p_{1} \cdot l_{1})} \sim \frac{m^{4}}{M_{pl}^{4}} \times \frac{m}{q}
$$

So the term we have to integrate out is the triangle, where only the inverse helicity case could contribute to. In this case, the numerator is

$$
\begin{gathered}
	N = \langle l_{2} | p_{1} | l_{1} ]^{4} \langle l_{2} | p_{2} | l_{2}]^{4} \\ 
	= [p_{1\mu} l_{1\nu} p_{2\rho} l_{2 \sigma} \tr(\sigma^{\mu} \bar{\sigma}^{\nu} \sigma^{\rho} \bar{\sigma}^{\sigma})]^{4}
\end{gathered}
$$
Define $x_{1} = 2 p_{1} \cdot l_{1}$ and $x_{2} = 2 p_{2} \cdot l_{1}$, the triangle part actually refers to terms like

$$
O(x_{1}^{0} x_{2}^{n}) \quad \text{and} \quad O(x_{1}^{n} x_{2}^{0}) \quad (n \geq 1)
$$

Select these terns out and do this integral, the final form of the amplitude is

$$
\mathcal{M}_{triangle} = 6 \pi^{2} G_{N}^{2} \frac{-1}{|\vec{q}|} (m_{1} + m_{2}) \times [m_{1}^{2} m_{2}^{2} - 5 p_{1} \cdot p_{2}] + \cdots
$$

#### Matching

For a NREFT, the 1st and 2nd order amplitudes are given out 

$$
\begin{cases}
i \mathcal{M}_{NR}^{(1)} = - i V^{(1)} (\vec{p'}, \vec{p}) \\
i \mathcal{M}_{NR}^{(2)} = - i V^{(2)} (\vec{p'}, \vec{p}) + \int \frac{\dd[4]{k}}{(2 \pi)^{4}} \frac{V^{(1)}(\vec{p'}, \vec{k}) V^{(1)} (\vec{k}, \vec{p})}{D_{1} D_{2}}
\end{cases}
$$
Substituting all the previous results into the amplitude (notice that the IR divergence from the boxes will leave some non-zero terms)

$$
\begin{gathered}
	V^{(2)} = \frac{1}{4 E_{1} E_{2}} \left\{ - M_{triangle} + \left[ \int_{k} \frac{V^{(1)} V^{(2)}}{D_{1} D_{2}} - M_{\square} \right] \right\} \\ =
	\frac{1}{4 E_{1} E_{2}} \left\{ - \frac{24\pi^{2}G_{N}^{2}}{q} M m_{1}^{2} m_{2}^{2} \right\} + \frac{4\pi^{2}G_{N}^{2}}{q} (\mu - M) m_{1}^{2} m_{2}^{2} + \frac{32\pi^{2}G_{N}^{2}}{q} M m_{1}^{2} m_{2}^{2}
\end{gathered}
$$

The final potential is
$$
V^{(2)} = \frac{G_{N}^{2}}{2 r^{2}} (\mu + M) m_{1} m_{2}
$$
We can compare this form with the EIH potential

$$
V (\alpha) = - \frac{G_{N}M\mu}{r} \times \left\{ 1 + \left[ \frac{1}{2} + \left( \frac{3}{2} - \alpha \right) \frac{M}{\mu}\right] \frac{p^{2}}{M \mu} + \left( \frac{1}{2} + \frac{\alpha M}{\mu} \right) \frac{(\vec{p}\cdot \vec{r})^{2}}{M \mu} + (1 - 2 \alpha) \frac{G_{N}^{2}M^{2}\mu}{2 r^{2}} \right\}
$$
where the gauge parameter $\alpha$ means that the potential will change dependent to $\alpha$ under the gauge transform like

$$
\begin{cases}
\vec{r} \to \vec{r} \left( 1 - \frac{\alpha G_{N}M}{r} \right) \\
\vec{p} \to \vec{p} + \frac{\alpha G_{N}M}{r} [\vec{p} - (\vec{p}\cdot \hat{r})\hat{r}] \\
\end{cases}
$$
Take $\alpha = - \frac{\mu}{2M}$ simplifies the potential to match the derived result.

#### Angle-action Variable

For the Quasi-Keplerian motions, we can find a radial action $S_{r} (E, J)$, which is defined as

$$
S_{r} (E, J) = \frac{1}{2 \pi} \oint \dd{r} p_{r} (E, J, r)
$$
And this is a gauge invariance. We'll use this as the bridge from the amplitude to the precession angle. In the Newtonian limit, the form of this action will become

$$
S_{r} (E, J) = \frac{1}{\pi} \int_{r_{min}}^{r_{max}} \dd{r} \sqrt{ p^{2}(E) + 2 \mu M_{NR} (r) - \frac{J^{2}}{r^{2}} }
$$

#### Periastron Advance 

$$
\Delta \phi = 2 \pi \cdot \frac{\pdv[]{H}{S_{\phi}}}{\pdv[]{H}{S_{r}}} = - 2 \pi \pdv[]{S_{r}}{J}
$$

So we can get the precession angle from the gauge invariance $S_{r}$.

$$
S_{r} = \frac{1}{\pi} \int_{r_{min}}^{r_{max}} \dd{r} \sqrt{ A + \frac{2B}{r} - \frac{C}{r^{2}} } = i \left[ \sqrt{ -C } + \frac{B}{\sqrt{ A }} \right]
$$

with $A = p^{2}, B = G_{N}, C = J - 6 G_{N}^{2} M^{2} \mu$, we can get the precession angle

$$
\Delta \phi = 2 \pi \pdv[]{}{J} \sqrt{ J^{2} - 6 G_{N}^{2} M^{2} \mu^{2} } \approx 2 \pi + \frac{6\pi G_{N}M}{a (1-e^{2})}
$$

