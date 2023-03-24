import { CAMBIAR_NOMBRE } from "./constants";

export function cambiarNombre(nombre) {
  return { type: CAMBIAR_NOMBRE, payload: nombre };
}
