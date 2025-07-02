import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  secondary?: boolean;
  danger?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  secondary,
  danger,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.button,
        className,
        {
          [styles.secondary]: secondary,
          [styles.danger]: danger,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
}; 