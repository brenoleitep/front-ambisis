import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


export const useCreateLicenceModal = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [shouldResetForm, setShouldResetForm] = useState(false);

  const {reset} = useForm();
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
        data.empresaId = parseInt(data.empresaId);
        data.emissao = normalizeDateWithDash(data.emissao);
        data.validade = normalizeDateWithDash(data.validade);

    try {
      setIsLoading(true);
      
      const response = await axios.post(`https://api-ambisis.onrender.com/api/license/createLicense`, data, config);
      toast("Licença criada com sucesso")
      if(response.status === 201) {
        handleClose()
        setShouldResetForm(true);
      };
    } catch (error) {
      console.log('Erro de validação:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {handleClickOpen, handleClose, setShouldResetForm, shouldResetForm, open, isLoading, handleSubmitForm, companies};
}
