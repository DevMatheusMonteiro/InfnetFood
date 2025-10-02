import { useLocation } from "../../contexts/LocationContext";
import { ScreenContainer } from "../../styles/globalStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import MapView, { Marker } from "react-native-maps";

const RESTAURANTS = [
  {
    id: 1,
    name: "Restaurante Sabor Carioca",
    address: "Rua da Carioca, 45 - Centro, Rio de Janeiro",
    menuItem: "Feijoada completa",
    latitude: -22.9083,
    longitude: -43.18,
  },
  {
    id: 2,
    name: "Boteco Central",
    address: "Av. Rio Branco, 120 - Centro, Rio de Janeiro",
    menuItem: "Bolinho de bacalhau",
    latitude: -22.9075,
    longitude: -43.1785,
  },
  {
    id: 3,
    name: "Pizzaria do Centro",
    address: "Rua Buenos Aires, 90 - Centro, Rio de Janeiro",
    menuItem: "Pizza portuguesa",
    latitude: -22.9068,
    longitude: -43.177,
  },
  {
    id: 4,
    name: "Churrascaria Imperial",
    address: "Rua do Ouvidor, 150 - Centro, Rio de Janeiro",
    menuItem: "Picanha na brasa",
    latitude: -22.9055,
    longitude: -43.1795,
  },
  {
    id: 5,
    name: "Café do Largo",
    address: "Praça XV, 10 - Centro, Rio de Janeiro",
    menuItem: "Café expresso com pão de queijo",
    latitude: -22.9028,
    longitude: -43.1748,
  },
  {
    id: 6,
    name: "Bistrô Carioca",
    address: "Rua da Assembleia, 200 - Centro, Rio de Janeiro",
    menuItem: "Filé mignon ao molho madeira",
    latitude: -22.9079,
    longitude: -43.1768,
  },
  {
    id: 7,
    name: "Hamburgueria do Centro",
    address: "Rua Sete de Setembro, 80 - Centro, Rio de Janeiro",
    menuItem: "Cheeseburger artesanal",
    latitude: -22.9059,
    longitude: -43.182,
  },
  {
    id: 8,
    name: "Cantina Italiana",
    address: "Rua México, 30 - Centro, Rio de Janeiro",
    menuItem: "Spaghetti à carbonara",
    latitude: -22.9088,
    longitude: -43.176,
  },
  {
    id: 9,
    name: "Sushi Centro",
    address: "Av. Presidente Vargas, 500 - Centro, Rio de Janeiro",
    menuItem: "Combinado de sushi",
    latitude: -22.906,
    longitude: -43.183,
  },
  {
    id: 10,
    name: "Restaurante Vegano Verde Vida",
    address: "Rua do Carmo, 25 - Centro, Rio de Janeiro",
    menuItem: "Strogonoff de cogumelos",
    latitude: -22.9035,
    longitude: -43.179,
  },
];

export default function Map({ navigation }) {
  const { location } = useLocation();

  return (
    <ScreenContainer>
      <MapView
        style={{ flex: 1, width: "100%" }}
        initialRegion={{
          latitude: -22.9068,
          longitude: -43.1769,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{ latitude: -22.9068, longitude: -43.1769 }}
          title={"Você"}
          style={{ color: "blue" }}
        >
          <MaterialCommunityIcons
            name="home-map-marker"
            size={40}
            color="black"
          />
        </Marker>

        {RESTAURANTS.map((r) => (
          <Marker
            key={r.id}
            coordinate={{ latitude: r.latitude, longitude: r.longitude }}
            title={r.name}
            description={r.address}
            onPress={() =>
              navigation.navigate("RestaurantDetails", { restaurant: r })
            }
          />
        ))}
      </MapView>
    </ScreenContainer>
  );
}
