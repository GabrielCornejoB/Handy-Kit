import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants/theme";
import images from "../constants/images";
import HomeNav from "../components/home/HomeNav/HomeNav";
import NavCard from "../components/home/NavCard/NavCard";

function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <HomeNav />
      <ScrollView>
        <NavCard text="Soundboard" icon={images.audio} />
      </ScrollView>
    </SafeAreaView>
  );
}
export default Home;
