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
        <SoundCard emoji="💨" audio={audios.fart} />
      </Row>
      <Row>
        <SoundCard emoji="😭" audio={audios.sad} />
        <SoundCard emoji="👨🏿" audio={audios.bendicion} />
        <SoundCard emoji="🐒" audio={audios.monkey} />
      </Row>
      <Row>
        <SoundCard emoji="🧽" audio={audios.spongebob} />
        <SoundCard emoji="🦆" audio={audios.quack} />
        <SoundCard emoji="🍑" audio={audios.peaches} />
      </Row>
      <Row>
        <SoundCard emoji="🐸" audio={audios.frog} />
        <SoundCard emoji="🔪" audio={audios.among} />
        <SoundCard emoji="😴" audio={audios.sleep} />
      </Row>
    </View>
  );
}
export default BoardGrid;
