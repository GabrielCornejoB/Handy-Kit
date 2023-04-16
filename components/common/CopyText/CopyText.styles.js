import { StyleSheet } from "react-native";
import { COLORS, BORDERS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  copyButton: {
    backgroundColor: COLORS.lightGray,
    opacity: 0.3,
    borderRadius: BORDERS.small,
    paddingVertical: SIZES.small,
    alignItems: "center",
  },
  headingText: {
    fontWeight: "bold",
  },
});

export default styles;
