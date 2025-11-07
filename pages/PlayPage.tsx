import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeftCircle } from 'react-icons/fi';

const GlitchText = ({ text }: { text: string }) => {
  return (
    <motion.div
      key={text}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="relative font-display text-2xl md:text-4xl text-center text-glow-cyan uppercase tracking-widest"
    >
      {text.split("").map((char, i) => (
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

const VideoPage = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-start p-4 py-20 overflow-y-auto relative">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-cyan opacity-10 pointer-events-none"></div>

      {/* Back button */}
      <Link
        to="/"
        className="absolute bottom-5 left-5 md:bottom-10 md:left-10 text-cyan-400 hover:text-white transition-all duration-300 z-10"
      >
        <motion.div
          whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 10px #00ffff)" }}
          className="flex items-center gap-2 text-glow-cyan"
        >
          <FiArrowLeftCircle size={32} />
          <span className="hidden md:inline">Return to Main Site</span>
        </motion.div>
      </Link>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key="video"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } }}
          exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 0.5 } }}
          className="flex flex-col items-center gap-10 max-w-5xl w-full"
        >

          {/* Title */}
          <GlitchText text="Bedlam Trailer" />

          {/* Video player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            className="w-full aspect-video rounded-lg overflow-hidden border border-cyan-400/40 shadow-lg"
          >
            {/* Replace the src URL below with your actual video link */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              title="Bedlam Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

        </motion.div>
      </AnimatePresence>

    </div>
  );
};

export default VideoPage;
