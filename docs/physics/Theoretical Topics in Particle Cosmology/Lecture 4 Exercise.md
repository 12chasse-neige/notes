

# Lecture 4 Exercise 

Department of Physics, Tsinghua University, Beijing 100084, China  

In this lecture, we study the most singular behavior of a connected amplitude (simple poles) and this study leads to an important theorem called on‑shell factorization. Then, we use this result to discuss Weinberg’s soft theorem for massless spinning particles, and the equivalence principle of gravitation follows as a simple corollary.

**§1 Preparation: A Model of Light Bulbs**  
Up to now, we only consider normal $S$-matrix where particles are created/detected at asymptotic infinity, but, very often, we can also have particle sources turning on at finite time and finite position, such as a light bulb.

We need something beyond $S$-matrix to accommodate the transition amplitudes in the presence of this source, which are called $n$-point Green functions.

We introduce Green functions here because the on‑shell factorization theorem holds true for this more general class of objects. Also, for a technical reason explained below, it is easier to derive this theorem for Green function than $S$-matrix. Moreover, this light‑bulb model will be useful to connect $S$-matrix to a field theory. (We will introduce the field theory viewpoints in Lecture 7.)

The model is simple: Pick up whatever local operator $O(x)$ that has nonvanishing matrix element between vacuum & one‑particle state (scalar for simplicity):

$$
\langle \mathbf{p}|O(0)|\Omega\rangle = 1 \quad \leftarrow \text{normalization of} O(0). \tag{1}
$$

Then:

$$
\langle \mathbf{p}|O(x)|\Omega\rangle = e^{-ip\cdot x} \quad \text{with} p^{0}=+\sqrt{\mathbf{p}^{2}+m^{2}}. \tag{2}
$$

Then we modify the Hamiltonian:

$$
H \;\to\; H + g \int d^{3}\mathbf{x}\, j(t,\mathbf{x}) O(t,\mathbf{x}), \tag{3}
$$

∗ Email: zxianyu@tsinghua.edu.cn

where $j(t,\mathbf{x})$ is a source for particles (light bulb), $g^{2}$ being its “luminosity”. We assume that $j(t,\mathbf{x})$ is nonzero only in a finite domain. Then, you are asked to show that the transition amplitude with $j\neq 0$ between in state $\Psi_{+}$ and out state $\Phi_{-}$ is:

$$
S_{\Phi\Psi}[j] = \langle \Phi_{-} | T\bigg\{ \exp\!\Big(-i\int dt\, d^{3}\mathbf{x}\, j O\Big) \bigg\} | \Psi_{+} \rangle, \tag{4}
$$

where $O$ is the Heisenberg‑picture operator, that is, it evolves with $H$ (not $H+g\int j O$).

As almost always, we cannot compute $S_{\Phi\Psi}[j]$ directly. But if $g$ is small, we can expand it in $g$. Importantly, the original theory remains completely non‑perturbative. (We don’t even specify $H$!) Then, the most general object from this expansion is:

$$
G_{\Phi\Psi}(x_{1},\dots ,x_{n}) = \langle \Phi_{-} | T\big\{ O(x_{1})\cdots O(x_{n}) \big\} | \Psi_{+} \rangle. \tag{5}
$$

This is what we call an $n$-point Green function. Clearly, let $y_{i}\equiv x_{i}-x_{1}$ (so $y_{1}=0$), then

$$
\langle \Phi_{-} | T\big\{ O(x_{1})O(x_{2})\cdots \big\} \rangle = e^{i(p_{\Phi}-p_{\Psi})\cdot x_{1}} \langle \Phi_{-} | T\big\{ O(0)O(y_{2})\cdots \big\} | \Psi_{+} \rangle. \tag{6}
$$

**§2 On‑Shell Factorization Theorem**  
Now we are ready to state an important theorem concerning the simple poles of a Green function. For simplicity, we will work with a model with scalar particles only and we work with vacuum Green function, namely, taking $\Psi=\Phi=\Omega$ in (5) and drop the subscripts, $G=G_{\Omega\Omega}$. The generalization to arbitrary in/out states is straightforward. Generalization to spinning particles will be commented afterwards.

We work in momentum space:

$$
G(k_{1},\dots ,k_{n})\,(2\pi)^{4}\delta^{(4)}(k_{1}+\cdots +k_{n}) \equiv \int \prod_{a=1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \Omega | T\big\{ O_{1}(x_{1})\cdots O_{n}(x_{n}) \big\} | \Omega \rangle. \tag{7}
$$

Importantly, these $k_{i}$’s are completely arbitrary 4‑momenta without any mass‑shell constraints. Assuming scalars only, $G$ is a function of Lorentz invariant combinations like $K_{12}^{2}$, $K_{123}^{2}$, $\dots$ where $K^{\mu}_{1\cdots n}\equiv k^{\mu}_{1}+\cdots +k^{\mu}_{n}$. We want to know $G$’s behavior on the complex plane of $s_{\ell}\equiv -K_{1\cdots\ell}^{2}$ with the condition $K^{0}_{1\cdots\ell}<0$.

**Theorem (on‑shell factorization):** $G(s_{\ell})$ develops a simple pole at $s_{\ell}=m^{2}$ when approaching it from $K^{0}_{1\cdots\ell}<0$, if there is a one‑particle state of species $A$, 3‑momentum $|\mathbf{p}\rangle$, and mass $m$ having nonvanishing matrix element:

$$
G_{E}\,(2\pi)^{4}\delta^{(4)}(K_{1\cdots\ell}+p) \equiv \int \prod_{a=1}^{\ell}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \mathbf{p} | T\big\{ O_{1}(x_{1})\cdots O_{\ell}(x_{\ell}) \big\} | \Omega \rangle, \tag{8}
$$

$$
G_{L}\,(2\pi)^{4}\delta^{(4)}(K_{(\ell+1)\cdots n}-p) \equiv \int \prod_{a=\ell+1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \Omega | T\big\{ O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n}) \big\} | \mathbf{p} \rangle. \tag{9}
$$

Then:

$$
\lim_{\substack{s_{\ell}\to m^{2}\\ K^{0}_{1\cdots\ell}<0}} G(s_{\ell}) = G_{L}\; \frac{-i}{-s_{\ell}+m^{2}-i\epsilon}\; G_{E}. \tag{10}
$$

*If $K^{0}_{1\cdots\ell}>0$, then the above limit still holds, yet with

$$
G'_{E}\,(2\pi)^{4}\delta^{(4)}(K_{(\ell+1)\cdots n}+p) \equiv \int \prod_{a=\ell+1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \mathbf{p} | T\big\{ O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n}) \big\} | \Omega \rangle, \tag{11}
$$

$$
G'_{L}\,(2\pi)^{4}\delta^{(4)}(K_{1\cdots\ell}-p) \equiv \int \prod_{a=1}^{\ell}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \Omega | T\big\{ O_{1}(x_{1})\cdots O_{\ell}(x_{\ell}) \big\} | \mathbf{p} \rangle. \tag{12}
$$

**Remarks** Clearly, $s_{\ell}\to m^{2}$ means an “internal” particle going on shell. The residue factorizes into $G_{L}G_{E}$.  
The physical intuition is: An on‑shell particle can propagate arbitrarily long distance. The divergence is from the accumulation over long distances, where $G_{E}$ & $G_{L}$ are very far apart in spacetime. So they must factorize, which is loosely a consequence of cluster decomposition.

In reality, an amplitude as such is never divergent. Consider a $2\to 2$ process:  
— If $A$ stable, on‑shell pole is in unphysical domain ($m_{A}<2m_{\Phi}$) so you can never reach it physically.  
— If $A$ unstable ($m_{A}>2m_{\Phi}$), then in position space you have a finite life‑time cutoff $T$. Its momentum equivalent is the famous Breit‑Wigner approximation which tells you that the pole is shifted to $\to (m-i/T)^{2}$ and once again you will never reach it physically.  
*After all, On‑shellness is also a theoretical abstraction, or, a relative concept. — Every photon/particle you see/detect is off‑shell! The “on‑shellness” $E^{2}-p^{2}$ is roughly a measure of non‑locality. So, CMB photons are the most on‑shell photons!

**Proof** Here is a sketch of the proof of the theorem and the missing steps are left as exercises:

1. The pole is from on‑shell propagation of a one‑particle state.  
   $\Rightarrow$ Contributed by the part of the spacetime integral where all “early operators” $O_{1}\cdots O_{\ell}$ are earlier than all “late” one $O_{\ell+1}\cdots O_{n}$.  
   $\Rightarrow \propto \theta\!\big( \min\{x^{0}_{\ell+1},\dots ,x^{0}_{n}\} - \max\{x^{0}_{1},\dots ,x^{0}_{\ell}\} \big)$.

   Using the integral representation:

   $$
   \theta(z) = -\frac{1}{2\pi i}\int_{-\infty}^{+\infty} \frac{d\omega}{\omega+i\epsilon}\, e^{-i\omega z}, \tag{13}
   $$

   we can write

   $$
   G = \int \prod_{a=1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \frac{-1}{2\pi i}\int \frac{d\omega}{\omega+i\epsilon}\, e^{-i\omega[\min-\max]} \langle \Omega | T\big\{ O_{1}(x_{1})\cdots O_{n}(x_{n}) \big\} | \Omega \rangle + \cdots, \tag{14}
   $$

   where terms in $\cdots$ do not contribute poles at $s_{\ell}=m^{2}$. Also, thanks to the $\theta$ function, we can write:

   $$
   \langle \Omega | T\big\{ O_{1}\cdots O_{n} \big\} | \Omega \rangle = \langle \Omega | T\big\{ O_{\ell+1}\cdots O_{n} \big\} T\big\{ O_{1}\cdots O_{\ell} \big\} | \Omega \rangle. \tag{15}
   $$

2. Insert a complete basis:

   $$
   1 = |\Omega\rangle\langle\Omega| + \sum_{\text{species}} \int \frac{d^{3}\mathbf{p}}{(2\pi)^{3}}\frac{1}{2E_{p}} |\mathbf{p}\rangle\langle\mathbf{p}| \;\underbrace{\qquad}_{\text{one‑particle state part}} + \cdots. \tag{16}
   $$

   Claim: Only the **one‑particle state part** contributes poles.

   $$
   \langle \Omega | T\big\{ O_{\ell+1}\cdots O_{n} \big\} T\big\{ O_{1}\cdots O_{\ell} \big\} | \Omega \rangle = \int \frac{d^{3}\mathbf{p}}{(2\pi)^{3}}\frac{1}{2E_{p}} \langle \Omega | T\big\{ O_{\ell+1}\cdots O_{n} \big\} | \mathbf{p} \rangle \langle \mathbf{p} | T\big\{ O_{1}\cdots O_{\ell} \big\} | \Omega \rangle + \cdots. \tag{17}
   $$

3. Rewrite

   $$
   \langle \Omega | T\big\{ O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n}) \big\} | \mathbf{p} \rangle = e^{ip\cdot x_{\ell+1}} \langle \Omega | T\big\{ O_{\ell+1}(0)O_{\ell+2}(y_{\ell+2})\cdots O_{n}(y_{n}) \big\} | \mathbf{p} \rangle, \tag{18}
   $$

   with $y_{i}\equiv x_{i}-x_{\ell+1}$, ($i=\ell+1,\dots ,n$), and similarly for the other factor.

   $\Rightarrow$ Finishing $x_{1}$, $x_{\ell+1}$ and $\omega$ integrals produces a $\delta$‑product that gives a denominator

   $$
   \frac{1}{\omega+i\epsilon} \;\to\; \frac{1}{K^{0}_{1\cdots\ell} + \sqrt{\mathbf{K}_{1\cdots\ell}^{2}+m^{2}} + i\epsilon}. \tag{19}
   $$

   Note that the pole is produced by the **negative** energy $K^{0}_{1\cdots\ell}<0$.

4. Combining all other terms, we get the desired result (10).

**Remarks**  
1. Technically, the pole comes from the $1/(\omega+i\epsilon)$ factor when $\omega\to 0$. The one‑particle state carries the minimal number of phase‑space integrals that preserve the singularity. Starting from two‑particle states (in the sense of in states, for example), there are more integrals which soften the singularities to branch cuts.

   Let us confirm this by a direct counting exercise: two integrals of $d^{4}x_{1}\, d^{4}x_{\ell+1}$ leads to 8 $\delta$‑function factors; Then, $\int d^{3}\mathbf{p} \int d\omega$ removes 4 $\delta$’s. So we have 4 net $\delta$’s of total energy‑momentum conservation.

2. Also, from the proof, it is clear how to generalize this result when the intermediate on‑shell particle $A$ has nonzero spin: We simply sum over all helicity states:

   $$
   \lim_{\substack{s_{\ell}\to m^{2}\\ K^{0}_{1\cdots\ell}<0}} G(s_{\ell}) = \sum_{h} G_{L}(h)\; \frac{-i}{-s_{\ell}+m^{2}-i\epsilon}\; G_{E}(-h), \tag{20}
   $$

   where the sum goes from $-s,-s+1,\dots ,s-1,s$ for massive $A$ and $-s,+s$ for massless $A$, and

   $$
   G_{E}(-h)\,(2\pi)^{4}\delta^{(4)}(K_{1\cdots\ell}+p) \equiv \int \prod_{a=1}^{\ell}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \mathbf{p},h | T\big\{ O_{1}(x_{1})\cdots O_{\ell}(x_{\ell}) \big\} | \Omega \rangle, \tag{21}
   $$

   $$
   G_{L}(h)\,(2\pi)^{4}\delta^{(4)}(K_{(\ell+1)\cdots n}-p) \equiv \int \prod_{a=\ell+1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \Omega | T\big\{ O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n}) \big\} | \mathbf{p},h \rangle. \tag{22}
   $$

3. We would like to formulate the on‑shell factorization theorem for $S$-matrix elements, but there are subtleties. So, our strategy is to state and prove the theorem for Green functions first, and then convert a Green function to $S$-matrix element, which is the well‑known Lehmann–Symanzik–Zimmermann (LSZ) reduction.

**§3 LSZ Reduction**  
Naively, from a given $G$, we may want to set $x^{0}_{1},\dots ,x^{0}_{\ell}\to +\infty$, $x^{0}_{\ell+1},\dots ,x^{0}_{n}\to -\infty$ to turn it into a connected $S$-matrix element. However, we also want to do it in momentum space where $x^{0}_{i}$ does not make sense. A proper way is the **LSZ reduction**. The idea is this: Sending particle sources to $t=\pm\infty$ while maintaining nontrivial scattering around $t\sim 0$ requires those emitted/absorbed particles to travel very long time, which amounts to saying that these particles are on shell. So, the momentum‑space equivalent of sending $x^{0}_{i}\to\pm\infty$ is to make all external momenta on shell.

Suppose we have a vacuum Green function in momentum space:

$$
G_{\Omega\Omega}(k_{1},\dots ,k_{n})\,(2\pi)^{4}\delta^{(4)}(K_{1\cdots n}) = \int \prod_{a=1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \Omega | T\big\{ O_{1}(x_{1})\cdots O_{n}(x_{n}) \big\} | \Omega \rangle. \tag{23}
$$

Here we can have $n$ $O$’s creating identical or different species of particles. Then, we put **all** external momenta in $G_{\Omega\Omega}(k_{1},\dots ,k_{n})$ on‑shell, with

$$
k^{0}_{i}= \mp \sqrt{\mathbf{k}_{i}^{2}+m_{i}^{2}}, \qquad \begin{cases} - & \text{for} i=1,\dots ,\ell \[2pt] + & \text{for} i=\ell+1,\dots ,n \end{cases}. \tag{24}
$$

Putting one $k$ on‑shell is straightforward by the on‑shell factorization theorem: Let $k_{1}^{2}\to -m_{1}^{2}$ with $k^{0}_{1}>0$, then

$$
G_{L}\times (2\pi)^{4}\delta^{(4)}(k-p) = \int d^{4}x\, e^{-ik\cdot x} \langle \underbrace{e^{+ip\cdot x}}_{\Omega} | O_{1}(x) | \mathbf{p} \rangle = (2\pi)^{4}\delta^{(4)}(k-p), \tag{25}
$$

$\Rightarrow G_{L}=1$, and

$$
\lim_{\substack{k_{1}^{2}\to -m_{1}^{2}\\ k^{0}_{1}<0}} G_{\Omega\Omega}(k_{1},\dots ,k_{n}) = \frac{-i}{k_{1}^{2}+m_{1}^{2}-i\epsilon}\; \times\; G_{\tilde{k}_{1}\Omega}(k_{2},\dots ,k_{n}), \tag{26}
$$

where

$$
G_{\tilde{k}_{1}\Omega}(k_{2},\dots ,k_{n})\,(2\pi)^{4}\delta^{(4)}(K_{2\cdots n}) \equiv \int \prod_{a=2}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \mathbf{p} | T\big\{ O_{2}\cdots O_{n} \big\} | \Omega \rangle. \tag{27}
$$

So, putting one external momentum on‑shell pins one internal point to an asymptotic state, which is effectively $x^{0}_{1}\to +\infty$.

The origin of the pole can also be understood heuristically: When a state goes on‑shell and propagates to the far future, it is like a free one‑particle state with $p^{\mu}=(E_{p},\mathbf{p})$. So,

$$
\lim_{x^{0}_{1}\to +\infty} G(x_{1},\dots ,x_{n}) \sim e^{+iE_{p}x^{0}-i\mathbf{p}\cdot\mathbf{x}}\; \tilde{G}(x_{2},\dots ,x_{n}), \tag{28}
$$

$\Rightarrow$ Fourier transform $\int d^{4}x_{1}\, e^{-ik_{1}\cdot x_{1}} G$ is divergent when $k^{\mu}_{1}\to -p^{\mu}$. So, the constructive interference filters $e^{-ip\cdot x}$ out.

We want to repeat the above procedure for all $O_{i}$, but this requires additional properties of in/out states.

Schematically, we have a bunch of poles $\prod_{i=1}^{\ell} \frac{-i}{k_{i}^{2}+m_{i}^{2}-i\epsilon}$ when $k_{i}^{2}\to -m_{i}^{2}$ & $k^{0}_{i}<0$. They are from the region $x^{0}_{i}\to -\infty$ for all $i=1,\dots ,\ell$ and from inserting an intermediate in‑state $|\{\mathbf{p}_{1},\dots ,\mathbf{p}_{\ell}\}_{+}\rangle$. Since $t\to -\infty$, we expect the following factorization in the wave‑packet sense:

$$
\langle \{\mathbf{p}_{1},\dots ,\mathbf{p}_{\ell}\}_{+} | T\big\{ O_{1}(x_{1})\cdots O_{\ell}(x_{\ell}) \big\} | \Omega \rangle = \prod_{a=1}^{\ell} \langle \mathbf{p}_{a} | O_{a}(x_{a}) | \Omega \rangle. \tag{29}
$$

Similar for $O_{b}(x_{b})$ as $x^{0}_{b}\to +\infty$ with $b=\ell+1,\dots ,n$. Thus:

$$
\lim_{k_{a}^{2}\to -m_{a}^{2}} G_{\Omega\Omega}(k_{1},\dots ,k_{n}) = \prod_{a=1}^{n} \Big[ \frac{-i}{k_{a}^{2}+m_{a}^{2}-i\epsilon} \Big] \; \langle \{\mathbf{p}_{\ell+1}\cdots\mathbf{p}_{n}\}_{-} | \{\mathbf{p}_{1}\cdots\mathbf{p}_{\ell}\}_{+} \rangle'. \tag{30}
$$

This is the celebrated **LSZ reduction formula**.

**§4 Weinberg’s Soft Theorem**  
Now we are ready to apply the previous results on analyticity to constrain interactions involving massless spinning particles, which leads to a central result for this course, the Weinberg’s soft theorem.

The soft theorem begins with the question of how a scattering amplitude behaves for emitting a **soft** massless particle (momentum $q\to 0$). To specify this photon emission, we need to know how to couple a photon to a massive particle.

**Minimal coupling** Take a massless spin‑1 particle (say, a photon) as an example. Let us look at a 3‑point Green function with an ingoing and an outgoing scalar $\phi$ of mass $m$ together with an outgoing photon of definite helicity:

This Green function is a probability amplitude for emitting a photon from the massive scalar. Of course, the three external momenta cannot all be on‑shell, but we can put $p$, $p'$ on‑shell, and $q$ only slightly off‑shell. Then, the above amplitude is a Lorentz scalar constructed with one $e^{*\mu}_{\pm}(q)$, and $p^{\mu}$ and $q^{\mu}$. So, the most general possibility is:

$$
\Rightarrow G(p,p',q) = g\, e^{*}_{\pm\mu}(q)\, p^{\mu}\, F(p^{2},p'^{2},q^{2}). \tag{31}
$$

That is, we need one Lorentz vector to contract $\epsilon^{\mu}$. The only independent option is $p^{\mu}$. ($p'$ is not independent). Then, the arbitrary function $F(p^{2},p'^{2},q^{2})$ can depend on three Lorentz vectors squared, but $p^{2}=p'^{2}=-m^{2}$ and $q^{2}=0$. So, $F$ is actually a number. Since we have introduced an overall coefficient $g$ to measure the strength of this process, we can set $F=1$.

However, the only choice $F(q^{2})=1$ is **not** Lorentz invariant: Under a Lorentz transform, $G\to G+\alpha g\, q\cdot p$.

For spinning particles, there are other Lorentz‑invariant possibilities making $F$ a nontrivial function, such as a magnetic dipole coupling, but this is impossible for scalars. (Clearly, scalars do not have a dipole.)

Now, the key insight is this: $G$ is not a complete process, but only part of a larger one, so $G$ **can** be Lorentz non‑invariant as long as the larger process is. Clearly, this puts nontrivial constraint to the larger process.

Incidentally, our terminology is that $G(p,p',q) = g\, e^{*\pm}_{\mu}(q) p^{\mu}$ can be treated as the definition of the **minimal coupling** of a scalar $\phi$ to the photon. Below, we only consider the minimal coupling.

(In principle, we can have $g\,\epsilon_{+}\!\cdot\!p$ & $g'\,\epsilon_{-}\!\cdot\!p$, but $g=g'$ for parity conserving theories.)

**Soft theorem** With the above preparation, now we consider a very general $L\to N$ process. The $L+N$ particles can be identical or distinct, which does not matter. We assume them to be scalars, purely for simplicity. Let the connected $S$-matrix element be

$$
i\mathcal{M}_{\Phi\Psi} = \langle \{\mathbf{p}'_{1}\cdots\mathbf{p}'_{N}\}_{-} | \{\mathbf{p}_{1}\cdots\mathbf{p}_{L}\}_{+} \rangle'_{\text{C}}, \tag{32}
$$

where C means the connected part and $\langle\cdots\rangle'$ means to strip away the $\delta$-factor $(2\pi)^{4}\delta^{(4)}(p_{1}+\cdots+p_{L}-p'_{1}-\cdots-p'_{N})$. This process can be represented as a diagram.

Now, suppose all these particles talk to a photon $\gamma$ through the minimal coupling. Then, we ask the question: What is the relation between

$$
i\mathcal{M}^{\pm}_{\Phi\gamma,\Psi} \equiv \langle \{\mathbf{p}'_{1}\cdots\mathbf{p}'_{N}\,\gamma_{\pm}(q)\}_{-} | \{\mathbf{p}_{1}\cdots\mathbf{p}_{L}\}_{+} \rangle'_{\text{C}}, \tag{33}
$$

and $i\mathcal{M}_{\Phi\Psi}$, when $q\to 0$?

We answer this question by considering how to form $\mathcal{M}^{\pm}_{\Phi\gamma,\Psi}$. There are $L+N+1$ options: The single outgoing photon can set off from an ingoing line, or an outgoing line, or the central mess.

Then, $\mathcal{M}^{\pm}_{\Phi\gamma,\Psi}$ is simply the sum of all these options. Let us look at them one by one.

**Option 1:** When $q\to 0$, $k_{a}\to$ on‑shell $\Rightarrow$ Factorization!

$$
\mathcal{M}^{(a)\pm}_{\Phi\gamma,\Psi} = \mathcal{M}_{\Phi\Psi} \times \frac{-i}{(p_{a}-q)^{2}+m^{2}-i\epsilon} \times g_{a}\, e^{*}_{\pm\mu}(q)\, p^{\mu}_{a}, \tag{34}
$$

where $g_{a}$ is the minimal coupling of particle $a$. This shows, when $q\to 0$, this part of the contribution scales as $O(1/q)$:

$$
\mathcal{M}^{(a)\pm}_{\Phi\gamma,\Psi} \;\to\; \mathcal{M}_{\Phi\Psi} \times \frac{g_{a}\, e^{*}_{\pm\mu}(q)\, p^{\mu}_{a}}{-2p_{a}\!\cdot\!q - i\epsilon}. \tag{35}
$$

**Option 2.** Similar to Option 1, we let $b\in\{1,\dots ,N\}$. Then, as $q\to 0$,

$$
\mathcal{M}^{(b)\pm}_{\Phi\gamma,\Psi} \;\to\; \mathcal{M}_{\Phi\Psi} \times \frac{g_{b}\, e^{*}_{\pm\mu}(q)\, p'^{\mu}_{b}}{+2p'_{b}\!\cdot\!q - i\epsilon}. \tag{36}
$$

**Option 3.** In this case, no internal states are forced to be on‑shell when $q\to 0$. So, this part of the amplitude is regular as $q\to 0$, i.e., it starts at least from $O(q^{0})$. Hence it can be neglected compared to the other two options when $q\to 0$.

Now, we collect all leading $O(1/q)$ contributions:

$$
\lim_{q\to 0} \mathcal{M}_{\Phi\gamma,\Psi} = \mathcal{M}_{\Phi\Psi} \times \Bigg[ \sum_{a=1}^{L} \frac{g_{a}\, e^{*}_{\pm\mu}(q)\, p^{\mu}_{a}}{-2p_{a}\!\cdot\!q - i\epsilon} \;+\; \sum_{b=1}^{N} \frac{g_{b}\, e^{*}_{\pm\mu}(q)\, p'^{\mu}_{b}}{+2p'_{b}\!\cdot\!q - i\epsilon} \Bigg] + O(q^{0}). \tag{37}
$$

This is **Weinberg’s soft theorem**. It relates the two amplitudes (with and without single soft photon emission) in a way that does not rely on the use of quantum field theory and is completely nonperturbative.

**Implications** Now let us look at the consequences of this soft theorem which turn out to be more remarkable.

The important point is, $\mathcal{M}_{\Phi\gamma,\Psi}$ must be a Lorentz scalar. However, under a Lorentz transform, $e^{*}_{\pm\mu} \to e^{*}_{\pm\mu} + \alpha q_{\mu}$, and therefore,

$$
\Delta\mathcal{M}_{\Phi\gamma,\Psi} \propto -\frac{\alpha}{2} \Big[ \sum_{a=1}^{L} g_{a} - \sum_{b=1}^{N} g_{b} \Big]. \tag{38}
$$

Since $\Delta\mathcal{M}_{\Phi\gamma,\Psi}=0$, we get a constraint on coefficients of minimal couplings:

$$
\sum_{a=1}^{L} g_{a} = \sum_{b=1}^{N} g_{b}. \tag{39}
$$

Later we will see that $g_{a}$ should be interpreted as coupling $\times$ charge, $g_{a}=g q_{a}$. So, we reach one important conclusion:

**The minimal coupling to a massless spin‑1 particle demands charge conservation.**

We will see later that minimal couplings to massless particles correspond to long‑range forces with potential $V(r)\sim 1/r$. Therefore, if a massless spin‑1 boson mediates a long‑range force among a bunch of “charged particles,” then Lorentz invariance says that this is possible only when there is already a notion of charge conservation in the charged sector.

In principle, we can of course have many massless spin‑1, each generating a long‑range force among a sector of particles with a conserved charge. In reality, only one such example is known (photon), but it is conceivable to have more of them that remain to be detected. (Example: $B-L$ force.)

Now let us look at the soft theorem for emitting a graviton, namely, a massless spin‑2 particle. The analysis is similar. Again, if we consider only scalar particles, the only possible on‑shell coupling is the minimal coupling:

Using this coupling to repeat all the derivations above, we get the soft theorem for emitting a soft graviton $h$:

$$
\lim_{q\to 0} \mathcal{M}^{\pm}_{\Phi h,\Psi} = \mathcal{M}_{\Phi\Psi} \times \Bigg[ \sum_{a=1}^{L} \frac{g_{a}\, e^{*}_{\pm\mu\nu}(q)\, p^{\mu}_{a}p^{\nu}_{a}}{-2p_{a}\!\cdot\!q} \;+\; \sum_{b=1}^{N} \frac{g_{b}\, e^{*}_{\pm\mu\nu}(q)\, p'^{\mu}_{b}p'^{\nu}_{b}}{+2p_{b}\!\cdot\!q} \Bigg] + O(q^{0}). \tag{40}
$$

Again, let us perform a Lorentz transform to $\mathcal{M}^{\pm}_{\Phi h,\Psi}$ with $e^{*}_{\pm\mu\nu} \to e^{*}_{\pm\mu\nu} + \Lambda_{\mu}q_{\nu} + \Lambda_{\nu}q_{\mu}$, with $q\!\cdot\!\Lambda = 0$. Then, the Lorentz invariance condition $\Delta\mathcal{M}^{\pm}_{\Phi\gamma,\Psi}=0$ demands the following identity:

$$
\sum_{a=1}^{L} g_{a}\, p^{\mu}_{a} = \sum_{b=1}^{N} g_{b}\, p^{\mu}_{b}. \tag{41}
$$

On the other hand, we have momentum conservation:

$$
\sum_{a=1}^{L} p^{\mu}_{a} = \sum_{b=1}^{N} p^{\mu}_{b}. \tag{42}
$$

To solve both identities with generic kinematics, the only possibility is that all $g_{a}$ are equal. Again, we will see later that $g_{a}$ is the ratio of weight & mass. Therefore, we have the following result:

**The minimal coupling to a massless spin‑2 particle is universal.**

Therefore, for a massless spin‑2 boson to mediate a long‑range force, the Lorentz invariance requires a universal coupling. This is nothing but the **equivalence principle**.

In reality, only one such example is known to us (graviton), as it should be! In principle, however, it is logically possible that we have more than one massless spin‑2 particles, each mediating a long‑range force (gravity) among a secluded sector. (Parallel universes!)

Soft theorems for emitting massless higher‑spin ($s\ge 3$) particles can be derived similarly. Defining the minimal coupling to a spin‑$s$ particle and going through all steps above, we see that consistent amplitudes of emitting a soft spin‑$s$ particle with minimal coupling would require

$$
\sum_{a=1}^{L} g_{a}\, p^{\mu_{1}}_{a}\cdots p^{\mu_{s-1}}_{a} = \sum_{b=1}^{N} g_{b}\, p^{\mu_{1}}_{b}\cdots p^{\mu_{s-1}}_{b}. \tag{43}
$$

Together with the momentum conservation, we see that the only solution is that all $g_{a}=0$. So:

**Massless particles with spin $s\ge 3$ cannot mediate long‑range force.**

**Exercise**  
(1) Please derive the Dyson series (4) for the transition amplitude in the presence of a source $j$.




(2) Please fill in the missing steps in the proof of the on‑shell factorization theorem.



**Comments on References**  
This lecture is closely related to materials of Secs. 6.4 (light‑bulb model), 10.2 (on‑shell factorization), 10.3 (LSZ reduction), and 13.1 (soft theorems) of Weinberg’s Vol. 1 [1]. Coleman’s lectures on quantum field theory [2] also contains a nice treatment of scattering theory and LSZ reduction.

**References**  
[1] S. Weinberg, *The Quantum theory of fields. Vol. 1: Foundations*. Cambridge University Press, 6, 2005.  
[2] S. Coleman, *Lectures of Sidney Coleman on Quantum Field Theory*. WSP, Hackensack, 12, 2018.