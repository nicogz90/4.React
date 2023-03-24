import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./countReducer";
import { Provider } from "react-redux";

// Creamos el estado global STORE
const store = configureStore({
  reducer: { count: countReducer },
});

// Inyectamos la STORE en todo el arbol de componentes de la app (para quedar disponible en todos los componentes). Notar que debe hacerse en lo más alto de la jerarquía.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
