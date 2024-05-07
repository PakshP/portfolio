const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      cursor:{
        'auto': 'url(./assets/cursors/pointer32.png), auto',
        'default': 'url(./assets/cursors/pointer32.png), default',
        'pointer': 'url(./assets/cursors/link32.png), pointer',
        'wait': 'url(./assets/cursors/work.ani), wait',
        'text': 'url(./assets/cursors/text32.png), text',
        'move': 'url(./assets/cursors/move32.png), move',
        'help': 'url(./assets/cursors/help32.png), help',
        'not-allowed': 'url(./assets/cursors/unavailable.ani), not-allowed',
        'progress': 'url(./assets/cursors/work.ani), progress',
        'crosshair': 'url(./assets/cursors/cross32.png), crosshair',
        'no-drop': 'url(./assets/cursors/unavailable.ani), no-drop',
        'all-scroll': 'url(./assets/cursors/move32.png), all-scroll',
        'ew-resize': 'url(./assets/cursors/horz32.png), ew-resize',
        'ns-resize': 'url(./assets/cursors/vert32.png), ns-resize',
        'nesw-resize': 'url(./assets/cursors/dgnr32.png), nesw-resize',
        'nwse-resize': 'url(./assets/cursors/dgnl32.png), nwse-resize',
      },
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
