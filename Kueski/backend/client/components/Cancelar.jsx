import React, { useState, useEffect } from "react";

function Cancelar({searchIndex}) {
  const [isOpen, setIsOpen] = useState(false);
  
  async function getPageData() {
    const apiUrlEndpoint = `/api/deleteRequest?searchValue=${searchIndex}`;
    //console.log("URL de la API:", apiUrlEndpoint);
    fetch(apiUrlEndpoint);
    console.log("Exito!");
  } 

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Borrar Datos de Usuario
      </button>

      {isOpen &&(
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-700 rounded-lg p-8">
              <h4 className="text-white text-xl font-bold mb-4">Al presionar el boton de Borrar datos se borraran permanenetemente todos los datos.</h4>
               <h4 className="text-white text-xl font-bold mb-4">¿Estas seguro que quieres borrar todos los datos de identificación?</h4>
              <div>

              </div>
              <div><button
                onClick={() => {
                  getPageData();
                  setIsOpen(false);
                }}
                className="mt-8 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Borrar Datos de Identificación
              </button></div>
              
              <div><button
                onClick={() => setIsOpen(false)}
                className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancelar acción
              </button></div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cancelar;