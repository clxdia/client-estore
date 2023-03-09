/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      work: ["Alexandria", "sans-serif"],
      cursive: ["Nanum Myeongjo", "sans-serif"],
      paragraph: ["IBM Plex Serif", "sans-serif"],
      crimson: ["Crimson Text", "sans-serif"],
    },
    screens: {
      lg: "1100px",
      md: "1000px",
      sm: "700px",
    },
    colors: {
      background: "#f9f4ef",
      headline: "#3fa3bb",
      white: "#ffffff",
      paragraph: "#716040",
      button: "#2f4858",
      buttontext: "#fffffe",
      secondary: "#cfcfc6",
      redish: "#f25042",
      footer: "#e4e4e4",
      black: "#000000",
    },
  },
  plugins: [],
};
