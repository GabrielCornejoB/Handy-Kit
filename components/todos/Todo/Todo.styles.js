import { StyleSheet } from "react-native";
import { COLORS, SIZES, BORDERS, SHADOWS } from "../../../constants/theme";

const styles = StyleSheet.create({
  done: {
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    borderRadius: BORDERS.large,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    borderColor: COLORS.green,
    borderBottomWidth: 4,
    ...SHADOWS.medium,
  },
  pending: {
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    borderRadius: BORDERS.large,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    borderColor: COLORS.red,
    borderBottomWidth: 4,
    ...SHADOWS.medium,
  },
});

export default styles;
