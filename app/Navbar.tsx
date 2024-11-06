'use client';

import React from 'react'
import Link from 'next/link';
import { DiDropbox } from "react-icons/di";
import { usePathname } from 'next/navigation';


const Navbar = () => {

    const currentPath = usePathname();

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
                   className={`${link.href=== currentPath?'text-xl text-zinc-900':'text-xl text-zinc-500'}`}
                   href={link.href}
                 >{link.label}</Link>
                   
                )}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar