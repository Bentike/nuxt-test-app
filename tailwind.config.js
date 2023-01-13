/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
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
    extend: {},
  },
  plugins: [],
}
