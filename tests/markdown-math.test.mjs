import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createMarkdownRenderer } from 'vitepress'
import { enableMath } from '../docs/.vitepress/markdown/math.mjs'

const md = await createMarkdownRenderer(process.cwd(), {
  math: true,
  config: enableMath
})
const parse = (source) => md.parse(source, {})
const mathTokens = (source) => parse(source).flatMap(token => [token, ...(token.children ?? [])])
  .filter(token => token.type.startsWith('math_'))
const render = (source) => {
  const html = md.render(source)
  assert.doesNotMatch(html, /data-mjx-error|mathcolor="red"/)
  return html
}

test('dollar and TeX delimiters share the MathJax renderer', () => {
  const source = String.raw`Inline $x^2$ and \(y_1\).

$$z=3$$

\[w=4\]`
  assert.deepEqual(mathTokens(source).map(token => token.type), [
    'math_inline', 'math_inline', 'math_block', 'math_block'
  ])
  assert.equal((render(source).match(/<mjx-container/g) ?? []).length, 4)
})

test('display TeX interrupts paragraphs and preserves the following heading', () => {
  const source = String.raw`Before
\[
\frac{a}{b}
\]
## After`
  assert.equal(mathTokens(source)[0].content, String.raw`\frac{a}{b}`)
  assert.match(render(source), /<h2[^>]*>After/)
})

test('display math stays inside nested lists and blockquotes', () => {
  for (const source of [
    String.raw`- Formula:
  \[
  x=1
  \]
- Next item`,
    String.raw`> \[
> x=1
> \]

Following paragraph`
  ]) {
    assert.equal(mathTokens(source).length, 1)
    assert.equal(mathTokens(source)[0].content, 'x=1')
    render(source)
  }
})

test('fenced code, inline code, indented code, and escaped delimiters stay literal', () => {
  const source = [
    '```tex', String.raw`\[x\] \(y\) $z$`, '```', '',
    'Literal: `\\(x\\)`', '',
    String.raw`    \[x\]`, '',
    String.raw`Escaped: \\(x\\) and \\[y\\]`
  ].join('\n')
  assert.equal(mathTokens(source).length, 0)
})

test('unfinished delimiters do not swallow subsequent Markdown or escape a list', () => {
  for (const source of [
    String.raw`\[
x=1

## Still a heading`,
    String.raw`- \[
  x=1

\]

## Still a heading`
  ]) {
    assert.equal(mathTokens(source).length, 0)
    assert.match(render(source), /<h2[^>]*>Still a heading/)
  }
  assert.equal(mathTokens(String.raw`Unfinished \(x and $y$`).length, 1)
})

test('escaped closing delimiters are skipped', () => {
  const tokens = mathTokens(String.raw`\(a \\) b\)`)
  assert.equal(tokens.length, 1)
  assert.equal(tokens[0].content, String.raw`a \\) b`)
})

test('outer equation rows are gathered even when they contain matrices', () => {
  const source = String.raw`\[
A=\begin{pmatrix}1 & 2\\3 & 4\end{pmatrix} \\
B=2A
\]`
  assert.match(mathTokens(source)[0].content, /^\\begin\{gather\}/)
  render(source)
})

test('existing aligned and matrix environments retain their own rows', () => {
  for (const environment of ['aligned', 'pmatrix', 'cases']) {
    const content = '\\begin{' + environment + '}a & b \\\\ c & d\\end{' + environment + '}'
    const source = '$$\n' + content + '\n$$'
    assert.equal(mathTokens(source)[0].content.trim(), content)
    render(source)
  }
})

test('substack rows do not wrap a tagged equation in a new environment', () => {
  const content = '\\lim_{\\substack{x\\to 0\\\\y<0}} f(x,y)=1 \\tag{10}'
  assert.equal(mathTokens('$$\n' + content + '\n$$')[0].content.trim(), content)
  render('$$\n' + content + '\n$$')
})

test('outer equation rows allow explicit equation tags', () => {
  render('$$\nx=1 \\tag{1}\\\\\ny=2 \\tag{2}\n$$')
})
