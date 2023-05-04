import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import Oposicion from '@/components/OposicionCom';
{/* Pagina de Acceso */}

const Acceso = () => {
  const router = useRouter();
  const { userid } = router.query;

  return (
    <>
      <Head>
        <title> Oposición</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/kueskiLogo.png' />
      </Head>
      <Header />
      <h1 className='p-4'>Oposición</h1>
      <div className='p-4'>
          <div className='flex flex-col'>
            <h2>UserID: {userid}</h2>
          </div>
      </div>
      {/*Añadir Componente Cancelación*/}
      <Oposicion searchIndex={userid}/>
    </>
  );
};

export default Acceso;