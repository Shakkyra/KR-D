import React from "react";

const Faqs = () => {
    return(
        <div className="space-y-4">
            <details
                className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                    Con la finalidad de poder ser de utilidad para kueski.
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                        Proyecto realizado para la facilitación de ejercer de manera correcta los derechos ARCO.
                </p>
            </details>

            <details
                className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                    En la interfaz se cuenta con varias pestañas que se puede navegar entre ellas presionando los botons de la sidebar a la izquierda.

                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    La primera es la Home Page. Es el simbolo del cubo azul. Luego esta la del dashboard, en donde se pueden realizar las peticiones ARCO.
                     A travaez del botón del reloj se lleva al historial, en donde se puede consultar los registros sobre las distintas peticiones realizadas.
                     Por ultimo esta en FAQ, en donde pondremos información util para poder usar esta herramienta. 
                </p>
            </details>

            <details
                className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                    Para dudas o aclaraciones
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    Contacte a los siguientes correos. A0057172@tec.mx
                </p>
            </details>
        </div>
    );
}

export default Faqs;