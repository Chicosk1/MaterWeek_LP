import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-action font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full md:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent cursor-pointer';
  
  const variants = {
    primary: 'bg-accent hover:bg-accent-hover text-text-dark shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:scale-[1.02]',
    outline: 'bg-transparent border border-card-border text-text-primary hover:bg-surface',
    ghost: 'bg-transparent text-accent hover:text-accent-hover hover:bg-accent-transparent p-0 w-auto',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}