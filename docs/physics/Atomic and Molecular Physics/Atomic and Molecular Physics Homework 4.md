# Atomic and Molecular Physics Homework 4

Chasse_neige

### Question1

A helium atom is excited from the ground state to the autoionizing state $2s4p$ by absorption of ultraviolet light. Assume the $2s$ electron moves in the unscreened Coulomb field of the nucleus and the $4p$ electron in the fully screened Coulomb field of $\frac{1}{r}$. 
**(a)** Obtain the energy of this autoionizing level and the corresponding wavelength of the UV radiation. 

The Hamiltonian is 
$$
H = H_{0} + H'
$$
where	
$$
H_{0} = - \frac{1}{2} \nabla_{r_{1}}^{2} - \frac{2}{r} - \frac{1}{2} \nabla_{r_{2}}^{2} - \frac{1}{r}
$$

$$
H' = \frac{1}{r_{12}}
$$

So the Schrödinger equation gives that the zero-order wavefunction takes the form of 
$$
\psi^{(0)} (r_{1}, r_{2}) = \psi_{2s}^{(Z = 2)} (r_{1}) \psi_{4p}^{(Z = 1)} (r_{2})
$$

$$
E^{(0)}_{n_{1} n_{2}} = - \frac{Z_{1}^{2}}{2 n_{1}^{2}} - \frac{Z_{2}^{2}}{2 n_{2}^{2}} = - \frac{4}{2^{2}} - \frac{1}{4^{2}} = - \frac{17}{16}
$$

So we get the zero-order energy
$$
E^{(0)}_{2s4p} = - \frac{17}{16} \mu c^{2} \alpha^{2} = - \frac{17}{16} \frac{m_{e} m_{p}}{m_{e} + m_{p}} c^{2} \alpha^{2} \approx -14.4481802 \text{eV}
$$
For the first-order perturbation of the energy, consider the perturbation of the Hamiltonian
$$
H' \psi = \Delta E \psi
$$
Let
$$
\psi = a u_{2s} (1) u_{4p} (2) + b u_{2s} (2) u_{4p} (1)
$$
and we'll get
$$
\begin{pmatrix}
J & K \\
K & J 
\end{pmatrix}
\begin{pmatrix}
a \\ b
\end{pmatrix} = \Delta E \begin{pmatrix}
a \\ b
\end{pmatrix}
$$
Where the parameters is the direct integral
$$
J = \frac{e^{2}}{4 \pi \epsilon_{0}} \iint u_{2s}^{*} (1) u_{2s} (1) \frac{1}{r_{12}} u_{4p}^{*}(2) u_{4p} (2) \, \dd[3]{r_{1}} \dd[3]{r_{2}}
$$
and the exchange integral
$$
K = \frac{e^{2}}{4 \pi \epsilon_{0}} \iint u_{2s}^{*} (1) u_{4p}^{*} (2) \frac{1}{r_{12}} u_{2s} (2) u_{4p} (1) \, \dd[3]{r_{1}} \dd[3]{r_{2}}
$$
Given that the factor $\frac{1}{r_{12}}$ can be expanded by the spherical harmonic functions
$$
\frac{1}{r_{12}} = \sum_{l = 0}^{\infty} \frac{r_{<}^{l}}{r_{>}^{l + 1}} P_{l} (\cos \theta_{12})
$$
Using the specific form of the radial wavefunction
$$
u_{2s} (r) = \frac{2}{a_{0}^{\frac{3}{2}}} \left(1 - \frac{r}{a_{0}} \right) e^{- \frac{r}{a_{0}}}
$$

$$
u_{4p} (r) =  \frac{1}{256 \sqrt{15} \, a_0^{\frac{3}{2}}} e^{- \frac{r}{4 a_{0}}} \; \frac{r}{a_0} \left( \frac{r^2}{a_0^2} - \frac{20r}{a_0} + 80 \right)
$$

Because these integrals are nearly impossible to be calculated by hand, so I'll use mathematica to give a numerical answer:

```mathematica
ClearAll["Global`*"]

R[Z_, n_, l_, r_] := Module[{rho, Nnorm}, rho = (2 Z r)/n;
   Nnorm = Sqrt[(2 Z/n)^3*(n - l - 1)!/(2 n*(n + l)!)];
   Nnorm*Exp[-rho/2]*rho^l*LaguerreL[n - l - 1, 2 l + 1, rho]];

SlaterIntegral[k_, Z1_, n1_, l1_, Z2_, n2_, l2_, Z3_, n3_, l3_, Z4_, 
   n4_, l4_] := 
  Module[{integrand, r1, r2, radialPart1, radialPart2, result}, 
   result = 
    Integrate[
     r1^2*R[Z1, n1, l1, r1]*
      R[Z3, n3, l3, 
       r1]*(Integrate[
         r2^2*R[Z2, n2, l2, r2]*
          R[Z4, n4, l4, r2]*(r2^k/r1^(k + 1)), {r2, 0, r1}] + 
        Integrate[
         r2^2*R[Z2, n2, l2, r2]*
          R[Z4, n4, l4, r2]*(r1^k/r2^(k + 1)), {r2, r1, 
          Infinity}]), {r1, 0, Infinity}, Assumptions -> {r1 > 0}];
   Return[result];];

Z2s = 2; n2s = 2; l2s = 0;
Z4p = 1; n4p = 4; l4p = 1;

J = SlaterIntegral[0, Z2s, n2s, l2s, Z4p, n4p, l4p, Z2s, n2s, l2s, 
   Z4p, n4p, l4p];

K = SlaterIntegral[1, Z2s, n2s, l2s, Z4p, n4p, l4p, Z4p, n4p, l4p, 
   Z2s, n2s, l2s];

Print[J];
Print[K];     
```

The script gives out that
$$
J = \frac{229829}{3906250} \frac{e^{2}}{4 \pi \epsilon_{0} a_{0}} \approx 1.60102 \text{eV}
$$
and
$$
K = \frac{8917952}{1220703125} \frac{e^{2}}{4 \pi \epsilon_{0} a_{0}} \approx 0.198795 \text{eV}
$$
So we can get that the first-order energy correction
$$
\Delta E_{1} = J + K \approx 0.0661418 \cdot \frac{e^{2}}{4 \pi \epsilon_{0} a_{0}} \approx 1.79981 \text{eV}\\
\Delta E_{2} = J - K \approx 0.0515306 \cdot \frac{e^{2}}{4 \pi \epsilon_{0} a_{0}} \approx 1.40222 \text{eV}
$$
So the energy for the this autoionizing level at singlet and triplet states are
$$
E_{\text{triplet}} = -12.6483699 \text{eV} \\
E_{\text{singlet}} = -13.0459601 \text{eV}
$$
For the ground state where the two electrons are at the $1s$ state, the energy is
$$
E^{(0)}_{1s^{2}} = - \frac{2^{2}}{1^{2}} \cdot \frac{m_{e} m_{p}}{m_{e} + m_{p}} c^{2} \alpha^{2} \approx -108.786298 \text{eV}
$$
while the first-order correction gives out that
$$
J = 34.0142328 \text{eV} \\
K = 0
$$
So the energy for the ground state is
$$
E_{ground} \approx -108.786298 \text{eV} + 34.0142328 \text{eV} \approx -74.772065 \text{eV}
$$
So the energy gap between the ground state and this exited state is
$$
\Delta E_{\text{triplet}} = E_{\text{triplet}} - E_{ground} = -12.6483699 \text{eV} + 74.772065 \text{eV} \approx 62.1236951 \text{eV} \\
\Delta E_{\text{singlet}} = E_{\text{singlet}} - E_{ground} = -13.045960 \text{eV} + 74.772065 \text{eV} \approx 61.726105 \text{eV}
$$
So the wavelength of the UV radiation are
$$
\lambda_{triplet} = \frac{hc}{\Delta E_{triplet}} \approx 19.96 \text{nm}\\
\lambda_{singlet} = \frac{hc}{\Delta E_{singlet}} \approx 20.09\text{nm}
$$
**(b)** Find the velocity of the electron emitted in the autoionizing process in which the autoionizing level $2s4p$ decays into a free electron and a $\ce{He+}$ ion in the ground state $1s$.  

For the $\ce{He+}$ ion in the ground state $1s$, the energy is
$$
E = - \frac{2^{2}}{2 \cdot 1^{2}} \cdot \frac{m_{e} m_{p}}{m_{e} + m_{p}} c^{2} \alpha^{2} \approx -54.39315 \text{eV}
$$
So the total energy of the emitted electron is
$$
\Delta E_{triplet} =  -12.6483699 \text{eV} + 54.39315 \text{eV} \approx 41.74478 \text{eV} \\
\Delta E_{\text{singlet}}= -13.045960 \text{eV} + 54.39315 \text{eV} \approx 41.34719 \text{eV}
$$
Therefore, the velocity of the emitted electron is
$$
v_{triplet} \approx 3.832 \times 10^{6} m/s \\
v_{singlet} \approx 3.814 \times 10^{6} m/s
$$

### Question2

Consider the ground state of zirconium which has a ground state’s term symbol of $^{3}\!F_{2}$. 
**(a)** Determine electron configuration of all 40 electrons of $\ce{Zr}$. 

Zirconium has atomic number $40$. 
$$
1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10} 4p^6
$$
The remaining $4$ electrons occupy the $5s$ and $4d$ orbitals. 
Because of the energetic closeness of 5s and 4d, and the extra stability of a filled or half‑filled 4d subshell, the ground‑state configuration is  
$$
[\text{Kr}]\,5s^2 4d^2
$$

Thus the complete ground‑state electron configuration of $\ce{Zr}$ is  
$$
1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10} 4p^6 5s^2 4d^2
$$

**(b)** According to the given term symbol, what are the spin angular momentum $S$, the orbital angular momentum $L$, and the total angular momentum $J$ for the ground state of $\ce{Zr}$?  

For a term symbol $^{2S+1}L_J$:  

- Spin multiplicity $2S+1 = 3 \Rightarrow S = 1$.  
- Orbital symbol $F \Rightarrow L = 3$.  
- Total angular momentum $J = 2$.

**(c)** Determine all possible values of $S$. Does the ground state of $\ce{Zr}$ meet the requirement of Hund’s first rule? Explain your answer. 

The valence electrons that determine the term are the two 4d electrons (the closed shells and the filled 5s subshell contribute $S = 0, L = 0$). 
For two electrons, the total spin quantum number $S$ can be  
$$
S = |s_1 - s_2|, |s_1 - s_2 + 1|, \dots, |s_1 + s_2|  = 0 \, \text{or} \, 1
$$

Hund’s first rule states that for a given electron configuration, the term with the highest multiplicity (largest $S$) lies lowest in energy. Here the ground state has $S = 1$ , which is the maximum possible $S$ for the $4d^{2}$ configuration.  

**(d)** Determine all possible values of $L$ by adding all the individual angular momenta $l_i$. Does the ground state of $\ce{Zr}$ meet the requirement of the second Hund's rule? Explain your answer.

Each $4d$ electron has orbital quantum number $l = 2$. The total orbital angular momentum $L$ can in principle take values from $|l_1 - l_2|$ to $l_1 + l_2$, 
$$
L = 0, 1, 2, 3, 4.
$$

However, or equivalent electrons (same $n, l$) the Pauli exclusion principle restricts the allowed $L$ values for each total $S$. For the two $4d$ electrons with parallel spins ($S = 1$), the allowed $L$ values are $L = 1, 2, 3$ (states symmetric in spin must be antisymmetric in orbital part, which removes $L = 0, 4$ for $S = 1$). Hund’s second rule states that for a given multiplicity, the term with the largest $L$ lies lowest. Given that $S = 1$, the allowed $L$ values are $1, 2, 3$; the largest is $L = 3$, and the ground state indeed has $L = 3$, which is in consistent with the Hund's second rule.

**(e)** Determine all possible values of the total angular momentum $J$ by coupling of $L$ and $S$. Does the ground state of $\ce{Zr}$ meet the requirement of the third Hund’s rule? Explain your answer.  

For a given $L$ and $S$, the total angular momentum $J$ takes values  
$$
J = |L - S|, |L - S| + 1, \dots, L + S.
$$
With $L = 3$ and $S = 1$:  
$$
J = 2, 3, 4.
$$

Hund’s third rule states:  

- For a subshell less than half filled, the level with the smallest $J$ is lowest.  
- For a subshell more than half filled, the level with the largest $J$ is lowest.  

The $4d$ subshell can hold 10 electrons; here it contains only 2 electrons, so it is less than half filled. Therefore the lowest energy term should have the smallest $J$: $J = |L - S| = 2$. The ground‑state term symbol $^{3}\!F_{2}$ indeed has $J = 2$.  

### Question3

<img src="./Atomic and Molecular Physics Homework 4.assets/image-20251207181019990.png" alt="image-20251207181019990" style="zoom:25%;" />

**(a)** For atoms or ions whose two valence electrons are in the same $p$-subshell ($p^2$). Consider the effects of $L-S$ and $j-j$ coupling. Write down the term symbols of the states (a), (b), ..., (m) in the picture below. Explain your answer.  (The parameter $\chi$ describes the strength of spin orbit coupling. A larger $\chi$ means a larger energy $H_2$ discussed in the lecture.)

For left side of the picture, the atomic number is quite low, so it's proper to describe these states using the effect of $L-S$ coupling. For the Silicon atoms, the valence electrons are the two $3p^{2}$ electrons. So the $p^2$ configuration gives rise to three terms due to electrostatic repulsion and the Pauli exclusion principle: $^3P$, $^1D$, and $^1S$.

According to the Hund's Rules, the ordering of the states are:

1. $^3P$ is the ground term (lowest energy).

2. Highest Orbital ($L$) for same $S$: $^1D$ is the next lowest.

3. $^1S$ is the highest energy term.

Considering the Fine Structure Spin-Orbit Splitting:

1. The $^3P$ term ($S=1, L=1$) splits into $J = 0, 1, 2$. For a less-than-half-filled shell, the lowest $J$ has the lowest energy. $^3P_0 < ^3P_1 < ^3P_2$.

2. The $^1D$ term ($S=0, L=2$) has only $J=2$: $^1D_2$.

3. The $^1S$ term ($S=0, L=0$) has only $J=0$: $^1S_0$.

So the energy order at low $\chi$ is  $^3P_0 < ^3P_1 < ^3P_2 < ^1D_2 < ^1S_0$.

$j-j$ Coupling Limit (Right Side):
The electrons couple their spin and orbital angular momenta individually ($j = l \pm s$). For $p$ electrons ($l=1$), $j$ can be $1/2$ or $3/2$.

1. $(1/2, 1/2)$: Both electrons in $j=1/2$. Lowest energy (spin-orbit favors lower $j$). Allowed $J$: 0.

2. $(3/2, 1/2)$: One in $j=3/2$, one in $j=1/2$. Intermediate energy. Allowed $J$: 1, 2.
3. $(3/2, 3/2)$: Both electrons in $j=3/2$. Highest energy. Allowed $J$: 0, 2.

States with the same total angular momentum $J$ do not cross (non-crossing rule).So  we can  connect the levels from left to right based on their energy order for each $J$.

1. $J=0$: Lowest ($^3P_0$) $\to$ Lowest ($1/2, 1/2$)$_0$. Highest ($^1S_0$) $\to$ Highest ($3/2, 3/2$)$_0$.
2. $J=1$: Only one state ($^3P_1$) $\to$ Middle group ($3/2, 1/2$)$_1$.
3. $J=2$: Lower ($^3P_2$) $\to$ Middle group ($3/2, 1/2$)$_2$. Higher ($^1D_2$) $\to$ Highest group ($3/2, 3/2$)$_2$.

According to the analysis above, we can get the assigned term symbols for the points given:

Left Side (L-S Coupling Region):

(a) $^1S_0$ : The highest energy term on the LHS.

(b) $^1D_2$ : The middle energy term.

(c) $^3 P$: The lowest energy term.

The bottom cluster originates from the $^3P$ term:

 (f) $^3P_0$ : The lowest level of the triplet.

(d) $^3P_2$ : The highest level of the triplet.

(e) $^3P_1$ : The middle level of the triplet.

Right Side (j-j Coupling Region): In $j-j$ coupling notation $(j_1, j_2)_J$

(i) $(3/2, 3/2)$ : The highest energy state.

(l) $(3/2, 1/2)$: The middle energy state.

(m) $(1/2, 1/2)$: The lowest energy state, connected to $^3 P_{0}$.

(g) $(3/2, 3/2)_{0}$: The highest state, connected to $^1 S_{0}$.

(h) $(3/2, 3/2)_2$ : The second highest state, connected to $^1D_2$.

(j) $(3/2, 1/2)_2$ : The upper state of the middle group ($J=2$), connected to $^3P_2$.

(k) $(3/2, 1/2)_1$ : The lower state of the middle group ($J=1$), connected to $^3P_1$.





