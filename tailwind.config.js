/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      display: ['Archivo Black', 'sans-serif'],
      heading: ['Fira Sans Extra Condensed', 'sans-serif'],
      body: ['Hind Guntur', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '4xl': '5rem',
      },
      letterSpacing: {
        tighter: '-.15em',
        tight: '-.15em',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
