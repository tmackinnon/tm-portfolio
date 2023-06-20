/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-shrik)'],
        mont: ['var(--font-mont)'],
      },
      colors: {
        'primary': '#134f26',
        'secondary': '#fdf1e3'
      }
    },
  },
  plugins: [],
};
