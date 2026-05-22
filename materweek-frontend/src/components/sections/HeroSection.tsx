import type { FC } from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

export const HeroSection: FC = () => {
  return (
    <section className="relative flex flex-col items-center text-center px-6 pt-16 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0,transparent_50%)] pointer-events-none" />

      <Badge className="mb-8">
        Semana Acadêmica de SI e ADS  - 2026
      </Badge>

      <Typography variant="h1" className="mb-6 max-w-3xl">
        Da Ideia ao Mercado: <span className="text-accent">Construa</span>, <span className="text-accent">Valide</span> e faça <span className="text-accent">Crescer</span>.
      </Typography>

      <Typography variant="body" className="mb-10 max-w-2xl mx-auto md:text-lg">
        Conecte-se com empreendedores, especialistas e profissionais do mercado para aprender como transformar problemas reais em produtos, validar ideias, crescer com estratégia e criar oportunidades no universo da tecnologia e inovação.
      </Typography>

      <div className="flex flex-col md:flex-row w-full gap-4 max-w-md mx-auto justify-center">
        <a href="#eventos" className="w-full flex justify-center">
          <Button variant="primary">
            Garantir minha vaga <span aria-hidden="true">&rarr;</span>
          </Button>
        </a>
      </div>
    </section>
  );
};