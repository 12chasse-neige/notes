# Atomic and Molecular Physics Homework

## Homework 1

### Question 1
The eigenfunctions of a Hydrogen are of the form $\psi_{nlm} = R_{nl}(r)P_{l}^{m}(\cos\theta)e^{im\phi}$

(a) Write down the explicit forms of $\psi_{100}$, $\psi_{200}$, $\psi_{210}$ and $\psi_{21\pm1}$.
$$
R_{nl}(r) = \sqrt{\left( \frac{2}{n a_{0}} \right)^{3} \frac{(n-l-1)!}{2n[(n+l)!]}} e^{- \frac{r}{(n a_{0})}} \left( \frac{2r}{n a_{0}} \right)^{l} L_{n-l-1}^{2l+1} \left( \frac{2r}{n a_{0}} \right)
$$
Where
$$
L_{k}^{\alpha}(x) = \sum_{j=0}^{k} (-1)^{j} \binom{k+\alpha}{k-j} \frac{x^{j}}{j!}
$$

And
$$
Y_{lm}(\theta, \phi) = \sqrt{\frac{2l+1}{4\pi} \frac{(l-m)!}{(l+m)!}} P_{l}^{m} (\cos \theta) e^{i m \phi}
$$
Where
$$
P_{l}^{m}(x) = (-1)^{m} (1 - x^{2})^{\frac{m}{2}} \frac{d^{m}}{dx^{m}} P_{l}(x)
$$

So
$$
\begin{gathered}
\psi_{100} = R_{10} (r) Y_{00} (\theta, \phi) = \sqrt{\left( \frac{2}{a_{0}} \right)^{3} \frac{1}{2}} e^{-\frac{r}{a_{0}}} L_{0}^{1} \left(\frac{2r}{a_{0}} \right) \sqrt{\frac{1}{4 \pi}} P_{0}^{0} (\cos \theta) \\
= \frac{2}{a_{0}^{\frac{3}{2}}} \sqrt{\frac{1}{4 \pi}} e^{- \frac{r}{a_{0}}}
\end{gathered}
$$

$$
\begin{gathered}
\psi_{200} = R_{20} (r) Y_{00} (\theta, \phi) = \sqrt{\left( \frac{2}{2 a_{0}} \right)^{3} \frac{1}{8}} e^{- \frac{r}{2 a_{0}}} L_{1}^{1} \left(\frac{r}{a_{0}} \right) \sqrt{\frac{1}{4 \pi}} P_{0}^{0} (\cos \theta) \\ 
= \frac{1}{2\sqrt{2} a_{0}^{\frac{3}{2}}} \sqrt{\frac{1}{4 \pi}} \left(2 - \frac{r}{a_{0}}\right) e^{- \frac{r}{a_{0}}}
\end{gathered}
$$

$$
\begin{gathered}
\psi_{210} = R_{21} (r) Y_{1 0} (\theta, \phi) = \sqrt{\frac{1}{a_{0}}^{3} \frac{1}{24}} e^{-\frac{r}{2 a_{0}}} \frac{r}{a_{0}} L_{0}^{3} \left( \frac{r}{a_{0}} \right) \sqrt{\frac{3}{4 \pi}} P_{1}^{0} (\cos \theta) \\ 
= \frac{1}{2 \sqrt{2} a_{0}^{\frac{3}{2}}} \sqrt{\frac{1}{4 \pi}} \frac{r}{a_{0}} e^{- \frac{r}{2 a_{0}}} \cos \theta
\end{gathered}
$$

$$
\psi_{21 \pm 1} = R_{21} (r) Y_{1 \pm 1} (\theta, \phi) = \sqrt{\frac{1}{a_{0}}^{3} \frac{1}{24}} e^{-\frac{r}{2 a_{0}}} \frac{r}{a_{0}} L_{0}^{3} \left( \frac{r}{a_{0}} \right) \sqrt{\frac{3}{4 \pi} 2^{\mp 1}} P_{1}^{\pm 1} (\cos \theta) e^{i \pm 1 \phi}
$$

Show the two functions respectively 
$$
\psi_{211} = - \frac{1}{4 a_{0}^{\frac{3}{2}}} \sqrt{\frac{1}{4 \pi}} \frac{r}{a_{0}} e^{- \frac{r}{2 a_{0}}} \sin \theta e^{i \phi}
$$

$$
\psi_{21-1} = \frac{1}{4 a_{0}^{\frac{3}{2}}} \sqrt{\frac{1}{4 \pi}} \frac{r}{a_{0}} e^{- \frac{r}{2 a_{0}}} \sin \theta e^{- i \phi}
$$

(b) Calculate spatial dependence of the probability current $J=\frac{\hbar}{2\mu i}(\psi^{*}\nabla\psi-\psi\nabla\psi^{*})$ of $\psi_{nlm}$. Describe and sketch distribution of $J$ for $\psi_{200}$, $\psi_{210}$ and $\psi_{211}$.

The probability current
$$
\begin{gathered}
J_{nlm} = \frac{\hbar}{2 \mu i} (\psi_{nlm}^{*} \nabla \psi_{nlm} - \psi_{nlm} \nabla \psi_{nlm}^{*}) \\ 
= \frac{\hbar}{2 \mu i} \frac{2 i m}{r \sin \theta} \left( \psi_{nl-m} \psi_{nlm} \right) \hat{e}_{\phi} = \frac{\hbar m}{\mu r \sin \theta} |\psi_{nlm}|^{2} \hat{e}_{\phi}
\end{gathered}
$$
For $\psi_{200}$ and $\psi_{210}$
$$
J = 0
$$
For $\psi_{211}$ 
$$
J (r, \theta, \phi) = \frac{\hbar}{\mu} \frac{r}{64 \pi a_{0}^{5}} e^{- \frac{r}{a_{0}}} \sin \theta \hat{e}_{\phi}
$$
(c) Use the probability current obtained above to show that the z-component of the magnetic moment of $\psi_{nlm}$ is given by $M_{z}=m\mu_{B}$ where $\mu_{B}=\frac{e\hbar}{2\mu}$ is the Bohr magneton.

$$
M_{z} = - \int \frac{e}{2} \vec{r} \times \vec{J} dv = -\frac{e \hbar m}{2 \mu} \int \frac{|\psi_{nlm}|^{2}}{r \sin \theta} r \sin \theta dv = - m \mu_{B}
$$

### Question 2
Using $H_{hfB} = A \vec{I} \cdot \vec{J} + \frac{\mu_{B}}{\hbar} (g_{J} J_{z} + g_{I} I_{z}) B_{z}$, compute the hyperfine structure of the $5S_{1/2}$ ground state of $^{87}\text{Rb}$ atom under the influence of an external magnetic field. The relevant parameters are given in the next page.

(a) You should write a Matlab or Mathematica script or any computation script of your preference. Use $|J, m_{J}\rangle |I, m_{I}\rangle$ as your starting basis to obtain the matrix representation of $H_{hfB}$ and then diagonalize this matrix to obtain the eigenenergies and eigenstates. Do not use the Breit-Rabi formula. Submit your results together with 1 page of your program.

Under the  $|J, m_{J}\rangle |I, m_{I}\rangle$ basis, the Hamiltonian can be represented as
$$
H_{hfB} = A \left( \frac{I_{+} J_{-} + I_{-} J_{+}}{2} + I_{z} J_{z} \right) + \frac{\mu_{B}}{\hbar} (g_{J} J_{z} + g_{I} I_{z}) B_{z}
$$
For $^{87}\text{Rb}$ atoms' $5 S_{1/2}$ state
$$
\begin{gathered}
m_{J} = -\frac{1}{2}, \frac{1}{2} \\
m_{I} = - \frac{3}{2}, -\frac{1}{2}, \frac{1}{2}, \frac{3}{2}
\end{gathered}
$$
Using the basis of 
$$
\begin{gathered}
\ket{m_{J}  = -\frac{1}{2}} \otimes \ket{m_{I} =  -\frac{3}{2}}, \quad \ket{m_{J}  = -\frac{1}{2}} \otimes \ket{m_{I} =  -\frac{1}{2}} \\
\ket{m_{J}  = -\frac{1}{2}} \otimes \ket{m_{I} =  \frac{1}{2}}, \quad \ket{m_{J}  = -\frac{1}{2}} \otimes \ket{m_{I} =  \frac{3}{2}} \\
\ket{m_{J}  = \frac{1}{2}} \otimes \ket{m_{I} =  -\frac{3}{2}}, \quad \ket{m_{J}  = \frac{1}{2}} \otimes \ket{m_{I} =  -\frac{1}{2}} \\
\ket{m_{J}  = \frac{1}{2}} \otimes \ket{m_{I} =  \frac{1}{2}}, \quad \ket{m_{J}  = \frac{1}{2}} \otimes \ket{m_{I} =  \frac{3}{2}} \\
\end{gathered}
$$
The Hamiltonian matrix can be obtained as
$$
H_{ij} = A \bra{i} \frac{I_{+} J_{-} + I_{-} J_{+}}{2} + I_{z} J_{z} \ket{j} + \frac{\mu_{B}}{\hbar} (g_{J} J_{z} + g_{I} I_{z}) B_{z}
$$
For diagonals, the x and y components of the spin operator is 0, so the Hamiltonian is 
$$
H_{ii} = A m_{J_{i}} m_{I_{i}} + \frac{\mu_{B}}{\hbar} (g_{J} m_{J_{i}} + g_{I} m_{I_{i}}) B_{z} \hbar
$$
For non-diagonals,the x and y components of the spin operator is non-zero only if the spin state
$$
I_{+} J_{-} \ket{j} = \ket{i}
$$
or
$$
I_{-} J_{+} \ket{j} = \ket{i}
$$
The Hamiltonian therefore equals
$$
H_{ij} = \begin{cases}
\frac{A}{2} \sqrt{I(I + 1) - (m_{I_{j}} (m_{I_{j}} + 1))} \sqrt{J (J - 1) - (m_{J_{j}} (m_{J_{j}} - 1))} \qquad (I_{+} J_{-} \ket{j} = \ket{i}) \\
\frac{A}{2} \sqrt{I(I + 1) - (m_{I_{j}} (m_{I_{j}} - 1))} \sqrt{J (J + 1) - (m_{J_{j}} (m_{J_{j}} + 1))} \qquad (I_{-} J_{+} \ket{j} = \ket{i}) 
\end{cases}
$$
The Matlab script for calculating the Hamiltonian is as follows 

```matlab
% 参数
A = 3.417341305452145; % GHz * h
g_J = 2.00233113;
g_I = -0.0009951414;
mu_B = 0.001399624; % GHz/G * h
B_z = 0.001; % G

% 基矢状态
states = [
    -0.5, -1.5;
    -0.5, -0.5;
    -0.5,  0.5;
    -0.5,  1.5;
     0.5, -1.5;
     0.5, -0.5;
     0.5,  0.5;
     0.5,  1.5
];

%哈密顿量
N = 8;
H = zeros(N);

for i = 1:N
    mJ_i = states(i,1);
    mI_i = states(i,2);
    % 对角元
    H(i,i) = A * mJ_i * mI_i + mu_B * B_z * (g_J * mJ_i + g_I * mI_i);
    
    for j = i+1:N
        mJ_j = states(j,1);
        mI_j = states(j,2);
        
        % 检查非对角元条件
        if mJ_i - mJ_j == -1 && mI_i - mI_j == 1 % I_+ J_- 情况
            factor = sqrt( (1/2)*(3/2) - mJ_j*(mJ_j-1) ) * sqrt( (3/2)*(5/2) - mI_j*(mI_j+1) );
            H(i,j) = 1/2 * A * factor;
            H(j,i) = H(i,j);
        elseif mJ_i - mJ_j == 1 && mI_i - mI_j == -1 % I_- J_+ 情况
            factor = sqrt( (1/2)*(3/2) - mJ_j*(mJ_j+1) ) * sqrt( (3/2)*(5/2) - mI_j*(mI_j-1) );
            H(i,j) = 1/2 * A * factor;
            H(j,i) = H(i,j);
        end
    end
end

%对角化
[V, D] = eig(H);
eigenvalues = diag(D);
[eigenvalues_sorted, sort_idx] = sort(eigenvalues);
eigenvectors_sorted = V(:, sort_idx);
```

The results show that the Matrix representation of the Hamiltonian is (when the magnetic field is 0)
$$
H_{B = 0} = \begin{pmatrix}
2.563 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0.854 & 0 & 0 & 2.96 & 0 & 0 & 0 \\
0 & 0 & -0.854 & 0 & 0 & 3.417 & 0 & 0 \\
0 & 0 & 0 & -2.563 & 0 & 0 & 2.96 & 0 \\
0 & 2.96 & 0 & 0 & -2.563 & 0 & 0 & 0 \\
0 & 0 & 3.417 & 0 & 0 & -0.854 & 0 & 0 \\
0 & 0 & 0 & 2.96 & 0 & 0 & 0.854 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 2.563
\end{pmatrix}
$$
The eigenvector matrix is
$$
V_{B = 0} = \begin{pmatrix}
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & -0.5 & 0 & 0.866 & 0 & 0 & 0 \\
0 & 0.707 & 0 & 0 & 0 & -0.707 & 0 & 0 \\
0.866 & 0 & 0 & 0 & 0 & 0 & -0.5 & 0 \\
0 & 0 & 0.866 & 0 & 0.5 & -0 & 0 & 0 \\
0 & -0.707 & 0 & 0 & 0 & -0.707 & 0 & 0 \\
-0.5 & 0 & 0 & 0 & 0 & -0 & -0.866 & 0 \\
-0 & 0 & 0 & 0 & 0 & -0 & 0 & 1
\end{pmatrix}
$$
and the eigenvalue matrix is
$$
D_{B = 0} = \begin{pmatrix}
-4.272 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & -4.272 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & -4.272 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 2.563 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 2.563 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 2.563 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 2.563 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 2.563
\end{pmatrix}
$$
(b) When B=0, write down all $|F, m_{F}\rangle$ states in the basis of $|J, m_{J}\rangle |I, m_{I}\rangle$ from your computations. Compare your results to that based on the Clebsch-Gordan coefficients? Compare also the eigenenergies you obtain to the formula given in the lecture notes.
$$
\ket{F = 1, m_{F} = 1} = - 0.500 \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = \frac{1}{2}} + 0.866 \ket{m_{J} = -\frac{1}{2}} \otimes \ket{m_{I} = \frac{3}{2}}
$$

$$
\ket{F = 1, m_{F} = 0} = - 0.707 \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = -\frac{1}{2}} + 0.707 \ket{m_{J} = -\frac{1}{2}} \otimes \ket{m_{I} = \frac{1}{2}}
$$

$$
\ket{F = 1, m_{F} = -1} = 0.866 \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = -\frac{3}{2}} -0.500 \ket{m_{J} = -\frac{1}{2}} \otimes \ket{m_{I} = -\frac{1}{2}}
$$

$$
\ket{F = 2, m_{F} = - 2} = \ket{m_{J} = - \frac{1}{2}} \otimes \ket{m_{I} = - \frac{3}{2}}
$$

$$
\ket{F = 2, m_{F} = - 1} = 0.866 \ket{m_{J} = - \frac{1}{2}} \otimes \ket{m_{I} = - \frac{1}{2}} + 0.500 \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = - \frac{3}{2}}
$$

$$
\ket{F = 2, m_{F} = 0} = - 0.707 \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = -\frac{1}{2}} - 0.707 \ket{m_{J} = -\frac{1}{2}} \otimes \ket{m_{I} = \frac{1}{2}}
$$

$$
\ket{F = 2, m_{F} = 1} = - 0.866 \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = \frac{3}{2}} - 0.500 \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = \frac{1}{2}}
$$

$$
\ket{F = 2, m_{F} = 2} = \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = \frac{3}{2}}
$$

For the results given by the Clebsch-Gordan coefficients,

<img src="./Atomic and Molecular Physics Homework.assets/image-20251009000608068.png" alt="image-20251009000608068">

We can see from the table that 
$$
\ket{F = 1, m_{F} = 1} = \frac{\sqrt{3}}{2} \ket{m_{J} = - \frac{1}{2}} \otimes \ket{m_{I} = \frac{3}{2}} + \frac{1}{2} \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = \frac{1}{2}}
$$

$$
\ket{F = 1, m_{F} = 0} = - \frac{1}{\sqrt{2}} \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = -\frac{1}{2}} + \frac{1}{\sqrt{2}} \ket{m_{J} = -\frac{1}{2}} \otimes \ket{m_{I} = \frac{1}{2}}
$$

$$
\ket{F = 1, m_{F} = -1} = - \frac{\sqrt{3}}{2} \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = -\frac{3}{2}} + \frac{1}{2} \ket{m_{J} = -\frac{1}{2}} \otimes \ket{m_{I} = -\frac{1}{2}}
$$

$$
\ket{F = 2, m_{F} = - 2} = \ket{m_{J} = - \frac{1}{2}} \otimes \ket{m_{I} = - \frac{3}{2}}
$$

$$
\ket{F = 2, m_{F} = - 1} = \frac{\sqrt{3}}{2} \ket{m_{J} = - \frac{1}{2}} \otimes \ket{m_{I} = - \frac{1}{2}} + \frac{1}{2} \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = - \frac{3}{2}}
$$

$$
\ket{F = 2, m_{F} = 0} = \frac{1}{\sqrt{2}} \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = -\frac{1}{2}} + \frac{\sqrt{2}}{2} \ket{m_{J} = -\frac{1}{2}} \otimes \ket{m_{I} = \frac{1}{2}}
$$

$$
\ket{F = 2, m_{F} = 1} = - \frac{\sqrt{3}}{2} \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = \frac{3}{2}} - \frac{1}{2} \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = \frac{1}{2}}
$$

$$
\ket{F = 2, m_{F} = 2} = \ket{m_{J} = \frac{1}{2}} \otimes \ket{m_{I} = \frac{3}{2}}
$$
are exactly the same as those we've calculated apart from some signs of the whole eigenvectors.

For the eigenenergies when $B = 0$, the script gives that there are two possible values
$$
E_{-} = h \cdot -4.272 GHz, \qquad E_{+} = h \cdot 2.563 GHz
$$
The formula given in the lecture notes show that
$$
H = A I \cdot J  = A \frac{F (F + 1) - I (I + 1) - J (J + 1)}{2}
$$
When $F = 1$
$$
H_{-} = A \frac{2 - \frac{15}{4} - \frac{3}{4}}{2} = -1.25 A = h \cdot - 4.272 GHz \approx E_{-}
$$
When $F = 2$
$$
H_{+} = A \frac{6 - \frac{15}{4} - \frac{3}{4}}{2} = 0.75 A = h \cdot 2.563 GHz \approx E_{+}
$$
These show that our calculations are corresponding to the formula given in class.

Hint for Question 2:

$$
\vec{I} \cdot \vec{J} = \frac{I_{+} J_{-} + I_{-} J_{+}}{2} + I_{z} J_{z}
$$
<img src="./Atomic and Molecular Physics Homework.assets/image-20250929134001198.png" alt="image-20250929134001198">

## Homework 2

### Question 1

**a)** A two-level quantum state can be represented by
$$
|\psi\rangle = \cos\left(\frac{\theta}{2}\right) |0\rangle + e^{i\phi} \sin\left(\frac{\theta}{2}\right) |1\rangle.
$$

Show that the density matrix $\rho = |\psi\rangle\langle\psi|$ can be written as $\rho = \frac{1}{2} (I + \mathbf{a} \cdot \boldsymbol{\sigma})$ where $\boldsymbol{\sigma} = (\sigma_{1}, \sigma_{2}, \sigma_{3})$ ($\sigma_{1,2,3}$ being the Pauli matrices) and $\mathbf{a} = (\sin\theta \cos\phi, \sin\theta \sin\phi, \cos\theta)$.
$$
\begin{gathered}
\rho = \ket{\psi} \bra{\psi} = \left(  \cos\left(\frac{\theta}{2}\right) |0\rangle + e^{i\phi} \sin\left(\frac{\theta}{2}\right) |1\rangle \right) \left( \cos\left(\frac{\theta}{2}\right) \bra{0} + e^{- i\phi} \sin\left(\frac{\theta}{2}\right) \bra{1} \right) \\ =
\cos^{2} \frac{\theta}{2} \ket{0} \bra{0} + \sin^{2} \frac{\theta}{2} \ket{1} \bra{1}  + \sin \frac{\theta}{2} \cos \frac{\theta}{2} \left(e^{i \phi} \ket{1} \bra{0} + e^{- i \phi} \ket{0} \bra{1}\right) \\ =
\cos^{2} \frac{\theta}{2} \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + \sin^{2} \frac{\theta}{2} \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} + \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{i \phi} \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} + \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{- i \phi} \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \\ =
\begin{pmatrix} \cos^{2} \frac{\theta}{2} & \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{- i \phi} \\ \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{i \phi} &  \sin^{2} \frac{\theta}{2} \end{pmatrix}
\end{gathered}
$$
While the density matrix can also be represented as
$$
\begin{gathered}
\rho = \frac{1}{2} (I + \mathbf{a} \cdot \boldsymbol{\sigma}) = \frac{1}{2} (I + \sin \theta \cos \phi \sigma_{1} + \sin \theta \sin \phi \sigma_{2} + \cos \theta \sigma_{3}) \\ =
\frac{1}{2} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + \frac{1}{2} \sin \theta \cos \phi \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + \frac{1}{2} \sin \theta \sin \phi \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix} + \frac{1}{2} \cos \theta \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \\ =
\begin{pmatrix} \frac{1}{2} (1 + \cos \theta) & \frac{1}{2} \sin \theta (\cos \phi - i \sin \phi) \\ \frac{1}{2} \sin \theta (\cos \phi + i \sin \phi) & \frac{1}{2} (1 - \cos \theta) \end{pmatrix}  = \begin{pmatrix} \cos^{2} \frac{\theta}{2} & \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{- i \phi} \\ \sin \frac{\theta}{2} \cos \frac{\theta}{2} e^{i \phi} &  \sin^{2} \frac{\theta}{2} \end{pmatrix}
\end{gathered}
$$
So the density matrix can be written as  $\rho = \frac{1}{2} (I + \mathbf{a} \cdot \boldsymbol{\sigma})$ 

**b)** A two-level system coupled by a radiation of frequency $\omega$ is governed by the Hamiltonian 
$$
H = H_{0} + V = \frac{\hbar\omega_{0}}{2} (|1\rangle\langle 1| - |0\rangle\langle 0|) + \frac{\hbar\Omega}{2} (e^{+i\omega t} |0\rangle\langle 1| + e^{-i\omega t} |1\rangle\langle 0|)
$$
 in the Schrödinger picture and under the rotating-wave approximation. Show that a state represented by Bloch vector $\mathbf{a}$ evolves as
$$
\frac{d\mathbf{a}}{dt} = \mathbf{W}' \times \mathbf{a}
$$

where $\mathbf{W}' = (\Omega_{0} \cos\omega t, -\Omega_{0} \sin\omega t, -\omega_{0})$.

Write the Hamiltonian in terms of the Pauli Matrices 
$$
\begin{gathered}
\ket{1} \bra{1} = \frac{1}{2}(I - \sigma_{3}) \\
\ket{0} \bra{0} = \frac{1}{2}(I + \sigma_{3}) \\
\ket{1} \bra{0} = \frac{1}{2}(\sigma_{1} - i \sigma_{2}) \\
\ket{0} \bra{1} = \frac{1}{2}(\sigma_{1} + i \sigma_{2})
\end{gathered}
$$

So the Hamiltonian can be represented as
$$
\begin{gathered}
H = \frac{\hbar\omega_{0}}{2} (|1\rangle\langle 1| - |0\rangle\langle 0|) + \frac{\hbar\Omega}{2} (e^{+i\omega t} |0\rangle\langle 1| + e^{-i\omega t} |1\rangle\langle 0|) \\ =
- \frac{\hbar \omega_{0}}{2} \sigma_{3} + \frac{\hbar \Omega}{2} (e^{i \omega t} \frac{1}{2}(\sigma_{1} + i \sigma_{2}) + e^{-i \omega t} \frac{1}{2}(\sigma_{1} - i \sigma_{2})) \\ =
- \frac{\hbar \omega_{0}}{2} \sigma_{3} + \frac{\hbar \Omega}{2} \sigma_{1} \cos \omega t  - \frac{\hbar \Omega}{2} \sigma_{2} \sin \omega t = \frac{\hbar}{2} \vec{W'} \cdot \vec{\sigma}
\end{gathered}
$$
Calculate the evolvement of the density matrix
$$
\begin{gathered}
\dv{\rho}{t} = \frac{1}{i \hbar} \comm{H}{\rho} = \frac{1}{i \hbar} \comm{\frac{\hbar}{2} \vec{W'} \cdot \vec{\sigma}}{\frac{1}{2}(I + \vec{a} \cdot \vec{\sigma})} = \frac{1}{4 i} \comm{\vec{W'} \cdot \vec{\sigma}}{\vec{a} \cdot \vec{\sigma}} \\
= \frac{1}{4 i} \sum_{i,j} W'_{i} a_{j} \comm{\sigma_{i}}{\sigma_{j}} = \frac{1}{2} \sum_{i,j,k} W'_{i} a_{j} \epsilon_{ijk} \sigma_{k} = \frac{1}{2} (\vec{W'} \times \vec{a}) \cdot \vec{\sigma}
\end{gathered}
$$
Under the Schrödinger picture, the Pauli Matrices vector is an invariant, so the time derivative of the density matrix is
$$
\dv{\rho}{t} = \frac{1}{2} \dv{\vec{a}}{t} \cdot \vec{\sigma}
$$
 Compare the last two representations of $\dv{\rho}{t}$, we'll get that
$$
\dv{\vec{a}}{t} = \vec{W'} \times \vec{a}
$$

**c)** Going to the rotating frame $|\psi\rangle \to |\psi_{R}\rangle = U |\psi\rangle$ where $|\psi\rangle$ represents the solution of the Hamiltonian in (b) and $U = |0\rangle\langle 0| + e^{+i\omega t} |1\rangle\langle 1|$. Find the new Hamiltonian $H_{R}$ in the rotating frame. Make use of your results in (b) or repeat the above calculation, find the corresponding $\mathbf{W}'$ in the interaction frame. Do your results agree with what we obtain from physical arguments in the lecture?

Under the rotating frame basis
$$
\ket{\psi_{R}} = U \ket{\psi}
$$
So the new Hamiltonian can be represented as
$$
\begin{gathered}
i \hbar \pdv{\ket{\psi_{R}}}{t} = H_{R} \ket{\psi_{R}} \\
U H \ket{\psi} + i \hbar \dot{U} \ket{\psi} = H_{R} U \ket{\psi}
\end{gathered}
$$
Therefore
$$
\begin{gathered}
H_{R} = U H U^{\dagger} + i \hbar \dot{U}  U^{\dagger} \\ =
(\ket{0} \bra{0} + e^{i \omega t} \ket{1} \bra{1}) (\frac{\hbar\omega_{0}}{2} (|1\rangle\langle 1| - |0\rangle\langle 0|) + \frac{\hbar\Omega}{2} (e^{+i\omega t} |0\rangle\langle 1| + e^{-i\omega t} |1\rangle\langle 0|)) (\ket{0} \bra{0} + e^{- i \omega t} \ket{1} \bra{1}) \\ + 
i \hbar (i \omega e^{i \omega t} \ket{1} \bra{1}) (\ket{0} \bra{0} + e^{- i \omega t} \ket{1} \bra{1}) \\ =
\frac{\hbar\omega_{0}}{2} (|1\rangle\langle 1| - |0\rangle\langle 0|) + \frac{\hbar\Omega}{2} (|0\rangle\langle 1| + |1\rangle\langle 0|)) - \hbar \omega \ket{1} \bra{1}
\end{gathered}
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

**a)** Calculate relative transition strengths of the $5S_{1/2} |F=2, m_{F}=2\rangle$ to $5P_{3/2} |F=3, m_{F}=2\rangle$ transition and of the $5S_{1/2} |F=2, m_{F}=1\rangle$ to $5P_{3/2} |F=2, m_{F}=1\rangle$. Do not use $6-j$ or $9-j$ formula given in Daniel Steck notes. Try to dissect $F$ into $J+I$, and then into $L+S+I$ step by step, obtaining the relevant Clebsch-Gordan coefficient using Mathematica or other means. Doing so would help you appreciate the details. (Note: the absolute values of your results may differ from those in the tables, but the relative value must be the same.) Using the experience you obtain from this exercise, can you see why $\Delta F=0,\pm1$ and $\Delta J=0,\pm1$ for electric dipole transition? Can spin-orbit coupling and hyperfine interaction alter the selection rules for $L$, i.e. $\Delta L=\pm1$? (In other words, is it possible to have, say, $2p-3p$ electric-dipole transition after we include spin-orbit coupling and hyperfine interactions?)

First, try to represent the state $5S_{1/2} |F=2, m_{F}=2\rangle$ and $5P_{3/2} |F=3, m_{F}=2\rangle$ in terms of the  $L+S+I$ states using the C-G coefficients 
$$
\ket{F = 2, m_{F} = 2} = \ket{L = 0, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}}
$$

$$
\begin{gathered}
\ket{F = 3, m_{F} = 2} = \frac{1}{\sqrt{3}} \ket{L = 1, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}} \\ +
\frac{1}{\sqrt{6}} \ket{L = 1, m_{L} = 1} \otimes \ket{S = \frac{1}{2}, m_{S} = - \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}} \\ +
\frac{1}{\sqrt{2}} \ket{L = 1, m_{L} = 1} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{1}{2}}
\end{gathered}
$$

So the relative electric dipole transition strength between the two states can be represented as 
$$
\bra{F = 3, m_{F} = 2} e \hat{r} \cdot \vec{E} \ket{F = 2, m_{F} = 2} = \frac{1}{\sqrt{3}} \bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0}
$$
Similarly, also expand the $5S_{1/2} |F=2, m_{F}=1\rangle$ and $5P_{3/2} |F=2, m_{F}=1\rangle$ 
$$
\begin{gathered}
\ket{F = 2, m_{F} = 1} = \frac{1}{2} \ket{L = 0, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = - \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}} \\ + 
\frac{\sqrt{3}}{2} \ket{L = 0, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{1}{2}}
\end{gathered}
$$

$$
\begin{gathered}
\ket{F = 2, m_{F} = 1} = \frac{1}{2 \sqrt{3}} \ket{L = 1, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = - \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}} \\ -
\frac{1}{\sqrt{6}} \ket{L = 1, m_{L} = - 1} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{3}{2}} \\ -
\frac{1}{2} \ket{L = 1, m_{L} = 0} \otimes \ket{S = \frac{1}{2}, m_{S} = \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{1}{2}} \\ +
\frac{1}{\sqrt{2}} \ket{L = 1, m_{L} = 1} \otimes \ket{S = \frac{1}{2}, m_{S} = - \frac{1}{2}} \otimes \ket{I = \frac{3}{2}, m_{I} = \frac{1}{2}} 
\end{gathered}
$$

So the relative electric dipole transition strength between the two states can be represented as 
$$
\begin{gathered}
\bra{F = 2, m_{F} = 1} e \hat{r} \cdot \vec{E} \ket{F = 2, m_{F} = 1} = \frac{1}{4 \sqrt{3}} \bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0} \\ - \frac{\sqrt{3}}{4} \bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0} \\ =
- \frac{1}{2 \sqrt{3}} \bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0}
\end{gathered}
$$
The relative transition strength
$$
\frac{Strength_{1}}{Srength_{2}} = \abs{\frac{\frac{1}{\sqrt{3}} \bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0}}{- \frac{1}{2 \sqrt{3}}\bra{L = 1, m_{L} = 0} e \hat{r} \cdot \vec{E} \ket{L = 0, m_{L} = 0}}}^{2} = 4
$$

#### Explain why $\Delta F=0,\pm1$ and $\Delta J=0,\pm1$ for electric dipole transition.

From the expanding of Clebsch-Gordan Coefficients we can see that when the electric dipole transition strength is non-zero, those part of the spin (electrons and nucleus) should stay the same before and after the transition. So the difference between the good quantum numbers, take $J$  and $J'$, should be the in the interval as the difference between $|L \pm S|$ and $|L' \pm S'|$ for $S, m_{S}$ stays invariant. Remember that the selection rules for electric dipole transition demands that $\Delta L = \pm 1$, so we can say that $\Delta J =0, \pm 1$ (according to Wigner-Eckart Theorem). As for those circumstances while the good quantum number is $F$, the logic behind $\Delta F = 0, \pm 1$ is the same. As $I, m_{I}$  won't change before and after the transition, $\Delta F$ should obey the same rules as $\Delta J$.

#### Can spin-orbit coupling and hyperfine interaction alter the selection rules for $L$, i.e. $\Delta L=\pm1$?

No, they can't. Spin-orbit coupling and hyperfine interaction (nucleus-electron coupling) will add an extra $\Delta H$ in the Hamiltonian in the form of
$$
\Delta H = C \left(\frac{1}{2}(L_{+} S_{+} + L_{-} S_{-}) + L_{z} S_{z}\right)
$$
or
$$
\Delta H = A \left(\frac{1}{2}(J_{+} I_{+} + J_{-} I_{-}) + J_{z} I_{z}\right)
$$
But the electric dipole operator acts only on the orbital part of the wavefunction and does not depend on spin or nuclear spin. Thus, the matrix element $\langle L_{f} | e \hat{r} \cdot \vec{E} | L_{i} \rangle$ must satisfy $\Delta L = \pm 1$ because it is a tensor operator of rank 1 in orbital angular momentum space (as the consequence of Wigner-Eckart Theorem).So even when states are labeled by $J$ or $F$ due to spin-orbit or hyperfine interactions, the orbital selection rule $\Delta L = \pm 1$ remains strict because the spin-orbit coupling or the hyperfine interactions won't affect the behavior of the orbit part of the wave function in the dipole matrix. When  $\Delta L = 0$,  the dipole matrix $\bra{J_{f}} e \hat{r} \cdot \vec{E} \ket{J_{i}}$ or   $\bra{F_{f}} e \hat{r} \cdot \vec{E} \ket{F_{i}}$ remains zero.

**b)** Using the Rb87 $5S_{1/2}$–$5P_{3/2}$ dipole matrix elements given in the tables below (do not calculate), check that the radiative lifetime of $5P_{3/2} |F=2, m_{F}=1\rangle$, $5P_{3/2} |F=1, m_{F}=0\rangle$, and $5P_{3/2} |F=3, m_{F}=3\rangle$ Zeeman sublevels are the same. Assuming for the time being that the spontaneous-emission transition rate between any two-states is proportional to the square of their dipole-matrix element.

Suppose that the spontaneous-emission transition rate between any two-states is proportional to the square of their dipole-matrix element. So for the $5P_{3/2} |F=2, m_{F}=1\rangle$ state, the spontaneous-emission transition rate is proportional to
$$
\begin{gathered}
\frac{1}{8}, \frac{1}{8} \quad (\sigma^{-} \text{transitions}) \\
\frac{1}{24}, \frac{1}{8} \quad (\pi \text{transitions}) \\
\frac{1}{12} \quad (\sigma^{+} \text{transitions}) \\
\end{gathered}
$$
So the total transition rate is proportional to $\frac{1}{2}$.

For the $5P_{3/2} |F=1, m_{F}=0\rangle$ state, the spontaneous-emission transition rate is proportional to
$$
\begin{gathered}
\frac{1}{40}, \frac{5}{24} \quad (\sigma^{-} \text{transitions}) \\
\frac{1}{30}, 0 \quad (\pi \text{transitions}) \\
\frac{1}{40}, \frac{5}{24} \quad (\sigma^{+} \text{transitions}) \\
\end{gathered}
$$
So the total transition rate is proportional to $\frac{1}{2}$.

For the $5P_{3/2} |F=3, m_{F}=3\rangle$ state, the spontaneous-emission transition rate is proportional to
$$
\frac{1}{2} \quad (\sigma^{-} \text{transitions})
$$
So the total transition rate is proportional to $\frac{1}{2}$.

Above showed that the radiative lifetime of $5P_{3/2} |F=2, m_{F}=1\rangle$, $5P_{3/2} |F=1, m_{F}=0\rangle$, and $5P_{3/2} |F=3, m_{F}=3\rangle$ Zeeman sublevels are the same. 

<img src="./Atomic and Molecular Physics Homework.assets/image-20251021103426814.png" alt="image-20251021103426814">

<img src="./Atomic and Molecular Physics Homework.assets/image-20251021103445261.png" alt="image-20251021103445261">

<img src="./Atomic and Molecular Physics Homework.assets/image-20251021103505831.png" alt="image-20251021103505831">

### Question 3

The graphs on the right show the Zeeman shift of the $5S_{1/2}$ and $5P_{3/2}$ hyperfine levels of Rb87.

**a)** Considering the $5S_{1/2}$ hyperfine levels, discuss the transition selection rules near zero magnetic fields.

Transitions within the $5S_{1/2}$ state are magnetic dipole transitions. The selection rules for magnetic dipole transitions are:

- $\Delta F = 0, \pm 1$ (but $F=0 \to F=0$ is forbidden).
- $\Delta m_{F} = 0, \pm 1$.

So all magnetic transitions between the  $5S_{1/2}$ hyperfine levels are allowed.

**b)** An experimenter prepares a quantum state in the $5S_{1/2} |F=1, m_{F}=-1\rangle$ eigenstate. He then adiabatically sweeps the external magnetic field to 10000 G. After that he would like to transfer the atomic state to all other states in the $5S_{1/2}$ manifold using Rabi transitions. Discuss in detail how he could achieve that? For each transition, specify the polarization of the field he should use.

Because the experimenter want to have transitions within the $5S_{1/2}$ state, he have to use magnetic dipole transitions. For magnetic dipole Transitions,
$$
W = (g_{J} \vec{J} + g_{I} \vec{I}) \cdot \vec{B} \cos \omega t
$$

$$
(g_{J} \vec{J} + g_{I} \vec{I}) \cdot \vec{B} \cos \omega t  = g_{J} (B_{+}^{*} J_{+} + B_{z} J_{z} + B_{z}^{*} J_{-}) + g_{I} (B_{+}^{*} I_{+} + B_{z} I_{z} + B_{-}^{*} I_{-})
$$

Under high magnetic field like 10000G, the hyperfine structure of the $5S_{1/2}$ states of the Rb87 atoms can be represented in basis of $\ket{J} \otimes \ket{I}$. So using the selection rules for magnetic dipole transitions, we can deduce that the possible transition will take place when $\Delta L = 0$, $\Delta I = 0, \pm1$, $\Delta J = 0, \pm 1$. 

The state $5S_{1/2} |F=1, m_{F}=-1\rangle$ will change into 
$$
\ket{m_{J} = - \frac{1}{2}, m_{I} = - \frac{1}{2}}
$$
under high magnetic field. So we can design sequence of transitions to all states as follows:

1.From initial $|m_{J} = -1/2, m_{I} = -1/2\rangle$ to $|m_{J} = 1/2, m_{I} = -1/2\rangle$

- Type: Electron spin flip ($\Delta m_{J} = +1$, $\Delta m_{I} = 0$)  
- Polarization: $\sigma^{+}$  
- This transition directly populates $|m_{J} = 1/2, m_{I} = -1/2\rangle$.

2.From initial $|m_{J} = -1/2, m_{I} = -1/2\rangle$ to $|m_{J} = -1/2, m_{I} = -3/2\rangle$

- Type: Nuclear spin flip ($\Delta m_{I} = -1$, $\Delta m_{J} = 0$)  
- Polarization: $\sigma^{-}$  
- This transition directly populates $|m_{J} = -1/2, m_{I} = -3/2\rangle$.

3.From initial $|m_{J} = -1/2, m_{I} = -1/2\rangle$ to $|m_{J} = -1/2, m_{I} = 1/2\rangle$

- Type: Nuclear spin flip ($\Delta m_{I} = +1$, $\Delta m_{J} = 0$)  
- Polarization: $\sigma^{+}$  
- This transition directly populates $|m_{J} = -1/2, m_{I} = 1/2\rangle$. 

4.From $|m_{J} = -1/2, m_{I} = 1/2\rangle$ to $|m_{J} = -1/2, m_{I} = 3/2\rangle$

- Type: Nuclear spin flip ($\Delta m_{I} = +1$, $\Delta m_{J} = 0$)  
- Polarization: $\sigma^{+}$  
- This transition populates $|m_{J} = -1/2, m_{I} = 3/2\rangle$ from the state reached in step 3.

5.From $|m_{J} = 1/2, m_{I} = -1/2\rangle$ to $|m_{J} = 1/2, m_{I} = -3/2\rangle$

- Type: Nuclear spin flip ($\Delta m_{I} = -1$, $\Delta m_{J} = 0$)  
- Polarization: $\sigma^{-}$  
- This transition populates $|m_{J} = 1/2, m_{I} = -3/2\rangle$ from the state reached in step 1.

6.From $|m_{J} = 1/2, m_{I} = -1/2\rangle$ to $|m_{J} = 1/2, m_{I} = 1/2\rangle$

- Type: Nuclear spin flip ($\Delta m_{I} = +1$, $\Delta m_{J} = 0$)  
- Polarization: $\sigma^{+}$  
- This transition populates $|m_{J} = 1/2, m_{I} = 1/2\rangle$ from the state reached in step 1.

7.From $|m_{J} = 1/2, m_{I} = 1/2\rangle$ to $|m_{J} = 1/2, m_{I} = 3/2\rangle$

- Type: Nuclear spin flip ($\Delta m_{I} = +1$, $\Delta m_{J} = 0$)  
- Polarization: $\sigma^{+}$  
- This transition populates $|m_{J} = 1/2, m_{I} = 3/2\rangle$ from the state reached in step 6.

**c)** Discuss in detail the electric-dipole transition rules from the $5S_{1/2}$ to $5P_{3/2}$ states at low and high magnetic fields.

At low magnetic fields, the good quantum number is $F$, so the electric-dipole transition rules are
$$
\begin{gathered}
\Delta F = 0, \pm1 \\
\end{gathered}
$$
while the $F = 0 \to F' = 0$  transition is forbidden. So to the $5P_{3/2}$ state:

- From $F = 1$: allowed to $F = 0$ ($\Delta F = -1$), $F = 1$ ($\Delta F = 0$), or $F = 2$ ($\Delta F = +1$). 
- Transitions to $F = 3$ are forbidden ($\Delta F = +2$).
- From $F = 2$: allowed to $F = 1$ ($\Delta F = -1$), $F = 2$ ($\Delta F = 0$), or $F = 3$ ($\Delta F = +1$). 
- Transitions to $F = 0$ are forbidden ($\Delta F = -2$).

At high magnetic fields, the good quantum number is $J$, where the selection rules become
$$
\begin{gathered}
\Delta J = 0, \pm 1 \\
\Delta m_{J} = \pm 1
\end{gathered}
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

<img src="./Atomic and Molecular Physics Homework.assets/image-20251021103526968.png" alt="image-20251021103526968">

## Homework 3

### Question 1: Ramsey fringes and atomic clock (50 points)

<img src="./Atomic and Molecular Physics Homework.assets/image-20251104101453577.png" alt="image-20251104101453577">

#### Radiation pulses

At $t=0$, the atom enters the interaction region. The atom is prepared initially in the state $|0\rangle$, i.e. $\sigma_{x} = \sigma_{y} = 0$ and $\sigma_{z} = 1$. Assume that the atom stays in the interaction region for a time $\tau$ and that the magnetic field is homogeneous in that region. Suppose $\omega = \omega_{0}$.

**(a)** Represent the evolution of the Bloch vector on the Bloch sphere, and find the vector $\boldsymbol{\sigma}$ after time $\tau$ (choosing Rabi frequency 

such that $\Omega_{0} \tau = \frac{\pi}{2}$).

Given that the time evolving equation can be represented as
$$
\dv{\vec{\sigma}}{t} = \vec{W} \times \vec{\sigma}
$$
in the rotating frame where $\vec{W} = (\Omega, 0, \omega - \omega_{0})$

So when it exactly resonances, the Pauli matrix vector will evolve as
$$
\begin{gathered}
\sigma_{x} (t) = 0 \\
\sigma_{y} (t) = - \sin(\Omega t) \\
\sigma_{z} (t) = \cos(\Omega t)
\end{gathered}
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
**(c)** Since the atoms fall freely, in this second pass, they spend the same amount of time $\tau$ in the interaction region as in the first pass. Represent again the evolution of the Bloch vector on the Bloch sphere after the interaction (choosing Rabi frequency such that $\Omega_{0} \tau = \frac{\pi}{2}$).

The evolvement of the Pauli matrix vector is
$$
\begin{gathered}
\sigma_{x} = 0 \\
\sigma_{y} = - \cos (\Omega t) \\
\sigma_{z} = - \sin (\Omega t)
\end{gathered}
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
\begin{gathered}
\sigma_{x} = \sin (\Delta T) \\
\sigma_{y} = - \cos(\Delta T) \cos (\Omega t) \\
\sigma_{z} = - \cos(\Delta T) \sin (\Omega t)
\end{gathered}
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

There is a fundamental limit to the accuracy at which one can measure the position of the Ramsey fringes, and therefore the precision of the clock. Suppose that we are now working with $N$ atoms (of the order of $10^{6}$ in real experiments), close to the point of the maximum sensitivity of the clock. Show that the probability of detect $n$ atoms in state $|1\rangle$ in the final measurement follows the Poisson distribution. What is the standard deviation? How does it convert into the standard deviation of the frequency? This noise comes from the fact that at measurement, each atom is projected in one or the other internal state. The randomness that is added in that step leads to a fundamental noise which is called quantum projection noise.

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

So far we assume that the microwave is on resonance in the interaction area. In fact, when the microwave oscillator is off resonance, the detuning occurs in the interaction area as well. Use 3D rotation matrices in Mathematica to compute the Ramsey fringes including the effects of detuning considering the case where $\Omega_{0} \tau = \frac{\pi}{2}$, $\Omega_{0} = 14$ Hz and the interrogation time is $T = 3$ s.

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

<img src="./Atomic and Molecular Physics Homework.assets/image-20251112220550103.png" alt="image-20251112220550103">

<img src="./Atomic and Molecular Physics Homework.assets/image-20251104101603947.png" alt="image-20251104101603947">

### Question 2 (30 points)

**(a)** The lifetime of the $5p$ state of Rb is $26.2 ns$, wavelength is $780 nm$. What is the linewidth of the $5s-5p$ transition?
$$
\Delta f = \frac{1}{2\pi \tau}
$$
where $\tau = 26.2 \, \text{ns} = 26.2 \times 10^{-9} \, \text{s}$
$$
\Delta f = \frac{1}{2\pi \times 26.2 \times 10^{-9}} \approx 6.07 \times 10^{6} \, \text{Hz} = 6.07 \, \text{MHz}
$$
Thus, the linewidth is $6.07 MHz$.

**(b)** Calculate the saturation intensity of Rb $5s-5p$ transition in units of $W/cm^{2}$.

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
I = \frac{2P}{\pi w^{2}},
$$

$$
\frac{I}{I_{\text{sat}}} = \frac{2 \Omega^{2}}{\Gamma^{2}}
$$

Laser intensity,
$$
I = \frac{2 \times 0.001}{\pi \times (0.001)^{2}} = \frac{0.002}{\pi \times 10^{-6}} \approx 636.6 \, \text{W/m}^{2}
$$
The ratio $\frac{I}{I_{\text{sat}}}$ is:
$$
\frac{I}{I_{\text{sat}}} = \frac{636.6}{16.74} \approx 38.03
$$
The Rabi frequency $\Omega$ is related by
$$
\frac{I}{I_{\text{sat}}} = \frac{2 \Omega^{2}}{\Gamma^{2}}
$$
where $\Gamma = 3.817 \times 10^{7} \, \text{s}^{-1}$. Solving for $\Omega$
$$
\Omega^{2} = \frac{\frac{I}{I_{\text{sat}}} \times \Gamma^{2}}{2} = \frac{38.03 \times (3.817 \times 10^{7})^{2}}{2} \approx 2.770 \times 10^{16}
$$

$$
\Omega = \sqrt{2.770 \times 10^{16}} \approx 1.66 \times 10^{8} \, \text{rad/s}
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
R_{\text{sc}} = \frac{\Gamma}{2} \frac{\frac{I}{I_{\text{sat}}}}{1 + \frac{I}{I_{\text{sat}}} + (2 \frac{\Delta}{\Gamma})^{2}}
$$
where:

$\Delta = 12 \, \text{MHz} = 12 \times 10^{6} \, \text{Hz}$ and Angular detuning $\Delta_{\text{angular}} = 2\pi \Delta = 2\pi \times 12 \times 10^{6} \approx 7.54 \times 10^{7} \, \text{rad/s}$.

Compute:
$$
\frac{2 \Delta}{\Gamma} = \frac{2 \times 7.54 \times 10^{7}}{3.817 \times 10^{7}} \approx 3.95, \quad \left( \frac{2 \Delta}{\Gamma} \right)^{2} \approx 15.60
$$
$$
1 + \frac{I}{I_{\text{sat}}} + (\frac{2 \Delta}{\Gamma})^{2} = 1 + 38.03 + 15.60 = 54.63
$$
$$
R_{\text{sc}} = \frac{3.817 \times 10^{7}}{2} \times \frac{38.03}{54.63} \approx 1.909 \times 10^{7} \times 0.696 \approx 1.33 \times 10^{7} \, \text{s}^{-1}
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

The unperturbed Hamiltonian for the two-level system has energies $E_{1}$ and $E_{2}$, with $\epsilon = E_{2} - E_{1}$. Choosing the zero of energy at the average $\frac{E_{1} + E_{2}}{2}$, the energies become $-\frac{\epsilon}{2}$ and $\frac{\epsilon}{2}$. The static electric field introduces a perturbation $H_{I} = -\mathbf{d} \cdot \mathbf{E}$, where $\mathbf{d}$ is the dipole moment operator. Assuming the states have opposite parity, the off-diagonal matrix element $V = \langle 1 | H_{I} | 2 \rangle$ is non-zero and proportional to the electric field magnitude. Thus, the Hamiltonian is
$$
\hat{H} = \begin{pmatrix}
\frac{\epsilon}{2} & V \\
V & -\frac{\epsilon}{2}
\end{pmatrix}
$$

The energy eigenvalues are found by solving $\det(\hat{H} - E I) = 0$
$$
\left( \frac{\epsilon}{2} - E \right) \left( -\frac{\epsilon}{2} - E \right) - V^{2} = 0
$$

$$
E = \pm \frac{1}{2} \sqrt{\epsilon^{2} + 4V^{2}}
$$

Thus, the eigenvalues are $E_{\pm} = \pm \frac{1}{2} \sqrt{\epsilon^{2} + 4V^{2}}$.

**(b)** Show that 'weak' fields produce a quadratic Stark effect on the atom, equivalent to the usual second-order perturbation-theory expression for a perturbation $H_{I}$
$$
\Delta E_{1} = -\frac{|\langle 2 | H_{I} | 1 \rangle|^{2}}{E_{2} - E_{1}}
$$

A similar expression can be found for the energy shift $\Delta E_{2}$ of the other level (in the opposite direction).

For weak fields, $V \ll \epsilon$, the eigenvalues can be expanded as
$$
E_{\pm} = \pm \frac{1}{2} \sqrt{\epsilon^{2} + 4V^{2}} = \pm \frac{\epsilon}{2} \sqrt{1 + \frac{4V^{2}}{\epsilon^{2}}} \approx \pm \frac{\epsilon}{2} \left( 1 + \frac{2V^{2}}{\epsilon^{2}} \right) = \pm \frac{\epsilon}{2} \pm \frac{V^{2}}{\epsilon}
$$
The unperturbed energies are $E_{1} = -\frac{\epsilon}{2}$ and $E_{2} = \frac{\epsilon}{2}$, so the shifts are:
$$
\begin{gathered}
\Delta E_{1} \approx -\frac{V^{2}}{\epsilon} \\
\Delta E_{2} \approx \frac{V^{2}}{\epsilon}
\end{gathered}
$$
In perturbation theory, $H_{I}$ has matrix element $\langle 2 | H_{I} | 1 \rangle = V$, so
$$
\Delta E_{1} = -\frac{|\langle 2 | H_{I} | 1 \rangle|^{2}}{E_{2} - E_{1}} = -\frac{V^{2}}{\epsilon}
$$
which matches the expansion. Similarly, $\Delta E_{2} = \frac{V^{2}}{\epsilon}$. This quadratic dependence on $V$ (and thus on the electric field) is the quadratic Stark effect.

**(c)** Estimate the Stark shift for the ground state of a sodium atom in a field of $10^{6} \, \text{V m}^{-1}$ (e.g. $10^{4} \, \text{V}$ between plates $1 \, \text{cm}$ apart).

For the ground state of sodium, the Stark shift is estimated using second-order perturbation theory. The dominant contribution comes from the first excited state, with energy difference $\Delta E = E_{3p} - E_{3s} \approx 2.1 \, \text{eV}$. The oscillator strength for the $3s–3p$ transition is $f \approx 1$. The dipole matrix element squared is
$$
|\langle 3p | d | 3s \rangle|^{2} = e^{2} \frac{3 \hbar^{2} f}{2m \Delta E}
$$
The energy shift for the ground state is
$$
\Delta E_{\text{ground}} = - \frac{E^{2} |\langle 3p | d | 3s \rangle|^{2}}{\Delta E}
$$
with electric field$E = 10^{6} \, \text{V/m}$, $\Delta E \approx 2.1 \, \text{eV}$,  $|\langle d \rangle|^{2} \approx \frac{3f}{2 \Delta E} \approx 19.43 \, a_{0}^{2}$ .

Then
$$
\Delta E_{\text{ground}} \approx -2.59 \times 10^{-8} \, eV
$$

Thus, the Stark shift for the ground state of sodium in a field of $10^{6} \, \text{V/m}$ is approximately $-3 \times 10^{-8} \, \text{eV}$.

## Homework 4

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
\psi^{(0)} (r_{1}, r_{2}) = \psi_{2}s^{(Z = 2)} (r_{1}) \psi_{4}p^{(Z = 1)} (r_{2})
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
J = \frac{e^{2}}{4 \pi \epsilon_{0}} \iint u_{2}s^{*} (1) u_{2s} (1) \frac{1}{r_{12}} u_{4}p^{*}(2) u_{4p} (2) \, \dd[3]{r_{1}} \dd[3]{r_{2}}
$$
and the exchange integral
$$
K = \frac{e^{2}}{4 \pi \epsilon_{0}} \iint u_{2}s^{*} (1) u_{4}p^{*} (2) \frac{1}{r_{12}} u_{2s} (2) u_{4p} (1) \, \dd[3]{r_{1}} \dd[3]{r_{2}}
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
u_{4p} (r) =  \frac{1}{256 \sqrt{15} \, a_{0}^{\frac{3}{2}}} e^{- \frac{r}{4 a_{0}}} \; \frac{r}{a_{0}} \left( \frac{r^{2}}{a_{0}^{2}} - \frac{20r}{a_{0}} + 80 \right)
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
\begin{gathered}
\Delta E_{1} = J + K \approx 0.0661418 \cdot \frac{e^{2}}{4 \pi \epsilon_{0} a_{0}} \approx 1.79981 \text{eV}\\
\Delta E_{2} = J - K \approx 0.0515306 \cdot \frac{e^{2}}{4 \pi \epsilon_{0} a_{0}} \approx 1.40222 \text{eV}
\end{gathered}
$$
So the energy for the this autoionizing level at singlet and triplet states are
$$
\begin{gathered}
E_{\text{triplet}} = -12.6483699 \text{eV} \\
E_{\text{singlet}} = -13.0459601 \text{eV}
\end{gathered}
$$
For the ground state where the two electrons are at the $1s$ state, the energy is
$$
E^{(0)}_{1s^{2}} = - \frac{2^{2}}{1^{2}} \cdot \frac{m_{e} m_{p}}{m_{e} + m_{p}} c^{2} \alpha^{2} \approx -108.786298 \text{eV}
$$
while the first-order correction gives out that
$$
\begin{gathered}
J = 34.0142328 \text{eV} \\
K = 0
\end{gathered}
$$
So the energy for the ground state is
$$
E_{ground} \approx -108.786298 \text{eV} + 34.0142328 \text{eV} \approx -74.772065 \text{eV}
$$
So the energy gap between the ground state and this exited state is
$$
\begin{gathered}
\Delta E_{\text{triplet}} = E_{\text{triplet}} - E_{ground} = -12.6483699 \text{eV} + 74.772065 \text{eV} \approx 62.1236951 \text{eV} \\
\Delta E_{\text{singlet}} = E_{\text{singlet}} - E_{ground} = -13.045960 \text{eV} + 74.772065 \text{eV} \approx 61.726105 \text{eV}
\end{gathered}
$$
So the wavelength of the UV radiation are
$$
\begin{gathered}
\lambda_{triplet} = \frac{hc}{\Delta E_{triplet}} \approx 19.96 \text{nm}\\
\lambda_{singlet} = \frac{hc}{\Delta E_{singlet}} \approx 20.09\text{nm}
\end{gathered}
$$
**(b)** Find the velocity of the electron emitted in the autoionizing process in which the autoionizing level $2s4p$ decays into a free electron and a $\ce{He+}$ ion in the ground state $1s$.  

For the $\ce{He+}$ ion in the ground state $1s$, the energy is
$$
E = - \frac{2^{2}}{2 \cdot 1^{2}} \cdot \frac{m_{e} m_{p}}{m_{e} + m_{p}} c^{2} \alpha^{2} \approx -54.39315 \text{eV}
$$
So the total energy of the emitted electron is
$$
\begin{gathered}
\Delta E_{triplet} =  -12.6483699 \text{eV} + 54.39315 \text{eV} \approx 41.74478 \text{eV} \\
\Delta E_{\text{singlet}}= -13.045960 \text{eV} + 54.39315 \text{eV} \approx 41.34719 \text{eV}
\end{gathered}
$$
Therefore, the velocity of the emitted electron is
$$
\begin{gathered}
v_{triplet} \approx 3.832 \times 10^{6} m/s \\
v_{singlet} \approx 3.814 \times 10^{6} m/s
\end{gathered}
$$

### Question2

Consider the ground state of zirconium which has a ground state’s term symbol of $^{3}\!F_{2}$. 
**(a)** Determine electron configuration of all 40 electrons of $\ce{Zr}$. 

Zirconium has atomic number $40$. 
$$
1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{6} 4s^{2} 3d^{10} 4p^{6}
$$
The remaining $4$ electrons occupy the $5s$ and $4d$ orbitals. 
Because of the energetic closeness of 5s and 4d, and the extra stability of a filled or half‑filled 4d subshell, the ground‑state configuration is  
$$
[\text{Kr}]\,5s^{2} 4d^{2}
$$

Thus the complete ground‑state electron configuration of $\ce{Zr}$ is  
$$
1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{6} 4s^{2} 3d^{10} 4p^{6} 5s^{2} 4d^{2}
$$

**(b)** According to the given term symbol, what are the spin angular momentum $S$, the orbital angular momentum $L$, and the total angular momentum $J$ for the ground state of $\ce{Zr}$?  

For a term symbol $^{2S+1}L_{J}$:  

- Spin multiplicity $2S+1 = 3 \Rightarrow S = 1$.  
- Orbital symbol $F \Rightarrow L = 3$.  
- Total angular momentum $J = 2$.

**(c)** Determine all possible values of $S$. Does the ground state of $\ce{Zr}$ meet the requirement of Hund’s first rule? Explain your answer. 

The valence electrons that determine the term are the two 4d electrons (the closed shells and the filled 5s subshell contribute $S = 0, L = 0$). 
For two electrons, the total spin quantum number $S$ can be  
$$
S = |s_{1} - s_{2}|, |s_{1} - s_{2} + 1|, \dots, |s_{1} + s_{2}|  = 0 \, \text{or} \, 1
$$

Hund’s first rule states that for a given electron configuration, the term with the highest multiplicity (largest $S$) lies lowest in energy. Here the ground state has $S = 1$ , which is the maximum possible $S$ for the $4d^{2}$ configuration.  

**(d)** Determine all possible values of $L$ by adding all the individual angular momenta $l_{i}$. Does the ground state of $\ce{Zr}$ meet the requirement of the second Hund's rule? Explain your answer.

Each $4d$ electron has orbital quantum number $l = 2$. The total orbital angular momentum $L$ can in principle take values from $|l_{1} - l_{2}|$ to $l_{1} + l_{2}$, 
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

<img src="./Atomic and Molecular Physics Homework.assets/image-20251207181019990.png" alt="image-20251207181019990" style="zoom:25%;" />

**(a)** For atoms or ions whose two valence electrons are in the same $p$-subshell ($p^{2}$). Consider the effects of $L-S$ and $j-j$ coupling. Write down the term symbols of the states (a), (b), ..., (m) in the picture below. Explain your answer.  (The parameter $\chi$ describes the strength of spin orbit coupling. A larger $\chi$ means a larger energy $H_{2}$ discussed in the lecture.)

For left side of the picture, the atomic number is quite low, so it's proper to describe these states using the effect of $L-S$ coupling. For the Silicon atoms, the valence electrons are the two $3p^{2}$ electrons. So the $p^{2}$ configuration gives rise to three terms due to electrostatic repulsion and the Pauli exclusion principle: $^{3P}$, $^{1D}$, and $^{1S}$.

According to the Hund's Rules, the ordering of the states are:

1. $^{3P}$ is the ground term (lowest energy).

2. Highest Orbital ($L$) for same $S$: $^{1D}$ is the next lowest.

3. $^{1S}$ is the highest energy term.

Considering the Fine Structure Spin-Orbit Splitting:

1. The $^{3P}$ term ($S=1, L=1$) splits into $J = 0, 1, 2$. For a less-than-half-filled shell, the lowest $J$ has the lowest energy. $^{3}P_{0} <^{3}P_{1} <^{3}P_{2}$.

2. The $^{1D}$ term ($S=0, L=2$) has only $J=2$: $^{1}D_{2}$.

3. The $^{1S}$ term ($S=0, L=0$) has only $J=0$: $^{1}S_{0}$.

So the energy order at low $\chi$ is  $^{3}P_{0} <^{3}P_{1} <^{3}P_{2} <^{1}D_{2} <^{1}S_{0}$.

$j-j$ Coupling Limit (Right Side):
The electrons couple their spin and orbital angular momenta individually ($j = l \pm s$). For $p$ electrons ($l=1$), $j$ can be $1/2$ or $3/2$.

1. $(1/2, 1/2)$: Both electrons in $j=1/2$. Lowest energy (spin-orbit favors lower $j$). Allowed $J$: 0.

2. $(3/2, 1/2)$: One in $j=3/2$, one in $j=1/2$. Intermediate energy. Allowed $J$: 1, 2.
3. $(3/2, 3/2)$: Both electrons in $j=3/2$. Highest energy. Allowed $J$: 0, 2.

States with the same total angular momentum $J$ do not cross (non-crossing rule).So  we can  connect the levels from left to right based on their energy order for each $J$.

1. $J=0$: Lowest ($^{3}P_{0}$) $\to$ Lowest ($1/2, 1/2$)$_{0}$. Highest ($^{1}S_{0}$) $\to$ Highest ($3/2, 3/2$)$_{0}$.
2. $J=1$: Only one state ($^{3}P_{1}$) $\to$ Middle group ($3/2, 1/2$)$_{1}$.
3. $J=2$: Lower ($^{3}P_{2}$) $\to$ Middle group ($3/2, 1/2$)$_{2}$. Higher ($^{1}D_{2}$) $\to$ Highest group ($3/2, 3/2$)$_{2}$.

According to the analysis above, we can get the assigned term symbols for the points given:

Left Side (L-S Coupling Region):

(a) $^{1}S_{0}$ : The highest energy term on the LHS.

(b) $^{1}D_{2}$ : The middle energy term.

(c) $^{3} P$: The lowest energy term.

The bottom cluster originates from the $^{3P}$ term:

 (f) $^{3}P_{0}$ : The lowest level of the triplet.

(d) $^{3}P_{2}$ : The highest level of the triplet.

(e) $^{3}P_{1}$ : The middle level of the triplet.

Right Side (j-j Coupling Region): In $j-j$ coupling notation $(j_{1}, j_{2})_{J}$

(i) $(3/2, 3/2)$ : The highest energy state.

(l) $(3/2, 1/2)$: The middle energy state.

(m) $(1/2, 1/2)$: The lowest energy state, connected to $^{3} P_{0}$.

(g) $(3/2, 3/2)_{0}$: The highest state, connected to $^{1} S_{0}$.

(h) $(3/2, 3/2)_{2}$ : The second highest state, connected to $^{1}D_{2}$.

(j) $(3/2, 1/2)_{2}$ : The upper state of the middle group ($J=2$), connected to $^{3}P_{2}$.

(k) $(3/2, 1/2)_{1}$ : The lower state of the middle group ($J=1$), connected to $^{3}P_{1}$.
