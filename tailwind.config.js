/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
   content: ['./src/**/*.html'],
   theme: {
      extend: {
         boxShadow: {
            sm: '0px 0px 7px 3px rgba(0, 0, 0, 0.0001)',
            xl: '0px 5px 10px 2px rgba(76, 123, 243, 0.230414)',
         },
      },

      container: {
         center: true,
         screens: {
            sm: '40rem',
         },
         padding: {
            DEFAULT: '1.75rem',
            sm: 0,
         },
      },
      colors: {
         blue: {
            DEFAULT: 'hsl(223, 87%, 63%)',
            pale: 'hsl(223, 100%, 88%)',
            dark: 'hsl(209, 33%, 12%)',
            tp: 'hsl(223, 87%, 63%, 15%)',
         },
         red: 'hsl(354, 100%, 66%)',
         gray: 'hsl(0, 0%, 59%)',
         white: 'hsla(0, 0%, 100%, 1)',
      },
   },
   plugins: [],
}
