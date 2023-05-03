import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import kueski_fondo from '../public/kueski_fondo.png';
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
      <main className='bg-gray-100 min-h-screen'>
       <section className='flex justify-between px-4 pt-4'> 
        
        <h1 className='p-4'>HOME</h1>
        <Header />
        
        </section>
        <Welcome/>
      </main>
       
    </>
  );
};

export default Home;