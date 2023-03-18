function Movie({ movie }) {
  return (
    <div className="row">
      <div className="col-sm-4">
        <img
          src={movie?.Poster}
          alt="Imagen de la pelicula"
          className="img-fluid"
        />
      </div>
      <div className="col-sm-8">
        <h1>{movie?.Title}</h1>
        <h2>Director: {movie?.Director}</h2>
        <h3>Argumento</h3>
        <p>{movie?.Plot}</p>
        <h3>Actores</h3>
        <p>{movie?.Actors}</p>
        <h3>País</h3>
        <p>{movie?.Country}</p>
        <h3>Premios</h3>
        <p>{movie?.Awards}</p>
        <h3>Ratings:</h3>
        <ul>
          {movie?.Ratings?.map((rating) => {
            return (
              <li key={rating.Source}>
                {rating.Source} - {rating.Value}
              </li>
            );
          })}
        </ul>
        <hr />
        {movie?.WebSite !== "N/A" && (
          <a
            href={movie?.WebSite}
            id="btn-website"
            className="btn btn-outline-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir al sitio web
          </a>
        )}
      </div>
    </div>
  );
}

export default Movie;
