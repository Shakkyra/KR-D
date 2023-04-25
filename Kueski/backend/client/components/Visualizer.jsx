import React from "react";
import Actions from "./Actions";
import Actions2 from "./Actions2";

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
                            <th scope="col" className="px-6 py-4">#</th>
                            <th scope="col" className="px-6 py-4">First</th>
                            <th scope="col" className="px-6 py-4">Last</th>
                            <th scope="col" className="px-6 py-4">Handle</th>
                            <th scope="col" className="px-6 py-4">Operaciones ARCO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions2 onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions onButtonClick={onButtonClick} />   
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <Actions onButtonClick={onButtonClick} />
                            </td>
                            </tr>
                            <tr
                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 gray:hover:bg-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                            <td className="whitespace-nowrap px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap px-6 py-4">Otto</td>
                            <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            <td className="whitespace-nowrap px-4 py-2 flex items-center justify-center" style={{ display: 'flex', alignItems: 'center' }}>
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