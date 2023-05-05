import React from 'react';
import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`An error occurred while fetching data: ${res.statusText}`);
  }
  return res.json();
};

const HistorialCom = ({ searchIndex }) => {
  console.log('AccesoCom: searchIndex:', searchIndex);

  const apiUrlEndpoint = `/api/getDataHistorial?searchValue=${searchIndex}`;
  const { data, error } = useSWR(apiUrlEndpoint, fetcher);

  console.log('AccesoCom: data:', data);
  console.log('AccesoCom: error:', error);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  const dataResult = data.names && data.names.length > 0 && data.names[0].length > 0 ? data.names[0][0] : null;

  console.log('AccesoCom: dataResult:', dataResult);

  if (!dataResult) {
    return <div>Error: No se encontraron datos para esta consulta.</div>;
  }

  return (
    <div className="flex flex-col space-y-0">
      <div className="px-4 sm:px-0">
        <h3 className="p-4 text-base font-semibold leading-7 text-gray-900">Información Acceso</h3>
      </div>
      <div className="mt-6 border-t border-blue-100">
        <table className="w-full">
          <tbody className="divide-y divide-blue-100">
            {Object.keys(dataResult).map((key) => (
              <tr key={key}>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{key}:</td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {typeof dataResult[key] === 'object' ? JSON.stringify(dataResult[key]) : dataResult[key]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistorialCom;