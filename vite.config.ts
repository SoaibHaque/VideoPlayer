import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/lib/components"),
      "@utils": path.resolve(__dirname, "./src/lib/utils"),
      "@context": path.resolve(__dirname, "./src/lib/context"),
      "@providers": path.resolve(__dirname, "./src/lib/providers"),
      "@hooks": path.resolve(__dirname, "./src/lib/hooks"),
      "@store": path.resolve(__dirname, "./src/lib/store"),
      "@public": path.resolve(__dirname, "./public"),
    },
  },
});
