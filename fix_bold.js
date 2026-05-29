const fs = require('fs');
const path = require('path');

const files = [
  'src/components/ParentsSection.tsx',
  'src/components/BenefitsSection.tsx',
  'src/components/AboutSection.tsx',
  'src/components/ProgramsSection.tsx',
  'src/components/TeamSection.tsx',
  'src/components/Footer.tsx'
];

files.forEach(file => {
  const filepath = path.join(__dirname, file);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Replace `<p className="... font-bold ..."` with `font-medium`
  // Replace `<p className="... font-semibold ..."` with `font-medium`
  
  content = content.replace(/(<p[^>]*className="[^"]*)font-bold([^"]*")>/g, '$1font-medium$2>');
  content = content.replace(/(<p[^>]*className="[^"]*)font-semibold([^"]*")>/g, '$1font-medium$2>');
  
  fs.writeFileSync(filepath, content);
});

console.log("Updated font weights.");
