import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useParams } from "react-router-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Rating } from "react-native-ratings";

const API = "https://private.omdbapi.com/?apikey=bef9c583&i=";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(API + movieId);

        if (res.data.Response === "True") {
          setMovieData(res.data);
          setError(null);
        } else {
          setMovieData([]);
          setError(res.data.Error);
        }
      } catch (error) {
        setMovieData(null);
        setError(error.message);
      }
      setIsLoading(false);
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <View>
      {isLoading && (
        <Text
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
          }}
        >
          Loading...
        </Text>
      )}
      {movieData && !isLoading && (
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 15,
              borderBottomWidth: 1,
              borderBottomColor: "white",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>
              {movieData.Title} ({movieData.Year})
            </Text>
            <Rating
              style={{ marginBottom: 10 }}
              type="star"
              showRating={false}
              imageSize={25}
              tintColor="black"
              readonly
              startingValue={movieData.imdbRating / 2}
              fractions
            />
          </View>
          <ImageBackground source={{ uri: movieData.Poster }}>
            <ScrollView>
              <View style={{ padding: 10, alignItems: "center" }}>
                <Text style={styles.subtitle}>Director</Text>
                <Text style={styles.text}>{movieData.Director}</Text>
              </View>

              <View style={{ padding: 10, alignItems: "center" }}>
                <Text style={styles.subtitle}>Actors</Text>
                <Text style={styles.text}>{movieData.Actors}</Text>
              </View>

              <View style={{ padding: 10, alignItems: "center" }}>
                <Text style={styles.text}>{movieData.Plot}</Text>
              </View>

              <View style={{ padding: 10, alignItems: "center" }}>
                <Image
                  style={styles.image}
                  source={{ uri: movieData.Poster }}
                />
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 25,
    padding: 10,
  },
  subtitle: { backgroundColor: "black", color: "white", fontSize: 20 },
  text: { backgroundColor: "black", color: "white", borderBottomWidth: 1 },
  image: {
    width: 300,
    height: 400,
    borderRadius: 15,
  },
});
