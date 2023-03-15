import "./Carrito.css";
import React, { useState } from "react";

function Carrito({ producto }) {
  const [disponibles, setDisponibles] = useState(100);
  const [cantidad, setCantidad] = useState(0);
  const [agregados, setAgregados] = useState(0);
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    // La siguiente línea de código previene que se "envie" el formulario (y se recargue la página).
    e.preventDefault();
    if (disponibles < cantidad) {
      setError(true);
      return;
    }
    setError(false);
    setDisponibles(disponibles - cantidad);
    setCantidad(0);
    setAgregados(cantidad + agregados);
  };

  return (
    <div className="carrito">
      <h2 className="disponibles">
        {producto} (Disponibles: {disponibles})
      </h2>
      <form className="action" onSubmit={handleClick}>
        <input
          type="number"
          min={0}
          max={disponibles}
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))} // value must be converted to Number
        />
        <button>Agregar</button>
      </form>
      {!error && agregados === 0 && (
        <p className="vacio">No hay elementos agregados</p>
      )}
      {!error && agregados > 0 && (
        <p className="agregados">{agregados} elementos agregados</p>
      )}
      {error && <p className="error">No hay suficientes productos</p>}
      {/* To avoid showing something you don’t want in the UI, such as 0, that could mess up the layout, 
        it's better to use the JavaScript ternary operator instead. I.e., 
        condition ? <ConditionalComponent /> : null  */}
    </div>
  );
}

export default Carrito;
