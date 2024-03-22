module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        join: "url('../src/assets/background/join.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: "14px",
        md: "15px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "25px",
        "4xl": "36px",
      },
      colors: {
        hippyGreen: "#448438",
        treeGreen: "#7FB138",
        fireFly: "#0F2233",
        aquaSprint: "#F0F9F4",
        riverBed: "#3C4D5A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
