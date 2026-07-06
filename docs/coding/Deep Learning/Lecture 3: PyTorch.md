# Lecture 3: PyTorch

These notes turn the PyTorch lecture deck into a self-contained course. The aim is not only to know the API names, but to understand why PyTorch has the shape it has:

- tensors are the data structure for linear algebra
- GPU execution makes matrix multiplication fast
- autograd turns the chain rule into one call to `loss.backward()`
- `nn.Module`, `torch.nn.functional`, and `torch.optim` remove boilerplate
- a real training program is just tensors, a forward pass, a scalar loss, backpropagation, and a parameter update

## 1. Why Deep Learning Needs a Framework

### 1.1 Training Is Mostly Matrix Multiplication

For a fully connected layer, the forward pass is

$$
Z = HW + b,\qquad H_{\text{next}} = g(Z).
$$

Here

- $H$ is a batch of hidden vectors
- $W$ is a weight matrix
- $b$ is a bias vector
- $g$ is an activation function such as ReLU

A deep network repeats this operation many times. A modest training step may involve a batch with thousands of examples, thousands of hidden units, and many layers. Most of the work is therefore repeated matrix multiplication.

PyTorch exists to make this pattern:

1. readable, so the code looks like the math
2. fast, so large matrix operations run on specialized hardware
3. differentiable, so gradients are computed automatically

### 1.2 A Tensor Is a Grid of Numbers

The basic PyTorch object is `torch.Tensor`. It generalizes scalars, vectors, matrices, and higher-dimensional arrays.

```python
import torch

a = torch.tensor([
    [1.0, 2.0, 3.0],
    [4.0, 5.0, 6.0],
])

print(a.shape)  # torch.Size([2, 3])
print(a.dtype)  # torch.float32 by default here
```

The `.shape` tells you the size along each axis. Tracking shapes is the most important debugging skill in PyTorch.

### 1.3 Matrix Multiplication as a Triple Loop

For two square matrices $A,B\in\mathbb{R}^{n\times n}$, matrix multiplication is

$$
C_{ij} = \sum_{k=1}^{n} A_{ik}B_{kj}.
$$

Written by hand, this is a triple loop:

```python
def matmul_slow(A, B):
    n = A.shape[0]
    C = torch.zeros(n, n)

    for i in range(n):
        for j in range(n):
            for k in range(n):
                C[i, j] += A[i, k] * B[k, j]

    return C
```

This is useful for understanding, but not for training. A real network may run huge matrix multiplications millions of times.

In PyTorch, the same operation is:

```python
C = A @ B
```

The `@` operator means matrix multiplication. It is the code form of ordinary linear algebra.

## 2. Why GPUs Are Fast

### 2.1 Move the Same Math to a GPU

On an NVIDIA GPU, a tensor lives on the CUDA device:

```python
device = "cuda" if torch.cuda.is_available() else "cpu"

A = torch.randn(8192, 8192, device=device)
B = torch.randn(8192, 8192, device=device)
C = A @ B
```

The math is unchanged. The device changes where the tensor lives and where the operation runs.

For Apple Silicon, PyTorch may expose `"mps"` as another accelerator backend:

```python
if torch.cuda.is_available():
    device = "cuda"
elif torch.backends.mps.is_available():
    device = "mps"
else:
    device = "cpu"
```

The lecture's extreme speed numbers refer to CUDA GPUs, especially tensor-core matmul.

### 2.2 FLOP/s

A floating-point operation is often called a FLOP. A matrix multiplication of two $n\times n$ matrices uses about

$$
2n^3
$$

floating-point operations: one multiply and one add for each term in each inner product.

The rate

$$
\text{FLOP/s} = \frac{\text{number of operations}}{\text{time}}
$$

is a standard way to measure compute throughput.

### 2.3 Tensor Cores

Modern NVIDIA GPUs contain tensor cores, which are specialized units for small matrix tiles. Instead of multiplying only two scalar numbers per cycle, a tensor core computes a whole tile of a matrix multiplication.

The important conceptual point:

- CPUs have powerful general-purpose cores
- GPUs have many parallel execution units
- tensor cores provide very high work-per-cycle for matrix multiplication

The speedup does not come from writing a clever Python loop. It comes from expressing the operation as a tensor operation so PyTorch can dispatch it to optimized kernels.

### 2.4 Compute-Bound and Memory-Bound Work

A GPU operation costs two resources:

1. arithmetic work, measured in FLOP
2. data movement, measured in bytes moved through memory

Large matrix multiplication is often compute-bound: the tensor cores stay busy.

Small elementwise operations are often memory-bound: the GPU spends much of its time moving tensors rather than doing much math.

Examples:

```python
Z = H @ W + b       # matmul plus bias
H_next = Z.relu()   # elementwise ReLU
```

The matmul is heavy arithmetic. The bias add and ReLU touch many values but do very little work per value. Tools such as `torch.compile` can fuse small operations so intermediate values stay closer to the chip instead of round-tripping through memory.

## 3. Tensor Basics

### 3.1 Creating Tensors

Common constructors:

```python
torch.zeros(2, 3)              # all zeros, shape (2, 3)
torch.ones(2, 3)               # all ones, shape (2, 3)
torch.eye(3)                   # identity matrix, shape (3, 3)
torch.rand(2, 3)               # uniform random values in [0, 1)
torch.randn(2, 3)              # normal random values
torch.randint(0, 10, (2, 3))   # integers in {0, ..., 9}
```

The constructor takes a shape and fills a tensor with values.

### 3.2 Dtype and Device

The two everyday conversions are changing numerical type and changing device.

```python
x = torch.randn(2, 3)

x32 = x.float()                 # float32
x16 = x.to(torch.bfloat16)      # bfloat16, useful on supported accelerators
x_gpu = x.to("cuda")            # move to NVIDIA GPU
x_cpu = x_gpu.cpu()             # move back to CPU
```

The most general conversion method is `.to(...)`:

```python
x = x.to(device=device, dtype=torch.float32)
```

Common dtypes:

- `torch.float32`: standard single precision
- `torch.float64`: double precision, useful for numerical checking
- `torch.float16`: half precision
- `torch.bfloat16`: half-width format often used for deep learning
- `torch.long`: integer type commonly used for class labels

### 3.3 One Rule: Print the Shape

When code fails, inspect shapes first.

```python
print("X:", X.shape)
print("W1:", W1.shape)
print("Z1:", Z1.shape)
print("Y:", Y.shape)
```

Most PyTorch bugs are not mysterious. They are shape mismatches, dtype mismatches, device mismatches, or accidental graph retention.

## 4. Axes and Shapes

### 4.1 Rank

A tensor's rank is its number of axes.

| Object | Shape | Rank |
|---|---:|---:|
| scalar | `()` | 0 |
| vector | `(n,)` | 1 |
| matrix | `(m, n)` | 2 |
| batch of matrices | `(b, m, n)` | 3 |
| batch of images | `(N, C, H, W)` | 4 |

PyTorch calls all of these tensors.

### 4.2 Axis Names Are Human Conventions

PyTorch only sees axis numbers:

```python
x = torch.randn(2, 3, 4)

print(x.shape)  # (2, 3, 4)
```

You decide what the axes mean. For images, `(N, C, H, W)` usually means:

- `N`: batch size
- `C`: channels
- `H`: height
- `W`: width

For sequence models, a common layout is `(batch, time, features)`.

## 5. Reductions

A reduction collapses one or more axes by combining values.

```python
a = torch.randn(2, 3, 4)

a.sum()              # shape ()
a.sum(dim=0)         # shape (3, 4)
a.sum(dim=1)         # shape (2, 4)
a.mean(dim=(0, 1))   # shape (4,)
a.max(dim=2).values  # shape (2, 3)
```

The rule:

> If you reduce over an axis, that axis disappears unless `keepdim=True`.

With `keepdim=True`:

```python
a.sum(dim=1, keepdim=True).shape  # (2, 1, 4)
```

Keeping dimensions is often useful because size-1 axes can broadcast later.

### 5.1 Loss Averaging

Suppose `loss_per_example` has shape `(N,)`.

```python
loss = loss_per_example.mean()
```

This reduces the batch axis and produces a scalar. A scalar loss is what `loss.backward()` usually expects.

## 6. Reshape, View, and Transpose

### 6.1 Reshape Regroups the Same Numbers

Start with a flat tensor:

```python
x = torch.arange(6)
print(x)
# tensor([0, 1, 2, 3, 4, 5])
```

View it as a matrix:

```python
A = x.view(2, 3)
print(A)
# tensor([[0, 1, 2],
#         [3, 4, 5]])
```

View it another way:

```python
B = x.view(3, 2)
print(B)
# tensor([[0, 1],
#         [2, 3],
#         [4, 5]])
```

`view` changes how the same flat list is read. It does not reorder values.

### 6.2 Transpose Swaps Axes

```python
A = torch.arange(6).view(2, 3)
AT = A.transpose(0, 1)

print(AT)
# tensor([[0, 3],
#         [1, 4],
#         [2, 5]])
```

Both `x.view(3, 2)` and `A.transpose(0, 1)` have shape `(3, 2)`, but they contain different arrangements. Shape alone does not tell you the memory order.

### 6.3 Contiguous Tensors

A tensor is contiguous when its values are laid out in memory in the order implied by its shape.

Transpose often creates a non-contiguous view:

```python
A = torch.arange(6).view(2, 3)
AT = A.transpose(0, 1)

print(A.is_contiguous())   # True
print(AT.is_contiguous())  # False
```

If you need a contiguous copy:

```python
AT_contig = AT.contiguous()
```

Modern PyTorch code often uses `.reshape(...)` instead of `.view(...)` when it is okay for PyTorch to copy if needed:

```python
y = AT.reshape(3, 2)
```

## 7. Slicing

### 7.1 Slice Keeps an Axis, Integer Index Drops an Axis

This is one of the most important shape rules.

```python
x = torch.randn(6, 7, 8, 9, 10)
```

An integer index removes an axis:

```python
x[5].shape  # (7, 8, 9, 10)
```

A slice keeps the axis:

```python
x[5:6].shape  # (1, 7, 8, 9, 10)
```

The values may look similar, but the shapes behave differently in broadcasting and matmul.

### 7.2 Shape Puzzle

Predict:

```python
x = torch.randn(6, 7, 8, 9, 10)
x[::3, 3:-1, 5, :, :4].shape
```

Apply the indexing axis by axis:

- `::3` on size 6 gives indices `0, 3`, so size `2`
- `3:-1` on size 7 gives `3, 4, 5`, so size `3`
- `5` is an integer index, so that axis disappears
- `:` keeps size `9`
- `:4` gives size `4`

Therefore:

```python
x[::3, 3:-1, 5, :, :4].shape  # (2, 3, 9, 4)
```

## 8. Broadcasting

Broadcasting lets PyTorch combine tensors with different shapes without copying data.

### 8.1 The Two Rules

To combine two tensors:

1. Align shapes from the right.
2. Each pair of axes is compatible if they are equal or one of them is `1`.

The result uses the larger size along each aligned axis.

Examples:

```python
(2, 3)     + (3,)       # legal -> (2, 3)
(2, 3, 4)  + (1, 4)     # legal -> (2, 3, 4)
(3, 4)     + (2, 4)     # illegal: 3 and 2 clash
(5, 1)     + (1, 6)     # legal -> (5, 6)
```

### 8.2 Bias Addition Is Broadcasting

For a batch of hidden states:

```python
H = torch.randn(32, 100)   # batch of 32 vectors
b = torch.randn(100)       # one bias vector

Z = H + b                  # b broadcasts across the batch
```

Shapes:

```text
H: (32, 100)
b:     (100)
Z: (32, 100)
```

### 8.3 Keep Your Dimensions

Integer indexing can break broadcasting:

```python
a = torch.randn(2, 3, 4)

a[:, 0].shape    # (2, 4)
a[:, 0:1].shape  # (2, 1, 4)
```

Now compare:

```python
a + a[:, 0:1]  # legal: (2, 3, 4) + (2, 1, 4)
a + a[:, 0]    # illegal: (2, 3, 4) + (2, 4)
```

The slice keeps a size-1 axis, and that axis can stretch.

## 9. Matrix-Vector Multiplication

Let

$$
M =
\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{bmatrix},
\qquad
v =
\begin{bmatrix}
1\\
0\\
1
\end{bmatrix}.
$$

Then

$$
y = Mv =
\begin{bmatrix}
1\cdot 1 + 2\cdot 0 + 3\cdot 1\\
4\cdot 1 + 5\cdot 0 + 6\cdot 1
\end{bmatrix}
=
\begin{bmatrix}
4\\
10
\end{bmatrix}.
$$

PyTorch:

```python
M = torch.tensor([
    [1.0, 2.0, 3.0],
    [4.0, 5.0, 6.0],
])
v = torch.tensor([1.0, 0.0, 1.0])

y1 = M @ v
y2 = (M * v).sum(dim=1)

print(y1)  # tensor([ 4., 10.])
print(y2)  # tensor([ 4., 10.])
```

The second version exposes what matrix-vector multiplication does:

1. broadcast `v` across the rows of `M`
2. multiply elementwise
3. sum across the shared axis

## 10. The `@` Shape Rule

The `@` operator matches the shared inner axis and removes it.

| Operation | Shape Rule |
|---|---|
| vector dot vector | `(n,) @ (n,) -> ()` |
| matrix times vector | `(m, k) @ (k,) -> (m,)` |
| matrix times matrix | `(m, k) @ (k, n) -> (m, n)` |
| batched matrix multiply | `(b, m, k) @ (b, k, n) -> (b, m, n)` |

For batched matmul, leading axes ride along and can broadcast.

```python
A = torch.randn(10, 3, 4)
B = torch.randn(10, 4, 5)
C = A @ B

print(C.shape)  # (10, 3, 5)
```

## 11. Datasets and DataLoaders

The training loop usually says:

```python
for X, y in loader:
    ...
```

The `DataLoader` provides mini-batches.

### 11.1 Dataset

A dataset stores examples and labels. For example, MNIST contains image-label pairs.

```python
from torchvision import datasets, transforms

dataset = datasets.MNIST(
    root="data",
    train=True,
    download=True,
    transform=transforms.ToTensor(),
)
```

`transforms.ToTensor()` converts each image to a PyTorch tensor.

### 11.2 DataLoader

```python
from torch.utils.data import DataLoader

loader = DataLoader(
    dataset,
    batch_size=64,
    shuffle=True,
    num_workers=4,
)
```

Important arguments:

- `batch_size`: number of examples per training step
- `shuffle`: randomize order each epoch
- `num_workers`: background worker processes that prepare data while the model trains

For a dataset of images, a batch may have shape:

```python
for X, y in loader:
    print(X.shape)  # for MNIST: (64, 1, 28, 28)
    print(y.shape)  # (64,)
    break
```

## 12. Training a Small Network by Hand

Before using PyTorch's abstractions, write the full computation explicitly. This is the bridge from Lecture 2 backpropagation to PyTorch.

Assume:

- `X` has shape `(N, D)`
- `Y` is one-hot encoded with shape `(N, C)`
- hidden width is `H`
- number of classes is `C`

### 12.1 Parameters

```python
N, D, H, C = 64, 784, 128, 10
lr = 0.1

W1 = torch.randn(D, H) * 0.01
b1 = torch.zeros(H)
W2 = torch.randn(H, C) * 0.01
b2 = torch.zeros(C)
```

### 12.2 Forward Pass

```python
Z1 = X @ W1 + b1
H1 = torch.relu(Z1)
Z2 = H1 @ W2 + b2
P = torch.softmax(Z2, dim=1)
loss = -(Y * P.log()).sum() / N
```

Shapes:

```text
X:  (N, D)
W1: (D, H)
b1: (H,)
Z1: (N, H)
H1: (N, H)
W2: (H, C)
b2: (C,)
Z2: (N, C)
P:  (N, C)
Y:  (N, C)
```

### 12.3 Backward Pass by Hand

For softmax plus cross-entropy:

$$
G_2 = \nabla_{Z_2}\mathcal{L} = \frac{P-Y}{N}.
$$

Then:

```python
G2 = (P - Y) / N

dW2 = H1.T @ G2
db2 = G2.sum(dim=0)

dH1 = G2 @ W2.T
G1 = (Z1 > 0).float() * dH1

dW1 = X.T @ G1
db1 = G1.sum(dim=0)
```

Update:

```python
W1 -= lr * dW1
b1 -= lr * db1
W2 -= lr * dW2
b2 -= lr * db2
```

This works, but it is fragile. A single wrong transpose breaks the shapes. PyTorch's autograd removes the backward block.

## 13. Autograd: Gradients for Free

### 13.1 The Three Moving Parts

Autograd depends on three ideas:

- `requires_grad=True`: tells PyTorch to track operations on a tensor
- `grad_fn`: records which operation produced a non-leaf tensor
- `.grad`: stores the accumulated gradient for leaf tensors

Example:

```python
a = torch.tensor(2.0, requires_grad=True)
b = a * a

print(b.grad_fn)  # MulBackward0

b.backward()
print(a.grad)     # tensor(4.)
```

You never wrote $db/da = 2a$. PyTorch recorded the multiplication and applied the local derivative during backward.

### 13.2 Leaves and Non-Leaves

A leaf tensor is a tensor you create directly and ask PyTorch to track.

```python
x = torch.tensor(2.0, requires_grad=True)
w = torch.tensor(3.0, requires_grad=True)

y = w * x
z = y + 1
L = z ** 2
```

Here:

- `x` and `w` are leaves
- `y`, `z`, and `L` are non-leaf tensors
- `y.grad_fn`, `z.grad_fn`, and `L.grad_fn` point to recorded operations
- after `L.backward()`, gradients are stored in `x.grad` and `w.grad`

### 13.3 A Complete Scalar Graph

Let

$$
x=2,\qquad w=3,\qquad y=wx,\qquad z=y+1,\qquad L=z^2.
$$

Forward values:

$$
y=6,\qquad z=7,\qquad L=49.
$$

Backward by hand:

$$
\frac{\partial L}{\partial z}=2z=14,
$$

$$
\frac{\partial L}{\partial y}
=\frac{\partial L}{\partial z}\frac{\partial z}{\partial y}
=14,
$$

$$
\frac{\partial L}{\partial w}
=\frac{\partial L}{\partial y}\frac{\partial y}{\partial w}
=14x=28,
$$

$$
\frac{\partial L}{\partial x}
=\frac{\partial L}{\partial y}\frac{\partial y}{\partial x}
=14w=42.
$$

PyTorch:

```python
x = torch.tensor(2.0, requires_grad=True)
w = torch.tensor(3.0, requires_grad=True)

y = w * x
z = y + 1
L = z ** 2

L.backward()

print(w.grad)  # tensor(28.)
print(x.grad)  # tensor(42.)
```

Autograd walks the graph in reverse and applies the chain rule node by node.

## 14. Every Operation Has a Backward Rule

Conceptually, every differentiable operation is a function with:

1. a forward method that computes output and saves needed values
2. a backward method that receives upstream gradient and returns input gradients

For $y = e^x$:

$$
\frac{\partial L}{\partial x}
=
\frac{\partial L}{\partial y}
\frac{\partial y}{\partial x}
=
\frac{\partial L}{\partial y} e^x.
$$

The backward function multiplies the upstream gradient by the saved value.

In pseudocode:

```python
class Exp:
    def forward(ctx, x):
        y = torch.exp(x)
        ctx.save_for_backward(y)
        return y

    def backward(ctx, grad_y):
        (y,) = ctx.saved_tensors
        return grad_y * y
```

You rarely write custom autograd functions, but this mental model is useful. A network differentiates because each operation knows how to push gradients backward through itself.

## 15. Branches and Gradient Accumulation

If a tensor feeds two downstream computations, the gradients from both paths add.

```python
h = torch.relu(x @ W)
y1 = h @ A
y2 = h @ B
loss = mse(y1, target1) + mse(y2, target2)

loss.backward()
```

During the backward pass, `h` receives:

$$
\nabla_h\mathcal{L}
=
\nabla_h\mathcal{L}_1
+
\nabla_h\mathcal{L}_2.
$$

This is why parameter gradients accumulate into `.grad`.

```python
loss.backward()
loss.backward()  # adds again unless you clear grads
```

Therefore every training step must clear stale gradients:

```python
optimizer.zero_grad()
loss.backward()
optimizer.step()
```

## 16. Autograd Replaces Manual Backprop

The manual backward block:

```python
G2 = (P - Y) / N
dW2 = H1.T @ G2
db2 = G2.sum(dim=0)
dH1 = G2 @ W2.T
G1 = (Z1 > 0).float() * dH1
dW1 = X.T @ G1
db1 = G1.sum(dim=0)
```

becomes:

```python
loss.backward()
```

But parameters must be created with `requires_grad=True`:

```python
W1 = torch.randn(D, H, requires_grad=True) * 0.01
b1 = torch.zeros(H, requires_grad=True)
W2 = torch.randn(H, C, requires_grad=True) * 0.01
b2 = torch.zeros(C, requires_grad=True)
```

There is a subtle issue: multiplying by `0.01` creates a non-leaf tensor. Prefer:

```python
W1 = torch.randn(D, H) * 0.01
W1.requires_grad_()
```

or use `nn.Linear`, which handles parameter creation cleanly.

### 16.1 Manual Update with Autograd

Parameter updates are not part of the gradient computation, so wrap them in `torch.no_grad()`:

```python
loss.backward()

with torch.no_grad():
    W1 -= lr * W1.grad
    b1 -= lr * b1.grad
    W2 -= lr * W2.grad
    b2 -= lr * b2.grad

    W1.grad.zero_()
    b1.grad.zero_()
    W2.grad.zero_()
    b2.grad.zero_()
```

The `no_grad` block prevents PyTorch from recording the update itself as part of the next graph.

## 17. Define-by-Run

PyTorch builds the computation graph while the forward pass runs. This is called define-by-run.

```python
h = torch.tensor(1.0, requires_grad=True)
k = 3

for _ in range(k):
    h = h * h

h.backward()
```

If `k` changes, the graph changes. Ordinary Python control flow can shape the computation:

```python
def forward(x):
    if x.mean() > 0:
        return x ** 2
    else:
        return x.abs()
```

PyTorch records only the operations that actually run.

## 18. Turning Autograd Off

### 18.1 `torch.no_grad()`

Use `torch.no_grad()` for evaluation or inference.

```python
model.eval()

with torch.no_grad():
    logits = model(X)
    pred = logits.argmax(dim=1)
```

Inside the block, PyTorch does not build an autograd graph. This saves memory and time.

### 18.2 `detach()`

Use `.detach()` to keep the same values but stop gradients from flowing past that tensor.

```python
features = encoder(X)
features_fixed = features.detach()
logits = classifier(features_fixed)
```

The classifier can train, but the encoder will not receive gradients through `features_fixed`.

Another common use is logging:

```python
loss_value = loss.detach().cpu().item()
```

### 18.3 Reverse Mode vs Forward Mode

Deep learning usually has:

- millions or billions of parameters
- one scalar loss

Reverse-mode autodiff computes all parameter gradients in one backward pass from the scalar loss. That is why PyTorch's default is reverse mode.

Forward-mode autodiff propagates derivatives alongside the forward pass. It is useful for other Jacobian-vector products, but for ordinary neural-network training reverse mode is the right default.

## 19. `nn.Module`

Manual parameter tensors are educational but not pleasant. `nn.Module` organizes parameters and forward computation.

```python
import torch
from torch import nn
import torch.nn.functional as F

class Net(nn.Module):
    def __init__(self, D, H, C):
        super().__init__()
        self.fc1 = nn.Linear(D, H)
        self.fc2 = nn.Linear(H, C)

    def forward(self, X):
        H1 = F.relu(self.fc1(X))
        return self.fc2(H1)
```

Important conventions:

- define layers in `__init__`
- define computation in `forward`
- call the model with `model(X)`, not `model.forward(X)`
- `model.parameters()` returns all trainable parameters recursively

```python
model = Net(D=784, H=128, C=10)

for p in model.parameters():
    print(p.shape)
```

### 19.1 `nn.Parameter`

Parameters inside a module are usually instances of `nn.Parameter`.

```python
class LinearByHand(nn.Module):
    def __init__(self, in_features, out_features):
        super().__init__()
        self.W = nn.Parameter(torch.randn(in_features, out_features) * 0.01)
        self.b = nn.Parameter(torch.zeros(out_features))

    def forward(self, X):
        return X @ self.W + self.b
```

Assigning an `nn.Parameter` as an attribute tells the module to include it in `model.parameters()`.

## 20. `torch.nn.functional`

`torch.nn.functional` is the plain-function catalog of neural-network operations. It is commonly imported as `F`.

```python
import torch.nn.functional as F
```

Examples:

```python
F.linear(X, W, b)
F.relu(Z)
F.softmax(logits, dim=1)
F.cross_entropy(logits, y)
F.conv2d(images, kernels)
F.max_pool2d(features, kernel_size=2)
F.batch_norm(...)
```

Relationship:

- `F.linear` is the operation
- `nn.Linear` is a module that stores `W` and `b` and calls `F.linear`

The same pattern appears elsewhere:

- `F.conv2d` and `nn.Conv2d`
- `F.batch_norm` and `nn.BatchNorm2d`
- `F.relu` and `nn.ReLU`

Use modules when the operation has learnable parameters or persistent state. Use functional operations for stateless operations inside `forward`.

## 21. Loss Functions

For classification, the common loss is cross-entropy.

```python
loss_fn = nn.CrossEntropyLoss()
loss = loss_fn(logits, y)
```

Shapes:

```text
logits: (N, C)
y:      (N,)
loss:   ()
```

Important: `nn.CrossEntropyLoss` expects raw logits, not probabilities. It combines `log_softmax` and negative log-likelihood internally.

Do not do this:

```python
probs = torch.softmax(logits, dim=1)
loss = nn.CrossEntropyLoss()(probs, y)  # wrong for standard usage
```

Do this:

```python
loss = nn.CrossEntropyLoss()(logits, y)
```

## 22. Optimizers

The optimizer owns the update rule.

```python
model = Net(D=784, H=128, C=10)
optimizer = torch.optim.SGD(model.parameters(), lr=0.1)
loss_fn = nn.CrossEntropyLoss()
```

Training step:

```python
optimizer.zero_grad()
logits = model(X)
loss = loss_fn(logits, y)
loss.backward()
optimizer.step()
```

What each line does:

- `zero_grad()`: clear gradients accumulated from previous steps
- `model(X)`: build the forward computation graph
- `loss_fn(...)`: produce a scalar loss
- `backward()`: fill `.grad` for parameters
- `step()`: update parameters using their gradients

### 22.1 Why `zero_grad()` Comes First

PyTorch accumulates gradients. This is useful for advanced training strategies, but in ordinary SGD each mini-batch should start with empty gradients.

```python
for X, y in loader:
    optimizer.zero_grad()
    loss = loss_fn(model(X), y)
    loss.backward()
    optimizer.step()
```

Some code uses:

```python
optimizer.zero_grad(set_to_none=True)
```

This can save memory and make certain bugs easier to catch because a missing gradient remains `None`.

## 23. CUDA and `torch.compile`

### 23.1 Moving Model and Data

Parameters and input tensors must be on the same device.

```python
device = "cuda" if torch.cuda.is_available() else "cpu"

model = Net(D=784, H=128, C=10).to(device)

for X, y in loader:
    X = X.to(device)
    y = y.to(device)

    optimizer.zero_grad()
    loss = loss_fn(model(X), y)
    loss.backward()
    optimizer.step()
```

Device mismatch is a common error:

```text
Expected all tensors to be on the same device
```

The fix is to move both model and data to the same device.

### 23.2 `torch.compile`

`torch.compile` can optimize a model by capturing and compiling the operations it runs.

```python
model = Net(D=784, H=128, C=10).to(device)

if hasattr(torch, "compile"):
    model = torch.compile(model)
```

Why it can help:

- fewer Python dispatches
- fewer kernel launches
- possible fusion of small operations
- optimized execution for repeated graph patterns

Honest caveat: the first call may be slower because compilation has setup cost. Compilation is most useful when the same model runs many times.

## 24. Capstone: A Full Training Program

This is the lecture's final destination: a clean PyTorch training program.

```python
import torch
from torch import nn
import torch.nn.functional as F
from torch.utils.data import DataLoader
from torchvision import datasets, transforms


class MLP(nn.Module):
    def __init__(self, D, H, C):
        super().__init__()
        self.fc1 = nn.Linear(D, H)
        self.fc2 = nn.Linear(H, C)

    def forward(self, X):
        X = X.view(X.shape[0], -1)  # flatten images to vectors
        H = F.relu(self.fc1(X))
        return self.fc2(H)


def choose_device():
    if torch.cuda.is_available():
        return "cuda"
    if torch.backends.mps.is_available():
        return "mps"
    return "cpu"


device = choose_device()

train_data = datasets.MNIST(
    root="data",
    train=True,
    download=True,
    transform=transforms.ToTensor(),
)

loader = DataLoader(
    train_data,
    batch_size=64,
    shuffle=True,
    num_workers=4,
)

model = MLP(D=28 * 28, H=256, C=10).to(device)
optimizer = torch.optim.SGD(model.parameters(), lr=0.1)
loss_fn = nn.CrossEntropyLoss()

for epoch in range(5):
    model.train()
    total_loss = 0.0
    total_correct = 0
    total_seen = 0

    for X, y in loader:
        X = X.to(device)
        y = y.to(device)

        optimizer.zero_grad(set_to_none=True)
        logits = model(X)
        loss = loss_fn(logits, y)
        loss.backward()
        optimizer.step()

        with torch.no_grad():
            total_loss += loss.item() * X.shape[0]
            total_correct += (logits.argmax(dim=1) == y).sum().item()
            total_seen += X.shape[0]

    avg_loss = total_loss / total_seen
    accuracy = total_correct / total_seen
    print(f"epoch {epoch}: loss={avg_loss:.4f}, acc={accuracy:.4f}")
```

Every line is one of the lecture ideas:

- `Tensor`: data and parameters are arrays with shapes
- `@` inside `nn.Linear`: matrix multiplication
- `F.relu`: elementwise activation
- `CrossEntropyLoss`: scalar training objective
- `loss.backward()`: autograd
- `optimizer.step()`: parameter update
- `.to(device)`: CPU/GPU placement
- `DataLoader`: mini-batches

## 25. Shape Debugging Checklist

When a PyTorch program breaks, check these in order.

### 25.1 Shape

```python
print(X.shape)
print(logits.shape)
print(y.shape)
```

For classification:

```text
logits: (N, C)
y:      (N,)
```

### 25.2 Dtype

```python
print(X.dtype)
print(y.dtype)
```

For `CrossEntropyLoss`:

- logits should be floating point
- labels should be integer class indices, usually `torch.long`

### 25.3 Device

```python
print(next(model.parameters()).device)
print(X.device)
print(y.device)
```

All tensors participating in the same operation must be on the same device.

### 25.4 Gradients

```python
for name, p in model.named_parameters():
    print(name, p.grad is None, None if p.grad is None else p.grad.norm().item())
```

If a parameter's gradient is `None`, it may not have participated in the loss.

### 25.5 Training Mode

```python
model.train()  # training
model.eval()   # evaluation
```

This matters for modules such as dropout and batch normalization.

## 26. Common Traps

### 26.1 Calling Softmax Before Cross-Entropy

Wrong:

```python
loss = nn.CrossEntropyLoss()(torch.softmax(logits, dim=1), y)
```

Right:

```python
loss = nn.CrossEntropyLoss()(logits, y)
```

### 26.2 Forgetting to Clear Gradients

Wrong:

```python
loss.backward()
optimizer.step()
```

Right:

```python
optimizer.zero_grad()
loss.backward()
optimizer.step()
```

### 26.3 Updating Parameters Without `no_grad`

Wrong:

```python
W -= lr * W.grad
```

Right:

```python
with torch.no_grad():
    W -= lr * W.grad
```

For normal training, prefer an optimizer.

### 26.4 Dropping an Axis Accidentally

```python
a[:, 0]    # drops an axis
a[:, 0:1]  # keeps an axis
```

If broadcasting unexpectedly fails, inspect whether an integer index removed a dimension.

### 26.5 Non-Contiguous Views

```python
x = torch.arange(6).view(2, 3)
y = x.transpose(0, 1)

y.view(3, 2)      # may fail
y.reshape(3, 2)   # copies if necessary
```

Use `.reshape` when you do not want to worry about contiguity.

## 27. Mini Labs

### Lab 1: Rebuild Matrix-Vector Multiplication

Write a function that computes `M @ v` using only broadcasting, elementwise multiplication, and `sum`.

```python
def matvec_by_broadcast(M, v):
    return (M * v).sum(dim=1)
```

Test:

```python
M = torch.randn(5, 7)
v = torch.randn(7)

assert torch.allclose(matvec_by_broadcast(M, v), M @ v)
```

### Lab 2: Shape Prediction

Predict the result shape before running each line.

```python
a = torch.randn(2, 3, 4)

a[0] + a[1]
a[0] + torch.randn(4)
a + a[:, 0:1]
a + a[:, 0]
```

Answers:

```python
a[0] + a[1]             # legal, (3, 4)
a[0] + torch.randn(4)   # legal, (3, 4)
a + a[:, 0:1]           # legal, (2, 3, 4)
a + a[:, 0]             # illegal
```

### Lab 3: Autograd on a Scalar Graph

Compute the gradients by hand, then verify with PyTorch.

```python
a = torch.tensor(2.0, requires_grad=True)
b = torch.tensor(3.0, requires_grad=True)

Q = 3 * a ** 3 - b ** 2
Q.backward()

print(a.grad)  # 36
print(b.grad)  # -6
```

By hand:

$$
\frac{\partial Q}{\partial a}=9a^2=36,
\qquad
\frac{\partial Q}{\partial b}=-2b=-6.
$$

### Lab 4: Replace Manual SGD

Start from this manual update:

```python
with torch.no_grad():
    for p in params:
        p -= lr * p.grad
        p.grad.zero_()
```

Replace it with:

```python
optimizer = torch.optim.SGD(params, lr=lr)

optimizer.zero_grad()
loss.backward()
optimizer.step()
```

Then compare parameter values after one update.

### Lab 5: Build a Two-Layer Classifier

Implement this model:

```python
class Classifier(nn.Module):
    def __init__(self, D, H, C):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(D, H),
            nn.ReLU(),
            nn.Linear(H, C),
        )

    def forward(self, X):
        X = X.view(X.shape[0], -1)
        return self.net(X)
```

Train it on MNIST with the capstone loop.

## 28. Summary

PyTorch is the runnable form of the linear algebra from the previous lectures.

The core mental model:

1. A tensor is a shaped grid of numbers.
2. Operations such as `@`, `+`, `relu`, and `sum` transform tensors and shapes.
3. The forward pass records a graph when tensors require gradients.
4. `loss.backward()` walks that graph backward and fills parameter gradients.
5. `nn.Module` stores parameters and organizes computation.
6. `torch.optim` updates all parameters safely.
7. GPU tensors run the same operations using fast kernels.
8. `torch.compile` can make repeated operations faster by compiling and fusing them.

After this lecture, you should be able to read the skeleton of most PyTorch research code:

```python
model = Model(...).to(device)
optimizer = torch.optim.AdamW(model.parameters(), lr=...)
loss_fn = ...

for X, y in loader:
    X, y = X.to(device), y.to(device)
    optimizer.zero_grad(set_to_none=True)
    loss = loss_fn(model(X), y)
    loss.backward()
    optimizer.step()
```

Everything else is detail: richer models, better optimizers, better losses, and faster kernels.

## 29. Reference

- Paszke et al., "PyTorch: An Imperative Style, High-Performance Deep Learning Library", NeurIPS 2019.
- PyTorch project documentation: `pytorch.org`.
