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
        primary: '#000000',
        secondary: '#ffffff'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
