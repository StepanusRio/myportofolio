/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        main: '#fffffe',
        primary:'#6246ea',
        secondary:'#64656d',
        tertiary: '#e45858',
        stroke:'#2b2c34'
      },
      screens:{
        '2xl':'1320px',
      }
    },
    fontFamily:{
      signature: ["Dancing Script"],
    },
  },
  plugins: [],
}
