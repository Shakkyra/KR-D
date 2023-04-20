
//import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
//Importar sql
import { useEffect, useState } from 'react';

import Header from '../components/Header'
import Visualizer from '../components/Visualizer'
import Searchbar from '../components/SearchBar'
import Visualizer2 from '../components/Visualizer2'
import Visualizer3 from '../components/Visualizer3'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //Array de resultados del query
  const [dataResult, setdataResult] = useState([]);
  //funcion para hacer fetch y llenar el array
  useEffect(() => {
    async function getPageData(){
      const apiUrlEndpoint = "http://localhost:3000/api/getData";
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.names);
      setdataResult(res.names);
    }
    //Corremos la funcion
    getPageData();
  }, []);
  return (
    <>
      <Head>
        <title>Kueski Dashboard</title>
        <meta name='description' content='Generated by create next app'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link rel='icon' href='/kueskiLogo.png'/>
      </Head>
      <main className='bg-gray-100 min-h-screen'>
      <Header />
      <div className='p-4'>
        {/* Agregamos las clases flex flex-col items-center para crear un contenedor flexible vertical y centrado */}
        <div className='flex flex-col'>
          {/* Agregamos la clase w-full para que el searchbar ocupe todo el ancho del contenedor */}
          <div className='w-full'>
            <Searchbar/>
          </div>
          {/* Agregamos la clase mt-4 para crear un margen superior de 16px */}
          <div className='mt-4'>
            <Visualizer3/>
          </div>
        </div>
        <p>ho</p>
          <div>
            {dataResult.map((names) => {
              return(
                <div>{names.USER_ID}</div>
                
              )
            })}
            <p>test</p>
          </div>
      </div>
      </main>
    </>
  )
}
