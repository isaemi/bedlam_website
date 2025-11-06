import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Cards', id: 'gameplay' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Logs', id: 'logs'},
  { name: 'Mechanics', id: 'mechanics'},
  { name: 'Contributions', id: 'credits' },
  { name: 'Rules', id: '/rule'},
  { name: 'Video', link: '/play' }
];

interface NavLinkProps {
  id?: string;
  name: string;
  link?: string;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ id, name, link, onClick }) => {
  if (link) {
    return (
      <RouterLink
        to={link}
        className="relative group text-cyan-400 hover:text-white whitespace-nowrap text-glow-cyan text-lg uppercase tracking-wider"
        onClick={onClick}
      >
        {name}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-magenta-500 transition-all duration-300 group-hover:w-full"></span>
      </RouterLink>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id!)?.scrollIntoView({ behavior: 'smooth' });
    onClick();
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className="relative group text-cyan-400 hover:text-white whitespace-nowrap text-glow-cyan text-lg uppercase tracking-wider"
    >
      {name}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-magenta-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="text-2xl font-display uppercase tracking-widest text-glow-cyan deep-flicker">
            
            <a
              href="#hero"
              onClick={(e) => { 
                e.preventDefault(); 
                document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'}) 
              }}
            >
              <img
                src="/public/image/logo.png"
                className="hidden md:block h-10"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <NavLink 
                key={item.name} 
                {...item} 
                onClick={() => {}} 
              />
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
                  className="fixed top-5 right-5 text-cyan-400 border-2 border-cyan-400 rounded-full 
           w-10 h-10 flex items-center justify-center text-2xl z-[200]"

            >
              {isOpen ? 'X' : '≡'}
            </button>
          </div>

        </div>
      </nav>

      <AnimatePresence>
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 z-[100] flex flex-col items-center justify-center space-y-8"
          >
            <div className="text-4xl font-display uppercase tracking-widest text-glow-cyan deep-flicker"> BEDRAM </div>
            {navItems.map(item => (
              <NavLink 
                key={item.name} 
                {...item} 
                onClick={() => setIsOpen(false)} 
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;
