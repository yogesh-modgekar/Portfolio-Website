

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A192F',
        'secondary': '#F97316',
        'tertiory': '#54D6BB'
      }
    },
    screens: {

      'lg': { 'max': '2023px' },
      // => @media (max-width: 1023px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

