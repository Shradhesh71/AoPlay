/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'glitch-1': 'glitch-1 750ms infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 750ms infinite linear alternate-reverse',
      },
    },
  },
  plugins: [],
};