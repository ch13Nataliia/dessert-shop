/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#84cc16',
        secondary: '#bef264',
        dark: '#1a2e05',
        light: '#f7fee7',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: '2rem',
          lg: '3rem',
        }
      }
    },
  },
  plugins: [],
}