# 量子力学 第8次作业

 Chasse_neige

7.5.1 若$\hat{\boldsymbol{J}}$是角动量算符，$\vec{a}$和$\vec{b}$是常数矢量，求证$[\hat{\boldsymbol{J}}\cdot\vec{a},\hat{\boldsymbol{J}}\cdot\vec{b}]=\mathrm{i}\hbar\hat{\boldsymbol{J}}\cdot(\vec{a}\times\vec{b})$，其中$\vec{a}\times\vec{b}$的定义就是通常的$(\vec{a}\times\vec{b})_{i}=\varepsilon_{ijk}a_{j} b_{k}$ $(i,j,k=1,2,3)$

利用角动量的对易关系

$$
[\hat{J}_{i},\hat{J}_{j}]=\mathrm{i}\hbar\varepsilon_{ijk}\hat{J}_{k}
$$

于是

$$
[\hat{\boldsymbol{J}}\cdot\vec{a},\hat{\boldsymbol{J}}\cdot\vec{b}]
=a_{i}b_{j}[\hat{J}_{i},\hat{J}_{j}]\\
=\mathrm{i}\hbar a_{i}b_{j}\varepsilon_{ijk}\hat{J}_{k}\\
=\mathrm{i}\hbar\hat{J}_{k}\varepsilon_{kij}a_{i}b_{j}\\
=\mathrm{i}\hbar\hat{\boldsymbol{J}}\cdot(\vec{a}\times\vec{b})
$$

7.5.2 我们曾经在习题4.4.3里定义了量子力学意义上的标量和矢量，但那里用的是轨道角动量$\hat{\boldsymbol{L}}$，现在应推广为一般的$\hat{\boldsymbol{J}}$，即满足$[\hat{J}_{i},\hat{S}]=0$ 的算符 $\hat{S}$ 称为标量算符，满足 $[\hat{J}_{i},\hat{V}_{j}]=\mathrm{i}\hbar\varepsilon_{ijk}\hat{V}_{k}$ 的算符 $\hat{\boldsymbol{V}}$ 称为矢量算符。求证：对矢量算符$\hat{\boldsymbol{V}}$ 有

(a) $\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}}+\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}}=2\mathrm{i}\hbar\hat{\boldsymbol{V}}$

按照定义，对第 $i$ 个分量计算

$$
(\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}})_{i}
=\varepsilon_{ijk}\hat{V}_{j}\hat{J}_{k}\\
=\varepsilon_{ijk}\left(\hat{J}_{k}\hat{V}_{j}-[\hat{J}_{k},\hat{V}_{j}]\right)\\
=\varepsilon_{ijk}\hat{J}_{k}\hat{V}_{j}-\mathrm{i}\hbar\varepsilon_{ijk}\varepsilon_{kjl}\hat{V}_{l}\\
=-\varepsilon_{ijk}\hat{J}_{j}\hat{V}_{k}+2\mathrm{i}\hbar\hat{V}_{i}
$$

其中用到了

$$
\varepsilon_{ijk}\varepsilon_{kjl}=-2\delta_{il}
$$

所以

$$
(\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}})_{i}+(\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}})_{i}=2\mathrm{i}\hbar\hat{V}_{i}
$$

即

$$
\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}}+\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}}=2\mathrm{i}\hbar\hat{\boldsymbol{V}}
$$

(b) $\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}}-\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}}=(\mathrm{i}/\hbar)[\hat{J}^{2},\hat{\boldsymbol{V}}]$

仍然对第 $i$ 个分量计算

$$
[\hat{J}^{2},\hat{V}_{i}]
=[\hat{J}_{j}^{2},\hat{V}_{i}]\\
=\hat{J}_{j}[\hat{J}_{j},\hat{V}_{i}]+[\hat{J}_{j},\hat{V}_{i}]\hat{J}_{j}\\
=\mathrm{i}\hbar\varepsilon_{jik}\left(\hat{J}_{j}\hat{V}_{k}+\hat{V}_{k}\hat{J}_{j}\right)
$$

所以

$$
\frac{\mathrm{i}}{\hbar}[\hat{J}^{2},\hat{V}_{i}]
=\varepsilon_{ijk}\left(\hat{J}_{j}\hat{V}_{k}+\hat{V}_{k}\hat{J}_{j}\right)
$$

另一方面

$$
(\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}}-\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}})_{i}
=\varepsilon_{ijk}\hat{J}_{j}\hat{V}_{k}-\varepsilon_{ijk}\hat{V}_{j}\hat{J}_{k}\\
=\varepsilon_{ijk}\left(\hat{J}_{j}\hat{V}_{k}+\hat{V}_{k}\hat{J}_{j}\right)
$$

两式相同，所以

$$
\hat{\boldsymbol{J}}\times\hat{\boldsymbol{V}}-\hat{\boldsymbol{V}}\times\hat{\boldsymbol{J}}=\frac{\mathrm{i}}{\hbar}[\hat{J}^{2},\hat{\boldsymbol{V}}]
$$

7.6.1 对于最大合成即 $j=j_{1}+j_{2}$ 的情形，CG系数是不难计算的。为简单起见下面省去 $j_{1},j_{2}$ 而把合成的状态记为 $|j,m\rangle_{\mathrm{c}}$，未合成的状态记为 $|m_{1},m_{2}\rangle_{\mathrm{n}}$。首先，根据约定，$|j_{1}+j_{2},j_{1}+j_{2}\rangle_{\mathrm{c}}=|j_{1},j_{2}\rangle_{\mathrm{n}}$，其次现在 $\hat{J}_- = \hat{J}_{1-} + \hat{J}_{2-}$，而它的作用是 $\hat{J}_- |j, m\rangle = \sqrt{(j-m+1)(j+m)} |j, m-1\rangle$（取 $\hbar = 1$）。请根据这些条件写出 (a) $|j_{1} + j_{2}, j_{1} + j_{2} - 1\rangle_{c}$ 和 (b) $|j_{1} + j_{2}, j_{1} + j_{2} - 2\rangle_{c}$，再往下的事情就是递推了（不要求写出）。

记 $j=j_{1}+j_{2}$，最高权态为

$$
|j,j\rangle_{\mathrm{c}}=|j_{1},j_{2}\rangle_{\mathrm{n}}
$$

对最高权态作用一次降算符

$$
\hat{J}_{-}|j,j\rangle_{\mathrm{c}}=\sqrt{2j}|j,j-1\rangle_{\mathrm{c}}
$$

另一方面

$$
\hat{J}_{-}|j_{1},j_{2}\rangle_{\mathrm{n}}
=(\hat{J}_{1-}+\hat{J}_{2-})|j_{1},j_{2}\rangle_{\mathrm{n}}\\
=\sqrt{2j_{1}}|j_{1}-1,j_{2}\rangle_{\mathrm{n}}+\sqrt{2j_{2}}|j_{1},j_{2}-1\rangle_{\mathrm{n}}
$$

所以

$$
|j_{1}+j_{2},j_{1}+j_{2}-1\rangle_{\mathrm{c}}
=\sqrt{\frac{j_{1}}{j_{1}+j_{2}}}|j_{1}-1,j_{2}\rangle_{\mathrm{n}}
+\sqrt{\frac{j_{2}}{j_{1}+j_{2}}}|j_{1},j_{2}-1\rangle_{\mathrm{n}}
$$

再作用一次降算符，有

$$
\hat{J}_{-}|j,j-1\rangle_{\mathrm{c}}=\sqrt{2(2j-1)}|j,j-2\rangle_{\mathrm{c}}
$$

同时

$$
\hat{J}_{-}|j,j-1\rangle_{\mathrm{c}}
=\sqrt{\frac{j_{1}}{j}}\left(\sqrt{2(2j_{1}-1)}|j_{1}-2,j_{2}\rangle_{\mathrm{n}}+\sqrt{2j_{2}}|j_{1}-1,j_{2}-1\rangle_{\mathrm{n}}\right)\\
+\sqrt{\frac{j_{2}}{j}}\left(\sqrt{2j_{1}}|j_{1}-1,j_{2}-1\rangle_{\mathrm{n}}+\sqrt{2(2j_{2}-1)}|j_{1},j_{2}-2\rangle_{\mathrm{n}}\right)
$$

因此

$$
|j_{1}+j_{2},j_{1}+j_{2}-2\rangle_{\mathrm{c}}
=\sqrt{\frac{j_{1}(2j_{1}-1)}{(j_{1}+j_{2})(2j_{1}+2j_{2}-1)}}|j_{1}-2,j_{2}\rangle_{\mathrm{n}}\\
+2\sqrt{\frac{j_{1}j_{2}}{(j_{1}+j_{2})(2j_{1}+2j_{2}-1)}}|j_{1}-1,j_{2}-1\rangle_{\mathrm{n}}\\
+\sqrt{\frac{j_{2}(2j_{2}-1)}{(j_{1}+j_{2})(2j_{1}+2j_{2}-1)}}|j_{1},j_{2}-2\rangle_{\mathrm{n}}
$$

7.6.2（选做）把上面的问题做完，就是写出 $|j_{1} + j_{2}, j_{1} + j_{2} - k\rangle_{c}$ ($k = 0, \cdots, 2(j_{1} + j_{2})$) 的一般表达式。

>  提示：利用组合论的符号 $\binom{n}{m} = \frac{n!}{m!(n-m)!}$ 可以使这个表达式非常简洁。

仍记 $j=j_{1}+j_{2}$，反复作用降算符可以得到

$$
\hat{J}_{-}^{k}|j,j\rangle_{\mathrm{c}}
=\sqrt{\frac{k!(2j)!}{(2j-k)!}}|j,j-k\rangle_{\mathrm{c}}
$$

又因为 $\hat{J}_{1-}$ 与 $\hat{J}_{2-}$ 对易，所以

$$
(\hat{J}_{1-}+\hat{J}_{2-})^{k}
=\binom{k}{r}\hat{J}_{1-}^{r}\hat{J}_{2-}^{k-r}
$$

而

$$
\hat{J}_{1-}^{r}\hat{J}_{2-}^{k-r}|j_{1},j_{2}\rangle_{\mathrm{n}}
=\sqrt{\frac{r!(2j_{1})!}{(2j_{1}-r)!}}\sqrt{\frac{(k-r)!(2j_{2})!}{(2j_{2}-k+r)!}}|j_{1}-r,j_{2}-k+r\rangle_{\mathrm{n}}
$$

这里右侧对整数 $r=0,\cdots,k$ 求和。代入并整理系数，得到一般结果

$$
|j_{1}+j_{2},j_{1}+j_{2}-k\rangle_{\mathrm{c}}
= \sum_{r = r_{\text{min}}}^{r_{\text}{max}} \sqrt{\frac{\binom{2j_{1}}{r}\binom{2j_{2}}{k-r}}{\binom{2j_{1}+2j_{2}}{k}}} |j_{1} - r, j_{2} - k + r \rangle_{\mathrm{n}}
$$

其中

$$
r_{\min}=\max(0,k-2j_{2}),\quad r_{\max}=\min(k,2j_{1})
$$

这个表达式在 $k=1,2$ 时就回到上一题的两个结果。

7.6.3（选做）请写出 $|j_{1} + j_{2} - 1, j_{1} + j_{2} - 1\rangle_{c}$

>  提示：$|j_{1} + j_{2} - 1, j_{1} + j_{2} - 1\rangle_{c}$ 是和 $|j_{1} + j_{2}, j_{1} + j_{2} - 1\rangle_{c}$ 正交的。

在 $m=j_{1}+j_{2}-1$ 的子空间中，只有两个基矢

$$
|j_{1}-1,j_{2}\rangle_{\mathrm{n}}, |j_{1},j_{2}-1\rangle_{\mathrm{n}}
$$

而上一题已经得到

$$
|j_{1}+j_{2},j_{1}+j_{2}-1\rangle_{\mathrm{c}}
=\sqrt{\frac{j_{1}}{j_{1}+j_{2}}}|j_{1}-1,j_{2}\rangle_{\mathrm{n}}
+\sqrt{\frac{j_{2}}{j_{1}+j_{2}}}|j_{1},j_{2}-1\rangle_{\mathrm{n}}
$$

所以与它正交且归一化的组合可以取为

$$
|j_{1}+j_{2}-1,j_{1}+j_{2}-1\rangle_{\mathrm{c}}
=\sqrt{\frac{j_{2}}{j_{1}+j_{2}}}|j_{1}-1,j_{2}\rangle_{\mathrm{n}}
-\sqrt{\frac{j_{1}}{j_{1}+j_{2}}}|j_{1},j_{2}-1\rangle_{\mathrm{n}}
$$

