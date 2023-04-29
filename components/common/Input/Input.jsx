import { TextInput } from "react-native";
import styles from "./Input.styles";
import { COLORS } from "../../../constants/theme";

function Input({ placeholder, handleChange, value, keyboardType = "default" }) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={COLORS.lightGray}
      value={value}
      onChangeText={(text) => handleChange(text)}
      style={styles.input}
      keyboardType={keyboardType}
    />
  );
}
export default Input;
