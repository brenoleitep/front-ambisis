'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from 'zod';
import Button from './Button';
const schema = z.object({
  email: z.string().email('Email inválido').min(6, 'Email muito curto').max(100, 'Email muito longo'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres').max(20, 'Senha deve ter no máximo 20 caracteres'),
});

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const {handleSubmit, register, formState: {errors}} = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const router = useRouter();

  const handleSubmitForm = async (data: FormValues) => {

    try {
      setIsLoading(true)
      const response = await axios.post('https://api-ambisis.onrender.com/api/auth/login', data);
      localStorage.setItem('@userToken', response.data.token);
      router.push('/dashboard')
    } catch (error) {
      console.log('Erro ao enviar os dados:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-5 w-[80%]">
        
        <TextField 
        id="email" 
        className='h-[65px] max-w-[343px]' 
        label="Email" 
        variant="outlined" 
        {...register('email')} 
        error={!!errors.email} 
        helperText={errors.email?.message} 
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
        <Button text={"Login"} isLoading={isLoading}/>
      </form>
    </>
  )
}
