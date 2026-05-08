import type { FC } from 'react';
import logoIcon from '../../assets/logo.svg';

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-header-bg backdrop-blur-md border-b border-header-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-accent font-heading font-bold text-xl tracking-wider cursor-pointer">
          <img src={logoIcon} alt="MaterWeek Logo" className="w-8 h-8" />
          MaterWeek
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-body text-text-primary">
          <a href="#eventos" className="hover:text-accent transition-colors">Eventos</a>
          <a href="#patrocinadores" className="hover:text-accent transition-colors">Patrocinadores</a>
        </nav>

        <button aria-label="Abrir menu" className="md:hidden text-text-primary hover:text-accent transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};