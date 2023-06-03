import axios from "axios";
import { useState } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useWindowDimensions,
  View,
} from "react-native";
import MovieCard from "./MovieCard";

const API = "https://private.omdbapi.com/?apikey=bef9c583&s=";

export default function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { width } = useWindowDimensions();
  const cardWidth = 100;
  const gap = 5;
  const numColumns = Math.floor(width / (cardWidth + 2 * gap));

  const handlePress = async () => {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      const res = await axios.get(API + search);
      if (res.data.Response === "True") {
        setMovies(res.data.Search);
        setError(null);
      } else {
        setError(res.data.Error);
        setMovies([]);
      }
    } catch (error) {
      setMovies(null);
      setError(error.message);
    }
    setIsLoading(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Movie..."
          style={styles.input}
          onSubmitEditing={handlePress}
        />
        <TouchableHighlight onPress={handlePress} style={styles.botton}>
          <Text style={styles.bottonText}>Search</Text>
        </TouchableHighlight>
      </View>

      {isLoading && (
        <Text style={{ textAlign: "center", padding: 15 }}>Loading...</Text>
      )}

      {!isLoading && movies && (
        /* FlatList is used to show a scrollable list of different data, but with similar structure.
        It is good to show a great qty of elements, since it only renders the visible ones on the screen (unlike ScrollView) */
        <FlatList
          contentContainerStyle={{ alignItems: "center" }}
          data={movies}
          renderItem={({ item }) => (
            <MovieCard movie={item} cardWidth={cardWidth} gap={gap} />
          )}
          key={numColumns}
          numColumns={numColumns}
          ListEmptyComponent={
            <View>
              <Text style={{ padding: 15 }}>No se encontraron resultados</Text>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 8 },
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "lightblue",
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
    backgroundColor: "white",
  },
  botton: {
    backgroundColor: "gray",
    borderRadius: 10,
  },
  bottonText: { color: "white", padding: 10 },
});
