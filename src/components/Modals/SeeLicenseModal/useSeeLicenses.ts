import axios from 'axios';
import { MouseEvent, useEffect, useState } from 'react';

interface License {
  id: number;
  numero: string;
  orgao_ambiental: string;
  emissao: string;
  validade: string;
  empresaId: number;
}

export const useSeeLicenses = () => {
  const [licenses, setLicenses] = useState<License[]>([]);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<License[]>([]);
  const [companyId, setCompanyId] = useState<number | null>(null);

    const handleClickOpen = (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setCompanyId(Number(e.currentTarget?.id));
    };

    const handleClose = () => {
      setOpen(false);
    };


  const token = localStorage.getItem('@userToken');
        const config = {
          headers: {
            Authorization: `${token}`,
          },
        };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-ambisis.onrender.com/api/company/listcompany', config);
        const companyData = licenses.filter((company: any) => company.empresaId == companyId);
        setCompanies(companyData);
      } catch (error) {
        console.error('Erro ao carregar os dados. Por favor, tente novamente mais tarde.');
      }
    };

    fetchData();
  }, [companyId]);      

  useEffect(() => {
    const fetchLicenses = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api-ambisis.onrender.com/api/license/listLicense`, config);
        setLicenses(response.data.data);
      } catch (error) {
        console.error('Erro ao obter a lista de licenças:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLicenses();
  }, [companyId]);

  return { companies, isLoading, open, setOpen, handleClose, handleClickOpen };
};