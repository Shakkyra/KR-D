import React from "react";

const Rectificacion = () => {
    return(
        <div class="flex flex-col space-y-0">
            <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-900">Rectificación</h3>
            </div>
            <div class="mt-6 border-t border-blue-100">
                <dl class="divide-y divide-blue-100">
                    
                    <div class="sm:grid sm:grid-cols-4">
                        
                        <div class="px-4 py-2 sm:col-span-2 sm:grid sm:grid-cols-2">                           
                            <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Nombre</dt>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Nombre">
                                </input>
                            </div>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2">
                            <div class="sm:grid sm:grid-cols-2">
                                <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">País</dt>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="País">
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Primer Apellido</dt>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Primer Apellido">
                                </input>
                            </div>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2">
                            <div class="sm:grid sm:grid-cols-2">
                                <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Estado</dt>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Estado">
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Segundo Apellido</dt>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Segundo Apellido">
                                </input>
                            </div>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2">
                            <div class="sm:grid sm:grid-cols-2">
                                <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Ciudad</dt>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Ciudad">
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Fecha de Nacimiento</dt>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Fecha de Nacimiento">
                                </input>
                            </div>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2">
                            <div class="sm:grid sm:grid-cols-2">
                                <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">C.P.</dt>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="C.P.">
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Nacionalidad</dt>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Nacionalidad">
                                </input>
                            </div>
                        </div>                        

                        <div class="px-4 py-3 sm:col-span-2">
                            <div class="sm:grid sm:grid-cols-2">
                                <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Num. Exterior</dt>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Num. Exterior">
                                    </input>
                                </div>
                            </div>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Empleo</dt>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Empleo">
                                </input>
                            </div>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2">
                            <div class="sm:grid sm:grid-cols-2">
                                <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Num. Interior</dt>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Num. Interior">
                                    </input>
                                </div>
                            </div>                         
                        </div>

                        <div class="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                            <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">CURP</dt>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="CURP">
                                </input>
                            </div>
                        </div>

                        <div class="px-4 py-3 pt-10">
                            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Confirmar </button>
                            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Regresar </button>
                        </div>

                        <div class="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">

                            <dt class="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Sexo</dt>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder="Sexo">
                                </input>
                            </div>
                        </div>

                    </div>
                </dl>
            </div>
        </div>
    );
}

export default Rectificacion