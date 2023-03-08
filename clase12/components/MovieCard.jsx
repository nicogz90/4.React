import { StyleSheet, Text, Image, View } from "react-native";
import { Link } from "react-router-native";

export default function MovieCard({ item, gap, cardWidth }) {
  return (
    <Link to={"/movies/" + item.imdbID}>
      <View style={{ width: cardWidth, margin: gap }}>
        <Image
          style={{ width: cardWidth, height: 200, borderRadius: 15 }}
          source={{ uri: item.Poster }}
        />
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: "white" }}>
          {item.Title}
        </Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({});
