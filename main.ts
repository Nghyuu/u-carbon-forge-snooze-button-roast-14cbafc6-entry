import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// One line roasting an alarm clock that rings at 6 AM on a Saturday.
const line =
  "My alarm clock rang at 6 AM on a Saturday, chirping like a rooster that just got promoted and forgot weekends exist.";

const entryPath = join(outDir, "entry.txt");
mkdirSync(dirname(entryPath), { recursive: true });
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
