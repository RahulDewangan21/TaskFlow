// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // The 'content' array tells Tailwind where to look for class names
  // So it can generate the necessary CSS.
  content: [
    "./index.html",         // Your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // All JS, TS, JSX, TSX files in the src folder and its subfolders
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [], // You can add official or custom plugins here if needed
}