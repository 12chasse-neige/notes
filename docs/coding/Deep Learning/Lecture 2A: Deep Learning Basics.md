# Lecture 2A: Deep Learning Basics

These notes collect the definitions and mathematical derivations from the slide deck. I use standard LaTeX notation instead of the slide-local macros:

- input vector: $\mathbf{x}$
- hidden vector at layer $l$: $\mathbf{h}^{(l)}$
- pre-activation at layer $l$: $\mathbf{z}^{(l)}$
- batch matrices: $X,H,Z,Y$
- weights and biases: $W,\mathbf{b}$
- activation function: $g$
- loss: $\mathcal{L}$
- all gradients have the same shape as the variable being differentiated

## 1. Statistical Machine Learning Review

### 1.1 Model Distribution Matching

Learning can be viewed as making the model distribution $p_{\text{model}}$ match the empirical data distribution $p_{\text{emp}}$.

Let $D(p,q)$ be a divergence or loss between two distributions. The best distribution representable by the model family is

$$
p^\star
=\arg\min_{p\in p_{\text{model}}}D(p_{\text{emp}},p).
$$

The distribution found by the optimizer is denoted

$$
\hat p=\operatorname{optimize}(p_{\text{emp}},p_{\text{model}}).
$$

### 1.2 Three Gaps

The total testing loss can be decomposed into representation, optimization, and generalization effects.

The representation gap measures the best possible fit inside the model family:

$$
\operatorname{repr}
=D(p_{\text{emp}},p^\star).
$$

The optimization gap measures how far the learned model is from the best model in the family:

$$
\operatorname{opt}
=D(p_{\text{emp}},\hat p)-D(p_{\text{emp}},p^\star).
$$

The generalization gap measures the train-test difference:

$$
\operatorname{gen}
=D(p_{\text{data}},\hat p)-D(p_{\text{emp}},\hat p).
$$

Therefore

$$
\begin{aligned}
D(p_{\text{data}},\hat p)
&=D(p_{\text{emp}},\hat p)+\operatorname{gen} \\
&=D(p_{\text{emp}},p^\star)
 +\left[D(p_{\text{emp}},\hat p)-D(p_{\text{emp}},p^\star)\right]
 +\operatorname{gen} \\
&=\operatorname{repr}+\operatorname{opt}+\operatorname{gen}.
\end{aligned}
$$

## 2. From Linear Models to Neural Networks

### 2.1 Linear Regression

The linear regression conditional distribution is

$$
p(y\mid\mathbf{x};\mathbf{w})
=\mathcal{N}(\mathbf{x}^{\top}\mathbf{w},\sigma^2).
$$

### 2.2 Logistic Regression

The logistic regression conditional distribution is

$$
p(y\mid\mathbf{x};\mathbf{w})
=\operatorname{Bernoulli}(\sigma(\mathbf{x}^{\top}\mathbf{w})),
$$

where

$$
\sigma(z)=\frac{1}{1+\exp(-z)}.
$$

### 2.3 Nonlinear Function Replacement

Linear models are easy to optimize, but their representation gap can be large. The deep learning fix is to replace the linear score $\mathbf{x}^{\top}\mathbf{w}$ with a rich nonlinear function $f(\mathbf{x};\mathbf{w})$:

$$
p(y\mid\mathbf{x};\mathbf{w})
=\mathcal{N}(f(\mathbf{x};\mathbf{w}),\sigma^2),
$$

or

$$
p(y\mid\mathbf{x};\mathbf{w})
=\operatorname{Bernoulli}(\sigma(f(\mathbf{x};\mathbf{w}))).
$$

In deep learning, this nonlinear function family is represented by neural networks.

## 3. XOR as a Motivation

### 3.1 XOR Definition

For $\mathbf{x}=(x_1,x_2)\in\{0,1\}^2$, XOR is

$$
y=x_1\oplus x_2.
$$

Equivalently,

$$
f^\star(0,0)=0,\qquad
f^\star(1,0)=1,\qquad
f^\star(0,1)=1,\qquad
f^\star(1,1)=0.
$$

The label is $1$ exactly when the two inputs differ.

### 3.2 Linear Model and Squared Loss

A linear model for XOR is

$$
f(\mathbf{x};\mathbf{w},b)=\mathbf{x}^{\top}\mathbf{w}+b.
$$

The empirical squared loss over the four XOR points is

$$
J(\theta)
=\frac{1}{4}\sum_{\mathbf{x}\in\mathbb{X}}
\left(f^\star(\mathbf{x})-f(\mathbf{x};\theta)\right)^2.
$$

Writing $\mathbf{w}=(w_1,w_2)$, this becomes

$$
\begin{aligned}
J(w_1,w_2,b)
=\frac{1}{4}\big[
&b^2
+(w_1+b-1)^2 \\
&+(w_2+b-1)^2
+(w_1+w_2+b)^2
\big].
\end{aligned}
$$

### 3.3 Best Linear Predictor for XOR

Set the derivatives to zero. Ignoring the constant factor $1/4$,

$$
\frac{\partial J}{\partial w_1}=0
\quad\Longrightarrow\quad
2w_1+w_2+2b-1=0,
$$

$$
\frac{\partial J}{\partial w_2}=0
\quad\Longrightarrow\quad
w_1+2w_2+2b-1=0,
$$

and

$$
\frac{\partial J}{\partial b}=0
\quad\Longrightarrow\quad
w_1+w_2+2b-1=0.
$$

Subtracting the third equation from the first gives $w_1=0$. Subtracting the third equation from the second gives $w_2=0$. Then

$$
2b-1=0
\quad\Longrightarrow\quad
b=\frac{1}{2}.
$$

Thus the best linear solution is

$$
\boxed{\mathbf{w}=(0,0),\qquad b=\frac{1}{2}.}
$$

It predicts $1/2$ everywhere, so it cannot separate XOR.

## 4. Neurons

### 4.1 Artificial Neuron

A neuron first computes an affine score and then applies an activation:

$$
h
=g\left(\sum_{j=1}^{n}w_jx_j+c\right).
$$

In vector form,

$$
\boxed{h=g(\mathbf{w}^{\top}\mathbf{x}+c).}
$$

Thus a neuron is a linear model plus an activation function.

### 4.2 ReLU Activation

The rectified linear unit, or ReLU, is

$$
g(z)=\operatorname{ReLU}(z)=\max\{0,z\}.
$$

Its derivative is

$$
g'(z)=
\begin{cases}
1, & z>0,\\
0, & z<0.
\end{cases}
$$

At $z=0$, the derivative is undefined; in practice, implementations choose a subgradient, commonly $0$ or $1$.

### 4.3 Linear and Logistic Regression as Neurons

If $g(z)=z$, then

$$
h=\mathbf{w}^{\top}\mathbf{x}+c,
$$

which is a linear regression score.

If $g(z)=\sigma(z)$, then

$$
h=\sigma(\mathbf{w}^{\top}\mathbf{x}+c),
$$

which is a logistic regression probability.

## 5. Networks of Neurons

### 5.1 Hidden Layer

A hidden layer has one neuron per hidden coordinate:

$$
h_i
=g\left(\sum_j w_{ji}x_j+c_i\right)
=g(\mathbf{w}_i^{\top}\mathbf{x}+c_i).
$$

Stack the hidden units into a vector $\mathbf{h}$. If

$$
W=
\begin{bmatrix}
\mathbf{w}_1 & \mathbf{w}_2 & \cdots & \mathbf{w}_H
\end{bmatrix},
$$

then

$$
\boxed{\mathbf{h}=g(W^{\top}\mathbf{x}+\mathbf{c}),}
$$

where $g$ is applied elementwise.

### 5.2 Output Layer

The output layer combines hidden units:

$$
y=g\left(\sum_j v_jh_j+b\right).
$$

In vector form,

$$
\boxed{y=g(\mathbf{v}^{\top}\mathbf{h}+b).}
$$

### 5.3 Feedforward Network

A feedforward neural network has no backward connections. Information flows from input to hidden layers to output.

For a two-layer network,

$$
\mathbf{h}=f^{(1)}(\mathbf{x}),\qquad
y=f^{(2)}(\mathbf{h}),
$$

so

$$
y=f^{(2)}(f^{(1)}(\mathbf{x})).
$$

### 5.4 Fully Connected Layers

For a fully connected hidden layer and scalar output,

$$
\mathbf{h}=g(W^{\top}\mathbf{x}+\mathbf{c}),
\qquad
y=g(\mathbf{v}^{\top}\mathbf{h}+b).
$$

A fully connected layer is also called a linear layer, dense layer, or multilayer perceptron layer.

### 5.5 Why Nonlinearity Is Necessary

If the activation is the identity $g(z)=z$, then

$$
\mathbf{h}=W^{\top}\mathbf{x}+\mathbf{c}.
$$

The output is

$$
\begin{aligned}
y
&=\mathbf{v}^{\top}\mathbf{h}+b \\
&=\mathbf{v}^{\top}(W^{\top}\mathbf{x}+\mathbf{c})+b \\
&=(W\mathbf{v})^{\top}\mathbf{x}+\mathbf{v}^{\top}\mathbf{c}+b.
\end{aligned}
$$

This is still linear in $\mathbf{x}$. Therefore, without nonlinear activations, depth does not increase representational power.

## 6. Solving XOR with a One-Hidden-Layer ReLU Network

### 6.1 Hidden Features

Define two ReLU hidden units:

$$
h_1=\max\{0,x_1+x_2\},
$$

$$
h_2=\max\{0,x_1+x_2-1\}.
$$

Then define the output

$$
f=h_1-2h_2+b.
$$

For exact XOR labels as a regression target, choose $b=0$. Then

$$
\begin{array}{c|c|c|c}
(x_1,x_2) & (h_1,h_2) & f & y\\
\hline
(0,0) & (0,0) & 0 & 0\\
(1,0) & (1,0) & 1 & 1\\
(0,1) & (1,0) & 1 & 1\\
(1,1) & (2,1) & 0 & 0
\end{array}
$$

Thus the hidden layer maps the original non-linearly-separable XOR points into a feature space where a linear output can separate them.

### 6.2 Matrix Form

The one-hidden-layer ReLU network can be written as

$$
f(\mathbf{x};W,\mathbf{c},\mathbf{v},b)
=\mathbf{v}^{\top}\max\{0,W^{\top}\mathbf{x}+\mathbf{c}\}+b.
$$

For XOR, one valid choice is

$$
W=
\begin{bmatrix}
1 & 1\\
1 & 1
\end{bmatrix},
\qquad
\mathbf{c}=
\begin{bmatrix}
0\\
-1
\end{bmatrix},
\qquad
\mathbf{v}=
\begin{bmatrix}
1\\
-2
\end{bmatrix},
\qquad
b=0.
$$

Then

$$
W^{\top}\mathbf{x}+\mathbf{c}
=
\begin{bmatrix}
x_1+x_2\\
x_1+x_2-1
\end{bmatrix},
$$

which gives the two hidden features above.

## 7. Feature Learning

### 7.1 Classical Machine Learning Pipeline

Classical machine learning often uses hand-designed features:

$$
\text{raw data}
\longrightarrow
\text{feature engineering}
\longrightarrow
\text{features}
\longrightarrow
\text{linear classifier}
\longrightarrow
\text{output}.
$$

Examples include word counts for text, edge descriptors for vision, and Fourier spectra for audio.

### 7.2 Deep Learning Pipeline

Deep learning learns features and the classifier jointly:

$$
\text{raw data}
\longrightarrow
\text{feature learning}
\longrightarrow
\text{features}
\longrightarrow
\text{linear classifier}
\longrightarrow
\text{output}.
$$

The hidden layers can be interpreted as learned feature transformations.

### 7.3 Unsupervised Feature Learning

Unsupervised or self-supervised feature learning trains features without labels, then uses a linear classifier on top. Examples from the lecture:

- vision: SimCLR, trained with contrastive learning
- language: GPT, trained with next-token prediction

## 8. Architecture Basics

### 8.1 Depth and Width

The two main architectural knobs are:

- depth: the number of layers
- width: the number of units in a layer

### 8.2 General Layer Composition

For $L$ layers,

$$
\mathbf{h}^{(1)}=f^{(1)}(\mathbf{x}),
\qquad
\mathbf{h}^{(2)}=f^{(2)}(\mathbf{h}^{(1)}),
\qquad
\ldots
$$

and the full network is the composition

$$
\boxed{
y=(f^{(L)}\circ\cdots\circ f^{(1)})(\mathbf{x}).
}
$$

### 8.3 Fully Connected Layer Formula

Let $\mathbf{h}^{(0)}=\mathbf{x}$. A fully connected layer is

$$
\boxed{
\mathbf{h}^{(l)}
=g\left({W^{(l)}}^{\top}\mathbf{h}^{(l-1)}+\mathbf{c}^{(l)}\right).
}
$$

Here $g$ is applied elementwise.

## 9. Notation and Dimensions

### 9.1 Common Dimensions

- $N$: number of examples in a batch
- $L$: number of layers
- $D$: input width of a layer
- $C$: output width of a layer, often the number of classes

### 9.2 One Example

For one example:

$$
\mathbf{x}\in\mathbb{R}^{D},
\qquad
\mathbf{y}\in\mathbb{R}^{C}.
$$

For layer $l$:

$$
\mathbf{h}^{(l)}=\text{hidden activation},
\qquad
\mathbf{z}^{(l)}=\text{pre-activation}.
$$

### 9.3 Batch Matrices

Rows are examples:

$$
X\in\mathbb{R}^{N\times D},
\qquad
H^{(l)}\in\mathbb{R}^{N\times D},
$$

$$
Z^{(l)}\in\mathbb{R}^{N\times C},
\qquad
Y\in\mathbb{R}^{N\times C}.
$$

The parameters of a layer are

$$
W^{(l)}\in\mathbb{R}^{D\times C},
\qquad
\mathbf{b}^{(l)}\in\mathbb{R}^{C}.
$$

The convention is:

- lowercase bold symbols such as $\mathbf{x}$ denote one example
- uppercase symbols such as $X$ denote a batch
- superscript $(l)$ denotes a layer index
- $\nabla_X\mathcal{L}$ has the same shape as $X$

## 10. Universal Approximation

### 10.1 Universal Approximation Theorem

One hidden layer is enough to represent an approximation of any sufficiently regular target function to arbitrary accuracy, provided the hidden layer is wide enough.

Informally, for a continuous function $f$ on a compact domain and accuracy $\epsilon>0$, there exists a one-hidden-layer neural network $\hat f$ such that

$$
\sup_{\mathbf{x}} |f(\mathbf{x})-\hat f(\mathbf{x})|<\epsilon.
$$

This is a representation theorem, not a learning theorem: it says the network family contains a good approximator, not that gradient descent will find it.

### 10.2 Why Go Deeper?

The theorem does not imply that shallow networks are efficient. A shallow network may require exponentially more width than a deep network, and large shallow networks may overfit more.

## 11. A One-Dimensional ReLU Proof Sketch

### 11.1 Piecewise Linear Approximation

Let

$$
x_1<x_2<\cdots<x_m
$$

be breakpoints, and let

$$
y_i=f(x_i).
$$

On interval $[x_i,x_{i+1}]$, define the slope

$$
k_i=\frac{y_{i+1}-y_i}{x_{i+1}-x_i}.
$$

A piecewise linear interpolant can be built by adding one ReLU hinge at each breakpoint:

$$
h_i(x)=\operatorname{ReLU}(x-x_i)=\max\{0,x-x_i\}.
$$

### 11.2 Slope-Increment Formula

The interpolating function is

$$
\boxed{
\hat f(x)
=y_1
+k_1h_1(x)
+\sum_{i=2}^{m-1}(k_i-k_{i-1})h_i(x).
}
$$

Equivalently,

$$
\hat f(x)
=y_1
+k_1\operatorname{ReLU}(x-x_1)
+(k_2-k_1)\operatorname{ReLU}(x-x_2)
+(k_3-k_2)\operatorname{ReLU}(x-x_3)
+\cdots.
$$

### 11.3 Why the Formula Works

For $x\in[x_j,x_{j+1}]$, only hinges with $i\le j$ are active. Therefore the derivative is

$$
\frac{d\hat f}{dx}
=k_1+\sum_{i=2}^{j}(k_i-k_{i-1}).
$$

The sum telescopes:

$$
k_1+(k_2-k_1)+(k_3-k_2)+\cdots+(k_j-k_{j-1})
=k_j.
$$

Thus the slope on $[x_j,x_{j+1}]$ is exactly $k_j$. The ReLU coefficients are slope increments. With sufficiently many breakpoints, this piecewise linear function approximates any continuous one-dimensional $f$.

## 12. Depth and Representation

### 12.1 Folding Mechanism

Each layer can fold the input space. A simple fold is

$$
x\mapsto |x-x_0|.
$$

This function can be represented with ReLUs:

$$
|x-x_0|
=\operatorname{ReLU}(x-x_0)+\operatorname{ReLU}(x_0-x).
$$

One fold doubles the number of linear regions.

### 12.2 Exponential Growth of Linear Regions

If each fold doubles the number of linear regions, then after $L$ folds,

$$
\boxed{L\text{ folds}\quad\Longrightarrow\quad 2^L\text{ linear regions}.}
$$

Thus depth can create exponentially many linear pieces using only linearly many layers.

### 12.3 Depth-Width Separation

There exists a constructed function such that:

$$
\text{deep network size}=O(L),
$$

but any shallow one-hidden-layer network representing the same function needs roughly

$$
2^L
$$

units.

This is an existence and separation result. It shows what depth can represent cheaply; it does not claim that real data always follows such a folding structure.

## 13. Training Deep Neural Networks

### 13.1 Parameters

For an $L$-layer network, collect all parameters as

$$
\theta
=\{W^{(1)},\mathbf{b}^{(1)},\ldots,W^{(L)},\mathbf{b}^{(L)}\}.
$$

### 13.2 Gradient Descent

Training minimizes the loss by gradient descent:

$$
\boxed{
\theta\leftarrow\theta-\eta\nabla_{\theta}\mathcal{L}(\theta).
}
$$

Here $\eta>0$ is the learning rate.

### 13.3 Forward Pass for a Batch

Let

$$
H^{(0)}=X.
$$

For layer $l$,

$$
\boxed{
Z^{(l)}
=H^{(l-1)}W^{(l)}
+\mathbf{1}{\mathbf{b}^{(l)}}^{\top},
}
$$

where $\mathbf{1}\in\mathbb{R}^{N}$ broadcasts the bias over all $N$ examples.

Then

$$
\boxed{
H^{(l)}=g(Z^{(l)}).
}
$$

Shape check:

$$
H^{(l-1)}\in\mathbb{R}^{N\times D},
\qquad
W^{(l)}\in\mathbb{R}^{D\times C},
$$

so

$$
Z^{(l)}\in\mathbb{R}^{N\times C}.
$$

### 13.4 Softmax Cross-Entropy

For classification, the output probabilities are

$$
P=\operatorname{softmax}(Z^{(L)}).
$$

For one-hot labels $Y$, the average cross-entropy loss is

$$
\boxed{
\mathcal{L}
=-\frac{1}{N}\sum_{i=1}^{N}\sum_{c=1}^{C}
Y_{ic}\log P_{ic}.
}
$$

Backpropagation computes $\nabla_{\theta}\mathcal{L}$ for every weight and bias.

## 14. Matrix Differential Toolkit

### 14.1 Scalar Case

If

$$
dy=a\,dx,
$$

then

$$
\frac{dy}{dx}=a.
$$

The coefficient of $dx$ is the derivative.

### 14.2 Vector Case

Let $y$ be scalar and $\mathbf{x}\in\mathbb{R}^{n}$. Then

$$
dy
=\sum_j\frac{\partial y}{\partial x_j}\,dx_j.
$$

If $\mathbf{a}=\nabla_{\mathbf{x}}y$, then

$$
\boxed{
dy=\mathbf{a}^{\top}d\mathbf{x},
\qquad
\mathbf{a}=\nabla_{\mathbf{x}}y.
}
$$

The coordinate sum collapses into an inner product.

### 14.3 Matrix Case

Let $y$ be scalar and $X\in\mathbb{R}^{m\times n}$. Then

$$
dy
=\sum_{i,j}A_{ij}\,dX_{ij}.
$$

Using the trace,

$$
\sum_{i,j}A_{ij}\,dX_{ij}
=\operatorname{tr}(A^{\top}dX).
$$

Therefore

$$
\boxed{
dy=\operatorname{tr}(A^{\top}dX),
\qquad
A=\nabla_X y.
}
$$

### 14.4 Read-Off Rule

For scalar $y$, if the differential can be written as

$$
dy=\operatorname{tr}(M^{\top}dX),
$$

then

$$
\boxed{\nabla_X y=M.}
$$

In words: put the differential in standard form and read off the coefficient.

### 14.5 Six Standard Differential Forms

The lecture lists the following standard forms:

$$
dy=a\,dx,
\qquad
d\mathbf{y}=\mathbf{a}\,dx,
\qquad
dY=A\,dx,
$$

$$
dy=\mathbf{a}^{\top}d\mathbf{x},
\qquad
d\mathbf{y}=A\,d\mathbf{x},
\qquad
dy=\operatorname{tr}(A^{\top}dX).
$$

## 15. Trace as Matrix Inner Product

### 15.1 Frobenius Inner Product

The matrix inner product is

$$
\boxed{
\langle A,B\rangle
=\sum_{i,j}A_{ij}B_{ij}.
}
$$

It is the matrix analogue of the vector dot product.

### 15.2 Trace Form

The $k$-th diagonal entry of $A^{\top}B$ is

$$
(A^{\top}B)_{kk}
=\sum_i A_{ik}B_{ik}.
$$

Therefore

$$
\begin{aligned}
\operatorname{tr}(A^{\top}B)
&=\sum_k(A^{\top}B)_{kk}\\
&=\sum_{k,i}A_{ik}B_{ik}\\
&=\langle A,B\rangle.
\end{aligned}
$$

Thus

$$
\boxed{
\langle A,B\rangle=\operatorname{tr}(A^{\top}B).
}
$$

### 15.3 Cyclic Trace Identity

For compatible matrices,

$$
\operatorname{tr}(AB)
=\sum_{i,j}A_{ij}B_{ji}.
$$

Similarly,

$$
\operatorname{tr}(BA)
=\sum_{j,i}B_{ji}A_{ij}.
$$

Hence

$$
\boxed{\operatorname{tr}(AB)=\operatorname{tr}(BA).}
$$

Using cyclicity and transposes,

$$
\boxed{
\langle A,B\rangle
=\operatorname{tr}(A^{\top}B)
=\operatorname{tr}(B^{\top}A)
=\operatorname{tr}(BA^{\top})
=\operatorname{tr}(AB^{\top}).
}
$$

These identities let us rearrange factors until $dX$ is isolated in a trace expression.

## 16. Backpropagation, Elementwise View

### 16.1 Cross-Entropy Gradient with Respect to Predictions

Consider the elementwise cross-entropy

$$
\mathcal{L}
=-\frac{1}{N}\sum_{i,j}Y_{ij}\log H_{ij}.
$$

Only the term containing $H_{ab}$ depends on $H_{ab}$, so

$$
\frac{\partial\mathcal{L}}{\partial H_{ab}}
=-\frac{1}{N}\frac{Y_{ab}}{H_{ab}}.
$$

Collecting all entries,

$$
\boxed{
\nabla_H\mathcal{L}
=-\frac{1}{N}\,Y\oslash H,
}
$$

where $\oslash$ denotes elementwise division.

### 16.2 Through an Elementwise Activation

Let

$$
H=g(Z)
$$

elementwise. Then

$$
H_{ab}=g(Z_{ab}).
$$

Since $Z_{ab}$ affects only $H_{ab}$,

$$
\frac{\partial\mathcal{L}}{\partial Z_{ab}}
=\frac{\partial\mathcal{L}}{\partial H_{ab}}g'(Z_{ab}).
$$

Thus

$$
\boxed{
\nabla_Z\mathcal{L}
=g'(Z)\odot\nabla_H\mathcal{L}.
}
$$

For ReLU,

$$
g'(Z)=\mathbb{1}[Z\ge 0],
$$

so

$$
\boxed{
\nabla_Z\mathcal{L}
=\mathbb{1}[Z\ge0]\odot\nabla_H\mathcal{L}.
}
$$

### 16.3 Softmax Cross-Entropy Shortcut

For output logits $Z^{(L)}$, let

$$
H^{(L)}=\operatorname{softmax}(Z^{(L)}).
$$

For softmax followed by cross-entropy,

$$
\boxed{
\nabla_{Z^{(L)}}\mathcal{L}
=\frac{1}{N}(H^{(L)}-Y).
}
$$

This is the familiar "prediction minus truth" gradient.

## 17. Backpropagation, Trace Recipe

### 17.1 Layer Setup

For one layer, write

$$
Z=HW+\mathbf{1}\mathbf{b}^{\top},
$$

with shapes

$$
H\in\mathbb{R}^{N\times D},
\qquad
W\in\mathbb{R}^{D\times C},
\qquad
Z\in\mathbb{R}^{N\times C},
\qquad
\mathbf{b}\in\mathbb{R}^{C}.
$$

Let the downstream gradient be

$$
G=\nabla_Z\mathcal{L}.
$$

By the matrix differential read-off rule,

$$
d\mathcal{L}
=\operatorname{tr}(G^{\top}dZ).
$$

### 17.2 Differential of the Layer

Differentiate

$$
Z=HW+\mathbf{1}\mathbf{b}^{\top}.
$$

Using the product rule,

$$
\boxed{
dZ=dH\,W+H\,dW+\mathbf{1}\,d\mathbf{b}^{\top}.
}
$$

Substitute into $d\mathcal{L}$:

$$
\begin{aligned}
d\mathcal{L}
&=\operatorname{tr}(G^{\top}dZ)\\
&=\operatorname{tr}(G^{\top}H\,dW)
 +\operatorname{tr}(G^{\top}dH\,W)
 +\operatorname{tr}(G^{\top}\mathbf{1}\,d\mathbf{b}^{\top}).
\end{aligned}
$$

Now isolate each differential and read off the corresponding gradient.

### 17.3 Gradient with Respect to Weights

Start from

$$
\operatorname{tr}(G^{\top}H\,dW).
$$

Match it to

$$
d\mathcal{L}=\operatorname{tr}(M^{\top}dW).
$$

Since

$$
G^{\top}H=(H^{\top}G)^{\top},
$$

we have

$$
\operatorname{tr}(G^{\top}H\,dW)
=\operatorname{tr}\left((H^{\top}G)^{\top}dW\right).
$$

Therefore

$$
\boxed{
\nabla_W\mathcal{L}=H^{\top}G.
}
$$

### 17.4 Gradient with Respect to Hidden Inputs

Start from

$$
\operatorname{tr}(G^{\top}dH\,W).
$$

Use cyclicity:

$$
\operatorname{tr}(G^{\top}dH\,W)
=\operatorname{tr}(W G^{\top}dH).
$$

Since

$$
W G^{\top}=(G W^{\top})^{\top},
$$

we get

$$
\operatorname{tr}(W G^{\top}dH)
=\operatorname{tr}\left((G W^{\top})^{\top}dH\right).
$$

Therefore

$$
\boxed{
\nabla_H\mathcal{L}=GW^{\top}.
}
$$

This gradient becomes the downstream gradient for the previous layer.

### 17.5 Gradient with Respect to Bias

Start from

$$
\operatorname{tr}(G^{\top}\mathbf{1}\,d\mathbf{b}^{\top}).
$$

By cyclicity,

$$
\operatorname{tr}(G^{\top}\mathbf{1}\,d\mathbf{b}^{\top})
=\operatorname{tr}(d\mathbf{b}^{\top}G^{\top}\mathbf{1}).
$$

Since this is a scalar,

$$
\operatorname{tr}(d\mathbf{b}^{\top}G^{\top}\mathbf{1})
=d\mathbf{b}^{\top}G^{\top}\mathbf{1}
=\langle d\mathbf{b},G^{\top}\mathbf{1}\rangle.
$$

Therefore

$$
\boxed{
\nabla_{\mathbf{b}}\mathcal{L}=G^{\top}\mathbf{1}.
}
$$

This sums the batch gradients over all examples.

### 17.6 Layer Backprop Summary

For

$$
Z=HW+\mathbf{1}\mathbf{b}^{\top},
\qquad
G=\nabla_Z\mathcal{L},
$$

the gradients are

$$
\boxed{
\nabla_W\mathcal{L}=H^{\top}G,
\qquad
\nabla_H\mathcal{L}=GW^{\top},
\qquad
\nabla_{\mathbf{b}}\mathcal{L}=G^{\top}\mathbf{1}.
}
$$

## 18. Shape Sanity Checks

A gradient must have the same shape as its variable. With

$$
G=\nabla_Z\mathcal{L}\in\mathbb{R}^{N\times C},
$$

the weight gradient is

$$
\nabla_W\mathcal{L}
=H^{\top}G.
$$

Shapes:

$$
(D\times N)(N\times C)=D\times C=\operatorname{shape}(W).
$$

The hidden-input gradient is

$$
\nabla_H\mathcal{L}
=GW^{\top}.
$$

Shapes:

$$
(N\times C)(C\times D)=N\times D=\operatorname{shape}(H).
$$

The bias gradient is

$$
\nabla_{\mathbf{b}}\mathcal{L}
=G^{\top}\mathbf{1}.
$$

Shapes:

$$
(C\times N)(N\times 1)=C\times 1=\operatorname{shape}(\mathbf{b}).
$$

If a gradient has the wrong shape, a transpose or multiplication order is wrong.

## 19. References Mentioned in the Lecture

- Thomas P. Minka, "Old and new matrix algebra useful for statistics", 2000.
- Ian Goodfellow, Yoshua Bengio, and Aaron Courville, *Deep Learning*, MIT Press, 2016, Chapter 6.
- Marvin Minsky and Seymour Papert, *Perceptrons*, MIT Press, 1969.
- Ting Chen et al., "A Simple Framework for Contrastive Learning of Visual Representations", ICML 2020.
