import React, { useState, useEffect } from 'react';

const AccesoCom = ({searchIndex}) => {
    const [dataResult, setdataResult] = useState([]);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        async function getPageData(){
            const apiUrlEndpoint = `/api/getDataAcceso?searchValue=${searchIndex}`;
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            if (res.names && res.names.length > 0) {
                setdataResult(res.names[0]);
            } else {
                setError(true);
            }
        }
        getPageData();
    }, [searchIndex]);
  
    return(
        <div className="flex flex-col space-y-0">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Información Acceso</h3>
            </div>
            {error ? (
                <div>Error: No se encontraron datos para esta consulta.</div>
            ) : (
                <div className="mt-6 border-t border-blue-100">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campo</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-100">
                            {dataResult ? Object.entries(dataResult).map(([key, value]) => (
                                <tr key={key}>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{key}</td>
                                    <td className="px-4 py-3 text-sm text-gray-500">{typeof value === 'object' ? JSON.stringify(value) : value}</td>
                                </tr>
                            )) : null}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default AccesoCom;


  /*
  {dataResult ? dataResult.map((user, index) => (
                <React.Fragment key={index}>
                    {['USER_NAME', 'FIRST_LAST_NAME', 'SECOND_LAST_NAME', 'STATE_OF_BIRTH', 'BORN_DATE', 'NACIONALITY', 'ECONOMIC_ACTIVITY', 'CURP', 'EMAIL', 'PHONE_NUMER', 'COUNTRY', 'STATE', 'CITY', 'NEIGHBORHOOD', 'STREET', 'EXT_NUMBER', 'INT_NUMBER', 'ZIP_CODE', 'IDENTIFICATION_TYPE', 'IDENTIFICATION_NUMBER'].map(key => (
                    <div className="px-4 py-3" key={key}>
                        <dt className="text-sm font-medium leading-6 text-gray-900">{key}</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700">{user[key]}</dd>
                    </div>
                    ))}
                </React.Fragment>
                )) : null}
  */

/*
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
                            <dd className="mt-1 text-sm leading-6 text-gray-700">{names.USER_NAME}</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Primer Apellido</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.FIRST_LAST_NAME}</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Segundo Apellido</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.SECOND_LAST_NAME}</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Estado de Nacimiento</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.STATE_OF_BIRTH}</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de Nacimiento</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.BORN_DATE}</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Nacionalidad</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.NACIONALITY}</dd>
                        </div>                        

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Activida Economica</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.ECONOMIC_ACTIVITY}</dd>
                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">CURP</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.CURP}</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Correo electronico</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.EMAIL}</dd>
                        </div>

                        <div className ="px-4 py-3 sm:col-span-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Telefono</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.PHONE_NUMER}</dd>
                        </div>

                        <div className="px-4 py-3 sm:col-span-4">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Dirección</dt>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Pais</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.COUNTRY}</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Estado</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.STATE}</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Ciudad</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.CITY}</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Vecindario</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.NEIGHBORHOOD}</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Calle</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.STREET}</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Numero exterior</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.EXT_NUMBER}</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Numero Interior</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.INT_NUMBER} </dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">C.P.</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.ZIP_CODE}</dd>
                        </div>

                        <div className="px-4 py-3 sm:col-span-4">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Identificación</dt>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Tipo de Identificación</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.IDENTIFICATION_TYPE}</dd>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Numero de Identificación</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{names.IDENTIFICATION_NUMBER}</dd>
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
*/