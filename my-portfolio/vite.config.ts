import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["Profile.jpg", "vite.svg"],
      manifest: {
        name: "Kweyu Delron Muyale — Portfolio",
        short_name: "KD Portfolio",
        description:
          "Software Engineer, Network Engineer & IT Solutions specialist building secure, scalable, AI-powered systems.",
        theme_color: "#4f46e5",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          { src: "/Profile.jpg", sizes: "192x192", type: "image/jpeg", purpose: "any" },
          { src: "/Profile.jpg", sizes: "512x512", type: "image/jpeg", purpose: "any maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,woff2}"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split heavy vendor libs into their own chunks for better caching
        // and faster initial load (keeps the main bundle lean).
        manualChunks: {
          react: ["react", "react-dom", "wouter"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
