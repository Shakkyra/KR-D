import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import kueski_fondo from '../public/imagenes/kueski_fondo.png';
import Welcome from '@/components/Welcome';

{/* Pagina de INICIO */}

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome Kueski</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/kueskiLogo.png' />
      </Head>
        <Header />
        <h1 className='p-4'>HOME</h1>
        <Welcome/>
        <main className='bg-gray-100 min-h-screen' style={{backgroundImage: `url(${kueski_fondo})`}}>

        <div className='p-4'>
          {/* Agregamos las clases flex flex-col items-center para crear un contenedor flexible vertical y centrado */}
          <div className='flex flex-col'>

          </div>
        </div>
      </main>
    </>
  );
};

export default Home;