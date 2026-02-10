# Atomic and Molecular Physics Homework 2

Chasse_neige

### Question 1

**a)** A two-level quantum state can be represented by
$$
|\psi\rangle = \cos\left(\frac{\theta}{2}\right) |0\rangle + e^{i\phi} \sin\left(\frac{\theta}{2}\right) |1\rangle.
$$

Show that the density matrix $\rho = |\psi\rangle\langle\psi|$ can be written as $\rho = \frac{1}{2} (I + \mathbf{a} \cdot \boldsymbol{\sigma})$ where $\boldsymbol{\sigma} = (\sigma_1, \sigma_2, \sigma_3)$ ($\sigma_{1,2,3}$ being the Pauli matrices) and $\mathbf{a} = (\sin\theta \cos\phi, \sin\theta \sin\phi, \cos\theta)$.
$$
\rho = \ket{\psi} \bra{\psi} = \left(  \cos\left(\frac{\theta}{2}\right) |0\rangle + e^{i\phi} \sin\left(\frac{\theta}{2}\right) |1\rangle \right) \left( \cos\left(\frac{\theta}{2}\right) \bra{0} + e^{- i\phi} \sin\left(\frac{\theta}{2}\right) \bra{1} \right) \\ =
\cos^{2} \frac{\theta}{2} \ket{0} \bra{0} + \sin^{2} \frac{\theta}{2} \ket{1} \bra{1}  + \sin \frac{\theta}{2} \cos \frac{\theta}{2} \left(e^{i \phi} \ket{1} \bra{0} + e^{- i \phi} \ket{0} \bra{1}\right) \\ =
\cos^{2} \frac{\theta}{2} \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + \sin^{2} \frac{\theta}{2} \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} + \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{i \phi} \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} + \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{- i \phi} \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \\ =
\begin{pmatrix} \cos^{2} \frac{\theta}{2} & \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{- i \phi} \\ \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{i \phi} &  \sin^{2} \frac{\theta}{2} \end{pmatrix}
$$
While the density matrix can also be represented as
$$
\rho = \frac{1}{2} (I + \mathbf{a} \cdot \boldsymbol{\sigma}) = \frac{1}{2} (I + \sin \theta \cos \phi \sigma_{1} + \sin \theta \sin \phi \sigma_{2} + \cos \theta \sigma_{3}) \\ =
\frac{1}{2} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + \frac{1}{2} \sin \theta \cos \phi \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + \frac{1}{2} \sin \theta \sin \phi \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix} + \frac{1}{2} \cos \theta \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \\ =
\begin{pmatrix} \frac{1}{2} (1 + \cos \theta) & \frac{1}{2} \sin \theta (\cos \phi - i \sin \phi) \\ \frac{1}{2} \sin \theta (\cos \phi + i \sin \phi) & \frac{1}{2} (1 - \cos \theta) \end{pmatrix}  = \begin{pmatrix} \cos^{2} \frac{\theta}{2} & \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{- i \phi} \\ \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{i \phi} &  \sin^{2} \frac{\theta}{2} \end{pmatrix}
$$
So the density matrix can be written as  $\rho = \frac{1}{2} (I + \mathbf{a} \cdot \boldsymbol{\sigma})$ 

**b)** A two-level system coupled by a radiation of frequency $\omega$ is governed by the Hamiltonian 
$$
H = H_0 + V = \frac{\hbar\omega_0}{2} (|1\rangle\langle 1| - |0\rangle\langle 0|) + \frac{\hbar\Omega}{2} (e^{+i\omega t} |0\rangle\langle 1| + e^{-i\omega t} |1\rangle\langle 0|)
$$
 in the Schrödinger picture and under the rotating-wave approximation. Show that a state represented by Bloch vector $\mathbf{a}$ evolves as
$$
\frac{d\mathbf{a}}{dt} = \mathbf{W}' \times \mathbf{a}
$$

where $\mathbf{W}' = (\Omega_0 \cos\omega t, -\Omega_0 \sin\omega t, -\omega_0)$.

Write the Hamiltonian in terms of the Pauli Matrices 
$$
\ket{1} \bra{1} = \frac{1}{2}(I - \sigma_{3}) \\
\ket{0} \bra{0} = \frac{1}{2}(I + \sigma_{3}) \\
\ket{1} \bra{0} = \frac{1}{2}(\sigma_{1} - i \sigma_{2}) \\
\ket{0} \bra{1} = \frac{1}{2}(\sigma_{1} + i \sigma_{2})
$$

So the Hamiltonian can be represented as
$$
H = \frac{\hbar\omega_0}{2} (|1\rangle\langle 1| - |0\rangle\langle 0|) + \frac{\hbar\Omega}{2} (e^{+i\omega t} |0\rangle\langle 1| + e^{-i\omega t} |1\rangle\langle 0|) \\ =
- \frac{\hbar \omega_{0}}{2} \sigma_{3} + \frac{\hbar \Omega}{2} (e^{i \omega t} \frac{1}{2}(\sigma_{1} + i \sigma_{2}) + e^{ -i \omega t} \frac{1}{2}(\sigma_{1} - i \sigma_{2})) \\ =
- \frac{\hbar \omega_{0}}{2} \sigma_{3} + \frac{\hbar \Omega}{2} \sigma_{1} \cos \omega t  - \frac{\hbar \Omega}{2} \sigma_{2} \sin \omega t = \frac{\hbar}{2} \vec{W'} \cdot \vec{\sigma}
$$
Calculate the evolvement of the density matrix
$$
\dv{\rho}{t} = \frac{1}{i \hbar} \comm{H}{\rho} = \frac{1}{i \hbar} \comm{\frac{\hbar}{2} \vec{W'} \cdot \vec{\sigma}}{\frac{1}{2}(I + \vec{a} \cdot \vec{\sigma})} = \frac{1}{4 i} \comm{\vec{W'} \cdot \vec{\sigma}}{\vec{a} \cdot \vec{\sigma}} \\
= \frac{1}{4 i} \sum_{i,j} W'_{i} a_{j} \comm{\sigma_{i}}{\sigma_{j}} = \frac{1}{2} \sum_{i,j,k} W'_{i} a_{j} \epsilon_{ijk} \sigma_{k} = \frac{1}{2} (\vec{W'} \times \vec{a}) \cdot \vec{\sigma}
$$
Under the Schrödinger picture, the Pauli Matrices vector is an invariant, so the time derivative of the density matrix is
$$
\dv{\rho}{t} = \frac{1}{2} \dv{\vec{a}}{t} \cdot \vec{\sigma}
$$
 Compare the last two representations of $\dv{\rho}{t}$, we'll get that
$$
\dv{\vec{a}}{t} = \vec{W'} \times \vec{a}
$$

**c)** Going to the rotating frame $|\psi\rangle \to |\psi_R\rangle = U |\psi\rangle$ where $|\psi\rangle$ represents the solution of the Hamiltonian in (b) and $U = |0\rangle\langle 0| + e^{+i\omega t} |1\rangle\langle 1|$. Find the new Hamiltonian $H_R$ in the rotating frame. Make use of your results in (b) or repeat the above calculation, find the corresponding $\mathbf{W}'$ in the interaction frame. Do your results agree with what we obtain from physical arguments in the lecture?

Under the rotating frame basis
$$
\ket{\psi_{R}} = U \ket{\psi}
$$
So the new Hamiltonian can be represented as
$$
i \hbar \pdv{\ket{\psi_{R}}}{t} = H_{R} \ket{\psi_{R}} \\
U H \ket{\psi} + i \hbar \dot{U} \ket{\psi} = H_{R} U \ket{\psi}
$$
Therefore
$$
H_{R} = U H U^{\dagger} + i \hbar \dot{U}  U^{\dagger} \\ =
(\ket{0} \bra{0} + e^{i \omega t} \ket{1} \bra{1}) (\frac{\hbar\omega_0}{2} (|1\rangle\langle 1| - |0\rangle\langle 0|) + \frac{\hbar\Omega}{2} (e^{+i\omega t} |0\rangle\langle 1| + e^{-i\omega t} |1\rangle\langle 0|)) (\ket{0} \bra{0} + e^{- i \omega t} \ket{1} \bra{1}) \\ + 
i \hbar (i \omega e^{i \omega t} \ket{1} \bra{1}) (\ket{0} \bra{0} + e^{- i \omega t} \ket{1} \bra{1}) \\ =
\frac{\hbar\omega_0}{2} (|1\rangle\langle 1| - |0\rangle\langle 0|) + \frac{\hbar\Omega}{2} (|0\rangle\langle 1| + |1\rangle\langle 0|)) - \hbar \omega \ket{1} \bra{1}
$$
Transfer the Hamiltonian in terms of the Pauli Matrices
$$
H_{R} = -\frac{\hbar (\omega - \omega_{0})}{2} \sigma_{3} + \frac{\hbar \Omega}{2} \sigma_{1} + \frac{\hbar \omega}{2} I = \frac{\hbar}{2} \vec{W'_{R}} \cdot \vec{\sigma} + \frac{\hbar \omega}{2} I
$$
where $\vec{W'_{R}} = \begin{pmatrix} \Omega, 0, \omega - \omega_{0} \end{pmatrix}$

Because the identity matrix produces nothing in the commutator, so we can just use 
$$
H'_{R} = \frac{\hbar}{2} \vec{W'_{R}} \cdot \vec{\sigma}
$$
in the calculation of the evolvement of the density matrix. Similarly, a state represented by Bloch vector $\mathbf{a}$ evolves as
$$
\dv{\vec{a}_{R}}{t} = \vec{W'_{R}} \times \vec{a}_{R}
$$

### Question 2

**a)** Calculate relative transition strengths of the $5S_{1/2} |F=2, m_F=2\rangle$ to $5P_{3/2} |F=3, m_F=2\rangle$ transition and of the $5S_{1/2} |F=2, m_F=1\rangle$ to $5P_{3/2} |F=2, m_F=1\rangle$. Do not use $6-j$ or $9-j$ formula given in Daniel Steck notes. Try to dissect $F$ into $J+I$, and then into $L+S+I$ step by step, obtaining the relevant Clebsch-Gordan coefficient using Mathematica or other means. Doing so would help you appreciate the details. (Note: the absolute values of your results may differ from those in the tables, but the relative value must be the same.) Using the experience you obtain from this exercise, can you see why $\Delta F=0,\pm1$ and $\Delta J=0,\pm1$ for electric dipole transition? Can spin-orbit coupling and hyperfine interaction alter the selection rules for $L$, i.e. $\Delta L=\pm1$? (In other words, is it possible to have, say, $2p-3p$ electric-dipole transition after we include spin-orbit coupling and hyperfine interactions?)

First, try to represent the state $5S_{1/2} |F=2, m_F=2\rangle$ and $5P_{3/2} |F=3, m_F=2\rangle$ in terms of the  $L+S+I$ states using the C-G coefficients 
$$
\ket{F = 2, m_{F} = 2} = \ket{L = 0, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}}
$$

$$
\ket{F = 3, m_{F} = 2} = \frac{1}{\sqrt{3}} \ket{L = 1, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}} \\ +
\frac{1}{\sqrt{6}} \ket{L = 1, m_{L} = 1} \otimes \ket{S = \frac{1}{2}, m_{S} = - \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}} \\ +
\frac{1}{\sqrt{2}} \ket{L = 1, m_{L} = 1} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{1}{2}}
$$

So the relative electric dipole transition strength between the two states can be represented as 
$$
\bra{F = 3, m_{F} = 2} e \hat{r} \cdot \vec{E} \ket{F = 2, m_{F} = 2} = \frac{1}{\sqrt{3}} \bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0}
$$
Similarly, also expand the $5S_{1/2} |F=2, m_F=1\rangle$ and $5P_{3/2} |F=2, m_F=1\rangle$ 
$$
\ket{F = 2, m_{F} = 1} = \frac{1}{2} \ket{L = 0, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = - \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}} \\ + 
\frac{\sqrt{3}}{2} \ket{L = 0, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{1}{2}}
$$

$$
\ket{F = 2, m_{F} = 1} = \frac{1}{2 \sqrt{3}} \ket{L = 1, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = - \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}} \\ -
\frac{1}{\sqrt{6}} \ket{L = 1, m_{L} = - 1} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}} \\ -
\frac{1}{2} \ket{L = 1, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{1}{2}} \\ +
\frac{1}{\sqrt{2}} \ket{L = 1, m_{L} = 1} \otimes \ket{S = \frac{1}{2}, m_{S} = - \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{1}{2}} 
$$

So the relative electric dipole transition strength between the two states can be represented as 
$$
\bra{F = 2, m_{F} = 1} e \hat{r} \cdot \vec{E} \ket{F = 2, m_{F} = 1} = \frac{1}{4 \sqrt{3}} \bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0} \\ - \frac{\sqrt{3}}{4} \bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0} \\ =
- \frac{1}{2 \sqrt{3}} \bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0}
$$
The relative transition strength
$$
\frac{Strength_{1}}{Srength_{2}} = \abs{\frac{\frac{1}{\sqrt{3}} \bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0}}{- \frac{1}{2 \sqrt{3}}\bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0}}}^{2} = 4
$$

##### Explain why $\Delta F=0,\pm1$ and $\Delta J=0,\pm1$ for electric dipole transition.

From the expanding of Clebsch-Gordan Coefficients we can see that when the electric dipole transition strength is non-zero, those part of the spin (electrons and nucleus) should stay the same before and after the transition. So the difference between the good quantum numbers, take $J$  and $J'$, should be the in the interval as the difference between $|L \pm S|$ and $|L' \pm S'|$ for $S, m_{S}$ stays invariant. Remember that the selection rules for electric dipole transition demands that $\Delta L = \pm 1$, so we can say that $\Delta J =0, \pm 1$ (according to Wigner-Eckart Theorem). As for those circumstances while the good quantum number is $F$, the logic behind $\Delta F = 0, \pm 1$ is the same. As $I, m_{I}$  won't change before and after the transition, $\Delta F$ should obey the same rules as $\Delta J$.

##### Can spin-orbit coupling and hyperfine interaction alter the selection rules for $L$, i.e. $\Delta L=\pm1$? 

No, they can't. Spin-orbit coupling and hyperfine interaction (nucleus-electron coupling) will add an extra $\Delta H$ in the Hamiltonian in the form of
$$
\Delta H = C \left(\frac{1}{2}(L_{+} S_{+} + L_{-} S_{-}) + L_{z} S_{z}\right)
$$
or
$$
\Delta H = A \left(\frac{1}{2}(J_{+} I_{+} + J_{-} I_{-}) + J_{z} I_{z}\right)
$$
But the electric dipole operator acts only on the orbital part of the wavefunction and does not depend on spin or nuclear spin. Thus, the matrix element $\langle L_f | e \hat{r} \cdot \vec{E} | L_i \rangle$ must satisfy $\Delta L = \pm 1$ because it is a tensor operator of rank 1 in orbital angular momentum space (as the consequence of Wigner-Eckart Theorem).So even when states are labeled by $J$ or $F$ due to spin-orbit or hyperfine interactions, the orbital selection rule $\Delta L = \pm 1$ remains strict because the spin-orbit coupling or the hyperfine interactions won't affect the behavior of the orbit part of the wave function in the dipole matrix. When  $\Delta L = 0$,  the dipole matrix $\bra{J_{f}} e \hat{r} \cdot \vec{E} \ket{J_{i}}$ or   $\bra{F_{f}} e \hat{r} \cdot \vec{E} \ket{F_{i}}$ remains zero.

**b)** Using the Rb87 $5S_{1/2}$–$5P_{3/2}$ dipole matrix elements given in the tables below (do not calculate), check that the radiative lifetime of $5P_{3/2} |F=2, m_F=1\rangle$, $5P_{3/2} |F=1, m_F=0\rangle$, and $5P_{3/2} |F=3, m_F=3\rangle$ Zeeman sublevels are the same. Assuming for the time being that the spontaneous-emission transition rate between any two-states is proportional to the square of their dipole-matrix element.

Suppose that the spontaneous-emission transition rate between any two-states is proportional to the square of their dipole-matrix element. So for the $5P_{3/2} |F=2, m_F=1\rangle$ state, the spontaneous-emission transition rate is proportional to
$$
\frac{1}{8}, \frac{1}{8} \quad (\sigma^{-} \text{transitions}) \\
\frac{1}{24}, \frac{1}{8} \quad (\pi \text{transitions}) \\
\frac{1}{12} \quad (\sigma^{+} \text{transitions}) \\
$$
So the total transition rate is proportional to $\frac{1}{2}$.

For the $5P_{3/2} |F=1, m_F=0\rangle$ state, the spontaneous-emission transition rate is proportional to
$$
\frac{1}{40}, \frac{5}{24} \quad (\sigma^{-} \text{transitions}) \\
\frac{1}{30}, 0 \quad (\pi \text{transitions}) \\
\frac{1}{40}, \frac{5}{24} \quad (\sigma^{+} \text{transitions}) \\
$$
So the total transition rate is proportional to $\frac{1}{2}$.

For the $5P_{3/2} |F=3, m_F=3\rangle$ state, the spontaneous-emission transition rate is proportional to
$$
\frac{1}{2} \quad (\sigma^{-} \text{transitions}) 
$$
So the total transition rate is proportional to $\frac{1}{2}$.

Above showed that the radiative lifetime of $5P_{3/2} |F=2, m_F=1\rangle$, $5P_{3/2} |F=1, m_F=0\rangle$, and $5P_{3/2} |F=3, m_F=3\rangle$ Zeeman sublevels are the same. 

<img src="./Atomic and Molecular Physics Homework 2.assets/image-20251021103426814.png" alt="image-20251021103426814">

<img src="./Atomic and Molecular Physics Homework 2.assets/image-20251021103445261.png" alt="image-20251021103445261">

<img src="./Atomic and Molecular Physics Homework 2.assets/image-20251021103505831.png" alt="image-20251021103505831">

### Question 3

The graphs on the right show the Zeeman shift of the $5S_{1/2}$ and $5P_{3/2}$ hyperfine levels of Rb87.

**a)** Considering the $5S_{1/2}$ hyperfine levels, discuss the transition selection rules near zero magnetic fields.

Transitions within the $5S_{1/2}$ state are magnetic dipole transitions. The selection rules for magnetic dipole transitions are:

- $\Delta F = 0, \pm 1$ (but $F=0 \to F=0$ is forbidden).
- $\Delta m_F = 0, \pm 1$.

So all magnetic transitions between the  $5S_{1/2}$ hyperfine levels are allowed.

**b)** An experimenter prepares a quantum state in the $5S_{1/2} |F=1, m_F=-1\rangle$ eigenstate. He then adiabatically sweeps the external magnetic field to 10000 G. After that he would like to transfer the atomic state to all other states in the $5S_{1/2}$ manifold using Rabi transitions. Discuss in detail how he could achieve that? For each transition, specify the polarization of the field he should use.

Because the experimenter want to have transitions within the $5S_{1/2}$ state, he have to use magnetic dipole transitions. For magnetic dipole Transitions,
$$
W = (g_{J} \vec{J} + g_{I} \vec{I}) \cdot \vec{B} \cos \omega t
$$

$$
(g_{J} \vec{J} + g_{I} \vec{I}) \cdot \vec{B} \cos \omega t  = g_{J} (B_{+}^{*} J_{+} + B_{z} J_{z} + B_{z}^{*} J_{-}) + g_{I} (B_{+}^{*} I_{+} + B_{z} I_{z} + B_{-}^{*} I_{-})
$$

Under high magnetic field like 10000G, the hyperfine structure of the $5S_{1/2}$ states of the Rb87 atoms can be represented in basis of $\ket{J} \otimes \ket{I}$. So using the selection rules for magnetic dipole transitions, we can deduce that the possible transition will take place when $\Delta L = 0$, $\Delta I = 0, \pm1$, $\Delta J = 0, \pm 1$. 

The state $5S_{1/2} |F=1, m_F=-1\rangle$ will change into 
$$
\ket{m_{J} = - \frac{1}{2}, m_{I} = - \frac{1}{2}}
$$
under high magnetic field. So we can design sequence of transitions to all states as follows:

1.From initial $|m_J = -1/2, m_I = -1/2\rangle$ to $|m_J = 1/2, m_I = -1/2\rangle$

- Type: Electron spin flip ($\Delta m_J = +1$, $\Delta m_I = 0$)  
- Polarization: $\sigma^+$  
- This transition directly populates $|m_J = 1/2, m_I = -1/2\rangle$.

2.From initial $|m_J = -1/2, m_I = -1/2\rangle$ to $|m_J = -1/2, m_I = -3/2\rangle$

- Type: Nuclear spin flip ($\Delta m_I = -1$, $\Delta m_J = 0$)  
- Polarization: $\sigma^-$  
- This transition directly populates $|m_J = -1/2, m_I = -3/2\rangle$.

3.From initial $|m_J = -1/2, m_I = -1/2\rangle$ to $|m_J = -1/2, m_I = 1/2\rangle$

- Type: Nuclear spin flip ($\Delta m_I = +1$, $\Delta m_J = 0$)  
- Polarization: $\sigma^+$  
- This transition directly populates $|m_J = -1/2, m_I = 1/2\rangle$. 

4.From $|m_J = -1/2, m_I = 1/2\rangle$ to $|m_J = -1/2, m_I = 3/2\rangle$

- Type: Nuclear spin flip ($\Delta m_I = +1$, $\Delta m_J = 0$)  
- Polarization: $\sigma^+$  
- This transition populates $|m_J = -1/2, m_I = 3/2\rangle$ from the state reached in step 3.

5.From $|m_J = 1/2, m_I = -1/2\rangle$ to $|m_J = 1/2, m_I = -3/2\rangle$

- Type: Nuclear spin flip ($\Delta m_I = -1$, $\Delta m_J = 0$)  
- Polarization: $\sigma^-$  
- This transition populates $|m_J = 1/2, m_I = -3/2\rangle$ from the state reached in step 1.

6.From $|m_J = 1/2, m_I = -1/2\rangle$ to $|m_J = 1/2, m_I = 1/2\rangle$

- Type: Nuclear spin flip ($\Delta m_I = +1$, $\Delta m_J = 0$)  
- Polarization: $\sigma^+$  
- This transition populates $|m_J = 1/2, m_I = 1/2\rangle$ from the state reached in step 1.

7.From $|m_J = 1/2, m_I = 1/2\rangle$ to $|m_J = 1/2, m_I = 3/2\rangle$

- Type: Nuclear spin flip ($\Delta m_I = +1$, $\Delta m_J = 0$)  
- Polarization: $\sigma^+$  
- This transition populates $|m_J = 1/2, m_I = 3/2\rangle$ from the state reached in step 6.

**c)** Discuss in detail the electric-dipole transition rules from the $5S_{1/2}$ to $5P_{3/2}$ states at low and high magnetic fields.

At low magnetic fields, the good quantum number is $F$, so the electric-dipole transition rules are
$$
\Delta F = 0, \pm1 \\
$$
while the $F = 0 \to F' = 0$  transition is forbidden. So to the $5P_{3/2}$ state:

- From $F = 1$: allowed to $F = 0$ ($\Delta F = -1$), $F = 1$ ($\Delta F = 0$), or $F = 2$ ($\Delta F = +1$). 
- Transitions to $F = 3$ are forbidden ($\Delta F = +2$).
- From $F = 2$: allowed to $F = 1$ ($\Delta F = -1$), $F = 2$ ($\Delta F = 0$), or $F = 3$ ($\Delta F = +1$). 
- Transitions to $F = 0$ are forbidden ($\Delta F = -2$).

At high magnetic fields, the good quantum number is $J$, where the selection rules become
$$
\Delta J = 0, \pm 1 \\
\Delta m_{J} = \pm 1
$$
while the $J = 0 \to J' = 0$  transition is forbidden. So, transitions where
$$
\langle j1mq| j' m' \rangle \neq 0
$$

are allowed. In detail, magnetic dipole transitions from the $5S_{1/2}$ to $5P_{3/2}$ states are as follows:

- From $\ket{J = \frac{1}{2}, m_{J} = - \frac{1}{2}}$ to $\ket{J = \frac{1}{2}, m_{J} = - \frac{1}{2}}$, $\ket{J = \frac{1}{2}, m_{J} = \frac{1}{2}}$, $\ket{J = \frac{3}{2}, m_{J} = - \frac{3}{2}}$, $\ket{J = \frac{3}{2}, m_{J} =  -\frac{1}{2}}$ and $\ket{J = \frac{3}{2}, m_{J} = \frac{1}{2}}$ with the same nucleus spin part.
- From $\ket{J = \frac{1}{2}, m_{J} = \frac{1}{2}}$  to $\ket{J = \frac{1}{2}, m_{J} = - \frac{1}{2}}$, $\ket{J = \frac{1}{2}, m_{J} = \frac{1}{2}}$, $\ket{J = \frac{3}{2}, m_{J} =  \frac{3}{2}}$, $\ket{J = \frac{3}{2}, m_{J} =  -\frac{1}{2}}$ and $\ket{J = \frac{3}{2}, m_{J} = \frac{1}{2}}$ with the same nucleus spin part.

**d)** Can $5P_{1/2}$ and $5P_{3/2}$ be coupled through magnetic radiation?

Yes, they can. The  selection rules for magnetic dipole transitions allow states with $\Delta J = 1$ to couple. However, the coupling may be very week for the energy difference between the two states is very small.

<img src="./Atomic and Molecular Physics Homework 2.assets/image-20251021103526968.png" alt="image-20251021103526968">

