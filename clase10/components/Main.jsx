import { View, TextInput, Button, Image, StyleSheet } from "react-native";

export default function Main() {
  return (
    <View style={styles.main}>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <TextInput
          style={{
            borderWidth: 1,
            width: 200,
            paddingLeft: 10,
            marginRight: 10,
            borderRadius: 15,
          }}
          placeholder="Enter movie..."
        />
        <Button title="Search" />
      </View>
      {/* Imagen fija (en los siguientes ejercicios se hacen llamadas a una API) */}
      <Image
        style={{ width: "80%", height: "80%" }}
        // source={require("../assets/titanic.png")}
        source={{
          uri: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
});
