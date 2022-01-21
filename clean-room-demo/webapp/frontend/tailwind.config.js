module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#0759A7',
        'secondary': '#124370',
        'darkblue': '#00365C',
        'lightblue': '#4BBBEB',
        'lightpink': '#FCE7F3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
