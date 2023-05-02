import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Actions = ({onButtonClick}) => {
    const handleButtonClick = (buttonName) => {
        onButtonClick(buttonName);
    }

    return(
        <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn m-1">Actions</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <ScrollLink to="Operations" smooth={true} onClick={() => handleButtonClick('Acceder')}>
                            Acceder
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="Operations" smooth={true} onClick={() => handleButtonClick('Rectificar')}>
                            Rectificar
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="Operations" smooth={true} onClick={() => handleButtonClick('Cancelar')}>
                            Cancelar
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="Operations" smooth={true} onClick={() => handleButtonClick('Oposicion')}>
                            Oponer
                        </ScrollLink>
                    </li>
                </ul>
        </div>
    );
}
export default Actions;