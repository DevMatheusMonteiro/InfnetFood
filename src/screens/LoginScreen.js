import { H1, ScreenContainer } from "../styles/globalStyles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function LoginScreen({ navigation }) {
  return (
    <ScreenContainer>
      <H1>Login</H1>
      <Input label="Email" placeholder="Digite seu email..." />
      <Input
        style={{ marginTop: 8 }}
        label="Senha"
        placeholder="Digite sua senha..."
      />
      <Button
        label="Entrar"
        style={{ maxWidth: 200, marginHorizontal: "auto", marginTop: 16 }}
        onPress={() => navigation.navigate("Home")}
      />
    </ScreenContainer>
  );
}
