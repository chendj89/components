/// <reference types="vitest" />
import { defineConfig } from "vite";
// vue
import vue from "@vitejs/plugin-vue";
// vite
import dts from "vite-plugin-dts";
// rollup
import Delete from "rollup-plugin-delete";
// node
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src/index.ts"),
      name: "chencc",
      fileName: (format) => `chencc.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        Delete({
          targets: ["dist/{env.d.ts}", "dist/*.{ico,txt,html}", "*.mjs"],
          hook: "generateBundle",
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    dts({
      outputDir: "dist",
      staticImport: true,
      insertTypesEntry: true,
    }),
  ],
  // vitest测试
  test: {
    environment: "happy-dom",
  },
});
