import { useState } from "react";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  function agregarTarea() {
    if (texto.trim() === "") return;
    const nueva = { id: Date.now(), titulo: texto, hecha: false };
    setTareas([...tareas, nueva]);
    setTexto("");
  }

  return (
    <div className="app">
      <h1>Mi lista de tareas</h1>

      <div className="entrada">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe una tarea"
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul>
        {tareas.map((t) => (
          <li key={t.id}>
            <span>{t.titulo}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;