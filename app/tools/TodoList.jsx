import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const KEY = "@todos";

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(KEY);
      if (value !== null) {
        setTodos(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
      Alert.alert("error :(", error);
    }
  };
  const clearData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
    // clearData();
  }, []);

  const handleCreateTodo = () => {
    if (text.length < 5) {
      console.log("La actividad debe tener al menos 5 caracteres");
      Alert.alert(
        "No se pudo crear la actividad",
        "La actividad debe tener al menos 5 caracteres"
      );
    } else {
      const newId = new Date().getTime();
      setTodos([...todos, { id: newId, todo: text, done: false }]);
      setText("");
      storeData([...todos, { id: newId, todo: text, done: false }]);
    }
  };
  const handleInputChange = (value) => {
    setText(value);
  };
  const handleTodoPress = (todo) => {
    if (!todo.done) {
      setTodos(todos.map((t) => (t.id === todo.id ? { ...t, done: true } : t)));
      storeData(
        todos.map((t) => (t.id === todo.id ? { ...t, done: true } : t))
      );
    } else {
      setTodos(todos.filter((t) => t.id !== todo.id));
      storeData(todos.filter((t) => t.id !== todo.id));
    }
  };
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(value));
    } catch (e) {
      console.log(e);
      Alert.alert("error :(", e);
    }
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
          pendientes.
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
        {todos.length > 0 && (
          <>
            <View style={styles.borderBottom}></View>
            <Text style={styles.h2}>Actividades pendientes</Text>
            <Text style={styles.subtitle}>
              Presiona una actividad pendiente para marcarla como finalizada,
              presiona una finalizada para eliminarla
            </Text>
            <View style={{ gap: SIZES.small, paddingBottom: SIZES.small }}>
              {todos.map((t) => (
                <Todo
                  key={t.id}
                  todo={t}
                  handlePress={() => handleTodoPress(t)}
                />
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
export default TodoList;
