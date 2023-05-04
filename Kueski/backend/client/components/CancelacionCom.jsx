import React from "react";

import Cancelar from "./Cancelar.jsx";

const Cancelacion = ({searchIndex}) => {
    return(
        <div className="flex flex-col space-y-0">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900"> Cancelar el Usuario con el USER_ID {searchIndex}</h3>
            </div>
                <div className="px-4 py-3">
                    <Cancelar searchIndex={searchIndex}/>
                </div>
            </div>
                
    );
}

export default Cancelacion;