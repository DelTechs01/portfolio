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
      includeAssets: ["vite.svg"],
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
        // Precache the app shell only. The large certificate/profile images
        // (8–9 MB) stay on the network and are served at runtime instead.
        globPatterns: ["**/*.{js,css,html,svg,woff,woff2}"],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images",
              expiration: { maxEntries: 40, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
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
