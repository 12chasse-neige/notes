# Lecture 5 Exercise

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
- p^{0} - p^{3} & - p^{1} - i p^{2} \\
- p^{1} + i p^{2} & - p^{0} + p^{3}
\end{pmatrix}
$$
Given the relationship $p^{a \dot{a}} = - |p] \bra{p}$, we can get the expressions of $|p]$ and $\bra{p}$
$$
|p] = \frac{i}{\sqrt{- (p^{0} + p^{3})}} \begin{pmatrix}
p^{0} + p^{3} \\
p^{1} + i p^{2} 
\end{pmatrix}
$$

$$
\bra{p} =\frac{i}{\sqrt{- (p^{0} + p^{3})}} \begin{pmatrix}
p^{0} + p^{3} & p^{1} - i p^{2}
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
R_{y}^{-1} (\theta) L_{x} (\mathrm{arcsinh} (\tan \theta)) L_{z} (\log \cos \theta)
$$
where
$$
L_{z} (\log \cos \theta) = e^{\frac{\eta}{2} \hat{z} \cdot \vec{\sigma}} = \begin{pmatrix}
e^{\frac{\eta}{2}} & 0 \\
0 & e^{-\frac{\eta}{2}}
\end{pmatrix}  = \frac{1}{\sqrt{\cos \theta}} \begin{pmatrix}
\cos \theta & 0 \\
0 & 1
\end{pmatrix}
$$

$$
L_{x} (\mathrm{arcsinh} (\tan \theta)) = e^{\frac{\eta}{2} \hat{x} \cdot \vec{\sigma}} = \begin{pmatrix}
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
1 & \tan \theta \\
0 & 1
\end{pmatrix}
$$
The ket $\ket{p}$ will change like
$$
\ket{p'} = M \ket{p} = \begin{pmatrix}
\tan \theta \sqrt{2k} \\
\sqrt{2k}
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
\cos \theta & 0 \\
0 & 1
\end{pmatrix} \\ = \frac{1}{\cos \theta} \begin{pmatrix}
1 & -i \tan \theta \\
0 & 1
\end{pmatrix}
$$
The ket $\ket{p}$ will change like
$$
\ket{p'} = M \ket{p} = \begin{pmatrix}
- i \tan \theta \sqrt{2k}\\
\sqrt{2k}
\end{pmatrix}
$$
(3) Compute the tree-level 3-point amplitude of 3 gluons $\mathcal{M}_{3}(1^+_{a},2^+_{b},3^-_{c})$ with Feynman rules from a Yang-Mills theory and compare your result with (35).

<img src="./Lecture 5 Exercise.assets/image-20260505153630650.png" alt="image-20260505153630650" style="zoom:50%;" />

First, we write the Lagrangian for the Yang-Mills Field
$$
\mathcal{L} = - \frac{1}{4} F^{a}_{\mu \nu} F^{a \mu \nu}
$$
where
$$
F^{a}_{\mu \nu} = \partial_{\mu} A^{a}_{\nu} - \partial_{\nu} A^{a}_{\mu} + g f^{abc} A^{b}_{\mu} A^{c}_{\nu}
$$
For the 3-point amplitude, we extract the $A^{3}$ term out of the Lagrangian
$$
\mathcal{L}_{3} = -g f^{abc} (\partial_{\mu} A^{a}_{\nu}) A^{b \mu} A^{c \nu}
$$
Doing fourier transform, we get the vertex
$$
V_{\mu \nu \rho}^{abc} (p_{1}, p_{2}, p_{3}) = i g f^{abc} \left[\eta_{\mu \nu} (p_{1 \rho} - p_{2 \rho}) + \eta_{\nu \rho} (p_{2 \mu} - p_{3 \mu}) + \eta_{\rho \mu} (p_{3 \nu} - p_{1 \nu})\right]
$$

Then we can plug in the spinor-helicity formalism of the polarization vectors
$$
\epsilon^{+}_{a \dot{a}} = \frac{| q \rangle [p|}{\langle pq \rangle} \quad \epsilon^{-}_{a \dot{a}} = \frac{|q] \langle p |}{[pq]}
$$
In the 4-vector form, they are
$$
\epsilon^{+ \mu} \propto \frac{\langle q | \sigma^{\mu} | p]}{\langle pq \rangle} \quad \epsilon^{- \mu} \propto \frac{[q| \sigma^{\mu} | p \rangle}{[pq]} 
$$
Thus we can get the amplitude
$$
M_{3} (1_{a}^{+}, 2_{b}^{+}, 3_{c}^{-}) = -i \epsilon_{1}^{+ \mu} \epsilon_{2}^{+ \nu} \epsilon_{3}^{- \rho} V^{abc}_{\mu \nu \rho} (p_{1}, p_{2}, p_{3})
$$
Take $q_{1} = q_{2} = q$ and $q_{3} = 1$, we can simplify the amplitude expression as follows
$$
M_{3} (1_{a}^{+}, 2_{b}^{+}, 3_{c}^{-}) = g f^{abc} \epsilon_{1}^{+ \mu} \epsilon_{2}^{+ \nu} \epsilon_{3}^{- \rho} \left[\eta_{\mu \nu} (p_{1 \rho} - p_{2 \rho}) + \eta_{\nu \rho} (p_{2 \mu} - p_{3 \mu}) + \eta_{\rho \mu} (p_{3 \nu} - p_{1 \nu})\right] \\ = 
g f^{abc} \frac{\langle q | \sigma^{\mu} | p_{1} ]}{\langle p_{1} q \rangle} \frac{\langle q | \sigma^{\nu} | p_{2}]}{\langle p_{2} q \rangle} \frac{[p_{1}| \sigma^{\rho} | p_{3} \rangle}{[p_{3} p_{1}]} \left[\eta_{\mu \nu} (p_{1 \rho} - p_{2 \rho}) + \eta_{\nu \rho} (p_{2 \mu} - p_{3 \mu}) + \eta_{\rho \mu} (p_{3 \nu} - p_{1 \nu})\right] \\ =
-g f^{abc} \left[0 + \frac{|1] \langle 3 |}{[31]} \cdot \frac{|q \rangle [2|}{\langle 2q \rangle} \left( \frac{|q \rangle [1|}{\langle 1q \rangle} \cdot (|2 \rangle [2| - |3 \rangle[3|)\right) + 0\right] \\ =
- \frac{1}{2} g f^{abc} \frac{[21] \langle 3q \rangle}{[31] \langle 2q \rangle} \left(\frac{\langle 2q \rangle [12]}{\langle 1q \rangle} - \frac{\langle 3q \rangle [13]}{\langle 1q \rangle}\right) \\ =
- \frac{1}{2} g f^{abc} \left( \frac{[12]^{2} \langle q3 \rangle}{[31] \langle 1q \rangle} - \frac{[12] \langle q3 \rangle^{2}}{\langle 2q \rangle \langle 1q \rangle} \right)
$$

Using the momentum conservation
$$
|1 \rangle [1| + |2 \rangle [2| + |3 \rangle [3| = 0
$$

$$
\langle q1 \rangle [12] + \langle q3 \rangle [32] = 0
$$

$$
\langle q2 \rangle [21] + \langle q3 \rangle [31] = 0
$$

Substitute these results into the previous form, the first term becomes
$$
\frac{[12]^{2} \langle q3 \rangle}{[31] \langle 1q \rangle} = - \frac{[12]^{2}}{[31]} \cdot \frac{[12]}{[23]} = - \frac{[12]^{3}}{[31] [23]}
$$
The second term becomes
$$
\frac{[12] \langle q3 \rangle^{2}}{\langle 2q \rangle \langle 1q \rangle} = [12] \cdot \frac{[12]}{[23]} \cdot \frac{[12]}{[31]} = \frac{[12]^{3}}{[31][23]}
$$
So the previous form is tantamount to 
$$
M_{3} (1_{a}^{+}, 2_{b}^{+}, 3_{c}^{-}) = g f^{abc} \frac{[12]^{3}}{[31][23]}
$$
which is consistent with the form we get in the lecture 5.

(4) How does a photon talk to a graviton? Can a photon be weighty and can a graviton be charged? Please answer these questions by going through the following steps. 

(a) Please find all 3-point massless amplitudes of 1 spin-1 and 2 spin-2 particles consistent with LGT properties. Please do the same for 2 spin-1 and 1 spin-2 particles. 

For 1 spin-1 and 2 spin-2 particles, we have
$$
M_{3} (1_{a}^{+1}, 2_{b}^{+2}, 3_{c}^{+2}) = \lambda_{abc} [12] [23]^{3} [31]
$$

$$
M_{3} (1^{+1}_{a}, 2^{+2}_{b}, 3^{-2}_{c}) = \kappa_{abc} \frac{[12]^{5}}{[23] [31]^{3}}
$$

$$
M_{3} (1_{a}^{-1}, 2_{b}^{+2}, 3_{c}^{+2}) = \lambda_{abc} \frac{[23]^{5}}{[12][31]}
$$

$$
M_{3} (1_{a}^{+1}, 2_{b}^{-2}, 3_{c}^{-2}) = \lambda_{abc} \frac{\langle 23 \rangle^{5}}{\langle 12\rangle \langle 31 \rangle}
$$

$$
M_{3} (1^{-1}_{a}, 2^{-2}_{b}, 3^{+2}_{c}) = \kappa_{abc} \frac{\langle 12 \rangle^{5}}{\langle 23 \rangle \langle 31 \rangle^{3}}
$$

$$
M_{3} (1_{a}^{-1}, 2_{b}^{-2}, 3_{c}^{-2}) = \lambda_{abc} \langle 12 \rangle \langle 23 \rangle^{3} \langle 31 \rangle
$$

For 2 spin-1 and 1 spin-2 particles, the amplitudes are
$$
M_{3} (1_{a}^{+1}, 2_{b}^{+1}, 3_{c}^{+2}) = \lambda_{abc} [23]^{2} [31]^{2}
$$

$$
M_{3} (1_{a}^{+1}, 2_{b}^{-1}, 3_{c}^{+2}) = \kappa_{abc} \frac{[31]^{4}}{[12]^{2}}
$$

$$
M_{3} (1_{a}^{-1}, 2_{b}^{+1}, 3_{c}^{-2}) = \kappa_{abc} \frac{\langle31\rangle^{4}}{\langle 12 \rangle^{2}}
$$

$$
M_{3} (1_{a}^{-1}, 2_{b}^{-1}, 3_{c}^{-2}) = \lambda_{abc} \langle23\rangle^{2} \langle31\rangle^{2}
$$

(b) Apply various consistent conditions to identify consistent amplitudes among results from (a). How many different ways can a photon talk to a graviton? Which one is the one realized in general relativity?

For the $\gamma h h$ type interaction, we can know from the dimensional analysis that the ++- type is the minimal coupling. For the two amplitudes
$$
M_{3} (1^{-1}_{a}, 2^{-2}_{b}, 3^{+2}_{c}) = \kappa_{abc} \frac{\langle 12 \rangle^{5}}{\langle 23 \rangle \langle 31 \rangle^{3}}
$$
and
$$
M_{3} (1_{a}^{-1}, 2_{b}^{+2}, 3_{c}^{+2}) = \lambda_{abc} \frac{[23]^{5}}{[12][31]}
$$
If we exchange the 2 and 3 graviton, the amplitude is antisymmetric, which means that the coupling coefficient is reversed, so the amplitude has to be zero.

If the spin-2 particle is allowed to be charged, then the $\gamma h h$ amplitude is not automatically zero. However, Bose symmetry implies that the coupling tensor must be antisymmetric in the two spin-2 flavor indices
$$
\kappa_{abc}=-\kappa_{acb}
$$
Therefore a single real spin-2 particle cannot carry such a charge. A charged spin-2 particle must instead come in a multiplet, or equivalently as a complex spin-2 field
$$
H_{\mu\nu}=\frac{1}{\sqrt{2}}(h^{1}_{\mu\nu}+i h^{2}_{\mu\nu})
$$
Then the photon can couple to $H^+H^-$, and the minimal $\gamma h h$ amplitudes are
$$
M_{3}(1_{\gamma}^{+1},2_{H}^{+2},3_{H}^{-2})
=
\kappa
\frac{[12]^{5}}{[23][31]^{3}}
$$
and its parity conjugate
$$
M_{3}(1_{\gamma}^{-1},2_{H}^{-2},3_{H}^{+2})
=
\kappa
\frac{\langle12\rangle^{5}}{\langle23\rangle\langle31\rangle^{3}}
$$
These describe electromagnetic minimal coupling of a charged spin-2 field, not the ordinary graviton of general relativity.

For the $\gamma \gamma h$ type interaction, we can know from dimensional analysis that the minimal coupling is the +-+ type, but the spin statistics do not forbid the non-minimal type from existing. So that both the interactions
$$
M_{3} (1_{a}^{+1}, 2_{b}^{+1}, 3_{c}^{+2}) = \lambda_{abc} [23]^{2} [31]^{2}
$$
and
$$
M_{3} (1_{a}^{+1}, 2_{b}^{-1}, 3_{c}^{+2}) = \kappa_{abc} \frac{[31]^{4}}{[12]^{2}}
$$
are allowed, but the minimal coupling consistent with that we know in GR is the +-+ type, which will lead to terms like
$$
h_{\mu \nu} T^{\mu \nu}
$$
in the Lagrangian.

(5) [This is a non-exercise; Do it only if you really want to!] Please start from the Einstein-Hilbert action $\int d^{4} x \sqrt{-g} R$ and derive the Feynman rule for the graviton cubic self-interaction. Then use it to compute the 3-point graviton amplitude at the tree level and compare your result with (37).

