import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'default' | 'hover' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'default' }) => {
  const baseStyle = "rounded-full text-black px-4 py-2 text-sm transition-colors";
  
  const variantStyle = variant === 'outline' 
    ? "border border-black text-black hover:bg-white hover:text-black" 
    : variant === 'hover' 
      ? "bg-gradient-to-r from-pink-500 to-orange-500" 
      : "bg-black text-white";

  return (
    <button className={`${baseStyle} ${variantStyle}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;