/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      daisyui: {
        themes: ['light', 'dark']
      },
      backgroundColor: {
        darkblue: '#101720',
        lightblue: '#E6F1F1',
        darknude: '#DEBCB0',
        lightnude: '#FFF4EF',
        darkbrown: '#BF573F',
        lightbrown: '#F7A440',
        lightgreen: '#5E8B7E',
        darkgreen: '#2C5F2D',
        lightgrey: '#E5E5E5',
        darkgrey: '#4D4D4D',
        lightpurple: '#A8A8E6',
        darkpurple: '#7A7A9E',
        lightred: '#E6A8A8',
        darkred: '#9E7A7A',
        lightyellow: '#E6E6A8',
        darkyellow: '#9E9E7A',
        lightorange: '#E6CBA8',
        darkorange: '#9E847A'
      },
      textColor: {
        darkblue: '#101720',
        darknude: '#DEBCB0',
        lightnude: '#FFF4EF',
        darkbrown: '#BF573F'
      }
    }
  },
  plugins: [require('daisyui')]
}
