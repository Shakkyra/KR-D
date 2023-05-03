import React from "react";

import Cancelar from "./Cancelar.jsx";
import Popup from "./Popup";


const Cancelacion = () => {
    return(
        <div className="flex flex-col space-y-0">
            <div className="px-4 sm:px-0">
                <h3 className=" p-4 text-base font-semibold leading-7 text-gray-900">    Cancelar</h3>
            </div>
            <div className="mt-6 border-t border-blue-100">
                <dl className="divide-y divide-blue-100">
                    
                    <div className="sm:grid sm:grid-cols-4">
                        
                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Nombre de Usuario</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700">Margot</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Primer Apellido</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Segundo Apellido</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Tatcher</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Id de Usuario</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">A00571180</dd>
                        </div>

                        <div className="px-4 py-3">
                            <Cancelar/>
                        </div>

                        <div className="px-4 py-3">
                            <Popup/>
                        </div>

                        <div className="px-4 py-3">
                        </div>

                    </div>
                </dl>
            </div>
        </div>
    );
}

export default Cancelacion