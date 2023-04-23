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
  subtitle: {
    color: COLORS.lightGray,
    fontWeight: 500,
  },
});

export default styles;
