import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className='w-[80%] h-[65px] max-w-[343px] bg-primary rounded-lg text-2xl text-white'>
      {text}
    </button>
  );
};

export default Button;