import React, { type ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  text?: string;

  variant?: ButtonVariant;
  size?: ButtonSize;

  disabled?: boolean;

  className?: string;

  children?: ReactNode;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  type?: ButtonType;
}

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-primary-green',
        secondary: 'hover:bg-gray-100 focus:ring-primary-green',
        outline:
          'border-2 bg-transparent hover:bg-opacity-10 focus:ring-primary-green',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  text,
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        buttonClasses({ variant, size }),
        className
      )}
      {...props}
    >
      {children ?? text}
    </button>
  );
};

export default Button;