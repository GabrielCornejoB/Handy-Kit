import { Text, Image, TouchableOpacity } from "react-native";
import styles from "./NavCard.styles";

function NavCard({ text, icon, size = 75, handleCardPress }) {
  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.card}>
      <Image source={icon} resizeMode="contain" style={styles.icon(size)} />
      <Text style={styles.heading}>{text}</Text>
    </TouchableOpacity>
  );
}

export default NavCard;
