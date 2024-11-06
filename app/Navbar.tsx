import React from 'react'
import Link from 'next/link';
import { DiDropbox } from "react-icons/di";




const Navbar = () => {
    const links = [
        {label:'Dashboard',href:'/' },
        {label:'Issues',href:'/issues'}
    ]
  return (
    <div>
        <nav className='flex mb-5 space-x-6 border-b border-b-black h-14 items-center px-8'>
            <Link href="/"><p className='w-full h-full'><DiDropbox /> </p></Link>
            <ul className='flex space-x-6'>
                {links.map(link =>
                 <Link
                  key={link.href}
                   className='text-xl text-zinc-600 hover:text-black font-medium' 
                   href={link.href}
                 >{link.label}</Link>
                   
                )}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar