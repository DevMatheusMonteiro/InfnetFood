import { useEffect, useState, useCallback } from "react";
import { useToast } from "../../contexts/ToastContext";
import { ScreenContainer, H1, BodyText } from "../../styles/globalStyles";
import { FlatList } from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { Button } from "../../components/Button";
import { ActivityIndicator } from "react-native";
import { useCartStorage } from "../../hooks/useCartStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function Cart({ navigation }) {
  const { cart, loadCart, addToCart, removeFromCart, total, clearCart } =
    useCartStorage();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { notify } = useToast();

  async function handleNavigateToCheckout() {
    const order = { cart, total };
    navigation.navigate("Checkout", { order });
  }

  const loadItems = useCallback(async (isRefreshing = false) => {
    try {
      if (!isRefreshing) setLoading(true);

      await loadCart();

      if (isRefreshing) {
        notify.info("Carrinho atualizado com sucesso!");
      }
    } catch (error) {
      console.error(error);
      notify.error("Erro!", "Erro ao carregar lista de compras!");
    } finally {
      if (isRefreshing) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadItems();
    }, [])
  );

  // useEffect(() => {
  //   loadItems();
  // }, [loadItems]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    loadItems(true);
  }, [loadItems]);

  return (
    <ScreenContainer>
      <H1 style={{ paddingHorizontal: 24 }}>
        Total: R$ {total.toFixed(2).replace(".", ",")}
      </H1>
      {loading ? (
        <ActivityIndicator size={80} style={{ flex: 1 }} />
      ) : (
        <FlatList
          ListEmptyComponent={<BodyText>Carrinho vazio!</BodyText>}
          contentContainerStyle={{ gap: 16, padding: 24 }}
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          )}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      )}

      <Button
        disabled={cart.length == 0}
        label="Realizar pedido"
        onPress={handleNavigateToCheckout}
        style={{ marginBottom: 8, maxWidth: 200, marginHorizontal: "auto" }}
      />
    </ScreenContainer>
  );
}
