/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
      mono: ["Space Mono", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#069748",
        dark: "#231F20",
        black: "#000000",
        white: "#FFFFFF",
        overlay: "rgba(0, 0, 0, 0.3)"
      },
      height: {
        "header-height": "75px",
        "footer-height": "75px"
      },
      padding: {
        "header-height": "75px",
        "footer-height": "75px"
      },
      margin: {
        "header-height": "75px",
        "footer-height": "75px"
      }
    }
  },
  plugins: []
};
