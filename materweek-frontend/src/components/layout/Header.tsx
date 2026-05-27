import { useState } from 'react';
import type { FC } from 'react';
import logoIcon from '../../assets/logo_si.svg';
import opcoesIcon from '../../assets/opcoes.svg';

const navLinks = [
  { label: 'Eventos', href: '#eventos' },
  { label: 'Palestrantes', href: '#palestrantes' },
  { label: 'Patrocinadores', href: '#patrocinadores' },
];

export const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-header-bg backdrop-blur-md border-b border-header-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div
            className="flex items-center gap-2 text-accent font-heading font-bold text-xl tracking-wider cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={logoIcon} alt="TechWeek Logo" className="w-8 h-8" />
            TechWeek
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-body text-text-primary">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className="hover:text-accent transition-colors cursor-pointer">
                {label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-text-primary hover:text-accent transition-colors"
          >
            <img src={opcoesIcon} alt="Opções" className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-surface border-l border-card-border flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menu de navegação"
      >
        {/* Cabeçalho da sidebar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-card-border">
          <span className="font-heading font-bold text-accent tracking-wider">Menu</span>
          <button
            onClick={closeMenu}
            aria-label="Fechar menu"
            className="text-text-secondary hover:text-accent transition-colors text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 py-6 gap-1 font-body text-text-primary">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="py-3 text-lg border-b border-card-border/50 hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};
