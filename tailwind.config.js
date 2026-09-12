/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ner-earth': '#8B5A2B', 
        'ner-green': '#4A7c59', 
        'ner-soft': '#F4F1EA',  
        'ner-accent': '#D97736' 
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
