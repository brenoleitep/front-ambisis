'use client'
import Image from 'next/image';
import logoAmbisis from '../../public/logoAmbisis.png';

export const Nav = () => {


  return (
    <header> 
      <nav className="flex items-center justify-between p-6 h-20 border border-t-0 border-l-0 border-b-gray-600" aria-label="Global">
        <div className='flex'>
          <a href='/' className='-m-1.5 p-1.5'>
            <Image src={logoAmbisis} alt='Logo Ambisis' />
          </a>  
        </div>
        <button className='uppercase bg-primary p-2 text-white rounded-sm'>
          Criar empresa
        </button>
      </nav>
    </header>
  )
}
