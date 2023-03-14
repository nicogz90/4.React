import { useEffect, useState } from "react";
import axios from "axios";
import "./Tarjeta.css";

function Tarjeta({ nombrePelicula }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get("https://private.omdbapi.com/?apikey=bef9c583&t=" + nombrePelicula)
      .then((res) => {
        setMovie(res.data);
      });

    // const consultarPelicula = async () => {
    //   const result = await axios.get(
    //     "https://private.omdbapi.com/?apikey=bef9c583&t=" + nombrePelicula
    //   );
    //   setMovie(result.data);
    // };

    // consultarPelicula();
  }, [nombrePelicula]); // [] significa que se ejecuta el efecto 1 sola vez

  if (!movie) {
    return <div>Cargando pelicula...</div>;
  }

  const { Title, Year, imdbRating, Poster } = movie;
  let color = "red";
  let calification = "Mala";
  if (imdbRating > 7.5) {
    color = "green";
    calification = "Buena";
  }

  return (
    <div className="Card">
      <h3>
        {Title} ({Year})
      </h3>
      <p style={{ backgroundColor: color, padding: 5 }}>{calification}</p>
      <img src={Poster} alt={Title} width={300} height={500} />
    </div>
  );
}

export default Tarjeta;
