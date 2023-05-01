import React from "react";
import Actions from "./Actions";
import { useEffect, useState } from 'react';

const Visualizer = ({searchValue, onButtonClick}) => {
    const [dataResult, setdataResult] = useState([]);
    useEffect(() => {
        console.log("searchValue changed:", searchValue);
      }, [searchValue]);
    useEffect(() => {
        async function getPageData(){
          const apiUrlEndpoint = "http://localhost:3000/api/getData";
          const response = await fetch(apiUrlEndpoint);
          const res = await response.json();
          setdataResult(res.names);
        }
        getPageData();
    }, []);
    return (
        <div className="w-full col-span-1 relative lg:h-[70vh] h-[90vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
            <h1>Clients</h1>
            <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
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
                        <tbody>
  {console.log("before expression:", dataResult)}
  {dataResult &&
    dataResult.length > 0 &&
    (console.log("before every:", dataResult), true) &&
    dataResult.every((names) => {
      console.log("checking names:", names);
      return names !== undefined && names.user !== undefined;
    }) &&
    (console.log("after every:", dataResult), true) &&
    (console.log("before filter:", dataResult), true) &&
    dataResult
      .filter((names) => {
        console.log("filtering names:", names);
        return names.user.toLowerCase().includes(searchValue.toLowerCase());
      })
      .map((names) => {
        return (
          <tr
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800"
          >
            <td className="whitespace-nowrap px-6 py-4">{names.USER_ID}</td>
            <td className="whitespace-nowrap px-6 py-4">{names.user}</td>
            <td className="whitespace-nowrap px-6 py-4">
              {names.FIRST_LAST_NAME}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              {names.SECOND_LAST_NAME}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              {names.PHONE_NUMBER}
            </td>
            <td className="whitespace-nowrap px-6 py-4">{names.EMAIL}</td>
            <td className="whitespace-nowrap px-6 py-4">
              <Actions onButtonClick={onButtonClick} />
            </td>
          </tr>
        );
      })}
  {dataResult &&
    dataResult.length > 0 &&
    dataResult.every(
      (names) => names !== undefined && names.user !== undefined
    ) &&
    dataResult.filter((names) =>
      names.user.toLowerCase().includes(searchValue.toLowerCase())
    ).length === 0 && <p>No se encontraron resultados.</p>}
</tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Visualizer;

