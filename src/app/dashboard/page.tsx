'use client'
import { Card } from "@/components/Card";
import axios from 'axios';
import { useEffect, useState } from 'react';
import logoAmbisis from "/public/logoAmbisis.png";

interface Company {
  id: number;
  razao_social: string;
  cnpj: string;
  cep: string;
  cidade: string;
  estado: string;
  bairro: string;
  complemento: string | null;
}

export default function Home() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('@userToken');
        if (!token) {
          throw new Error('Token de autenticação não encontrado.');
        }
        const response = await axios.get('https://api-ambisis.onrender.com/api/company/listcompany', {
          headers: {
            Authorization: `${token}`
          }
        });
        
        console.log(response.data)
        setCompanies(response.data.data);
        setIsLoading(false);
        console.log(response.data)
      } catch (error) {
        setError('Erro ao carregar os dados. Por favor, tente novamente mais tarde.');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <main>
      <div className="flex flex-col gap-6">
        <h2 className="mx-auto mt-3 text-2xl">Todas as empresas</h2>

        {isLoading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          companies?.map(company => (
             <Card 
              key={company?.id}
              imageUrl={logoAmbisis} 
              city={company?.cidade} 
              cnpj={company?.cnpj} 
              companyName={company?.razao_social} 
              razao={company?.razao_social}
              neighborhood={company?.bairro} 
              state={company?.estado} 
            />
          ))
        )}
      </div>
    </main>
  );
}
