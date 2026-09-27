import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const publicDir = path.join(projectRoot, "public");

const SIZE = { width: 1200, height: 630 };

const brand = {
  greenTop: "#004F00",
  greenBottom: "#002800",
  bronze: "#947352",
  text: "#F4F1EA",
};

const assets = {
  banner: path.join(publicDir, "banners", "Desktop.jpg"),
  logo: path.join(
    publicDir,
    "lovable-uploads",
    "34d5174a-8590-49de-90e8-a10dd651ed5a.png",
  ),
  food1: path.join(publicDir, "food", "1.jpg"),
  food2: path.join(publicDir, "food", "2.jpg"),
  ambienceMain: path.join(publicDir, "ambinace", "main.jpg"),
};

const baseGradientSvg = (accent = brand.bronze) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE.width}" height="${SIZE.height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${brand.greenTop}"/>
      <stop offset="100%" stop-color="${brand.greenBottom}"/>
    </linearGradient>
    <radialGradient id="vignette" cx="55%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.55"/>
    </radialGradient>
    <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.06"/>
      <stop offset="45%" stop-color="#ffffff" stop-opacity="0.00"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#sheen)"/>
  <rect width="100%" height="100%" fill="url(#vignette)"/>

  <!-- Bottom accent line -->
  <rect x="70" y="${SIZE.height - 72}" width="${SIZE.width - 140}" height="2" rx="1" fill="${accent}" opacity="0.95"/>
</svg>
`;

const overlayTextSvg = ({
  tagline,
  subtitle,
  domain,
  accent = brand.bronze,
}) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE.width}" height="${SIZE.height}">
  <style>
    .tagline { font-family: "Playfair Display", "Times New Roman", serif; font-weight: 700; letter-spacing: 0.5px; }
    .subtitle { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; font-weight: 600; letter-spacing: 0.2px; }
    .domain { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; font-weight: 600; letter-spacing: 1.2px; text-transform: lowercase; }
  </style>

  <!-- Subtle glow behind center stack -->
  <defs>
    <radialGradient id="glow" cx="42%" cy="42%" r="42%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="470" cy="285" r="210" fill="url(#glow)"/>

  <text x="470" y="355" text-anchor="middle" class="tagline" font-size="54" fill="${brand.text}">
    ${tagline}
  </text>
  <text x="470" y="405" text-anchor="middle" class="subtitle" font-size="22" fill="${brand.text}" opacity="0.92">
    ${subtitle}
  </text>

  <text x="${SIZE.width - 70}" y="${SIZE.height - 34}" text-anchor="end" class="domain" font-size="18" fill="${accent}" opacity="0.95">
    ${domain}
  </text>
</svg>
`;

function escapeXml(input) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function circleMaskPng(diameter) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${diameter}" height="${diameter}">
    <circle cx="${diameter / 2}" cy="${diameter / 2}" r="${diameter / 2}" fill="white"/>
  </svg>`;
  return sharp(Buffer.from(svg)).png().toBuffer();
}

async function makeOg({
  outFile,
  accent,
  rightImage,
  tagline,
  subtitle,
}) {
  const background = await sharp(Buffer.from(baseGradientSvg(accent)))
    .jpeg({ quality: 92 })
    .toBuffer();

  const banner = await sharp(assets.banner)
    .resize(SIZE.width, SIZE.height, { fit: "cover" })
    .jpeg({ quality: 85 })
    .toBuffer();

  const rightDiameter = 410;
  const mask = await circleMaskPng(rightDiameter);
  const right = await sharp(rightImage)
    .resize(rightDiameter, rightDiameter, { fit: "cover" })
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();

  const rightStrokeSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${rightDiameter}" height="${rightDiameter}">
      <circle cx="${rightDiameter / 2}" cy="${rightDiameter / 2}" r="${
    rightDiameter / 2 - 2
  }" fill="none" stroke="${accent}" stroke-width="3" opacity="0.9"/>
      <circle cx="${rightDiameter / 2}" cy="${rightDiameter / 2}" r="${
    rightDiameter / 2 - 10
  }" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.18"/>
    </svg>
  `;
  const rightStroke = await sharp(Buffer.from(rightStrokeSvg)).png().toBuffer();

  const logo = await sharp(assets.logo)
    .resize(260, 260, { fit: "contain" })
    .png()
    .toBuffer();

  const copy = await sharp(
    Buffer.from(
      overlayTextSvg({
        tagline: escapeXml(tagline),
        subtitle: escapeXml(subtitle),
        domain: escapeXml("moaiveg.com"),
        accent,
      }),
    ),
  )
    .png()
    .toBuffer();

  const outPath = path.join(publicDir, outFile);

  await sharp(background)
    .composite([
      { input: banner, blend: "over", opacity: 0.26 },
      // Logo centered-left to balance right image
      { input: logo, left: 340, top: 150 },
      // Copy stack
      { input: copy, left: 0, top: 0 },
      // Right circular image
      { input: right, left: 740, top: 110 },
      { input: rightStroke, left: 740, top: 110 },
    ])
    .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
    .toFile(outPath);

  console.log(`Generated ${outFile}`);
}

async function main() {
  await makeOg({
    outFile: "og-image.jpg",
    accent: brand.bronze,
    rightImage: assets.food1,
    tagline: "Where Artistry Meets Flavour",
    subtitle: "Premium Vegetarian Fine Dining · Jayanagar, Bangalore",
  });

  await makeOg({
    outFile: "og-image-gallery.jpg",
    accent: "#FED6AB",
    rightImage: assets.ambienceMain,
    tagline: "Ambience & Artistry",
    subtitle: "Gallery · MOAI Restaurant · Jayanagar, Bangalore",
  });

  await makeOg({
    outFile: "og-image-menu.jpg",
    accent: "#8ED7A6",
    rightImage: assets.food2,
    tagline: "Artisanal Vegetarian Menu",
    subtitle: "Explore the Menu · MOAI · Jayanagar, Bangalore",
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

