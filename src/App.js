import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [segundos, setsegundos] = useState(0);
  const [minutos, setminutos] = useState(0)
  const [horas, sethoras] = useState(0)
  useEffect(() => {
    let interval = setInterval(() => {
      if (segundos < 60) {
        setsegundos(segundos + 1);
      }

      if (segundos >= 60) {
        setsegundos(0);
        setminutos( minutos + 1)
      }

        if (minutos >= 60) {
          sethoras(horas + 1);
          setminutos(0);
        }
         

      }, 1000);
    return () => clearInterval(interval);
  });



  return (
    <div className="reloj">
      <div>
        <span id="icono"> <i className="bi bi-stopwatch"></i></span>
        <span id="horas">{horas}</span>
        <span className="tiempo">Horas</span>
      </div>
      <div>
        <span id="minutos">{minutos}</span>
        <span className="tiempo">Minutos</span>
      </div>
      <div>
        <span id="segundos">{segundos}</span>
        <span className="tiempo">Segundos</span>
      </div>

    </div>
  );
}

export default App;