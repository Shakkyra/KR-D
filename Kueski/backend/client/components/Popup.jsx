import React, { useState } from "react";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Crear Historial
      </button>

      {isOpen &&(
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-700 rounded-lg p-8">
              <h3 className="text-white text-xl font-bold mb-4">Historial</h3>
              <div>
              <div className="grid grid-cols-2">
                <label className="block text-sm font-thin leading-6 text-white">id</label>
                <div class="mt-2">
                  <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>

                <label className="block text-sm font-thin leading-6 text-white">User id</label>
                <div class="mt-2">
                  <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>

                <label className="block text-sm font-thin leading-6 text-white">Type Request</label>
                <div class="mt-2">
                  <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>

                <label className="block text-sm font-thin leading-6 text-white">Comments</label>
                <div class="mt-2">
                  <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>

                <label className="block text-sm font-thin leading-6 text-white">Prev Value</label>
                <div class="mt-2">
                  <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>

                <label className="block text-sm font-thin leading-6 text-white">New Value</label>
                <div class="mt-2">
                  <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>

                <label className="block text-sm font-thin leading-6 text-white">Date</label>
                <div class="mt-2">
                  <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                </div>

              </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Crear
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;