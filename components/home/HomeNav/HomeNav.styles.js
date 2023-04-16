import { StyleSheet } from "react-native";
import { COLORS, BORDERS } from "../../../constants/theme";

const styles = StyleSheet.create({
  image: {
    borderRadius: BORDERS.round,
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: COLORS.gray,
  },
});

export default styles;
