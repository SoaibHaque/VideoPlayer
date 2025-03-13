import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./utils"),
      "@context": path.resolve(__dirname, "./context"),
      "@providers": path.resolve(__dirname, "./providers"),
      "@hooks": path.resolve(__dirname, "./hooks"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
});
