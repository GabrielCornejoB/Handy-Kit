import { StyleSheet } from "react-native";
import { COLORS, BORDERS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
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
