import React,{useState, useEffect} from "react";
import Popup from "./Popup";
import axios from "axios";

const Oposicion = ({searchIndex}) => {
    const [dataResult, setdataResult] = useState([]);
    
    useEffect(() => {
      async function getPageData(){
        const apiUrlEndpoint = `/api/getDataOposicion?searchValue=${searchIndex}`;
        const response = await fetch(apiUrlEndpoint);
        const res = await response.json();
        console.log(res.names);
        setdataResult(res.names);
      }
      getPageData();
    }, [searchIndex]);

    const [oposicion1, setOposicion1] = useState(dataResult.OPPOSITION_TYPE_1);

    const putDatos = () => {
        axios.post('/api/putArcoSingleOposicion', {
            _id: searchIndex,
            _oposicion1: oposicion1,
        })
        .then(res => console.log(res.data.message))
        .catch(err => console.log(err));
    };
    return(
        <div className="flex flex-col space-y-0">
            <div className="px-4 sm:px-0">
                <h3 className="p-4 text-base font-semibold leading-7 text-gray-900">Selecciona las opciones disponibles</h3>
            </div>
            <form onSubmit={putDatos}>
                <div className="mt-6 border-t border-blue-100">
                    <dl className="divide-y divide-blue-100">
                        
                        <div className="sm:grid sm:grid-cols-4">

                            <div className="px-4 py-3 sm:col-span-4">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Primarias - Finalidad de uso de datos: Prestación de servicios</dt>

                            </div>
                            {dataResult.map((options, index)=>(
                                <React.Fragment key={index}>
                                    <div className="px-4 py-3">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Desea la oposicion de sus datos</dt>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" onChange={(event)=>setOposicion1(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_1===1} class="sr-only peer"></input>
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                    </div>

                                    <div className="px-4 py-3">
                                        <button type="submit" 
                                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                            Confirmar cambios </button>
                                    </div>

                                    <div className="px-4 py-3">
                                        <button type="button" 
                                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                            Regresar </button>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </dl>
                </div>
            </form>
        </div>
    );
}

export default Oposicion;
