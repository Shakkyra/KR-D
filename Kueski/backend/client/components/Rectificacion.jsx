import React,{useState} from "react";

const Rectificacion = () => {
    const [nombre, setNombre] = useState('');
    const [PApellido, setPApellido] = useState('');
    const [SApellido, setSApellido] = useState('');
    const [FNacimiento, setFNacimiento] = useState('');
    const [nacionalidad, setNacionalidad] = useState('');
    const [ENacimiento, setENacimiento] = useState('');
    const [Aeconomica, setAeconomica] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [curp,setCurp] = useState('');

    return(
        <form onSubmit={ev => {
            ev.preventDefault();
            setNombre(ev.target.nombre.value);
            setPApellido(ev.target.PApellido.value);
            setSApellido(ev.target.SApellido.value);
            setFNacimiento(ev.target.FNacimiento.value);
            setNacionalidad(ev.target.nacionalidad.value);
            setENacimiento(ev.target.ENacimiento.value);
            setAeconomica(ev.target.Aeconomica.value);
            setTelefono(ev.target.telefono.value);
            setCorreo(ev.target.correo.value);
            setCurp(ev.target.curp.value);
        }}>
            <div className="flex flex-col space-y-0">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Rectificación</h3>
            </div>
            <div className="mt-6 border-t border-blue-100">
                <dl className="divide-y divide-blue-100">
                    
                    <div className="sm:grid sm:grid-cols-6">

                    <div className="px-4 py-3 sm:col-span-6">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Información Personal</dt>
                        </div>
                        
                        <div className="px-4 py-2 sm:col-span-2 sm:grid sm:grid-cols-2">                           
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Nombre</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="nombre" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Nombre">
                                </input>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Primer Apellido</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="PApellido" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Primer Apellido">
                                </input>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Segundo Apellido</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="SApellido" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Segundo Apellido">
                                </input>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Fecha de Nacimiento</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="FNacimiento" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Fecha de Nacimiento">
                                </input>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Nacionalidad</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="nacionalidad" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Nacionalidad">
                                </input>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Estado de Nacimiento</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="ENacimiento" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Guanajuato">
                                </input>
                            </div>
                        </div>  

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Actividad economica</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="Aeconomica" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Empleo">
                                </input>
                            </div>
                        </div>                  

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Numero de telefono</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="telefono" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="33 181 45 78">
                                </input>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Correo electronico</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="correo" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="magot@gmail.com">
                                </input>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">CURP</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="curp" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="CURP">
                                </input>
                            </div>
                        </div> 

                        <div className="px-4 py-3 pt-10">
                            <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Confirmar </button>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Cancelar </button>
                        </div>

                        <div className="px-4 py-3 sm:col-span-6">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Dirección</dt>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2">
                            <div className="sm:grid sm:grid-cols-2">
                                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">País</dt>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="País">
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2">
                            <div className="sm:grid sm:grid-cols-2">
                                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Estado</dt>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Estado">
                                    </input>
                                </div>
                            </div>
                        </div>


                        <div className="px-4 py-3 sm:col-span-2">
                            <div className="sm:grid sm:grid-cols-2">
                                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Ciudad</dt>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Ciudad">
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Colonia</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Colonia">
                                </input>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Calle</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Calle">
                                </input>
                            </div>
                        </div>


                        <div className="px-4 py-3 sm:col-span-2">
                            <div className="sm:grid sm:grid-cols-2">
                                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">C.P.</dt>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="C.P.">
                                    </input>
                                </div>
                            </div>
                        </div>                        

                        <div className="px-4 py-3 sm:col-span-2">
                            <div className="sm:grid sm:grid-cols-2">
                                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Num. Exterior</dt>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Num. Exterior">
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2">
                            <div className="sm:grid sm:grid-cols-2">
                                <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Num. Interior</dt>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Num. Interior">
                                    </input>
                                </div>
                            </div>                         
                        </div>

                        <div className="px-4 py-3 pt-10">
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Confirmar </button>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Cancelar </button>
                        </div>

                        <div className="px-4 py-3 sm:col-span-6">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Identificación</dt>
                        </div>


                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Tipo de Identificación</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Pasaporte">
                                </input>
                            </div>
                        </div>

                        <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Numero de Identificación</dt>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="SHA09172940">
                                </input>
                            </div>
                        </div>

                        <div className="px-4 py-3 pt-10">
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Confirmar </button>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Cancelar </button>
                        </div>

                    </div>
                </dl>
            </div>
        </div>
        </form>
    );
}

export default Rectificacion