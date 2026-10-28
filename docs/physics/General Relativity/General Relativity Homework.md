# General Relativity Homework

## Homework 1

### Problem 1

The energy-momentum tensor is defined as
$$
T^{\alpha\beta} = \sum_{n} p^{\alpha}_{n} \dv{x^{\beta}}{t} \delta^{3}(x - x_{n}(t))
$$

where $x_{n}(t)$ and $p^{\alpha}_{n}(t)$ are the position and four-momentum of the $n$-th particle at the time $t$. Please show that $T^{\alpha\beta}$ is a tensor under the Lorentz transformation.

$T^{\alpha \beta}$ is a tensor is equivalent to $\dv{x^{\beta}}{t} \delta^{3}(x - x_{n}(t))$ is a vector, which I’ll prove here:

When transfering from frame $S$ to $S'$, this part becomes
$$
\dv{x'^{\beta}}{t'} \delta^{3}(x' - x'_{n} (t'))
$$
Try to expand the 3-dim delta function into 4-dim
$$
\delta^{4} (x - x_{n}(\tau)) = \delta (t - t_{n} (\tau)) \cdot \delta^{3}(x - x_{n} (\tau))
$$
where $\tau$ is the proper time for the n’th particle. Using the properties of the delta function
$$
\delta (t - t_{n} (\tau)) = \frac{\delta (\tau)}{\left|\dv{(t - t_{n} (\tau))}{\tau}\right|} = \frac{\delta (\tau)}{\left|\dv{t_{n}}{\tau}\right|}
$$
Therefore, we can deduce that
$$
\dv{x^{\beta}}{t} \delta^{3}(x - x_{n}(t)) = \dv{x^{\beta}}{t} \int\dd{\tau} \delta^{4} (x - x_{n} (\tau)) \left|\dv{t_{n}}{\tau}\right| = \dv{x^{\beta}}{\tau} \int \dd{\tau} \delta^{4} (x - x_{n} (\tau))
$$

So we can see that $\dv{x^{\beta}}{\tau} = u^{\beta}$ is a vector and $\int \dd{\tau} \delta^{4} (x - x_{n} (\tau))$ is a scalar, which means $\dv{x^{\beta}}{t} \delta^{3}(x - x_{n}(t))$ is a vector and $T^{\alpha \beta}$ is a tensor.

### Problem 2

We use $\xi^{\alpha}$ to denote an inertial coordinate system in which a massive particle moves freely. In these coordinates the equation of motion is
$$
\dv[2]{\xi^{\alpha}}{\tau} = 0
$$

We now describe the same motion using a general coordinate system $x^{\mu}$. Then, we have

$$
0 = \dv[2]{\xi^{\alpha}}{\tau} = \dv{}{\tau} \left(\pdv{\xi^{\alpha}}{x^{\mu}} \dv{x^{\mu}}{\tau}\right)
$$

Please finish the calculation and show that in the general coordinate system,

$$
\dv[2]{x^{\mu}}{\tau} + \Gamma^{\mu} {}_{\rho \sigma} \dv{x^{\rho}}{\tau} \dv{x^{\sigma}}{\tau} = 0
$$

where the connection $\Gamma$ is defined as

$$
\Gamma^{\mu} {}_{\rho\sigma} = \frac{\partial x^{\mu}}{\partial \xi^{\alpha}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\rho} \partial x^{\sigma}}
$$

(Please note that in the class the definition of $\Gamma$ missed a minus sign.)

Expanding the formula
$$
0 = \dv[2]{\xi^{\alpha}}{\tau} = \dv{}{\tau} \left(\pdv{\xi^{\alpha}}{x^{\mu}} \dv{x^{\mu}}{\tau}\right) = \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\rho} \partial x^{\sigma}} \dv{x^{\rho}}{\tau} \dv{x^{\sigma}}{\tau} + \pdv{\xi^{\alpha}}{x^{\lambda}} \dv[2]{x^{\lambda}}{\tau}
$$
So
$$
\pdv{x^{\mu}}{\xi^{\alpha}} \pdv{\xi^{\alpha}}{x^{\lambda}} \dv[2]{x^{\lambda}}{\tau} + \pdv{x^{\mu}}{\xi^{\alpha}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\rho} \partial x^{\sigma}} \dv{x^{\rho}}{\tau} \dv{x^{\sigma}}{\tau} = 0
$$
Given that
$$
\pdv{x^{\mu}}{\xi^{\alpha}} \pdv{\xi^{\alpha}}{x^{\lambda}} = \delta^{\mu}_{\lambda}
$$
Therefore
$$
\dv[2]{x^{\mu}}{\tau} + \Gamma^{\mu} {}_{\rho \sigma} \dv{x^{\rho}}{\tau} \dv{x^{\sigma}}{\tau} = 0
$$
where $\Gamma^{\mu} {}_{\rho\sigma} = \frac{\partial x^{\mu}}{\partial \xi^{\alpha}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\rho} \partial x^{\sigma}}$.

## Homework 2

### Problem 1

Suppose $T^{\mu}{}_{\rho\sigma}$ is a tensor under the general coordinate transformation. Please show that 
$$
T^{\mu} {}_{\rho\sigma;\nu} \equiv T^{\mu} {}_{\rho\sigma,\nu} + \Gamma^{\mu} {}_{\nu\tau} T^{\tau} {}_{\rho\sigma} - \Gamma^{\kappa} {}_{\rho\nu} T^{\mu} {}_{\kappa\sigma} - \Gamma^{\kappa} {}_{\sigma\nu} T^{\mu} {}_{\rho\kappa}
$$
 is also a tensor under general coordinate transformation.

#### Transformation Rule for Christoffel Symbol

Given that the Christoffel Symbol’s transformation rule is
$$
\begin{gathered}
\Gamma'^{\lambda} {}_{\rho \sigma} = \pdv{x^{\prime \lambda}}{\xi^{\alpha}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\prime \rho} \partial x^{\prime \sigma}} = \pdv{x^{\prime \lambda}}{x^{\kappa}} \pdv{x^{\kappa}}{\xi^{\alpha}} \pdv{}{x^{\prime \rho}} \left(\pdv{\xi^{\alpha}}{x^{\nu}} \pdv{x^{\nu}}{x^{\prime \sigma}}\right) \\ =
\pdv{x^{\prime \lambda}}{x^{\kappa}} \pdv{x^{\kappa}}{\xi^{\alpha}} \left(\pdv{\xi^{\alpha}}{x^{\nu}} \frac{\partial^{2} x^{\nu}}{\partial x'^{\rho} \partial x'^{\sigma}} + \pdv{x^{\mu}}{x'^{\rho}} \pdv{x^{\nu}}{x'^{\sigma}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\mu} \partial x^{\nu}}\right) \\ =
\pdv{x^{\prime \lambda}}{x^{\kappa}} \pdv{x^{\mu}}{x'^{\rho}} \pdv{x^{\nu}}{x'^{\sigma}} \Gamma^{\kappa} {}_{\mu \nu} + \pdv{x^{\prime \lambda}}{x^{\kappa}} \frac{\partial^{2} x^{\kappa}}{\partial x'^{\rho} \partial x'^{\sigma}}
\end{gathered}
$$
#### Tensor after Transformation

After transformation, the tensor will give out 4 parts.
$$
T'^{\lambda} {}_{\alpha \beta;\gamma} \equiv \underbrace{T'^{\lambda} {}_{\alpha\beta,\gamma}}_{\text{Part 1}} + \underbrace{\Gamma'^{\lambda} {}_{\gamma\kappa} T'^{\kappa} {}_{\alpha\beta}}_{\text{Part 2}} - \underbrace{\Gamma'^{\eta} {}_{\alpha\gamma} T'^{\lambda} {}_{\eta \beta}}_{\text{Part 3}} - \underbrace{\Gamma'^{\epsilon} {}_{\gamma\beta} T'^{\lambda} {}_{\alpha \epsilon}}_{\text{Part 4}}
$$
To deal with this complex tensor, we’ll analyse it one part after another. 

#### The first part

$$
\begin{gathered}
T'^{\lambda} {}_{\alpha \beta, \gamma} = \pdv{}{x'^{\gamma}} \left(\pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\mu} {}_{\rho \sigma}\right) \\ =
\frac{\partial^{2} x'^{\lambda}}{\partial x^{\eta} \partial x^{\tau}} \pdv{x^{\eta}}{x'^{\gamma}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\tau} {}_{\rho \sigma} \quad \text{(Term 1)} \\
+ \frac{\partial^{2} x^{\rho}}{\partial x'^{\gamma} \partial x'^{\alpha}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\mu}{}_{\rho \sigma} \quad \text{(Term 2)} \\ 
+ \frac{\partial^{2} x^{\sigma}}{\partial x'^{\lambda} \partial x'^{\beta}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} T^{\mu} {}_{\rho \sigma} \quad \text{(Term 3)} \\ 
+ \pdv{x^{\nu}}{x'^{\gamma}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\mu} {}_{\rho \sigma, \nu} \quad \text{(Term 4)}
\end{gathered}
$$
gives out 4 terms, and I’ll show in detail how the first three cancel with the $\Gamma$ parts’ extra terms.

#### The second part

$$
\begin{gathered}
\Gamma'^{\lambda} {}_{\gamma \kappa} T'^{\kappa} {}_{\alpha \beta} = \left(\pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\nu}}{x'^{\gamma}} \pdv{x^{\tau}}{x'^{\kappa}} \Gamma^{\mu} {}_{\nu \tau} +  \frac{\partial^{2} x^{\zeta}}{\partial x'^{\gamma} \partial x'^{\kappa}} \pdv{x'^{\lambda}}{x^{\zeta}} \right) \pdv{x'^{\kappa}}{x^{\tau}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\tau} {}_{\rho \sigma} \\ = 
\pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\nu}}{x'^{\gamma}} \pdv{x^{\tau}}{x'^{\kappa}} \pdv{x'^{\kappa}}{x^{\tau}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} \Gamma^{\mu} {}_{\nu \tau} T^{\tau} {}_{\rho \sigma} + \frac{\partial^{2} x^{\zeta}}{\partial x'^{\gamma} \partial x'^{\kappa}} \pdv{x'^{\lambda}}{x^{\zeta}} \pdv{x'^{\kappa}}{x^{\tau}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\tau} {}_{\rho \sigma}
\end{gathered}
$$

To let the extra term of the second part cancel with the Term 1 of the first part, we’ll have to prove that
$$
\frac{\partial^{2} x'^{\lambda}}{\partial x^{\eta} \partial x^{\tau}} \pdv{x^{\eta}}{x'^{\gamma}}   + \frac{\partial^{2} x^{\zeta}}{\partial x'^{\gamma} \partial x'^{\kappa}} \pdv{x'^{\lambda}}{x^{\zeta}} \pdv{x'^{\kappa}}{x^{\tau}} = 0 \tag{1}
$$
Consider
$$
\pdv{}{x^{\tau}} \delta'^{\lambda} {}_{\gamma} = \pdv{}{x^{\tau}} \left(\pdv{x'^{\lambda}}{x^{\eta}} \pdv{x^{\eta}}{x'^{\gamma}}\right) = 0
$$

$$
\begin{gathered}
\pdv{}{x^{\tau}} \left(\pdv{x'^{\lambda}}{x^{\eta}} \pdv{x^{\eta}}{x'^{\gamma}}\right) \\ =
\frac{\partial^{2} x'^{\lambda}}{\partial x^{\tau} \partial x^{\eta}} \pdv{x^{\eta}}{x'^{\gamma}} + \frac{\partial^{2} x^{\eta}}{\partial x'^{\gamma} \partial x'^{\kappa}} \pdv{x'^{\kappa}}{x^{\tau}} \pdv{x'^{\lambda}}{x^{\eta}} = 0
\end{gathered}
$$

So equation (1) is right. We can see that the second part’s extra term cancels with the first part’s Term 1.

#### The third part

$$
\Gamma'^{\eta} {}_{\alpha \gamma} T'^{\lambda} {}_{\eta \beta} = \pdv{x'^{\eta}}{x^{\kappa}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\nu}}{x'^{\beta}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\kappa}}{x'^{\eta}} \pdv{x^{\sigma}}{x'^{\beta}} \Gamma^{\kappa} {}_{\rho \nu} T^{\mu} {}_{\kappa \sigma} + \frac{\partial^{2} x^{\zeta}}{\partial x'^{\alpha} \partial x'^{\gamma}} \pdv{x'^{\eta}}{x^{\zeta}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\eta}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\mu} {}_{\rho \sigma}
$$

To let the extra term of the third part cancel with the Term 2 of the first part, we’ll have to prove that
$$
\frac{\partial^{2} x^{\rho}}{\partial x'^{\gamma} \partial x'^{\alpha}} = \frac{\partial^{2} x^{\zeta}}{\partial x'^{\alpha} \partial x'^{\gamma}} \pdv{x'^{\eta}}{x^{\zeta}} \pdv{x^{\rho}}{x'^{\eta}} \tag{2}
$$
Consider
$$
\pdv{x'^{\eta}}{x^{\zeta}} \pdv{x^{\rho}}{x'^{\eta}} = \delta^{\rho} {}_{\zeta}
$$
Therefore
$$
\frac{\partial^{2} x^{\zeta}}{\partial x'^{\alpha} \partial x'^{\gamma}} \pdv{x'^{\eta}}{x^{\zeta}} \pdv{x^{\rho}}{x'^{\eta}}  = \frac{\partial^{2} x^{\zeta}}{\partial x'^{\alpha} \partial x'^{\gamma}} \delta^{\rho} {}_{\zeta} = \frac{\partial^{2} x^{\rho}}{\partial x'^{\gamma} \partial x'^{\alpha}}
$$
So this part’s extra term cancels with the first part’s Term 2.

#### The fourth part

$$
\Gamma'^{\epsilon} {}_{\gamma\beta} T'^{\lambda} {}_{\alpha \epsilon} = \pdv{x'^{\epsilon}}{x^{\kappa}} \pdv{x^{\sigma}}{x'^{\gamma}} \pdv{x'^{\beta}}{x^{\nu}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\kappa}}{x'^{\epsilon}} \Gamma^{\kappa} {}_{\sigma\nu} T^{\mu} {}_{\rho\kappa} + \frac{\partial^{2} x^{\zeta}}{\partial x'^{\gamma} \partial x'^{\beta}} \pdv{x'^{\epsilon}}{x^{\zeta}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\epsilon}} T^{\mu} {}_{\rho\sigma}
$$

To let the extra term of the fourth part cancel with the Term 3 of the first part, we’ll have to prove that
$$
\frac{\partial^{2} x^{\sigma}}{\partial x'^{\lambda} \partial x'^{\beta}} = \frac{\partial^{2} x^{\zeta}}{\partial x'^{\gamma} \partial x'^{\beta}} \pdv{x'^{\epsilon}}{x^{\zeta}}  \pdv{x^{\sigma}}{x'^{\epsilon}} \tag{3}
$$
Consider
$$
\pdv{x'^{\epsilon}}{x^{\zeta}}  \pdv{x^{\sigma}}{x'^{\epsilon}} = \delta^{\sigma} {}_{\zeta}
$$
So
$$
\frac{\partial^{2} x^{\zeta}}{\partial x'^{\gamma} \partial x'^{\beta}} \pdv{x'^{\epsilon}}{x^{\zeta}}  \pdv{x^{\sigma}}{x'^{\epsilon}} = \frac{\partial^{2} x^{\zeta}}{\partial x'^{\gamma} \partial x'^{\beta}} \delta^{\sigma} {}_{\zeta} = \frac{\partial^{2} x^{\sigma}}{\partial x'^{\lambda} \partial x'^{\beta}}
$$
So this part’s extra term cancels with the first part’s Term 3.

In conclusion, the transformation for this tensor could be written as
$$
\begin{gathered}
T'^{\lambda} {}_{\alpha \beta;\gamma} \equiv \underbrace{T'^{\lambda} {}_{\alpha\beta,\gamma}}_{\text{Part 1}} + \underbrace{\Gamma'^{\lambda} {}_{\gamma\kappa} T'^{\kappa} {}_{\alpha\beta}}_{\text{Part 2}} - \underbrace{\Gamma'^{\eta} {}_{\alpha\gamma} T'^{\lambda} {}_{\eta \beta}}_{\text{Part 3}} - \underbrace{\Gamma'^{\epsilon} {}_{\gamma\beta} T'^{\lambda} {}_{\alpha \epsilon}}_{\text{Part 4}} \\ =
\pdv{x^{\nu}}{x'^{\gamma}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\mu} {}_{\rho \sigma, \nu} + \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\nu}}{x'^{\gamma}} \pdv{x^{\tau}}{x'^{\kappa}} \pdv{x'^{\kappa}}{x^{\tau}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} \Gamma^{\mu} {}_{\nu \tau} T^{\tau} {}_{\rho \sigma} \\ -
\pdv{x'^{\epsilon}}{x^{\kappa}} \pdv{x^{\sigma}}{x'^{\gamma}} \pdv{x'^{\beta}}{x^{\nu}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\kappa}}{x'^{\epsilon}} \Gamma^{\kappa} {}_{\sigma\nu} T^{\mu} {}_{\rho\kappa} - \pdv{x'^{\epsilon}}{x^{\kappa}} \pdv{x^{\sigma}}{x'^{\gamma}} \pdv{x'^{\beta}}{x^{\nu}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\kappa}}{x'^{\epsilon}} \Gamma^{\kappa} {}_{\sigma\nu} T^{\mu} {}_{\rho\kappa}
\end{gathered}
$$
is a tensor under general coordinate transformation.

### Problem 2

Please show that 
$$
R^{\rho} {}_{\sigma\mu\nu} = \partial_{\mu} \Gamma^{\rho} {}_{\nu\sigma} - \partial_{\nu} \Gamma^{\rho} {}_{\mu\sigma} + \Gamma^{\rho} {}_{\mu\lambda} \Gamma^{\lambda} {}_{\nu\sigma} - \Gamma^{\rho} {}_{\nu\lambda} \Gamma^{\lambda} {}_{\mu\sigma}
$$
 is a tensor under general coordinate transformation.

#### Computing the Derivative Term

Define $A_{\mu\nu} = \partial'_{\mu} \Gamma'^{\rho}{}_{\nu\sigma} + \Gamma'^{\rho}{}_{\mu\lambda} \Gamma'^{\lambda}{}_{\nu\sigma}$. We can see that $R'^{\rho}{}_{\sigma\mu\nu} = A_{\mu\nu} - A_{\nu\mu}$. Therefore, any term in $A_{\mu\nu}$ that is symmetric under the exchange of $\mu \leftrightarrow \nu$ will automatically cancel out. Using the product rule, the chain rule $\partial'_{\mu} = \pdv{x^{\delta}}{x'^{\mu}} \partial_{\delta}$, and $\partial'_{\mu} \pdv{x^{\beta}}{x'^{\nu}} = \frac{\partial^{2} x^{\beta}}{\partial x'^{\mu} \partial x'^{\nu}}$, we differentiate $\Gamma'^{\rho}{}_{\nu\sigma}$
$$
\partial'_{\mu} \Gamma'^{\rho}{}_{\nu\sigma} = \partial'_{\mu} \left( \pdv{x'^{\rho}}{x^{\alpha}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma} \right) + \partial'_{\mu} \left( \pdv{x'^{\rho}}{x^{\alpha}} \frac{\partial^{2} x^{\alpha}}{\partial x'^{\nu} \partial x'^{\sigma}} \right)
$$
Expanding this gives 6 terms
$$
\begin{gathered}
\partial'_{\mu} \Gamma'^{\rho}{}_{\nu\sigma} = 
\pdv{x^{\delta}}{x'^{\mu}} \frac{\partial^{2} x'^{\rho}}{\partial x^{\delta} \partial x^{\alpha}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term 1)} \\
+ \pdv{x'^{\rho}}{x^{\alpha}} \frac{\partial^{2} x^{\beta}}{\partial x'^{\mu} \partial x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term 2)} \\
+ \pdv{x'^{\rho}}{x^{\alpha}} \pdv{x^{\beta}}{x'^{\nu}} \frac{\partial^{2} x^{\gamma}}{\partial x'^{\mu} \partial x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term 3)} \\
+ \pdv{x'^{\rho}}{x^{\alpha}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \pdv{x^{\delta}}{x'^{\mu}} \partial_{\delta} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term 4)} \\
+ \pdv{x^{\delta}}{x'^{\mu}} \frac{\partial^{2} x'^{\rho}}{\partial x^{\delta} \partial x^{\alpha}} \frac{\partial^{2} x^{\alpha}}{\partial x'^{\nu} \partial x'^{\sigma}} \quad \text{(Term 5)} \\
+ \pdv{x'^{\rho}}{x^{\alpha}} \frac{\partial^{3} x^{\alpha}}{\partial x'^{\mu} \partial x'^{\nu} \partial x'^{\sigma}} \quad \text{(Term 6)}
\end{gathered}
$$

#### Computing the Product Term
Next, we compute $\Gamma'^{\rho}{}_{\mu\lambda} \Gamma'^{\lambda}{}_{\nu\sigma}$
$$
\Gamma'^{\rho}{}_{\mu\lambda} = \pdv{x'^{\rho}}{x^{\epsilon}} \pdv{x^{\zeta}}{x'^{\mu}} \pdv{x^{\eta}}{x'^{\lambda}} \Gamma^{\epsilon}{}_{\zeta\eta} + \pdv{x'^{\rho}}{x^{\epsilon}} \frac{\partial^{2} x^{\epsilon}}{\partial x'^{\mu} \partial x'^{\lambda}}
$$
$$
\Gamma'^{\lambda}{}_{\nu\sigma} = \pdv{x'^{\lambda}}{x^{\alpha}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma} + \pdv{x'^{\lambda}}{x^{\alpha}} \frac{\partial^{2} x^{\alpha}}{\partial x'^{\nu} \partial x'^{\sigma}}
$$
Multiplying these gives 4 terms. Note that we can collapse $\pdv{x^{\eta}}{x'^{\lambda}} \pdv{x'^{\lambda}}{x^{\alpha}} = \delta^{\eta}_{\alpha}$
$$
\begin{gathered}
\Gamma'^{\rho}{}_{\mu\lambda} \Gamma'^{\lambda}{}_{\nu\sigma} = 
\pdv{x'^{\rho}}{x^{\epsilon}} \pdv{x^{\zeta}}{x'^{\mu}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\epsilon}{}_{\zeta\alpha} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term A)} \\
+ \pdv{x'^{\rho}}{x^{\epsilon}} \pdv{x^{\zeta}}{x'^{\mu}} \frac{\partial^{2} x^{\alpha}}{\partial x'^{\nu} \partial x'^{\sigma}} \Gamma^{\epsilon}{}_{\zeta\alpha} \quad \text{(Term B)} \\
+ \left( \pdv{x'^{\rho}}{x^{\epsilon}} \frac{\partial^{2} x^{\epsilon}}{\partial x'^{\mu} \partial x'^{\lambda}} \pdv{x'^{\lambda}}{x^{\alpha}} \right) \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term C)} \\
+ \left( \pdv{x'^{\rho}}{x^{\epsilon}} \frac{\partial^{2} x^{\epsilon}}{\partial x'^{\mu} \partial x'^{\lambda}} \pdv{x'^{\lambda}}{x^{\alpha}} \right) \frac{\partial^{2} x^{\alpha}}{\partial x'^{\nu} \partial x'^{\sigma}} \quad \text{(Term D)}
\end{gathered}
$$
Now, substitute the Lemma into Terms C and D. They become
$$
\text{Term C} = - \pdv{x^{\delta}}{x'^{\mu}} \frac{\partial^{2} x'^{\rho}}{\partial x^{\delta} \partial x^{\alpha}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma}
$$
$$
\text{Term D} = - \pdv{x^{\delta}}{x'^{\mu}} \frac{\partial^{2} x'^{\rho}}{\partial x^{\delta} \partial x^{\alpha}} \frac{\partial^{2} x^{\alpha}}{\partial x'^{\nu} \partial x'^{\sigma}}
$$
#### Cancellation of Extra Terms
When we sum $A_{\mu\nu} = \partial'_{\mu} \Gamma'^{\rho}{}_{\nu\sigma} + \Gamma'^{\rho}{}_{\mu\lambda} \Gamma'^{\lambda}{}_{\nu\sigma}$, Term 1 cancels perfectly with Term C and Term 5 cancels perfectly with Term D.

The remaining components of $A_{\mu\nu}$ are the pure tensor terms (Term 4 and Term A) and the leftover "extra" non-tensor terms (Term 2, Term 6, Term 3 and Term B). Group the non-tensor terms remaining in $A_{\mu\nu}$

$$
S_{\mu\nu} = \underbrace{\pdv{x'^{\rho}}{x^{\alpha}} \frac{\partial^{2} x^{\beta}}{\partial x'^{\mu} \partial x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma}}_{\text{Term 2}} + \underbrace{\pdv{x'^{\rho}}{x^{\alpha}} \frac{\partial^{3} x^{\alpha}}{\partial x'^{\mu} \partial x'^{\nu} \partial x'^{\sigma}}}_{\text{Term 6}} + \underbrace{\pdv{x'^{\rho}}{x^{\alpha}} \pdv{x^{\beta}}{x'^{\nu}} \frac{\partial^{2} x^{\gamma}}{\partial x'^{\mu} \partial x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma}}_{\text{Term 3}} + \underbrace{\pdv{x'^{\rho}}{x^{\epsilon}} \pdv{x^{\zeta}}{x'^{\mu}} \frac{\partial^{2} x^{\alpha}}{\partial x'^{\nu} \partial x'^{\sigma}} \Gamma^{\epsilon}{}_{\zeta\alpha}}_{\text{Term B}}
$$
Relabel dummy indices in Term B ($\epsilon \to \alpha, \zeta \to \beta, \alpha \to \gamma$) to make it directly comparable to Term 3. The sum of Term 3 and Term B is
$$
\text{Term 3} + \text{Term B} = \pdv{x'^{\rho}}{x^{\alpha}} \Gamma^{\alpha}{}_{\beta\gamma} \left( \pdv{x^{\beta}}{x'^{\nu}} \frac{\partial^{2} x^{\gamma}}{\partial x'^{\mu} \partial x'^{\sigma}} + \pdv{x^{\beta}}{x'^{\mu}} \frac{\partial^{2} x^{\gamma}}{\partial x'^{\nu} \partial x'^{\sigma}} \right)
$$
Look at the expression for $S_{\mu\nu}$. Because mixed partial derivatives commute, $\frac{\partial^{2} x^{\beta}}{\partial x'^{\mu} \partial x'^{\nu}}$ and $\frac{\partial^{3} x^{\alpha}}{\partial x'^{\mu} \partial x'^{\nu} \partial x'^{\sigma}}$ are symmetric under $\mu \leftrightarrow \nu$. In our combined (Term 3 + Term B), swapping $\mu \leftrightarrow \nu$ simply swaps the two pieces inside the parenthesis. Therefore, $S_{\mu\nu}$ is completely symmetric. 

#### Antisymmetrizing to obtain the Tensor
Recall that the Riemann tensor is $R'^{\rho}{}_{\sigma\mu\nu} = A_{\mu\nu} - A_{\nu\mu}$. When we subtract the $\mu \leftrightarrow \nu$ terms, $S_{\mu\nu} - S_{\nu\mu} = 0$. All extra terms vanish and the only survivors are the pure tensor terms (Term 4 and Term A)
$$
R'^{\rho}{}_{\sigma\mu\nu} = (\text{Term 4}(\mu,\nu) - \text{Term 4}(\nu,\mu)) + (\text{Term A}(\mu,\nu) - \text{Term A}(\nu,\mu))
$$

Plugging in Term 4
$$
\pdv{x'^{\rho}}{x^{\alpha}} \pdv{x^{\delta}}{x'^{\mu}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \partial_{\delta} \Gamma^{\alpha}{}_{\beta\gamma} - \pdv{x'^{\rho}}{x^{\alpha}} \pdv{x^{\delta}}{x'^{\nu}} \pdv{x^{\beta}}{x'^{\mu}} \pdv{x^{\gamma}}{x'^{\sigma}} \partial_{\delta} \Gamma^{\alpha}{}_{\beta\gamma}
$$
Swap dummy indices $\delta \leftrightarrow \beta$ in the subtracted term
$$
\pdv{x'^{\rho}}{x^{\alpha}} \pdv{x^{\delta}}{x'^{\mu}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \big( \partial_{\delta} \Gamma^{\alpha}{}_{\beta\gamma} - \partial_{\beta} \Gamma^{\alpha}{}_{\delta\gamma} \big)
$$

Plugging in Term A
$$
\pdv{x'^{\rho}}{x^{\epsilon}} \pdv{x^{\zeta}}{x'^{\mu}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\epsilon}{}_{\zeta\lambda} \Gamma^{\lambda}{}_{\beta\gamma} - \pdv{x'^{\rho}}{x^{\epsilon}} \pdv{x^{\zeta}}{x'^{\nu}} \pdv{x^{\beta}}{x'^{\mu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\epsilon}{}_{\zeta\lambda} \Gamma^{\lambda}{}_{\beta\gamma}
$$
Swap dummy indices $\zeta \leftrightarrow \beta$ in the subtracted term
$$
\pdv{x'^{\rho}}{x^{\epsilon}} \pdv{x^{\zeta}}{x'^{\mu}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \big( \Gamma^{\epsilon}{}_{\zeta\lambda} \Gamma^{\lambda}{}_{\beta\gamma} - \Gamma^{\epsilon}{}_{\beta\lambda} \Gamma^{\lambda}{}_{\zeta\gamma} \big)
$$

Finally, renaming the global dummy indices to $(\epsilon \to \tau, \zeta \to \alpha, \beta \to \beta, \gamma \to \omega)$ to match the right side conventions
$$
R'^{\rho}{}_{\sigma\mu\nu} = \pdv{x'^{\rho}}{x^{\tau}} \pdv{x^{\omega}}{x'^{\sigma}} \pdv{x^{\alpha}}{x'^{\mu}} \pdv{x^{\beta}}{x'^{\nu}} \underbrace{\left( \partial_{\alpha} \Gamma^{\tau}{}_{\beta\omega} - \partial_{\beta} \Gamma^{\tau}{}_{\alpha\omega} + \Gamma^{\tau}{}_{\alpha\lambda} \Gamma^{\lambda}{}_{\beta\omega} - \Gamma^{\tau}{}_{\beta\lambda} \Gamma^{\lambda}{}_{\alpha\omega} \right)}_{R^{\tau}{}_{\omega\alpha\beta}}
$$

Thus, we are left strictly with the required transformation law
$$
R'^{\rho}{}_{\sigma\mu\nu} = \pdv{x'^{\rho}}{x^{\tau}} \pdv{x^{\omega}}{x'^{\sigma}} \pdv{x^{\alpha}}{x'^{\mu}} \pdv{x^{\beta}}{x'^{\nu}} R^{\tau}{}_{\omega\alpha\beta}
$$
which shows that the Riemann tensor is a tensor.

## Homework 3

### Problem 1

Following the steps in Wednesday’s class, please derive the Einstein’s field equation of general relativity.

To get the Einstein’s field equation, we’ll need to construct a tensor which contains the second order derivative of the metric tensor. As is proved in the last homework, the Riemann tensor, which has the form
$$
R^{\lambda} {}_{\mu \nu \kappa} = \Gamma^{\lambda} {}_{\mu \nu, \kappa} - \Gamma^{\lambda} {}_{\mu \kappa, \nu} + \Gamma^{\eta} {}_{\mu \nu} \Gamma^{\lambda} {}_{\eta \kappa} - \Gamma^{\eta} {}_{\mu \kappa} \Gamma^{\lambda} {}_{\eta \nu}
$$

is the tensor we can use to build the field equation. To be compatible with the energy momentum tensor (second order), we’ll need to contract the Riemann tensor to get the Ricci tensor, which is defined as
$$
\begin{gathered}
R_{\mu \kappa} = g^{\lambda \nu} R_{\lambda \mu \nu \kappa} = R^{\lambda} {}_{\mu \lambda \kappa} \\ = 
\Gamma^{\lambda} {}_{\mu \lambda, \kappa} - \Gamma^{\lambda} {}_{\mu \kappa, \lambda} + \Gamma^{\eta} {}_{\mu \lambda} \Gamma^{\lambda} {}_{\eta \kappa} - \Gamma^{\eta} {}_{\mu \kappa} \Gamma^{\lambda} {}_{\mu \lambda}
\end{gathered}
$$
And we continue to contract the Ricci tensor to get the Ricci scalar, which is defined as
$$
R = g^{\mu \kappa} R_{\mu \kappa}
$$
So our second order derivative tensor is combined by the Ricci tensor and the Ricci scalar, which we might as well assume as
$$
G_{\mu \nu} = C_{1} R_{\mu \nu} + C_{2} R g_{\mu \nu}
$$
Notice that the energy momentum is conserved, which means $T^{\mu \nu} {}_{; \mu} = 0$, we can get
$$
G^{\mu \nu}{}_{; \mu} = 0 \Rightarrow C_{1} R^{\mu \nu}{}_{; \mu} + C_{2} g^{\mu \nu} R_{; \mu} = 0
$$
How to derive the relation of $C_{1}$ and $C_{2}$? We can use the Bianchi identity, which is
$$
R_{\lambda \mu \{\nu \kappa; \eta\}} = 0
$$
Contract Bianchi identity, we can get
$$
g^{\lambda \nu} R_{\lambda \mu \{\nu \kappa; \eta\}} = 0  \Rightarrow R_{\mu \kappa; \eta} - R_{\mu \eta; \kappa} + R^{\nu} {}_{\mu \kappa \eta; \nu} = 0
$$
Contract again
$$
g^{\mu \kappa} \left(R_{\mu \kappa; \eta} - R_{\mu \eta; \kappa} + R^{\nu} {}_{\mu \kappa \eta; \nu}\right) = R_{; \eta} - 2 R^{\mu} {}_{\eta ; \mu} = 0
$$
So to be consistent with the conservation of energy momentum, we can get the ratio between the two coefficients, say
$$
\begin{gathered}
C_{1} R^{\mu \nu}{}_{; \mu} + C_{2} g^{\mu \nu} R_{; \mu} = 0 \\
g_{\eta \nu} (C_{1} R^{\mu \nu}{}_{; \mu} + C_{2} g^{\mu \nu} R_{; \mu}) = 0 \Rightarrow
C_{1} R^{\mu} {}_{\eta; \mu} + C_{2} R_{; \eta} = 0
\end{gathered}
$$
Compare this equation with the result of the Bianchi identity, we can know that
$$
C_{2} = - \frac{1}{2} C_{1}
$$
So the tensor we constructed can be represented as
$$
G_{\mu \nu} = C_{1} \left(R_{\mu \nu} - \frac{1}{2}R g_{\mu \nu}\right)
$$
Now the only barrier between us and the field equation is the coefficient $C_{1}$, whose value can be confirmed through weak field approximation. In the local inertial coordinate system, the Ricci tensor is
$$
R_{\mu \nu} = \Gamma^{\lambda} {}_{\mu \lambda, \nu} - \Gamma^{\lambda} {}_{\mu \nu, \lambda} + \underbrace{\Gamma^{\eta} {}_{\mu \lambda} \Gamma^{\lambda} {}_{\eta \nu} - \Gamma^{\eta} {}_{\mu \nu} \Gamma^{\lambda} {}_{\eta \lambda}}_{=0}
$$

Given the Christoffel symbol
$$
\Gamma^{\lambda} {}_{\mu \lambda} = \frac{1}{2} g^{\lambda \eta} \left(g_{\eta \mu, \lambda} + g_{\eta \lambda, \mu} - g_{\mu \lambda, \eta}\right)
$$

$$
\Gamma^{\lambda} {}_{\mu \nu} = \frac{1}{2} g^{\lambda \eta} \left(g_{\eta \mu, \nu} + g_{\eta \nu, \mu} - g_{\mu \nu, \eta}\right)
$$
So the Ricci tensor can be expressed as, using the metric tensor
$$
\begin{gathered}
R_{\mu \nu} = \Gamma^{\lambda} {}_{\mu \lambda, \nu} - \Gamma^{\lambda} {}_{\mu \nu, \lambda} \\ =
\frac{1}{2} g^{\lambda \eta} \left(g_{\eta \lambda, \mu \nu} + g_{\mu \nu, \eta \lambda} - g_{\mu \lambda, \eta \nu} - g_{\eta \nu, \mu \lambda}\right) 
\end{gathered}
$$
Under weak field approximation
$$
g_{\mu \nu} = \eta_{\mu \nu} + h_{\mu \nu} \quad (h \ll 1)
$$

$$
\begin{gathered}
R_{\mu \nu} \approx \frac{1}{2} \eta^{\lambda \kappa} (h_{\kappa \lambda, \mu \nu} + h_{\mu \nu, \kappa \lambda} - h_{\mu \lambda, \kappa \nu} - h_{\kappa \nu,\mu \lambda}) \\ =
\frac{1}{2} (h_{, \mu \nu} + \square h_{\mu \nu} - h_{\mu} {}^{\kappa} {}_{, \kappa \nu} - h^{\lambda} {}_{\nu, \mu \lambda})
\end{gathered}
$$

And the Ricci scalar
$$
R = \square h - h^{\rho \sigma} {}_{, \rho \sigma}
$$
So the $00$ component of our tensor equals (given that the problem is static and under weak field)
$$
R_{00} - \frac{R}{2} g_{00} \approx \frac{1}{2} (\square h_{00} + \square h - h^{\rho \sigma} {}_{, \rho \sigma})
$$
Our assumption is that the metric perturbation for a static, isotropic weak field is
$$
h_{\mu \nu} = \text{diag} (- 2 \Phi, - 2 \Phi, - 2 \Phi, - 2 \Phi)
$$
where $\Phi$ is the Newtonian gravitational potential. Using this metric, we can calculate the trace of the perturbation $h = \eta^{\mu \nu} h_{\mu \nu}$. 

$$
h = (-1)(-2\Phi) + 3(1)(-2\Phi) = -4\Phi = 2h_{00}
$$
Because the field is static, all time derivatives vanish ($\partial_{0} = 0$). Thus, the d'Alembertian $\square$ reduces to the spatial Laplacian $\nabla^{2}$. Moreover, the term $h^{\rho \sigma}{}_{, \rho \sigma}$ simplifies nicely because $h_{ij} = h_{00}\delta_{ij}$ for spatial components
$$
h^{\rho \sigma} {}_{, \rho \sigma} = \partial_{i} \partial_{j} h_{ij} = \sum_{i} \partial_{i}^{2} h_{00} = \nabla^{2} h_{00}
$$

Substitute these relations into the $00$ component of our tensor
$$
G_{00} = R_{00} - \frac{R}{2} g_{00} \approx \frac{1}{2} (\square h_{00} + \square h - h^{\rho \sigma} {}_{, \rho \sigma})
$$
$$
G_{00} = \frac{1}{2} \left( \nabla^{2} h_{00} + \nabla^{2} (2h_{00}) - \nabla^{2} h_{00} \right) = \nabla^{2} h_{00}
$$
Therefore, by defining $C_{1} = 1$ in our constructed geometric tensor $G_{\mu \nu}$, we have successfully derived the Einstein's Field Equation
$$
G_{\mu \nu} = R_{\mu \nu} - \frac{1}{2} R g_{\mu \nu} = - 8 \pi G T_{\mu \nu}
$$

### Problem 2

For an isotropic static system, as shown in Friday’s class, the general form of the metric can be written as
$$
\dd{\tau}^{2} = B(r) \dd{t}^{2} - A(r) \dd{r}^{2} - r^{2} (\dd{\theta}^{2} + \sin^{2} \theta \dd{\phi}^{2})
$$

Please calculate the affine connection $\Gamma^{\lambda} {}_{\mu \nu}$ and the Ricci tensor.

The components of the metric tensors (covariant and contravariant) are
$$
\begin{gathered}
g_{\mu \nu} = \text{diag} (-B, A, r^{2}, r^{2} \sin^{2} \theta) \\
g^{\mu \nu} = \text{diag} (-\frac{1}{B}, \frac{1}{A}, \frac{1}{r^{2}}, \frac{1}{r^{2} \sin^{2} \theta})
\end{gathered}
$$

#### Affine Connection

The affine connection is defined as
$$
\Gamma^{\lambda} {}_{\mu \nu} = \frac{1}{2} g^{\lambda \eta} (g_{\eta \mu, \nu} + g_{\eta \nu, \mu} - g_{\mu \nu, \eta})
$$
Calculate the components of the affine connection, I find that all non-zero componets are
$$
\begin{gathered}
\Gamma^{t} {}_{tr} = \Gamma^{t}_{rt} = \frac{B'}{2B}\\
\Gamma^{r} {}_{tt} = \frac{B'}{2A} \\
\Gamma^{r} {}_{rr} = \frac{A'}{2A} \\
\Gamma^{r} {}_{\theta\theta} = -\frac{r}{A} \\
\Gamma^{r} {}_{\phi\phi} = -\frac{r\sin^{2}\theta}{A} \\
\Gamma^{\theta} {}_{r\theta} = \Gamma^{\theta} {}_{\theta r} = \frac{1}{r} \\
\Gamma^{\theta} {}_{\phi\phi} = -\sin\theta\cos\theta \\
\Gamma^{\phi} {}_{r\phi} = \Gamma^{\phi} {}_{\phi r} = \frac{1}{r} \\
\Gamma^{\phi} {}_{\theta\phi} = \Gamma^{\phi} {}_{\phi\theta} = \cot\theta
\end{gathered}
$$
where primes denote derivatives with respect to $r$.

#### **Ricci Tensor**

First, we’ll calculate the components of the Riemann tensor
$$
R^{\lambda} {}_{\mu \nu \kappa} = \Gamma^{\lambda} {}_{\mu \nu, \kappa} - \Gamma^{\lambda} {}_{\mu \kappa, \nu} + \Gamma^{\eta} {}_{\mu \nu} \Gamma^{\lambda} {}_{\eta \kappa} - \Gamma^{\eta} {}_{\mu \kappa} \Gamma^{\lambda} {}_{\eta \nu}
$$
So the Ricci tensor is, after contraction
$$
\begin{gathered}
R_{\mu \kappa} = g^{\lambda \nu} R_{\lambda \mu \nu \kappa} = R^{\lambda} {}_{\mu \lambda \kappa} \\ = 
\Gamma^{\lambda} {}_{\mu \lambda, \kappa} - \Gamma^{\lambda} {}_{\mu \kappa, \lambda} + \Gamma^{\eta} {}_{\mu \lambda} \Gamma^{\lambda} {}_{\eta \kappa} - \Gamma^{\eta} {}_{\mu \kappa} \Gamma^{\lambda} {}_{\mu \lambda}
\end{gathered}
$$
The Ricci tensor is diagnal, because we can consider some transformations, like time inversion and space reflection, under which the transformation rules of the tensor requires the Ricci tensor’s off-diagnal components to be zero. For example, the time inversion transformation $t \to -t$ requires Ricci tensor to transform like
$$
R'_{t' r} = - R_{tr}
$$
But the metric itself doesn't change at all under such inversion, which means that the Ricci tensor (only depends on the metric)
$$
R'_{t' r} = R_{tr}
$$
So we can derive that $R_{tr} = 0$. Similarly, using the transformation of $\phi \to - \phi$ and $\theta \to \pi - \theta$ we can know that the other off-diagnal components of the tensor are also zero.

The diagnal part of the components are as follows (after careful calculation)
$$
\begin{gathered}
R_{tt} = -\frac{B''}{2A} + \frac{B'A'}{4A^{2}} + \frac{(B')^{2}}{4AB} - \frac{B'}{A r} \\
R_{rr} = \frac{B''}{2B} - \frac{(B')^{2}}{4B^{2}} - \frac{A'B'}{4AB} - \frac{A'}{A r} \\
R_{\theta\theta} = - 1 + \frac{1}{A} - \frac{r A'}{2A^{2}} + \frac{r B'}{2AB} \\
R_{\phi\phi} = \sin^{2}\theta \, R_{\theta\theta}
\end{gathered}
$$

## Homework 4

### Problem 1

Please show that $\delta^{\mu} {}_{t}$ and $\delta^{\mu} {}_{\phi}$ are Killing vectors of the Schwarzschild metric.

The Schwarzschild metric can be written as
$$
g_{\mu \nu} = \text{diag} \begin{pmatrix}
- \left(1 - \frac{2 GM}{r}\right), \left(1 - \frac{2 GM}{r}\right)^{-1}, r^{2}, r^{2} \sin^{2} \theta
\end{pmatrix}
$$
Copy the Christoffel symbols of the Schwarzschild metric from the last homework
$$
\begin{gathered}
\Gamma^{t} {}_{tr} = \Gamma^{t} {}_{rt} = \frac{B'}{2B} = \frac{GM}{r^{2} - 2 GM r} \\
\Gamma^{r} {}_{tt} = \frac{B'}{2A} = \frac{GM}{r^{2}} \left(1 - \frac{2 GM}{r}\right) \\
\Gamma^{r} {}_{rr} = \frac{A'}{2A} = - \frac{GM}{r^{2} - 2 GM r} \\
\Gamma^{r} {}_{\theta\theta} = -\frac{r}{A} = GM - r \\
\Gamma^{r} {}_{\phi\phi} = -\frac{r\sin^{2}\theta}{A} = \sin^{2} \theta (GM - r) \\
\Gamma^{\theta} {}_{r\theta} = \Gamma^{\theta} {}_{\theta r} = \frac{1}{r} \\
\Gamma^{\theta} {}_{\phi\phi} = -\sin\theta\cos\theta \\
\Gamma^{\phi} {}_{r\phi} = \Gamma^{\phi} {}_{\phi r} = \frac{1}{r} \\\Gamma^{\phi} {}_{\theta\phi} = \Gamma^{\phi} {}_{\phi\theta} = \cot\theta
\end{gathered}
$$
To proove that $\delta^{\mu} {}_{t}$ is Killing vector, we have to show that
$$
\xi {}_{\mu; \nu} + \xi {}_{\nu; \mu} = 0
$$
Using the metric tensor to lower the index of $\delta^{\mu} {}_{t}$, we have
$$
\xi_{\mu} = g_{\mu \nu} \delta^{\nu} {}_{t} = \left(-\left(1 - \frac{2 GM}{r}\right), 0, 0, 0 \right)
$$
Consider the covariant derivative of the vector
$$
\xi_{\mu; \nu} = \xi_{\mu, \nu} - \Gamma^{\eta} {}_{\mu \nu} \xi_{\eta}
$$

$$
\xi_{\nu; \mu} = \xi_{\nu, \mu} - \Gamma^{\eta} {}_{\nu \mu} \xi_{\eta}
$$

So we can write down the non-zero components of the covariant derivative of this vector (for this derivative is symmetric, we only need to consider the components with $\mu \leq \nu$)
$$
\xi_{t; r} + \xi_{r; t} = - \frac{2 GM}{r^{2}} - \Gamma^{t} {}_{tr} \xi_{t} - \Gamma^{t} {}_{rt} \xi_{t} = - \frac{2GM}{r^{2}} + 2 \cdot \frac{GM}{r^{2} - 2 GM r} \cdot \left(1 - \frac{2GM}{r}\right) = 0
$$
For other components, the $\xi_{\mu, \nu}$ is zero and the Christoffel symbols with the sign $\Gamma^{t} {}_{\mu \nu}$ are zero, so the covariant derivative is zero. So we have shown that $\delta^{\mu} {}_{t}$ is a Killing vector.

Similarly, to show that the vector $\delta^{\mu} {}_{\phi}$ is a Killing vector, we first use the metric tensor to lower the index of $\delta^{\mu} {}_{\phi}$, we have
$$
\xi_{\mu} = g_{\mu \nu} \delta^{\nu} {}_{\phi} =  \left(0, 0, 0, r^{2} \sin^{2} \theta\right)
$$
So we also add the covariant derivatives of this vector
$$
\begin{gathered}
\xi_{\phi; r} + \xi_{r; \phi} = \xi_{\phi, r} + \xi_{r, \phi} - \Gamma^{\phi} {}_{\phi r} \xi_{\phi} - \Gamma^{\phi} {}_{r \phi} \xi_{\phi} \\ = 
2 r \sin^{2} \theta + 0 - 2 \cdot \frac{1}{r} \cdot r^{2} \sin^{2} \theta = 0
\end{gathered}
$$

$$
\xi_{\phi; \theta} + \xi_{\theta; \phi} = \xi_{\phi, \theta} + \xi_{\theta, \phi} - \Gamma^{\phi} {}_{\phi \theta} \xi_{\phi} - \Gamma^{\phi} {}_{\theta \phi} \xi_{\phi} = 2 r^{2} \sin\theta \cos\theta + 0 - 2 \cdot \cot\theta \cdot r^{2} \sin^{2} \theta = 0
$$

For other components, the $\xi_{\mu, \nu}$ is zero and the Christoffel symbols with the sign $\Gamma^{\phi} {}_{\mu \nu}$ are zero, so the covariant derivative is zero. So we have shown that $\delta^{\mu} {}_{\phi}$ is a Killing vector.

### Problem 2

Please repeat the steps of calculating the phenomena of Mercury precession and light deflection induced by general relativity, and calculate what is the precession angle of the Mars during GR effect.

First, we use the Killing vectors to find some conserved quantities. For the Killing vector $\delta^{\mu} {}_{t}$, we have
$$
g_{\mu \nu} U^{\mu} \delta^{\nu} {}_{t} = - \left(1 - \frac{2 GM}{r}\right) \cdot \dv{t}{\tau} = \text{Constant} \equiv -E
$$
For the Killing vector $\delta^{\mu} {}_{\phi}$,  we have
$$
g_{\mu \nu} U^{\mu} \delta^{\nu} {}_{\phi} = r^{2} \sin^{2} \theta \cdot \dv{\phi}{\tau} = \text{Constant} \equiv L
$$
We choose the plain $\theta = \frac{\pi}{2}$,  so the $\theta$ component’s geodesic equation is automatically satisfied.

Now we can derive the track of the planet
$$
\dd{\tau}^{2} = \left(1 − \frac{2 GM}{r}\right) \dd{t}^{2} − \left(1 − \frac{2GM}{r}\right)^{−1} \dd{r}^{2} − r^{2} (\dd{\theta}^{2} + \sin^{2} \theta \dd{\phi}^{2})
\tag{1}
$$
So
$$
1 = \left(1 − \frac{2 GM}{r}\right) \left(\dv{t}{\tau}\right)^{2} - \left(1 − \frac{2 GM}{r}\right)^{-1} \left(\dv{r}{\tau}\right)^{2} - r^{2} \left(\dv{\phi}{\tau}\right)^{2}
$$
Substituting the conserved quantities into the above equation, we have
$$
\left(\dv{r}{\tau}\right)^{2} - E^{2} + \left(1 + \frac{L^{2}}{r^{2}}\right)\left(1 - \frac{2 GM}{r}\right) =0
$$
Use a new variable $u = \frac{1}{r}$, we can rewrite the above equation as
$$
\left(\dv{u}{\phi}\right)^{2} + \frac{- E^{2} + 1}{L^{2}} - \frac{2 GM u}{L^{2}} + u^{2} - 2 GM u^{3} = 0
$$
So this equals
$$
\dv[2]{u}{\phi} + u = \frac{GM}{L^{2}} + 3 GM u^{2}
$$
We use the perturbation method to solve this equation
$$
u = u_{0} + u_{1}
$$
The first-order solution $u_{0}$ is
$$
u_{0} = \frac{GM}{L^{2}} (1 + e \cos \phi)
$$
The second-order perturbation is described by the equation
$$
\dv[2]{u_{1}}{\phi} + u_{1} = 3 GM u_{0}^{2} =  \frac{3 G^{3} M^{3}}{2L^{4}} (2 + 4e \cos \phi + e^{2}\cos 2 \phi + e^{2})
$$
So the approximate $u_{1}$ is
$$
u_{1} = \frac{G^{3} M^{3}}{L^{4}} (3 + \frac{3}{2} e^{2} + 3 e \phi \sin \phi - \frac{e^{2}}{2} \cos 2 \phi)
$$
Thus our total track equation leads to
$$
\begin{gathered}
u = \cdots + \frac{GM}{L^{2}} e \cos \phi + 3 \frac{G^{3} M^{3}}{L^{4}} e \phi \sin \phi \\ \approx 
\cdots + \frac{GM}{L^{2}} e \cos ((1 - 3 \frac{G^{2} M^{2}}{L^{2}}) \phi)
\end{gathered}
$$
So the precession angle per period is
$$
\Delta \phi = 6 \pi \frac{G^{2} M^{2} m^{2}}{L^{2} c^{2}}
$$
The $L$ in this precession angle is the classical $L$ which contains the mass of the planet.

#### Mercury Precession

The parameters of Mercury orbit are
$$
\begin{gathered}
a = 0.3870993 \mathrm{AU} \\
e = 0.20564 \\
T = 87.969257 \mathrm{D}
\end{gathered}
$$
So the total precession angle in one century of the Mercury orbit is
$$
\Delta \phi = \frac{100 \times 365}{87.969257} \times 6 \pi \times \frac{G M_{\text{sun}}}{a (1 - e^{2}) \cdot c^{2}} \approx 42.98''
$$

#### Mars Precession

The parameters of Mars orbit are
$$
\begin{gathered}
a = 1.52371 \mathrm{AU} \\
e = 0.09339 \\
T = 686.92971 \mathrm{D}
\end{gathered}
$$
So the total precession angle in one century of the Mars orbit is
$$
\Delta \phi = \frac{100 \times 365}{686.92971} \times 6 \pi \times \frac{G M_{\text{sun}}}{a (1 - e^{2}) \cdot c^{2}} \approx 1.35''
$$

### Problem 3

For a Schwarzschild blackhole with mass $M$, the metric can be written as
$$
\dd{\tau}^{2} = \left(1 − \frac{2 GM}{r}\right) \dd{t}^{2} − \left(1 − \frac{2GM}{r}\right)^{−1} \dd{r}^{2} − r^{2} (\dd{\theta}^{2} + \sin^{2} \theta \dd{\phi}^{2})
\tag{1}
$$

Now, consider two observers $A$ and $B$. At $t=t_{0}$ they were both at $r= 6GM$. At $t_{0}$, $A$ starts to freely fall into the blackhole in the radial direction, while $B$ remains fixed at $r= 6GM$. From $t_{0}$, $A$ sends back a signal to $B$ every $Δt$ (measured by the clock flying with $A$). Please calculate how often $B$ observed a signal from $A$.

 First consider the geodesic equation of the observer $A$ in the radial direction, the motion equation is
$$
\left(\dv{r}{\tau}\right)^{2} - E^{2} + 1 - \frac{2 GM}{r} =0
$$
Using the initial condition $r = 6 GM$ at $\tau = t_{0}$, we can get
$$
E = \sqrt{\frac{2}{3}}
$$
Therefore
$$
\dv{r}{\tau} = \sqrt{\frac{2 GM}{r} - \frac{1}{3}}
$$
and the integral gives out
$$
6 \sqrt{3} GM \arccos (\sqrt{1 - \frac{r}{6GM}}) - \sqrt{3r (6GM - r)} = \tau - t_{0}
$$
Then consider the geodesic equation of the signal sent by $A$, we have the null geodesic equation
$$
0 = \left(1 − \frac{2 GM}{r}\right) \left(\dv{t}{\lambda}\right)^{2} - \left(1 − \frac{2 GM}{r}\right)^{-1} \left(\dv{r}{\lambda}\right)^{2} - r^{2} \left(\dv{\phi}{\lambda}\right)^{2}
$$
For the signal travels radially, we have $\dv{\phi}{\lambda} = 0$, so the above equation can be rewritten as
$$
\dv{r}{t} = 1 - \frac{2 GM}{r}
$$
At the position $r$, when the time in A’s frame passes $\Delta t$, A actually moves 
$$
\Delta r = \Delta t \cdot \sqrt{\frac{2 GM}{r} - \frac{1}{3}}
$$
closer to the blackhole, and while the time in A’s frame passes $\Delta t$, the time in B’s frame passes
$$
\Delta \tau_{B} = \Delta t \cdot \frac{2}{3\left(1 - \frac{2 GM}{r}\right)}
$$
So B will receive the later signal when time in its frame has passed
$$
\begin{gathered}
\Delta t_{B} = \Delta t \cdot \frac{2}{3\left(1 - \frac{2 GM}{r}\right)} + \Delta t \cdot \frac{\sqrt{\frac{2 GM}{r} - \frac{1}{3}}}{1 - \frac{2 GM}{r}} \cdot \sqrt{\frac{2}{3}} \\ =
\frac{2 + \sqrt{\frac{12 GM}{r} - 2}}{3 \left(1 - \frac{2 GM}{r}\right)} \Delta t
\end{gathered}
$$

## Homework 5

### Problem 1

Please calculate the connection and the Ricci tensor for the metric
$$
\dd{\tau^{2}} = B(t, r) \dd{t}^{2} - A(t, r) \dd{r}^{2} - r^{2} \dd{\Omega^{2}}
$$
For this time-relevant metric
$$
g_{\mu \nu} = \begin{pmatrix} -B, A, r^{2}, r^{2} \sin^{2} \theta \end{pmatrix}
$$
First we derive the Christoffel symbol
$$
\Gamma^{\lambda} {}_{\mu \nu} = g^{\lambda \eta} (g_{\eta \mu, \nu} + g_{\eta \nu, \mu} - g_{\mu \nu, \eta})
$$

Calculate the components, we can find all nonzero terms are
$$
\begin{gathered}
\Gamma^{t} {}_{tr} = \Gamma^{t} {}_{rt} = \frac{B'}{2B}\\
\Gamma^{r} {}_{tt} = \frac{B'}{2A} \\
\Gamma^{r} {}_{rr} = \frac{A'}{2A} \\
\Gamma^{t} {}_{tt} = \frac{\dot{B}}{2B} \\
\Gamma^{t} {}_{rr} = \frac{\dot{A}}{2B} 
\end{gathered}
$$
$$
\begin{gathered}
\Gamma^{r} {}_{tr} = \Gamma^{r} {}_{rt} = \frac{\dot{A}}{2A} \\
\Gamma^{r} {}_{\theta\theta} = -\frac{r}{A} \\
\Gamma^{r} {}_{\phi\phi} = -\frac{r\sin^{2}\theta}{A} \\
\Gamma^{\theta} {}_{r\theta} = \Gamma^{\theta} {}_{\theta r} = \frac{1}{r} \\
\Gamma^{\theta} {}_{\phi\phi} = -\sin\theta\cos\theta \\
\Gamma^{\phi} {}_{r\phi} = \Gamma^{\phi} {}_{\phi r} = \frac{1}{r} \\
\Gamma^{\phi} {}_{\theta\phi} = \Gamma^{\phi} {}_{\phi\theta} = \cot\theta
\end{gathered}
$$

where prime means derivative of the space direction while dot means derivative of the time direction.

Calculate Ricci tensors using the definition
$$
\begin{gathered}
R_{\mu \kappa} = g^{\lambda \nu} R_{\lambda \mu \nu \kappa} = R^{\lambda} {}_{\mu \lambda \kappa} \\ = 
\Gamma^{\lambda} {}_{\mu \lambda, \kappa} - \Gamma^{\lambda} {}_{\mu \kappa, \lambda} + \Gamma^{\eta} {}_{\mu \lambda} \Gamma^{\lambda} {}_{\eta \kappa} - \Gamma^{\eta} {}_{\mu \kappa} \Gamma^{\lambda} {}_{\eta \lambda}
\end{gathered}
$$

And we can get all nonzero components

$$
\begin{gathered}
R_{tt} = - \frac{\ddot{A}}{2A} + \frac{\dot{A}^{2}}{4A^{2}} + \frac{\dot{A}\dot{B}}{4AB} + \frac{B''}{2A} - \frac{B'}{4A} \left( \frac{A'}{A} + \frac{B'}{B} \right) + \frac{B'}{rA}  \\
R_{tr} = R_{rt} =  \frac{\dot{A}}{rA} \\
R_{rr} = \frac{\ddot{A}}{2B} - \frac{\dot{A}}{4B} \left( \frac{\dot{A}}{A} + \frac{\dot{B}}{B} \right) - \frac{B''}{2B} + \frac{B'}{4B} \left( \frac{A'}{A} + \frac{B'}{B} \right) + \frac{A'}{rA}  \\
R_{\theta\theta} =  1 - \frac{1}{A} + \frac{r}{2A}\left( \frac{A'}{A} - \frac{B'}{B} \right) \\
R_{\phi\phi} = \sin^{2}\theta \, R_{\theta\theta}
\end{gathered}
$$

### Problem 2

Please derive the energy-momentum tensor for electromagnetic field.

We use the variation of the action to get the form for the energy-momentum tensor
$$
T^{\mu \nu} = \frac{2}{\sqrt{-g}} \frac{\delta S}{\delta g_{\mu \nu}}
$$
Plugging in the action of the EM field
$$
S = - \frac{1}{4} \int \dd[4]{x} \sqrt{-g} F^{\mu \nu} F_{\mu \nu}
$$
and do the variation
$$
\begin{gathered}
\delta S = - \frac{1}{4} \int \dd[4]{x} F_{\alpha \beta} F_{\mu \nu} \delta (\sqrt{- g} g^{\mu \alpha} g^{\nu \beta}) \\ =
- \frac{1}{4} \int \dd[4]{x} F_{\alpha \beta} F_{\mu \nu} (g^{\mu \alpha} g^{\nu \beta} \cdot \frac{1}{2} \sqrt{- g} g^{\rho \sigma} \delta g_{\rho \sigma} - \sqrt{- g} g^{\nu \beta} g^{\sigma \alpha} g^{\mu \rho} \delta g_{\rho \sigma} - \sqrt{- g} g^{\mu \alpha} g^{\nu \rho} g^{\sigma \beta} \delta g_{\rho \sigma})
\end{gathered}
$$
So the energy-momentum tensor density is
$$
\begin{gathered}
T^{\rho \sigma} = \frac{2}{\sqrt{-g}} \cdot \left(- \frac{1}{4} F_{\alpha \beta} F_{\mu \nu} (g^{\mu \alpha} g^{\nu \beta} \cdot \frac{1}{2} \sqrt{- g} g g^{\rho \sigma} - \sqrt{- g} g^{\nu \beta} g^{\sigma \alpha} g^{\mu \rho} - \sqrt{- g} g^{\mu \alpha} g^{\nu \rho} g^{\sigma \beta}\right) \\ =
F^{\rho \beta} F^{\sigma} {}_{\beta} - \frac{1}{4} g^{\rho \sigma} F^{\mu \nu} F_{\mu \nu}
\end{gathered}
$$

## Homework 6

### Problem 1

Please work out the range of angular velocity $\Omega_{\text{obs}}$ allowed an observer inside the ergosphere who remains at a fixed value of $r$. Show that this range becomes increasingly limited as the observer is located closer to the horizon and is eventually limited to the single value $\Omega_{H}$.

Use the Kerr metric. Here $M$ is the physical mass of the black hole, while $a= \frac{J}{M}$ is the Kerr spin parameter. Since we take $c=1$ but not $G=1$, $GM$ carries the dimension of length. We define

$$
\rho^{2} = r^{2} + a^{2} \cos^{2}\theta
$$

$$
\Delta = r^{2} - 2GMr + a^{2}
$$

Then the relevant components of the Kerr metric are (we assume that $\theta = \frac{\pi}{2}$)

$$
g_{tt} = -\left(1 - \frac{2GM}{r}\right)
$$

$$
g_{t\phi} = - \frac{2GMa}{r}
$$

$$
g_{\phi\phi} = r^{2} + a^{2} + \frac{2GMa^{2}}{r}
$$

Consider an observer who stays at fixed $r$ and $\theta$, but is allowed to rotate in the $\phi$ direction. Its four-velocity can be written as

$$
u^{\mu} = u^{t} (1, 0, 0, \Omega_{\text{obs}})
$$

where

$$
\Omega_{\text{obs}} = \dv{\phi}{t} = \frac{E \frac{2 GM a}{r} + L (1 - \frac{2GM}{r})}{E (r^{2} + a^{2} + \frac{2 GM a^{2}}{r}) - L \frac{2 GM a}{r}}
$$

and the circular motion requires the observer’s energy and angular momentum constrained by

$$
(E^{2} - 1) (r^{2} + a^{2}) + (a E - L)^{2} \frac{2 GM}{r} + 2GMr - L^{2} = 0
$$

For this worldline to be timelike, we need

$$
g_{\mu\nu} u^{\mu}u^{\nu} < 0
$$

This gives

$$
(u^{t})^{2} \left(g_{tt} + 2g_{t\phi}\Omega_{\text{obs}} + g_{\phi\phi}\Omega_{\text{obs}}^{2}\right) < 0
$$

Since $(u^{t})^{2} > 0$, the allowed angular velocity has to satisfy

$$
g_{\phi\phi}\Omega_{\text{obs}}^{2} + 2g_{t\phi}\Omega_{\text{obs}} + g_{tt} < 0
$$

The coefficient $g_{\phi\phi}$ is positive, so $\Omega_{\text{obs}}$ has to lie between the two roots

$$
\Omega_{-} < \Omega_{\text{obs}} < \Omega_{+}
$$

where

$$
\Omega_{\pm} = \frac{-g_{t\phi} \pm \sqrt{g_{t\phi}^{2} - g_{tt}g_{\phi\phi}}}{g_{\phi\phi}}
$$

For the Kerr metric, the determinant identity of the $t-\phi$ block is

$$
g_{t\phi}^{2} - g_{tt}g_{\phi\phi} = \Delta \sin^{2}\theta
$$

Therefore the allowed range can also be written as

$$
\Omega_{\pm} = \frac{-g_{t\phi} \pm \sqrt{\Delta}\sin\theta}{g_{\phi\phi}} = \frac{\frac{2 GMa}{r} \pm \sqrt{r^{2} + a^{2} - 2 GM r}}{r^{2} + a^{2} + \frac{2 GM a^{2}}{r}}
$$

At the boundary of the ergosphere, $g_{tt}=0$. There, the lower bound is $\Omega_{-}=0$. Inside the ergosphere, $g_{tt}>0$, so both roots are positive. This means an observer cannot remain at fixed $r$ without rotating in the same direction as the black hole.

Now consider the outer horizon

$$
r_{+} = GM + \sqrt{G^{2}M^{2} - a^{2}}
$$

At the horizon, $\Delta(r_{+})=0$, so the width of the allowed interval becomes

$$
\Omega_{+} - \Omega_{-} = \frac{2\sqrt{\Delta}\sin\theta}{g_{\phi\phi}} \to 0
$$

Thus the two roots coincide. At $r=r_{+}$, we have

$$
\Omega_{+} = \Omega_{-} = \left.-\frac{g_{t\phi}}{g_{\phi\phi}}\right|_{r=r_{+}}
$$

Using $r_{+}^{2}+a^{2}=2GMr_{+}$, this value becomes

$$
\left.-\frac{g_{t\phi}}{g_{\phi\phi}}\right|_{r=r_{+}}
= \frac{2GMar_{+}}{(r_{+}^{2}+a^{2})^{2}}
= \frac{a}{r_{+}^{2}+a^{2}}
$$

Therefore, when the observer approaches the horizon, the allowed angular velocity is forced into the single value

$$
\Omega_{\text{obs}} \to \Omega_{H} = \frac{a}{r_{+}^{2}+a^{2}}
$$

### Problem 2

Consider the universe described by the metric

$$
ds^{2} = -\left(1-\frac{r^{2}}{R^{2}}\right) dt^{2} + \left(1-\frac{r^{2}}{R^{2}}\right)^{-1} dr^{2} + r^{2} (d\theta^{2} + \sin^{2}\theta d\varphi^{2})
$$

This metric is not asymptotically flat at $r\to 0$. But it is flat at $r=0$. Assuming we were living in the region around $r=0$, show that were we to across the horizon at $r=R$ we could never return.

Define

$$
f(r) = 1 - \frac{r^{2}}{R^{2}}
$$

Then the radial part of the metric is

$$
ds^{2} = - f(r)dt^{2} + f(r)^{-1}dr^{2}
$$

For a radial light ray, $ds^{2}=0$, so

$$
0 = - f(r)dt^{2} + f(r)^{-1}dr^{2}
$$

Therefore

$$
\dv{r}{t} = \pm f(r)
$$

For an outgoing light ray starting from $r=r_{0}<R$, we have

$$
t - t_{0} = \int_{r_{0}}^{r} \frac{\dd{r'}}{1 - r'^{2}/R^{2}}
$$

The integral gives

$$
t - t_{0} = \frac{R}{2}\ln\left(\frac{R+r}{R-r}\frac{R-r_{0}}{R+r_{0}}\right)
$$

When $r\to R$, the logarithm diverges. So in the static coordinate $t$, even light emitted outward from our region takes infinite coordinate time to reach $r=R$.

To see what happens after crossing the horizon, introduce the tortoise coordinate

$$
r_{*} = \int \frac{\dd{r}}{f(r)}
= \frac{R}{2}\ln\left|\frac{R+r}{R-r}\right|
$$

and the outgoing Eddington-Finkelstein coordinate

$$
u = t - r_{*}
$$

Using $\dd{t} = \dd{u} + f(r)^{-1} \dd{r}$, the metric becomes

$$
\dd{s}^{2} = -f(r) \dd{u}^{2} - 2 \dd{u} \, \dd{r} + r^{2} (\dd{\theta}^{2} + \sin^{2} \theta \dd{\varphi}^{2})
$$

This coordinate system is regular at $r=R$. Outside the horizon, $r>R$, we have $f(r)<0$. Then for any future-directed curve with $\dd{u}>0$

$$
0 \geq \dd{s}^{2} = |f(r)| \dd{u}^{2} - 2 \dd{u} \, \dd{r} + r^{2}(\dd{\theta}^{2} + \sin^{2} \theta \dd{\varphi}^{2})
$$

Dividing by $\dd{u}^{2}$ gives

$$
\dv{r}{u} \geq \frac{|f(r)|}{2} + \frac{r^{2}}{2}\left[\left(\dv{\theta}{u}\right)^{2} + \sin^{2}\theta \left(\dv{\varphi}{u}\right)^{2}\right]
$$

So once $r>R$, every future-directed curve must move toward larger $r$. In other words, after crossing the horizon, decreasing $r$ and returning to the region around $r=0$ would require a spacelike trajectory, which is impossible for observers.

### Problem 3

Consider the perturbation to the metric field in Minkowski background. We expand the metric tensor as $g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}$.

(1) Please calculate $g^{\mu\nu}$, $g^{1/2}$, $\Gamma^{\lambda} {}_{\mu\nu}$, $R_{\mu\nu}$ to the $O(h)$ order.

We raise and lower the indices of $h_{\mu\nu}$ with the background metric $\eta_{\mu\nu}$. Define

$$
h = \eta^{\mu\nu}h_{\mu\nu} = h^{\mu} {}_{\mu}
$$

First, from $g^{\mu\lambda}g_{\lambda\nu}=\delta^{\mu}{}_{\nu}$, we can expand

$$
g^{\mu\nu} = \eta^{\mu\nu} - h^{\mu\nu} + O(h^{2})
$$

For the determinant, using $\det(1+A)=\exp(\mathrm{Tr}\ln(1+A))$, we get

$$
\sqrt{-g} = 1 + \frac{1}{2}h + O(h^{2})
$$

For the second-order action, we will also need the next order of this expansion

$$
\sqrt{-g} = 1 + \frac{1}{2}h + \frac{1}{8}h^{2} - \frac{1}{4}h_{\mu\nu}h^{\mu\nu} + O(h^{3})
$$

The Christoffel symbol is

$$
\Gamma^{\lambda} {}_{\mu\nu}
= \frac{1}{2}g^{\lambda\rho}\left(\partial_{\mu}g_{\nu\rho}+\partial_{\nu}g_{\rho\mu}-\partial_{\rho}g_{\mu\nu}\right)
$$

Keeping only the $O(h)$ terms gives

$$
\Gamma^{\lambda} {}_{\mu\nu}
= \frac{1}{2}\eta^{\lambda\rho}\left(\partial_{\mu}h_{\nu\rho}+\partial_{\nu}h_{\rho\mu}-\partial_{\rho}h_{\mu\nu}\right) + O(h^{2})
$$

Using the convention

$$
R_{\mu\nu}^{(1)} = \partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu} - \partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}
$$

we find

$$
R_{\mu\nu}^{(1)}
= \frac{1}{2}\left(
\partial_{\lambda}\partial_{\mu}h^{\lambda} {}_{\nu}
+ \partial_{\lambda}\partial_{\nu}h^{\lambda} {}_{\mu}
- \partial^{\lambda}\partial_{\lambda}h_{\mu\nu}
- \partial_{\mu}\partial_{\nu}h
\right)
$$

If we write $\square=\partial^{\lambda}\partial_{\lambda}$, this is

$$
R_{\mu\nu}^{(1)}
= \frac{1}{2}\left(
\partial_{\lambda}\partial_{\mu}h^{\lambda} {}_{\nu}
+ \partial_{\lambda}\partial_{\nu}h^{\lambda} {}_{\mu}
- \square h_{\mu\nu}
- \partial_{\mu}\partial_{\nu}h
\right)
$$

The linearized Ricci scalar is

$$
R^{(1)} = \partial_{\mu}\partial_{\nu}h^{\mu\nu} - \square h
$$

(2) Please calculate the Einstein-Hilbert action to the $O(h^{2})$ order.

Now we calculate the Einstein-Hilbert action

$$
S_{\text{EH}} = \frac{1}{16\pi G}\int \dd[4]{x}\sqrt{-g}R
$$

The $O(h)$ term is

$$
R^{(1)} = \partial_{\mu}\left(\partial_{\nu}h^{\mu\nu}-\partial^{\mu}h\right)
$$

So it is a boundary term and can be dropped if we fix the perturbation on the boundary. The first nontrivial bulk contribution is the quadratic part.

To see the second-order part more explicitly, first write the Ricci scalar as

$$
R = g^{\mu\nu}R_{\mu\nu}
$$

Using the results above, we can obtain that

$$
\sqrt{-g}g^{\mu\nu}
= \eta^{\mu\nu}+\frac{1}{2}h\eta^{\mu\nu}-h^{\mu\nu}+O(h^{2})
$$

where

$$
R_{\mu\nu}
= \partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu}
- \partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}
+ \Gamma^{\lambda} {}_{\mu\nu}\Gamma^{\sigma} {}_{\lambda\sigma}
- \Gamma^{\sigma} {}_{\mu\lambda}\Gamma^{\lambda} {}_{\nu\sigma}
$$

Therefore

$$
\sqrt{-g}R
= \sqrt{-g}g^{\mu\nu}
\left(\partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu}
- \partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}\right)
+ \sqrt{-g}g^{\mu\nu}
\left(\Gamma^{\lambda} {}_{\mu\nu}\Gamma^{\sigma} {}_{\lambda\sigma}
- \Gamma^{\sigma} {}_{\mu\lambda}\Gamma^{\lambda} {}_{\nu\sigma}\right)
$$

Now integrate the derivative part by parts

$$
\sqrt{-g}g^{\mu\nu}\partial_{\lambda}\Gamma^{\lambda} {}_{\mu\nu}
= \partial_{\lambda}\left(\sqrt{-g}g^{\mu\nu}\Gamma^{\lambda} {}_{\mu\nu}\right)
- \Gamma^{\lambda} {}_{\mu\nu}\partial_{\lambda}\left(\sqrt{-g}g^{\mu\nu}\right)
$$

and

$$
-\sqrt{-g}g^{\mu\nu}\partial_{\nu}\Gamma^{\lambda} {}_{\mu\lambda}
= -\partial_{\nu}\left(\sqrt{-g}g^{\mu\nu}\Gamma^{\lambda} {}_{\mu\lambda}\right)
+ \Gamma^{\lambda} {}_{\mu\lambda}\partial_{\nu}\left(\sqrt{-g}g^{\mu\nu}\right)
$$

The first terms on the right hand side are total derivatives. Dropping these boundary terms, and using the metric compatibility relation to combine the remaining terms, the Einstein-Hilbert Lagrangian can be written in the equivalent gamma-gamma form

$$
\sqrt{-g}R
\doteq
-\sqrt{-g}g^{\mu\nu}
\left(\Gamma^{\lambda} {}_{\mu\nu}\Gamma^{\sigma} {}_{\lambda\sigma}
- \Gamma^{\sigma} {}_{\mu\lambda}\Gamma^{\lambda} {}_{\nu\sigma}\right)
$$

where $\doteq$ means equal up to a total derivative. Because each Christoffel symbol is already $O(h)$, to calculate the $O(h^{2})$ Lagrangian we only need to put $\sqrt{-g}g^{\mu\nu}\to\eta^{\mu\nu}$ and $\Gamma\to\Gamma^{(1)}$. Thus

$$
\mathcal{L}^{(2)}
= - \eta^{\mu\nu}
\left(\Gamma^{\lambda(1)} {}_{\mu\nu}\Gamma^{\sigma(1)} {}_{\lambda\sigma}
- \Gamma^{\sigma(1)} {}_{\mu\lambda}\Gamma^{\lambda(1)} {}_{\nu\sigma}\right)
$$

Now calculate the two pieces separately. First we have

$$
\Gamma^{\sigma(1)} {}_{\lambda\sigma}
= \frac{1}{2}\partial_{\lambda}h
$$

and

$$
\eta^{\mu\nu}\Gamma^{\lambda(1)} {}_{\mu\nu}
= \partial_{\mu}h^{\mu\lambda}-\frac{1}{2}\partial^{\lambda}h
$$

So the first product is

$$
\eta^{\mu\nu}\Gamma^{\lambda(1)} {}_{\mu\nu}\Gamma^{\sigma(1)} {}_{\lambda\sigma}
= \frac{1}{2}\partial_{\lambda}h\,\partial_{\mu}h^{\mu\lambda}
-\frac{1}{4}\partial_{\lambda}h\partial^{\lambda}h
$$

For the second product, we substitute the linearized Christoffel symbol

$$
\eta^{\mu\nu}\Gamma^{\sigma(1)} {}_{\mu\lambda}\Gamma^{\lambda(1)} {}_{\nu\sigma}
= \frac{1}{4}\eta^{\mu\nu}
\left(\partial_{\mu}h^{\sigma} {}_{\lambda}
+ \partial_{\lambda}h^{\sigma} {}_{\mu}
- \partial^{\sigma}h_{\mu\lambda}\right)
\left(\partial_{\nu}h^{\lambda} {}_{\sigma}
+ \partial_{\sigma}h^{\lambda} {}_{\nu}
- \partial^{\lambda}h_{\nu\sigma}\right)
$$

Expanding the product, using $h_{\mu\nu}=h_{\nu\mu}$, and relabeling dummy indices gives

$$
\eta^{\mu\nu}\Gamma^{\sigma(1)} {}_{\mu\lambda}\Gamma^{\lambda(1)} {}_{\nu\sigma}
= -\frac{1}{4}\partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
+ \frac{1}{2}\partial_{\lambda}h_{\mu\nu}\partial^{\nu}h^{\mu\lambda}
$$

Therefore

$$
\mathcal{L}^{(2)}
= - \frac{1}{4}\partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
+ \frac{1}{2}\partial_{\lambda}h_{\mu\nu}\partial^{\nu}h^{\mu\lambda}
- \frac{1}{2}\partial_{\lambda}h\,\partial_{\mu}h^{\mu\lambda}
+ \frac{1}{4}\partial_{\lambda}h\partial^{\lambda}h
$$

The second term is usually rewritten by integrating by parts twice. We have

$$
\int \dd[4]{x}\,\partial_{\lambda}h_{\mu\nu}\partial^{\nu}h^{\mu\lambda}
= -\int \dd[4]{x}\,h_{\mu\nu}\partial_{\lambda}\partial^{\nu}h^{\mu\lambda}
$$

Then integrate by parts once more and use the symmetry of $h_{\mu\nu}$

$$
-\int \dd[4]{x}\,h_{\mu\nu}\partial_{\lambda}\partial^{\nu}h^{\mu\lambda}
= \int \dd[4]{x}\,\partial_{\mu}h^{\mu\nu}\partial^{\lambda}h_{\lambda\nu}
$$

Also

$$
\partial_{\lambda}h\,\partial_{\mu}h^{\mu\lambda}
= \partial_{\mu}h^{\mu\nu}\partial_{\nu}h
$$

Thus the quadratic Lagrangian density is

$$
\mathcal{L}^{(2)}
= \frac{1}{4}
\left[
- \partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
+ 2\partial_{\mu}h^{\mu\nu}\partial^{\lambda}h_{\lambda\nu}
- 2\partial_{\mu}h^{\mu\nu}\partial_{\nu}h
+ \partial_{\lambda}h\partial^{\lambda}h
\right]
$$

Plugging this back into the action, we obtain

$$
S_{\text{EH}}^{(2)}
= \frac{1}{64\pi G}\int \dd[4]{x}
\left[
- \partial_{\lambda}h_{\mu\nu}\partial^{\lambda}h^{\mu\nu}
+ 2\partial_{\mu}h^{\mu\nu}\partial^{\lambda}h_{\lambda\nu}
- 2\partial_{\mu}h^{\mu\nu}\partial_{\nu}h
+ \partial_{\lambda}h\partial^{\lambda}h
\right]
$$

This is the Einstein-Hilbert action expanded around flat spacetime to second order in the perturbation.

### Problem 4

Please follow the steps on the class and the materials about GWs I sent to you to show that the $h_{+}$ and $h_{\times}$ produced by a nonrelativistic binary system can be written as

$$
h_{+}(t) = \frac{4(GM_{c})^{5/3}}{r} \left(\frac{\omega_{GW}}{2}\right)^{2/3} \frac{1+\cos^{2}\theta}{2} \cos(\omega_{GW} t_{\text{ret}} + 2 \varphi)
$$

$$
h_{\times}(t) = \frac{4(GM_{c})^{5/3}}{r} \left(\frac{\omega_{GW}}{2}\right)^{2/3} \cos\theta \sin(\omega_{GW} t_{\text{ret}} + 2 \varphi)
$$

where $t_{\text{ret}} = t - r$ and $M_{c}$ is the chirp mass.

#### Reference material

The chirp mass is defined as

$$
M_{c} = (\mu^{3} m^{2})^{1/5}
$$

---

For a weak and slow source, the quadrupole formula is

$$
h_{ij}^{TT}(t,\vec{x}) = \frac{2G}{r}\ddot{I}_{ij}^{TT}(t_{\text{ret}})
$$

where

$$
t_{\text{ret}} = t - r
$$

For a Newtonian binary, put the center of mass at the origin and choose the orbital plane to be the $x-y$ plane. Let $a$ be the separation between the two masses, $M=m_{1}+m_{2}$, and $\mu=m_{1}m_{2}/M$. We take the relative position to be

$$
\vec{x}(t) = a(- \sin \omega t, \cos \omega t, 0)
$$

Then the Newtonian quadrupole moment is

$$
I_{ij} = \mu x_{i}x_{j}
$$

The components which contain the time-dependent quadrupole are

$$
I_{xx} = \mu a^{2}\sin^{2}\omega t
$$

$$
I_{yy} = \mu a^{2}\cos^{2}\omega t
$$

$$
I_{xy} = -\mu a^{2}\sin\omega t\cos\omega t
$$

Taking two time derivatives gives

$$
\ddot{I}_{xx} = 2\mu a^{2}\omega^{2}\cos 2\omega t
$$

$$
\ddot{I}_{yy} = - 2\mu a^{2}\omega^{2}\cos 2\omega t
$$

$$
\ddot{I}_{xy} = 2\mu a^{2}\omega^{2}\sin 2\omega t
$$

Now suppose the observer is located in the direction

$$
\hat{n} = (\sin\theta\cos\varphi, \sin\theta\sin\varphi, \cos\theta)
$$

Choose the two transverse unit vectors

$$
\hat{e}_{\theta} = (\cos\theta\cos\varphi, \cos\theta\sin\varphi, -\sin\theta)
$$

$$
\hat{e}_{\varphi} = (-\sin\varphi, \cos\varphi, 0)
$$

With the polarization convention

$$
e^{+}_{ij} = e^{\theta}_{i}e^{\theta}_{j} - e^{\varphi}_{i}e^{\varphi}_{j}
$$

$$
e^{\times}_{ij} = e^{\theta}_{i}e^{\varphi}_{j} + e^{\varphi}_{i}e^{\theta}_{j}
$$

the two observed polarizations are obtained by projecting $h_{ij}^{TT}$ onto these two tensors

$$
h_{+} = \frac{1}{2}e^{+}_{ij}h_{ij}^{TT}
$$

$$
h_{\times} = \frac{1}{2}e^{\times}_{ij}h_{ij}^{TT}
$$

Since the polarization tensors are already transverse and traceless, we can contract them directly with $\ddot{I}_{ij}$.

Or we can use the form given by eq 3.72 in the textbook *Gravitational Waves*[^1]

$$
\begin{gathered}
h_{+}(t; \theta, \phi) = \frac{1}{r} \frac{G}{c^{4}}[
  \ddot{M}_{11}(\cos^{2} \phi - \sin^{2} \phi \cos^{2} \theta)
  + \ddot{M}_{22}(\sin^{2} \phi - \cos^{2} \phi \cos^{2} \theta)
  - \ddot{M}_{33} \sin^{2} \theta \\
  - \ddot{M}_{12} \sin 2\phi (1 + \cos^{2} \theta)
  + \ddot{M}_{13} \sin \phi \sin 2\theta
  + \ddot{M}_{23} \cos \phi \sin 2\theta]
\end{gathered}
$$

$$
h_{\times}(t; \theta, \phi) = \frac{1}{r} \frac{G}{c^{4}} \left[
  (\ddot{M}_{11} - \ddot{M}_{22}) \sin 2\phi \cos \theta
  + 2\ddot{M}_{12} \cos 2\phi \cos \theta
  - 2\ddot{M}_{13} \cos \phi \sin \theta
  + 2\ddot{M}_{23} \sin \phi \sin \theta
\right]
$$

This gives

$$
h_{+}(t) =
\frac{2G\mu a^{2}\omega^{2}}{r}(1+\cos^{2}\theta)
\cos(2\omega t_{\text{ret}} + 2\varphi)
$$

and

$$
h_{\times}(t) =
\frac{4G\mu a^{2}\omega^{2}}{r}\cos\theta
\sin(2\omega t_{\text{ret}} + 2\varphi)
$$

Now use the Kepler relation for a circular Newtonian binary

$$
\omega^{2} = \frac{GM}{a^{3}}
$$

Therefore

$$
G\mu a^{2}\omega^{2}
= G\mu (GM)^{2/3}\omega^{2/3}
= (GM_{c})^{5/3}\omega^{2/3}
$$

And the gravitational wave frequency is twice the orbital frequency

$$
\omega_{GW} = 2\omega
$$

Substituting this into the two polarizations, we finally obtain

$$
h_{+}(t) = \frac{4(GM_{c})^{5/3}}{r} \left(\frac{\omega_{GW}}{2}\right)^{2/3} \frac{1+\cos^{2}\theta}{2} \cos(\omega_{GW} t_{\text{ret}} + 2\varphi)
$$

$$
h_{\times}(t) = \frac{4(GM_{c})^{5/3}}{r} \left(\frac{\omega_{GW}}{2}\right)^{2/3} \cos\theta \sin(\omega_{GW} t_{\text{ret}} + 2\varphi)
$$

### Problem 5

Assuming we have a binary neutron star system, each with the mass equal to $M_{\odot}$. Initially their distance they rotate with each other in a circular orbit with their distance 0.1 AU. Please estimate how long they will coalesce with each other via gravitational radiation. (AU is the Sun-Earth distance, $M_{\odot}$ is the mass of the Sun).

For a circular binary, the Newtonian orbital energy is

$$
E = -\frac{Gm_{1}m_{2}}{2a}
$$

where $a$ is the separation between the two stars. The gravitational-wave energy loss for a circular orbit is

$$
P_{\text{quad}} = \frac{G}{5} \langle \dddot{Q}_{ij} \dddot{Q}_{ij} \rangle
$$

In this case, we can represent the energy loss in parameters of the circular orbit

$$
\dv{E}{t}
= -\frac{32}{5}\frac{G^{4}}{c^{5}}
\frac{m_{1}^{2}m_{2}^{2}(m_{1}+m_{2})}{a^{5}}
$$

Using $\dv{E}{t}=\dv{E}{a}\dv{a}{t}$, we get

$$
\dv{a}{t}
= -\frac{64}{5}\frac{G^{3}}{c^{5}}
\frac{m_{1}m_{2}(m_{1}+m_{2})}{a^{3}}
$$

Integrating from the initial separation $a_{0}$ to $0$ gives

$$
t_{\text{coal}} =
\frac{5}{256}
\frac{c^{5}a_{0}^{4}}{G^{3}m_{1}m_{2}(m_{1}+m_{2})}
$$

Here

$$
m_{1}=m_{2}=M_{\odot}
$$

so

$$
t_{\text{coal}} =
\frac{5}{512}
\frac{c^{5}a_{0}^{4}}{G^{3}M_{\odot}^{3}}
$$

The initial separation is

$$
a_{0}=0.1\mathrm{AU}=1.496\times 10^{10}\mathrm{m}
$$

Using

$$
G=6.674\times 10^{-11}\mathrm{m^{3}kg^{-1}s^{-2}}
$$

$$
c=2.998\times 10^{8}\mathrm{m/s}
$$

$$
M_{\odot}=1.988\times 10^{30}\mathrm{kg}
$$

we obtain

$$
t_{\text{coal}} \simeq 5.07\times 10^{20}\mathrm{s}
$$

Converting this to years,

$$
t_{\text{coal}} \simeq 1.61\times 10^{13}\mathrm{yr}
$$

So a binary neutron star system with initial separation $0.1\mathrm{AU}$ would take about $1.6\times 10^{13}$ years to coalesce by gravitational radiation, much longer than the current age of the universe.

[^1]: Maggiore, M. (2017). *Gravitational waves*. Oxford university press.
