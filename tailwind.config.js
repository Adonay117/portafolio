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
      },
      keyframes: {
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40%) ',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },

        },
        rebound:{
          '0%': {
            opacity: '0',
            transform: 'translateY(-20%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
      

        },

        opacityIn: {

          '0%': {
           opacity: '0',
           transform: 'scale(.7)'
          },
          '100%': {
            opacity: '0',
            transform: 'scale(1)'

          }
        }
      },
      animation: {
        slideIn: 'slideIn 0.6s cubic-bezier(0.68,-0.55,0.27,1.55)', 
        rebound: 'rebound 0.6s cubic-bezier(0.68,-0.55,0.27,1.55);',
        opacityIn: 'opacityIn 0.7s ease',
      }

    },
  },
  plugins: [],
}

