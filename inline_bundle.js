import fs from 'fs';
import path from 'path';

const distDir = './dist';
const htmlPath = path.join(distDir, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Find CSS link: matches <link rel="stylesheet" crossorigin href="./assets/index-*.css">
const cssRegexp = /<link rel="stylesheet"[^>]*href="\.\/assets\/(index-[A-Za-z0-9_-]+\.css)"[^>]*>/;
const cssMatch = html.match(cssRegexp);
if (cssMatch) {
  const cssFile = cssMatch[1];
  console.log(`Found CSS file: ${cssFile}`);
  const cssContent = fs.readFileSync(path.join(distDir, 'assets', cssFile), 'utf8');
  // Inject CSS directly inside a style tag (using callback to avoid regex macro replacement)
  html = html.replace(cssMatch[0], () => `<style>${cssContent}</style>`);
} else {
  console.warn('Could not find CSS file reference in HTML!');
}

// Find JS script link: matches <script type="module" crossorigin src="./assets/index-*.js"></script>
const jsRegexp = /<script type="module"[^>]*src="\.\/assets\/(index-[A-Za-z0-9_-]+\.js)"[^>]*><\/script>/;
const jsMatch = html.match(jsRegexp);
if (jsMatch) {
  const jsFile = jsMatch[1];
  console.log(`Found JS file: ${jsFile}`);
  const jsContent = fs.readFileSync(path.join(distDir, 'assets', jsFile), 'utf8');
  // Inject Javascript directly inside a module script tag (using callback to avoid regex macro replacement)
  html = html.replace(jsMatch[0], () => `<script type="module">${jsContent}</script>`);
} else {
  console.warn('Could not find JS file reference in HTML!');
}

const outputPath = path.join(distDir, 'index_inline.html');
fs.writeFileSync(outputPath, html, 'utf8');
console.log(`Successfully generated self-contained HTML file at: ${outputPath}`);
