// news-image-20261125 entry — Node 22, standard library only.
//
// The repository holds entry.png, a 1024x1024 PNG front page summing up the
// world news of Wednesday 25 November 2026. This program copies it to the
// grader's output directory (/output, or MAKEFUN_OUTPUT_DIR when set) after
// checking it is really the image it claims to be, so a bad file fails
// loudly instead of being submitted silently. Copying fixed bytes means
// both grader runs produce identical output.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const IMAGE_NAME = 'entry.png';
const MAX_BYTES = 1048576;
const EXPECTED_SIZE = 1024;

const here = new URL(`./${IMAGE_NAME}`, import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, IMAGE_NAME);

const png = readFileSync(here);

// A PNG starts with its 8-byte signature; width and height follow as
// big-endian uint32 values at offsets 16 and 20 of the IHDR chunk.
const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const looksLikePng = png.length >= 33 && png.subarray(0, 8).equals(signature);
if (!looksLikePng) {
  console.error(`${IMAGE_NAME} does not start with a PNG signature`);
  process.exit(1);
}
if (png.length > MAX_BYTES) {
  console.error(`${IMAGE_NAME} is ${png.length} bytes, over the 1 MiB cap`);
  process.exit(1);
}
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width !== EXPECTED_SIZE || height !== EXPECTED_SIZE) {
  console.error(`${IMAGE_NAME} is ${width}x${height}, expected 1024x1024`);
  process.exit(1);
}
// A whole PNG ends with its 12-byte IEND chunk: a zero length, the
// letters IEND, and the fixed CRC 0xAE426082. A truncated file fails here
// instead of reaching the judge as a broken image.
const iend = Buffer.from([
  0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
]);
if (!png.subarray(-12).equals(iend)) {
  console.error(`${IMAGE_NAME} has no IEND chunk; the file looks truncated`);
  process.exit(1);
}

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(here, dest);
console.log(`wrote ${dest} (${png.length} bytes, ${width}x${height})`);
