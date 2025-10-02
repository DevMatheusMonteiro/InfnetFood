import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Map from "../screens/Map";
import RestaurantDetails from "../screens/RestaurantDetails";

const Stack = createNativeStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
    </Stack.Navigator>
  );
}
