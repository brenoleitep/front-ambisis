import { useFetch } from '@/service/useFetch';
import { MouseEvent, useState } from 'react';

interface LicenseData {
  id: number;
  numero: string;
  orgao_ambiental: string;
  emissao: string;
  validade: string;
  empresaId: number;
}
interface License {
  data: LicenseData[];
}

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

export const useSeeLicenses = () => {
  const [open, setOpen] = useState(false);
  const [companyId, setCompanyId] = useState<number | null>(null);

    const handleClickOpen = (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setCompanyId(Number(e.currentTarget?.id));
    };

    const handleClose = () => {
      setOpen(false);
    };

  const token = localStorage.getItem('@userToken') ?? '';

  const { data, isLoading } = useFetch<License>('api/license/listLicense', token)
  
  const companyData = data?.data.filter((license) => license.empresaId == companyId);

  return { companyData, isLoading, open, setOpen, handleClose, handleClickOpen };
};