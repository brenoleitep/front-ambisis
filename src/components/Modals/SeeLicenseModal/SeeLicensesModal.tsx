'use client'
import SkeletonChildren from '@/components/Skeleton';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useSeeLicenses } from './useSeeLicenses';

interface ModalProps {
  cta: string;
  empresaId: number;
}

export default function SeeLicensesModal({ cta, empresaId }: ModalProps) {
  const {isLoading, companyData, handleClose, handleClickOpen, removerTEmDiante, open} = useSeeLicenses();

  return (
    <>
      <button className='uppercase p-1 bg-white text-primary rounded-sm' id={`${empresaId}`} onClick={handleClickOpen}>
        {cta}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
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
          {
            isLoading ? 
            <SkeletonChildren />
            : companyData?.length === 0 ? "Não existem licenças disponíveis para essa empresa"
            :
            companyData?.map((elem) => 
              <div className='flex bg-secondary p-1 text-white'>
                <ul className='flex flex-col'>
                  <li>Orgão Ambiental: {elem.orgao_ambiental}</li>
                  <li>Emissão: {removerTEmDiante(elem.emissao)}</li>
                  <li>Validade: {removerTEmDiante(elem.validade)}</li>
                  <li>Número: {elem.numero}</li>
                </ul>
              </div>
          )}
        </DialogContent>
        <DialogActions>
          <button type='reset' onClick={handleClose} className={`flex items-center justify-center mx-auto w-[92%] h-[60px] bg-primary rounded-lg text-2xl text-white`}>
            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin text-center" /> : "Voltar"}
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
