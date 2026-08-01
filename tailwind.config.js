/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#111111',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5D061',
          dark: '#AA8825'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A3A3A3'
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
