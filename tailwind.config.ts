/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F5F5',
        brandOrange: '#663CBA',
        mainText: '#2D2D2D',
        muted: '#828282',
        brandBorder: '#E2E2E2',
        cardBg: '#F3F3F3',
        brandLight: '#92693D',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        handwriting: ['"Oooh Baby"', 'cursive'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        nudgeLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-4px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.65s ease both',
        fadeUpDelayed: 'fadeUp 0.65s ease 0.12s both',
        nudgeLeft: 'nudgeLeft 1.2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}