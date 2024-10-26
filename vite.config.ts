import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@validations": path.resolve(__dirname, "./src/validations"),
    },
  },
  plugins: [react()],
});
