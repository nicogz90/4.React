import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Keyboard,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import axios from "axios";

const API = "https://private.omdbapi.com/?apikey=bef9c583&t=";

export default function Main() {
  const { width } = useWindowDimensions();
  const [search, setSearch] = useState("");
  const [posterUrl, setPosterUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePress = async () => {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      const res = await axios.get(API + search);

      if (res.data.Response === "True") {
        setPosterUrl(res.data.Poster);
        setError(false);
      } else {
        setPosterUrl("");
        setError(res.data.Error);
      }
    } catch (error) {
      setPosterUrl(null);
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.main}>
      <View
        style={{
          flexDirection: "row",
          padding: 15,
        }}
      >
        <TextInput
          style={{ borderWidth: 1, width: 200, padding: 5, borderRadius: 15 }}
          placeholder="Enter movie..."
          value={search}
          onChangeText={(text) => {
            setSearch(text);
          }}
          onSubmitEditing={handlePress}
        />
        <Button title="Search" onPress={handlePress} />
      </View>
      <ScrollView>
        {isLoading && <Text style={styles.isLoading}>Loading...</Text>}
        {error && <Text style={styles.error}>{error}</Text>}
        {posterUrl && (
          <Image
            source={{ uri: posterUrl }}
            style={{ width: width - 50, height: 600, resizeMode: "stretch" }}
          />
        )}
        {posterUrl === null && <Text style={styles.noData}>No data</Text>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 6,
    backgroundColor: "gray",
    alignItems: "center",
  },
  isLoading: { color: "white", textAlign: "center" },
  error: {
    color: "white",
    backgroundColor: "red",
    textAlign: "center",
    width: "100%",
    padding: 20,
  },
  noData: {
    color: "white",
    backgroundColor: "orange",
    textAlign: "center",
    width: "100%",
    padding: 20,
  },
});
