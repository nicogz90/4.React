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

  // Otra forma:
  /* switch (puntaje) {
    case "Buena":
      color = "green";
      break;
    case "Regular":
      color = "orange";
      break;
    case "Mala":
      color = "red";
      break;
    default:
      color = "gray";
      break;
  } */

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
        {puntaje || "No la vi aún"}
      </p>
      <img src={imagenURL} alt="" width={300} height={500} />
    </div>
  );
}

export default Tarjeta;
