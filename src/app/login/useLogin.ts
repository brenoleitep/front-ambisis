'use client'
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  const handleButtonLoginClick = () => {
    router.push('/home');
  };

  return {
    handleButtonLoginClick
  }
}