module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          500: '#8257E5',
          200: '#996DFF',
        }
      },
  },
},
  plugins: [require('@tailwindcss/forms'),
  require('tailwind-scrollbar'),],
}

