import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome.jsx";
import Title from "./components/Title.jsx";
import Subtitle from "./components/Subtitle.jsx";
import Description from "./components/Description.jsx";
import Person from "./components/Person.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Ejercicio 1
        <Welcome name="Nico" />
        Ejercicio 2
        <Title title="Titulo" />
        <Subtitle subtitle="Subtitulo" />
        <Description name="Nico" />
        Ejercicio 3
        <Person name="Nico" age={32} />
      </header>
    </div>
  );
}

export default App;
