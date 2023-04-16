import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants/theme";
import MenuGrid from "../components/home/MenuGrid/MenuGrid";
import Navbar from "../components/common/Navbar/Navbar";

function Home() {
  const router = useRouter();
  const handleCardPress = (tool) => {
    router.push("/tools/" + tool);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Navbar />
      <ScrollView>
        <View style={{ padding: SIZES.medium }}>
          <Text style={{ fontWeight: "bold", fontSize: SIZES.xlarge }}>
            Seleccione una opción
          </Text>
          <Text style={{ color: COLORS.lightGray, fontWeight: 500 }}>
            Te llevará a otra pantalla con la herramienta
          </Text>
        </View>
        <MenuGrid navigate={handleCardPress} />
      </ScrollView>
    </SafeAreaView>
  );
}
export default Home;
