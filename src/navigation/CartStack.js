import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import { useCartStorage } from "../hooks/useCartStorage";

const Stack = createNativeStackNavigator();

export default function CartStack() {
  const { loadCart } = useCartStorage();

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
