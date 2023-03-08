import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ubicá tu bus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: "white", fontSize: 20 },
});
