import type { ReactNode } from 'react';

interface CardBaseProps {
  children: ReactNode;
  className?: string;
}

export function CardBase({ children, className = '' }: CardBaseProps) {
  return (
    <article 
      className={`bg-surface border border-card-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 flex flex-col gap-4 ${className}`}
    >
      {children}
    </article>
  );
}