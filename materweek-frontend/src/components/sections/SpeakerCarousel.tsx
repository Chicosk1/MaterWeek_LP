import { useEffect, useState, type FC } from 'react';
import { mockEvents } from '../../data/mock';
import type { EventItem } from '../../types';
import { Typography } from '../ui/Typography';

import calendarioIcon from '../../assets/calendario.svg';
import pinoMapaIcon from '../../assets/pino_mapa.svg';

const AUTO_PLAY_MS = 6000;
const HEX_CLIP = 'polygon(25% 4%, 75% 4%, 99% 50%, 75% 96%, 25% 96%, 1% 50%)';

function getTopic(event: EventItem): string {
  if (event.topic) return event.topic.toUpperCase();
  const match = event.description.match(/^(Palestra|Talk|Workshop|Dinâmica)/i);
  return match ? match[1].toUpperCase() : 'PALESTRANTE CONVIDADO';
}

function getTalkBody(event: EventItem): string {
  const match = event.description.match(/^(?:Palestra|Talk|Workshop|Dinâmica)\s*[:\-–]\s*(.*)$/i);
  return match ? match[1] : event.description;
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

export const SpeakerCarousel: FC = () => {
  const speakers = [...mockEvents].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const total = speakers.length;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    <section id="palestrantes" className="px-6 py-16 scroll-mt-20">
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

          {/* Floating speaker portrait */}
          <div
            aria-hidden="true"
            className="absolute z-10 right-4 -top-6 w-28 h-32 sm:w-36 sm:h-40 md:right-10 md:-top-10 md:w-56 md:h-64 lg:w-64 lg:h-72 drop-shadow-[0_0_30px_rgba(0,229,255,0.25)]"
          >
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-[linear-gradient(135deg,#00E5FF_0%,#7C5CFF_60%,#FF4DD2_100%)]"
                style={{ clipPath: HEX_CLIP }}
              />
              <div
                className="absolute inset-[3px] bg-background"
                style={{ clipPath: HEX_CLIP }}
              />
              {current.photoUrl ? (
                <img
                  src={current.photoUrl}
                  alt=""
                  className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover"
                  style={{ clipPath: HEX_CLIP }}
                />
              ) : (
                <div
                  className="absolute inset-[6px] flex items-center justify-center bg-surface text-text-primary/80 font-heading font-bold text-2xl md:text-4xl"
                  style={{ clipPath: HEX_CLIP }}
                >
                  {getInitials(current.title)}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div
            key={current.id}
            className="relative p-6 pt-28 pr-6 md:p-12 md:pr-72 lg:pr-80 min-h-[22rem] flex flex-col gap-4 animate-fade-in"
          >
            <span className="font-action text-xs md:text-sm tracking-[0.25em] uppercase text-accent">
              {getTopic(current)}
            </span>

            <Typography variant="h1" className="text-3xl md:text-5xl">
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

            <Typography variant="body" className="max-w-2xl">
              {getTalkBody(current)}
            </Typography>

            <div className="mt-auto pt-8 flex items-center justify-between gap-4 flex-wrap">
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
