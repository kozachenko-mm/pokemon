import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick: (e: React.FormEvent) => void;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  variant: string;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  disabled = false,
  variant = 'right',
}) => (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
);
