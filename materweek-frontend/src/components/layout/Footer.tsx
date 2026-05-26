import type { FC } from 'react';
import logoIcon from '../../assets/logo_si.svg';

export const Footer: FC = () => {
  return (
    <footer className="px-6 py-10 mt-auto bg-background flex flex-col items-center text-center gap-6">
      <div className="flex items-center gap-2 text-accent font-heading font-bold text-xl tracking-wider">
        <img src={logoIcon} alt="TechWeek Logo" className="w-6 h-6" />
        TechWeek
      </div>

      <div className="text-xs text-text-secondary font-body flex flex-col gap-2">
        <p>&copy; 2026 TechWeek BY Sistemas de Informação - 5° Período.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a href="#eventos" className="hover:text-accent transition-colors">Eventos</a>
          <a href="#patrocinadores" className="hover:text-accent transition-colors">Patrocinadores</a>
        </div>
      </div>
    </footer>
  );
};