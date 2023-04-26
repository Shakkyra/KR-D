import React from "react";
import Actions from "./Actions";

const Visualizer = ({onButtonClick}) => {
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
                            <tr className="align-center">
                            <th scope="col" className="px-6 py-4">Id</th>
                            <th scope="col" className="px-6 py-4">Nombre</th>
                            <th scope="col" className="px-6 py-4">P. Apellido</th>
                            <th scope="col" className="px-6 py-4">S. Apellido</th>
                            <th scope="col" className="px-6 py-4">CURP</th>
                            <th scope="col" className="px-6 py-4">Telefono</th>
                            <th scope="col" className="px-6 py-4">Correo Electronico</th>
                            <th scope="col" className="px-6 py-4">Operaciones ARCO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />   
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Juan</td>
                            <td className="whitespace-nowrap px-6 py-4">Perez</td>
                            <td className="whitespace-nowrap px-6 py-4">Herrejon</td>
                            <td className="whitespace-nowrap px-6 py-4">LHR09173903</td>
                            <td className="whitespace-nowrap px-6 py-4">33 181 13 67</td>
                            <td className="whitespace-nowrap px-6 py-4">lily@gmail.com</td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <Actions onButtonClick={onButtonClick} />
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