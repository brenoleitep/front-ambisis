'use client'
import axios from "axios";
import { useEffect, useState } from "react";

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

export const useDashboard = () => {
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
        
        setCompanies(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError('Erro ao carregar os dados. Por favor, tente novamente mais tarde.');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [companies]);

  return {
      companies,
      isLoading,
      error
  }
}