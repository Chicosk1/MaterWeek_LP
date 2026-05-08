import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { EventsSection } from './components/sections/EventsSection';
import { HeroSection } from './components/sections/HeroSection';
import { SponsorsSection } from './components/sections/SponsorsSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <EventsSection />
        <SponsorsSection />
      </main>

      <Footer />
    </div>
  );
}