/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dohmi: {
          orange: '#ff5705',
          yellow: '#fbaa18',
          copper: '#802a00',
          cream: '#fff3e5',
          pruebaColor: "#08ff00",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['bubblebody-neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};