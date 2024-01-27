/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#929ec8",
        secondary: "#656bab",
        blueLight: "#d3d8ea",
        grayLight: "#9BA8BC",
      },
    },
  },
  plugins: [],
};
