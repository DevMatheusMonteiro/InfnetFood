import { useEffect, useState, useCallback } from "react";
import { useToast } from "../../contexts/ToastContext";
import { ScreenContainer, H1, BodyText } from "../../styles/globalStyles";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OrdeItem } from "../../components/OrderItem";

export default function Orders({ navigation }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { notify } = useToast();

  const loadItems = useCallback(async (isRefreshing = false) => {
    try {
      if (!isRefreshing) setLoading(true);

      const data = await AsyncStorage.getItem("@orders");

      if (data) setOrders(JSON.parse(data));
      notify.info(data);
      if (isRefreshing) {
        // notify.info("Pedidos atualizados com sucesso!");
      }
    } catch (error) {
      console.error(error);
      notify.error("Erro!", "Erro ao carregar lista de pedidos!");
    } finally {
      if (isRefreshing) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    loadItems(true);
  }, [loadItems]);

  return (
    <ScreenContainer>
      <H1 style={{ paddingHorizontal: 24 }}>Pedidos</H1>
      {loading ? (
        <ActivityIndicator size={80} style={{ flex: 1 }} />
      ) : (
        <FlatList
          ListEmptyComponent={<BodyText>Sem pedidos!</BodyText>}
          contentContainerStyle={{ gap: 16, padding: 24 }}
          data={orders}
          keyExtractor={(item, i) => i}
          renderItem={({ item }) => <OrdeItem order={item} />}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      )}
    </ScreenContainer>
  );
}
