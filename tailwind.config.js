/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'mosque': {
          '50': '#e8fffd',
          '100': '#c4fff9',
          '200': '#91fff3',
          '300': '#45ffeb',
          '400': '#00ffed',
          '500': '#00f3ff',
          '600': '#00c0d9',
          '700': '#0098ae',
          '800': '#00798b',
          '900': '#045f71',
        },
      },
    },
  },
  plugins: [],
}
