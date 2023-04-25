import React, { useState } from "react";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Crear Historial
      </button>

      {isOpen &&(
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-700 rounded-lg p-8">
              <h2 className="text-white text-xl font-bold mb-4">Ventana emergente</h2>
              <p className="text-white">Contenido de la ventana emergente.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cerrar ventana emergente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;