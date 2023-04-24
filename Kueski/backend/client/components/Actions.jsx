import { useState } from 'react';

export default function ActionsButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (action) => {
    console.log(`Se seleccionó la opción: ${action}`);
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onBlur={() => setIsOpen(false)}
      tabIndex="0"
    >
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        Actions
      </button>
      {isOpen && (
        <ul className="static z-20 bg-white shadow-md rounded-md py-2 mt-2 w-48">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <button onClick={() => handleButtonClick('Acceder')}>
              Acceder
            </button>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <button onClick={() => handleButtonClick('Rectificar')}>
              Rectificar
            </button>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <button onClick={() => handleButtonClick('Cancelar')}>
              Cancelar
            </button>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <button onClick={() => handleButtonClick('Oponer')}>
              Oponer
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}