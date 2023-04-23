import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  gridContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.medium,
    paddingBottom: SIZES.xsmall,
  },
});

export default styles;
