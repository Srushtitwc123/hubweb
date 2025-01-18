/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backdropBlur:{
        xs: '1px'
      }
    },
  },
  animation: {
    flip: "flip 1s ease-in-out infinite",
  },
  keyframes: {
    flip: {
      "0%, 100%": { transform: "rotateY(0deg)" },
      "50%": { transform: "rotateY(180deg)" },
    },
  },
  
  plugins: [  ],
}
