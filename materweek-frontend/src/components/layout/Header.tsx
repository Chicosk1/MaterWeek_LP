import type { FC } from 'react';
import logoIcon from '../../assets/logo_si.svg';
import opcoesIcon from '../../assets/opcoes.svg';

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-header-bg backdrop-blur-md border-b border-header-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-accent font-heading font-bold text-xl tracking-wider cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoIcon} alt="TechWeek Logo" className="w-8 h-8" />
          TechWeek
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-body text-text-primary">
          <a href="#eventos" className="hover:text-accent transition-colors cursor-pointer">Eventos</a>
          <a href="#patrocinadores" className="hover:text-accent transition-colors cursor-pointer">Patrocinadores</a>
        </nav>

        <button aria-label="Abrir menu" className="md:hidden text-text-primary hover:text-accent transition-colors">
          <img src={opcoesIcon} alt="Opções" className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};