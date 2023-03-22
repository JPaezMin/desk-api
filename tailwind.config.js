module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      blue: {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
      },
      black: "#000000",
      green: "#8bc34a",
      gray: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
      mineralGreen: {
        50: "#90a4ae",
        100: "#077e8c",
        200: "#C8D8DE",
        900: "#455a64",
      },
      red: {
        100: "#ffcdd2",
        500: "#f44336",
        700: "#d32f2f",
      },
      yellow: "#f4b400",
      white: "rgba(255,255,255,0.82)",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1920px",
    },
    fontFamily: {
      roboto: "'Roboto', sans-serif",
    },
  },
  plugins: [],
};