/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      textColor: {
        'green_ternary': "#115d33"
      },
      borderColor: {
        'green_border_ternary': '#1cbf03'
      }
    },
  },
  plugins: [],
}

