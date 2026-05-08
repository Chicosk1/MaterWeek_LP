import type { ElementType, HTMLAttributes } from 'react';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'small';
  className?: string;
}

export function Typography({
  as,
  variant = 'body',
  className = '',
  children,
  ...props
}: TypographyProps) {
  const Component = as || (variant.startsWith('h') ? variant : 'p') as ElementType;

  const baseStyles = {
    h1: 'font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary',
    h2: 'font-heading text-3xl md:text-4xl font-bold tracking-tight text-text-primary',
    h3: 'font-heading text-xl md:text-2xl font-bold text-text-primary',
    body: 'font-body text-base text-text-secondary leading-relaxed',
    small: 'font-body text-sm text-text-secondary',
  };

  return (
    <Component className={`${baseStyles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}