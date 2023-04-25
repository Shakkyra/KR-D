import React, { useState } from "react";

function Historial(props) {
  const [active, setActive] = useState(false);

  return (
    <div className={`Historial ${active ? "active" : ""}`}>
      <div className="Historial-header" onClick={() => setActive(!active)}>
        <h2>{props.title}</h2>
        <button className="Historial-toggle">{active ? "Ocultar" : "Mostrar"}</button>
      </div>
      {active && (
        <div className="Historial-content">
       
          <p>Hola como estas</p>
        </div>
      )}
    </div>
  );
}

export default Historial;
