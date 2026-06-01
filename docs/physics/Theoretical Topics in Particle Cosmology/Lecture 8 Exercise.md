# Lecture 8 Exercise

We have learned how a graviton talks to matter particles at the leading order in the coupling ($\kappa$ in Lecture 6) and now we are ready to explore its consequence in classical gravity. The plan is to consider the classical consequences of the leading order coupling first, then consider the next-to-leading order effect, and finally go to all orders in $\kappa$ so that the general relativity (GR) is recovered. As before, we will occasionally include the case of spin-1 (photon) for comparison.

At the leading order, there are a few famous classical effects of electromagnetism (EM) and gravitation, including:

1. Coulomb's law for EM and Newton's law for gravity;
2. Special-relativistic corrections to 1, which leads to, for instance, spin-orbit couplings (fine structures) and part of the Mercury precession.
3. Deflection of light rays by a point mass (such as the Sun);
4. Shapiro delay of light signals by a point mass, which is historically known as the fourth test of GR.

In particular, the last two effects are normally explained due to the spacetime curvature. We will recover all these effects in the current and the next lectures without using this language.

All effects above are classical, and some non-relativistic (NR) as well. So, before anything, we need to learn how to take:

a) NR limit;
b) Classical limit.

Naively, we can just recover all $c$ and $\hbar$ dependences and send $c\to\infty$ for the NR limit and $\hbar\to 0$ for the classical limit, but they are nonsense since $c = 1$ and $\hbar = 1$. In fact, what we really mean is:

a) NR limit: The characteristic velocity of the system $v \ll c$.
b) Classical limit: The characteristic angular momentum of the system $J \gg \hbar$.

These seem trivial, but we use them to advocate a viewpoint that the NR and classical limits should be thought of as some particular kinematic limits of physical processes, rather than as parametric limits of some fictitious theories in which $c$ and $\hbar$ vary freely.

Taking either of the two limits leads to great simplifications, essentially because the particle number is conserved in both cases. Recall that the particle number changing process in relativistic quantum system is a consequence of combining $E=mc^{2}$ and $p^{\mu}=\hbar k^{\mu}$: An attempt of resolving the spatial structure of a particle of mass $m$ within radius $m^{-1}$ would inevitably lead to particle production.

Conversely, when considering the scattering of two stable particles of mass $m_{1}\sim m_{2}>0$, we can avoid number change if either, the kinetic energy is not large enough to create more particles, which is the NR limit, or, the two particles are kept very far apart so that they have no chance to probe each other's Compton radius, which is the classical limit.

Of course we will eventually take classical limit for effects covered in the NR limit. The point is that some classical limits can be reached by taking NR first and classical second (such as for the Newtonian potential); but there are classical effects which are direct classical limits of fully relativistic quantum processes without taking NR limit (such as the light bending).

We study NR limit in this lecture and classical limits next.

$\S 1$ NR Limit

For definiteness, suppose we have two species of stable and electrically charged scalar particles $\varphi_{1,2}$ with $q_{1,2}>0$ and $m_{1,2}$ ($m_{1}\leq m_{2}$ without loss of generality). Consider their scattering in the center-of-mass frame. So, the initial state is $|\{\varphi_{1}(\vec{p}),\varphi_{2}(-\vec{p})\}_{+}\rangle$.

Question: What are the possible out states? — The answer is simple: linear combinations of $|\{\varphi_{1}\varphi_{2}(\bar{\varphi}_{1}\varphi_{1})^{M}(\bar{\varphi}_{2}\varphi_{2})^{N}\gamma^{L}\}_{-}\rangle$.

However, if $p_{1}^{0}+p_{2}^{0}=\sqrt{\vec{p}^{2}+m_{1}^{2}}+\sqrt{\vec{p}^{2}+m_{2}^{2}}<3m_{1}+m_{2}$, we must have $M=N=0$. So, we get a stronger version of particle number conservation: $|\{\varphi_{1}\varphi_{2}\}_{+}\rangle\to|\{\varphi_{1}\varphi_{2}\gamma^{L}\}_{-}\rangle$. As a result, we can restrict ourselves to the $\mathcal{H}_{\varphi_{1}}^{(1)}\otimes\mathcal{H}_{\varphi_{2}}^{(1)}$ sector of the full Hilbert space $\mathcal{H}$. (Of course, the photon number can still change in this kinematic region.)

Then, the Hamiltonian for the charged scalar fields reduces to the familiar two-particle form in QM when restricted in the two-particle subspace $\mathcal{H}_{\varphi_{1}}^{(1)}\otimes\mathcal{H}_{\varphi_{2}}^{(1)}$:

$$
H=\int\frac{d^{3}\vec{p}}{(2\pi)^{3}}\left[\sqrt{\vec{p}^{2}+m_{1}^{2}}\,a_{1}^{\dagger}(\vec{p})a_{1}(\vec{p})+(1\leftrightarrow2)\right]+\cdots,
$$

$$
\Rightarrow\quad\sqrt{\vec{p}_{1}^{2}+m_{1}^{2}}+\sqrt{\vec{p}_{2}^{2}+m_{2}^{2}}=m_{1}+m_{2}+\frac{\vec{p}_{1}^{2}}{2m_{1}}+\frac{\vec{p}_{2}^{2}}{2m_{2}}+\cdots. \tag{1}
$$

This is how we recover quantum mechanics for a fixed number of point particles.

$\S 1.1$ A field-theoretic perspective

It is very instructive to rethink the NR limit from a modern QFT (EFT) perspective. Consider a theory of a free complex scalar:

$$
\mathcal{L}=-\partial_{\mu}\varphi^{*}\partial^{\mu}\varphi-m^{2}\varphi^{*}\varphi. \tag{2}
$$

When lower energy $\to 0$ in the 1PS sector, the mass term is more relevant due to the smaller operator dimension. It eventually becomes more important than the kinetic term and the relativistic counting scheme (i.e., the natural unit) breaks down.

Note that restricting to the 1PS sector is important. Had we choose another sector with $N_{\varphi}=N_{\bar{\varphi}}$, when lowering the energy below $m$, all particle-antiparticle pairs will annihilate and we are left with photons only. In this case, the relativistic story still holds: the kinetic term (of photon) dominates over everything.

Now, if we restrict ourselves to 1PS sector, it is wiser to choose the zero of energy at $E=m$ but not $E=0$ of the whole Hilbert space, as shown below:

This motivates us to redefine the field:

$$
\varphi(t,\vec{x})=\frac{1}{\sqrt{2m}}\Psi(t,\vec{x})e^{-imt}, \tag{3}
$$

where $e^{-imt}$ corresponds to the shift in the energy. Then, the previous Lagrangian becomes

$$
\mathcal{L}=i\Psi^{\dagger}\dot{\Psi}+\frac{1}{2m}\Psi^{\dagger}\nabla^{2}\Psi+\frac{1}{2m}\dot{\Psi}^{\dagger}\dot{\Psi}. \tag{4}
$$

For an NR particle, $\dot{\Psi}\sim E\Psi$ and $\nabla\Psi\sim\vec{p}\,\Psi$ and $E=p^{2}/(2m)$. Therefore, the 3 terms are of $\mathcal{O}(E)$, $\mathcal{O}(E)$, and $\mathcal{O}(E^{2}/m)$, respectively. In particular, in the $E\to0$ limit, the third term is negligible, and the Lagrangian simplifies to:

$$
\mathcal{L}\simeq i\Psi^{\dagger}\dot{\Psi}+\frac{1}{2m}\Psi^{\dagger}\nabla^{2}\Psi, \tag{5}
$$

and the equation of motion is $i\dot{\Psi}=-\frac{1}{2m}\nabla^{2}\Psi$.

This looks like a Schr\"odinger equation, but it isn't; It is the Heisenberg equation of an NR scalar field $\Psi$. However, we can write:

$$
\Psi(t,\vec{x})=\int\frac{d^{3k}}{(2\pi)^{3}}e^{-iE_{kt}+i\vec{k}\cdot\vec{x}}a_{\vec{k}}. \tag{6}
$$

That is, we no longer need to pair annihilation and creation operators in a single local field operator.

Then: $\Psi^{\dagger}(t,\vec{x})|\Omega\rangle$ is a time-dependent position eigenstate in the 1PS subspace, satisfying the Schr\"odinger equation identical to the Heisenberg equation above.

$\S 1.2$ Including massless exchange

Now let's minimally couple $\varphi$ to a photon, assuming its charge $q=1$:

$$
\mathcal{L}=-|(\partial_{\mu}-ieA_{\mu})\varphi|^{2}-m^{2}|\varphi|^{2}-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}. \tag{7}
$$

Again we want to take the NR limit. After shifting the energy and change the variable $\varphi\to\Psi$,

$$
\mathcal{L}=i\Psi^{\dagger}\dot{\Psi}+\frac{1}{2m}\Psi^{\dagger}\nabla^{2}\Psi+\frac{1}{2}\left(\vec{E}^{2}-\vec{B}^{2}\right)+eA_{0}\Psi^{\dagger}\Psi-\frac{1}{m}eA_{i}\Psi^{\dagger}\partial_{i}\Psi-\frac{e^{2}}{2m}\vec{A}^{2}\Psi^{\dagger}\Psi+\cdots. \tag{8}
$$

We have neglected a few obviously higher order terms in $m^{-1}$, but the remaining ones are not equally important in the NR limit. Through a long-winded argument of dimensional counting in the nonrelativistic regime [1], it turns out that the Coulomb interaction, namely the first term in the second line of (8), is more relevant in the low-energy (low-speed) limit, and the others are irrelevant. So, in this limit, we should keep the Coulomb terms and neglect others. This leads to:

$$
\mathcal{L}=i\Psi^{\dagger}\dot{\Psi}+\frac{1}{2m}\Psi^{\dagger}\nabla^{2}\Psi-\frac{1}{2}A_{0}\nabla^{2A}_{0}+eA_{0}\Psi^{\dagger}\Psi+\cdots. \tag{9}
$$

Now, we can further integrate $A_{0}$ out using its classical solution:

$$
A_{0}=\nabla^{-2}e\Psi^{*}\Psi=-\int d^{3}\vec{y}\,\frac{1}{4\pi|\vec{x}-\vec{y}|}e\Psi^{\dagger}\Psi. \tag{10}
$$

Then,

$$
\mathcal{L}=\int d\vec{x}\left(i\Psi^{\dagger}\dot{\Psi}+\frac{1}{2m}\Psi^{\dagger}\nabla^{2}\Psi\right)-\int d^{3}\vec{x}\,d^{3}\vec{y}\,\frac{e^{2}}{4\pi|\vec{x}-\vec{y}|}\Psi^{\dagger}\Psi(x)\Psi^{\dagger}\Psi(y). \tag{11}
$$

So, we recover the leading-order nonlocal Coulomb interaction.

More generally, say, when considering relativistic corrections, we can expect that the nonlocal interaction takes the form of a velocity-dependent potential,

$$
\mathcal{L}_{\mathrm{int}}=-\int d^{3}\vec{x}\,d^{3}\vec{y}\,V(|\vec{x}-\vec{y}|,\vec{p})\Psi_{a}^{\dagger}\Psi_{a}(x)\Psi_{b}^{\dagger}\Psi_{b}(y), \tag{12}
$$

where $\vec{p}$ is the momentum of particle $a$ in the CoM frame. Also, the kinetic term receives relativistic corrections:

$$
\Psi^{\dagger}\left(i\dot{\Psi}+\frac{1}{2m}\nabla^{2}\Psi\right)\to\Psi^{\dagger}\left(i\dot{\Psi}-\sqrt{m^{2}-\nabla^{2}}\Psi\right), \tag{13}
$$

where $\sqrt{m^{2}-\nabla^{2}}$ should be understood in the sense of a Taylor expansion.

In practice, we do not derive this $V$ from an underlying Lagrangian by taking NR limit. Rather, we compute certain scattering amplitudes and require that the results from the underlying theory and from $V$ agree in the NR limit. A finite number of matching then fixes the potential $V$ at a given order (in both NR expansion and in weak coupling expansion).

The nice thing about this approach is the following:

1) For classical applications, only nonlocal $V$ is relevant. [We don't need (and don't want!) contact interaction to study earth orbit around the sun.]

2) Nonlocal $V$ comes only from non-analytic part of an amplitude, which can be constructed from on-shell method without resorting to a field theory.

Below we lay out this program at the leading order in coupling.

$\S 2$ NR Physics from On-Shell Amplitudes

We consider a given 2-to-2 scattering process and want to compute the amplitude in two ways: 1) from the underlying theory (by using amplitude techniques without resorting to a QFT); 2) from NR limit, i.e., the quantum mechanics.

For a $2\to2$ scattering $p_{1p}_{2}\to p_{1}'p_{2}'$, the kinematics in the EoM frame can be assigned as:

$$
p_{1}^{\mu}=(E_{1},\vec{p}),\quad p_{2}^{\mu}=(E_{2},-\vec{p}),\quad E_{a}=\sqrt{\vec{p}^{2}+m_{a}^{2}},
$$
$$
p_{1}'^{\mu}=(E_{1},\vec{p}'),\quad p_{2}'^{\mu}=(E_{2},-\vec{p}'). \tag{14}
$$

Note that we have restored the convention that all physical states have positive energies. It is also convenient to define the momentum transfer $\vec{q}\equiv\vec{p}-\vec{p}'$.

Let's first look at the NR side of the problem and review how to get an amplitude from a potential $V$. This is the familiar potential scattering problem, about which the standard perturbation method (Lippmann-Schwinger equation + Born expansion) is well known. Here we review it briefly with a field-theory language, which amounts to computing Born series with Feynman diagrams from the following Lagrangian:

$$
\mathcal{L}=\int\frac{d^{3}\vec{p}}{(2\pi)^{3}}\sum_{a=1}^{2}\Psi_{a}^{\dagger}(-\vec{p})\left(i\partial_{t}-\sqrt{\vec{p}^{2}+m_{a}^{2}}\right)\Psi_{a}(\vec{p})
$$
$$
-\int\frac{d^{3}\vec{p}}{(2\pi)^{3}}\frac{d^{3}\vec{p}'}{(2\pi)^{3}}V(\vec{p}',\vec{p})\Psi_{a}^{\dagger}(\vec{p}')\Psi_{a}(\vec{p})\Psi_{b}^{\dagger}(-\vec{p}')\Psi_{b}(-\vec{p}). \tag{15}
$$

Here we have rewritten the Lagrangian in momentum space, where the potential $V(\vec{p}',\vec{p})$ is related to the position-space version $V(\vec{r},\vec{p})$ via

$$
V(\vec{p}',\vec{p})=\int d^{3r}\,e^{-i\vec{q}\cdot\vec{r}}V(\vec{r},\vec{p}). \tag{16}
$$

Also, the field $\Psi_{a}(t,\vec{p})=e^{-iE_{pt}}a_{\vec{p}}$.

For NR QM, we define $a_{\vec{p}}^{\dagger}|0\rangle=|\vec{p}\rangle_{\mathrm{NR}}$, so that $|\vec{p}\rangle_{\mathrm{NR}}=\frac{1}{\sqrt{2E_{p}}}|\vec{p}\rangle$ is normalized by

$$
{}_{\mathrm{NR}}\langle\vec{p}|\vec{q}\rangle_{\mathrm{NR}}=(2\pi)^{3}\delta^{(3)}(\vec{p}-\vec{q}). \tag{17}
$$

Then, the propagator for $\Psi_{a}$ is:

$$
\langle0|T\{\Psi_{a}(t,\vec{p})\Psi_{a}^{\dagger}(t',-\vec{p})\}|0\rangle=\theta(t-t')e^{-iE_{p}(t-t')}=\int\frac{d\omega}{2\pi}\frac{i}{\omega-E_{p}+i\varepsilon}e^{-i\omega(t-t')}. \tag{18}
$$

The vertex is

$$
-iV(\vec{p}',\vec{p})\times(2\pi)\delta(\omega_{1}'+\omega_{2}'-\omega_{1}-\omega_{2}). \tag{19}
$$

Then, following this NR Feynman rule, the 2-to-2 scattering amplitude $\mathcal{M}$ at the leading order is:

$$
i\mathcal{M}_{\mathrm{NR}}(\vec{p}',\vec{p})=-iV(\vec{p}',\vec{p}). \tag{20}
$$

We require $\mathcal{M}_{\mathrm{NR}}$ to match the relativistic amplitude in the NR limit up to normalization factors:

$$
\mathcal{M}_{\mathrm{NR}}(\vec{p}',\vec{p})=\mathcal{M}(p_{1}',p_{2}',p_{1},p_{2})\times\prod_{i=1}^{4}\frac{1}{\sqrt{2p_{i}^{0}}}. \tag{21}
$$

Then we find

$$
V(\vec{r},\vec{p})=-\int\frac{d^{3}\vec{q}}{(2\pi)^{3}}e^{+i\vec{q}\cdot\vec{r}}\frac{\mathcal{M}(\vec{p}-\vec{q},\vec{p})}{4E_{1E}_{2}}. \tag{22}
$$

That is, the NR potential is the spatial Fourier transform of the $2\to2$ amplitude in the leading Born approximation.

In particular, all terms analytic in $\vec{q}$ in the amplitude Fourier-transform to $\delta$-function or its derivatives, which are contact interactions. As a result, they make no contribution to the nonlocal force in the classical limit.

Therefore, so far as the nonlocal classical effect is the concern, we only need terms non-analytic in $\vec{q}$, which are constructible from on-shell data via unitarity without Feynman-diagram computations.

Coulomb's law Now we apply the above result to concrete examples.

First, let us consider two charged scalars $\varphi_{1}$, $\varphi_{2}$ with mass $m_{1,2}$ and charge $Q_{1,2}$, exchanging a photon. We already know that the terms non-analytic in $\vec{q}$ are from the factorization when $q\to0$. So,

$$
i\mathcal{M}=\sum_{h=\pm1}\frac{-i}{\vec{q}^{2}-i\varepsilon}\times(i\mathcal{M}_{-h}^{L})\times(i\mathcal{M}_{+h}^{R})+\text{analytic in}q, \tag{23}
$$

$$
i\mathcal{M}_{-h}^{L}=-2ieQ_{a}\varepsilon_{\mu}^{(h)*}(q)p_{1}^{\mu},\qquad i\mathcal{M}_{+h}^{R}=-2ieQ_{b}\varepsilon_{\mu}^{(h)}(q)p_{2}^{\mu}. \tag{24}
$$

Here the coupling coefficient $2e$ is chosen to recover the correct result in the NR limit. Then, with $\sum_{h=\pm1}\varepsilon_{\mu}^{(h)*}(q)\varepsilon_{\nu}^{(h)}(q)=\eta_{\mu\nu}+\alpha q_{\mu} q_{\nu}$, we have

$$
\mathcal{M}=+\frac{4e^{2Q}_{aQ}_{b}}{|\vec{q}|^{2}-i\varepsilon}p_{1}\cdot p_{2}+\mathcal{O}(q^{0})=-\frac{4e^{2Q}_{aQ}_{b}}{|\vec{q}|^{2}-i\varepsilon}\left(E_{1E}_{2}+\vec{p}^{2}\right)+\mathcal{O}(q^{0}). \tag{25}
$$

Then, using (22), we get:

$$
V(\vec{r},\vec{p})=\frac{e^{2Q}_{aQ}_{b}}{4\pi|\vec{r}|}\left(1+\frac{\vec{p}^{2}}{\sqrt{m_{1}^{2}+\vec{p}^{2}}\sqrt{m_{2}^{2}+\vec{p}^{2}}}\right)+\text{contact terms}. \tag{26}
$$

In the NR limit $|\vec{p}|\ll m_{1,2}$, this is nothing but the Coulomb's law.

Newton's law Next, we look at the single graviton exchange between two massive scalars. The amplitude

$$
i\mathcal{M}=\sum_{h=\pm2}\frac{-i}{\vec{q}^{2}-i\varepsilon}\times(i\mathcal{M}_{-h}^{L})\times(i\mathcal{M}_{+h}^{R})+\cdots, \tag{27}
$$

$$
i\mathcal{M}_{-h}^{L}=i\sqrt{2\kappa}\,\varepsilon_{\mu\nu}^{(h)*}(q)p_{1}^{\mu} p_{1}^{\nu},\qquad i\mathcal{M}_{+h}^{R}=i\sqrt{2\kappa}\,\varepsilon_{\mu\nu}^{(h)}(q)p_{1}'^{\mu} p_{1}'^{\nu}. \tag{28}
$$

Here "$\cdots$" denotes regular terms. Using $\sum_{h=\pm2}\varepsilon_{\mu\nu}^{(h)*}(q)\varepsilon_{\rho\sigma}^{(h)}(q)=\eta_{\mu\rho}\eta_{\nu\sigma}+\eta_{\mu\sigma}\eta_{\nu\rho}-\eta_{\mu\nu}\eta_{\rho\sigma}+(q\text{-dependent terms})$, we get

$$
\mathcal{M}=\frac{2\kappa^{2}}{\vec{q}^{2}}\left[-m_{1}^{2m}_{2}^{2}+2(p_{1}\cdot p_{2})^{2}\right]+\mathcal{O}(q^{0}). \tag{29}
$$

Then, using (22) again, we get:

$$
V(\vec{r},\vec{p})=\frac{\kappa^{2}}{16\pi|\vec{r}|}\left[\frac{m_{1}^{2m}_{2}^{2}-2(E_{1E}_{2}+\vec{p}^{2})^{2}}{E_{1E}_{2}}\right]+\text{contact terms}. \tag{30}
$$

Using $\kappa=\sqrt{8\pi G_{N}}$ and expanding in $\vec{p}^{2}$, we get

$$
V(\vec{r},\vec{p})=\frac{G_{N}}{|\vec{r}|}\left[-m_{1m}_{2}-\frac{3m_{1}^{2}+8m_{1m}_{2}+3m_{2}^{2}}{2m_{1m}_{2}}\vec{p}^{2}+\cdots\right]+\text{contact terms}. \tag{31}
$$

The leading term is clearly the Newtonian potential. The second term represents the first special-relativistic correction. Note that it has the same sign as the first term, showing that the first-order special-relativistic correction produces an attractive force between two antiparallel mass current, in accordance with our discussion in the last lecture.

We have successfully recovered Coulomb's and Newton's potentials together with their special-relativistic corrections. It's curious to observe that the force mediated by a massless spin-1 boson is independent of the source mass at the leading order in $\vec{p}^{2}$: $V_{\mathrm{Coulomb}}\sim -\mathcal{M}_{\mathrm{NR}}\sim -\frac{1}{4m_{1m}_{2}}\mathcal{M}\sim -\frac{1}{4m_{1m}_{2}}\times p_{1}^{\mu} p_{2}^{\nu}\sum_{h}\varepsilon_{\mu}^{(h)*}\varepsilon_{\nu}^{(h)}\sim\mathcal{O}(m_{1}^{0} m_{2}^{0})$. On the contrary, the force from exchanging a spin-2 particle is proportional to the source's mass due to more polarization indices and thus to more momenta in the numerator: $V_{\mathrm{Newton}}\sim -\frac{1}{4m_{1m}_{2}}p_{1}^{\mu} p_{1}^{\nu} p_{2}^{\rho} p_{2}^{\sigma}\sum_{h}\varepsilon_{\mu\nu}^{(h)*}\varepsilon_{\rho\sigma}^{(h)}\sim\mathcal{O}(m_{1} m_{2})$. So, the strength of gravity being proportional to the mass is a natural consequence of massless spin-2 mediation and is by itself not yet the equivalence principle; As detailed in Lecture 4, the equivalence principle says that the proportional coefficient is universal.

Naturally, you may wonder if the long-range force mediated by a massless scalar would be inversely proportional to the source's mass. You are asked to figure it out by yourself.

$\S 3$ Bound states

Above we mentioned that the Coulomb term is a relevant interaction in the NR limit. This has the consequence that, when going to the extremely low speed limit, the Coulomb term would be as important as the kinetic term, so that it can no longer be treated as a perturbation as we did in Born series.

Physically, what happens is that bound states can form when the speed of the particle is lowered to the point where $mv^{2}\sim\alpha Q_{aQ}_{b}/r$ (or $v^{2}\sim G_{N} M/r$ for gravity). That is, we get new degrees of freedom. Thanks to this transition, we have hydrogen atoms and all chemical elements as well as our solar system. Clearly, bound states are very important and physically fun, but we have no much space to discuss them in detail. So we will only make a few brief comments.

While it is trivial (trivial = we learned it from kindergarten) to get bound-state solutions given the potential, it is still interesting to see how do they arise from Feynman diagrams in a theory where the bound states are given their fields. (That is, we consider a theory where the Feynman graphs involve only electron, proton, and photon lines but not a hydrogen line.)

It is relatively easy to see that bound states cannot arise from any finite order in the perturbation theory. Indeed, the on-shell mediation of a bound state, say a hydrogen atom would generate a pole in the amplitude, which cannot be produced by Feynman graphs involving protons, electrons, and photons only. So, the bound state must be from summing over an infinite number of loop diagrams.

But which loop diagrams do we need to sum over? To answer this question, it is easiest answered by considering the NR Lagrangian, since we know how to get bound states in the NR limit. (Solving Schr\"odinger's equation!) Taking the NR scalar QED as an example:

$$
\mathcal{L}=\sum_{a=1}^{2}\Psi_{a}^{\dagger}\left(i\partial_{t}+eQ_{aA}_{0}+\frac{\nabla^{2}}{2m_{a}}\right)\Psi_{a}-\frac{1}{2}A_{0}\nabla^{2A}_{0.} \tag{32}
$$

Recall that the propagators in this Lagrangian reads:

$$
\langle\Psi_{a}(t_{1},\vec{k})\Psi_{a}^{\dagger}(t_{2},-\vec{k})\rangle=\theta(t_{1}-t_{2})e^{-iE_{k}(t_{1}-t_{2})}, \tag{33}
$$

$$
\langle A_{0}(t_{1},\vec{k})A_{0}(t_{2},-\vec{k})\rangle=\delta(t_{1}-t_{2})\frac{-i}{\vec{k}^{2}}. \tag{34}
$$

This is very intuitive: The charged particle's propagator is proportional to $\theta(t_{1}-t_{2})$, which is nothing but the causality in a Galilean system (instead of Lorentzian). On the contrary, the photon propagator is proportional $\delta(t_{2}-t_{1})$, showing the Coulomb force is instantaneous.

Put them together and we see that the Feynman graphs involving an electron and a proton must have a ladder structure:

In particular, cross-ladder graphs must be negligible in the leading NR limit. So, resumming all these ladder graphs gives us the familiar bound solutions of a hydrogen atom. The same conclusion can also be reached by analyzing amplitudes directly without using a field theory, as discussed in Sec. 13.6 of Weinberg's Vol. 1.

Exercise

(1) Consider a model of a heavy scalar particle $\varphi$ of mass $m$ and a massless scalar $\chi$ with the following Lagrangian:

$$
\mathcal{L}=-\frac{1}{2}\left[(\partial_{\mu}\varphi)^{2}+m^{2}\varphi^{2}+(\partial_{\mu}\chi)^{2}+\mu\chi\varphi^{2}\right].
$$

This model is disastrously bad from a QFT viewpoint. Nevertheless, please derive the long-range potential for $\varphi$ particle due to the exchange of $\chi$ to the leading order in the coupling $\mu$.



(2) We replace the interaction term in the above exercise as $-\frac{1}{2}\mu\chi\varphi^{2}\to-\frac{1}{4}\lambda\chi^{2}\varphi^{2}$ where $\lambda$ is the coupling. (This model is again a disaster.) Please work out the long-range potential between two $\varphi$ particles to the leading order in $\lambda$.



Comments on References

A nice introduction to the QFT perspective of the NR limit can be found in [1]. See also Sec. 13.6 for an amplitude perspective and Chap. 14 for a treatment of bound states [2].

References

[1] C. P. Burgess, Introduction to Effective Field Theory. Cambridge University Press, 12, 2020.

[2] S. Weinberg, The Quantum theory of fields. Vol. 1: Foundations. Cambridge University Press, 6, 2005.