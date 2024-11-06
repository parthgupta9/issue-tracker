import React from 'react'
import Link from 'next/link';
import { DiDropbox } from "react-icons/di";


const Navbar = () => {
  return (
    <div>
        <nav className='flex mb-5 space-x-6 border-b border-b-black h-14 items-center px-8'>
            <Link href="/"><p className='w-full h-full'><DiDropbox /> </p></Link>
            <ul className='flex space-x-6'>
                <li className='text-xl text-zinc-600 hover:text-black font-medium'> <Link href="/Dash">Dashoard</Link></li>
                <li className='text-xl  text-zinc-600 hover:text-black font-medium'> <Link href="/Issue">Issues</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar