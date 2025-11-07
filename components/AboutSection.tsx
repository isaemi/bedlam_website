import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.p
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

const AboutSection = () => {
  const text =
    "A thousand years after the collapse, Earth is no longer the same. Now called Bedlam, ninety five percent of the planet is covered by saltwater and storms that never end. People survive on floating cities called chukwa, built long ago by hands no one remembers. At the center of this world stands Babel, a massive alien tower that reaches up into the sky and down into the deep sea. You are the Amid, the leader of a fishermen chukwa, trying to guide your people through the next Pralay.";

  return (
    <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center">

      {/* Title */}
      <AnimatedText
        text="The World of Bedlam"
        className="font-display mt-10 text-2xl md:text-6xl uppercase text-glow-cyan mb-8 tracking-widest"
      />

      {/* Story Text */}
      <motion.div
        className="max-w-4xl mt-10 text-center text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {text.split(' ').map((word, index) => (
          <motion.span key={index} variants={charVariants} className="inline-block mr-1.5">
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '60%' }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-[2px] mt-10 bg-gradient-to-r from-transparent via-magenta-500 to-transparent"
      >
        <div className="w-full h-full bg-magenta-500 opacity-50 filter blur-sm deep-flicker"></div>
      </motion.div>

      {/* 4 FEATURE BOXES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-5 w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6"
      >

        {/* FEATURE 1 */}
        <div className="border-2 border-gray-700 rounded-lg p-8 text-gray-400 bg-black/30 backdrop-blur-sm">
          <p className="text-lg leading-relaxed">
            A survival strategy game where you lead a chukwa through storms, raids, and politics. Your goal is simple. Keep your people alive.
          </p>
        </div>

        {/* FEATURE 2 */}
        <div className="border-2 border-gray-700 rounded-lg p-8 text-gray-400 bg-black/30 backdrop-blur-sm">
          <p className="text-lg leading-relaxed">
            Hope is rare in Bedlam. Every turn forces a choice. Trust or betray. Risk or retreat. No path is safe and no plan lasts long.
          </p>
        </div>

        {/* FEATURE 3 */}
        <div className="border-2 border-gray-700 rounded-lg p-8 text-gray-400 bg-black/30 backdrop-blur-sm">
          <p className="text-lg leading-relaxed">
            Take actions, explore ruins, trade, negotiate, or fight other players. Use your rakyat traits to your advantage. Time your moves to survive the next Pralay.
          </p>
        </div>

        {/* FEATURE 4 */}
        <div className="border-2 border-gray-700 rounded-lg p-8 text-gray-400 bg-black/30 backdrop-blur-sm">
          <p className="text-lg leading-relaxed">
            Every session plays out differently. Random events, council meetings, raids, and Kiseki rolls keep the world unstable and full of tension.
          </p>
        </div>

      </motion.div>

    </div>
  );
};

export default AboutSection;
