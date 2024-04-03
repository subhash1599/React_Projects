/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors:{
    myLoginPage:'#8E7AB5',
    myButton:'#B784B7'
      },
      backgroundImage:{
        'background-pattern':"url('https://cdn.pixabay.com/photo/2018/01/30/03/49/cooking-3117871_1280.jpg')"
      }
    },
 
  },
  plugins: [],
}

