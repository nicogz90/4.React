import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

export default function Nav() {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.title}>Home</Text>
      </Link>
      <Link to="/search">
        <Text style={styles.title}>Search</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "center" },
  title: { padding: 20, color: "white" },
});
