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
      // Icons (favicon, apple-touch, 192/512, maskable) are generated from
      // public/Profile.jpg by pwa-assets.config.ts and injected automatically.
      pwaAssets: { config: true },
      manifest: {
        name: "Kweyu Delron  - Portfolio",
        short_name: "KD Portfolio",
        description:
          "Software Engineer, Network Engineer & IT Solutions specialist building secure, scalable, AI-powered systems.",
        theme_color: "#0a0b0d",
        background_color: "#0a0b0d",
        display: "standalone",
        start_url: "/",
        scope: "/",
      },
      workbox: {
        // Precache the app shell + generated icons. The large certificate/profile
        // images (8–9 MB) stay on the network and are served at runtime instead.
        globPatterns: ["**/*.{js,css,html,svg,png,ico,woff,woff2}"],
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
