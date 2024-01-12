/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#E2E2E2',
      'dark': '#151515',
      'yellow': '#E2E200',
      'grey-border': '#DFDDDA',
      'grey-text': '#A1A1A1',
      'blue-moto': '#2582CA',
      'yellow-moto': '#EBF227',
      'red-moto': '#F94711'

    },
    extend: {
     
    },
    fontFamily: {
      'exo': ['"Exo 2"', 'sans-serif'],
    }
  },
  plugins: [],
}

