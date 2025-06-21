module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // or your actual file path
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-bottom': 'inset 0 -4px 6px rgba(0, 0, 0, 0.1)',
      },
       backgroundImage: {
        'hero-pattern': "url(./src/assets/images/bannarImg.jpg)",
      }
       
    },
  },
  plugins: [],
}