import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const dir = path.resolve("public/covers");
const files = (await readdir(dir)).filter((f) => /\.jpe?g$/i.test(f));

let before = 0;
let after = 0;

for (const file of files) {
  const full = path.join(dir, file);
  const src = await stat(full);
  const input = await readFile(full);
  const buf = await sharp(input)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  before += src.size;
  if (buf.length < src.size) {
    await writeFile(full, buf);
    after += buf.length;
  } else {
    after += src.size;
  }
}

console.log(
  `covers: ${files.length} 张, ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`,
);
