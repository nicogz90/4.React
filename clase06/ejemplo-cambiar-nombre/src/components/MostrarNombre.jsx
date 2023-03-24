import { useSelector } from "react-redux";

export default function MostrarNombre() {
  const nombre = useSelector((state) => state.nombre);

  return (
    <p>
      <strong> Nombre: </strong>
      {nombre}
    </p>
  );
}
