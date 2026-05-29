import fs from 'fs';
import path from 'path';

const srcDir = './dist';
const destDir = '/Users/noynathykhamchalern/.gemini/antigravity/brain/ae470652-0061-43b8-af13-16e9c9889cef/browser';

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

try {
  console.log(`Copying from ${srcDir} to ${destDir}...`);
  copyRecursiveSync(srcDir, destDir);
  console.log('Copy completed successfully!');
  process.exit(0);
} catch (err) {
  console.error('Failed to copy files:', err);
  process.exit(1);
}
