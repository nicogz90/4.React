import { StyleSheet, Text, View } from "react-native";
export default function Header() {
  return (
    <View style={styles.continer}>
      <Text style={styles.text}>Movie App</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  continer: {
    backgroundColor: "blue",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});
