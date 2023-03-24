import { CAMBIAR_NOMBRE } from "./constants";

const initialState = {
  nombre: "",
  apellido: "",
};

export function reducers(state = initialState, action) {
  if (action.type === CAMBIAR_NOMBRE) {
    return { ...state, nombre: action.payload };
  }

  return state;
}
