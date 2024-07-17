
/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: '#f9a8d4',
        secondary: '#f472b6',
        dark: '##ec4899',
        light: '##fce7f3',
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