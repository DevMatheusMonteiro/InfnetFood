import { Platform } from "react-native";

const iosShadow = (opacity, radius, height = 1) => ({
  shadowColor: "#000",
  shadowOffset: { width: 0, height },
  shadowOpacity: opacity,
  shadowRadius: radius,
});

export const lightTheme = {
  title: "light",
  colors: {
    darkBlue: "#053566",
    mediumBlue: "#177FBF",
    lightBlue: "#8BBBD9",
    background: "#FFFFFF",
    surface: "#F5F5F5",
    overlay: "#f5f5f5bb",
    text: "#000000",
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  shadow: Platform.select({
    android: {
      sm: { elevation: 2 },
      md: { elevation: 5 },
      lg: { elevation: 8 },
    },
    ios: {
      sm: iosShadow(0.22, 2.22),
      md: iosShadow(0.27, 4.65, 3),
      lg: iosShadow(0.3, 4.65, 4),
    },
  }),
  fonts: {
    primary: "Roboto_400Regular",
    primaryBold: "Roboto_700Bold",
    secondary: "Montserrat_400Regular",
    secondaryBold: "Montserrat_700Bold",
  },
};

export const darkTheme = {
  title: "dark",
  colors: {
    darkBlue: "#0A1F44",
    mediumBlue: "#1E3A6D",
    lightBlue: "#4B6FA3",
    background: "#121212",
    surface: "#1E1E1E",
    overlay: "#1e1e1ecc",
    text: "#FFFFFF",
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  shadow: Platform.select({
    android: {
      sm: { elevation: 2 },
      md: { elevation: 5 },
      lg: { elevation: 8 },
    },
    ios: {
      sm: iosShadow(0.22, 2.22),
      md: iosShadow(0.27, 4.65, 3),
      lg: iosShadow(0.3, 4.65, 4),
    },
  }),
  fonts: {
    primary: "Roboto_400Regular",
    primaryBold: "Roboto_700Bold",
    secondary: "Montserrat_400Regular",
    secondaryBold: "Montserrat_700Bold",
  },
};
