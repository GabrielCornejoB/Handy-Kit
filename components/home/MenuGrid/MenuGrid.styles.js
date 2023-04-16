import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants/theme";
import images from "../../../constants/images";

const styles = StyleSheet.create({
  gridContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.large,
    paddingBottom: SIZES.xsmall,
  },
});

export default styles;
