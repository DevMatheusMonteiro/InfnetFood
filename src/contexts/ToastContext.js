import { createContext, useContext } from "react";
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
  SuccessToast,
} from "react-native-toast-message";
import { useThemeCustom } from "./ThemeContext";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const { theme } = useThemeCustom();

  const toastConfig = {
    success: (props) => (
      <SuccessToast
        {...props}
        style={{
          borderLeftColor: theme.colors.mediumBlue,
          backgroundColor: theme.colors.surface,
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: "bold",
          color: theme.colors.text,
        }}
        text2Style={{ fontSize: 14, color: theme.colors.text }}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: "red",
          backgroundColor: theme.colors.surface,
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: "bold",
          color: theme.colors.text,
        }}
        text2Style={{ fontSize: 14, color: theme.colors.text }}
      />
    ),
    info: (props) => (
      <InfoToast
        {...props}
        style={{
          borderLeftColor: theme.colors.lightBlue,
          backgroundColor: theme.colors.surface,
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: "bold",
          color: theme.colors.text,
        }}
        text2Style={{ fontSize: 14, color: theme.colors.text }}
      />
    ),
    warning: (props) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: "#FFC107",
          backgroundColor: theme.colors.surface,
        }}
        text1Style={{
          fontSize: 16,
          fontWeight: "bold",
          color: theme.colors.text,
        }}
        text2Style={{ fontSize: 14, color: theme.colors.text }}
      />
    ),
  };

  const notify = {
    success: (title, msg = "") =>
      Toast.show({
        type: "success",
        text1: title,
        text2: msg,
        position: "top",
        visibilityTime: 3000,
      }),
    error: (title, msg = "") =>
      Toast.show({
        type: "error",
        text1: title,
        text2: msg,
        position: "top",
        visibilityTime: 3000,
      }),
    info: (title, msg = "") =>
      Toast.show({
        type: "info",
        text1: title,
        text2: msg,
        position: "top",
        visibilityTime: 3000,
      }),
    warning: (title, msg = "") =>
      Toast.show({
        type: "warning",
        text1: title,
        text2: msg,
        position: "top",
        visibilityTime: 3000,
      }),
  };

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <Toast config={toastConfig} />
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
