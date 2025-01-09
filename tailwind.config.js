/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#2E2482',
        'secondary': '#9999d0',
        'accent': '#9B92E7',
        'background': '#1a1a1a',
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
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s cubic-bezier(0.68,-0.55,0.27,1.55)', 
        rebound: 'rebound 1s cubic-bezier(0.68,-0.55,0.27,1.55);',
        opacityIn: 'opacityIn 0.7s ease',
        marquee: 'marquee 30s linear infinite',
      }

    },
  },
  plugins: [],
}

