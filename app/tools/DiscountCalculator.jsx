import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  TextInput,
} from "react-native";
import Navbar from "../../components/common/Navbar/Navbar";
import Input from "../../components/common/Input/Input";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "../../styles/main.styles";

function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const handleChangePrice = (text) => {
    setPrice(text);
  };

  const handleChangeDiscount = (text) => {
    setDiscount(text);
  };

  const calculateDiscountedPrice = () => {
    const discountedPrice = (price - price * (discount / 100 )).toLocaleString('en-US', { 
      style: 'currency', 
      currency: 'USD' 
    });
    
    
    Alert.alert(`Precio con descuento :${discountedPrice}`);
    console.log(discountedPrice);

  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar />
      <View style={{ padding: SIZES.medium, gap: SIZES.medium }}>
        <Text style={styles.h1}>Calculadora descuentos</Text>  
        <Text>
          Esta herramienta te permite calcular descuentos!
        </Text>

        <Input
          handleChange={handleChangePrice}
          placeholder="Ingrese aquí el precio"
          value={price}
          keyboardType="numeric"
        />

        <Input
          handleChange={handleChangeDiscount}
          placeholder="Ingrese aqui el descuento (%)"
          value={discount}
          keyboardType="numeric"
        />

        <Button title="Calculate" onPress={calculateDiscountedPrice} color={COLORS.red}/>
      </View>
    </SafeAreaView>
  );
}

export default DiscountCalculator;
