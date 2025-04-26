import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files to remove
const filesToRemove = [
  'deploy.js',
  'post-build.js',
  'drizzle.config.ts',
  'Dockerfile',
  'docker-compose.yml'
];

// Directories to remove
const dirsToRemove = [
  'server',
  'migrations'
];

// Remove files
filesToRemove.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed file: ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});

// Remove directories
dirsToRemove.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`Removed directory: ${dir}`);
  } else {
    console.log(`Directory not found: ${dir}`);
  }
});

console.log('Cleanup completed successfully!');
