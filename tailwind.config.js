module.exports = {
  mode: "jit",
  plugins: [],
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false,
  variants: {},
  theme: {
    extend: {
      colors: {
        black: "#0f0604",
        yellow: "#f1f462",
      },
      backgroundImage: {
        main: "url('../img/bg.jpg')",
      },
      width: {
        104: "28rem",
        "1/2": "32rem",
        "1/4": "24rem",
        "1/6": "16rem",
      },
      height: {
        "1/2": "32rem",
        "1/4": "24rem",
        "1/6": "16rem",
      },
      fontFamily: {
        display: ["Tulpen One", "sans-serif"],
        body: ["Big Shoulders Display", "sans-serif"],
      },
      textColor: (theme) => ({
        yellow: theme("colors.yellow"),
      }),
      stroke: (theme) => ({
        yellow: theme("colors.yellow"),
      }),
      fill: (theme) => ({
        yellow: theme("colors.yellow"),
      }),
    },
  },
};
