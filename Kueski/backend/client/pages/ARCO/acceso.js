import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import kueski_fondo from '@/public/imagenes/kueski_fondo.png';
import { useRouter } from 'next/router';

{/* Pagina de Acceso */}

const Acceso = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <>
      <Head>
        <title>Acceso</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/kueskiLogo.png' />
      </Head>
      <Header />
      <h1 className='p-4'>Acceso</h1>
      <main className='bg-gray-100 min-h-screen' style={{backgroundImage: `url(${kueski_fondo})`}}>
        <div className='p-4'>
          {/* Agregamos las clases flex flex-col items-center para crear un contenedor flexible vertical y centrado */}
          <div className='flex flex-col'>
            <h2>Bienvenido, {userId}!</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default Acceso;
