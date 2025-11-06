
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GameplaySection from '../components/GameplaySection';
import GallerySection from '../components/GallerySection';
import CreditsSection from '../components/CreditsSection';
import SoundToggle from '../components/SoundToggle';

interface HomePageProps {
  onEnter: () => void;
  soundOn: boolean;
  toggleSound: () => void;
  isInteracted: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ onEnter, soundOn, toggleSound, isInteracted }) => {
  return (
    <div className="bg-black text-white min-h-screen scroll-container">
      <Navbar />
      {isInteracted && <SoundToggle soundOn={soundOn} toggleSound={toggleSound} />}
      <main>
        <HeroSection onEnter={onEnter} />
        <div id="about" className="relative">
          <AboutSection />
        </div>
        <div id="gameplay" className="relative">
          <GameplaySection />
        </div>
        <div id="gallery" className="relative">
          <GallerySection />
        </div>
        <div id="credits" className="relative">
          <CreditsSection />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
