# Lecture 9 Exercise

(1) In this lecture, we have considered the light bending by a point mass (such as the sun) due to gravitation. In principle, the light can also be bent by a heavy charged particle, say a proton, due to electromagnetic interaction. Of course, this does not happen at the leading order of the electromagnetic coupling $e$ (namely $\mathcal{O}(e^{2})$). Please determine at which power does electromagnetic interaction first cause a nonzero bending angle.

The electromagnetic interaction first causes a nonzero macroscopic bending angle at $\mathcal{O}(e^{6})$. The detailed analysis:

1.  Tree-Level ($\mathcal{O}(e^{2})$): The tree-level interaction between a photon and a proton is Compton scattering ($\gamma p \to \gamma p$). While this diagram has two vertices ($\mathcal{O}(e^{2})$), the intermediate $s$-channel and $u$-channel states involve a massive proton. Because there is no exchange of a massless particle in the $t$-channel, there is no $t$-channel singularity, thus it does not generate long-range potential.

2.  One-Loop with One Photon Exchange ($\mathcal{O}(e^{4})$): Phontons do not have 3 particle amplitudes, so we can not get a single photon exchange here.  So the $\mathcal{O}(e^{4})$ potential is not allowed.

3.  One-Loop with Two Photon Exchange ($\mathcal{O}(e^{6})$): The $e^{+}e^{-}$ loop must exchange two virtual photons with the proton's background field. This process involves
    -  The virtual $e^{+}e^{-}$ loop coupling to the two external photons ($2$ vertices $\rightarrow e^{2}$).
    -  The same loop exchanging two virtual photons with the proton ($2$ vertices on the loop + $2$ vertices on the proton $\rightarrow e^{4}$).

Combining these gives the leading non-vanishing amplitude at $\mathcal{O}(e^{6})$.

(2) Following (1), please determine the functional form of the bending angle $\Delta\theta$ of photon by a proton. That is, please show how $\Delta\theta$ depends on various parameters and fundamental constants in question. You don't need to determine the overall pure-number coefficient.

From the last question we can know that the interaction term scales as

$$
\mathcal{L}_{int} \propto \frac{e^{4}}{m_{e}^{4}} F_{e}^{2} F_{\gamma}^{2} \propto \frac{e^{6}}{m_{e}^{4} r^{4}} \omega^{2}
$$
So the Born approximation for the amplitude is
$$
\mathcal{M}_{\text{Born}} \propto \int \dd[3]{\vec{r}} e^{- i \vec{q} \cdot \vec{r}} \frac{1}{r^{4}} \sim |\vec{q}|
$$
The phase shift $\chi(E,b)$ at an impact parameter $b$ is the fourier transform for the proportional part of the momentum $\vec{q}$
$$
\chi (E, b)=\frac{1}{4 E_{\mathrm{CM}} p} \int \frac{\mathrm{~d}^2 \vec{q}_{\perp}}{(2 \pi)^2} e^{\mathrm{i} \vec{b}_{\perp} \cdot \vec{q}_{\perp}} \mathcal{M}_{\mathrm{Born}}(\vec{p}, \vec{q})
$$
Plugging in the form of the amplitude, we can get the form for $\chi$
$$
\chi(E,b) \propto \frac{\omega e^{6}}{m_{e}^{4} b^{3}}
$$
The saddle-point condition dictates that the classical scattering angle is related to the derivative of the phase shift with respect to the impact parameter
$$
\Delta\theta = \frac{1}{p} \left| \frac{\partial \chi(\omega, b)}{\partial b} \right|
$$
Since $p = \omega$  for a photon, taking the derivative of $\chi(b)$ with respect to $b$ directly gives the functional form of the bending angle
$$
\Delta\theta \propto \frac{e^{6}}{m_{e}^{4} b^{4}}
$$
