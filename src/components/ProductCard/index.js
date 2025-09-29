import { ImageBackground } from "react-native";
import { BodyText, H3 } from "../../styles/globalStyles";
import { Container } from "./styles";
import { useThemeCustom } from "../../contexts/ThemeContext";

export function ProductCard({ product, onPress }) {
  const { theme } = useThemeCustom();
  return (
    <ImageBackground
      source={{ uri: product.image }}
      resizeMode="cover"
      style={{ borderRadius: theme.radius.lg, overflow: "hidden" }}
    >
      <Container onPress={onPress}>
        <H3
          style={{
            color:
              theme.title === "light"
                ? theme.colors.darkBlue
                : theme.colors.lightBlue,
            marginBottom: 16,
            fontFamily: theme.fonts.secondaryBold,
          }}
        >
          {product.name}
        </H3>
        <BodyText style={{ fontFamily: theme.fonts.secondaryBold }}>
          R$ {product.price.toString().replace(".", ",")}
        </BodyText>
      </Container>
    </ImageBackground>
  );
}
