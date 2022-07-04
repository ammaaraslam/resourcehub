/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["SF UI Display", "sans-serif"],
        sansSerif: ["SF UI Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
