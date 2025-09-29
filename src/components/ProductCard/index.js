import { ImageBackground } from "react-native";
import { BodyText, H3 } from "../../styles/globalStyles";
import { Container, AddRemoveContainer } from "./styles";
import { useThemeCustom } from "../../contexts/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IconButton } from "../IconButton";
import { useCartStorage } from "../../hooks/useCartStorage";
import { useState } from "react";

export function ProductCard({ product }) {
  const { addToCart, removeFromCart } = useCartStorage();
  const [quantity, setQuantity] = useState(0);
  const { theme } = useThemeCustom();

  function handleAddToCart() {
    addToCart(product);
    setQuantity(quantity + 1);
  }

  function handleRemoveFromCart() {
    removeFromCart(product);
    setQuantity(quantity - 1);
  }
  return (
    <ImageBackground
      source={{ uri: product.image }}
      resizeMode="cover"
      style={{ borderRadius: theme.radius.lg, overflow: "hidden" }}
    >
      <Container>
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
          R${" "}
          {(quantity > 0 ? product.price * quantity : product.price)
            .toFixed(2)
            .replace(".", ",")}
        </BodyText>
        <AddRemoveContainer>
          <IconButton
            disabled={quantity == 0}
            onPress={handleRemoveFromCart}
            icon={
              <Ionicons
                name="remove-circle"
                size={24}
                color={
                  theme.title === "light"
                    ? theme.colors.darkBlue
                    : theme.colors.lightBlue
                }
              />
            }
          />
          <BodyText style={{ fontFamily: theme.fonts.secondaryBold }}>
            {quantity}
          </BodyText>
          <IconButton
            onPress={handleAddToCart}
            icon={
              <Ionicons
                name="add-circle"
                size={24}
                color={
                  theme.title === "light"
                    ? theme.colors.darkBlue
                    : theme.colors.lightBlue
                }
              />
            }
          />
        </AddRemoveContainer>
      </Container>
    </ImageBackground>
  );
}
