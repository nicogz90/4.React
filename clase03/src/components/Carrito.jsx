import React, { useState } from "react";

function Carrito({ producto }) {
  const [disponibles, setDisponibles] = useState(100);
  const [cantidad, setCantidad] = useState(0);
  const [agregados, setAgregados] = useState(0);
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (disponibles >= cantidad) {
      setDisponibles(disponibles - cantidad);
      setCantidad(0);
      setAgregados(cantidad);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div>
        <h2>
          {producto} (Disponibles: {disponibles})
        </h2>
        <form className="action" onSubmit={handleClick}>
          <input
            type="number"
            min={0}
            max={disponibles}
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
          <button>Agregar</button>
        </form>
        {!error && <p>{agregados} elementos agregados</p>}
        {error && <p>No hay suficientes productos</p>}
      </div>
    </>
  );
}

export default Carrito;
