import React from "react";
import Image from "next/image";
import KueskiLogo from "../public/kueski_fondo.png";
const Welcome = () => {
    return (
        <section className="bg-gray-100">
        <div
            className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
            <div className="mx-auto max-w-xl text-center">
                <h1 className="text-3xl font-extrabold  sm:text-5xl">
                <Image src={KueskiLogo} alt="Kueski logo"  />
                    <strong className="font-bold sm:block">
                    Derechos ARCO.
                    </strong>
                </h1>

                <p className="mt-4 sm:text-xl/relaxed">
                    Interfaz para poder aplicar y respetar los derechos sobre la información.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                    className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto hover:shadow-md focus:shadow-md active:shadow-non"
                    href="/dashboard"
                    >
                    Dashboard
                    </a>

                    <a
                    className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto border-2 border-gray-250 hover:border-gray-250 focus:border-gray-250 
                    hover:shadow-md focus:shadow-md active:shadow-none"
                    href="/historial"
                    >
                    Acciones ARCO
                    </a>
                    <a
                    className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto hover:shadow-md focus:shadow-md active:shadow-non"
                    
                    href="/ajustes"
                    >
                    Ajustes
                    </a>
                </div>
            </div>
        </div>
        </section>
        );
    }

export default Welcome;