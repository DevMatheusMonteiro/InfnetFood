import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";

import { ThemeProviderCustom } from "./src/contexts/ThemeContext";
import { ToastProvider } from "./src/contexts/ToastContext";
import { AuthProvider } from "./src/contexts/AuthContext";
import { ActivityIndicator } from "react-native";

import Navigation from "./src/navigation";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

// Configura handler global de notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  // Carregamento de fontes
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  useEffect(() => {
    async function registerForPushNotificationsAsync() {
      if (!Device.isDevice) return;
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        alert("Falha ao obter permissão para notificações!");
        return;
      }

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }
    }
    registerForPushNotificationsAsync();
  }, []);

  return (
    <>
      {fontsLoaded ? (
        <ThemeProviderCustom>
          <ToastProvider>
            <AuthProvider>
              <Navigation />
            </AuthProvider>
          </ToastProvider>
        </ThemeProviderCustom>
      ) : (
        <ActivityIndicator size={80} style={{ flex: 1 }} />
      )}
    </>
  );
}
