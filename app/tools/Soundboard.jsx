import { View, Text, SafeAreaView } from "react-native";
import Navbar from "../../components/common/Navbar/Navbar";
import BoardGrid from "../../components/soundboard/BoardGrid/BoardGrid";
import styles from "../../styles/main.styles";
import { COLORS, SIZES } from "../../constants/theme";
import { ScrollView } from "react-native-gesture-handler";

function Soundboard() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar />
      <ScrollView>
        <View style={{ padding: SIZES.medium }}>
          <Text style={styles.h1}>Soundboard</Text>
          <Text>Esta herramienta te permite reproducir sonidos!</Text>
        </View>
        <BoardGrid />
      </ScrollView>
    </SafeAreaView>
  );
}
export default Soundboard;
