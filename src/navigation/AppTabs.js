import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // ou qualquer outra lib de ícones

import AppStack from "./AppStack";
import Cart from "../screens/Cart";
import { useThemeCustom } from "../contexts/ThemeContext";

const Tabs = createBottomTabNavigator();

export default function AppTabs() {
  const { theme } = useThemeCustom();
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor:
          theme.title === "dark"
            ? theme.colors.lightBlue
            : theme.colors.darkBlue,
        tabBarInactiveTintColor:
          theme.title === "dark"
            ? theme.colors.darkBlue
            : theme.colors.lightBlue,
        tabBarStyle: {
          borderTopColor: theme.colors.lightBlue,
          backgroundColor: theme.colors.background,
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: theme.fonts.secondaryBold,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={AppStack} />
      <Tabs.Screen name="Profile" component={AppStack} />
      <Tabs.Screen name="Cart" component={Cart} />
    </Tabs.Navigator>
  );
}
