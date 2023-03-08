import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Notifier from "./src/Notifier";

export default function App() {
  return (
    <View style={styles.container}>
      <Notifier />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
