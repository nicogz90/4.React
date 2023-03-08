import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import * as Location from "expo-location";
import Notify from "./Notify";

export default function Main() {
  const [linea, setLinea] = useState(null);
  const [busCoordinates, setBusCoordinates] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [region, setRegion] = useState({
    latitude: currentLocation?.latitude || -34.909557,
    longitude: currentLocation?.longitude || -56.169695,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const myLocation = () => {
    if (!currentLocation) return;
    setRegion({
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
  };

  useEffect(() => {
    // pedir permisos de ubicacion
    // obtener y guardar ubicacion en estado
    const getLocation = async () => {
      setLoadingLocation(true);
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        alert("Permission to access location was denied");
        setLoadingLocation(false);
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLoadingLocation(false);
    };
    getLocation();
  }, []);

  const handleSearchBus = async () => {
    try {
      const res = await axios.post(
        "http://montevideo.gub.uy/buses/rest/stm-online",
        {
          empresa: 50,
          lineas: [linea],
        }
      );
      const coordinates = res.data.features.map((feature) => {
        return {
          latitude: feature.geometry.coordinates[1],
          longitude: feature.geometry.coordinates[0],
          id: feature.properties.id,
        };
      });
      setBusCoordinates(coordinates);
    } catch (error) {
      console.log(error);
    }
  };

  const intervalRef = useRef(null); // guardamos valor sin provocar que se actualice el componente (no sirve en este caso usar un useState)
  const getBusesInterval = () => {
    Keyboard.dismiss();
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(handleSearchBus, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Linea..."
          value={linea}
          onChangeText={setLinea}
          onSubmitEditing={getBusesInterval}
        />
        <Text style={{ position: "absolute", right: 0, top: 15 }}>🔎</Text>
      </View>
      <Button title="Buscar" onPress={getBusesInterval} disabled={!linea} />
      <Button title="Dónde estoy" onPress={myLocation} />
      <Notify title="Avisame en 5 segundos" seconds={5} />
      {!loadingLocation && (
        <MapView
          style={styles.map}
          /* initialRegion={{
            latitude: currentLocation?.latitude || -34.909557,
            longitude: currentLocation?.longitude || -56.169695,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }} */
          region={region}
          onRegionChangeComplete={setRegion}
        >
          <Marker pinColor="blue" coordinate={currentLocation} />
          {busCoordinates.map((coordinate) => {
            return <Marker key={coordinate.id} coordinate={coordinate} />;
          })}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", alignItems: "center" },
  input: {
    borderBottomWidth: 1,
    width: 120,
    height: 30,
    padding: 5,
    paddingRight: 20,
    marginVertical: 10,
  },
  map: { height: 300, width: "90%", marginTop: 20 },
});
