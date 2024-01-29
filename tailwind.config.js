/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#000000',
        primary: '#071A67',
        primaryDark: '#06365E',
        primaryLight: '#3478b0',
        tabColor: '#D5DEEF',
        lightBlue: '#E4E8F4',
        secondary: '#799DBB',
        secondaryLight: '#b3c7d7',
        success: '#45D88E',
        warning: '#ffd838',
        error: '#ff9248',
        orange: '#ED8921',
        orangeDark: '#D67C1E',
        dark: '#fe5533',
        darkGray: '#363636',
        blueGray: '#3478b0',
        gray: '#E4E8F4',
        lilac: '#A3ACFA',
        pink: '#F72585h'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(261deg, rgb(7, 26, 103), rgb(163, 163, 163))',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
        bounce200: 'bounce 1s infinite 0.2s',
        bounce400: 'bounce 1s infinite 0.4s',
      },
    },
  },
  plugins: [],
}