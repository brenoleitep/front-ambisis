import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  text: string;
  isLoading: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, isLoading }) => {
  return (
    <button type='submit' className={`flex items-center justify-center w-full h-[65px] max-w-[343px] bg-primary rounded-lg text-2xl text-white ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isLoading}>
      {isLoading ? <AiOutlineLoading3Quarters className="animate-spin text-center" /> : text}
    </button>
  );
};

export default Button;
