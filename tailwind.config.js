/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontFamily: {
      display: ['Archivo Black', 'sans-serif'],
      heading: ['Fira Sans Extra Condensed', 'sans-serif'],
      overlock: ['Overlock', 'sans-serif'],
      body: ['Pridi', 'sans-serif'],
    },
    extend: {
      animation: {
        'navigation-bounce': 'navigation-bounce 1s ease-in both',
      },
      keyframes: {
        'navigation-bounce': {
          // TODO: Add animation
        },
      },
      fontSize: {
        '2xl': '1.5rem',
        '4xl': '4rem',
      },
      letterSpacing: {
        tighter: '-.15em',
        tight: '-.15em',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: theme('colors.gray.600'),
            p: {
              // fontSize: '34px', // key can be in camelCase...
              // 'text-align': 'left', // or as it is in css (but in quotes).
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
