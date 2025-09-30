import { useEffect, useState, useCallback, use } from "react";
import { useToast } from "../../contexts/ToastContext";
import { ScreenContainer, H1, BodyText } from "../../styles/globalStyles";
import { FlatList } from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { ActivityIndicator } from "react-native";
import { useCartStorage } from "../../hooks/useCartStorage";

export default function Cart({ route }) {
  const { cart, loadCart, addToCart, removeFromCart, total } = useCartStorage();
  // const [total, setTotal] = useState(0);
  // const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { notify } = useToast();
  const loadItems = useCallback(
    async (isRefreshing = false) => {
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
    },
    [total]
  );

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    loadItems(true);
  }, [loadItems]);

  return (
    <ScreenContainer>
      <H1 style={{ paddingHorizontal: 24 }}>
        Total: R$ {total.toFixed(2).replace(".", ",")}
      </H1>
      {loading && cart.length > 0 ? (
        <ActivityIndicator size={80} style={{ flex: 1 }} />
      ) : (
        <FlatList
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
    </ScreenContainer>
  );
}
