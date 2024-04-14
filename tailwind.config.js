/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0bd1d1",
        secondary: "#4D4D4D",
        third: "#e2e8f0",
        fourth: "#64748b",
        five: "#18191f",
        six: "#94a3b8",
        seven: "#28304c",
        white: "#ffffff",
        gray: "#253535",
      },
      screens: {
        xsm: "0px",
        // => @media (min-width: 0px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
