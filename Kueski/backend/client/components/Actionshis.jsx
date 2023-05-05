import React, { useState } from "react";
import Link from 'next/link';

const Actionshis = ({idrequest, onButtonClick, hasOneResult}) => {
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const handleButtonClick = (buttonName) => {
    //onButtonClick(buttonName);
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
      <label tabIndex={0} className="btn m-1">Ver más</label>
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
          <Link href={`ARCO/historial/?idrequest=${idrequest}`}>
            <button onClick={() => handleButtonClick('historial')}>
              historial
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Actionshis;