
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 disabled:opacity-50';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 rounded-sm',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200 rounded-sm',
    outline: 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white rounded-sm',
    ghost: 'bg-transparent text-gray-500 hover:text-black rounded-sm',
  };

  const sizes = {
    sm: 'px-6 py-2 text-[10px]',
    md: 'px-8 py-3 text-[11px]',
    lg: 'px-12 py-5 text-[12px]',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
