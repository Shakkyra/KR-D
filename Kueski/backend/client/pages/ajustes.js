
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Faqs from '../components/Faqs';

const Home = () => {
  return (
    <>
      <Head>
        <title>Kueski Dashboard</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/kueskiLogo.png' />
      </Head>
      
      <main className='bg-gray-100 min-h-screen'>
        <section className='flex justify-between px-4 pt-4'> 
        <h1 className='p-4'>Ajustes</h1> 
        <Header />
        
        </section>
        <div className='p-4'>
          {/* Agregamos las clases flex flex-col items-center para crear un contenedor flexible vertical y centrado */}
          <div className='flex flex-col'>
            {/* Agregamos la clase w-full para que el searchbar ocupe todo el ancho del contenedor */}
            {/* Agregamos la clase mt-4 para crear un margen superior de 16px */}
            <div className='mt-4 z-10'>
              <h1>Ajustes -- FAQS</h1>
              <Faqs/>
              <div className='mt-4 align-center bg-white'>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;