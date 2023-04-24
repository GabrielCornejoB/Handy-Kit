import { View } from "react-native";
import Row from "../../common/Row/Row";
import SoundCard from "../SoundCard/SoundCard";
import styles from "./BoardGrid.styles";
import audios from "../../../constants/audios";

function BoardGrid() {
  return (
    <View style={styles.gridContainer}>
      <Row>
        <SoundCard emoji="🍌" audio={audios.banana} />
        <SoundCard emoji="🤣" audio={audios.laugh} />
        <SoundCard emoji="👾" audio={audios.videogame} />
      </Row>
      <Row>
        <SoundCard emoji="🏥" audio={audios.ecg} />
        <SoundCard emoji="🐓" audio={audios.rooster} />
        <SoundCard emoji="🐒" audio={audios.monkey} />
      </Row>
    </View>
  );
}
export default BoardGrid;
