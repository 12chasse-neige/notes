// scripts/generate-recent.mjs
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import OpenAI from 'openai';
import 'dotenv/config';

// --------------------------------------------------------------------------
// Configuration
// --------------------------------------------------------------------------
const DOCS_DIR = 'docs';
const OUTPUT_FILE = 'docs/.vitepress/data/recent_projects.json';
const IGNORE_FILES = ['index.md', 'README.md'];
const IGNORE_DIRS = ['.vitepress', 'public', 'node_modules', '.git'];
const MAX_FILES_TO_ANALYZE = 30;
const MODEL = process.env.AI_MODEL || 'deepseek-chat';
const CJK_RE = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/u;

// Initialize OpenAI safely
// If no key is provided, client will be null, handled later
const apiKey = process.env.AI_API_KEY;
const openai = apiKey ? new OpenAI({
  apiKey: apiKey,
  baseURL: process.env.AI_BASE_URL || 'https://api.deepseek.com'
}) : null;

function containsCJK(value) {
  if (typeof value === 'string') return CJK_RE.test(value);
  if (Array.isArray(value)) return value.some(item => containsCJK(item));
  if (value && typeof value === 'object') {
    return Object.values(value).some(item => containsCJK(item));
  }
  return false;
}

function limitWords(text, maxWords) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.slice(0, maxWords).join(' ');
}

function fallbackSummaryFor(filePath) {
  const rawTitle = path.basename(filePath, path.extname(filePath))
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const title = rawTitle && !containsCJK(rawTitle)
    ? limitWords(rawTitle, 7)
    : 'Recent Study Note';

  return {
    title,
    desc: 'A recent technical note from the study collection.',
    tags: ['study notes', 'technical writing', 'markdown']
  };
}

function normalizeAIData(data, filePath) {
  const fallback = fallbackSummaryFor(filePath);
  const title = typeof data?.title === 'string' && data.title.trim()
    ? limitWords(data.title, 7)
    : fallback.title;
  const desc = typeof data?.desc === 'string' && data.desc.trim()
    ? limitWords(data.desc, 15)
    : fallback.desc;
  const tags = Array.isArray(data?.tags)
    ? data.tags
      .map(tag => String(tag).trim())
      .filter(Boolean)
      .slice(0, 3)
    : [];

  while (tags.length < 3) {
    tags.push(fallback.tags[tags.length]);
  }

  return { title, desc, tags };
}

function enforceEnglishFallback(data, filePath) {
  const fallback = fallbackSummaryFor(filePath);
  const tags = data.tags.map((tag, index) => (
    containsCJK(tag) ? fallback.tags[index] : tag
  ));

  return {
    title: containsCJK(data.title) ? fallback.title : data.title,
    desc: containsCJK(data.desc) ? fallback.desc : data.desc,
    tags
  };
}

function parseJsonObject(rawContent) {
  try {
    return JSON.parse(rawContent);
  } catch {
    const match = rawContent.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('AI response did not contain a JSON object.');
    return JSON.parse(match[0]);
  }
}

// --------------------------------------------------------------------------
// Helper: Get Recent Files using Git
// --------------------------------------------------------------------------
function getRecentFiles(dir) {
  const files = [];
  function scan(directory) {
    const list = fs.readdirSync(directory);
    list.forEach(file => {
      const fullPath = path.join(directory, file);
      // Check if file exists before stat (edge case)
      if (!fs.existsSync(fullPath)) return;

      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        if (!IGNORE_DIRS.includes(file)) scan(fullPath);
      } else if (file.endsWith('.md') && !IGNORE_FILES.includes(file)) {
        try {
          const timestamp = execSync(`git log -1 --format="%ct" "${fullPath}"`, { encoding: 'utf-8' }).trim();
          if (timestamp) {
            files.push({ path: fullPath, time: parseInt(timestamp, 10) });
          }
        } catch (e) { /* ignore */ }
      }
    });
  }
  scan(dir);
  return files.sort((a, b) => b.time - a.time).slice(0, MAX_FILES_TO_ANALYZE);
}

// --------------------------------------------------------------------------
// Helper: Call AI for Summary
// --------------------------------------------------------------------------
async function analyzeWithAI(filePath) {
  if (!openai) return null; // No client, no analysis

  const content = fs.readFileSync(filePath, 'utf-8');
  const snippet = content.slice(0, 2000);

  const systemPrompt = [
    'You write short project-card metadata in English only.',
    'If the source Markdown is Chinese or mixed-language, translate the topic into natural English.',
    'Never output Chinese, Japanese, or Korean characters.',
    'Return strict JSON only.'
  ].join(' ');

  const prompt = `
Analyze this Markdown excerpt and return one JSON object with exactly these keys:
{
  "title": "short English title, max 7 words",
  "desc": "concise English summary, max 15 words",
  "tags": ["English keyword", "English keyword", "English keyword"]
}

Rules:
- Every value must be English.
- Do not copy non-English headings or tags verbatim; translate them.
- Use technical keywords when possible.

File path: ${filePath}
Content:
${snippet}
`;

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      model: MODEL,
      response_format: { type: 'json_object' },
      temperature: 0.1
    });

    let aiData = normalizeAIData(
      parseJsonObject(completion.choices[0].message.content),
      filePath
    );

    if (containsCJK(aiData)) {
      console.warn(`[Warn] Non-English AI output detected for ${filePath}. Retrying translation.`);
      aiData = await translateSummaryToEnglish(aiData, filePath);
    }

    if (containsCJK(aiData)) {
      console.warn(`[Warn] Translation still contained non-English text for ${filePath}. Using fallback fields.`);
      aiData = enforceEnglishFallback(aiData, filePath);
    }

    return aiData;
  } catch (error) {
    console.error(`[Error] AI analysis failed for ${filePath}:`, error.message);
    return null;
  }
}

async function translateSummaryToEnglish(data, filePath) {
  const prompt = `
Translate this JSON object's title, desc, and tags into natural English.
Keep the same JSON keys and return strict JSON only.
Do not output Chinese, Japanese, or Korean characters.

File path: ${filePath}
JSON:
${JSON.stringify(data, null, 2)}
`;

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You translate project-card metadata into English and return JSON only.'
        },
        { role: 'user', content: prompt }
      ],
      model: MODEL,
      response_format: { type: 'json_object' },
      temperature: 0
    });

    return normalizeAIData(
      parseJsonObject(completion.choices[0].message.content),
      filePath
    );
  } catch (error) {
    console.error(`[Error] English translation failed for ${filePath}:`, error.message);
    return data;
  }
}

// --------------------------------------------------------------------------
// Main Execution with Fallback Logic
// --------------------------------------------------------------------------
async function main() {
  console.log('--- Starting AI Project Analysis ---');

  // 1. Check if we have existing data (Fallback)
  let existingData = [];
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      existingData = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      console.log(`[Info] Loaded ${existingData.length} existing projects as fallback.`);
    } catch (e) {
      console.warn('[Warn] Existing JSON is corrupt. Starting empty.');
    }
  }

  // 2. Validate API Key
  if (!apiKey) {
    console.warn('[Warn] AI_API_KEY is missing. Using existing data (if any).');
    // If we have no key, we just exit. The existing JSON file stays untouched.
    // VitePress will use the old file.
    return;
  }

  // 3. Try to fetch new data
  const recentFiles = getRecentFiles(DOCS_DIR);
  const newProjects = [];
  let errorCount = 0;

  for (const file of recentFiles) {
    console.log(`Processing: ${file.path}`);
    const aiData = await analyzeWithAI(file.path);

    if (aiData) {
      const webPath = '/' + path.relative(DOCS_DIR, file.path)
        .replace(/\\/g, '/')
        .replace(/\.md$/, '');

      newProjects.push({
        title: aiData.title,
        desc: aiData.desc,
        tags: aiData.tags,
        link: webPath
      });
    } else {
        errorCount++;
    }
  }

  // 4. Decision Logic: Write new file OR keep old one
  if (newProjects.length > 0) {
    // Ensure directory exists
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    // Write the new data
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newProjects, null, 2));
    console.log(`--- Success! Updated ${OUTPUT_FILE} with ${newProjects.length} projects. ---`);
  } else {
    // If newProjects is empty (e.g., all API calls failed), we DO NOT write to the file.
    // This preserves the old JSON file content.
    console.warn(`[Warn] No new data generated (Errors: ${errorCount}). Keeping existing data.`);
  }
}

main();
