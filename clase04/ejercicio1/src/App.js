import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Welcome from "./components/Welcome";
import Search from "./components/Search";

function App() {
  const [movie, setMovie] = useState(null);
  return (
    <div className="container m-4">
      <div className="row">
        <div className="col-3 bg-light border">
          <Search setMovie={setMovie} />
        </div>
        <div className="col-9 bg-light border">
          {!movie ? <Welcome /> : <Movie movie={movie} />}
        </div>
      </div>
    </div>
  );
}

export default App;
