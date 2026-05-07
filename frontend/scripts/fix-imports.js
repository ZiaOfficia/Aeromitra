import fs from 'fs';
import path from 'path';

const AEROMITRA_DIR = path.join(process.cwd(), 'public/images/aeromitra');
const COMPONENTS_DIR = path.join(process.cwd(), 'src/components');
const PAGES_DIR = path.join(process.cwd(), 'src/pages');

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const files = [...walkSync(COMPONENTS_DIR), ...walkSync(PAGES_DIR)];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // If we find getImageUrl but NOT the import, we add the import!
  if (content.includes('getImageUrl') && !content.includes('import { getImageUrl }')) {
    const srcDir = path.join(process.cwd(), 'src');
    let relativePath = path.relative(path.dirname(file), path.join(srcDir, 'utils/imageUtils'));
    relativePath = relativePath.replace(/\\/g, '/');
    if (!relativePath.startsWith('.')) {
      relativePath = './' + relativePath;
    }
    content = `import { getImageUrl } from "${relativePath}";\n` + content;
    fs.writeFileSync(file, content);
    console.log(`Added import to ${file}`);
  }
}
