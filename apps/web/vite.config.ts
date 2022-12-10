import solid from "solid-start/vite";
import { defineConfig } from "vite";
import path from "path";
import packageJson from "./package.json" assert { type: "json" };

export default defineConfig({
  define: {
    __version__: JSON.stringify(packageJson.version),
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
