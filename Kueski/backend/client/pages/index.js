//import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'

import Header from '../components/Header'
import Visualizer from '../components/Visualizer'
import Searchbar from '../components/SearchBar'
import Visualizer2 from '../components/Visualizer2'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link rel='icon' href='/favicon.ico'/>
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
          <Visualizer2/>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}