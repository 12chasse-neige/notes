# Lecture 8 Exercise

(1) Consider a model of a heavy scalar particle $\varphi$ of mass $m$ and a massless scalar $\chi$ with the following Lagrangian

$$
\mathcal{L}=-\frac{1}{2}\left[(\partial_{\mu}\varphi)^{2}+m^{2}\varphi^{2}+(\partial_{\mu}\chi)^{2}+\mu\chi\varphi^{2}\right]
$$

This model is disastrously bad from a QFT viewpoint. Nevertheless, please derive the long-range potential for $\varphi$ particle due to the exchange of $\chi$ to the leading order in the coupling $\mu$.

<img src="./Lecture 8 Exercise.assets/tree_level_phi_chi_paper_style.png" alt="tree_level_phi_chi_paper_style">

To get the long-range potential for this Lagrangian, first we need the propagator and vertex for this scattering process.

The propagator for $\chi$ is
$$
\frac{-i}{|\vec{q}|^{2} - i \epsilon}
$$
And the vertex for the 3 point amplitude is $-i\mu$, so we can write the whole 4 particle amplitude as (only consider the t-channel limit in the NR approximation)
$$
\lim_{t \to 0} i \mathcal{M}_{4} = (-i\mu) \times \frac{-i}{|\vec{q}|^{2} - i \epsilon} \times (-i \mu) = i \frac{\mu^{2}}{|\vec{q}|^{2} - i \epsilon}
$$

The relationship between the NR potential and the amplitude is 
$$
V (\vec{r}, \vec{p}) = - \int \frac{\dd[3]{\vec{q}}}{(2 \pi)^{3}} e^{i \vec{q} \cdot \vec{r}} \frac{\mathcal{M}_{4}}{4 E_{1} E_{2}} = - \int \frac{\dd[3]{\vec{q}}}{(2 \pi)^{3}} e^{i \vec{q} \cdot \vec{r}} \frac{\mu^{2}}{4 E^{2} |\vec{q}|^{2}}
$$
Doing the Fourier transform and we can get the final form for the potential.

Notice that the integral
$$
\int \frac{\dd[3]{\vec{q}}}{(2 \pi)^{3}} \frac{e^{i \vec{q} \cdot \vec{r}}}{|\vec{q}|^{2}} = \frac{1}{4 \pi r}
$$
can be calculated using the Residue Theorem. So the final form of the potential is
$$
V (\vec{r}, \vec{p}) = - \frac{\mu^{2}}{16 \pi E^{2} r}
$$
which will approximate
$$
V (\vec{r}, \vec{p}) = - \frac{\mu^{2}}{16 \pi m^{2} r}
$$
in the NR limit.

(2) We replace the interaction term in the above exercise as $-\frac{1}{2}\mu\chi\varphi^{2}\to-\frac{1}{4}\lambda\chi^{2}\varphi^{2}$ where $\lambda$ is the coupling. (This model is again a disaster.) Please work out the long-range potential between two $\varphi$ particles to the leading order in $\lambda$.

At this time the Lagrangian is
$$
\mathcal{L} = -\frac{1}{2}\left[(\partial_{\mu}\varphi)^{2}+m^{2}\varphi^{2}+(\partial_{\mu}\chi)^{2}+ \frac{1}{2} \lambda \chi^{2}\varphi^{2}\right]
$$
<img src="./Lecture 8 Exercise.assets/tree_level_phi2_chi2_paper_style.png" alt="tree_level_phi2_chi2_paper_style">

Now the propagator doesn't change, but the 4 particle vertex will give out 
$$
- i \lambda
$$
This interacrion part will give out possible loop diagrams as follows

<img src="./Lecture 8 Exercise.assets/complete_one_loop_phi2_chi2_paper_style.png" alt="complete_one_loop_phi2_chi2_paper_style">

Among these possible loop diagrams, only case (d) will contribute to the NR long-range potential, so the total amplitude can be derived as
$$
i \mathcal{M}_{4} = \frac{1}{2} (-i\lambda)^{2} \int \frac{\dd[4]{\ell}}{(2 \pi)^{4}} \frac{-i}{\ell^{2} - i \epsilon} \times \frac{-i}{(q - \ell)^{2} - i \epsilon}
$$

This will lead to non-analytical parts with
$$
\mathcal{M}_{\text{nonlocal}} = - \frac{\lambda^{2}}{32 \pi^{2}} \ln q^{2}
$$
So we can similarly do the fourier transform and get the potential like
$$
V (\vec{r}, \vec{p}) = \frac{\lambda^{2}}{128 \pi^{2} m^{2}} \int \frac{\dd[3]{\vec{q}}}{(2 \pi)^{3}} e^{i \vec{q} \cdot \vec{r}} \ln q^{2} = \frac{\lambda^{2}}{128 \pi^{2} m^{2}} \times \left(- \frac{1}{2 \pi r^{3}}\right) = - \frac{\lambda^{2}}{256 \pi^{3} m^{2} r^{3}}
$$
