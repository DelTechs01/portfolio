import { defineConfig } from '@vite-pwa/assets-generator/config';

// Generates installable PWA icons (favicon, apple-touch, 192/512, maskable)
// from your profile photo. `fit: 'cover'` crops to a centered square so the
// photo fills the icon rather than being letterboxed.
export default defineConfig({
  headLinkOptions: { preset: '2023' },
  preset: {
    transparent: {
      sizes: [64, 192, 512],
      favicons: [[48, 'favicon.ico']],
      resizeOptions: { fit: 'cover' },
    },
    maskable: {
      sizes: [512],
      resizeOptions: { fit: 'cover' },
    },
    apple: {
      sizes: [180],
      resizeOptions: { fit: 'cover' },
    },
  },
  images: ['public/Profile.jpg'],
});
