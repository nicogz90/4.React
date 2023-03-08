import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Movie app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  headerText: { color: "white", fontSize: 20, fontWeight: "bold" },
});
