#!/usr/bin/env node
/**
 * Creates moaiveg-deploy.zip from dist/ for Hostinger upload.
 * Upload the zip to public_html, extract in place, delete the zip.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const zipPath = path.join(root, "moaiveg-deploy.zip");

if (!fs.existsSync(dist)) {
  console.error("Run npm run build first.");
  process.exit(1);
}

const required = ["index.html", ".htaccess", "assets"];
const missing = required.filter((f) => !fs.existsSync(path.join(dist, f)));
if (missing.length) {
  console.error("Missing from dist:", missing.join(", "));
  process.exit(1);
}

const assetsDir = path.join(dist, "assets");
const jsFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".js"));
const cssFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".css"));
if (!jsFiles.length || !cssFiles.length) {
  console.error("dist/assets must contain built JS and CSS bundles.");
  process.exit(1);
}

const requiredDirs = ["food", "ambinace", "banners", "post", "favicon_io", "lovable-uploads", "theflauxmedia"];
const missingDirs = requiredDirs.filter((d) => !fs.existsSync(path.join(dist, d)));
if (missingDirs.length) {
  console.error("Missing asset folders in dist:", missingDirs.join(", "));
  process.exit(1);
}

// Hostinger's File Manager extractor gives up on very large files, silently dropping
// everything after them in the zip. Refuse to package anything over the limit.
const MAX_FILE_MB = 2;
const oversized = fs
  .readdirSync(dist, { recursive: true })
  .map((f) => path.join(dist, String(f)))
  .filter((f) => fs.statSync(f).isFile() && fs.statSync(f).size > MAX_FILE_MB * 1024 * 1024);
if (oversized.length) {
  console.error(`Files over ${MAX_FILE_MB} MB (compress them before deploying):`);
  oversized.forEach((f) => console.error("  -", path.relative(dist, f)));
  process.exit(1);
}

if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

// Order matters: if the host's extractor stops partway, the old index.html must still
// be in place, so add the hashed bundles first, everything else next, and index.html last.
const zip = (args) => execSync(`cd "${dist}" && zip -rq "${zipPath}" ${args}`, { stdio: "inherit" });
zip(`assets .htaccess -x "*.DS_Store"`);
zip(`. -x "*.DS_Store" "assets/*" ".htaccess" "index.html"`);
zip(`index.html`);

const zipSize = (fs.statSync(zipPath).size / 1024 / 1024).toFixed(1);
const fileCount = fs
  .readdirSync(dist, { recursive: true })
  .filter((f) => !String(f).includes(".DS_Store")).length;

console.log("\n✅ Created:", zipPath, `(${zipSize} MB, ${fileCount} files)`);

// Always drop a fresh copy on the Desktop, replacing the previous one.
const desktopZip = path.join(os.homedir(), "Desktop", "moaiveg-deploy.zip");
if (fs.existsSync(path.dirname(desktopZip))) {
  fs.rmSync(desktopZip, { force: true });
  fs.copyFileSync(zipPath, desktopZip);
  console.log("✅ Copied to:", desktopZip);
}
console.log("\nHostinger steps:");
console.log("  1. File Manager → public_html");
console.log("  2. Delete OLD site files (or move to a backup folder)");
console.log("  3. Upload moaiveg-deploy.zip");
console.log("  4. Right-click zip → Extract (extract HERE, into public_html)");
console.log("  5. Confirm assets/ folder exists with JS + CSS inside");
console.log("  6. Confirm 9 folders: assets, ambinace, banners, favicon_io, food, icons, lovable-uploads, post, theflauxmedia");
console.log("  7. Confirm .htaccess exists (enable “Show hidden files”)");
console.log("  8. Delete the zip file");
console.log("  9. Clear Hostinger cache + hard-refresh browser (Ctrl+Shift+R)");
