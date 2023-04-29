import { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import Navbar from "../../components/common/Navbar/Navbar";
import Input from "../../components/common/Input/Input";

import styles from "../../styles/main.styles";
import { COLORS, SIZES } from "../../constants/theme";
import Todo from "../../components/todos/Todo/Todo";

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = () => {
    if (text.length < 5) {
      console.log("La actividad debe tener al menos 5 caracteres");
      Alert.alert(
        "No se pudo crear la actividad",
        "La actividad debe tener al menos 5 caracteres"
      );
    } else {
      setTodos([...todos, { id: todos.length, todo: text, done: false }]);
      setText("");
    }
  };
  const handleInputChange = (value) => {
    setText(value);
  };
  const handleTodoPress = (todo) => {
    if (!todo.done)
      setTodos(todos.map((t) => (t.id === todo.id ? { ...t, done: true } : t)));
    else setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar />
      <ScrollView
        style={{ padding: SIZES.medium }}
        contentContainerStyle={{ rowGap: SIZES.medium }}
      >
        <Text style={styles.h1}>Pendientes</Text>
        <Text style={styles.borderBottom}>
          Esta herramienta te permite crear recordatorios y actividades
          pendientes que tengas y marcarlas como finalizadas
        </Text>

        <Text style={styles.h2}>Crear una nueva actividad pendiente</Text>
        <Input
          placeholder="Nombre de la actividad"
          value={text}
          handleChange={handleInputChange}
        />
        <Button
          title="CREAR ACTIVIDAD"
          color={COLORS.red}
          onPress={handleCreateTodo}
        />
        <View style={styles.borderBottom}></View>

        <Text style={styles.h2}>Actividades pendientes</Text>
        <Text style={styles.subtitle}>
          Presiona una actividad pendiente para marcarla como finalizada,
          presiona una finalizada para eliminarla
        </Text>
        <View style={{ gap: SIZES.small }}>
          {todos.map((t) => (
            <Todo key={t.id} todo={t} handlePress={() => handleTodoPress(t)} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default TodoList;
