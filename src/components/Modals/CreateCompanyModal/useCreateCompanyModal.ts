import axios from 'axios';
import { useState } from 'react';

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
        
        if(response.status === 201) handleClose();
      } catch (error) {
        console.log('Erro de validação:', error);
      } finally {
        setIsLoading(false)
      }
    };

  return {handleClickOpen, handleClose, open, isLoading, handleSubmitForm}
}
