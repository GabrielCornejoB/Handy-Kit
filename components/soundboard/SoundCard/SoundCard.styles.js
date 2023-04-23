import { StyleSheet } from "react-native";
import { COLORS, SIZES, BORDERS, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: BORDERS.round,
    width: 100,
    height: 100,
    ...SHADOWS.small,
  },
  emoji: {
    fontSize: SIZES.xxxlarge,
  },
});

export default styles;
