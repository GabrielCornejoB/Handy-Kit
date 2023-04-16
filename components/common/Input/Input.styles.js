import { StyleSheet } from "react-native";
import { COLORS, BORDERS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.xsmall,
    fontSize: SIZES.large,
    borderRadius: BORDERS.medium,
  },
});

export default styles;
