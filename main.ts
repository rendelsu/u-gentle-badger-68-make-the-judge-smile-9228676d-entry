import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The cat that hisses at everyone chose my lap this morning, purred once, and fell asleep like rent was paid.";

if (line.length < 1 || line.length > 200) {
  throw new Error("entry line must be 1 to 200 characters, got " + line.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
