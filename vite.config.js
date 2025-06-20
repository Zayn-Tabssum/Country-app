import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Required for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: "/Country-app/", // <- your repo name here
});
