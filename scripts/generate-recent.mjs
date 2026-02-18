// scripts/generate-recent.mjs
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import OpenAI from 'openai';
import 'dotenv/config'

// --------------------------------------------------------------------------
// Configuration
// --------------------------------------------------------------------------
const DOCS_DIR = 'docs';
const OUTPUT_FILE = 'docs/.vitepress/data/recent_projects.json';
const IGNORE_FILES = ['index.md', 'README.md'];
const IGNORE_DIRS = ['.vitepress', 'public', 'node_modules', '.git'];
const MAX_FILES_TO_ANALYZE = 10;

// Initialize OpenAI safely
// If no key is provided, client will be null, handled later
const apiKey = process.env.AI_API_KEY;
const openai = apiKey ? new OpenAI({
  apiKey: apiKey, 
  baseURL: process.env.AI_BASE_URL || 'https://api.deepseek.com' 
}) : null;

// --------------------------------------------------------------------------
// Helper: Get Recent Files using Git
// --------------------------------------------------------------------------
function getRecentFiles(dir) {
  // ... (Keep your existing getRecentFiles logic here) ...
  // [Code omitted for brevity, it is the same as before]
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

  const prompt = `
    You are a technical editor. Analyze the following Markdown content.
    Output a JSON object with exactly these keys in English:
    1. "title": A short, catchy title (max 7 words).
    2. "desc": A concise summary (max 20 words, engaging).
    3. "tags": An array of 3 technical keywords (strings).
    Content: ${snippet}
  `;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "deepseek-chat",
      response_format: { type: "json_object" },
      temperature: 0.3
    });
    return JSON.parse(completion.choices[0].message.content);
  } catch (error) {
    console.error(`[Error] AI analysis failed for ${filePath}:`, error.message);
    return null;
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