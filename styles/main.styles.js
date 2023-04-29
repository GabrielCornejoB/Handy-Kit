import { StyleSheet } from "react-native";
import { COLORS, BORDERS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  h1: {
    fontSize: SIZES.xlarge,
    fontWeight: "bold",
  },
  h2: {
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
  subtitle: {
    color: COLORS.lightGray,
    fontWeight: 500,
  },
  borderBottom: {
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: SIZES.medium,
  },
  marginBottom: {
    marginBottom: SIZES.medium,
  },
});

export default styles;
