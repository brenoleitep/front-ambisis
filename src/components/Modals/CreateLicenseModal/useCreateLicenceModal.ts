import axios from 'axios';
import { useEffect, useState } from 'react';

export const useCreateLicenceModal = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  
    const token = localStorage.getItem('@userToken');
      const config = {
        headers: {
          Authorization: `${token}`,
        },
    };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('https://api-ambisis.onrender.com/api/company/listcompany', config);
        setCompanies(response.data.data);
      } catch (error) {
        console.error('Erro ao obter a lista de empresas:', error);
      }
    };
    
    fetchCompanies();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
 const normalizeDateWithDash = (value: string) => {
    return value.replace(/\//g, "-");
  };

  const handleSubmitForm = async (data: any) => {
      console.log("brene", data)
        data.empresaId = parseInt(data.empresaId);
        data.emissao = normalizeDateWithDash(data.emissao);
        data.validade = normalizeDateWithDash(data.validade);

    try {
      setIsLoading(true);
      
      console.log(data)
      const response = await axios.post(`https://api-ambisis.onrender.com/api/license/createLicense`, data, config);
      if(response.status === 201) handleClose();
    } catch (error) {
      console.log('Erro de validação:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {handleClickOpen, handleClose, open, isLoading, handleSubmitForm, companies};
}
