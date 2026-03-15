# General Relativity Homework 2

Chasse_neige

## Problem 1

Suppose $T^{\mu}{}_{\rho\sigma}$ is a tensor under the general coordinate transformation. Please show that 
$$
T^{\mu} {}_{\rho\sigma;\nu} \equiv T^{\mu} {}_{\rho\sigma,\nu} + \Gamma^{\mu} {}_{\nu\tau} T^{\tau} {}_{\rho\sigma} - \Gamma^{\kappa} {}_{\rho\nu} T^{\mu} {}_{\kappa\sigma} - \Gamma^{\kappa} {}_{\sigma\nu} T^{\mu} {}_{\rho\kappa}
$$
 is also a tensor under general coordinate transformation.

#### Transformation Rule for Christoffel Symbol

Given that the Christoffel Symbol’s transformation rule is
$$
\Gamma'^{\lambda} {}_{\rho \sigma} = \pdv{x^{\prime \lambda}}{\xi^{\alpha}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\prime \rho} \partial x^{\prime \sigma}} = \pdv{x^{\prime \lambda}}{x^{\kappa}} \pdv{x^{\kappa}}{\xi^{\alpha}} \pdv{}{x^{\prime \rho}} \left(\pdv{\xi^{\alpha}}{x^{\nu}} \pdv{x^{\nu}}{x^{\prime \sigma}}\right) \\ =
\pdv{x^{\prime \lambda}}{x^{\kappa}} \pdv{x^{\kappa}}{\xi^{\alpha}} \left(\pdv{\xi^{\alpha}}{x^{\nu}} \frac{\partial^{2} x^{\nu}}{\partial x'^{\rho} \partial x'^{\sigma}} + \pdv{x^{\mu}}{x'^{\rho}} \pdv{x^{\nu}}{x'^{\sigma}} \frac{\partial^{2} \xi^{\alpha}}{\partial x^{\mu} \partial x^{\nu}}\right) \\ =
\pdv{x^{\prime \lambda}}{x^{\kappa}} \pdv{x^{\mu}}{x'^{\rho}} \pdv{x^{\nu}}{x'^{\sigma}} \Gamma^{\kappa} {}_{\mu \nu} + \pdv{x^{\prime \lambda}}{x^{\kappa}} \frac{\partial^{2} x^{\kappa}}{\partial x'^{\rho} \partial x'^{\sigma}}
$$
#### Tensor after Transformation

After transformation, the tensor will give out 4 parts.
$$
T'^{\lambda} {}_{\alpha \beta;\gamma} \equiv \underbrace{T'^{\lambda} {}_{\alpha\beta,\gamma}}_{\text{Part 1}} + \underbrace{\Gamma'^{\lambda} {}_{\gamma\kappa} T'^{\kappa} {}_{\alpha\beta}}_{\text{Part 2}} - \underbrace{\Gamma'^{\eta} {}_{\alpha\gamma} T'^{\lambda} {}_{\eta \beta}}_{\text{Part 3}} - \underbrace{\Gamma'^{\epsilon} {}_{\gamma\beta} T'^{\lambda} {}_{\alpha \epsilon}}_{\text{Part 4}}
$$
To deal with this complex tensor, we’ll analyse it one part after another. 

#### The first part

$$
T'^{\lambda} {}_{\alpha \beta, \gamma} = \pdv{}{x'^{\gamma}} \left(\pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\mu} {}_{\rho \sigma}\right) \\ =
\frac{\partial^{2} x'^{\lambda}}{\partial x^{\eta} \partial x^{\tau}} \pdv{x^{\eta}}{x'^{\gamma}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\tau} {}_{\rho \sigma} \quad \text{(Term 1)} \\
+ \frac{\partial^{2} x^{\rho}}{\partial x'^{\gamma} \partial x'^{\alpha}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\mu}{}_{\rho \sigma} \quad \text{(Term 2)} \\ 
+ \frac{\partial^{2} x^{\sigma}}{\partial x'^{\lambda} \partial x'^{\beta}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} T^{\mu} {}_{\rho \sigma} \quad \text{(Term 3)} \\ 
+ \pdv{x^{\nu}}{x'^{\gamma}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\mu} {}_{\rho \sigma, \nu} \quad \text{(Term 4)}
$$
gives out 4 terms, and I’ll show in detail how the first three cancel with the $\Gamma$ parts’ extra terms.

#### The second part

$$
\Gamma'^{\lambda} {}_{\gamma \kappa} T'^{\kappa} {}_{\alpha \beta} = \left(\pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\nu}}{x'^{\gamma}} \pdv{x^{\tau}}{x'^{\kappa}} \Gamma^{\mu} {}_{\nu \tau} +  \frac{\partial^{2} x^{\zeta}}{\partial x'^{\gamma} \partial x'^{\kappa}} \pdv{x'^{\lambda}}{x^{\zeta}} \right) \pdv{x'^{\kappa}}{x^{\tau}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\tau} {}_{\rho \sigma} \\ = 
\pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\nu}}{x'^{\gamma}} \pdv{x^{\tau}}{x'^{\kappa}} \pdv{x'^{\kappa}}{x^{\tau}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} \Gamma^{\mu} {}_{\nu \tau} T^{\tau} {}_{\rho \sigma} + \frac{\partial^{2} x^{\zeta}}{\partial x'^{\gamma} \partial x'^{\kappa}} \pdv{x'^{\lambda}}{x^{\zeta}} \pdv{x'^{\kappa}}{x^{\tau}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\tau} {}_{\rho \sigma}
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
\pdv{}{x^{\tau}} \left(\pdv{x'^{\lambda}}{x^{\eta}} \pdv{x^{\eta}}{x'^{\gamma}}\right) \\ =
\frac{\partial^{2} x'^{\lambda}}{\partial x^{\tau} \partial x^{\eta}} \pdv{x^{\eta}}{x'^{\gamma}} + \frac{\partial^{2} x^{\eta}}{\partial x'^{\gamma} \partial x'^{\kappa}} \pdv{x'^{\kappa}}{x^{\tau}} \pdv{x'^{\lambda}}{x^{\eta}} = 0
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
T'^{\lambda} {}_{\alpha \beta;\gamma} \equiv \underbrace{T'^{\lambda} {}_{\alpha\beta,\gamma}}_{\text{Part 1}} + \underbrace{\Gamma'^{\lambda} {}_{\gamma\kappa} T'^{\kappa} {}_{\alpha\beta}}_{\text{Part 2}} - \underbrace{\Gamma'^{\eta} {}_{\alpha\gamma} T'^{\lambda} {}_{\eta \beta}}_{\text{Part 3}} - \underbrace{\Gamma'^{\epsilon} {}_{\gamma\beta} T'^{\lambda} {}_{\alpha \epsilon}}_{\text{Part 4}} \\ =
\pdv{x^{\nu}}{x'^{\gamma}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} T^{\mu} {}_{\rho \sigma, \nu} + \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\nu}}{x'^{\gamma}} \pdv{x^{\tau}}{x'^{\kappa}} \pdv{x'^{\kappa}}{x^{\tau}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\sigma}}{x'^{\beta}} \Gamma^{\mu} {}_{\nu \tau} T^{\tau} {}_{\rho \sigma} \\ -
\pdv{x'^{\epsilon}}{x^{\kappa}} \pdv{x^{\sigma}}{x'^{\gamma}} \pdv{x'^{\beta}}{x^{\nu}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\kappa}}{x'^{\epsilon}} \Gamma^{\kappa} {}_{\sigma\nu} T^{\mu} {}_{\rho\kappa} - \pdv{x'^{\epsilon}}{x^{\kappa}} \pdv{x^{\sigma}}{x'^{\gamma}} \pdv{x'^{\beta}}{x^{\nu}} \pdv{x'^{\lambda}}{x^{\mu}} \pdv{x^{\rho}}{x'^{\alpha}} \pdv{x^{\kappa}}{x'^{\epsilon}} \Gamma^{\kappa} {}_{\sigma\nu} T^{\mu} {}_{\rho\kappa}
$$
is a tensor under general coordinate transformation.

## Problem 2

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
\partial'_{\mu} \Gamma'^{\rho}{}_{\nu\sigma} = 
\pdv{x^{\delta}}{x'^{\mu}} \frac{\partial^{2} x'^{\rho}}{\partial x^{\delta} \partial x^{\alpha}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term 1)} \\
+ \pdv{x'^{\rho}}{x^{\alpha}} \frac{\partial^{2} x^{\beta}}{\partial x'^{\mu} \partial x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term 2)} \\
+ \pdv{x'^{\rho}}{x^{\alpha}} \pdv{x^{\beta}}{x'^{\nu}} \frac{\partial^{2} x^{\gamma}}{\partial x'^{\mu} \partial x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term 3)} \\
+ \pdv{x'^{\rho}}{x^{\alpha}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \pdv{x^{\delta}}{x'^{\mu}} \partial_{\delta} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term 4)} \\
+ \pdv{x^{\delta}}{x'^{\mu}} \frac{\partial^{2} x'^{\rho}}{\partial x^{\delta} \partial x^{\alpha}} \frac{\partial^{2} x^{\alpha}}{\partial x'^{\nu} \partial x'^{\sigma}} \quad \text{(Term 5)} \\
+ \pdv{x'^{\rho}}{x^{\alpha}} \frac{\partial^{3} x^{\alpha}}{\partial x'^{\mu} \partial x'^{\nu} \partial x'^{\sigma}} \quad \text{(Term 6)}
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
\Gamma'^{\rho}{}_{\mu\lambda} \Gamma'^{\lambda}{}_{\nu\sigma} = 
\pdv{x'^{\rho}}{x^{\epsilon}} \pdv{x^{\zeta}}{x'^{\mu}} \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\epsilon}{}_{\zeta\alpha} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term A)} \\
+ \pdv{x'^{\rho}}{x^{\epsilon}} \pdv{x^{\zeta}}{x'^{\mu}} \frac{\partial^{2} x^{\alpha}}{\partial x'^{\nu} \partial x'^{\sigma}} \Gamma^{\epsilon}{}_{\zeta\alpha} \quad \text{(Term B)} \\
+ \left( \pdv{x'^{\rho}}{x^{\epsilon}} \frac{\partial^{2} x^{\epsilon}}{\partial x'^{\mu} \partial x'^{\lambda}} \pdv{x'^{\lambda}}{x^{\alpha}} \right) \pdv{x^{\beta}}{x'^{\nu}} \pdv{x^{\gamma}}{x'^{\sigma}} \Gamma^{\alpha}{}_{\beta\gamma} \quad \text{(Term C)} \\
+ \left( \pdv{x'^{\rho}}{x^{\epsilon}} \frac{\partial^{2} x^{\epsilon}}{\partial x'^{\mu} \partial x'^{\lambda}} \pdv{x'^{\lambda}}{x^{\alpha}} \right) \frac{\partial^{2} x^{\alpha}}{\partial x'^{\nu} \partial x'^{\sigma}} \quad \text{(Term D)}
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