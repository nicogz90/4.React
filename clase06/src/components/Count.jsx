import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Count() {
  const contador = useSelector((state) => state.count.contador);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="counter">
        <button onClick={() => dispatch({ type: "DECREMENT_COUNT" })}>-</button>
        <h1>{contador}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>+</button>
      </div>

      <div className="set-count">
        <button onClick={() => dispatch({ type: "SET_COUNT", payload: value })}>
          Set Count
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
}

export default Count;
