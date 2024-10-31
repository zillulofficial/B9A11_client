/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: "'Rancho', sans-serif",
        roboto: "'Roboto', sans-serif",
        dms: "'DM Serif Display', serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

