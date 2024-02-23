import { useState } from 'react';

export const useCreateCompanyModal = () => {
  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

  return {handleClickOpen, handleClose, open}
}
