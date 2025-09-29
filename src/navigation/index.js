import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import AuthStack from "./AuthStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppTabs from "./AppTabs";
import { GlobalContainer } from "../styles/globalStyles";

export default function Navigation() {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <GlobalContainer>
        <ActivityIndicator size={80} style={{ flex: 1 }} />
      </GlobalContainer>
    );

  return (
    <GestureHandlerRootView>
      <GlobalContainer>
        <NavigationContainer>
          {user ? <AppTabs /> : <AuthStack />}
        </NavigationContainer>
      </GlobalContainer>
    </GestureHandlerRootView>
  );
}
