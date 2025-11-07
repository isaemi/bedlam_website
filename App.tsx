
import React, { useState, useRef, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import LogPage from './pages/LogPage';
import PlayPage from './pages/PlayPage';
import RulePage from './pages/RulePage';
import CursorGlow from './components/CursorGlow';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black z-[1000] pointer-events-none"
            initial={{ height: "100%" }}
            animate={{ height: "0%", transition: { duration: 0.5, ease: "easeInOut" } }}
            exit={{ height: "100%", transition: { duration: 0.5, ease: "easeInOut" } }}
            style={{bottom: 0}}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};


function App() {
  const [soundOn, setSoundOn] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = document.getElementById('bgm') as HTMLAudioElement;
    audioRef.current = audioElement;
  }, []);

  const handleEnter = () => {
    setIsInteracted(true);
    setSoundOn(true);
    if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
    }
  };

  const toggleSound = () => {
    setSoundOn(prev => {
      const isNowOn = !prev;
      if (audioRef.current) {
        if (isNowOn) {
          audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
        } else {
          audioRef.current.pause();
        }
      }
      return isNowOn;
    });
  };

  return (
    <>
      <div className="static-overlay" />
      <CursorGlow />
      <HashRouter>
          <Routes>
              <Route path="/" element={
                  <PageTransition>
                      <HomePage onEnter={handleEnter} soundOn={soundOn} toggleSound={toggleSound} isInteracted={isInteracted} />
                  </PageTransition>
              } />
              <Route path="/log" element={
                <PageTransition>
                  <LogPage />
                </PageTransition>
              } />
              <Route path="/rulebook" element={
                <PageTransition>
                  <RulePage />
                </PageTransition>
              } />
              <Route path="/play" element={
                  <PageTransition>
                      <PlayPage />
                  </PageTransition>
              } />
          </Routes>
      </HashRouter>
    </>
  );
}

export default App;