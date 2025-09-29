import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "../screens/Categories";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Categories} />
    </Stack.Navigator>
  );
}
