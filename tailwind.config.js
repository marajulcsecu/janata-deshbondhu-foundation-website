/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbf3',
          100: '#d6f5e3',
          200: '#b0eacb',
          300: '#7cd8ab',
          400: '#47be86',
          500: '#24a36a',
          600: '#168354',
          700: '#0f6943',
          800: '#0b462c',
          900: '#083822',
          950: '#041f13',
        },
        gold: {
          50: '#fdfaf0',
          100: '#f9f1d2',
          200: '#f2e0a0',
          300: '#e9c868',
          400: '#dfb23e',
          500: '#c59b27',
          600: '#a87d1d',
          700: '#875f19',
          800: '#704d1b',
          900: '#5f401b',
        },
        ivory: {
          50: '#FCFBF7',
          100: '#F7F4EB',
          200: '#EFE9D8',
        }
      },
      fontFamily: {
        bengali: ['"Hind Siliguri"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', '"Hind Siliguri"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
