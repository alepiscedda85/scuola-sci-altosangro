/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08243b', glacier: '#eaf5f7', snow: '#f8faf9', sun: '#f1cf28', pine: '#145c57',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['Manrope', 'Inter', 'sans-serif'] },
      boxShadow: { lift: '0 24px 80px rgba(8, 36, 59, .14)' },
    },
  },
  plugins: [],
}
