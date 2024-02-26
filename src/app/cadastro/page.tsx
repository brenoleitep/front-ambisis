import { RegisterForm } from "@/components/RegisterForm";
import Image from "next/image";
import Link from "next/link";
import logoAmbisis from '../../../public/logoAmbisis.png';

const Cadastro = () => {

  return (
    <div className="h-screen gap-6 container flex flex-col justify-center items-center mx-auto">
      <Image src={logoAmbisis} alt="Ambisis" />
      
      <RegisterForm />

      <Link href={"/"} className="text-secondary">
        Possui conta? <span className="text-primary">LOGIN</span>
      </Link>
    </div>
  )
}

export default Cadastro