// News-image entry for 21 November 2026 (Node 22, standard library only).
// The entry is the entry.png file beside this program: it is copied, byte
// for byte, to /output/entry.png. The grader runs this program twice and
// both runs must write identical bytes, so this program does no drawing and
// no stamping of any kind — it only copies the one fixed image.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SOURCE = new URL('./entry.png', import.meta.url);
const TARGET = join(OUTPUT_DIR, 'entry.png');

if (!existsSync(SOURCE)) {
  throw new Error(`entry.png not found beside main.ts: ${SOURCE.pathname}`);
}

copyFileSync(SOURCE, TARGET);

const bytes = statSync(TARGET).size;
console.log(`entry.png copied to ${TARGET} (${bytes} bytes)`);
