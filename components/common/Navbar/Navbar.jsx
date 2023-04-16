import { Image } from "react-native";
import { Stack } from "expo-router";
import images from "../../../constants/images";
import { COLORS } from "../../../constants/theme";
import styles from "./Navbar.styles";

function Navbar() {
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

export default Navbar;
