const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.red,
      neutral: colors.blueGray,
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
