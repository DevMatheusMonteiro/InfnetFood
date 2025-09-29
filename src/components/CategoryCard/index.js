import { ImageBackground } from "react-native";
import { BodyText, H3 } from "../../styles/globalStyles";
import { Container } from "./styles";
import { useThemeCustom } from "../../contexts/ThemeContext";

export function CategoryCard({ category, onPress }) {
  const { theme } = useThemeCustom();
  return (
    <ImageBackground
      source={{ uri: category.image }}
      resizeMode="cover"
      style={{ borderRadius: theme.radius.lg, overflow: "hidden" }}
    >
      <Container onPress={onPress}>
        <H3 style={{ color: theme.colors.mediumBlue, marginBottom: 16 }}>
          {category.name}
        </H3>
        <BodyText numberOfLines={5} ellipsizeMode="tail">
          {category.description}
        </BodyText>
      </Container>
    </ImageBackground>
  );
}
