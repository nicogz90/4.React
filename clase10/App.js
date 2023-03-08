import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Main from "./components/Main";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Welcome to my first React Native app
        </Text>
      </View>
      <Main />
      <View style={styles.footer}>
        <Text style={{ color: "white" }}>Made with React Native</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "light",
  },
  header: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    flex: 1,
    backgroundColor: "grey",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
