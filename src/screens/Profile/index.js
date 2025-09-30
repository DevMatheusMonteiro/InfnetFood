import { BodyText, H3, ScreenContainer } from "../../styles/globalStyles";
import { useAuth } from "../../contexts/AuthContext";
import { Container } from "./styles";

export default function Profile() {
  const { user } = useAuth();

  return (
    <ScreenContainer>
      <Container>
        <H3>Nome: {user.name}</H3>
        <H3>Email: {user.email}</H3>
      </Container>
    </ScreenContainer>
  );
}
