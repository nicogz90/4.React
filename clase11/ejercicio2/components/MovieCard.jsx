import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

export default function MovieCard({ movie, cardWidth, gap }) {
  return (
    <TouchableOpacity onPress={() => alert(`movie ${movie.Title} selected`)}>
      <View style={{ width: cardWidth, margin: gap }}>
        <Image
          style={{ width: cardWidth, height: 150 }}
          source={{ uri: movie.Poster }}
        />
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {movie.Title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: "lightblue",
    padding: 5,
  },
});
