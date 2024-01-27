/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#bac9e7",
        secondary: "#656bab",
        blueLight: "#d3d8ea",
        grayLight: "#7d7d7d",
      },
    },
  },
  plugins: [],
};
