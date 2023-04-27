import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Clipboard,
} from "react-native";
import Navbar from "../../components/common/Navbar/Navbar";
import Input from "../../components/common/Input/Input";
import CopyText from "../../components/common/CopyText/CopyText";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "../../styles/main.styles";

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);

  const handleChange = (value) => {
    setPasswordLength(parseInt(value));
  }

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(generatedPassword);
  }

  const copyPassword = () => {
    Clipboard.setString(password);
    Alert.alert('La contraseña ha sido copiada al portapapeles');
  }

  const handleCopyToClipboard = () => {
    Clipboard.setString(password);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar />
      <View style={{ padding: SIZES.medium, gap: SIZES.medium }}>
        <Text style={styles.h1}>Generador contrasenas</Text>
        <Text>Ingresa el numero de caracteres de la contrasena</Text>
        <Input
          handleChange={handleChange}
          value={passwordLength}
          keyboardType="numeric"
        />

        <Button
          color={COLORS.red}
          title='Generar contrasena'
          onPress={generatePassword}
        />
       {password ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: SIZES.small }}>
            <Text style={{ flex: 1 }}>{password}</Text>
            <CopyText onPress={copyPassword} handleCopy={handleCopyToClipboard} />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );

}
export default PasswordGenerator;