const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#f7f7f7',
        gray: {
          900: '#202225',
          800: '#2F3136',
          700: '#36393F',
          600: '#4F545C',
          400: 'D4D7DC',
          300: '#E3E5E8',
          200: '#E9EBEF',
          100: '#F2F3F5',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
