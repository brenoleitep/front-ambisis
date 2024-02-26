import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const useCreateCompanyModal = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    
    const handleSubmitForm = async (data: Record<string, string>) => {
      try {
        setIsLoading(true)
        const token = localStorage.getItem('@userToken');
        const config = {
          headers: {
            Authorization: `${token}`,
          },
        };
        const response = await axios.post('https://api-ambisis.onrender.com/api/company/createCompany', data, config);
        toast("Empresa criada com sucesso!")
        if(response.status === 201) handleClose();
      } catch (error: any) {
        console.log('Erro de validação:', error);
        toast(error.response.data.message)
      } finally {
        setIsLoading(false)
      }
    };

  return {handleClickOpen, handleClose, open, isLoading, handleSubmitForm}
}
