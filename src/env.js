import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const indexPath = path.resolve(__dirname, "../dist/index.d.ts");

/**
 * 向dist中的index.d.ts追加配置
 */
const main = () => {
  const template = `import "./vite-env";`;
  fs.appendFile(indexPath, template, "utf-8");
};
main();
