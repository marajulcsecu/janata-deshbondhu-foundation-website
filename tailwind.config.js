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
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        warm: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          800: '#292524',
          900: '#1c1917',
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
