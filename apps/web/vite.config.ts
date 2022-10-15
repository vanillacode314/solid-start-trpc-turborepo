import solid from "solid-start/vite";
import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

const packageJson = fs.readFileSync("./package.json");
const version = JSON.parse(packageJson.toString()).version;

export default defineConfig({
  define: {
    __version__: JSON.stringify(version),
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@ui": path.resolve(__dirname, "../../packages/ui"),
      "@api": path.resolve(__dirname, "../../apps/api/src"),
    },
  },
  plugins: [solid({ ssr: false })],
});
