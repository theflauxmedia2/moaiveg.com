import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

const sourceLogo = path.join(
  publicDir,
  "lovable-uploads",
  "34d5174a-8590-49de-90e8-a10dd651ed5a.png",
);

const outputs = [
  { filename: "apple-touch-icon.png", size: 180 },
  { filename: "favicon-32x32.png", size: 32 },
  { filename: "favicon-16x16.png", size: 16 },
  { filename: "favicon-192x192.png", size: 192 },
  { filename: "favicon-512x512.png", size: 512 },
];

async function main() {
  await Promise.all(
    outputs.map(async ({ filename, size }) => {
      const outPath = path.join(publicDir, filename);
      await sharp(sourceLogo)
        .resize(size, size, { fit: "contain" })
        .png({ quality: 100 })
        .toFile(outPath);
      console.log(`Generated ${filename} (${size}x${size})`);
    }),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
