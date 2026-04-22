# Lecture 5 Exercise

Lecture 5. Massless Amplitudes* 
Zhong-Zhi Xianyu$^{*}$ 
Department of Physics, Tsinghua University, Beijing 100084, China  

In the last lecture, we studied the minimal couplings for a matter particle emitting a massless spinning particle and derived nontrivial constraints for them. Now we turn to self-interactions of massless spinning particles. From now on, we will shamelessly assume the analyticity of amplitudes in general. That is, the most singular behavior in an amplitude can only be on-shell poles where the amplitudes should factorize consistently.

For certain classes of interaction, the constraints of analyticity plus spacetime symmetry is so strong that it is possible to determine the tree-level amplitudes completely. (We will specify what does tree-level mean without a field theory.) This is traditionally called a bootstrap program. The starting point is 3-point amplitudes (amplitudes with three external states). Then we use various consistent conditions to build 4-point and higher-point functions. The 3-point amplitudes are certainly not physical objects, but they are useful building blocks.

We will focus on 3-point amplitudes in this lecture and 4-point in the next one. However, before this, we need to introduce a bit more language to properly describe these object, namely the spinor-helicity variables.

**§1 Spinor-Helicity Formalism**

In short, in spinor-helicity formalism, we use spinors to describe all kinematic dependences of an amplitude. Let us make it clear from the very beginning: There is no fermions involved in our study (although fermions can certainly be included in this formalism) and all spinors are c-number valued.

Recall that a scattering amplitude $\mathcal{M}$ is a Lorentz scalar constructed out of all external momenta and polarization tensors (Lorentz indices neglected):

$$
\mathcal{M} = \mathcal{M}(p_{1}, \cdots, p_{n}) e_{1} \cdots e_{\ell} e^{*}_{\ell+1} \cdots e^{*}_{n.} \tag{1}
$$

However, this representation is inconvenient for two reasons:

1. $p^{\mu}_{a}$ are constrained by on-shell conditions, so they include redundant degrees of freedom.
2. More importantly, for massless states, the polarization tensors $e_{a}$ are defined only up to gauge transforms: They are not Lorentz covariant and even more redundant.

The spinor-helicity variables are designed to overcome these problems and to provide a better representation. The trick is this: We use the fact that the Lorentz group is, at least locally, a product of two $\text{SO}(3)$ groups: $\text{SO}(3,1) = \text{SO}(3)_{L} \otimes \text{SO}(3)_{R}$. So, we use spinors of two $\text{SO}(3)$'s to construct everything. More explicitly, the generators of two $\text{SO}(3)$ can be written in terms of Lorentz generators as:

$$
J^{i}_{L} = \frac{J^{i} - iK^{i}}{2}, \quad J^{i}_{R} = \frac{J^{i} + iK^{i}}{2}. \tag{2}
$$

Recall that an $\text{SO}(3)$ spinor $\psi_{a}$ ($a=1,2$) is a two component c-number matrix that rotates as $\psi'_{a} = D_{ab} \psi_{b}$, where

$$
D(\gamma,\beta,\alpha) = e^{-i\gamma \sigma_{3}/2} e^{-i\beta \sigma_{2}/2} e^{-i\alpha \sigma_{3}/2}, \tag{3}
$$

and $(\alpha,\beta,\gamma)$ are three Euler angles. Now, since we have two $\text{SO}(3)$'s, we have two independent types of spinors:

$$
(\tfrac{1}{2},0), \text{left-handed spinor}, \quad \psi_{a}, \ a=1,2; \quad (0,\tfrac{1}{2}), \text{right-handed spinor}, \quad \tilde{\psi}_{\dot{a}}, \ \dot{a}=\dot{1},\dot{2}.
$$

The spinor indices can be raised/lowered by $\text{SO}(3)$-invariant bi-spinor $\epsilon_{ab}$ and $\epsilon^{\dot{a}\dot{b}}$. (Our convention is $\epsilon_{12} = +1 \Rightarrow \epsilon^{21} = +1$.)

Now comes a key observation: Since a Lorentz vector $p^{\mu}$ is in $(\tfrac{1}{2},\tfrac{1}{2})$-representation, it can be rewritten as a bi-spinor $p_{a\dot{a}}$. Explicitly:

$$
p_{a\dot{a}} \equiv p^{\mu} (\sigma_{\mu})_{a\dot{a}} \quad \text{with} \quad \sigma^{\mu} \equiv (1, \sigma^{i}). \tag{4}
$$

There is another representation: Using $(\bar{\sigma}^{\mu})^{\dot{a}a} \equiv \epsilon^{\dot{a}\dot{b}} \epsilon^{ab} (\sigma_{\mu})_{b\dot{b}}$, you can show that $\bar{\sigma}^{\mu} = (1, -\sigma^{i})$. Then, we can define:

$$
p^{\dot{a}a} \equiv p^{\mu} (\bar{\sigma}_{\mu})^{\dot{a}a}. \tag{5}
$$

There is a useful identity for $\sigma$-matrices: $(\sigma^{\mu})_{a\dot{a}} (\bar{\sigma}^{\nu})^{\dot{a}a} = -2\eta^{\mu\nu}$. This leads to a very useful relation which we will use later:

$$
p_{a\dot{a}} p^{\dot{a}a} = -2 p^{\mu} p_{\mu}. \tag{6}
$$

Now, let us consider kinematics of massless amplitudes.

First, all on-shell momenta are null: $\det p_{a\dot{a}} = -p^{\mu}p_{\mu} = 0$. So, there exists a 2-component spinor, $\psi_{a}$, together with $\tilde{\psi}_{\dot{a}} = \pm (\psi_{a})^*$, such that

$$
p_{a\dot{a}} = -\psi_{a} \tilde{\psi}_{\dot{a}} \quad \Rightarrow \quad p^{\dot{a}a} = -\tilde{\psi}^{\dot{a}} \psi^{a.} \tag{7}
$$

A conventional notation:

$$
|p\rangle \equiv \psi_{a}, \quad \langle p| \equiv \psi^{a}, \quad |p] \equiv \tilde{\psi}_{\dot{a}}, \quad [p| \equiv \tilde{\psi}^{\dot{a}}. \tag{8}
$$

Thus,

$$
p_{a\dot{a}} = -|p\rangle[p|, \quad p^{\dot{a}a} = -|p]\langle p|. \tag{9}
$$

The inner products are Lorentz scalars:

$$
\langle p_{1} p_{2} \rangle \equiv \psi_{1a} \psi_{2}^{a}, \quad [p_{1} p_{2}] \equiv \tilde{\psi}_{1\dot{a}} \tilde{\psi}_{2}^{\dot{a}}. \tag{10}
$$

In particular:

$$
\langle pq \rangle = -\langle qp \rangle, \quad \langle pq \rangle [pq] = 2 p^{\mu} q_{\mu}. \tag{11}
$$

In case you find these angle and square brackets too abstract, let us work them out explicitly. Let $p^{\mu} = (p^{0}, p^{1}, p^{2}, p^{3})$ and assume $p^{0} > 0$. Then:

$$
p_{a\dot{a}} = \begin{pmatrix} -p^{0} + p^{3} & p^{1} - i p^{2} \\ p^{1} + i p^{2} & -p^{0} - p^{3} \end{pmatrix}. \tag{12}
$$

Then, you can check that a possible set of spinors are:

spin down | spin up 
left-handed $|p\rangle = \frac{1}{\sqrt{p^{0}+p^{3}}} \begin{pmatrix} -p^{1} + i p^{2} \\ p^{0} + p^{3} \end{pmatrix}$, $\langle p| = \frac{1}{\sqrt{p^{0}+p^{3}}} (p^{0}+p^{3}, p^{1} - i p^{2})$ 
right-handed $[p| = \frac{1}{\sqrt{p^{0}+p^{3}}} (-p^{1} - i p^{2}, p^{0}+p^{3})$, $|p] = \frac{1}{\sqrt{p^{0}+p^{3}}} \begin{pmatrix} p^{0}+p^{3} \\ p^{1} + i p^{2} \end{pmatrix}$.

Clearly, from a null $p^{\mu}$, $|p\rangle$ is defined only up to a phase. So, $|p\rangle$ has 3 real degree of freedoms (2 complex entries $-$ 1 phase), which is correct for a null momentum.

As for the phase, we can fix it for a reference momentum $k^{\mu} = k(1,0,0,1)$, and determine the phase for any $p^{\mu}$ by Lorentz transform. However, as you might have guessed, the phase depends on how we choose the Lorentz transform $L$ such that $Lk = p$. From our experience in Lecture 2, you may have realized that the phase is nothing but a representation of little group transforms (LGTs).

In particular, under a given LGT with respect to $p^{\mu}$, we have $|p\rangle \to e^{-i\delta} |p\rangle$, which implies $\langle p| \to e^{-i\delta} \langle p|$, $|p] \to e^{+i\delta} |p]$, and $[p| \to e^{+i\delta} [p|$.

We have turned all null momenta into spinors. To use them to represent scattering amplitudes, we need to use spinors to express polarization tensors.

Taking spin-1 polarization as an example: Let a photon have $p^{\mu}$, and we want to construct $e^{\pm}_{\mu}(p)$, possibly from $|p\rangle$ or $|p]$. We have 3 conditions for $e^{\pm}_{\mu}(p)$:

1. $e^{\pm}_{\mu}$ has one Lorentz index $\Rightarrow e^{\pm}_{\mu} = | \rangle [ | \times \text{``scalar''}$;
2. $e^{\pm}_{\mu}$ has helicity $\pm 1$ $\Rightarrow |p]^{2}$ or $|p]|p\rangle$ or $\frac{1}{|p\rangle^{2}}$;
3. $e^{\pm}_{\mu}$ is dimensionless. ($|p\rangle$ is dim-1/2)

Clearly, only $|p\rangle$ and $|p]$ do not work; We need to pick up a "reference momentum" $q$ such that $q^{2} = 0$ and $q \cdot p \neq 0$. Then, $e^{+} \propto \frac{|q\rangle[p|}{\langle pq \rangle}$ satisfies all conditions. The coefficients are fixed, up to a phase, by the norm of $e$:

$$
e^{+} = \frac{|q\rangle[p|}{\langle pq \rangle}, \quad e^{-} = \frac{|q]\langle p|}{[pq]}. \tag{13}
$$

Generalization to massless spin-$s$ is straightforward:

$$
e^{+s} = \left( \frac{|q\rangle[p|}{\langle pq \rangle} \right)^{s}, \quad e^{-s} = \left( \frac{|q]\langle p|}{[pq]} \right)^{s.} \tag{14}
$$

Now, let us check how does $e^{\pm}$ transform under a LGT of $p^{\mu}$. Above we showed that $|p\rangle$ changes by a phase, but $q^{\mu}$ is generally changed to a different spinor:

$$
|q\rangle \to |q'\rangle = \alpha |q\rangle + \beta |p\rangle. \tag{15}
$$

Here we have used $|q\rangle$ and $|p\rangle$ to linearly represent an arbitrary spinor $|q'\rangle$. Therefore,

$$
e^{+} = \frac{|q\rangle[p|}{\langle pq \rangle} \to e^{+2i\delta} \frac{|q'\rangle[p|}{\langle p q' \rangle} = e^{+2i\delta} \left( \frac{|q\rangle[p|}{\langle pq \rangle} + \frac{\beta}{\alpha} \frac{|p\rangle[p|}{\langle pq \rangle} \right), \tag{16}
$$

which is the familiar rule $e^{+}_{\mu} \to e^{2i\delta} e^{+}_{\mu} + \alpha p_{\mu}$.

So, the upshot of this section is that a massless scattering amplitude can be constructed entirely from angle and square brackets, so that we can forget about polarization tensors.

**§2 Three-Point Massless Amplitudes**

Armed with spinor-helicity variables, we can now try to carry out a program of constructing all possible scattering amplitudes consistent with basic principles. Starting from 3-point amplitudes as "seeds."

In reality, no 3-point amplitude is nonzero due to kinematic constraint:

$$
4 \times 3 - 3 - 4 - 6 = -1 \text{degree of freedoms}. \tag{17}
$$

3 real momenta | on-shell | Translation invariance | Lorentz invariance

In other words, all independent Lorentz scalars constructed from external momenta are zero: $p_{1} \cdot p_{2} = p_{2} \cdot p_{3} = p_{3} \cdot p_{1} = 0$.

$$
2 p_{1} \cdot p_{2} = \langle 12 \rangle [12] = 0 \Rightarrow \langle 12 \rangle = [12] = 0 \quad \text{since} \quad [12] = \langle 21 \rangle^*. \tag{18}
$$

Here we have converted to a more conventional notation $|i\rangle \equiv |p_{i}\rangle$, etc.

However, if we allow $p_{i} \in \mathbb{C}$, then angle and square brackets become independent. Then, it could be that $p_{1} \cdot p_{2} = 0$ is enforced by $\langle 12 \rangle = 0$ while $[12] \neq 0$, or the other way. So, to proceed, we will assume complex momenta from now on.

Also, throughout the rest of this lecture (and the next), we switch to a convention that all momenta point inward. That is, all out-state momenta are flipped, and all out-state helicities flipped:

1. The momentum conservation now reads $\sum_{a=1}^{n} p^{\mu}_{a} = 0$;
2. An outgoing state of $\pm$ helicity is endowed with a polarization tensor $e^{\mp}$.

Given 3 massless particles of species $a,b,c$, momenta $p_{1},p_{2},p_{3}$, and helicity $h_{1},h_{2},h_{3}$, the most general 3-point amplitude is

$$
\mathcal{M}(1^{a},2^{b},3^{c}) = \mathcal{M}_{abc}(\psi_{1},\psi_{2},\psi_{3},\tilde{\psi}_{\dot{1}},\tilde{\psi}_{\dot{2}},\tilde{\psi}_{\dot{3}}), \tag{19}
$$

where, for example, we use $1^{a}$ to denote the momentum $p_{1}$ with species $a$. That is, all kinematic data encoded in spinor-helicity variables. [Recall our definition: $S = 1 + (2\pi)^{4} \delta^{(4)}(\sum k) \times i\mathcal{M}$.]

Now, we constrain the form of $\mathcal{M}_{abc}$ by the global Poincar\'e symmetry and the separate LGT covariance.

First, we consider the Poincar\'e symmetry:

a. First, $p_{i} \cdot p_{j} = 0$ implies $\langle ij \rangle [ij] = 0$ for $i \neq j \in \{1,2,3\}$.
b. Take $\langle 12 \rangle [12] = 0$. It means either $\langle 12 \rangle = 0$ or $[12] = 0$.
c. Let $\langle 12 \rangle = 0$, then: Using $\langle 1|$ and $\langle 2|$ to close momentum conservation $\sum_{i=1}^{3} |i\rangle[i| = 0 \Rightarrow \langle 13 \rangle = 0, \langle 23 \rangle = 0$. (20)
c$'$. Alternatively, let $[12] = 0$, then $[12] = [23] = [31] = 0$.

So, we conclude that either $\langle ij \rangle = 0$ or $[ij] = 0$ for all $i \neq j$. Thus, a general 3-point amplitude is constrained to be

$$
\mathcal{M}(1^{a},2^{b},3^{c}) = \mathcal{M}^{L}_{abc}(\psi_{1},\psi_{2},\psi_{3}) \quad \text{or} \quad \mathcal{M}^{R}_{abc}(\tilde{\psi}_{1},\tilde{\psi}_{2},\tilde{\psi}_{3}). \tag{21}
$$

Next, we consider separate LGTs, say, separate rotations for Particle $i$ around $\vec{p}_{i}$. Let the rotation be $z_{i} \equiv \exp(-i\theta_{i} \vec{J} \cdot \hat{p}_{i})$, ($i=1,2,3$), then we have:

$$
\begin{cases}
\mathcal{M}^{L}_{abc}(z_{1}^{-1/2} \psi_{1}, z_{2}^{-1/2} \psi_{2}, z_{3}^{-1/2} \psi_{3}) = z_{1}^{h_{1}} z_{2}^{h_{2}} z_{3}^{h_{3}} \mathcal{M}^{L}_{abc}(\psi_{1},\psi_{2},\psi_{3}), \\
\mathcal{M}^{R}_{abc}(z_{1}^{+1/2} \tilde{\psi}_{1}, z_{2}^{+1/2} \tilde{\psi}_{2}, z_{3}^{+1/2} \tilde{\psi}_{3}) = z_{1}^{h_{1}} z_{2}^{h_{2}} z_{3}^{h_{3}} \mathcal{M}^{R}_{abc}(\psi_{1},\psi_{2},\psi_{3}).
\end{cases} \tag{22}
$$

This almost fixes the form of $\mathcal{M}$. To see this, let us try the ansatz:

$$
\mathcal{M}^{L}_{abc} = \lambda^{L}_{abc} \langle 12 \rangle^{n_{3}} \langle 23 \rangle^{n_{1}} \langle 31 \rangle^{n_{2}}. \tag{23}
$$

Then, the above transform rules imply:

$$
n_{2} + n_{3} = -2h_{1}, \quad n_{3} + n_{1} = -2h_{2}, \quad n_{1} + n_{2} = -2h_{3.} \tag{24}
$$

Therefore,

$$
\mathcal{M}^{L}_{abc} = \lambda^{L}_{abc} \langle 12 \rangle^{h_{3} - h_{1} - h_{2}} \langle 23 \rangle^{h_{1} - h_{2} - h_{3}} \langle 31 \rangle^{h_{2} - h_{3} - h_{1}}. \tag{25}
$$

Similarly, we can try an ansatz with square brackets and get:

$$
\mathcal{M}^{R}_{abc} = \lambda^{R}_{abc} [12]^{h_{1} + h_{2} - h_{3}} [23]^{h_{2} + h_{3} - h_{1}} [31]^{h_{3} + h_{1} - h_{2}}. \tag{26}
$$

We have used up all symmetry constraints. Next, we use the analytic properties. Note that $\langle ij \rangle$ and $[ij]$ are scalars of dimension-1 constructed from momenta $p_{i}$ and $p_{j}$. Therefore,

$$
\langle 12 \rangle^{h_{3} - h_{1} - h_{2}} \langle 23 \rangle^{h_{1} - h_{2} - h_{3}} \langle 31 \rangle^{h_{2} - h_{3} - h_{1}} \text{is dim-$(-h_{1} - h_{2} - h_{3})$}, \tag{27}
$$

and

$$
[12]^{h_{1} + h_{2} - h_{3}} [23]^{h_{2} + h_{3} - h_{1}} [31]^{h_{3} + h_{1} - h_{2}} \text{is dim-$(h_{1} + h_{2} + h_{3})$}. \tag{28}
$$

Negative dimensions are not allowed as they give pole in $p$ that does not correspond to any on-shell states. The case of dim-0 is a bit subtle: Either, $\mathcal{M}$ does not depend on any spinor-helicity variables, which is certainly acceptable and corresponds to all external states being scalars; Or, $\mathcal{M}$ is a nontrivial ratio of momenta. This is usually discarded as it typically gives rise to nonlocal amplitudes and we will do the same in the following.

So, to summarize:

$$
\mathcal{M}(1^{a},2^{b},3^{c}) = 
\begin{cases}
\lambda^{L}_{abc} \langle 12 \rangle^{h_{3} - h_{1} - h_{2}} \langle 23 \rangle^{h_{1} - h_{2} - h_{3}} \langle 31 \rangle^{h_{2} - h_{3} - h_{1}}, & \text{if} h_{1} + h_{2} + h_{3} < 0; \\
\lambda^{R}_{abc} [12]^{h_{1} + h_{2} - h_{3}} [23]^{h_{2} + h_{3} - h_{1}} [31]^{h_{3} + h_{1} - h_{2}}, & \text{if} h_{1} + h_{2} + h_{3} > 0; \\
\text{not allowed unless all legs are scalar}, & \text{if} h_{1} + h_{2} + h_{3} = 0.
\end{cases} \tag{29}
$$

Moreover, parity swaps $\langle \ \rangle$ with $[ \ ]$. So, $\lambda^{L}_{abc} = \lambda^{R}_{abc}$ for parity-conserving theories.

Let us emphasize again that these results (and the following special cases) do not rely on either a quantum field theory or its perturbative expansion and so are fully non-perturbative.

**Examples** Now let us look at concrete examples. We will only consider amplitudes of three particles of the same spin $s > 0$. Other possibilities are left as fun exercises for readers.

Of course, the three spin-$s$ massless particles may belong to distinct species, so we use labels $a,b,c$ to mark the species. Also, we will only consider parity-conserving theories. Then, the only nonzero amplitudes are:

$$
\mathcal{M}(1^{+s}_{a}, 2^{+s}_{b}, 3^{+s}_{c}) = \lambda_{abc} \big( [12][23][31] \big)^{s}, \tag{30}
$$

$$
\mathcal{M}(1^{-s}_{a}, 2^{-s}_{b}, 3^{-s}_{c}) = \lambda_{abc} \big( \langle 12 \rangle \langle 23 \rangle \langle 31 \rangle \big)^{s}, \tag{31}
$$

$$
\mathcal{M}(1^{+s}_{a}, 2^{+s}_{b}, 3^{-s}_{c}) = \kappa_{abc} \left( \frac{[12]^{3}}{[23][31]} \right)^{s}, \tag{32}
$$

$$
\mathcal{M}(1^{-s}_{a}, 2^{-s}_{b}, 3^{+s}_{c}) = \kappa_{abc} \left( \frac{\langle 12 \rangle^{3}}{\langle 23 \rangle \langle 31 \rangle} \right)^{s.} \tag{33}
$$

To say more about them, we need a generalized version of spin-statistics. Basically, spin-statistics says that the exchange of two identical bosonic/fermionic particles yields a phase of $+/-$. Clearly, being identical means that all flavor indices and helicities being equal. So we would have, for example, $\mathcal{M}(1^+,2^+,\cdots) = \mathcal{M}(2^+,1^+,\cdots)$ but the relation between $\mathcal{M}(1^+_{a},2^-_{b},\cdots)$ and $\mathcal{M}(2^-_{b},1^+_{a},\cdots)$ is arbitrary.

Here we adopt a generalized spin-statistics, which is essentially a prescription (or, a choice of basis) saying that we get a phase of $+/-$ for exchanging any two bosonic/fermionic particles.$^{1}$ With the above prescription, we have $\mathcal{M}(1^{h_{1}}_{a},2^{h_{2}}_{b},3^{h_{3}}_{c})$ totally symmetric with respect to exchange of arguments. Since $[12][23][31]$ and $[12]^{3} [23]^{-1} [31]^{-1}$ are both antisymmetric with respect to $i \leftrightarrow j$ ($i,j=1,2,3$), we see that the coupling constants $\kappa_{abc}$ and $\lambda_{abc}$ are totally symmetric/antisymmetric with respect to exchanges of $a,b,c$ for even/odd spins. This implies:

Massless odd-spin particles cannot have cubic self-interaction with less than 3 species.

In particular, a photon cannot have cubic self-interaction (even non-perturbatively). However, this does not mean that a photon cannot self-interact; It can at the 4-point level. (You may know light-by-light scattering. We may come back to this example later.)

Let us look at the special cases of spin-1 and spin-2.

For spin-1:

$$
\mathcal{M}_{3}(1^+_{a},2^+_{b},3^+_{c}) = \lambda_{abc} [12][23][31], \tag{34}
$$

$$
\mathcal{M}_{3}(1^+_{a},2^+_{b},3^-_{c}) = \kappa_{abc} \frac{[12]^{3}}{[23][31]}. \tag{35}
$$

At this point, $\lambda$ and $\kappa$ could be arbitrary complex numbers, but consistency at 4-point level requires that there exists a basis of states such that $\lambda$ and $\kappa$ are real. So, from now on, we will take $\lambda,\kappa \in \mathbb{R}$, but the sign can be arbitrary and is actually irrelevant.

Note that the 3-point amplitude $\mathcal{M}_{3}$ is dimension-1. So, $[\lambda] = -2$, and $[\kappa] = 0$. So the $\kappa$-amplitude is more important at low energies and long distances. In a sense we can call $\kappa$ minimal coupling and $\lambda$ non-minimal coupling.

From a QFT viewpoint: the $\kappa$-amplitude could be (but not necessarily) generated by a term $\text{tr}(F_{\mu\nu} F^{\nu\mu})$ in the Lagrangian, while the $\lambda$-amplitude by $\text{tr}(F_{\mu\nu} F^{\nu\lambda} F_{\lambda}^{\ \mu})$. So $\kappa$-term is what we expect from a standard Yang-Mills theory. However, we stress again that the above result is independent of field theory and fully non-perturbative.

For spin-2, we can have a single species being self-interacting. So we will only consider one species for simplicity and drop the flavor (species) index:

$$
\mathcal{M}_{3}(1^{+2},2^{+2},3^{+2}) = \lambda \big( [12][23][31] \big)^{2}, \tag{36}
$$

$$
\mathcal{M}_{3}(1^{+2},2^{+2},3^{-2}) = \kappa \left( \frac{[12]^{3}}{[23][31]} \right)^{2.} \tag{37}
$$

Again, we take $\lambda,\kappa \in \mathbb{R}$. Also, $[\kappa] = -1$ is the "minimal coupling" and $[\lambda] = -5$ is non-minimal. In fact, the $\kappa$-amplitude comes exactly from the cubic vertex of gravitons by expanding the Einstein-Hilbert Lagrangian $\int d^{4} x \sqrt{-g} R$ around the Minkowski metric, and $\lambda$-amplitude from a term like $\sqrt{-g} R_{\mu\nu\rho\sigma} R^{\rho\sigma\lambda\kappa} R_{\lambda\kappa}^{\ \ \mu\nu}$. Curiously, No $O(R^{2})$-term can generate a 3-point interaction at the tree level. We will come back to this point later.

By the way, at the 3-point level, we see again a curious fact that the kinematic factor of $\mathcal{M}_{3}(1^{+2},2^{+2},3^{-2})$ is exactly the square of $\mathcal{M}_{3}(1^+,2^+,3^-)$, a phenomenon persisting to higher points and is a type of "double-copy relation" usually summarized as "Gravity = (Gauge theory)$^{2}$".

**Exercise**

(1) For null momentum $p^{\mu} = (p^{0},p^{1},p^{2},p^{3})$, please find the expressions for $|p\rangle$, $|p]$, $\langle p|$, and $[p|$ when $p^{0} < 0$.

Using $p_{\mu} (\sigma^{\mu})_{a\dot{a}}$  to construct the matrix
$$
p_{a \dot{a}} = \begin{pmatrix} -p^{0} + p^{3} & p^{1} - i p^{2} \\ p^{1} + i p^{2} & -p^{0} - p^{3} \end{pmatrix}
$$

We can decompose this matrix into the outer product of the left and right spinors. For the circumstances where $p^{0} < 0$, we can deduce that
$$
p^{0} + p^{3} = - \sqrt{(p^{1})^{2} + (p^{2})^{2} + (p^{3})^{2}} + p^{3}< 0
$$
So the decomposition is $p_{a \dot{a}} = - \ket{p} [p|$, which gives out 
$$
\ket{p} = \frac{i}{\sqrt{- (p^{0} + p^{3})}} \begin{pmatrix}
- p^{1} + i p^{2} \\
p^{0} + p^{3}
\end{pmatrix}
$$
and
$$
[p| = \frac{i}{\sqrt{- (p^{0} + p^{3})}} \begin{pmatrix} - p^{1} - i p^{2}, p^{0} + p^{3} \end{pmatrix}
$$
We use the antisymmetric tensor to raise the indexes, which gives the covariant form of the tensor
$$
p^{a \dot{a}} = \epsilon^{ab} \epsilon^{\dot{a} \dot{b}} p_{b \dot{b}}
$$
This will give out the form of the covariant matrix
$$
p^{a \dot{a}} = \begin{pmatrix}
- p^{0} - p^{3} & p^{1} + i p^{2} \\
p^{1} - i p^{2} & - p^{0} + p^{3}
\end{pmatrix}
$$
Given the relationship $p^{a \dot{a}} = - |p] \bra{p}$, we can get the expressions of $|p]$ and $\bra{p}$
$$
|p] = \frac{i}{\sqrt{- (p^{0} + p^{3})}} \begin{pmatrix}
p^{0} + p^{3} \\
p^{1} - i p^{2} 
\end{pmatrix}
$$

$$
\bra{p} =\frac{i}{\sqrt{- (p^{0} + p^{3})}} \begin{pmatrix}
p^{0} + p^{3} & p^{1} + i p^{2}
\end{pmatrix}
$$

(2) Please show, for a null momentum $k^{\mu} = (k,0,0,k)$, how does $|k\rangle$ transform under the 3 independent LGTs (See Lecture 2).

For a null momentum, the ket $\ket{k}$ equals
$$
\ket{k} = \frac{1}{\sqrt{2k}} \begin{pmatrix}
0 \\
2k
\end{pmatrix} = \begin{pmatrix}
0 \\
\sqrt{2k}
\end{pmatrix}
$$
The 3 independent LGTs are

1.  Rotation around $\hat{k}$: $R_{z} (\theta)$
2.  $R \times L$-type transform: $R_{y}^{-1}(\theta) L_{x}\left(\operatorname{arcsinh}(\tan \theta)\right) L_{z}(\log (\cos \theta))$
3.  $R \times L$-type transform: $R_{x}^{-1}(-\theta) L_{y}(\operatorname{arcsinh}(\tan \theta)) L_{z}(\log (\cos \theta))$

First consider the rotation around $z$ axis, the transformation matrix $M$ is
$$
M = \begin{pmatrix}
e^{i \frac{\theta}{2}} & 0 \\
0 & e^{- i\frac{\theta}{2}}
\end{pmatrix}
$$
So ket $\ket{p}$ will change like
$$
\ket{p'} = M \ket{p} = \begin{pmatrix}
0 \\
e^{- i\frac{\theta}{2}}\sqrt{2k}
\end{pmatrix}
$$
Then, we calculate the transformation matrix for the $R \times L$ type LGTs
$$
R_{y}^{-1} (\theta) L_{x} (\mathrm{arcsinh} (\tan \theta)) L_{y} (\log \cos \theta)
$$
where
$$
L_{y} (\log \cos \theta) = e^{i \frac{\eta}{2} \hat{y} \cdot \vec{\sigma}} = \begin{pmatrix}
\cosh (\frac{1}{2} \log (\cos \theta)) & -i \sinh (\frac{1}{2} \log (\cos \theta)) \\
i \sinh (\frac{1}{2} \log (\cos \theta)) & \cosh(\frac{1}{2} \log (\cos \theta))
\end{pmatrix}  = \frac{1}{\sqrt{\cos \theta}} \begin{pmatrix}
\cos^{2} \frac{\theta}{2} & i \sin^{2} \frac{\theta}{2} \\
- i\sin^{2} \frac{\theta}{2} & \cos^{2} \frac{\theta}{2}
\end{pmatrix}
$$

$$
L_{x} (\mathrm{arcsinh} (\tan \theta)) = e^{i \frac{\eta}{2} \hat{x} \cdot \vec{\sigma}} = \begin{pmatrix}
\cosh (\frac{1}{2} \mathrm{arcsinh} (\tan \theta)) & \sinh (\frac{1}{2} \mathrm{arcsinh} (\tan \theta)) \\
\sinh (\frac{1}{2} \mathrm{arcsinh} (\tan \theta)) & \cosh (\frac{1}{2} \mathrm{arcsinh} (\tan \theta))
\end{pmatrix} \\ 
= \frac{1}{\sqrt{\cos \theta}} \begin{pmatrix}
\cos \frac{\theta}{2} & \sin \frac{\theta}{2} \\
\sin \frac{\theta}{2} & \cos \frac{\theta}{2}
\end{pmatrix}
$$

And the rotation matrix
$$
R_{y} (\theta) = e^{i \frac{\theta}{2} \hat{y} \cdot \vec{\sigma}} = \begin{pmatrix}
\cos \frac{\theta}{2} & \sin \frac{\theta}{2} \\
- \sin \frac{\theta}{2} & \cos \frac{\theta}{2}
\end{pmatrix}
$$

$$
R_{y}^{-1} (\theta) = \begin{pmatrix}
\cos \frac{\theta}{2} & - \sin \frac{\theta}{2} \\
\sin \frac{\theta}{2} & \cos \frac{\theta}{2}
\end{pmatrix}
$$

So the total transformation matrix is
$$
M = \begin{pmatrix}
\frac{1}{\cos \frac{\theta}{2}} & 0 \\
\tan \frac{\theta}{2} & \cos \frac{\theta}{2}
\end{pmatrix}
$$
The ket $\ket{p}$ will change like
$$
\ket{p'} = M \ket{p} = \begin{pmatrix}
0 \\
\cos \frac{\theta}{2} \sqrt{2k}
\end{pmatrix}
$$
Another $R \times L$ type LGT’s transformation matrix is
$$
M = R_{x}^{-1}(-\theta) L_{y}(\operatorname{arcsinh}(\tan \theta)) L_{z}(\log (\cos \theta)) \\ =
\begin{pmatrix}
\cos \frac{\theta}{2} & - i\sin \frac{\theta}{2} \\
- i\sin \frac{\theta}{2} & \cos \frac{\theta}{2}
\end{pmatrix} \frac{1}{\sqrt{\cos \theta}} \begin{pmatrix}
\cos \frac{\theta}{2} & - i\sin \frac{\theta}{2} \\
i \sin \frac{\theta}{2} & \cos \frac{\theta}{2}
\end{pmatrix} \frac{1}{\sqrt{\cos \theta}} \begin{pmatrix}
\cos^{2} \frac{\theta}{2} & - \sin^{2} \frac{\theta}{2} \\
- \sin^{2} \frac{\theta}{2} & \cos^{2} \frac{\theta}{2} 
\end{pmatrix} \\ = \frac{1}{\cos \theta} \begin{pmatrix}
\cos^{2} \frac{\theta}{2} + i \sin^{2} \frac{\theta}{2} \sin \theta & - \sin^{2} \frac{\theta}{2} - i\cos^{2} \frac{\theta}{2} \sin \theta \\
- \sin^{2} \frac{\theta}{2} \cos \theta & \cos^{2} \frac{\theta}{2} \cos \theta
\end{pmatrix}
$$
The ket $\ket{p}$ will change like
$$
\ket{p'} = M \ket{p} = \begin{pmatrix}
- \frac{\sin^{2} \frac{\theta}{2} + i \cos^{2} \frac{\theta}{2} \sin \theta}{\cos \theta} \sqrt{2k} \\
\cos^{2} \frac{\theta}{2} \sqrt{2k}
\end{pmatrix}
$$
(3) Compute the tree-level 3-point amplitude of 3 gluons $\mathcal{M}_{3}(1^+_{a},2^+_{b},3^-_{c})$ with Feynman rules from a Yang-Mills theory and compare your result with (35).



(4) How does a photon talk to a graviton? Can a photon be weighty and can a graviton be charged? Please answer these questions by going through the following steps. 

(a) Please find all 3-point massless amplitudes of 1 spin-1 and 2 spin-2 particles consistent with LGT properties. Please do the same for 2 spin-1 and 1 spin-1 particles. 



(b) Apply various consistent conditions to identify consistent amplitudes among results from (a). How many different ways can a photon talk to a graviton? Which one is the one realized in general relativity?



(5) [This is a non-exercise; Do it only if you really want to!] Please start from the Einstein-Hilbert action $\int d^{4} x \sqrt{-g} R$ and derive the Feynman rule for the graviton cubic self-interaction. Then use it to compute the 3-point graviton amplitude at the tree level and compare your result with (37).



**Comments on References**

Spinor-helicity formalism is commonly taught in modern textbooks of quantum field theory, such as [2] and [3], but the conventions may differ a lot. So, be careful. In particular, the convention used in our lectures is not identical to any of references mentioned here and below.

Consistent three-point and four-point massless amplitudes are originally studied in [4]. See also [5] for a nice pedagogical review.

**References**

[1] S. Weinberg, *The Quantum theory of fields. Vol. 1: Foundations*. Cambridge University Press, 6, 2005.

[2] M. D. Schwartz, *Quantum Field Theory and the Standard Model*. Cambridge University Press, 3, 2014.

[3] M. Srednicki, *Quantum field theory*. Cambridge University Press, 1, 2007.

[4] P. Benincasa and F. Cachazo, "Consistency Conditions on the S-Matrix of Massless Particles," *arXiv:0705.4305 [hep-th]*.

[5] C. Cheung, "TASI lectures on scattering amplitudes.," in *Theoretical Advanced Study Institute in Elementary Particle Physics: Anticipating the Next Discoveries in Particle Physics*, pp. 571–623. 2018. *arXiv:1708.03872 [hep-ph]*.