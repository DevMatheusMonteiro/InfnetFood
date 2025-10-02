import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";

const Stack = createNativeStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}
