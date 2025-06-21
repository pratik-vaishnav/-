import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: false,
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Content-type": "application/javascript",
    },
    fs: {
      strict: false,
    },
    middlewareMode: false,
    cors: true,
  },
  assetsInclude: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    esbuildOptions: {
      target: "es2020",
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  base: '/',
});
