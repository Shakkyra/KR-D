import React from 'react';
import { useEffect, useState} from "react";
import Head from 'next/head';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import RectificacionCom from '@/components/RectificacionCom';
{/* Pagina de Acceso */}

const rectificacion = () => {
  const router = useRouter();
  const { userid } = router.query;

  return (
    <>
      <Head>
        <title>Rectificación</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/kueskiLogo.png' />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <h1 className='p-4'>Rectificación</h1>
        <div className='p-4'>
            <div className='flex flex-col'>
              <h2>UserID: {userid}</h2>
            </div>
        </div>
        <RectificacionCom searchIndex={userid}/>
      </main>
    </>
  );
};

export default rectificacion;