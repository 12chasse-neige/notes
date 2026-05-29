import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const root = args.find((arg) => !arg.startsWith('--')) ?? 'docs';
const includeCodeBlocks = args.includes('--include-code-blocks');
const dryRun = args.includes('--dry-run');
const markdownFiles = [];

async function collectMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectMarkdownFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      markdownFiles.push(fullPath);
    }
  }
}

function removeVacuumLines(text) {
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  const endsWithEol = text.endsWith('\n');
  const lines = text.split(/\r?\n/);
  if (endsWithEol) lines.pop();

  let inFence = false;
  let fenceMarker = '';
  let removed = 0;
  const kept = [];

  for (const line of lines) {
    const fence = line.match(/^\s*(`{3,}|~{3,})/);
    if (fence) {
      const marker = fence[1];
      if (!inFence) {
        inFence = true;
        fenceMarker = marker[0];
      } else if (marker[0] === fenceMarker) {
        inFence = false;
        fenceMarker = '';
      }
    }

    if (!includeCodeBlocks && inFence) {
      kept.push(line);
      continue;
    }

    if (line.trim() === '') {
      removed += 1;
      continue;
    }

    kept.push(line);
  }

  return {
    removed,
    text: kept.join(eol) + (endsWithEol ? eol : ''),
  };
}

await collectMarkdownFiles(root);

let changedFiles = 0;
let removedLines = 0;

for (const file of markdownFiles) {
  const original = await readFile(file, 'utf8');
  const result = removeVacuumLines(original);

  if (result.removed === 0) continue;

  changedFiles += 1;
  removedLines += result.removed;

  if (!dryRun) {
    await writeFile(file, result.text, 'utf8');
  }
}

const action = dryRun ? 'Would remove' : 'Removed';
console.log(`${action} ${removedLines} vacuum lines from ${changedFiles} Markdown files.`);
