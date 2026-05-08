import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-background font-body text-sm text-accent ${className}`}>
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
      {children}
    </div>
  );
}