import { View } from "react-native";
import Row from "../../common/Row/Row";
import NavCard from "../NavCard/NavCard";
import images from "../../../constants/images";
import styles from "./MenuGrid.styles";

function MenuGrid({ navigate }) {
  return (
    <View style={styles.gridContainer}>
      <Row>
        <NavCard
          text="Calculadora de descuentos"
          icon={images.discount}
          handleCardPress={() => navigate("DiscountCalculator")}
        />
        <NavCard
          text="Calculadora de       regla de 3"
          icon={images.divide}
          handleCardPress={() => navigate("RuleCalculator")}
        />
      </Row>
      <Row>
        <NavCard
          text="Generador link de Whatsapp"
          icon={images.whatsapp}
          handleCardPress={() => navigate("LinkGenerator")}
        />
        <NavCard
          text="Generador de contraseñas"
          icon={images.password}
          handleCardPress={() => navigate("PasswordGenerator")}
        />
      </Row>
      <Row>
        <NavCard
          text="Soundboard"
          icon={images.audio}
          handleCardPress={() => navigate("Soundboard")}
        />
        <NavCard
          text="Rutinas gimnasio"
          icon={images.dumbbell}
          handleCardPress={() => navigate("GymRoutines")}
        />
      </Row>
    </View>
  );
}
export default MenuGrid;
