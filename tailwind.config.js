/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#000000',
        primary: '#003A8A',
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
      }
    },
  },
  plugins: [],
}