import { Text, TouchableOpacity } from "react-native";
import styles from "./Todo.styles";

function Todo({ todo, handlePress }) {
  return (
    <TouchableOpacity
      style={todo.done ? styles.done : styles.pending}
      onPress={handlePress}
    >
      <Text>{todo.todo}</Text>
    </TouchableOpacity>
  );
}
export default Todo;
