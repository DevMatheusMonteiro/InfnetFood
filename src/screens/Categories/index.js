import { useEffect, useState, useCallback } from "react";
import { useToast } from "../../contexts/ToastContext";
import { fetchCategories } from "../../services/theMealDbService";
import { ScreenContainer, H1 } from "../../styles/globalStyles";
import { FlatList } from "react-native";
import { CategoryCard } from "../../components/CategoryCard";
import { ActivityIndicator } from "react-native";

export default function Categories({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState([]);
  const { notify } = useToast();

  const loadCategories = useCallback(async (isRefreshing = false) => {
    try {
      if (!isRefreshing) setLoading(true);

      const res = await fetchCategories();
      const mappedCategories = res.categories.map((c) => ({
        id: c.idCategory,
        name: c.strCategory,
        image: c.strCategoryThumb,
        description: c.strCategoryDescription,
      }));

      setCategories(mappedCategories);

      if (isRefreshing) {
        notify.info("Categorias atualizadas com sucesso!");
      }
    } catch (error) {
      console.error(error);
      notify.error("Erro!", "Erro ao carregar lista de categorias!");
    } finally {
      if (isRefreshing) {
        setRefreshing(false);
      } else {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    loadCategories(true);
  }, [loadCategories]);

  return (
    <ScreenContainer>
      <H1 style={{ paddingHorizontal: 24 }}>Categorias</H1>
      {loading ? (
        <ActivityIndicator size={80} style={{ flex: 1 }} />
      ) : (
        <FlatList
          contentContainerStyle={{ gap: 16, padding: 24 }}
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard
              category={item}
              onPress={() => notify.success("Clicado")}
            />
          )}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      )}
    </ScreenContainer>
  );
}
