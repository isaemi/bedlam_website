

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cardData: Record<string, string[]> = {
  Kiseki: Array(8).fill('/image/main.png'),
  Expedition: Array(8).fill('/image/main.png'),
  Random: Array(8).fill('/image/main.png'),
  Resources: Array(8).fill('/image/main.png'),
  Weapons: Array(8).fill('/image/main.png'),
  Crackerjack: Array(8).fill('/image/main.png'),
  Redaz: Array(8).fill('/image/main.png'),
  Rakyat: Array(8).fill('/image/main.png'),
  Tokens: Array(8).fill('/image/main.png'),
  Dice: Array(8).fill('/image/main.png'),
  Boards: Array(8).fill('/image/main.png'),
};


/* [Saemi] Change it after add image files

// auto-generate card paths (card1.png ~ card88.png)
const generateCards = (start: number, count: number) => {
  return Array.from({ length: count }, (_, i) => `/image/card${start + i}.png`);
};

// 11 categories × 8 images each = 88 images total
const cardData: Record<string, string[]> = {
  Kiseki: generateCards(1, 8),
  Expedition: generateCards(9, 8),
  Random: generateCards(17, 8),
  Resources: generateCards(25, 8),
  Weapons: generateCards(33, 8),
  Crackerjack: generateCards(41, 8),
  Redaz: generateCards(49, 8),
  Rakyat: generateCards(57, 8),
  Tokens: generateCards(65, 8),
  Dice: generateCards(73, 8),
  Boards: generateCards(81, 8),
};*/

const categories = Object.keys(cardData);

interface CardImageProps {
  src: string;
  index: number;
}

const CardImage: React.FC<CardImageProps> = ({ src, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden group border-2 border-magenta-500/0 transition-all duration-10"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        borderColor: '#ff00aa',
        boxShadow: '0 0 25px #ff00aa'
      }}
    >
      <motion.img
        src={src}
        alt="card"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ filter: 'saturate(1.2) contrast(1.1) brightness(0.8)' }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
    </motion.div>
  );
};

const CardSection = () => {
  const [selected, setSelected] = useState('Kiseki');

  return (
    <div className="py-24 md:py-32 relative bg-black">
      
      <div className="absolute inset-0 opacity-30 bg-[url('/image/background3.png')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <motion.h2
          className="text-4xl md:text-6xl font-display text-center uppercase text-glow-magenta mb-10 tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Cards
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-1 rounded-full text-sm tracking-wide border transition-all ${
                selected === cat
                  ? 'border-pink-500 text-pink-400 shadow-[0_0_10px_#ff00aa]'
                  : 'border-gray-600 text-gray-300 opacity-70 hover:opacity-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cardData[selected].map((src, index) => (
            <CardImage key={index} src={src} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CardSection;
