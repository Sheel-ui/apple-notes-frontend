/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#4E3D6B',
          100: '#9792a6', //list nav
          200: '#36343c',
          300: '#352352', //folder
          500: '#281c2c', //lsit previewNav
          700: '#1e1e1e', // preview
        },
      },
    },
  },
  plugins: [],
}

