import "./App.css";
import Tarjeta from "./components/Tarjeta";

function App() {
  return (
    <div className="App">
      <Tarjeta nombrePelicula={"titanic"} />
      <Tarjeta nombrePelicula={"batman"} />
    </div>
  );
}

export default App;
