/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'turbo': {
          DEFAULT: '#E3DC02',
          50: '#FEFB9E',
          100: '#FEFA8A',
          200: '#FEF962',
          300: '#FDF739',
          400: '#FDF611',
          500: '#E3DC02',
          600: '#ABA602',
          700: '#747001',
          800: '#3C3A01',
          900: '#050400'
        },
      },
    },
  },
  plugins: [],
}
