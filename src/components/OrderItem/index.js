import { H3 } from "../../styles/globalStyles";
import { FlatList } from "react-native";
import { ProductCard } from "../ProductCard";
import { Container } from "./styles";

export function OrdeItem({ order }) {
  return (
    <Container>
      <H3>Total: R$ {order.total.toFixed(2).replace(".", ",")}</H3>
      <FlatList
        horizontal
        contentContainerStyle={{ gap: 16, paddingBlock: 10 }}
        data={order.cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard hideButtons product={item} />}
      />
    </Container>
  );
}
