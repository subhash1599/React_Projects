/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://plus.unsplash.com/premium_photo-1675329253568-447ff9cc04a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHNlY3VyaXR5fGVufDB8fDB8fHww')",
      },

    },
  },
  plugins: [],
}

