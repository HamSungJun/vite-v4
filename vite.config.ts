import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import legacy from "@vitejs/plugin-legacy";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), legacy()],
  resolve: {
    alias: {
      "@app": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
