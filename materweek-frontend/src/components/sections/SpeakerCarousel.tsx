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

const Portrait: FC<PortraitProps> = ({ photos, name, className = '' }) => {
  if (!photos || photos.length === 0) {
    return (
      <div
        className={`flex items-center justify-center text-text-primary/70 font-heading font-bold text-6xl md:text-8xl tracking-tight ${className}`}
      >
        {getInitials(name)}
      </div>
    );
  }

  if (photos.length === 1) {
    return (
      <img
        src={photos[0]}
        alt=""
        loading="lazy"
        className={`object-contain object-bottom drop-shadow-[0_15px_40px_rgba(0,229,255,0.25)] ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-end justify-center gap-3 ${className}`}>
      {photos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="h-[90%] max-w-[46%] object-contain object-bottom drop-shadow-[0_15px_40px_rgba(0,229,255,0.25)]"
        />
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
          className="relative bg-surface border border-card-border rounded-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.10)_0,transparent_60%)] rounded-2xl pointer-events-none" />

          {/* Mobile portrait: stacked above content */}
          <div className="md:hidden relative h-52 overflow-hidden flex items-end justify-center" aria-hidden="true">
            <div className="absolute inset-x-8 top-4 bottom-0 bg-[radial-gradient(circle_at_50%_70%,rgba(0,229,255,0.22)_0%,rgba(124,92,255,0.10)_45%,transparent_70%)] pointer-events-none" />
            <Portrait
              key={`m-${current.id}`}
              photos={current.photoUrls}
              name={current.title}
              className="relative h-52 max-w-full animate-fade-in"
            />
          </div>

          {/* Desktop portrait: floating right side, anchored bottom, extending above top */}
          <div
            className="hidden md:flex absolute -top-12 bottom-0 right-4 lg:right-10 w-[320px] lg:w-[400px] items-end justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute inset-x-2 top-6 bottom-4 bg-[radial-gradient(circle_at_50%_60%,rgba(0,229,255,0.20)_0%,rgba(124,92,255,0.10)_45%,transparent_70%)]" />
            <Portrait
              key={`d-${current.id}`}
              photos={current.photoUrls}
              name={current.title}
              className="relative w-full h-full animate-fade-in"
            />
          </div>

          {/* Content */}
          <div
            key={current.id}
            className="relative p-6 md:p-12 md:pr-[360px] lg:pr-[440px] h-[26rem] flex flex-col gap-4 animate-fade-in overflow-hidden"
          >
            <span className="font-action text-xs md:text-sm tracking-[0.25em] uppercase text-accent">
              {getTopic(current)}
            </span>

            <Typography
              variant="h1"
              className={`line-clamp-2 ${current.title.length > 30 ? 'text-xl md:text-3xl' : 'text-3xl md:text-5xl'}`}
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

            <div className="pt-4 flex items-center justify-between gap-4 flex-wrap">
              <a
                href={current.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Inscrever-se</Button>
              </a>

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

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Palestrante anterior"
                  className="w-10 h-10 rounded-full border border-card-border text-text-primary hover:border-accent hover:text-accent transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent"
                >
                  <span aria-hidden="true">&larr;</span>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próximo palestrante"
                  className="w-10 h-10 rounded-full border border-card-border text-text-primary hover:border-accent hover:text-accent transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent"
                >
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};