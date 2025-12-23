/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'primary': '#4F46E5', // Indigo-600
          'secondary' : '#0F172A', // Slate-900
          'blackBG': '#F1F5F9', // Slate-100
          'Favorite': '#FF5841'
      },
 //     colors: {
 //       'primary': '#FFCE1A',
 //       'secondary' : "#0D0842",
 //       'blackBG': '#F3F3F3',
 //       'Favorite': '#FF5841'
 //     }, 
      fontFamily: {
        'primary' : ["Montserrat", "sans-serif"],
        'secondary' : ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

