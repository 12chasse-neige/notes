

# Lecture 4 Exercise 

(1) Please derive the Dyson series (4) for the transition amplitude in the presence of a source $j$.
$$
S_{\Phi\Psi}[j] = \langle \Phi_{-} | T\bigg\{ \exp\!\Big(-i\int dt\, d^{3}\mathbf{x}\, j O\Big) \bigg\} | \Psi_{+} \rangle \tag{4}
$$
We can solve this problem in the interaction picture, where the effect of the light bulb can be seen as a perturbation
$$
V(t) = g \int \dd[3]{\vec{x}} j(t, \vec{x}) O (t, \vec{x})
$$
Using the schrödinger equation for the time elvoving operators under the interaction picture
$$
i \pdv{}{t} U (t, t_{0}) = V(t) U(t, t_{0})
$$
We can change this equation into a integral equation
$$
U (t, t_{0}) = 1 - i \int_{t_{0}}^{t} V(t) U(t, t_{0}) \dd{t}
$$
Iterate this integral equation, we can get the Dyson series for the time evolving operator
$$
U(t, t_{0}) = 1 + \sum_{n} \frac{(-i)^{n}}{n!} \prod_{i = 1}^{n} \int \dd{t}_{i} T (V (t_{i})) = T \left\{ \exp(-i \int_{t_{0}}^{t}V (\tau) \dd{\tau}) \right\}
$$
So using the Dyson series, we can get the time evolving operator from $- \infty$ to $\infty$
$$
U (- \infty, \infty) = T \left\{ \exp(-i \int_{-\infty}^{\infty}V (\tau) \dd{\tau}) \right\} \\ =
T \left\{ \exp(-i \int_{-\infty}^{\infty}\dd{\tau} \int \dd[3]{\vec{x}} j(t, \vec{x}) O (t, \vec{x}) ) \right\} = T \left\{ \exp(-i \int \dd[4]{\vec{x}} j(t, \vec{x}) O (t, \vec{x}) ) \right\}
$$
So the component of the S-matrix can be represented as
$$
S_{\Phi\Psi}[j] = \langle \Phi_{-} | U (- \infty, \infty) | \Psi_{+} \rangle = \langle \Phi_{-} | T\bigg\{ \exp\!\Big(-i\int dt\, d^{3}\mathbf{x}\, j O\Big) \bigg\} | \Psi_{+} \rangle
$$

(2) Please fill in the missing steps in the proof of the on‑shell factorization theorem.

>**§2 On‑Shell Factorization Theorem** 
>Now we are ready to state an important theorem concerning the simple poles of a Green function. For simplicity, we will work with a model with scalar particles only and we work with vacuum Green function, namely, taking $\Psi=\Phi=\Omega$ in (5) and drop the subscripts, $G=G_{\Omega\Omega}$. The generalization to arbitrary in/out states is straightforward. Generalization to spinning particles will be commented afterwards.
>
>We work in momentum space
>
>$$
>G(k_{1},\dots ,k_{n})\,(2\pi)^{4}\delta^{(4)}(k_{1}+\cdots +k_{n}) \equiv \int \prod_{a=1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \Omega | T\big\{ O_{1}(x_{1})\cdots O_{n}(x_{n}) \big\} | \Omega \rangle \tag{7}
>$$
>
>Importantly, these $k_{i}$’s are completely arbitrary 4‑momenta without any mass‑shell constraints. Assuming scalars only, $G$ is a function of Lorentz invariant combinations like $K_{12}^{2}$, $K_{123}^{2}$, $\dots$ where $K^{\mu}_{1\cdots n}\equiv k^{\mu}_{1}+\cdots +k^{\mu}_{n}$. We want to know $G$’s behavior on the complex plane of $s_{\ell}\equiv -K_{1\cdots\ell}^{2}$ with the condition $K^{0}_{1\cdots\ell}<0$.
>
>**Theorem (on‑shell factorization):** $G(s_{\ell})$ develops a simple pole at $s_{\ell}=m^{2}$ when approaching it from $K^{0}_{1\cdots\ell}<0$, if there is a one‑particle state of species $A$, 3‑momentum $|\mathbf{p}\rangle$, and mass $m$ having nonvanishing matrix element:
>$$
>G_{E}\,(2\pi)^{4}\delta^{(4)}(K_{1\cdots\ell}+p) \equiv \int \prod_{a=1}^{\ell}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \mathbf{p} | T\big\{ O_{1}(x_{1})\cdots O_{\ell}(x_{\ell}) \big\} | \Omega \rangle \tag{8}
>$$
>
>$$
>G_{L}\,(2\pi)^{4}\delta^{(4)}(K_{(\ell+1)\cdots n}-p) \equiv \int \prod_{a=\ell+1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \Omega | T\big\{ O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n}) \big\} | \mathbf{p} \rangle \tag{9}
>$$
>
>Then
>
>$$
>\lim_{\substack{s_{\ell}\to m^{2}\\ K^{0}_{1\cdots\ell}<0}} G(s_{\ell}) = G_{L}\; \frac{-i}{-s_{\ell}+m^{2}-i\epsilon}\; G_{E} \tag{10}
>$$
>
>If $K^{0}_{1\cdots\ell}>0$, then the above limit still holds, yet with
>$$
>G'_{E}\,(2\pi)^{4}\delta^{(4)}(K_{(\ell+1)\cdots n}+p) \equiv \int \prod_{a=\ell+1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \mathbf{p} | T\big\{ O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n}) \big\} | \Omega \rangle \tag{11}
>$$
>
>$$
>G'_{L}\,(2\pi)^{4}\delta^{(4)}(K_{1\cdots\ell}-p) \equiv \int \prod_{a=1}^{\ell}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \Omega | T\big\{ O_{1}(x_{1})\cdots O_{\ell}(x_{\ell}) \big\} | \mathbf{p} \rangle \tag{12}
>$$
>
>**Remarks** Clearly, $s_{\ell}\to m^{2}$ means an “internal” particle going on shell. The residue factorizes into $G_{L}G_{E}$. 
>The physical intuition is: An on‑shell particle can propagate arbitrarily long distance. The divergence is from the accumulation over long distances, where $G_{E}$ & $G_{L}$ are very far apart in spacetime. So they must factorize, which is loosely a consequence of cluster decomposition.
>
>In reality, an amplitude as such is never divergent. Consider a $2\to 2$ process: 
>— If $A$ stable, on‑shell pole is in unphysical domain ($m_{A}<2m_{\Phi}$) so you can never reach it physically. 
>— If $A$ unstable ($m_{A}>2m_{\Phi}$), then in position space you have a finite life‑time cutoff $T$. Its momentum equivalent is the famous Breit‑Wigner approximation which tells you that the pole is shifted to $\to (m-i/T)^{2}$ and once again you will never reach it physically. 
>After all, On‑shellness is also a theoretical abstraction, or, a relative concept. — Every photon/particle you see/detect is off‑shell! The “on‑shellness” $E^{2}-p^{2}$ is roughly a measure of non‑locality. So, CMB photons are the most on‑shell photons!
>
>**Proof** Here is a sketch of the proof of the theorem and the missing steps are left as exercises:
>
>1. The pole is from on‑shell propagation of a one‑particle state. 
>   $\Rightarrow$ Contributed by the part of the spacetime integral where all “early operators” $O_{1}\cdots O_{\ell}$ are earlier than all “late” one $O_{\ell+1}\cdots O_{n}$. 
>     $\Rightarrow \propto \theta\!\big( \min\{x^{0}_{\ell+1},\dots ,x^{0}_{n}\} - \max\{x^{0}_{1},\dots ,x^{0}_{\ell}\} \big)$.
>
>   Using the integral representation
>
> $$
>   \theta(z) = -\frac{1}{2\pi i}\int_{-\infty}^{+\infty} \frac{d\omega}{\omega+i\epsilon}\, e^{-i\omega z} \tag{13}
> $$
>
>   we can write
>
> $$
> G = \int \prod_{a=1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \frac{-1}{2\pi i}\int \frac{d\omega}{\omega+i\epsilon}\, e^{-i\omega[\min-\max]} \langle \Omega | T\big\{ O_{1}(x_{1})\cdots O_{n}(x_{n}) \big\} | \Omega \rangle + \cdots \tag{14}
> $$
>
>   where terms in $\cdots$ do not contribute poles at $s_{\ell}=m^{2}$. Also, thanks to the $\theta$ function, we can write:
>
> $$
> \langle \Omega | T\big\{ O_{1}\cdots O_{n} \big\} | \Omega \rangle = \langle \Omega | T\big\{ O_{\ell+1}\cdots O_{n} \big\} T\big\{ O_{1}\cdots O_{\ell} \big\} | \Omega \rangle \tag{15}
> $$
>
>2. Insert a complete basis
>
> $$
> 1 = |\Omega\rangle\langle\Omega| + \sum_{\text{species}} \underbrace{\int \frac{d^{3}\mathbf{p}}{(2\pi)^{3}}\frac{1}{2E_{p}} |\mathbf{p}\rangle\langle\mathbf{p}|}_{\text{one‑particle state part}} + \cdots \tag{16}
> $$
>
>   Claim: Only the **one‑particle state part** contributes poles.
>
> $$
> \langle \Omega | T\big\{ O_{\ell+1}\cdots O_{n} \big\} T\big\{ O_{1}\cdots O_{\ell} \big\} | \Omega \rangle \\ = 
> \int \frac{d^{3}\mathbf{p}}{(2\pi)^{3}}\frac{1}{2E_{p}} \langle \Omega | T\big\{ O_{\ell+1}\cdots O_{n} \big\} | \mathbf{p} \rangle \langle \mathbf{p} | T\big\{ O_{1}\cdots O_{\ell} \big\} | \Omega \rangle + \cdots \tag{17}
> $$
>
>3. Rewrite
>
> $$
>   \langle \Omega | T\big\{ O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n}) \big\} | \mathbf{p} \rangle = e^{ip\cdot x_{\ell+1}} \langle \Omega | T\big\{ O_{\ell+1}(0)O_{\ell+2}(y_{\ell+2})\cdots O_{n}(y_{n}) \big\} | \mathbf{p} \rangle \tag{18}
> $$
>
>   with $y_{i}\equiv x_{i}-x_{\ell+1}$, ($i=\ell+1,\dots ,n$), and similarly for the other factor.
>
>   $\Rightarrow$ Finishing $x_{1}$, $x_{\ell+1}$ and $\omega$ integrals produces a $\delta$‑product that gives a denominator
>
> $$
>   \frac{1}{\omega+i\epsilon} \;\to\; \frac{1}{K^{0}_{1\cdots\ell} + \sqrt{\mathbf{K}_{1\cdots\ell}^{2}+m^{2}} + i\epsilon} \tag{19}
> $$
>
>   Note that the pole is produced by the **negative** energy $K^{0}_{1\cdots\ell}<0$.
>
>4. Combining all other terms, we get the desired result (10).
>
>**Remarks**  
>
>1. Technically, the pole comes from the $1/(\omega+i\epsilon)$ factor when $\omega\to 0$. The one‑particle state carries the minimal number of phase‑space integrals that preserve the singularity. Starting from two‑particle states (in the sense of in states, for example), there are more integrals which soften the singularities to branch cuts.
>
>   Let us confirm this by a direct counting exercise: two integrals of $d^{4}x_{1}\, d^{4}x_{\ell+1}$ leads to 8 $\delta$‑function factors; Then, $\int d^{3}\mathbf{p} \int d\omega$ removes 4 $\delta$’s. So we have 4 net $\delta$’s of total energy‑momentum conservation.
>
>2. Also, from the proof, it is clear how to generalize this result when the intermediate on‑shell particle $A$ has nonzero spin: We simply sum over all helicity states:
>
> $$
>   \lim_{\substack{s_{\ell}\to m^{2}\\ K^{0}_{1\cdots\ell}<0}} G(s_{\ell}) = \sum_{h} G_{L}(h)\; \frac{-i}{-s_{\ell}+m^{2}-i\epsilon}\; G_{E}(-h), \tag{20}
> $$
>
>   where the sum goes from $-s,-s+1,\dots ,s-1,s$ for massive $A$ and $-s,+s$ for massless $A$, and
>
> $$
>   G_{E}(-h)\,(2\pi)^{4}\delta^{(4)}(K_{1\cdots\ell}+p) \equiv \int \prod_{a=1}^{\ell}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \mathbf{p},h | T\big\{ O_{1}(x_{1})\cdots O_{\ell}(x_{\ell}) \big\} | \Omega \rangle, \tag{21}
> $$
>
> $$
>   G_{L}(h)\,(2\pi)^{4}\delta^{(4)}(K_{(\ell+1)\cdots n}-p) \equiv \int \prod_{a=\ell+1}^{n}\Big[ d^{4}x_{a}\, e^{-ik_{a}\cdot x_{a}} \Big] \langle \Omega | T\big\{ O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n}) \big\} | \mathbf{p},h \rangle. \tag{22}
> $$
>
>3. We would like to formulate the on‑shell factorization theorem for $S$-matrix elements, but there are subtleties. So, our strategy is to state and prove the theorem for Green functions first, and then convert a Green function to $S$-matrix element, which is the well‑known Lehmann–Symanzik–Zimmermann (LSZ) reduction.

After using the integral representation of the $\theta$-function and inserting the complete set of states, keeping only the one‑particle contribution, we have

$$
G_{\text{pole}} = \int\prod_{a=1}^{n} d^{4}x_{a}\,e^{-ik_{a}\cdot x_{a}}
\frac{-1}{2\pi i}\int \frac{d\omega}{\omega+i\epsilon}\,
e^{-i\omega[\min\{x^{0}_{\ell+1},\dots ,x^{0}_{n}\}-\max\{x^{0}_{1},\dots ,x^{0}_{\ell}\}]} \\
\qquad\times
\int\frac{d^{3}\mathbf{p}}{(2\pi)^{3}}\frac{1}{2E_{p}}\,
\langle\Omega|T\{O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n})\}|\mathbf{p}\rangle
\langle\mathbf{p}|T\{O_{1}(x_{1})\cdots O_{\ell}(x_{\ell})\}|\Omega\rangle 
\tag{A}
$$

The pole at $s_{\ell}=m^{2}$ comes from the region where the early operators $(O_{1},\dots ,O_{\ell})$ are all earlier than the late operators $(O_{\ell+1},\dots ,O_{n})$.  In that region the time ordering factorises
$$
T\{O_{1}\cdots O_{n}\}=T\{O_{\ell+1}\cdots O_{n}\}\,T\{O_{1}\cdots O_{\ell}\}
\tag{B}
$$
and the $\min$–$\max$ difference is approximately the separation between the two clusters.  For the purpose of extracting the simple pole we may therefore replace
$$
\min\{x^{0}_{\ell+1},\dots ,x^{0}_{n}\}\simeq x^{0}_{\ell+1},\quad
\max\{x^{0}_{1},\dots ,x^{0}_{\ell}\}\simeq x^{0}_{1}
\tag{C}
$$
because corrections from the relative times inside each cluster do not affect the singular part.Introduce the coordinate differences

$$
z_{i}=x_{i}-x_{1}\;(i=2,\dots ,\ell),\quad
y_{i}=x_{i}-x_{\ell+1}\;(i=\ell+2,\dots ,n)
$$

Using the momentum eigenstate property $P^{\mu}|\mathbf{p}\rangle=p^{\mu}|\mathbf{p}\rangle$ we can extract the dependence on the reference points
$$
\langle\mathbf{p}|T\{O_{1}(x_{1})\cdots O_{\ell}(x_{\ell})\}|\Omega\rangle
=e^{-ip\cdot x_{1}}
\langle\mathbf{p}|T\{O_{1}(0)O_{2}(z_{2})\cdots O_{\ell}(z_{\ell})\}|\Omega\rangle \\
\langle\Omega|T\{O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n})\}|\mathbf{p}\rangle
=e^{ip\cdot x_{\ell+1}}
\langle\Omega|T\{O_{\ell+1}(0)O_{\ell+2}(y_{\ell+2})\cdots O_{n}(y_{n})\}|\mathbf{p}\rangle 
\tag{D}
$$

Insert (C) and (D) into (A).  The Fourier exponentials combine as
$$
\sum_{a=1}^{\ell}k_{a}\!\cdot\! x_{a}
=K_{1\cdots\ell}\!\cdot\! x_{1}+\sum_{i=2}^{\ell}k_{i}\!\cdot\! z_{i} \\
\sum_{a=\ell+1}^{n}k_{a}\!\cdot\! x_{a}
=K_{(\ell+1)\cdots n}\!\cdot\! x_{\ell+1}+\sum_{i=\ell+2}^{n}k_{i}\!\cdot\! y_{i}
$$
where
$$
K_{1\cdots\ell}^{\mu}=\sum_{a=1}^{\ell}k_{a}^{\mu},\qquad
K_{(\ell+1)\cdots n}^{\mu}=\sum_{a=\ell+1}^{n}k_{a}^{\mu}
$$

The integrals over $x_{1}$ and $x_{\ell+1}$ are now Gaussian and yield delta‑functions
$$
\int d^{4}x_{1}\,e^{-i(K_{1\cdots\ell}+p-(\omega,0,0,0))\cdot x_{1}}
=(2\pi)^{4}\delta^{(4)}\!\big(K_{1\cdots\ell}+p-(\omega,\mathbf{0})\big) \\
\int d^{4}x_{\ell+1}\,e^{-i(K_{(\ell+1)\cdots n}-p+(\omega,0,0,0))\cdot x_{\ell+1}}
=(2\pi)^{4}\delta^{(4)}\!\big(K_{(\ell+1)\cdots n}-p+(\omega,\mathbf{0})\big)
\tag{E}
$$

The two delta‑functions in (E) enforce
$$
p^{\mu}=(\omega,\mathbf{0})-K_{1\cdots\ell}^{\mu},
\quad
K_{(\ell+1)\cdots n}^{\mu}=p^{\mu}-(\omega,\mathbf{0})
$$

Adding the two equations gives overall momentum conservation
$$
K_{1 \cdots \ell}^{\mu} + K_{(\ell+1)\cdots n}^{\mu} = 0
$$
which is already contained in the definition of the Green function. The on‑shell condition $p^{2}=m^{2}$ then relates $\omega$ to the early‑cluster momentum

$$
\big(\omega-K_{1\cdots\ell}^{0}\big)^{2} - |\mathbf{K}_{1\cdots\ell}|^{2} = m^{2}
$$

Defining $E_{p}=\sqrt{|\mathbf{K}_{1\cdots\ell}|^{2}+m^{2}}$, we obtain
$$
\omega - K_{1\cdots\ell}^{0} = \pm E_{p}
$$

The sign is fixed by the requirement that the pole appears when approaching from $K_{1\cdots\ell}^{0}<0$.  For $K_{1\cdots\ell}^{0}<0$ the relevant solution is
$$
\omega = K_{1\cdots\ell}^{0} + E_{p} \tag{F}
$$
because in that case $\omega$ can be small (near the pole) while $E_{p}>0$. After performing the integrals over $x_{1},x_{\ell+1}$ and using the delta‑functions to eliminate $p$, the expression (A) reduces to

$$
G_{\text{pole}}=
\frac{-1}{2\pi i}\int d\omega\,
\frac{1}{\omega+i\epsilon}\;
(2\pi)^{4}\delta^{(4)}\!\big(K_{1\cdots\ell}+K_{(\ell+1)\cdots n}\big)\\
\qquad\times
\int\frac{d^{3}\mathbf{p}}{(2\pi)^{3}}\frac{1}{2E_{p}}\,
\delta^{(3)}\!\big(\mathbf{p}+\mathbf{K}_{1\cdots\ell}\big)\,
\delta\!\big(\omega-K_{1\cdots\ell}^{0}-E_{p}\big)\\
\qquad\times
\Big[\int\prod_{a=\ell+1}^{n}d^{4}y_{a}\,e^{-i\sum k_{a}\cdot y_{a}}
\langle\Omega|T\{O_{\ell+1}(0)O_{\ell+2}(y_{\ell+2})\cdots\}|\mathbf{p}\rangle\Big]\\
\qquad\times
\Big[\int\prod_{a=1}^{\ell}d^{4}z_{a}\,e^{-i\sum k_{a}\cdot z_{a}}
\langle\mathbf{p}|T\{O_{1}(0)O_{2}(z_{2})\cdots\}|\Omega\rangle\Big]
$$

The three‑dimensional delta‑function sets $\mathbf{p}=-\mathbf{K}_{1\cdots\ell}$ and the energy delta‑function fixes $\omega$ as in (F).  The integrals over the internal coordinates $y_{i},z_{i}$ are precisely the definitions of the amputated Green functions $G_{L}$ and $G_{E}$ given in eqs. (8)–(9) of the theorem (up to the overall momentum‑conserving delta‑functions, which are already present).

Carrying out the $\omega$ integral with the help of the energy delta‑function gives a factor
$$
\frac{1}{\omega+i\epsilon}\;\longrightarrow\;
\frac{1}{K_{1\cdots\ell}^{0}+E_{p}+i\epsilon}
$$

Recall that $s_{\ell}\equiv -K_{1\cdots\ell}^{2}=-(K_{1\cdots\ell}^{0})^{2}+|\mathbf{K}_{1\cdots\ell}|^{2}$. Using $E_{p}^{2}=|\mathbf{K}_{1\cdots\ell}|^{2}+m^{2}$ we have
$$
K_{1\cdots\ell}^{0}+E_{p}+i\epsilon
=\frac{(K_{1\cdots\ell}^{0}+E_{p})(K_{1\cdots\ell}^{0}-E_{p})}{K_{1\cdots\ell}^{0}-E_{p}}+i\epsilon\\
=\frac{-(K_{1\cdots\ell}^{0})^{2}+E_{p}^{2}}{K_{1\cdots\ell}^{0}-E_{p}}+i\epsilon\\[4pt]
=\frac{-s_{\ell}+m^{2}}{K_{1\cdots\ell}^{0}-E_{p}}+i\epsilon
$$

The factor $1/(K_{1\cdots\ell}^{0}-E_{p})$ is analytic near the pole and can be absorbed into the definition of the residues.  The singular part is therefore

$$
\frac{1}{-s_{\ell}+m^{2}-i\epsilon'}
\qquad\bigl(\epsilon'=\epsilon\,(K_{1\cdots\ell}^{0}-E_{p})>0\bigr)
$$

Multiplying by the overall $-1/(2\pi i)$ from the $\theta$-function representation and noting that the contour integration around the pole yields an extra factor $2\pi i$, we finally obtain the pole factor
$$
\frac{-i}{-s_{\ell}+m^{2}-i\epsilon}
$$

The remaining integrals over the internal coordinates are exactly the amputated Green functions defined in the theorem:

$$
\begin{aligned}
G_{E}\,(2\pi)^{4}\delta^{(4)}(K_{1\cdots\ell}+p)
&=\int\prod_{a=1}^{\ell}d^{4}x_{a}\,e^{-ik_{a}\cdot x_{a}}
\langle\mathbf{p}|T\{O_{1}(x_{1})\cdots O_{\ell}(x_{\ell})\}|\Omega\rangle \\
G_{L}\,(2\pi)^{4}\delta^{(4)}(K_{(\ell+1)\cdots n}-p)
&=\int\prod_{a=\ell+1}^{n}d^{4}x_{a}\,e^{-ik_{a}\cdot x_{a}}
\langle\Omega|T\{O_{\ell+1}(x_{\ell+1})\cdots O_{n}(x_{n})\}|\mathbf{p}\rangle
\end{aligned}
$$

Assembling all pieces we arrive at the advertised result

$$
\lim_{\substack{s_{\ell}\to m^{2}\\ K^{0}_{1\cdots\ell}<0}}
G(s_{\ell})
= G_{L}\;\frac{-i}{-s_{\ell}+m^{2}-i\epsilon}\;G_{E}\; 
\tag{10}
$$

The case $K^{0}_{1\cdots\ell}>0$ is treated analogously, with the roles of “early” and “late” interchanged, giving the same pole structure with the amputated functions defined as in eqs. (11)–(12). 
