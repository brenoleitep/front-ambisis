import { normalizes } from '@/utils/normalizes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { z } from 'zod';
import { useCreateCompanyModal } from './useCreateCompanyModal';

const schema = z.object({
  razao_social: z.string().min(3, 'Razão Social muito curta').max(100, 'Razão Social muito longa'),
  cnpj: z.string().min(13, 'CNPJ deve ter 14 dígitos').max(18),
  cep: z.string().min(7, 'CEP deve ter 8 dígitos').max(9),
  cidade: z.string(),
  estado: z.string(),
  bairro: z.string(),
  complemento: z.string().optional(),
});

interface ModalProps {
  cta: string;
}

export default function CreateCompanyModal({ cta }: ModalProps) {
  const {handleClickOpen, handleClose, open, isLoading, handleSubmitForm} = useCreateCompanyModal();
  const {normalizeCepNumber, normalizeCnpjNumber} = normalizes();

  const { handleSubmit, formState: { errors }, register, watch, setValue} = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      razao_social: '',
      cep: '',
      cnpj: '',
      cidade: '',
      estado: '',
      bairro: '',
      complemento: '',
    }
  });

  const cnpjValue = watch("cnpj")
  const cepValue = watch("cep")

   useEffect(() => {
    setValue("cnpj", normalizeCnpjNumber(cnpjValue))
  },[cnpjValue])

   useEffect(() => {
    setValue("cep", normalizeCepNumber(cepValue))
  },[cepValue])


  return (
    <>
      <button className='uppercase p-1 bg-white text-primary rounded-sm' onClick={handleClickOpen}>
        {cta}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit(handleSubmitForm),
          sx: {
            width: '90%',
            maxHeight: '80vh'
          }
        }}
      >
        <DialogContent className='flex flex-col gap-3'>
          <h2 className='text-2xl text-black'>{cta}</h2>
          <TextField 
            id="razao_social" 
            label="Razão Social" 
            variant="outlined" 
            {...register('razao_social')} 
            error={!!errors?.razao_social} 
            helperText={errors?.razao_social?.message} 
            required
          />
          <TextField 
            id="cnpj" 
            label="CNPJ" 
            variant="outlined" 
            {...register('cnpj')} 
            error={!!errors?.cnpj} 
            helperText={errors?.cnpj?.message} 
            required
          />
          <TextField 
            id="cep" 
            label="CEP" 
            variant="outlined" 
            {...register('cep')} 
            error={!!errors?.cep} 
            helperText={errors?.cep?.message} 
            required
          />
          <TextField 
            id="cidade" 
            label="Cidade" 
            variant="outlined" 
            {...register('cidade')} 
            error={!!errors?.cidade} 
            helperText={errors?.cidade?.message} 
            required
          />
          <TextField 
            id="estado" 
            label="Estado" 
            variant="outlined" 
            {...register('estado')} 
            error={!!errors?.estado} 
            helperText={errors?.estado?.message} 
            required
          />
          <TextField 
            id="bairro" 
            label="Bairro" 
            variant="outlined" 
            {...register('bairro')} 
            error={!!errors?.bairro} 
            helperText={errors?.bairro?.message} 
            required
          />
          <TextField 
            id="complemento" 
            label="Complemento" 
            variant="outlined" 
            {...register('complemento')} 
            error={!!errors?.complemento} 
            helperText={errors?.complemento?.message} 
          />
        </DialogContent>
        <DialogActions>
          <button className={`flex items-center justify-center mx-auto w-[92%] h-[60px] bg-primary rounded-lg text-2xl text-white`}>      
            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin text-center" /> : cta}
            </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
