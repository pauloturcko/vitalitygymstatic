/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'main-color': '#E40046',
      'bg-color01': '#242424',
      'bg-color02': '#353535',
      'text-color': '#F2F2F2'
    },
    fontFamily: {
        'main-font': ['lowvetica', 'sans-serif'],
        'secondary-font': ['Barlow', 'sans-serif'],
        'text-font': ['Lato', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

