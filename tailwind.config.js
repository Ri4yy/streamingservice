/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {},
    container: {
      padding: {
        DEFAULT: '20px',
        md: '40px',
        xl: '0px',
        center: true
      },
    }
  },
  plugins: [],
}