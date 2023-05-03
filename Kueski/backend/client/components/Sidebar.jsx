import React from "react";
import Link from "next/link";
import {RxCube, RxDashboard, RxCounterClockwiseClock} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import Image from 'next/image';
import icono from '../public/kueskiLogo.png';
import styles from './icono.module.css';
import { useState } from 'react';



const Sidebar = ({children}) => {
    

    const [iconStates, setIconStates] = useState({
        icon1: false,
        icon2: false,
        icon3: false,
        icon4: false
      });
      
      const handleClick = (iconId) => {
        setIconStates(prevStates => ({
          ...Object.fromEntries(
            Object.entries(prevStates).map(([key]) => [key, false])
          ),
          [iconId]: true
        }));
      };
      
      
    
       
    return (
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href='/'>
                        <div  className={`${styles.myFunction} ${iconStates['icon1'] ? styles.clicked : ''} rounded-lg p-3 my-4 hover\:bg-gray-200:hover`} onClick={() => handleClick('icon1')}>
                            <Image src={icono} alt="Icono" width={25} height={25}/>
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    <Link href='/dashboard'>
                        <div className={`${styles.myFunction} ${iconStates['icon2'] ? styles.clicked : ''} rounded-lg p-3 my-4 hover\:bg-gray-200:hover`} onClick={() => handleClick('icon2')}>
                            <RxDashboard size={25}/>
                        </div>
                    </Link>
                    <Link href='/historial'>
                        <div className={`${styles.myFunction} ${iconStates['icon3'] ? styles.clicked : ''} rounded-lg p-3 my-4 hover\:bg-gray-200:hover`} onClick={() => handleClick('icon3')}>
                            <RxCounterClockwiseClock size={25}/>
                        </div>
                    </Link>
                    <Link href='/ajustes'>
                        <div className={`${styles.myFunction} ${iconStates['icon4'] ? styles.clicked : ''} rounded-lg p-3 my-4 hover\:bg-gray-200:hover`} onClick={() => handleClick('icon4')}>
                                <FiSettings size={25}/>
                        </div>
                    </Link>
                </div>
            </div>
            <main className="ml-20 w-full">{children}</main>
        </div>
    )
};

export default Sidebar;