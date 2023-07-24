/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': '#FF3D3D',
        'secondary': '#3C6AFF',
        'grey': '#6F707A',
      }
    },
  },
  plugins: [],
}

