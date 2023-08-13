/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card_background': "url('./src/assets/logo.jpg')",
        'hackathon': "url('./src/assets/hackathon.jpg')",
        'workshop': "url('./src/assets/workshop.jpg')",
        'build': "url('./src/assets/build.jpg')",
      }
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}