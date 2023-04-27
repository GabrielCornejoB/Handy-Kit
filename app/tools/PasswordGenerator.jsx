import { useState } from "react";
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

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(16);

  const handleChange = (value) => {
    if (value === '') {
      setPasswordLength(0);
    } else {
      setPasswordLength(parseInt(value));
    }
  }

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let generatedPassword = '';
    const length = passwordLength > 40 ? 40 : passwordLength; // Tamano maximo de contrasena se define aqui, en caso que sea mayor que 50, automaticamente se establece en 50
    if (passwordLength > 40)
    setPasswordLength(40);
    for (let i = 0; i < length; i++) {
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
        <Text style={styles.h1}>Generador contraseñas</Text>
        <Text>Ingresa el número de caracteres de la contraseña (máximo 40)</Text>
        <Input
          handleChange={handleChange}
          value={passwordLength.toString()}
          keyboardType="numeric"
        />

        <Button
          color={COLORS.red}
          title='Generar contraseña'
          onPress={generatePassword}
        />
        {password ? (
          <View style={{ flexDirection: 'column', alignItems: 'center', gap: SIZES.small }}> 
            <ScrollView horizontal={true} style={{ maxWidth: '100%' }}>
              <Text style={{ flex: 1 }}>{password}</Text>
            </ScrollView>
            <CopyText onPress={copyPassword} handleCopy={handleCopyToClipboard} />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );

}
export default PasswordGenerator;
