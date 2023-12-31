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
      },
      width: {
        '1/10': '10%',
        '1.5/10': '15%',
        '1.7/10': '17%',
        '1.8/10': '18%',
        '1.9/10':'19%',
        '2/10': '20%', 
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
      },
    },
  },
  plugins: [],
}