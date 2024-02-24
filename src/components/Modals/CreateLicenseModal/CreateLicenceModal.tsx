import { normalizes } from '@/utils/normalizes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogActions, DialogContent, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { z } from 'zod';
import { useCreateLicenceModal } from './useCreateLicenceModal';

const schema = z.object({
  empresaId: z.number(),
  numero: z.string().min(3, 'Número da licença muito curta').max(100, 'Razão Social muito longa'),
  orgao_ambiental: z.string().min(2, 'Orgão ambiental precisa ter pelo menos 2 caracteres').max(18),
  emissao: z.string(),
  validade: z.string(),
});

interface ModalProps {
  cta: string;
}

export default function CreateLicenceModal({ cta }: ModalProps) {
  const { handleClickOpen, handleClose, setShouldResetForm, shouldResetForm, open, companies, isLoading, handleSubmitForm } = useCreateLicenceModal();
  const {normalizeDate} = normalizes();

  const { handleSubmit, formState: { errors }, register, reset, setValue, watch } = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    
  });

  const emissaoValue = watch("emissao");
  const validadeValue = watch("validade");

  useEffect(() => {
    const normalizedEmissao = normalizeDate(emissaoValue);
    setValue("emissao", normalizedEmissao);
  }, [emissaoValue]);

  useEffect(() => {
    const normalizedValidade = normalizeDate(validadeValue);
    setValue("validade", normalizedValidade);
  }, [validadeValue]);

    useEffect(() => {
    if (shouldResetForm) {
      reset(); 
      setShouldResetForm(false); 
    }
  }, [shouldResetForm, reset]);

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
        <DialogContent className='flex flex-col gap-3 text-black'>
          <h2 className='text-2xl text-black'>{cta}</h2>
          <InputLabel id="empresaId-label">Selecione a Empresa</InputLabel>
          <Select
            id="empresaId"
            labelId="empresaId-label"
            variant="outlined"
            {...register('empresaId')}
          >
            {companies.map((company: any) => (
              <MenuItem key={company.id} value={company.id}>{company.razao_social}</MenuItem>
            ))}
          </Select>
          
          <TextField
            id="numero"
            label="Número da licença"
            variant="outlined"
            {...register('numero')}
            error={!!errors?.numero}
            required
          />
          <TextField
            id="orgao_ambiental"
            label="Orgão Ambiental"
            variant="outlined"
            {...register('orgao_ambiental')}
            error={!!errors?.orgao_ambiental}
            required
          />
          <TextField
            id="emissao"
            label="Emissão"
            variant="outlined"
            {...register('emissao')}
            error={!!errors?.emissao}
            required
          />
          <TextField
            id="validade"
            label="Validade"
            variant="outlined"
            {...register('validade')}
            error={!!errors?.validade}
            required
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
