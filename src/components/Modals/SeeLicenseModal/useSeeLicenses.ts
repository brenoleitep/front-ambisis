import axios from 'axios';
import { MouseEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

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

    console.log(companyId)

  const token = localStorage.getItem('@userToken');
        const config = {
          headers: {
            Authorization: `${token}`,
          },
        };

  const companyData = licenses.filter((company: any) => company.empresaId == companyId);
    useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await axios.get('https://api-ambisis.onrender.com/api/company/listcompany', config);
          setCompanies(companyData);
        } catch (error: any) {
          console.error('Erro ao carregar os dados. Por favor, tente novamente mais tarde.');
          toast(error.response.data.message)
        }
      };
      
      fetchData();
    }, [companyId]);      
  
  
  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://api-ambisis.onrender.com/api/license/listLicense`, config);
        setLicenses(response.data.data);
        toast("Licença criada com sucesso")
      } catch (error: any) {
        console.error('Erro ao obter a lista de licenças:', error);
        toast(error.response.data.message)
      } finally {
        setIsLoading(false);
      }
    };

    fetchLicenses();
  }, [companyId]);
  

  return { companies, isLoading, open, setOpen, handleClose, handleClickOpen };
};