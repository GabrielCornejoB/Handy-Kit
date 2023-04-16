import { TextInput } from "react-native";
import styles from "./Input.styles";

function Input({ placeholder, handleChange, value }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => handleChange(text)}
      style={styles.input}
    />
  );
}
export default Input;
