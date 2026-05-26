import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { EventsSection } from './components/sections/EventsSection';
import { HeroSection } from './components/sections/HeroSection';
import { SpeakerCarousel } from './components/sections/SpeakerCarousel';
import { SponsorsSection } from './components/sections/SponsorsSection';

export default function App() {
  const [focusedSpeakerId, setFocusedSpeakerId] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <EventsSection onSpeakerFocus={setFocusedSpeakerId} />
        <SpeakerCarousel activeSpeakerId={focusedSpeakerId} />
        <SponsorsSection />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}