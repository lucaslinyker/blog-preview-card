/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '1': '5px 5px 0px 0px #000000',
        '2': '5px 5px 0px 0px rgba(255, 255, 255, 0.7)'
      },
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif']
      },
    },
  },
  plugins: [],
}

