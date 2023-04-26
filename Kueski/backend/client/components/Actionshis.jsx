import React from "react";

const Actionshis = ({onButtonClick}) => {
    return(
        <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn m-1">Actions</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button onClick={() => onButtonClick('Reporte')}>Reporte</button></li>
                </ul>
        </div>
    );
}
export default Actionshis;