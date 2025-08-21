/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        fluid: "clamp(1rem, 2vw, 2rem)",
      },
      colors: {
        bgDarkMode1: "#0E1423", // Very dark
        bgDarkMode2: "#141A2B",
        bgLightMode1: "#FFFFFF", // Very light
        bgLightMode2: "#F2F2F2",
        babyYellow: "#FFD980",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        babylonica: ["Babylonica", "cursive"],
        philosopher: ["Philosopher", "sans-serif"],
      },
      animation: {
        scroll: "scroll 0.10s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
