/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-morado': {
        '50': '#eff2fe',
        '100': '#e1e9fe',
        '200': '#c9d4fc',
        '300': '#a8b8f9',
        '400': '#8593f4',
        '500': '#686eec',
        '600': '#504cdf',
        '700': '#453dc5',
        '800': '#38349f',
        '900': '#32317e',
        '950': '#252359',
      } ,
      }

    },
  },
  plugins: [],
};
