/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'mm': '868px',
        // => @media (min-width: 868px) { ... }
      },
    },
  },
  plugins: [],
}

