import "./App.css";
import Carrito from "./components/Carrito";

function App() {
  const productos = ["Galletas", "Revistas", "Refrescos"];
  return (
    <div className="App">
      {productos.map((product) => {
        return <Carrito key={product} producto={product} />;
      })}
    </div>
  );
}

export default App;
