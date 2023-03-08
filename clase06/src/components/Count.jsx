import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Count() {
  const contador = useSelector((state) => state.count.contador);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>
        Increment
      </button>

      <h1>{contador}</h1>

      <button onClick={() => dispatch({ type: "DECREMENT_COUNT" })}>
        Decrement
      </button>
    </div>
  );
}

export default Count;
