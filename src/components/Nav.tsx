"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

export const Nav = () => {
  const {user, isLoaded} = useUser();

  return (
    <header> 
      <nav className="flex items-center justify-between p-6 h-20 border border-t-0 border-l-0 border-b-gray-600" aria-label="Global">
      <div className='flex'>
        <a href='/' className='-m-1.5 p-1.5'>
          Next.js Authentication
        </a>  
      </div>
      {
        isLoaded && user &&
        <>
        <Link href={"/dashboard"}>Dashboard</Link>
        <UserButton afterSignOutUrl='/'/>
        </>
      }
      </nav>
    </header>
  )
}

