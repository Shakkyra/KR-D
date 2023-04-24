import React from "react";

const Visualizer = () => {
    return (
        <div className="w-full col-span-1 relative lg:h-[70vh] h-[90vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
            <div>

            </div>
            <h1>Clients</h1>
            <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        
                        <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                            <th scope="col" className="px-6 py-4">#</th>
                            <th scope="col" className="px-6 py-4">First</th>
                            <th scope="col" className="px-6 py-4">Last</th>
                            <th scope="col" className="px-6 py-4">Handle</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 font-bold">Acciones arco</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                              <div class="relative inline-block text-left">
                              <div>
                                <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                  Opciones
                                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                  </svg>
                                </button>
                              </div>
                              <div class="absolute right-0 z-10 hidden mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="py-1" role="none">
                                  <form method="POST" action="#" role="none">
                                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Acceso</button>
                                  </form>
                                  <form method="POST" action="#" role="none">
                                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Rectificación</button>
                                  </form>
                                  <form method="POST" action="#" role="none">
                                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Cancelación</button>
                                  </form>
                                  <form method="POST" action="#" role="none">
                                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Oposición</button>
                                  </form>
                                </div>
                              </div>
                              </div>
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 right-0">Bttn</a>
                            </td>
                            
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Bttn</a>
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Bttn</a>
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Bttn</a>
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Bttn</a>
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Bttn</a>
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Bttn</a>
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Bttn</a>
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Bttn</a>
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Bttn</a>
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2">
                                <a href="#" className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">Bttn</a>
                            </td>
                            </tr>
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

export default Visualizer