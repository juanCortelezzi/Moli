module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    maxHeight: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    minHeight: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-focus", "group-hover"],
    font: ["responsive", "hover", "focus", "group-focus", "group-hover"],
    width: ["responsive", "hover", "focus", "group-focus", "group-hover"],
    height: ["responsive", "hover", "focus", "group-focus", "group-hover"],
    maxWidth: ["responsive", "hover", "focus", "group-focus", "group-hover"],
    scale: ["responsive", "hover", "focus", "group-focus", "group-hover"],
  },
};
