import type { FC } from 'react';
import { mockSponsors } from '../../data/mock';
import { Typography } from '../ui/Typography';

export const SponsorsSection: FC = () => {
  const marqueeItems = [...mockSponsors, ...mockSponsors, ...mockSponsors];

  return (
    <section id="patrocinadores" className="py-12 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Typography variant="small" className="text-center tracking-widest uppercase font-semibold opacity-60">
          Quem faz acontecer
        </Typography>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee gap-16 px-8 items-center opacity-100 transition-opacity duration-500" aria-hidden="true">
          {marqueeItems.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.logoUrl}
              alt={sponsor.altText}
              className="h-20 w-32 object-contain transition-all brightness-0 invert opacity-100"
            />
          ))}
        </div>

        <div className="sr-only">
          <ul>
            {mockSponsors.map(sponsor => (
              <li key={sponsor.id}>{sponsor.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};