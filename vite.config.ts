import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
    {
      name: 'copy-index-html',
      closeBundle() {
        // Copy the index.html file to the dist directory
        const srcPath = path.resolve(import.meta.dirname, "client/index.html");
        const destPath = path.resolve(import.meta.dirname, "dist/index.html");

        // Read the source file
        let content = fs.readFileSync(srcPath, 'utf-8');

        // Replace the script and style paths
        content = content.replace(
          'src="/src/main.tsx"',
          'src="/assets/main-CvMqNlHH.js"'
        );

        // Write to the destination
        fs.writeFileSync(destPath, content);
        console.log('Copied and modified index.html to dist directory');
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
