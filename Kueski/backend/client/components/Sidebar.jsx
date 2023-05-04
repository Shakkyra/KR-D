import React from "react";
import Link from "next/link";
import {RxCube, RxDashboard, RxCounterClockwiseClock} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import Image from 'next/image';
import icono from '../public/kueskiLogo.png';


const Sidebar = ({children}) => {
    return (
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href='/'>
                        <div className="bg-blue-800 text-white p-3 rounded -lg inline-block">
                        <Image src={icono} alt="Icono" width={25}height={25}/> 
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    <Link href='/dashboard'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded -lg inline-block">
                            <RxDashboard size={20}/>
                        </div>
                    </Link>
                    <Link href='/historial'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded -lg inline-block">
                            <RxCounterClockwiseClock size={20}/>
                        </div>
                    </Link>
                    <Link href='/ajustes'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded -lg inline-block">
                            <FiSettings size={20}/>
                        </div>
                    </Link>
                </div>
            </div>
            <main className="ml-20 w-full">{children}</main>
        </div>
    )
}

export default Sidebar;