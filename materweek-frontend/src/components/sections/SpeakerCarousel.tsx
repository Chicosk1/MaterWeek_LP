import { useEffect, useState, type FC } from 'react';
import { mockEvents } from '../../data/mock';
import type { EventItem } from '../../types';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

import calendarioIcon from '../../assets/calendario.svg';
import pinoMapaIcon from '../../assets/pino_mapa.svg';

const AUTO_PLAY_MS = 6000;

function getTopic(event: EventItem): string {
  return event.topic ?? 'PALESTRANTE CONVIDADO';
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

interface PortraitProps {
  photos?: string[];
  name: string;
  className?: string;
}

/* Foto circular individual com anel decorativo e glow */
const CirclePhoto: FC<{ src: string; size?: string }> = ({ src, size = 'w-full' }) => (
  <div className={`relative aspect-square ${size}`}>
    {/* Glow suave atrás do círculo */}
    <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl pointer-events-none" />
    {/* Anel decorativo levemente maior que a foto */}
    <div className="absolute -inset-[6px] rounded-full border border-accent/30 pointer-events-none" />
    {/* Segundo anel externo mais sutil */}
    <div className="absolute -inset-[14px] rounded-full border border-accent/10 pointer-events-none" />
    <img
      src={src}
      alt=""
      loading="lazy"
      className="relative w-full h-full object-contain drop-shadow-[0_0_28px_rgba(0,229,255,0.5)] animate-fade-in"
    />
  </div>
);

const Portrait: FC<PortraitProps> = ({ photos, name, className = '' }) => {
  if (!photos || photos.length === 0) {
    return (
      <div className={`relative flex items-center justify-center aspect-square rounded-full border border-accent/30 bg-surface text-text-primary/70 font-heading font-bold text-4xl tracking-tight ${className}`}>
        {getInitials(name)}
      </div>
    );
  }

  if (photos.length === 1) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <CirclePhoto src={photos[0]} size="w-full" />
      </div>
    );
  }

  /* Dois palestrantes: dois círculos lado a lado */
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {photos.map((src, i) => (
        <CirclePhoto key={i} src={src} size="w-[46%]" />
      ))}
    </div>
  );
};

interface SpeakerCarouselProps {
  activeSpeakerId?: string | null;
}

export const SpeakerCarousel: FC<SpeakerCarouselProps> = ({ activeSpeakerId }) => {
  const speakers = [...mockEvents].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const total = speakers.length;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!activeSpeakerId) return;
    const idx = speakers.findIndex((s) => s.id === activeSpeakerId);
    if (idx !== -1) setIndex(idx);
  }, [activeSpeakerId]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_PLAY_MS);
    return () => window.clearTimeout(id);
  }, [index, isPaused, total]);

  if (total === 0) return null;

  const current = speakers[index];
  const goTo = (i: number) => setIndex(((i % total) + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <section id="palestrantes" className="px-6 py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8 text-center md:text-left">
          <Typography variant="h2" className="mb-2">Palestrantes em destaque</Typography>
          <Typography variant="body">Conheça quem vai dividir conhecimento com você.</Typography>
        </div>

        <div
          className="relative bg-surface border border-card-border rounded-2xl mx-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Seta anterior — lateral esquerda */}
          <button
            type="button"
            onClick={prev}
            aria-label="Palestrante anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-surface border border-card-border text-text-primary hover:border-accent hover:text-accent transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent"
          >
            <span aria-hidden="true">&larr;</span>
          </button>

          {/* Seta próximo — lateral direita */}
          <button
            type="button"
            onClick={next}
            aria-label="Próximo palestrante"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 rounded-full bg-surface border border-card-border text-text-primary hover:border-accent hover:text-accent transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent"
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.10)_0,transparent_60%)] rounded-2xl pointer-events-none" />

          {/* Mobile: círculo(s) centralizado(s) acima do conteúdo */}
          <div className="md:hidden flex items-center justify-center py-8" aria-hidden="true">
            <Portrait
              key={`m-${current.id}`}
              photos={current.photoUrls}
              name={current.title}
              className={(current.photoUrls?.length ?? 0) > 1 ? 'w-72' : 'w-44'}
            />
          </div>

          {/* Desktop: círculo(s) centralizado(s) verticalmente à direita */}
          <div
            className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 w-56 lg:w-64 items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <Portrait
              key={`d-${current.id}`}
              photos={current.photoUrls}
              name={current.title}
              className="w-full"
            />
          </div>

          {/* Content */}
          <div
            key={current.id}
            className="relative p-6 md:p-10 md:pr-[270px] lg:pr-[310px] h-[26rem] flex flex-col gap-4 animate-fade-in overflow-hidden"
          >
            <span className="font-action text-xs md:text-sm tracking-[0.25em] uppercase text-accent">
              {getTopic(current)}
            </span>

            <Typography
              variant="h1"
              className={`line-clamp-2 pb-3 ${current.title.length > 30 ? 'text-xl md:text-3xl' : 'text-3xl md:text-5xl'}`}
            >
              {current.title}
            </Typography>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-body text-text-secondary">
              <div className="flex items-center gap-2">
                <img src={pinoMapaIcon} alt="" aria-hidden="true" className="w-4 h-4 opacity-70" />
                <span>{current.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={calendarioIcon} alt="" aria-hidden="true" className="w-4 h-4 opacity-70" />
                <span>{current.date}</span>
              </div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto scrollbar-accent pr-1">
              <Typography variant="body" className="max-w-2xl">
                {current.longDescription}
              </Typography>
            </div>

            <div className="pt-4 relative flex items-center justify-center">
              <div className="absolute left-0">
                <a
                  href={current.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Inscrever-se</Button>
                </a>
              </div>

              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Selecionar palestrante"
              >
                {speakers.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Ver palestrante ${i + 1} de ${total}: ${s.title}`}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent ${
                      i === index
                        ? 'w-8 bg-accent'
                        : 'w-2 bg-card-border hover:bg-text-secondary'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};