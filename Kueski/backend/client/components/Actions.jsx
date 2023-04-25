import React from "react";

const Actions = ({onButtonClick}) => {
    return(
        <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn m-1">Actions</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={() => onButtonClick('Acceder')}>Acceder</button></li>
                    <li><button onClick={() => onButtonClick('Rectificar')}>Rectificar</button></li>
                    <li><button onClick={() => onButtonClick('Cancelar')}>Cancelar</button></li>
                    <li><button onClick={() => onButtonClick('Oponer')}>Oponer</button></li>
                </ul>
        </div>
    );
}
export default Actions;