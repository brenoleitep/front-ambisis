'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from './Button';
const schema = z.object({
  userEmail: z.string().email('Email inválido').min(6, 'Email muito curto').max(100, 'Email muito longo'),
  userPassword: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres').max(20, 'Senha deve ter no máximo 20 caracteres'),
});

interface FormValues {
  userEmail: string;
  userPassword: string;
}

export const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const {handleSubmit, register, formState: {errors}} = useForm({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      userEmail: '',
      userPassword: ''
    }
  })

  const handleSubmitForm = (data: FormValues) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-5 w-[80%]">
        
        <TextField 
        id="userEmail" 
        className='h-[65px] max-w-[343px]' 
        label="Email" 
        variant="outlined" 
        {...register('userEmail')} 
        error={!!errors.userEmail} 
        helperText={errors.userEmail?.message} 
        required
        />

      <TextField
        id="userPassword"
        label="Senha"
        {...register('userPassword')} 
        error={!!errors.userPassword} 
        helperText={errors.userPassword?.message} 
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
              className='text-xs text-secondary'
              >
             {!showPassword ? (
               "Mostrar"
              ) : (
                "Esconder"
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      />
        <Button text={"Login"} />
      </form>
    </>
  )
}
