import { useLocation } from "../../contexts/LocationContext";
import { ScreenContainer } from "../../styles/globalStyles";

import MapView, { Marker } from "react-native-maps";

export default function Map({ navigation }) {
  const { location } = useLocation();

  return (
    <ScreenContainer>
      <MapView
        style={{ flex: 1, width: "100%" }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        />
      </MapView>
    </ScreenContainer>
  );
}
