/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      vollkorn: ["Lalezar", "cursive"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
