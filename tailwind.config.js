/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'ur-navy': '#001E5F',
        'dandelion': '#FFD82B',
        'meliora': '#021BC3',
        'cobalt': '#003EFF',
        'azure': '#0066FD',
        'cornflower': '#66A2FF',
        'sky': '#B7D3FF',
        'gold': '#FFC200',
        'lemon': '#FFE95F',
        'butter': '#FFF3B1',
        'charcoal': '#707070',
        'stone': '#BEBEBE',
        'silver': '#E8E8E8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}