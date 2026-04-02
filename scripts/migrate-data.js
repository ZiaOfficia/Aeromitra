import fs from 'fs';
import path from 'path';

const AEROMITRA_DIR = path.join(process.cwd(), 'public/images/aeromitra');
const DataFiles = [
  path.join(process.cwd(), 'src/data/servicesData.ts'),
  path.join(process.cwd(), 'src/data/portfolioData.ts')
];

const images = fs.readdirSync(AEROMITRA_DIR).filter(file => file.match(/\.(png|jpg|jpeg|webp)$/i));
let index = 0;
const getNextImage = () => images[index++ % images.length];

for (const file of DataFiles) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('getImageUrl')) {
    content = 'import { getImageUrl } from "../utils/imageUtils";\n' + content;
  }

  // Find strings like "/images/gallery/cpl-training-1.webp" or "/images/home/hero-cpl.webp"
  // Since we are right in the data files doing object assignments, replacing with `getImageUrl("random.ext")` is syntactically sound.
  const regex = /"\/images\/[^"]+\.(webp|png|jpg|jpeg|avif)"/g;
  content = content.replace(regex, (match) => {
    return `getImageUrl("${getNextImage()}")`;
  });

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}
