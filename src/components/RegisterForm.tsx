'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from 'zod';

import { toast } from 'react-toastify';
import Button from './Button';

const schema = z.object({
  name: z.string().min(2, 'Nome muito curto').max(50, 'Nome muito longo'),
  email: z.string().email('Email inválido').min(6, 'Email muito curto').max(100, 'Email muito longo').optional(),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres').max(20, 'Senha deve ter no máximo 20 caracteres').optional(),
});

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const { handleSubmit, register, formState: { errors } } = useForm<FormValues>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const router = useRouter();

  const handleSubmitForm = async (data: FormValues) => {
    try {
      setIsLoading(true);
      const response = await axios.post('https://api-ambisis.onrender.com/api/auth/cadastro', data);
      toast("Cadastro feito com sucesso")
      router.push('/');
    } catch (error: any) {
      console.log('Erro ao enviar os dados:', error);
      toast(error.response.data.message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col items-center gap-1 w-[100%]">
      <TextField
        id="name"
        label="Nome"
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message}
        className='h-[65px] max-w-[343px]'
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />

      <TextField
        id="email"
        label="Email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        className='h-[65px] max-w-[343px]'
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />

      <TextField
        id="password"
        label="Senha"
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
        type={showPassword ? 'text' : 'password'}
        className='h-[65px] max-w-[343px]'
        variant="outlined"
        fullWidth
        margin="normal"
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={togglePasswordVisibility}
                edge="end"
                className='text-secondary'
              >
                {!showPassword ? (
                <FaEye />
              ) : (
                <FaEyeSlash />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button text={"Cadastrar"} isLoading={isLoading} />
    </form>
  );
};
