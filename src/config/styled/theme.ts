const theme = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 4, // rem
    mediaQuery: "only screen",
    container: {
      sm: 0, // rem
      md: 64, // rem
      lg: 111, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 111.3, // em
    },
  },
  font: {
    base: "'DM Sans', sans-serif",
    headings: "'DM Sans', sans-serif",
  },
  fontSize: {
    base: 21,
    lead: 18,
    h1: 120,
    h2: 38,
    h3: 22,
    h4: 18,
    h5: 16,
  },
  fontWeight: {
    base: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    primary: "#00665e",
    secondary: "#ffd203",
    background: "#f5f0ed",
    dark: "#222533",
    accent: "#232d91",
    odd: "#c3f1ff",
    gray: "#777B84",
    black: "#0F0F0F",
    white: "#ffffff",
    error: "#fb6d6c",
    success: "#3acabf",
    warning: "#ffe053",
    mint: "#98ede3",
  },
  transition: {
    base: "0.3s ease",
  },
}

export default theme
