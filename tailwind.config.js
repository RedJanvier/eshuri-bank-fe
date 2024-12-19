/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './pages/**/*.{html,js}',
      './public/**/*.{html,js}',
    './index.html'
  ],
  safelist: ['text-4xl'],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#031C30",
        "light-blue": "#667A8A"
      }
    },
  },
  plugins: [],
}
