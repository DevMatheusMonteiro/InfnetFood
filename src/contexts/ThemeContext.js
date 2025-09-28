import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components/native";

export const ThemeContext = createContext();

export function ThemeProviderCustom({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  async function loadTheme() {
    try {
      const storedTheme = await AsyncStorage.getItem("@theme");
      if (storedTheme === "dark") {
        setIsDark(true);
        setTheme(darkTheme);
      }
    } catch (error) {
      console.log("Erro ao carregar tema:", error);
    }
  }

  async function toggleTheme() {
    try {
      const newIsDark = !isDark;
      setIsDark(newIsDark);
      setTheme(newIsDark ? darkTheme : lightTheme);
      await AsyncStorage.setItem("@theme", newIsDark ? "dark" : "light");
    } catch (error) {
      console.log("Erro ao salvar tema:", error);
    }
  }

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeCustom = () => useContext(ThemeContext);
