import React from "react";

const Visualizer2 = () => {
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
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                John Doe
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </a>
              </td>
            </tr>
      
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Jane Doe
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </a>
              </td>
            </tr>
      
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Gary Barlow
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                    View
                </a>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    );
} 
export default Visualizer2;