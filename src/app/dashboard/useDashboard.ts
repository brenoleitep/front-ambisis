'use client'
import { useFetch } from "@/service/useFetch";

interface CompanyData {
  id: number;
  razao_social: string;
  cnpj: string;
  cep: string;
  cidade: string;
  estado: string;
  bairro: string;
  imageUrl: string;
  complemento: string | null;
}

interface Company {
  data: CompanyData[];
}

export const useDashboard = () => {

  const token = localStorage.getItem('@userToken') ?? '';
  const { data, error, isLoading } = useFetch<Company>('api/company/listcompany', token)
  return {
      companies: data,
      isLoading,
      error, 
  }
}