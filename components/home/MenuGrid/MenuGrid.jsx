import { View } from "react-native";
import styles from "./MenuGrid.styles";
import images from "../../../constants/images";
import Row from "../../common/Row/Row";
import NavCard from "../NavCard/NavCard";

function MenuGrid() {
  return (
    <View style={styles.gridContainer}>
      <Row>
        <NavCard text="Calculadora de descuentos" icon={images.discount} />
        <NavCard text="Calculadora de       regla de 3" icon={images.divide} />
      </Row>
      <Row>
        <NavCard text="Generador link de Whatsapp" icon={images.whatsapp} />
        <NavCard text="Generador de contraseñas" icon={images.password} />
      </Row>
      <Row>
        <NavCard text="Soundboard" icon={images.audio} />
        <NavCard text="Rutinas gimnasio" icon={images.dumbbell} />
      </Row>
    </View>
  );
}
export default MenuGrid;
