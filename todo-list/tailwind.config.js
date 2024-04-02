/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'mybg':'#67C6E3',
        'textc':'#704264',
        'buttonc':'#378CE7'
      },
    },
  },
  plugins: [],
}

