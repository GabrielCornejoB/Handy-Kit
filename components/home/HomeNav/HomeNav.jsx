import { Image, Text } from "react-native";
import { Stack } from "expo-router";
import images from "../../../constants/images";
import { COLORS } from "../../../constants/theme";
import styles from "./HomeNav.styles";

function HomeNav() {
  return (
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: COLORS.red },
        headerTitleAlign: "center",
        headerTitle: () => (
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.image}
          />
        ),
      }}
    />
  );
}

export default HomeNav;
