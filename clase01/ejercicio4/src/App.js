//import logo from "./logo.svg";
import "./App.css";
import Tarjeta from "./components/Tarjeta";

function App() {
  return (
    <div className="App">
      <Tarjeta
        nombre="Spider-man"
        publicacion="2019"
        imagenURL="https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/femme-fatale-spider-man-homecoming-2-jessica-drew.jpg"
        puntaje="Buena"
      />
      <Tarjeta
        nombre="Batman"
        publicacion="1989"
        imagenURL="https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png"
        puntaje="Regular"
      />
      <Tarjeta
        nombre="Batman & Robin"
        publicacion="1997"
        imagenURL="https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg"
        puntaje="No la vi aún"
      />
    </div>
  );
}

export default App;
