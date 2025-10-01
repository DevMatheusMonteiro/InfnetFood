import { BodyText, H3, ScreenContainer } from "../../styles/globalStyles";
import { useAuth } from "../../contexts/AuthContext";
import { ConfigContainer, ProfileContainer } from "./styles";
import { Switch } from "react-native-gesture-handler";
import { useThemeCustom } from "../../contexts/ThemeContext";

export default function Profile() {
  const { user } = useAuth();

  const { isDark, toggleTheme } = useThemeCustom();

  return (
    <ScreenContainer>
      <ProfileContainer>
        <H3>Nome: {user.name}</H3>
        <H3>Email: {user.email}</H3>
      </ProfileContainer>

      <ConfigContainer>
        <H3>Trocar para o tema {isDark ? "claro" : "escuro"}:</H3>
        <Switch
          value={isDark}
          onChange={toggleTheme}
          trackColor={{ true: "#FFF", false: "#000" }}
        />
      </ConfigContainer>
    </ScreenContainer>
  );
}
