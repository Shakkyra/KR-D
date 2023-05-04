import React from "react";
import { useSpring, animated } from 'react-spring';

//import './Imagen.css';

const Welcome = () => {

    const fadeIn = useSpring({ opacity: 10, from: { opacity: 0 } });

    return (
        <section className="bg-gray-50">                
        
            <div        
            className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
            <div className="mx-auto max-w-xl text-center">

            
            <h1 className="text-3xl font-extrabold text-green-700 sm:text-5xl">
                Kueski
                <br />
                <br />
                <strong className="font-extrabold text-blue-700 sm:block">
                Derechos ARCO.
                </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
            <br />
                Interfaz para poder aplicar y respetar los derechos sobre la información.
            </p>

            <br />
            <br />

            <div className="mt-8 flex flex-wrap justify-center gap-4">
           
                <a
                className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/dashboard"
                >
                Dashboard
                </a>

                <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                href="/ajustes"
                >
                Learn More
                </a>
            </div>
            </div>
        </div>
        </section>
        );
    }

export default Welcome;