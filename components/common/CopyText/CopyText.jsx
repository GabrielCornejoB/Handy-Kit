import { TouchableOpacity, Text } from "react-native";
import styles from "./CopyText.styles";

function CopyText({ text, handleCopy }) {
  return (
    <TouchableOpacity style={styles.copyButton} onPress={() => handleCopy()}>
      <Text style={styles.headingText}>
        PRESIONA PARA COPIAR EN EL PORTAPAPELES
      </Text>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
export default CopyText;
