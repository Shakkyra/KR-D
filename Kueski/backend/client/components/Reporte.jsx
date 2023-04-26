import React from "react";


const Reporte = () => {
    return(
        <div className="flex flex-col space-y-0">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Reporte de Accion ARCO</h3>
            </div>
            <div className="mt-6 border-t border-blue-100">
                <dl className="divide-y divide-blue-100">
                    
                    <div className="sm:grid sm:grid-cols-4">
                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Id</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700">1</dd>
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
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Tatcher</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Accion ARCO</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Acceso</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Fecha</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">25/04/2023</dd>
                        </div>

                        <div className= "px-4 py-3 sm:col-span-4">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Valor previo</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700">-----</dd>
                        </div>

                        <div className="px-4 py-3 sm:col-span-4">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Valor nuevo</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700">-----</dd>
                        </div>

                        <div className="px-4 py-3 sm:col-span-4">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Commentarios</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700">Accion de acceso realizada con exito</dd>
                        </div>

                        <div className="px-4 py-3">
                        </div>

                    </div>
                </dl>
            </div>
        </div>
    );
}

export default Reporte

