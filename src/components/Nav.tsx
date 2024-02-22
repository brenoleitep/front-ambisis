"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import logoAmbisis from '../../public/logoAmbisis.png';

export const Nav = () => {
  const {user, isLoaded} = useUser();

  return (
    <header> 
      <nav className="flex items-center justify-between p-6 h-20 border border-t-0 border-l-0 border-b-gray-600" aria-label="Global">
      <div className='flex'>
        <a href='/' className='-m-1.5 p-1.5'>
          <Image src={logoAmbisis} alt='Logo Ambisis' />
        </a>  
      </div>
      {
        isLoaded && user &&
        <>
        <UserButton afterSignOutUrl='/'/>
        </>
      }
      </nav>
    </header>
  )
}

