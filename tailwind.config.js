/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'instrument': ['"Instrument Sans"', 'sans-serif'],
      },
      keyframes: {
        slideUp: {
          '0%': { bottom: '-250px' },
          '100%': { bottom: '2rem' },
        },
        slideDown: {
          '0%': { bottom: '2rem' },
          '100%': { bottom: '-250px' },
        },
      },
      animation: {
        slideUp: 'slideUp 1s forwards',
        slideDown: 'slideDown 2s forwards',
      },
      height: {
        'hero-calc': 'calc(100vh - 3.25rem)',
      },
      screens: {
        'nsp': '336px',
        'xs': '416px',
        '2.5xl': '1968px',
        '3xl': '2168px',
        '4xl': '2468px',
        'hero': '3168px',
      }
    },
  },
  plugins: [],
}