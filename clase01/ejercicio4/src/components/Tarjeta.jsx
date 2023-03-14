import "./Tarjeta.css";

function Tarjeta({ nombre, publicacion, imagenURL, puntaje }) {
  let color;
  if (puntaje === "Buena") {
    color = "green";
  } else if (puntaje === "Regular") {
    color = "yellow";
  } else if (puntaje === "Mala") {
    color = "red";
  } else {
    color = "grey";
  }

  return (
    <div>
      <p className="TituloTarjeta">
        {nombre} ({publicacion})
      </p>
      <p
        style={{
          backgroundColor: color,
          margin: 0,
          padding: 10,
        }}
      >
        {puntaje}
      </p>
      <img src={imagenURL} alt="" width={300} height={500} />
    </div>
  );
}

export default Tarjeta;
