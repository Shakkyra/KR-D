
import React, { useState } from 'react';
import Head from 'next/head';
import Headerhis from '../components/Headerhis';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Visualizerhis from '../components/Visualizerhis';
import Reporte from '../components/Reporte';
import Hidder from '../components/Hidder';
import '../components/icono.module.css';

import Oposicion from '../components/Oposicion';
import Acceder from '../components/Acceso';
import Rectificar from '../components/Rectificacion';
import Cancelar from '../components/Cancelacion';

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState(Hidder);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  let ComponentToRender;
  switch (selectedComponent) {
    case 'Reporte':
      ComponentToRender = Reporte;
      break;
    default:
      ComponentToRender = Hidder;
  }

  return (
    <>
      <Head>
        <title>Historial de acciones Arco</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/kueskiLogo.png' />
      </Head>
      
      <main className='bg-gray-100 min-h-screen z-10'>
        <Header />
        
        <div className='p-4'>
          {/* Agregamos las clases flex flex-col items-center para crear un contenedor flexible vertical y centrado */}
          <div className='flex flex-col'>
            {/* Agregamos la clase w-full para que el searchbar ocupe todo el ancho del contenedor */}
            <div className='w-full z-10'>
              <Searchbar />
            </div>
            {/* Agregamos la clase mt-4 para crear un margen superior de 16px */}
            <div className='mt-4 z-10'>
              <Visualizerhis onButtonClick={handleButtonClick} />
              <h1 className='p-4'>Reporte completo</h1>
              <div className='mt-4 align-center bg-white'>
                <ComponentToRender/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;