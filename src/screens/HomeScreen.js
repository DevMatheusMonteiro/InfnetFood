import { Button } from "../components/Button";
import { BodyText, H1, ScreenContainer } from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <ScreenContainer>
      <H1>HOME</H1>
      <BodyText>Home Screen</BodyText>
      <Button
        style={{ maxWidth: 200, marginHorizontal: "auto", marginTop: 8 }}
        label="Ir para login"
        onPress={() => navigation.navigate("Login")}
      />
    </ScreenContainer>
  );
}
