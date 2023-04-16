import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Clipboard,
} from "react-native";
import { useState } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { COLORS, SIZES } from "../../constants/theme";
import Input from "../../components/common/Input/Input";
import CopyText from "../../components/common/CopyText/CopyText";

function LinkGenerator() {
  const BASE_URL = "https://api.whatsapp.com/send?phone=";
  const [cellphone, setCellphone] = useState("");
  const [link, setLink] = useState("");

  const handleInputChange = (value) => {
    setCellphone(value);
  };
  const handleLinkGeneration = () => {
    if (
      !cellphone ||
      cellphone.length != 10 ||
      cellphone.match(/^[0-9]+$/) == null
    )
      Alert.alert(
        "No se pudo generar el link",
        "Debes completar correctamente el campo de texto"
      );
    else {
      setLink(BASE_URL + cellphone);
      setCellphone("");
    }
  };
  const handleClean = () => {
    if (!link) Alert.alert("No hay nada que limpiar");
    else setLink("");
  };
  const handleCopyToClipboard = () => {
    Clipboard.setString(link);
  };

  return (
    <SafeAreaView>
      <Navbar />
      <View style={{ padding: SIZES.medium, gap: SIZES.medium }}>
        <Text style={{ fontSize: SIZES.xlarge, fontWeight: "bold" }}>
          Generador links WhatsApp
        </Text>
        <Text>
          Esta herramienta te permite generar links de WhatsApp para poder
          acceder a chats sin tener que agregarlos.
        </Text>
        <Input
          placeholder="Ingrese aquí el número"
          value={cellphone}
          handleChange={handleInputChange}
        />
        <Button
          color={COLORS.red}
          title="Generar link"
          onPress={handleLinkGeneration}
        />

        {!!link && (
          <>
            <Button
              color={COLORS.lightGray}
              title="Limpiar"
              onPress={handleClean}
            />
            <CopyText text={link} handleCopy={handleCopyToClipboard} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
export default LinkGenerator;
