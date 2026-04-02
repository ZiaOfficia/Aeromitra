import fs from 'fs';
import path from 'path';

const AEROMITRA_DIR = path.join(process.cwd(), 'public/images/aeromitra');
const COMPONENTS_DIR = path.join(process.cwd(), 'src/components');
const PAGES_DIR = path.join(process.cwd(), 'src/pages');

// Get all test aeromitra images
const images = fs.readdirSync(AEROMITRA_DIR).filter(file => file.match(/\.(png|jpg|jpeg|webp)$/i));
let index = 0;
const getNextImage = () => images[index++ % images.length];

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
  let hasChanges = false;

  // Replace src="/images/..."
  const srcRegex = /src="\/images\/[^"]+\.(png|jpg|jpeg|webp|avif)"/g;
  content = content.replace(srcRegex, () => {
    hasChanges = true;
    return `src={getImageUrl("${getNextImage()}")}`;
  });

  // Replace backgroundImage: "url('/images/...')" or backgroundImage: `url('/images/...')`
  const bgRegex1 = /backgroundImage:\s*"url\(['"]?\/images\/[^)]+['"]?\)"/g;
  content = content.replace(bgRegex1, () => {
    hasChanges = true;
    return `backgroundImage: \`url(\${getImageUrl("${getNextImage()}")})\``;
  });

  const bgRegex2 = /backgroundImage:\s*`url\(['"]?\/images\/[^)]+['"]?\)`/g;
  content = content.replace(bgRegex2, () => {
    hasChanges = true;
    return `backgroundImage: \`url(\${getImageUrl("${getNextImage()}")})\``;
  });

  // Specifically for `FeaturedInStrip` and `ClientsStrip` if they map arrays... wait, they might define an array inside the TSX file.
  const arrayStringRegex = /"\/images\/[^"]+\.(png|jpg|jpeg|webp|avif)"/g;
  content = content.replace(arrayStringRegex, (match) => {
    hasChanges = true;
    // We assume if it's an array element it's replaced with a function call
    return `getImageUrl("${getNextImage()}")`;
  });

  if (hasChanges) {
    if (!content.includes('getImageUrl')) {
      const srcDir = path.join(process.cwd(), 'src');
      let relativePath = path.relative(path.dirname(file), path.join(srcDir, 'utils/imageUtils'));
      relativePath = relativePath.replace(/\\/g, '/');
      if (!relativePath.startsWith('.')) {
        relativePath = './' + relativePath;
      }
      content = `import { getImageUrl } from "${relativePath}";\n` + content;
    }
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
