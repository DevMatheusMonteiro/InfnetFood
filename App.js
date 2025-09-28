import { ThemeProviderCustom } from "./src/contexts/ThemeContext";
import { ToastProvider } from "./src/contexts/ToastContext";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProviderCustom>
      <ToastProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </ToastProvider>
    </ThemeProviderCustom>
  );
}
