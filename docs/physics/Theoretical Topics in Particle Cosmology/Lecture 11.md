# Lecture 11

Chasse_neige

We can now expand the theory to all orders and recover GR and beyond with $O(G_{N}^{5/2})$ and $O(v^{5})$.

$$
\mathcal{L}_{2} = \frac{1}{4} h_{\mu \nu} \square h^{\mu \nu} - \frac{1}{4} h \square h + \frac{1}{2} h \partial^{\mu} \partial^{\nu} h - \frac{1}{2} h_{\mu \nu} \partial^{\mu} \partial_{\lambda} h^{\nu \lambda}
$$

We'll add the interaction 

$$
\mathcal{L}_{int} = \frac{\kappa}{2} h_{\mu \nu} T^{\mu \nu}
$$

But the interaction between gravitons and gravitons with Noether's Theorem will lead to a higher and higher order of energy-momentum tensor, so the final Lagrangian will have the form like

$$
\mathcal{L} = \mathcal{L}_{2} + \frac{1}{2} \kappa h_{\mu \nu} \sum_{n=2}^{\infty} T^{(n) \mu \nu}
$$

We can do this recursion all in one calculation. Stanley Deser noticed that  $T^{(n)}_{\mu \nu} = 0$ will occur while $n =3$. For this recursion, we can rewrite the field variables in $\hat{h}^{\mu \nu}$ and $\gamma^{\lambda}_{\mu \nu}$

$$
\mathcal{L'}_{2} = \hat{h}^{\mu \nu} (\partial_{\lambda} \gamma^{\lambda}_{\mu \nu} - \partial_{\nu} \gamma_{\mu}) + \eta^{\mu \nu} (\gamma^{\lambda}_{\mu \nu} \gamma_{\lambda} - \gamma^{\lambda}_{\kappa \mu} \gamma^{\kappa}_{\lambda \nu})
$$

Which turns out that the EoM of $\gamma^{\lambda}_{\mu \nu}$ and EoM of $\hat{h}^{\mu \nu}$

Revise the interaction as

$$
\mathcal{L'}_{int} = \hat{h}^{\mu \nu} \bar{T}_{\mu \nu} = \hat{h}^{\mu \nu} \left( T_{\mu \nu} - \frac{1}{2} \eta_{\mu \nu} T \right)
$$

where

$$
\bar{T}_{\mu \nu} = \gamma_{\lambda} \gamma^{\lambda}_{\mu \nu} - \gamma^{\lambda}_{\kappa \mu} \gamma^{\kappa}_{\lambda \nu} + \partial_{\lambda} \mathcal{K}^{\lambda}_{\mu \nu}
$$

$$
\begin{align}
\mathcal{L} &= \mathcal{L'}_{2} + \hat{h}^{\mu \nu} (\bar{T}_{\mu \nu})_{\text{non-TD}} \\
&= (\eta^{\mu \nu}+ \hat{h}^{\mu \nu}) (\partial_{\lambda} \gamma^{\lambda}_{\mu \nu} - \partial_{\nu} \gamma_{\mu}) + (\eta^{\mu \nu}+ \hat{h}^{\mu \nu}) (\gamma_{\lambda} \gamma^{\lambda}_{\mu \nu}-\gamma^{\lambda}_{\kappa \mu} \gamma^{\kappa}_{\lambda \nu})
\end{align}
$$

And we let $\eta^{\mu \nu} + \hat{h}^{\mu \nu} = \sqrt{ -g } g^{\mu \nu}$ and $\gamma = \Gamma$ we can get the 1st order formalism and GR.

$$
\mathcal{L} = \sqrt{ -g } g^{\mu \nu} R_{\mu \nu}
$$
## Beyond 1st Order Formalism

GR is an EFT of derivative expansion.

$$
[h] = [\partial] = 1
$$

But in the classical circumstances, like the Schwarzschild Solution, the $h$ terms is more important than the $\partial$ terms. 

In the UV part, these 2 terms are of the same importance.

### GR from RG

off-shell EP 

$$
T^{(\text{noether})}_{\mu \nu} = T^{(\text{metric})}_{\mu \nu} + \partial()
$$

EFT  with an interacting graviton has a finite range of validity.

#### Weinberg-Witten Theory

> A theory with a conserved $T_{\mu \nu}$ does not admit any massless state with $s>1$.

#### Final comments on QFT

Effective coordinatization: 
1. DoF
2. Symmetry
3. power counting

Redundant