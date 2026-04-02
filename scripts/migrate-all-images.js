import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');
const AEROMITRA_IMAGES_DIR = path.join(process.cwd(), 'public/images/aeromitra');

// Get all aeromitra images
const aeromitraImages = fs.readdirSync(AEROMITRA_IMAGES_DIR).filter(file => {
  return file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.webp');
});

// A small counter to distribute images somewhat evenly
let imageIndex = 0;
const getNextImage = () => {
  const img = aeromitraImages[imageIndex % aeromitraImages.length];
  imageIndex++;
  return img;
};

// Helper to walk directory
function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.ts') || dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const files = walkSync(SRC_DIR);

let modifiedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // We only replace strings that look like exactly "/images/.../something.ext"
  // but not in utils/imageUtils.ts
  if (file.includes('imageUtils.ts')) continue;
  
  // Replace string literal image paths with getImageUrl(...)
  // We look for "/images/xxxx"
  const regex = /"\/images\/[^"]+\.(png|jpg|jpeg|webp|avif)"/g;
  let hasReplacements = false;
  
  content = content.replace(regex, (match) => {
    hasReplacements = true;
    const nextImage = getNextImage();
    // We add a special marker if we are in a TSX file vs TS file to know if we need curly braces
    // Wait, in a TS object { image: "/images/..." }, dropping getImageUrl("...") is fine.
    // In TSX <img src="/images/..." />, it becomes src={getImageUrl("...")} 
    // We can't blindly replace without context if it's an HTML attribute.
    return `getImageUrl("${nextImage}")`;
  });
  
  // For JSX attributes like src="/images/..." we need to catch src="
  const jsxRegex = /src="\/images\/[^"]+\.(png|jpg|jpeg|webp|avif)"/g;
  content = content.replace(jsxRegex, (match) => {
    hasReplacements = true;
    const nextImage = getNextImage();
    return `src={getImageUrl("${nextImage}")}`;
  });

  // What about background-image: url('/images/...')?
  const bgRegex = /url\(['"]?\/images\/[^)]+['"]?\)/g;
  content = content.replace(bgRegex, (match) => {
    hasReplacements = true;
    const nextImage = getNextImage();
    return `url(\${getImageUrl("${nextImage}")})`;
  });

  if (hasReplacements) {
    // We need to import getImageUrl if it's not imported
    if (!content.includes('getImageUrl')) {
       // Figure out relative path to utils/imageUtils
       const fileDir = path.dirname(file);
       let relativePath = path.relative(fileDir, path.join(SRC_DIR, 'utils/imageUtils'));
       relativePath = relativePath.replace(/\\/g, '/');
       if (!relativePath.startsWith('.')) {
         relativePath = './' + relativePath;
       }
       const importStatement = `import { getImageUrl } from "${relativePath}";\n`;
       content = importStatement + content;
    }
    
    // We have one problem: the first pass of `regex` will replace things indiscriminately.
    // So src="/images/..." becomes src=getImageUrl("..."). That's invalid JSX!
    // We should fix that. Let's do a quick pass to fix any `src=getImageUrl` to `src={getImageUrl}`
    content = content.replace(/src=getImageUrl/g, 'src={getImageUrl').replace(/src=\{getImageUrl\([^)]+\)"/g, (match) => match.replace('"', '}') );
    // Wait, regex replacing logic above is flawed.
    // Let me rewrite the logic using a better approach.
  }
}
