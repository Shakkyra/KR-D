import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Actions = ({ onButtonClick, hasOneResult, user }) => {
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const handleButtonClick = (buttonName) => {
    onButtonClick(buttonName);
    if (hasOneResult) {
      const visualizer = document.querySelector('.visualizer');
      const { top, left, height } = visualizer.getBoundingClientRect();
      const actions = document.querySelector('.dropdown-bottom');
      const { height: actionsHeight } = actions.getBoundingClientRect();
      setMenuPosition({ top: top + height - actionsHeight, left });
    }
  }

  return (
    <div className="dropdown dropdown-bottom">
      <label tabIndex={0} className="btn m-1">Actions</label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        style={{
          zIndex: 9999,
          position: hasOneResult ? 'absolute' : 'initial',
          top: menuPosition.top,
          left: menuPosition.left,
        }}
      >
        <li>
          <a href={`ARCO/acceso/`}>
            <button onClick={() => handleButtonClick('Acceder')}>
              Acceder
            </button>
          </a>
        </li>
        <li>
          <Link href={`ARCO/rectificacion/`}>
            <button onClick={() => handleButtonClick('Rectificar')}>
              Rectificar
            </button>
          </Link>
        </li>
        <li>
          <Link href={`ARCO/cancelacion/`}>
            <button onClick={() => handleButtonClick('Cancelar')}>
              Cancelar
            </button>
          </Link>
        </li>
        <li>
          <Link href={`ARCO/oposicion/`}>
            <button onClick={() => handleButtonClick('Oponer')}>
              Oponer
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Actions;