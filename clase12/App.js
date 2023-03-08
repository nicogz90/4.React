import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeRouter, Routes, Route } from "react-router-native";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./views/Home";
import MovieDetails from "./views/MovieDetails";
import MovieSearch from "./views/MovieSearch";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NativeRouter>
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<MovieSearch />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
          </Routes>
        </NativeRouter>
      </SafeAreaView>
      <StatusBar barStyle="default" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});
