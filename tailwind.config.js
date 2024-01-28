/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        animatePulseCustom: "pulse 2s ease-in-out 1",
      },
      colors: {
        primary: "#9eaddb",
        secondary: "#656bab",
        blueLight: "#d3d8ea",
        grayLight: "#7d7d7d",
      },
      fontSize: {
        clamp: "clamp(1rem, 5vw, 3rem)",
      },
    },
  },
  plugins: [],
};
