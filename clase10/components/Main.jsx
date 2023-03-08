import { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import titanic from "../assets/titanic.png";

export default function Main() {
  return (
    <View style={styles.main}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <TextInput
          style={{ borderWidth: 1, width: 200, padding: 10, borderRadius: 15 }}
          placeholder="Enter movie..."
        />
        <Button title="Search" />
      </View>
      {/* IMAGEN FIJA (EN LOS SIGUIENTES EJERCICIOS SE HACEN LLAMADAS A UNA API) */}
      <Image
        style={{ width: "80%", height: "80%" }}
        source={{
          uri: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 5,
    backgroundColor: "light",
    alignItems: "center",
  },
});
