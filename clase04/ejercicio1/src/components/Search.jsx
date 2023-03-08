import React, { useState } from "react";
import axios from "axios";

const URL = "https://private.omdbapi.com/?apikey=bef9c583&t=";

function Search({ setMovie }) {
  const [nombrePelicula, setNombrePelicula] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const response = await axios.get(URL + nombrePelicula);
        setMovie(response.data);
      }}
    >
      <h2>Película</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Escribir titulo..."
        value={nombrePelicula}
        onChange={(e) => setNombrePelicula(e.target.value)}
      />
      <button className="btn btn-success mt-3">Buscar película</button>
    </form>
  );
}

export default Search;
