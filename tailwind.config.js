/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_dark_mode_1: "#0E1423", // Very dark
        bg_dark_mode_2: "#141A2B",
        baby_yellow: "#FFD980",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        babylonica: ["Babylonica", "cursive"],
        philosopher: ["Philosopher", "sans-serif"],
      },
    },
  },
  plugins: [],
};
