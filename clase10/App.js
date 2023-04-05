import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Main from "./components/Main";

export default function App() {
  return (
    /* react-native-safe-area-context provides a flexible API for accessing device safe area inset information. 
    This allows you to position your content appropriately around notches, status bars, home indicators, and other such device and operating system interface elements. 
    It also provides a SafeAreaView component that you can use in place of View to automatically inset your views to account for safe areas. */
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Welcome to my first React Native app
        </Text>
      </View>
      {/* MAIN */}
      <Main />
      {/* FOOTER */}
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
    backgroundColor: "gray",
  },
  header: {
    height: 80,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    height: 60,
    backgroundColor: "gray",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
