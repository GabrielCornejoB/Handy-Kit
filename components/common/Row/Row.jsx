import { View } from "react-native";
import styles from "./Row.styles";

function Row({ children }) {
  return <View style={styles.row}>{children}</View>;
}
export default Row;
