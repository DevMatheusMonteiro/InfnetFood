import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "../screens/Categories";
import Products from "../screens/Products";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}
