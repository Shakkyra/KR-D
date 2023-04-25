import React from "react";

import Popup from "./Popup";
import Compartir from "./Compartir";


const Acceso = () => {
    return(
        <div className="flex flex-col space-y-0">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Información Acceso</h3>
            </div>
            <div className="mt-6 border-t border-blue-100">
                <dl className="divide-y divide-blue-100">
                    
                    <div className="sm:grid sm:grid-cols-4">

                        <div className="px-4 py-3 sm:col-span-4">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Información Usuarios</dt>
                        </div>
                        
                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Nombre</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700">Margot</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Primer Apellido</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Segundo Apellido</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Estado de Nacimiento</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de Nacimiento</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Nacionalidad</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
                        </div>                        

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Activida Economica</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">CURP</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Correo electronico</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot@gmail.com</dd>
                        </div>

                        <div className ="px-4 py-3 sm:col-span-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Telefono</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">33 181 74 15</dd>
                        </div>

                        <div className="px-4 py-3 sm:col-span-4">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Dirección</dt>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Pais</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Mexico</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Estado</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">33 181 74 15</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Ciudad</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">33 181 74 15</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Vecindario</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">33 181 74 15</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Calle</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">33 181 74 15</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Numero exterior</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">33 181 74 15</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Numero Interior</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">33 181 74 15</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">C.P.</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">33 181 74 15</dd>
                        </div>

                        <div className="px-4 py-3 sm:col-span-4">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Identificación</dt>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Tipo de Identificación</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">33 181 74 15</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Numero de Identificación</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">33 181 74 15</dd>
                        </div>

                        <div className="px-4 py-3">
                            <Compartir/>
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

export default Acceso

