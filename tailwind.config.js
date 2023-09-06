module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      width: {
        "500px": "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
