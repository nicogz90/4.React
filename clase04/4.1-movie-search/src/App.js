import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Welcome from "./components/Welcome";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

function App() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="bg-light border p-3">
            <Search
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setMovie={setMovie}
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="bg-light border p-3">
            <MovieResult isLoading={isLoading} movie={movie} />
          </div>
          {/* {!isLoading && !movie && <Welcome />}
          {isLoading && <div>Buscando película...</div>}
          {!isLoading && movie && movie.Response === "False" && <NotFound />}
          {!isLoading && movie && movie.Response === "True" && (
            <Movie movie={movie} />
          )} */}
        </div>
      </div>
    </div>
  );
}

// Podemos crear un componente para simplificar el código jsx
function MovieResult({ isLoading, movie }) {
  if (isLoading) return <div>Buscando película...</div>;

  if (!movie) return <Welcome />;

  if (movie.Response === "True") return <Movie movie={movie} />;

  return <NotFound />;
}

export default App;
