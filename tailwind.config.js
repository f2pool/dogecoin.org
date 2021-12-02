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
        "video-xs": "20rem",
        "video-sm": "35rem",
        "video-md": "40rem",
        "video-lg": "53.3125rem",
        "video-xl": "62.5rem",
        "video-2xl": "80rem",
      },
      height: {
        "1/2": "32rem",
        "1/4": "24rem",
        "1/6": "16rem",
        "video-xs": "11.25rem",
        "video-sm": "19.5rem",
        "video-md": "22.5rem",
        "video-lg": "30rem",
        "video-xl": "37.5rem",
        "video-2xl": "45rem",
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
