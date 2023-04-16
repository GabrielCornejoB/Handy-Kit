import { StyleSheet } from "react-native";
import { COLORS, SIZES, BORDERS, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    width: 170,
    height: 180,
    borderRadius: BORDERS.large,
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.xlarge,
    ...SHADOWS.small,
  },
  icon: (dimensions) => ({
    width: dimensions,
    height: dimensions,
  }),
  heading: {
    fontWeight: "bold",
    fontSize: SIZES.medium,
    textAlign: "center",
  },
});

export default styles;
