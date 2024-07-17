/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#140f07',
        secondary:'#0e254c',
        third:'#3560b8',
        fourth:'#69a8fe',
        fifth:'#a8fbfa'

      }
    },
  },
  plugins: [],
}

