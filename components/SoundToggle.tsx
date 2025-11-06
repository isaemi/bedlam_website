
import React from 'react';
import { motion } from 'framer-motion';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

interface SoundToggleProps {
  soundOn: boolean;
  toggleSound: () => void;
}

const SoundToggle: React.FC<SoundToggleProps> = ({ soundOn, toggleSound }) => {
  return (
    <motion.button
      onClick={toggleSound}
      className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 text-cyan-400 p-3 rounded-full border-2 border-cyan-400 bg-black/50 backdrop-blur-sm"
      whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 10px #00ffff)' }}
      whileTap={{ scale: 0.9 }}
      aria-label={soundOn ? 'Mute sound' : 'Unmute sound'}
    >
      {soundOn ? <FiVolume2 size={24} /> : <FiVolumeX size={24} />}
    </motion.button>
  );
};

export default SoundToggle;
