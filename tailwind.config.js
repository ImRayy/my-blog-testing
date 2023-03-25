/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e1e1e",
        secondary: "#242424",
        accent: "#2b2a2a",
        hover: "#404040",
        onedark: "#272c34",
        moonlight: "#212127",
      },
      width: {
        260: "65rem",
        232: "55rem",
        120: "30rem",
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        ramettoOne: "'Rammetto One', cursive",
        josefinSans: "Josefin Sans, sans-serif",
      },
      screens: {
        xs: "400px",
        xmd: "880px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
