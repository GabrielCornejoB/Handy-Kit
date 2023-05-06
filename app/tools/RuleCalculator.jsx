import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Clipboard,
  ScrollView,
} from "react-native";
import Navbar from "../../components/common/Navbar/Navbar";
import Input from "../../components/common/Input/Input";
import CopyText from "../../components/common/CopyText/CopyText";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "../../styles/main.styles";

function RuleCalculator() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");
  const [result, setResult] = useState("");

  const handleFirstValueChange = (value) => {
    setFirstValue(value);
  };

  const handleSecondValueChange = (value) => {
    setSecondValue(value);
  };

  const handleThirdValueChange = (value) => {
    setThirdValue(value);
  };

  const calculateResult = () => {
    if (firstValue && secondValue && thirdValue) {
      const value1 = parseFloat(firstValue);
      const value2 = parseFloat(secondValue);
      const value3 = parseFloat(thirdValue);
      setResult((value3 * value2) / value1);
    } else {
      Alert.alert("Error", "Ingresa todos los valores");
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar />
      <View style={{ padding: SIZES.medium, gap: SIZES.medium }}>
        <Text style={styles.h1}>Calculadora de regla de 3!</Text>
        <Text>Ingresa los valores, ten en cuenta cuenta que: ?=b X c/a, donde b/a = ?/c</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.medium }}>
          <Text style={{ fontSize: SIZES.h3 }}>? =</Text>
          <Input
            label="b"
            keyboardType="numeric"
            value={secondValue}
            handleChange={handleSecondValueChange}
            containerStyle={{ marginHorizontal: SIZES.small }}
          />
          <Text style={{ fontSize: SIZES.h3 }}>X</Text>
          <Input
            label="c"
            keyboardType="numeric"
            value={thirdValue}
            handleChange={handleThirdValueChange}
            containerStyle={{ marginHorizontal: SIZES.small }}
          />
          <Text style={{ fontSize: SIZES.h3 }}>/</Text>
          <Input
            label="a"
            keyboardType="numeric"
            value={firstValue}
            handleChange={handleFirstValueChange}
            containerStyle={{ marginHorizontal: SIZES.small }}
          />
        </View>
        <Button title="Calcular" onPress={calculateResult} color={COLORS.red} />
        {result ? (
          <Text style={styles.result}>{`Resultado: ${result}`}</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

export default RuleCalculator;
