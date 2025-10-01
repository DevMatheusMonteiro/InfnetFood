import { FlatList } from "react-native";
import { Input } from "../../components/Input";
import { useThemeCustom } from "../../contexts/ThemeContext";
import { useCartStorage } from "../../hooks/useCartStorage";
import {
  BodyText,
  H1,
  H2,
  H3,
  ScreenContainer,
} from "../../styles/globalStyles";
import {
  CartContainer,
  ContainerButtons,
  OrderContainer,
  PaymentMethods,
  PriceQuantityContainer,
} from "./styles";
import { useState } from "react";
import { Button } from "../../components/Button";
import { useToast } from "../../contexts/ToastContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendLocalNotification } from "../../services/notificationsService";

const mockPaymentMethod = ["Crédito", "Débito", "Pix"];

export default function Checkout({ navigation, route }) {
  const { theme } = useThemeCustom();
  const { order } = route.params;
  const { clearCart } = useCartStorage();
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const { notify } = useToast();

  async function handleConfirmOrder() {
    if (!address.trim()) return notify.error("Erro!", "Informe o endereço!");
    if (!paymentMethod.trim())
      return notify.error("Erro!", "Informe o método de pagamento!");

    const data = await AsyncStorage.getItem("@orders");
    const orders = data ? JSON.parse(data) : [];
    orders.push(order);
    await AsyncStorage.setItem("@orders", JSON.stringify(orders));
    notify.success(
      "Pedido realizado com sucesso!",
      `R$ ${order.total.toFixed(2).replace(".", ",")}`
    );
    await clearCart();
    navigation.reset({
      index: 0,
      routes: [{ name: "Home", params: { screen: "Categories" } }],
    });

    await sendLocalNotification(
      "Pedido Realizado!",
      `R$ ${order.total.toFixed(2).replace(".", ",")}`
    );
  }
  async function handleCancelOrder() {
    notify.info("Pedido cancelado!");
    await clearCart();
    // navigation.navigate("Home", { screen: "Categories" });
    navigation.reset({
      index: 0,
      routes: [{ name: "Home", params: { screen: "Categories" } }],
    });
    await sendLocalNotification("Pedido Cancelado!");
  }

  return (
    <ScreenContainer>
      <H1>Confime seu pedido</H1>
      <OrderContainer>
        <H2 style={{ marginBottom: 10 }}>
          Total: R$ {order.total.toFixed(2).replace(".", ",")}
        </H2>
        <FlatList
          keyExtractor={(_, i) => i}
          data={order.cart}
          style={{
            maxHeight: 300,
            borderColor: theme.colors.darkBlue,
            borderWidth: 1,
            borderRadius: theme.radius.lg,
          }}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
          renderItem={({ item }) => (
            <CartContainer>
              <H3>{item.name}</H3>
              <PriceQuantityContainer>
                <BodyText
                  style={{
                    backgroundColor: theme.colors.mediumBlue,
                    color: "#fff",
                    paddingVertical: 5,
                    paddingHorizontal: 3,
                    borderRadius: theme.radius.sm,
                  }}
                >
                  R$ {item.price.toFixed(2).replace(".", ",")}
                </BodyText>
                <BodyText
                  style={{
                    backgroundColor: theme.colors.mediumBlue,
                    color: "#fff",
                    paddingVertical: 5,
                    paddingHorizontal: 3,
                    borderRadius: theme.radius.sm,
                  }}
                >
                  {item.quantity}x
                </BodyText>
              </PriceQuantityContainer>
            </CartContainer>
          )}
        />
      </OrderContainer>
      <Input
        onChangeText={setAddress}
        label="Endereço"
        placeholder="Informe seu endereço"
        style={{ marginTop: 10 }}
      />
      <PaymentMethods>
        {mockPaymentMethod.map((m, i) => (
          <Button
            key={i}
            label={m}
            style={{
              maxWidth: 150,
              outlineWidth: paymentMethod == m ? 2 : 0,
              outlineColor: theme.colors.mediumBlue,
            }}
            onPress={() =>
              m != paymentMethod ? setPaymentMethod(m) : setPaymentMethod("")
            }
          />
        ))}
      </PaymentMethods>
      <ContainerButtons>
        <Button
          onPress={handleCancelOrder}
          label="Cancelar"
          style={{ backgroundColor: "red", maxWidth: 150 }}
        />
        <Button
          onPress={handleConfirmOrder}
          label="Confirmar"
          style={{ backgroundColor: "green", maxWidth: 150 }}
        />
      </ContainerButtons>
    </ScreenContainer>
  );
}
