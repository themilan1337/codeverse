import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/assets/images');
const outputFile = path.join(__dirname, '../app/data/images.json');

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

try {
    const files = fs.readdirSync(imagesDir);
    const images = files
        .filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
        .map(file => {
            // Create a readable title from filename
            const title = file
                .replace(/\.(jpg|jpeg|png|webp|avif)$/i, '')
                .split(/[-_]/)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            return {
                title,
                path: `/assets/images/${file}`
            };
        });

    fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));
    console.log(`Successfully generated image list with ${images.length} images at ${outputFile}`);
} catch (error) {
    console.error('Error generating image list:', error);
    // Write empty array fallback
    fs.writeFileSync(outputFile, '[]');
}
