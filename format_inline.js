import fs from 'fs';

const html = fs.readFileSync('dist/index_inline.html', 'utf8');

// We will find the content inside <script type="module">...</script>
const scriptStart = html.indexOf('<script type="module">');
const scriptEnd = html.indexOf('</script>', scriptStart);

if (scriptStart !== -1 && scriptEnd !== -1) {
  const startTag = '<script type="module">';
  const beforeScript = html.substring(0, scriptStart + startTag.length);
  const scriptContent = html.substring(scriptStart + startTag.length, scriptEnd);
  const afterScript = html.substring(scriptEnd);

  // Replace semicolons with semicolon + newline
  const formattedScript = scriptContent.replace(/;/g, ';\n');

  fs.writeFileSync('dist/index_formatted.html', beforeScript + formattedScript + afterScript, 'utf8');
  console.log('Formatted HTML generated successfully.');
} else {
  console.error('Could not find script block!');
}
