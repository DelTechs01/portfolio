/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-900": "#111827",
        "gray-300": "#D1D5DB",
        "gray-400": "#9CA3AF",
        "indigo-950": "#1E1B4B",
        "cyan-400": "#22D3EE",
        "cyan-500": "#06B6D4",
        "cyan-900": "#164E63",
      },
    },
  },
  plugins: [],
};