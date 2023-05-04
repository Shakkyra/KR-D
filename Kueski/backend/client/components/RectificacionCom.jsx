import React from "react";
import { useEffect, useState} from "react";
import axios from 'axios';


const RectificacionCom = ({searchIndex}) => {
    const [dataResult, setdataResult] = useState([]);
    useEffect(() => {
        async function getPageData(){
          //const apiUrlEndpoint = `/api/getDataAcceso?searchValue=${searchIndex}`;
          const apiUrlEndpoint = `/api/getDataAcceso?searchValue=${searchIndex}`;
          
          const response = await fetch(apiUrlEndpoint);
          const res = await response.json();
          console.log(res.names);
          setdataResult(res.names);
        }
        //Corremos la funcion
        getPageData();
    }, []);

    const [nombre, setNombre] = useState('');
    const [PApellido, setPApellido] = useState('');
    const [SApellido, setSApellido] = useState('');
    const [FNacimiento, setFNacimiento] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');

    const enviarDatos = () => {
        axios.post('/api/updateData', { nombre, PApellido, SApellido, FNacimiento, nacionalidad })
        .then(res => console.log(res.data.message))
        .catch(err => console.log(err));
    };


    return(
        <form onSubmit={enviarDatos}>
             <div className="flex flex-col space-y-0">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Rectificación</h3>
            </div>
            <div className="mt-6 border-t border-blue-100">
                <dl className="divide-y divide-blue-100">
                    
                    <div className="sm:grid sm:grid-cols-6">

                    <div className="px-4 py-3 sm:col-span-6">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Inforamción Personal</dt>
                        </div>
                        
                        <div className="px-4 py-2 sm:col-span-2 sm:grid sm:grid-cols-2">                           
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Nombre</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="nombre" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Nombre">
                                </input>
                                <p>Resultado: {nombre}</p>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Primer Apellido</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="PApellido" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Primer Apellido">
                                </input>
                                <p>Resultado: {PApellido}</p>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Segundo Apellido</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="SApellido" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Segundo Apellido">
                                </input>
                                <p>Resultado: {SApellido}</p>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Fecha de Nacimiento</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="FNacimiento" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Fecha de Nacimiento">
                                </input>
                                <p>Resultado: {FNacimiento}</p>
                            </div>
                        </div>

                        <div className="px-4 py-3 pt-10">
                            <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Confirmar </button>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Cancelar </button>
                        </div>
                    </div>
                </dl>
            </div>
        </div>

        </form>
    )
}
export default RectificacionCom;