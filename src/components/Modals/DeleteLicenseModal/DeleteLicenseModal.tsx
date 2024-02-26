'use client'
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDeleteLicenseModal } from './useDeleteLicenseModal';

interface ModalProps {
  cta: string;
  empresaId: number;
}

export default function DeleteLicenseModal ({ cta, empresaId }: ModalProps) {
  const { handleClose, isLoading, handleClickOpen, open, handleSubmitForm } = useDeleteLicenseModal();
  const { handleSubmit }  = useForm();

  return (
    <>
      <button className='uppercase p-1 bg-white text-primary rounded-sm' id={`${empresaId}`} onClick={handleClickOpen}>
        {cta}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit(handleSubmitForm)}
        PaperProps={{
          component: 'form',
          sx: {
            width: '90%',
            maxHeight: '80vh'
          }
        }}
      >
        <DialogContent className='flex flex-col gap-3 text-black'>
          <h2 className='text-2xl text-black'>{cta}</h2>
          
          <p>Você deseja realmente excluir essa empresa?</p>

        </DialogContent>

        <DialogActions className='flex w-full justify-between'>
             <button className='uppercase w-full p-3 bg-primary text-white rounded-sm' onClick={handleSubmitForm}>
            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin text-center" /> : "Deletar empresa"}
            </button>             
          </DialogActions>
      </Dialog>
    </>
  );
}
