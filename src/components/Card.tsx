import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardProps {
  imageUrl: string | StaticImageData;
  companyName: string;
  cnpj: string,
  city: string,
  razao: string,
  state: string,
  neighborhood: string,
}

export const Card: React.FC<CardProps> = ({ imageUrl, companyName, neighborhood, state, cnpj, razao, city }) => {
return (
  <div className='h-auto bg-transparent relative z-0'>
    <div className="flex flex-col items-start mt-20 w-[365px] h-[390px] mx-auto bg-primary rounded-lg shadow-md overflow-hidden">
        <Image src={imageUrl} alt="Card Image" className="h-[111px] w-[111px] absolute top-8 bg-primary rounded-full top-0- left-1/2 transform -translate-x-1/2" width={111} height={111} />

      <section className='flex justify-end overflow-auto flex-col h-full mx-auto w-full p-2 text-white'>
        <h2 className='text-center text-2xl'>{companyName}</h2>
        
        <div className='flex w-full flex-col items-end h-[70%]'>
          <div className='w-full flex p-4 flex-col gap-2 text-xs uppercase justify-between h-[90%]'>
            <div className='flex'>
              <p>CNPJ:</p>
              <p>{cnpj}</p>
            </div>

            <div className='flex'>
              <p>Razão:</p>
              <p>{razao}</p>
            </div>

            <div className='flex'>
              <p>Bairro:</p>
              <p>{neighborhood}</p>
            </div> 

            <div className='flex'>
              <p>Estado:</p>
              <p>{state}</p>
            </div>

            <div className='flex'>
              <p>Cidade:</p>
              <p>{city}</p>
            </div>
          </div>

          <div className='w-full flex p-4 flex-col gap-3 h-[90%] justify-between'>
            <button className='uppercase bg-white text-primary rounded-sm'>
              Criar licença
            </button>

            <button className='uppercase bg-white text-primary rounded-sm'>
              Editar empresa
            </button>

            <button className='uppercase bg-white text-primary rounded-sm'>
              ver licença
            </button>
          </div>
        </div>
      </section>  
    </div>
  </div>
  );
};

