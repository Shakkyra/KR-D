import React from "react";
import Actionshis from "./Actionshis";
import { useState, useEffect } from "react";

const Visualizerhis = ({searchValue, onButtonClick}) => {
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        console.log("searchValue en Visualizer:", searchValue);
        async function getPageData() {
        const apiUrlEndpoint = `/api/getArcoRequests`;
        //console.log("URL de la API:", apiUrlEndpoint);
        const response = await fetch(apiUrlEndpoint);
        const res = await response.json();
        //console.log("Datos devueltos por la API:", res.names);
        setDataResult(res.names);
        }
        getPageData();
    });

    return (
        <div className="w-full col-span-1 relative lg:h-[70vh] h-[90vh] m-auto p-4 border rounded-lg bg-white overflow-scroll z-10">
            <h1>Clients</h1>
            <div>
            <div className="flex flex-col z-10">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr className="align-center">
                            <th scope="col" className="px-6 py-4">ARCO ID</th>
                            <th scope="col" className="px-6 py-4">User ID</th>
                            <th scope="col" className="px-6 py-4">Accion ARCO</th>
                            <th scope="col" className="px-6 py-4">Nombre</th>
                            <th scope="col" className="px-6 py-4">P. Apellido</th>
                            <th scope="col" className="px-6 py-4">S. Apellido</th>
                            <th scope="col" className="px-6 py-4">Fecha</th>
                            <th scope="col" className="px-6 py-4">Información completa</th>        
                            </tr>
                        </thead>
                        <tbody>
                        {dataResult.map((result) => (
                            <tr key={result.ID_REQUEST} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                                <td className="whitespace-nowrap px-6 py-4">{result.ID_REQUEST}</td>
                                <td className="whitespace-nowrap px-6 py-4">{result.USER_ID}</td>
                                <td className="whitespace-nowrap px-6 py-4">{result.TYPE_REQUEST}</td>
                                <td className="whitespace-nowrap px-6 py-4">{result.USER_NAME}</td>
                                <td className="whitespace-nowrap px-6 py-4">{result.FIRST_LAST_NAME}</td>
                                <td className="whitespace-nowrap px-6 py-4">{result.SECOND_LAST_NAME}</td>
                                <td className="whitespace-nowrap px-6 py-4">{result.FECHA}</td>
                                <td className="whitespace-nowrap px-4 py-4">
                                    <Actionshis onButtonClick={onButtonClick} />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            <ul>

            </ul>
        </div>
    );
}

export default Visualizerhis