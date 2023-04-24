import React from "react";
//Importar sql
import { useEffect, useState } from 'react';

const Visualizer2 = () => {
    const [dataResult, setdataResult] = useState([]);
  //funcion para hacer fetch y llenar el array
  useEffect(() => {
    async function getPageData(){
      const apiUrlEndpoint = "http://localhost:3000/api/getData";
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.names);
      setdataResult(res.names);
    }
    //Corremos la funcion
    getPageData();
    //console.log("HOLA DESDE VISUALIZER3.JSX");
    }, []);
    return (
        <div className="overflow-x-auto bg-white">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 font-bold">ID</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 font-bold">Nombre</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 font-bold">Apellido materno</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 font-bold">Apellido paterno</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 font-bold">Numero telefonico</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 font-bold">Correo electronico</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 font-bold">Acciones arco</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
      
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">0</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">ExName</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">ExLFName</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">ExLSName</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">ExPhNo</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">ExEmail</td>
              <td className="whitespace-nowrap px-4 py-2">
                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">ExBttn</a>
              </td>
            </tr>

              
            </tbody>
        </table>
        </div>
    );
} 
export default Visualizer2;