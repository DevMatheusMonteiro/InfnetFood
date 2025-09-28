import { Container, StyledInput, Label } from "./styles";
import { useThemeCustom } from "../../contexts/ThemeContext";

export function Input({ label, style = {}, ...rest }) {
  const { theme } = useThemeCustom();

  return (
    <Container style={style}>
      {label && <Label>{label}</Label>}
      <StyledInput placeholderTextColor={theme.colors.lightBlue} {...rest} />
    </Container>
  );
}
