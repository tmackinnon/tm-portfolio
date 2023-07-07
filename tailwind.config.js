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
        'primary': '#fffbf5',
        'secondary': '#1b5938',
        'teal': '#0e8f96',
        'yellow': '#dee94c'
      }
    },
  },
  plugins: [],
};
