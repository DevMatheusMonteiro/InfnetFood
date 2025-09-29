import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

export function IconButton({
  loading = false,
  disabled = false,
  onPress,
  style = {},
  icon,
  ...rest
}) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {loading ? <ActivityIndicator size="small" color="#fff" /> : icon}
    </Container>
  );
}
