/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      avenir: ''
    },
    extend: {
      colors: {
        ...colors,
        blue: {
          DEFAULT: "#1d9bf0"
        },
        grey: {
          DEFAULT: "#f9f9f9",
          100: "#d3d3d3"
        },
        blue: {
          DEFAULT: "#1e90ff",
        },
        dark: {
          DEFAULT: "#555555",
        },
        black: {
          DEFAULT: "#212529",
          jet: "#343434"
        }
      }
    },
  },
  plugins: [],
}