import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";
import logoAmbisis from './../../public/logoAmbisis.png';

const Login = () => {

  return (
    <div className="h-screen gap-6 container flex flex-col justify-center mx-auto items-center mx-auto">
      {/* <TopImage /> */}
      <Image src={logoAmbisis} alt="Ambisis" />
      
      <LoginForm />

      <Link href={"/cadastro"} className="text-secondary">
        Não possui conta? <span className="text-primary">Cadastre-se</span>
      </Link>
    </div>
  )
}

export default Login