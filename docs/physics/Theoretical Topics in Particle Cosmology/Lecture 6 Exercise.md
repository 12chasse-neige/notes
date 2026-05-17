# Lecture 6 Exercise

(1) Please show that the 4-point amplitude of 4 all-plus gluons vanishes at the tree level in the Yang-Mills theory.

Take $s$ channel for the 4 all-plus gluons scattering amplitude
$$
\lim_{s \to 0} i M_{4} (1_{a}^{+}, 2_{b}^{+}, 3_{c}^{+}, 4_{d}^{+}) = \frac{i}{s} \sum_{e} i M_{3} (1_{a}^{+}, 2_{b}^{+}, - s_{e}^{-}) i M_{3} (s_{e}^{+}, 3_{c}^{+}, 4_{d}^{+})
$$
So the all-plus 4-pt amplitude requires a +++ type 3-pt amplitude, which is not allowed in the tree-level Yang-Mills theory.

(2) Please study the $u$-channel factorization of the 4-gluon amplitude $M_{4}(1_{a}^+, 2_{b}^+, 3_{c}^-, 4_{d}^-)$ and provide detailed steps leading to (13).

$$
\lim_{u\to 0} M_{4} = [12]^{2} \langle 34 \rangle^{2} \frac{\gamma}{us}, \quad \gamma \equiv \sum_{e} \kappa_{ace} \kappa_{dbe} \tag{13}
$$

We can derive this form from the $u \to 0$ limit
$$
\lim_{u \to 0} i M_{4} (1_{a}^{+}, 2_{b}^{+}, 3_{c}^{-}, 4_{d}^{-}) = \frac{i}{u} \sum_{e} i M_{3} (1_{a}^{+}, 3_{c}^{-}, -u_{e}^{-}) i M_{3} (u_{e}^{+}, 2_{b}^{+}, 4_{d}^{-}) + i M_{3} (1_{a}^{+}, 3_{c}^{-}, u_{e}^{+}) i M_{3} (-u_{e}^{-}, 2_{b}^{+}, 4_{d}^{-}) \\ = 
- \frac{i}{u} \sum_{e} \kappa_{cea} \kappa_{dbe} \frac{\langle 3u \rangle^{3}}{\langle 13 \rangle \langle u1 \rangle} \frac{[u2]^{3}}{[24][4u]} + \kappa_{cea} \kappa_{dbe} \frac{[1u]^{3}}{[13][3u]} \frac{\langle u4 \rangle^{3}}{\langle u2 \rangle \langle 24 \rangle}
$$
Using the momentum conservation, we can simplify this form as
$$
\langle 3u \rangle [u2] = \langle 31 \rangle [12]
$$

$$
[4u] \langle u1 \rangle = [43] \langle 31 \rangle
$$

$$
[1u] \langle u4 \rangle = [13] \langle 34 \rangle
$$

$$
[3u] \langle u2 \rangle = [31] \langle 12 \rangle
$$

Subsitute these replacements into the previous form
$$
\lim_{u \to 0} M_{4} (1_{a}^{+}, 2_{b}^{+}, 3_{c}^{-}, 4_{d}^{-}) =  \frac{\gamma}{u} \left(\frac{\langle 31 \rangle [12]^{3}}{[43][24]} + \frac{[13] \langle 34 \rangle^{3}}{\langle 12 \rangle \langle 24 \rangle} \right)
$$
We have
$$
[21] \langle 13 \rangle + [24] \langle 43 \rangle = 0
$$
Therefore, the first term becomes
$$
\frac{\langle 31 \rangle [12]^{3}}{[43][24]} = - \frac{\langle 43 \rangle^{2} [12]^{2}}{\langle 43 \rangle [43]} = - [12]^{2} \langle 34 \rangle^{2} \frac{1}{s}
$$
Similarly, for the second term, using the same trick
$$
[13] \langle 34 \rangle + [12] \langle 24 \rangle = 0
$$
The second term becomes
$$
\frac{[13] \langle 34 \rangle^{3}}{\langle 12 \rangle \langle 24 \rangle} = - \frac{[12] \langle 34 \rangle^{2}}{\langle 12 \rangle} = - [12]^{2} \langle 34 \rangle^{2} \frac{1}{s}
$$
The first and second term refer to 2 types of approaching the singular point, which gives out the same result. So the total amplitude is 
$$
\lim_{u \to 0} M_{4} = [12]^{2} \langle 34 \rangle^{2} \frac{\gamma}{us}
$$
(3) Consider the scattering amplitude $M_{4}(1^{+j}, 2^{+j}, 3^{-j}, 4^{-j})$ of two massless spin-$j$ particles via exchanging a graviton through the minimal coupling. Please show that it is impossible to get consistent scattering for $j > 2$. [Hint: Dimensional analysis suffices.]

First we want to get the 3-pt amplitude for 2 spin-j and 1 graviton. For the case of minimal-coupling, the plus and minus helicity amplitude is
$$
M_{3} (1_{a}^{+j}, 2_{b}^{-j}, 3_{c}^{+2}) = \kappa_{abc} \frac{[23]^{2 - 2j} [31]^{2 + 2j}}{[12]^{2}}
$$

$$
M_{3} (1_{a}^{-j}, 2_{b}^{+j}, 3_{c}^{-2}) = \kappa_{abc} \frac{\langle 23 \rangle^{2 - 2j} \langle 31 \rangle^{2 + 2j}}{\langle 12 \rangle^{2}}
$$

Then we can get the 4-pt amplitude from the 3-pt amplitudes. The minimal coupling requires construction from $u$ and $t$ channels. First consider the $u$ channel
$$
\lim_{u \to 0} i M_{4} (1_{a}^{+j}, 2_{b}^{+j}, 3_{c}^{-j}, 4_{d}^{-j}) \\ = 
\frac{i}{u} \sum_{e} i M_{3} (1_{a}^{+j}, 3_{c}^{-j}, u_{e}^{+2}) i M_{3} (- u_{e}^{-2}, 2_{b}^{+j}, 4_{d}^{-j}) + i M_{3} (1_{a}^{+j}, 3_{c}^{-j}, - u_{e}^{-2}) i M_{3} (u_{e}^{+2}, 2_{b}^{+j}, 4_{d}^{-j})\\ =
- \frac{i}{u} \sum_{e} \kappa_{ace} \kappa_{ebd} \left(\frac{[3u]^{2 - 2j} [u1]^{2 + 2j}}{[13]^{2}} \frac{\langle u2 \rangle^{2 - 2j} \langle 4u \rangle^{2 + 2j}}{\langle 24 \rangle^{2}} + \frac{\langle 3u \rangle^{2 + 2j} \langle u1 \rangle^{2 - 2j}}{\langle 13 \rangle^{2}} \frac{[u2]^{2 + 2j} [4u]^{2 - 2j}}{[24]^{2}} \right) \\ =
- \frac{i \gamma}{u} \left(\frac{[31]^{2 - 2j}\langle 12 \rangle^{2 - 2j} \langle 43 \rangle^{2 + 2j} [31]^{2 + 2j}}{[13]^{2} \langle 24 \rangle^{2}} + \frac{\langle 31 \rangle^{2 + 2j} [12]^{2 + 2j} \langle 31 \rangle^{2 - 2j} [43]^{2 - 2j}}{\langle 13 \rangle^{2} [24]^{2}}\right)\
$$
Using the conditions on both approaching branches, we can get the same result 
$$
\lim_{u \to 0} M_{4} (1_{a}^{+j}, 2_{b}^{+j}, 3_{c}^{-j}, 4_{d}^{-j}) = 
- \frac{i \gamma}{u} \frac{[12]^{2j} \langle 34 \rangle^{2j}}{s^{2j-2}}
$$
Similarly, we can get the $t$ channel for this amplitude
$$
\lim_{t \to 0} i M_{4} (1_{a}^{+j}, 2_{b}^{+j}, 3_{c}^{-j}, 4_{d}^{-j}) = - \frac{i \beta}{t} \frac{[12]^{2j} \langle 34 \rangle^{2j}}{s^{2j - 2}}
$$

The total 4-pt amplitude is
$$
M_{4} = - [12]^{2j} \langle 34 \rangle^{2j} \frac{1}{s^{2j - 2}} \left(\frac{\beta}{t} + \frac{\gamma}{u}\right)
$$
If $j > 2$, then we can know from dimensional analysis that $[\kappa_{j}] = -1$, and at the $s$ channel we will have a $2j-2 > 1$ singular pole, which is not allowed under locality constraint.

(4) Please find all 3-point amplitudes for a massless spin-$j$ particle emitting a graviton with minimal gravitational coupling.

As shown in (3), the minimal coupling amplitudes are
$$
M_{3} (1_{a}^{+j}, 2_{b}^{-j}, 3_{c}^{+2}) = \kappa_{abc} \frac{[23]^{2 - 2j} [31]^{2 + 2j}}{[12]^{2}}
$$

$$
M_{3} (1_{a}^{-j}, 2_{b}^{+j}, 3_{c}^{-2}) = \kappa_{abc} \frac{\langle 23 \rangle^{2 - 2j} \langle 31 \rangle^{2 + 2j}}{\langle 12 \rangle^{2}}
$$

Apparently, we can change 1 and 2 in those amplitudes.

(5) Please study the gravitational Compton scattering in (26). Using the result of the previous exercise and consistent factorization, please show that the gravitational coupling of this spin-$j$ particle must be equal to the graviton cubic self-coupling.

<img src="./Lecture 6 Exercise.assets/image-20260508111546256.png" alt="image-20260508111546256" style="zoom:50%;" />

Denote the gravitational coupling of the spin-$j$ particle by $\kappa_{j}$, and denote the graviton cubic self-coupling by $\kappa$. From the previous exercise
$$
M_{3}(1^{+j},2^{-j},3^{+2})
=
\kappa_{j} \frac{[23]^{2-2j}[31]^{2+2j}}{[12]^{2}}
$$
$$
M_{3}(1^{-j},2^{+j},3^{-2})
=
\kappa_{j} \frac{\langle 23\rangle^{2-2j}\langle 31\rangle^{2+2j}}{\langle 12\rangle^{2}}
$$
The earlier dimensional-analysis result already excludes $j>2$, so the following factorization test is for the allowed cases $j=0,1,2$. For the graviton cubic amplitude, we use
$$
M_{3}(1^{-2},2^{-2},3^{+2})
=
\kappa \frac{\langle 12\rangle^{6}}{\langle 23\rangle^{2}\langle 31\rangle^{2}}
$$

First consider the $s$ channel, where the exchanged particle is a graviton
$$
\lim_{s\to 0}iM_{4}(1^{+j},2^{-j},3^{-2},4^{+2})
=
-\frac{i}{s}
M_{3}(1^{+j},2^{-j},s^{+2})
M_{3}(-s^{-2},3^{-2},4^{+2})
$$
Inserting the 3-point amplitudes
$$
\lim_{s\to 0}M_{4}
=
-\frac{\kappa_{j}\kappa}{s}
\frac{[2s]^{2-2j}[s1]^{2+2j}}{[12]^{2}}
\frac{\langle s3\rangle^{6}}{\langle 34\rangle^{2}\langle 4s\rangle^{2}}
$$
On the $s$-channel factorization branch, $\langle 12\rangle=[34]=0$. Using momentum conservation to remove the internal spinors
$$
\frac{[2s]^{2-2j}[s1]^{2+2j}}{[12]^{2}}
\frac{\langle s3\rangle^{6}}{\langle 34\rangle^{2}\langle 4s\rangle^{2}}
=
\frac{[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j}}{t^{2}}
$$
Therefore
$$
\lim_{s\to 0} M_{4}
=
-\frac{\kappa_{j}\kappa}{s}
\frac{[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j}}{t^{2}}
$$

The $t$ and $u$ channels exchange the spin-$j$ particle. For the $t$ channel
$$
\lim_{t\to 0}iM_{4}
=
-\frac{i}{t}
M_{3}(1^{+j},3^{-2},-t^{-j})
M_{3}(t^{+j},2^{-j},4^{+2})
$$
After inserting the cubic amplitudes
$$
\lim_{t\to 0}M_{4}
=
-\frac{\kappa_{j}^{2}}{t}
\frac{\langle 13\rangle^{2-2j}\langle 3t\rangle^{2+2j}}{\langle t1\rangle^{2}}
\frac{[24]^{2-2j}[4t]^{2+2j}}{[t2]^{2}}
$$
On this factorization branch, $[13]=\langle 24\rangle=0$, and
$$
\frac{\langle 13\rangle^{2-2j}\langle 3t\rangle^{2+2j}}{\langle t1\rangle^{2}}
\frac{[24]^{2-2j}[4t]^{2+2j}}{[t2]^{2}}
=
\frac{[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j}}{s^{2}}
$$
Thus
$$
\lim_{t\to 0}M_{4}
=
-\frac{\kappa_{j}^{2}}{t}
\frac{[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j}}{s^{2}}
$$
Similarly, in the $u$ channel
$$
\lim_{u\to 0}iM_{4}
=
-\frac{i}{u}
M_{3}(1^{+j},4^{+2},u^{-j})
M_{3}(-u^{+j},2^{-j},3^{-2}),
$$
so that
$$
\lim_{u\to 0}M_{4}
=
-\frac{\kappa_{j}^{2}}{u}
\frac{[14]^{2+2j}[4u]^{2-2j}}{[u1]^{2}}
\frac{\langle 23\rangle^{2+2j}\langle 3u\rangle^{2-2j}}{\langle u2\rangle^{2}}
$$
On the branch $\langle 14\rangle=[23]=0$
$$
\frac{[14]^{2+2j}[4u]^{2-2j}}{[u1]^{2}}
\frac{\langle 23\rangle^{2+2j}\langle 3u\rangle^{2-2j}}{\langle u2\rangle^{2}}
=
\frac{[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j}}{s^{2}}
$$
Therefore
$$
\lim_{u\to 0}M_{4}
=
-\frac{\kappa_{j}^{2}}{u}
\frac{[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j}}{s^{2}}
$$

Now we ask whether these three residues can come from one local 4-point amplitude. The little-group weights of
$$
M_{4}(1^{+j},2^{-j},3^{-2},4^{+2})
$$
are carried by the common factor, so we can write
$$
M_{4}=[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j} f(s,t,u)
$$
The factor $[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j}$ has mass dimension $8$. Since the two cubic couplings together have dimension $-2$, locality and dimensional analysis require the pole part of $f$ to have the form
$$
f(s,t,u)=\frac{A}{stu}
$$
This gives the three factorization limits
$$
\lim_{s\to 0}M_{4}
=
-\frac{A}{s}\frac{[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j}}{t^{2}}
$$
$$
\lim_{t\to 0}M_{4}
=
-\frac{A}{t}\frac{[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j}}{s^{2}}
$$
$$
\lim_{u\to 0}M_{4}
=
-\frac{A}{u}\frac{[14]^{4}\langle 13\rangle^{4-2j}\langle 23\rangle^{2j}}{s^{2}}
$$
Comparing with the residues computed from the 3-point amplitudes, we must have
$$
A=\kappa_{j}\kappa
$$
from the $s$ channel, while the $t$ and $u$ channels require
$$
A=\kappa_{j}^{2}
$$
Therefore
$$
\kappa_{j}\kappa=\kappa_{j}^{2}
$$
For a particle that actually couples gravitationally, $\kappa_{j}\neq 0$, and hence
$$
\kappa_{j}=\kappa
$$
So the gravitational coupling of the spin-$j$ particle must equal the graviton cubic self-coupling.
