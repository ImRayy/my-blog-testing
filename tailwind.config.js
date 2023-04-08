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
        primary: "#18181b",
        secondary: "#1f1f22",
        accent: "#1f1f22",
        hover: "#35353b",
        onedark: "#272c34",
        moonlight: "#212127",
      },
      width: {
        260: "65rem",
        232: "55rem",
        120: "30rem",
      },
      fontSize: {
        md: "17px",
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        ramettoOne: "'Rammetto One', cursive",
        josefinSans: "Josefin Sans, sans-serif",
        atkinsonHyperlegible: "Atkinson Hyperlegible, sans-serif",
      },
      screens: {
        xs: "400px",
        xmd: "880px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
