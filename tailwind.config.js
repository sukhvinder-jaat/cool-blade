module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        small: "430px",
      },
      backgroundImage: {
        join: "url('../src/assets/background/join.webp')",
        invest: "url('../src/assets/want_to_invest/girl.png')",
        investSmall: "url('../src/assets/background/invest_small.png')",
        messageLeft: "url('../src/assets/map/message_left.png')",
        messageRight: "url('../src/assets/map/message_right.png')",
        engage: "url('../src/assets/map/engage.png')",
        affordable: "url('../src/assets/map/affordable.png')",
        forestry: "url('../src/assets/map/forestry.png')",
        orc: "url('../src/assets/map/orc.png')",
        friendly: "url('../src/assets/map/friendly.png')",
        bichar: "url('../src/assets/map/bichar.png')",
        crop: "url('../src/assets/map/crop.png')",
        silicon: "url('../src/assets/map/silicon.png')",
        technology: "url('../src/assets/map/technology.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xsm: "13px",
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
        coolGrey: "#96A3A7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
