import { useDispatch, useSelector } from "react-redux";
import { cambiarNombre } from "../redux/actions";

export default function CambiarNombre() {
  const dispatch = useDispatch();
  const nombre = useSelector((state) => state.nombre);
  return (
    <div>
      <input
        type="text"
        value={nombre}
        placeholder="Ingresar/modificar nombre..."
        onChange={(e) => dispatch(cambiarNombre(e.target.value))}
      />
    </div>
  );
}
