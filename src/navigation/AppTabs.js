import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import { useThemeCustom } from "../contexts/ThemeContext";
import Profile from "../screens/Profile";
import Orders from "../screens/Orders";
import CartStack from "./CartStack";
import Map from "../screens/Map";

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
          } else if (route.name === "CartStack") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Orders") {
            iconName = focused ? "receipt" : "receipt-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "map" : "map-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Map" component={Map} />
      <Tabs.Screen
        name="CartStack"
        component={CartStack}
        options={{ title: "Carrinho" }}
      />
      <Tabs.Screen
        name="Orders"
        component={Orders}
        options={{ title: "Pedidos" }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Perfil" }}
      />
    </Tabs.Navigator>
  );
}
