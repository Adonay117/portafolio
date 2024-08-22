/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#7cb155',
        'secondary': '#9999d0',
        'accent': '#ae7bc2'
      }

    },
  },
  plugins: [],
}

