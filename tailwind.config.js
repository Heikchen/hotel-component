/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: '100%',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        primary: '#89375F',
        secondary: '#159895',
        black: '#333333',
        gray: {
          dark: '#757575',
          light: '#E0E0E0',
        },
      },
    },
  },
  plugins: [],
};
