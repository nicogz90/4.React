const initialState = { contador: 0 };

function countReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { ...state, contador: state.contador + 1 };
    case "DECREMENT_COUNT":
      return { ...state, contador: state.contador - 1 };
    case "SET_COUNT":
      return { ...state, contador: action.payload };
    default:
      return state;
  }
}

export { countReducer };
