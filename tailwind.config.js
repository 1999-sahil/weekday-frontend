/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        candal: ["Candal", "sans-serif"],
        nova: ["Nova Flat", "system-ui"],
      },
    },
  },
  plugins: [],
}