import type { FC } from 'react';
import { mockEvents } from '../../data/mock';
import { Button } from '../ui/Button';
import { CardBase } from '../ui/CardBase';
import { Typography } from '../ui/Typography';

import calendarioIcon from '../../assets/calendario.svg';
import pinoMapaIcon from '../../assets/pino_mapa.svg';

export const EventsSection: FC = () => {
  return (
    <section id="eventos" className="px-6 py-12 flex flex-col gap-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-10 text-center md:text-left">
          <Typography variant="h2" className="mb-2">Próximos Eventos</Typography>
          <Typography variant="body">Explore as trilhas de conhecimento e palestras confirmadas.</Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <CardBase key={event.id}>
              <div className="mb-4 h-7 flex justify-start">
                {event.iconUrl && <img src={event.iconUrl} alt="" aria-hidden="true" className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />}
              </div>

              <div className="flex flex-col gap-2.5 text-sm font-body text-text-secondary mt-1 mb-2">
                <div className="flex items-center gap-2">
                  <img src={calendarioIcon} alt="" aria-hidden="true" className="w-4 h-4 opacity-70 shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-start gap-2">
                  <img src={pinoMapaIcon} alt="" aria-hidden="true" className="w-4 h-4 opacity-70 shrink-0 mt-0.5" />
                  <span className="leading-tight">{event.location}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Typography variant="h3">{event.title}</Typography>
                <Typography variant="small">{event.description}</Typography>
              </div>

              <div className="mt-auto pt-2 flex justify-start">
                <a 
                  href={event.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block"
                >
                  <Button variant="ghost" aria-label={`Saiba mais sobre a palestra de ${event.title}`}>
                    Saiba mais <span aria-hidden="true">&rarr;</span>
                  </Button>
                </a>
              </div>
            </CardBase>
          ))}
        </div>
      </div>
    </section>
  );
};