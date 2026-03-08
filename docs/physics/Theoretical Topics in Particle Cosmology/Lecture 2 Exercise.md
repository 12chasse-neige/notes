# Lecture 2 Exercise

### (1) Please finish the integral

$$
\int \frac{d^{3}\vec{k}}{(2\pi)^{3}} \frac{e^{+i \vec{k} \cdot \vec{x}}}{\vec{k}^{2} + m^{2}} \tag{35}
$$

The integral equals
$$
\int \frac{d^{3}\vec{k}}{(2\pi)^{3}} \frac{e^{+i \vec{k} \cdot \vec{x}}}{\vec{k}^{2} + m^{2}} = \frac{1}{(2 \pi)^{2}} \int \frac{k^{2} \dd{k}}{k^{2} + m^{2}} \int \sin \theta \dd{\theta} e^{i k x \cos \theta} = \frac{1}{(2 \pi)^{2} x} \int_{0}^{\infty} \frac{2u \sin u \dd{u}}{u^{2} + m^{2} x^{2}}
$$
We’ll use the residue theorem to treat wirth the radial part
$$
\frac{1}{(2 \pi)^{2}x} \int_{0}^{\infty} \frac{2u \sin u \dd{u}}{u^{2} + m^{2} x^{2}} = \frac{1}{(2 \pi)^{2} x} \int_{- \infty}^{\infty} \frac{1}{2 i} \frac{2u e^{iu} \dd{u}}{u^{2} + m^{2} x^{2}} = \frac{1}{2 \pi x} \Res[\frac{u e^{iu}}{u^{2} + m^{2} x^{2}}, u = imx] = \frac{e^{- mx}}{4 \pi x}
$$
### (2) Starting from the action of the photon field (without source), please derive its gauge invariant energy-momentum tensor $T_{\mu\nu}$ and show that it is traceless.

The Lagrangian of the photon field is
$$
\mathcal{L} = -\frac{1}{4} F_{\mu\nu} F^{\mu\nu}
$$
And the energy-momentum tensor is defined as
$$
T^{\mu \nu} = \frac{1}{\mu_{0}} \left(F^{\mu \alpha} F^{\nu} {}_{\alpha} - \eta^{\mu \nu} F^{\rho \sigma} F_{\rho \sigma}\right)
$$
Calculate the components of the energy-momentum tensor
$$
T^{\mu\nu} = \frac{1}{\mu_{0}}
\begin{pmatrix}
\frac{1}{2}(E^{2} + B^{2}) & (\mathbf{E}\times\mathbf{B})_{x} & (\mathbf{E}\times\mathbf{B})_{y} & (\mathbf{E}\times\mathbf{B})_{z} \\
(\mathbf{E}\times\mathbf{B})_{x} & -E_{x}^{2} - B_{x}^{2} + \frac{1}{2}(E^{2}+B^{2}) & -E_{x} E_{y} - B_{x} B_{y} & -E_{x} E_{z} - B_{x} B_{z} \\
(\mathbf{E}\times\mathbf{B})_{y} & -E_{y} E_{x} - B_{y} B_{x} & -E_{y}^{2} - B_{y}^{2} + \frac{1}{2}(E^{2}+B^{2}) & -E_{y} E_{z} - B_{y} B_{z} \\
(\mathbf{E}\times\mathbf{B})_{z} & -E_{z} E_{x} - B_{z} B_{x} & -E_{z} E_{y} - B_{z} B_{y} & -E_{z}^{2} - B_{z}^{2} + \frac{1}{2}(E^{2}+B^{2})
\end{pmatrix}
$$

and we can find that the energy-momentum tensor’s trace is 
$$
\frac{1}{2} (E^{2} + B^{2}) + -E_{x}^{2} - B_{x}^{2} + \frac{1}{2}(E^{2}+B^{2}) + -E_{y}^{2} - B_{y}^{2} + \frac{1}{2}(E^{2}+B^{2}) + -E_{z}^{2} - B_{z}^{2} + \frac{1}{2}(E^{2}+B^{2}) = 0
$$
So the tensor is traceless, and the covariant version of this tensor, only with the $T_{0i}$ and $T_{i0}$ components’ signs inversed, is also traceless.

### (3) Please derive (26).

>But a direct calculation gives
>
>$$
>R_{y}^{-1}(\theta) L_{x}(\eta_{2}) L_{z}(\eta_{1}) e^{\mu}_{\pm}(k) = e^{\mu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} k^{\mu} \tag{26}
>$$
>

Write the matrix for the transformation directly
$$
R_{y}^{-1}(\theta) L_{x}(\eta_{2}) L_{z}(\eta_{1}) = 
\begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & \cos \theta & 0 & - \sin \theta \\
0 & 0 & 1 & 0 \\
0 & \sin \theta & 0 & \cos \theta 
\end{pmatrix} \begin{pmatrix}
\cosh \eta_{2} & \sinh \eta_{2} & 0 & 0 \\
\sinh \eta_{2} & \cosh \eta_{2} & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix} \begin{pmatrix} 
\cosh \eta_{1} & 0 & 0 & \sinh \eta_{1} \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
\sinh \eta_{1} & 0 & 0 & \cosh \eta_{1}
\end{pmatrix}
$$
The calculation gives out that this product equals

$$
\begin{pmatrix}
\cosh \eta_{2} \cosh \eta_{1} & \sinh \eta_{2} & 0 & \cosh \eta_{2} \sinh \eta_{1} \\
\cos \theta \sinh \eta_{2} \cosh \eta_{1} - \sin \theta \sinh \eta_{1} & \cos \theta \cosh \eta_{2} & 0 & \cos \theta \sinh \eta_{2} \sinh \eta_{1} - \sin \theta \cosh \eta_{1} \\
0 & 0 & 1 & 0 \\
\sin \theta \sinh \eta_{2} \cosh \eta_{1} + \cos \theta \sinh \eta_{1} & \sin \theta \cosh \eta_{2} & 0 & \sin \theta \sinh \eta_{2} \sinh \eta_{1} + \cos \theta \cosh \eta_{1}
\end{pmatrix}
$$

And the relation between $\eta_{1}$, $\eta_{2}$ and $\theta$ satisfies
$$
\cos \theta = \cosh \eta_{1} - \sinh \eta_{1}
$$
and
$$
\tan \theta = \sinh \eta_{2}
$$
So we can get $\cosh \eta_{2} = \frac{1}{\cos \theta}$, and
$$
\sinh \eta_{1} = \frac{\sin^{2} \theta}{2\cos \theta} \quad \cosh \eta_{1} =  \frac{1 + \cos^{2} \theta}{2 \cos \theta}
$$
So the whole matrix, using $\theta$ to depict, is
$$
\begin{pmatrix}
\frac{1 + \cos^{2} \theta}{2 \cos^{2} \theta} & \tan \theta & 0 & 2 \tan^{2} \theta \\
\sin \theta \cos \theta & 1 & 0 & - \sin \theta \cos \theta \\
0 & 0 & 1 & 0 \\
\frac{\sin^{2} \theta (1 + 2 \cos^{2} \theta)}{2 \cos^{2} \theta} & \tan \theta & 0 & \frac{2 \cos^{4} \theta - \cos^{2} \theta + 1}{2 \cos^{2} \theta}
\end{pmatrix}
= I + \begin{pmatrix}
\frac{1 - \cos^{2} \theta}{2 \cos^{2} \theta} & \tan \theta & 0 & 2 \tan^{2} \theta \\
\sin \theta \cos \theta & 0 & 0 & - \sin \theta \cos \theta \\
0 & 0 & 0 & 0 \\
\frac{\sin^{2} \theta (1 + 2 \cos^{2} \theta)}{2 \cos^{2} \theta} & \tan \theta & 0 & \frac{2 \cos^{4} \theta - 3 \cos^{2} \theta + 1}{2 \cos^{2} \theta}
\end{pmatrix}
$$
Therefore, put the total transformation on the vectors
$$
e^{\mu}_{\pm}(k) = \frac{1}{\sqrt{2}} \begin{pmatrix} 0 \\ 1 \\ \pm i \\ 0 \end{pmatrix}
$$
we’ll get
$$
I e^{\mu}_{\pm}(k) + \begin{pmatrix}
\frac{1 - \cos^{2} \theta}{2 \cos^{2} \theta} & \tan \theta & 0 & 2 \tan^{2} \theta \\
\sin \theta \cos \theta & 0 & 0 & - \sin \theta \cos \theta \\
0 & 0 & 0 & 0 \\
\frac{\sin^{2} \theta (1 + 2 \cos^{2} \theta)}{2 \cos^{2} \theta} & \tan \theta & 0 & \frac{2 \cos^{4} \theta - 3 \cos^{2} \theta + 1}{2 \cos^{2} \theta}
\end{pmatrix} e^{\mu}_{\pm}(k) = e^{\mu}_{\pm}(k) + \frac{1}{\sqrt{2}} \begin{pmatrix} \tan \theta \\ 0 \\ 0 \\ \tan \theta \end{pmatrix}
$$

$$
e^{\mu}_{\pm}(k) + \frac{1}{\sqrt{2}} \begin{pmatrix} \tan \theta \\ 0 \\ 0 \\ \tan \theta \end{pmatrix} = e^{\mu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} k^{\mu}
$$

### (4) Please prove (29).

>What are they? $R_{z}(\theta)$ is clearly an SO(2) generator; For 2 $R \times L$-type transform, taking $\theta \rightarrow 0$ we get generators:
>
>$$
>R_{z}(\theta) = 1 - i \theta \underbrace{\begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & i & 0 \\ 0 & -i & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}}_{J_{z}}, \quad R_{y}^{-1} L_{x} L_{z} = 1 - i \theta \underbrace{\begin{pmatrix} 0 & i & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & 0 & 0 \\ 0 & i & 0 & 0 \end{pmatrix}}_{T_{x}} \tag{27}
>$$
>
>$$
>R_{x}^{-1} L_{y} L_{z} = 1 - i \theta \underbrace{\begin{pmatrix} 0 & 0 & i & 0 \\ 0 & 0 & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & i & 0 \end{pmatrix}}_{T_{y}} \tag{28}
>$$
>
>$$
>[J_{z}, T_{x}] = i T_{y}, \quad [J_{z}, T_{y}] = -i T_{x}, \quad [T_{x}, T_{y}] = 0 \tag{29}
>$$
>
>The little group is ISO(2).

$$
\comm{J_{z}}{T_{x}} = - \begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & i & 0 \\ 0 & -i & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & i & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & 0 & 0 \\ 0 & i & 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & i & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & 0 & 0 \\ 0 & i & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & i & 0 \\ 0 & -i & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix} \\ = - \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
1 & 0 & 0 & -1 \\
0 & 0 & 0 & 0
\end{pmatrix}
+ \begin{pmatrix}
0 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & -1 & 0 
\end{pmatrix} = \begin{pmatrix} 
0 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 \\
-1 & 0 & 0 & 1 \\
0 & 0 & -1 & 0 
\end{pmatrix} = i T_{y}
$$

$$
\comm{J_{z}}{T_{y}} = - \begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & i & 0 \\ 0 & -i & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 & i & 0 \\ 0 & 0 & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & i & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 & i & 0 \\ 0 & 0 & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & i & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & i & 0 \\ 0 & -i & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix} \\ = 
- \begin{pmatrix}
0 & 0 & 0 & 0 \\
-1 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 
\end{pmatrix} + 
\begin{pmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 
\end{pmatrix} = \begin{pmatrix}
0 & 1 & 0 & 0 \\
1 & 0 & 0 & -1 \\
0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 
\end{pmatrix} = -i T_{x}
$$

$$
\comm{T_{x}}{T_{y}} = - \begin{pmatrix} 0 & i & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & 0 & 0 \\ 0 & i & 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 & i & 0 \\ 0 & 0 & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & i & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 & i & 0 \\ 0 & 0 & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & i & 0 \end{pmatrix} \begin{pmatrix} 0 & i & 0 & 0 \\ i & 0 & 0 & -i \\ 0 & 0 & 0 & 0 \\ 0 & i & 0 & 0 \end{pmatrix} \\ =
\begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} + \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} = 0
$$

### (5) Please derive (33).

>The polarization tensor $e^{\mu\nu}_{\pm}$ is symmetric, traceless, and transverse.  Once again, $e^{\mu\nu}_{\pm}$ is not a Lorentz tensor.  Under the two “Abelian” LGTs:
>
>$$
>e^{\mu\nu}_{\pm}(k) \rightarrow e^{\mu\nu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} \left[ e^{\mu}_{\pm}(k) + \frac{\tan \theta}{2\sqrt{2} k^{0}} k^{\mu} \right] k^{\nu} + (\mu \leftrightarrow \nu) \tag{33}
>$$
>

We’ve already known that $e^{\mu\nu}_{\pm}(k) = e^{\mu}_{\pm} (k) e^{\nu}_{\pm} (k)$, so transformation rule for this tensor is
$$
e^{\mu\nu}_{\pm}(k) \to \left(R_{y}^{-1}(\theta) L_{x}(\eta_{2}) L_{z}(\eta_{1}) e^{\mu}_{\pm}(k)\right) \left(R_{y}^{-1}(\theta) L_{x}(\eta_{2}) L_{z}(\eta_{1}) e^{\nu}_{\pm}(k)\right) \\ =
\left(e^{\mu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} k^{\mu}\right) \left(e^{\nu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} k^{\nu}\right) \\
= e^{\mu}_{\pm}(k) e^{\nu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} \left(e^{\mu}_{\pm}(k) k^{\nu} + k^{\mu} e^{\nu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} k^{\mu} k^{\nu} \right) \\ = e^{\mu\nu}_{\pm}(k) + \frac{\tan \theta}{\sqrt{2} k^{0}} \left[ e^{\mu}_{\pm}(k) + \frac{\tan \theta}{2\sqrt{2} k^{0}} k^{\mu} \right] k^{\nu} + (\mu \leftrightarrow \nu)
$$
