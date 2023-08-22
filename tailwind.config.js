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
        headerFontPhone:'3.5rem'
      },
      colors:{
        baseColor:"#192F43",
        secondColor:"#8AC5FC"
      }
    },
  },
  plugins: [],
}