import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button type='submit' className='w-full h-[65px] max-w-[343px] bg-primary rounded-lg text-2xl text-white'>
      {text}
    </button>
  );
};

export default Button;