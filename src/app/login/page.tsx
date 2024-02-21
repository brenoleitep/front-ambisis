'use client'
import Button from "@/components/Button";
import TopImage from "@/components/TopImage";
import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logoAmbisis from '../../../public/logoAmbisis.png';
import { useLogin } from "./useLogin";

const login = () => {
  const {handleButtonLoginClick} = useLogin()

  return (
    <div className="h-screen gap-6 container flex flex-col justify-center items-center mx-auto">
      <TopImage />

      <Image src={logoAmbisis} alt="Ambisis"/>
      
      <TextField id="outlined-basic" label="Email" variant="outlined" className="h-[65px] w-[80%] max-w-[343px]"/>
      <TextField id="outlined-basic" label="Senha" variant="outlined" className="h-[65px] w-[80%] max-w-[343px]" />
      <Button text="Login" onClick={handleButtonLoginClick} />
    
      <Link href={"/cadastro"} className="text-secondary">
       Não possui conta? <span className="text-primary">Cadastre-se</span>
      </Link>
    </div>
  )
}

export default login
