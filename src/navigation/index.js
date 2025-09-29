import { NavigationContainer } from "@react-navigation/native";

import { ActivityIndicator } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { ScreenContainer } from "../styles/globalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Navigation() {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <ScreenContainer>
        <ActivityIndicator size={80} style={{ flex: 1 }} />
      </ScreenContainer>
    );

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
