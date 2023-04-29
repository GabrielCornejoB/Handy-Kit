const COLORS = {
  background: "#E4E9F7",
  red: "#F21B25",
  green: "#008C00",
  white: "#ffffff",
  black: "#000000",
  gray: "#524B4A",
  lightGray: "#9B9B9B",
};

const SIZES = {
  xsmall: 8,
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 28,
  xxxlarge: 32,
};

const BORDERS = {
  small: 5,
  medium: 10,
  large: 15,
  round: 100,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, BORDERS, SHADOWS };
