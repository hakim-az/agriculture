/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#274C5B',
        'main-yellow': '#EFD372',
        'green': '#7EB693',
      },
    },
  },
  plugins: [],
}

