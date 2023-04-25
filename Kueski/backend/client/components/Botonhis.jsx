import React, { useState } from "react";
import Historial from '../components/Historial';

function App() {
  const [activeTab, setActiveTab] = useState(false);

  function handleButtonClick() {
    setActiveTab(!activeTab);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Abrir pestaña</button>
      {activeTab && (
        <Tab
          title="Mi pestaña"
          content="Este es el contenido de mi pestaña"
          active={activeTab}
        />
      )}
    </div>
  );
}

export default App;
