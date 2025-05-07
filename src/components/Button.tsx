import React from 'react';

// Componente de botão reutilizável
export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded font-medium ${className} ${
        variant === 'primary'
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : variant === 'secondary'
          ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          : 'border border-gray-300 bg-transparent hover:bg-gray-100'
      } ${
        size === 'sm'
          ? 'px-3 py-1 text-sm'
          : size === 'md'
          ? 'px-4 py-2'
          : 'px-6 py-3 text-lg'
      } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
    >
      {children}
    </button>
  );
} 