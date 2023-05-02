import React, { useEffect, useState } from "react";
import Actions from "./Actions";

const Visualizer = ({ searchValue, onButtonClick }) => {
  const [dataResult, setDataResult] = useState([]);

  useEffect(() => {
    console.log("searchValue en Visualizer:", searchValue);
    async function getPageData() {
      const apiUrlEndpoint = `/api/getData2?searchValue=${searchValue}`;
      console.log("URL de la API:", apiUrlEndpoint);
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log("Datos devueltos por la API:", res.names);
      setDataResult(res.names);
    }
    getPageData();
  }, [searchValue]);

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
                      <th className="whitespace-nowrap px-6 py-4">ID</th>
                      <th className="whitespace-nowrap px-6 py-4">User</th>
                      <th className="whitespace-nowrap px-6 py-4">First Name</th>
                      <th className="whitespace-nowrap px-6 py-4">Last Name</th>
                      <th className="whitespace-nowrap px-6 py-4">Phone Number</th>
                      <th className="whitespace-nowrap px-6 py-4">Email</th>
                      <th className="whitespace-nowrap px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataResult &&
                      dataResult.length > 0 &&
                      dataResult.every(
                        (names) =>
                          names !== undefined && names.USER_ID !== undefined
                      ) &&
                      dataResult
                      .filter(
                        (names) =>
                          String(names.USER_ID).toLowerCase().includes(String(searchValue).toLowerCase()) ||
                          String(names.PHONE_NUMBER).toLowerCase().includes(String(searchValue).toLowerCase())
                      )
                        .map((names) => {
                          return (
                            <tr key={names.USER_ID} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                              <td className="whitespace-nowrap px-6 py-4">
                                {names.USER_ID}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {names.user}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {names.FIRST_LAST_NAME}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {names.SECOND_LAST_NAME}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {names.PHONE_NUMBER}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {names.EMAIL}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <Actions onButtonClick={onButtonClick} />
                              </td>
                            </tr>
                          );
                        })}
                    {dataResult &&
                      dataResult.length > 0 &&
                      dataResult.every(
                        (names) =>
                          names !== undefined && names.USER_ID !== undefined
                      ) &&
                      dataResult.filter(
                        (names) =>
                          String(names.USER_ID).toLowerCase().includes(String(searchValue).toLowerCase()) ||
                          String(names.PHONE_NUMBER).toLowerCase().includes(String(searchValue).toLowerCase())
                      ).length === 0 && (
                        <p>No se encontraron resultados.</p>)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
