/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "index.html"
  ],
  theme: {
    fontFamily: {
      'body': ['Poppins']
    },
    extend: {
      colors: {
        'primary-text': "#05668d",
        'secondary-text': "#028090",
        'third-text': "#00a896",
        'fourth-text': "#02c39a",
        'fifth-text': "#f0f3bd"
      }
    },
  },
  plugins: [],
}