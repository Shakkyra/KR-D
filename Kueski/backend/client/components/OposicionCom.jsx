import React,{useState, useEffect} from "react";
import Popup from "./Popup";
import axios from "axios";

const Oposicion = ({searchIndex}) => {
    const [dataResult, setdataResult] = useState([]);
    
    useEffect(() => {
      async function getPageData(){
        const apiUrlEndpoint = '/api/putArcoOposicion';
        const response = await fetch(apiUrlEndpoint);
        const res = await response.json();
        console.log(res.names);
        setdataResult(res.names);
      }
      getPageData();
    }, [searchIndex]);

    const [oposicion1, setOposicion1] = useState();
    const [oposicion2, setOposicion2] = useState();
    const [oposicion3, setOposicion3] = useState();
    const [oposicion4, setOposicion4] = useState();
    const [oposicion5, setOposicion5] = useState();
    const [oposicion6, setOposicion6] = useState();
    const [oposicion7, setOposicion7] = useState();
    const [oposicion8, setOposicion8] = useState();
    const [oposicion9, setOposicion9] = useState();
    const [oposicion10, setOposicion10] = useState();
    const [oposicion11, setOposicion11] = useState();
    const [oposicion12, setOposicion12] = useState();
    const [oposicion13, setOposicion13] = useState();
    const [oposicion14, setOposicion14] = useState();
    const [oposicion15, setOposicion15] = useState();
    const [oposicion16, setOposicion16] = useState();
    const [oposicion17, setOposicion17] = useState();

    const putDatos = () => {
        axios.post('/api/putArcoOposicion', {
            _id: searchIndex,
            _oposicion1: oposicion1,
            _oposicion2: oposicion2,
            _oposicion3: oposicion3,
            _oposicion4: oposicion4,
            _oposicion5: oposicion5,
            _oposicion6: oposicion6,
            _oposicion7: oposicion7,
            _oposicion8: oposicion8,
            _oposicion9: oposicion9,
            _oposicion10: oposicion10,
            _oposicion11: oposicion11,
            _oposicion12: oposicion12,
            _oposicion13: oposicion13,
            _oposicion14: oposicion14,
            _oposicion15: oposicion15,
            _oposicion16: oposicion16,
            _oposicion17: oposicion17,
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
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Identificación del solicitante y/o cliente, según sea el caso.</dt>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" name="oposicion1" onChange={(event)=>setOposicion1(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_1===1} class="sr-only peer"></input>
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                    </div>
                                    <p>{console.log(oposicion1)}</p>
                                    <p>{console.log(oposicion2)}</p>
                                    <p>{console.log(oposicion3)}</p>
                                    <div className="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Integración del expediente de información de nuestro cliente.</dt>
                                
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion2" onChange={(event)=>setOposicion2(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_2===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>


                            </div>

                            <div className="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Prestación de los servicios y/o comercialización de los bienes de que se trate.</dt>
                                
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion3" onChange={(event)=>setOposicion3(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_3===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>

                            </div>

                            <div className="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Gestión, control, administración y procesamiento de las solicitudes del solicitante y/o cliente.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion4" onChange={(event)=>setOposicion4(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_4===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        </div>                        

                            <div className="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Gestión, control, administración, ejecución y cumplimiento del contrato celebrado con el cliente conforme a la solicitud correspondiente.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion5" onChange={(event)=>setOposicion5(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_5===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        </div>

                            <div className="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Gestión, control y administración de la cobranza administrativa (a través de cualquier medio de contacto otorgado en la solicitud), extrajudicial y, en su caso, judicial derivada de los servicios proporcionados por Kueski.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion6" onChange={(event)=>setOposicion6(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_6===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        </div>

                            <div className ="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Investigación de cambios en el perfil transaccional del cliente.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion7" onChange={(event)=>setOposicion7(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_7===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        </div>

                            <div className ="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Cumplimiento a obligaciones de carácter fiscal o comercial.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion8" onChange={(event)=>setOposicion8(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_8===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        </div>

                            <div className="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Atención de consultas, dudas, aclaraciones o quejas del cliente.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion9" onChange={(event)=>setOposicion9(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_9===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div className ="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Estadística y registro histórico de usuarios y clientes.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion10" onChange={(event)=>setOposicion10(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_10===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        </div>

                            <div className ="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Creación, mantenimiento y entrenamiento de los modelos de riesgo predictivos de Kueski.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion11" onChange={(event)=>setOposicion11(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_11===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        </div>

                            <div className ="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Mantener la seguridad de la información y de la operación.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion12" onChange={(event)=>setOposicion12(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_12===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        </div>

                            <div className ="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Protección ante casos de robo de identidad.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion13" onChange={(event)=>setOposicion13(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_13===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        </div>

                            <div className="px-4 py-3 sm:col-span-4">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Secundarias - Finalidad de uso de datos: comercial, mkt, testimonial.</dt>
                            </div>

                            <div className ="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Fines mercadotécnicos, publicitarios y/o de prospección comercial.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion14" onChange={(event)=>setOposicion14(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_14===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        </div>

                            <div className ="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Otorgamiento de estímulos o reconocimientos a clientes, cuando participen en nuestras campañas publicitarias, mercadológicas o comerciales.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion15" onChange={(event)=>setOposicion15(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_15===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>

                            <div className ="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Uso de imágenes y testimonios de clientes y/o usuarios para fines publicitarios y de ofertas comerciales referentes a productos y/o servicios ofrecidos o relacionados con productos y/o servicios contratados.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion16" onChange={(event)=>setOposicion16(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_16===1} class="sr-only peer"></input>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>                        
                                </div>

                            <div className ="px-4 py-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Mejoras en el servicio de atención y trato con el cliente.</dt>
                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="oposicion17" onChange={(event)=>setOposicion17(event.target.checked)} defaultChecked={options.OPPOSITION_TYPE_17===1} class="sr-only peer"></input>
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
/*
import React,{useState, useEffect} from "react";
import Popup from "./Popup";

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
    return(
        <div className="flex flex-col space-y-0">
            <div className="px-4 sm:px-0">
                <h3 className="p-4 text-base font-semibold leading-7 text-gray-900">Selecciona las opciones disponibles</h3>
            </div>
            <div className="mt-6 border-t border-blue-100">
                <dl className="divide-y divide-blue-100">
                    
                    <div className="sm:grid sm:grid-cols-4">

                        <div className="px-4 py-3 sm:col-span-4">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Primarias - Finalidad de uso de datos: Prestación de servicios</dt>

                        </div>
                        
                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Identificación del solicitante y/o cliente, según sea el caso.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" checked={dataResult.OPPOSITION_TYPE===1} class="sr-only peer">{console.log(dataResult.OPPOSITION_TYPE_1)}</input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>

                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Integración del expediente de información de nuestro cliente.</dt>
                            
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>

                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Prestación de los servicios y/o comercialización de los bienes de que se trate.</dt>
                            
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>

                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Gestión, control, administración y procesamiento de las solicitudes del solicitante y/o cliente.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>                        

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Gestión, control, administración, ejecución y cumplimiento del contrato celebrado con el cliente conforme a la solicitud correspondiente.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Gestión, control y administración de la cobranza administrativa (a través de cualquier medio de contacto otorgado en la solicitud), extrajudicial y, en su caso, judicial derivada de los servicios proporcionados por Kueski.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Investigación de cambios en el perfil transaccional del cliente.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Cumplimiento a obligaciones de carácter fiscal o comercial.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Atención de consultas, dudas, aclaraciones o quejas del cliente.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Estadística y registro histórico de usuarios y clientes.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Creación, mantenimiento y entrenamiento de los modelos de riesgo predictivos de Kueski.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Mantener la seguridad de la información y de la operación.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Protección ante casos de robo de identidad.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className="px-4 py-3 sm:col-span-4">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Secundarias - Finalidad de uso de datos: comercial, mkt, testimonial.</dt>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Fines mercadotécnicos, publicitarios y/o de prospección comercial.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Otorgamiento de estímulos o reconocimientos a clientes, cuando participen en nuestras campañas publicitarias, mercadológicas o comerciales.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Uso de imágenes y testimonios de clientes y/o usuarios para fines publicitarios y de ofertas comerciales referentes a productos y/o servicios ofrecidos o relacionados con productos y/o servicios contratados.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        
                            </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Mejoras en el servicio de atención y trato con el cliente.</dt>
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"></input>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        
                            </div>

                        <div className="px-4 py-3">
                            <button type="button" 
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                 Confirmar cambios </button>
                        </div>

                        <div className="px-4 py-3">
                            <button type="button" 
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                 Regresar </button>
                        </div>

                        <div className="px-4 py-3">
                            <Popup/>
                        </div>

                    </div>
                </dl>
            </div>
        </div>
    );
}

export default Oposicion;

*/