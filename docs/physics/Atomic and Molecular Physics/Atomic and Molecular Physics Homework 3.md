# Atomic and Molecular Physics Homework 3

Chasse_neige

### Question 1: Ramsey fringes and atomic clock (50 points)

<img src="./Atomic and Molecular Physics Homework 3.assets/image-20251104101453577.png" alt="image-20251104101453577">

#### Radiation pulses

At $t=0$, the atom enters the interaction region. The atom is prepared initially in the state $|0\rangle$, i.e. $\sigma_x = \sigma_y = 0$ and $\sigma_z = 1$. Assume that the atom stays in the interaction region for a time $\tau$ and that the magnetic field is homogeneous in that region. Suppose $\omega = \omega_0$.

**(a)** Represent the evolution of the Bloch vector on the Bloch sphere, and find the vector $\boldsymbol{\sigma}$ after time $\tau$ (choosing Rabi frequency 

such that $\Omega_0 \tau = \frac{\pi}{2}$).

Given that the time evolving equation can be represented as
$$
\dv{\vec{\sigma}}{t} = \vec{W} \times \vec{\sigma}
$$
in the rotating frame where $\vec{W} = (\Omega, 0, \omega - \omega_{0})$

So when it exactly resonances, the Pauli matrix vector will evolve as
$$
\sigma_{x} (t) = 0 \\
\sigma_{y} (t) = - \sin(\Omega t) \\
\sigma_{z} (t) = \cos(\Omega t)
$$
After time $\tau$, the components of the Pauli matrix vector will become
$$
\vec{\sigma} = (0, -1, 0)
$$
in the rotating frame. 

**(b)** After the interaction region, the atom moves freely in the upper part of the clock chamber for a duration of $T \gg \tau$, after which they fall back into the interaction region due to gravity.

Represent the evolution of the Bloch vector on the Bloch sphere, and find the vector $\boldsymbol{\sigma}$ after $T$.

In the upper part of the clock chamber, the time evolving equation for the Pauli matrix vector becomes
$$
\dv{\vec{\sigma}}{t} = 0
$$
in the rotating frame. 

So in the rotating frame, the vector $\vec{\sigma}$ stays unchanged.
$$
\vec{\sigma} = (0, -1, 0)
$$
**(c)** Since the atoms fall freely, in this second pass, they spend the same amount of time $\tau$ in the interaction region as in the first pass. Represent again the evolution of the Bloch vector on the Bloch sphere after the interaction (choosing Rabi frequency such that $\Omega_0 \tau = \frac{\pi}{2}$).

The evolvement of the Pauli matrix vector is
$$
\sigma_{x} = 0 \\
\sigma_{y} = - \cos (\Omega t) \\
\sigma_{z} = - \sin (\Omega t)
$$
After the time $\tau$, the vector will become
$$
\vec{\sigma} = (0, 0, -1)
$$
**(d)** Compute the coordinates of the Bloch vector. Use the result to compute the probability to detect the atom in state $|1\rangle$ after the whole sequence as a function of the frequency difference between the microwave field and the atomic resonance during free evolution (assuming a non-resonant interaction in the interaction regime for the time being), and show that this probability oscillates. This pattern is called 'Ramsey fringes'. What is the quality factor of the oscillation (ratio between the frequency of the atomic transition and the fringe period? Use the frequency of atomic transition of a cesium atom $9192631770 Hz$, and a realistic free evolution time of $300 ms$ for typical fountain experiments.

If there exists a detuning of $\Delta = \omega - \omega_{0}$, the evolvement of the Pauli matrix vector will become (ignore the detuning effect in the first and second pass, for the phase shift it caused is too small compared to the phase shift in the $T$ free part)
$$
\dv{\vec{\sigma}}{t} = (\Omega, 0, \Delta) \times \vec{\sigma}
$$
So after the time $\tau$, the vector will become
$$
\vec{\sigma} = (0, -1, 0)
$$
In the free evolving part $T$, the vector will rotate will the frequency of $\Delta$ in the rotating frame, so the vector will be
$$
\vec{\sigma} = (\sin(\Delta T), - \cos(\Delta T), 0)
$$
before it falls into the interaction region the second time.

In the second pass, the Pauli matrix vector becomes
$$
\sigma_{x} = \sin (\Delta T) \\
\sigma_{y} = - \cos(\Delta T) \cos (\Omega t) \\
\sigma_{z} = - \cos(\Delta T) \sin (\Omega t)
$$
So after the $\frac{\pi}{2}$ time $\tau$, the vector will become
$$
\vec{\sigma} = (\sin(\Delta T), 0 , - \cos(\Delta T))
$$
So the probability to detect the atom in state $|1\rangle$ after the whole sequence is
$$
P_{\ket{1}} = \frac{1 - \sigma_{z}}{2} = \frac{1 + \cos(\Delta T)}{2} = \cos^{2} \left( \frac{\Delta}{2} T \right)
$$
The quality factor equals
$$
Q = \frac{\omega_{0} T}{2 \pi}
$$
Under the circumstance given by the question where  the frequency of atomic transition of a cesium atom $9192631770 Hz$, and a realistic free evolution time of $300 ms$, the quality factor is 
$$
Q = 9192631770 Hz \times 300 \times 10^{-3} s \approx 2.76 \times 10^{9}
$$

#### Quantum projection noise

There is a fundamental limit to the accuracy at which one can measure the position of the Ramsey fringes, and therefore the precision of the clock. Suppose that we are now working with $N$ atoms (of the order of $10^6$ in real experiments), close to the point of the maximum sensitivity of the clock. Show that the probability of detect $n$ atoms in state $|1\rangle$ in the final measurement follows the Poisson distribution. What is the standard deviation? How does it convert into the standard deviation of the frequency? This noise comes from the fact that at measurement, each atom is projected in one or the other internal state. The randomness that is added in that step leads to a fundamental noise which is called quantum projection noise.

By measuring the probability to observe the atom in state $|1\rangle$, we obtain a signal that varies very fast when the frequency is detuned. The sensitivity of the clock is the derivative of the probability with respect to the frequency difference. What is this value? Where is it maximum? How could one increase it?

Suppose that I've made $N$ detections and from the former calculation we can say that the distribution of the true detections will obey the Poisson Distribution
$$
P (X = n) = \frac{e^{- Np} (Np)^{n}}{n!}
$$
where $p$ is the probability to detect the atom in state $|1\rangle$ after the whole sequence
$$
p = \cos^{2} \left( \frac{\Delta}{2} T \right)
$$
So the standard deviation is 
$$
\sigma_{n} = \sqrt{Np} = \sqrt{N} \cos(\frac{\Delta}{2} T)
$$
The relation between the detected $n$ and the frequency is
$$
\omega = \omega_{0} + \frac{2}{T} \arccos(\sqrt{\frac{n}{N}})
$$
So the standard deviation of the frequency is
$$
\sigma_{\omega} = \frac{1}{T} \frac{\frac{\sigma_{n}}{\sqrt{Nn}}}{\sqrt{1 - \frac{n}{N}}} = \frac{1}{T} \frac{\sigma_{n}}{\sin(\frac{\Delta}{2} T) N \cos( \frac{\Delta}{2} T)} = \frac{1}{\sqrt{N} T \sin(\frac{\Delta}{2} T)}
$$
The sensitivity of the clock
$$
S = \dv{}{\Delta} \cos^{2} \left(\frac{\Delta}{2} T\right) = T \sin(\frac{\Delta}{2} T) \cos(\frac{\Delta}{2} T)
$$
Maximum
$$
S_{max} = \frac{T}{2}
$$
One could increase the maximum by increasing $T$.

#### Effects of the detuning during the interaction

So far we assume that the microwave is on resonance in the interaction area. In fact, when the microwave oscillator is off resonance, the detuning occurs in the interaction area as well. Use 3D rotation matrices in Mathematica to compute the Ramsey fringes including the effects of detuning considering the case where $\Omega_0 \tau = \frac{\pi}{2}$, $\Omega_0 = 14$ Hz and the interrogation time is $T = 3$ s.

The Mathematica Script is as follows

```mathematica
TransitionProbability[x_] := Module[
  {rabiFrequency = 14, detuningFrequency = x, totalFrequency, 
   interrogationTime = 3, interactionTime, blochVector},
  totalFrequency = Sqrt[rabiFrequency^2 + detuningFrequency^2];
  interactionTime = Pi/(2*rabiFrequency);
  blochVector = {0, 0, 1};
  
  (*The first Pi/2 pulse*)
  blochVector = 
   blochVector . 
    RotationMatrix[
     totalFrequency*interactionTime, {rabiFrequency, 0, 
      detuningFrequency}];
  
  (*The interrogation region*)
  blochVector = 
   blochVector . 
    RotationMatrix[detuningFrequency*interrogationTime, {0, 0, 1}];
  
  (*The second Pi/2 pulse*)
  blochVector = 
   blochVector . 
    RotationMatrix[
     totalFrequency*interactionTime, {rabiFrequency, 0, 
      detuningFrequency}];
  
  finalPossibility = (1 - blochVector[[3]])/2;
  finalPossibility  
  ]

Plot[TransitionProbability[x], {x, -60, 60}]
```

<img src="./Atomic and Molecular Physics Homework 3.assets/image-20251112220550103.png" alt="image-20251112220550103">

<img src="./Atomic and Molecular Physics Homework 3.assets/image-20251104101603947.png" alt="image-20251104101603947">

### Question 2 (30 points)

**(a)** The lifetime of the $5p$ state of Rb is $26.2 ns$, wavelength is $780 nm$. What is the linewidth of the $5s-5p$ transition?
$$
\Delta f = \frac{1}{2\pi \tau}
$$
where $\tau = 26.2 \, \text{ns} = 26.2 \times 10^{-9} \, \text{s}$
$$
\Delta f = \frac{1}{2\pi \times 26.2 \times 10^{-9}} \approx 6.07 \times 10^6 \, \text{Hz} = 6.07 \, \text{MHz}
$$
Thus, the linewidth is $6.07 MHz$.

**(b)** Calculate the saturation intensity of Rb $5s-5p$ transition in units of $W/cm^2$.

The saturation intensity is defined by
$$
I_{sat} = \frac{\frac{h \nu}{2} \Gamma}{\frac{3 \lambda^{2}}{2 \pi}} = \frac{\pi h c \Gamma}{3 \lambda^{3}} = \frac{\pi h c}{3 \lambda^{3} \tau}
$$
So the saturation intensity equals
$$
I_{sat} = \frac{\pi h c}{3 \cdot (780 \times 10^{-9} m)^{3} \cdot 26.2 \times 10^{-9} s} \approx 1.673 \times 10^{-3} W / cm^{2}
$$
**(c)** A student wants to probe a Rb gas with $1 mW$ of light near the 5s-5p transition, the light beam is collimated with a waist $w$ of $1 mm$. Calculate the Rabi frequency experienced by the atoms.
$$
I = \frac{2P}{\pi w^2},
$$

$$
\frac{I}{I_{\text{sat}}} = \frac{2 \Omega^2}{\Gamma^2}
$$

Laser intensity,
$$
I = \frac{2 \times 0.001}{\pi \times (0.001)^2} = \frac{0.002}{\pi \times 10^{-6}} \approx 636.6 \, \text{W/m}^2
$$
The ratio $\frac{I}{I_{\text{sat}}}$ is:
$$
\frac{I}{I_{\text{sat}}} = \frac{636.6}{16.74} \approx 38.03
$$
The Rabi frequency $\Omega$ is related by
$$
\frac{I}{I_{\text{sat}}} = \frac{2 \Omega^2}{\Gamma^2}
$$
where $\Gamma = 3.817 \times 10^7 \, \text{s}^{-1}$. Solving for $\Omega$
$$
\Omega^2 = \frac{\frac{I}{I_{\text{sat}}} \times \Gamma^2}{2} = \frac{38.03 \times (3.817 \times 10^7)^2}{2} \approx 2.770 \times 10^{16}
$$

$$
\Omega = \sqrt{2.770 \times 10^{16}} \approx 1.66 \times 10^8 \, \text{rad/s}
$$

Thus, the Rabi frequency is $1.66 × 10⁸ rad/s$.

**(d)** Estimate the number of photons scattered by one atom per unit time assuming that the laser detuning is 12 $MHz$.

Consider
$$
R_{sc} = n(\omega) \sigma(\omega, I) = \frac{I}{\hbar \omega_{0}} \sigma_{0} (\omega_{0}) \frac{\frac{\Gamma^{2}}{4}}{\Delta^{2} + (1 + \frac{I}{I_{sat}}) \frac{\Gamma^{2}}{4}}
$$

$$
\sigma_{0} (\omega_{0}) = \frac{6 \pi c^{2}}{\omega_{0}^{2}}
$$

So the scattering rate for a two-level atom is
$$
R_{\text{sc}} = \frac{\Gamma}{2} \frac{\frac{I}{I_{\text{sat}}}}{1 + \frac{I}{I_{\text{sat}}} + (2 \frac{\Delta}{\Gamma})^2}
$$
where:

$\Delta = 12 \, \text{MHz} = 12 \times 10^6 \, \text{Hz}$ and Angular detuning $\Delta_{\text{angular}} = 2\pi \Delta = 2\pi \times 12 \times 10^6 \approx 7.54 \times 10^7 \, \text{rad/s}$.

Compute:
$$
\frac{2 \Delta}{\Gamma} = \frac{2 \times 7.54 \times 10^7}{3.817 \times 10^7} \approx 3.95, \quad \left( \frac{2 \Delta}{\Gamma} \right)^2 \approx 15.60
$$
$$
1 + \frac{I}{I_{\text{sat}}} + (\frac{2 \Delta}{\Gamma})^2 = 1 + 38.03 + 15.60 = 54.63
$$
$$
R_{\text{sc}} = \frac{3.817 \times 10^7}{2} \times \frac{38.03}{54.63} \approx 1.909 \times 10^7 \times 0.696 \approx 1.33 \times 10^7 \, \text{s}^{-1}
$$
Thus, the scattering rate is around $1.33 \times 10^{7}$ photons per second.

### Question 3: D.C. Stark shift (20 points)

**(a)** An atom with two levels of energies $E_{2} > E_{1}$, and a separation of $\epsilon = E_{2} - E_{1}$ is placed in a static electric field. Show that the Hamiltonian for the system has the form
$$
\hat{H} = \begin{pmatrix}
\frac{\epsilon}{2} & V \\
V & - \frac{\epsilon}{2}
\end{pmatrix},
$$

where the matrix element for the perturbation $V$ is proportional to the magnitude of the electric field. Find the energy eigenvalues. The two levels move apart as shown in Fig. 7.9—this is a general feature of systems where a perturbation mixes the wavefunctions.

The unperturbed Hamiltonian for the two-level system has energies $E_1$ and $E_2$, with $\epsilon = E_2 - E_1$. Choosing the zero of energy at the average $\frac{E_{1} + E_{2}}{2}$, the energies become $-\frac{\epsilon}{2}$ and $\frac{\epsilon}{2}$. The static electric field introduces a perturbation $H_I = -\mathbf{d} \cdot \mathbf{E}$, where $\mathbf{d}$ is the dipole moment operator. Assuming the states have opposite parity, the off-diagonal matrix element $V = \langle 1 | H_I | 2 \rangle$ is non-zero and proportional to the electric field magnitude. Thus, the Hamiltonian is
$$
\hat{H} = \begin{pmatrix}
\frac{\epsilon}{2} & V \\
V & -\frac{\epsilon}{2}
\end{pmatrix}
$$

The energy eigenvalues are found by solving $\det(\hat{H} - E I) = 0$
$$
\left( \frac{\epsilon}{2} - E \right) \left( -\frac{\epsilon}{2} - E \right) - V^2 = 0
$$

$$
E = \pm \frac{1}{2} \sqrt{\epsilon^2 + 4V^2}
$$

Thus, the eigenvalues are $E_{\pm} = \pm \frac{1}{2} \sqrt{\epsilon^2 + 4V^2}$.

**(b)** Show that 'weak' fields produce a quadratic Stark effect on the atom, equivalent to the usual second-order perturbation-theory expression for a perturbation $H_{I}$
$$
\Delta E_{1} = -\frac{|\langle 2 | H_{I} | 1 \rangle|^{2}}{E_{2} - E_{1}}
$$

A similar expression can be found for the energy shift $\Delta E_{2}$ of the other level (in the opposite direction).

For weak fields, $V \ll \epsilon$, the eigenvalues can be expanded as
$$
E_{\pm} = \pm \frac{1}{2} \sqrt{\epsilon^2 + 4V^2} = \pm \frac{\epsilon}{2} \sqrt{1 + \frac{4V^2}{\epsilon^2}} \approx \pm \frac{\epsilon}{2} \left( 1 + \frac{2V^2}{\epsilon^2} \right) = \pm \frac{\epsilon}{2} \pm \frac{V^2}{\epsilon}
$$
The unperturbed energies are $E_1 = -\frac{\epsilon}{2}$ and $E_2 = \frac{\epsilon}{2}$, so the shifts are:
$$
\Delta E_1 \approx -\frac{V^2}{\epsilon} \\
\Delta E_2 \approx \frac{V^2}{\epsilon}
$$
In perturbation theory, $H_I$ has matrix element $\langle 2 | H_I | 1 \rangle = V$, so
$$
\Delta E_1 = -\frac{|\langle 2 | H_I | 1 \rangle|^2}{E_2 - E_1} = -\frac{V^2}{\epsilon}
$$
which matches the expansion. Similarly, $\Delta E_2 = \frac{V^2}{\epsilon}$. This quadratic dependence on $V$ (and thus on the electric field) is the quadratic Stark effect.

**(c)** Estimate the Stark shift for the ground state of a sodium atom in a field of $10^{6} \, \text{V m}^{-1}$ (e.g. $10^{4} \, \text{V}$ between plates $1 \, \text{cm}$ apart).

For the ground state of sodium, the Stark shift is estimated using second-order perturbation theory. The dominant contribution comes from the first excited state, with energy difference $\Delta E = E_{3p} - E_{3s} \approx 2.1 \, \text{eV}$. The oscillator strength for the $3s–3p$ transition is $f \approx 1$. The dipole matrix element squared is
$$
|\langle 3p | d | 3s \rangle|^2 = e^2 \frac{3 \hbar^2 f}{2m \Delta E}
$$
The energy shift for the ground state is
$$
\Delta E_{\text{ground}} = - \frac{E^2 |\langle 3p | d | 3s \rangle|^2}{\Delta E}
$$
with electric field$E = 10^6 \, \text{V/m}$, $\Delta E \approx 2.1 \, \text{eV}$,  $|\langle d \rangle|^2 \approx \frac{3f}{2 \Delta E} \approx 19.43 \, a_0^2$ .

Then
$$
\Delta E_{\text{ground}} \approx -2.59 \times 10^{-8} \, eV
$$

Thus, the Stark shift for the ground state of sodium in a field of $10^6 \, \text{V/m}$ is approximately $-3 \times 10^{-8} \, \text{eV}$.

