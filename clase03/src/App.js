import "./App.css";
import Carrito from "./components/Carrito";

function App() {
  const productos = ["Galletas", "Revistas", "Refrescos"];
  return (
    <div className="App">
      {productos.map((producto) => {
        return <Carrito key={producto} producto={producto} />;
      })}
    </div>
  );
}

export default App;
