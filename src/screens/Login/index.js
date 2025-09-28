import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScreenContainer, H1 } from "../../styles/globalStyles";
import { Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useToast } from "../../contexts/ToastContext";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { notify } = useToast();
  const { signIn } = useAuth();

  async function handleLogin() {
    setLoading(true);
    if (!email || !password) {
      notify.error("Erro!", "Preencha todos os campos!");
      setLoading(false);
      return;
    }

    const success = await signIn(email, password);

    if (!success) {
      setLoading(false);
      return notify.warning("Email e/ou senha inválidos");
    }

    notify.success("Login realizado com sucesso!", "Bem vindo ao InfnetFood!");
    setLoading(false);
  }

  return (
    <ScreenContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 24,
        }}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
      >
        <H1>Login</H1>
        <Form>
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button
            shadow="md"
            loading={loading}
            label="Entrar"
            onPress={handleLogin}
          />
        </Form>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
}
