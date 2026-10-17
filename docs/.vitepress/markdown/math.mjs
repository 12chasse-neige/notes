// Add TeX delimiters at the token level so code, escaped text, and dollar math
// keep their normal Markdown behavior.
function findClosingDelimiter(source, delimiter, start) {
  let index = source.indexOf(delimiter, start)
  while (index !== -1) {
    let precedingSlashes = 0
    for (let i = index - 1; i >= 0 && source[i] === '\\'; i--) precedingSlashes++
    if (precedingSlashes % 2 === 0) return index
    index = source.indexOf(delimiter, index + delimiter.length)
  }
  return -1
}

function inlineTeX(state, silent) {
  if (!state.src.startsWith('\\(', state.pos)) return false
  const start = state.pos + 2
  const end = findClosingDelimiter(state.src, '\\)', start)
  if (end < 0 || end + 2 > state.posMax || !state.src.slice(start, end).trim()) return false

  if (!silent) {
    const token = state.push('math_inline', 'math', 0)
    token.markup = '\\('
    token.content = state.src.slice(start, end)
  }
  state.pos = end + 2
  return true
}

function blockTeX(state, startLine, endLine, silent) {
  if (state.sCount[startLine] - state.blkIndent >= 4) return false
  const start = state.bMarks[startLine] + state.tShift[startLine]
  if (!state.src.startsWith('\\[', start)) return false

  let content = ''
  let closingLine = startLine
  for (; closingLine < endLine; closingLine++) {
    const lineStart = state.bMarks[closingLine] + state.tShift[closingLine]
    const lineEnd = state.eMarks[closingLine]
    if (closingLine > startLine && lineStart < lineEnd && state.sCount[closingLine] < state.blkIndent) {
      return false
    }
    const line = state.src.slice(lineStart + (closingLine === startLine ? 2 : 0), lineEnd)
    const closingIndex = findClosingDelimiter(line, '\\]', 0)
    if (closingIndex !== -1) {
      if (line.slice(closingIndex + 2).trim()) return false
      content += line.slice(0, closingIndex)
      break
    }
    content += line + '\n'
  }
  // An unfinished delimiter must not consume the rest of the document.
  if (closingLine === endLine) return false
  if (silent) return true

  const token = state.push('math_block', 'math', 0)
  token.block = true
  token.content = content.trim()
  token.markup = '\\['
  token.map = [startLine, closingLine + 1]
  state.line = closingLine + 1
  return true
}

function hasTopLevelLineBreak(source) {
  // A matrix/cases environment may contain its own rows; only outer rows need
  // a gather wrapper. Braced groups such as substack own their rows too.
  const commands = /\\begin\{[^}]+\}|\\end\{[^}]+\}|\\\\|\\.|[{}]/g
  let depth = 0
  let braceDepth = 0
  for (const [command] of source.matchAll(commands)) {
    if (command.startsWith('\\begin')) depth++
    else if (command.startsWith('\\end')) depth--
    else if (command === '{') braceDepth++
    else if (command === '}') braceDepth--
    else if (command === '\\\\' && depth === 0 && braceDepth === 0) return true
  }
  return false
}

export function enableMath(md) {
  // These must precede Markdown's backslash escape rule.
  md.inline.ruler.before('escape', 'tex_math_inline', inlineTeX)
  md.block.ruler.before('fence', 'tex_math_block', blockTeX, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  })

  md.core.ruler.push('math_display_rows', (state) => {
    for (const token of state.tokens) {
      if (token.type === 'math_block' && hasTopLevelLineBreak(token.content)) {
        token.content = '\\begin{gather}\n' + token.content.trim() + '\n\\end{gather}'
      }
    }
  })
}
