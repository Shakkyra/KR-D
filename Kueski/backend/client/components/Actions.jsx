import { useState } from 'react';

const ActionsButton = ({ onButtonClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative" onBlur={() => setIsOpen(false)} tabIndex="0">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        Actions
      </button>
      {isOpen && (
        <ul className="static z-20 bg-white shadow-md rounded-md py-2 mt-2 w-48">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <button onClick={() => onButtonClick('Acceder')}>Acceder</button>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <button onClick={() => onButtonClick('Rectificar')}>
              Rectificar
            </button>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <button onClick={() => onButtonClick('Cancelar')}>Cancelar</button>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <button onClick={() => onButtonClick('Oponer')}>Oponer</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ActionsButton;