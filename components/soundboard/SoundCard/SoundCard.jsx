import { Text, TouchableOpacity } from "react-native";
import styles from "./SoundCard.styles";
import { Audio } from "expo-av";
import audios from "../../../constants/audios";

function SoundCard({ emoji, audio }) {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(audio);
    await sound.playAsync();
  };
  return (
    <TouchableOpacity onPress={playSound} style={styles.button}>
      <Text style={styles.emoji}>{emoji}</Text>
    </TouchableOpacity>
  );
}

export default SoundCard;
