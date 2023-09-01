/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "600px" },
        tb: { max: "1300px", min: "600px" },
        tab: { max: "1200px" },
        web: { min: "1200px" },
      },
      animation: {},
      keyframes: {
        "spin-right": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
        "up-down": {
          "0%, 100%": {
            transform: "translateY(-15%)",
            // "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(15%)",
            // "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "roll-over": {
          "0%,15%": {
            transform: "translateY(0%)",
          },
          "17%,31%": {
            transform: "translateY(-16%)",
          },
          "33%,47%": {
            transform: "translateY(-32%)",
          },
          "49%,63%": {
            transform: "translateY(-48%)",
          },
          "65%,79%": {
            transform: "translateY(-66%)",
          },
          "81%,100%": {
            transform: "translateY(-82%)",
          },
        },
      },
    },
    borderColor: {
      primary: "#3772ff",
    },
    colors: {
      primary: "#3772ff",
      1: "#FFFFFF",
      2: "#C3C2D4",
      3: "#808191",
      4: "#A5ADCF",
      E5E6ED: "#E5E6ED",
      "5973fe": "#5973fe",
      A3E3FF: "#A3E3FF",
    },
    backgroundColor: {
      1: "#181920",
      primary: "#3772ff",
      white: "#FFFFFF",
    },
    fontSize: {
      f12: "12px",
      f13: "13px",
      f14: "14px",
      f16: "16px",
      f18: "18px",
      f20: "20px",
      f25: "25px",
      f48: "48px",
      f64: "64px",
    },
    spacing: {
      1: "2px",
      2: "4px",
      3: "8px",
      4: "12px",
      5: "16px",
      6: "24px",
      7: "32px",
      8: "48px",
    },
  },

  plugins: [],
};
