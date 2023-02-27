import { defineConfig } from "vite";
import solid from "solid-start/vite";
import path from "path";
import pkgJson from "./package.json";

export default defineConfig({
  define: {
    __version__: JSON.stringify(pkgJson.version),
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
