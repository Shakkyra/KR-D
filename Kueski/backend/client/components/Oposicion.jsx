import React from "react";
import Popup from "./Popup";

const Oposicion = () => {
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
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>

                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Integración del expediente de información de nuestro cliente.</dt>
                            
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>

                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Prestación de los servicios y/o comercialización de los bienes de que se trate.</dt>
                            
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>

                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Gestión, control, administración y procesamiento de las solicitudes del solicitante y/o cliente.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>                        

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Gestión, control, administración, ejecución y cumplimiento del contrato celebrado con el cliente conforme a la solicitud correspondiente.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Gestión, control y administración de la cobranza administrativa (a través de cualquier medio de contacto otorgado en la solicitud), extrajudicial y, en su caso, judicial derivada de los servicios proporcionados por Kueski.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Investigación de cambios en el perfil transaccional del cliente.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Cumplimiento a obligaciones de carácter fiscal o comercial.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Atención de consultas, dudas, aclaraciones o quejas del cliente.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Estadística y registro histórico de usuarios y clientes.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Creación, mantenimiento y entrenamiento de los modelos de riesgo predictivos de Kueski.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Mantener la seguridad de la información y de la operación.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Protección ante casos de robo de identidad.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className="px-4 py-3 sm:col-span-4 mt-12">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Secundarias - Finalidad de uso de datos: comercial, mkt, testimonial.</dt>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Fines mercadotécnicos, publicitarios y/o de prospección comercial.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Otorgamiento de estímulos o reconocimientos a clientes, cuando participen en nuestras campañas publicitarias, mercadológicas o comerciales.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Uso de imágenes y testimonios de clientes y/o usuarios para fines publicitarios y de ofertas comerciales referentes a productos y/o servicios ofrecidos o relacionados con productos y/o servicios contratados.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>                        
                            </div>

                        <div className ="px-4 py-3">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Mejoras en el servicio de atención y trato con el cliente.</dt>
                            <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"></input>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
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

export default Oposicion

