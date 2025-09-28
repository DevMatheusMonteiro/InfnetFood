import { Container, Label } from "./styles";
import { ActivityIndicator } from "react-native";

export function Button({
  label,
  loading = false,
  disabled = false,
  onPress,
  shadow = "sm",
  style = {},
  ...rest
}) {
  return (
    <Container
      shadow={shadow}
      onPress={onPress}
      disabled={disabled || loading}
      style={style}
      {...rest}
    >
      {loading && <ActivityIndicator size="small" color="#fff" />}
      <Label loading={loading}>{label}</Label>
    </Container>
  );
}
