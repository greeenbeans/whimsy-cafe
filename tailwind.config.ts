/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        lavender: '#E6E6FA',
        'soft-pink': '#F8E8E8',
        'sage-green': '#E8F5E8',
        'dark-lavender': '#B8A9D9',
        'muted-pink': '#E8C2C2',
        'forest-green': '#7A8B7A',
        charcoal: '#2C2C2C',
      },
    },
  },
  plugins: [],
};
