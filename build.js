import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const clientIndexHtml = path.join(__dirname, 'client', 'index.html');
const distDir = path.join(__dirname, 'dist');
const distIndexHtml = path.join(distDir, 'index.html');

console.log('Client index.html path:', clientIndexHtml);
console.log('Dist directory path:', distDir);
console.log('Dist index.html path:', distIndexHtml);

// Check if client index.html exists
if (!fs.existsSync(clientIndexHtml)) {
  console.error('Error: Client index.html does not exist at', clientIndexHtml);
  process.exit(1);
}

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  console.log('Creating dist directory');
  fs.mkdirSync(distDir, { recursive: true });
}

// Read the client index.html
console.log('Reading client index.html');
let content = fs.readFileSync(clientIndexHtml, 'utf-8');
console.log('Content length:', content.length);

// Replace the script source
console.log('Replacing script source');
content = content.replace(
  'src="/src/main.tsx"',
  'src="/assets/index-C6za-m8O.js"'
);

// Add CSS link
console.log('Adding CSS link');
content = content.replace(
  '</title>',
  '</title>\n    <link rel="stylesheet" href="/assets/index-BWjjQAEM.css">'
);

// Write to the dist directory
console.log('Writing to dist index.html');
fs.writeFileSync(distIndexHtml, content);

// Verify the file was written
if (fs.existsSync(distIndexHtml)) {
  console.log('Successfully created index.html at', distIndexHtml);
  console.log('File size:', fs.statSync(distIndexHtml).size, 'bytes');
} else {
  console.error('Error: Failed to create index.html at', distIndexHtml);
}

console.log('Build script completed');
