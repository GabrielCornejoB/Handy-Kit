import { View, Text, SafeAreaView } from "react-native";
import Navbar from "../../components/common/Navbar/Navbar";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "../../styles/main.styles";

function Soundboard() {
  return (
    <SafeAreaView>
      <Navbar />
      <View>
        <Text style={styles.h1}>Soundboard</Text>
        <Text>Esta herramienta te permite reproducir sonidos divertidos!</Text>
      </View>
    </SafeAreaView>
  );
}
export default Soundboard;
