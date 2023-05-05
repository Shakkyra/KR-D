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
    const [primerApellido, setPrimerApellido] = useState('');
    const [segudnodApellido, setSegudnodApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [nacionalidad, setNacionalidad] = useState('')
    const [estadoNacimiento, setEstdoNacimiento] = useState('');
    const [activdadEconomica, setActividadEconomica] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [curp, setCurp] = useState('');

    const enviarDatos1 = () => {
        axios.post('/api/updateData', {
            _id: searchIndex,
            _nombre: nombre,
            _primerApellido: primerApellido,
            _segudnodApellido: segudnodApellido,
            _fechaNacimiento: fechaNacimiento,
            _nacionalidad: nacionalidad,
            _estadoNacimeinto: estadoNacimiento,
            _actividadEconomica: activdadEconomica,
            _telefono: telefono,
            _correo: correo,
            _curp: curp})
        .then(res => console.log(res.data.message))
        .catch(err => console.log(err));
    };

    const [pais, setPais] = useState('');
    const [colonia, setColonia] = useState('');
    const [numeroExterior, setNumeroExterior] = useState('');
    const [estado, setEstado] = useState('');
    const [calle, setCalle] = useState('')
    const [numeroInterior, setNumeroInterior] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const enviarDatos2 = () => {
        axios.post('/api/updateData2', {
            _id: searchIndex,
            _pais: pais,
            _colonia: colonia,
            _numeroExterior: numeroExterior,
            _estado: estado,
            _calle: calle,
            _numeroInterior: numeroInterior,
            _ciudad: ciudad,
            _codigoPostal: codigoPostal
        })
        .then(res => console.log(res.data.message))
        .catch(err => console.log(err));
    };

    const [tipoIdentificacion, setTipoIdentificacion] = useState('');
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
    const enviarDatos3 = () => {
        axios.post('/api/updateData3', {
            _id: searchIndex,
            _tipoIdentificacion: tipoIdentificacion,
            _numeroIdentificacion: numeroIdentificacion
        })
        .then(res => console.log(res.data.message))
        .catch(err => console.log(err));
    };

    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch(`/api/informacionRectificacion?searchValue=${searchValue}`);
                const data = await response.json();
                setNombre(data.names[0].USER_NAME);
                setPrimerApellido(data.names[0].FIRST_LAST_NAME);
                setSegudnodApellido(data.names[0].SECOND_LAST_NAME);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();

    },[]);

    return(
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Rectificación</h3>
            </div>
            <form onSubmit={enviarDatos1}>
                <div className="flex flex-col space-y-0">
                    <div className="mt-6 border-t border-blue-100">
                        <dl className="divide-y divide-blue-100">
                            <div className="sm:grid sm:grid-cols-6">
                                <div className="px-4 py-3 sm:col-span-6">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Inforamción Personal</dt>
                                </div>
                                <div className="px-4 py-2 sm:col-span-2 sm:grid sm:grid-cols-2">                           
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Nombre</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="nombre" onChange={(event) => setNombre(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" value={nombre}/>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Primer Apellido</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="primerApellido" onChange={(event) => setPrimerApellido(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={primerApellido}/>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Segundo Apellido</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="segudnodApellido" onChange={(event) => setSegudnodApellido(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={segudnodApellido}/>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Fecha de Nacimiento</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="fechaNacimiento" onChange={(event)=>setFechaNacimiento(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={fechaNacimiento}/>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Nacionalidad</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="nacionalidad" onChange={(event)=>setNacionalidad(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={nacionalidad}/>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Estado de Nacimiento</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="estadoNacimiento" onChange={(event)=>setEstdoNacimiento(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={estadoNacimiento}/>
                                    </div>
                                </div>  
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Actividad economica</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="actividadEconomica" onChange={(event)=>setActividadEconomica(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={activdadEconomica}/>
                                    </div>
                                </div>                  
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Numero de telefono</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="telefono" onChange={(event)=>setTelefono(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={telefono}/>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Correo electronico</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="correo" onChange={(event)=>setCorreo(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={correo}/>
                                    </div>
                                </div>

                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">CURP</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="curp" onChange={(event)=>setCurp(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={curp}/>
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

            <form onSubmit={enviarDatos2}>
                <div className="flex flex-col space-y-0">
                    <div className="mt-6 border-t border-blue-100">
                        <dl className="divide-y divide-blue-100">
                            <div className="sm:grid sm:grid-cols-6">
                                <div className="px-4 py-3 sm:col-span-6">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Dirección</dt>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2">
                                    <div className="sm:grid sm:grid-cols-2">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">País</dt>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input type="text" name="pais" onChange={(event) => setPais(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={pais}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2">
                                    <div className="sm:grid sm:grid-cols-2">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Estado</dt>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input type="text" name="estado" onChange={(event) => setEstado(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={estado}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2">
                                    <div className="sm:grid sm:grid-cols-2">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Ciudad</dt>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input type="text" name="ciudad" onChange={(event) => setCiudad(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={ciudad}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Colonia</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="colonia" onChange={(event) => setColonia(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={colonia}/>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Calle</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="calle" onChange={(event) => setCalle(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={calle}/>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2">
                                    <div className="sm:grid sm:grid-cols-2">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">C.P.</dt>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input type="text" name="codigoPostal" onChange={(event) => setCodigoPostal(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={codigoPostal}/>
                                        </div>
                                    </div>
                                </div>                        
                                <div className="px-4 py-3 sm:col-span-2">
                                    <div className="sm:grid sm:grid-cols-2">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Num. Exterior</dt>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input type="text" name="numeroExterior" onChange={(event) => setNumeroExterior(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={numeroExterior}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2">
                                    <div className="sm:grid sm:grid-cols-2">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Num. Interior</dt>
                                        <div className="relative mt-2 rounded-md shadow-sm">
                                            <input type="text" name="numeroInterior" id="price" onChange={(event) => setNumeroInterior(event.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={numeroExterior}/>
                                        </div>
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

            <form onSubmit={enviarDatos3}>
                <div className="flex flex-col space-y-0">
                    <div className="mt-6 border-t border-blue-100">
                        <dl className="divide-y divide-blue-100">
                            <div className="sm:grid sm:grid-cols-6">
                                <div className="px-4 py-3 sm:col-span-6">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Identificación</dt>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Tipo de Identificación</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="tipoIdentificacion" onChange={(event) => setTipoIdentificacion(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={tipoIdentificacion}>
                                        </input>
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:col-span-2 sm:grid sm:grid-cols-2">
                                    <dt className="text-sm font-medium leading-6 text-gray-900 sm:col-span-2">Numero de Identificación</dt>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <input type="text" name="numeroIdentificacion" onChange={(event) => setNumeroIdentificacion(event.target.value)} id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6" placeholder={numeroIdentificacion}>
                                        </input>
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
        </div>
    )
}
export default RectificacionCom;