
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeftCircle } from 'react-icons/fi';

const gameSteps = [
  { id: 'start', text: 'System booting...', button: 'PRESS START' },
  { id: 'choice1', text: 'A patrol drone buzzes overhead. The alley is dark.', choices: ['Hide in the dumpster', 'Make a run for it'] },
  { id: 'result1_1', text: 'The drone passes. You are safe... for now. System unstable.', button: 'Continue' },
  { id: 'result1_2', text: 'Spotted. Las-fire scorches the wall behind you. Supplies lost.', button: 'Continue' },
  { id: 'choice2', text: 'You find a datapad. The screen flickers.', choices: ['Hack it for credits', 'Leave it. It\'s a trap.'] },
  { id: 'result2_1', text: '...Access Granted... +10 Credits. A silent alarm trips.', button: 'End Transmission' },
  { id: 'result2_2', text: 'Wise choice. The datapad emits a high-frequency pulse. You move on.', button: 'End Transmission' },
  { id: 'end', text: 'Connection lost... Return to safety.', button: 'Return to Main Site' }
];

const GlitchText = ({ text }: { text: string }) => {
    return (
      <motion.div
        key={text}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="relative font-display text-2xl md:text-4xl text-center text-glow-cyan uppercase tracking-widest"
      >
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.05, delay: i * 0.02 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
};

const PlayPage = () => {
  const [gameState, setGameState] = useState('start');
  const [feedback, setFeedback] = useState('');

  const currentStep = gameSteps.find(s => s.id === gameState);

  const handleChoice = (resultId: string) => {
    if (resultId.includes('1_1')) setGameState('choice2');
    else if (resultId.includes('1_2')) setGameState('choice2');
    else if (resultId.includes('2_1')) setGameState('end');
    else if (resultId.includes('2_2')) setGameState('end');
    else setGameState(resultId);
  };
  
  const handleButtonClick = () => {
    switch(gameState) {
      case 'start': setGameState('choice1'); break;
      case 'result1_1': setGameState('choice2'); break;
      case 'result1_2': setGameState('choice2'); break;
      case 'result2_1': setGameState('end'); break;
      case 'result2_2': setGameState('end'); break;
      default: break;
    }
  }

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-cyan opacity-10"></div>
      
      <Link to="/" className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-cyan-400 hover:text-white transition-all duration-300 z-10">
        <motion.div
          whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 10px #00ffff)' }}
          className="flex items-center gap-2 text-glow-cyan"
        >
          <FiArrowLeftCircle size={32} />
          <span className="hidden md:inline">Return to Main Site</span>
        </motion.div>
      </Link>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={gameState}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } }}
          exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.5 } }}
          className="flex flex-col items-center justify-center gap-12"
        >
          {currentStep && <GlitchText text={currentStep.text} />}
          
          <div className="flex flex-col md:flex-row gap-4">
            {currentStep?.choices?.map((choice, i) => (
              <motion.button
                key={choice}
                onClick={() => handleChoice(`result${gameState.charAt(gameState.length-1)}_${i+1}`)}
                className="font-display uppercase text-lg px-8 py-3 border-2 border-magenta-500 text-magenta-500 bg-black/50 backdrop-blur-sm tracking-widest text-glow-magenta hover:bg-magenta-500 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {choice}
              </motion.button>
            ))}
          </div>

          {currentStep?.button && gameState !== 'end' && (
             <motion.button
                onClick={handleButtonClick}
                className="font-display uppercase text-xl px-12 py-4 border-2 border-cyan-400 text-cyan-400 bg-black/50 backdrop-blur-sm tracking-widest text-glow-cyan hover:bg-cyan-400 hover:text-black transition-all duration-300 deep-flicker"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentStep.button}
              </motion.button>
          )}

          {gameState === 'end' && (
            <Link to="/">
                <motion.button
                    className="font-display uppercase text-xl px-12 py-4 border-2 border-amber-500 text-amber-500 bg-black/50 backdrop-blur-sm tracking-widest text-glow-amber hover:bg-amber-500 hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {currentStep.button}
                </motion.button>
            </Link>
          )}
        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default PlayPage;
