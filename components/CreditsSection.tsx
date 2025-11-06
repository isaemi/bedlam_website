
import React from 'react';
import { motion } from 'framer-motion';

const CreditsSection = () => {
  return (
    <footer className="py-20 md:py-24 text-center text-gray-400 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-1/4 bg-cyan-400/50"
          style={{
              animation: `pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              boxShadow: '0 0 15px #00ffff'
          }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl md:text-2xl font-display uppercase tracking-widest text-glow-cyan mb-4">
          A creation by
        </h3>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-3xl md:text-4xl font-bold uppercase tracking-wider text-white hover:text-amber-400 transition-colors duration-300 hover:text-glow-amber"
        >
          Overdue Works
        </a>
        <p className="text-sm mt-8 opacity-50">
          BEDLAM and all associated assets © {new Date().getFullYear()} Overdue Works. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default CreditsSection;
