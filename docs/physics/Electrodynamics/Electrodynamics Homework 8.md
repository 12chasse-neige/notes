# 电动力学 第9周作业

Chasse_neige

### 1. 电磁场的矢势和标势

作业：书5.1, 5.4

5.1 若把麦克斯韦方程组的所有矢量都分解为无旋的（纵场）和无散的（横场）两部分，写出 $E$ 和 $B$ 的这两部分在真空中所满足的方程式，并证明电场的无旋部分对应于库仑场。

分解：（$L$ 代表纵向，$T$ 代表横向）
$$
\mathbf{E} = \mathbf{E}_{T} + \mathbf{E}_{L} \\
\mathbf{B} = \mathbf{B}_{T} + \mathbf{B}_{L}
$$
所以麦克斯韦方程组化为
$$
\nabla \cdot \mathbf{E} = \nabla \cdot (\mathbf{E}_{T} + \mathbf{E}_{L}) = \nabla \cdot \mathbf{E}_{L} = \frac{\rho}{\epsilon_{0}} \\
\nabla \cdot \mathbf{B} = \nabla \cdot (\mathbf{B}_{T} + \mathbf{B}_{L}) = \nabla \cdot \mathbf{B}_{L} = 0 \\
\nabla \cdot \mathbf{B}_{L} = \nabla \times \mathbf{B}_{L} = 0 \\
\text{可以取适当横场使得} \, \mathbf{B}_{L} = 0 \\
\nabla \times \mathbf{E} = \nabla \times (\mathbf{E}_{T} + \mathbf{E}_{L}) = \nabla \times \mathbf{E}_{T} = - \frac{\partial}{\partial t} \mathbf{B}_{T} \\
\nabla \times \mathbf{B} = \nabla \times \mathbf{B}_{T} = \mu_{0}  \mathbf{J} + \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} \mathbf{E} = \mu_{0} (\mathbf{J}_{T} + \mathbf{J}_{L}) + \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} (\mathbf{E}_{T} + \mathbf{E}_{L})  = \mu_{0} \mathbf{J}_{T} + \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} \mathbf{E}_{T}\\
\mu_{0} \mathbf{J}_{L} + \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} \mathbf{E}_{L} = 0
$$
其中电场的无旋部分 $\mathbf{E}_{L}$ 满足 $\nabla \cdot \mathbf{E}_{L} = \frac{\rho}{\epsilon_{0}}$ ，即对应库仑场

5.4 设真空中矢势 $\mathbf{A}(\mathbf{x},t)$ 可用复数傅里叶展开为
$$
\mathbf{A}(\mathbf{x},t) = \sum_k \left[ \mathbf{a}_k(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_k^*(t) e^{-i \mathbf{k} \cdot \mathbf{x}} \right]
$$

其中 $\mathbf{a}_k^*$ 是 $\mathbf{a}_k$ 的复共轭。

(1) 证明 $\mathbf{a}_k$ 满足谐振子方程

$$
\frac{d^2 \mathbf{a}_k(t)}{dt^2} + k^2 c^2 \mathbf{a}_k(t) = 0
$$

证明：真空中没有自由电荷和电流，所以
$$
\nabla \times (\nabla \times \mathbf{B}) = \mu_{0} \epsilon_{0} \frac{\partial}{\partial t} (\nabla \times \mathbf{E}) = - \mu_{0} \epsilon_{0} \frac{\partial^{2}}{\partial t^{2}} \mathbf{B}
$$

$$
\nabla \times (\nabla \times (\nabla \times \mathbf{A})) = - \mu_{0} \epsilon_{0} \frac{\partial^{2}}{\partial t^{2}} \nabla \times \mathbf{A}
$$

$$
\nabla \times \left( \nabla \times (\nabla \times \mathbf{A}) + \mu_{0} \epsilon_{0} \frac{\partial^{2}}{\partial t^{2}} \mathbf{A} \right) = 0
$$

所以可以选取适当规范使得
$$
\nabla \times (\nabla \times \mathbf{A}) + \mu_{0} \epsilon_{0} \frac{\partial^{2}}{\partial t^{2}} \mathbf{A} = 0
$$

$$
\nabla \times (\nabla \times \sum_k \left[ \mathbf{a}_k(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_k^*(t) e^{-i \mathbf{k} \cdot \mathbf{x}} \right]) + \frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} \sum_k \left[ \mathbf{a}_k(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_k^*(t) e^{-i \mathbf{k} \cdot \mathbf{x}} \right] = 0
$$

所以在库伦规范下
$$
\nabla^{2} \mathbf{A} = \frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} \mathbf{A}
$$
所以
$$
- \mathbf{k}^{2} \mathbf{A} = \frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} \mathbf{A}
$$
即对应系数
$$
\frac{d^2 \mathbf{a}_k(t)}{dt^2} + k^2 c^2 \mathbf{a}_k(t) = 0
$$
(2) 当选取规范 $\nabla \cdot \mathbf{A} = 0, \varphi = 0$ 时，证明 $\mathbf{k} \cdot \mathbf{a}_k = 0$

证明：
$$
\nabla \cdot \mathbf{A} = \nabla \cdot  \sum_k \left[ \mathbf{a}_k(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_k^*(t) e^{-i \mathbf{k} \cdot \mathbf{x}} \right] = 0
$$

$$
\therefore \,\, \nabla \cdot (\mathbf{a}_k(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_k^*(t) e^{-i \mathbf{k} \cdot \mathbf{x}}) = 0
$$

$$
\nabla \cdot (\mathbf{a}_k(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \mathbf{a}_k^*(t) e^{-i \mathbf{k} \cdot \mathbf{x}}) = (\nabla e^{i \mathbf{k} \cdot \mathbf{x}}) \cdot \mathbf{a}_{k} + (\nabla e^{- i \mathbf{k} \cdot \mathbf{x}}) \cdot \mathbf{a}_{k}^{*} = i e^{i \mathbf{k} \cdot \mathbf{x}} \mathbf{k} \cdot \mathbf{a}_{k} - i e^{- i \mathbf{k} \cdot \mathbf{x}} \mathbf{k} \cdot \mathbf{a}_{k}^{*} = 0
$$

对于任意 $\mathbf{x}$ 成立，所以$\mathbf{k} \cdot \mathbf{a}_k = 0$

(3) 把 $\mathbf{E}$ 和 $\mathbf{B}$ 用 $\mathbf{a}_k$ 和 $\mathbf{a}_k^*$ 表示出来
$$
\mathbf{E} = - \frac{\partial}{\partial t} \mathbf{A} = - \sum_k \left[ \frac{d}{d t} \mathbf{a}_k(t) e^{i \mathbf{k} \cdot \mathbf{x}} + \frac{d}{d t} \mathbf{a}_k^*(t) e^{-i \mathbf{k} \cdot \mathbf{x}} \right]
$$

$$
\mathbf{B} = \nabla \times \mathbf{A} = \sum_k \left[ (\nabla e^{i \mathbf{k} \cdot \mathbf{x}}) \times \mathbf{a}_k(t)  + (\nabla e^{-i \mathbf{k} \cdot \mathbf{x}}) \times \mathbf{a}_k^*(t) \right] \\ = 
i \sum_{k} e^{i \mathbf{k} \cdot \mathbf{x}} \mathbf{k} \times \mathbf{a}_{k} (t) - e^{-i \mathbf{k} \cdot \mathbf{x}} \mathbf{k} \times \mathbf{a}_{k}^{*} (t)
$$

### 2. 推迟势

作业： 
(a) 书5.5 

5.5 设 $\mathbf{A}$ 和 $\phi$ 是满足洛伦兹规范的矢势和标势

(1) 引入一矢量函数 $\mathbf{Z} (\vec{x}, t)$（赫兹矢量），若令 $\phi = -\nabla \cdot \mathbf{Z}$，证明 $\mathbf{A} = \frac{1}{c^2} \frac{\partial \mathbf{Z}}{\partial t}$

由于 $\nabla \cdot \mathbf{A} + \frac{1}{c^{2}} \frac{\partial}{\partial t} \phi = 0$
$$
\nabla \cdot \mathbf{A} =  \frac{1}{c^{2}} \frac{\partial}{\partial t} \nabla \cdot \mathbf{Z}
$$
所以可以选取合适的 $\mathbf{Z}$ 使得
$$
\mathbf{A} = \frac{1}{c^2} \frac{\partial \mathbf{Z}}{\partial t}
$$
(2) 若令 $\rho = -\nabla \cdot \mathbf{P}$ 证明 $\mathbf{Z}$ 满足方程 $\nabla^2 \mathbf{Z} - \frac{1}{c^2} \frac{\partial^2 \mathbf{Z}}{\partial t^2} = -c^2 \mu_0 \mathbf{P}$，写出在真空中的推迟解

证明：
$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_{0}}
$$

$$
\nabla \cdot (- \nabla \phi - \frac{\partial}{\partial t} \mathbf{A}) = \frac{\rho}{\epsilon_{0}}
$$

$$
\nabla \cdot (- \nabla (- \nabla \cdot \mathbf{Z}) - \frac{\partial}{\partial t} \frac{1}{c^2} \frac{\partial \mathbf{Z}}{\partial t}) = \frac{- \nabla \cdot \mathbf{P}}{\epsilon_{0}}
$$

$$
\nabla^{2} (\nabla \cdot \mathbf{Z}) - \frac{1}{c^{2}} \frac{\partial}{\partial t} (\nabla \cdot \mathbf{Z}) = - c^{2} \mu_{0} (\nabla \cdot \mathbf{P})
$$

所以可以选取合适的 $\mathbf{Z}$ 以及 $\mathbf{P}$ 使得
$$
\nabla^2 \mathbf{Z} - \frac{1}{c^2} \frac{\partial^2 \mathbf{Z}}{\partial t^2} = -c^2 \mu_0 \mathbf{P}
$$
在真空中，$\mathbf{Z}$ 存在推迟解
$$
\mathbf{Z} (\mathbf{r} ,t) = \int \frac{c^{2} \mu_{0} \mathbf{P} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})}{4 \pi |\mathbf{r} - \mathbf{r'}|} d \tau'
$$
(3) 证明 $\mathbf{E}$ 和 $\mathbf{B}$ 可通过 $\mathbf{Z}$ 用下列公式表出：
$$
\mathbf{E} = \nabla \times (\nabla \times \mathbf{Z}) - c^2 \mu_0 \mathbf{P}, \quad \mathbf{B} = \frac{1}{c^2} \frac{\partial}{\partial t} \nabla \times \mathbf{Z}
$$
证明：
$$
\mathbf{E} = - \nabla \phi - \frac{\partial}{\partial t} \mathbf{A} =  \nabla (\nabla \cdot \mathbf{Z}) - \frac{1}{c^{2}} \frac{\partial^{2}}{\partial t^{2}} \mathbf{Z} = \nabla (\nabla \cdot \mathbf{Z}) - \nabla^{2} \mathbf{Z} - c^{2} \mu_{0} \mathbf{P} = \nabla \times (\nabla \times \mathbf{Z}) - c^2 \mu_0 \mathbf{P}
$$

$$
\mathbf{B} = \nabla \times \mathbf{A} = \nabla \times \frac{1}{c^2} \frac{\partial \mathbf{Z}}{\partial t} = \frac{1}{c^2} \frac{\partial}{\partial t} \nabla \times \mathbf{Z}
$$

(b) 试证，库伦规范的解满足$$\nabla \cdot \mathbf{A} = 0$$

证明：库伦规范下的解为
$$
\phi (\mathbf{r}, t) = \int \frac{\rho (\mathbf{r}, t)}{4 \pi \epsilon_{0} |\mathbf{r} - \mathbf{r'}|} d \tau' 
$$

$$
\mathbf{A} (\mathbf{r}, t) = \int \frac{\mu_{0} (\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}))}{4 \pi |\mathbf{r} - \mathbf{r'}|} d \tau'
$$

所以矢势的散度为：（以下用 $\nabla'_{r'}$ 表示仅仅对于空间部分的散度，即不考虑散度中推迟项带来的影响）
$$
\nabla \cdot \mathbf{A} =  \nabla \cdot \int \frac{\mu_{0} (\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}))}{4 \pi |\mathbf{r} - \mathbf{r'}|} d \tau' \\ = 
\frac{\mu_{0}}{4 \pi} \int \left( - \nabla' \frac{1}{|\mathbf{r} - \mathbf{r'}|}\right) \cdot \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) + \\ 
\frac{1}{|\mathbf{r} - \mathbf{r'}|} \nabla \cdot \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) d \tau' \\ =
\frac{\mu_{0}}{4 \pi} \int - \nabla' \frac{\left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right)}{|\mathbf{r} - \mathbf{r'}|} + \\
\frac{1}{|\mathbf{r} - \mathbf{r'}|} \nabla' \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) + \\
\frac{1}{|\mathbf{r} - \mathbf{r'}|} \frac{\partial}{\partial t} \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) \cdot \nabla (t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) \, d \tau' \\ =
\frac{\mu_{0}}{4 \pi} \oiint_{S'} - d \mathbf{S'} \cdot \frac{\left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right)}{|\mathbf{r} - \mathbf{r'}|}  + \\
\int \frac{1}{|\mathbf{r} - \mathbf{r'}|} \nabla'_{r'} \cdot \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) + \\
\frac{1}{|\mathbf{r} - \mathbf{r'}|} \frac{\partial}{\partial t} \left(\mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} \nabla'_{r'} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) \cdot (\nabla (t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) + \nabla' (t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})) \, d \tau' \\ = 
\frac{\mu_{0}}{4 \pi} \int \frac{1}{|\mathbf{r} - \mathbf{r'}|} \left( \nabla'_{r'} \cdot \mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) - \epsilon_{0} \frac{\partial}{\partial t} {\nabla'_{r'}}^{2} \phi (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})\right) \, d \tau' \\ = 
\frac{\mu_{0}}{4 \pi} \int \frac{1}{|\mathbf{r} - \mathbf{r'}|} (\nabla'_{r'} \cdot \mathbf{j} (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c}) + \frac{\partial}{\partial t} \rho (\mathbf{r'}, t - \frac{|\mathbf{r} - \mathbf{r'}|}{c})) \, d \tau' = 0
$$
其中最后一步是流守恒的直接结果。
