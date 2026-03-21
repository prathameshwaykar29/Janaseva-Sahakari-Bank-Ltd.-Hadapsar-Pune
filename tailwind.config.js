/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          'radial-gradient(circle at 20% 80%, #f47012 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 40%)',
      },
      fontFamily: {
        serifCustom: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

