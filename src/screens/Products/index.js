import { useEffect, useState, useCallback } from "react";
import { useToast } from "../../contexts/ToastContext";
import { fetchProductsByCategory } from "../../services/theMealDbService";
import { ScreenContainer, H1, BodyText } from "../../styles/globalStyles";
import { FlatList } from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { ActivityIndicator } from "react-native";

export default function Products({ route }) {
  const { category } = route.params;
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [products, setProducts] = useState([]);
  const { notify } = useToast();

  const loadProducts = useCallback(
    async (isRefreshing = false) => {
      try {
        if (!isRefreshing) setLoading(true);

        const res = await fetchProductsByCategory(category.name);
        const mappedProducts = res.meals.map((p) => ({
          id: p.idMeal,
          name: p.strMeal,
          image: p.strMealThumb,
          price: Number((Math.random() * 100).toFixed(2)),
          quantity: 0,
        }));

        setProducts(mappedProducts);

        if (isRefreshing) {
          notify.info("Produtos atualizados com sucesso!");
        }
      } catch (error) {
        console.error(error);
        notify.error("Erro!", "Erro ao carregar lista de produtos!");
      } finally {
        if (isRefreshing) {
          setRefreshing(false);
        } else {
          setLoading(false);
        }
      }
    },
    [category.name]
  );

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    loadProducts(true);
  }, [loadProducts]);

  return (
    <ScreenContainer>
      <H1 style={{ paddingHorizontal: 24 }}>{category.name}</H1>
      {loading ? (
        <ActivityIndicator size={80} style={{ flex: 1 }} />
      ) : (
        <FlatList
          ListHeaderComponent={<BodyText>{category.description}</BodyText>}
          contentContainerStyle={{ gap: 16, padding: 24 }}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      )}
    </ScreenContainer>
  );
}
