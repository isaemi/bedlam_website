
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiTarget, FiZap, FiShield, FiUsers } from 'react-icons/fi';

const gameplayFeatures = [
  { icon: FiTarget, title: "STRATEGIC COMBAT", description: "Lead a floating city-state with unique cultural traits. Each people brings different strengths and challenges to your survival strategy" },
  { icon: FiUsers, title: "DYNAMIC ALLIANCES", description: "Navigate the treacherous waters of diplomacy at the Redaz council. Form allicances, broker deals, or eliminate rivals through cunning and espionage." },
  { icon: FiZap, title: "HIGH-RISK DECISIONS", description: "Interface with forbidden Isarian technology for miraculous rewards-but risk triggering the catastrophic Pralay that ends civilizations." },
  { icon: FiShield, title: "TERRITORY CONTROL", description: "Manage resources, weather disasters, and face random events that threaten your people. Every choice determines who lives and who drowns." }
];


interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="p-6 border-2 border-amber-500/50 bg-black/30 backdrop-blur-md flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        borderColor: '#ffb300',
        boxShadow: '0 0 20px #ffb300, inset 0 0 10px #ffb300'
      }}
    >
      <Icon className="w-16 h-16 mb-4 text-amber-400 text-glow-amber" />
      <h3 className="text-xl font-display uppercase tracking-widest text-glow-amber mb-2">{title}</h3>
      <p className="text-gray-400 text-lg">{description}</p>
    </motion.div>
  );
};

const GameplaySection = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div ref={targetRef} className="py-24 md:py-32 relative overflow-hidden">
        <motion.div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ 
                backgroundImage: `url('/public/image/mechanics.png')`, 
                filter: 'grayscale(1) brightness(0.2)',
                y: y
            }}
        />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
            className="text-4xl md:text-6xl font-display text-center uppercase text-glow-amber tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
        >
            Core Mechanics
        </motion.h2>
        <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="w-[80%] text-center mx-auto rounded-lg p-12 text-left text-gray-400"
              >
                <p className="font-mono text-lg md:text-2xl leading-relaxed">
                 Every decision matters when humanity teeters on the edge of extinction. Combine tactical combat with political maneuvering in th is turn-based strategy experience. The drive to live. To keep at it.
                </p>
              </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {gameplayFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameplaySection;