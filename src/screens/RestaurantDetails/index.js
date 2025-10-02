import { BodyText, H1, H2, ScreenContainer } from "../../styles/globalStyles";

export default function RestaurantDetails({ route }) {
  const { restaurant } = route.params;

  return (
    <ScreenContainer>
      <H1>{restaurant.name}</H1>
      <BodyText>{restaurant.address}</BodyText>
      <H2>Exemplo do Cardápio:</H2>
      <BodyText>{restaurant.menuItem}</BodyText>
    </ScreenContainer>
  );
}
