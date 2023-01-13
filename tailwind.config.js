/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
       "myBlue": "#18345E",
       "myGray": "#939393",
       "white": "#fff",
       "lightBlue": "#22C1DC",
       "inputGray": "#F4F2F2",
       "btnYellow": "#F0AB20",
       "listColor": "#22C1DC"
    },
    letterSpacing: {
       wide: '2.5px',
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
