
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiTarget, FiZap, FiShield, FiUsers } from 'react-icons/fi';

const gameplayFeatures = [
  { icon: FiTarget, title: "STRATEGIC COMBAT", description: "Lead a floating city-state with unique cultural traits. Each people brings different strengths and challenges to your survival strategy" },
  { icon: FiUsers, title: "DYNAMIC ALLIANCES", description: "Navigate the treacherous waters of diplomacy at the Redaz council. Form allicances, broker deals, or eliminate rivals through cunning and espionage." },
  { icon: FiZap, title: "HIGH-RISK DECISIONS", description: "Interface with forbidden Isarian technology for miraculous rewards-but risk triggering the catastrophic Pralay that ends civilizations." },

];


const FeatureCard = ({ icon: Icon, title, description, index }) => {
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
      <h3 className="text-3xl font-display uppercase tracking-widest text-glow-amber mb-6">{title}</h3>
      <p className="w-[80%] font-bold text-gray-400 text-lg">{description}</p>
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
    <div ref={targetRef} className="py-24  relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/image/banner.png')`,
          filter: 'grayscale(100%) brightness(0.8)',
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
          className="text-center mx-auto rounded-lg p-12 text-gray-400"
        >
          <p className="text-lg md:text-2xl leading-relaxed">
            Every single decision makes all the difference as humanity tap-dances on the very edge of extinction. You feel it: the primal, almost sacred, animalistic drive to live. To keep at it, with every last remaining ounce of willpower left in your body.
            <br></br>
            Combine tactical combat (inspired by the likes of Warhammer 40K, Magic: The Gathering, and Dungeons & Dragons) with political maneuvering (inspired by Dune, Diplomacy and Coup) in this turn-based strategy experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameplayFeatures.map((feature, index) => (
            <FeatureCard {...feature} index={index} />
          ))}

        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto rounded-lg p-12 text-center text-gray-400 text-lg md:text-2xl leading-relaxed"
        >
          <h3 className="text-3xl text-amber-400 font-display tracking-widest text-glow-amber mb-2">WHAT</h3>
          <p> Bedlam is a strategy board game set in a post-apocalyptic oceanic world where humanity survives on floating cities called chukwari. Each player, as a leader must guide their people through scarcity, conflict and drastic change. The goal is to outlast the apocalypse known as the Pralay by managing resources, alliances and faith, ultimately determining who will rebuild the world when everything else is lost.          </p>
          <h3 className="text-3xl text-amber-400 font-display tracking-widest text-glow-amber mb-2">HOW</h3>
          <p> Players progress through cycles of play called alphas by taking strategic actions such as exploring for salvage, trading with the Spire, forming alliances or waging raids against rival chukwari. They draw and manage cards that represent resources, events, miracles and diplomacy, while dice rolls introduce the element of fate and uncertainty. Every decision influences survival, stability and influence, which all leads to a Pralay phase which is.a climactic test of preparation and endurance where only the strongest  leaders ascends to rebuild the next age of Bedlam.          </p>
          <h3 className="text-3xl text-amber-400 font-display tracking-widest text-glow-amber mb-2">WHY</h3>
          <p> Bedlam reflects the cycle of collapse and rebirth that defines both civilization and human nature. It challenges players to confront instability, make the right choices under pressure and find hope in the midst of decay. By enduring the Pralay and preserving fragments of the old world, players experience the central truth of Bedlam which is that survival is not just about resources or power but about who remembers, rebuilds and carries humanity forward.
          </p>
        </motion.div>
      </div>

    </div>

  );
};

export default GameplaySection;


