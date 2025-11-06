
import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  '/public/image/main.png',
  '/public/image/main.png',
  '/public/image/main.png',
  '/public/image/main.png',
  '/public/image/main.png',
  '/public/image/main.png',
  '/public/image/main.png',
  '/public/image/main.png',
];

interface GalleryImageProps {
  src: string;
  index: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden group border-2 border-magenta-500/0 transition-all duration-300"
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
        alt={`BEDLAM gallery image ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ filter: 'saturate(1.2) contrast(1.1) brightness(0.8)' }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
    </motion.div>
  );
};

const GallerySection = () => {
  return (
    <div className="py-24 md:py-32 relative bg-black">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%2300ffff%22%20fill-opacity%3D%220.3%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2 
            className="text-4xl md:text-6xl font-display text-center uppercase text-glow-magenta mb-16 tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
        >
            Game Gallery
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((src, index) => (
            <GalleryImage key={index} src={src} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;