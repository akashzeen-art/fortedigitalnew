import { cpSync, existsSync, rmSync } from "fs";

const src = "out";
const dest = "dist";

if (!existsSync(src)) {
  console.error("Build output folder 'out' not found. Run next build first.");
  process.exit(1);
}

if (existsSync(dest)) {
  rmSync(dest, { recursive: true, force: true });
}

cpSync(src, dest, { recursive: true });
console.log("Ready for Netlify: static files copied to dist/");
