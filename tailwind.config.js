/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#05090f',
          900: '#0a1120',
          800: '#0f1a2e',
          700: '#162238',
        },
        gold: {
          300: '#e8d5a3',
          400: '#d4b96a',
          500: '#c9a55a',
          600: '#b8904a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
