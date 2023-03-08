import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Public } from "./components/Public";
import { Private } from "./components/Private";
import { RequiresAuth } from "./components/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/private"
          element={
            <RequiresAuth>
              <Private />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
