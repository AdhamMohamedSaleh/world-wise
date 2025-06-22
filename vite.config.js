import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false, // ❌ Don't stop the dev server on errors
      failOnWarning: false, // ❌ Don't stop the dev server on warnings
    }),
  ],
});
