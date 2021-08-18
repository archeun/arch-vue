module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        archTeal: '#09bc8a',
        archTealDark: '#004346',
        archRed: '#d53d3d',
        archGray: '#dedbd8',
      },
      fontFamily: {
        base: ['"Roboto Slab"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
