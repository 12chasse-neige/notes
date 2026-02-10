# Atomic and Molecular Physics Homework 1

Chasse_neige

### Question 1
The eigenfunctions of a Hydrogen are of the form $\psi_{nlm} = R_{nl}(r)P_l^m(\cos\theta)e^{im\phi}$

(a) Write down the explicit forms of $\psi_{100}$, $\psi_{200}$, $\psi_{210}$ and $\psi_{21\pm1}$.
$$
R_{nl}(r) = \sqrt{ \left( \frac{2}{n a_0} \right)^3 \frac{(n-l-1)!}{2n[(n+l)!]} } e^{- \frac{r}{(n a_0)}} \left( \frac{2r}{n a_0} \right)^l L_{n-l-1}^{2l+1} \left( \frac{2r}{n a_0} \right)
$$
Where
$$
L_{k}^{\alpha}(x) = \sum_{j=0}^{k} (-1)^j \binom{k+\alpha}{k-j} \frac{x^j}{j!}
$$

And
$$
Y_{lm}(\theta, \phi) = \sqrt{ \frac{2l+1}{4\pi} \frac{(l-m)!}{(l+m)!} } P_l^m (\cos \theta) e^{i m \phi}
$$
Where
$$
P_l^m(x) = (-1)^m (1 - x^2)^{\frac{m}{2}} \frac{d^m}{dx^m} P_l(x)
$$

So
$$
\psi_{100} = R_{10} (r) Y_{00} (\theta, \phi) = \sqrt{\left( \frac{2}{a_0} \right)^3 \frac{1}{2}} e^{-\frac{r}{a_{0}}} L_{0}^{1} \left(\frac{2r}{a_{0}} \right) \sqrt{\frac{1}{4 \pi}} P_{0}^{0} (\cos \theta) \\
= \frac{2}{a_{0}^{\frac{3}{2}}} \sqrt{\frac{1}{4 \pi}} e^{- \frac{r}{a_{0}}}
$$

$$
\psi_{200} = R_{20} (r) Y_{00} (\theta, \phi) = \sqrt{\left( \frac{2}{2 a_0} \right)^3 \frac{1}{8}} e^{- \frac{r}{2 a_{0}}} L_{1}^{1} \left(\frac{r}{a_{0}} \right) \sqrt{\frac{1}{4 \pi}} P_{0}^{0} (\cos \theta) \\ 
= \frac{1}{2\sqrt{2} a_{0}^{\frac{3}{2}}} \sqrt{\frac{1}{4 \pi}} \left(2 - \frac{r}{a_{0}}\right) e^{- \frac{r}{a_{0}}}
$$

$$
\psi_{210} = R_{21} (r) Y_{1 0} (\theta, \phi) = \sqrt{\frac{1}{a_{0}}^{3} \frac{1}{24}} e^{ -\frac{r}{2 a_{0}}} \frac{r}{a_{0}} L_{0}^{3} \left( \frac{r}{a_{0}} \right) \sqrt{\frac{3}{4 \pi} } P_{1}^{0} (\cos \theta) \\ 
= \frac{1}{2 \sqrt{2} a_{0}^{\frac{3}{2}}} \sqrt{\frac{1}{4 \pi}} \frac{r}{a_{0}} e^{- \frac{r}{2 a_{0}}} \cos \theta
$$

$$
\psi_{21 \pm 1} = R_{21} (r) Y_{1 \pm 1} (\theta, \phi) = \sqrt{\frac{1}{a_{0}}^{3} \frac{1}{24}} e^{ -\frac{r}{2 a_{0}}} \frac{r}{a_{0}} L_{0}^{3} \left( \frac{r}{a_{0}} \right) \sqrt{\frac{3}{4 \pi} 2^{\mp 1}} P_{1}^{\pm 1} (\cos \theta) e^{i \pm 1 \phi}
$$

Show the two functions respectively 
$$
\psi_{211} = - \frac{1}{4 a_{0}^{\frac{3}{2}}} \sqrt{\frac{1}{4 \pi}} \frac{r}{a_{0}} e^{- \frac{r}{2 a_{0}}} \sin \theta e^{i \phi}
$$

$$
\psi_{21-1} = \frac{1}{4 a_{0}^{\frac{3}{2}}} \sqrt{\frac{1}{4 \pi}} \frac{r}{a_{0}} e^{- \frac{r}{2 a_{0}}} \sin \theta e^{- i \phi}
$$

(b) Calculate spatial dependence of the probability current $J=\frac{\hbar}{2\mu i}(\psi^*\nabla\psi-\psi\nabla\psi^*)$ of $\psi_{nlm}$. Describe and sketch distribution of $J$ for $\psi_{200}$, $\psi_{210}$ and $\psi_{211}$.

The probability current
$$
J_{nlm} = \frac{\hbar}{2 \mu i} (\psi_{nlm}^{*} \nabla \psi_{nlm} - \psi_{nlm} \nabla \psi_{nlm}^{*}) \\ 
= \frac{\hbar}{2 \mu i} \frac{2 i m}{r \sin \theta} \left( \psi_{nl-m} \psi_{nlm} \right) \hat{e}_{\phi} = \frac{\hbar m}{\mu r \sin \theta} |\psi_{nlm}|^{2} \hat{e}_{\phi}
$$
For $\psi_{200}$ and $\psi_{210}$
$$
J = 0
$$
For $\psi_{211}$ 
$$
J (r, \theta, \phi) = \frac{\hbar }{\mu} \frac{r}{64 \pi a_{0}^{5}} e^{- \frac{r}{a_{0}}} \sin \theta \hat{e}_{\phi}
$$
(c) Use the probability current obtained above to show that the z-component of the magnetic moment of $\psi_{nlm}$ is given by $M_z=m\mu_B$ where $\mu_B=\frac{e\hbar}{2\mu}$ is the Bohr magneton.

$$
M_{z} = - \int \frac{e}{2} \vec{r} \times \vec{J} dv = -\frac{e \hbar m}{2 \mu} \int \frac{|\psi_{nlm}|^{2}}{r \sin \theta} r \sin \theta dv = - m \mu_{B}
$$

### Question 2
Using $H_{hfB} = A \vec{I} \cdot \vec{J} + \frac{\mu_B}{\hbar} (g_J J_z + g_I I_z) B_z$, compute the hyperfine structure of the $5S_{1/2}$ ground state of $^{87}\text{Rb}$ atom under the influence of an external magnetic field. The relevant parameters are given in the next page.

(a) You should write a Matlab or Mathematica script or any computation script of your preference. Use $|J, m_J\rangle |I, m_I\rangle$ as your starting basis to obtain the matrix representation of $H_{hfB}$ and then diagonalize this matrix to obtain the eigenenergies and eigenstates. Do not use the Breit-Rabi formula. Submit your results together with 1 page of your program.

Under the  $|J, m_J\rangle |I, m_I\rangle$ basis, the Hamiltonian can be represented as
$$
H_{hfB} = A \left( \frac{I_+ J_- + I_- J_+}{2} + I_z J_z \right) + \frac{\mu_{B}}{\hbar} (g_{J} J_{z} + g_{I} I_{z}) B_{z}
$$
For $^{87}\text{Rb}$ atoms' $5 S_{1/2}$ state
$$
m_{J} = -\frac{1}{2}, \frac{1}{2} \\
m_{I} = - \frac{3}{2}, -\frac{1}{2}, \frac{1}{2}, \frac{3}{2}
$$
Using the basis of 
$$
\ket{m_{J}  = -\frac{1}{2}} \otimes \ket{m_{I} =  -\frac{3}{2}}, \quad \ket{m_{J}  = -\frac{1}{2}} \otimes \ket{m_{I} =  -\frac{1}{2}} \\
\ket{m_{J}  = -\frac{1}{2}} \otimes \ket{m_{I} =  \frac{1}{2}}, \quad \ket{m_{J}  = -\frac{1}{2}} \otimes \ket{m_{I} =  \frac{3}{2}} \\
\ket{m_{J}  = \frac{1}{2}} \otimes \ket{m_{I} =  -\frac{3}{2}}, \quad \ket{m_{J}  = \frac{1}{2}} \otimes \ket{m_{I} =  -\frac{1}{2}} \\
\ket{m_{J}  = \frac{1}{2}} \otimes \ket{m_{I} =  \frac{1}{2}}, \quad \ket{m_{J}  = \frac{1}{2}} \otimes \ket{m_{I} =  \frac{3}{2}} \\
$$
The Hamiltonian matrix can be obtained as
$$
H_{ij} = A \bra{i} \frac{I_+ J_- + I_- J_+}{2} + I_z J_z \ket{j} + \frac{\mu_{B}}{\hbar} (g_{J} J_{z} + g_{I} I_{z}) B_{z}
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
(b) When B=0, write down all $|F, m_F\rangle$ states in the basis of $|J, m_J\rangle |I, m_I\rangle$ from your computations. Compare your results to that based on the Clebsch-Gordan coefficients? Compare also the eigenenergies you obtain to the formula given in the lecture notes.
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

<img src="./Atomic and Molecular Physics Homework 1.assets/image-20251009000608068.png" alt="image-20251009000608068">

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
\vec{I} \cdot \vec{J} = \frac{I_+ J_- + I_- J_+}{2} + I_z J_z
$$
<img src="./Atomic and Molecular Physics Homework 1.assets/image-20250929134001198.png" alt="image-20250929134001198">