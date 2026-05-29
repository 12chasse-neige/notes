# Lecture 9
Chasse_neige
Classical limit for light.
$$
\int \dd{x} e^{i \frac{S[x]}{\hbar}} \to e^{i \frac{S[x_{cl}]}{\hbar}}
$$
## Light Bending
The sun (a spin-0 particle) exchanges some gravitons with the photon. The conditions for the limit is
$$
b \gg G M_{\odot} \gg \omega^{-1}
$$
### Phase Shift
In the CoM frame, the 2 to 2 scattering (particle number conservation is assumed), the S-matrix  is only the function of $s$ and the scattering angle $\theta$
$$
S(\sqrt{s}, \theta) \equiv \langle \{\phi (\vec{p'}) \gamma(\vec{- p'})\}_{-}| \times | \{\phi(\vec{p}) \gamma (- \vec{p})\}_{+} \rangle
$$
We want to project the states onto the eigenstates of the angular momentums, say, doing partial wave expansion
$$
|\phi(\vec{p}) \gamma (\vec{-p}) \rangle \to | E_{CM}, l, n \rangle
$$
$$
S_{l} (E_{CM}) = \frac{1}{N} \int_{-1}^{+1} \dd{\cos \theta} P_{l} (\cos \theta) S (E_{CM}, \theta)
$$
$$
S (E_{CM}, \theta) = \frac{N}{2} \sum_{l = 0}^{\infty} (2l + 1) P_{l} (\cos \theta) S_{l} (E_{CM})
$$
Where the normalization
$$
N  = \frac{8 \pi E_{CM}}{|\vec{p}|}
$$
Taking the Unitarity of S, all the diagnal terms of S are pure phases
$$
S_{l} (E_{CM}) = e^{i \chi_{l} (E_{CM})}
$$
### Classical Limit
We choose the limit of $l \to \infty$ and $\theta \ll 1$, define
$$
b = \frac{J}{p} = \frac{\sqrt{l (l + 1)}}{p}
$$
One useful equation of the Lengendre Polynomial 
$$
P_{l} (\cos \theta) \approx J_{0} (J \theta) = \int_{0}^{2 \pi} \frac{\dd{z}}{2 \pi} e^{i J \theta \cos z}
$$
Define the wave packet states
$$
|g_{+} \rangle = \int \dd{E}_{CM} \sum_{l,n} g_{l,n} (E_{CM}) | \{E_{CM}, l, n\} \rangle
$$
We guess the outstate is $| RT g \rangle$ (we assume the transform is a time delay and a rotation), if our guess is true, the overlap
$$
\langle RT g | S g \rangle
$$
will be non-zero. We calculate the inner product
$$
\begin{gathered}
\langle RT g | S g \rangle = \langle g | e^{i J_{y} \theta + i H_{0} \Delta t} \times S | g \rangle \\ =
\int \dd{E} \dd{E'} \sum_{l, n l', n'} \langle E', l', n'| g^{*}_{l'n'} (E') g_{ln} (E) P_{l'} (\cos \theta) e^{i E' \Delta t} e^{i \chi_{l} (E)} | E,l,n \rangle \\ \rightarrow^{l \to 0}
\int \dd{E} \dd{l} \int_{0}^{2 \pi} \frac{\dd{z}}{2 \pi} \sum_{n} |g_{l,n} (E)|^{2} \times e^{il \theta \cos z + i E \Delta t  + i \chi_{l}}
\end{gathered}
$$
Saddle-point
$$
\begin{gathered}
\pdv{}{z} = \sin z = 0 \\
\pdv{}{l} = \theta \cos z + \pdv{\chi_{l}}{l} = 0 \\
\pdv{}{E} = \Delta t + \pdv{\chi_{l}}{E} = 0
\end{gathered}
$$
Which gives out
$$
\begin{gathered}
\theta = \frac{1}{p} \left|\pdv{\chi (E, b)}{b}\right| \\
\Delta t = - \pdv{\chi (E, b)}{E}
\end{gathered}
$$
### From Amplitude to Phase Shift
$$
e^{i \chi_{l} (E)} - 1 = i M_{l} (E) = \frac{1}{N} \int_{-1}^{1} \dd{\cos \theta} P_{l} \times M (E, \theta)
$$
Taking large-l limit
$$
M_{l} (E) \approx \int_{-1}^{1} \dd{\cos \theta} \int_{0}^{2 \pi} \frac{\dd{z}}{2 \pi} e^{i l \theta \cos z} M (E, \theta)
$$
where $\theta = \frac{q}{p}$
$$
M (E, b) = \frac{1}{N p^{2}} \int_{0}^{\infty} q \dd{q} \int_{0}^{2 \pi} \frac{\dd{z}}{2 \pi} e^{i b q \cos z} M (E, q)
$$
 where
$$
\begin{gathered}
\vec{q} = (q,0,0) = (q_{\perp}, 0) \\
\vec{b} = (\cos z, \sin z, 0) = (b_{\perp}, 0)
\end{gathered}
$$
Plug in these terms
$$
e^{i \chi (E, b)} - 1 = \frac{1}{4 E_{CM} p} \int \frac{\dd[2]{q_{\perp}}}{(2 \pi)^{2}} e^{i b_{\perp} \cdot q_{\perp}} i M (\vec{p}, \vec{q})
$$
Which gives out
$$
\chi_{0} (E, b) = \frac{1}{4 E_{CM} p} \int \frac{\dd[2]{q_{\perp}}}{(2 \pi)^{2}} e^{i b_{\perp} \cdot q_{\perp}} M_{\text{Born}} (\vec{p}, \vec{q})
$$
### Gravitational Scattering of Two Scalars
Taking $m_{1} = m$ and $m_{2} \to 0$, the amplitude is
$$
M = \frac{\kappa^{2}}{q^{2}} \left(E_{CM}^{2} - m^{2}\right)^{2}
$$
$$
\chi_{G,0} (E, b) = - 2 G (E_{CM}^{2} - m^{2}) \log \frac{b}{b_{IR}}
$$
After finding the saddle-points, the results are
$$
\begin{gathered}
\theta = \frac{4 G m}{b} \\
\Delta t = 4 G m \log \frac{b}{b_{IR}}
\end{gathered}
$$
### EM Scattering
\[
\mathcal{M} = \frac{4 e^{2} Q_{a} Q_{b}}{q^{2} - i \epsilon} p_{1} \cdot p_{2} = -\frac{4 e^{2} Q_{a} Q_{b}}{q^{2} - i \epsilon} \times \frac{E_{CM}^{2} - m^{2}}{2}
\]
Doing fourier transform, this phase will have some infared radiation divergence, so we’ll do some cut-off.
\[
\chi_{EM,0} (E, b) = 2 \alpha Q_{a} Q_{b} \log \frac{b}{b_{IR}}
\]
Finding the saddle point, the results are
\[
\theta = \frac{1}{p} \left|\pdv{\chi(E, b)}{b}\right| = \frac{2 \alpha Q_{a} Q_{b}}{pb}
\]
But the EM case will not have time delay in the leading order.
### Photon Spin
Considering the photon helicity and expand the result to the first-order of $G_{N}$ and $\hbar$, we can get
\[
\theta = \frac{4 G m}{b} + \frac{15 \pi}{4} \left(\frac{G m}{b}\right)^{2} + C \left(\frac{G m}{b}\right)^{2} \times \frac{1}{mb} + \cdots
\]
## Gravitational Light-by-light Scattering
Two photons exchange a graviton. The long-range part is only induced by the t-channel singularity. The two cases are while the beams are parallel or anti-parallel (we can always boost the not parallel cases to that)
1.  Parallel: $s = t = u = 0$
    \[
    \mathcal{M} \sim G \times O(s,t,u) = 0
    \]
    Two parallel beams of light do not feel gravitational attraction.
2.  Anti-parallel
    \[
    \lim_{t \to 0} \mathcal{M} (1^{+}, 2^{+}, 3^{-}, 4^{-}) = \frac{\kappa^{2}}{t} [12]^{2} \langle 34 \rangle^{2} = \frac{16 \kappa^{2} p^{4}}{t}
    \]
    So we have the phase shift
    \[
    \chi_{0} = - \frac{\kappa^{2} p^{2}}{\pi^{2}} \ln \frac{b}{b_{IR}}
    \]
    And get the angle
    \[
    \theta = \frac{8 G p}{b}
    \]
