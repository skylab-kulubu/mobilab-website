import fs from 'node:fs';
import path from 'node:path';

const CONTENT_PATH = path.join(process.cwd(), 'src/data/content.json');

export function getContent() {
  try {
    const raw = fs.readFileSync(CONTENT_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading content.json:', error);
    return {};
  }
}

export function saveContent(data: any) {
  try {
    fs.writeFileSync(CONTENT_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing content.json:', error);
    return false;
  }
}
