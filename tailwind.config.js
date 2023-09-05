/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // <= add this
    "./src/**/*.{js,ts,jsx,tsx}", // <= no spaces
  ],
  theme: {
    extend: {
      fontSize:{
        headerFontWeb:'5rem',
        headerFontPhone:'3.5rem',
        baseFont:'1.5rem'
      },
      colors:{
        baseColor:"#192F43",
        secondColor:"#8AC5FC",
        theGreyish: "#D9D9D9"
      },
      keyframes:{
        moveLabel:{
          '0%': {opacity: 0,transform: 'translateY(3rem)'},
          '100%': {opacity:1, transform: 'translate(0)'}
        }
      },
      animation:{
        moveLabel:'moveLabel 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}