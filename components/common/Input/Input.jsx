import { TextInput } from "react-native";
import styles from "./Input.styles";

function Input({ placeholder, handleChange, value, keyboardType = "default" }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => handleChange(text)}
      style={styles.input}
      keyboardType={keyboardType}
    />
  );
}
export default Input;
