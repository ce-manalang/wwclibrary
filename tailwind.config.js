/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,njk}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['proxima-nova'],
      },
    },
  },
  plugins: [],
}
