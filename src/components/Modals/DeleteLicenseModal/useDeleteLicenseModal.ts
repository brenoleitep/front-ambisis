import axios from 'axios';
import { MouseEvent, useState } from 'react';
import { toast } from 'react-toastify';

export const useDeleteLicenseModal = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [companyId, setCompanyId] = useState(0);
  const [zeroCompany, setZeroCompany] = useState(false);

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

  const handleSubmitForm = async () => {
    try {
      setIsLoading(true);
      
      const response = await axios.delete(`https://api-ambisis.onrender.com/api/company/deletecompany/${companyId}`, config);
      setZeroCompany(true);
      if(response.status === 200) {
        handleClose();
      };
      toast("Empresa deletada com sucesso")
    } catch (error: any) {
      console.log('Erro de validação:', error);   
    } finally {
      setIsLoading(false);
    }
  };

  return { zeroCompany, open, isLoading, setOpen, handleClose, handleClickOpen, handleSubmitForm };
};
