import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 20 },
});
